"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoUserPoolClient = exports.CognitoUserPoolClientTokenValidityUnitsOutputReference = exports.cognitoUserPoolClientTokenValidityUnitsToTerraform = exports.CognitoUserPoolClientAnalyticsConfigurationOutputReference = exports.cognitoUserPoolClientAnalyticsConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_arn: cdktf.stringToTerraform(struct.applicationArn),
        application_id: cdktf.stringToTerraform(struct.applicationId),
        external_id: cdktf.stringToTerraform(struct.externalId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        user_data_shared: cdktf.booleanToTerraform(struct.userDataShared),
    };
}
exports.cognitoUserPoolClientAnalyticsConfigurationToTerraform = cognitoUserPoolClientAnalyticsConfigurationToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._applicationArn) {
            hasAnyValues = true;
            internalValueResult.applicationArn = this._applicationArn;
        }
        if (this._applicationId) {
            hasAnyValues = true;
            internalValueResult.applicationId = this._applicationId;
        }
        if (this._externalId) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._userDataShared) {
            hasAnyValues = true;
            internalValueResult.userDataShared = this._userDataShared;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationArn = undefined;
            this._applicationId = undefined;
            this._externalId = undefined;
            this._roleArn = undefined;
            this._userDataShared = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationArn = value.applicationArn;
            this._applicationId = value.applicationId;
            this._externalId = value.externalId;
            this._roleArn = value.roleArn;
            this._userDataShared = value.userDataShared;
        }
    }
    /**
     * @stability stable
     */
    get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    /**
     * @stability stable
     */
    set applicationArn(value) {
        this._applicationArn = value;
    }
    /**
     * @stability stable
     */
    resetApplicationArn() {
        this._applicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationArnInput() {
        return this._applicationArn;
    }
    /**
     * @stability stable
     */
    get applicationId() {
        return this.getStringAttribute('application_id');
    }
    /**
     * @stability stable
     */
    set applicationId(value) {
        this._applicationId = value;
    }
    /**
     * @stability stable
     */
    resetApplicationId() {
        this._applicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationIdInput() {
        return this._applicationId;
    }
    /**
     * @stability stable
     */
    get externalId() {
        return this.getStringAttribute('external_id');
    }
    /**
     * @stability stable
     */
    set externalId(value) {
        this._externalId = value;
    }
    /**
     * @stability stable
     */
    resetExternalId() {
        this._externalId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get externalIdInput() {
        return this._externalId;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    /**
     * @stability stable
     */
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get userDataShared() {
        return this.getBooleanAttribute('user_data_shared');
    }
    /**
     * @stability stable
     */
    set userDataShared(value) {
        this._userDataShared = value;
    }
    /**
     * @stability stable
     */
    resetUserDataShared() {
        this._userDataShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userDataSharedInput() {
        return this._userDataShared;
    }
}
exports.CognitoUserPoolClientAnalyticsConfigurationOutputReference = CognitoUserPoolClientAnalyticsConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CognitoUserPoolClientAnalyticsConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolClientAnalyticsConfigurationOutputReference", version: "3.0.1" };
function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        id_token: cdktf.stringToTerraform(struct.idToken),
        refresh_token: cdktf.stringToTerraform(struct.refreshToken),
    };
}
exports.cognitoUserPoolClientTokenValidityUnitsToTerraform = cognitoUserPoolClientTokenValidityUnitsToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessToken) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._idToken) {
            hasAnyValues = true;
            internalValueResult.idToken = this._idToken;
        }
        if (this._refreshToken) {
            hasAnyValues = true;
            internalValueResult.refreshToken = this._refreshToken;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessToken = undefined;
            this._idToken = undefined;
            this._refreshToken = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessToken = value.accessToken;
            this._idToken = value.idToken;
            this._refreshToken = value.refreshToken;
        }
    }
    /**
     * @stability stable
     */
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    /**
     * @stability stable
     */
    set accessToken(value) {
        this._accessToken = value;
    }
    /**
     * @stability stable
     */
    resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessTokenInput() {
        return this._accessToken;
    }
    /**
     * @stability stable
     */
    get idToken() {
        return this.getStringAttribute('id_token');
    }
    /**
     * @stability stable
     */
    set idToken(value) {
        this._idToken = value;
    }
    /**
     * @stability stable
     */
    resetIdToken() {
        this._idToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idTokenInput() {
        return this._idToken;
    }
    /**
     * @stability stable
     */
    get refreshToken() {
        return this.getStringAttribute('refresh_token');
    }
    /**
     * @stability stable
     */
    set refreshToken(value) {
        this._refreshToken = value;
    }
    /**
     * @stability stable
     */
    resetRefreshToken() {
        this._refreshToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get refreshTokenInput() {
        return this._refreshToken;
    }
}
exports.CognitoUserPoolClientTokenValidityUnitsOutputReference = CognitoUserPoolClientTokenValidityUnitsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CognitoUserPoolClientTokenValidityUnitsOutputReference[_b] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolClientTokenValidityUnitsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}.
 *
 * @stability stable
 */
class CognitoUserPoolClient extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_user_pool_client',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // analytics_configuration - computed: false, optional: true, required: false
        this._analyticsConfiguration = new CognitoUserPoolClientAnalyticsConfigurationOutputReference(this, "analytics_configuration", true);
        // token_validity_units - computed: false, optional: true, required: false
        this._tokenValidityUnits = new CognitoUserPoolClientTokenValidityUnitsOutputReference(this, "token_validity_units", true);
        this._accessTokenValidity = config.accessTokenValidity;
        this._allowedOauthFlows = config.allowedOauthFlows;
        this._allowedOauthFlowsUserPoolClient = config.allowedOauthFlowsUserPoolClient;
        this._allowedOauthScopes = config.allowedOauthScopes;
        this._callbackUrls = config.callbackUrls;
        this._defaultRedirectUri = config.defaultRedirectUri;
        this._enableTokenRevocation = config.enableTokenRevocation;
        this._explicitAuthFlows = config.explicitAuthFlows;
        this._generateSecret = config.generateSecret;
        this._idTokenValidity = config.idTokenValidity;
        this._logoutUrls = config.logoutUrls;
        this._name = config.name;
        this._preventUserExistenceErrors = config.preventUserExistenceErrors;
        this._readAttributes = config.readAttributes;
        this._refreshTokenValidity = config.refreshTokenValidity;
        this._supportedIdentityProviders = config.supportedIdentityProviders;
        this._userPoolId = config.userPoolId;
        this._writeAttributes = config.writeAttributes;
        this._analyticsConfiguration.internalValue = config.analyticsConfiguration;
        this._tokenValidityUnits.internalValue = config.tokenValidityUnits;
    }
    /**
     * @stability stable
     */
    get accessTokenValidity() {
        return this.getNumberAttribute('access_token_validity');
    }
    /**
     * @stability stable
     */
    set accessTokenValidity(value) {
        this._accessTokenValidity = value;
    }
    /**
     * @stability stable
     */
    resetAccessTokenValidity() {
        this._accessTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessTokenValidityInput() {
        return this._accessTokenValidity;
    }
    /**
     * @stability stable
     */
    get allowedOauthFlows() {
        return this.getListAttribute('allowed_oauth_flows');
    }
    /**
     * @stability stable
     */
    set allowedOauthFlows(value) {
        this._allowedOauthFlows = value;
    }
    /**
     * @stability stable
     */
    resetAllowedOauthFlows() {
        this._allowedOauthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowedOauthFlowsInput() {
        return this._allowedOauthFlows;
    }
    /**
     * @stability stable
     */
    get allowedOauthFlowsUserPoolClient() {
        return this.getBooleanAttribute('allowed_oauth_flows_user_pool_client');
    }
    /**
     * @stability stable
     */
    set allowedOauthFlowsUserPoolClient(value) {
        this._allowedOauthFlowsUserPoolClient = value;
    }
    /**
     * @stability stable
     */
    resetAllowedOauthFlowsUserPoolClient() {
        this._allowedOauthFlowsUserPoolClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowedOauthFlowsUserPoolClientInput() {
        return this._allowedOauthFlowsUserPoolClient;
    }
    /**
     * @stability stable
     */
    get allowedOauthScopes() {
        return this.getListAttribute('allowed_oauth_scopes');
    }
    /**
     * @stability stable
     */
    set allowedOauthScopes(value) {
        this._allowedOauthScopes = value;
    }
    /**
     * @stability stable
     */
    resetAllowedOauthScopes() {
        this._allowedOauthScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowedOauthScopesInput() {
        return this._allowedOauthScopes;
    }
    /**
     * @stability stable
     */
    get callbackUrls() {
        return this.getListAttribute('callback_urls');
    }
    /**
     * @stability stable
     */
    set callbackUrls(value) {
        this._callbackUrls = value;
    }
    /**
     * @stability stable
     */
    resetCallbackUrls() {
        this._callbackUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get callbackUrlsInput() {
        return this._callbackUrls;
    }
    // client_secret - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    /**
     * @stability stable
     */
    get defaultRedirectUri() {
        return this.getStringAttribute('default_redirect_uri');
    }
    /**
     * @stability stable
     */
    set defaultRedirectUri(value) {
        this._defaultRedirectUri = value;
    }
    /**
     * @stability stable
     */
    resetDefaultRedirectUri() {
        this._defaultRedirectUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultRedirectUriInput() {
        return this._defaultRedirectUri;
    }
    /**
     * @stability stable
     */
    get enableTokenRevocation() {
        return this.getBooleanAttribute('enable_token_revocation');
    }
    /**
     * @stability stable
     */
    set enableTokenRevocation(value) {
        this._enableTokenRevocation = value;
    }
    /**
     * @stability stable
     */
    resetEnableTokenRevocation() {
        this._enableTokenRevocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableTokenRevocationInput() {
        return this._enableTokenRevocation;
    }
    /**
     * @stability stable
     */
    get explicitAuthFlows() {
        return this.getListAttribute('explicit_auth_flows');
    }
    /**
     * @stability stable
     */
    set explicitAuthFlows(value) {
        this._explicitAuthFlows = value;
    }
    /**
     * @stability stable
     */
    resetExplicitAuthFlows() {
        this._explicitAuthFlows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get explicitAuthFlowsInput() {
        return this._explicitAuthFlows;
    }
    /**
     * @stability stable
     */
    get generateSecret() {
        return this.getBooleanAttribute('generate_secret');
    }
    /**
     * @stability stable
     */
    set generateSecret(value) {
        this._generateSecret = value;
    }
    /**
     * @stability stable
     */
    resetGenerateSecret() {
        this._generateSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get generateSecretInput() {
        return this._generateSecret;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    /**
     * @stability stable
     */
    get idTokenValidity() {
        return this.getNumberAttribute('id_token_validity');
    }
    /**
     * @stability stable
     */
    set idTokenValidity(value) {
        this._idTokenValidity = value;
    }
    /**
     * @stability stable
     */
    resetIdTokenValidity() {
        this._idTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idTokenValidityInput() {
        return this._idTokenValidity;
    }
    /**
     * @stability stable
     */
    get logoutUrls() {
        return this.getListAttribute('logout_urls');
    }
    /**
     * @stability stable
     */
    set logoutUrls(value) {
        this._logoutUrls = value;
    }
    /**
     * @stability stable
     */
    resetLogoutUrls() {
        this._logoutUrls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logoutUrlsInput() {
        return this._logoutUrls;
    }
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    /**
     * @stability stable
     */
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
    /**
     * @stability stable
     */
    get preventUserExistenceErrors() {
        return this.getStringAttribute('prevent_user_existence_errors');
    }
    /**
     * @stability stable
     */
    set preventUserExistenceErrors(value) {
        this._preventUserExistenceErrors = value;
    }
    /**
     * @stability stable
     */
    resetPreventUserExistenceErrors() {
        this._preventUserExistenceErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preventUserExistenceErrorsInput() {
        return this._preventUserExistenceErrors;
    }
    /**
     * @stability stable
     */
    get readAttributes() {
        return this.getListAttribute('read_attributes');
    }
    /**
     * @stability stable
     */
    set readAttributes(value) {
        this._readAttributes = value;
    }
    /**
     * @stability stable
     */
    resetReadAttributes() {
        this._readAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get readAttributesInput() {
        return this._readAttributes;
    }
    /**
     * @stability stable
     */
    get refreshTokenValidity() {
        return this.getNumberAttribute('refresh_token_validity');
    }
    /**
     * @stability stable
     */
    set refreshTokenValidity(value) {
        this._refreshTokenValidity = value;
    }
    /**
     * @stability stable
     */
    resetRefreshTokenValidity() {
        this._refreshTokenValidity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get refreshTokenValidityInput() {
        return this._refreshTokenValidity;
    }
    /**
     * @stability stable
     */
    get supportedIdentityProviders() {
        return this.getListAttribute('supported_identity_providers');
    }
    /**
     * @stability stable
     */
    set supportedIdentityProviders(value) {
        this._supportedIdentityProviders = value;
    }
    /**
     * @stability stable
     */
    resetSupportedIdentityProviders() {
        this._supportedIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportedIdentityProvidersInput() {
        return this._supportedIdentityProviders;
    }
    /**
     * @stability stable
     */
    get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    /**
     * @stability stable
     */
    set userPoolId(value) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userPoolIdInput() {
        return this._userPoolId;
    }
    /**
     * @stability stable
     */
    get writeAttributes() {
        return this.getListAttribute('write_attributes');
    }
    /**
     * @stability stable
     */
    set writeAttributes(value) {
        this._writeAttributes = value;
    }
    /**
     * @stability stable
     */
    resetWriteAttributes() {
        this._writeAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get writeAttributesInput() {
        return this._writeAttributes;
    }
    /**
     * @stability stable
     */
    get analyticsConfiguration() {
        return this._analyticsConfiguration;
    }
    /**
     * @stability stable
     */
    putAnalyticsConfiguration(value) {
        this._analyticsConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAnalyticsConfiguration() {
        this._analyticsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get analyticsConfigurationInput() {
        return this._analyticsConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get tokenValidityUnits() {
        return this._tokenValidityUnits;
    }
    /**
     * @stability stable
     */
    putTokenValidityUnits(value) {
        this._tokenValidityUnits.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTokenValidityUnits() {
        this._tokenValidityUnits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tokenValidityUnitsInput() {
        return this._tokenValidityUnits.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            access_token_validity: cdktf.numberToTerraform(this._accessTokenValidity),
            allowed_oauth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthFlows),
            allowed_oauth_flows_user_pool_client: cdktf.booleanToTerraform(this._allowedOauthFlowsUserPoolClient),
            allowed_oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOauthScopes),
            callback_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._callbackUrls),
            default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
            enable_token_revocation: cdktf.booleanToTerraform(this._enableTokenRevocation),
            explicit_auth_flows: cdktf.listMapper(cdktf.stringToTerraform)(this._explicitAuthFlows),
            generate_secret: cdktf.booleanToTerraform(this._generateSecret),
            id_token_validity: cdktf.numberToTerraform(this._idTokenValidity),
            logout_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._logoutUrls),
            name: cdktf.stringToTerraform(this._name),
            prevent_user_existence_errors: cdktf.stringToTerraform(this._preventUserExistenceErrors),
            read_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._readAttributes),
            refresh_token_validity: cdktf.numberToTerraform(this._refreshTokenValidity),
            supported_identity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._supportedIdentityProviders),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId),
            write_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._writeAttributes),
            analytics_configuration: cognitoUserPoolClientAnalyticsConfigurationToTerraform(this._analyticsConfiguration.internalValue),
            token_validity_units: cognitoUserPoolClientTokenValidityUnitsToTerraform(this._tokenValidityUnits.internalValue),
        };
    }
}
exports.CognitoUserPoolClient = CognitoUserPoolClient;
_c = JSII_RTTI_SYMBOL_1;
CognitoUserPoolClient[_c] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolClient", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CognitoUserPoolClient.tfResourceType = "aws_cognito_user_pool_client";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by11c2VyLXBvb2wtY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvZ25pdG8vY29nbml0by11c2VyLXBvb2wtY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBMEQvQixTQUFnQixzREFBc0QsQ0FBQyxNQUFpSDtJQUN0TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNuRSxDQUFBO0FBQ0gsQ0FBQztBQVpELHdIQVlDOzs7O0FBRUQsTUFBYSwwREFBMkQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlqRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFB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Z0JBQWdCLENBQUM7WUFDakUsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN4RSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN4RixlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hGLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDM0UsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7WUFDekcsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3ZELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2xGLHVCQUF1QixFQUFFLHNEQUFzRCxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7WUFDM0gsb0JBQW9CLEVBQUUsa0RBQWtELENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztTQUNqSCxDQUFDO0lBQ0osQ0FBQzs7QUFoWkgsc0RBaVpDOzs7QUEvWUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxvQ0FBYyxHQUFXLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQ2xpZW50Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXNzVG9rZW5WYWxpZGl0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93ZWRPYXV0aEZsb3dzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dlZE9hdXRoU2NvcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYWxsYmFja1VybHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFJlZGlyZWN0VXJpPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVUb2tlblJldm9jYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHBsaWNpdEF1dGhGbG93cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdlbmVyYXRlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZFRva2VuVmFsaWRpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ291dFVybHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVhZEF0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZnJlc2hUb2tlblZhbGlkaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VwcG9ydGVkSWRlbnRpdHlQcm92aWRlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyUG9vbElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3cml0ZUF0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYW5hbHl0aWNzQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRva2VuVmFsaWRpdHlVbml0cz86IENvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQ2xpZW50QW5hbHl0aWNzQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXBwbGljYXRpb25Bcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4dGVybmFsSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyRGF0YVNoYXJlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sQ2xpZW50QW5hbHl0aWNzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFwcGxpY2F0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hcHBsaWNhdGlvbkFybiksXG4gICAgYXBwbGljYXRpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25JZCksXG4gICAgZXh0ZXJuYWxfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXh0ZXJuYWxJZCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgdXNlcl9kYXRhX3NoYXJlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlckRhdGFTaGFyZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbENsaWVudEFuYWx5dGljc0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FwcGxpY2F0aW9uQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcHBsaWNhdGlvbkFybiA9IHRoaXMuX2FwcGxpY2F0aW9uQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXBwbGljYXRpb25JZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXBwbGljYXRpb25JZCA9IHRoaXMuX2FwcGxpY2F0aW9uSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHRlcm5hbElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leHRlcm5hbElkID0gdGhpcy5fZXh0ZXJuYWxJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlckRhdGFTaGFyZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJEYXRhU2hhcmVkID0gdGhpcy5fdXNlckRhdGFTaGFyZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbklkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VyRGF0YVNoYXJlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25Bcm4gPSB2YWx1ZS5hcHBsaWNhdGlvbkFybjtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSWQgPSB2YWx1ZS5hcHBsaWNhdGlvbklkO1xuICAgICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHZhbHVlLmV4dGVybmFsSWQ7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWUucm9sZUFybjtcbiAgICAgIHRoaXMuX3VzZXJEYXRhU2hhcmVkID0gdmFsdWUudXNlckRhdGFTaGFyZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbGljYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25Bcm4oKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uQXJuO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25JZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBsaWNhdGlvbklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25JZCgpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uSWQ7XG4gIH1cblxuICAvLyBleHRlcm5hbF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leHRlcm5hbElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleHRlcm5hbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXh0ZXJuYWxfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4dGVybmFsSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4dGVybmFsSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHRlcm5hbElkKCkge1xuICAgIHRoaXMuX2V4dGVybmFsSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dGVybmFsSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZXJuYWxJZDtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9sZUFybigpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyB1c2VyX2RhdGFfc2hhcmVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJEYXRhU2hhcmVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB1c2VyRGF0YVNoYXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VyX2RhdGFfc2hhcmVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlckRhdGFTaGFyZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZXJEYXRhU2hhcmVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlckRhdGFTaGFyZWQoKSB7XG4gICAgdGhpcy5fdXNlckRhdGFTaGFyZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhU2hhcmVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJEYXRhU2hhcmVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXNzVG9rZW4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkVG9rZW4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWZyZXNoVG9rZW4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHNPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzVG9rZW4pLFxuICAgIGlkX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlkVG9rZW4pLFxuICAgIHJlZnJlc2hfdG9rZW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVmcmVzaFRva2VuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjZXNzVG9rZW4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc1Rva2VuID0gdGhpcy5fYWNjZXNzVG9rZW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9pZFRva2VuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pZFRva2VuID0gdGhpcy5faWRUb2tlbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlZnJlc2hUb2tlbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVmcmVzaFRva2VuID0gdGhpcy5fcmVmcmVzaFRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sQ2xpZW50VG9rZW5WYWxpZGl0eVVuaXRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjZXNzVG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pZFRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVmcmVzaFRva2VuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY2Nlc3NUb2tlbiA9IHZhbHVlLmFjY2Vzc1Rva2VuO1xuICAgICAgdGhpcy5faWRUb2tlbiA9IHZhbHVlLmlkVG9rZW47XG4gICAgICB0aGlzLl9yZWZyZXNoVG9rZW4gPSB2YWx1ZS5yZWZyZXNoVG9rZW47XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1Rva2VuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2Vzc190b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgdGhpcy5fYWNjZXNzVG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuO1xuICB9XG5cbiAgLy8gaWRfdG9rZW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWRUb2tlbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkX3Rva2VuJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZFRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZFRva2VuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRUb2tlbigpIHtcbiAgICB0aGlzLl9pZFRva2VuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZFRva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkVG9rZW47XG4gIH1cblxuICAvLyByZWZyZXNoX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZnJlc2hUb2tlbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVmcmVzaFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVmcmVzaF90b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVmcmVzaFRva2VuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWZyZXNoVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWZyZXNoVG9rZW4oKSB7XG4gICAgdGhpcy5fcmVmcmVzaFRva2VuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWZyZXNoVG9rZW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmcmVzaFRva2VuO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sQ2xpZW50IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvZ25pdG9Vc2VyUG9vbENsaWVudENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZ25pdG9fdXNlcl9wb29sX2NsaWVudCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hY2Nlc3NUb2tlblZhbGlkaXR5ID0gY29uZmlnLmFjY2Vzc1Rva2VuVmFsaWRpdHk7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3MgPSBjb25maWcuYWxsb3dlZE9hdXRoRmxvd3M7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCA9IGNvbmZpZy5hbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50O1xuICAgIHRoaXMuX2FsbG93ZWRPYXV0aFNjb3BlcyA9IGNvbmZpZy5hbGxvd2VkT2F1dGhTY29wZXM7XG4gICAgdGhpcy5fY2FsbGJhY2tVcmxzID0gY29uZmlnLmNhbGxiYWNrVXJscztcbiAgICB0aGlzLl9kZWZhdWx0UmVkaXJlY3RVcmkgPSBjb25maWcuZGVmYXVsdFJlZGlyZWN0VXJpO1xuICAgIHRoaXMuX2VuYWJsZVRva2VuUmV2b2NhdGlvbiA9IGNvbmZpZy5lbmFibGVUb2tlblJldm9jYXRpb247XG4gICAgdGhpcy5fZXhwbGljaXRBdXRoRmxvd3MgPSBjb25maWcuZXhwbGljaXRBdXRoRmxvd3M7XG4gICAgdGhpcy5fZ2VuZXJhdGVTZWNyZXQgPSBjb25maWcuZ2VuZXJhdGVTZWNyZXQ7XG4gICAgdGhpcy5faWRUb2tlblZhbGlkaXR5ID0gY29uZmlnLmlkVG9rZW5WYWxpZGl0eTtcbiAgICB0aGlzLl9sb2dvdXRVcmxzID0gY29uZmlnLmxvZ291dFVybHM7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3ByZXZlbnRVc2VyRXhpc3RlbmNlRXJyb3JzID0gY29uZmlnLnByZXZlbnRVc2VyRXhpc3RlbmNlRXJyb3JzO1xuICAgIHRoaXMuX3JlYWRBdHRyaWJ1dGVzID0gY29uZmlnLnJlYWRBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX3JlZnJlc2hUb2tlblZhbGlkaXR5ID0gY29uZmlnLnJlZnJlc2hUb2tlblZhbGlkaXR5O1xuICAgIHRoaXMuX3N1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzID0gY29uZmlnLnN1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzO1xuICAgIHRoaXMuX3VzZXJQb29sSWQgPSBjb25maWcudXNlclBvb2xJZDtcbiAgICB0aGlzLl93cml0ZUF0dHJpYnV0ZXMgPSBjb25maWcud3JpdGVBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2FuYWx5dGljc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hbmFseXRpY3NDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3Rva2VuVmFsaWRpdHlVbml0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRva2VuVmFsaWRpdHlVbml0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjZXNzX3Rva2VuX3ZhbGlkaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1Rva2VuVmFsaWRpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuVmFsaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhY2Nlc3NfdG9rZW5fdmFsaWRpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc1Rva2VuVmFsaWRpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuVmFsaWRpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NUb2tlblZhbGlkaXR5KCkge1xuICAgIHRoaXMuX2FjY2Vzc1Rva2VuVmFsaWRpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1Rva2VuVmFsaWRpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzVG9rZW5WYWxpZGl0eTtcbiAgfVxuXG4gIC8vIGFsbG93ZWRfb2F1dGhfZmxvd3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dlZE9hdXRoRmxvd3M/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoRmxvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxsb3dlZF9vYXV0aF9mbG93cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dlZE9hdXRoRmxvd3ModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvd2VkT2F1dGhGbG93cygpIHtcbiAgICB0aGlzLl9hbGxvd2VkT2F1dGhGbG93cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoRmxvd3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dlZE9hdXRoRmxvd3M7XG4gIH1cblxuICAvLyBhbGxvd2VkX29hdXRoX2Zsb3dzX3VzZXJfcG9vbF9jbGllbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd2VkX29hdXRoX2Zsb3dzX3VzZXJfcG9vbF9jbGllbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCgpIHtcbiAgICB0aGlzLl9hbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkT2F1dGhGbG93c1VzZXJQb29sQ2xpZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93ZWRPYXV0aEZsb3dzVXNlclBvb2xDbGllbnQ7XG4gIH1cblxuICAvLyBhbGxvd2VkX29hdXRoX3Njb3BlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd2VkT2F1dGhTY29wZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoU2NvcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FsbG93ZWRfb2F1dGhfc2NvcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkT2F1dGhTY29wZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWxsb3dlZE9hdXRoU2NvcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dlZE9hdXRoU2NvcGVzKCkge1xuICAgIHRoaXMuX2FsbG93ZWRPYXV0aFNjb3BlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE9hdXRoU2NvcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93ZWRPYXV0aFNjb3BlcztcbiAgfVxuXG4gIC8vIGNhbGxiYWNrX3VybHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWxsYmFja1VybHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2FsbGJhY2tVcmxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NhbGxiYWNrX3VybHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhbGxiYWNrVXJscyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jYWxsYmFja1VybHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYWxsYmFja1VybHMoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tVcmxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWxsYmFja1VybHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tVcmxzO1xuICB9XG5cbiAgLy8gY2xpZW50X3NlY3JldCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsaWVudFNlY3JldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF9zZWNyZXQnKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfcmVkaXJlY3RfdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRSZWRpcmVjdFVyaT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlZGlyZWN0VXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9yZWRpcmVjdF91cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRSZWRpcmVjdFVyaSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJlZGlyZWN0VXJpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdFJlZGlyZWN0VXJpKCkge1xuICAgIHRoaXMuX2RlZmF1bHRSZWRpcmVjdFVyaSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFJlZGlyZWN0VXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRSZWRpcmVjdFVyaTtcbiAgfVxuXG4gIC8vIGVuYWJsZV90b2tlbl9yZXZvY2F0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlVG9rZW5SZXZvY2F0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVUb2tlblJldm9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX3Rva2VuX3Jldm9jYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVUb2tlblJldm9jYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZVRva2VuUmV2b2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZVRva2VuUmV2b2NhdGlvbigpIHtcbiAgICB0aGlzLl9lbmFibGVUb2tlblJldm9jYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZVRva2VuUmV2b2NhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVUb2tlblJldm9jYXRpb247XG4gIH1cblxuICAvLyBleHBsaWNpdF9hdXRoX2Zsb3dzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4cGxpY2l0QXV0aEZsb3dzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGV4cGxpY2l0QXV0aEZsb3dzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V4cGxpY2l0X2F1dGhfZmxvd3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4cGxpY2l0QXV0aEZsb3dzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2V4cGxpY2l0QXV0aEZsb3dzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhwbGljaXRBdXRoRmxvd3MoKSB7XG4gICAgdGhpcy5fZXhwbGljaXRBdXRoRmxvd3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4cGxpY2l0QXV0aEZsb3dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGxpY2l0QXV0aEZsb3dzO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGVfc2VjcmV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dlbmVyYXRlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBnZW5lcmF0ZVNlY3JldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdnZW5lcmF0ZV9zZWNyZXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBnZW5lcmF0ZVNlY3JldCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZ2VuZXJhdGVTZWNyZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHZW5lcmF0ZVNlY3JldCgpIHtcbiAgICB0aGlzLl9nZW5lcmF0ZVNlY3JldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGVTZWNyZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVTZWNyZXQ7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaWRfdG9rZW5fdmFsaWRpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWRUb2tlblZhbGlkaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpZFRva2VuVmFsaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpZF90b2tlbl92YWxpZGl0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWRUb2tlblZhbGlkaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pZFRva2VuVmFsaWRpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZFRva2VuVmFsaWRpdHkoKSB7XG4gICAgdGhpcy5faWRUb2tlblZhbGlkaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZFRva2VuVmFsaWRpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWRUb2tlblZhbGlkaXR5O1xuICB9XG5cbiAgLy8gbG9nb3V0X3VybHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dvdXRVcmxzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGxvZ291dFVybHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbG9nb3V0X3VybHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ291dFVybHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9nb3V0VXJscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ291dFVybHMoKSB7XG4gICAgdGhpcy5fbG9nb3V0VXJscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nb3V0VXJsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dvdXRVcmxzO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwcmV2ZW50X3VzZXJfZXhpc3RlbmNlX2Vycm9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZXZlbnRVc2VyRXhpc3RlbmNlRXJyb3JzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZXZlbnRfdXNlcl9leGlzdGVuY2VfZXJyb3JzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycygpIHtcbiAgICB0aGlzLl9wcmV2ZW50VXNlckV4aXN0ZW5jZUVycm9ycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnM7XG4gIH1cblxuICAvLyByZWFkX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVhZEF0dHJpYnV0ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcmVhZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncmVhZF9hdHRyaWJ1dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWFkQXR0cmlidXRlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9yZWFkQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlYWRBdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuX3JlYWRBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWFkQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFkQXR0cmlidXRlcztcbiAgfVxuXG4gIC8vIHJlZnJlc2hfdG9rZW5fdmFsaWRpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVmcmVzaFRva2VuVmFsaWRpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHJlZnJlc2hUb2tlblZhbGlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncmVmcmVzaF90b2tlbl92YWxpZGl0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVmcmVzaFRva2VuVmFsaWRpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JlZnJlc2hUb2tlblZhbGlkaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVmcmVzaFRva2VuVmFsaWRpdHkoKSB7XG4gICAgdGhpcy5fcmVmcmVzaFRva2VuVmFsaWRpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZnJlc2hUb2tlblZhbGlkaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZnJlc2hUb2tlblZhbGlkaXR5O1xuICB9XG5cbiAgLy8gc3VwcG9ydGVkX2lkZW50aXR5X3Byb3ZpZGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXBwb3J0ZWRfaWRlbnRpdHlfcHJvdmlkZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzKCkge1xuICAgIHRoaXMuX3N1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycztcbiAgfVxuXG4gIC8vIHVzZXJfcG9vbF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VyUG9vbElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyUG9vbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyUG9vbElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyUG9vbElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJQb29sSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclBvb2xJZDtcbiAgfVxuXG4gIC8vIHdyaXRlX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd3JpdGVBdHRyaWJ1dGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHdyaXRlQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd3cml0ZV9hdHRyaWJ1dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB3cml0ZUF0dHJpYnV0ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd3JpdGVBdHRyaWJ1dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V3JpdGVBdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuX3dyaXRlQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd3JpdGVBdHRyaWJ1dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRlQXR0cmlidXRlcztcbiAgfVxuXG4gIC8vIGFuYWx5dGljc19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FuYWx5dGljc0NvbmZpZ3VyYXRpb24gPSBuZXcgQ29nbml0b1VzZXJQb29sQ2xpZW50QW5hbHl0aWNzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhbmFseXRpY3NfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhbmFseXRpY3NDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmFseXRpY3NDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBbmFseXRpY3NDb25maWd1cmF0aW9uKHZhbHVlOiBDb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYW5hbHl0aWNzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QW5hbHl0aWNzQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hbmFseXRpY3NDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFuYWx5dGljc0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW5hbHl0aWNzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdG9rZW5fdmFsaWRpdHlfdW5pdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdG9rZW5WYWxpZGl0eVVuaXRzID0gbmV3IENvZ25pdG9Vc2VyUG9vbENsaWVudFRva2VuVmFsaWRpdHlVbml0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0b2tlbl92YWxpZGl0eV91bml0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0b2tlblZhbGlkaXR5VW5pdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuVmFsaWRpdHlVbml0cztcbiAgfVxuICBwdWJsaWMgcHV0VG9rZW5WYWxpZGl0eVVuaXRzKHZhbHVlOiBDb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHMpIHtcbiAgICB0aGlzLl90b2tlblZhbGlkaXR5VW5pdHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRva2VuVmFsaWRpdHlVbml0cygpIHtcbiAgICB0aGlzLl90b2tlblZhbGlkaXR5VW5pdHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9rZW5WYWxpZGl0eVVuaXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuVmFsaWRpdHlVbml0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NfdG9rZW5fdmFsaWRpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2FjY2Vzc1Rva2VuVmFsaWRpdHkpLFxuICAgICAgYWxsb3dlZF9vYXV0aF9mbG93czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYWxsb3dlZE9hdXRoRmxvd3MpLFxuICAgICAgYWxsb3dlZF9vYXV0aF9mbG93c191c2VyX3Bvb2xfY2xpZW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYWxsb3dlZE9hdXRoRmxvd3NVc2VyUG9vbENsaWVudCksXG4gICAgICBhbGxvd2VkX29hdXRoX3Njb3BlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYWxsb3dlZE9hdXRoU2NvcGVzKSxcbiAgICAgIGNhbGxiYWNrX3VybHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2NhbGxiYWNrVXJscyksXG4gICAgICBkZWZhdWx0X3JlZGlyZWN0X3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdFJlZGlyZWN0VXJpKSxcbiAgICAgIGVuYWJsZV90b2tlbl9yZXZvY2F0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlVG9rZW5SZXZvY2F0aW9uKSxcbiAgICAgIGV4cGxpY2l0X2F1dGhfZmxvd3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2V4cGxpY2l0QXV0aEZsb3dzKSxcbiAgICAgIGdlbmVyYXRlX3NlY3JldDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2dlbmVyYXRlU2VjcmV0KSxcbiAgICAgIGlkX3Rva2VuX3ZhbGlkaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9pZFRva2VuVmFsaWRpdHkpLFxuICAgICAgbG9nb3V0X3VybHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2xvZ291dFVybHMpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwcmV2ZW50X3VzZXJfZXhpc3RlbmNlX2Vycm9yczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJldmVudFVzZXJFeGlzdGVuY2VFcnJvcnMpLFxuICAgICAgcmVhZF9hdHRyaWJ1dGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9yZWFkQXR0cmlidXRlcyksXG4gICAgICByZWZyZXNoX3Rva2VuX3ZhbGlkaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9yZWZyZXNoVG9rZW5WYWxpZGl0eSksXG4gICAgICBzdXBwb3J0ZWRfaWRlbnRpdHlfcHJvdmlkZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zdXBwb3J0ZWRJZGVudGl0eVByb3ZpZGVycyksXG4gICAgICB1c2VyX3Bvb2xfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VzZXJQb29sSWQpLFxuICAgICAgd3JpdGVfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fd3JpdGVBdHRyaWJ1dGVzKSxcbiAgICAgIGFuYWx5dGljc19jb25maWd1cmF0aW9uOiBjb2duaXRvVXNlclBvb2xDbGllbnRBbmFseXRpY3NDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fYW5hbHl0aWNzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHRva2VuX3ZhbGlkaXR5X3VuaXRzOiBjb2duaXRvVXNlclBvb2xDbGllbnRUb2tlblZhbGlkaXR5VW5pdHNUb1RlcnJhZm9ybSh0aGlzLl90b2tlblZhbGlkaXR5VW5pdHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19