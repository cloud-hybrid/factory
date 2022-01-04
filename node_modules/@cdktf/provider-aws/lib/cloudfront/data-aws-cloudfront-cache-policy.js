"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsCloudfrontCachePolicy = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig = exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
_a = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies[_a] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig extends cdktf.ComplexComputedList {
    // cookie_behavior - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cookieBehavior() {
        return this.getStringAttribute('cookie_behavior');
    }
    // cookies - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cookies() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cookies');
    }
}
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
_b = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig[_b] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
_c = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders[_c] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig extends cdktf.ComplexComputedList {
    // header_behavior - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get headerBehavior() {
        return this.getStringAttribute('header_behavior');
    }
    // headers - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get headers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('headers');
    }
}
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
_d = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig[_d] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
_e = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings[_e] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig extends cdktf.ComplexComputedList {
    // query_string_behavior - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get queryStringBehavior() {
        return this.getStringAttribute('query_string_behavior');
    }
    // query_strings - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get queryStrings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('query_strings');
    }
}
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
_f = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig[_f] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin extends cdktf.ComplexComputedList {
    // cookies_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cookiesConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cookies_config');
    }
    // enable_accept_encoding_brotli - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enableAcceptEncodingBrotli() {
        return this.getBooleanAttribute('enable_accept_encoding_brotli');
    }
    // enable_accept_encoding_gzip - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enableAcceptEncodingGzip() {
        return this.getBooleanAttribute('enable_accept_encoding_gzip');
    }
    // headers_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get headersConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('headers_config');
    }
    // query_strings_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get queryStringsConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('query_strings_config');
    }
}
exports.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin = DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
_g = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin[_g] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy}.
 *
 * @stability stable
 */
class DataAwsCloudfrontCachePolicy extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_cache_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = config.id;
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
    // default_ttl - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultTtl() {
        return this.getNumberAttribute('default_ttl');
    }
    // etag - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get etag() {
        return this.getStringAttribute('etag');
    }
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    /**
     * @stability stable
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @stability stable
     */
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idInput() {
        return this._id;
    }
    // max_ttl - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maxTtl() {
        return this.getNumberAttribute('max_ttl');
    }
    // min_ttl - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get minTtl() {
        return this.getNumberAttribute('min_ttl');
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
    // parameters_in_cache_key_and_forwarded_to_origin - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    parametersInCacheKeyAndForwardedToOrigin(index) {
        return new DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin(this, 'parameters_in_cache_key_and_forwarded_to_origin', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
exports.DataAwsCloudfrontCachePolicy = DataAwsCloudfrontCachePolicy;
_h = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontCachePolicy[_h] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontCachePolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsCloudfrontCachePolicy.tfResourceType = "aws_cloudfront_cache_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWRmcm9udC1jYWNoZS1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRmcm9udC9kYXRhLWF3cy1jbG91ZGZyb250LWNhY2hlLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVMvQixNQUFhLHdGQUF5RixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckksMkRBQTJEOzs7O0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O0FBTEgsNExBTUM7Ozs7OztBQUNELE1BQWEsaUZBQWtGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5SCxxRUFBcUU7Ozs7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDZEQUE2RDs7OztJQUM3RCxJQUFXLE9BQU87UUFDaEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQzFELENBQUM7O0FBWEgsOEtBWUM7Ozs7OztBQUNELE1BQWEsd0ZBQXlGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVySSwyREFBMkQ7Ozs7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7QUFMSCw0TEFNQzs7Ozs7O0FBQ0QsTUFBYSxpRkFBa0YsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlILHFFQUFxRTs7OztJQUNyRSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkRBQTZEOzs7O0lBQzdELElBQVcsT0FBTztRQUNo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WUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMxQyxDQUFDO0lBQ0osQ0FBQzs7QUF0R0gsb0VBdUdDOzs7QUFyR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywyQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0Nsb3VkZnJvbnRDYWNoZVBvbGljeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnQ29va2llcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvb2tpZV9iZWhhdmlvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvb2tpZUJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29va2llX2JlaGF2aW9yJyk7XG4gIH1cblxuICAvLyBjb29raWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29va2llcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29va2llcycpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZ0hlYWRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBoZWFkZXJfYmVoYXZpb3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoZWFkZXJCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hlYWRlcl9iZWhhdmlvcicpO1xuICB9XG5cbiAgLy8gaGVhZGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWRlcnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2hlYWRlcnMnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcXVlcnlfc3RyaW5nX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3F1ZXJ5X3N0cmluZ19iZWhhdmlvcicpO1xuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5ncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncXVlcnlfc3RyaW5ncycpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29va2llc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb29raWVzQ29uZmlnKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb29raWVzX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVuYWJsZV9hY2NlcHRfZW5jb2RpbmdfYnJvdGxpIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19icm90bGknKSBhcyBhbnk7XG4gIH1cblxuICAvLyBlbmFibGVfYWNjZXB0X2VuY29kaW5nX2d6aXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVBY2NlcHRFbmNvZGluZ0d6aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19nemlwJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaGVhZGVyc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoZWFkZXJzQ29uZmlnKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXJzX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHF1ZXJ5X3N0cmluZ3NfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdzQ29uZmlnKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdxdWVyeV9zdHJpbmdzX2NvbmZpZycpIGFzIGFueTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzQ2xvdWRmcm9udENhY2hlUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY2xvdWRmcm9udF9jYWNoZV9wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c0Nsb3VkZnJvbnRDYWNoZVBvbGljeUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRmcm9udF9jYWNoZV9wb2xpY3knLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjb21tZW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbW1lbnQnKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfdHRsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RlZmF1bHRfdHRsJyk7XG4gIH1cblxuICAvLyBldGFnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXRhZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V0YWcnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJZCgpIHtcbiAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICAvLyBtYXhfdHRsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4VHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4X3R0bCcpO1xuICB9XG5cbiAgLy8gbWluX3R0bCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1pblR0bCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl90dGwnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlcnNfaW5fY2FjaGVfa2V5X2FuZF9mb3J3YXJkZWRfdG9fb3JpZ2luIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBwYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luKHRoaXMsICdwYXJhbWV0ZXJzX2luX2NhY2hlX2tleV9hbmRfZm9yd2FyZGVkX3RvX29yaWdpbicsIGluZGV4KTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==