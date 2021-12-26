import FS from "fs";
import Path from "path";
import Utility from "util";
import Module from "module";
import Process from "process";
import Assertion from "assert";
import {Argv} from "@cloud-vault/cli/arguments";

import {Subprocess} from "@cloud-vault/cli/utilities/subprocess";

const Remove = Utility.promisify(FS.rm);

/*** *Current Module Path* */
const File: string = import.meta.url.replace("file" + ":" + "//", "");

const Import: NodeRequire = Module.createRequire(File);

/*** *Current Working Directory* */
const CWD: string = Path.dirname(File);

/*** *Package Directory* */
const PKG = Path.resolve(CWD, "..", "..", "..", "..");

interface Package {
    Name: string;
    CWD: string;
    Base: string;
    Directory: string;
    Distribution: string;
    Package: string;
    Layer: boolean;
    Overwrites: object;
}

function* Packages(directory: string): Generator {
    /*** Exclusions to Avoid Recursive Parsing; i.e. libraries, lambda-layers, or otherwise bundled requirements */
    const Exclusions = [
        "library",
        "factory",
        "node_modules",

        ".git",
        ".idea",
        ".vscode"
    ];

    const Files = FS.readdirSync(directory, {withFileTypes: true});
    for (const file of Files) {
        if (!Exclusions.includes(file.name)) {
            if (file.isDirectory()) {
                yield* Packages(Path.join(directory, file.name));
            } else {
                yield Path.join(directory, file.name);
            }
        }
    }
}

function* Library(directory: string): Generator {
    /*** Exclusions to Avoid Recursive Parsing; i.e. libraries, lambda-layers, or otherwise bundled requirements */
    const Exclusions = [
        "factory",
        "node_modules",

        ".git",
        ".idea",
        ".vscode"
    ];

    const Inclusions = [
        "library"
    ];

    const Files = FS.readdirSync(directory, {withFileTypes: true});
    for (const file of Files) {
        if (!Exclusions.includes(file.name) && Inclusions.includes(file.name)) {
            if (file.isDirectory()) {
                yield* Packages(Path.join(directory, file.name));
            } else {
                yield Path.join(directory, file.name);
            }
        }
    }
}

/***
 * Recursive Copy Function
 * -----------------------
 * *Note* - this will perform *actual, real copies*; symbolic links are resolved to their raw pointer location(s).
 *
 * These are important considerations especially when building for reproducible distributions.
 *
 * @param source {String} original path
 * @param target {String} target copy destination
 *
 * @constructor
 *
 */

function Copy(source: string, target: string) {
    /*** Exclusions to Avoid Recursive Parsing; i.e. libraries, lambda-layers, or otherwise bundled requirements */
    const Exclusions = [
        ".git",
        ".idea",
        ".vscode"
    ];

    FS.mkdirSync(target, {recursive: true});
    FS.readdirSync(source).forEach((element) => {
        const Directory = FS.lstatSync(Path.join(source, element), {throwIfNoEntry: true}).isDirectory();
        const Socket = FS.lstatSync(Path.join(source, element), {throwIfNoEntry: true}).isSocket();

        if (!Directory && !Socket) {
            if (!Exclusions.includes(source)) {
                FS.copyFileSync(Path.join(source, element), Path.join(target, element));
            }
        } else if (!Socket) {
            if (!Exclusions.includes(source)) {
                Copy(Path.join(source, element), Path.join(target, element));
            }
        }
    });
}

/***
 * Layer Builder
 * -------------
 * @param source
 * @param target
 *
 * @constructor
 *
 */

function Layer(source: string, target: string) {
    /*** Exclusions to Avoid Recursive Parsing; i.e. libraries, lambda-layers, or otherwise bundled requirements */
    const Exclusions = [
        ".git",
        ".idea",
        ".vscode",
        ".DS_Store"
    ];

    FS.readdirSync(source).forEach((element) => {
        const Target = Path.join(source, element);
        const File = FS.lstatSync(Target, {throwIfNoEntry: true}).isFile();
        const Descriptor = Path.parse(Target);

        if (!Exclusions.includes(Descriptor.base)) {
            if (File && Descriptor.ext === ".js") {
                FS.copyFileSync(Path.format(Descriptor), Path.join(target, Descriptor.base));
            } else if (Descriptor.base === "package.json") {
                FS.copyFileSync(Path.format(Descriptor), Path.join(target, Descriptor.base));
            } else {
                (File) && FS.copyFileSync(Path.format(Descriptor), Path.join(target, Descriptor.base));
            }
        }
    });
}

/***
 * `package.json` Directory Locator
 * --------------------------------
 *
 * @param files
 *
 * @constructor
 *
 */

function Locate(files: string[] | any) {
    const Data: string[] = [];

    for (const file in files) {
        const Target = files[file];
        if (Target.includes("package.json")) {
            Data.push(Path.dirname(Target));
        }
    }

    return Data;
}

/***
 * Distribution Folder Structure Normalization
 * -------------------------------------------
 * Building a Layer via Shell or Bash:
 *
 *  ```bash
 *  #!/bin/bash --norc
 *
 *  set -eo pipefail
 *
 *  mkdir -p layer/nodejs
 *
 *  rm -r -f node_modules
 *  rm -r -f layer/nodejs/node_modules
 *
 *  npm install --production
 *
 *  mv node_modules layer/nodejs/node_modules
 *
 *  exit 0
 *  ```
 *
 * @param data
 *
 * @constructor
 *
 */

async function Distribution(data: Package[]) {
    for (const $ of data) {
        /// Old Working Directory := Current Working Directory
        const OWD = Process.cwd();

        /// Target Working Directory
        Process.chdir($.Directory);

        /// Current Working Directory
        const CWD = Process.cwd();

        /// Should Never Happen, but Technically is Possible
        Assertion.strictEqual($.Directory, CWD, "Process Directory Drift");

        /// Cleanse Directories if Applicable
        await Remove(Path.join($.Directory, "node_modules"), {recursive: true, force: true, maxRetries: 5});
        await Remove(Path.join($.Directory, "nodejs"), {recursive: true, force: true, maxRetries: 5});
        await Remove($.Distribution, {recursive: true, force: true, maxRetries: 5});

        /// Install only Production-based Lambda Dependencies
        await Subprocess("npm install --production", $.Directory);

        if ($.Layer === true) {
            /// Copy Layer Dependencies
            Copy(Path.join($.Directory, "node_modules"), Path.join($.Directory, "nodejs", "node_modules"));
            await Remove(Path.join($.Directory, "node_modules"), {recursive: true, force: true});

            FS.mkdirSync(Path.join($.Distribution, "nodejs"), { recursive: true });

            /// Copy the Layer File(s), Shallow (Node-JS Directory)
            Layer($.Directory, Path.join($.Distribution, "nodejs"));

            /// Copy Layer Folder into the Distribution Library
            Copy($.Directory, $.Distribution);
        } else if ($.Layer === false) {
            /// Copy Lambda Folder into the Distribution Library, Recursively
            Copy($.Directory, $.Distribution);
        }

        await Remove(Path.join($.Directory, "node_modules"), {recursive: true, force: true});

        /*** Establish a `factory.overwrites.json` File in the Distribution Directory if Available */
        ($.Overwrites && Object.keys($.Overwrites).length > 0) && FS.writeFileSync(
            Path.join($.Distribution, "factory.overwrites.json"),
            JSON.stringify($.Overwrites, null, 4)
        );

        Process.chdir(OWD);
    }
}

/*** CDFK Packaged Directory */
const CDFK = Path.join(PKG, "cdfk");

/// --> Runtime Assertion
Assertion.strictEqual(FS.existsSync(CDFK), true);

/*** Debug Console Utility String Generator */
const Input = (input: (string | number)[]) => "[Debug] CLI Input" + " " + "(" + input.toString().replace(",", ", ").toUpperCase() + ")";

/***
 * Command Configuration, Composition
 *
 * Acquires and configures settings specific to the module's {@link Command} Function-Constant.
 *
 * @param Arguments {Argv} CLI Input Arguments for Derivative Command
 *
 * @constructor
 *
 */

function Configuration(Arguments: Argv) {
    const Syntax = (command: string) => [command, "? [--debug] ? [--help]"].join(" ");

    Arguments.hide("version");
    Arguments.help("help", "Display Usage Guide").default("help", false);

    Arguments.option("debug", {type: "boolean"}).alias("debug", "d").default("debug", false);
    Arguments.describe("debug", "Enable Debug Logging");
}

/***
 * Module Entry-Point Command
 * ==========================
 *
 * @param $ {Argv} Commandline Arguments (Implicitly passed from cli.ts).
 *
 * @constructor
 *
 */

const Command = async ($: Argv) => {
    const Arguments: Argv = $;

    console.warn("[Warning] The Current Command is Under Development.");
    console.warn("... To view runtime debug logs, provide the \"--debug\" flag", "\n");

    Configuration(Arguments);

    if (FS.existsSync(Path.join(Process.cwd(), "distribution"))) {
        await Remove(Path.join(Process.cwd(), "distribution"), {recursive: true, force: true, maxRetries: 5});
    }

    Arguments.check(async ($) => {
        ($?.debug) && console.debug(Input($._), JSON.stringify($, null, 4), "\n");

        const packages = [...Packages(Process.cwd())];
        const library = [...Library(Process.cwd())];

        ($?.debug) && console.debug("[Debug] Runtime Location" + ":", import.meta.url, "\n");
        ($?.debug) && console.debug("[Debug] CWD" + ":", Process.cwd(), "\n");
        ($?.debug) && console.debug("[Debug] File Structure (Packages)" + ":", [...Packages(Process.cwd())], "\n");
        ($?.debug) && console.debug("[Debug] File Structure (Library)" + ":", [...Library(Process.cwd())], "\n");

        const Factory = Import(Path.join(Process.cwd(), "factory.json"));

        ($?.debug) && console.debug("[Debug] Factory Definition (factory.json)" + ":", Factory, "\n");

        /*** Recursively Searched Folder(s) w/package.json Files, Excluding Library */
        const Resources = Locate(packages);

        ($?.debug) && console.debug("[Debug] Target Package(s) (Resources)" + ":", Resources, "\n");

        const Share = Locate(library);

        ($?.debug) && console.debug("[Debug] Target Library (Shared Resources)" + ":", Share, "\n");

        const Data: {
            Name: string;
            CWD: string;
            Directory: string;
            Base: string;
            Distribution: string;
            Package: string;
            Layer: boolean;
            Overwrites: object;
        }[] = [];

        for (const Target of Resources) {
            /// Import the package.json File as an Object via Node-Require Import
            const Package = Import(Path.join(Target, "package.json"));

            /// Scan package.json for its Package-Name -- Stripping the Organization if applicable
            const Expression = RegExp("(@.*/)?(.*)", "i");
            const Name = Expression.exec(Package.name)?.pop() || "";

            const Definition = {
                Name,
                CWD: Process.cwd(),
                Directory: Target,
                Base: Path.basename(Target),
                Distribution: Path.join(Process.cwd(), "distribution", Path.basename(Target)),
                Package: Path.join(Target, "package.json"),
                Layer: false,
                Overwrites: {}
            };

            const Local = {
                Inline: Package?.factory || null,                           /// Priority 3 (Lowest)
                Factory: Path.join(Target, "factory.json"),                 /// Priority 2
                Overwrite: Path.join(Target, "factory.overwrites.json"),    /// Priority 1 (Highest)
            };

            /*** Inline Configuration `factory.json` */
            if (Local.Inline !== null) {
                console.log("[Debug] Overwrite Target Found (Local.Inline) ...", "\n");
                Definition.Overwrites = {
                    ...Local.Inline,
                    ...Definition.Overwrites
                }
            }

            /*** Local Configuration `factory.json` */
            if (FS.existsSync(Local.Factory)) {
                console.log("[Debug] Overwrite Target Found (Local.Factory) ...", "\n");

                Definition.Overwrites = {
                    ...Import(Local.Factory),
                    ...Definition.Overwrites,
                }
            }

            /*** Local Configuration `factory.overwrites.json` */
            if (FS.existsSync(Local.Overwrite)) {
                console.log("[Debug] Overwrite Target Found (Local.Overwrite) ...", "\n");

                Definition.Overwrites = {
                    ...Import(Local.Overwrite),
                    ...Definition.Overwrites
                }
            }

            Data.push(Definition);
        }

        for (const Target of Share) {
            /// Import the package.json File as an Object via Node-Require Import
            const Package = Import(Path.join(Target, "package.json"));

            /// Scan package.json for its Package-Name -- Stripping the Organization if applicable
            const Expression = RegExp("(@.*/)?(.*)", "i");
            const Name = Expression.exec(Package.name)?.pop() || "";

            const Definition = {
                Name,
                CWD: Process.cwd(),
                Directory: Target,
                Base: Path.basename(Target),
                Distribution: Path.join(Process.cwd(), "distribution", "library", Path.basename(Target)),
                Package: Path.join(Target, "package.json"),
                Layer: true,
                Overwrites: {}
            };

            const Local = {
                Inline: Package?.factory || null,                           /// Priority 3 (Lowest)
                Factory: Path.join(Target, "factory.json"),                 /// Priority 2
                Overwrite: Path.join(Target, "factory.overwrites.json"),    /// Priority 1 (Highest)
            };

            /*** Inline Configuration `factory.json` */
            if (Local.Inline !== null) {
                console.log("[Debug] Overwrite Target Found (Local.Inline) ...", "\n");
                Definition.Overwrites = {
                    ...Local.Inline,
                    ...Definition.Overwrites
                }
            }

            /*** Local Configuration `factory.json` */
            if (FS.existsSync(Local.Factory)) {
                console.log("[Debug] Overwrite Target Found (Local.Factory) ...", "\n");

                Definition.Overwrites = {
                    ...Import(Local.Factory),
                    ...Definition.Overwrites,
                }
            }

            /*** Local Configuration `factory.overwrites.json` */
            if (FS.existsSync(Local.Overwrite)) {
                console.log("[Debug] Overwrite Target Found (Local.Overwrite) ...", "\n");

                Definition.Overwrites = {
                    ...Import(Local.Overwrite),
                    ...Definition.Overwrites
                }
            }

            Data.push(Definition);
        }

        ($?.debug) && console.debug("[Debug] Distribution + Package Data" + ":", Data, "\n");
        ($?.debug) && console.debug("[Debug] Compiling Distribution(s) ...");

        await Distribution(Data);

        ($?.debug) && console.debug("\n" + "[Debug] Cleaning Layers ...", "\n");

        for (const item of Data.filter(($) => $.Layer)) {
            await Remove(Path.join(item.Directory, "nodejs"), { recursive: true });
        }

        ($?.debug) && console.debug("[Debug] Initialization Complete", "\n");

        return true;
    }).strict();
};

export {Command as Initialize};

export default {Command};