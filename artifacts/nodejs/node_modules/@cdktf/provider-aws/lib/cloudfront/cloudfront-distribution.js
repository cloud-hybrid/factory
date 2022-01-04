"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontDistribution = exports.CloudfrontDistributionViewerCertificateOutputReference = exports.cloudfrontDistributionViewerCertificateToTerraform = exports.CloudfrontDistributionRestrictionsOutputReference = exports.cloudfrontDistributionRestrictionsToTerraform = exports.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference = exports.cloudfrontDistributionRestrictionsGeoRestrictionToTerraform = exports.cloudfrontDistributionOriginGroupToTerraform = exports.cloudfrontDistributionOriginGroupMemberToTerraform = exports.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference = exports.cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform = exports.cloudfrontDistributionOriginToTerraform = exports.CloudfrontDistributionOriginS3OriginConfigOutputReference = exports.cloudfrontDistributionOriginS3OriginConfigToTerraform = exports.CloudfrontDistributionOriginOriginShieldOutputReference = exports.cloudfrontDistributionOriginOriginShieldToTerraform = exports.CloudfrontDistributionOriginCustomOriginConfigOutputReference = exports.cloudfrontDistributionOriginCustomOriginConfigToTerraform = exports.cloudfrontDistributionOriginCustomHeaderToTerraform = exports.cloudfrontDistributionOrderedCacheBehaviorToTerraform = exports.cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform = exports.cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform = exports.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference = exports.cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform = exports.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference = exports.cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform = exports.CloudfrontDistributionLoggingConfigOutputReference = exports.cloudfrontDistributionLoggingConfigToTerraform = exports.CloudfrontDistributionDefaultCacheBehaviorOutputReference = exports.cloudfrontDistributionDefaultCacheBehaviorToTerraform = exports.cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform = exports.cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform = exports.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference = exports.cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform = exports.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference = exports.cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform = exports.cloudfrontDistributionCustomErrorResponseToTerraform = exports.CloudfrontDistributionTrustedSigners = exports.CloudfrontDistributionTrustedSignersItems = exports.CloudfrontDistributionTrustedKeyGroups = exports.CloudfrontDistributionTrustedKeyGroupsItems = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class CloudfrontDistributionTrustedKeyGroupsItems extends cdktf.ComplexComputedList {
    // key_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyGroupId() {
        return this.getStringAttribute('key_group_id');
    }
    // key_pair_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyPairIds() {
        return this.getListAttribute('key_pair_ids');
    }
}
exports.CloudfrontDistributionTrustedKeyGroupsItems = CloudfrontDistributionTrustedKeyGroupsItems;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedKeyGroupsItems[_a] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionTrustedKeyGroupsItems", version: "3.0.1" };
/**
 * @stability stable
 */
class CloudfrontDistributionTrustedKeyGroups extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
}
exports.CloudfrontDistributionTrustedKeyGroups = CloudfrontDistributionTrustedKeyGroups;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedKeyGroups[_b] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionTrustedKeyGroups", version: "3.0.1" };
/**
 * @stability stable
 */
class CloudfrontDistributionTrustedSignersItems extends cdktf.ComplexComputedList {
    // aws_account_number - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get awsAccountNumber() {
        return this.getStringAttribute('aws_account_number');
    }
    // key_pair_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyPairIds() {
        return this.getListAttribute('key_pair_ids');
    }
}
exports.CloudfrontDistributionTrustedSignersItems = CloudfrontDistributionTrustedSignersItems;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedSignersItems[_c] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionTrustedSignersItems", version: "3.0.1" };
/**
 * @stability stable
 */
class CloudfrontDistributionTrustedSigners extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
}
exports.CloudfrontDistributionTrustedSigners = CloudfrontDistributionTrustedSigners;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionTrustedSigners[_d] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionTrustedSigners", version: "3.0.1" };
function cloudfrontDistributionCustomErrorResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        error_caching_min_ttl: cdktf.numberToTerraform(struct.errorCachingMinTtl),
        error_code: cdktf.numberToTerraform(struct.errorCode),
        response_code: cdktf.numberToTerraform(struct.responseCode),
        response_page_path: cdktf.stringToTerraform(struct.responsePagePath),
    };
}
exports.cloudfrontDistributionCustomErrorResponseToTerraform = cloudfrontDistributionCustomErrorResponseToTerraform;
function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
exports.cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform = cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
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
        if (this._forward) {
            hasAnyValues = true;
            internalValueResult.forward = this._forward;
        }
        if (this._whitelistedNames) {
            hasAnyValues = true;
            internalValueResult.whitelistedNames = this._whitelistedNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forward = undefined;
            this._whitelistedNames = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forward = value.forward;
            this._whitelistedNames = value.whitelistedNames;
        }
    }
    /**
     * @stability stable
     */
    get forward() {
        return this.getStringAttribute('forward');
    }
    /**
     * @stability stable
     */
    set forward(value) {
        this._forward = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forwardInput() {
        return this._forward;
    }
    /**
     * @stability stable
     */
    get whitelistedNames() {
        return this.getListAttribute('whitelisted_names');
    }
    /**
     * @stability stable
     */
    set whitelistedNames(value) {
        this._whitelistedNames = value;
    }
    /**
     * @stability stable
     */
    resetWhitelistedNames() {
        this._whitelistedNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get whitelistedNamesInput() {
        return this._whitelistedNames;
    }
}
exports.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference = CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference[_e] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference", version: "3.0.1" };
function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct.cookies),
    };
}
exports.cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform = cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cookies - computed: false, optional: false, required: true
        this._cookies = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(this, "cookies", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._headers) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._queryString) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._queryStringCacheKeys) {
            hasAnyValues = true;
            internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
        }
        if ((_u = this._cookies) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.cookies = (_v = this._cookies) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._headers = undefined;
            this._queryString = undefined;
            this._queryStringCacheKeys = undefined;
            this._cookies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headers = value.headers;
            this._queryString = value.queryString;
            this._queryStringCacheKeys = value.queryStringCacheKeys;
            this._cookies.internalValue = value.cookies;
        }
    }
    /**
     * @stability stable
     */
    get headers() {
        return this.getListAttribute('headers');
    }
    /**
     * @stability stable
     */
    set headers(value) {
        this._headers = value;
    }
    /**
     * @stability stable
     */
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headersInput() {
        return this._headers;
    }
    /**
     * @stability stable
     */
    get queryString() {
        return this.getBooleanAttribute('query_string');
    }
    /**
     * @stability stable
     */
    set queryString(value) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringInput() {
        return this._queryString;
    }
    /**
     * @stability stable
     */
    get queryStringCacheKeys() {
        return this.getListAttribute('query_string_cache_keys');
    }
    /**
     * @stability stable
     */
    set queryStringCacheKeys(value) {
        this._queryStringCacheKeys = value;
    }
    /**
     * @stability stable
     */
    resetQueryStringCacheKeys() {
        this._queryStringCacheKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringCacheKeysInput() {
        return this._queryStringCacheKeys;
    }
    /**
     * @stability stable
     */
    get cookies() {
        return this._cookies;
    }
    /**
     * @stability stable
     */
    putCookies(value) {
        this._cookies.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cookiesInput() {
        return this._cookies.internalValue;
    }
}
exports.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference = CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference[_f] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference", version: "3.0.1" };
function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
exports.cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform = cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform;
function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
    };
}
exports.cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform = cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform;
function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        response_headers_policy_id: cdktf.stringToTerraform(struct.responseHeadersPolicyId),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct.forwardedValues),
        function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform)(struct.functionAssociation),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation),
    };
}
exports.cloudfrontDistributionDefaultCacheBehaviorToTerraform = cloudfrontDistributionDefaultCacheBehaviorToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // forwarded_values - computed: false, optional: true, required: false
        this._forwardedValues = new CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(this, "forwarded_values", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowedMethods) {
            hasAnyValues = true;
            internalValueResult.allowedMethods = this._allowedMethods;
        }
        if (this._cachePolicyId) {
            hasAnyValues = true;
            internalValueResult.cachePolicyId = this._cachePolicyId;
        }
        if (this._cachedMethods) {
            hasAnyValues = true;
            internalValueResult.cachedMethods = this._cachedMethods;
        }
        if (this._compress) {
            hasAnyValues = true;
            internalValueResult.compress = this._compress;
        }
        if (this._defaultTtl) {
            hasAnyValues = true;
            internalValueResult.defaultTtl = this._defaultTtl;
        }
        if (this._fieldLevelEncryptionId) {
            hasAnyValues = true;
            internalValueResult.fieldLevelEncryptionId = this._fieldLevelEncryptionId;
        }
        if (this._maxTtl) {
            hasAnyValues = true;
            internalValueResult.maxTtl = this._maxTtl;
        }
        if (this._minTtl) {
            hasAnyValues = true;
            internalValueResult.minTtl = this._minTtl;
        }
        if (this._originRequestPolicyId) {
            hasAnyValues = true;
            internalValueResult.originRequestPolicyId = this._originRequestPolicyId;
        }
        if (this._realtimeLogConfigArn) {
            hasAnyValues = true;
            internalValueResult.realtimeLogConfigArn = this._realtimeLogConfigArn;
        }
        if (this._responseHeadersPolicyId) {
            hasAnyValues = true;
            internalValueResult.responseHeadersPolicyId = this._responseHeadersPolicyId;
        }
        if (this._smoothStreaming) {
            hasAnyValues = true;
            internalValueResult.smoothStreaming = this._smoothStreaming;
        }
        if (this._targetOriginId) {
            hasAnyValues = true;
            internalValueResult.targetOriginId = this._targetOriginId;
        }
        if (this._trustedKeyGroups) {
            hasAnyValues = true;
            internalValueResult.trustedKeyGroups = this._trustedKeyGroups;
        }
        if (this._trustedSigners) {
            hasAnyValues = true;
            internalValueResult.trustedSigners = this._trustedSigners;
        }
        if (this._viewerProtocolPolicy) {
            hasAnyValues = true;
            internalValueResult.viewerProtocolPolicy = this._viewerProtocolPolicy;
        }
        if ((_u = this._forwardedValues) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedValues = (_v = this._forwardedValues) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        if (this._functionAssociation) {
            hasAnyValues = true;
            internalValueResult.functionAssociation = this._functionAssociation;
        }
        if (this._lambdaFunctionAssociation) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionAssociation = this._lambdaFunctionAssociation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowedMethods = undefined;
            this._cachePolicyId = undefined;
            this._cachedMethods = undefined;
            this._compress = undefined;
            this._defaultTtl = undefined;
            this._fieldLevelEncryptionId = undefined;
            this._maxTtl = undefined;
            this._minTtl = undefined;
            this._originRequestPolicyId = undefined;
            this._realtimeLogConfigArn = undefined;
            this._responseHeadersPolicyId = undefined;
            this._smoothStreaming = undefined;
            this._targetOriginId = undefined;
            this._trustedKeyGroups = undefined;
            this._trustedSigners = undefined;
            this._viewerProtocolPolicy = undefined;
            this._forwardedValues.internalValue = undefined;
            this._functionAssociation = undefined;
            this._lambdaFunctionAssociation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowedMethods = value.allowedMethods;
            this._cachePolicyId = value.cachePolicyId;
            this._cachedMethods = value.cachedMethods;
            this._compress = value.compress;
            this._defaultTtl = value.defaultTtl;
            this._fieldLevelEncryptionId = value.fieldLevelEncryptionId;
            this._maxTtl = value.maxTtl;
            this._minTtl = value.minTtl;
            this._originRequestPolicyId = value.originRequestPolicyId;
            this._realtimeLogConfigArn = value.realtimeLogConfigArn;
            this._responseHeadersPolicyId = value.responseHeadersPolicyId;
            this._smoothStreaming = value.smoothStreaming;
            this._targetOriginId = value.targetOriginId;
            this._trustedKeyGroups = value.trustedKeyGroups;
            this._trustedSigners = value.trustedSigners;
            this._viewerProtocolPolicy = value.viewerProtocolPolicy;
            this._forwardedValues.internalValue = value.forwardedValues;
            this._functionAssociation = value.functionAssociation;
            this._lambdaFunctionAssociation = value.lambdaFunctionAssociation;
        }
    }
    /**
     * @stability stable
     */
    get allowedMethods() {
        return this.getListAttribute('allowed_methods');
    }
    /**
     * @stability stable
     */
    set allowedMethods(value) {
        this._allowedMethods = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowedMethodsInput() {
        return this._allowedMethods;
    }
    /**
     * @stability stable
     */
    get cachePolicyId() {
        return this.getStringAttribute('cache_policy_id');
    }
    /**
     * @stability stable
     */
    set cachePolicyId(value) {
        this._cachePolicyId = value;
    }
    /**
     * @stability stable
     */
    resetCachePolicyId() {
        this._cachePolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cachePolicyIdInput() {
        return this._cachePolicyId;
    }
    /**
     * @stability stable
     */
    get cachedMethods() {
        return this.getListAttribute('cached_methods');
    }
    /**
     * @stability stable
     */
    set cachedMethods(value) {
        this._cachedMethods = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cachedMethodsInput() {
        return this._cachedMethods;
    }
    /**
     * @stability stable
     */
    get compress() {
        return this.getBooleanAttribute('compress');
    }
    /**
     * @stability stable
     */
    set compress(value) {
        this._compress = value;
    }
    /**
     * @stability stable
     */
    resetCompress() {
        this._compress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressInput() {
        return this._compress;
    }
    /**
     * @stability stable
     */
    get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    /**
     * @stability stable
     */
    set defaultTtl(value) {
        this._defaultTtl = value;
    }
    /**
     * @stability stable
     */
    resetDefaultTtl() {
        this._defaultTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultTtlInput() {
        return this._defaultTtl;
    }
    /**
     * @stability stable
     */
    get fieldLevelEncryptionId() {
        return this.getStringAttribute('field_level_encryption_id');
    }
    /**
     * @stability stable
     */
    set fieldLevelEncryptionId(value) {
        this._fieldLevelEncryptionId = value;
    }
    /**
     * @stability stable
     */
    resetFieldLevelEncryptionId() {
        this._fieldLevelEncryptionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fieldLevelEncryptionIdInput() {
        return this._fieldLevelEncryptionId;
    }
    /**
     * @stability stable
     */
    get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    /**
     * @stability stable
     */
    set maxTtl(value) {
        this._maxTtl = value;
    }
    /**
     * @stability stable
     */
    resetMaxTtl() {
        this._maxTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxTtlInput() {
        return this._maxTtl;
    }
    /**
     * @stability stable
     */
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
    }
    /**
     * @stability stable
     */
    set minTtl(value) {
        this._minTtl = value;
    }
    /**
     * @stability stable
     */
    resetMinTtl() {
        this._minTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minTtlInput() {
        return this._minTtl;
    }
    /**
     * @stability stable
     */
    get originRequestPolicyId() {
        return this.getStringAttribute('origin_request_policy_id');
    }
    /**
     * @stability stable
     */
    set originRequestPolicyId(value) {
        this._originRequestPolicyId = value;
    }
    /**
     * @stability stable
     */
    resetOriginRequestPolicyId() {
        this._originRequestPolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originRequestPolicyIdInput() {
        return this._originRequestPolicyId;
    }
    /**
     * @stability stable
     */
    get realtimeLogConfigArn() {
        return this.getStringAttribute('realtime_log_config_arn');
    }
    /**
     * @stability stable
     */
    set realtimeLogConfigArn(value) {
        this._realtimeLogConfigArn = value;
    }
    /**
     * @stability stable
     */
    resetRealtimeLogConfigArn() {
        this._realtimeLogConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get realtimeLogConfigArnInput() {
        return this._realtimeLogConfigArn;
    }
    /**
     * @stability stable
     */
    get responseHeadersPolicyId() {
        return this.getStringAttribute('response_headers_policy_id');
    }
    /**
     * @stability stable
     */
    set responseHeadersPolicyId(value) {
        this._responseHeadersPolicyId = value;
    }
    /**
     * @stability stable
     */
    resetResponseHeadersPolicyId() {
        this._responseHeadersPolicyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseHeadersPolicyIdInput() {
        return this._responseHeadersPolicyId;
    }
    /**
     * @stability stable
     */
    get smoothStreaming() {
        return this.getBooleanAttribute('smooth_streaming');
    }
    /**
     * @stability stable
     */
    set smoothStreaming(value) {
        this._smoothStreaming = value;
    }
    /**
     * @stability stable
     */
    resetSmoothStreaming() {
        this._smoothStreaming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smoothStreamingInput() {
        return this._smoothStreaming;
    }
    /**
     * @stability stable
     */
    get targetOriginId() {
        return this.getStringAttribute('target_origin_id');
    }
    /**
     * @stability stable
     */
    set targetOriginId(value) {
        this._targetOriginId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetOriginIdInput() {
        return this._targetOriginId;
    }
    /**
     * @stability stable
     */
    get trustedKeyGroups() {
        return this.getListAttribute('trusted_key_groups');
    }
    /**
     * @stability stable
     */
    set trustedKeyGroups(value) {
        this._trustedKeyGroups = value;
    }
    /**
     * @stability stable
     */
    resetTrustedKeyGroups() {
        this._trustedKeyGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get trustedKeyGroupsInput() {
        return this._trustedKeyGroups;
    }
    /**
     * @stability stable
     */
    get trustedSigners() {
        return this.getListAttribute('trusted_signers');
    }
    /**
     * @stability stable
     */
    set trustedSigners(value) {
        this._trustedSigners = value;
    }
    /**
     * @stability stable
     */
    resetTrustedSigners() {
        this._trustedSigners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get trustedSignersInput() {
        return this._trustedSigners;
    }
    /**
     * @stability stable
     */
    get viewerProtocolPolicy() {
        return this.getStringAttribute('viewer_protocol_policy');
    }
    /**
     * @stability stable
     */
    set viewerProtocolPolicy(value) {
        this._viewerProtocolPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get viewerProtocolPolicyInput() {
        return this._viewerProtocolPolicy;
    }
    /**
     * @stability stable
     */
    get forwardedValues() {
        return this._forwardedValues;
    }
    /**
     * @stability stable
     */
    putForwardedValues(value) {
        this._forwardedValues.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetForwardedValues() {
        this._forwardedValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forwardedValuesInput() {
        return this._forwardedValues.internalValue;
    }
    /**
     * @stability stable
     */
    get functionAssociation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('function_association');
    }
    /**
     * @stability stable
     */
    set functionAssociation(value) {
        this._functionAssociation = value;
    }
    /**
     * @stability stable
     */
    resetFunctionAssociation() {
        this._functionAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionAssociationInput() {
        return this._functionAssociation;
    }
    /**
     * @stability stable
     */
    get lambdaFunctionAssociation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('lambda_function_association');
    }
    /**
     * @stability stable
     */
    set lambdaFunctionAssociation(value) {
        this._lambdaFunctionAssociation = value;
    }
    /**
     * @stability stable
     */
    resetLambdaFunctionAssociation() {
        this._lambdaFunctionAssociation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaFunctionAssociationInput() {
        return this._lambdaFunctionAssociation;
    }
}
exports.CloudfrontDistributionDefaultCacheBehaviorOutputReference = CloudfrontDistributionDefaultCacheBehaviorOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionDefaultCacheBehaviorOutputReference[_g] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionDefaultCacheBehaviorOutputReference", version: "3.0.1" };
function cloudfrontDistributionLoggingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        include_cookies: cdktf.booleanToTerraform(struct.includeCookies),
        prefix: cdktf.stringToTerraform(struct.prefix),
    };
}
exports.cloudfrontDistributionLoggingConfigToTerraform = cloudfrontDistributionLoggingConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionLoggingConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._bucket) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._includeCookies) {
            hasAnyValues = true;
            internalValueResult.includeCookies = this._includeCookies;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucket = undefined;
            this._includeCookies = undefined;
            this._prefix = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucket = value.bucket;
            this._includeCookies = value.includeCookies;
            this._prefix = value.prefix;
        }
    }
    /**
     * @stability stable
     */
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    /**
     * @stability stable
     */
    set bucket(value) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketInput() {
        return this._bucket;
    }
    /**
     * @stability stable
     */
    get includeCookies() {
        return this.getBooleanAttribute('include_cookies');
    }
    /**
     * @stability stable
     */
    set includeCookies(value) {
        this._includeCookies = value;
    }
    /**
     * @stability stable
     */
    resetIncludeCookies() {
        this._includeCookies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeCookiesInput() {
        return this._includeCookies;
    }
    /**
     * @stability stable
     */
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    /**
     * @stability stable
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * @stability stable
     */
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prefixInput() {
        return this._prefix;
    }
}
exports.CloudfrontDistributionLoggingConfigOutputReference = CloudfrontDistributionLoggingConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionLoggingConfigOutputReference[_h] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionLoggingConfigOutputReference", version: "3.0.1" };
function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        forward: cdktf.stringToTerraform(struct.forward),
        whitelisted_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.whitelistedNames),
    };
}
exports.cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform = cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
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
        if (this._forward) {
            hasAnyValues = true;
            internalValueResult.forward = this._forward;
        }
        if (this._whitelistedNames) {
            hasAnyValues = true;
            internalValueResult.whitelistedNames = this._whitelistedNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._forward = undefined;
            this._whitelistedNames = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._forward = value.forward;
            this._whitelistedNames = value.whitelistedNames;
        }
    }
    /**
     * @stability stable
     */
    get forward() {
        return this.getStringAttribute('forward');
    }
    /**
     * @stability stable
     */
    set forward(value) {
        this._forward = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forwardInput() {
        return this._forward;
    }
    /**
     * @stability stable
     */
    get whitelistedNames() {
        return this.getListAttribute('whitelisted_names');
    }
    /**
     * @stability stable
     */
    set whitelistedNames(value) {
        this._whitelistedNames = value;
    }
    /**
     * @stability stable
     */
    resetWhitelistedNames() {
        this._whitelistedNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get whitelistedNamesInput() {
        return this._whitelistedNames;
    }
}
exports.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference = CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference[_j] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference", version: "3.0.1" };
function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.listMapper(cdktf.stringToTerraform)(struct.headers),
        query_string: cdktf.booleanToTerraform(struct.queryString),
        query_string_cache_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.queryStringCacheKeys),
        cookies: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct.cookies),
    };
}
exports.cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform = cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cookies - computed: false, optional: false, required: true
        this._cookies = new CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(this, "cookies", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._headers) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._queryString) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        if (this._queryStringCacheKeys) {
            hasAnyValues = true;
            internalValueResult.queryStringCacheKeys = this._queryStringCacheKeys;
        }
        if ((_u = this._cookies) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.cookies = (_v = this._cookies) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._headers = undefined;
            this._queryString = undefined;
            this._queryStringCacheKeys = undefined;
            this._cookies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headers = value.headers;
            this._queryString = value.queryString;
            this._queryStringCacheKeys = value.queryStringCacheKeys;
            this._cookies.internalValue = value.cookies;
        }
    }
    /**
     * @stability stable
     */
    get headers() {
        return this.getListAttribute('headers');
    }
    /**
     * @stability stable
     */
    set headers(value) {
        this._headers = value;
    }
    /**
     * @stability stable
     */
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headersInput() {
        return this._headers;
    }
    /**
     * @stability stable
     */
    get queryString() {
        return this.getBooleanAttribute('query_string');
    }
    /**
     * @stability stable
     */
    set queryString(value) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringInput() {
        return this._queryString;
    }
    /**
     * @stability stable
     */
    get queryStringCacheKeys() {
        return this.getListAttribute('query_string_cache_keys');
    }
    /**
     * @stability stable
     */
    set queryStringCacheKeys(value) {
        this._queryStringCacheKeys = value;
    }
    /**
     * @stability stable
     */
    resetQueryStringCacheKeys() {
        this._queryStringCacheKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringCacheKeysInput() {
        return this._queryStringCacheKeys;
    }
    /**
     * @stability stable
     */
    get cookies() {
        return this._cookies;
    }
    /**
     * @stability stable
     */
    putCookies(value) {
        this._cookies.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cookiesInput() {
        return this._cookies.internalValue;
    }
}
exports.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference = CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference[_k] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference", version: "3.0.1" };
function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        function_arn: cdktf.stringToTerraform(struct.functionArn),
    };
}
exports.cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform = cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform;
function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_type: cdktf.stringToTerraform(struct.eventType),
        include_body: cdktf.booleanToTerraform(struct.includeBody),
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
    };
}
exports.cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform = cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform;
function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.allowedMethods),
        cache_policy_id: cdktf.stringToTerraform(struct.cachePolicyId),
        cached_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachedMethods),
        compress: cdktf.booleanToTerraform(struct.compress),
        default_ttl: cdktf.numberToTerraform(struct.defaultTtl),
        field_level_encryption_id: cdktf.stringToTerraform(struct.fieldLevelEncryptionId),
        max_ttl: cdktf.numberToTerraform(struct.maxTtl),
        min_ttl: cdktf.numberToTerraform(struct.minTtl),
        origin_request_policy_id: cdktf.stringToTerraform(struct.originRequestPolicyId),
        path_pattern: cdktf.stringToTerraform(struct.pathPattern),
        realtime_log_config_arn: cdktf.stringToTerraform(struct.realtimeLogConfigArn),
        response_headers_policy_id: cdktf.stringToTerraform(struct.responseHeadersPolicyId),
        smooth_streaming: cdktf.booleanToTerraform(struct.smoothStreaming),
        target_origin_id: cdktf.stringToTerraform(struct.targetOriginId),
        trusted_key_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedKeyGroups),
        trusted_signers: cdktf.listMapper(cdktf.stringToTerraform)(struct.trustedSigners),
        viewer_protocol_policy: cdktf.stringToTerraform(struct.viewerProtocolPolicy),
        forwarded_values: cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct.forwardedValues),
        function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform)(struct.functionAssociation),
        lambda_function_association: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform)(struct.lambdaFunctionAssociation),
    };
}
exports.cloudfrontDistributionOrderedCacheBehaviorToTerraform = cloudfrontDistributionOrderedCacheBehaviorToTerraform;
function cloudfrontDistributionOriginCustomHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudfrontDistributionOriginCustomHeaderToTerraform = cloudfrontDistributionOriginCustomHeaderToTerraform;
function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        http_port: cdktf.numberToTerraform(struct.httpPort),
        https_port: cdktf.numberToTerraform(struct.httpsPort),
        origin_keepalive_timeout: cdktf.numberToTerraform(struct.originKeepaliveTimeout),
        origin_protocol_policy: cdktf.stringToTerraform(struct.originProtocolPolicy),
        origin_read_timeout: cdktf.numberToTerraform(struct.originReadTimeout),
        origin_ssl_protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct.originSslProtocols),
    };
}
exports.cloudfrontDistributionOriginCustomOriginConfigToTerraform = cloudfrontDistributionOriginCustomOriginConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionOriginCustomOriginConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._httpPort) {
            hasAnyValues = true;
            internalValueResult.httpPort = this._httpPort;
        }
        if (this._httpsPort) {
            hasAnyValues = true;
            internalValueResult.httpsPort = this._httpsPort;
        }
        if (this._originKeepaliveTimeout) {
            hasAnyValues = true;
            internalValueResult.originKeepaliveTimeout = this._originKeepaliveTimeout;
        }
        if (this._originProtocolPolicy) {
            hasAnyValues = true;
            internalValueResult.originProtocolPolicy = this._originProtocolPolicy;
        }
        if (this._originReadTimeout) {
            hasAnyValues = true;
            internalValueResult.originReadTimeout = this._originReadTimeout;
        }
        if (this._originSslProtocols) {
            hasAnyValues = true;
            internalValueResult.originSslProtocols = this._originSslProtocols;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._httpPort = undefined;
            this._httpsPort = undefined;
            this._originKeepaliveTimeout = undefined;
            this._originProtocolPolicy = undefined;
            this._originReadTimeout = undefined;
            this._originSslProtocols = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._httpPort = value.httpPort;
            this._httpsPort = value.httpsPort;
            this._originKeepaliveTimeout = value.originKeepaliveTimeout;
            this._originProtocolPolicy = value.originProtocolPolicy;
            this._originReadTimeout = value.originReadTimeout;
            this._originSslProtocols = value.originSslProtocols;
        }
    }
    /**
     * @stability stable
     */
    get httpPort() {
        return this.getNumberAttribute('http_port');
    }
    /**
     * @stability stable
     */
    set httpPort(value) {
        this._httpPort = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpPortInput() {
        return this._httpPort;
    }
    /**
     * @stability stable
     */
    get httpsPort() {
        return this.getNumberAttribute('https_port');
    }
    /**
     * @stability stable
     */
    set httpsPort(value) {
        this._httpsPort = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpsPortInput() {
        return this._httpsPort;
    }
    /**
     * @stability stable
     */
    get originKeepaliveTimeout() {
        return this.getNumberAttribute('origin_keepalive_timeout');
    }
    /**
     * @stability stable
     */
    set originKeepaliveTimeout(value) {
        this._originKeepaliveTimeout = value;
    }
    /**
     * @stability stable
     */
    resetOriginKeepaliveTimeout() {
        this._originKeepaliveTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originKeepaliveTimeoutInput() {
        return this._originKeepaliveTimeout;
    }
    /**
     * @stability stable
     */
    get originProtocolPolicy() {
        return this.getStringAttribute('origin_protocol_policy');
    }
    /**
     * @stability stable
     */
    set originProtocolPolicy(value) {
        this._originProtocolPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originProtocolPolicyInput() {
        return this._originProtocolPolicy;
    }
    /**
     * @stability stable
     */
    get originReadTimeout() {
        return this.getNumberAttribute('origin_read_timeout');
    }
    /**
     * @stability stable
     */
    set originReadTimeout(value) {
        this._originReadTimeout = value;
    }
    /**
     * @stability stable
     */
    resetOriginReadTimeout() {
        this._originReadTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originReadTimeoutInput() {
        return this._originReadTimeout;
    }
    /**
     * @stability stable
     */
    get originSslProtocols() {
        return this.getListAttribute('origin_ssl_protocols');
    }
    /**
     * @stability stable
     */
    set originSslProtocols(value) {
        this._originSslProtocols = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originSslProtocolsInput() {
        return this._originSslProtocols;
    }
}
exports.CloudfrontDistributionOriginCustomOriginConfigOutputReference = CloudfrontDistributionOriginCustomOriginConfigOutputReference;
_l = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionOriginCustomOriginConfigOutputReference[_l] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionOriginCustomOriginConfigOutputReference", version: "3.0.1" };
function cloudfrontDistributionOriginOriginShieldToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        origin_shield_region: cdktf.stringToTerraform(struct.originShieldRegion),
    };
}
exports.cloudfrontDistributionOriginOriginShieldToTerraform = cloudfrontDistributionOriginOriginShieldToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionOriginOriginShieldOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._originShieldRegion) {
            hasAnyValues = true;
            internalValueResult.originShieldRegion = this._originShieldRegion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._originShieldRegion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._originShieldRegion = value.originShieldRegion;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get originShieldRegion() {
        return this.getStringAttribute('origin_shield_region');
    }
    /**
     * @stability stable
     */
    set originShieldRegion(value) {
        this._originShieldRegion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originShieldRegionInput() {
        return this._originShieldRegion;
    }
}
exports.CloudfrontDistributionOriginOriginShieldOutputReference = CloudfrontDistributionOriginOriginShieldOutputReference;
_m = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionOriginOriginShieldOutputReference[_m] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionOriginOriginShieldOutputReference", version: "3.0.1" };
function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_access_identity: cdktf.stringToTerraform(struct.originAccessIdentity),
    };
}
exports.cloudfrontDistributionOriginS3OriginConfigToTerraform = cloudfrontDistributionOriginS3OriginConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionOriginS3OriginConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._originAccessIdentity) {
            hasAnyValues = true;
            internalValueResult.originAccessIdentity = this._originAccessIdentity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._originAccessIdentity = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._originAccessIdentity = value.originAccessIdentity;
        }
    }
    /**
     * @stability stable
     */
    get originAccessIdentity() {
        return this.getStringAttribute('origin_access_identity');
    }
    /**
     * @stability stable
     */
    set originAccessIdentity(value) {
        this._originAccessIdentity = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originAccessIdentityInput() {
        return this._originAccessIdentity;
    }
}
exports.CloudfrontDistributionOriginS3OriginConfigOutputReference = CloudfrontDistributionOriginS3OriginConfigOutputReference;
_o = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionOriginS3OriginConfigOutputReference[_o] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionOriginS3OriginConfigOutputReference", version: "3.0.1" };
function cloudfrontDistributionOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_attempts: cdktf.numberToTerraform(struct.connectionAttempts),
        connection_timeout: cdktf.numberToTerraform(struct.connectionTimeout),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        origin_id: cdktf.stringToTerraform(struct.originId),
        origin_path: cdktf.stringToTerraform(struct.originPath),
        custom_header: cdktf.listMapper(cloudfrontDistributionOriginCustomHeaderToTerraform)(struct.customHeader),
        custom_origin_config: cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct.customOriginConfig),
        origin_shield: cloudfrontDistributionOriginOriginShieldToTerraform(struct.originShield),
        s3_origin_config: cloudfrontDistributionOriginS3OriginConfigToTerraform(struct.s3OriginConfig),
    };
}
exports.cloudfrontDistributionOriginToTerraform = cloudfrontDistributionOriginToTerraform;
function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct.statusCodes),
    };
}
exports.cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform = cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference extends cdktf.ComplexObject {
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
        if (this._statusCodes) {
            hasAnyValues = true;
            internalValueResult.statusCodes = this._statusCodes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statusCodes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statusCodes = value.statusCodes;
        }
    }
    /**
     * @stability stable
     */
    get statusCodes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('status_codes');
    }
    /**
     * @stability stable
     */
    set statusCodes(value) {
        this._statusCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusCodesInput() {
        return this._statusCodes;
    }
}
exports.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference = CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference;
_p = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference[_p] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference", version: "3.0.1" };
function cloudfrontDistributionOriginGroupMemberToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
    };
}
exports.cloudfrontDistributionOriginGroupMemberToTerraform = cloudfrontDistributionOriginGroupMemberToTerraform;
function cloudfrontDistributionOriginGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        origin_id: cdktf.stringToTerraform(struct.originId),
        failover_criteria: cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct.failoverCriteria),
        member: cdktf.listMapper(cloudfrontDistributionOriginGroupMemberToTerraform)(struct.member),
    };
}
exports.cloudfrontDistributionOriginGroupToTerraform = cloudfrontDistributionOriginGroupToTerraform;
function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        locations: cdktf.listMapper(cdktf.stringToTerraform)(struct.locations),
        restriction_type: cdktf.stringToTerraform(struct.restrictionType),
    };
}
exports.cloudfrontDistributionRestrictionsGeoRestrictionToTerraform = cloudfrontDistributionRestrictionsGeoRestrictionToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionRestrictionsGeoRestrictionOutputReference extends cdktf.ComplexObject {
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
        if (this._locations) {
            hasAnyValues = true;
            internalValueResult.locations = this._locations;
        }
        if (this._restrictionType) {
            hasAnyValues = true;
            internalValueResult.restrictionType = this._restrictionType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._locations = undefined;
            this._restrictionType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._locations = value.locations;
            this._restrictionType = value.restrictionType;
        }
    }
    /**
     * @stability stable
     */
    get locations() {
        return this.getListAttribute('locations');
    }
    /**
     * @stability stable
     */
    set locations(value) {
        this._locations = value;
    }
    /**
     * @stability stable
     */
    resetLocations() {
        this._locations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get locationsInput() {
        return this._locations;
    }
    /**
     * @stability stable
     */
    get restrictionType() {
        return this.getStringAttribute('restriction_type');
    }
    /**
     * @stability stable
     */
    set restrictionType(value) {
        this._restrictionType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restrictionTypeInput() {
        return this._restrictionType;
    }
}
exports.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference = CloudfrontDistributionRestrictionsGeoRestrictionOutputReference;
_q = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionRestrictionsGeoRestrictionOutputReference[_q] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference", version: "3.0.1" };
function cloudfrontDistributionRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        geo_restriction: cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct.geoRestriction),
    };
}
exports.cloudfrontDistributionRestrictionsToTerraform = cloudfrontDistributionRestrictionsToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionRestrictionsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // geo_restriction - computed: false, optional: false, required: true
        this._geoRestriction = new CloudfrontDistributionRestrictionsGeoRestrictionOutputReference(this, "geo_restriction", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _u, _v;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_u = this._geoRestriction) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.geoRestriction = (_v = this._geoRestriction) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._geoRestriction.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._geoRestriction.internalValue = value.geoRestriction;
        }
    }
    /**
     * @stability stable
     */
    get geoRestriction() {
        return this._geoRestriction;
    }
    /**
     * @stability stable
     */
    putGeoRestriction(value) {
        this._geoRestriction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get geoRestrictionInput() {
        return this._geoRestriction.internalValue;
    }
}
exports.CloudfrontDistributionRestrictionsOutputReference = CloudfrontDistributionRestrictionsOutputReference;
_r = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionRestrictionsOutputReference[_r] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionRestrictionsOutputReference", version: "3.0.1" };
function cloudfrontDistributionViewerCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        acm_certificate_arn: cdktf.stringToTerraform(struct.acmCertificateArn),
        cloudfront_default_certificate: cdktf.booleanToTerraform(struct.cloudfrontDefaultCertificate),
        iam_certificate_id: cdktf.stringToTerraform(struct.iamCertificateId),
        minimum_protocol_version: cdktf.stringToTerraform(struct.minimumProtocolVersion),
        ssl_support_method: cdktf.stringToTerraform(struct.sslSupportMethod),
    };
}
exports.cloudfrontDistributionViewerCertificateToTerraform = cloudfrontDistributionViewerCertificateToTerraform;
/**
 * @stability stable
 */
class CloudfrontDistributionViewerCertificateOutputReference extends cdktf.ComplexObject {
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
        if (this._acmCertificateArn) {
            hasAnyValues = true;
            internalValueResult.acmCertificateArn = this._acmCertificateArn;
        }
        if (this._cloudfrontDefaultCertificate) {
            hasAnyValues = true;
            internalValueResult.cloudfrontDefaultCertificate = this._cloudfrontDefaultCertificate;
        }
        if (this._iamCertificateId) {
            hasAnyValues = true;
            internalValueResult.iamCertificateId = this._iamCertificateId;
        }
        if (this._minimumProtocolVersion) {
            hasAnyValues = true;
            internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
        }
        if (this._sslSupportMethod) {
            hasAnyValues = true;
            internalValueResult.sslSupportMethod = this._sslSupportMethod;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._acmCertificateArn = undefined;
            this._cloudfrontDefaultCertificate = undefined;
            this._iamCertificateId = undefined;
            this._minimumProtocolVersion = undefined;
            this._sslSupportMethod = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._acmCertificateArn = value.acmCertificateArn;
            this._cloudfrontDefaultCertificate = value.cloudfrontDefaultCertificate;
            this._iamCertificateId = value.iamCertificateId;
            this._minimumProtocolVersion = value.minimumProtocolVersion;
            this._sslSupportMethod = value.sslSupportMethod;
        }
    }
    /**
     * @stability stable
     */
    get acmCertificateArn() {
        return this.getStringAttribute('acm_certificate_arn');
    }
    /**
     * @stability stable
     */
    set acmCertificateArn(value) {
        this._acmCertificateArn = value;
    }
    /**
     * @stability stable
     */
    resetAcmCertificateArn() {
        this._acmCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get acmCertificateArnInput() {
        return this._acmCertificateArn;
    }
    /**
     * @stability stable
     */
    get cloudfrontDefaultCertificate() {
        return this.getBooleanAttribute('cloudfront_default_certificate');
    }
    /**
     * @stability stable
     */
    set cloudfrontDefaultCertificate(value) {
        this._cloudfrontDefaultCertificate = value;
    }
    /**
     * @stability stable
     */
    resetCloudfrontDefaultCertificate() {
        this._cloudfrontDefaultCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudfrontDefaultCertificateInput() {
        return this._cloudfrontDefaultCertificate;
    }
    /**
     * @stability stable
     */
    get iamCertificateId() {
        return this.getStringAttribute('iam_certificate_id');
    }
    /**
     * @stability stable
     */
    set iamCertificateId(value) {
        this._iamCertificateId = value;
    }
    /**
     * @stability stable
     */
    resetIamCertificateId() {
        this._iamCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamCertificateIdInput() {
        return this._iamCertificateId;
    }
    /**
     * @stability stable
     */
    get minimumProtocolVersion() {
        return this.getStringAttribute('minimum_protocol_version');
    }
    /**
     * @stability stable
     */
    set minimumProtocolVersion(value) {
        this._minimumProtocolVersion = value;
    }
    /**
     * @stability stable
     */
    resetMinimumProtocolVersion() {
        this._minimumProtocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minimumProtocolVersionInput() {
        return this._minimumProtocolVersion;
    }
    /**
     * @stability stable
     */
    get sslSupportMethod() {
        return this.getStringAttribute('ssl_support_method');
    }
    /**
     * @stability stable
     */
    set sslSupportMethod(value) {
        this._sslSupportMethod = value;
    }
    /**
     * @stability stable
     */
    resetSslSupportMethod() {
        this._sslSupportMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslSupportMethodInput() {
        return this._sslSupportMethod;
    }
}
exports.CloudfrontDistributionViewerCertificateOutputReference = CloudfrontDistributionViewerCertificateOutputReference;
_s = JSII_RTTI_SYMBOL_1;
CloudfrontDistributionViewerCertificateOutputReference[_s] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistributionViewerCertificateOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution}.
 *
 * @stability stable
 */
class CloudfrontDistribution extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html aws_cloudfront_distribution} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_distribution',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // default_cache_behavior - computed: false, optional: false, required: true
        this._defaultCacheBehavior = new CloudfrontDistributionDefaultCacheBehaviorOutputReference(this, "default_cache_behavior", true);
        // logging_config - computed: false, optional: true, required: false
        this._loggingConfig = new CloudfrontDistributionLoggingConfigOutputReference(this, "logging_config", true);
        // restrictions - computed: false, optional: false, required: true
        this._restrictions = new CloudfrontDistributionRestrictionsOutputReference(this, "restrictions", true);
        // viewer_certificate - computed: false, optional: false, required: true
        this._viewerCertificate = new CloudfrontDistributionViewerCertificateOutputReference(this, "viewer_certificate", true);
        this._aliases = config.aliases;
        this._comment = config.comment;
        this._defaultRootObject = config.defaultRootObject;
        this._enabled = config.enabled;
        this._httpVersion = config.httpVersion;
        this._isIpv6Enabled = config.isIpv6Enabled;
        this._priceClass = config.priceClass;
        this._retainOnDelete = config.retainOnDelete;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._waitForDeployment = config.waitForDeployment;
        this._webAclId = config.webAclId;
        this._customErrorResponse = config.customErrorResponse;
        this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
        this._loggingConfig.internalValue = config.loggingConfig;
        this._orderedCacheBehavior = config.orderedCacheBehavior;
        this._origin = config.origin;
        this._originGroup = config.originGroup;
        this._restrictions.internalValue = config.restrictions;
        this._viewerCertificate.internalValue = config.viewerCertificate;
    }
    /**
     * @stability stable
     */
    get aliases() {
        return this.getListAttribute('aliases');
    }
    /**
     * @stability stable
     */
    set aliases(value) {
        this._aliases = value;
    }
    /**
     * @stability stable
     */
    resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get aliasesInput() {
        return this._aliases;
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // caller_reference - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get callerReference() {
        return this.getStringAttribute('caller_reference');
    }
    /**
     * @stability stable
     */
    get comment() {
        return this.getStringAttribute('comment');
    }
    /**
     * @stability stable
     */
    set comment(value) {
        this._comment = value;
    }
    /**
     * @stability stable
     */
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get commentInput() {
        return this._comment;
    }
    /**
     * @stability stable
     */
    get defaultRootObject() {
        return this.getStringAttribute('default_root_object');
    }
    /**
     * @stability stable
     */
    set defaultRootObject(value) {
        this._defaultRootObject = value;
    }
    /**
     * @stability stable
     */
    resetDefaultRootObject() {
        this._defaultRootObject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultRootObjectInput() {
        return this._defaultRootObject;
    }
    // domain_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    // etag - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get etag() {
        return this.getStringAttribute('etag');
    }
    // hosted_zone_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    /**
     * @stability stable
     */
    get httpVersion() {
        return this.getStringAttribute('http_version');
    }
    /**
     * @stability stable
     */
    set httpVersion(value) {
        this._httpVersion = value;
    }
    /**
     * @stability stable
     */
    resetHttpVersion() {
        this._httpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpVersionInput() {
        return this._httpVersion;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // in_progress_validation_batches - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get inProgressValidationBatches() {
        return this.getNumberAttribute('in_progress_validation_batches');
    }
    /**
     * @stability stable
     */
    get isIpv6Enabled() {
        return this.getBooleanAttribute('is_ipv6_enabled');
    }
    /**
     * @stability stable
     */
    set isIpv6Enabled(value) {
        this._isIpv6Enabled = value;
    }
    /**
     * @stability stable
     */
    resetIsIpv6Enabled() {
        this._isIpv6Enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get isIpv6EnabledInput() {
        return this._isIpv6Enabled;
    }
    // last_modified_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }
    /**
     * @stability stable
     */
    get priceClass() {
        return this.getStringAttribute('price_class');
    }
    /**
     * @stability stable
     */
    set priceClass(value) {
        this._priceClass = value;
    }
    /**
     * @stability stable
     */
    resetPriceClass() {
        this._priceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get priceClassInput() {
        return this._priceClass;
    }
    /**
     * @stability stable
     */
    get retainOnDelete() {
        return this.getBooleanAttribute('retain_on_delete');
    }
    /**
     * @stability stable
     */
    set retainOnDelete(value) {
        this._retainOnDelete = value;
    }
    /**
     * @stability stable
     */
    resetRetainOnDelete() {
        this._retainOnDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retainOnDeleteInput() {
        return this._retainOnDelete;
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
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
    // trusted_key_groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    trustedKeyGroups(index) {
        return new CloudfrontDistributionTrustedKeyGroups(this, 'trusted_key_groups', index);
    }
    // trusted_signers - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    trustedSigners(index) {
        return new CloudfrontDistributionTrustedSigners(this, 'trusted_signers', index);
    }
    /**
     * @stability stable
     */
    get waitForDeployment() {
        return this.getBooleanAttribute('wait_for_deployment');
    }
    /**
     * @stability stable
     */
    set waitForDeployment(value) {
        this._waitForDeployment = value;
    }
    /**
     * @stability stable
     */
    resetWaitForDeployment() {
        this._waitForDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get waitForDeploymentInput() {
        return this._waitForDeployment;
    }
    /**
     * @stability stable
     */
    get webAclId() {
        return this.getStringAttribute('web_acl_id');
    }
    /**
     * @stability stable
     */
    set webAclId(value) {
        this._webAclId = value;
    }
    /**
     * @stability stable
     */
    resetWebAclId() {
        this._webAclId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get webAclIdInput() {
        return this._webAclId;
    }
    /**
     * @stability stable
     */
    get customErrorResponse() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_error_response');
    }
    /**
     * @stability stable
     */
    set customErrorResponse(value) {
        this._customErrorResponse = value;
    }
    /**
     * @stability stable
     */
    resetCustomErrorResponse() {
        this._customErrorResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customErrorResponseInput() {
        return this._customErrorResponse;
    }
    /**
     * @stability stable
     */
    get defaultCacheBehavior() {
        return this._defaultCacheBehavior;
    }
    /**
     * @stability stable
     */
    putDefaultCacheBehavior(value) {
        this._defaultCacheBehavior.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultCacheBehaviorInput() {
        return this._defaultCacheBehavior.internalValue;
    }
    /**
     * @stability stable
     */
    get loggingConfig() {
        return this._loggingConfig;
    }
    /**
     * @stability stable
     */
    putLoggingConfig(value) {
        this._loggingConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get orderedCacheBehavior() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ordered_cache_behavior');
    }
    /**
     * @stability stable
     */
    set orderedCacheBehavior(value) {
        this._orderedCacheBehavior = value;
    }
    /**
     * @stability stable
     */
    resetOrderedCacheBehavior() {
        this._orderedCacheBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get orderedCacheBehaviorInput() {
        return this._orderedCacheBehavior;
    }
    /**
     * @stability stable
     */
    get origin() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('origin');
    }
    /**
     * @stability stable
     */
    set origin(value) {
        this._origin = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originInput() {
        return this._origin;
    }
    /**
     * @stability stable
     */
    get originGroup() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('origin_group');
    }
    /**
     * @stability stable
     */
    set originGroup(value) {
        this._originGroup = value;
    }
    /**
     * @stability stable
     */
    resetOriginGroup() {
        this._originGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originGroupInput() {
        return this._originGroup;
    }
    /**
     * @stability stable
     */
    get restrictions() {
        return this._restrictions;
    }
    /**
     * @stability stable
     */
    putRestrictions(value) {
        this._restrictions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restrictionsInput() {
        return this._restrictions.internalValue;
    }
    /**
     * @stability stable
     */
    get viewerCertificate() {
        return this._viewerCertificate;
    }
    /**
     * @stability stable
     */
    putViewerCertificate(value) {
        this._viewerCertificate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get viewerCertificateInput() {
        return this._viewerCertificate.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
            comment: cdktf.stringToTerraform(this._comment),
            default_root_object: cdktf.stringToTerraform(this._defaultRootObject),
            enabled: cdktf.booleanToTerraform(this._enabled),
            http_version: cdktf.stringToTerraform(this._httpVersion),
            is_ipv6_enabled: cdktf.booleanToTerraform(this._isIpv6Enabled),
            price_class: cdktf.stringToTerraform(this._priceClass),
            retain_on_delete: cdktf.booleanToTerraform(this._retainOnDelete),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            wait_for_deployment: cdktf.booleanToTerraform(this._waitForDeployment),
            web_acl_id: cdktf.stringToTerraform(this._webAclId),
            custom_error_response: cdktf.listMapper(cloudfrontDistributionCustomErrorResponseToTerraform)(this._customErrorResponse),
            default_cache_behavior: cloudfrontDistributionDefaultCacheBehaviorToTerraform(this._defaultCacheBehavior.internalValue),
            logging_config: cloudfrontDistributionLoggingConfigToTerraform(this._loggingConfig.internalValue),
            ordered_cache_behavior: cdktf.listMapper(cloudfrontDistributionOrderedCacheBehaviorToTerraform)(this._orderedCacheBehavior),
            origin: cdktf.listMapper(cloudfrontDistributionOriginToTerraform)(this._origin),
            origin_group: cdktf.listMapper(cloudfrontDistributionOriginGroupToTerraform)(this._originGroup),
            restrictions: cloudfrontDistributionRestrictionsToTerraform(this._restrictions.internalValue),
            viewer_certificate: cloudfrontDistributionViewerCertificateToTerraform(this._viewerCertificate.internalValue),
        };
    }
}
exports.CloudfrontDistribution = CloudfrontDistribution;
_t = JSII_RTTI_SYMBOL_1;
CloudfrontDistribution[_t] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontDistribution", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudfrontDistribution.tfResourceType = "aws_cloudfront_distribution";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1kaXN0cmlidXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRmcm9udC9jbG91ZGZyb250LWRpc3RyaWJ1dGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQTZDL0IsTUFBYSwyQ0FBNEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXhGLGtFQUFrRTs7OztJQUNsRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGtFQUFrRTs7OztJQUNsRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7QUFWSCxrR0FXQzs7Ozs7O0FBQ0QsTUFBYSxzQ0FBdUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5GLDZEQUE2RDs7OztJQUM3RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQztJQUVELDJEQUEyRDs7OztJQUMzRCxJQUFXLEtBQUs7UUFDZCxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFRLENBQUM7SUFDeEQsQ0FBQzs7QUFYSCx3RkFZQzs7Ozs7O0FBQ0QsTUFBYSx5Q0FBMEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRGLHdFQUF3RTs7OztJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0FBVkgsOEZBV0M7Ozs7OztB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QUFDO1lBQy9FLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDRDQUE0QyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMvRixZQUFZLEVBQUUsNkNBQTZDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7WUFDN0Ysa0JBQWtCLEVBQUUsa0RBQWtELENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztTQUM5RyxDQUFDO0lBQ0osQ0FBQzs7QUExYkgsd0RBMmJDOzs7QUF6YkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxxQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxpYXNlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tbWVudD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRSb290T2JqZWN0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlzSXB2NkVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaWNlQ2xhc3M/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRhaW5PbkRlbGV0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3YWl0Rm9yRGVwbG95bWVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdlYkFjbElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21FcnJvclJlc3BvbnNlPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkN1c3RvbUVycm9yUmVzcG9uc2VbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdENhY2hlQmVoYXZpb3I6IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nZ2luZ0NvbmZpZz86IENsb3VkZnJvbnREaXN0cmlidXRpb25Mb2dnaW5nQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmRlcmVkQ2FjaGVCZWhhdmlvcj86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW46IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luR3JvdXA/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdHJpY3Rpb25zOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aWV3ZXJDZXJ0aWZpY2F0ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvblZpZXdlckNlcnRpZmljYXRlO1xufVxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnREaXN0cmlidXRpb25UcnVzdGVkS2V5R3JvdXBzSXRlbXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5X2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyBrZXlfcGFpcl9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlQYWlySWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2tleV9wYWlyX2lkcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblRydXN0ZWRLZXlHcm91cHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaXRlbXMnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250RGlzdHJpYnV0aW9uVHJ1c3RlZFNpZ25lcnNJdGVtcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF3c19hY2NvdW50X251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF3c0FjY291bnROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfYWNjb3VudF9udW1iZXInKTtcbiAgfVxuXG4gIC8vIGtleV9wYWlyX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleVBhaXJJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgna2V5X3BhaXJfaWRzJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250RGlzdHJpYnV0aW9uVHJ1c3RlZFNpZ25lcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaXRlbXMnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkN1c3RvbUVycm9yUmVzcG9uc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVycm9yQ2FjaGluZ01pblR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVycm9yQ29kZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VDb2RlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3BvbnNlUGFnZVBhdGg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uQ3VzdG9tRXJyb3JSZXNwb25zZVRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25DdXN0b21FcnJvclJlc3BvbnNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXJyb3JfY2FjaGluZ19taW5fdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmVycm9yQ2FjaGluZ01pblR0bCksXG4gICAgZXJyb3JfY29kZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvckNvZGUpLFxuICAgIHJlc3BvbnNlX2NvZGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VDb2RlKSxcbiAgICByZXNwb25zZV9wYWdlX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VQYWdlUGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvcndhcmQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2hpdGVsaXN0ZWROYW1lcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZm9yd2FyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mb3J3YXJkKSxcbiAgICB3aGl0ZWxpc3RlZF9uYW1lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS53aGl0ZWxpc3RlZE5hbWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9mb3J3YXJkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mb3J3YXJkID0gdGhpcy5fZm9yd2FyZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3doaXRlbGlzdGVkTmFtZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndoaXRlbGlzdGVkTmFtZXMgPSB0aGlzLl93aGl0ZWxpc3RlZE5hbWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZvcndhcmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93aGl0ZWxpc3RlZE5hbWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9mb3J3YXJkID0gdmFsdWUuZm9yd2FyZDtcbiAgICAgIHRoaXMuX3doaXRlbGlzdGVkTmFtZXMgPSB2YWx1ZS53aGl0ZWxpc3RlZE5hbWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZvcndhcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZm9yd2FyZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZm9yd2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZvcndhcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcndhcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvcndhcmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9yd2FyZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3J3YXJkO1xuICB9XG5cbiAgLy8gd2hpdGVsaXN0ZWRfbmFtZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93aGl0ZWxpc3RlZE5hbWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHdoaXRlbGlzdGVkTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnd2hpdGVsaXN0ZWRfbmFtZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdoaXRlbGlzdGVkTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd2hpdGVsaXN0ZWROYW1lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdoaXRlbGlzdGVkTmFtZXMoKSB7XG4gICAgdGhpcy5fd2hpdGVsaXN0ZWROYW1lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2hpdGVsaXN0ZWROYW1lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93aGl0ZWxpc3RlZE5hbWVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFkZXJzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlTdHJpbmc6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlTdHJpbmdDYWNoZUtleXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29va2llczogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVycyksXG4gICAgcXVlcnlfc3RyaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5xdWVyeVN0cmluZyksXG4gICAgcXVlcnlfc3RyaW5nX2NhY2hlX2tleXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucXVlcnlTdHJpbmdDYWNoZUtleXMpLFxuICAgIGNvb2tpZXM6IGNsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvb2tpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9oZWFkZXJzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFkZXJzID0gdGhpcy5faGVhZGVycztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3F1ZXJ5U3RyaW5nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5xdWVyeVN0cmluZyA9IHRoaXMuX3F1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcXVlcnlTdHJpbmdDYWNoZUtleXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1ZXJ5U3RyaW5nQ2FjaGVLZXlzID0gdGhpcy5fcXVlcnlTdHJpbmdDYWNoZUtleXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb29raWVzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb29raWVzID0gdGhpcy5fY29va2llcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hlYWRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nQ2FjaGVLZXlzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oZWFkZXJzID0gdmFsdWUuaGVhZGVycztcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nID0gdmFsdWUucXVlcnlTdHJpbmc7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZ0NhY2hlS2V5cyA9IHZhbHVlLnF1ZXJ5U3RyaW5nQ2FjaGVLZXlzO1xuICAgICAgdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29va2llcztcbiAgICB9XG4gIH1cblxuICAvLyBoZWFkZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhZGVycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBoZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2hlYWRlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWRlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faGVhZGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhlYWRlcnMoKSB7XG4gICAgdGhpcy5faGVhZGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhZGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzO1xuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3F1ZXJ5U3RyaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBxdWVyeVN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdxdWVyeV9zdHJpbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBxdWVyeVN0cmluZyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmcgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTdHJpbmc7XG4gIH1cblxuICAvLyBxdWVyeV9zdHJpbmdfY2FjaGVfa2V5cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1ZXJ5U3RyaW5nQ2FjaGVLZXlzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nQ2FjaGVLZXlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3F1ZXJ5X3N0cmluZ19jYWNoZV9rZXlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBxdWVyeVN0cmluZ0NhY2hlS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9xdWVyeVN0cmluZ0NhY2hlS2V5cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1ZXJ5U3RyaW5nQ2FjaGVLZXlzKCkge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5nQ2FjaGVLZXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeVN0cmluZ0NhY2hlS2V5c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVN0cmluZ0NhY2hlS2V5cztcbiAgfVxuXG4gIC8vIGNvb2tpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29va2llcyA9IG5ldyBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNvb2tpZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29va2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llcztcbiAgfVxuICBwdWJsaWMgcHV0Q29va2llcyh2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcykge1xuICAgIHRoaXMuX2Nvb2tpZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb29raWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvb2tpZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGdW5jdGlvbkFzc29jaWF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZ1bmN0aW9uQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGdW5jdGlvbkFzc29jaWF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRnVuY3Rpb25Bc3NvY2lhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXZlbnRUeXBlKSxcbiAgICBmdW5jdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZnVuY3Rpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBldmVudFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlQm9keT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBldmVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50VHlwZSksXG4gICAgaW5jbHVkZV9ib2R5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQm9keSksXG4gICAgbGFtYmRhX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvd2VkTWV0aG9kczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVQb2xpY3lJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FjaGVkTWV0aG9kczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXByZXNzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0VHRsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmllbGRMZXZlbEVuY3J5cHRpb25JZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heFR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pblR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5SZXF1ZXN0UG9saWN5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlYWx0aW1lTG9nQ29uZmlnQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZUhlYWRlcnNQb2xpY3lJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNtb290aFN0cmVhbWluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldE9yaWdpbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJ1c3RlZEtleUdyb3Vwcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0ZWRTaWduZXJzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aWV3ZXJQcm90b2NvbFBvbGljeTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3J3YXJkZWRWYWx1ZXM/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZ1bmN0aW9uQXNzb2NpYXRpb24/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGdW5jdGlvbkFzc29jaWF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvd2VkX21ldGhvZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxsb3dlZE1ldGhvZHMpLFxuICAgIGNhY2hlX3BvbGljeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYWNoZVBvbGljeUlkKSxcbiAgICBjYWNoZWRfbWV0aG9kczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5jYWNoZWRNZXRob2RzKSxcbiAgICBjb21wcmVzczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3MpLFxuICAgIGRlZmF1bHRfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRUdGwpLFxuICAgIGZpZWxkX2xldmVsX2VuY3J5cHRpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmllbGRMZXZlbEVuY3J5cHRpb25JZCksXG4gICAgbWF4X3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhUdGwpLFxuICAgIG1pbl90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluVHRsKSxcbiAgICBvcmlnaW5fcmVxdWVzdF9wb2xpY3lfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luUmVxdWVzdFBvbGljeUlkKSxcbiAgICByZWFsdGltZV9sb2dfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFsdGltZUxvZ0NvbmZpZ0FybiksXG4gICAgcmVzcG9uc2VfaGVhZGVyc19wb2xpY3lfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VIZWFkZXJzUG9saWN5SWQpLFxuICAgIHNtb290aF9zdHJlYW1pbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNtb290aFN0cmVhbWluZyksXG4gICAgdGFyZ2V0X29yaWdpbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRPcmlnaW5JZCksXG4gICAgdHJ1c3RlZF9rZXlfZ3JvdXBzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRydXN0ZWRLZXlHcm91cHMpLFxuICAgIHRydXN0ZWRfc2lnbmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50cnVzdGVkU2lnbmVycyksXG4gICAgdmlld2VyX3Byb3RvY29sX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aWV3ZXJQcm90b2NvbFBvbGljeSksXG4gICAgZm9yd2FyZGVkX3ZhbHVlczogY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0IS5mb3J3YXJkZWRWYWx1ZXMpLFxuICAgIGZ1bmN0aW9uX2Fzc29jaWF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckZ1bmN0aW9uQXNzb2NpYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5mdW5jdGlvbkFzc29jaWF0aW9uKSxcbiAgICBsYW1iZGFfZnVuY3Rpb25fYXNzb2NpYXRpb246IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvd2VkTWV0aG9kcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dlZE1ldGhvZHMgPSB0aGlzLl9hbGxvd2VkTWV0aG9kcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhY2hlUG9saWN5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhY2hlUG9saWN5SWQgPSB0aGlzLl9jYWNoZVBvbGljeUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2FjaGVkTWV0aG9kcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FjaGVkTWV0aG9kcyA9IHRoaXMuX2NhY2hlZE1ldGhvZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wcmVzcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcHJlc3MgPSB0aGlzLl9jb21wcmVzcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRUdGwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRUdGwgPSB0aGlzLl9kZWZhdWx0VHRsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmllbGRMZXZlbEVuY3J5cHRpb25JZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmllbGRMZXZlbEVuY3J5cHRpb25JZCA9IHRoaXMuX2ZpZWxkTGV2ZWxFbmNyeXB0aW9uSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhUdGwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFR0bCA9IHRoaXMuX21heFR0bDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pblR0bCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluVHRsID0gdGhpcy5fbWluVHRsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3JpZ2luUmVxdWVzdFBvbGljeUlkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vcmlnaW5SZXF1ZXN0UG9saWN5SWQgPSB0aGlzLl9vcmlnaW5SZXF1ZXN0UG9saWN5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWFsdGltZUxvZ0NvbmZpZ0Fybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVhbHRpbWVMb2dDb25maWdBcm4gPSB0aGlzLl9yZWFsdGltZUxvZ0NvbmZpZ0FybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc3BvbnNlSGVhZGVyc1BvbGljeUlkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNwb25zZUhlYWRlcnNQb2xpY3lJZCA9IHRoaXMuX3Jlc3BvbnNlSGVhZGVyc1BvbGljeUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc21vb3RoU3RyZWFtaW5nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbW9vdGhTdHJlYW1pbmcgPSB0aGlzLl9zbW9vdGhTdHJlYW1pbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRPcmlnaW5JZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0T3JpZ2luSWQgPSB0aGlzLl90YXJnZXRPcmlnaW5JZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RydXN0ZWRLZXlHcm91cHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRydXN0ZWRLZXlHcm91cHMgPSB0aGlzLl90cnVzdGVkS2V5R3JvdXBzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJ1c3RlZFNpZ25lcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRydXN0ZWRTaWduZXJzID0gdGhpcy5fdHJ1c3RlZFNpZ25lcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl92aWV3ZXJQcm90b2NvbFBvbGljeSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmlld2VyUHJvdG9jb2xQb2xpY3kgPSB0aGlzLl92aWV3ZXJQcm90b2NvbFBvbGljeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZvcndhcmRlZFZhbHVlcz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9yd2FyZGVkVmFsdWVzID0gdGhpcy5fZm9yd2FyZGVkVmFsdWVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZnVuY3Rpb25Bc3NvY2lhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZnVuY3Rpb25Bc3NvY2lhdGlvbiA9IHRoaXMuX2Z1bmN0aW9uQXNzb2NpYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uID0gdGhpcy5fbGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FsbG93ZWRNZXRob2RzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FjaGVQb2xpY3lJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NhY2hlZE1ldGhvZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wcmVzcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlZmF1bHRUdGwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maWVsZExldmVsRW5jcnlwdGlvbklkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWF4VHRsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluVHRsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3JpZ2luUmVxdWVzdFBvbGljeUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVhbHRpbWVMb2dDb25maWdBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNwb25zZUhlYWRlcnNQb2xpY3lJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Ntb290aFN0cmVhbWluZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldE9yaWdpbklkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHJ1c3RlZEtleUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RydXN0ZWRTaWduZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmlld2VyUHJvdG9jb2xQb2xpY3kgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9mb3J3YXJkZWRWYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Z1bmN0aW9uQXNzb2NpYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbGxvd2VkTWV0aG9kcyA9IHZhbHVlLmFsbG93ZWRNZXRob2RzO1xuICAgICAgdGhpcy5fY2FjaGVQb2xpY3lJZCA9IHZhbHVlLmNhY2hlUG9saWN5SWQ7XG4gICAgICB0aGlzLl9jYWNoZWRNZXRob2RzID0gdmFsdWUuY2FjaGVkTWV0aG9kcztcbiAgICAgIHRoaXMuX2NvbXByZXNzID0gdmFsdWUuY29tcHJlc3M7XG4gICAgICB0aGlzLl9kZWZhdWx0VHRsID0gdmFsdWUuZGVmYXVsdFR0bDtcbiAgICAgIHRoaXMuX2ZpZWxkTGV2ZWxFbmNyeXB0aW9uSWQgPSB2YWx1ZS5maWVsZExldmVsRW5jcnlwdGlvbklkO1xuICAgICAgdGhpcy5fbWF4VHRsID0gdmFsdWUubWF4VHRsO1xuICAgICAgdGhpcy5fbWluVHRsID0gdmFsdWUubWluVHRsO1xuICAgICAgdGhpcy5fb3JpZ2luUmVxdWVzdFBvbGljeUlkID0gdmFsdWUub3JpZ2luUmVxdWVzdFBvbGljeUlkO1xuICAgICAgdGhpcy5fcmVhbHRpbWVMb2dDb25maWdBcm4gPSB2YWx1ZS5yZWFsdGltZUxvZ0NvbmZpZ0FybjtcbiAgICAgIHRoaXMuX3Jlc3BvbnNlSGVhZGVyc1BvbGljeUlkID0gdmFsdWUucmVzcG9uc2VIZWFkZXJzUG9saWN5SWQ7XG4gICAgICB0aGlzLl9zbW9vdGhTdHJlYW1pbmcgPSB2YWx1ZS5zbW9vdGhTdHJlYW1pbmc7XG4gICAgICB0aGlzLl90YXJnZXRPcmlnaW5JZCA9IHZhbHVlLnRhcmdldE9yaWdpbklkO1xuICAgICAgdGhpcy5fdHJ1c3RlZEtleUdyb3VwcyA9IHZhbHVlLnRydXN0ZWRLZXlHcm91cHM7XG4gICAgICB0aGlzLl90cnVzdGVkU2lnbmVycyA9IHZhbHVlLnRydXN0ZWRTaWduZXJzO1xuICAgICAgdGhpcy5fdmlld2VyUHJvdG9jb2xQb2xpY3kgPSB2YWx1ZS52aWV3ZXJQcm90b2NvbFBvbGljeTtcbiAgICAgIHRoaXMuX2ZvcndhcmRlZFZhbHVlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZm9yd2FyZGVkVmFsdWVzO1xuICAgICAgdGhpcy5fZnVuY3Rpb25Bc3NvY2lhdGlvbiA9IHZhbHVlLmZ1bmN0aW9uQXNzb2NpYXRpb247XG4gICAgICB0aGlzLl9sYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uID0gdmFsdWUubGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvd2VkX21ldGhvZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWxsb3dlZE1ldGhvZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dlZE1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxsb3dlZF9tZXRob2RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd2VkTWV0aG9kcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGxvd2VkTWV0aG9kcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvd2VkTWV0aG9kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd2VkTWV0aG9kcztcbiAgfVxuXG4gIC8vIGNhY2hlX3BvbGljeV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYWNoZVBvbGljeUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYWNoZVBvbGljeUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2FjaGVfcG9saWN5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYWNoZVBvbGljeUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYWNoZVBvbGljeUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FjaGVQb2xpY3lJZCgpIHtcbiAgICB0aGlzLl9jYWNoZVBvbGljeUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoZVBvbGljeUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlUG9saWN5SWQ7XG4gIH1cblxuICAvLyBjYWNoZWRfbWV0aG9kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jYWNoZWRNZXRob2RzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNhY2hlZE1ldGhvZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY2FjaGVkX21ldGhvZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhY2hlZE1ldGhvZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY2FjaGVkTWV0aG9kcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYWNoZWRNZXRob2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZE1ldGhvZHM7XG4gIH1cblxuICAvLyBjb21wcmVzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wcmVzcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY29tcHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY29tcHJlc3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wcmVzcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29tcHJlc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wcmVzcygpIHtcbiAgICB0aGlzLl9jb21wcmVzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcHJlc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHJlc3M7XG4gIH1cblxuICAvLyBkZWZhdWx0X3R0bCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRUdGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRUdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZWZhdWx0X3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFR0bCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZGVmYXVsdFR0bCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRUdGwoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFR0bCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFR0bElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VHRsO1xuICB9XG5cbiAgLy8gZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWVsZExldmVsRW5jcnlwdGlvbklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWVsZExldmVsRW5jcnlwdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmllbGRfbGV2ZWxfZW5jcnlwdGlvbl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmllbGRMZXZlbEVuY3J5cHRpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmllbGRMZXZlbEVuY3J5cHRpb25JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpZWxkTGV2ZWxFbmNyeXB0aW9uSWQoKSB7XG4gICAgdGhpcy5fZmllbGRMZXZlbEVuY3J5cHRpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmllbGRMZXZlbEVuY3J5cHRpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWVsZExldmVsRW5jcnlwdGlvbklkO1xuICB9XG5cbiAgLy8gbWF4X3R0bCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heFR0bD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4VHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4VHRsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhUdGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhUdGwoKSB7XG4gICAgdGhpcy5fbWF4VHRsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhUdGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4VHRsO1xuICB9XG5cbiAgLy8gbWluX3R0bCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5UdGw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pblR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl90dGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pblR0bCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluVHRsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluVHRsKCkge1xuICAgIHRoaXMuX21pblR0bCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluVHRsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pblR0bDtcbiAgfVxuXG4gIC8vIG9yaWdpbl9yZXF1ZXN0X3BvbGljeV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vcmlnaW5SZXF1ZXN0UG9saWN5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9yaWdpblJlcXVlc3RQb2xpY3lJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yaWdpbl9yZXF1ZXN0X3BvbGljeV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3JpZ2luUmVxdWVzdFBvbGljeUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmlnaW5SZXF1ZXN0UG9saWN5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmlnaW5SZXF1ZXN0UG9saWN5SWQoKSB7XG4gICAgdGhpcy5fb3JpZ2luUmVxdWVzdFBvbGljeUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmlnaW5SZXF1ZXN0UG9saWN5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luUmVxdWVzdFBvbGljeUlkO1xuICB9XG5cbiAgLy8gcmVhbHRpbWVfbG9nX2NvbmZpZ19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVhbHRpbWVMb2dDb25maWdBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlYWx0aW1lTG9nQ29uZmlnQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVhbHRpbWVfbG9nX2NvbmZpZ19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlYWx0aW1lTG9nQ29uZmlnQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWFsdGltZUxvZ0NvbmZpZ0FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlYWx0aW1lTG9nQ29uZmlnQXJuKCkge1xuICAgIHRoaXMuX3JlYWx0aW1lTG9nQ29uZmlnQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWFsdGltZUxvZ0NvbmZpZ0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWFsdGltZUxvZ0NvbmZpZ0FybjtcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX2hlYWRlcnNfcG9saWN5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc3BvbnNlSGVhZGVyc1BvbGljeUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNwb25zZUhlYWRlcnNQb2xpY3lJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc3BvbnNlX2hlYWRlcnNfcG9saWN5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNwb25zZUhlYWRlcnNQb2xpY3lJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VIZWFkZXJzUG9saWN5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNwb25zZUhlYWRlcnNQb2xpY3lJZCgpIHtcbiAgICB0aGlzLl9yZXNwb25zZUhlYWRlcnNQb2xpY3lJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VIZWFkZXJzUG9saWN5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VIZWFkZXJzUG9saWN5SWQ7XG4gIH1cblxuICAvLyBzbW9vdGhfc3RyZWFtaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Ntb290aFN0cmVhbWluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc21vb3RoU3RyZWFtaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Ntb290aF9zdHJlYW1pbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzbW9vdGhTdHJlYW1pbmcodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3Ntb290aFN0cmVhbWluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtb290aFN0cmVhbWluZygpIHtcbiAgICB0aGlzLl9zbW9vdGhTdHJlYW1pbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtb290aFN0cmVhbWluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbW9vdGhTdHJlYW1pbmc7XG4gIH1cblxuICAvLyB0YXJnZXRfb3JpZ2luX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhcmdldE9yaWdpbklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXJnZXRPcmlnaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF9vcmlnaW5faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldE9yaWdpbklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXJnZXRPcmlnaW5JZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRPcmlnaW5JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRPcmlnaW5JZDtcbiAgfVxuXG4gIC8vIHRydXN0ZWRfa2V5X2dyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RydXN0ZWRLZXlHcm91cHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHJ1c3RlZEtleUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0cnVzdGVkX2tleV9ncm91cHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRydXN0ZWRLZXlHcm91cHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdHJ1c3RlZEtleUdyb3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRydXN0ZWRLZXlHcm91cHMoKSB7XG4gICAgdGhpcy5fdHJ1c3RlZEtleUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJ1c3RlZEtleUdyb3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cnVzdGVkS2V5R3JvdXBzO1xuICB9XG5cbiAgLy8gdHJ1c3RlZF9zaWduZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJ1c3RlZFNpZ25lcnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHJ1c3RlZFNpZ25lcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHJ1c3RlZF9zaWduZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cnVzdGVkU2lnbmVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90cnVzdGVkU2lnbmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRydXN0ZWRTaWduZXJzKCkge1xuICAgIHRoaXMuX3RydXN0ZWRTaWduZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cnVzdGVkU2lnbmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cnVzdGVkU2lnbmVycztcbiAgfVxuXG4gIC8vIHZpZXdlcl9wcm90b2NvbF9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmlld2VyUHJvdG9jb2xQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZpZXdlclByb3RvY29sUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlld2VyX3Byb3RvY29sX3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlld2VyUHJvdG9jb2xQb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpZXdlclByb3RvY29sUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpZXdlclByb3RvY29sUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdlclByb3RvY29sUG9saWN5O1xuICB9XG5cbiAgLy8gZm9yd2FyZGVkX3ZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3J3YXJkZWRWYWx1ZXMgPSBuZXcgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZvcndhcmRlZF92YWx1ZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZm9yd2FyZGVkVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3J3YXJkZWRWYWx1ZXM7XG4gIH1cbiAgcHVibGljIHB1dEZvcndhcmRlZFZhbHVlcyh2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzKSB7XG4gICAgdGhpcy5fZm9yd2FyZGVkVmFsdWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3J3YXJkZWRWYWx1ZXMoKSB7XG4gICAgdGhpcy5fZm9yd2FyZGVkVmFsdWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcndhcmRlZFZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3J3YXJkZWRWYWx1ZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uX2Fzc29jaWF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Z1bmN0aW9uQXNzb2NpYXRpb24/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JGdW5jdGlvbkFzc29jaWF0aW9uW107IFxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uQXNzb2NpYXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Z1bmN0aW9uX2Fzc29jaWF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZnVuY3Rpb25Bc3NvY2lhdGlvbih2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkRlZmF1bHRDYWNoZUJlaGF2aW9yRnVuY3Rpb25Bc3NvY2lhdGlvbltdKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25Bc3NvY2lhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZ1bmN0aW9uQXNzb2NpYXRpb24oKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25Bc3NvY2lhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25Bc3NvY2lhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbkFzc29jaWF0aW9uO1xuICB9XG5cbiAgLy8gbGFtYmRhX2Z1bmN0aW9uX2Fzc29jaWF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uW107IFxuICBwdWJsaWMgZ2V0IGxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhbWJkYV9mdW5jdGlvbl9hc3NvY2lhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24odmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvckxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25bXSkge1xuICAgIHRoaXMuX2xhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uKCkge1xuICAgIHRoaXMuX2xhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uTG9nZ2luZ0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZUNvb2tpZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbkxvZ2dpbmdDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uTG9nZ2luZ0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnREaXN0cmlidXRpb25Mb2dnaW5nQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldCksXG4gICAgaW5jbHVkZV9jb29raWVzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQ29va2llcyksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnREaXN0cmlidXRpb25Mb2dnaW5nQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnREaXN0cmlidXRpb25Mb2dnaW5nQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1Y2tldCA9IHRoaXMuX2J1Y2tldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVDb29raWVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlQ29va2llcyA9IHRoaXMuX2luY2x1ZGVDb29raWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVmaXggPSB0aGlzLl9wcmVmaXg7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uTG9nZ2luZ0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVDb29raWVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZS5idWNrZXQ7XG4gICAgICB0aGlzLl9pbmNsdWRlQ29va2llcyA9IHZhbHVlLmluY2x1ZGVDb29raWVzO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWNrZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldDtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfY29va2llcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlQ29va2llcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUNvb2tpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9jb29raWVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZUNvb2tpZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVDb29raWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZUNvb2tpZXMoKSB7XG4gICAgdGhpcy5faW5jbHVkZUNvb2tpZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVDb29raWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVDb29raWVzO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeCgpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3J3YXJkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdoaXRlbGlzdGVkTmFtZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcndhcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZm9yd2FyZCksXG4gICAgd2hpdGVsaXN0ZWRfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEud2hpdGVsaXN0ZWROYW1lcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZm9yd2FyZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9yd2FyZCA9IHRoaXMuX2ZvcndhcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl93aGl0ZWxpc3RlZE5hbWVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC53aGl0ZWxpc3RlZE5hbWVzID0gdGhpcy5fd2hpdGVsaXN0ZWROYW1lcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9mb3J3YXJkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd2hpdGVsaXN0ZWROYW1lcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZm9yd2FyZCA9IHZhbHVlLmZvcndhcmQ7XG4gICAgICB0aGlzLl93aGl0ZWxpc3RlZE5hbWVzID0gdmFsdWUud2hpdGVsaXN0ZWROYW1lcztcbiAgICB9XG4gIH1cblxuICAvLyBmb3J3YXJkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZvcndhcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZvcndhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmb3J3YXJkJyk7XG4gIH1cbiAgcHVibGljIHNldCBmb3J3YXJkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb3J3YXJkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcndhcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yd2FyZDtcbiAgfVxuXG4gIC8vIHdoaXRlbGlzdGVkX25hbWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3doaXRlbGlzdGVkTmFtZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgd2hpdGVsaXN0ZWROYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd3aGl0ZWxpc3RlZF9uYW1lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2hpdGVsaXN0ZWROYW1lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl93aGl0ZWxpc3RlZE5hbWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2hpdGVsaXN0ZWROYW1lcygpIHtcbiAgICB0aGlzLl93aGl0ZWxpc3RlZE5hbWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3aGl0ZWxpc3RlZE5hbWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3doaXRlbGlzdGVkTmFtZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWRlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWVyeVN0cmluZzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWVyeVN0cmluZ0NhY2hlS2V5cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb29raWVzOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGVhZGVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5oZWFkZXJzKSxcbiAgICBxdWVyeV9zdHJpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnF1ZXJ5U3RyaW5nKSxcbiAgICBxdWVyeV9zdHJpbmdfY2FjaGVfa2V5czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5xdWVyeVN0cmluZ0NhY2hlS2V5cyksXG4gICAgY29va2llczogY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzQ29va2llc1RvVGVycmFmb3JtKHN0cnVjdCEuY29va2llcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hlYWRlcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlYWRlcnMgPSB0aGlzLl9oZWFkZXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcXVlcnlTdHJpbmcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1ZXJ5U3RyaW5nID0gdGhpcy5fcXVlcnlTdHJpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZ0NhY2hlS2V5cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVlcnlTdHJpbmdDYWNoZUtleXMgPSB0aGlzLl9xdWVyeVN0cmluZ0NhY2hlS2V5cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Nvb2tpZXM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvb2tpZXMgPSB0aGlzLl9jb29raWVzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faGVhZGVycyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcXVlcnlTdHJpbmdDYWNoZUtleXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb29raWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2hlYWRlcnMgPSB2YWx1ZS5oZWFkZXJzO1xuICAgICAgdGhpcy5fcXVlcnlTdHJpbmcgPSB2YWx1ZS5xdWVyeVN0cmluZztcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nQ2FjaGVLZXlzID0gdmFsdWUucXVlcnlTdHJpbmdDYWNoZUtleXM7XG4gICAgICB0aGlzLl9jb29raWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jb29raWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhlYWRlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFkZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaGVhZGVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhZGVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVycygpIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWFkZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnM7XG4gIH1cblxuICAvLyBxdWVyeV9zdHJpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcXVlcnlTdHJpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3F1ZXJ5X3N0cmluZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1ZXJ5U3RyaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9xdWVyeVN0cmluZyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeVN0cmluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVN0cmluZztcbiAgfVxuXG4gIC8vIHF1ZXJ5X3N0cmluZ19jYWNoZV9rZXlzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcXVlcnlTdHJpbmdDYWNoZUtleXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdDYWNoZUtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncXVlcnlfc3RyaW5nX2NhY2hlX2tleXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1ZXJ5U3RyaW5nQ2FjaGVLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5nQ2FjaGVLZXlzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnlTdHJpbmdDYWNoZUtleXMoKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmdDYWNoZUtleXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nQ2FjaGVLZXlzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nQ2FjaGVLZXlzO1xuICB9XG5cbiAgLy8gY29va2llcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb29raWVzID0gbmV3IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZvcndhcmRlZFZhbHVlc0Nvb2tpZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29va2llc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb29raWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb29raWVzO1xuICB9XG4gIHB1YmxpYyBwdXRDb29raWVzKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGb3J3YXJkZWRWYWx1ZXNDb29raWVzKSB7XG4gICAgdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvb2tpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZ1bmN0aW9uQXNzb2NpYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXZlbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVuY3Rpb25Bcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZ1bmN0aW9uQXNzb2NpYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JGdW5jdGlvbkFzc29jaWF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXZlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ldmVudFR5cGUpLFxuICAgIGZ1bmN0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mdW5jdGlvbkFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVCb2R5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3JMYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXZlbnRUeXBlKSxcbiAgICBpbmNsdWRlX2JvZHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVCb2R5KSxcbiAgICBsYW1iZGFfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JkZXJlZENhY2hlQmVoYXZpb3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93ZWRNZXRob2RzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYWNoZVBvbGljeUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYWNoZWRNZXRob2RzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcHJlc3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRUdGw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWVsZExldmVsRW5jcnlwdGlvbklkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4VHRsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluVHRsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpblJlcXVlc3RQb2xpY3lJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXRoUGF0dGVybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWFsdGltZUxvZ0NvbmZpZ0Fybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VIZWFkZXJzUG9saWN5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbW9vdGhTdHJlYW1pbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRPcmlnaW5JZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRydXN0ZWRLZXlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cnVzdGVkU2lnbmVycz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlld2VyUHJvdG9jb2xQb2xpY3k6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9yd2FyZGVkVmFsdWVzPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmdW5jdGlvbkFzc29jaWF0aW9uPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRnVuY3Rpb25Bc3NvY2lhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGFGdW5jdGlvbkFzc29jaWF0aW9uPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb3dlZF9tZXRob2RzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFsbG93ZWRNZXRob2RzKSxcbiAgICBjYWNoZV9wb2xpY3lfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FjaGVQb2xpY3lJZCksXG4gICAgY2FjaGVkX21ldGhvZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2FjaGVkTWV0aG9kcyksXG4gICAgY29tcHJlc3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzKSxcbiAgICBkZWZhdWx0X3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0VHRsKSxcbiAgICBmaWVsZF9sZXZlbF9lbmNyeXB0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpZWxkTGV2ZWxFbmNyeXB0aW9uSWQpLFxuICAgIG1heF90dGw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4VHRsKSxcbiAgICBtaW5fdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pblR0bCksXG4gICAgb3JpZ2luX3JlcXVlc3RfcG9saWN5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpblJlcXVlc3RQb2xpY3lJZCksXG4gICAgcGF0aF9wYXR0ZXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhdGhQYXR0ZXJuKSxcbiAgICByZWFsdGltZV9sb2dfY29uZmlnX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFsdGltZUxvZ0NvbmZpZ0FybiksXG4gICAgcmVzcG9uc2VfaGVhZGVyc19wb2xpY3lfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VIZWFkZXJzUG9saWN5SWQpLFxuICAgIHNtb290aF9zdHJlYW1pbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNtb290aFN0cmVhbWluZyksXG4gICAgdGFyZ2V0X29yaWdpbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRPcmlnaW5JZCksXG4gICAgdHJ1c3RlZF9rZXlfZ3JvdXBzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRydXN0ZWRLZXlHcm91cHMpLFxuICAgIHRydXN0ZWRfc2lnbmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50cnVzdGVkU2lnbmVycyksXG4gICAgdmlld2VyX3Byb3RvY29sX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aWV3ZXJQcm90b2NvbFBvbGljeSksXG4gICAgZm9yd2FyZGVkX3ZhbHVlczogY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yRm9yd2FyZGVkVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0IS5mb3J3YXJkZWRWYWx1ZXMpLFxuICAgIGZ1bmN0aW9uX2Fzc29jaWF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvckZ1bmN0aW9uQXNzb2NpYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5mdW5jdGlvbkFzc29jaWF0aW9uKSxcbiAgICBsYW1iZGFfZnVuY3Rpb25fYXNzb2NpYXRpb246IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yTGFtYmRhRnVuY3Rpb25Bc3NvY2lhdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmxhbWJkYUZ1bmN0aW9uQXNzb2NpYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbUhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbUhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbU9yaWdpbkNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cFBvcnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBzUG9ydDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpbktlZXBhbGl2ZVRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmlnaW5Qcm90b2NvbFBvbGljeTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luUmVhZFRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpblNzbFByb3RvY29sczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tT3JpZ2luQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbU9yaWdpbkNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5DdXN0b21PcmlnaW5Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBodHRwX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaHR0cFBvcnQpLFxuICAgIGh0dHBzX3BvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaHR0cHNQb3J0KSxcbiAgICBvcmlnaW5fa2VlcGFsaXZlX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luS2VlcGFsaXZlVGltZW91dCksXG4gICAgb3JpZ2luX3Byb3RvY29sX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5Qcm90b2NvbFBvbGljeSksXG4gICAgb3JpZ2luX3JlYWRfdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5SZWFkVGltZW91dCksXG4gICAgb3JpZ2luX3NzbF9wcm90b2NvbHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEub3JpZ2luU3NsUHJvdG9jb2xzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbU9yaWdpbkNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tT3JpZ2luQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9odHRwUG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cFBvcnQgPSB0aGlzLl9odHRwUG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2h0dHBzUG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cHNQb3J0ID0gdGhpcy5faHR0cHNQb3J0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3JpZ2luS2VlcGFsaXZlVGltZW91dCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JpZ2luS2VlcGFsaXZlVGltZW91dCA9IHRoaXMuX29yaWdpbktlZXBhbGl2ZVRpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcmlnaW5Qcm90b2NvbFBvbGljeSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JpZ2luUHJvdG9jb2xQb2xpY3kgPSB0aGlzLl9vcmlnaW5Qcm90b2NvbFBvbGljeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29yaWdpblJlYWRUaW1lb3V0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vcmlnaW5SZWFkVGltZW91dCA9IHRoaXMuX29yaWdpblJlYWRUaW1lb3V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3JpZ2luU3NsUHJvdG9jb2xzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vcmlnaW5Tc2xQcm90b2NvbHMgPSB0aGlzLl9vcmlnaW5Tc2xQcm90b2NvbHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tT3JpZ2luQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faHR0cFBvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwc1BvcnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcmlnaW5LZWVwYWxpdmVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3JpZ2luUHJvdG9jb2xQb2xpY3kgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcmlnaW5SZWFkVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29yaWdpblNzbFByb3RvY29scyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faHR0cFBvcnQgPSB2YWx1ZS5odHRwUG9ydDtcbiAgICAgIHRoaXMuX2h0dHBzUG9ydCA9IHZhbHVlLmh0dHBzUG9ydDtcbiAgICAgIHRoaXMuX29yaWdpbktlZXBhbGl2ZVRpbWVvdXQgPSB2YWx1ZS5vcmlnaW5LZWVwYWxpdmVUaW1lb3V0O1xuICAgICAgdGhpcy5fb3JpZ2luUHJvdG9jb2xQb2xpY3kgPSB2YWx1ZS5vcmlnaW5Qcm90b2NvbFBvbGljeTtcbiAgICAgIHRoaXMuX29yaWdpblJlYWRUaW1lb3V0ID0gdmFsdWUub3JpZ2luUmVhZFRpbWVvdXQ7XG4gICAgICB0aGlzLl9vcmlnaW5Tc2xQcm90b2NvbHMgPSB2YWx1ZS5vcmlnaW5Tc2xQcm90b2NvbHM7XG4gICAgfVxuICB9XG5cbiAgLy8gaHR0cF9wb3J0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2h0dHBQb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBodHRwUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2h0dHBfcG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaHR0cFBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2h0dHBQb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh0dHBQb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBQb3J0O1xuICB9XG5cbiAgLy8gaHR0cHNfcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9odHRwc1BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGh0dHBzUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2h0dHBzX3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBzUG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faHR0cHNQb3J0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh0dHBzUG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwc1BvcnQ7XG4gIH1cblxuICAvLyBvcmlnaW5fa2VlcGFsaXZlX3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3JpZ2luS2VlcGFsaXZlVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgb3JpZ2luS2VlcGFsaXZlVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ29yaWdpbl9rZWVwYWxpdmVfdGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3JpZ2luS2VlcGFsaXZlVGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb3JpZ2luS2VlcGFsaXZlVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9yaWdpbktlZXBhbGl2ZVRpbWVvdXQoKSB7XG4gICAgdGhpcy5fb3JpZ2luS2VlcGFsaXZlVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JpZ2luS2VlcGFsaXZlVGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5LZWVwYWxpdmVUaW1lb3V0O1xuICB9XG5cbiAgLy8gb3JpZ2luX3Byb3RvY29sX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vcmlnaW5Qcm90b2NvbFBvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3JpZ2luUHJvdG9jb2xQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmlnaW5fcHJvdG9jb2xfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvcmlnaW5Qcm90b2NvbFBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JpZ2luUHJvdG9jb2xQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JpZ2luUHJvdG9jb2xQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luUHJvdG9jb2xQb2xpY3k7XG4gIH1cblxuICAvLyBvcmlnaW5fcmVhZF90aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29yaWdpblJlYWRUaW1lb3V0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBvcmlnaW5SZWFkVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ29yaWdpbl9yZWFkX3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpblJlYWRUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vcmlnaW5SZWFkVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9yaWdpblJlYWRUaW1lb3V0KCkge1xuICAgIHRoaXMuX29yaWdpblJlYWRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmlnaW5SZWFkVGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5SZWFkVGltZW91dDtcbiAgfVxuXG4gIC8vIG9yaWdpbl9zc2xfcHJvdG9jb2xzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX29yaWdpblNzbFByb3RvY29scz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBvcmlnaW5Tc2xQcm90b2NvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnb3JpZ2luX3NzbF9wcm90b2NvbHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpblNzbFByb3RvY29scyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9vcmlnaW5Tc2xQcm90b2NvbHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JpZ2luU3NsUHJvdG9jb2xzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWdpblNzbFByb3RvY29scztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luT3JpZ2luU2hpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luU2hpZWxkUmVnaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luT3JpZ2luU2hpZWxkVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbk9yaWdpblNoaWVsZE91dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5PcmlnaW5TaGllbGQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBvcmlnaW5fc2hpZWxkX3JlZ2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5TaGllbGRSZWdpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luT3JpZ2luU2hpZWxkT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5PcmlnaW5TaGllbGQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3JpZ2luU2hpZWxkUmVnaW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vcmlnaW5TaGllbGRSZWdpb24gPSB0aGlzLl9vcmlnaW5TaGllbGRSZWdpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luT3JpZ2luU2hpZWxkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29yaWdpblNoaWVsZFJlZ2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9vcmlnaW5TaGllbGRSZWdpb24gPSB2YWx1ZS5vcmlnaW5TaGllbGRSZWdpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIG9yaWdpbl9zaGllbGRfcmVnaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX29yaWdpblNoaWVsZFJlZ2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3JpZ2luU2hpZWxkUmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JpZ2luX3NoaWVsZF9yZWdpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpblNoaWVsZFJlZ2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3JpZ2luU2hpZWxkUmVnaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yaWdpblNoaWVsZFJlZ2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5TaGllbGRSZWdpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpblMzT3JpZ2luQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpbkFjY2Vzc0lkZW50aXR5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luUzNPcmlnaW5Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luUzNPcmlnaW5Db25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luUzNPcmlnaW5Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5fYWNjZXNzX2lkZW50aXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9yaWdpbkFjY2Vzc0lkZW50aXR5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpblMzT3JpZ2luQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5TM09yaWdpbkNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb3JpZ2luQWNjZXNzSWRlbnRpdHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9yaWdpbkFjY2Vzc0lkZW50aXR5ID0gdGhpcy5fb3JpZ2luQWNjZXNzSWRlbnRpdHk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luUzNPcmlnaW5Db25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vcmlnaW5BY2Nlc3NJZGVudGl0eSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fb3JpZ2luQWNjZXNzSWRlbnRpdHkgPSB2YWx1ZS5vcmlnaW5BY2Nlc3NJZGVudGl0eTtcbiAgICB9XG4gIH1cblxuICAvLyBvcmlnaW5fYWNjZXNzX2lkZW50aXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX29yaWdpbkFjY2Vzc0lkZW50aXR5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvcmlnaW5BY2Nlc3NJZGVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29yaWdpbl9hY2Nlc3NfaWRlbnRpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpbkFjY2Vzc0lkZW50aXR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmlnaW5BY2Nlc3NJZGVudGl0eSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmlnaW5BY2Nlc3NJZGVudGl0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW5BY2Nlc3NJZGVudGl0eTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25BdHRlbXB0cz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25uZWN0aW9uVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpblBhdGg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUhlYWRlcj86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5DdXN0b21IZWFkZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tT3JpZ2luQ29uZmlnPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbU9yaWdpbkNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luU2hpZWxkPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbk9yaWdpblNoaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNPcmlnaW5Db25maWc/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luUzNPcmlnaW5Db25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rpb25fYXR0ZW1wdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdGlvbkF0dGVtcHRzKSxcbiAgICBjb25uZWN0aW9uX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdGlvblRpbWVvdXQpLFxuICAgIGRvbWFpbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvbWFpbk5hbWUpLFxuICAgIG9yaWdpbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5JZCksXG4gICAgb3JpZ2luX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luUGF0aCksXG4gICAgY3VzdG9tX2hlYWRlcjogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luQ3VzdG9tSGVhZGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuY3VzdG9tSGVhZGVyKSxcbiAgICBjdXN0b21fb3JpZ2luX2NvbmZpZzogY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkN1c3RvbU9yaWdpbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tT3JpZ2luQ29uZmlnKSxcbiAgICBvcmlnaW5fc2hpZWxkOiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luT3JpZ2luU2hpZWxkVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5TaGllbGQpLFxuICAgIHMzX29yaWdpbl9jb25maWc6IGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5TM09yaWdpbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNPcmlnaW5Db25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwRmFpbG92ZXJDcml0ZXJpYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzQ29kZXM6IG51bWJlcltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwRmFpbG92ZXJDcml0ZXJpYVRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cEZhaWxvdmVyQ3JpdGVyaWFPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBGYWlsb3ZlckNyaXRlcmlhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzX2NvZGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnN0YXR1c0NvZGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwRmFpbG92ZXJDcml0ZXJpYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBGYWlsb3ZlckNyaXRlcmlhIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zdGF0dXNDb2Rlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdHVzQ29kZXMgPSB0aGlzLl9zdGF0dXNDb2RlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cEZhaWxvdmVyQ3JpdGVyaWEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGF0dXNDb2RlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc3RhdHVzQ29kZXMgPSB2YWx1ZS5zdGF0dXNDb2RlcztcbiAgICB9XG4gIH1cblxuICAvLyBzdGF0dXNfY29kZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdHVzQ29kZXM/OiBudW1iZXJbXTsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzQ29kZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0YXR1c19jb2RlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1c0NvZGVzKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3N0YXR1c0NvZGVzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0NvZGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NvZGVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cE1lbWJlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cE1lbWJlclRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cE1lbWJlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9yaWdpbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmlnaW5JZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yaWdpbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZhaWxvdmVyQ3JpdGVyaWE6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cEZhaWxvdmVyQ3JpdGVyaWE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lbWJlcjogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwTWVtYmVyW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luSWQpLFxuICAgIGZhaWxvdmVyX2NyaXRlcmlhOiBjbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBGYWlsb3ZlckNyaXRlcmlhVG9UZXJyYWZvcm0oc3RydWN0IS5mYWlsb3ZlckNyaXRlcmlhKSxcbiAgICBtZW1iZXI6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbkdyb3VwTWVtYmVyVG9UZXJyYWZvcm0pKHN0cnVjdCEubWVtYmVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9jYXRpb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXN0cmljdGlvblR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbk91dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5sb2NhdGlvbnMpLFxuICAgIHJlc3RyaWN0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzdHJpY3Rpb25UeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9uc0dlb1Jlc3RyaWN0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbG9jYXRpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2NhdGlvbnMgPSB0aGlzLl9sb2NhdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXN0cmljdGlvblR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc3RyaWN0aW9uVHlwZSA9IHRoaXMuX3Jlc3RyaWN0aW9uVHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xvY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc3RyaWN0aW9uVHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbG9jYXRpb25zID0gdmFsdWUubG9jYXRpb25zO1xuICAgICAgdGhpcy5fcmVzdHJpY3Rpb25UeXBlID0gdmFsdWUucmVzdHJpY3Rpb25UeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvY2F0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2F0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBsb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbG9jYXRpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2NhdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9jYXRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9jYXRpb25zKCkge1xuICAgIHRoaXMuX2xvY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9jYXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9ucztcbiAgfVxuXG4gIC8vIHJlc3RyaWN0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzdHJpY3Rpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXN0cmljdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXN0cmljdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0cmljdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3RyaWN0aW9uVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXN0cmljdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdHJpY3Rpb25UeXBlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnZW9SZXN0cmljdGlvbjogQ2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9uc0dlb1Jlc3RyaWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2VvX3Jlc3RyaWN0aW9uOiBjbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zR2VvUmVzdHJpY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmdlb1Jlc3RyaWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9nZW9SZXN0cmljdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ2VvUmVzdHJpY3Rpb24gPSB0aGlzLl9nZW9SZXN0cmljdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9nZW9SZXN0cmljdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9nZW9SZXN0cmljdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZ2VvUmVzdHJpY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZ2VvX3Jlc3RyaWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2dlb1Jlc3RyaWN0aW9uID0gbmV3IENsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNHZW9SZXN0cmljdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJnZW9fcmVzdHJpY3Rpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZ2VvUmVzdHJpY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb1Jlc3RyaWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRHZW9SZXN0cmljdGlvbih2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvblJlc3RyaWN0aW9uc0dlb1Jlc3RyaWN0aW9uKSB7XG4gICAgdGhpcy5fZ2VvUmVzdHJpY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnZW9SZXN0cmljdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9SZXN0cmljdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnREaXN0cmlidXRpb25WaWV3ZXJDZXJ0aWZpY2F0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY21DZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZGZyb250RGVmYXVsdENlcnRpZmljYXRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbUNlcnRpZmljYXRlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluaW11bVByb3RvY29sVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2xTdXBwb3J0TWV0aG9kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udERpc3RyaWJ1dGlvblZpZXdlckNlcnRpZmljYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvblZpZXdlckNlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblZpZXdlckNlcnRpZmljYXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNtX2NlcnRpZmljYXRlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY21DZXJ0aWZpY2F0ZUFybiksXG4gICAgY2xvdWRmcm9udF9kZWZhdWx0X2NlcnRpZmljYXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZGZyb250RGVmYXVsdENlcnRpZmljYXRlKSxcbiAgICBpYW1fY2VydGlmaWNhdGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWFtQ2VydGlmaWNhdGVJZCksXG4gICAgbWluaW11bV9wcm90b2NvbF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbmltdW1Qcm90b2NvbFZlcnNpb24pLFxuICAgIHNzbF9zdXBwb3J0X21ldGhvZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc2xTdXBwb3J0TWV0aG9kKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblZpZXdlckNlcnRpZmljYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnREaXN0cmlidXRpb25WaWV3ZXJDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNtQ2VydGlmaWNhdGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjbUNlcnRpZmljYXRlQXJuID0gdGhpcy5fYWNtQ2VydGlmaWNhdGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG91ZGZyb250RGVmYXVsdENlcnRpZmljYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZGZyb250RGVmYXVsdENlcnRpZmljYXRlID0gdGhpcy5fY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lhbUNlcnRpZmljYXRlSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlhbUNlcnRpZmljYXRlSWQgPSB0aGlzLl9pYW1DZXJ0aWZpY2F0ZUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWluaW11bVByb3RvY29sVmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluaW11bVByb3RvY29sVmVyc2lvbiA9IHRoaXMuX21pbmltdW1Qcm90b2NvbFZlcnNpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zc2xTdXBwb3J0TWV0aG9kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zc2xTdXBwb3J0TWV0aG9kID0gdGhpcy5fc3NsU3VwcG9ydE1ldGhvZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25WaWV3ZXJDZXJ0aWZpY2F0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjbUNlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lhbUNlcnRpZmljYXRlSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9taW5pbXVtUHJvdG9jb2xWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3NsU3VwcG9ydE1ldGhvZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWNtQ2VydGlmaWNhdGVBcm4gPSB2YWx1ZS5hY21DZXJ0aWZpY2F0ZUFybjtcbiAgICAgIHRoaXMuX2Nsb3VkZnJvbnREZWZhdWx0Q2VydGlmaWNhdGUgPSB2YWx1ZS5jbG91ZGZyb250RGVmYXVsdENlcnRpZmljYXRlO1xuICAgICAgdGhpcy5faWFtQ2VydGlmaWNhdGVJZCA9IHZhbHVlLmlhbUNlcnRpZmljYXRlSWQ7XG4gICAgICB0aGlzLl9taW5pbXVtUHJvdG9jb2xWZXJzaW9uID0gdmFsdWUubWluaW11bVByb3RvY29sVmVyc2lvbjtcbiAgICAgIHRoaXMuX3NzbFN1cHBvcnRNZXRob2QgPSB2YWx1ZS5zc2xTdXBwb3J0TWV0aG9kO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjbV9jZXJ0aWZpY2F0ZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNtQ2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjbUNlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNtX2NlcnRpZmljYXRlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNtQ2VydGlmaWNhdGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjbUNlcnRpZmljYXRlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNtQ2VydGlmaWNhdGVBcm4oKSB7XG4gICAgdGhpcy5fYWNtQ2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjbUNlcnRpZmljYXRlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjbUNlcnRpZmljYXRlQXJuO1xuICB9XG5cbiAgLy8gY2xvdWRmcm9udF9kZWZhdWx0X2NlcnRpZmljYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3VkZnJvbnREZWZhdWx0Q2VydGlmaWNhdGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNsb3VkZnJvbnREZWZhdWx0Q2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2xvdWRmcm9udF9kZWZhdWx0X2NlcnRpZmljYXRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3VkZnJvbnREZWZhdWx0Q2VydGlmaWNhdGUoKSB7XG4gICAgdGhpcy5fY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWRmcm9udERlZmF1bHRDZXJ0aWZpY2F0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZGZyb250RGVmYXVsdENlcnRpZmljYXRlO1xuICB9XG5cbiAgLy8gaWFtX2NlcnRpZmljYXRlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lhbUNlcnRpZmljYXRlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlhbUNlcnRpZmljYXRlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW1fY2VydGlmaWNhdGVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbUNlcnRpZmljYXRlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbUNlcnRpZmljYXRlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYW1DZXJ0aWZpY2F0ZUlkKCkge1xuICAgIHRoaXMuX2lhbUNlcnRpZmljYXRlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbUNlcnRpZmljYXRlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtQ2VydGlmaWNhdGVJZDtcbiAgfVxuXG4gIC8vIG1pbmltdW1fcHJvdG9jb2xfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5pbXVtUHJvdG9jb2xWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtaW5pbXVtUHJvdG9jb2xWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWluaW11bV9wcm90b2NvbF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5pbXVtUHJvdG9jb2xWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9taW5pbXVtUHJvdG9jb2xWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluaW11bVByb3RvY29sVmVyc2lvbigpIHtcbiAgICB0aGlzLl9taW5pbXVtUHJvdG9jb2xWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5pbXVtUHJvdG9jb2xWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbmltdW1Qcm90b2NvbFZlcnNpb247XG4gIH1cblxuICAvLyBzc2xfc3VwcG9ydF9tZXRob2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NsU3VwcG9ydE1ldGhvZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3NsU3VwcG9ydE1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NzbF9zdXBwb3J0X21ldGhvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3NsU3VwcG9ydE1ldGhvZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NsU3VwcG9ydE1ldGhvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzbFN1cHBvcnRNZXRob2QoKSB7XG4gICAgdGhpcy5fc3NsU3VwcG9ydE1ldGhvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsU3VwcG9ydE1ldGhvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2xTdXBwb3J0TWV0aG9kO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnREaXN0cmlidXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY2xvdWRmcm9udF9kaXN0cmlidXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3VkZnJvbnREaXN0cmlidXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jbG91ZGZyb250X2Rpc3RyaWJ1dGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGlhc2VzID0gY29uZmlnLmFsaWFzZXM7XG4gICAgdGhpcy5fY29tbWVudCA9IGNvbmZpZy5jb21tZW50O1xuICAgIHRoaXMuX2RlZmF1bHRSb290T2JqZWN0ID0gY29uZmlnLmRlZmF1bHRSb290T2JqZWN0O1xuICAgIHRoaXMuX2VuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcbiAgICB0aGlzLl9odHRwVmVyc2lvbiA9IGNvbmZpZy5odHRwVmVyc2lvbjtcbiAgICB0aGlzLl9pc0lwdjZFbmFibGVkID0gY29uZmlnLmlzSXB2NkVuYWJsZWQ7XG4gICAgdGhpcy5fcHJpY2VDbGFzcyA9IGNvbmZpZy5wcmljZUNsYXNzO1xuICAgIHRoaXMuX3JldGFpbk9uRGVsZXRlID0gY29uZmlnLnJldGFpbk9uRGVsZXRlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fd2FpdEZvckRlcGxveW1lbnQgPSBjb25maWcud2FpdEZvckRlcGxveW1lbnQ7XG4gICAgdGhpcy5fd2ViQWNsSWQgPSBjb25maWcud2ViQWNsSWQ7XG4gICAgdGhpcy5fY3VzdG9tRXJyb3JSZXNwb25zZSA9IGNvbmZpZy5jdXN0b21FcnJvclJlc3BvbnNlO1xuICAgIHRoaXMuX2RlZmF1bHRDYWNoZUJlaGF2aW9yLmludGVybmFsVmFsdWUgPSBjb25maWcuZGVmYXVsdENhY2hlQmVoYXZpb3I7XG4gICAgdGhpcy5fbG9nZ2luZ0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxvZ2dpbmdDb25maWc7XG4gICAgdGhpcy5fb3JkZXJlZENhY2hlQmVoYXZpb3IgPSBjb25maWcub3JkZXJlZENhY2hlQmVoYXZpb3I7XG4gICAgdGhpcy5fb3JpZ2luID0gY29uZmlnLm9yaWdpbjtcbiAgICB0aGlzLl9vcmlnaW5Hcm91cCA9IGNvbmZpZy5vcmlnaW5Hcm91cDtcbiAgICB0aGlzLl9yZXN0cmljdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5yZXN0cmljdGlvbnM7XG4gICAgdGhpcy5fdmlld2VyQ2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy52aWV3ZXJDZXJ0aWZpY2F0ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxpYXNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGlhc2VzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFsaWFzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxpYXNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxpYXNlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGlhc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxpYXNlcygpIHtcbiAgICB0aGlzLl9hbGlhc2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGlhc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWFzZXM7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNhbGxlcl9yZWZlcmVuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYWxsZXJSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYWxsZXJfcmVmZXJlbmNlJyk7XG4gIH1cblxuICAvLyBjb21tZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbW1lbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tbWVudCgpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1lbnQ7XG4gIH1cblxuICAvLyBkZWZhdWx0X3Jvb3Rfb2JqZWN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRSb290T2JqZWN0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0Um9vdE9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfcm9vdF9vYmplY3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRSb290T2JqZWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0Um9vdE9iamVjdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRSb290T2JqZWN0KCkge1xuICAgIHRoaXMuX2RlZmF1bHRSb290T2JqZWN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0Um9vdE9iamVjdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Um9vdE9iamVjdDtcbiAgfVxuXG4gIC8vIGRvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvbWFpbl9uYW1lJyk7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8gZXRhZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV0YWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldGFnJyk7XG4gIH1cblxuICAvLyBob3N0ZWRfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RlZFpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RlZF96b25lX2lkJyk7XG4gIH1cblxuICAvLyBodHRwX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGh0dHBWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faHR0cFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdHRwVmVyc2lvbigpIHtcbiAgICB0aGlzLl9odHRwVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFZlcnNpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5fcHJvZ3Jlc3NfdmFsaWRhdGlvbl9iYXRjaGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5Qcm9ncmVzc1ZhbGlkYXRpb25CYXRjaGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5fcHJvZ3Jlc3NfdmFsaWRhdGlvbl9iYXRjaGVzJyk7XG4gIH1cblxuICAvLyBpc19pcHY2X2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXNJcHY2RW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaXNJcHY2RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpc19pcHY2X2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpc0lwdjZFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pc0lwdjZFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXNJcHY2RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0lwdjZFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpc0lwdjZFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSXB2NkVuYWJsZWQ7XG4gIH1cblxuICAvLyBsYXN0X21vZGlmaWVkX3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0TW9kaWZpZWRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9tb2RpZmllZF90aW1lJyk7XG4gIH1cblxuICAvLyBwcmljZV9jbGFzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmljZUNsYXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmljZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpY2VfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaWNlQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaWNlQ2xhc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmljZUNsYXNzKCkge1xuICAgIHRoaXMuX3ByaWNlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaWNlQ2xhc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpY2VDbGFzcztcbiAgfVxuXG4gIC8vIHJldGFpbl9vbl9kZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0YWluT25EZWxldGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJldGFpbk9uRGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JldGFpbl9vbl9kZWxldGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXRhaW5PbkRlbGV0ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmV0YWluT25EZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXRhaW5PbkRlbGV0ZSgpIHtcbiAgICB0aGlzLl9yZXRhaW5PbkRlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmV0YWluT25EZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0YWluT25EZWxldGU7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0cnVzdGVkX2tleV9ncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHRydXN0ZWRLZXlHcm91cHMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblRydXN0ZWRLZXlHcm91cHModGhpcywgJ3RydXN0ZWRfa2V5X2dyb3VwcycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHRydXN0ZWRfc2lnbmVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgdHJ1c3RlZFNpZ25lcnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgQ2xvdWRmcm9udERpc3RyaWJ1dGlvblRydXN0ZWRTaWduZXJzKHRoaXMsICd0cnVzdGVkX3NpZ25lcnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyB3YWl0X2Zvcl9kZXBsb3ltZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dhaXRGb3JEZXBsb3ltZW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB3YWl0Rm9yRGVwbG95bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd3YWl0X2Zvcl9kZXBsb3ltZW50JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgd2FpdEZvckRlcGxveW1lbnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3dhaXRGb3JEZXBsb3ltZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdEZvckRlcGxveW1lbnQoKSB7XG4gICAgdGhpcy5fd2FpdEZvckRlcGxveW1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdhaXRGb3JEZXBsb3ltZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRGb3JEZXBsb3ltZW50O1xuICB9XG5cbiAgLy8gd2ViX2FjbF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWJBY2xJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2ViQWNsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWJfYWNsX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCB3ZWJBY2xJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2ViQWNsSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXZWJBY2xJZCgpIHtcbiAgICB0aGlzLl93ZWJBY2xJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2ViQWNsSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2ViQWNsSWQ7XG4gIH1cblxuICAvLyBjdXN0b21fZXJyb3JfcmVzcG9uc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tRXJyb3JSZXNwb25zZT86IENsb3VkZnJvbnREaXN0cmlidXRpb25DdXN0b21FcnJvclJlc3BvbnNlW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUVycm9yUmVzcG9uc2UoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9lcnJvcl9yZXNwb25zZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbUVycm9yUmVzcG9uc2UodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25DdXN0b21FcnJvclJlc3BvbnNlW10pIHtcbiAgICB0aGlzLl9jdXN0b21FcnJvclJlc3BvbnNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tRXJyb3JSZXNwb25zZSgpIHtcbiAgICB0aGlzLl9jdXN0b21FcnJvclJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21FcnJvclJlc3BvbnNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUVycm9yUmVzcG9uc2U7XG4gIH1cblxuICAvLyBkZWZhdWx0X2NhY2hlX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlZmF1bHRDYWNoZUJlaGF2aW9yID0gbmV3IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkZWZhdWx0X2NhY2hlX2JlaGF2aW9yXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRlZmF1bHRDYWNoZUJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2FjaGVCZWhhdmlvcjtcbiAgfVxuICBwdWJsaWMgcHV0RGVmYXVsdENhY2hlQmVoYXZpb3IodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25EZWZhdWx0Q2FjaGVCZWhhdmlvcikge1xuICAgIHRoaXMuX2RlZmF1bHRDYWNoZUJlaGF2aW9yLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdENhY2hlQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENhY2hlQmVoYXZpb3IuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxvZ2dpbmdfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ2dpbmdDb25maWcgPSBuZXcgQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkxvZ2dpbmdDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibG9nZ2luZ19jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZ0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0TG9nZ2luZ0NvbmZpZyh2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbkxvZ2dpbmdDb25maWcpIHtcbiAgICB0aGlzLl9sb2dnaW5nQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dnaW5nQ29uZmlnKCkge1xuICAgIHRoaXMuX2xvZ2dpbmdDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nZ2luZ0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dnaW5nQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBvcmRlcmVkX2NhY2hlX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29yZGVyZWRDYWNoZUJlaGF2aW9yPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yZGVyZWRDYWNoZUJlaGF2aW9yW107IFxuICBwdWJsaWMgZ2V0IG9yZGVyZWRDYWNoZUJlaGF2aW9yKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvcmRlcmVkX2NhY2hlX2JlaGF2aW9yJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3JkZXJlZENhY2hlQmVoYXZpb3IodmFsdWU6IENsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvcltdKSB7XG4gICAgdGhpcy5fb3JkZXJlZENhY2hlQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmRlcmVkQ2FjaGVCZWhhdmlvcigpIHtcbiAgICB0aGlzLl9vcmRlcmVkQ2FjaGVCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JkZXJlZENhY2hlQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkZXJlZENhY2hlQmVoYXZpb3I7XG4gIH1cblxuICAvLyBvcmlnaW4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3JpZ2luPzogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbltdOyBcbiAgcHVibGljIGdldCBvcmlnaW4oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yaWdpbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpbih2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpbltdKSB7XG4gICAgdGhpcy5fb3JpZ2luID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yaWdpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmlnaW47XG4gIH1cblxuICAvLyBvcmlnaW5fZ3JvdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3JpZ2luR3JvdXA/OiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBbXTsgXG4gIHB1YmxpYyBnZXQgb3JpZ2luR3JvdXAoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yaWdpbl9ncm91cCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yaWdpbkdyb3VwKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uT3JpZ2luR3JvdXBbXSkge1xuICAgIHRoaXMuX29yaWdpbkdyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3JpZ2luR3JvdXAoKSB7XG4gICAgdGhpcy5fb3JpZ2luR3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9yaWdpbkdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWdpbkdyb3VwO1xuICB9XG5cbiAgLy8gcmVzdHJpY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc3RyaWN0aW9ucyA9IG5ldyBDbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlc3RyaWN0aW9uc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZXN0cmljdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RyaWN0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0UmVzdHJpY3Rpb25zKHZhbHVlOiBDbG91ZGZyb250RGlzdHJpYnV0aW9uUmVzdHJpY3Rpb25zKSB7XG4gICAgdGhpcy5fcmVzdHJpY3Rpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzdHJpY3Rpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RyaWN0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdmlld2VyX2NlcnRpZmljYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ZpZXdlckNlcnRpZmljYXRlID0gbmV3IENsb3VkZnJvbnREaXN0cmlidXRpb25WaWV3ZXJDZXJ0aWZpY2F0ZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ2aWV3ZXJfY2VydGlmaWNhdGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdmlld2VyQ2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdlckNlcnRpZmljYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRWaWV3ZXJDZXJ0aWZpY2F0ZSh2YWx1ZTogQ2xvdWRmcm9udERpc3RyaWJ1dGlvblZpZXdlckNlcnRpZmljYXRlKSB7XG4gICAgdGhpcy5fdmlld2VyQ2VydGlmaWNhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aWV3ZXJDZXJ0aWZpY2F0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3ZXJDZXJ0aWZpY2F0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGlhc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9hbGlhc2VzKSxcbiAgICAgIGNvbW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbW1lbnQpLFxuICAgICAgZGVmYXVsdF9yb290X29iamVjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdFJvb3RPYmplY3QpLFxuICAgICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZWQpLFxuICAgICAgaHR0cF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9odHRwVmVyc2lvbiksXG4gICAgICBpc19pcHY2X2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pc0lwdjZFbmFibGVkKSxcbiAgICAgIHByaWNlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcmljZUNsYXNzKSxcbiAgICAgIHJldGFpbl9vbl9kZWxldGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXRhaW5PbkRlbGV0ZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHdhaXRfZm9yX2RlcGxveW1lbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl93YWl0Rm9yRGVwbG95bWVudCksXG4gICAgICB3ZWJfYWNsX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl93ZWJBY2xJZCksXG4gICAgICBjdXN0b21fZXJyb3JfcmVzcG9uc2U6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbkN1c3RvbUVycm9yUmVzcG9uc2VUb1RlcnJhZm9ybSkodGhpcy5fY3VzdG9tRXJyb3JSZXNwb25zZSksXG4gICAgICBkZWZhdWx0X2NhY2hlX2JlaGF2aW9yOiBjbG91ZGZyb250RGlzdHJpYnV0aW9uRGVmYXVsdENhY2hlQmVoYXZpb3JUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0Q2FjaGVCZWhhdmlvci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGxvZ2dpbmdfY29uZmlnOiBjbG91ZGZyb250RGlzdHJpYnV0aW9uTG9nZ2luZ0NvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2xvZ2dpbmdDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBvcmRlcmVkX2NhY2hlX2JlaGF2aW9yOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmRlcmVkQ2FjaGVCZWhhdmlvclRvVGVycmFmb3JtKSh0aGlzLl9vcmRlcmVkQ2FjaGVCZWhhdmlvciksXG4gICAgICBvcmlnaW46IGNka3RmLmxpc3RNYXBwZXIoY2xvdWRmcm9udERpc3RyaWJ1dGlvbk9yaWdpblRvVGVycmFmb3JtKSh0aGlzLl9vcmlnaW4pLFxuICAgICAgb3JpZ2luX2dyb3VwOiBjZGt0Zi5saXN0TWFwcGVyKGNsb3VkZnJvbnREaXN0cmlidXRpb25PcmlnaW5Hcm91cFRvVGVycmFmb3JtKSh0aGlzLl9vcmlnaW5Hcm91cCksXG4gICAgICByZXN0cmljdGlvbnM6IGNsb3VkZnJvbnREaXN0cmlidXRpb25SZXN0cmljdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9yZXN0cmljdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB2aWV3ZXJfY2VydGlmaWNhdGU6IGNsb3VkZnJvbnREaXN0cmlidXRpb25WaWV3ZXJDZXJ0aWZpY2F0ZVRvVGVycmFmb3JtKHRoaXMuX3ZpZXdlckNlcnRpZmljYXRlLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==