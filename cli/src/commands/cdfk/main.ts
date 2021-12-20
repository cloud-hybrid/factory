import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";
import Assertion from "assert";

/*** *Current Working Directory* */
const CWD: string = Path.dirname(import.meta.url.replace("file" + ":" + "/", ""));

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

    Arguments.option("debug", {type: "boolean"}).alias("debug", "d").default("debug", true);
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

    Configuration(Arguments);

    Arguments.check(($) => {
        ($?.debug) && console.log(Input($._), JSON.stringify($, null, 4), "\n");

        return true;
    }).strict();
};

export {Command as Main};

export default {Command};