import FS from "fs";
import Path from "path";
import Process from "process";
import Assertion from "assert";

import { Argv } from "yargs";

import {Local} from "../../utilities/index.js";

/*** Debug Console Utility String Generator */
const Input = (input: (string | number)[]) => "[Debug] CLI Input" + " " + "(" + input.toString().toUpperCase() + ")";

/***
 * Command Configuration, Composition
 *
 * Aquires and configures settings specific to the module's {@link `Command`} Function-Constant.
 *
 * @param Arguments {Argv} CLI Input Arguments for Derivative Command
 *
 * @constructor
 *
 */

function Configuration(Arguments: Argv) {
    const Syntax = (command: string) => [command, "? [--json] ? [--file \"FILE\"] ? [--debug]"].join(" ");

    Arguments.hide("version");
    Arguments.help("help", "Display Usage Guide").default("help", false);

    Arguments.option("debug", {type: "boolean"}).alias("debug", "d").default("debug", false);
    Arguments.describe("debug", "Enable Debug Logging");

    Arguments.option("json", {type: "boolean"}).alias("json", "j").default("json", true);
    Arguments.describe("json", "Print to Stream as JSON Serialized Object");

    Arguments.option("file", {type: "string"}).alias("file", "f").default("file", null);
    Arguments.describe("file", "Write Current-Working-Directory to [FILE]");

    Arguments.example("Global", Syntax("npx cli cwd"));
    Arguments.example("Node", Syntax("node cli cwd"));
    Arguments.example("NPM", Syntax("npm run cli -- cwd"));

    Arguments.usage([
        "Usage" + ":",
        "  >>> npm run cli -- cwd",
        "  >>> npm run cli -- cwd --json",
        "  >>> npm run cli -- cwd --debug",
        "  >>> npm run cli -- cwd --file \"Settings.json\""
    ].join("\n"));
}

/***
 * Command Extension, Composition
 *
 * Writes data output to a user-provided local file.
 *
 * @param data {string | FS.PathLike} File Content(s)
 * @param target {string | FS.PathLike} Target File-Name
 * @param debug {Boolean | false} Enable Debug Logging
 *
 * @constructor
 *
 */

function Write(data: string, target: string, debug: boolean = false) {
    (debug) && console.debug("[Debug] (Serialize) Input", JSON.stringify({
        Data: JSON.parse(data),
        Target: target,
        Debug: debug
    }, null, 4), "\n");

    const CWD = Process.cwd();
    const Target = Path.relative(CWD, target);

    Assertion.notStrictEqual(target, "");
    Assertion.strictEqual(CWD, Local);

    FS.writeFileSync(Target, data);
}

/***
 * Command Extension, Composition
 *
 * Writes data output to TTY Stream
 *
 * @param data {Object | String | Any} Output Data
 * @param serialize {Boolean | true}
 * @param debug {Boolean | false} Enable Debug Logging
 *
 * @constructor
 *
 */

function Output(data: any, serialize: boolean = true, debug: boolean = false) {
    (debug) && console.debug("[Debug] (Output) Input", JSON.stringify({
        Data: data,
        Serialize: serialize,
        Debug: debug
    }, null, 4), "\n");

    (serialize) && Process.stdout.write(JSON.stringify(data, null, 4) + "\n" + "\n");
    (serialize) || Process.stdout.write(data + "\n" + "\n");
}

const Command = async ($: Argv) => {
    const Arguments: Argv = $;

    Configuration(Arguments);

    const Data = {"CWD": Local};
    const Serial = JSON.stringify(Data, null, 4);

    Arguments.check(($) => {
        ($?.debug) && console.log(Input($._), JSON.stringify($, null, 4), "\n");

        const Mapping = {
            file: ($?.file) ? Write(Serial, String($?.file), Boolean($?.debug)) : null,
            json: ($?.json) ? Output(Data, true, Boolean($?.debug)) : ($?.json === false)
                ? Output(Local, false, Boolean($?.debug))
                : null
        };

        return true;
    }).strict();
};

Command.bind(Configuration, Command);

export {Command, Configuration};

export default {Command};