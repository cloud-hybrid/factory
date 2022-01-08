import {
    CreateSecretCommand,
    GetRandomPasswordCommand,
    GetSecretValueCommand,
    paginateListSecrets,
    paginateListSecretVersionIds,
    PutSecretValueCommand
} from "@aws-sdk/client-secrets-manager";

/***
 *
 * @param {Service} instance
 *
 * @returns {Commands}
 *
 * @constructor
 *
 */
const Commands = (instance) => {
    return {
        createSecret: async (input) => {
            return await instance.send(new CreateSecretCommand(input));
        },
        getSecretValue: async (input) => {
            return await instance.send(new GetSecretValueCommand(input));
        },
        getRandomPassword: async (input) => {
            return await instance.send(new GetRandomPasswordCommand(input));
        },
        putSecretValue: async (input) => {
            return await instance.send(new PutSecretValueCommand(input));
        },
        Pager: {
            versions: paginateListSecretVersionIds,
            secrets: paginateListSecrets
        }
    };
};
export { Commands };
export * from "@aws-sdk/client-secrets-manager";
export default Commands;
