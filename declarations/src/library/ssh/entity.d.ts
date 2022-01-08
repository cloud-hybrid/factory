/***
 * @name        Host SSH-Entry
 * @package     @cloud-technology
 * @summary     ESM SSH Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
/***
 * User Information (OS)
 *
 * @type {{uid: number, gid: number, shell: string, username: string, homedir: string}}
 *
 */
declare const User: {
    username: string;
    uid: number;
    gid: number;
    shell: string;
    homedir: string;
};
declare const Default: {
    SSH: string;
    Username: string;
    Bastion: string;
    Alias: string;
    IP: string;
};

/***
 * Create SSH Configuration Entry
 *
 * @param alias {String} Target SSH Configuration Common-Name
 * @param hostname {String} Target SSH Hostname
 * @param user {String} Target SSH Username
 * @param identity {String} System Path Location of Target Remote SSH-Private Key
 * @param key {String} System Path Location of Proxy (Bastion) SSH-Private Key
 * @param bastion {String} Target Bastion Host
 *
 * @return {string}
 *
 * @constructor
 *
 * @example
 *
 * console.log(Entry());
 *
 * >>> Host Local-Host
 * >>>     Hostname 127.0.0.1
 * >>>     User Jacob-Sanders
 * >>>     IdentityFile /Users/Jacob-Sanders/.ssh/id_rsa
 * >>>     ProxyCommand ssh localhost nc %h %p
 *
 */
interface Entity {
    /*** Target SSH Configuration Common-Name */
    alias: string;

    /*** Target SSH Hostname */
    hostname: string;

    /*** Target SSH Username */
    user: string;

    /*** System Path Location of Target Remote SSH-Private Key */
    identity: string;

    /*** System Path Location of Proxy (Bastion) SSH-Private Key */
    key: string;

    /*** Target Bastion Host */
    bastion: string;
}

declare const Entry: (configuration: Entity) => string;
/***
 * @Task - Add Summary
 *
 * @param alias
 * @param hostname
 * @param key
 *
 * @constructor
 *
 */
declare const Bastion: (alias: string, hostname: string, key: string) => string;
declare const Overwrite: () => string;
export { Entry, Overwrite, Bastion, User, Default };
export default Entity;
