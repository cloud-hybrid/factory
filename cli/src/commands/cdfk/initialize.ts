import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";
import Assertion from "assert";

import {Argv} from "@cloud-vault/cli/arguments";
import {Prompt} from "@cloud-vault/cli/utilities/prompt";

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

const Schema = {
    "TF": true,
    "CDK": true,
    "CFN": false,
    "Cloud": {
        "Provider": "AWS",
        "Region": "us-east-2"
    },
    "Source": "src",
    "Service": "Proof-of-Concept",
    "Environment": "Development",
    "Organization": "Cloud-Vault",
    "Deployment": {
        "Type": "Service",
        "Method": "Single"
    },
    "SAM": "service",
    "Functions": [
        "lambda"
    ]
};

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
    Arguments.hide("version");
    Arguments.help("help", "Display Usage Guide").default("help", false);

    Arguments.option("debug", {type: "boolean"}).alias("d", "debug").default("debug", false);
    Arguments.describe("debug", "Enable Debug Logging");

    Arguments.option("name", {type: "string"}).alias("n", "name").describe({name: "The Target Project Name"});
    Arguments.option("auto", {type: "boolean"}).alias("a", "auto").describe({auto: "Initialize the Project with Prompts Disabled"}).default({auto: true});
    Arguments.option("guided", {type: "boolean"}).alias("g", "guided").describe({guided: "Create a new Project with Guided Input"}).default({guided: false});
    Arguments.option("configuration", {type: "string"}).alias("c", "configuration").describe({configuration: "Configuration File for Project Initialization"}).default({configuration: Path.join(Process.cwd(), "factory.json")});
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

        // @ts-ignore
        const Settings = FS.existsSync($?.configuration) ? Import($?.configuration): null;

        console.log(Settings);

        return true
    }).strict();
};

export {Command as Initialize};

export default {Command};