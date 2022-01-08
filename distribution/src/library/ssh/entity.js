/***
 * @name        Host SSH-Entry
 * @package     @cloud-technology
 * @summary     ESM SSH Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import OS from "os";
import Path from "path";

/***
 * User Information (OS)
 *
 * @type {{uid: number, gid: number, shell: string, username: string, homedir: string}}
 *
 */
const User = { ...OS.userInfo() };
const Default = {
    SSH: Path.join(User.homedir, ".ssh", "id_rsa"),
    Username: User.username,
    Bastion: "localhost",
    Alias: "Local-Host",
    IP: "127.0.0.1"
};
const Entry = (configuration) => {
    return [ [ "Host", configuration.alias ].join(" "), [ "   ", "Hostname", configuration.hostname ].join(" "), [ "   ", "User", configuration.user ].join(" "), [ "   ", "IdentityFile", configuration.identity ].join(" "), [ "   ", "ConnectTimeout", "15" ].join(" "), [ "   ", "LogLevel", "QUIET" ].join(" "), [ "   ", "ProxyCommand", "ssh", configuration.bastion, "-i", configuration.key, "-W", "%h:%p" ].join(" "), [ "" ].join() ].join("\n");
};
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
const Bastion = (alias, hostname, key) => {
    return [ [ "Host", alias ].join(" "), [ "   ", "Hostname", hostname ].join(" "), [ "   ", "User", "ec2-user" ].join(" "), [ "   ", "IdentityFile", key ].join(" "), [ "" ].join() ].join("\n");
};
const Overwrite = () => {
    return [ [ "Host", "*" ].join(" "), [ "   ", "StrictHostKeyChecking", "no" ].join(" "), [ "   ", "UserKnownHostsFile", "/dev/null" ].join(" "), [ "" ].join() ].join("\n");
};
export { Entry, Overwrite, Bastion, User, Default };
