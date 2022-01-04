"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudfrontResponseHeadersPolicy = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform = exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference = exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform = exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference = exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform = exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform = exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference = exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference[_a] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference[_b] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference[_c] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct) {
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
exports.cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform = cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
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
exports.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference = CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference[_d] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_control_allow_credentials: cdktf.booleanToTerraform(struct.accessControlAllowCredentials),
        access_control_max_age_sec: cdktf.numberToTerraform(struct.accessControlMaxAgeSec),
        origin_override: cdktf.booleanToTerraform(struct.originOverride),
        access_control_allow_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct.accessControlAllowHeaders),
        access_control_allow_methods: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct.accessControlAllowMethods),
        access_control_allow_origins: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct.accessControlAllowOrigins),
        access_control_expose_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct.accessControlExposeHeaders),
    };
}
exports.cloudfrontResponseHeadersPolicyCorsConfigToTerraform = cloudfrontResponseHeadersPolicyCorsConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // access_control_allow_headers - computed: false, optional: false, required: true
        this._accessControlAllowHeaders = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference(this, "access_control_allow_headers", true);
        // access_control_allow_methods - computed: false, optional: false, required: true
        this._accessControlAllowMethods = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference(this, "access_control_allow_methods", true);
        // access_control_allow_origins - computed: false, optional: false, required: true
        this._accessControlAllowOrigins = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference(this, "access_control_allow_origins", true);
        // access_control_expose_headers - computed: false, optional: true, required: false
        this._accessControlExposeHeaders = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference(this, "access_control_expose_headers", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _q, _r, _s, _t, _u, _v, _w, _x;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessControlAllowCredentials) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
        }
        if (this._accessControlMaxAgeSec) {
            hasAnyValues = true;
            internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
        }
        if (this._originOverride) {
            hasAnyValues = true;
            internalValueResult.originOverride = this._originOverride;
        }
        if ((_q = this._accessControlAllowHeaders) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowHeaders = (_r = this._accessControlAllowHeaders) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        if ((_s = this._accessControlAllowMethods) === null || _s === void 0 ? void 0 : _s.internalValue) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowMethods = (_t = this._accessControlAllowMethods) === null || _t === void 0 ? void 0 : _t.internalValue;
        }
        if ((_u = this._accessControlAllowOrigins) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowOrigins = (_v = this._accessControlAllowOrigins) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        if ((_w = this._accessControlExposeHeaders) === null || _w === void 0 ? void 0 : _w.internalValue) {
            hasAnyValues = true;
            internalValueResult.accessControlExposeHeaders = (_x = this._accessControlExposeHeaders) === null || _x === void 0 ? void 0 : _x.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessControlAllowCredentials = undefined;
            this._accessControlMaxAgeSec = undefined;
            this._originOverride = undefined;
            this._accessControlAllowHeaders.internalValue = undefined;
            this._accessControlAllowMethods.internalValue = undefined;
            this._accessControlAllowOrigins.internalValue = undefined;
            this._accessControlExposeHeaders.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessControlAllowCredentials = value.accessControlAllowCredentials;
            this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
            this._originOverride = value.originOverride;
            this._accessControlAllowHeaders.internalValue = value.accessControlAllowHeaders;
            this._accessControlAllowMethods.internalValue = value.accessControlAllowMethods;
            this._accessControlAllowOrigins.internalValue = value.accessControlAllowOrigins;
            this._accessControlExposeHeaders.internalValue = value.accessControlExposeHeaders;
        }
    }
    /**
     * @stability stable
     */
    get accessControlAllowCredentials() {
        return this.getBooleanAttribute('access_control_allow_credentials');
    }
    /**
     * @stability stable
     */
    set accessControlAllowCredentials(value) {
        this._accessControlAllowCredentials = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessControlAllowCredentialsInput() {
        return this._accessControlAllowCredentials;
    }
    /**
     * @stability stable
     */
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    /**
     * @stability stable
     */
    set accessControlMaxAgeSec(value) {
        this._accessControlMaxAgeSec = value;
    }
    /**
     * @stability stable
     */
    resetAccessControlMaxAgeSec() {
        this._accessControlMaxAgeSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessControlMaxAgeSecInput() {
        return this._accessControlMaxAgeSec;
    }
    /**
     * @stability stable
     */
    get originOverride() {
        return this.getBooleanAttribute('origin_override');
    }
    /**
     * @stability stable
     */
    set originOverride(value) {
        this._originOverride = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get originOverrideInput() {
        return this._originOverride;
    }
    /**
     * @stability stable
     */
    get accessControlAllowHeaders() {
        return this._accessControlAllowHeaders;
    }
    /**
     * @stability stable
     */
    putAccessControlAllowHeaders(value) {
        this._accessControlAllowHeaders.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessControlAllowHeadersInput() {
        return this._accessControlAllowHeaders.internalValue;
    }
    /**
     * @stability stable
     */
    get accessControlAllowMethods() {
        return this._accessControlAllowMethods;
    }
    /**
     * @stability stable
     */
    putAccessControlAllowMethods(value) {
        this._accessControlAllowMethods.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessControlAllowMethodsInput() {
        return this._accessControlAllowMethods.internalValue;
    }
    /**
     * @stability stable
     */
    get accessControlAllowOrigins() {
        return this._accessControlAllowOrigins;
    }
    /**
     * @stability stable
     */
    putAccessControlAllowOrigins(value) {
        this._accessControlAllowOrigins.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessControlAllowOriginsInput() {
        return this._accessControlAllowOrigins.internalValue;
    }
    /**
     * @stability stable
     */
    get accessControlExposeHeaders() {
        return this._accessControlExposeHeaders;
    }
    /**
     * @stability stable
     */
    putAccessControlExposeHeaders(value) {
        this._accessControlExposeHeaders.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAccessControlExposeHeaders() {
        this._accessControlExposeHeaders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessControlExposeHeadersInput() {
        return this._accessControlExposeHeaders.internalValue;
    }
}
exports.CloudfrontResponseHeadersPolicyCorsConfigOutputReference = CloudfrontResponseHeadersPolicyCorsConfigOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCorsConfigOutputReference[_e] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicyCorsConfigOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header: cdktf.stringToTerraform(struct.header),
        override: cdktf.booleanToTerraform(struct.override),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform = cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform;
function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        items: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform)(struct.items),
    };
}
exports.cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform = cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
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
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('items');
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
exports.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference = CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference[_f] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_security_policy: cdktf.stringToTerraform(struct.contentSecurityPolicy),
        override: cdktf.booleanToTerraform(struct.override),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._contentSecurityPolicy) {
            hasAnyValues = true;
            internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
        }
        if (this._override) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentSecurityPolicy = undefined;
            this._override = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentSecurityPolicy = value.contentSecurityPolicy;
            this._override = value.override;
        }
    }
    /**
     * @stability stable
     */
    get contentSecurityPolicy() {
        return this.getStringAttribute('content_security_policy');
    }
    /**
     * @stability stable
     */
    set contentSecurityPolicy(value) {
        this._contentSecurityPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentSecurityPolicyInput() {
        return this._contentSecurityPolicy;
    }
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    /**
     * @stability stable
     */
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideInput() {
        return this._override;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference[_g] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        override: cdktf.booleanToTerraform(struct.override),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._override) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._override = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._override = value.override;
        }
    }
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    /**
     * @stability stable
     */
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideInput() {
        return this._override;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference[_h] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        frame_option: cdktf.stringToTerraform(struct.frameOption),
        override: cdktf.booleanToTerraform(struct.override),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._frameOption) {
            hasAnyValues = true;
            internalValueResult.frameOption = this._frameOption;
        }
        if (this._override) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._frameOption = undefined;
            this._override = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._frameOption = value.frameOption;
            this._override = value.override;
        }
    }
    /**
     * @stability stable
     */
    get frameOption() {
        return this.getStringAttribute('frame_option');
    }
    /**
     * @stability stable
     */
    set frameOption(value) {
        this._frameOption = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get frameOptionInput() {
        return this._frameOption;
    }
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    /**
     * @stability stable
     */
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideInput() {
        return this._override;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference[_j] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        override: cdktf.booleanToTerraform(struct.override),
        referrer_policy: cdktf.stringToTerraform(struct.referrerPolicy),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._override) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._referrerPolicy) {
            hasAnyValues = true;
            internalValueResult.referrerPolicy = this._referrerPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._override = undefined;
            this._referrerPolicy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._override = value.override;
            this._referrerPolicy = value.referrerPolicy;
        }
    }
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    /**
     * @stability stable
     */
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideInput() {
        return this._override;
    }
    /**
     * @stability stable
     */
    get referrerPolicy() {
        return this.getStringAttribute('referrer_policy');
    }
    /**
     * @stability stable
     */
    set referrerPolicy(value) {
        this._referrerPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get referrerPolicyInput() {
        return this._referrerPolicy;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference[_k] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_control_max_age_sec: cdktf.numberToTerraform(struct.accessControlMaxAgeSec),
        include_subdomains: cdktf.booleanToTerraform(struct.includeSubdomains),
        override: cdktf.booleanToTerraform(struct.override),
        preload: cdktf.booleanToTerraform(struct.preload),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
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
        if (this._accessControlMaxAgeSec) {
            hasAnyValues = true;
            internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
        }
        if (this._includeSubdomains) {
            hasAnyValues = true;
            internalValueResult.includeSubdomains = this._includeSubdomains;
        }
        if (this._override) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._preload) {
            hasAnyValues = true;
            internalValueResult.preload = this._preload;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessControlMaxAgeSec = undefined;
            this._includeSubdomains = undefined;
            this._override = undefined;
            this._preload = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
            this._includeSubdomains = value.includeSubdomains;
            this._override = value.override;
            this._preload = value.preload;
        }
    }
    /**
     * @stability stable
     */
    get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    /**
     * @stability stable
     */
    set accessControlMaxAgeSec(value) {
        this._accessControlMaxAgeSec = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessControlMaxAgeSecInput() {
        return this._accessControlMaxAgeSec;
    }
    /**
     * @stability stable
     */
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    /**
     * @stability stable
     */
    set includeSubdomains(value) {
        this._includeSubdomains = value;
    }
    /**
     * @stability stable
     */
    resetIncludeSubdomains() {
        this._includeSubdomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeSubdomainsInput() {
        return this._includeSubdomains;
    }
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    /**
     * @stability stable
     */
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideInput() {
        return this._override;
    }
    /**
     * @stability stable
     */
    get preload() {
        return this.getBooleanAttribute('preload');
    }
    /**
     * @stability stable
     */
    set preload(value) {
        this._preload = value;
    }
    /**
     * @stability stable
     */
    resetPreload() {
        this._preload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preloadInput() {
        return this._preload;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference;
_l = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference[_l] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode_block: cdktf.booleanToTerraform(struct.modeBlock),
        override: cdktf.booleanToTerraform(struct.override),
        protection: cdktf.booleanToTerraform(struct.protection),
        report_uri: cdktf.stringToTerraform(struct.reportUri),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
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
        if (this._modeBlock) {
            hasAnyValues = true;
            internalValueResult.modeBlock = this._modeBlock;
        }
        if (this._override) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._protection) {
            hasAnyValues = true;
            internalValueResult.protection = this._protection;
        }
        if (this._reportUri) {
            hasAnyValues = true;
            internalValueResult.reportUri = this._reportUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._modeBlock = undefined;
            this._override = undefined;
            this._protection = undefined;
            this._reportUri = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._modeBlock = value.modeBlock;
            this._override = value.override;
            this._protection = value.protection;
            this._reportUri = value.reportUri;
        }
    }
    /**
     * @stability stable
     */
    get modeBlock() {
        return this.getBooleanAttribute('mode_block');
    }
    /**
     * @stability stable
     */
    set modeBlock(value) {
        this._modeBlock = value;
    }
    /**
     * @stability stable
     */
    resetModeBlock() {
        this._modeBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modeBlockInput() {
        return this._modeBlock;
    }
    /**
     * @stability stable
     */
    get override() {
        return this.getBooleanAttribute('override');
    }
    /**
     * @stability stable
     */
    set override(value) {
        this._override = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideInput() {
        return this._override;
    }
    /**
     * @stability stable
     */
    get protection() {
        return this.getBooleanAttribute('protection');
    }
    /**
     * @stability stable
     */
    set protection(value) {
        this._protection = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protectionInput() {
        return this._protection;
    }
    /**
     * @stability stable
     */
    get reportUri() {
        return this.getStringAttribute('report_uri');
    }
    /**
     * @stability stable
     */
    set reportUri(value) {
        this._reportUri = value;
    }
    /**
     * @stability stable
     */
    resetReportUri() {
        this._reportUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportUriInput() {
        return this._reportUri;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference;
_m = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference[_m] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference", version: "3.0.1" };
function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_security_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct.contentSecurityPolicy),
        content_type_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct.contentTypeOptions),
        frame_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct.frameOptions),
        referrer_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct.referrerPolicy),
        strict_transport_security: cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct.strictTransportSecurity),
        xss_protection: cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct.xssProtection),
    };
}
exports.cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform = cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform;
/**
 * @stability stable
 */
class CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // content_security_policy - computed: false, optional: true, required: false
        this._contentSecurityPolicy = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference(this, "content_security_policy", true);
        // content_type_options - computed: false, optional: true, required: false
        this._contentTypeOptions = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference(this, "content_type_options", true);
        // frame_options - computed: false, optional: true, required: false
        this._frameOptions = new CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference(this, "frame_options", true);
        // referrer_policy - computed: false, optional: true, required: false
        this._referrerPolicy = new CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference(this, "referrer_policy", true);
        // strict_transport_security - computed: false, optional: true, required: false
        this._strictTransportSecurity = new CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference(this, "strict_transport_security", true);
        // xss_protection - computed: false, optional: true, required: false
        this._xssProtection = new CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference(this, "xss_protection", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_q = this._contentSecurityPolicy) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.contentSecurityPolicy = (_r = this._contentSecurityPolicy) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        if ((_s = this._contentTypeOptions) === null || _s === void 0 ? void 0 : _s.internalValue) {
            hasAnyValues = true;
            internalValueResult.contentTypeOptions = (_t = this._contentTypeOptions) === null || _t === void 0 ? void 0 : _t.internalValue;
        }
        if ((_u = this._frameOptions) === null || _u === void 0 ? void 0 : _u.internalValue) {
            hasAnyValues = true;
            internalValueResult.frameOptions = (_v = this._frameOptions) === null || _v === void 0 ? void 0 : _v.internalValue;
        }
        if ((_w = this._referrerPolicy) === null || _w === void 0 ? void 0 : _w.internalValue) {
            hasAnyValues = true;
            internalValueResult.referrerPolicy = (_x = this._referrerPolicy) === null || _x === void 0 ? void 0 : _x.internalValue;
        }
        if ((_y = this._strictTransportSecurity) === null || _y === void 0 ? void 0 : _y.internalValue) {
            hasAnyValues = true;
            internalValueResult.strictTransportSecurity = (_z = this._strictTransportSecurity) === null || _z === void 0 ? void 0 : _z.internalValue;
        }
        if ((_0 = this._xssProtection) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.xssProtection = (_1 = this._xssProtection) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentSecurityPolicy.internalValue = undefined;
            this._contentTypeOptions.internalValue = undefined;
            this._frameOptions.internalValue = undefined;
            this._referrerPolicy.internalValue = undefined;
            this._strictTransportSecurity.internalValue = undefined;
            this._xssProtection.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentSecurityPolicy.internalValue = value.contentSecurityPolicy;
            this._contentTypeOptions.internalValue = value.contentTypeOptions;
            this._frameOptions.internalValue = value.frameOptions;
            this._referrerPolicy.internalValue = value.referrerPolicy;
            this._strictTransportSecurity.internalValue = value.strictTransportSecurity;
            this._xssProtection.internalValue = value.xssProtection;
        }
    }
    /**
     * @stability stable
     */
    get contentSecurityPolicy() {
        return this._contentSecurityPolicy;
    }
    /**
     * @stability stable
     */
    putContentSecurityPolicy(value) {
        this._contentSecurityPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetContentSecurityPolicy() {
        this._contentSecurityPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentSecurityPolicyInput() {
        return this._contentSecurityPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get contentTypeOptions() {
        return this._contentTypeOptions;
    }
    /**
     * @stability stable
     */
    putContentTypeOptions(value) {
        this._contentTypeOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetContentTypeOptions() {
        this._contentTypeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentTypeOptionsInput() {
        return this._contentTypeOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get frameOptions() {
        return this._frameOptions;
    }
    /**
     * @stability stable
     */
    putFrameOptions(value) {
        this._frameOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFrameOptions() {
        this._frameOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get frameOptionsInput() {
        return this._frameOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get referrerPolicy() {
        return this._referrerPolicy;
    }
    /**
     * @stability stable
     */
    putReferrerPolicy(value) {
        this._referrerPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetReferrerPolicy() {
        this._referrerPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get referrerPolicyInput() {
        return this._referrerPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get strictTransportSecurity() {
        return this._strictTransportSecurity;
    }
    /**
     * @stability stable
     */
    putStrictTransportSecurity(value) {
        this._strictTransportSecurity.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetStrictTransportSecurity() {
        this._strictTransportSecurity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get strictTransportSecurityInput() {
        return this._strictTransportSecurity.internalValue;
    }
    /**
     * @stability stable
     */
    get xssProtection() {
        return this._xssProtection;
    }
    /**
     * @stability stable
     */
    putXssProtection(value) {
        this._xssProtection.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetXssProtection() {
        this._xssProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get xssProtectionInput() {
        return this._xssProtection.internalValue;
    }
}
exports.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference = CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference;
_o = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference[_o] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}.
 *
 * @stability stable
 */
class CloudfrontResponseHeadersPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
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
        // cors_config - computed: false, optional: true, required: false
        this._corsConfig = new CloudfrontResponseHeadersPolicyCorsConfigOutputReference(this, "cors_config", true);
        // custom_headers_config - computed: false, optional: true, required: false
        this._customHeadersConfig = new CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference(this, "custom_headers_config", true);
        // security_headers_config - computed: false, optional: true, required: false
        this._securityHeadersConfig = new CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference(this, "security_headers_config", true);
        this._comment = config.comment;
        this._etag = config.etag;
        this._name = config.name;
        this._corsConfig.internalValue = config.corsConfig;
        this._customHeadersConfig.internalValue = config.customHeadersConfig;
        this._securityHeadersConfig.internalValue = config.securityHeadersConfig;
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
    get etag() {
        return this.getStringAttribute('etag');
    }
    /**
     * @stability stable
     */
    set etag(value) {
        this._etag = value;
    }
    /**
     * @stability stable
     */
    resetEtag() {
        this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get etagInput() {
        return this._etag;
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
    get corsConfig() {
        return this._corsConfig;
    }
    /**
     * @stability stable
     */
    putCorsConfig(value) {
        this._corsConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCorsConfig() {
        this._corsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get corsConfigInput() {
        return this._corsConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get customHeadersConfig() {
        return this._customHeadersConfig;
    }
    /**
     * @stability stable
     */
    putCustomHeadersConfig(value) {
        this._customHeadersConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCustomHeadersConfig() {
        this._customHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customHeadersConfigInput() {
        return this._customHeadersConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get securityHeadersConfig() {
        return this._securityHeadersConfig;
    }
    /**
     * @stability stable
     */
    putSecurityHeadersConfig(value) {
        this._securityHeadersConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSecurityHeadersConfig() {
        this._securityHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityHeadersConfigInput() {
        return this._securityHeadersConfig.internalValue;
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
            etag: cdktf.stringToTerraform(this._etag),
            name: cdktf.stringToTerraform(this._name),
            cors_config: cloudfrontResponseHeadersPolicyCorsConfigToTerraform(this._corsConfig.internalValue),
            custom_headers_config: cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(this._customHeadersConfig.internalValue),
            security_headers_config: cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(this._securityHeadersConfig.internalValue),
        };
    }
}
exports.CloudfrontResponseHeadersPolicy = CloudfrontResponseHeadersPolicy;
_p = JSII_RTTI_SYMBOL_1;
CloudfrontResponseHeadersPolicy[_p] = { fqn: "@cdktf/provider-aws.cloudfront.CloudfrontResponseHeadersPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudfrontResponseHeadersPolicy.tfResourceType = "aws_cloudfront_response_headers_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRmcm9udC1yZXNwb25zZS1oZWFkZXJzLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZGZyb250L2Nsb3VkZnJvbnQtcmVzcG9uc2UtaGVhZGVycy1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFzQi9CLFNBQWdCLDZFQUE2RSxDQUFDLE1BQStKO0lBQzNQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQVJELHNLQVFDOzs7O0FBRUQsTUFBYSxpRkFBa0YsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl4SCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDekM7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LENBQUMsUUFBUSxDQUFDO1lBQy9DLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLG9EQUFvRCxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQ2pHLHFCQUFxQixFQUFFLDZEQUE2RCxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7WUFDN0gsdUJBQXVCLEVBQUUsK0RBQStELENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztTQUNwSSxDQUFDO0lBQ0osQ0FBQzs7QUFsSkgsMEVBbUpDOzs7QUFqSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw4Q0FBYyxHQUFXLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21tZW50Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBldGFnPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29yc0NvbmZpZz86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUhlYWRlcnNDb25maWc/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUhlYWRlcnNDb25maWc/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGl0ZW1zPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pdGVtcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93SGVhZGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsdWUuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaXRlbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXRlbXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXRlbXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGl0ZW1zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGl0ZW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXRlbXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc091dHB1dFJlZmVyZW5jZSB8IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLml0ZW1zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faXRlbXMgPSB2YWx1ZS5pdGVtcztcbiAgICB9XG4gIH1cblxuICAvLyBpdGVtcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pdGVtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpdGVtcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXRlbXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXRlbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpdGVtcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pdGVtcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaXRlbXMgPSB0aGlzLl9pdGVtcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2l0ZW1zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJyk7XG4gIH1cbiAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpdGVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpdGVtcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pdGVtcyA9IHRoaXMuX2l0ZW1zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2l0ZW1zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2l0ZW1zJyk7XG4gIH1cbiAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpdGVtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHM6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NDb250cm9sTWF4QWdlU2VjPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JpZ2luT3ZlcnJpZGU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWNjZXNzQ29udHJvbEFsbG93TWV0aG9kczogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnM6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycz86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3NfY29udHJvbF9hbGxvd19jcmVkZW50aWFsczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHMpLFxuICAgIGFjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMpLFxuICAgIG9yaWdpbl9vdmVycmlkZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3JpZ2luT3ZlcnJpZGUpLFxuICAgIGFjY2Vzc19jb250cm9sX2FsbG93X2hlYWRlcnM6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93SGVhZGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycyksXG4gICAgYWNjZXNzX2NvbnRyb2xfYWxsb3dfbWV0aG9kczogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzKSxcbiAgICBhY2Nlc3NfY29udHJvbF9hbGxvd19vcmlnaW5zOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMpLFxuICAgIGFjY2Vzc19jb250cm9sX2V4cG9zZV9oZWFkZXJzOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHMgPSB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3JpZ2luT3ZlcnJpZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9yaWdpbk92ZXJyaWRlID0gdGhpcy5fb3JpZ2luT3ZlcnJpZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzID0gdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMgPSB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyA9IHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMgPSB0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93Q3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3JpZ2luT3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyA9IHZhbHVlLmFjY2Vzc0NvbnRyb2xBbGxvd0NyZWRlbnRpYWxzO1xuICAgICAgdGhpcy5fYWNjZXNzQ29udHJvbE1heEFnZVNlYyA9IHZhbHVlLmFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWM7XG4gICAgICB0aGlzLl9vcmlnaW5PdmVycmlkZSA9IHZhbHVlLm9yaWdpbk92ZXJyaWRlO1xuICAgICAgdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycztcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHM7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zO1xuICAgICAgdGhpcy5fYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY2Vzc19jb250cm9sX2FsbG93X2NyZWRlbnRpYWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjY2Vzc0NvbnRyb2xBbGxvd0NyZWRlbnRpYWxzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhY2Nlc3NfY29udHJvbF9hbGxvd19jcmVkZW50aWFscycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc0NvbnRyb2xBbGxvd0NyZWRlbnRpYWxzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscztcbiAgfVxuXG4gIC8vIGFjY2Vzc19jb250cm9sX21heF9hZ2Vfc2VjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhY2Nlc3NfY29udHJvbF9tYXhfYWdlX3NlYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjZXNzQ29udHJvbE1heEFnZVNlYyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWNjZXNzQ29udHJvbE1heEFnZVNlYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMoKSB7XG4gICAgdGhpcy5fYWNjZXNzQ29udHJvbE1heEFnZVNlYyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbE1heEFnZVNlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjO1xuICB9XG5cbiAgLy8gb3JpZ2luX292ZXJyaWRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX29yaWdpbk92ZXJyaWRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBvcmlnaW5PdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdvcmlnaW5fb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBvcmlnaW5PdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3JpZ2luT3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3JpZ2luT3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZ2luT3ZlcnJpZGU7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9hbGxvd19oZWFkZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnMgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFjY2Vzc19jb250cm9sX2FsbG93X2hlYWRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycztcbiAgfVxuICBwdWJsaWMgcHV0QWNjZXNzQ29udHJvbEFsbG93SGVhZGVycyh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdBY2Nlc3NDb250cm9sQWxsb3dIZWFkZXJzKSB7XG4gICAgdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xBbGxvd0hlYWRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQ29udHJvbEFsbG93SGVhZGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYWNjZXNzX2NvbnRyb2xfYWxsb3dfbWV0aG9kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhY2Nlc3NfY29udHJvbF9hbGxvd19tZXRob2RzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHM7XG4gIH1cbiAgcHVibGljIHB1dEFjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHModmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEFsbG93TWV0aG9kcykge1xuICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dNZXRob2RzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0NvbnRyb2xBbGxvd01ldGhvZHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGFjY2Vzc19jb250cm9sX2FsbG93X29yaWdpbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWNjZXNzQ29udHJvbEFsbG93T3JpZ2lucyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNjZXNzX2NvbnRyb2xfYWxsb3dfb3JpZ2luc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zO1xuICB9XG4gIHB1YmxpYyBwdXRBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbnMpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEFsbG93T3JpZ2luc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sQWxsb3dPcmlnaW5zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9leHBvc2VfaGVhZGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ0FjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFjY2Vzc19jb250cm9sX2V4cG9zZV9oZWFkZXJzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjY2Vzc0NvbnRyb2xFeHBvc2VIZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycztcbiAgfVxuICBwdWJsaWMgcHV0QWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnModmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDb3JzQ29uZmlnQWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMpIHtcbiAgICB0aGlzLl9hY2Nlc3NDb250cm9sRXhwb3NlSGVhZGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMoKSB7XG4gICAgdGhpcy5fYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQ29udHJvbEV4cG9zZUhlYWRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWRlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG92ZXJyaWRlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnSXRlbXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGVhZGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlciksXG4gICAgb3ZlcnJpZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXRlbXM/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogY2RrdGYubGlzdE1hcHBlcihjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ0l0ZW1zVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXRlbXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faXRlbXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lml0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2l0ZW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGl0ZW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2l0ZW1zPzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc1tdOyBcbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaXRlbXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUN1c3RvbUhlYWRlcnNDb25maWdJdGVtc1tdKSB7XG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXRlbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFNlY3VyaXR5UG9saWN5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3ZlcnJpZGU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnRfc2VjdXJpdHlfcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRTZWN1cml0eVBvbGljeSksXG4gICAgb3ZlcnJpZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRlbnRTZWN1cml0eVBvbGljeSA9IHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdmVycmlkZSA9IHRoaXMuX292ZXJyaWRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3kgPSB2YWx1ZS5jb250ZW50U2VjdXJpdHlQb2xpY3k7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlLm92ZXJyaWRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRlbnRfc2VjdXJpdHlfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbnRlbnRTZWN1cml0eVBvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29udGVudFNlY3VyaXR5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGVudF9zZWN1cml0eV9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRTZWN1cml0eVBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRTZWN1cml0eVBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3k7XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vdmVycmlkZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBvdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3ZlcnJpZGU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG92ZXJyaWRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5vdmVycmlkZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb3ZlcnJpZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm92ZXJyaWRlID0gdGhpcy5fb3ZlcnJpZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWUub3ZlcnJpZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3ZlcnJpZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3ZlcnJpZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnJhbWVPcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdmVycmlkZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZnJhbWVfb3B0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZyYW1lT3B0aW9uKSxcbiAgICBvdmVycmlkZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ZyYW1lT3B0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mcmFtZU9wdGlvbiA9IHRoaXMuX2ZyYW1lT3B0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3ZlcnJpZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm92ZXJyaWRlID0gdGhpcy5fb3ZlcnJpZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZnJhbWVPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZnJhbWVPcHRpb24gPSB2YWx1ZS5mcmFtZU9wdGlvbjtcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWUub3ZlcnJpZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gZnJhbWVfb3B0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZyYW1lT3B0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmcmFtZU9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZyYW1lX29wdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJhbWVPcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZyYW1lT3B0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZyYW1lT3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lT3B0aW9uO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3ZlcnJpZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3ZlcnJpZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3ZlcnJpZGU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZmVycmVyUG9saWN5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvdmVycmlkZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEub3ZlcnJpZGUpLFxuICAgIHJlZmVycmVyX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWZlcnJlclBvbGljeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdmVycmlkZSA9IHRoaXMuX292ZXJyaWRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVmZXJyZXJQb2xpY3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZmVycmVyUG9saWN5ID0gdGhpcy5fcmVmZXJyZXJQb2xpY3k7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZmVycmVyUG9saWN5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlLm92ZXJyaWRlO1xuICAgICAgdGhpcy5fcmVmZXJyZXJQb2xpY3kgPSB2YWx1ZS5yZWZlcnJlclBvbGljeTtcbiAgICB9XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vdmVycmlkZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBvdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGU7XG4gIH1cblxuICAvLyByZWZlcnJlcl9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVmZXJyZXJQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlZmVycmVyUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVmZXJyZXJfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZWZlcnJlclBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVmZXJyZXJQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVmZXJyZXJQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXJQb2xpY3k7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NDb250cm9sTWF4QWdlU2VjOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlU3ViZG9tYWlucz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdmVycmlkZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVsb2FkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYWNjZXNzQ29udHJvbE1heEFnZVNlYyksXG4gICAgaW5jbHVkZV9zdWJkb21haW5zOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlU3ViZG9tYWlucyksXG4gICAgb3ZlcnJpZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgICBwcmVsb2FkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVsb2FkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdTdHJpY3RUcmFuc3BvcnRTZWN1cml0eSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjZXNzQ29udHJvbE1heEFnZVNlYykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzQ29udHJvbE1heEFnZVNlYyA9IHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlU3ViZG9tYWlucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVN1YmRvbWFpbnMgPSB0aGlzLl9pbmNsdWRlU3ViZG9tYWlucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdmVycmlkZSA9IHRoaXMuX292ZXJyaWRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlbG9hZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlbG9hZCA9IHRoaXMuX3ByZWxvYWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVN1YmRvbWFpbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWxvYWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB2YWx1ZS5hY2Nlc3NDb250cm9sTWF4QWdlU2VjO1xuICAgICAgdGhpcy5faW5jbHVkZVN1YmRvbWFpbnMgPSB2YWx1ZS5pbmNsdWRlU3ViZG9tYWlucztcbiAgICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWUub3ZlcnJpZGU7XG4gICAgICB0aGlzLl9wcmVsb2FkID0gdmFsdWUucHJlbG9hZDtcbiAgICB9XG4gIH1cblxuICAvLyBhY2Nlc3NfY29udHJvbF9tYXhfYWdlX3NlYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY2Nlc3NDb250cm9sTWF4QWdlU2VjPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBhY2Nlc3NDb250cm9sTWF4QWdlU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYWNjZXNzX2NvbnRyb2xfbWF4X2FnZV9zZWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc0NvbnRyb2xNYXhBZ2VTZWModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2FjY2Vzc0NvbnRyb2xNYXhBZ2VTZWMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzQ29udHJvbE1heEFnZVNlY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2Nlc3NDb250cm9sTWF4QWdlU2VjO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9zdWJkb21haW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVTdWJkb21haW5zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlU3ViZG9tYWlucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3N1YmRvbWFpbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlU3ViZG9tYWlucyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVN1YmRvbWFpbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlU3ViZG9tYWlucygpIHtcbiAgICB0aGlzLl9pbmNsdWRlU3ViZG9tYWlucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVN1YmRvbWFpbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVN1YmRvbWFpbnM7XG4gIH1cblxuICAvLyBvdmVycmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vdmVycmlkZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBvdmVycmlkZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGU7XG4gIH1cblxuICAvLyBwcmVsb2FkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWxvYWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHByZWxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHJlbG9hZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWxvYWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3ByZWxvYWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVsb2FkKCkge1xuICAgIHRoaXMuX3ByZWxvYWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWxvYWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlbG9hZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vZGVCbG9jaz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdmVycmlkZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90ZWN0aW9uOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcG9ydFVyaT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1hzc1Byb3RlY3Rpb25PdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vZGVfYmxvY2s6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGVCbG9jayksXG4gICAgb3ZlcnJpZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm92ZXJyaWRlKSxcbiAgICBwcm90ZWN0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wcm90ZWN0aW9uKSxcbiAgICByZXBvcnRfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcG9ydFVyaSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tb2RlQmxvY2spIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1vZGVCbG9jayA9IHRoaXMuX21vZGVCbG9jaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX292ZXJyaWRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdmVycmlkZSA9IHRoaXMuX292ZXJyaWRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvdGVjdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdGVjdGlvbiA9IHRoaXMuX3Byb3RlY3Rpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXBvcnRVcmkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcG9ydFVyaSA9IHRoaXMuX3JlcG9ydFVyaTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbW9kZUJsb2NrID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3ZlcnJpZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm90ZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVwb3J0VXJpID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tb2RlQmxvY2sgPSB2YWx1ZS5tb2RlQmxvY2s7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlLm92ZXJyaWRlO1xuICAgICAgdGhpcy5fcHJvdGVjdGlvbiA9IHZhbHVlLnByb3RlY3Rpb247XG4gICAgICB0aGlzLl9yZXBvcnRVcmkgPSB2YWx1ZS5yZXBvcnRVcmk7XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kZV9ibG9jayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tb2RlQmxvY2s/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG1vZGVCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdtb2RlX2Jsb2NrJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZUJsb2NrKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9tb2RlQmxvY2sgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb2RlQmxvY2soKSB7XG4gICAgdGhpcy5fbW9kZUJsb2NrID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb2RlQmxvY2tJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZUJsb2NrO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3ZlcnJpZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ292ZXJyaWRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3ZlcnJpZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX292ZXJyaWRlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG92ZXJyaWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJyaWRlO1xuICB9XG5cbiAgLy8gcHJvdGVjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm90ZWN0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwcm90ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Byb3RlY3Rpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90ZWN0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RlY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdGVjdGlvbjtcbiAgfVxuXG4gIC8vIHJlcG9ydF91cmkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwb3J0VXJpPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXBvcnRVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvcnRfdXJpJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvcnRVcmkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlcG9ydFVyaSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcG9ydFVyaSgpIHtcbiAgICB0aGlzLl9yZXBvcnRVcmkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9ydFVyaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBvcnRVcmk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFNlY3VyaXR5UG9saWN5PzogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHlwZU9wdGlvbnM/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFR5cGVPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZyYW1lT3B0aW9ucz86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdGcmFtZU9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVmZXJyZXJQb2xpY3k/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHk/OiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnU3RyaWN0VHJhbnNwb3J0U2VjdXJpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgeHNzUHJvdGVjdGlvbj86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGVudF9zZWN1cml0eV9wb2xpY3k6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRTZWN1cml0eVBvbGljeSksXG4gICAgY29udGVudF90eXBlX29wdGlvbnM6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlT3B0aW9ucyksXG4gICAgZnJhbWVfb3B0aW9uczogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuZnJhbWVPcHRpb25zKSxcbiAgICByZWZlcnJlcl9wb2xpY3k6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdSZWZlcnJlclBvbGljeVRvVGVycmFmb3JtKHN0cnVjdCEucmVmZXJyZXJQb2xpY3kpLFxuICAgIHN0cmljdF90cmFuc3BvcnRfc2VjdXJpdHk6IGNsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdTdHJpY3RUcmFuc3BvcnRTZWN1cml0eVRvVGVycmFmb3JtKHN0cnVjdCEuc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkpLFxuICAgIHhzc19wcm90ZWN0aW9uOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnWHNzUHJvdGVjdGlvblRvVGVycmFmb3JtKHN0cnVjdCEueHNzUHJvdGVjdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250ZW50U2VjdXJpdHlQb2xpY3kgPSB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3k/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250ZW50VHlwZU9wdGlvbnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbnRlbnRUeXBlT3B0aW9ucyA9IHRoaXMuX2NvbnRlbnRUeXBlT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZyYW1lT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZnJhbWVPcHRpb25zID0gdGhpcy5fZnJhbWVPcHRpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVmZXJyZXJQb2xpY3k/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZmVycmVyUG9saWN5ID0gdGhpcy5fcmVmZXJyZXJQb2xpY3k/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdHJpY3RUcmFuc3BvcnRTZWN1cml0eT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkgPSB0aGlzLl9zdHJpY3RUcmFuc3BvcnRTZWN1cml0eT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3hzc1Byb3RlY3Rpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lnhzc1Byb3RlY3Rpb24gPSB0aGlzLl94c3NQcm90ZWN0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29udGVudFR5cGVPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9mcmFtZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZmVycmVyUG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdHJpY3RUcmFuc3BvcnRTZWN1cml0eS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5feHNzUHJvdGVjdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvbnRlbnRTZWN1cml0eVBvbGljeTtcbiAgICAgIHRoaXMuX2NvbnRlbnRUeXBlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29udGVudFR5cGVPcHRpb25zO1xuICAgICAgdGhpcy5fZnJhbWVPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5mcmFtZU9wdGlvbnM7XG4gICAgICB0aGlzLl9yZWZlcnJlclBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVmZXJyZXJQb2xpY3k7XG4gICAgICB0aGlzLl9zdHJpY3RUcmFuc3BvcnRTZWN1cml0eS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHk7XG4gICAgICB0aGlzLl94c3NQcm90ZWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS54c3NQcm90ZWN0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRlbnRfc2VjdXJpdHlfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRTZWN1cml0eVBvbGljeSA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnQ29udGVudFNlY3VyaXR5UG9saWN5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvbnRlbnRTZWN1cml0eVBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudFNlY3VyaXR5UG9saWN5O1xuICB9XG4gIHB1YmxpYyBwdXRDb250ZW50U2VjdXJpdHlQb2xpY3kodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50U2VjdXJpdHlQb2xpY3kpIHtcbiAgICB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRTZWN1cml0eVBvbGljeSgpIHtcbiAgICB0aGlzLl9jb250ZW50U2VjdXJpdHlQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudFNlY3VyaXR5UG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRTZWN1cml0eVBvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gY29udGVudF90eXBlX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudFR5cGVPcHRpb25zID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdDb250ZW50VHlwZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29udGVudF90eXBlX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZU9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENvbnRlbnRUeXBlT3B0aW9ucyh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0NvbnRlbnRUeXBlT3B0aW9ucykge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudFR5cGVPcHRpb25zKCkge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50VHlwZU9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudFR5cGVPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBmcmFtZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZyYW1lT3B0aW9ucyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnRnJhbWVPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZyYW1lX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZnJhbWVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9mcmFtZU9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dEZyYW1lT3B0aW9ucyh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ0ZyYW1lT3B0aW9ucykge1xuICAgIHRoaXMuX2ZyYW1lT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RnJhbWVPcHRpb25zKCkge1xuICAgIHRoaXMuX2ZyYW1lT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmcmFtZU9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnJhbWVPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZWZlcnJlcl9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVmZXJyZXJQb2xpY3kgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1JlZmVycmVyUG9saWN5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlZmVycmVyX3BvbGljeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZWZlcnJlclBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXJQb2xpY3k7XG4gIH1cbiAgcHVibGljIHB1dFJlZmVycmVyUG9saWN5KHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnUmVmZXJyZXJQb2xpY3kpIHtcbiAgICB0aGlzLl9yZWZlcnJlclBvbGljeS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVmZXJyZXJQb2xpY3koKSB7XG4gICAgdGhpcy5fcmVmZXJyZXJQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVmZXJyZXJQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXJQb2xpY3kuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0cmljdF90cmFuc3BvcnRfc2VjdXJpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkgPSBuZXcgQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInN0cmljdF90cmFuc3BvcnRfc2VjdXJpdHlcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5O1xuICB9XG4gIHB1YmxpYyBwdXRTdHJpY3RUcmFuc3BvcnRTZWN1cml0eSh2YWx1ZTogQ2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1N0cmljdFRyYW5zcG9ydFNlY3VyaXR5KSB7XG4gICAgdGhpcy5fc3RyaWN0VHJhbnNwb3J0U2VjdXJpdHkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0cmljdFRyYW5zcG9ydFNlY3VyaXR5KCkge1xuICAgIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0cmljdFRyYW5zcG9ydFNlY3VyaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmljdFRyYW5zcG9ydFNlY3VyaXR5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB4c3NfcHJvdGVjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF94c3NQcm90ZWN0aW9uID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInhzc19wcm90ZWN0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHhzc1Byb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3hzc1Byb3RlY3Rpb247XG4gIH1cbiAgcHVibGljIHB1dFhzc1Byb3RlY3Rpb24odmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWdYc3NQcm90ZWN0aW9uKSB7XG4gICAgdGhpcy5feHNzUHJvdGVjdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0WHNzUHJvdGVjdGlvbigpIHtcbiAgICB0aGlzLl94c3NQcm90ZWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHhzc1Byb3RlY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5feHNzUHJvdGVjdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Nsb3VkZnJvbnRfcmVzcG9uc2VfaGVhZGVyc19wb2xpY3lcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRmcm9udF9yZXNwb25zZV9oZWFkZXJzX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb21tZW50ID0gY29uZmlnLmNvbW1lbnQ7XG4gICAgdGhpcy5fZXRhZyA9IGNvbmZpZy5ldGFnO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9jb3JzQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuY29yc0NvbmZpZztcbiAgICB0aGlzLl9jdXN0b21IZWFkZXJzQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuY3VzdG9tSGVhZGVyc0NvbmZpZztcbiAgICB0aGlzLl9zZWN1cml0eUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zZWN1cml0eUhlYWRlcnNDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNvbW1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tbWVudD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbW1lbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbW1lbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21tZW50KCkge1xuICAgIHRoaXMuX2NvbW1lbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbW1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbWVudDtcbiAgfVxuXG4gIC8vIGV0YWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ldGFnPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBldGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXRhZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXRhZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXRhZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV0YWcoKSB7XG4gICAgdGhpcy5fZXRhZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXRhZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ldGFnO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gY29yc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29yc0NvbmZpZyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb3JzX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb3JzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JzQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDb3JzQ29uZmlnKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q29yc0NvbmZpZykge1xuICAgIHRoaXMuX2NvcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcnNDb25maWcoKSB7XG4gICAgdGhpcy5fY29yc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3JzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcnNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9oZWFkZXJzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21IZWFkZXJzQ29uZmlnID0gbmV3IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lDdXN0b21IZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImN1c3RvbV9oZWFkZXJzX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjdXN0b21IZWFkZXJzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21IZWFkZXJzQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDdXN0b21IZWFkZXJzQ29uZmlnKHZhbHVlOiBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZykge1xuICAgIHRoaXMuX2N1c3RvbUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUhlYWRlcnNDb25maWcoKSB7XG4gICAgdGhpcy5fY3VzdG9tSGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21IZWFkZXJzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2hlYWRlcnNfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5SGVhZGVyc0NvbmZpZyA9IG5ldyBDbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5U2VjdXJpdHlIZWFkZXJzQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNlY3VyaXR5X2hlYWRlcnNfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNlY3VyaXR5SGVhZGVyc0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlIZWFkZXJzQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRTZWN1cml0eUhlYWRlcnNDb25maWcodmFsdWU6IENsb3VkZnJvbnRSZXNwb25zZUhlYWRlcnNQb2xpY3lTZWN1cml0eUhlYWRlcnNDb25maWcpIHtcbiAgICB0aGlzLl9zZWN1cml0eUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5SGVhZGVyc0NvbmZpZygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlIZWFkZXJzQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5SGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjb21tZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb21tZW50KSxcbiAgICAgIGV0YWc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V0YWcpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBjb3JzX2NvbmZpZzogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeUNvcnNDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9jb3JzQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgY3VzdG9tX2hlYWRlcnNfY29uZmlnOiBjbG91ZGZyb250UmVzcG9uc2VIZWFkZXJzUG9saWN5Q3VzdG9tSGVhZGVyc0NvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbUhlYWRlcnNDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzZWN1cml0eV9oZWFkZXJzX2NvbmZpZzogY2xvdWRmcm9udFJlc3BvbnNlSGVhZGVyc1BvbGljeVNlY3VyaXR5SGVhZGVyc0NvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX3NlY3VyaXR5SGVhZGVyc0NvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=