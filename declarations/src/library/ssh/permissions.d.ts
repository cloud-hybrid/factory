/***
 * @name        SSH-Permissions
 * @package     @cloud-technology
 * @summary     ESM SSH Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
/***
 *
 * @param key {string} System Path to File
 *
 * @return {Promise<*>}
 *
 * @constructor
 *
 */
declare const Modify: (key: string) => Promise<unknown>;
/***
 *
 * @param key {string} System Path to File
 *
 * @return {Promise<*>}
 *
 * @constructor
 *
 */
declare const Unlock: (key: string) => Promise<unknown>;
export { Modify, Unlock };
export default Modify;
