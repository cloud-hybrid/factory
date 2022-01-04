import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";
import Utility from "util";
import { Prompt } from "../../utilities/prompt.js";
import { Subprocess } from "../../utilities/subprocess.js";
import { PWD } from "../../constructs/settings.js";
const Remove = Utility.promisify(FS.rm);
/*** *Current Module Path* */
const File = import.meta.url.replace("file" + ":" + "//", "");
/*** *Current Working Directory* */
const CWD = Path.dirname(File);
/*** *Package Directory* */
const PKG = Path.dirname(CWD);
/*** Repository */
const Repository = Path.resolve(CWD, "..", "..", "..", "..");
/***
 *  JSON Capable Importer
 *
 *  @type {NodeRequire}
 *
 */
const Import = Module.createRequire(PKG);
/*** Debug Console Utility String Generator */
const Input = (input) => "[Debug] CLI Input" + " " + "(" + input.toString().replace(",", ", ").toUpperCase() + ")";
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
function Configuration(Arguments) {
    const Syntax = (command) => [command, "? [--debug] ? [--help]"].join(" ");
    Arguments.hide("version");
    Arguments.help("help", "Display Usage Guide").default("help", false);
    Arguments.option("debug", { type: "boolean" }).alias("debug", "d").default("debug", false);
    Arguments.describe("debug", "Enable Debug Logging");
    Arguments.example("Global", Syntax("npx cli factory main"));
    Arguments.example("Node", Syntax("node cli factory main"));
    Arguments.example("NPM", Syntax("npm run cli -- factory main"));
    Arguments.usage([
        "Usage" + ":",
        "  >>> npm run cli -- factory main",
        "  >>> npm run cli -- factory main --help",
        "  >>> npm run cli -- factory main --debug"
    ].join("\n"));
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
function Copy(source, target) {
    /*** Exclusions to Avoid Recursive Parsing; i.e. libraries, lambda-layers, or otherwise bundled requirements */
    const Exclusions = [
        ".git",
        ".idea",
        ".vscode",
        "cdktf.out",
        "templates"
    ];
    if (FS.lstatSync(source).isFile()) {
        FS.copyFileSync(source, target);
    }
    else {
        FS.mkdirSync(target, { recursive: true });
        FS.readdirSync(source).forEach((element) => {
            const Directory = FS.lstatSync(Path.join(source, element), { throwIfNoEntry: false })?.isDirectory() || false;
            const Socket = FS.lstatSync(Path.join(source, element), { throwIfNoEntry: false })?.isSocket() || false;
            try {
                if (!Socket) {
                    if (!Exclusions.includes(target)) {
                        FS.mkdirSync(target, { recursive: true });
                    }
                }
                if (!Directory && !Socket) {
                    if (!Exclusions.includes(source)) {
                        FS.copyFileSync(Path.join(source, element), Path.join(target, element));
                    }
                }
                else if (!Socket) {
                    if (!Exclusions.includes(source)) {
                        Copy(Path.join(source, element), Path.join(target, element));
                    }
                }
            }
            catch (e) {
                /// ...
            }
        });
    }
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
const Command = async ($) => {
    const Arguments = $;
    console.warn("[Warning] The Current Command is Under Development.");
    console.warn("... To view runtime debug logs, provide the \"--debug\" flag", "\n");
    /*** @Task Create No-Prompt Flag to Avoid User Input */
    Configuration(Arguments);
    Arguments.check(async ($) => {
        try {
            const Original = Process.cwd();
            console.log("[Log] Target Directory" + ":", PWD);
            console.log("[Log] Source Directory" + ":", Repository);
            ($?.debug) && console.log(Input($._), JSON.stringify($, null, 4), "\n");
            ($?.debug) && console.debug("CDFK Target Directory" + ":", Process.cwd(), "\n");
            const Continue = async () => await Prompt("Continue? (Y/N)" + ":" + " ");
            let trigger = await Continue().then(($) => $.toUpperCase());
            while (trigger !== "Y" && trigger !== "N")
                trigger = await Continue().then(($) => $.toUpperCase());
            (trigger === "Y") && console.log("\n" + "[Log] Writing File Structure ...");
            (trigger === "Y") && await Remove(Path.join(Process.cwd(), "factory"), { force: true, recursive: true });
            /// Copy Factory's CDFK Directory to Target Deployable
            (trigger === "Y") && Copy(Repository, Path.join(Process.cwd(), "factory"));
            /// Install CDFK Dependencies
            (trigger === "Y") && await Subprocess("npm install typescript --global", Path.join(Process.cwd(), "factory"));
            (trigger === "Y") && await Subprocess("npm install .", Path.join(Process.cwd(), "factory"));
            (trigger === "Y") && Copy(Path.join(Process.cwd(), "distribution"), Path.join(Process.cwd(), "factory", "distribution"));
            (trigger === "Y") && Copy(Path.join(Process.cwd(), "factory", "src", "constructs", "index.ts"), Path.join(Process.cwd(), "factory", "distribution", "main.ts"));
            (trigger === "Y") && await Subprocess("npm install cdktf@latest --global", Path.join(Process.cwd(), "factory", "distribution"));
            (trigger === "Y") && await Subprocess("cdktf get", Path.join(Process.cwd(), "factory", "distribution"));
            (trigger === "Y") && await Subprocess("cdktf synth", Path.join(Process.cwd(), "factory", "distribution"));
            (trigger === "Y") && await Subprocess("cdktf deploy --auto-approve", Path.join(Process.cwd(), "factory", "distribution"));
            return true;
        }
        catch (error) {
            console.trace(error);
            return false;
        }
    }).strict();
};
export { Command as Deploy };
export default { Command };
