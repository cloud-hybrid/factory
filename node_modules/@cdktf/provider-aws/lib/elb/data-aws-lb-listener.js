"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsLbListener = exports.DataAwsLbListenerDefaultAction = exports.DataAwsLbListenerDefaultActionRedirect = exports.DataAwsLbListenerDefaultActionForward = exports.DataAwsLbListenerDefaultActionForwardTargetGroup = exports.DataAwsLbListenerDefaultActionForwardStickiness = exports.DataAwsLbListenerDefaultActionFixedResponse = exports.DataAwsLbListenerDefaultActionAuthenticateOidc = exports.DataAwsLbListenerDefaultActionAuthenticateCognito = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultActionAuthenticateCognito extends cdktf.ComplexComputedList {
    // authentication_request_extra_params - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authenticationRequestExtraParams() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authentication_request_extra_params');
    }
    // on_unauthenticated_request - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    // scope - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get scope() {
        return this.getStringAttribute('scope');
    }
    // session_cookie_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    // session_timeout - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    // user_pool_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userPoolArn() {
        return this.getStringAttribute('user_pool_arn');
    }
    // user_pool_client_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userPoolClientId() {
        return this.getStringAttribute('user_pool_client_id');
    }
    // user_pool_domain - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userPoolDomain() {
        return this.getStringAttribute('user_pool_domain');
    }
}
exports.DataAwsLbListenerDefaultActionAuthenticateCognito = DataAwsLbListenerDefaultActionAuthenticateCognito;
_a = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultActionAuthenticateCognito[_a] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultActionAuthenticateCognito", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultActionAuthenticateOidc extends cdktf.ComplexComputedList {
    // authentication_request_extra_params - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authenticationRequestExtraParams() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authentication_request_extra_params');
    }
    // authorization_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authorizationEndpoint() {
        return this.getStringAttribute('authorization_endpoint');
    }
    // client_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    // client_secret - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clientSecret() {
        return this.getStringAttribute('client_secret');
    }
    // issuer - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get issuer() {
        return this.getStringAttribute('issuer');
    }
    // on_unauthenticated_request - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get onUnauthenticatedRequest() {
        return this.getStringAttribute('on_unauthenticated_request');
    }
    // scope - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get scope() {
        return this.getStringAttribute('scope');
    }
    // session_cookie_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sessionCookieName() {
        return this.getStringAttribute('session_cookie_name');
    }
    // session_timeout - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sessionTimeout() {
        return this.getNumberAttribute('session_timeout');
    }
    // token_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tokenEndpoint() {
        return this.getStringAttribute('token_endpoint');
    }
    // user_info_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userInfoEndpoint() {
        return this.getStringAttribute('user_info_endpoint');
    }
}
exports.DataAwsLbListenerDefaultActionAuthenticateOidc = DataAwsLbListenerDefaultActionAuthenticateOidc;
_b = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultActionAuthenticateOidc[_b] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultActionAuthenticateOidc", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultActionFixedResponse extends cdktf.ComplexComputedList {
    // content_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    // message_body - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get messageBody() {
        return this.getStringAttribute('message_body');
    }
    // status_code - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
}
exports.DataAwsLbListenerDefaultActionFixedResponse = DataAwsLbListenerDefaultActionFixedResponse;
_c = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultActionFixedResponse[_c] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultActionFixedResponse", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultActionForwardStickiness extends cdktf.ComplexComputedList {
    // duration - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get duration() {
        return this.getNumberAttribute('duration');
    }
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsLbListenerDefaultActionForwardStickiness = DataAwsLbListenerDefaultActionForwardStickiness;
_d = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultActionForwardStickiness[_d] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultActionForwardStickiness", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultActionForwardTargetGroup extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // weight - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get weight() {
        return this.getNumberAttribute('weight');
    }
}
exports.DataAwsLbListenerDefaultActionForwardTargetGroup = DataAwsLbListenerDefaultActionForwardTargetGroup;
_e = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultActionForwardTargetGroup[_e] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultActionForwardTargetGroup", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultActionForward extends cdktf.ComplexComputedList {
    // stickiness - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get stickiness() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stickiness');
    }
    // target_group - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get targetGroup() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('target_group');
    }
}
exports.DataAwsLbListenerDefaultActionForward = DataAwsLbListenerDefaultActionForward;
_f = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultActionForward[_f] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultActionForward", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultActionRedirect extends cdktf.ComplexComputedList {
    // host - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get host() {
        return this.getStringAttribute('host');
    }
    // path - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get path() {
        return this.getStringAttribute('path');
    }
    // port - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get port() {
        return this.getStringAttribute('port');
    }
    // protocol - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // query - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get query() {
        return this.getStringAttribute('query');
    }
    // status_code - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get statusCode() {
        return this.getStringAttribute('status_code');
    }
}
exports.DataAwsLbListenerDefaultActionRedirect = DataAwsLbListenerDefaultActionRedirect;
_g = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultActionRedirect[_g] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultActionRedirect", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLbListenerDefaultAction extends cdktf.ComplexComputedList {
    // authenticate_cognito - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authenticateCognito() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authenticate_cognito');
    }
    // authenticate_oidc - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authenticateOidc() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('authenticate_oidc');
    }
    // fixed_response - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get fixedResponse() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('fixed_response');
    }
    // forward - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get forward() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('forward');
    }
    // order - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get order() {
        return this.getNumberAttribute('order');
    }
    // redirect - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get redirect() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('redirect');
    }
    // target_group_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get targetGroupArn() {
        return this.getStringAttribute('target_group_arn');
    }
    // type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsLbListenerDefaultAction = DataAwsLbListenerDefaultAction;
_h = JSII_RTTI_SYMBOL_1;
DataAwsLbListenerDefaultAction[_h] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListenerDefaultAction", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener}.
 *
 * @stability stable
 */
class DataAwsLbListener extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_lb_listener',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._loadBalancerArn = config.loadBalancerArn;
        this._port = config.port;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alpn_policy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get alpnPolicy() {
        return this.getStringAttribute('alpn_policy');
    }
    // arn - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // certificate_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    // default_action - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    defaultAction(index) {
        return new DataAwsLbListenerDefaultAction(this, 'default_action', index);
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
    /**
     * @stability stable
     */
    resetLoadBalancerArn() {
        this._loadBalancerArn = undefined;
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
    // protocol - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    // ssl_policy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sslPolicy() {
        return this.getStringAttribute('ssl_policy');
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
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
            port: cdktf.numberToTerraform(this._port),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsLbListener = DataAwsLbListener;
_j = JSII_RTTI_SYMBOL_1;
DataAwsLbListener[_j] = { fqn: "@cdktf/provider-aws.elb.DataAwsLbListener", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsLbListener.tfResourceType = "aws_lb_listener";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGItbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWxiL2RhdGEtYXdzLWxiLWxpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7O0FBVy9CLE1BQWEsaURBQWtELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5Rix5RkFBeUY7Ozs7SUFDekYsSUFBVyxnQ0FBZ0M7UUFDekMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHFDQUFxQyxDQUFRLENBQUM7SUFDdEYsQ0FBQztJQUVELGdGQUFnRjs7OztJQUNoRixJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCwyREFBMkQ7Ozs7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHlFQUF5RTs7OztJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxxRUFBcUU7Ozs7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG1FQUFtRTs7OztJQUNuRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlFQUF5RTs7OztJQUN6RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxzRUFBc0U7Ozs7SUFDdEUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8s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LENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekQsQ0FBQztJQUNKLENBQUM7O0FBOUhILDhDQStIQzs7O0FBN0hDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csZ0NBQWMsR0FBVyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0xiTGlzdGVuZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvYWRCYWxhbmNlckFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xiTGlzdGVuZXJEZWZhdWx0QWN0aW9uQXV0aGVudGljYXRlQ29nbml0byBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF1dGhlbnRpY2F0aW9uX3JlcXVlc3RfZXh0cmFfcGFyYW1zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25SZXF1ZXN0RXh0cmFQYXJhbXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2F1dGhlbnRpY2F0aW9uX3JlcXVlc3RfZXh0cmFfcGFyYW1zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvblVuYXV0aGVudGljYXRlZFJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvbl91bmF1dGhlbnRpY2F0ZWRfcmVxdWVzdCcpO1xuICB9XG5cbiAgLy8gc2NvcGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Njb3BlJyk7XG4gIH1cblxuICAvLyBzZXNzaW9uX2Nvb2tpZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2Vzc2lvbkNvb2tpZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXNzaW9uX2Nvb2tpZV9uYW1lJyk7XG4gIH1cblxuICAvLyBzZXNzaW9uX3RpbWVvdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXNzaW9uVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Nlc3Npb25fdGltZW91dCcpO1xuICB9XG5cbiAgLy8gdXNlcl9wb29sX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2FybicpO1xuICB9XG5cbiAgLy8gdXNlcl9wb29sX2NsaWVudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJQb29sQ2xpZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX3Bvb2xfY2xpZW50X2lkJyk7XG4gIH1cblxuICAvLyB1c2VyX3Bvb2xfZG9tYWluIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlclBvb2xEb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX3Bvb2xfZG9tYWluJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25BdXRoZW50aWNhdGVPaWRjIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXV0aGVudGljYXRpb25fcmVxdWVzdF9leHRyYV9wYXJhbXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGlvblJlcXVlc3RFeHRyYVBhcmFtcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYXV0aGVudGljYXRpb25fcmVxdWVzdF9leHRyYV9wYXJhbXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhdXRob3JpemF0aW9uX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aG9yaXphdGlvbl9lbmRwb2ludCcpO1xuICB9XG5cbiAgLy8gY2xpZW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xpZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfaWQnKTtcbiAgfVxuXG4gIC8vIGNsaWVudF9zZWNyZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbGllbnRTZWNyZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfc2VjcmV0Jyk7XG4gIH1cblxuICAvLyBpc3N1ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpc3N1ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpc3N1ZXInKTtcbiAgfVxuXG4gIC8vIG9uX3VuYXV0aGVudGljYXRlZF9yZXF1ZXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb25VbmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fdW5hdXRoZW50aWNhdGVkX3JlcXVlc3QnKTtcbiAgfVxuXG4gIC8vIHNjb3BlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NvcGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY29wZScpO1xuICB9XG5cbiAgLy8gc2Vzc2lvbl9jb29raWVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlc3Npb25Db29raWVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2Vzc2lvbl9jb29raWVfbmFtZScpO1xuICB9XG5cbiAgLy8gc2Vzc2lvbl90aW1lb3V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2Vzc2lvblRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzZXNzaW9uX3RpbWVvdXQnKTtcbiAgfVxuXG4gIC8vIHRva2VuX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdG9rZW5FbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rva2VuX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyB1c2VyX2luZm9fZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VySW5mb0VuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9pbmZvX2VuZHBvaW50Jyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25GaXhlZFJlc3BvbnNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29udGVudF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X3R5cGUnKTtcbiAgfVxuXG4gIC8vIG1lc3NhZ2VfYm9keSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VCb2R5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzc2FnZV9ib2R5Jyk7XG4gIH1cblxuICAvLyBzdGF0dXNfY29kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1c0NvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXNfY29kZScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZFN0aWNraW5lc3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkdXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZHVyYXRpb24nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGJMaXN0ZW5lckRlZmF1bHRBY3Rpb25Gb3J3YXJkVGFyZ2V0R3JvdXAgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIHdlaWdodCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHdlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dlaWdodCcpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xiTGlzdGVuZXJEZWZhdWx0QWN0aW9uRm9yd2FyZCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHN0aWNraW5lc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGlja2luZXNzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGlja2luZXNzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFyZ2V0X2dyb3VwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXAoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhcmdldF9ncm91cCcpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYkxpc3RlbmVyRGVmYXVsdEFjdGlvblJlZGlyZWN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaG9zdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0Jyk7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhdGgnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG5cbiAgLy8gcHJvdG9jb2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3RvY29sJyk7XG4gIH1cblxuICAvLyBxdWVyeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncXVlcnknKTtcbiAgfVxuXG4gIC8vIHN0YXR1c19jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1c19jb2RlJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGJMaXN0ZW5lckRlZmF1bHRBY3Rpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhdXRoZW50aWNhdGVfY29nbml0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0ZUNvZ25pdG8oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2F1dGhlbnRpY2F0ZV9jb2duaXRvJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYXV0aGVudGljYXRlX29pZGMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdXRoZW50aWNhdGVPaWRjKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhdXRoZW50aWNhdGVfb2lkYycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGZpeGVkX3Jlc3BvbnNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZml4ZWRSZXNwb25zZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZml4ZWRfcmVzcG9uc2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBmb3J3YXJkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZm9yd2FyZCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZm9yd2FyZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG9yZGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3JkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdvcmRlcicpO1xuICB9XG5cbiAgLy8gcmVkaXJlY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWRpcmVjdCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVkaXJlY3QnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0YXJnZXRfZ3JvdXBfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXRfZ3JvdXBfYXJuJyk7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGJMaXN0ZW5lciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2xiX2xpc3RlbmVyXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzTGJMaXN0ZW5lckNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbGJfbGlzdGVuZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyQXJuID0gY29uZmlnLmxvYWRCYWxhbmNlckFybjtcbiAgICB0aGlzLl9wb3J0ID0gY29uZmlnLnBvcnQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbHBuX3BvbGljeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFscG5Qb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbHBuX3BvbGljeScpO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cblxuICAvLyBkZWZhdWx0X2FjdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZGVmYXVsdEFjdGlvbihpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGJMaXN0ZW5lckRlZmF1bHRBY3Rpb24odGhpcywgJ2RlZmF1bHRfYWN0aW9uJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxvYWRfYmFsYW5jZXJfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9hZEJhbGFuY2VyQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2FkX2JhbGFuY2VyX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9hZEJhbGFuY2VyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2FkQmFsYW5jZXJBcm4oKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VyQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2FkQmFsYW5jZXJBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZEJhbGFuY2VyQXJuO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3J0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9ydCgpIHtcbiAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnQ7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb3RvY29sKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvdG9jb2wnKTtcbiAgfVxuXG4gIC8vIHNzbF9wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzc2xQb2xpY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfcG9saWN5Jyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZF9iYWxhbmNlcl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xvYWRCYWxhbmNlckFybiksXG4gICAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9wb3J0KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==