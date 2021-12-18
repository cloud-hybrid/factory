import FS from "fs";
import Path from "path";
import Module from "module";

import CLI from "./../exports.js";
import Process from "process";

/*** *Current Working Directory* */
const CWD: string = Path.dirname(import.meta.url.replace("file" + ":" + "/", ""));

/*** *Package Directory* */
const PKG: string = Path.dirname(CWD);

/***
 *  JSON Capable Importer
 *
 *  @type {NodeRequire}
 *
 */

const Import = Module.createRequire(CWD);

/*** @typedef {import("./../package.json")} Package */
const Package = Import("./../package.json");

// Package Version
const Version: [string, string] = ["version", Package.version];

export { Version };

export default Version;
