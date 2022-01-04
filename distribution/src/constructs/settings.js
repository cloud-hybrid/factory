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
const CWD = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));
/*** ESM Resolve for Package Directory relative to Current Working Directory */
const PKG = Path.dirname(CWD);
/// Destination Root
const Target = Path.join(PKG, "..");
/*** Distribution Folder */
const Distribution = Target;
/*** ESM Compatability & JSON Importer */
const Import = Module.createRequire(import.meta.url);
/***
 * JSON Configuration
 * ==================
 *
 *  @type {typeof await import("../configuration/settings.json")}
 *
 */
const Settings = Import(Path.join(Distribution, "src", "schema", "settings.json"));
const Overwrite = Path.join(Process.cwd(), "factory.json");
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
    constructor(settings) {
        Object.defineProperty(this, "environment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Settings.Environment
        });
        Object.defineProperty(this, "organization", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Settings.Organization
        });
        Object.defineProperty(this, "cloud", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Settings.Cloud
        });
        this.environment = settings.environment;
        this.organization = settings.organization;
        this.cloud = settings.cloud;
    }
}
Object.defineProperty(Configuration, "settings", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Settings
});
const PWD = (FS.existsSync(Overwrite)) ? Path.dirname(Overwrite) : Target;
export { CWD, PKG, Distribution, Settings, Configuration, Import, PWD };
export default { CWD, PKG, Distribution, Settings, Configuration, Import, PWD };
