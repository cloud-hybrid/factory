import FS from "fs";
import Process from "process";

import { Argv } from "yargs";

import { Secrets } from "../../library/aws/index.js";

import TTY from "../../utilities/tty.js";
import { Prompt } from "../await-input.js";

/*** Debug Console Utility String Generator */
const Input = (input: ( string | number )[]) => "[Debug] CLI Input" + " " + "(" + input.toString().replace( ",", ", " ).toUpperCase() + ")";

/***
 * Module Entry-Point Command
 * ==========================
 *
 * @param $ {Argv} Commandline Arguments
 *
 * @constructor
 *
 */

const Command = async ($: Argv) => {
    const Arguments: Argv = $;

    const API = new Secrets.Client();

    await API.instantiate();

    const Function = API.commands?.getSecretValue ?? null;

    Arguments.check( async ($) => {
        ( $?.debug ) && ( TTY ) && console.log( Input( $._ ), JSON.stringify( $, null, 4 ), "\n" );

        const Resource: string = ( $?.name ?? null ) ? String( $.name ) : await Prompt( "Secret (Resource Name)" );

        ( $?.name ?? null ) || Process.stdout.write( "\n" );

        const Response = ( Function ) ? await Function( {
            SecretId: Resource
        } ) : null;

        const Data = Response?.SecretString ?? null;

        ( ( TTY ) && !( $[ "value-only" ] ) && !( $.file ) ) && console.log( "[Log] API Response" + ":", JSON.stringify( Response, null, 4 ) );
        ( ( TTY ) && ( $[ "value-only" ] ) && !( $.file ) ) && console.log( ( Data ) ? JSON.parse( Data ?? "" ) ?? JSON.stringify( Data, null, 4 ) ?? Data : "", "\n" );

        ( !( TTY ) && !( $[ "value-only" ] ) && !( $.file ) ) && Process.stdout.write( JSON.stringify( Response, null, 4 ) );
        ( !( TTY ) && ( $[ "value-only" ] ) && !( $.file ) ) && Process.stdout.write( Data ?? "" );

        ( $.file ?? null ) && !( $[ "value-only" ] ) && FS.writeFileSync( String( $.file ) ?? "Fatal-Error.log", JSON.stringify( Response, null, 4 ) );
        ( $.file ?? null ) && ( $[ "value-only" ] ) && FS.writeFileSync( String( $.file ) ?? "Fatal-Error.log", ( typeof Data === "string" ) ? JSON.stringify( JSON.parse( Data ), null, 4 ) : JSON.stringify( Data, null, 4 ) );

        return true;
    } ).strict();
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