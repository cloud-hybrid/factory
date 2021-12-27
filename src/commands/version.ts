import Path from "path";
import Module from "module";

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

const Package = Import("../../package.json");

// Package Version
const Version: [string, string] = ["version", JSON.stringify(Package.version, null, 4) + "\n"];

export { Version };

export default Version;
