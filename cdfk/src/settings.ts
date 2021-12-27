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

import Assertion from "assert";

/*** ESM Resolver for *Current-Working-Directory* */
const CWD: string = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));

/*** ESM Resolve for Package Directory relative to Current Working Directory */
const PKG: string = Path.dirname(CWD);

/// Destination Root
const Target: string = Path.join(PKG, "..");

/*** Distribution Folder */
const Distribution: string = Path.join(Target, "distribution");

/*** ESM Compatability & JSON Importer */
const Import: NodeRequire = Module.createRequire(import.meta.url);

/***
 * JSON Configuration
 * ==================
 *
 *  @type {typeof await import("../configuration/settings.json")}
 *
 */

const Settings: typeof import("../configuration/settings.json") = Import("../configuration/settings.json");

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

    constructor(settings: { organization: string, environment: string, cloud: typeof Settings.Cloud }) {
        this.environment = settings.environment;
        this.organization = settings.organization;
        this.cloud = settings.cloud;
    }
}

export {CWD, PKG, Distribution, Settings, Configuration, Import};
