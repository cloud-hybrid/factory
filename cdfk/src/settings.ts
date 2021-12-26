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

const Repository: string = Path.join(PKG, "..");

/*** Distribution Folder */

const Distribution: string = Path.join(Process.cwd(), "..", "packages", "distribution");

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
    public tf: boolean = Settings.TF;
    public cfn: boolean = Settings.CFN;
    public cdk: boolean = Settings.CDK;

    public source: FS.PathLike | string = Settings.Source;
    public environment: string = Settings.Environment
    public organization: string = Settings.Organization;

    public cloud: typeof Settings.Cloud = Settings.Cloud;

    public functions: typeof Settings.Functions = Settings.Functions;
    public deployment: typeof Settings.Deployment = Settings.Deployment;

    public static settings: typeof Settings = Settings;

    constructor(settings: { tf: boolean, cfn: boolean, cdk: boolean, source: string, environment: string, organization: string, cloud: typeof Settings.Cloud, functions: string[], deployment: typeof Settings.Deployment, settings: typeof Settings }) {
        this.tf = settings.tf;
        this.cfn = settings.cfn;
        this.cdk = settings.cdk;
        this.source = settings.source;
        this.environment = settings.environment;
        this.organization = settings.organization;
        this.cloud = settings.cloud;
        this.functions = settings.functions;
        this.deployment = settings.deployment;
    }
}

export {CWD, PKG, Repository, Distribution, Settings, Configuration, Import};
