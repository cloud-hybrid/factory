"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontCachePolicy = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform = exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference = exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform;
/**
 * @stability stable
 */
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
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
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
    /**
     * @stability stable
     */
    set items(value) {
        this._items = value;
    }
    /**
     * @stability stable
     */
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference[_a] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference", version: "3.0.1" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cookie_behavior: cdktf.stringToTerraform(struct.cookieBehavior),
        cookies: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct.cookies),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cookies - computed: false, optional: true, required: false
        this._cookies = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(this, "cookies", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cookieBehavior) {
            hasAnyValues = true;
            internalValueResult.cookieBehavior = this._cookieBehavior;
        }
        if ((_j = this._cookies) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.cookies = (_k = this._cookies) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cookieBehavior = undefined;
            this._cookies.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cookieBehavior = value.cookieBehavior;
            this._cookies.internalValue = value.cookies;
        }
    }
    /**
     * @stability stable
     */
    get cookieBehavior() {
        return this.getStringAttribute('cookie_behavior');
    }
    /**
     * @stability stable
     */
    set cookieBehavior(value) {
        this._cookieBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cookieBehaviorInput() {
        return this._cookieBehavior;
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
    /**
     * @stability stable
     */
    resetCookies() {
        this._cookies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cookiesInput() {
        return this._cookies.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference", version: "3.0.1" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform;
/**
 * @stability stable
 */
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
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
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
    /**
     * @stability stable
     */
    set items(value) {
        this._items = value;
    }
    /**
     * @stability stable
     */
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference[_c] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference", version: "3.0.1" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header_behavior: cdktf.stringToTerraform(struct.headerBehavior),
        headers: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct.headers),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // headers - computed: false, optional: true, required: false
        this._headers = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(this, "headers", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._headerBehavior) {
            hasAnyValues = true;
            internalValueResult.headerBehavior = this._headerBehavior;
        }
        if ((_j = this._headers) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.headers = (_k = this._headers) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._headerBehavior = undefined;
            this._headers.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headerBehavior = value.headerBehavior;
            this._headers.internalValue = value.headers;
        }
    }
    /**
     * @stability stable
     */
    get headerBehavior() {
        return this.getStringAttribute('header_behavior');
    }
    /**
     * @stability stable
     */
    set headerBehavior(value) {
        this._headerBehavior = value;
    }
    /**
     * @stability stable
     */
    resetHeaderBehavior() {
        this._headerBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headerBehaviorInput() {
        return this._headerBehavior;
    }
    /**
     * @stability stable
     */
    get headers() {
        return this._headers;
    }
    /**
     * @stability stable
     */
    putHeaders(value) {
        this._headers.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHeaders() {
        this._headers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headersInput() {
        return this._headers.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference[_d] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference", version: "3.0.1" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cdktf.stringToTerraform)(struct.items),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform;
/**
 * @stability stable
 */
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
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
        if (this._items) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._items = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._items = value.items;
        }
    }
    /**
     * @stability stable
     */
    get items() {
        return this.getListAttribute('items');
    }
    /**
     * @stability stable
     */
    set items(value) {
        this._items = value;
    }
    /**
     * @stability stable
     */
    resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get itemsInput() {
        return this._items;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference[_e] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference", version: "3.0.1" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        query_string_behavior: cdktf.stringToTerraform(struct.queryStringBehavior),
        query_strings: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct.queryStrings),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // query_strings - computed: false, optional: true, required: false
        this._queryStrings = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(this, "query_strings", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._queryStringBehavior) {
            hasAnyValues = true;
            internalValueResult.queryStringBehavior = this._queryStringBehavior;
        }
        if ((_j = this._queryStrings) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryStrings = (_k = this._queryStrings) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._queryStringBehavior = undefined;
            this._queryStrings.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._queryStringBehavior = value.queryStringBehavior;
            this._queryStrings.internalValue = value.queryStrings;
        }
    }
    /**
     * @stability stable
     */
    get queryStringBehavior() {
        return this.getStringAttribute('query_string_behavior');
    }
    /**
     * @stability stable
     */
    set queryStringBehavior(value) {
        this._queryStringBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringBehaviorInput() {
        return this._queryStringBehavior;
    }
    /**
     * @stability stable
     */
    get queryStrings() {
        return this._queryStrings;
    }
    /**
     * @stability stable
     */
    putQueryStrings(value) {
        this._queryStrings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetQueryStrings() {
        this._queryStrings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringsInput() {
        return this._queryStrings.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference[_f] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference", version: "3.0.1" };
function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct.enableAcceptEncodingBrotli),
        enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct.enableAcceptEncodingGzip),
        cookies_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct.cookiesConfig),
        headers_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct.headersConfig),
        query_strings_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct.queryStringsConfig),
    };
}
exports.cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform = cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform;
/**
 * @stability stable
 */
class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cookies_config - computed: false, optional: false, required: true
        this._cookiesConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this, "cookies_config", true);
        // headers_config - computed: false, optional: false, required: true
        this._headersConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this, "headers_config", true);
        // query_strings_config - computed: false, optional: false, required: true
        this._queryStringsConfig = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this, "query_strings_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k, _l, _m, _o, _p;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enableAcceptEncodingBrotli) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingBrotli = this._enableAcceptEncodingBrotli;
        }
        if (this._enableAcceptEncodingGzip) {
            hasAnyValues = true;
            internalValueResult.enableAcceptEncodingGzip = this._enableAcceptEncodingGzip;
        }
        if ((_j = this._cookiesConfig) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.cookiesConfig = (_k = this._cookiesConfig) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        if ((_l = this._headersConfig) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.headersConfig = (_m = this._headersConfig) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        if ((_o = this._queryStringsConfig) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryStringsConfig = (_p = this._queryStringsConfig) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enableAcceptEncodingBrotli = undefined;
            this._enableAcceptEncodingGzip = undefined;
            this._cookiesConfig.internalValue = undefined;
            this._headersConfig.internalValue = undefined;
            this._queryStringsConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enableAcceptEncodingBrotli = value.enableAcceptEncodingBrotli;
            this._enableAcceptEncodingGzip = value.enableAcceptEncodingGzip;
            this._cookiesConfig.internalValue = value.cookiesConfig;
            this._headersConfig.internalValue = value.headersConfig;
            this._queryStringsConfig.internalValue = value.queryStringsConfig;
        }
    }
    /**
     * @stability stable
     */
    get enableAcceptEncodingBrotli() {
        return this.getBooleanAttribute('enable_accept_encoding_brotli');
    }
    /**
     * @stability stable
     */
    set enableAcceptEncodingBrotli(value) {
        this._enableAcceptEncodingBrotli = value;
    }
    /**
     * @stability stable
     */
    resetEnableAcceptEncodingBrotli() {
        this._enableAcceptEncodingBrotli = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableAcceptEncodingBrotliInput() {
        return this._enableAcceptEncodingBrotli;
    }
    /**
     * @stability stable
     */
    get enableAcceptEncodingGzip() {
        return this.getBooleanAttribute('enable_accept_encoding_gzip');
    }
    /**
     * @stability stable
     */
    set enableAcceptEncodingGzip(value) {
        this._enableAcceptEncodingGzip = value;
    }
    /**
     * @stability stable
     */
    resetEnableAcceptEncodingGzip() {
        this._enableAcceptEncodingGzip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableAcceptEncodingGzipInput() {
        return this._enableAcceptEncodingGzip;
    }
    /**
     * @stability stable
     */
    get cookiesConfig() {
        return this._cookiesConfig;
    }
    /**
     * @stability stable
     */
    putCookiesConfig(value) {
        this._cookiesConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cookiesConfigInput() {
        return this._cookiesConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get headersConfig() {
        return this._headersConfig;
    }
    /**
     * @stability stable
     */
    putHeadersConfig(value) {
        this._headersConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headersConfigInput() {
        return this._headersConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get queryStringsConfig() {
        return this._queryStringsConfig;
    }
    /**
     * @stability stable
     */
    putQueryStringsConfig(value) {
        this._queryStringsConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringsConfigInput() {
        return this._queryStringsConfig.internalValue;
    }
}
exports.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference = CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference[_g] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy}.
 *
 * @stability stable
 */
class CloudfrontCachePolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
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
        // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: false, required: true
        this._parametersInCacheKeyAndForwardedToOrigin = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(this, "parameters_in_cache_key_and_forwarded_to_origin", true);
        this._comment = config.comment;
        this._defaultTtl = config.defaultTtl;
        this._maxTtl = config.maxTtl;
        this._minTtl = config.minTtl;
        this._name = config.name;
        this._parametersInCacheKeyAndForwardedToOrigin.internalValue = config.parametersInCacheKeyAndForwardedToOrigin;
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
    get parametersInCacheKeyAndForwardedToOrigin() {
        return this._parametersInCacheKeyAndForwardedToOrigin;
    }
    /**
     * @stability stable
     */
    putParametersInCacheKeyAndForwardedToOrigin(value) {
        this._parametersInCacheKeyAndForwardedToOrigin.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parametersInCacheKeyAndForwardedToOriginInput() {
        return this._parametersInCacheKeyAndForwardedToOrigin.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            comment: cdktf.stringToTerraform(this._comment),
            default_ttl: cdktf.numberToTerraform(this._defaultTtl),
            max_ttl: cdktf.numberToTerraform(this._maxTtl),
            min_ttl: cdktf.numberToTerraform(this._minTtl),
            name: cdktf.stringToTerraform(this._name),
            parameters_in_cache_key_and_forwarded_to_origin: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(this._parametersInCacheKeyAndForwardedToOrigin.internalValue),
        };
    }
}
exports.CloudfrontCachePolicy = CloudfrontCachePolicy;
_h = JSII_RTTI_SYMBOL_1;
CloudfrontCachePolicy[_h] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontCachePolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudfrontCachePolicy.tfResourceType = "aws_cloudfront_cache_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1jYWNoZS1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xvdWRmcm9udC9jbG91ZGZyb250LWNhY2hlLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXNCL0IsU0FBZ0IsNEZBQTRGLENBQUMsTUFBNkw7SUFDeFMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQ2hFLENBQUE7QUFDSCxDQUFDO0FBUkQsb01BUUM7Ozs7QUFFRCxNQUFhLGdHQUFpRyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXZJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFvRztRQUMzSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBZTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztBQTNDSCw0TUE0Q0M7OztBQVFELFNBQWdCLHFGQUFxRixDQUFDLE1BQStLO0lBQ25SLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLE9BQU8sRUFBRSw0RkFBNEYsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ3ZILENBQUE7QUFDSCxDQUFDO0FBVEQsc0xBU0M7Ozs7QUFFRCxNQUFhLHlGQUEwRixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWhJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQStDOUIsNkRBQTZEO1FBQ3JELGFBQVEsR0FBRyxJQUFJLGdHQUFnRyxDQUFDLElBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUEzQ3RKLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDM0Q7UUFDRCxVQUFJLElBQUksQ0FBQyxRQUFRLDBDQUFFLGFBQWEsRUFBRTtZQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sU0FBRyxJQUFJLENBQUMsUUFBUSwwQ0FBRSxhQUFhLENBQUM7U0FDNUQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBNkY7UUFDcEgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUN6QzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFVBQVUsQ0FBQyxLQUF3RjtRQUN4RyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDckMsQ0FBQzs7QUE5REgsOExBK0RDOzs7QUFNRCxTQUFnQiw0RkFBNEYsQ0FBQyxNQUE2TDtJQUN4UyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDaEUsQ0FBQTtBQUNILENBQUM7QUFSRCxvTUFRQzs7OztBQUVELE1BQWEsZ0dBQWlHLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJdkksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW9HO1FBQzNILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFlO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O0FBM0NILDRNQTRDQzs7O0FBUUQsU0FBZ0IscUZBQXFGLENBQUMsTUFBK0s7SUFDblIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsT0FBTyxFQUFFLDRGQUE0RixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDdkgsQ0FBQTtBQUNILENBQUM7QUFURCxzTEFTQzs7OztBQUVELE1BQWEseUZBQTBGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJaEksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBa0Q5Qiw2REFBNkQ7UUFDckQsYUFBUSxHQUFHLElBQUksZ0dBQWdHLENBQUMsSUFBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTlDdEosQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELFVBQUksSUFBSSxDQUFDLFFBQVEsMENBQUUsYUFBYSxFQUFFO1lBQ2hDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxTQUFHLElBQUksQ0FBQyxRQUFRLDBDQUFFLGFBQWEsQ0FBQztTQUM1RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE2RjtRQUNwSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3pDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxVQUFVLENBQUMsS0FBd0Y7UUFDeEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3JDLENBQUM7O0FBakVILDhMQWtFQzs7O0FBTUQsU0FBZ0Isc0dBQXNHLENBQUMsTUFBaU47SUFDdFUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQ2hFLENBQUE7QUFDSCxDQUFDO0FBUkQsd05BUUM7Ozs7QUFFRCxNQUFhLDBHQUEyRyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWpKLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE4RztRQUNySSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDekI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBZTtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztBQTNDSCxnT0E0Q0M7OztBQVFELFNBQWdCLDBGQUEwRixDQUFDLE1BQXlMO0lBQ2xTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSxhQUFhLEVBQUUsc0dBQXNHLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM1SSxDQUFBO0FBQ0gsQ0FBQztBQVRELGdNQVNDOzs7O0FBRUQsTUFBYSw4RkFBK0YsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlySSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUErQzlCLG1FQUFtRTtRQUMzRCxrQkFBYSxHQUFHLElBQUksMEdBQTBHLENBQUMsSUFBVyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTNDM0ssQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNyRTtRQUNELFVBQUksSUFBSSxDQUFDLGFBQWEsMENBQUUsYUFBYSxFQUFFO1lBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxTQUFHLElBQUksQ0FBQyxhQUFhLDBDQUFFLGFBQWEsQ0FBQztTQUN0RTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFrRztRQUN6SCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDOUM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxlQUFlLENBQUMsS0FBa0c7UUFDdkgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztJQUMxQyxDQUFDOztBQTlESCx3TUErREM7OztBQWNELFNBQWdCLHdFQUF3RSxDQUFDLE1BQXFKO0lBQzVPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUMzRiwyQkFBMkIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3ZGLGNBQWMsRUFBRSxxRkFBcUYsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzVILGNBQWMsRUFBRSxxRkFBcUYsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzVILG9CQUFvQixFQUFFLDBGQUEwRixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztLQUM3SSxDQUFBO0FBQ0gsQ0FBQztBQVpELDRKQVlDOzs7O0FBRUQsTUFBYSw0RUFBNkUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUluSCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFvRjlCLG9FQUFvRTtRQUM1RCxtQkFBYyxHQUFHLElBQUkseUZBQXlGLENBQUMsSUFBVyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBWTVKLG9FQUFvRTtRQUM1RCxtQkFBYyxHQUFHLElBQUkseUZBQXlGLENBQUMsSUFBVyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBWTVKLDBFQUEwRTtRQUNsRSx3QkFBbUIsR0FBRyxJQUFJLDhGQUE4RixDQUFDLElBQVcsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTFHNUssQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQztTQUNuRjtRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1NBQy9FO1FBQ0QsVUFBSSxJQUFJLENBQUMsY0FBYywwQ0FBRSxhQUFhLEVBQUU7WUFDdEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLFNBQUcsSUFBSSxDQUFDLGNBQWMsMENBQUUsYUFBYSxDQUFDO1NBQ3hFO1FBQ0QsVUFBSSxJQUFJLENBQUMsY0FBYywwQ0FBRSxhQUFhLEVBQUU7WUFDdEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLFNBQUcsSUFBSSxDQUFDLGNBQWMsMENBQUUsYUFBYSxDQUFDO1NBQ3hFO1FBQ0QsVUFBSSxJQUFJLENBQUMsbUJBQW1CLDBDQUFFLGFBQWEsRUFBRTtZQUMzQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtCQUFrQixTQUFHLElBQUksQ0FBQyxtQkFBbUIsMENBQUUsYUFBYSxDQUFDO1NBQ2xGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWdGO1FBQ3ZHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO1lBQzdDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUNwRDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztZQUNwRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1lBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBUSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFDRCxJQUFXLDBCQUEwQixDQUFDLEtBQWtDO1FBQ3RFLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNNLCtCQUErQjtRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFRLENBQUM7SUFDeEUsQ0FBQzs7OztJQUNELElBQVcsd0JBQXdCLENBQUMsS0FBa0M7UUFDcEUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00sZ0JBQWdCLENBQUMsS0FBaUY7UUFDdkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00sZ0JBQWdCLENBQUMsS0FBaUY7UUFDdkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDOzs7O0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHFCQUFxQixDQUFDLEtBQXNGO1FBQ2pILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ2pELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO0lBQ2hELENBQUM7O0FBMUhILG9LQTJIQzs7Ozs7Ozs7QUFHRCxNQUFhLHFCQUFzQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPaEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQW1DO1FBQ2xGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNkJBQTZCO1lBQ3BELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFvR0wscUdBQXFHO1FBQzdGLDhDQUF5QyxHQUFHLElBQUksNEVBQTRFLENBQUMsSUFBVyxFQUFFLGlEQUFpRCxFQUFFLElBQUksQ0FBQyxDQUFDO1FBcEd6TSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLHdDQUF3QyxDQUFDO0lBQ2pILENBQUM7Ozs7SUFRRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCwwREFBMEQ7Ozs7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyx3Q0FBd0M7UUFDakQsT0FBTyxJQUFJLENBQUMseUNBQXlDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNNLDJDQUEyQyxDQUFDLEtBQW9FO1FBQ3JILElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2Q0FBNkM7UUFDdEQsT0FBTyxJQUFJLENBQUMseUNBQXlDLENBQUMsYUFBYSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsK0NBQStDLEVBQUUsd0VBQXdFLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLGFBQWEsQ0FBQztTQUN4TCxDQUFDO0lBQ0osQ0FBQzs7QUFwSkgsc0RBcUpDOzs7QUFuSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxvQ0FBYyxHQUFXLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udENhY2hlUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFR0bD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4VHRsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5UdGw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGl0ZW1zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pdGVtcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnQ29va2llc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZ0Nvb2tpZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXRlbXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGl0ZW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvb2tpZUJlaGF2aW9yOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29va2llcz86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnQ29va2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvb2tpZV9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb29raWVCZWhhdmlvciksXG4gICAgY29va2llczogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzVG9UZXJyYWZvcm0oc3RydWN0IS5jb29raWVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nvb2tpZUJlaGF2aW9yKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb29raWVCZWhhdmlvciA9IHRoaXMuX2Nvb2tpZUJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29va2llcz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29va2llcyA9IHRoaXMuX2Nvb2tpZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luQ29va2llc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nvb2tpZUJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb29raWVCZWhhdmlvciA9IHZhbHVlLmNvb2tpZUJlaGF2aW9yO1xuICAgICAgdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29va2llcztcbiAgICB9XG4gIH1cblxuICAvLyBjb29raWVfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29va2llQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvb2tpZUJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29va2llX2JlaGF2aW9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb29raWVCZWhhdmlvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29va2llQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29va2llQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llQmVoYXZpb3I7XG4gIH1cblxuICAvLyBjb29raWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvb2tpZXMgPSBuZXcgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNvb2tpZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29va2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llcztcbiAgfVxuICBwdWJsaWMgcHV0Q29va2llcyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdDb29raWVzKSB7XG4gICAgdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29va2llcygpIHtcbiAgICB0aGlzLl9jb29raWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvb2tpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXRlbXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVyc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLml0ZW1zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZ0hlYWRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZS5pdGVtcztcbiAgICB9XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pdGVtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXRlbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVyQmVoYXZpb3I/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVycz86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnSGVhZGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJCZWhhdmlvciksXG4gICAgaGVhZGVyczogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hlYWRlckJlaGF2aW9yKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFkZXJCZWhhdmlvciA9IHRoaXMuX2hlYWRlckJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGVhZGVycz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhZGVycyA9IHRoaXMuX2hlYWRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSGVhZGVyc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hlYWRlckJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oZWFkZXJCZWhhdmlvciA9IHZhbHVlLmhlYWRlckJlaGF2aW9yO1xuICAgICAgdGhpcy5faGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaGVhZGVycztcbiAgICB9XG4gIH1cblxuICAvLyBoZWFkZXJfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVhZGVyQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhlYWRlckJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGVhZGVyX2JlaGF2aW9yJyk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFkZXJCZWhhdmlvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faGVhZGVyQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFkZXJCZWhhdmlvcigpIHtcbiAgICB0aGlzLl9oZWFkZXJCZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhZGVyQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyQmVoYXZpb3I7XG4gIH1cblxuICAvLyBoZWFkZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWRlcnMgPSBuZXcgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImhlYWRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycztcbiAgfVxuICBwdWJsaWMgcHV0SGVhZGVycyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdIZWFkZXJzKSB7XG4gICAgdGhpcy5faGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVycygpIHtcbiAgICB0aGlzLl9oZWFkZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGl0ZW1zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5nc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pdGVtcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXRlbXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGl0ZW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlTdHJpbmdCZWhhdmlvcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHF1ZXJ5U3RyaW5ncz86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdRdWVyeVN0cmluZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBxdWVyeV9zdHJpbmdfYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlTdHJpbmdCZWhhdmlvciksXG4gICAgcXVlcnlfc3RyaW5nczogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5nc1RvVGVycmFmb3JtKHN0cnVjdCEucXVlcnlTdHJpbmdzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZ0JlaGF2aW9yKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5xdWVyeVN0cmluZ0JlaGF2aW9yID0gdGhpcy5fcXVlcnlTdHJpbmdCZWhhdmlvcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3F1ZXJ5U3RyaW5ncz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVlcnlTdHJpbmdzID0gdGhpcy5fcXVlcnlTdHJpbmdzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcXVlcnlTdHJpbmdCZWhhdmlvciA9IHZhbHVlLnF1ZXJ5U3RyaW5nQmVoYXZpb3I7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnF1ZXJ5U3RyaW5ncztcbiAgICB9XG4gIH1cblxuICAvLyBxdWVyeV9zdHJpbmdfYmVoYXZpb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcXVlcnlTdHJpbmdCZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdCZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3F1ZXJ5X3N0cmluZ19iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcXVlcnlTdHJpbmdCZWhhdmlvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmdCZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeVN0cmluZ0JlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nQmVoYXZpb3I7XG4gIH1cblxuICAvLyBxdWVyeV9zdHJpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1ZXJ5U3RyaW5ncyA9IG5ldyBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnUXVlcnlTdHJpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInF1ZXJ5X3N0cmluZ3NcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVN0cmluZ3M7XG4gIH1cbiAgcHVibGljIHB1dFF1ZXJ5U3RyaW5ncyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZ1F1ZXJ5U3RyaW5ncykge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnlTdHJpbmdzKCkge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWVyeVN0cmluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTdHJpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVBY2NlcHRFbmNvZGluZ0d6aXA/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29va2llc0NvbmZpZzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVyc0NvbmZpZzogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVlcnlTdHJpbmdzQ29uZmlnOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblRvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5PdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19icm90bGk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpKSxcbiAgICBlbmFibGVfYWNjZXB0X2VuY29kaW5nX2d6aXA6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUFjY2VwdEVuY29kaW5nR3ppcCksXG4gICAgY29va2llc19jb25maWc6IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Db29raWVzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5jb29raWVzQ29uZmlnKSxcbiAgICBoZWFkZXJzX2NvbmZpZzogY2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkhlYWRlcnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlcnNDb25maWcpLFxuICAgIHF1ZXJ5X3N0cmluZ3NfY29uZmlnOiBjbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luUXVlcnlTdHJpbmdzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5xdWVyeVN0cmluZ3NDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVBY2NlcHRFbmNvZGluZ0Jyb3RsaSA9IHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXAgPSB0aGlzLl9lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb29raWVzQ29uZmlnPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb29raWVzQ29uZmlnID0gdGhpcy5fY29va2llc0NvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlYWRlcnNDb25maWc/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlYWRlcnNDb25maWcgPSB0aGlzLl9oZWFkZXJzQ29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcXVlcnlTdHJpbmdzQ29uZmlnPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5xdWVyeVN0cmluZ3NDb25maWcgPSB0aGlzLl9xdWVyeVN0cmluZ3NDb25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250Q2FjaGVQb2xpY3lQYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVBY2NlcHRFbmNvZGluZ0d6aXAgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb29raWVzQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9oZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZ3NDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkgPSB2YWx1ZS5lbmFibGVBY2NlcHRFbmNvZGluZ0Jyb3RsaTtcbiAgICAgIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nR3ppcCA9IHZhbHVlLmVuYWJsZUFjY2VwdEVuY29kaW5nR3ppcDtcbiAgICAgIHRoaXMuX2Nvb2tpZXNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvb2tpZXNDb25maWc7XG4gICAgICB0aGlzLl9oZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5oZWFkZXJzQ29uZmlnO1xuICAgICAgdGhpcy5fcXVlcnlTdHJpbmdzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5xdWVyeVN0cmluZ3NDb25maWc7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19icm90bGkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9hY2NlcHRfZW5jb2RpbmdfYnJvdGxpJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkoKSB7XG4gICAgdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdCcm90bGkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nQnJvdGxpO1xuICB9XG5cbiAgLy8gZW5hYmxlX2FjY2VwdF9lbmNvZGluZ19nemlwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUFjY2VwdEVuY29kaW5nR3ppcD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9hY2NlcHRfZW5jb2RpbmdfZ3ppcCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUFjY2VwdEVuY29kaW5nR3ppcCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwKCkge1xuICAgIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nR3ppcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlQWNjZXB0RW5jb2RpbmdHemlwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUFjY2VwdEVuY29kaW5nR3ppcDtcbiAgfVxuXG4gIC8vIGNvb2tpZXNfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Nvb2tpZXNDb25maWcgPSBuZXcgQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29va2llc19jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29va2llc0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29va2llc0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0Q29va2llc0NvbmZpZyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbkNvb2tpZXNDb25maWcpIHtcbiAgICB0aGlzLl9jb29raWVzQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29va2llc0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb29raWVzQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBoZWFkZXJzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9oZWFkZXJzQ29uZmlnID0gbmV3IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImhlYWRlcnNfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGhlYWRlcnNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnNDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dEhlYWRlcnNDb25maWcodmFsdWU6IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5IZWFkZXJzQ29uZmlnKSB7XG4gICAgdGhpcy5faGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWRlcnNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcXVlcnlfc3RyaW5nc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcXVlcnlTdHJpbmdzQ29uZmlnID0gbmV3IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5RdWVyeVN0cmluZ3NDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicXVlcnlfc3RyaW5nc19jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVN0cmluZ3NDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dFF1ZXJ5U3RyaW5nc0NvbmZpZyh2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpblF1ZXJ5U3RyaW5nc0NvbmZpZykge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5nc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nc0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVN0cmluZ3NDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250Q2FjaGVQb2xpY3kgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY2xvdWRmcm9udF9jYWNoZV9wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ2xvdWRmcm9udENhY2hlUG9saWN5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRmcm9udF9jYWNoZV9wb2xpY3knLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY29tbWVudCA9IGNvbmZpZy5jb21tZW50O1xuICAgIHRoaXMuX2RlZmF1bHRUdGwgPSBjb25maWcuZGVmYXVsdFR0bDtcbiAgICB0aGlzLl9tYXhUdGwgPSBjb25maWcubWF4VHRsO1xuICAgIHRoaXMuX21pblR0bCA9IGNvbmZpZy5taW5UdGw7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjb21tZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbW1lbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21tZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21tZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tbWVudCgpIHtcbiAgICB0aGlzLl9jb21tZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1lbnQ7XG4gIH1cblxuICAvLyBkZWZhdWx0X3R0bCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0VHRsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkZWZhdWx0VHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF90dGwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRUdGwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlZmF1bHRUdGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0VHRsKCkge1xuICAgIHRoaXMuX2RlZmF1bHRUdGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRUdGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFR0bDtcbiAgfVxuXG4gIC8vIGV0YWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBldGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXRhZycpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1heF90dGwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4VHRsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhUdGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfdHRsJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhUdGwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heFR0bCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFR0bCgpIHtcbiAgICB0aGlzLl9tYXhUdGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFR0bElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhUdGw7XG4gIH1cblxuICAvLyBtaW5fdHRsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pblR0bD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluVHRsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3R0bCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluVHRsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5UdGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5UdGwoKSB7XG4gICAgdGhpcy5fbWluVHRsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5UdGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluVHRsO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwYXJhbWV0ZXJzX2luX2NhY2hlX2tleV9hbmRfZm9yd2FyZGVkX3RvX29yaWdpbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luID0gbmV3IENsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGFyYW1ldGVyc19pbl9jYWNoZV9rZXlfYW5kX2ZvcndhcmRlZF90b19vcmlnaW5cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbjtcbiAgfVxuICBwdWJsaWMgcHV0UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbih2YWx1ZTogQ2xvdWRmcm9udENhY2hlUG9saWN5UGFyYW1ldGVyc0luQ2FjaGVLZXlBbmRGb3J3YXJkZWRUb09yaWdpbikge1xuICAgIHRoaXMuX3BhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW4uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY29tbWVudCksXG4gICAgICBkZWZhdWx0X3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdFR0bCksXG4gICAgICBtYXhfdHRsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhUdGwpLFxuICAgICAgbWluX3R0bDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluVHRsKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcGFyYW1ldGVyc19pbl9jYWNoZV9rZXlfYW5kX2ZvcndhcmRlZF90b19vcmlnaW46IGNsb3VkZnJvbnRDYWNoZVBvbGljeVBhcmFtZXRlcnNJbkNhY2hlS2V5QW5kRm9yd2FyZGVkVG9PcmlnaW5Ub1RlcnJhZm9ybSh0aGlzLl9wYXJhbWV0ZXJzSW5DYWNoZUtleUFuZEZvcndhcmRlZFRvT3JpZ2luLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==