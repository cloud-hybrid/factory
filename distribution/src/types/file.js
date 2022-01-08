/***
 * File Type
 * ---------
 * ...
 *
 * @Task Implement Workable Class
 *
 */
class File {
    constructor() {
        /*** */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** */
        Object.defineProperty(this, "volume", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** */
        Object.defineProperty(this, "pipe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** */
        Object.defineProperty(this, "ephemeral", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** */
        Object.defineProperty(this, "socket", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** */
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** */
        Object.defineProperty(this, "directory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = null;
        this.volume = null;
        this.pipe = null;
        this.ephemeral = null;
        this.file = null;
        this.socket = null;
        this.link = null;
        this.directory = null;
    }
}

export { File };
export default File;
