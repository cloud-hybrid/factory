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

const Import = Module.createRequire(PKG);

const Package = {
    Package: Import("./../package.json").version,
    Factory: Import("./../cdfk/package.json").version,
    CLI: Import("./package.json").version
}

// Package Version
const Version: [string, string] = ["version", JSON.stringify(Package, null, 4) + "\n"];

export { Version };

export default Version;
