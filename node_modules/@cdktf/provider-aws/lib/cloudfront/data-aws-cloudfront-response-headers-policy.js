"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsCloudfrontResponseHeadersPolicy = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions = exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy = exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig = exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfig = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods = exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
_a = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders[_a] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
_b = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods[_b] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
_c = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins[_c] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders = DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
_d = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders[_d] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicyCorsConfig extends cdktf.ComplexComputedList {
    // access_control_allow_credentials - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessControlAllowCredentials() {
        return this.getBooleanAttribute('access_control_allow_credentials');
    }
    // access_control_allow_headers - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessControlAllowHeaders() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_allow_headers');
    }
    // access_control_allow_methods - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessControlAllowMethods() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_allow_methods');
    }
    // access_control_allow_origins - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessControlAllowOrigins() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_allow_origins');
    }
    // access_control_expose_headers - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessControlExposeHeaders() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('access_control_expose_headers');
    }
    // access_control_max_age_sec - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    // origin_override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get originOverride() {
        return this.getBooleanAttribute('origin_override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCorsConfig = DataAwsCloudfrontResponseHeadersPolicyCorsConfig;
_e = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCorsConfig[_e] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicyCorsConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems extends cdktf.ComplexComputedList {
    // header - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get header() {
        return this.getStringAttribute('header');
    }
    // override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    // value - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems = DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems;
_f = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems[_f] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig = DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig;
_g = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig[_g] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy extends cdktf.ComplexComputedList {
    // content_security_policy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get contentSecurityPolicy() {
        return this.getStringAttribute('content_security_policy');
    }
    // override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
_h = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy[_h] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions extends cdktf.ComplexComputedList {
    // override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
_j = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions[_j] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions extends cdktf.ComplexComputedList {
    // frame_option - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get frameOption() {
        return this.getStringAttribute('frame_option');
    }
    // override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
_k = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions[_k] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy extends cdktf.ComplexComputedList {
    // override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    // referrer_policy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get referrerPolicy() {
        return this.getStringAttribute('referrer_policy');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
_l = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy[_l] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity extends cdktf.ComplexComputedList {
    // access_control_max_age_sec - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    // include_subdomains - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    // override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    // preload - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get preload() {
        return this.getBooleanAttribute('preload');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
_m = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity[_m] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection extends cdktf.ComplexComputedList {
    // mode_block - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get modeBlock() {
        return this.getBooleanAttribute('mode_block');
    }
    // override - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    // protection - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get protection() {
        return this.getBooleanAttribute('protection');
    }
    // report_uri - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get reportUri() {
        return this.getStringAttribute('report_uri');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
_o = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection[_o] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig extends cdktf.ComplexComputedList {
    // content_security_policy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get contentSecurityPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('content_security_policy');
    }
    // content_type_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get contentTypeOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('content_type_options');
    }
    // frame_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get frameOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('frame_options');
    }
    // referrer_policy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get referrerPolicy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('referrer_policy');
    }
    // strict_transport_security - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get strictTransportSecurity() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('strict_transport_security');
    }
    // xss_protection - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get xssProtection() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('xss_protection');
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig = DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig;
_p = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig[_p] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}.
 *
 * @stability stable
 */
class DataAwsCloudfrontResponseHeadersPolicy extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_response_headers_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // comment - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get comment() {
        return this.getStringAttribute('comment');
    }
    // cors_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    corsConfig(index) {
        return new DataAwsCloudfrontResponseHeadersPolicyCorsConfig(this, 'cors_config', index);
    }
    // custom_headers_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    customHeadersConfig(index) {
        return new DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig(this, 'custom_headers_config', index);
    }
    // etag - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get etag() {
        return this.getStringAttribute('etag');
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
    get name() {
        return this.getStringAttribute('name');
    }
    /**
     * @stability stable
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @stability stable
     */
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
    // security_headers_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    securityHeadersConfig(index) {
        return new DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig(this, 'security_headers_config', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
exports.DataAwsCloudfrontResponseHeadersPolicy = DataAwsCloudfrontResponseHeadersPolicy;
_q = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontResponseHeadersPolicy[_q] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontResponseHeadersPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsCloudfrontResponseHeadersPolicy.tfResourceType = "aws_cloudfront_response_headers_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWRmcm9udC1yZXNwb25zZS1oZWFkZXJzLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZGZyb250L2RhdGEtYXdzLWNsb3VkZnJvbnQtcmVzcG9uc2UtaGVhZGVycy1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFPL0IsTUFBYSx5RUFBMEUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRILDJEQUEyRDs7OztJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOztBQUxILDhKQU1DOzs7Ozs7QUFDRCxNQUFhLHlFQUEwRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdEgsMkRBQTJEOzs7O0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O0FBTEgsOEpBTUM7Ozs7OztBQUNELE1BQWEseUVBQTBFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV0SCwyREFBMkQ7Ozs7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7QUFMSCw4SkFNQzs7Ozs7O0FBQ0QsTUFBYSwwRUFBMkUsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXZILDJEQUEyRDs7OztJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOztBQUxILGdLQU1DOzs7Ozs7QUFDRCxNQUFhLGdEQUFpRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0Ysc0ZBQXNGOzs7O0lBQ3RGLElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFD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SUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDZFQUE2RTs7OztJQUN0RSxxQkFBcUIsQ0FBQyxLQUFhO1FBQ3hDLE9BQU8sSUFBSSwyREFBMkQsQ0FBQyxJQUFJLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFDLENBQUM7SUFDSixDQUFDOztBQXBGSCx3RkFxRkM7OztBQW5GQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHFEQUFjLEdBQVcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjY2Vzc19jb250cm9sX2FsbG93X2NyZWRlbnRpYWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfYWxsb3dfY3JlZGVudGlhbHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9hbGxvd19oZWFkZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfYWxsb3dfaGVhZGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGFjY2Vzc19jb250cm9sX2FsbG93X21ldGhvZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2Nlc3NfY29udHJvbF9hbGxvd19tZXRob2RzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYWNjZXNzX2NvbnRyb2xfYWxsb3dfb3JpZ2lucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGFjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbE1heEFnZVNlYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2FjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjJyk7XG4gIH1cblxuICAvLyBvcmlnaW5fb3ZlcnJpZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmlnaW5PdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvcmlnaW5fb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhlYWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hlYWRlcicpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvdmVycmlkZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaXRlbXMnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbnRlbnRfc2VjdXJpdHlfcG9saWN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGVudFNlY3VyaXR5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGVudF9zZWN1cml0eV9wb2xpY3knKTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZyYW1lX29wdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyYW1lT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZnJhbWVfb3B0aW9uJyk7XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZWZlcnJlcl9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWZlcnJlclBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZmVycmVyX3BvbGljeScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdTdHJpY3RUcmFuc3BvcnRTZWN1cml0eSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbE1heEFnZVNlYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2FjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjJyk7XG4gIH1cblxuICAvLyBpbmNsdWRlX3N1YmRvbWFpbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbmNsdWRlU3ViZG9tYWlucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3N1YmRvbWFpbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcHJlbG9hZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJlbG9hZCcpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG1vZGVfYmxvY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtb2RlQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbW9kZV9ibG9jaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcm90ZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvdGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdwcm90ZWN0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVwb3J0X3VyaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlcG9ydFVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9ydF91cmknKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29udGVudF9zZWN1cml0eV9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb250ZW50U2VjdXJpdHlQb2xpY3koKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbnRlbnRfc2VjdXJpdHlfcG9saWN5JykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29udGVudF90eXBlX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb250ZW50VHlwZU9wdGlvbnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbnRlbnRfdHlwZV9vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZnJhbWVfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZyYW1lT3B0aW9ucygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZnJhbWVfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlZmVycmVyX3BvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZmVycmVyUG9saWN5KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWZlcnJlcl9wb2xpY3knKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzdHJpY3RfdHJhbnNwb3J0X3NlY3VyaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N0cmljdF90cmFuc3BvcnRfc2VjdXJpdHknKSBhcyBhbnk7XG4gIH1cblxuICAvLyB4c3NfcHJvdGVjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHhzc1Byb3RlY3Rpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3hzc19wcm90ZWN0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNvbW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbWVudCcpO1xuICB9XG5cbiAgLy8gY29yc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGNvcnNDb25maWcoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnKHRoaXMsICdjb3JzX2NvbmZpZycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9oZWFkZXJzX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgY3VzdG9tSGVhZGVyc0NvbmZpZyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWcodGhpcywgJ2N1c3RvbV9oZWFkZXJzX2NvbmZpZycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGV0YWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXRhZycpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfaGVhZGVyc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHNlY3VyaXR5SGVhZGVyc0NvbmZpZyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZyh0aGlzLCAnc2VjdXJpdHlfaGVhZGVyc19jb25maWcnLCBpbmRleCk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==