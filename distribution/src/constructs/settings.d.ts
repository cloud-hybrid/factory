/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     ESM Exportable Module
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
/// <reference types="node" />
/*** ESM Resolver for *Current-Working-Directory* */
declare const CWD: string;
/*** ESM Resolve for Package Directory relative to Current Working Directory */
declare const PKG: string;
/*** Distribution Folder */
declare const Distribution: string;
/*** ESM Compatability & JSON Importer */
declare const Import: NodeRequire;
/***
 * JSON Configuration
 * ==================
 *
 *  @type {typeof await import("../configuration/settings.json")}
 *
 */
declare const Settings: typeof import("../schema/settings.schema.json");
/***
 * Deployment Configuration & Settings
 * -----------------------------------
 *
 * @externs {{@link Settings}}
 *
 */
declare class Configuration {
    environment: string;
    organization: string;
    cloud: typeof Settings.Cloud;
    static settings: typeof Settings;
    constructor(settings: {
        organization: string;
        environment: string;
        cloud: typeof Settings.Cloud;
    });
}
declare const PWD: string;
export { CWD, PKG, Distribution, Settings, Configuration, Import, PWD };
declare const _default: {
    CWD: string;
    PKG: string;
    Distribution: string;
    Settings: {
        Organization: string;
        Environment: string;
        Service: string;
        Cloud: {
            Provider: string;
            Region: string;
            Profile: string;
        };
    };
    Configuration: typeof Configuration;
    Import: NodeRequire;
    PWD: string;
};
export default _default;
