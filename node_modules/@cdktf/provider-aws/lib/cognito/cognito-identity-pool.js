"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoIdentityPool = exports.cognitoIdentityPoolCognitoIdentityProvidersToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        provider_name: cdktf.stringToTerraform(struct.providerName),
        server_side_token_check: cdktf.booleanToTerraform(struct.serverSideTokenCheck),
    };
}
exports.cognitoIdentityPoolCognitoIdentityProvidersToTerraform = cognitoIdentityPoolCognitoIdentityProvidersToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool}.
 *
 * @stability stable
 */
class CognitoIdentityPool extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_identity_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowClassicFlow = config.allowClassicFlow;
        this._allowUnauthenticatedIdentities = config.allowUnauthenticatedIdentities;
        this._developerProviderName = config.developerProviderName;
        this._identityPoolName = config.identityPoolName;
        this._openidConnectProviderArns = config.openidConnectProviderArns;
        this._samlProviderArns = config.samlProviderArns;
        this._supportedLoginProviders = config.supportedLoginProviders;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._cognitoIdentityProviders = config.cognitoIdentityProviders;
    }
    /**
     * @stability stable
     */
    get allowClassicFlow() {
        return this.getBooleanAttribute('allow_classic_flow');
    }
    /**
     * @stability stable
     */
    set allowClassicFlow(value) {
        this._allowClassicFlow = value;
    }
    /**
     * @stability stable
     */
    resetAllowClassicFlow() {
        this._allowClassicFlow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowClassicFlowInput() {
        return this._allowClassicFlow;
    }
    /**
     * @stability stable
     */
    get allowUnauthenticatedIdentities() {
        return this.getBooleanAttribute('allow_unauthenticated_identities');
    }
    /**
     * @stability stable
     */
    set allowUnauthenticatedIdentities(value) {
        this._allowUnauthenticatedIdentities = value;
    }
    /**
     * @stability stable
     */
    resetAllowUnauthenticatedIdentities() {
        this._allowUnauthenticatedIdentities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowUnauthenticatedIdentitiesInput() {
        return this._allowUnauthenticatedIdentities;
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    get developerProviderName() {
        return this.getStringAttribute('developer_provider_name');
    }
    /**
     * @stability stable
     */
    set developerProviderName(value) {
        this._developerProviderName = value;
    }
    /**
     * @stability stable
     */
    resetDeveloperProviderName() {
        this._developerProviderName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get developerProviderNameInput() {
        return this._developerProviderName;
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
    get identityPoolName() {
        return this.getStringAttribute('identity_pool_name');
    }
    /**
     * @stability stable
     */
    set identityPoolName(value) {
        this._identityPoolName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get identityPoolNameInput() {
        return this._identityPoolName;
    }
    /**
     * @stability stable
     */
    get openidConnectProviderArns() {
        return this.getListAttribute('openid_connect_provider_arns');
    }
    /**
     * @stability stable
     */
    set openidConnectProviderArns(value) {
        this._openidConnectProviderArns = value;
    }
    /**
     * @stability stable
     */
    resetOpenidConnectProviderArns() {
        this._openidConnectProviderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get openidConnectProviderArnsInput() {
        return this._openidConnectProviderArns;
    }
    /**
     * @stability stable
     */
    get samlProviderArns() {
        return this.getListAttribute('saml_provider_arns');
    }
    /**
     * @stability stable
     */
    set samlProviderArns(value) {
        this._samlProviderArns = value;
    }
    /**
     * @stability stable
     */
    resetSamlProviderArns() {
        this._samlProviderArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get samlProviderArnsInput() {
        return this._samlProviderArns;
    }
    /**
     * @stability stable
     */
    get supportedLoginProviders() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('supported_login_providers');
    }
    /**
     * @stability stable
     */
    set supportedLoginProviders(value) {
        this._supportedLoginProviders = value;
    }
    /**
     * @stability stable
     */
    resetSupportedLoginProviders() {
        this._supportedLoginProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get supportedLoginProvidersInput() {
        return this._supportedLoginProviders;
    }
    /**
     * @stability stable
     */
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    /**
     * @stability stable
     */
    set tags(value) {
        this._tags = value;
    }
    /**
     * @stability stable
     */
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsInput() {
        return this._tags;
    }
    /**
     * @stability stable
     */
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    /**
     * @stability stable
     */
    set tagsAll(value) {
        this._tagsAll = value;
    }
    /**
     * @stability stable
     */
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsAllInput() {
        return this._tagsAll;
    }
    /**
     * @stability stable
     */
    get cognitoIdentityProviders() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cognito_identity_providers');
    }
    /**
     * @stability stable
     */
    set cognitoIdentityProviders(value) {
        this._cognitoIdentityProviders = value;
    }
    /**
     * @stability stable
     */
    resetCognitoIdentityProviders() {
        this._cognitoIdentityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cognitoIdentityProvidersInput() {
        return this._cognitoIdentityProviders;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            allow_classic_flow: cdktf.booleanToTerraform(this._allowClassicFlow),
            allow_unauthenticated_identities: cdktf.booleanToTerraform(this._allowUnauthenticatedIdentities),
            developer_provider_name: cdktf.stringToTerraform(this._developerProviderName),
            identity_pool_name: cdktf.stringToTerraform(this._identityPoolName),
            openid_connect_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._openidConnectProviderArns),
            saml_provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._samlProviderArns),
            supported_login_providers: cdktf.hashMapper(cdktf.anyToTerraform)(this._supportedLoginProviders),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cognito_identity_providers: cdktf.listMapper(cognitoIdentityPoolCognitoIdentityProvidersToTerraform)(this._cognitoIdentityProviders),
        };
    }
}
exports.CognitoIdentityPool = CognitoIdentityPool;
_a = JSII_RTTI_SYMBOL_1;
CognitoIdentityPool[_a] = { fqn: "@cdktf/provider-aws.cognito.CognitoIdentityPool", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CognitoIdentityPool.tfResourceType = "aws_cognito_identity_pool";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by1pZGVudGl0eS1wb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvZ25pdG8vY29nbml0by1pZGVudGl0eS1wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBa0MvQixTQUFnQixzREFBc0QsQ0FBQyxNQUFvRDtJQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztLQUNoRixDQUFBO0FBQ0gsQ0FBQztBQVZELHdIQVVDOzs7Ozs7QUFJRCxNQUFhLG1CQUFvQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPOUQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWlDO1FBQ2hGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFL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QUNySSxDQUFDO0lBQ0osQ0FBQzs7QUFuT0gsa0RBb09DOzs7QUFsT0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxrQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b0lkZW50aXR5UG9vbENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd0NsYXNzaWNGbG93PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dVbmF1dGhlbnRpY2F0ZWRJZGVudGl0aWVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2ZWxvcGVyUHJvdmlkZXJOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGVudGl0eVBvb2xOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzYW1sUHJvdmlkZXJBcm5zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VwcG9ydGVkTG9naW5Qcm92aWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2duaXRvSWRlbnRpdHlQcm92aWRlcnM/OiBDb2duaXRvSWRlbnRpdHlQb29sQ29nbml0b0lkZW50aXR5UHJvdmlkZXJzW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbGllbnRJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm92aWRlck5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2ZXJTaWRlVG9rZW5DaGVjaz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvSWRlbnRpdHlQb29sQ29nbml0b0lkZW50aXR5UHJvdmlkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xpZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsaWVudElkKSxcbiAgICBwcm92aWRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3ZpZGVyTmFtZSksXG4gICAgc2VydmVyX3NpZGVfdG9rZW5fY2hlY2s6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlclNpZGVUb2tlbkNoZWNrKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29nbml0b0lkZW50aXR5UG9vbCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jb2duaXRvX2lkZW50aXR5X3Bvb2xcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29nbml0b0lkZW50aXR5UG9vbENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZ25pdG9faWRlbnRpdHlfcG9vbCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvd0NsYXNzaWNGbG93ID0gY29uZmlnLmFsbG93Q2xhc3NpY0Zsb3c7XG4gICAgdGhpcy5fYWxsb3dVbmF1dGhlbnRpY2F0ZWRJZGVudGl0aWVzID0gY29uZmlnLmFsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllcztcbiAgICB0aGlzLl9kZXZlbG9wZXJQcm92aWRlck5hbWUgPSBjb25maWcuZGV2ZWxvcGVyUHJvdmlkZXJOYW1lO1xuICAgIHRoaXMuX2lkZW50aXR5UG9vbE5hbWUgPSBjb25maWcuaWRlbnRpdHlQb29sTmFtZTtcbiAgICB0aGlzLl9vcGVuaWRDb25uZWN0UHJvdmlkZXJBcm5zID0gY29uZmlnLm9wZW5pZENvbm5lY3RQcm92aWRlckFybnM7XG4gICAgdGhpcy5fc2FtbFByb3ZpZGVyQXJucyA9IGNvbmZpZy5zYW1sUHJvdmlkZXJBcm5zO1xuICAgIHRoaXMuX3N1cHBvcnRlZExvZ2luUHJvdmlkZXJzID0gY29uZmlnLnN1cHBvcnRlZExvZ2luUHJvdmlkZXJzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fY29nbml0b0lkZW50aXR5UHJvdmlkZXJzID0gY29uZmlnLmNvZ25pdG9JZGVudGl0eVByb3ZpZGVycztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxsb3dfY2xhc3NpY19mbG93IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93Q2xhc3NpY0Zsb3c/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93Q2xhc3NpY0Zsb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfY2xhc3NpY19mbG93JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dDbGFzc2ljRmxvdyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dDbGFzc2ljRmxvdyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93Q2xhc3NpY0Zsb3coKSB7XG4gICAgdGhpcy5fYWxsb3dDbGFzc2ljRmxvdyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dDbGFzc2ljRmxvd0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsYXNzaWNGbG93O1xuICB9XG5cbiAgLy8gYWxsb3dfdW5hdXRoZW50aWNhdGVkX2lkZW50aXRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWxsb3dVbmF1dGhlbnRpY2F0ZWRJZGVudGl0aWVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWxsb3dfdW5hdXRoZW50aWNhdGVkX2lkZW50aXRpZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllcygpIHtcbiAgICB0aGlzLl9hbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd1VuYXV0aGVudGljYXRlZElkZW50aXRpZXM7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRldmVsb3Blcl9wcm92aWRlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmVsb3BlclByb3ZpZGVyTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2ZWxvcGVyUHJvdmlkZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2ZWxvcGVyX3Byb3ZpZGVyX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmVsb3BlclByb3ZpZGVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2ZWxvcGVyUHJvdmlkZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2ZWxvcGVyUHJvdmlkZXJOYW1lKCkge1xuICAgIHRoaXMuX2RldmVsb3BlclByb3ZpZGVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2ZWxvcGVyUHJvdmlkZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmVsb3BlclByb3ZpZGVyTmFtZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpZGVudGl0eV9wb29sX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWRlbnRpdHlQb29sTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWRlbnRpdHlQb29sTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkZW50aXR5X3Bvb2xfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWRlbnRpdHlQb29sTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWRlbnRpdHlQb29sTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZGVudGl0eVBvb2xOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkZW50aXR5UG9vbE5hbWU7XG4gIH1cblxuICAvLyBvcGVuaWRfY29ubmVjdF9wcm92aWRlcl9hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29wZW5pZENvbm5lY3RQcm92aWRlckFybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdvcGVuaWRfY29ubmVjdF9wcm92aWRlcl9hcm5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBvcGVuaWRDb25uZWN0UHJvdmlkZXJBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX29wZW5pZENvbm5lY3RQcm92aWRlckFybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcGVuaWRDb25uZWN0UHJvdmlkZXJBcm5zKCkge1xuICAgIHRoaXMuX29wZW5pZENvbm5lY3RQcm92aWRlckFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9wZW5pZENvbm5lY3RQcm92aWRlckFybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmlkQ29ubmVjdFByb3ZpZGVyQXJucztcbiAgfVxuXG4gIC8vIHNhbWxfcHJvdmlkZXJfYXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zYW1sUHJvdmlkZXJBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNhbWxQcm92aWRlckFybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2FtbF9wcm92aWRlcl9hcm5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYW1sUHJvdmlkZXJBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NhbWxQcm92aWRlckFybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYW1sUHJvdmlkZXJBcm5zKCkge1xuICAgIHRoaXMuX3NhbWxQcm92aWRlckFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhbWxQcm92aWRlckFybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtbFByb3ZpZGVyQXJucztcbiAgfVxuXG4gIC8vIHN1cHBvcnRlZF9sb2dpbl9wcm92aWRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VwcG9ydGVkTG9naW5Qcm92aWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZExvZ2luUHJvdmlkZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdXBwb3J0ZWRfbG9naW5fcHJvdmlkZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3VwcG9ydGVkTG9naW5Qcm92aWRlcnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N1cHBvcnRlZExvZ2luUHJvdmlkZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VwcG9ydGVkTG9naW5Qcm92aWRlcnMoKSB7XG4gICAgdGhpcy5fc3VwcG9ydGVkTG9naW5Qcm92aWRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZExvZ2luUHJvdmlkZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRlZExvZ2luUHJvdmlkZXJzO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGNvZ25pdG9faWRlbnRpdHlfcHJvdmlkZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZ25pdG9JZGVudGl0eVByb3ZpZGVycz86IENvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnNbXTsgXG4gIHB1YmxpYyBnZXQgY29nbml0b0lkZW50aXR5UHJvdmlkZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2duaXRvX2lkZW50aXR5X3Byb3ZpZGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvZ25pdG9JZGVudGl0eVByb3ZpZGVycyh2YWx1ZTogQ29nbml0b0lkZW50aXR5UG9vbENvZ25pdG9JZGVudGl0eVByb3ZpZGVyc1tdKSB7XG4gICAgdGhpcy5fY29nbml0b0lkZW50aXR5UHJvdmlkZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29nbml0b0lkZW50aXR5UHJvdmlkZXJzKCkge1xuICAgIHRoaXMuX2NvZ25pdG9JZGVudGl0eVByb3ZpZGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29nbml0b0lkZW50aXR5UHJvdmlkZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZ25pdG9JZGVudGl0eVByb3ZpZGVycztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dfY2xhc3NpY19mbG93OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYWxsb3dDbGFzc2ljRmxvdyksXG4gICAgICBhbGxvd191bmF1dGhlbnRpY2F0ZWRfaWRlbnRpdGllczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FsbG93VW5hdXRoZW50aWNhdGVkSWRlbnRpdGllcyksXG4gICAgICBkZXZlbG9wZXJfcHJvdmlkZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGV2ZWxvcGVyUHJvdmlkZXJOYW1lKSxcbiAgICAgIGlkZW50aXR5X3Bvb2xfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWRlbnRpdHlQb29sTmFtZSksXG4gICAgICBvcGVuaWRfY29ubmVjdF9wcm92aWRlcl9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9vcGVuaWRDb25uZWN0UHJvdmlkZXJBcm5zKSxcbiAgICAgIHNhbWxfcHJvdmlkZXJfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc2FtbFByb3ZpZGVyQXJucyksXG4gICAgICBzdXBwb3J0ZWRfbG9naW5fcHJvdmlkZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl9zdXBwb3J0ZWRMb2dpblByb3ZpZGVycyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGNvZ25pdG9faWRlbnRpdHlfcHJvdmlkZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNvZ25pdG9JZGVudGl0eVBvb2xDb2duaXRvSWRlbnRpdHlQcm92aWRlcnNUb1RlcnJhZm9ybSkodGhpcy5fY29nbml0b0lkZW50aXR5UHJvdmlkZXJzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=