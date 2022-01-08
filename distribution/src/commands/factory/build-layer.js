import Module from "module";
import Path from "path";
import Process from "process";
import { Main } from "../../utilities/build-layer.js";
import { Prompt } from "../../utilities/prompt.js";

/*** *Current Module Path* */
const File = import.meta.url.replace("file" + ":" + "//", "");
/*** *Current Working Directory* */
const CWD = Path.dirname(File);
/*** *Package Directory* */
const PKG = Path.dirname(CWD);
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
    const Syntax = (command) => [ command, "? [--debug] ? [--help]" ].join(" ");
    Arguments.hide("version");
    Arguments.help("help", "Display Usage Guide").default("help", false);
    Arguments.option("debug", { type: "boolean" }).alias("debug", "d").default("debug", false);
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
const Command = async ($) => {
    const Arguments = $;
    console.warn("[Warning] The Current Command is Under Development.");
    console.warn("... To view runtime debug logs, provide the \"--debug\" flag", "\n");
    Configuration(Arguments);
    Arguments.check(async ($) => {
        ( $?.debug ) && console.debug(Input($._), JSON.stringify($, null, 4), "\n");
        const Directory = Path.resolve(Process.cwd());
        const Continue = async () => await Prompt("Continue? (Y/N)" + ":" + " ");
        let trigger = await Continue().then(($) => $.toUpperCase());
        while ( trigger !== "Y" && trigger !== "N" )
            trigger = await Continue().then(($) => $.toUpperCase());
        ( trigger === "Y" ) && await Main();
        return true;
    }).strict();
};
export { Command as Layer };
export default { Command };
