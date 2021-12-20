import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";
import Assertion from "assert";

import {Argv, Subprocess, Prompt} from "@cloud-vault/cli";

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

    /*** @Task Create No-Prompt Flag to Avoid User Input */

    Configuration(Arguments);

    Arguments.check(async ($) => {
        ($?.debug) && console.log(Input($._), JSON.stringify($, null, 4), "\n");

        const Target = Path.resolve(CWD, "..", "..", "..", "..", "cdfk");

        Assertion.strictEqual(FS.existsSync(Target), true);

        const Trigger = async () => await Prompt("Continue? (Y/N)" + ":" + " ");

        let _: string = await Trigger().then(($) => $.toUpperCase());

        while (_ !== "Y" && _ !== "N") _ = await Trigger().then(($) => $.toUpperCase());

        (Trigger) && await Subprocess("npm run ci-cd", Target);

        return true;
    }).strict();
};

export {Command as Main};

export default {Command};