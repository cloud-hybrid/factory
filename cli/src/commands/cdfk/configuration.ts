import FS, {Dirent} from "fs";
import Path from "path";
import Module from "module";
import Process from "process";
import Assertion from "assert";

/*** *Current Module Path* */
const File: string = import.meta.url.replace("file" + ":" + "//", "");

/*** *Current Working Directory* */
const CWD: string = Path.dirname(File);

/*** *Package Directory* */
const PKG: string = Path.dirname(CWD);

/***
 *  JSON Capable Importer
 *
 *  @type {NodeRequire}
 *
 */

const Import = Module.createRequire(PKG);

import {Argv} from "@cloud-vault/cli/arguments";

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

    Arguments.example("Global", Syntax("npx cli factory configuration"));
    Arguments.example("Node", Syntax("node cli factory configuration"));
    Arguments.example("NPM", Syntax("npm run cli -- factory configuration"));

    Arguments.usage([
        "Usage" + ":",
        "  >>> npm run cli -- factory configuration",
        "  >>> npm run cli -- factory configuration --help",
        "  >>> npm run cli -- factory configuration --debug"
    ].join("\n"));
}


/***
 * File System Path Resolution Factory
 *
 * @param file {FS.Dirent}
 * @param directory {string | FS.PathLike}
 *
 * @constructor
 *
 */

function Mapper(file: FS.Dirent, directory: string) {
    return {
        Name: file.name,
        System: Path.join(directory, file.name),
        Directory: {
            System: Path.resolve(directory),
            Name: Path.basename(directory)
        }
    };
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

    Configuration(Arguments);

    Arguments.check(($) => {
        ($?.debug) && console.debug(Input($._), JSON.stringify($, null, 4), "\n");

        ($?.debug) && console.debug("[Debug] User CWD" + ":", Process.cwd(), "\n");
        ($?.debug) && console.debug("[Debug] Relative Runtime Path(s)" + ":", JSON.stringify({
            Paths: {
                Runtime: File,
                Directory: CWD
            }
        }, null, 4), "\n");

        const Directory = Path.resolve(Process.cwd());
        const Target = Path.join(Directory, "settings.json");

        /// FS.statSync(Directory, {throwIfNoEntry: false});

        /// const Directories = FS.readdirSync(Directory, {withFileTypes: true}).filter(($) => $.isDirectory()).map(($) => $.name);
        const Files = {
            /*** Abstract File Information Type */
            $: FS.readdirSync(Directory, {withFileTypes: true}).filter(($) => $.isFile()).map(($) => Mapper($, Directory)),
            /*** List of Simple File-Names */
            List: FS.readdirSync(Directory, {withFileTypes: true}).filter(($) => $.isFile()).map(($) => $.name),
            /*** Full System Path(s) to User's Current Working Directory's File(s) */
            Paths: FS.readdirSync(Directory, {withFileTypes: true}).filter(($) => $.isFile()).map(($) => Path.join(Directory, $.name))
        };

        /*** Trigger Configuration Prompt(s) if settings.json isn't found relative to User's current-working-directory */
        const Trigger = (!Files.Paths.includes(Target));

        ($?.debug) && console.debug("[Debug] Configuration Prompt(s) Trigger" + ":", Trigger, "\n");

        return true;
    }).strict();
};

export {Command as Configuration};

export default {Command};