"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsCloudfrontOriginRequestPolicy = exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig = exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings = exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfig = exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders = exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfig = exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies = DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies;
_a = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies[_a] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontOriginRequestPolicyCookiesConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsCloudfrontOriginRequestPolicyCookiesConfig = DataAwsCloudfrontOriginRequestPolicyCookiesConfig;
_b = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontOriginRequestPolicyCookiesConfig[_b] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontOriginRequestPolicyCookiesConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders = DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders;
_c = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders[_c] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontOriginRequestPolicyHeadersConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsCloudfrontOriginRequestPolicyHeadersConfig = DataAwsCloudfrontOriginRequestPolicyHeadersConfig;
_d = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontOriginRequestPolicyHeadersConfig[_d] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontOriginRequestPolicyHeadersConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings extends cdktf.ComplexComputedList {
    // items - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
}
exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings = DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
_e = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings[_e] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig extends cdktf.ComplexComputedList {
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
exports.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig = DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig;
_f = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig[_f] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}.
 *
 * @stability stable
 */
class DataAwsCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudfront_origin_request_policy',
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
    // cookies_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    cookiesConfig(index) {
        return new DataAwsCloudfrontOriginRequestPolicyCookiesConfig(this, 'cookies_config', index);
    }
    // etag - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get etag() {
        return this.getStringAttribute('etag');
    }
    // headers_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    headersConfig(index) {
        return new DataAwsCloudfrontOriginRequestPolicyHeadersConfig(this, 'headers_config', index);
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
    // query_strings_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    queryStringsConfig(index) {
        return new DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig(this, 'query_strings_config', index);
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
exports.DataAwsCloudfrontOriginRequestPolicy = DataAwsCloudfrontOriginRequestPolicy;
_g = JSII_RTTI_SYMBOL_1;
DataAwsCloudfrontOriginRequestPolicy[_g] = { fqn: "@cdktf/provider-aws.cloudfront.DataAwsCloudfrontOriginRequestPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsCloudfrontOriginRequestPolicy.tfResourceType = "aws_cloudfront_origin_request_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWRmcm9udC1vcmlnaW4tcmVxdWVzdC1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRmcm9udC9kYXRhLWF3cy1jbG91ZGZyb250LW9yaWdpbi1yZXF1ZXN0LXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVMvQixNQUFhLHdEQUF5RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckcsMkRBQTJEOzs7O0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O0FBTEgsNEhBTUM7Ozs7OztBQUNELE1BQWEsaURBQWtELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5RixxRUFBcUU7Ozs7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDZEQUE2RDs7OztJQUM3RCxJQUFXLE9BQU87UUFDaEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQzFELENBQUM7O0FBWEgsOEdBWUM7Ozs7OztBQUNELE1BQWEsd0RBQXlELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVyRywyREFBMkQ7Ozs7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7QUFMSCw0SEFNQzs7Ozs7O0FBQ0QsTUFBYSxpREFBa0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlGLHFFQUFxRTs7OztJQUNyRSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkRBQTZEOzs7O0lB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QUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwwRUFBMEU7Ozs7SUFDbkUsa0JBQWtCLENBQUMsS0FBYTtRQUNyQyxPQUFPLElBQUksc0RBQXNELENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNyQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUMsQ0FBQztJQUNKLENBQUM7O0FBakdILG9GQWtHQzs7O0FBaEdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csbURBQWMsR0FBVyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NDbG91ZGZyb250T3JpZ2luUmVxdWVzdFBvbGljeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250T3JpZ2luUmVxdWVzdFBvbGljeUNvb2tpZXNDb25maWdDb29raWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRPcmlnaW5SZXF1ZXN0UG9saWN5Q29va2llc0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvb2tpZV9iZWhhdmlvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvb2tpZUJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29va2llX2JlaGF2aW9yJyk7XG4gIH1cblxuICAvLyBjb29raWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29va2llcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29va2llcycpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250T3JpZ2luUmVxdWVzdFBvbGljeUhlYWRlcnNDb25maWdIZWFkZXJzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRPcmlnaW5SZXF1ZXN0UG9saWN5SGVhZGVyc0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhlYWRlcl9iZWhhdmlvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlYWRlckJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGVhZGVyX2JlaGF2aW9yJyk7XG4gIH1cblxuICAvLyBoZWFkZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVhZGVycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaGVhZGVycycpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250T3JpZ2luUmVxdWVzdFBvbGljeVF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NDbG91ZGZyb250T3JpZ2luUmVxdWVzdFBvbGljeVF1ZXJ5U3RyaW5nc0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHF1ZXJ5X3N0cmluZ19iZWhhdmlvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWVyeV9zdHJpbmdfYmVoYXZpb3InKTtcbiAgfVxuXG4gIC8vIHF1ZXJ5X3N0cmluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxdWVyeVN0cmluZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3F1ZXJ5X3N0cmluZ3MnKSBhcyBhbnk7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkZnJvbnRPcmlnaW5SZXF1ZXN0UG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY2xvdWRmcm9udF9vcmlnaW5fcmVxdWVzdF9wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzQ2xvdWRmcm9udE9yaWdpblJlcXVlc3RQb2xpY3lDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2Nsb3VkZnJvbnRfb3JpZ2luX3JlcXVlc3RfcG9saWN5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY29tbWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cblxuICAvLyBjb29raWVzX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgY29va2llc0NvbmZpZyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udE9yaWdpblJlcXVlc3RQb2xpY3lDb29raWVzQ29uZmlnKHRoaXMsICdjb29raWVzX2NvbmZpZycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGV0YWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXRhZycpO1xuICB9XG5cbiAgLy8gaGVhZGVyc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGhlYWRlcnNDb25maWcoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Nsb3VkZnJvbnRPcmlnaW5SZXF1ZXN0UG9saWN5SGVhZGVyc0NvbmZpZyh0aGlzLCAnaGVhZGVyc19jb25maWcnLCBpbmRleCk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5nc19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHF1ZXJ5U3RyaW5nc0NvbmZpZyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzQ2xvdWRmcm9udE9yaWdpblJlcXVlc3RQb2xpY3lRdWVyeVN0cmluZ3NDb25maWcodGhpcywgJ3F1ZXJ5X3N0cmluZ3NfY29uZmlnJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgfTtcbiAgfVxufVxuIl19