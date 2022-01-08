import { SecretsManagerClient } from "@aws-sdk/client-secrets-manager";
import { fromIni } from "@aws-sdk/credential-providers";
import OS from "os";
import { Commands } from "./commands.js";

/***
 * Secrets Manager Client Credentials
 * ---
 *
 * Creates a credential provider function that reads from a shared credentials file at ~/.aws/credentials and a shared
 * configuration file at ~/.aws/config.
 *
 * Both files are expected to be INI formatted with section names corresponding to
 * profiles.
 *
 * Sections in the credentials file are treated as profile names, whereas profile sections in the config file
 * must have the format of[profile profile-name], except for the default profile.
 *
 * @example
 * const Credentials = new Client();
 * await Credentials.initialize();
 *
 * console.log(Credentials);
 *
 */
class Credential {
    /***
     *
     * @param profile {string} Defaults to `default`
     *
     */
    constructor(profile) {
        /*** `AWS_PROFILE` environment variable or a default of `default`. */
        Object.defineProperty(this, "profile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "default"
        });
        /*** AWS_ACCESS_KEY_ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** AWS_SECRET_ACCESS_KEY */
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /*** A function that, when invoked, returns a promise that will be fulfilled with a value of type Credential */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.settings = fromIni({
            profile: profile ?? this.profile
        });
    }

    /***
     * Populate the instance $.id & $.key attributes
     *
     * @returns {Promise<Credentials>}
     *
     */
    async initialize() {
        const $ = await this.settings();
        this.id = $.accessKeyId;
        this.key = $.secretAccessKey;
        return {
            accessKeyId: this.id, secretAccessKey: this.key
        };
    }
}

/***
 * Returns information about the currently effective user. On POSIX platforms, this is typically a subset of the
 * password file. The returned object includes the username, uid, gid, shell, and homedir. On Windows, the uid
 * andgid fields are -1, and shell is null. The value of homedir returned by os.userInfo() is provided by the
 * operating system. This differs from the result of os.homedir(), which queries environment variables for the home
 * directory before falling back to the operating system response.
 *
 * Throws a SystemError if a user has no username or homedir.
 *
 */
Object.defineProperty(Credential, "user", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: OS.userInfo()
});

/***
 * Secrets Manager API Client
 * ---
 *
 * @example
 * const Secrets = new Client();
 * await Secrets.instantiate();
 *
 * console.log(Secrets);
 *
 * @example
 * const API = await (new Client()).instantiate();
 */
class Client extends Credential {
    /*** Given AWS-V3 Change(s), `await Client.instantiate()` must be called after constructor Instantiation */
    constructor() {
        super();
        /*** AWS Secrets Manager API Client */
        Object.defineProperty(this, "service", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "commands", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }

    /***
     * Populate the instance `$.service`, and return a callable, functional Secrets-Manager API Client
     *
     * @returns {Promise<SecretsManagerClient>}
     *
     */
    async instantiate() {
        const $ = await this.initialize();
        const service = new SecretsManagerClient({ credentials: $ });
        this.service = service;
        this.commands = Commands(service);
        return this.service;
    }
}

export { Credential, Client };
