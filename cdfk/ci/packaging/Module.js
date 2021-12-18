import FS from "fs";
import Path from "path";
import * as URI from "url";

import { default as NPM } from "./NPM.js";
import { default as Node } from "./Node.js";
import { default as Definition } from "./Definition.js";

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
    Module, Node, NPM, Definition
};

export { Composition };
export default Composition;

export { Definition, Node, NPM, Module };