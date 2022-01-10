import { CreateSecretCommand, CreateSecretCommandInput, CreateSecretCommandOutput, GetRandomPasswordCommand, GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput, GetSecretValueCommand, GetSecretValueCommandInput, GetSecretValueCommandOutput, ListSecretsCommandInput, ListSecretsCommandOutput, ListSecretVersionIdsCommandInput, ListSecretVersionIdsCommandOutput, paginateListSecrets, paginateListSecretVersionIds, PutSecretValueCommand, PutSecretValueCommandInput, PutSecretValueCommandOutput, SecretsManagerPaginationConfiguration } from "@aws-sdk/client-secrets-manager";
import { Paginator } from "@aws-sdk/types";
import { default as Service } from "./secrets-manager.js";

type Commands = {
    getSecretValue: (input: GetSecretValueCommandInput) => Promise<GetSecretValueCommandOutput>;
    putSecretValue: (input: PutSecretValueCommandInput) => Promise<PutSecretValueCommandOutput>;

    Pager: {
        versions: (config: SecretsManagerPaginationConfiguration,
            input: ListSecretVersionIdsCommandInput,
            ... additionalArguments: any) => Paginator<ListSecretVersionIdsCommandOutput>;
        secrets: (config: SecretsManagerPaginationConfiguration,
            input: ListSecretsCommandInput,
            ... additionalArguments: any) => Paginator<ListSecretsCommandOutput>;
    };

    createSecret: (input: CreateSecretCommandInput) => Promise<CreateSecretCommandOutput>;
    getRandomPassword: (input: GetRandomPasswordCommandInput) => Promise<GetRandomPasswordCommandOutput>;
};

interface Request {
    /**
     * <p>The ARN or name of the secret to retrieve.</p>
     *          <p>For an ARN, we recommend that you specify a complete ARN rather
     *       than a partial ARN.</p>
     */
    SecretId: string | undefined;

    /**
     * <p>The unique identifier of the version of the secret to retrieve. If
     *       you include both this parameter and <code>VersionStage</code>, the two parameters must refer
     *       to the same secret version. If you don't specify either a <code>VersionStage</code> or
     *         <code>VersionId</code>, then Secrets Manager returns the <code>AWSCURRENT</code> version.</p>
     *          <p>This value is typically a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type</a> value with
     *       32 hexadecimal digits.</p>
     */
    VersionId?: string;

    /**
     * <p>The staging label of the version of the secret to retrieve. </p>
     *          <p>Secrets Manager uses staging labels to keep track of different versions during the rotation process.
     *       If you include both this parameter and <code>VersionId</code>, the two parameters must refer
     *       to the same secret version. If you don't specify either a <code>VersionStage</code> or
     *       <code>VersionId</code>, Secrets Manager returns the <code>AWSCURRENT</code> version.</p>
     */
    VersionStage?: string;
}

/***
 *
 * @param {Service} instance
 *
 * @returns {Commands}
 *
 * @constructor
 *
 */

const Commands: (instance: Service) => Commands = (instance: Service): Commands => {
    return {
        createSecret: async (input: CreateSecretCommandInput) => {
            return await instance.send( new CreateSecretCommand( input ) );
        },

        getSecretValue: async (input: GetSecretValueCommandInput) => {
            return await instance.send( new GetSecretValueCommand(
                input )
            );
        },

        getRandomPassword: async (input: GetRandomPasswordCommandInput) => {
            return await instance.send( new GetRandomPasswordCommand(
                input )
            );
        },

        putSecretValue: async (input: PutSecretValueCommandInput) => {
            return await instance.send( new PutSecretValueCommand(
                input )
            );
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
