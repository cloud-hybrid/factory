import FS from "fs";
import Path from "path";
import * as URI from "url";

import { default as Status } from "./Status.js";

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
    Module, Status
};

export { Composition };
export default Composition;

export { Status, Module };