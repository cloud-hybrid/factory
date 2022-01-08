﻿import { Argv } from "yargs";

/***
 * Module Entry-Point Command
 * ==========================
 *
 * @param $ {Argv} Commandline Arguments (Implicitly passed from cli.ts).
 *
 * @constructor
 *
 */
declare const Command: ($: Argv) => Promise<void>;
export { Command as Initialize };
declare const _default: {
    Command: ($: Argv<{}>) => Promise<void>;
};
export default _default;
