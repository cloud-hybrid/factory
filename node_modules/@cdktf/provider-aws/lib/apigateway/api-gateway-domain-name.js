"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayDomainName = exports.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference = exports.apiGatewayDomainNameMutualTlsAuthenticationToTerraform = exports.ApiGatewayDomainNameEndpointConfigurationOutputReference = exports.apiGatewayDomainNameEndpointConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apiGatewayDomainNameEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        types: cdktf.listMapper(cdktf.stringToTerraform)(struct.types),
    };
}
exports.apiGatewayDomainNameEndpointConfigurationToTerraform = apiGatewayDomainNameEndpointConfigurationToTerraform;
/**
 * @stability stable
 */
class ApiGatewayDomainNameEndpointConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._types) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._types = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._types = value.types;
        }
    }
    /**
     * @stability stable
     */
    get types() {
        return this.getListAttribute('types');
    }
    /**
     * @stability stable
     */
    set types(value) {
        this._types = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typesInput() {
        return this._types;
    }
}
exports.ApiGatewayDomainNameEndpointConfigurationOutputReference = ApiGatewayDomainNameEndpointConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ApiGatewayDomainNameEndpointConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.apigateway.ApiGatewayDomainNameEndpointConfigurationOutputReference", version: "3.0.1" };
function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        truststore_uri: cdktf.stringToTerraform(struct.truststoreUri),
        truststore_version: cdktf.stringToTerraform(struct.truststoreVersion),
    };
}
exports.apiGatewayDomainNameMutualTlsAuthenticationToTerraform = apiGatewayDomainNameMutualTlsAuthenticationToTerraform;
/**
 * @stability stable
 */
class ApiGatewayDomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
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
        if (this._truststoreUri) {
            hasAnyValues = true;
            internalValueResult.truststoreUri = this._truststoreUri;
        }
        if (this._truststoreVersion) {
            hasAnyValues = true;
            internalValueResult.truststoreVersion = this._truststoreVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._truststoreUri = undefined;
            this._truststoreVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._truststoreUri = value.truststoreUri;
            this._truststoreVersion = value.truststoreVersion;
        }
    }
    /**
     * @stability stable
     */
    get truststoreUri() {
        return this.getStringAttribute('truststore_uri');
    }
    /**
     * @stability stable
     */
    set truststoreUri(value) {
        this._truststoreUri = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get truststoreUriInput() {
        return this._truststoreUri;
    }
    /**
     * @stability stable
     */
    get truststoreVersion() {
        return this.getStringAttribute('truststore_version');
    }
    /**
     * @stability stable
     */
    set truststoreVersion(value) {
        this._truststoreVersion = value;
    }
    /**
     * @stability stable
     */
    resetTruststoreVersion() {
        this._truststoreVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get truststoreVersionInput() {
        return this._truststoreVersion;
    }
}
exports.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference = ApiGatewayDomainNameMutualTlsAuthenticationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ApiGatewayDomainNameMutualTlsAuthenticationOutputReference[_b] = { fqn: "@cdktf/provider-aws.apigateway.ApiGatewayDomainNameMutualTlsAuthenticationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name}.
 *
 * @stability stable
 */
class ApiGatewayDomainName extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_domain_name',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // endpoint_configuration - computed: false, optional: true, required: false
        this._endpointConfiguration = new ApiGatewayDomainNameEndpointConfigurationOutputReference(this, "endpoint_configuration", true);
        // mutual_tls_authentication - computed: false, optional: true, required: false
        this._mutualTlsAuthentication = new ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(this, "mutual_tls_authentication", true);
        this._certificateArn = config.certificateArn;
        this._certificateBody = config.certificateBody;
        this._certificateChain = config.certificateChain;
        this._certificateName = config.certificateName;
        this._certificatePrivateKey = config.certificatePrivateKey;
        this._domainName = config.domainName;
        this._regionalCertificateArn = config.regionalCertificateArn;
        this._regionalCertificateName = config.regionalCertificateName;
        this._securityPolicy = config.securityPolicy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._endpointConfiguration.internalValue = config.endpointConfiguration;
        this._mutualTlsAuthentication.internalValue = config.mutualTlsAuthentication;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    /**
     * @stability stable
     */
    set certificateArn(value) {
        this._certificateArn = value;
    }
    /**
     * @stability stable
     */
    resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateArnInput() {
        return this._certificateArn;
    }
    /**
     * @stability stable
     */
    get certificateBody() {
        return this.getStringAttribute('certificate_body');
    }
    /**
     * @stability stable
     */
    set certificateBody(value) {
        this._certificateBody = value;
    }
    /**
     * @stability stable
     */
    resetCertificateBody() {
        this._certificateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateBodyInput() {
        return this._certificateBody;
    }
    /**
     * @stability stable
     */
    get certificateChain() {
        return this.getStringAttribute('certificate_chain');
    }
    /**
     * @stability stable
     */
    set certificateChain(value) {
        this._certificateChain = value;
    }
    /**
     * @stability stable
     */
    resetCertificateChain() {
        this._certificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateChainInput() {
        return this._certificateChain;
    }
    /**
     * @stability stable
     */
    get certificateName() {
        return this.getStringAttribute('certificate_name');
    }
    /**
     * @stability stable
     */
    set certificateName(value) {
        this._certificateName = value;
    }
    /**
     * @stability stable
     */
    resetCertificateName() {
        this._certificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateNameInput() {
        return this._certificateName;
    }
    /**
     * @stability stable
     */
    get certificatePrivateKey() {
        return this.getStringAttribute('certificate_private_key');
    }
    /**
     * @stability stable
     */
    set certificatePrivateKey(value) {
        this._certificatePrivateKey = value;
    }
    /**
     * @stability stable
     */
    resetCertificatePrivateKey() {
        this._certificatePrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificatePrivateKeyInput() {
        return this._certificatePrivateKey;
    }
    // certificate_upload_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get certificateUploadDate() {
        return this.getStringAttribute('certificate_upload_date');
    }
    // cloudfront_domain_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cloudfrontDomainName() {
        return this.getStringAttribute('cloudfront_domain_name');
    }
    // cloudfront_zone_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cloudfrontZoneId() {
        return this.getStringAttribute('cloudfront_zone_id');
    }
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
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
    get regionalCertificateArn() {
        return this.getStringAttribute('regional_certificate_arn');
    }
    /**
     * @stability stable
     */
    set regionalCertificateArn(value) {
        this._regionalCertificateArn = value;
    }
    /**
     * @stability stable
     */
    resetRegionalCertificateArn() {
        this._regionalCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regionalCertificateArnInput() {
        return this._regionalCertificateArn;
    }
    /**
     * @stability stable
     */
    get regionalCertificateName() {
        return this.getStringAttribute('regional_certificate_name');
    }
    /**
     * @stability stable
     */
    set regionalCertificateName(value) {
        this._regionalCertificateName = value;
    }
    /**
     * @stability stable
     */
    resetRegionalCertificateName() {
        this._regionalCertificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regionalCertificateNameInput() {
        return this._regionalCertificateName;
    }
    // regional_domain_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get regionalDomainName() {
        return this.getStringAttribute('regional_domain_name');
    }
    // regional_zone_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get regionalZoneId() {
        return this.getStringAttribute('regional_zone_id');
    }
    /**
     * @stability stable
     */
    get securityPolicy() {
        return this.getStringAttribute('security_policy');
    }
    /**
     * @stability stable
     */
    set securityPolicy(value) {
        this._securityPolicy = value;
    }
    /**
     * @stability stable
     */
    resetSecurityPolicy() {
        this._securityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityPolicyInput() {
        return this._securityPolicy;
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
    get endpointConfiguration() {
        return this._endpointConfiguration;
    }
    /**
     * @stability stable
     */
    putEndpointConfiguration(value) {
        this._endpointConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEndpointConfiguration() {
        this._endpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endpointConfigurationInput() {
        return this._endpointConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get mutualTlsAuthentication() {
        return this._mutualTlsAuthentication;
    }
    /**
     * @stability stable
     */
    putMutualTlsAuthentication(value) {
        this._mutualTlsAuthentication.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMutualTlsAuthentication() {
        this._mutualTlsAuthentication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mutualTlsAuthenticationInput() {
        return this._mutualTlsAuthentication.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            certificate_body: cdktf.stringToTerraform(this._certificateBody),
            certificate_chain: cdktf.stringToTerraform(this._certificateChain),
            certificate_name: cdktf.stringToTerraform(this._certificateName),
            certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
            domain_name: cdktf.stringToTerraform(this._domainName),
            regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
            regional_certificate_name: cdktf.stringToTerraform(this._regionalCertificateName),
            security_policy: cdktf.stringToTerraform(this._securityPolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            endpoint_configuration: apiGatewayDomainNameEndpointConfigurationToTerraform(this._endpointConfiguration.internalValue),
            mutual_tls_authentication: apiGatewayDomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication.internalValue),
        };
    }
}
exports.ApiGatewayDomainName = ApiGatewayDomainName;
_c = JSII_RTTI_SYMBOL_1;
ApiGatewayDomainName[_c] = { fqn: "@cdktf/provider-aws.apigateway.ApiGatewayDomainName", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ApiGatewayDomainName.tfResourceType = "aws_api_gateway_domain_name";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktZG9tYWluLW5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpZ2F0ZXdheS9hcGktZ2F0ZXdheS1kb21haW4tbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQW9DL0IsU0FBZ0Isb0RBQW9ELENBQUMsTUFBNkc7SUFDaEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQ2hFLENBQUE7QUFDSCxDQUFDO0FBUkQsb0hBUUM7Ozs7QUFFRCxNQUFhLHdEQUF5RCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9GLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENB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QWEsQ0FBQztTQUMvSCxDQUFDO0lBQ0osQ0FBQzs7QUFoVEgsb0RBaVRDOzs7QUEvU0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxtQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBpR2F0ZXdheURvbWFpbk5hbWVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVCb2R5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2VydGlmaWNhdGVDaGFpbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZVByaXZhdGVLZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZ2lvbmFsQ2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVnaW9uYWxDZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3VyaXR5UG9saWN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRDb25maWd1cmF0aW9uPzogQXBpR2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtdXR1YWxUbHNBdXRoZW50aWNhdGlvbj86IEFwaUdhdGV3YXlEb21haW5OYW1lTXV0dWFsVGxzQXV0aGVudGljYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwaUdhdGV3YXlEb21haW5OYW1lRW5kcG9pbnRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwaUdhdGV3YXlEb21haW5OYW1lRW5kcG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBpR2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcGlHYXRld2F5RG9tYWluTmFtZUVuZHBvaW50Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnR5cGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBpR2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBpR2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3R5cGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlcyA9IHRoaXMuX3R5cGVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBpR2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90eXBlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdHlwZXMgPSB2YWx1ZS50eXBlcztcbiAgICB9XG4gIH1cblxuICAvLyB0eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0eXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0eXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHlwZXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBpR2F0ZXdheURvbWFpbk5hbWVNdXR1YWxUbHNBdXRoZW50aWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cnVzdHN0b3JlVXJpOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0c3RvcmVWZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBpR2F0ZXdheURvbWFpbk5hbWVNdXR1YWxUbHNBdXRoZW50aWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwaUdhdGV3YXlEb21haW5OYW1lTXV0dWFsVGxzQXV0aGVudGljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcGlHYXRld2F5RG9tYWluTmFtZU11dHVhbFRsc0F1dGhlbnRpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHJ1c3RzdG9yZV91cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHJ1c3RzdG9yZVVyaSksXG4gICAgdHJ1c3RzdG9yZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRydXN0c3RvcmVWZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBpR2F0ZXdheURvbWFpbk5hbWVNdXR1YWxUbHNBdXRoZW50aWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcGlHYXRld2F5RG9tYWluTmFtZU11dHVhbFRsc0F1dGhlbnRpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90cnVzdHN0b3JlVXJpKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cnVzdHN0b3JlVXJpID0gdGhpcy5fdHJ1c3RzdG9yZVVyaTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RydXN0c3RvcmVWZXJzaW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cnVzdHN0b3JlVmVyc2lvbiA9IHRoaXMuX3RydXN0c3RvcmVWZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBpR2F0ZXdheURvbWFpbk5hbWVNdXR1YWxUbHNBdXRoZW50aWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RydXN0c3RvcmVVcmkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cnVzdHN0b3JlVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdHJ1c3RzdG9yZVVyaSA9IHZhbHVlLnRydXN0c3RvcmVVcmk7XG4gICAgICB0aGlzLl90cnVzdHN0b3JlVmVyc2lvbiA9IHZhbHVlLnRydXN0c3RvcmVWZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRydXN0c3RvcmVfdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RydXN0c3RvcmVVcmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRydXN0c3RvcmVVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0cnVzdHN0b3JlX3VyaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHJ1c3RzdG9yZVVyaSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJ1c3RzdG9yZVVyaSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cnVzdHN0b3JlVXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RydXN0c3RvcmVVcmk7XG4gIH1cblxuICAvLyB0cnVzdHN0b3JlX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJ1c3RzdG9yZVZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRydXN0c3RvcmVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJ1c3RzdG9yZV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cnVzdHN0b3JlVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJ1c3RzdG9yZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcnVzdHN0b3JlVmVyc2lvbigpIHtcbiAgICB0aGlzLl90cnVzdHN0b3JlVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJ1c3RzdG9yZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJ1c3RzdG9yZVZlcnNpb247XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQXBpR2F0ZXdheURvbWFpbk5hbWUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfYXBpX2dhdGV3YXlfZG9tYWluX25hbWVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcGlHYXRld2F5RG9tYWluTmFtZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2FwaV9nYXRld2F5X2RvbWFpbl9uYW1lJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gY29uZmlnLmNlcnRpZmljYXRlQXJuO1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQm9keSA9IGNvbmZpZy5jZXJ0aWZpY2F0ZUJvZHk7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IGNvbmZpZy5jZXJ0aWZpY2F0ZUNoYWluO1xuICAgIHRoaXMuX2NlcnRpZmljYXRlTmFtZSA9IGNvbmZpZy5jZXJ0aWZpY2F0ZU5hbWU7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVQcml2YXRlS2V5ID0gY29uZmlnLmNlcnRpZmljYXRlUHJpdmF0ZUtleTtcbiAgICB0aGlzLl9kb21haW5OYW1lID0gY29uZmlnLmRvbWFpbk5hbWU7XG4gICAgdGhpcy5fcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybiA9IGNvbmZpZy5yZWdpb25hbENlcnRpZmljYXRlQXJuO1xuICAgIHRoaXMuX3JlZ2lvbmFsQ2VydGlmaWNhdGVOYW1lID0gY29uZmlnLnJlZ2lvbmFsQ2VydGlmaWNhdGVOYW1lO1xuICAgIHRoaXMuX3NlY3VyaXR5UG9saWN5ID0gY29uZmlnLnNlY3VyaXR5UG9saWN5O1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fZW5kcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuZW5kcG9pbnRDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcubXV0dWFsVGxzQXV0aGVudGljYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVBcm4oKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQXJuO1xuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfYm9keSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZUJvZHk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQm9keSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2JvZHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlQm9keSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVCb2R5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVCb2R5KCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQm9keSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVCb2R5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQm9keTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2NoYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQ2hhaW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQ2hhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjZXJ0aWZpY2F0ZV9jaGFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVDaGFpbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlcnRpZmljYXRlQ2hhaW4oKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVDaGFpbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVDaGFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluO1xuICB9XG5cbiAgLy8gY2VydGlmaWNhdGVfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVOYW1lKCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlTmFtZTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX3ByaXZhdGVfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlUHJpdmF0ZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVQcml2YXRlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfcHJpdmF0ZV9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlcnRpZmljYXRlUHJpdmF0ZUtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVQcml2YXRlS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVQcml2YXRlS2V5KCkge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlUHJpdmF0ZUtleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVQcml2YXRlS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlUHJpdmF0ZUtleTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX3VwbG9hZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVVcGxvYWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfdXBsb2FkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIGNsb3VkZnJvbnRfZG9tYWluX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZGZyb250RG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3VkZnJvbnRfZG9tYWluX25hbWUnKTtcbiAgfVxuXG4gIC8vIGNsb3VkZnJvbnRfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3VkZnJvbnRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZGZyb250X3pvbmVfaWQnKTtcbiAgfVxuXG4gIC8vIGRvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbk5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9tYWluTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbk5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcmVnaW9uYWxfY2VydGlmaWNhdGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZ2lvbmFsQ2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlZ2lvbmFsQ2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpb25hbF9jZXJ0aWZpY2F0ZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZ2lvbmFsQ2VydGlmaWNhdGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZ2lvbmFsQ2VydGlmaWNhdGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWdpb25hbENlcnRpZmljYXRlQXJuKCkge1xuICAgIHRoaXMuX3JlZ2lvbmFsQ2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2lvbmFsQ2VydGlmaWNhdGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybjtcbiAgfVxuXG4gIC8vIHJlZ2lvbmFsX2NlcnRpZmljYXRlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVnaW9uYWxDZXJ0aWZpY2F0ZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlZ2lvbmFsQ2VydGlmaWNhdGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uYWxfY2VydGlmaWNhdGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnaW9uYWxDZXJ0aWZpY2F0ZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZ2lvbmFsQ2VydGlmaWNhdGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVnaW9uYWxDZXJ0aWZpY2F0ZU5hbWUoKSB7XG4gICAgdGhpcy5fcmVnaW9uYWxDZXJ0aWZpY2F0ZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2lvbmFsQ2VydGlmaWNhdGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2lvbmFsQ2VydGlmaWNhdGVOYW1lO1xuICB9XG5cbiAgLy8gcmVnaW9uYWxfZG9tYWluX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWdpb25hbERvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpb25hbF9kb21haW5fbmFtZScpO1xuICB9XG5cbiAgLy8gcmVnaW9uYWxfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lvbmFsWm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uYWxfem9uZV9pZCcpO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfcG9saWN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjdXJpdHlfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eVBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eVBvbGljeSgpIHtcbiAgICB0aGlzLl9zZWN1cml0eVBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlQb2xpY3k7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gZW5kcG9pbnRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmRwb2ludENvbmZpZ3VyYXRpb24gPSBuZXcgQXBpR2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZW5kcG9pbnRfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlbmRwb2ludENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZHBvaW50Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RW5kcG9pbnRDb25maWd1cmF0aW9uKHZhbHVlOiBBcGlHYXRld2F5RG9tYWluTmFtZUVuZHBvaW50Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2VuZHBvaW50Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5kcG9pbnRDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2VuZHBvaW50Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmRwb2ludENvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBtdXR1YWxfdGxzX2F1dGhlbnRpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uID0gbmV3IEFwaUdhdGV3YXlEb21haW5OYW1lTXV0dWFsVGxzQXV0aGVudGljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibXV0dWFsX3Rsc19hdXRoZW50aWNhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtdXR1YWxUbHNBdXRoZW50aWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbXV0dWFsVGxzQXV0aGVudGljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dE11dHVhbFRsc0F1dGhlbnRpY2F0aW9uKHZhbHVlOiBBcGlHYXRld2F5RG9tYWluTmFtZU11dHVhbFRsc0F1dGhlbnRpY2F0aW9uKSB7XG4gICAgdGhpcy5fbXV0dWFsVGxzQXV0aGVudGljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE11dHVhbFRsc0F1dGhlbnRpY2F0aW9uKCkge1xuICAgIHRoaXMuX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG11dHVhbFRsc0F1dGhlbnRpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211dHVhbFRsc0F1dGhlbnRpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlcnRpZmljYXRlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVBcm4pLFxuICAgICAgY2VydGlmaWNhdGVfYm9keTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVCb2R5KSxcbiAgICAgIGNlcnRpZmljYXRlX2NoYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jZXJ0aWZpY2F0ZUNoYWluKSxcbiAgICAgIGNlcnRpZmljYXRlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NlcnRpZmljYXRlTmFtZSksXG4gICAgICBjZXJ0aWZpY2F0ZV9wcml2YXRlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVQcml2YXRlS2V5KSxcbiAgICAgIGRvbWFpbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kb21haW5OYW1lKSxcbiAgICAgIHJlZ2lvbmFsX2NlcnRpZmljYXRlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVnaW9uYWxDZXJ0aWZpY2F0ZUFybiksXG4gICAgICByZWdpb25hbF9jZXJ0aWZpY2F0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZWdpb25hbENlcnRpZmljYXRlTmFtZSksXG4gICAgICBzZWN1cml0eV9wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlY3VyaXR5UG9saWN5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgZW5kcG9pbnRfY29uZmlndXJhdGlvbjogYXBpR2F0ZXdheURvbWFpbk5hbWVFbmRwb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9lbmRwb2ludENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBtdXR1YWxfdGxzX2F1dGhlbnRpY2F0aW9uOiBhcGlHYXRld2F5RG9tYWluTmFtZU11dHVhbFRsc0F1dGhlbnRpY2F0aW9uVG9UZXJyYWZvcm0odGhpcy5fbXV0dWFsVGxzQXV0aGVudGljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19