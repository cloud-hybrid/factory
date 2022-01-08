import FS from "fs";
import Process from "process";
import { Secrets } from "../../library/aws/index.js";
import { Prompt } from "../../utilities/prompt.js";
import TTY from "../../utilities/tty.js";

/*** Debug Console Utility String Generator */
const Input = (input) => "[Debug] CLI Input" + " " + "(" + input.toString().replace(",", ", ").toUpperCase() + ")";
// /***
//  * Command Configuration, Composition
//  *
//  * Acquires and configures settings specific to the module's {@link Command} Function-Constant.
//  *
//  * @param Arguments {Argv} CLI Input Arguments for Derivative Command
//  *
//  * @constructor
//  *
//  */
//
// function Configuration(Arguments: Argv, name: string, command: string) {
//     const Syntax = (command: string = name) => " " + command + " " + "? [--debug]";
//
//     Arguments.example("NPX", Syntax("npx" + " " + name + " " + command));
// }
/***
 * Module Entry-Point Command
 * ==========================
 *
 * @param $ {Argv} Commandline Arguments
 *
 * @constructor
 *
 */
const Command = async ($) => {
    const Arguments = $;
    const API = new Secrets.Client();
    await API.instantiate();
    const Function = API.commands?.getSecretValue ?? null;
    Arguments.check(async ($) => {
        ( $?.debug ) && ( TTY ) && console.log(Input($._), JSON.stringify($, null, 4), "\n");
        const Resource = ( $?.name ?? null ) ? String($.name) : ( await Prompt("Secret" + ":" + " ") ).trim();
        const Secret = ( Function ) ? await Function({
            SecretId: Resource
        }) : null;
        ( ( TTY ) && !( $[ "value-only" ] ) && !( $.file ) ) && console.log("[Log] API Response" + ":", JSON.stringify(Secret, null, 4));
        ( ( TTY ) && ( $[ "value-only" ] ) && !( $.file ) ) && console.log(Secret?.SecretString ?? "", "\n");
        ( !( TTY ) && !( $[ "value-only" ] ) && !( $.file ) ) && Process.stdout.write(JSON.stringify(Secret, null, 4));
        ( !( TTY ) && ( $[ "value-only" ] ) && !( $.file ) ) && Process.stdout.write(Secret?.SecretString ?? "");
        ( $.file ?? null ) && !( $[ "value-only" ] ) && FS.writeFileSync(String($.file) ?? "Fatal-Error.log", JSON.stringify(Secret, null, 4));
        ( $.file ?? null ) && ( $[ "value-only" ] ) && FS.writeFileSync(String($.file) ?? "Fatal-Error.log", Secret?.SecretString ?? "");
        return true;
    }).strict();
};
export { Command as Get };
export default { Command };
//
// Debugging & Local Testing
//
// const API = new Secrets.Client();
// await API.instantiate();
// const Commands = API.commands;
//
// // @ts-ignore
// const {getSecretValue} = Commands;
//
// console.log(await getSecretValue({
//     SecretId: "..."
// }));
//
