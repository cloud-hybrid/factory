/*****
 Local Module Import(s)

 *
 * @example
 *  >>> import { default as A } from "./Exportable-A.js"
 *  >>> import { default as B } from "./Exportable-B.js"
 *  >>> import { default as C } from "./Exportable-C.js"
 *
 */

import FS from "fs";
import Path from "path";
import * as URI from "url";

/* import { default as Exportable } from "./Exportable.js" */

const File = URI.fileURLToPath(import.meta.url);
const Directory = Path.dirname(import.meta.url);
const Folder = Path.normalize(Directory)
    .replace("file" + ":", "");

const Contents = FS.readdirSync(Folder);

const Module = {
    Import: File,
    Export: Contents,
    Path: {File, Directory, Folder}
};

const Composition = {
    /***
     * @example
     * >>> ... {
     * >>>   "Export-A": A,
     * >>>   "Export-B": B,
     * >>>   "Export-C": C
     * >>> }
     */
    Module
};

export { Composition };
export default Composition;

export { Module /* A, B, C */ };