import FS from "fs";
import Process from "process";
import {Argv} from "yargs";
import Path from "path";
import Assertion from "assert";

interface NPM {
    Environment: {
        "NPM-Config-Metrics-Registry": object | null | undefined;
        "NPM-Config-Global-Prefix": object | null | undefined;
        "NPM-Config-Noproxy": object | null | undefined;
        "NPM-Config-Local-Prefix": object | null | undefined;
        "NPM-Config-Globalconfig": object | null | undefined;
        "NPM-Execpath": object | null | undefined;
        "NPM-Package-Bin-Factory": object | null | undefined;
        "NPM-Package-Json": object | null | undefined;
        "NPM-Config-Userconfig": object | null | undefined;
        "NPM-Config-Init-Module": object | null | undefined;
        "NPM-Command": object | null | undefined;
        "NPM-Lifecycle-Event": object | null | undefined;
        "NPM-Package-Name": object | null | undefined;
        "NPM-Package-Version": object | null | undefined;
        "NPM-Config-Cache": object | null | undefined;
        "NPM-Lifecycle-Script": object | null | undefined;
        "NPM-Config-User-Agent": object | null | undefined;
        "NPM-Config-Prefix": object | null | undefined;
        "NPM-Config-Node-Gyp": object | null | undefined;
        "NPM-Node-Execpath": object | null | undefined;
    }
}

interface Variable {
    Key: string;
    Value: FS.PathLike | string;
    Mapping: { [key: string]: Variable }
}

class Settings {
    /*** Global Prefix */
    prefix: object | null | undefined;

    /*** Metrics Registry */
    metrics: object | null | undefined;

    /*** No-Proxy */
    proxy: object | null | undefined;

    /*** Local Prefix */
    local: object | null | undefined;

    /*** Global Configuration */
    configuration: object | null | undefined;

    /*** User Configuration */
    user: object | null | undefined;

    /*** Initial Module */
    module: object | null | undefined;

    /*** Cache */
    cache: object | null | undefined;

    /*** User Agent */
    agent: object | null | undefined;

    /*** Configuration, Prefix */
    resolve: object | null | undefined;

    /*** GYP Compiler */
    gyp: object | null | undefined;

    /*** Node.js ABI Path */
    executable: object | null | undefined;

    static readonly mapping: Variable | any = {};

    constructor($: NPM | null) {
        this.prefix = $?.Environment["NPM-Config-Global-Prefix"]
            ?? Settings.mapping["NPM-Config-Global-Prefix"]
            ?? null;

        this.metrics = $?.Environment["NPM-Config-Metrics-Registry"]
            ?? Settings.mapping["NPM-Config-Metrics-Registry"]
            ?? null;

        this.proxy = $?.Environment["NPM-Config-Noproxy"]
            ?? Settings.mapping["NPM-Config-Noproxy"]
            ?? null;

        this.local = $?.Environment["NPM-Config-Local-Prefix"]
            ?? Settings.mapping["NPM-Config-Local-Prefix"]
            ?? null;

        this.configuration = $?.Environment["NPM-Config-Globalconfig"]
            ?? Settings.mapping["NPM-Config-Globalconfig"]
            ?? null;

        this.user = $?.Environment["NPM-Config-Userconfig"]
            ?? Settings.mapping["NPM-Config-Userconfig"]
            ?? null;

        this.module = $?.Environment["NPM-Config-Init-Module"]
            ?? Settings.mapping["NPM-Config-Init-Module"]
            ?? null;

        this.cache = $?.Environment["NPM-Config-Cache"]
            ?? Settings.mapping["NPM-Config-Cache"]
            ?? null;

        this.agent = $?.Environment["NPM-Config-User-Agent"]
            ?? Settings.mapping["NPM-Config-User-Agent"]
            ?? null;

        this.resolve = $?.Environment["NPM-Config-Init-Module"]
            ?? Settings.mapping["NPM-Config-Init-Module"]
            ?? null;

        this.gyp = $?.Environment["NPM-Config-Node-Gyp"]
            ?? Settings.mapping["NPM-Config-Node-Gyp"]
            ?? null;

        this.executable = $?.Environment["NPM-Node-Execpath"]
            ?? Settings.mapping["NPM-Node-Execpath"]
            ?? null;
    }
}

function normalize(input: string) {
    const $: string = input.replace("npm", "NPM");

    return [
        $.split(" ").map(($) => {
            return $.toString()[0].toUpperCase() + $.toString().slice(1);
        }).join("-").split("_").map(($) => {
            return $.toString()[0].toUpperCase() + $.toString().slice(1);
        }).join("-").split("-").map(($) => {
            return $.toString()[0].toUpperCase() + $.toString().slice(1);
        }).join("-")
    ].join("-");
}

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
    // const Syntax = (command: string) => [command, "? [--json] ? [--file \"FILE\"] ? [--debug] ? [--help]"].join(" ");

    Arguments.hide("version");
    Arguments.help("help", "Display Usage Guide").default("help", false);

    Arguments.option("debug", {type: "boolean"}).alias("debug", "d").default("debug", false);
    Arguments.describe("debug", "Enable Debug Logging");

    Arguments.option("file", {type: "string"}).alias("file", "f").default("file", null);
    Arguments.describe("file", "Write Current-Working-Directory to [FILE]");

    // Arguments.example("Global", Syntax("npx cli cwd"));
    // Arguments.example("Node", Syntax("node cli cwd"));
    // Arguments.example("NPM", Syntax("npm run cli -- cwd"));

    // Arguments.usage([
    //     "Usage" + ":",
    //     "  >>> npm run cli -- cwd",
    //     "  >>> npm run cli -- cwd --help",
    //     "  >>> npm run cli -- cwd --json",
    //     "  >>> npm run cli -- cwd --debug",
    //     "  >>> npm run cli -- cwd --file \"Settings.json\""
    // ].join("\n"));
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

function Write(data: Settings, target: string, debug = false) {
    (debug) && console.debug("[Debug] (Serialize) Input", JSON.stringify({
        Data: JSON.stringify(data, null, 4),
        Target: target,
        Debug: debug
    }, null, 4), "\n");

    const CWD = Process.cwd();
    const Target = Path.relative(CWD, target);

    Assertion.notStrictEqual(target, "");

    FS.writeFileSync(Target, JSON.stringify(data, null, 4));

    return {Target, data, debug};
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

function Output(data: Settings, debug = false) {
    (debug) && console.debug("[Debug] (Output) Input", JSON.stringify({
        Data: data,
        Debug: debug
    }, null, 4), "\n");

    Process.stdout.write("[Log] NPM Environment Configuration" + ":" + " " + JSON.stringify(data, null, 4) + "\n" + "\n");

    return {data, debug};
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

    const Environment = JSON.parse(JSON.stringify(Process.env, null, 4));
    Object.keys(Environment).forEach(($) => {
        const Container: { [key: string]: {} } = {};

        if ($.includes("npm")) {
            Settings.mapping[normalize($)] = {};

            Container[normalize($)] = {
                Variable: $,
                Value: Environment[$]
            };

            Settings.mapping[normalize($)]["Key"] = $;
            Settings.mapping[normalize($)]["Value"] = Environment[$];
            Settings.mapping[normalize($)]["Mapping"] = Container;
        }
    });

    Arguments.check(async ($) => {
        ($?.debug) && console.log(Input($._), JSON.stringify($, null, 4), "\n");

        const Instance = new Settings(null);

        ($?.file) || Output(Instance, !!($?.debug));
        ($?.file) && Write(Instance, String($?.file ?? Path.join(Process.cwd(), "Configuration.json")), !!($?.debug));

        return true;
    }).strict();
};

export {Command as Configuration};

export default {Command};