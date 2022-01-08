/// <reference types="node" />
import FS from "fs";
import Type from "./descriptor.type";

/***
 * File Descriptor
 * ---------------
 * File Descriptor Implementation
 *
 * @augments {FS.Dirent}
 *
 */
declare class Descriptor implements Type {
    name: string;

    volume: boolean;

    pipe: boolean;

    ephemeral: boolean;

    file: boolean;

    socket: boolean;

    link: boolean;

    directory: boolean;

    /***
     *
     * @param file {FS.Dirent}
     * @constructor
     *
     */
    constructor(file: FS.Dirent | string);
}

export { Descriptor };
export default Descriptor;
