/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";

/*** ESM Resolver for *Current-Working-Directory* */
const CWD: string = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));

/*** ESM Resolve for Package Directory relative to Current Working Directory */
const PKG: string = Path.dirname(CWD);

/// Destination Root
const Target: string = Path.join(PKG, "..");

/*** Distribution Folder */
const Distribution: string = Target;

/*** ESM Compatability & JSON Importer */
const Import: NodeRequire = Module.createRequire(import.meta.url);

/***
 * JSON Configuration
 * ==================
 *
 *  @type {typeof await import("../configuration/settings.json")}
 *
 */

const Settings: typeof import("../schema/settings.schema.json") = Import(Path.join(Distribution, "src", "schema", "settings.json"));
const Overwrite: string = Path.join(Process.cwd(), "factory.json");

/// console.debug("[Debug] Target Overwrite Settings File" + ":", Overwrite, "\n");

FS.existsSync(Overwrite) && console.debug("[Debug] Target Overwrite Object" + ":", JSON.parse(FS.readFileSync(Overwrite, { encoding: "utf-8" }).toString().trim()));

/***
 * Deployment Configuration & Settings
 * -----------------------------------
 *
 * @externs {{@link Settings}}
 *
 */

class Configuration {
    public environment: string = Settings.Environment
    public organization: string = Settings.Organization;

    public cloud: typeof Settings.Cloud = Settings.Cloud;

    public static settings: typeof Settings = Settings;

    constructor( settings: { organization: string, environment: string, cloud: typeof Settings.Cloud } ) {
        this.environment = settings.environment;
        this.organization = settings.organization;
        this.cloud = settings.cloud;
    }
}

const PWD = (FS.existsSync(Overwrite)) ? Path.dirname(Overwrite) : Target;

export { CWD, PKG, Distribution, Settings, Configuration, Import, PWD };

export default { CWD, PKG, Distribution, Settings, Configuration, Import, PWD };
