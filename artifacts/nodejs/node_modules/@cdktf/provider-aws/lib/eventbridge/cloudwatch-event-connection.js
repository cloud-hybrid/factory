"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudwatchEventConnection = exports.CloudwatchEventConnectionAuthParametersOutputReference = exports.cloudwatchEventConnectionAuthParametersToTerraform = exports.CloudwatchEventConnectionAuthParametersOauthOutputReference = exports.cloudwatchEventConnectionAuthParametersOauthToTerraform = exports.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference = exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform = exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform = exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform = exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform = exports.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference = exports.cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform = exports.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference = exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform = exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform = exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform = exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform = exports.CloudwatchEventConnectionAuthParametersBasicOutputReference = exports.cloudwatchEventConnectionAuthParametersBasicToTerraform = exports.CloudwatchEventConnectionAuthParametersApiKeyOutputReference = exports.cloudwatchEventConnectionAuthParametersApiKeyToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudwatchEventConnectionAuthParametersApiKeyToTerraform = cloudwatchEventConnectionAuthParametersApiKeyToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventConnectionAuthParametersApiKeyOutputReference extends cdktf.ComplexObject {
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
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._value = value.value;
        }
    }
    /**
     * @stability stable
     */
    get key() {
        return this.getStringAttribute('key');
    }
    /**
     * @stability stable
     */
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyInput() {
        return this._key;
    }
    /**
     * @stability stable
     */
    get value() {
        return this.getStringAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.CloudwatchEventConnectionAuthParametersApiKeyOutputReference = CloudwatchEventConnectionAuthParametersApiKeyOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnectionAuthParametersApiKeyOutputReference[_a] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnectionAuthParametersApiKeyOutputReference", version: "3.0.1" };
function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.cloudwatchEventConnectionAuthParametersBasicToTerraform = cloudwatchEventConnectionAuthParametersBasicToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventConnectionAuthParametersBasicOutputReference extends cdktf.ComplexObject {
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
        if (this._password) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._password = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._password = value.password;
            this._username = value.username;
        }
    }
    /**
     * @stability stable
     */
    get password() {
        return this.getStringAttribute('password');
    }
    /**
     * @stability stable
     */
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passwordInput() {
        return this._password;
    }
    /**
     * @stability stable
     */
    get username() {
        return this.getStringAttribute('username');
    }
    /**
     * @stability stable
     */
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usernameInput() {
        return this._username;
    }
}
exports.CloudwatchEventConnectionAuthParametersBasicOutputReference = CloudwatchEventConnectionAuthParametersBasicOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnectionAuthParametersBasicOutputReference[_b] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnectionAuthParametersBasicOutputReference", version: "3.0.1" };
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform = cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform;
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform = cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform;
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform = cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform;
function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform)(struct.body),
        header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform)(struct.header),
        query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform)(struct.queryString),
    };
}
exports.cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform = cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._body) {
            hasAnyValues = true;
            internalValueResult.body = this._body;
        }
        if (this._header) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._queryString) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._body = undefined;
            this._header = undefined;
            this._queryString = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._body = value.body;
            this._header = value.header;
            this._queryString = value.queryString;
        }
    }
    /**
     * @stability stable
     */
    get body() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('body');
    }
    /**
     * @stability stable
     */
    set body(value) {
        this._body = value;
    }
    /**
     * @stability stable
     */
    resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bodyInput() {
        return this._body;
    }
    /**
     * @stability stable
     */
    get header() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('header');
    }
    /**
     * @stability stable
     */
    set header(value) {
        this._header = value;
    }
    /**
     * @stability stable
     */
    resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headerInput() {
        return this._header;
    }
    /**
     * @stability stable
     */
    get queryString() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('query_string');
    }
    /**
     * @stability stable
     */
    set queryString(value) {
        this._queryString = value;
    }
    /**
     * @stability stable
     */
    resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringInput() {
        return this._queryString;
    }
}
exports.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference = CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference[_c] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference", version: "3.0.1" };
function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
    };
}
exports.cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform = cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._clientId) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientId = undefined;
            this._clientSecret = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
        }
    }
    /**
     * @stability stable
     */
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    /**
     * @stability stable
     */
    set clientId(value) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientIdInput() {
        return this._clientId;
    }
    /**
     * @stability stable
     */
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    /**
     * @stability stable
     */
    set clientSecret(value) {
        this._clientSecret = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientSecretInput() {
        return this._clientSecret;
    }
}
exports.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference = CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference[_d] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference", version: "3.0.1" };
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform = cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform;
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform = cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform;
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        is_value_secret: cdktf.booleanToTerraform(struct.isValueSecret),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform = cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform;
function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform)(struct.body),
        header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform)(struct.header),
        query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform)(struct.queryString),
    };
}
exports.cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform = cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._body) {
            hasAnyValues = true;
            internalValueResult.body = this._body;
        }
        if (this._header) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._queryString) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._body = undefined;
            this._header = undefined;
            this._queryString = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._body = value.body;
            this._header = value.header;
            this._queryString = value.queryString;
        }
    }
    /**
     * @stability stable
     */
    get body() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('body');
    }
    /**
     * @stability stable
     */
    set body(value) {
        this._body = value;
    }
    /**
     * @stability stable
     */
    resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bodyInput() {
        return this._body;
    }
    /**
     * @stability stable
     */
    get header() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('header');
    }
    /**
     * @stability stable
     */
    set header(value) {
        this._header = value;
    }
    /**
     * @stability stable
     */
    resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headerInput() {
        return this._header;
    }
    /**
     * @stability stable
     */
    get queryString() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('query_string');
    }
    /**
     * @stability stable
     */
    set queryString(value) {
        this._queryString = value;
    }
    /**
     * @stability stable
     */
    resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringInput() {
        return this._queryString;
    }
}
exports.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference = CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference[_e] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference", version: "3.0.1" };
function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        http_method: cdktf.stringToTerraform(struct.httpMethod),
        client_parameters: cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct.clientParameters),
        oauth_http_parameters: cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct.oauthHttpParameters),
    };
}
exports.cloudwatchEventConnectionAuthParametersOauthToTerraform = cloudwatchEventConnectionAuthParametersOauthToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventConnectionAuthParametersOauthOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // client_parameters - computed: false, optional: true, required: false
        this._clientParameters = new CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(this, "client_parameters", true);
        // oauth_http_parameters - computed: false, optional: false, required: true
        this._oauthHttpParameters = new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(this, "oauth_http_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k, _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._authorizationEndpoint) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._httpMethod) {
            hasAnyValues = true;
            internalValueResult.httpMethod = this._httpMethod;
        }
        if ((_j = this._clientParameters) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.clientParameters = (_k = this._clientParameters) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        if ((_l = this._oauthHttpParameters) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.oauthHttpParameters = (_m = this._oauthHttpParameters) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authorizationEndpoint = undefined;
            this._httpMethod = undefined;
            this._clientParameters.internalValue = undefined;
            this._oauthHttpParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._httpMethod = value.httpMethod;
            this._clientParameters.internalValue = value.clientParameters;
            this._oauthHttpParameters.internalValue = value.oauthHttpParameters;
        }
    }
    /**
     * @stability stable
     */
    get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    /**
     * @stability stable
     */
    set authorizationEndpoint(value) {
        this._authorizationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizationEndpointInput() {
        return this._authorizationEndpoint;
    }
    /**
     * @stability stable
     */
    get httpMethod() {
        return this.getStringAttribute('http_method');
    }
    /**
     * @stability stable
     */
    set httpMethod(value) {
        this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpMethodInput() {
        return this._httpMethod;
    }
    /**
     * @stability stable
     */
    get clientParameters() {
        return this._clientParameters;
    }
    /**
     * @stability stable
     */
    putClientParameters(value) {
        this._clientParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetClientParameters() {
        this._clientParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientParametersInput() {
        return this._clientParameters.internalValue;
    }
    /**
     * @stability stable
     */
    get oauthHttpParameters() {
        return this._oauthHttpParameters;
    }
    /**
     * @stability stable
     */
    putOauthHttpParameters(value) {
        this._oauthHttpParameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get oauthHttpParametersInput() {
        return this._oauthHttpParameters.internalValue;
    }
}
exports.CloudwatchEventConnectionAuthParametersOauthOutputReference = CloudwatchEventConnectionAuthParametersOauthOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnectionAuthParametersOauthOutputReference[_f] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnectionAuthParametersOauthOutputReference", version: "3.0.1" };
function cloudwatchEventConnectionAuthParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        api_key: cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct.apiKey),
        basic: cloudwatchEventConnectionAuthParametersBasicToTerraform(struct.basic),
        invocation_http_parameters: cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct.invocationHttpParameters),
        oauth: cloudwatchEventConnectionAuthParametersOauthToTerraform(struct.oauth),
    };
}
exports.cloudwatchEventConnectionAuthParametersToTerraform = cloudwatchEventConnectionAuthParametersToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventConnectionAuthParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // api_key - computed: false, optional: true, required: false
        this._apiKey = new CloudwatchEventConnectionAuthParametersApiKeyOutputReference(this, "api_key", true);
        // basic - computed: false, optional: true, required: false
        this._basic = new CloudwatchEventConnectionAuthParametersBasicOutputReference(this, "basic", true);
        // invocation_http_parameters - computed: false, optional: true, required: false
        this._invocationHttpParameters = new CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(this, "invocation_http_parameters", true);
        // oauth - computed: false, optional: true, required: false
        this._oauth = new CloudwatchEventConnectionAuthParametersOauthOutputReference(this, "oauth", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k, _l, _m, _o, _p, _q, _r;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_j = this._apiKey) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.apiKey = (_k = this._apiKey) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        if ((_l = this._basic) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.basic = (_m = this._basic) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        if ((_o = this._invocationHttpParameters) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.invocationHttpParameters = (_p = this._invocationHttpParameters) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        if ((_q = this._oauth) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.oauth = (_r = this._oauth) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._apiKey.internalValue = undefined;
            this._basic.internalValue = undefined;
            this._invocationHttpParameters.internalValue = undefined;
            this._oauth.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._apiKey.internalValue = value.apiKey;
            this._basic.internalValue = value.basic;
            this._invocationHttpParameters.internalValue = value.invocationHttpParameters;
            this._oauth.internalValue = value.oauth;
        }
    }
    /**
     * @stability stable
     */
    get apiKey() {
        return this._apiKey;
    }
    /**
     * @stability stable
     */
    putApiKey(value) {
        this._apiKey.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetApiKey() {
        this._apiKey.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get apiKeyInput() {
        return this._apiKey.internalValue;
    }
    /**
     * @stability stable
     */
    get basic() {
        return this._basic;
    }
    /**
     * @stability stable
     */
    putBasic(value) {
        this._basic.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetBasic() {
        this._basic.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get basicInput() {
        return this._basic.internalValue;
    }
    /**
     * @stability stable
     */
    get invocationHttpParameters() {
        return this._invocationHttpParameters;
    }
    /**
     * @stability stable
     */
    putInvocationHttpParameters(value) {
        this._invocationHttpParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInvocationHttpParameters() {
        this._invocationHttpParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get invocationHttpParametersInput() {
        return this._invocationHttpParameters.internalValue;
    }
    /**
     * @stability stable
     */
    get oauth() {
        return this._oauth;
    }
    /**
     * @stability stable
     */
    putOauth(value) {
        this._oauth.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOauth() {
        this._oauth.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get oauthInput() {
        return this._oauth.internalValue;
    }
}
exports.CloudwatchEventConnectionAuthParametersOutputReference = CloudwatchEventConnectionAuthParametersOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnectionAuthParametersOutputReference[_g] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnectionAuthParametersOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection}.
 *
 * @stability stable
 */
class CloudwatchEventConnection extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // auth_parameters - computed: false, optional: false, required: true
        this._authParameters = new CloudwatchEventConnectionAuthParametersOutputReference(this, "auth_parameters", true);
        this._authorizationType = config.authorizationType;
        this._description = config.description;
        this._name = config.name;
        this._authParameters.internalValue = config.authParameters;
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
    get authorizationType() {
        return this.getStringAttribute('authorization_type');
    }
    /**
     * @stability stable
     */
    set authorizationType(value) {
        this._authorizationType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizationTypeInput() {
        return this._authorizationType;
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
    // secret_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    /**
     * @stability stable
     */
    get authParameters() {
        return this._authParameters;
    }
    /**
     * @stability stable
     */
    putAuthParameters(value) {
        this._authParameters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authParametersInput() {
        return this._authParameters.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            authorization_type: cdktf.stringToTerraform(this._authorizationType),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            auth_parameters: cloudwatchEventConnectionAuthParametersToTerraform(this._authParameters.internalValue),
        };
    }
}
exports.CloudwatchEventConnection = CloudwatchEventConnection;
_h = JSII_RTTI_SYMBOL_1;
CloudwatchEventConnection[_h] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventConnection", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudwatchEventConnection.tfResourceType = "aws_cloudwatch_event_connection";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWR3YXRjaC1ldmVudC1jb25uZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V2ZW50YnJpZGdlL2Nsb3Vkd2F0Y2gtZXZlbnQtY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQW9CL0IsU0FBZ0Isd0RBQXdELENBQUMsTUFBcUg7SUFDNUwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsNEhBU0M7Ozs7QUFFRCxNQUFhLDREQUE2RCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSW5HLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxD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QUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxlQUFlLEVBQUUsa0RBQWtELENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7U0FDeEcsQ0FBQztJQUNKLENBQUM7O0FBbEhILDhEQW1IQzs7O0FBakhDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csd0NBQWMsR0FBVyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhvcml6YXRpb25UeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRoUGFyYW1ldGVyczogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzO1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNBcGlLZXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNBcGlLZXlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNBcGlLZXlPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNBcGlLZXkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0FwaUtleU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNBcGlLZXkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2tleSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5ID0gdGhpcy5fa2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNBcGlLZXkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9rZXkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fa2V5ID0gdmFsdWUua2V5O1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBrZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfa2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF92YWx1ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0Jhc2ljIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzQmFzaWNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNCYXNpY091dHB1dFJlZmVyZW5jZSB8IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0Jhc2ljKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHVzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJuYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzQmFzaWNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzQmFzaWMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXNzd29yZCA9IHRoaXMuX3Bhc3N3b3JkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlcm5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJuYW1lID0gdGhpcy5fdXNlcm5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNCYXNpYyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdmFsdWUucGFzc3dvcmQ7XG4gICAgICB0aGlzLl91c2VybmFtZSA9IHZhbHVlLnVzZXJuYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Bhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJuYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0JvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpc1ZhbHVlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0JvZHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnNCb2R5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXNfdmFsdWVfc2VjcmV0OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pc1ZhbHVlU2VjcmV0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnNIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpc1ZhbHVlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0hlYWRlclRvVGVycmFmb3JtKHN0cnVjdD86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0hlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlzX3ZhbHVlX3NlY3JldDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaXNWYWx1ZVNlY3JldCksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzSW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpc1ZhbHVlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc1F1ZXJ5U3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzSW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpc192YWx1ZV9zZWNyZXQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmlzVmFsdWVTZWNyZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBib2R5PzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzSW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzQm9keVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVyPzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzSW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzSGVhZGVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWVyeVN0cmluZz86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc1F1ZXJ5U3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBib2R5OiBjZGt0Zi5saXN0TWFwcGVyKGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0JvZHlUb1RlcnJhZm9ybSkoc3RydWN0IS5ib2R5KSxcbiAgICBoZWFkZXI6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzSW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzSGVhZGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVyKSxcbiAgICBxdWVyeV9zdHJpbmc6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzSW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5xdWVyeVN0cmluZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2JvZHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJvZHkgPSB0aGlzLl9ib2R5O1xuICAgIH1cbiAgICBpZiAodGhpcy5faGVhZGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFkZXIgPSB0aGlzLl9oZWFkZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVlcnlTdHJpbmcgPSB0aGlzLl9xdWVyeVN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JvZHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYm9keSA9IHZhbHVlLmJvZHk7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZS5oZWFkZXI7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZyA9IHZhbHVlLnF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJvZHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYm9keT86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0JvZHlbXTsgXG4gIHB1YmxpYyBnZXQgYm9keSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYm9keScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJvZHkodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0JvZHlbXSkge1xuICAgIHRoaXMuX2JvZHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCb2R5KCkge1xuICAgIHRoaXMuX2JvZHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJvZHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgfVxuXG4gIC8vIGhlYWRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFkZXI/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnNIZWFkZXJbXTsgXG4gIHB1YmxpYyBnZXQgaGVhZGVyKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFkZXIodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc0hlYWRlcltdKSB7XG4gICAgdGhpcy5faGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVyKCkge1xuICAgIHRoaXMuX2hlYWRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcjtcbiAgfVxuXG4gIC8vIHF1ZXJ5X3N0cmluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdWVyeVN0cmluZz86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc1F1ZXJ5U3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdxdWVyeV9zdHJpbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBxdWVyeVN0cmluZyh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzSW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmdbXSkge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnlTdHJpbmcoKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoQ2xpZW50UGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xpZW50U2VjcmV0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aENsaWVudFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aENsaWVudFBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aENsaWVudFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbGllbnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50SWQpLFxuICAgIGNsaWVudF9zZWNyZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50U2VjcmV0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhDbGllbnRQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoQ2xpZW50UGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2xpZW50SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsaWVudElkID0gdGhpcy5fY2xpZW50SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbGllbnRTZWNyZXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsaWVudFNlY3JldCA9IHRoaXMuX2NsaWVudFNlY3JldDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoQ2xpZW50UGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsaWVudElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xpZW50U2VjcmV0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbGllbnRJZCA9IHZhbHVlLmNsaWVudElkO1xuICAgICAgdGhpcy5fY2xpZW50U2VjcmV0ID0gdmFsdWUuY2xpZW50U2VjcmV0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsaWVudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbGllbnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2xpZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsaWVudElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZDtcbiAgfVxuXG4gIC8vIGNsaWVudF9zZWNyZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2xpZW50U2VjcmV0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbGllbnRTZWNyZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfc2VjcmV0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjbGllbnRTZWNyZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudFNlY3JldCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRTZWNyZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50U2VjcmV0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0JvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpc1ZhbHVlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0JvZHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnNCb2R5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXNfdmFsdWVfc2VjcmV0OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pc1ZhbHVlU2VjcmV0KSxcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnNIZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpc1ZhbHVlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0hlYWRlclRvVGVycmFmb3JtKHN0cnVjdD86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0hlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlzX3ZhbHVlX3NlY3JldDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaXNWYWx1ZVNlY3JldCksXG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpc1ZhbHVlU2VjcmV0PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc1F1ZXJ5U3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpc192YWx1ZV9zZWNyZXQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmlzVmFsdWVTZWNyZXQpLFxuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBib2R5PzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzQm9keVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVyPzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzSGVhZGVyW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWVyeVN0cmluZz86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc1F1ZXJ5U3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBib2R5OiBjZGt0Zi5saXN0TWFwcGVyKGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0JvZHlUb1RlcnJhZm9ybSkoc3RydWN0IS5ib2R5KSxcbiAgICBoZWFkZXI6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzSGVhZGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVyKSxcbiAgICBxdWVyeV9zdHJpbmc6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5xdWVyeVN0cmluZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2JvZHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJvZHkgPSB0aGlzLl9ib2R5O1xuICAgIH1cbiAgICBpZiAodGhpcy5faGVhZGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWFkZXIgPSB0aGlzLl9oZWFkZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucXVlcnlTdHJpbmcgPSB0aGlzLl9xdWVyeVN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2JvZHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYm9keSA9IHZhbHVlLmJvZHk7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZS5oZWFkZXI7XG4gICAgICB0aGlzLl9xdWVyeVN0cmluZyA9IHZhbHVlLnF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJvZHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYm9keT86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0JvZHlbXTsgXG4gIHB1YmxpYyBnZXQgYm9keSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYm9keScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJvZHkodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0JvZHlbXSkge1xuICAgIHRoaXMuX2JvZHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCb2R5KCkge1xuICAgIHRoaXMuX2JvZHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJvZHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgfVxuXG4gIC8vIGhlYWRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFkZXI/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnNIZWFkZXJbXTsgXG4gIHB1YmxpYyBnZXQgaGVhZGVyKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFkZXIodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc0hlYWRlcltdKSB7XG4gICAgdGhpcy5faGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVyKCkge1xuICAgIHRoaXMuX2hlYWRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcjtcbiAgfVxuXG4gIC8vIHF1ZXJ5X3N0cmluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdWVyeVN0cmluZz86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT2F1dGhIdHRwUGFyYW1ldGVyc1F1ZXJ5U3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdxdWVyeV9zdHJpbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBxdWVyeVN0cmluZyh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzUXVlcnlTdHJpbmdbXSkge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnlTdHJpbmcoKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5U3RyaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRob3JpemF0aW9uRW5kcG9pbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBNZXRob2Q6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudFBhcmFtZXRlcnM/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aENsaWVudFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYXV0aEh0dHBQYXJhbWV0ZXJzOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aFRvVGVycmFmb3JtKHN0cnVjdD86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGgpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRob3JpemF0aW9uX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhvcml6YXRpb25FbmRwb2ludCksXG4gICAgaHR0cF9tZXRob2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaHR0cE1ldGhvZCksXG4gICAgY2xpZW50X3BhcmFtZXRlcnM6IGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoQ2xpZW50UGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50UGFyYW1ldGVycyksXG4gICAgb2F1dGhfaHR0cF9wYXJhbWV0ZXJzOiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm9hdXRoSHR0cFBhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0aG9yaXphdGlvbkVuZHBvaW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRob3JpemF0aW9uRW5kcG9pbnQgPSB0aGlzLl9hdXRob3JpemF0aW9uRW5kcG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwTWV0aG9kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwTWV0aG9kID0gdGhpcy5faHR0cE1ldGhvZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NsaWVudFBhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsaWVudFBhcmFtZXRlcnMgPSB0aGlzLl9jbGllbnRQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb2F1dGhIdHRwUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub2F1dGhIdHRwUGFyYW1ldGVycyA9IHRoaXMuX29hdXRoSHR0cFBhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1dGhvcml6YXRpb25FbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2h0dHBNZXRob2QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbGllbnRQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vYXV0aEh0dHBQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dGhvcml6YXRpb25FbmRwb2ludCA9IHZhbHVlLmF1dGhvcml6YXRpb25FbmRwb2ludDtcbiAgICAgIHRoaXMuX2h0dHBNZXRob2QgPSB2YWx1ZS5odHRwTWV0aG9kO1xuICAgICAgdGhpcy5fY2xpZW50UGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2xpZW50UGFyYW1ldGVycztcbiAgICAgIHRoaXMuX29hdXRoSHR0cFBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm9hdXRoSHR0cFBhcmFtZXRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbl9lbmRwb2ludCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRob3JpemF0aW9uRW5kcG9pbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25FbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhvcml6YXRpb25fZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhvcml6YXRpb25FbmRwb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvbkVuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25FbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRob3JpemF0aW9uRW5kcG9pbnQ7XG4gIH1cblxuICAvLyBodHRwX21ldGhvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9odHRwTWV0aG9kPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBodHRwTWV0aG9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF9tZXRob2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBNZXRob2QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2h0dHBNZXRob2QgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cE1ldGhvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwTWV0aG9kO1xuICB9XG5cbiAgLy8gY2xpZW50X3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xpZW50UGFyYW1ldGVycyA9IG5ldyBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aENsaWVudFBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xpZW50X3BhcmFtZXRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xpZW50UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50UGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0Q2xpZW50UGFyYW1ldGVycyh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhDbGllbnRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fY2xpZW50UGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xpZW50UGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9jbGllbnRQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsaWVudFBhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50UGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb2F1dGhfaHR0cF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX29hdXRoSHR0cFBhcmFtZXRlcnMgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPYXV0aEh0dHBQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm9hdXRoX2h0dHBfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBvYXV0aEh0dHBQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9vYXV0aEh0dHBQYXJhbWV0ZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRPYXV0aEh0dHBQYXJhbWV0ZXJzKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNPYXV0aE9hdXRoSHR0cFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9vYXV0aEh0dHBQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb2F1dGhIdHRwUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vYXV0aEh0dHBQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwaUtleT86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0FwaUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhc2ljPzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzQmFzaWM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnM/OiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYXV0aD86IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXBpX2tleTogY2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzQXBpS2V5VG9UZXJyYWZvcm0oc3RydWN0IS5hcGlLZXkpLFxuICAgIGJhc2ljOiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNCYXNpY1RvVGVycmFmb3JtKHN0cnVjdCEuYmFzaWMpLFxuICAgIGludm9jYXRpb25faHR0cF9wYXJhbWV0ZXJzOiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmludm9jYXRpb25IdHRwUGFyYW1ldGVycyksXG4gICAgb2F1dGg6IGNsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc09hdXRoVG9UZXJyYWZvcm0oc3RydWN0IS5vYXV0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FwaUtleT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXBpS2V5ID0gdGhpcy5fYXBpS2V5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYmFzaWM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJhc2ljID0gdGhpcy5fYmFzaWM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmludm9jYXRpb25IdHRwUGFyYW1ldGVycyA9IHRoaXMuX2ludm9jYXRpb25IdHRwUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29hdXRoPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vYXV0aCA9IHRoaXMuX29hdXRoPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXBpS2V5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9iYXNpYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vYXV0aC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcGlLZXkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFwaUtleTtcbiAgICAgIHRoaXMuX2Jhc2ljLmludGVybmFsVmFsdWUgPSB2YWx1ZS5iYXNpYztcbiAgICAgIHRoaXMuX2ludm9jYXRpb25IdHRwUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzO1xuICAgICAgdGhpcy5fb2F1dGguaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm9hdXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFwaV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBpS2V5ID0gbmV3IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0FwaUtleU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhcGlfa2V5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFwaUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpS2V5O1xuICB9XG4gIHB1YmxpYyBwdXRBcGlLZXkodmFsdWU6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0FwaUtleSkge1xuICAgIHRoaXMuX2FwaUtleS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBpS2V5KCkge1xuICAgIHRoaXMuX2FwaUtleS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcGlLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBpS2V5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBiYXNpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iYXNpYyA9IG5ldyBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNCYXNpY091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJiYXNpY1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBiYXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzaWM7XG4gIH1cbiAgcHVibGljIHB1dEJhc2ljKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNCYXNpYykge1xuICAgIHRoaXMuX2Jhc2ljLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYXNpYygpIHtcbiAgICB0aGlzLl9iYXNpYy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXNpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXNpYy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW52b2NhdGlvbl9odHRwX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzID0gbmV3IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25BdXRoUGFyYW1ldGVyc0ludm9jYXRpb25IdHRwUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbnZvY2F0aW9uX2h0dHBfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9jYXRpb25IdHRwUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0SW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNJbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9pbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEludm9jYXRpb25IdHRwUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9pbnZvY2F0aW9uSHR0cFBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW52b2NhdGlvbkh0dHBQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9jYXRpb25IdHRwUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb2F1dGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb2F1dGggPSBuZXcgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGhPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwib2F1dGhcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgb2F1dGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29hdXRoO1xuICB9XG4gIHB1YmxpYyBwdXRPYXV0aCh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT2F1dGgpIHtcbiAgICB0aGlzLl9vYXV0aC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T2F1dGgoKSB7XG4gICAgdGhpcy5fb2F1dGguaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb2F1dGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2F1dGguaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY2xvdWR3YXRjaF9ldmVudF9jb25uZWN0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3Vkd2F0Y2hFdmVudENvbm5lY3Rpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jbG91ZHdhdGNoX2V2ZW50X2Nvbm5lY3Rpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvblR5cGUgPSBjb25maWcuYXV0aG9yaXphdGlvblR5cGU7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2F1dGhQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSBjb25maWcuYXV0aFBhcmFtZXRlcnM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F1dGhvcml6YXRpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRob3JpemF0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhvcml6YXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aG9yaXphdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6YXRpb25UeXBlO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHNlY3JldF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNyZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXRfYXJuJyk7XG4gIH1cblxuICAvLyBhdXRoX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXV0aFBhcmFtZXRlcnMgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50Q29ubmVjdGlvbkF1dGhQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF1dGhfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhdXRoUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aFBhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dEF1dGhQYXJhbWV0ZXJzKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9hdXRoUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dGhvcml6YXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXV0aG9yaXphdGlvblR5cGUpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgYXV0aF9wYXJhbWV0ZXJzOiBjbG91ZHdhdGNoRXZlbnRDb25uZWN0aW9uQXV0aFBhcmFtZXRlcnNUb1RlcnJhZm9ybSh0aGlzLl9hdXRoUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=