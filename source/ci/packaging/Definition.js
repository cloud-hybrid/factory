import Path from "path";
import Module from "module";

import { default as NPM } from "./NPM.js";

/***
 * Backwards Compatability Import System
 *
 * @typedef { NodeRequire } Import
 *
 */

const Import = Module.createRequire(import.meta.url);

const Package = {
    Path: {
        File: NPM.Package.json.value,
        Directory: Path.dirname(NPM.Package.json.value)
    },
    JSON: Import(NPM.Package.json.value),
    String: () => JSON.stringify(Package.JSON, null, 4)
};

export { Package };

export default Package;