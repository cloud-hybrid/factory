"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apigatewayv2Integration = exports.Apigatewayv2IntegrationTlsConfigOutputReference = exports.apigatewayv2IntegrationTlsConfigToTerraform = exports.apigatewayv2IntegrationResponseParametersToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apigatewayv2IntegrationResponseParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct.mappings),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
exports.apigatewayv2IntegrationResponseParametersToTerraform = apigatewayv2IntegrationResponseParametersToTerraform;
function apigatewayv2IntegrationTlsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        server_name_to_verify: cdktf.stringToTerraform(struct.serverNameToVerify),
    };
}
exports.apigatewayv2IntegrationTlsConfigToTerraform = apigatewayv2IntegrationTlsConfigToTerraform;
/**
 * @stability stable
 */
class Apigatewayv2IntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._serverNameToVerify) {
            hasAnyValues = true;
            internalValueResult.serverNameToVerify = this._serverNameToVerify;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._serverNameToVerify = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._serverNameToVerify = value.serverNameToVerify;
        }
    }
    /**
     * @stability stable
     */
    get serverNameToVerify() {
        return this.getStringAttribute('server_name_to_verify');
    }
    /**
     * @stability stable
     */
    set serverNameToVerify(value) {
        this._serverNameToVerify = value;
    }
    /**
     * @stability stable
     */
    resetServerNameToVerify() {
        this._serverNameToVerify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serverNameToVerifyInput() {
        return this._serverNameToVerify;
    }
}
exports.Apigatewayv2IntegrationTlsConfigOutputReference = Apigatewayv2IntegrationTlsConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Apigatewayv2IntegrationTlsConfigOutputReference[_a] = { fqn: "@cdktf/provider-aws.apigatewayv2.Apigatewayv2IntegrationTlsConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration}.
 *
 * @stability stable
 */
class Apigatewayv2Integration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html aws_apigatewayv2_integration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apigatewayv2_integration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // tls_config - computed: false, optional: true, required: false
        this._tlsConfig = new Apigatewayv2IntegrationTlsConfigOutputReference(this, "tls_config", true);
        this._apiId = config.apiId;
        this._connectionId = config.connectionId;
        this._connectionType = config.connectionType;
        this._contentHandlingStrategy = config.contentHandlingStrategy;
        this._credentialsArn = config.credentialsArn;
        this._description = config.description;
        this._integrationMethod = config.integrationMethod;
        this._integrationSubtype = config.integrationSubtype;
        this._integrationType = config.integrationType;
        this._integrationUri = config.integrationUri;
        this._passthroughBehavior = config.passthroughBehavior;
        this._payloadFormatVersion = config.payloadFormatVersion;
        this._requestParameters = config.requestParameters;
        this._requestTemplates = config.requestTemplates;
        this._templateSelectionExpression = config.templateSelectionExpression;
        this._timeoutMilliseconds = config.timeoutMilliseconds;
        this._responseParameters = config.responseParameters;
        this._tlsConfig.internalValue = config.tlsConfig;
    }
    /**
     * @stability stable
     */
    get apiId() {
        return this.getStringAttribute('api_id');
    }
    /**
     * @stability stable
     */
    set apiId(value) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get apiIdInput() {
        return this._apiId;
    }
    /**
     * @stability stable
     */
    get connectionId() {
        return this.getStringAttribute('connection_id');
    }
    /**
     * @stability stable
     */
    set connectionId(value) {
        this._connectionId = value;
    }
    /**
     * @stability stable
     */
    resetConnectionId() {
        this._connectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionIdInput() {
        return this._connectionId;
    }
    /**
     * @stability stable
     */
    get connectionType() {
        return this.getStringAttribute('connection_type');
    }
    /**
     * @stability stable
     */
    set connectionType(value) {
        this._connectionType = value;
    }
    /**
     * @stability stable
     */
    resetConnectionType() {
        this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionTypeInput() {
        return this._connectionType;
    }
    /**
     * @stability stable
     */
    get contentHandlingStrategy() {
        return this.getStringAttribute('content_handling_strategy');
    }
    /**
     * @stability stable
     */
    set contentHandlingStrategy(value) {
        this._contentHandlingStrategy = value;
    }
    /**
     * @stability stable
     */
    resetContentHandlingStrategy() {
        this._contentHandlingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentHandlingStrategyInput() {
        return this._contentHandlingStrategy;
    }
    /**
     * @stability stable
     */
    get credentialsArn() {
        return this.getStringAttribute('credentials_arn');
    }
    /**
     * @stability stable
     */
    set credentialsArn(value) {
        this._credentialsArn = value;
    }
    /**
     * @stability stable
     */
    resetCredentialsArn() {
        this._credentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get credentialsArnInput() {
        return this._credentialsArn;
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
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
    get integrationMethod() {
        return this.getStringAttribute('integration_method');
    }
    /**
     * @stability stable
     */
    set integrationMethod(value) {
        this._integrationMethod = value;
    }
    /**
     * @stability stable
     */
    resetIntegrationMethod() {
        this._integrationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get integrationMethodInput() {
        return this._integrationMethod;
    }
    // integration_response_selection_expression - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get integrationResponseSelectionExpression() {
        return this.getStringAttribute('integration_response_selection_expression');
    }
    /**
     * @stability stable
     */
    get integrationSubtype() {
        return this.getStringAttribute('integration_subtype');
    }
    /**
     * @stability stable
     */
    set integrationSubtype(value) {
        this._integrationSubtype = value;
    }
    /**
     * @stability stable
     */
    resetIntegrationSubtype() {
        this._integrationSubtype = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get integrationSubtypeInput() {
        return this._integrationSubtype;
    }
    /**
     * @stability stable
     */
    get integrationType() {
        return this.getStringAttribute('integration_type');
    }
    /**
     * @stability stable
     */
    set integrationType(value) {
        this._integrationType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get integrationTypeInput() {
        return this._integrationType;
    }
    /**
     * @stability stable
     */
    get integrationUri() {
        return this.getStringAttribute('integration_uri');
    }
    /**
     * @stability stable
     */
    set integrationUri(value) {
        this._integrationUri = value;
    }
    /**
     * @stability stable
     */
    resetIntegrationUri() {
        this._integrationUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get integrationUriInput() {
        return this._integrationUri;
    }
    /**
     * @stability stable
     */
    get passthroughBehavior() {
        return this.getStringAttribute('passthrough_behavior');
    }
    /**
     * @stability stable
     */
    set passthroughBehavior(value) {
        this._passthroughBehavior = value;
    }
    /**
     * @stability stable
     */
    resetPassthroughBehavior() {
        this._passthroughBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passthroughBehaviorInput() {
        return this._passthroughBehavior;
    }
    /**
     * @stability stable
     */
    get payloadFormatVersion() {
        return this.getStringAttribute('payload_format_version');
    }
    /**
     * @stability stable
     */
    set payloadFormatVersion(value) {
        this._payloadFormatVersion = value;
    }
    /**
     * @stability stable
     */
    resetPayloadFormatVersion() {
        this._payloadFormatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get payloadFormatVersionInput() {
        return this._payloadFormatVersion;
    }
    /**
     * @stability stable
     */
    get requestParameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('request_parameters');
    }
    /**
     * @stability stable
     */
    set requestParameters(value) {
        this._requestParameters = value;
    }
    /**
     * @stability stable
     */
    resetRequestParameters() {
        this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requestParametersInput() {
        return this._requestParameters;
    }
    /**
     * @stability stable
     */
    get requestTemplates() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('request_templates');
    }
    /**
     * @stability stable
     */
    set requestTemplates(value) {
        this._requestTemplates = value;
    }
    /**
     * @stability stable
     */
    resetRequestTemplates() {
        this._requestTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requestTemplatesInput() {
        return this._requestTemplates;
    }
    /**
     * @stability stable
     */
    get templateSelectionExpression() {
        return this.getStringAttribute('template_selection_expression');
    }
    /**
     * @stability stable
     */
    set templateSelectionExpression(value) {
        this._templateSelectionExpression = value;
    }
    /**
     * @stability stable
     */
    resetTemplateSelectionExpression() {
        this._templateSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get templateSelectionExpressionInput() {
        return this._templateSelectionExpression;
    }
    /**
     * @stability stable
     */
    get timeoutMilliseconds() {
        return this.getNumberAttribute('timeout_milliseconds');
    }
    /**
     * @stability stable
     */
    set timeoutMilliseconds(value) {
        this._timeoutMilliseconds = value;
    }
    /**
     * @stability stable
     */
    resetTimeoutMilliseconds() {
        this._timeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutMillisecondsInput() {
        return this._timeoutMilliseconds;
    }
    /**
     * @stability stable
     */
    get responseParameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('response_parameters');
    }
    /**
     * @stability stable
     */
    set responseParameters(value) {
        this._responseParameters = value;
    }
    /**
     * @stability stable
     */
    resetResponseParameters() {
        this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseParametersInput() {
        return this._responseParameters;
    }
    /**
     * @stability stable
     */
    get tlsConfig() {
        return this._tlsConfig;
    }
    /**
     * @stability stable
     */
    putTlsConfig(value) {
        this._tlsConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTlsConfig() {
        this._tlsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tlsConfigInput() {
        return this._tlsConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            connection_id: cdktf.stringToTerraform(this._connectionId),
            connection_type: cdktf.stringToTerraform(this._connectionType),
            content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
            credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
            description: cdktf.stringToTerraform(this._description),
            integration_method: cdktf.stringToTerraform(this._integrationMethod),
            integration_subtype: cdktf.stringToTerraform(this._integrationSubtype),
            integration_type: cdktf.stringToTerraform(this._integrationType),
            integration_uri: cdktf.stringToTerraform(this._integrationUri),
            passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
            payload_format_version: cdktf.stringToTerraform(this._payloadFormatVersion),
            request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
            request_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestTemplates),
            template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
            timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
            response_parameters: cdktf.listMapper(apigatewayv2IntegrationResponseParametersToTerraform)(this._responseParameters),
            tls_config: apigatewayv2IntegrationTlsConfigToTerraform(this._tlsConfig.internalValue),
        };
    }
}
exports.Apigatewayv2Integration = Apigatewayv2Integration;
_b = JSII_RTTI_SYMBOL_1;
Apigatewayv2Integration[_b] = { fqn: "@cdktf/provider-aws.apigatewayv2.Apigatewayv2Integration", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Apigatewayv2Integration.tfResourceType = "aws_apigatewayv2_integration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheXYyLWludGVncmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaWdhdGV3YXl2Mi9hcGlnYXRld2F5djItaW50ZWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnRC9CLFNBQWdCLG9EQUFvRCxDQUFDLE1BQWtEO0lBQ3JILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7QUFDSCxDQUFDO0FBVEQsb0hBU0M7QUFPRCxTQUFnQiwyQ0FBMkMsQ0FBQyxNQUEyRjtJQUNySixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDM0UsQ0FBQTtBQUNILENBQUM7QUFSRCxrR0FRQzs7OztBQUVELE1BQWEsK0NBQWdELFNBQVEsS0FBSyxDQUFDLGFBQWE7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YUFBYSxDQUFDO1NBQ3ZGLENBQUM7SUFDSixDQUFDOztBQS9XSCwwREFnWEM7OztBQTlXQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHNDQUFjLEdBQVcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwaUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25JZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25UeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50SGFuZGxpbmdTdHJhdGVneT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWRlbnRpYWxzQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZWdyYXRpb25NZXRob2Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVncmF0aW9uU3VidHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZWdyYXRpb25UeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnRlZ3JhdGlvblVyaT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXNzdGhyb3VnaEJlaGF2aW9yPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXlsb2FkRm9ybWF0VmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RQYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RUZW1wbGF0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVtcGxhdGVTZWxlY3Rpb25FeHByZXNzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRNaWxsaXNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VQYXJhbWV0ZXJzPzogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHNDb25maWc/OiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hcHBpbmdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzQ29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hcHBpbmdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLm1hcHBpbmdzKSxcbiAgICBzdGF0dXNfY29kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXNDb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZlck5hbWVUb1ZlcmlmeT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlcnZlcl9uYW1lX3RvX3ZlcmlmeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2ZXJOYW1lVG9WZXJpZnkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2VydmVyTmFtZVRvVmVyaWZ5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJ2ZXJOYW1lVG9WZXJpZnkgPSB0aGlzLl9zZXJ2ZXJOYW1lVG9WZXJpZnk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlcnZlck5hbWVUb1ZlcmlmeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc2VydmVyTmFtZVRvVmVyaWZ5ID0gdmFsdWUuc2VydmVyTmFtZVRvVmVyaWZ5O1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlcnZlcl9uYW1lX3RvX3ZlcmlmeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2ZXJOYW1lVG9WZXJpZnk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZlck5hbWVUb1ZlcmlmeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZlcl9uYW1lX3RvX3ZlcmlmeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmVyTmFtZVRvVmVyaWZ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2ZXJOYW1lVG9WZXJpZnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2ZXJOYW1lVG9WZXJpZnkoKSB7XG4gICAgdGhpcy5fc2VydmVyTmFtZVRvVmVyaWZ5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2ZXJOYW1lVG9WZXJpZnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyTmFtZVRvVmVyaWZ5O1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQXBpZ2F0ZXdheXYySW50ZWdyYXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXBpZ2F0ZXdheXYyX2ludGVncmF0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwaWdhdGV3YXl2Ml9pbnRlZ3JhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hcGlJZCA9IGNvbmZpZy5hcGlJZDtcbiAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSBjb25maWcuY29ubmVjdGlvbklkO1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25UeXBlID0gY29uZmlnLmNvbm5lY3Rpb25UeXBlO1xuICAgIHRoaXMuX2NvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5ID0gY29uZmlnLmNvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5O1xuICAgIHRoaXMuX2NyZWRlbnRpYWxzQXJuID0gY29uZmlnLmNyZWRlbnRpYWxzQXJuO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2ludGVncmF0aW9uTWV0aG9kID0gY29uZmlnLmludGVncmF0aW9uTWV0aG9kO1xuICAgIHRoaXMuX2ludGVncmF0aW9uU3VidHlwZSA9IGNvbmZpZy5pbnRlZ3JhdGlvblN1YnR5cGU7XG4gICAgdGhpcy5faW50ZWdyYXRpb25UeXBlID0gY29uZmlnLmludGVncmF0aW9uVHlwZTtcbiAgICB0aGlzLl9pbnRlZ3JhdGlvblVyaSA9IGNvbmZpZy5pbnRlZ3JhdGlvblVyaTtcbiAgICB0aGlzLl9wYXNzdGhyb3VnaEJlaGF2aW9yID0gY29uZmlnLnBhc3N0aHJvdWdoQmVoYXZpb3I7XG4gICAgdGhpcy5fcGF5bG9hZEZvcm1hdFZlcnNpb24gPSBjb25maWcucGF5bG9hZEZvcm1hdFZlcnNpb247XG4gICAgdGhpcy5fcmVxdWVzdFBhcmFtZXRlcnMgPSBjb25maWcucmVxdWVzdFBhcmFtZXRlcnM7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlcyA9IGNvbmZpZy5yZXF1ZXN0VGVtcGxhdGVzO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbiA9IGNvbmZpZy50ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb247XG4gICAgdGhpcy5fdGltZW91dE1pbGxpc2Vjb25kcyA9IGNvbmZpZy50aW1lb3V0TWlsbGlzZWNvbmRzO1xuICAgIHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycyA9IGNvbmZpZy5yZXNwb25zZVBhcmFtZXRlcnM7XG4gICAgdGhpcy5fdGxzQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcudGxzQ29uZmlnO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcGlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBpSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwaUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBpX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcGlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBpSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBpSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpSWQ7XG4gIH1cblxuICAvLyBjb25uZWN0aW9uX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25JZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29ubmVjdGlvbl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29ubmVjdGlvbklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25uZWN0aW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25uZWN0aW9uSWQoKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25uZWN0aW9uSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbklkO1xuICB9XG5cbiAgLy8gY29ubmVjdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25uZWN0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nvbm5lY3Rpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29ubmVjdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29ubmVjdGlvblR5cGUoKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25UeXBlO1xuICB9XG5cbiAgLy8gY29udGVudF9oYW5kbGluZ19zdHJhdGVneSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb250ZW50SGFuZGxpbmdTdHJhdGVneT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGVudEhhbmRsaW5nU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X2hhbmRsaW5nX3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50SGFuZGxpbmdTdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudEhhbmRsaW5nU3RyYXRlZ3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb250ZW50SGFuZGxpbmdTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9jb250ZW50SGFuZGxpbmdTdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudEhhbmRsaW5nU3RyYXRlZ3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudEhhbmRsaW5nU3RyYXRlZ3k7XG4gIH1cblxuICAvLyBjcmVkZW50aWFsc19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlZGVudGlhbHNBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNyZWRlbnRpYWxzQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlZGVudGlhbHNfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVkZW50aWFsc0Fybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlZGVudGlhbHNBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVkZW50aWFsc0FybigpIHtcbiAgICB0aGlzLl9jcmVkZW50aWFsc0FybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlZGVudGlhbHNBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGVudGlhbHNBcm47XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGludGVncmF0aW9uX21ldGhvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnRlZ3JhdGlvbk1ldGhvZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW50ZWdyYXRpb25NZXRob2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlZ3JhdGlvbl9tZXRob2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVncmF0aW9uTWV0aG9kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlZ3JhdGlvbk1ldGhvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEludGVncmF0aW9uTWV0aG9kKCkge1xuICAgIHRoaXMuX2ludGVncmF0aW9uTWV0aG9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlZ3JhdGlvbk1ldGhvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlZ3JhdGlvbk1ldGhvZDtcbiAgfVxuXG4gIC8vIGludGVncmF0aW9uX3Jlc3BvbnNlX3NlbGVjdGlvbl9leHByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZWdyYXRpb25SZXNwb25zZVNlbGVjdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlZ3JhdGlvbl9yZXNwb25zZV9zZWxlY3Rpb25fZXhwcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gaW50ZWdyYXRpb25fc3VidHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnRlZ3JhdGlvblN1YnR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGludGVncmF0aW9uU3VidHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ludGVncmF0aW9uX3N1YnR5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVncmF0aW9uU3VidHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW50ZWdyYXRpb25TdWJ0eXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW50ZWdyYXRpb25TdWJ0eXBlKCkge1xuICAgIHRoaXMuX2ludGVncmF0aW9uU3VidHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZWdyYXRpb25TdWJ0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVncmF0aW9uU3VidHlwZTtcbiAgfVxuXG4gIC8vIGludGVncmF0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZWdyYXRpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnRlZ3JhdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlZ3JhdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlZ3JhdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ludGVncmF0aW9uVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlZ3JhdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZWdyYXRpb25UeXBlO1xuICB9XG5cbiAgLy8gaW50ZWdyYXRpb25fdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ludGVncmF0aW9uVXJpPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnRlZ3JhdGlvblVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ludGVncmF0aW9uX3VyaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW50ZWdyYXRpb25VcmkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ludGVncmF0aW9uVXJpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW50ZWdyYXRpb25VcmkoKSB7XG4gICAgdGhpcy5faW50ZWdyYXRpb25VcmkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGludGVncmF0aW9uVXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVncmF0aW9uVXJpO1xuICB9XG5cbiAgLy8gcGFzc3Rocm91Z2hfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3Rocm91Z2hCZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGFzc3Rocm91Z2hCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N0aHJvdWdoX2JlaGF2aW9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXNzdGhyb3VnaEJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzdGhyb3VnaEJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFzc3Rocm91Z2hCZWhhdmlvcigpIHtcbiAgICB0aGlzLl9wYXNzdGhyb3VnaEJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXNzdGhyb3VnaEJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N0aHJvdWdoQmVoYXZpb3I7XG4gIH1cblxuICAvLyBwYXlsb2FkX2Zvcm1hdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BheWxvYWRGb3JtYXRWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXlsb2FkRm9ybWF0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BheWxvYWRfZm9ybWF0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBheWxvYWRGb3JtYXRWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXlsb2FkRm9ybWF0VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBheWxvYWRGb3JtYXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3BheWxvYWRGb3JtYXRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXlsb2FkRm9ybWF0VmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXlsb2FkRm9ybWF0VmVyc2lvbjtcbiAgfVxuXG4gIC8vIHJlcXVlc3RfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0UGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFBhcmFtZXRlcnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlcXVlc3RfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVlc3RQYXJhbWV0ZXJzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXF1ZXN0UGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVlc3RQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX3JlcXVlc3RQYXJhbWV0ZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1ZXN0UGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0UGFyYW1ldGVycztcbiAgfVxuXG4gIC8vIHJlcXVlc3RfdGVtcGxhdGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVlc3RUZW1wbGF0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJlcXVlc3RUZW1wbGF0ZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlcXVlc3RfdGVtcGxhdGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWVzdFRlbXBsYXRlcyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVlc3RUZW1wbGF0ZXMoKSB7XG4gICAgdGhpcy5fcmVxdWVzdFRlbXBsYXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWVzdFRlbXBsYXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0VGVtcGxhdGVzO1xuICB9XG5cbiAgLy8gdGVtcGxhdGVfc2VsZWN0aW9uX2V4cHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVtcGxhdGVTZWxlY3Rpb25FeHByZXNzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0ZW1wbGF0ZV9zZWxlY3Rpb25fZXhwcmVzc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVtcGxhdGVTZWxlY3Rpb25FeHByZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb24oKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3Rpb25FeHByZXNzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZW1wbGF0ZVNlbGVjdGlvbkV4cHJlc3Npb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVTZWxlY3Rpb25FeHByZXNzaW9uO1xuICB9XG5cbiAgLy8gdGltZW91dF9taWxsaXNlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0TWlsbGlzZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0TWlsbGlzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9taWxsaXNlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRNaWxsaXNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWVvdXRNaWxsaXNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0TWlsbGlzZWNvbmRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRNaWxsaXNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRNaWxsaXNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dE1pbGxpc2Vjb25kcztcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzcG9uc2VQYXJhbWV0ZXJzPzogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25SZXNwb25zZVBhcmFtZXRlcnNbXTsgXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VQYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXNwb25zZV9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzcG9uc2VQYXJhbWV0ZXJzKHZhbHVlOiBBcGlnYXRld2F5djJJbnRlZ3JhdGlvblJlc3BvbnNlUGFyYW1ldGVyc1tdKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VQYXJhbWV0ZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzcG9uc2VQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycztcbiAgfVxuXG4gIC8vIHRsc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGxzQ29uZmlnID0gbmV3IEFwaWdhdGV3YXl2MkludGVncmF0aW9uVGxzQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRsc19jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGxzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl90bHNDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dFRsc0NvbmZpZyh2YWx1ZTogQXBpZ2F0ZXdheXYySW50ZWdyYXRpb25UbHNDb25maWcpIHtcbiAgICB0aGlzLl90bHNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRsc0NvbmZpZygpIHtcbiAgICB0aGlzLl90bHNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGxzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rsc0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcGlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwaUlkKSxcbiAgICAgIGNvbm5lY3Rpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Nvbm5lY3Rpb25JZCksXG4gICAgICBjb25uZWN0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Nvbm5lY3Rpb25UeXBlKSxcbiAgICAgIGNvbnRlbnRfaGFuZGxpbmdfc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbnRlbnRIYW5kbGluZ1N0cmF0ZWd5KSxcbiAgICAgIGNyZWRlbnRpYWxzX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3JlZGVudGlhbHNBcm4pLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGludGVncmF0aW9uX21ldGhvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW50ZWdyYXRpb25NZXRob2QpLFxuICAgICAgaW50ZWdyYXRpb25fc3VidHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW50ZWdyYXRpb25TdWJ0eXBlKSxcbiAgICAgIGludGVncmF0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ludGVncmF0aW9uVHlwZSksXG4gICAgICBpbnRlZ3JhdGlvbl91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ludGVncmF0aW9uVXJpKSxcbiAgICAgIHBhc3N0aHJvdWdoX2JlaGF2aW9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wYXNzdGhyb3VnaEJlaGF2aW9yKSxcbiAgICAgIHBheWxvYWRfZm9ybWF0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BheWxvYWRGb3JtYXRWZXJzaW9uKSxcbiAgICAgIHJlcXVlc3RfcGFyYW1ldGVyczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fcmVxdWVzdFBhcmFtZXRlcnMpLFxuICAgICAgcmVxdWVzdF90ZW1wbGF0ZXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3JlcXVlc3RUZW1wbGF0ZXMpLFxuICAgICAgdGVtcGxhdGVfc2VsZWN0aW9uX2V4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RlbXBsYXRlU2VsZWN0aW9uRXhwcmVzc2lvbiksXG4gICAgICB0aW1lb3V0X21pbGxpc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dE1pbGxpc2Vjb25kcyksXG4gICAgICByZXNwb25zZV9wYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGFwaWdhdGV3YXl2MkludGVncmF0aW9uUmVzcG9uc2VQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHRoaXMuX3Jlc3BvbnNlUGFyYW1ldGVycyksXG4gICAgICB0bHNfY29uZmlnOiBhcGlnYXRld2F5djJJbnRlZ3JhdGlvblRsc0NvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX3Rsc0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=