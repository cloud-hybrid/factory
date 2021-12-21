import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";
import Assertion from "assert";

import {Argv} from "@cloud-vault/cli/arguments";

import {Subprocess} from "@cloud-vault/cli/utilities/subprocess";

/*** *Current Module Path* */
const File: string = import.meta.url.replace("file" + ":" + "//", "");

/*** *Current Working Directory* */
const CWD: string = Path.dirname(File);

/*** *Package Directory* */
const PKG: string = Path.dirname(CWD);

/*** CDFK Packaged Directory */
const CDFK = Path.resolve(CWD, "..", "..", "..", "..", "cdfk");

/// --> Runtime Assertion
Assertion.strictEqual(FS.existsSync(CDFK), true);

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

    Arguments.example("Global", Syntax("npx cli cdfk build"));
    Arguments.example("Node", Syntax("node cli cdfk build"));
    Arguments.example("NPM", Syntax("npm run cli -- cdfk build"));

    Arguments.usage([
        "Usage" + ":",
        "  >>> npm run cli -- cdfk build",
        "  >>> npm run cli -- cdfk build --help",
        "  >>> npm run cli -- cdfk build --debug"
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

    Configuration(Arguments);

    Arguments.check(async ($) => {
        ($?.debug) && console.debug(Input($._), JSON.stringify($, null, 4), "\n");

        ($?.debug) && console.debug("[Debug] User CWD" + ":", Process.cwd(), "\n");
        ($?.debug) && console.debug("[Debug] CDFK Target Directory" + ":", CDFK, "\n");
        ($?.debug) && console.debug("[Debug] Relative Runtime Path(s)" + ":", JSON.stringify({
            Paths: {
                Runtime: File,
                Directory: CWD
            }
        }, null, 4), "\n");

        await Subprocess("cdktf get && cdktf synth --disable-plugin-cache-env --disable-logging", CDFK);

        return true;
    }).strict();
};

export {Command as Build};

export default {Command};