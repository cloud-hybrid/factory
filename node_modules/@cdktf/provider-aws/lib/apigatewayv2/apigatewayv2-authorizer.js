"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apigatewayv2Authorizer = exports.Apigatewayv2AuthorizerJwtConfigurationOutputReference = exports.apigatewayv2AuthorizerJwtConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apigatewayv2AuthorizerJwtConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        audience: cdktf.listMapper(cdktf.stringToTerraform)(struct.audience),
        issuer: cdktf.stringToTerraform(struct.issuer),
    };
}
exports.apigatewayv2AuthorizerJwtConfigurationToTerraform = apigatewayv2AuthorizerJwtConfigurationToTerraform;
/**
 * @stability stable
 */
class Apigatewayv2AuthorizerJwtConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._audience) {
            hasAnyValues = true;
            internalValueResult.audience = this._audience;
        }
        if (this._issuer) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._audience = undefined;
            this._issuer = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._audience = value.audience;
            this._issuer = value.issuer;
        }
    }
    /**
     * @stability stable
     */
    get audience() {
        return this.getListAttribute('audience');
    }
    /**
     * @stability stable
     */
    set audience(value) {
        this._audience = value;
    }
    /**
     * @stability stable
     */
    resetAudience() {
        this._audience = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get audienceInput() {
        return this._audience;
    }
    /**
     * @stability stable
     */
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    /**
     * @stability stable
     */
    set issuer(value) {
        this._issuer = value;
    }
    /**
     * @stability stable
     */
    resetIssuer() {
        this._issuer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get issuerInput() {
        return this._issuer;
    }
}
exports.Apigatewayv2AuthorizerJwtConfigurationOutputReference = Apigatewayv2AuthorizerJwtConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Apigatewayv2AuthorizerJwtConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.apigatewayv2.Apigatewayv2AuthorizerJwtConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer}.
 *
 * @stability stable
 */
class Apigatewayv2Authorizer extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer.html aws_apigatewayv2_authorizer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apigatewayv2_authorizer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // jwt_configuration - computed: false, optional: true, required: false
        this._jwtConfiguration = new Apigatewayv2AuthorizerJwtConfigurationOutputReference(this, "jwt_configuration", true);
        this._apiId = config.apiId;
        this._authorizerCredentialsArn = config.authorizerCredentialsArn;
        this._authorizerPayloadFormatVersion = config.authorizerPayloadFormatVersion;
        this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
        this._authorizerType = config.authorizerType;
        this._authorizerUri = config.authorizerUri;
        this._enableSimpleResponses = config.enableSimpleResponses;
        this._identitySources = config.identitySources;
        this._name = config.name;
        this._jwtConfiguration.internalValue = config.jwtConfiguration;
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
    get authorizerCredentialsArn() {
        return this.getStringAttribute('authorizer_credentials_arn');
    }
    /**
     * @stability stable
     */
    set authorizerCredentialsArn(value) {
        this._authorizerCredentialsArn = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizerCredentialsArn() {
        this._authorizerCredentialsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizerCredentialsArnInput() {
        return this._authorizerCredentialsArn;
    }
    /**
     * @stability stable
     */
    get authorizerPayloadFormatVersion() {
        return this.getStringAttribute('authorizer_payload_format_version');
    }
    /**
     * @stability stable
     */
    set authorizerPayloadFormatVersion(value) {
        this._authorizerPayloadFormatVersion = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizerPayloadFormatVersion() {
        this._authorizerPayloadFormatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizerPayloadFormatVersionInput() {
        return this._authorizerPayloadFormatVersion;
    }
    /**
     * @stability stable
     */
    get authorizerResultTtlInSeconds() {
        return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
    }
    /**
     * @stability stable
     */
    set authorizerResultTtlInSeconds(value) {
        this._authorizerResultTtlInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizerResultTtlInSeconds() {
        this._authorizerResultTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizerResultTtlInSecondsInput() {
        return this._authorizerResultTtlInSeconds;
    }
    /**
     * @stability stable
     */
    get authorizerType() {
        return this.getStringAttribute('authorizer_type');
    }
    /**
     * @stability stable
     */
    set authorizerType(value) {
        this._authorizerType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizerTypeInput() {
        return this._authorizerType;
    }
    /**
     * @stability stable
     */
    get authorizerUri() {
        return this.getStringAttribute('authorizer_uri');
    }
    /**
     * @stability stable
     */
    set authorizerUri(value) {
        this._authorizerUri = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizerUri() {
        this._authorizerUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizerUriInput() {
        return this._authorizerUri;
    }
    /**
     * @stability stable
     */
    get enableSimpleResponses() {
        return this.getBooleanAttribute('enable_simple_responses');
    }
    /**
     * @stability stable
     */
    set enableSimpleResponses(value) {
        this._enableSimpleResponses = value;
    }
    /**
     * @stability stable
     */
    resetEnableSimpleResponses() {
        this._enableSimpleResponses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableSimpleResponsesInput() {
        return this._enableSimpleResponses;
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
    get identitySources() {
        return this.getListAttribute('identity_sources');
    }
    /**
     * @stability stable
     */
    set identitySources(value) {
        this._identitySources = value;
    }
    /**
     * @stability stable
     */
    resetIdentitySources() {
        this._identitySources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get identitySourcesInput() {
        return this._identitySources;
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
    get jwtConfiguration() {
        return this._jwtConfiguration;
    }
    /**
     * @stability stable
     */
    putJwtConfiguration(value) {
        this._jwtConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJwtConfiguration() {
        this._jwtConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jwtConfigurationInput() {
        return this._jwtConfiguration.internalValue;
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
            authorizer_credentials_arn: cdktf.stringToTerraform(this._authorizerCredentialsArn),
            authorizer_payload_format_version: cdktf.stringToTerraform(this._authorizerPayloadFormatVersion),
            authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
            authorizer_type: cdktf.stringToTerraform(this._authorizerType),
            authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
            enable_simple_responses: cdktf.booleanToTerraform(this._enableSimpleResponses),
            identity_sources: cdktf.listMapper(cdktf.stringToTerraform)(this._identitySources),
            name: cdktf.stringToTerraform(this._name),
            jwt_configuration: apigatewayv2AuthorizerJwtConfigurationToTerraform(this._jwtConfiguration.internalValue),
        };
    }
}
exports.Apigatewayv2Authorizer = Apigatewayv2Authorizer;
_b = JSII_RTTI_SYMBOL_1;
Apigatewayv2Authorizer[_b] = { fqn: "@cdktf/provider-aws.apigatewayv2.Apigatewayv2Authorizer", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Apigatewayv2Authorizer.tfResourceType = "aws_apigatewayv2_authorizer";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheXYyLWF1dGhvcml6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpZ2F0ZXdheXYyL2FwaWdhdGV3YXl2Mi1hdXRob3JpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0MvQixTQUFnQixpREFBaUQsQ0FBQyxNQUF1RztJQUN2SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDckUsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBVEQsOEdBU0M7Ozs7QUFFRCxNQUFhLHFEQUFzRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTVGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENB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QyxjQUFjLENBQUM7WUFDNUQsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM5RSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRixJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsaUJBQWlCLEVBQUUsaURBQWlELENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztTQUMzRyxDQUFDO0lBQ0osQ0FBQzs7QUFwTkgsd0RBcU5DOzs7QUFuTkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxxQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFwaWdhdGV3YXl2MkF1dGhvcml6ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcGlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRob3JpemVyQ3JlZGVudGlhbHNBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aG9yaXplclBheWxvYWRGb3JtYXRWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhvcml6ZXJUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhvcml6ZXJVcmk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZVNpbXBsZVJlc3BvbnNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkZW50aXR5U291cmNlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqd3RDb25maWd1cmF0aW9uPzogQXBpZ2F0ZXdheXYyQXV0aG9yaXplckp3dENvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwaWdhdGV3YXl2MkF1dGhvcml6ZXJKd3RDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXVkaWVuY2U/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpc3N1ZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcGlnYXRld2F5djJBdXRob3JpemVySnd0Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwaWdhdGV3YXl2MkF1dGhvcml6ZXJKd3RDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXBpZ2F0ZXdheXYyQXV0aG9yaXplckp3dENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdWRpZW5jZTogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hdWRpZW5jZSksXG4gICAgaXNzdWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlzc3VlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwaWdhdGV3YXl2MkF1dGhvcml6ZXJKd3RDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwaWdhdGV3YXl2MkF1dGhvcml6ZXJKd3RDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdWRpZW5jZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXVkaWVuY2UgPSB0aGlzLl9hdWRpZW5jZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzc3Vlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXNzdWVyID0gdGhpcy5faXNzdWVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBpZ2F0ZXdheXYyQXV0aG9yaXplckp3dENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdWRpZW5jZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lzc3VlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXVkaWVuY2UgPSB2YWx1ZS5hdWRpZW5jZTtcbiAgICAgIHRoaXMuX2lzc3VlciA9IHZhbHVlLmlzc3VlcjtcbiAgICB9XG4gIH1cblxuICAvLyBhdWRpZW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdWRpZW5jZT86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhdWRpZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdWRpZW5jZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXVkaWVuY2UodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXVkaWVuY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdWRpZW5jZSgpIHtcbiAgICB0aGlzLl9hdWRpZW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXVkaWVuY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaWVuY2U7XG4gIH1cblxuICAvLyBpc3N1ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXNzdWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpc3N1ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpc3N1ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlzc3Vlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXNzdWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXNzdWVyKCkge1xuICAgIHRoaXMuX2lzc3VlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXNzdWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzc3VlcjtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcGlnYXRld2F5djJBdXRob3JpemVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2FwaWdhdGV3YXl2Ml9hdXRob3JpemVyXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcGlnYXRld2F5djJBdXRob3JpemVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBpZ2F0ZXdheXYyX2F1dGhvcml6ZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXBpSWQgPSBjb25maWcuYXBpSWQ7XG4gICAgdGhpcy5fYXV0aG9yaXplckNyZWRlbnRpYWxzQXJuID0gY29uZmlnLmF1dGhvcml6ZXJDcmVkZW50aWFsc0FybjtcbiAgICB0aGlzLl9hdXRob3JpemVyUGF5bG9hZEZvcm1hdFZlcnNpb24gPSBjb25maWcuYXV0aG9yaXplclBheWxvYWRGb3JtYXRWZXJzaW9uO1xuICAgIHRoaXMuX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMgPSBjb25maWcuYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcztcbiAgICB0aGlzLl9hdXRob3JpemVyVHlwZSA9IGNvbmZpZy5hdXRob3JpemVyVHlwZTtcbiAgICB0aGlzLl9hdXRob3JpemVyVXJpID0gY29uZmlnLmF1dGhvcml6ZXJVcmk7XG4gICAgdGhpcy5fZW5hYmxlU2ltcGxlUmVzcG9uc2VzID0gY29uZmlnLmVuYWJsZVNpbXBsZVJlc3BvbnNlcztcbiAgICB0aGlzLl9pZGVudGl0eVNvdXJjZXMgPSBjb25maWcuaWRlbnRpdHlTb3VyY2VzO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9qd3RDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuand0Q29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXBpX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FwaUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcGlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwaV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBpSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwaUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwaUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwaUlkO1xuICB9XG5cbiAgLy8gYXV0aG9yaXplcl9jcmVkZW50aWFsc19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aG9yaXplckNyZWRlbnRpYWxzQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRob3JpemVyQ3JlZGVudGlhbHNBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRob3JpemVyX2NyZWRlbnRpYWxzX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aG9yaXplckNyZWRlbnRpYWxzQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRob3JpemVyQ3JlZGVudGlhbHNBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRob3JpemVyQ3JlZGVudGlhbHNBcm4oKSB7XG4gICAgdGhpcy5fYXV0aG9yaXplckNyZWRlbnRpYWxzQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemVyQ3JlZGVudGlhbHNBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXplckNyZWRlbnRpYWxzQXJuO1xuICB9XG5cbiAgLy8gYXV0aG9yaXplcl9wYXlsb2FkX2Zvcm1hdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhvcml6ZXJQYXlsb2FkRm9ybWF0VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXplclBheWxvYWRGb3JtYXRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aG9yaXplcl9wYXlsb2FkX2Zvcm1hdF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemVyUGF5bG9hZEZvcm1hdFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhvcml6ZXJQYXlsb2FkRm9ybWF0VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhvcml6ZXJQYXlsb2FkRm9ybWF0VmVyc2lvbigpIHtcbiAgICB0aGlzLl9hdXRob3JpemVyUGF5bG9hZEZvcm1hdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6ZXJQYXlsb2FkRm9ybWF0VmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpemVyUGF5bG9hZEZvcm1hdFZlcnNpb247XG4gIH1cblxuICAvLyBhdXRob3JpemVyX3Jlc3VsdF90dGxfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGF1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhdXRob3JpemVyX3Jlc3VsdF90dGxfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhvcml6ZXJSZXN1bHRUdGxJblNlY29uZHMoKSB7XG4gICAgdGhpcy5fYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpemVyUmVzdWx0VHRsSW5TZWNvbmRzO1xuICB9XG5cbiAgLy8gYXV0aG9yaXplcl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dGhvcml6ZXJUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRob3JpemVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhvcml6ZXJfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aG9yaXplclR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhvcml6ZXJUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6ZXJUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6ZXJUeXBlO1xuICB9XG5cbiAgLy8gYXV0aG9yaXplcl91cmkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aG9yaXplclVyaT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXplclVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhvcml6ZXJfdXJpJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemVyVXJpKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRob3JpemVyVXJpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aG9yaXplclVyaSgpIHtcbiAgICB0aGlzLl9hdXRob3JpemVyVXJpID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemVyVXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6ZXJVcmk7XG4gIH1cblxuICAvLyBlbmFibGVfc2ltcGxlX3Jlc3BvbnNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVTaW1wbGVSZXNwb25zZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZVNpbXBsZVJlc3BvbnNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfc2ltcGxlX3Jlc3BvbnNlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZVNpbXBsZVJlc3BvbnNlcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlU2ltcGxlUmVzcG9uc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlU2ltcGxlUmVzcG9uc2VzKCkge1xuICAgIHRoaXMuX2VuYWJsZVNpbXBsZVJlc3BvbnNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlU2ltcGxlUmVzcG9uc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVNpbXBsZVJlc3BvbnNlcztcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpZGVudGl0eV9zb3VyY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkZW50aXR5U291cmNlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpZGVudGl0eVNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaWRlbnRpdHlfc291cmNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWRlbnRpdHlTb3VyY2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2lkZW50aXR5U291cmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElkZW50aXR5U291cmNlcygpIHtcbiAgICB0aGlzLl9pZGVudGl0eVNvdXJjZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkZW50aXR5U291cmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZGVudGl0eVNvdXJjZXM7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIGp3dF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2p3dENvbmZpZ3VyYXRpb24gPSBuZXcgQXBpZ2F0ZXdheXYyQXV0aG9yaXplckp3dENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiand0X2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgand0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fand0Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Snd0Q29uZmlndXJhdGlvbih2YWx1ZTogQXBpZ2F0ZXdheXYyQXV0aG9yaXplckp3dENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9qd3RDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRKd3RDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2p3dENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgand0Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qd3RDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwaV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBpSWQpLFxuICAgICAgYXV0aG9yaXplcl9jcmVkZW50aWFsc19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dGhvcml6ZXJDcmVkZW50aWFsc0FybiksXG4gICAgICBhdXRob3JpemVyX3BheWxvYWRfZm9ybWF0X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dGhvcml6ZXJQYXlsb2FkRm9ybWF0VmVyc2lvbiksXG4gICAgICBhdXRob3JpemVyX3Jlc3VsdF90dGxfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYXV0aG9yaXplclJlc3VsdFR0bEluU2Vjb25kcyksXG4gICAgICBhdXRob3JpemVyX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dGhvcml6ZXJUeXBlKSxcbiAgICAgIGF1dGhvcml6ZXJfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRob3JpemVyVXJpKSxcbiAgICAgIGVuYWJsZV9zaW1wbGVfcmVzcG9uc2VzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlU2ltcGxlUmVzcG9uc2VzKSxcbiAgICAgIGlkZW50aXR5X3NvdXJjZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2lkZW50aXR5U291cmNlcyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIGp3dF9jb25maWd1cmF0aW9uOiBhcGlnYXRld2F5djJBdXRob3JpemVySnd0Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2p3dENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19