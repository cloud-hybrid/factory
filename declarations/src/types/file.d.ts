import { default as Type } from "./file.type.js";

/***
 * File Type
 * ---------
 * ...
 *
 * @Task Implement Workable Class
 *
 */
declare class File implements Type {
    /*** */
    name?: string | null;

    /*** */
    volume?: boolean | null;

    /*** */
    pipe?: boolean | null;

    /*** */
    ephemeral?: boolean | null;

    /*** */
    file?: boolean | null;

    /*** */
    socket?: boolean | null;

    /*** */
    link?: boolean | null;

    /*** */
    directory?: boolean | null;

    constructor();
}

export { File };
export default File;
