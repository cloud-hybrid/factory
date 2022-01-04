"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodedeployDeploymentGroup = exports.codedeployDeploymentGroupTriggerConfigurationToTerraform = exports.codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform = exports.CodedeployDeploymentGroupLoadBalancerInfoOutputReference = exports.codedeployDeploymentGroupLoadBalancerInfoToTerraform = exports.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference = exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform = exports.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference = exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform = exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform = exports.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference = exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform = exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform = exports.codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform = exports.CodedeployDeploymentGroupEcsServiceOutputReference = exports.codedeployDeploymentGroupEcsServiceToTerraform = exports.codedeployDeploymentGroupEc2TagSetToTerraform = exports.codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform = exports.codedeployDeploymentGroupEc2TagFilterToTerraform = exports.CodedeployDeploymentGroupDeploymentStyleOutputReference = exports.codedeployDeploymentGroupDeploymentStyleToTerraform = exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference = exports.codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform = exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference = exports.codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform = exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference = exports.codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform = exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference = exports.codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform = exports.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference = exports.codedeployDeploymentGroupAutoRollbackConfigurationToTerraform = exports.CodedeployDeploymentGroupAlarmConfigurationOutputReference = exports.codedeployDeploymentGroupAlarmConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alarms: cdktf.listMapper(cdktf.stringToTerraform)(struct.alarms),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        ignore_poll_alarm_failure: cdktf.booleanToTerraform(struct.ignorePollAlarmFailure),
    };
}
exports.codedeployDeploymentGroupAlarmConfigurationToTerraform = codedeployDeploymentGroupAlarmConfigurationToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupAlarmConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._alarms) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms;
        }
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._ignorePollAlarmFailure) {
            hasAnyValues = true;
            internalValueResult.ignorePollAlarmFailure = this._ignorePollAlarmFailure;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._alarms = undefined;
            this._enabled = undefined;
            this._ignorePollAlarmFailure = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._alarms = value.alarms;
            this._enabled = value.enabled;
            this._ignorePollAlarmFailure = value.ignorePollAlarmFailure;
        }
    }
    /**
     * @stability stable
     */
    get alarms() {
        return this.getListAttribute('alarms');
    }
    /**
     * @stability stable
     */
    set alarms(value) {
        this._alarms = value;
    }
    /**
     * @stability stable
     */
    resetAlarms() {
        this._alarms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get alarmsInput() {
        return this._alarms;
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
    /**
     * @stability stable
     */
    get ignorePollAlarmFailure() {
        return this.getBooleanAttribute('ignore_poll_alarm_failure');
    }
    /**
     * @stability stable
     */
    set ignorePollAlarmFailure(value) {
        this._ignorePollAlarmFailure = value;
    }
    /**
     * @stability stable
     */
    resetIgnorePollAlarmFailure() {
        this._ignorePollAlarmFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ignorePollAlarmFailureInput() {
        return this._ignorePollAlarmFailure;
    }
}
exports.CodedeployDeploymentGroupAlarmConfigurationOutputReference = CodedeployDeploymentGroupAlarmConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupAlarmConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupAlarmConfigurationOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
    };
}
exports.codedeployDeploymentGroupAutoRollbackConfigurationToTerraform = codedeployDeploymentGroupAutoRollbackConfigurationToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._events) {
            hasAnyValues = true;
            internalValueResult.events = this._events;
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
            this._events = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._events = value.events;
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
    /**
     * @stability stable
     */
    get events() {
        return this.getListAttribute('events');
    }
    /**
     * @stability stable
     */
    set events(value) {
        this._events = value;
    }
    /**
     * @stability stable
     */
    resetEvents() {
        this._events = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventsInput() {
        return this._events;
    }
}
exports.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference = CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference[_b] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_on_timeout: cdktf.stringToTerraform(struct.actionOnTimeout),
        wait_time_in_minutes: cdktf.numberToTerraform(struct.waitTimeInMinutes),
    };
}
exports.codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform = codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference extends cdktf.ComplexObject {
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
        if (this._actionOnTimeout) {
            hasAnyValues = true;
            internalValueResult.actionOnTimeout = this._actionOnTimeout;
        }
        if (this._waitTimeInMinutes) {
            hasAnyValues = true;
            internalValueResult.waitTimeInMinutes = this._waitTimeInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._actionOnTimeout = undefined;
            this._waitTimeInMinutes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._actionOnTimeout = value.actionOnTimeout;
            this._waitTimeInMinutes = value.waitTimeInMinutes;
        }
    }
    /**
     * @stability stable
     */
    get actionOnTimeout() {
        return this.getStringAttribute('action_on_timeout');
    }
    /**
     * @stability stable
     */
    set actionOnTimeout(value) {
        this._actionOnTimeout = value;
    }
    /**
     * @stability stable
     */
    resetActionOnTimeout() {
        this._actionOnTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionOnTimeoutInput() {
        return this._actionOnTimeout;
    }
    /**
     * @stability stable
     */
    get waitTimeInMinutes() {
        return this.getNumberAttribute('wait_time_in_minutes');
    }
    /**
     * @stability stable
     */
    set waitTimeInMinutes(value) {
        this._waitTimeInMinutes = value;
    }
    /**
     * @stability stable
     */
    resetWaitTimeInMinutes() {
        this._waitTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get waitTimeInMinutesInput() {
        return this._waitTimeInMinutes;
    }
}
exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference = CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference[_c] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
    };
}
exports.codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform = codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference extends cdktf.ComplexObject {
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
        if (this._action) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action = value.action;
        }
    }
    /**
     * @stability stable
     */
    get action() {
        return this.getStringAttribute('action');
    }
    /**
     * @stability stable
     */
    set action(value) {
        this._action = value;
    }
    /**
     * @stability stable
     */
    resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action;
    }
}
exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference = CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference[_d] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action: cdktf.stringToTerraform(struct.action),
        termination_wait_time_in_minutes: cdktf.numberToTerraform(struct.terminationWaitTimeInMinutes),
    };
}
exports.codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform = codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference extends cdktf.ComplexObject {
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
        if (this._action) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._terminationWaitTimeInMinutes) {
            hasAnyValues = true;
            internalValueResult.terminationWaitTimeInMinutes = this._terminationWaitTimeInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._action = undefined;
            this._terminationWaitTimeInMinutes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._action = value.action;
            this._terminationWaitTimeInMinutes = value.terminationWaitTimeInMinutes;
        }
    }
    /**
     * @stability stable
     */
    get action() {
        return this.getStringAttribute('action');
    }
    /**
     * @stability stable
     */
    set action(value) {
        this._action = value;
    }
    /**
     * @stability stable
     */
    resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action;
    }
    /**
     * @stability stable
     */
    get terminationWaitTimeInMinutes() {
        return this.getNumberAttribute('termination_wait_time_in_minutes');
    }
    /**
     * @stability stable
     */
    set terminationWaitTimeInMinutes(value) {
        this._terminationWaitTimeInMinutes = value;
    }
    /**
     * @stability stable
     */
    resetTerminationWaitTimeInMinutes() {
        this._terminationWaitTimeInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get terminationWaitTimeInMinutesInput() {
        return this._terminationWaitTimeInMinutes;
    }
}
exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference = CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference[_e] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deployment_ready_option: codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct.deploymentReadyOption),
        green_fleet_provisioning_option: codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct.greenFleetProvisioningOption),
        terminate_blue_instances_on_deployment_success: codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct.terminateBlueInstancesOnDeploymentSuccess),
    };
}
exports.codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform = codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // deployment_ready_option - computed: false, optional: true, required: false
        this._deploymentReadyOption = new CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference(this, "deployment_ready_option", true);
        // green_fleet_provisioning_option - computed: false, optional: true, required: false
        this._greenFleetProvisioningOption = new CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference(this, "green_fleet_provisioning_option", true);
        // terminate_blue_instances_on_deployment_success - computed: false, optional: true, required: false
        this._terminateBlueInstancesOnDeploymentSuccess = new CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference(this, "terminate_blue_instances_on_deployment_success", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _p, _q, _r, _s, _t, _u;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_p = this._deploymentReadyOption) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.deploymentReadyOption = (_q = this._deploymentReadyOption) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        if ((_r = this._greenFleetProvisioningOption) === null || _r === void 0 ? void 0 : _r.internalValue) {
            hasAnyValues = true;
            internalValueResult.greenFleetProvisioningOption = (_s = this._greenFleetProvisioningOption) === null || _s === void 0 ? void 0 : _s.internalValue;
        }
        if ((_t = this._terminateBlueInstancesOnDeploymentSuccess) === null || _t === void 0 ? void 0 : _t.internalValue) {
            hasAnyValues = true;
            internalValueResult.terminateBlueInstancesOnDeploymentSuccess = (_u = this._terminateBlueInstancesOnDeploymentSuccess) === null || _u === void 0 ? void 0 : _u.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deploymentReadyOption.internalValue = undefined;
            this._greenFleetProvisioningOption.internalValue = undefined;
            this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deploymentReadyOption.internalValue = value.deploymentReadyOption;
            this._greenFleetProvisioningOption.internalValue = value.greenFleetProvisioningOption;
            this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value.terminateBlueInstancesOnDeploymentSuccess;
        }
    }
    /**
     * @stability stable
     */
    get deploymentReadyOption() {
        return this._deploymentReadyOption;
    }
    /**
     * @stability stable
     */
    putDeploymentReadyOption(value) {
        this._deploymentReadyOption.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDeploymentReadyOption() {
        this._deploymentReadyOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentReadyOptionInput() {
        return this._deploymentReadyOption.internalValue;
    }
    /**
     * @stability stable
     */
    get greenFleetProvisioningOption() {
        return this._greenFleetProvisioningOption;
    }
    /**
     * @stability stable
     */
    putGreenFleetProvisioningOption(value) {
        this._greenFleetProvisioningOption.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetGreenFleetProvisioningOption() {
        this._greenFleetProvisioningOption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get greenFleetProvisioningOptionInput() {
        return this._greenFleetProvisioningOption.internalValue;
    }
    /**
     * @stability stable
     */
    get terminateBlueInstancesOnDeploymentSuccess() {
        return this._terminateBlueInstancesOnDeploymentSuccess;
    }
    /**
     * @stability stable
     */
    putTerminateBlueInstancesOnDeploymentSuccess(value) {
        this._terminateBlueInstancesOnDeploymentSuccess.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTerminateBlueInstancesOnDeploymentSuccess() {
        this._terminateBlueInstancesOnDeploymentSuccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get terminateBlueInstancesOnDeploymentSuccessInput() {
        return this._terminateBlueInstancesOnDeploymentSuccess.internalValue;
    }
}
exports.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference = CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference[_f] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupDeploymentStyleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deployment_option: cdktf.stringToTerraform(struct.deploymentOption),
        deployment_type: cdktf.stringToTerraform(struct.deploymentType),
    };
}
exports.codedeployDeploymentGroupDeploymentStyleToTerraform = codedeployDeploymentGroupDeploymentStyleToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupDeploymentStyleOutputReference extends cdktf.ComplexObject {
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
        if (this._deploymentOption) {
            hasAnyValues = true;
            internalValueResult.deploymentOption = this._deploymentOption;
        }
        if (this._deploymentType) {
            hasAnyValues = true;
            internalValueResult.deploymentType = this._deploymentType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deploymentOption = undefined;
            this._deploymentType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deploymentOption = value.deploymentOption;
            this._deploymentType = value.deploymentType;
        }
    }
    /**
     * @stability stable
     */
    get deploymentOption() {
        return this.getStringAttribute('deployment_option');
    }
    /**
     * @stability stable
     */
    set deploymentOption(value) {
        this._deploymentOption = value;
    }
    /**
     * @stability stable
     */
    resetDeploymentOption() {
        this._deploymentOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentOptionInput() {
        return this._deploymentOption;
    }
    /**
     * @stability stable
     */
    get deploymentType() {
        return this.getStringAttribute('deployment_type');
    }
    /**
     * @stability stable
     */
    set deploymentType(value) {
        this._deploymentType = value;
    }
    /**
     * @stability stable
     */
    resetDeploymentType() {
        this._deploymentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentTypeInput() {
        return this._deploymentType;
    }
}
exports.CodedeployDeploymentGroupDeploymentStyleOutputReference = CodedeployDeploymentGroupDeploymentStyleOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupDeploymentStyleOutputReference[_g] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupDeploymentStyleOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupEc2TagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.codedeployDeploymentGroupEc2TagFilterToTerraform = codedeployDeploymentGroupEc2TagFilterToTerraform;
function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform = codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform;
function codedeployDeploymentGroupEc2TagSetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform)(struct.ec2TagFilter),
    };
}
exports.codedeployDeploymentGroupEc2TagSetToTerraform = codedeployDeploymentGroupEc2TagSetToTerraform;
function codedeployDeploymentGroupEcsServiceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cluster_name: cdktf.stringToTerraform(struct.clusterName),
        service_name: cdktf.stringToTerraform(struct.serviceName),
    };
}
exports.codedeployDeploymentGroupEcsServiceToTerraform = codedeployDeploymentGroupEcsServiceToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupEcsServiceOutputReference extends cdktf.ComplexObject {
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
        if (this._clusterName) {
            hasAnyValues = true;
            internalValueResult.clusterName = this._clusterName;
        }
        if (this._serviceName) {
            hasAnyValues = true;
            internalValueResult.serviceName = this._serviceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clusterName = undefined;
            this._serviceName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clusterName = value.clusterName;
            this._serviceName = value.serviceName;
        }
    }
    /**
     * @stability stable
     */
    get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    /**
     * @stability stable
     */
    set clusterName(value) {
        this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterNameInput() {
        return this._clusterName;
    }
    /**
     * @stability stable
     */
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    /**
     * @stability stable
     */
    set serviceName(value) {
        this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceNameInput() {
        return this._serviceName;
    }
}
exports.CodedeployDeploymentGroupEcsServiceOutputReference = CodedeployDeploymentGroupEcsServiceOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupEcsServiceOutputReference[_h] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupEcsServiceOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform = codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform;
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform = codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform;
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.listenerArns),
    };
}
exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform = codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference extends cdktf.ComplexObject {
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
        if (this._listenerArns) {
            hasAnyValues = true;
            internalValueResult.listenerArns = this._listenerArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._listenerArns = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._listenerArns = value.listenerArns;
        }
    }
    /**
     * @stability stable
     */
    get listenerArns() {
        return this.getListAttribute('listener_arns');
    }
    /**
     * @stability stable
     */
    set listenerArns(value) {
        this._listenerArns = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get listenerArnsInput() {
        return this._listenerArns;
    }
}
exports.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference = CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference[_j] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform = codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform;
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        listener_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.listenerArns),
    };
}
exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform = codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference extends cdktf.ComplexObject {
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
        if (this._listenerArns) {
            hasAnyValues = true;
            internalValueResult.listenerArns = this._listenerArns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._listenerArns = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._listenerArns = value.listenerArns;
        }
    }
    /**
     * @stability stable
     */
    get listenerArns() {
        return this.getListAttribute('listener_arns');
    }
    /**
     * @stability stable
     */
    set listenerArns(value) {
        this._listenerArns = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get listenerArnsInput() {
        return this._listenerArns;
    }
}
exports.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference = CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference[_k] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prod_traffic_route: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct.prodTrafficRoute),
        target_group: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform)(struct.targetGroup),
        test_traffic_route: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct.testTrafficRoute),
    };
}
exports.codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform = codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // prod_traffic_route - computed: false, optional: false, required: true
        this._prodTrafficRoute = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference(this, "prod_traffic_route", true);
        // test_traffic_route - computed: false, optional: true, required: false
        this._testTrafficRoute = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference(this, "test_traffic_route", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _p, _q, _r, _s;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_p = this._prodTrafficRoute) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.prodTrafficRoute = (_q = this._prodTrafficRoute) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        if (this._targetGroup) {
            hasAnyValues = true;
            internalValueResult.targetGroup = this._targetGroup;
        }
        if ((_r = this._testTrafficRoute) === null || _r === void 0 ? void 0 : _r.internalValue) {
            hasAnyValues = true;
            internalValueResult.testTrafficRoute = (_s = this._testTrafficRoute) === null || _s === void 0 ? void 0 : _s.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._prodTrafficRoute.internalValue = undefined;
            this._targetGroup = undefined;
            this._testTrafficRoute.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._prodTrafficRoute.internalValue = value.prodTrafficRoute;
            this._targetGroup = value.targetGroup;
            this._testTrafficRoute.internalValue = value.testTrafficRoute;
        }
    }
    /**
     * @stability stable
     */
    get prodTrafficRoute() {
        return this._prodTrafficRoute;
    }
    /**
     * @stability stable
     */
    putProdTrafficRoute(value) {
        this._prodTrafficRoute.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prodTrafficRouteInput() {
        return this._prodTrafficRoute.internalValue;
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
    /**
     * @stability stable
     */
    get testTrafficRoute() {
        return this._testTrafficRoute;
    }
    /**
     * @stability stable
     */
    putTestTrafficRoute(value) {
        this._testTrafficRoute.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTestTrafficRoute() {
        this._testTrafficRoute.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get testTrafficRouteInput() {
        return this._testTrafficRoute.internalValue;
    }
}
exports.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference = CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference;
_l = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference[_l] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        elb_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform)(struct.elbInfo),
        target_group_info: cdktf.listMapper(codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform)(struct.targetGroupInfo),
        target_group_pair_info: codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct.targetGroupPairInfo),
    };
}
exports.codedeployDeploymentGroupLoadBalancerInfoToTerraform = codedeployDeploymentGroupLoadBalancerInfoToTerraform;
/**
 * @stability stable
 */
class CodedeployDeploymentGroupLoadBalancerInfoOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // target_group_pair_info - computed: false, optional: true, required: false
        this._targetGroupPairInfo = new CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference(this, "target_group_pair_info", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _p, _q;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._elbInfo) {
            hasAnyValues = true;
            internalValueResult.elbInfo = this._elbInfo;
        }
        if (this._targetGroupInfo) {
            hasAnyValues = true;
            internalValueResult.targetGroupInfo = this._targetGroupInfo;
        }
        if ((_p = this._targetGroupPairInfo) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.targetGroupPairInfo = (_q = this._targetGroupPairInfo) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._elbInfo = undefined;
            this._targetGroupInfo = undefined;
            this._targetGroupPairInfo.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._elbInfo = value.elbInfo;
            this._targetGroupInfo = value.targetGroupInfo;
            this._targetGroupPairInfo.internalValue = value.targetGroupPairInfo;
        }
    }
    /**
     * @stability stable
     */
    get elbInfo() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('elb_info');
    }
    /**
     * @stability stable
     */
    set elbInfo(value) {
        this._elbInfo = value;
    }
    /**
     * @stability stable
     */
    resetElbInfo() {
        this._elbInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get elbInfoInput() {
        return this._elbInfo;
    }
    /**
     * @stability stable
     */
    get targetGroupInfo() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('target_group_info');
    }
    /**
     * @stability stable
     */
    set targetGroupInfo(value) {
        this._targetGroupInfo = value;
    }
    /**
     * @stability stable
     */
    resetTargetGroupInfo() {
        this._targetGroupInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetGroupInfoInput() {
        return this._targetGroupInfo;
    }
    /**
     * @stability stable
     */
    get targetGroupPairInfo() {
        return this._targetGroupPairInfo;
    }
    /**
     * @stability stable
     */
    putTargetGroupPairInfo(value) {
        this._targetGroupPairInfo.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTargetGroupPairInfo() {
        this._targetGroupPairInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetGroupPairInfoInput() {
        return this._targetGroupPairInfo.internalValue;
    }
}
exports.CodedeployDeploymentGroupLoadBalancerInfoOutputReference = CodedeployDeploymentGroupLoadBalancerInfoOutputReference;
_m = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroupLoadBalancerInfoOutputReference[_m] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroupLoadBalancerInfoOutputReference", version: "3.0.1" };
function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform = codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform;
function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        trigger_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.triggerEvents),
        trigger_name: cdktf.stringToTerraform(struct.triggerName),
        trigger_target_arn: cdktf.stringToTerraform(struct.triggerTargetArn),
    };
}
exports.codedeployDeploymentGroupTriggerConfigurationToTerraform = codedeployDeploymentGroupTriggerConfigurationToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group}.
 *
 * @stability stable
 */
class CodedeployDeploymentGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codedeploy_deployment_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // alarm_configuration - computed: false, optional: true, required: false
        this._alarmConfiguration = new CodedeployDeploymentGroupAlarmConfigurationOutputReference(this, "alarm_configuration", true);
        // auto_rollback_configuration - computed: false, optional: true, required: false
        this._autoRollbackConfiguration = new CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration", true);
        // blue_green_deployment_config - computed: false, optional: true, required: false
        this._blueGreenDeploymentConfig = new CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference(this, "blue_green_deployment_config", true);
        // deployment_style - computed: false, optional: true, required: false
        this._deploymentStyle = new CodedeployDeploymentGroupDeploymentStyleOutputReference(this, "deployment_style", true);
        // ecs_service - computed: false, optional: true, required: false
        this._ecsService = new CodedeployDeploymentGroupEcsServiceOutputReference(this, "ecs_service", true);
        // load_balancer_info - computed: false, optional: true, required: false
        this._loadBalancerInfo = new CodedeployDeploymentGroupLoadBalancerInfoOutputReference(this, "load_balancer_info", true);
        this._appName = config.appName;
        this._autoscalingGroups = config.autoscalingGroups;
        this._deploymentConfigName = config.deploymentConfigName;
        this._deploymentGroupName = config.deploymentGroupName;
        this._serviceRoleArn = config.serviceRoleArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._alarmConfiguration.internalValue = config.alarmConfiguration;
        this._autoRollbackConfiguration.internalValue = config.autoRollbackConfiguration;
        this._blueGreenDeploymentConfig.internalValue = config.blueGreenDeploymentConfig;
        this._deploymentStyle.internalValue = config.deploymentStyle;
        this._ec2TagFilter = config.ec2TagFilter;
        this._ec2TagSet = config.ec2TagSet;
        this._ecsService.internalValue = config.ecsService;
        this._loadBalancerInfo.internalValue = config.loadBalancerInfo;
        this._onPremisesInstanceTagFilter = config.onPremisesInstanceTagFilter;
        this._triggerConfiguration = config.triggerConfiguration;
    }
    /**
     * @stability stable
     */
    get appName() {
        return this.getStringAttribute('app_name');
    }
    /**
     * @stability stable
     */
    set appName(value) {
        this._appName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get appNameInput() {
        return this._appName;
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
    get autoscalingGroups() {
        return this.getListAttribute('autoscaling_groups');
    }
    /**
     * @stability stable
     */
    set autoscalingGroups(value) {
        this._autoscalingGroups = value;
    }
    /**
     * @stability stable
     */
    resetAutoscalingGroups() {
        this._autoscalingGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoscalingGroupsInput() {
        return this._autoscalingGroups;
    }
    // compute_platform - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get computePlatform() {
        return this.getStringAttribute('compute_platform');
    }
    /**
     * @stability stable
     */
    get deploymentConfigName() {
        return this.getStringAttribute('deployment_config_name');
    }
    /**
     * @stability stable
     */
    set deploymentConfigName(value) {
        this._deploymentConfigName = value;
    }
    /**
     * @stability stable
     */
    resetDeploymentConfigName() {
        this._deploymentConfigName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentConfigNameInput() {
        return this._deploymentConfigName;
    }
    // deployment_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deploymentGroupId() {
        return this.getStringAttribute('deployment_group_id');
    }
    /**
     * @stability stable
     */
    get deploymentGroupName() {
        return this.getStringAttribute('deployment_group_name');
    }
    /**
     * @stability stable
     */
    set deploymentGroupName(value) {
        this._deploymentGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentGroupNameInput() {
        return this._deploymentGroupName;
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
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceRoleArn(value) {
        this._serviceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceRoleArnInput() {
        return this._serviceRoleArn;
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
    get alarmConfiguration() {
        return this._alarmConfiguration;
    }
    /**
     * @stability stable
     */
    putAlarmConfiguration(value) {
        this._alarmConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAlarmConfiguration() {
        this._alarmConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get alarmConfigurationInput() {
        return this._alarmConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get autoRollbackConfiguration() {
        return this._autoRollbackConfiguration;
    }
    /**
     * @stability stable
     */
    putAutoRollbackConfiguration(value) {
        this._autoRollbackConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAutoRollbackConfiguration() {
        this._autoRollbackConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoRollbackConfigurationInput() {
        return this._autoRollbackConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get blueGreenDeploymentConfig() {
        return this._blueGreenDeploymentConfig;
    }
    /**
     * @stability stable
     */
    putBlueGreenDeploymentConfig(value) {
        this._blueGreenDeploymentConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetBlueGreenDeploymentConfig() {
        this._blueGreenDeploymentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blueGreenDeploymentConfigInput() {
        return this._blueGreenDeploymentConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get deploymentStyle() {
        return this._deploymentStyle;
    }
    /**
     * @stability stable
     */
    putDeploymentStyle(value) {
        this._deploymentStyle.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDeploymentStyle() {
        this._deploymentStyle.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentStyleInput() {
        return this._deploymentStyle.internalValue;
    }
    /**
     * @stability stable
     */
    get ec2TagFilter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ec2_tag_filter');
    }
    /**
     * @stability stable
     */
    set ec2TagFilter(value) {
        this._ec2TagFilter = value;
    }
    /**
     * @stability stable
     */
    resetEc2TagFilter() {
        this._ec2TagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ec2TagFilterInput() {
        return this._ec2TagFilter;
    }
    /**
     * @stability stable
     */
    get ec2TagSet() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ec2_tag_set');
    }
    /**
     * @stability stable
     */
    set ec2TagSet(value) {
        this._ec2TagSet = value;
    }
    /**
     * @stability stable
     */
    resetEc2TagSet() {
        this._ec2TagSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ec2TagSetInput() {
        return this._ec2TagSet;
    }
    /**
     * @stability stable
     */
    get ecsService() {
        return this._ecsService;
    }
    /**
     * @stability stable
     */
    putEcsService(value) {
        this._ecsService.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEcsService() {
        this._ecsService.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ecsServiceInput() {
        return this._ecsService.internalValue;
    }
    /**
     * @stability stable
     */
    get loadBalancerInfo() {
        return this._loadBalancerInfo;
    }
    /**
     * @stability stable
     */
    putLoadBalancerInfo(value) {
        this._loadBalancerInfo.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLoadBalancerInfo() {
        this._loadBalancerInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loadBalancerInfoInput() {
        return this._loadBalancerInfo.internalValue;
    }
    /**
     * @stability stable
     */
    get onPremisesInstanceTagFilter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('on_premises_instance_tag_filter');
    }
    /**
     * @stability stable
     */
    set onPremisesInstanceTagFilter(value) {
        this._onPremisesInstanceTagFilter = value;
    }
    /**
     * @stability stable
     */
    resetOnPremisesInstanceTagFilter() {
        this._onPremisesInstanceTagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onPremisesInstanceTagFilterInput() {
        return this._onPremisesInstanceTagFilter;
    }
    /**
     * @stability stable
     */
    get triggerConfiguration() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('trigger_configuration');
    }
    /**
     * @stability stable
     */
    set triggerConfiguration(value) {
        this._triggerConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetTriggerConfiguration() {
        this._triggerConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get triggerConfigurationInput() {
        return this._triggerConfiguration;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            app_name: cdktf.stringToTerraform(this._appName),
            autoscaling_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._autoscalingGroups),
            deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
            deployment_group_name: cdktf.stringToTerraform(this._deploymentGroupName),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            alarm_configuration: codedeployDeploymentGroupAlarmConfigurationToTerraform(this._alarmConfiguration.internalValue),
            auto_rollback_configuration: codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(this._autoRollbackConfiguration.internalValue),
            blue_green_deployment_config: codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(this._blueGreenDeploymentConfig.internalValue),
            deployment_style: codedeployDeploymentGroupDeploymentStyleToTerraform(this._deploymentStyle.internalValue),
            ec2_tag_filter: cdktf.listMapper(codedeployDeploymentGroupEc2TagFilterToTerraform)(this._ec2TagFilter),
            ec2_tag_set: cdktf.listMapper(codedeployDeploymentGroupEc2TagSetToTerraform)(this._ec2TagSet),
            ecs_service: codedeployDeploymentGroupEcsServiceToTerraform(this._ecsService.internalValue),
            load_balancer_info: codedeployDeploymentGroupLoadBalancerInfoToTerraform(this._loadBalancerInfo.internalValue),
            on_premises_instance_tag_filter: cdktf.listMapper(codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform)(this._onPremisesInstanceTagFilter),
            trigger_configuration: cdktf.listMapper(codedeployDeploymentGroupTriggerConfigurationToTerraform)(this._triggerConfiguration),
        };
    }
}
exports.CodedeployDeploymentGroup = CodedeployDeploymentGroup;
_o = JSII_RTTI_SYMBOL_1;
CodedeployDeploymentGroup[_o] = { fqn: "@cdktf/provider-aws.codedeploy.CodedeployDeploymentGroup", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CodedeployDeploymentGroup.tfResourceType = "aws_codedeploy_deployment_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWRlcGxveS1kZXBsb3ltZW50LWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvZGVkZXBsb3kvY29kZWRlcGxveS1kZXBsb3ltZW50LWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0QvQixTQUFnQixzREFBc0QsQ0FBQyxNQUFpSDtJQUN0TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDakUsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELHlCQUF5QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7S0FDcEYsQ0FBQTtBQUNILENBQUM7QUFWRCx3SEFVQzs7OztBQUVELE1BQWEsMERBQTJELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJakcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNw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LFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM3RixXQUFXLEVBQUUsOENBQThDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDM0Ysa0JBQWtCLEVBQUUsb0RBQW9ELENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUM5RywrQkFBK0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLCtEQUErRCxDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1lBQ3JKLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsd0RBQXdELENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDOUgsQ0FBQztJQUNKLENBQUM7O0FBdldILDhEQXdXQzs7O0FBdFdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csd0NBQWMsR0FBVyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b3NjYWxpbmdHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXBsb3ltZW50Q29uZmlnTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwbG95bWVudEdyb3VwTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VSb2xlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGFybUNvbmZpZ3VyYXRpb24/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQWxhcm1Db25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZz86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwbG95bWVudFN0eWxlPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVjMlRhZ0ZpbHRlcj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdGaWx0ZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVjMlRhZ1NldD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVjc1NlcnZpY2U/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWNzU2VydmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvYWRCYWxhbmNlckluZm8/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBPblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyaWdnZXJDb25maWd1cmF0aW9uPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cFRyaWdnZXJDb25maWd1cmF0aW9uW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBbGFybUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGFybXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlnbm9yZVBvbGxBbGFybUZhaWx1cmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQWxhcm1Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEFsYXJtQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBbGFybUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGFybXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYWxhcm1zKSxcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBpZ25vcmVfcG9sbF9hbGFybV9mYWlsdXJlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pZ25vcmVQb2xsQWxhcm1GYWlsdXJlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEFsYXJtQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQWxhcm1Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGFybXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsYXJtcyA9IHRoaXMuX2FsYXJtcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faWdub3JlUG9sbEFsYXJtRmFpbHVyZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWdub3JlUG9sbEFsYXJtRmFpbHVyZSA9IHRoaXMuX2lnbm9yZVBvbGxBbGFybUZhaWx1cmU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQWxhcm1Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWxhcm1zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lnbm9yZVBvbGxBbGFybUZhaWx1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FsYXJtcyA9IHZhbHVlLmFsYXJtcztcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgICAgdGhpcy5faWdub3JlUG9sbEFsYXJtRmFpbHVyZSA9IHZhbHVlLmlnbm9yZVBvbGxBbGFybUZhaWx1cmU7XG4gICAgfVxuICB9XG5cbiAgLy8gYWxhcm1zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsYXJtcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhbGFybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxhcm1zJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbGFybXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYWxhcm1zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxhcm1zKCkge1xuICAgIHRoaXMuX2FsYXJtcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxhcm1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsYXJtcztcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8gaWdub3JlX3BvbGxfYWxhcm1fZmFpbHVyZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZ25vcmVQb2xsQWxhcm1GYWlsdXJlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpZ25vcmVQb2xsQWxhcm1GYWlsdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2lnbm9yZV9wb2xsX2FsYXJtX2ZhaWx1cmUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpZ25vcmVQb2xsQWxhcm1GYWlsdXJlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pZ25vcmVQb2xsQWxhcm1GYWlsdXJlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWdub3JlUG9sbEFsYXJtRmFpbHVyZSgpIHtcbiAgICB0aGlzLl9pZ25vcmVQb2xsQWxhcm1GYWlsdXJlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZ25vcmVQb2xsQWxhcm1GYWlsdXJlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lnbm9yZVBvbGxBbGFybUZhaWx1cmU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgZXZlbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmV2ZW50cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXZlbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHZhbHVlLmV2ZW50cztcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGV2ZW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ldmVudHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V2ZW50cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXZlbnRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2V2ZW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV2ZW50cygpIHtcbiAgICB0aGlzLl9ldmVudHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2ZW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uT25UaW1lb3V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2FpdFRpbWVJbk1pbnV0ZXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ0RlcGxveW1lbnRSZWFkeU9wdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnRGVwbG95bWVudFJlYWR5T3B0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25fb25fdGltZW91dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY3Rpb25PblRpbWVvdXQpLFxuICAgIHdhaXRfdGltZV9pbl9taW51dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLndhaXRUaW1lSW5NaW51dGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvbk9uVGltZW91dCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9uT25UaW1lb3V0ID0gdGhpcy5fYWN0aW9uT25UaW1lb3V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fd2FpdFRpbWVJbk1pbnV0ZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndhaXRUaW1lSW5NaW51dGVzID0gdGhpcy5fd2FpdFRpbWVJbk1pbnV0ZXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ0RlcGxveW1lbnRSZWFkeU9wdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGlvbk9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dhaXRUaW1lSW5NaW51dGVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb25PblRpbWVvdXQgPSB2YWx1ZS5hY3Rpb25PblRpbWVvdXQ7XG4gICAgICB0aGlzLl93YWl0VGltZUluTWludXRlcyA9IHZhbHVlLndhaXRUaW1lSW5NaW51dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbl9vbl90aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjdGlvbk9uVGltZW91dD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uT25UaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aW9uX29uX3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjdGlvbk9uVGltZW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWN0aW9uT25UaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWN0aW9uT25UaW1lb3V0KCkge1xuICAgIHRoaXMuX2FjdGlvbk9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uT25UaW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbk9uVGltZW91dDtcbiAgfVxuXG4gIC8vIHdhaXRfdGltZV9pbl9taW51dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dhaXRUaW1lSW5NaW51dGVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB3YWl0VGltZUluTWludXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dhaXRfdGltZV9pbl9taW51dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB3YWl0VGltZUluTWludXRlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2FpdFRpbWVJbk1pbnV0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYWl0VGltZUluTWludXRlcygpIHtcbiAgICB0aGlzLl93YWl0VGltZUluTWludXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdFRpbWVJbk1pbnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdFRpbWVJbk1pbnV0ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdHcmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdHcmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdHcmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdHcmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnR3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ0dyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWN0aW9uID0gdGhpcy5fYWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdHcmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb24gPSB2YWx1ZS5hY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjdGlvbigpIHtcbiAgICB0aGlzLl9hY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2VzcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlcm1pbmF0aW9uV2FpdFRpbWVJbk1pbnV0ZXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ1Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2Vzc091dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnVGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uKSxcbiAgICB0ZXJtaW5hdGlvbl93YWl0X3RpbWVfaW5fbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2Vzc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ1Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY3Rpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvbiA9IHRoaXMuX2FjdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rlcm1pbmF0aW9uV2FpdFRpbWVJbk1pbnV0ZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlcm1pbmF0aW9uV2FpdFRpbWVJbk1pbnV0ZXMgPSB0aGlzLl90ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2VzcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rlcm1pbmF0aW9uV2FpdFRpbWVJbk1pbnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlLmFjdGlvbjtcbiAgICAgIHRoaXMuX3Rlcm1pbmF0aW9uV2FpdFRpbWVJbk1pbnV0ZXMgPSB2YWx1ZS50ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY3Rpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY3Rpb24oKSB7XG4gICAgdGhpcy5fYWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICB9XG5cbiAgLy8gdGVybWluYXRpb25fd2FpdF90aW1lX2luX21pbnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVybWluYXRpb25XYWl0VGltZUluTWludXRlcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGVybWluYXRpb25XYWl0VGltZUluTWludXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Rlcm1pbmF0aW9uX3dhaXRfdGltZV9pbl9taW51dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVybWluYXRpb25XYWl0VGltZUluTWludXRlcygpIHtcbiAgICB0aGlzLl90ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZXJtaW5hdGlvbldhaXRUaW1lSW5NaW51dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm1pbmF0aW9uV2FpdFRpbWVJbk1pbnV0ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwbG95bWVudFJlYWR5T3B0aW9uPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdHcmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3M/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ1Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVwbG95bWVudF9yZWFkeV9vcHRpb246IGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnRGVwbG95bWVudFJlYWR5T3B0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5kZXBsb3ltZW50UmVhZHlPcHRpb24pLFxuICAgIGdyZWVuX2ZsZWV0X3Byb3Zpc2lvbmluZ19vcHRpb246IGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnR3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZ3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbiksXG4gICAgdGVybWluYXRlX2JsdWVfaW5zdGFuY2VzX29uX2RlcGxveW1lbnRfc3VjY2VzczogY29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2Vzc1RvVGVycmFmb3JtKHN0cnVjdCEudGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwQmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVwbG95bWVudFJlYWR5T3B0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXBsb3ltZW50UmVhZHlPcHRpb24gPSB0aGlzLl9kZXBsb3ltZW50UmVhZHlPcHRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ncmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ncmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uID0gdGhpcy5fZ3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50ZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2VzcyA9IHRoaXMuX3Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZXBsb3ltZW50UmVhZHlPcHRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RlcGxveW1lbnRSZWFkeU9wdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVwbG95bWVudFJlYWR5T3B0aW9uO1xuICAgICAgdGhpcy5fZ3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZ3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbjtcbiAgICAgIHRoaXMuX3Rlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzLmludGVybmFsVmFsdWUgPSB2YWx1ZS50ZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2VzcztcbiAgICB9XG4gIH1cblxuICAvLyBkZXBsb3ltZW50X3JlYWR5X29wdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXBsb3ltZW50UmVhZHlPcHRpb24gPSBuZXcgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZGVwbG95bWVudF9yZWFkeV9vcHRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudFJlYWR5T3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50UmVhZHlPcHRpb247XG4gIH1cbiAgcHVibGljIHB1dERlcGxveW1lbnRSZWFkeU9wdGlvbih2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdEZXBsb3ltZW50UmVhZHlPcHRpb24pIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50UmVhZHlPcHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlcGxveW1lbnRSZWFkeU9wdGlvbigpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50UmVhZHlPcHRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudFJlYWR5T3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveW1lbnRSZWFkeU9wdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZ3JlZW5fZmxlZXRfcHJvdmlzaW9uaW5nX29wdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uID0gbmV3IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnR3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJncmVlbl9mbGVldF9wcm92aXNpb25pbmdfb3B0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGdyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb247XG4gIH1cbiAgcHVibGljIHB1dEdyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24odmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnR3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbikge1xuICAgIHRoaXMuX2dyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24oKSB7XG4gICAgdGhpcy5fZ3JlZW5GbGVldFByb3Zpc2lvbmluZ09wdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncmVlbkZsZWV0UHJvdmlzaW9uaW5nT3B0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyZWVuRmxlZXRQcm92aXNpb25pbmdPcHRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRlcm1pbmF0ZV9ibHVlX2luc3RhbmNlc19vbl9kZXBsb3ltZW50X3N1Y2Nlc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3MgPSBuZXcgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2Vzc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0ZXJtaW5hdGVfYmx1ZV9pbnN0YW5jZXNfb25fZGVwbG95bWVudF9zdWNjZXNzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRlcm1pbmF0ZUJsdWVJbnN0YW5jZXNPbkRlcGxveW1lbnRTdWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2VzcztcbiAgfVxuICBwdWJsaWMgcHV0VGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3ModmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnVGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3MpIHtcbiAgICB0aGlzLl90ZXJtaW5hdGVCbHVlSW5zdGFuY2VzT25EZXBsb3ltZW50U3VjY2Vzcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5fdGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybWluYXRlQmx1ZUluc3RhbmNlc09uRGVwbG95bWVudFN1Y2Nlc3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRGVwbG95bWVudFN0eWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRPcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRUeXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBEZXBsb3ltZW50U3R5bGVPdXRwdXRSZWZlcmVuY2UgfCBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRGVwbG95bWVudFN0eWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVwbG95bWVudF9vcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVwbG95bWVudE9wdGlvbiksXG4gICAgZGVwbG95bWVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlcGxveW1lbnRUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRGVwbG95bWVudFN0eWxlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZXBsb3ltZW50T3B0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXBsb3ltZW50T3B0aW9uID0gdGhpcy5fZGVwbG95bWVudE9wdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlcGxveW1lbnRUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXBsb3ltZW50VHlwZSA9IHRoaXMuX2RlcGxveW1lbnRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlcGxveW1lbnRPcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXBsb3ltZW50VHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVwbG95bWVudE9wdGlvbiA9IHZhbHVlLmRlcGxveW1lbnRPcHRpb247XG4gICAgICB0aGlzLl9kZXBsb3ltZW50VHlwZSA9IHZhbHVlLmRlcGxveW1lbnRUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfb3B0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRPcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXBsb3ltZW50X29wdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVwbG95bWVudE9wdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudE9wdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlcGxveW1lbnRPcHRpb24oKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudE9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudE9wdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50T3B0aW9uO1xuICB9XG5cbiAgLy8gZGVwbG95bWVudF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXBsb3ltZW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlcGxveW1lbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVwbG95bWVudFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlcGxveW1lbnRUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVwbG95bWVudFR5cGUoKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveW1lbnRUeXBlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ0ZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdGaWx0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRFYzJUYWdGaWx0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ1NldEVjMlRhZ0ZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRFYzJUYWdGaWx0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWMyVGFnRmlsdGVyPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ1NldEVjMlRhZ0ZpbHRlcltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjMlRhZ1NldFRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlYzJfdGFnX2ZpbHRlcjogY2RrdGYubGlzdE1hcHBlcihjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWMyVGFnU2V0RWMyVGFnRmlsdGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuZWMyVGFnRmlsdGVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFY3NTZXJ2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2x1c3Rlck5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFY3NTZXJ2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjc1NlcnZpY2VPdXRwdXRSZWZlcmVuY2UgfCBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWNzU2VydmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsdXN0ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbHVzdGVyTmFtZSksXG4gICAgc2VydmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjc1NlcnZpY2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEVjc1NlcnZpY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsdXN0ZXJOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbHVzdGVyTmFtZSA9IHRoaXMuX2NsdXN0ZXJOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VOYW1lID0gdGhpcy5fc2VydmljZU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWNzU2VydmljZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsdXN0ZXJOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VydmljZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NsdXN0ZXJOYW1lID0gdmFsdWUuY2x1c3Rlck5hbWU7XG4gICAgICB0aGlzLl9zZXJ2aWNlTmFtZSA9IHZhbHVlLnNlcnZpY2VOYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsdXN0ZXJfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbHVzdGVyTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2x1c3Rlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsdXN0ZXJOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyTmFtZTtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlTmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb0VsYkluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb0VsYkluZm9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb0VsYkluZm8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cEluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwSW5mb1RvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Byb2RUcmFmZmljUm91dGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxpc3RlbmVyQXJuczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9Qcm9kVHJhZmZpY1JvdXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvUHJvZFRyYWZmaWNSb3V0ZU91dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Byb2RUcmFmZmljUm91dGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsaXN0ZW5lcl9hcm5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmxpc3RlbmVyQXJucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Byb2RUcmFmZmljUm91dGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvUHJvZFRyYWZmaWNSb3V0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbGlzdGVuZXJBcm5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5saXN0ZW5lckFybnMgPSB0aGlzLl9saXN0ZW5lckFybnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9Qcm9kVHJhZmZpY1JvdXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGlzdGVuZXJBcm5zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9saXN0ZW5lckFybnMgPSB2YWx1ZS5saXN0ZW5lckFybnM7XG4gICAgfVxuICB9XG5cbiAgLy8gbGlzdGVuZXJfYXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9saXN0ZW5lckFybnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbGlzdGVuZXJBcm5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2xpc3RlbmVyX2FybnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxpc3RlbmVyQXJucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9saXN0ZW5lckFybnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGlzdGVuZXJBcm5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyQXJucztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UYXJnZXRHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGFyZ2V0R3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UYXJnZXRHcm91cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaXN0ZW5lckFybnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGVzdFRyYWZmaWNSb3V0ZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Rlc3RUcmFmZmljUm91dGVPdXRwdXRSZWZlcmVuY2UgfCBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGlzdGVuZXJfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5saXN0ZW5lckFybnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Rlc3RUcmFmZmljUm91dGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyQXJucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGlzdGVuZXJBcm5zID0gdGhpcy5fbGlzdGVuZXJBcm5zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGVzdFRyYWZmaWNSb3V0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xpc3RlbmVyQXJucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGlzdGVuZXJBcm5zID0gdmFsdWUubGlzdGVuZXJBcm5zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxpc3RlbmVyX2FybnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGlzdGVuZXJBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGxpc3RlbmVyQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdsaXN0ZW5lcl9hcm5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBsaXN0ZW5lckFybnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJBcm5zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpc3RlbmVyQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lckFybnM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb2RUcmFmZmljUm91dGU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1Byb2RUcmFmZmljUm91dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRHcm91cDogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGFyZ2V0R3JvdXBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlc3RUcmFmZmljUm91dGU/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvT3V0cHV0UmVmZXJlbmNlIHwgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvZF90cmFmZmljX3JvdXRlOiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9Qcm9kVHJhZmZpY1JvdXRlVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9kVHJhZmZpY1JvdXRlKSxcbiAgICB0YXJnZXRfZ3JvdXA6IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGFyZ2V0R3JvdXBUb1RlcnJhZm9ybSkoc3RydWN0IS50YXJnZXRHcm91cCksXG4gICAgdGVzdF90cmFmZmljX3JvdXRlOiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlVG9UZXJyYWZvcm0oc3RydWN0IS50ZXN0VHJhZmZpY1JvdXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJvZFRyYWZmaWNSb3V0ZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvZFRyYWZmaWNSb3V0ZSA9IHRoaXMuX3Byb2RUcmFmZmljUm91dGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRHcm91cCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0R3JvdXAgPSB0aGlzLl90YXJnZXRHcm91cDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rlc3RUcmFmZmljUm91dGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlc3RUcmFmZmljUm91dGUgPSB0aGlzLl90ZXN0VHJhZmZpY1JvdXRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJvZFRyYWZmaWNSb3V0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90ZXN0VHJhZmZpY1JvdXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Byb2RUcmFmZmljUm91dGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnByb2RUcmFmZmljUm91dGU7XG4gICAgICB0aGlzLl90YXJnZXRHcm91cCA9IHZhbHVlLnRhcmdldEdyb3VwO1xuICAgICAgdGhpcy5fdGVzdFRyYWZmaWNSb3V0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGVzdFRyYWZmaWNSb3V0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm9kX3RyYWZmaWNfcm91dGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJvZFRyYWZmaWNSb3V0ZSA9IG5ldyBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9Qcm9kVHJhZmZpY1JvdXRlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByb2RfdHJhZmZpY19yb3V0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcm9kVHJhZmZpY1JvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9kVHJhZmZpY1JvdXRlO1xuICB9XG4gIHB1YmxpYyBwdXRQcm9kVHJhZmZpY1JvdXRlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9Qcm9kVHJhZmZpY1JvdXRlKSB7XG4gICAgdGhpcy5fcHJvZFRyYWZmaWNSb3V0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2RUcmFmZmljUm91dGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZFRyYWZmaWNSb3V0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGFyZ2V0X2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhcmdldEdyb3VwPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvVGFyZ2V0R3JvdXBbXTsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXAoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhcmdldF9ncm91cCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldEdyb3VwKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UYXJnZXRHcm91cFtdKSB7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXAgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0R3JvdXA7XG4gIH1cblxuICAvLyB0ZXN0X3RyYWZmaWNfcm91dGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVzdFRyYWZmaWNSb3V0ZSA9IG5ldyBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRlc3RfdHJhZmZpY19yb3V0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0ZXN0VHJhZmZpY1JvdXRlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXN0VHJhZmZpY1JvdXRlO1xuICB9XG4gIHB1YmxpYyBwdXRUZXN0VHJhZmZpY1JvdXRlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9UZXN0VHJhZmZpY1JvdXRlKSB7XG4gICAgdGhpcy5fdGVzdFRyYWZmaWNSb3V0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVzdFRyYWZmaWNSb3V0ZSgpIHtcbiAgICB0aGlzLl90ZXN0VHJhZmZpY1JvdXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlc3RUcmFmZmljUm91dGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVzdFRyYWZmaWNSb3V0ZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVsYkluZm8/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb0VsYkluZm9bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldEdyb3VwSW5mbz86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBJbmZvW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRHcm91cFBhaXJJbmZvPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cFBhaXJJbmZvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb091dHB1dFJlZmVyZW5jZSB8IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZWxiX2luZm86IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9FbGJJbmZvVG9UZXJyYWZvcm0pKHN0cnVjdCEuZWxiSW5mbyksXG4gICAgdGFyZ2V0X2dyb3VwX2luZm86IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9UYXJnZXRHcm91cEluZm9Ub1RlcnJhZm9ybSkoc3RydWN0IS50YXJnZXRHcm91cEluZm8pLFxuICAgIHRhcmdldF9ncm91cF9wYWlyX2luZm86IGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVGFyZ2V0R3JvdXBQYWlySW5mb1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0R3JvdXBQYWlySW5mbyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbGJJbmZvKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbGJJbmZvID0gdGhpcy5fZWxiSW5mbztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldEdyb3VwSW5mbykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0R3JvdXBJbmZvID0gdGhpcy5fdGFyZ2V0R3JvdXBJbmZvO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0R3JvdXBQYWlySW5mbz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0R3JvdXBQYWlySW5mbyA9IHRoaXMuX3RhcmdldEdyb3VwUGFpckluZm8/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mbyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VsYkluZm8gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXRHcm91cEluZm8gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXRHcm91cFBhaXJJbmZvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VsYkluZm8gPSB2YWx1ZS5lbGJJbmZvO1xuICAgICAgdGhpcy5fdGFyZ2V0R3JvdXBJbmZvID0gdmFsdWUudGFyZ2V0R3JvdXBJbmZvO1xuICAgICAgdGhpcy5fdGFyZ2V0R3JvdXBQYWlySW5mby5pbnRlcm5hbFZhbHVlID0gdmFsdWUudGFyZ2V0R3JvdXBQYWlySW5mbztcbiAgICB9XG4gIH1cblxuICAvLyBlbGJfaW5mbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbGJJbmZvPzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9FbGJJbmZvW107IFxuICBwdWJsaWMgZ2V0IGVsYkluZm8oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VsYl9pbmZvJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZWxiSW5mbyh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9FbGJJbmZvW10pIHtcbiAgICB0aGlzLl9lbGJJbmZvID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWxiSW5mbygpIHtcbiAgICB0aGlzLl9lbGJJbmZvID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbGJJbmZvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYkluZm87XG4gIH1cblxuICAvLyB0YXJnZXRfZ3JvdXBfaW5mbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRHcm91cEluZm8/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwSW5mb1tdOyBcbiAgcHVibGljIGdldCB0YXJnZXRHcm91cEluZm8oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhcmdldF9ncm91cF9pbmZvJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXBJbmZvKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwSW5mb1tdKSB7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXBJbmZvID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0R3JvdXBJbmZvKCkge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwSW5mbyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXBJbmZvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldEdyb3VwSW5mbztcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cF9wYWlyX2luZm8gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0R3JvdXBQYWlySW5mbyA9IG5ldyBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm9PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGFyZ2V0X2dyb3VwX3BhaXJfaW5mb1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0YXJnZXRHcm91cFBhaXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cFBhaXJJbmZvO1xuICB9XG4gIHB1YmxpYyBwdXRUYXJnZXRHcm91cFBhaXJJbmZvKHZhbHVlOiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwTG9hZEJhbGFuY2VySW5mb1RhcmdldEdyb3VwUGFpckluZm8pIHtcbiAgICB0aGlzLl90YXJnZXRHcm91cFBhaXJJbmZvLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRHcm91cFBhaXJJbmZvKCkge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwUGFpckluZm8uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0R3JvdXBQYWlySW5mb0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cFBhaXJJbmZvLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cE9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwT25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cE9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cFRyaWdnZXJDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyaWdnZXJFdmVudHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmlnZ2VyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmlnZ2VyVGFyZ2V0QXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwVHJpZ2dlckNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwVHJpZ2dlckNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0cmlnZ2VyX2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50cmlnZ2VyRXZlbnRzKSxcbiAgICB0cmlnZ2VyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHJpZ2dlck5hbWUpLFxuICAgIHRyaWdnZXJfdGFyZ2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmlnZ2VyVGFyZ2V0QXJuKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jb2RlZGVwbG95X2RlcGxveW1lbnRfZ3JvdXBcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvZGVkZXBsb3lfZGVwbG95bWVudF9ncm91cCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hcHBOYW1lID0gY29uZmlnLmFwcE5hbWU7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cHMgPSBjb25maWcuYXV0b3NjYWxpbmdHcm91cHM7XG4gICAgdGhpcy5fZGVwbG95bWVudENvbmZpZ05hbWUgPSBjb25maWcuZGVwbG95bWVudENvbmZpZ05hbWU7XG4gICAgdGhpcy5fZGVwbG95bWVudEdyb3VwTmFtZSA9IGNvbmZpZy5kZXBsb3ltZW50R3JvdXBOYW1lO1xuICAgIHRoaXMuX3NlcnZpY2VSb2xlQXJuID0gY29uZmlnLnNlcnZpY2VSb2xlQXJuO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fYWxhcm1Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuYWxhcm1Db25maWd1cmF0aW9uO1xuICAgIHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX2JsdWVHcmVlbkRlcGxveW1lbnRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnO1xuICAgIHRoaXMuX2RlcGxveW1lbnRTdHlsZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmRlcGxveW1lbnRTdHlsZTtcbiAgICB0aGlzLl9lYzJUYWdGaWx0ZXIgPSBjb25maWcuZWMyVGFnRmlsdGVyO1xuICAgIHRoaXMuX2VjMlRhZ1NldCA9IGNvbmZpZy5lYzJUYWdTZXQ7XG4gICAgdGhpcy5fZWNzU2VydmljZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVjc1NlcnZpY2U7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VySW5mby5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxvYWRCYWxhbmNlckluZm87XG4gICAgdGhpcy5fb25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyID0gY29uZmlnLm9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcjtcbiAgICB0aGlzLl90cmlnZ2VyQ29uZmlndXJhdGlvbiA9IGNvbmZpZy50cmlnZ2VyQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXBwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXBwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwTmFtZTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b3NjYWxpbmdfZ3JvdXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9zY2FsaW5nR3JvdXBzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGF1dG9zY2FsaW5nR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F1dG9zY2FsaW5nX2dyb3VwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b3NjYWxpbmdHcm91cHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvc2NhbGluZ0dyb3VwcygpIHtcbiAgICB0aGlzLl9hdXRvc2NhbGluZ0dyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NjYWxpbmdHcm91cHM7XG4gIH1cblxuICAvLyBjb21wdXRlX3BsYXRmb3JtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcHV0ZVBsYXRmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHV0ZV9wbGF0Zm9ybScpO1xuICB9XG5cbiAgLy8gZGVwbG95bWVudF9jb25maWdfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXBsb3ltZW50Q29uZmlnTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudENvbmZpZ05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXBsb3ltZW50X2NvbmZpZ19uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXBsb3ltZW50Q29uZmlnTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudENvbmZpZ05hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXBsb3ltZW50Q29uZmlnTmFtZSgpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50Q29uZmlnTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudENvbmZpZ05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwbG95bWVudENvbmZpZ05hbWU7XG4gIH1cblxuICAvLyBkZXBsb3ltZW50X2dyb3VwX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudEdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXBsb3ltZW50X2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyBkZXBsb3ltZW50X2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVwbG95bWVudEdyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudEdyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlcGxveW1lbnRfZ3JvdXBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVwbG95bWVudEdyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudEdyb3VwTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXBsb3ltZW50R3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveW1lbnRHcm91cE5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gc2VydmljZV9yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJvbGVBcm47XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gYWxhcm1fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGFybUNvbmZpZ3VyYXRpb24gPSBuZXcgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEFsYXJtQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhbGFybV9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFsYXJtQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBbGFybUNvbmZpZ3VyYXRpb24odmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBbGFybUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9hbGFybUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsYXJtQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hbGFybUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxhcm1Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsYXJtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYXV0b19yb2xsYmFja19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24gPSBuZXcgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYXV0b19yb2xsYmFja19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb24odmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBBdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1JvbGxiYWNrQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYmx1ZV9ncmVlbl9kZXBsb3ltZW50X2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnID0gbmV3IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImJsdWVfZ3JlZW5fZGVwbG95bWVudF9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0Qmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZyh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWcpIHtcbiAgICB0aGlzLl9ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnKCkge1xuICAgIHRoaXMuX2JsdWVHcmVlbkRlcGxveW1lbnRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmx1ZUdyZWVuRGVwbG95bWVudENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBkZXBsb3ltZW50X3N0eWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRTdHlsZSA9IG5ldyBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRGVwbG95bWVudFN0eWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImRlcGxveW1lbnRfc3R5bGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudFN0eWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50U3R5bGU7XG4gIH1cbiAgcHVibGljIHB1dERlcGxveW1lbnRTdHlsZSh2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZSkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRTdHlsZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVwbG95bWVudFN0eWxlKCkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRTdHlsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXBsb3ltZW50U3R5bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwbG95bWVudFN0eWxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBlYzJfdGFnX2ZpbHRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYzJUYWdGaWx0ZXI/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWMyVGFnRmlsdGVyW107IFxuICBwdWJsaWMgZ2V0IGVjMlRhZ0ZpbHRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWMyX3RhZ19maWx0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlYzJUYWdGaWx0ZXIodmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdGaWx0ZXJbXSkge1xuICAgIHRoaXMuX2VjMlRhZ0ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVjMlRhZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl9lYzJUYWdGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVjMlRhZ0ZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYzJUYWdGaWx0ZXI7XG4gIH1cblxuICAvLyBlYzJfdGFnX3NldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYzJUYWdTZXQ/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWMyVGFnU2V0W107IFxuICBwdWJsaWMgZ2V0IGVjMlRhZ1NldCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWMyX3RhZ19zZXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlYzJUYWdTZXQodmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRbXSkge1xuICAgIHRoaXMuX2VjMlRhZ1NldCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVjMlRhZ1NldCgpIHtcbiAgICB0aGlzLl9lYzJUYWdTZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVjMlRhZ1NldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYzJUYWdTZXQ7XG4gIH1cblxuICAvLyBlY3Nfc2VydmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lY3NTZXJ2aWNlID0gbmV3IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFY3NTZXJ2aWNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImVjc19zZXJ2aWNlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGVjc1NlcnZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vjc1NlcnZpY2U7XG4gIH1cbiAgcHVibGljIHB1dEVjc1NlcnZpY2UodmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5fZWNzU2VydmljZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWNzU2VydmljZSgpIHtcbiAgICB0aGlzLl9lY3NTZXJ2aWNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVjc1NlcnZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWNzU2VydmljZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcl9pbmZvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvYWRCYWxhbmNlckluZm8gPSBuZXcgQ29kZWRlcGxveURlcGxveW1lbnRHcm91cExvYWRCYWxhbmNlckluZm9PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibG9hZF9iYWxhbmNlcl9pbmZvXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlckluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRCYWxhbmNlckluZm87XG4gIH1cbiAgcHVibGljIHB1dExvYWRCYWxhbmNlckluZm8odmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VySW5mby5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9hZEJhbGFuY2VySW5mbygpIHtcbiAgICB0aGlzLl9sb2FkQmFsYW5jZXJJbmZvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlckluZm9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZEJhbGFuY2VySW5mby5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb25fcHJlbWlzZXNfaW5zdGFuY2VfdGFnX2ZpbHRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXI/OiBDb2RlZGVwbG95RGVwbG95bWVudEdyb3VwT25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyW107IFxuICBwdWJsaWMgZ2V0IG9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb25fcHJlbWlzZXNfaW5zdGFuY2VfdGFnX2ZpbHRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcih2YWx1ZTogQ29kZWRlcGxveURlcGxveW1lbnRHcm91cE9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcltdKSB7XG4gICAgdGhpcy5fb25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVyKCkge1xuICAgIHRoaXMuX29uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25QcmVtaXNlc0luc3RhbmNlVGFnRmlsdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlcjtcbiAgfVxuXG4gIC8vIHRyaWdnZXJfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90cmlnZ2VyQ29uZmlndXJhdGlvbj86IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBUcmlnZ2VyQ29uZmlndXJhdGlvbltdOyBcbiAgcHVibGljIGdldCB0cmlnZ2VyQ29uZmlndXJhdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndHJpZ2dlcl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdHJpZ2dlckNvbmZpZ3VyYXRpb24odmFsdWU6IENvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBUcmlnZ2VyQ29uZmlndXJhdGlvbltdKSB7XG4gICAgdGhpcy5fdHJpZ2dlckNvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmlnZ2VyQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl90cmlnZ2VyQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJpZ2dlckNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlckNvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcHBOYW1lKSxcbiAgICAgIGF1dG9zY2FsaW5nX2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYXV0b3NjYWxpbmdHcm91cHMpLFxuICAgICAgZGVwbG95bWVudF9jb25maWdfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVwbG95bWVudENvbmZpZ05hbWUpLFxuICAgICAgZGVwbG95bWVudF9ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXBsb3ltZW50R3JvdXBOYW1lKSxcbiAgICAgIHNlcnZpY2Vfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VSb2xlQXJuKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgYWxhcm1fY29uZmlndXJhdGlvbjogY29kZWRlcGxveURlcGxveW1lbnRHcm91cEFsYXJtQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2FsYXJtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGF1dG9fcm9sbGJhY2tfY29uZmlndXJhdGlvbjogY29kZWRlcGxveURlcGxveW1lbnRHcm91cEF1dG9Sb2xsYmFja0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvUm9sbGJhY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgYmx1ZV9ncmVlbl9kZXBsb3ltZW50X2NvbmZpZzogY29kZWRlcGxveURlcGxveW1lbnRHcm91cEJsdWVHcmVlbkRlcGxveW1lbnRDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9ibHVlR3JlZW5EZXBsb3ltZW50Q29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgZGVwbG95bWVudF9zdHlsZTogY29kZWRlcGxveURlcGxveW1lbnRHcm91cERlcGxveW1lbnRTdHlsZVRvVGVycmFmb3JtKHRoaXMuX2RlcGxveW1lbnRTdHlsZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGVjMl90YWdfZmlsdGVyOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdGaWx0ZXJUb1RlcnJhZm9ybSkodGhpcy5fZWMyVGFnRmlsdGVyKSxcbiAgICAgIGVjMl90YWdfc2V0OiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBFYzJUYWdTZXRUb1RlcnJhZm9ybSkodGhpcy5fZWMyVGFnU2V0KSxcbiAgICAgIGVjc19zZXJ2aWNlOiBjb2RlZGVwbG95RGVwbG95bWVudEdyb3VwRWNzU2VydmljZVRvVGVycmFmb3JtKHRoaXMuX2Vjc1NlcnZpY2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsb2FkX2JhbGFuY2VyX2luZm86IGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBMb2FkQmFsYW5jZXJJbmZvVG9UZXJyYWZvcm0odGhpcy5fbG9hZEJhbGFuY2VySW5mby5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG9uX3ByZW1pc2VzX2luc3RhbmNlX3RhZ19maWx0ZXI6IGNka3RmLmxpc3RNYXBwZXIoY29kZWRlcGxveURlcGxveW1lbnRHcm91cE9uUHJlbWlzZXNJbnN0YW5jZVRhZ0ZpbHRlclRvVGVycmFmb3JtKSh0aGlzLl9vblByZW1pc2VzSW5zdGFuY2VUYWdGaWx0ZXIpLFxuICAgICAgdHJpZ2dlcl9jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGNvZGVkZXBsb3lEZXBsb3ltZW50R3JvdXBUcmlnZ2VyQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl90cmlnZ2VyQ29uZmlndXJhdGlvbiksXG4gICAgfTtcbiAgfVxufVxuIl19