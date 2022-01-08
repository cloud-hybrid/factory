import FS from "fs";

/***
 * File Descriptor
 * ---------------
 * File Descriptor Implementation
 *
 * @augments {FS.Dirent}
 *
 */
class Descriptor {
    /***
     *
     * @param file {FS.Dirent}
     * @constructor
     *
     */
    constructor(file) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "volume", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pipe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ephemeral", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "socket", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "directory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const $ = ( typeof file === "string" ) ? FS.lstatSync(file, { throwIfNoEntry: true }) : file;
        this.name = ( typeof file === "string" ) ? file : file.name;
        this.volume = $.isBlockDevice();
        this.pipe = $.isFIFO();
        this.ephemeral = $.isCharacterDevice();
        this.file = $.isFile();
        this.socket = $.isSocket();
        this.link = $.isSymbolicLink();
        this.directory = $.isDirectory();
    }
}

export { Descriptor };
export default Descriptor;
