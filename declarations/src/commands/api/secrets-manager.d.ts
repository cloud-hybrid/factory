import { Argv } from "yargs";

/***
 * Module Entry-Point Command
 * ==========================
 *
 * @param $ {Argv} Commandline Arguments
 *
 * @constructor
 *
 */
declare const Command: ($: Argv) => Promise<void>;
export { Command as Get };
declare const _default: {
    Command: ($: Argv<{}>) => Promise<void>;
};
export default _default;
