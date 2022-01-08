import FS from "fs";
/***
 * @name        SSH-Remote-Command
 * @package     @cloud-technology
 * @summary     ESM SSH Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
/***
 * SSH Script Command Generator
 *
 * @param configuration {String} System Path to SSH Configuration
 * @param script {String} System Path to Script Location
 * @param alias {String} Target Server Alias as found in Configuration
 *
 * @param data {Object} Server Data for Debugging
 *
 * @return {{CLI: string, Data: {Object}}}
 *
 * @constructor
 *
 */
declare const Command: (configuration: string | FS.PathLike, alias: string, script: string, data: object) => {
    CLI: string;
    Data: {};
};
export { Command };
export default Command;
