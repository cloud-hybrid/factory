"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbListener = exports.AlbListenerTimeoutsOutputReference = exports.albListenerTimeoutsToTerraform = exports.albListenerDefaultActionToTerraform = exports.AlbListenerDefaultActionRedirectOutputReference = exports.albListenerDefaultActionRedirectToTerraform = exports.AlbListenerDefaultActionForwardOutputReference = exports.albListenerDefaultActionForwardToTerraform = exports.albListenerDefaultActionForwardTargetGroupToTerraform = exports.AlbListenerDefaultActionForwardStickinessOutputReference = exports.albListenerDefaultActionForwardStickinessToTerraform = exports.AlbListenerDefaultActionFixedResponseOutputReference = exports.albListenerDefaultActionFixedResponseToTerraform = exports.AlbListenerDefaultActionAuthenticateOidcOutputReference = exports.albListenerDefaultActionAuthenticateOidcToTerraform = exports.AlbListenerDefaultActionAuthenticateCognitoOutputReference = exports.albListenerDefaultActionAuthenticateCognitoToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function albListenerDefaultActionAuthenticateCognitoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        user_pool_arn: cdktf.stringToTerraform(struct.userPoolArn),
        user_pool_client_id: cdktf.stringToTerraform(struct.userPoolClientId),
        user_pool_domain: cdktf.stringToTerraform(struct.userPoolDomain),
    };
}
exports.albListenerDefaultActionAuthenticateCognitoToTerraform = albListenerDefaultActionAuthenticateCognitoToTerraform;
/**
 * @stability stable
 */
class AlbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
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
        if (this._authenticationRequestExtraParams) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._onUnauthenticatedRequest) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._userPoolArn) {
            hasAnyValues = true;
            internalValueResult.userPoolArn = this._userPoolArn;
        }
        if (this._userPoolClientId) {
            hasAnyValues = true;
            internalValueResult.userPoolClientId = this._userPoolClientId;
        }
        if (this._userPoolDomain) {
            hasAnyValues = true;
            internalValueResult.userPoolDomain = this._userPoolDomain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authenticationRequestExtraParams = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._userPoolArn = undefined;
            this._userPoolClientId = undefined;
            this._userPoolDomain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._userPoolArn = value.userPoolArn;
            this._userPoolClientId = value.userPoolClientId;
            this._userPoolDomain = value.userPoolDomain;
        }
    }
    /**
     * @stability stable
     */
    get authenticationRequestExtraParams() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authentication_request_extra_params');
    }
    /**
     * @stability stable
     */
    set authenticationRequestExtraParams(value) {
        this._authenticationRequestExtraParams = value;
    }
    /**
     * @stability stable
     */
    resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
    }
    /**
     * @stability stable
     */
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    /**
     * @stability stable
     */
    set onUnauthenticatedRequest(value) {
        this._onUnauthenticatedRequest = value;
    }
    /**
     * @stability stable
     */
    resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }
    /**
     * @stability stable
     */
    get scope() {
        return this.getStringAttribute('scope');
    }
    /**
     * @stability stable
     */
    set scope(value) {
        this._scope = value;
    }
    /**
     * @stability stable
     */
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scopeInput() {
        return this._scope;
    }
    /**
     * @stability stable
     */
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    /**
     * @stability stable
     */
    set sessionCookieName(value) {
        this._sessionCookieName = value;
    }
    /**
     * @stability stable
     */
    resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sessionCookieNameInput() {
        return this._sessionCookieName;
    }
    /**
     * @stability stable
     */
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    /**
     * @stability stable
     */
    set sessionTimeout(value) {
        this._sessionTimeout = value;
    }
    /**
     * @stability stable
     */
    resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sessionTimeoutInput() {
        return this._sessionTimeout;
    }
    /**
     * @stability stable
     */
    get userPoolArn() {
        return this.getStringAttribute('user_pool_arn');
    }
    /**
     * @stability stable
     */
    set userPoolArn(value) {
        this._userPoolArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userPoolArnInput() {
        return this._userPoolArn;
    }
    /**
     * @stability stable
     */
    get userPoolClientId() {
        return this.getStringAttribute('user_pool_client_id');
    }
    /**
     * @stability stable
     */
    set userPoolClientId(value) {
        this._userPoolClientId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userPoolClientIdInput() {
        return this._userPoolClientId;
    }
    /**
     * @stability stable
     */
    get userPoolDomain() {
        return this.getStringAttribute('user_pool_domain');
    }
    /**
     * @stability stable
     */
    set userPoolDomain(value) {
        this._userPoolDomain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userPoolDomainInput() {
        return this._userPoolDomain;
    }
}
exports.AlbListenerDefaultActionAuthenticateCognitoOutputReference = AlbListenerDefaultActionAuthenticateCognitoOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionAuthenticateCognitoOutputReference[_a] = { fqn: "@cdktf/provider-aws.elb.AlbListenerDefaultActionAuthenticateCognitoOutputReference", version: "3.0.1" };
function albListenerDefaultActionAuthenticateOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct.authenticationRequestExtraParams),
        authorization_endpoint: cdktf.stringToTerraform(struct.authorizationEndpoint),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        issuer: cdktf.stringToTerraform(struct.issuer),
        on_unauthenticated_request: cdktf.stringToTerraform(struct.onUnauthenticatedRequest),
        scope: cdktf.stringToTerraform(struct.scope),
        session_cookie_name: cdktf.stringToTerraform(struct.sessionCookieName),
        session_timeout: cdktf.numberToTerraform(struct.sessionTimeout),
        token_endpoint: cdktf.stringToTerraform(struct.tokenEndpoint),
        user_info_endpoint: cdktf.stringToTerraform(struct.userInfoEndpoint),
    };
}
exports.albListenerDefaultActionAuthenticateOidcToTerraform = albListenerDefaultActionAuthenticateOidcToTerraform;
/**
 * @stability stable
 */
class AlbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
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
        if (this._authenticationRequestExtraParams) {
            hasAnyValues = true;
            internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
        }
        if (this._authorizationEndpoint) {
            hasAnyValues = true;
            internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
        }
        if (this._clientId) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._clientSecret) {
            hasAnyValues = true;
            internalValueResult.clientSecret = this._clientSecret;
        }
        if (this._issuer) {
            hasAnyValues = true;
            internalValueResult.issuer = this._issuer;
        }
        if (this._onUnauthenticatedRequest) {
            hasAnyValues = true;
            internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sessionCookieName) {
            hasAnyValues = true;
            internalValueResult.sessionCookieName = this._sessionCookieName;
        }
        if (this._sessionTimeout) {
            hasAnyValues = true;
            internalValueResult.sessionTimeout = this._sessionTimeout;
        }
        if (this._tokenEndpoint) {
            hasAnyValues = true;
            internalValueResult.tokenEndpoint = this._tokenEndpoint;
        }
        if (this._userInfoEndpoint) {
            hasAnyValues = true;
            internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authenticationRequestExtraParams = undefined;
            this._authorizationEndpoint = undefined;
            this._clientId = undefined;
            this._clientSecret = undefined;
            this._issuer = undefined;
            this._onUnauthenticatedRequest = undefined;
            this._scope = undefined;
            this._sessionCookieName = undefined;
            this._sessionTimeout = undefined;
            this._tokenEndpoint = undefined;
            this._userInfoEndpoint = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
            this._authorizationEndpoint = value.authorizationEndpoint;
            this._clientId = value.clientId;
            this._clientSecret = value.clientSecret;
            this._issuer = value.issuer;
            this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
            this._scope = value.scope;
            this._sessionCookieName = value.sessionCookieName;
            this._sessionTimeout = value.sessionTimeout;
            this._tokenEndpoint = value.tokenEndpoint;
            this._userInfoEndpoint = value.userInfoEndpoint;
        }
    }
    /**
     * @stability stable
     */
    get authenticationRequestExtraParams() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authentication_request_extra_params');
    }
    /**
     * @stability stable
     */
    set authenticationRequestExtraParams(value) {
        this._authenticationRequestExtraParams = value;
    }
    /**
     * @stability stable
     */
    resetAuthenticationRequestExtraParams() {
        this._authenticationRequestExtraParams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authenticationRequestExtraParamsInput() {
        return this._authenticationRequestExtraParams;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get issuerInput() {
        return this._issuer;
    }
    /**
     * @stability stable
     */
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    /**
     * @stability stable
     */
    set onUnauthenticatedRequest(value) {
        this._onUnauthenticatedRequest = value;
    }
    /**
     * @stability stable
     */
    resetOnUnauthenticatedRequest() {
        this._onUnauthenticatedRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onUnauthenticatedRequestInput() {
        return this._onUnauthenticatedRequest;
    }
    /**
     * @stability stable
     */
    get scope() {
        return this.getStringAttribute('scope');
    }
    /**
     * @stability stable
     */
    set scope(value) {
        this._scope = value;
    }
    /**
     * @stability stable
     */
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scopeInput() {
        return this._scope;
    }
    /**
     * @stability stable
     */
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    /**
     * @stability stable
     */
    set sessionCookieName(value) {
        this._sessionCookieName = value;
    }
    /**
     * @stability stable
     */
    resetSessionCookieName() {
        this._sessionCookieName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sessionCookieNameInput() {
        return this._sessionCookieName;
    }
    /**
     * @stability stable
     */
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    /**
     * @stability stable
     */
    set sessionTimeout(value) {
        this._sessionTimeout = value;
    }
    /**
     * @stability stable
     */
    resetSessionTimeout() {
        this._sessionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sessionTimeoutInput() {
        return this._sessionTimeout;
    }
    /**
     * @stability stable
     */
    get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    /**
     * @stability stable
     */
    set tokenEndpoint(value) {
        this._tokenEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tokenEndpointInput() {
        return this._tokenEndpoint;
    }
    /**
     * @stability stable
     */
    get userInfoEndpoint() {
        return this.getStringAttribute('user_info_endpoint');
    }
    /**
     * @stability stable
     */
    set userInfoEndpoint(value) {
        this._userInfoEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userInfoEndpointInput() {
        return this._userInfoEndpoint;
    }
}
exports.AlbListenerDefaultActionAuthenticateOidcOutputReference = AlbListenerDefaultActionAuthenticateOidcOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionAuthenticateOidcOutputReference[_b] = { fqn: "@cdktf/provider-aws.elb.AlbListenerDefaultActionAuthenticateOidcOutputReference", version: "3.0.1" };
function albListenerDefaultActionFixedResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        message_body: cdktf.stringToTerraform(struct.messageBody),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
exports.albListenerDefaultActionFixedResponseToTerraform = albListenerDefaultActionFixedResponseToTerraform;
/**
 * @stability stable
 */
class AlbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
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
        if (this._contentType) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._messageBody) {
            hasAnyValues = true;
            internalValueResult.messageBody = this._messageBody;
        }
        if (this._statusCode) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentType = undefined;
            this._messageBody = undefined;
            this._statusCode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentType = value.contentType;
            this._messageBody = value.messageBody;
            this._statusCode = value.statusCode;
        }
    }
    /**
     * @stability stable
     */
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    /**
     * @stability stable
     */
    set contentType(value) {
        this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentTypeInput() {
        return this._contentType;
    }
    /**
     * @stability stable
     */
    get messageBody() {
        return this.getStringAttribute('message_body');
    }
    /**
     * @stability stable
     */
    set messageBody(value) {
        this._messageBody = value;
    }
    /**
     * @stability stable
     */
    resetMessageBody() {
        this._messageBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageBodyInput() {
        return this._messageBody;
    }
    /**
     * @stability stable
     */
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
    /**
     * @stability stable
     */
    set statusCode(value) {
        this._statusCode = value;
    }
    /**
     * @stability stable
     */
    resetStatusCode() {
        this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusCodeInput() {
        return this._statusCode;
    }
}
exports.AlbListenerDefaultActionFixedResponseOutputReference = AlbListenerDefaultActionFixedResponseOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionFixedResponseOutputReference[_c] = { fqn: "@cdktf/provider-aws.elb.AlbListenerDefaultActionFixedResponseOutputReference", version: "3.0.1" };
function albListenerDefaultActionForwardStickinessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        duration: cdktf.numberToTerraform(struct.duration),
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.albListenerDefaultActionForwardStickinessToTerraform = albListenerDefaultActionForwardStickinessToTerraform;
/**
 * @stability stable
 */
class AlbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
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
        if (this._duration) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._duration = undefined;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._duration = value.duration;
            this._enabled = value.enabled;
        }
    }
    /**
     * @stability stable
     */
    get duration() {
        return this.getNumberAttribute('duration');
    }
    /**
     * @stability stable
     */
    set duration(value) {
        this._duration = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get durationInput() {
        return this._duration;
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
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
}
exports.AlbListenerDefaultActionForwardStickinessOutputReference = AlbListenerDefaultActionForwardStickinessOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionForwardStickinessOutputReference[_d] = { fqn: "@cdktf/provider-aws.elb.AlbListenerDefaultActionForwardStickinessOutputReference", version: "3.0.1" };
function albListenerDefaultActionForwardTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.albListenerDefaultActionForwardTargetGroupToTerraform = albListenerDefaultActionForwardTargetGroupToTerraform;
function albListenerDefaultActionForwardToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        stickiness: albListenerDefaultActionForwardStickinessToTerraform(struct.stickiness),
        target_group: cdktf.listMapper(albListenerDefaultActionForwardTargetGroupToTerraform)(struct.targetGroup),
    };
}
exports.albListenerDefaultActionForwardToTerraform = albListenerDefaultActionForwardToTerraform;
/**
 * @stability stable
 */
class AlbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // stickiness - computed: false, optional: true, required: false
        this._stickiness = new AlbListenerDefaultActionForwardStickinessOutputReference(this, "stickiness", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_j = this._stickiness) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.stickiness = (_k = this._stickiness) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        if (this._targetGroup) {
            hasAnyValues = true;
            internalValueResult.targetGroup = this._targetGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._stickiness.internalValue = undefined;
            this._targetGroup = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._stickiness.internalValue = value.stickiness;
            this._targetGroup = value.targetGroup;
        }
    }
    /**
     * @stability stable
     */
    get stickiness() {
        return this._stickiness;
    }
    /**
     * @stability stable
     */
    putStickiness(value) {
        this._stickiness.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetStickiness() {
        this._stickiness.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stickinessInput() {
        return this._stickiness.internalValue;
    }
    /**
     * @stability stable
     */
    get targetGroup() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('target_group');
    }
    /**
     * @stability stable
     */
    set targetGroup(value) {
        this._targetGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetGroupInput() {
        return this._targetGroup;
    }
}
exports.AlbListenerDefaultActionForwardOutputReference = AlbListenerDefaultActionForwardOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionForwardOutputReference[_e] = { fqn: "@cdktf/provider-aws.elb.AlbListenerDefaultActionForwardOutputReference", version: "3.0.1" };
function albListenerDefaultActionRedirectToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.stringToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        query: cdktf.stringToTerraform(struct.query),
        status_code: cdktf.stringToTerraform(struct.statusCode),
    };
}
exports.albListenerDefaultActionRedirectToTerraform = albListenerDefaultActionRedirectToTerraform;
/**
 * @stability stable
 */
class AlbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
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
        if (this._host) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._path) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._protocol) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._query) {
            hasAnyValues = true;
            internalValueResult.query = this._query;
        }
        if (this._statusCode) {
            hasAnyValues = true;
            internalValueResult.statusCode = this._statusCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._host = undefined;
            this._path = undefined;
            this._port = undefined;
            this._protocol = undefined;
            this._query = undefined;
            this._statusCode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._host = value.host;
            this._path = value.path;
            this._port = value.port;
            this._protocol = value.protocol;
            this._query = value.query;
            this._statusCode = value.statusCode;
        }
    }
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    /**
     * @stability stable
     */
    set host(value) {
        this._host = value;
    }
    /**
     * @stability stable
     */
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInput() {
        return this._host;
    }
    /**
     * @stability stable
     */
    get path() {
        return this.getStringAttribute('path');
    }
    /**
     * @stability stable
     */
    set path(value) {
        this._path = value;
    }
    /**
     * @stability stable
     */
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pathInput() {
        return this._path;
    }
    /**
     * @stability stable
     */
    get port() {
        return this.getStringAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    /**
     * @stability stable
     */
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    /**
     * @stability stable
     */
    set protocol(value) {
        this._protocol = value;
    }
    /**
     * @stability stable
     */
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolInput() {
        return this._protocol;
    }
    /**
     * @stability stable
     */
    get query() {
        return this.getStringAttribute('query');
    }
    /**
     * @stability stable
     */
    set query(value) {
        this._query = value;
    }
    /**
     * @stability stable
     */
    resetQuery() {
        this._query = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryInput() {
        return this._query;
    }
    /**
     * @stability stable
     */
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
    /**
     * @stability stable
     */
    set statusCode(value) {
        this._statusCode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusCodeInput() {
        return this._statusCode;
    }
}
exports.AlbListenerDefaultActionRedirectOutputReference = AlbListenerDefaultActionRedirectOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AlbListenerDefaultActionRedirectOutputReference[_f] = { fqn: "@cdktf/provider-aws.elb.AlbListenerDefaultActionRedirectOutputReference", version: "3.0.1" };
function albListenerDefaultActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        order: cdktf.numberToTerraform(struct.order),
        target_group_arn: cdktf.stringToTerraform(struct.targetGroupArn),
        type: cdktf.stringToTerraform(struct.type),
        authenticate_cognito: albListenerDefaultActionAuthenticateCognitoToTerraform(struct.authenticateCognito),
        authenticate_oidc: albListenerDefaultActionAuthenticateOidcToTerraform(struct.authenticateOidc),
        fixed_response: albListenerDefaultActionFixedResponseToTerraform(struct.fixedResponse),
        forward: albListenerDefaultActionForwardToTerraform(struct.forward),
        redirect: albListenerDefaultActionRedirectToTerraform(struct.redirect),
    };
}
exports.albListenerDefaultActionToTerraform = albListenerDefaultActionToTerraform;
function albListenerTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        read: cdktf.stringToTerraform(struct.read),
    };
}
exports.albListenerTimeoutsToTerraform = albListenerTimeoutsToTerraform;
/**
 * @stability stable
 */
class AlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._read) {
            hasAnyValues = true;
            internalValueResult.read = this._read;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._read = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._read = value.read;
        }
    }
    /**
     * @stability stable
     */
    get read() {
        return this.getStringAttribute('read');
    }
    /**
     * @stability stable
     */
    set read(value) {
        this._read = value;
    }
    /**
     * @stability stable
     */
    resetRead() {
        this._read = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get readInput() {
        return this._read;
    }
}
exports.AlbListenerTimeoutsOutputReference = AlbListenerTimeoutsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AlbListenerTimeoutsOutputReference[_g] = { fqn: "@cdktf/provider-aws.elb.AlbListenerTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener}.
 *
 * @stability stable
 */
class AlbListener extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_alb_listener',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new AlbListenerTimeoutsOutputReference(this, "timeouts", true);
        this._alpnPolicy = config.alpnPolicy;
        this._certificateArn = config.certificateArn;
        this._loadBalancerArn = config.loadBalancerArn;
        this._port = config.port;
        this._protocol = config.protocol;
        this._sslPolicy = config.sslPolicy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._defaultAction = config.defaultAction;
        this._timeouts.internalValue = config.timeouts;
    }
    /**
     * @stability stable
     */
    get alpnPolicy() {
        return this.getStringAttribute('alpn_policy');
    }
    /**
     * @stability stable
     */
    set alpnPolicy(value) {
        this._alpnPolicy = value;
    }
    /**
     * @stability stable
     */
    resetAlpnPolicy() {
        this._alpnPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get alpnPolicyInput() {
        return this._alpnPolicy;
    }
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
    get loadBalancerArn() {
        return this.getStringAttribute('load_balancer_arn');
    }
    /**
     * @stability stable
     */
    set loadBalancerArn(value) {
        this._loadBalancerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loadBalancerArnInput() {
        return this._loadBalancerArn;
    }
    /**
     * @stability stable
     */
    get port() {
        return this.getNumberAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    /**
     * @stability stable
     */
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    /**
     * @stability stable
     */
    set protocol(value) {
        this._protocol = value;
    }
    /**
     * @stability stable
     */
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolInput() {
        return this._protocol;
    }
    /**
     * @stability stable
     */
    get sslPolicy() {
        return this.getStringAttribute('ssl_policy');
    }
    /**
     * @stability stable
     */
    set sslPolicy(value) {
        this._sslPolicy = value;
    }
    /**
     * @stability stable
     */
    resetSslPolicy() {
        this._sslPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslPolicyInput() {
        return this._sslPolicy;
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
    get defaultAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('default_action');
    }
    /**
     * @stability stable
     */
    set defaultAction(value) {
        this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultActionInput() {
        return this._defaultAction;
    }
    /**
     * @stability stable
     */
    get timeouts() {
        return this._timeouts;
    }
    /**
     * @stability stable
     */
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
            port: cdktf.numberToTerraform(this._port),
            protocol: cdktf.stringToTerraform(this._protocol),
            ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            default_action: cdktf.listMapper(albListenerDefaultActionToTerraform)(this._defaultAction),
            timeouts: albListenerTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.AlbListener = AlbListener;
_h = JSII_RTTI_SYMBOL_1;
AlbListener[_h] = { fqn: "@cdktf/provider-aws.elb.AlbListener", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AlbListener.tfResourceType = "aws_alb_listener";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxiLWxpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VsYi9hbGItbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE0Qy9CLFNBQWdCLHNEQUFzRCxDQUFDLE1BQWlIO0lBQ3RMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsbUNBQW1DLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQ3JILDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDckYsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkUsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMzRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQ2xFLENBQUE7QUFDSCxDQUFDO0FBZkQsd0hBZUM7Ozs7QUFFRCxNQUFh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QUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQ3ZFLENBQUM7SUFDSixDQUFDOztBQS9OSCxrQ0FnT0M7OztBQTlOQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDBCQUFjLEdBQVcsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFsYkxpc3RlbmVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxwblBvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvYWRCYWxhbmNlckFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3RvY29sPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2xQb2xpY3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0QWN0aW9uOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0cz86IEFsYkxpc3RlbmVyVGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZUNvZ25pdG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY29wZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2Vzc2lvbkNvb2tpZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXNzaW9uVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlclBvb2xBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlclBvb2xDbGllbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyUG9vbERvbWFpbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0b1RvVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZUNvZ25pdG9PdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0aGVudGljYXRpb25fcmVxdWVzdF9leHRyYV9wYXJhbXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMpLFxuICAgIG9uX3VuYXV0aGVudGljYXRlZF9yZXF1ZXN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCksXG4gICAgc2NvcGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NvcGUpLFxuICAgIHNlc3Npb25fY29va2llX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2Vzc2lvbkNvb2tpZU5hbWUpLFxuICAgIHNlc3Npb25fdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zZXNzaW9uVGltZW91dCksXG4gICAgdXNlcl9wb29sX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VyUG9vbEFybiksXG4gICAgdXNlcl9wb29sX2NsaWVudF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VyUG9vbENsaWVudElkKSxcbiAgICB1c2VyX3Bvb2xfZG9tYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJQb29sRG9tYWluKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0b091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMgPSB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NvcGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjb3BlID0gdGhpcy5fc2NvcGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXNzaW9uQ29va2llTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2Vzc2lvbkNvb2tpZU5hbWUgPSB0aGlzLl9zZXNzaW9uQ29va2llTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nlc3Npb25UaW1lb3V0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXNzaW9uVGltZW91dCA9IHRoaXMuX3Nlc3Npb25UaW1lb3V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlclBvb2xBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJQb29sQXJuID0gdGhpcy5fdXNlclBvb2xBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VyUG9vbENsaWVudElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyUG9vbENsaWVudElkID0gdGhpcy5fdXNlclBvb2xDbGllbnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJQb29sRG9tYWluKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyUG9vbERvbWFpbiA9IHRoaXMuX3VzZXJQb29sRG9tYWluO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0byB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NvcGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXNzaW9uQ29va2llTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nlc3Npb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlclBvb2xBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VyUG9vbENsaWVudElkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlclBvb2xEb21haW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zID0gdmFsdWUuYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXM7XG4gICAgICB0aGlzLl9vblVuYXV0aGVudGljYXRlZFJlcXVlc3QgPSB2YWx1ZS5vblVuYXV0aGVudGljYXRlZFJlcXVlc3Q7XG4gICAgICB0aGlzLl9zY29wZSA9IHZhbHVlLnNjb3BlO1xuICAgICAgdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgPSB2YWx1ZS5zZXNzaW9uQ29va2llTmFtZTtcbiAgICAgIHRoaXMuX3Nlc3Npb25UaW1lb3V0ID0gdmFsdWUuc2Vzc2lvblRpbWVvdXQ7XG4gICAgICB0aGlzLl91c2VyUG9vbEFybiA9IHZhbHVlLnVzZXJQb29sQXJuO1xuICAgICAgdGhpcy5fdXNlclBvb2xDbGllbnRJZCA9IHZhbHVlLnVzZXJQb29sQ2xpZW50SWQ7XG4gICAgICB0aGlzLl91c2VyUG9vbERvbWFpbiA9IHZhbHVlLnVzZXJQb29sRG9tYWluO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF1dGhlbnRpY2F0aW9uX3JlcXVlc3RfZXh0cmFfcGFyYW1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0aGVudGljYXRpb25fcmVxdWVzdF9leHRyYV9wYXJhbXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcygpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXM7XG4gIH1cblxuICAvLyBvbl91bmF1dGhlbnRpY2F0ZWRfcmVxdWVzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCkge1xuICAgIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdDtcbiAgfVxuXG4gIC8vIHNjb3BlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NvcGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjb3BlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NvcGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjb3BlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY29wZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjb3BlKCkge1xuICAgIHRoaXMuX3Njb3BlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY29wZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY29wZTtcbiAgfVxuXG4gIC8vIHNlc3Npb25fY29va2llX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXNzaW9uQ29va2llTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbkNvb2tpZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXNzaW9uX2Nvb2tpZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXNzaW9uQ29va2llTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXNzaW9uQ29va2llTmFtZSgpIHtcbiAgICB0aGlzLl9zZXNzaW9uQ29va2llTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbkNvb2tpZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWU7XG4gIH1cblxuICAvLyBzZXNzaW9uX3RpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXNzaW9uVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc2Vzc2lvblRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXNzaW9uX3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlc3Npb25UaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlc3Npb25UaW1lb3V0KCkge1xuICAgIHRoaXMuX3Nlc3Npb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXNzaW9uVGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uVGltZW91dDtcbiAgfVxuXG4gIC8vIHVzZXJfcG9vbF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdXNlclBvb2xBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclBvb2xBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJQb29sQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQXJuO1xuICB9XG5cbiAgLy8gdXNlcl9wb29sX2NsaWVudF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VyUG9vbENsaWVudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyUG9vbENsaWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2NsaWVudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclBvb2xDbGllbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlclBvb2xDbGllbnRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyUG9vbENsaWVudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJQb29sQ2xpZW50SWQ7XG4gIH1cblxuICAvLyB1c2VyX3Bvb2xfZG9tYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VzZXJQb29sRG9tYWluPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyUG9vbERvbWFpbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfcG9vbF9kb21haW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJQb29sRG9tYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyUG9vbERvbWFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyUG9vbERvbWFpbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyUG9vbERvbWFpbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aG9yaXphdGlvbkVuZHBvaW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbGllbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbGllbnRTZWNyZXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlzc3Vlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY29wZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2Vzc2lvbkNvb2tpZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXNzaW9uVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b2tlbkVuZHBvaW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VySW5mb0VuZHBvaW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjVG9UZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlT2lkY091dHB1dFJlZmVyZW5jZSB8IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyksXG4gICAgYXV0aG9yaXphdGlvbl9lbmRwb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemF0aW9uRW5kcG9pbnQpLFxuICAgIGNsaWVudF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRJZCksXG4gICAgY2xpZW50X3NlY3JldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbGllbnRTZWNyZXQpLFxuICAgIGlzc3VlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pc3N1ZXIpLFxuICAgIG9uX3VuYXV0aGVudGljYXRlZF9yZXF1ZXN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCksXG4gICAgc2NvcGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NvcGUpLFxuICAgIHNlc3Npb25fY29va2llX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2Vzc2lvbkNvb2tpZU5hbWUpLFxuICAgIHNlc3Npb25fdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zZXNzaW9uVGltZW91dCksXG4gICAgdG9rZW5fZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudG9rZW5FbmRwb2ludCksXG4gICAgdXNlcl9pbmZvX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJJbmZvRW5kcG9pbnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aG9yaXphdGlvbkVuZHBvaW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRob3JpemF0aW9uRW5kcG9pbnQgPSB0aGlzLl9hdXRob3JpemF0aW9uRW5kcG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbGllbnRJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50SWQgPSB0aGlzLl9jbGllbnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NsaWVudFNlY3JldCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50U2VjcmV0ID0gdGhpcy5fY2xpZW50U2VjcmV0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faXNzdWVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pc3N1ZXIgPSB0aGlzLl9pc3N1ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vblVuYXV0aGVudGljYXRlZFJlcXVlc3QpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Njb3BlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY29wZSA9IHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlc3Npb25Db29raWVOYW1lID0gdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXNzaW9uVGltZW91dCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2Vzc2lvblRpbWVvdXQgPSB0aGlzLl9zZXNzaW9uVGltZW91dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rva2VuRW5kcG9pbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRva2VuRW5kcG9pbnQgPSB0aGlzLl90b2tlbkVuZHBvaW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlckluZm9FbmRwb2ludCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlckluZm9FbmRwb2ludCA9IHRoaXMuX3VzZXJJbmZvRW5kcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRob3JpemF0aW9uRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbGllbnRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NsaWVudFNlY3JldCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lzc3VlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Njb3BlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rva2VuRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VySW5mb0VuZHBvaW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHZhbHVlLmF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zO1xuICAgICAgdGhpcy5fYXV0aG9yaXphdGlvbkVuZHBvaW50ID0gdmFsdWUuYXV0aG9yaXphdGlvbkVuZHBvaW50O1xuICAgICAgdGhpcy5fY2xpZW50SWQgPSB2YWx1ZS5jbGllbnRJZDtcbiAgICAgIHRoaXMuX2NsaWVudFNlY3JldCA9IHZhbHVlLmNsaWVudFNlY3JldDtcbiAgICAgIHRoaXMuX2lzc3VlciA9IHZhbHVlLmlzc3VlcjtcbiAgICAgIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHZhbHVlLm9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdDtcbiAgICAgIHRoaXMuX3Njb3BlID0gdmFsdWUuc2NvcGU7XG4gICAgICB0aGlzLl9zZXNzaW9uQ29va2llTmFtZSA9IHZhbHVlLnNlc3Npb25Db29raWVOYW1lO1xuICAgICAgdGhpcy5fc2Vzc2lvblRpbWVvdXQgPSB2YWx1ZS5zZXNzaW9uVGltZW91dDtcbiAgICAgIHRoaXMuX3Rva2VuRW5kcG9pbnQgPSB2YWx1ZS50b2tlbkVuZHBvaW50O1xuICAgICAgdGhpcy5fdXNlckluZm9FbmRwb2ludCA9IHZhbHVlLnVzZXJJbmZvRW5kcG9pbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0aGVudGljYXRpb25fcmVxdWVzdF9leHRyYV9wYXJhbXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdXRoZW50aWNhdGlvbl9yZXF1ZXN0X2V4dHJhX3BhcmFtcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zKCkge1xuICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uUmVxdWVzdEV4dHJhUGFyYW1zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcztcbiAgfVxuXG4gIC8vIGF1dGhvcml6YXRpb25fZW5kcG9pbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXV0aG9yaXphdGlvbkVuZHBvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRob3JpemF0aW9uRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRob3JpemF0aW9uX2VuZHBvaW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRob3JpemF0aW9uRW5kcG9pbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25FbmRwb2ludCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemF0aW9uRW5kcG9pbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvbkVuZHBvaW50O1xuICB9XG5cbiAgLy8gY2xpZW50X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NsaWVudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbGllbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2xpZW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsaWVudElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsaWVudElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudElkO1xuICB9XG5cbiAgLy8gY2xpZW50X3NlY3JldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbGllbnRTZWNyZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsaWVudFNlY3JldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF9zZWNyZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsaWVudFNlY3JldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xpZW50U2VjcmV0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsaWVudFNlY3JldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRTZWNyZXQ7XG4gIH1cblxuICAvLyBpc3N1ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaXNzdWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpc3N1ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpc3N1ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlzc3Vlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXNzdWVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlzc3VlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pc3N1ZXI7XG4gIH1cblxuICAvLyBvbl91bmF1dGhlbnRpY2F0ZWRfcmVxdWVzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCkge1xuICAgIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uVW5hdXRoZW50aWNhdGVkUmVxdWVzdDtcbiAgfVxuXG4gIC8vIHNjb3BlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NvcGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjb3BlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NvcGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjb3BlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY29wZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjb3BlKCkge1xuICAgIHRoaXMuX3Njb3BlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY29wZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY29wZTtcbiAgfVxuXG4gIC8vIHNlc3Npb25fY29va2llX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXNzaW9uQ29va2llTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbkNvb2tpZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXNzaW9uX2Nvb2tpZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXNzaW9uQ29va2llTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXNzaW9uQ29va2llTmFtZSgpIHtcbiAgICB0aGlzLl9zZXNzaW9uQ29va2llTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbkNvb2tpZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbkNvb2tpZU5hbWU7XG4gIH1cblxuICAvLyBzZXNzaW9uX3RpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXNzaW9uVGltZW91dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc2Vzc2lvblRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXNzaW9uX3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlc3Npb25UaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXNzaW9uVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlc3Npb25UaW1lb3V0KCkge1xuICAgIHRoaXMuX3Nlc3Npb25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXNzaW9uVGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uVGltZW91dDtcbiAgfVxuXG4gIC8vIHRva2VuX2VuZHBvaW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Rva2VuRW5kcG9pbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRva2VuRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0b2tlbl9lbmRwb2ludCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdG9rZW5FbmRwb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdG9rZW5FbmRwb2ludCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0b2tlbkVuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuRW5kcG9pbnQ7XG4gIH1cblxuICAvLyB1c2VyX2luZm9fZW5kcG9pbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdXNlckluZm9FbmRwb2ludD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlckluZm9FbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfaW5mb19lbmRwb2ludCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlckluZm9FbmRwb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlckluZm9FbmRwb2ludCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VySW5mb0VuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvRW5kcG9pbnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZUJvZHk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzQ29kZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZpeGVkUmVzcG9uc2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlT3V0cHV0UmVmZXJlbmNlIHwgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgbWVzc2FnZV9ib2R5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2VCb2R5KSxcbiAgICBzdGF0dXNfY29kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0dXNDb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRml4ZWRSZXNwb25zZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250ZW50VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29udGVudFR5cGUgPSB0aGlzLl9jb250ZW50VHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VCb2R5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXNzYWdlQm9keSA9IHRoaXMuX21lc3NhZ2VCb2R5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdHVzQ29kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdHVzQ29kZSA9IHRoaXMuX3N0YXR1c0NvZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29udGVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXNzYWdlQm9keSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gdmFsdWUuY29udGVudFR5cGU7XG4gICAgICB0aGlzLl9tZXNzYWdlQm9keSA9IHZhbHVlLm1lc3NhZ2VCb2R5O1xuICAgICAgdGhpcy5fc3RhdHVzQ29kZSA9IHZhbHVlLnN0YXR1c0NvZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY29udGVudF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbnRlbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRlbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGVudFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO1xuICB9XG5cbiAgLy8gbWVzc2FnZV9ib2R5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lc3NhZ2VCb2R5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXNzYWdlQm9keSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2VfYm9keScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzc2FnZUJvZHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2VCb2R5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWVzc2FnZUJvZHkoKSB7XG4gICAgdGhpcy5fbWVzc2FnZUJvZHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VCb2R5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VCb2R5O1xuICB9XG5cbiAgLy8gc3RhdHVzX2NvZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0dXNDb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXNDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzX2NvZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1c0NvZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1c0NvZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0dXNDb2RlKCkge1xuICAgIHRoaXMuX3N0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0NvZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzQ29kZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZHVyYXRpb246IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRTdGlja2luZXNzVG9UZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3NPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGR1cmF0aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmR1cmF0aW9uKSxcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2R1cmF0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2R1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZHVyYXRpb24gPSB2YWx1ZS5kdXJhdGlvbjtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGR1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2R1cmF0aW9uPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2R1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZHVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZHVyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgICB3ZWlnaHQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0aWNraW5lc3M/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRHcm91cDogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFRhcmdldEdyb3VwW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVG9UZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZE91dHB1dFJlZmVyZW5jZSB8IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdGlja2luZXNzOiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzc1RvVGVycmFmb3JtKHN0cnVjdCEuc3RpY2tpbmVzcyksXG4gICAgdGFyZ2V0X2dyb3VwOiBjZGt0Zi5saXN0TWFwcGVyKGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUYXJnZXRHcm91cFRvVGVycmFmb3JtKShzdHJ1Y3QhLnRhcmdldEdyb3VwKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zdGlja2luZXNzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGlja2luZXNzID0gdGhpcy5fc3RpY2tpbmVzcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldEdyb3VwKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRHcm91cCA9IHRoaXMuX3RhcmdldEdyb3VwO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0aWNraW5lc3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldEdyb3VwID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdGlja2luZXNzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zdGlja2luZXNzO1xuICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSB2YWx1ZS50YXJnZXRHcm91cDtcbiAgICB9XG4gIH1cblxuICAvLyBzdGlja2luZXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0aWNraW5lc3MgPSBuZXcgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3RpY2tpbmVzc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzdGlja2luZXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGlja2luZXNzO1xuICB9XG4gIHB1YmxpYyBwdXRTdGlja2luZXNzKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkU3RpY2tpbmVzcykge1xuICAgIHRoaXMuX3N0aWNraW5lc3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0aWNraW5lc3MoKSB7XG4gICAgdGhpcy5fc3RpY2tpbmVzcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGlja2luZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNraW5lc3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRHcm91cD86IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUYXJnZXRHcm91cFtdOyBcbiAgcHVibGljIGdldCB0YXJnZXRHcm91cCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFyZ2V0X2dyb3VwJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXAodmFsdWU6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkZvcndhcmRUYXJnZXRHcm91cFtdKSB7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0R3JvdXA7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXRoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3RvY29sPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHF1ZXJ5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXR1c0NvZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0VG9UZXJyYWZvcm0oc3RydWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3RPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25SZWRpcmVjdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhvc3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdCksXG4gICAgcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXRoKSxcbiAgICBwb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHByb3RvY29sOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByb3RvY29sKSxcbiAgICBxdWVyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5xdWVyeSksXG4gICAgc3RhdHVzX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzQ29kZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ob3N0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ob3N0ID0gdGhpcy5faG9zdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhdGggPSB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9ydCA9IHRoaXMuX3BvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm90b2NvbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvdG9jb2wgPSB0aGlzLl9wcm90b2NvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3F1ZXJ5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5xdWVyeSA9IHRoaXMuX3F1ZXJ5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdHVzQ29kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdHVzQ29kZSA9IHRoaXMuX3N0YXR1c0NvZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25SZWRpcmVjdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hvc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcXVlcnkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ob3N0ID0gdmFsdWUuaG9zdDtcbiAgICAgIHRoaXMuX3BhdGggPSB2YWx1ZS5wYXRoO1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgICB0aGlzLl9wcm90b2NvbCA9IHZhbHVlLnByb3RvY29sO1xuICAgICAgdGhpcy5fcXVlcnkgPSB2YWx1ZS5xdWVyeTtcbiAgICAgIHRoaXMuX3N0YXR1c0NvZGUgPSB2YWx1ZS5zdGF0dXNDb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhvc3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaG9zdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3N0KCkge1xuICAgIHRoaXMuX2hvc3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhvc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgfVxuXG4gIC8vIHBhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXRoKCkge1xuICAgIHRoaXMuX3BhdGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3RvY29sPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm90b2NvbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm90b2NvbCgpIHtcbiAgICB0aGlzLl9wcm90b2NvbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XG4gIH1cblxuICAvLyBxdWVyeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdWVyeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWVyeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcXVlcnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3F1ZXJ5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnkoKSB7XG4gICAgdGhpcy5fcXVlcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHF1ZXJ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICB9XG5cbiAgLy8gc3RhdHVzX2NvZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdHVzQ29kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19jb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXNDb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXNDb2RlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0NvZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzQ29kZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yZGVyPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRHcm91cEFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhlbnRpY2F0ZUNvZ25pdG8/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVDb2duaXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhlbnRpY2F0ZU9pZGM/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpeGVkUmVzcG9uc2U/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvcndhcmQ/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZGlyZWN0PzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvcmRlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5vcmRlciksXG4gICAgdGFyZ2V0X2dyb3VwX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXJnZXRHcm91cEFybiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICBhdXRoZW50aWNhdGVfY29nbml0bzogYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0b1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aGVudGljYXRlQ29nbml0byksXG4gICAgYXV0aGVudGljYXRlX29pZGM6IGFsYkxpc3RlbmVyRGVmYXVsdEFjdGlvbkF1dGhlbnRpY2F0ZU9pZGNUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhlbnRpY2F0ZU9pZGMpLFxuICAgIGZpeGVkX3Jlc3BvbnNlOiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlVG9UZXJyYWZvcm0oc3RydWN0IS5maXhlZFJlc3BvbnNlKSxcbiAgICBmb3J3YXJkOiBhbGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVG9UZXJyYWZvcm0oc3RydWN0IS5mb3J3YXJkKSxcbiAgICByZWRpcmVjdDogYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uUmVkaXJlY3RUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZGlyZWN0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYkxpc3RlbmVyVGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWFkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxiTGlzdGVuZXJUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IEFsYkxpc3RlbmVyVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgfCBBbGJMaXN0ZW5lclRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVhZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWFkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxiTGlzdGVuZXJUaW1lb3V0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBbGJMaXN0ZW5lclRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWFkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWFkID0gdGhpcy5fcmVhZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFsYkxpc3RlbmVyVGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWFkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWFkID0gdmFsdWUucmVhZDtcbiAgICB9XG4gIH1cblxuICAvLyByZWFkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlYWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWFkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWFkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWFkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVhZCgpIHtcbiAgICB0aGlzLl9yZWFkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWFkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWQ7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBbGJMaXN0ZW5lciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hbGJfbGlzdGVuZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEFsYkxpc3RlbmVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYWxiX2xpc3RlbmVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FscG5Qb2xpY3kgPSBjb25maWcuYWxwblBvbGljeTtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IGNvbmZpZy5jZXJ0aWZpY2F0ZUFybjtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJBcm4gPSBjb25maWcubG9hZEJhbGFuY2VyQXJuO1xuICAgIHRoaXMuX3BvcnQgPSBjb25maWcucG9ydDtcbiAgICB0aGlzLl9wcm90b2NvbCA9IGNvbmZpZy5wcm90b2NvbDtcbiAgICB0aGlzLl9zc2xQb2xpY3kgPSBjb25maWcuc3NsUG9saWN5O1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fZGVmYXVsdEFjdGlvbiA9IGNvbmZpZy5kZWZhdWx0QWN0aW9uO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFscG5fcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FscG5Qb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFscG5Qb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbHBuX3BvbGljeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxwblBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWxwblBvbGljeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFscG5Qb2xpY3koKSB7XG4gICAgdGhpcy5fYWxwblBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxwblBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbHBuUG9saWN5O1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjZXJ0aWZpY2F0ZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBjZXJ0aWZpY2F0ZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDZXJ0aWZpY2F0ZUFybigpIHtcbiAgICB0aGlzLl9jZXJ0aWZpY2F0ZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2VydGlmaWNhdGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2VydGlmaWNhdGVBcm47XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbG9hZEJhbGFuY2VyQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9hZEJhbGFuY2VyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2VyQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRCYWxhbmNlckFybjtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByb3RvY29sIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvdG9jb2w/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdG9jb2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb3RvY29sKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm90b2NvbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3RvY29sKCkge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm90b2NvbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm90b2NvbDtcbiAgfVxuXG4gIC8vIHNzbF9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zc2xQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNzbFBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NzbF9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNzbFBvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NsUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NsUG9saWN5KCkge1xuICAgIHRoaXMuX3NzbFBvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzbFBvbGljeTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBkZWZhdWx0X2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZWZhdWx0QWN0aW9uPzogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uW107IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRBY3Rpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RlZmF1bHRfYWN0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdEFjdGlvbih2YWx1ZTogQWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uW10pIHtcbiAgICB0aGlzLl9kZWZhdWx0QWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEFjdGlvbjtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IEFsYkxpc3RlbmVyVGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogQWxiTGlzdGVuZXJUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbHBuX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWxwblBvbGljeSksXG4gICAgICBjZXJ0aWZpY2F0ZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NlcnRpZmljYXRlQXJuKSxcbiAgICAgIGxvYWRfYmFsYW5jZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sb2FkQmFsYW5jZXJBcm4pLFxuICAgICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcG9ydCksXG4gICAgICBwcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJvdG9jb2wpLFxuICAgICAgc3NsX3BvbGljeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3NsUG9saWN5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgZGVmYXVsdF9hY3Rpb246IGNka3RmLmxpc3RNYXBwZXIoYWxiTGlzdGVuZXJEZWZhdWx0QWN0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2RlZmF1bHRBY3Rpb24pLFxuICAgICAgdGltZW91dHM6IGFsYkxpc3RlbmVyVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=