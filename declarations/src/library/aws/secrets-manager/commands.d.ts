import {
    CreateSecretCommandInput,
    CreateSecretCommandOutput,
    GetRandomPasswordCommandInput,
    GetRandomPasswordCommandOutput,
    GetSecretValueCommandInput,
    GetSecretValueCommandOutput,
    ListSecretsCommandInput,
    ListSecretsCommandOutput,
    ListSecretVersionIdsCommandInput,
    ListSecretVersionIdsCommandOutput,
    PutSecretValueCommandInput,
    PutSecretValueCommandOutput,
    SecretsManagerPaginationConfiguration
} from "@aws-sdk/client-secrets-manager";
import { Paginator } from "@aws-sdk/types";
import { default as Service } from "./secrets-manager.js";

declare type Commands = {
    getSecretValue: (input: GetSecretValueCommandInput) => Promise<GetSecretValueCommandOutput>;
    putSecretValue: (input: PutSecretValueCommandInput) => Promise<PutSecretValueCommandOutput>;
    Pager: {
        versions: (config: SecretsManagerPaginationConfiguration, input: ListSecretVersionIdsCommandInput, ... additionalArguments: any) => Paginator<ListSecretVersionIdsCommandOutput>;
        secrets: (config: SecretsManagerPaginationConfiguration, input: ListSecretsCommandInput, ... additionalArguments: any) => Paginator<ListSecretsCommandOutput>;
    };
    createSecret: (input: CreateSecretCommandInput) => Promise<CreateSecretCommandOutput>;
    getRandomPassword: (input: GetRandomPasswordCommandInput) => Promise<GetRandomPasswordCommandOutput>;
};
/***
 *
 * @param {Service} instance
 *
 * @returns {Commands}
 *
 * @constructor
 *
 */
declare const Commands: (instance: Service) => Commands;
export { Commands };
export * from "@aws-sdk/client-secrets-manager";
export default Commands;
