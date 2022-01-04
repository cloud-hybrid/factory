"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoscalingGroup = exports.AutoscalingGroupWarmPoolOutputReference = exports.autoscalingGroupWarmPoolToTerraform = exports.AutoscalingGroupTimeoutsOutputReference = exports.autoscalingGroupTimeoutsToTerraform = exports.autoscalingGroupTagToTerraform = exports.AutoscalingGroupMixedInstancesPolicyOutputReference = exports.autoscalingGroupMixedInstancesPolicyToTerraform = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform = exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference = exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform = exports.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference = exports.autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform = exports.AutoscalingGroupLaunchTemplateOutputReference = exports.autoscalingGroupLaunchTemplateToTerraform = exports.AutoscalingGroupInstanceRefreshOutputReference = exports.autoscalingGroupInstanceRefreshToTerraform = exports.AutoscalingGroupInstanceRefreshPreferencesOutputReference = exports.autoscalingGroupInstanceRefreshPreferencesToTerraform = exports.autoscalingGroupInitialLifecycleHookToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function autoscalingGroupInitialLifecycleHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_result: cdktf.stringToTerraform(struct.defaultResult),
        heartbeat_timeout: cdktf.numberToTerraform(struct.heartbeatTimeout),
        lifecycle_transition: cdktf.stringToTerraform(struct.lifecycleTransition),
        name: cdktf.stringToTerraform(struct.name),
        notification_metadata: cdktf.stringToTerraform(struct.notificationMetadata),
        notification_target_arn: cdktf.stringToTerraform(struct.notificationTargetArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.autoscalingGroupInitialLifecycleHookToTerraform = autoscalingGroupInitialLifecycleHookToTerraform;
function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        checkpoint_delay: cdktf.stringToTerraform(struct.checkpointDelay),
        checkpoint_percentages: cdktf.listMapper(cdktf.numberToTerraform)(struct.checkpointPercentages),
        instance_warmup: cdktf.stringToTerraform(struct.instanceWarmup),
        min_healthy_percentage: cdktf.numberToTerraform(struct.minHealthyPercentage),
    };
}
exports.autoscalingGroupInstanceRefreshPreferencesToTerraform = autoscalingGroupInstanceRefreshPreferencesToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupInstanceRefreshPreferencesOutputReference extends cdktf.ComplexObject {
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
        if (this._checkpointDelay) {
            hasAnyValues = true;
            internalValueResult.checkpointDelay = this._checkpointDelay;
        }
        if (this._checkpointPercentages) {
            hasAnyValues = true;
            internalValueResult.checkpointPercentages = this._checkpointPercentages;
        }
        if (this._instanceWarmup) {
            hasAnyValues = true;
            internalValueResult.instanceWarmup = this._instanceWarmup;
        }
        if (this._minHealthyPercentage) {
            hasAnyValues = true;
            internalValueResult.minHealthyPercentage = this._minHealthyPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checkpointDelay = undefined;
            this._checkpointPercentages = undefined;
            this._instanceWarmup = undefined;
            this._minHealthyPercentage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checkpointDelay = value.checkpointDelay;
            this._checkpointPercentages = value.checkpointPercentages;
            this._instanceWarmup = value.instanceWarmup;
            this._minHealthyPercentage = value.minHealthyPercentage;
        }
    }
    /**
     * @stability stable
     */
    get checkpointDelay() {
        return this.getStringAttribute('checkpoint_delay');
    }
    /**
     * @stability stable
     */
    set checkpointDelay(value) {
        this._checkpointDelay = value;
    }
    /**
     * @stability stable
     */
    resetCheckpointDelay() {
        this._checkpointDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get checkpointDelayInput() {
        return this._checkpointDelay;
    }
    /**
     * @stability stable
     */
    get checkpointPercentages() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('checkpoint_percentages');
    }
    /**
     * @stability stable
     */
    set checkpointPercentages(value) {
        this._checkpointPercentages = value;
    }
    /**
     * @stability stable
     */
    resetCheckpointPercentages() {
        this._checkpointPercentages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get checkpointPercentagesInput() {
        return this._checkpointPercentages;
    }
    /**
     * @stability stable
     */
    get instanceWarmup() {
        return this.getStringAttribute('instance_warmup');
    }
    /**
     * @stability stable
     */
    set instanceWarmup(value) {
        this._instanceWarmup = value;
    }
    /**
     * @stability stable
     */
    resetInstanceWarmup() {
        this._instanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceWarmupInput() {
        return this._instanceWarmup;
    }
    /**
     * @stability stable
     */
    get minHealthyPercentage() {
        return this.getNumberAttribute('min_healthy_percentage');
    }
    /**
     * @stability stable
     */
    set minHealthyPercentage(value) {
        this._minHealthyPercentage = value;
    }
    /**
     * @stability stable
     */
    resetMinHealthyPercentage() {
        this._minHealthyPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minHealthyPercentageInput() {
        return this._minHealthyPercentage;
    }
}
exports.AutoscalingGroupInstanceRefreshPreferencesOutputReference = AutoscalingGroupInstanceRefreshPreferencesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AutoscalingGroupInstanceRefreshPreferencesOutputReference[_a] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupInstanceRefreshPreferencesOutputReference", version: "3.0.1" };
function autoscalingGroupInstanceRefreshToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        strategy: cdktf.stringToTerraform(struct.strategy),
        triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct.triggers),
        preferences: autoscalingGroupInstanceRefreshPreferencesToTerraform(struct.preferences),
    };
}
exports.autoscalingGroupInstanceRefreshToTerraform = autoscalingGroupInstanceRefreshToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupInstanceRefreshOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // preferences - computed: false, optional: true, required: false
        this._preferences = new AutoscalingGroupInstanceRefreshPreferencesOutputReference(this, "preferences", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _m, _o;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._strategy) {
            hasAnyValues = true;
            internalValueResult.strategy = this._strategy;
        }
        if (this._triggers) {
            hasAnyValues = true;
            internalValueResult.triggers = this._triggers;
        }
        if ((_m = this._preferences) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.preferences = (_o = this._preferences) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._strategy = undefined;
            this._triggers = undefined;
            this._preferences.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._strategy = value.strategy;
            this._triggers = value.triggers;
            this._preferences.internalValue = value.preferences;
        }
    }
    /**
     * @stability stable
     */
    get strategy() {
        return this.getStringAttribute('strategy');
    }
    /**
     * @stability stable
     */
    set strategy(value) {
        this._strategy = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get strategyInput() {
        return this._strategy;
    }
    /**
     * @stability stable
     */
    get triggers() {
        return this.getListAttribute('triggers');
    }
    /**
     * @stability stable
     */
    set triggers(value) {
        this._triggers = value;
    }
    /**
     * @stability stable
     */
    resetTriggers() {
        this._triggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get triggersInput() {
        return this._triggers;
    }
    /**
     * @stability stable
     */
    get preferences() {
        return this._preferences;
    }
    /**
     * @stability stable
     */
    putPreferences(value) {
        this._preferences.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPreferences() {
        this._preferences.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferencesInput() {
        return this._preferences.internalValue;
    }
}
exports.AutoscalingGroupInstanceRefreshOutputReference = AutoscalingGroupInstanceRefreshOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AutoscalingGroupInstanceRefreshOutputReference[_b] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupInstanceRefreshOutputReference", version: "3.0.1" };
function autoscalingGroupLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.autoscalingGroupLaunchTemplateToTerraform = autoscalingGroupLaunchTemplateToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._version = value.version;
        }
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
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    /**
     * @stability stable
     */
    set version(value) {
        this._version = value;
    }
    /**
     * @stability stable
     */
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionInput() {
        return this._version;
    }
}
exports.AutoscalingGroupLaunchTemplateOutputReference = AutoscalingGroupLaunchTemplateOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AutoscalingGroupLaunchTemplateOutputReference[_c] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupLaunchTemplateOutputReference", version: "3.0.1" };
function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_demand_allocation_strategy: cdktf.stringToTerraform(struct.onDemandAllocationStrategy),
        on_demand_base_capacity: cdktf.numberToTerraform(struct.onDemandBaseCapacity),
        on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct.onDemandPercentageAboveBaseCapacity),
        spot_allocation_strategy: cdktf.stringToTerraform(struct.spotAllocationStrategy),
        spot_instance_pools: cdktf.numberToTerraform(struct.spotInstancePools),
        spot_max_price: cdktf.stringToTerraform(struct.spotMaxPrice),
    };
}
exports.autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform = autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference extends cdktf.ComplexObject {
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
        if (this._onDemandAllocationStrategy) {
            hasAnyValues = true;
            internalValueResult.onDemandAllocationStrategy = this._onDemandAllocationStrategy;
        }
        if (this._onDemandBaseCapacity) {
            hasAnyValues = true;
            internalValueResult.onDemandBaseCapacity = this._onDemandBaseCapacity;
        }
        if (this._onDemandPercentageAboveBaseCapacity) {
            hasAnyValues = true;
            internalValueResult.onDemandPercentageAboveBaseCapacity = this._onDemandPercentageAboveBaseCapacity;
        }
        if (this._spotAllocationStrategy) {
            hasAnyValues = true;
            internalValueResult.spotAllocationStrategy = this._spotAllocationStrategy;
        }
        if (this._spotInstancePools) {
            hasAnyValues = true;
            internalValueResult.spotInstancePools = this._spotInstancePools;
        }
        if (this._spotMaxPrice) {
            hasAnyValues = true;
            internalValueResult.spotMaxPrice = this._spotMaxPrice;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._onDemandAllocationStrategy = undefined;
            this._onDemandBaseCapacity = undefined;
            this._onDemandPercentageAboveBaseCapacity = undefined;
            this._spotAllocationStrategy = undefined;
            this._spotInstancePools = undefined;
            this._spotMaxPrice = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onDemandAllocationStrategy = value.onDemandAllocationStrategy;
            this._onDemandBaseCapacity = value.onDemandBaseCapacity;
            this._onDemandPercentageAboveBaseCapacity = value.onDemandPercentageAboveBaseCapacity;
            this._spotAllocationStrategy = value.spotAllocationStrategy;
            this._spotInstancePools = value.spotInstancePools;
            this._spotMaxPrice = value.spotMaxPrice;
        }
    }
    /**
     * @stability stable
     */
    get onDemandAllocationStrategy() {
        return this.getStringAttribute('on_demand_allocation_strategy');
    }
    /**
     * @stability stable
     */
    set onDemandAllocationStrategy(value) {
        this._onDemandAllocationStrategy = value;
    }
    /**
     * @stability stable
     */
    resetOnDemandAllocationStrategy() {
        this._onDemandAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onDemandAllocationStrategyInput() {
        return this._onDemandAllocationStrategy;
    }
    /**
     * @stability stable
     */
    get onDemandBaseCapacity() {
        return this.getNumberAttribute('on_demand_base_capacity');
    }
    /**
     * @stability stable
     */
    set onDemandBaseCapacity(value) {
        this._onDemandBaseCapacity = value;
    }
    /**
     * @stability stable
     */
    resetOnDemandBaseCapacity() {
        this._onDemandBaseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onDemandBaseCapacityInput() {
        return this._onDemandBaseCapacity;
    }
    /**
     * @stability stable
     */
    get onDemandPercentageAboveBaseCapacity() {
        return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
    }
    /**
     * @stability stable
     */
    set onDemandPercentageAboveBaseCapacity(value) {
        this._onDemandPercentageAboveBaseCapacity = value;
    }
    /**
     * @stability stable
     */
    resetOnDemandPercentageAboveBaseCapacity() {
        this._onDemandPercentageAboveBaseCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onDemandPercentageAboveBaseCapacityInput() {
        return this._onDemandPercentageAboveBaseCapacity;
    }
    /**
     * @stability stable
     */
    get spotAllocationStrategy() {
        return this.getStringAttribute('spot_allocation_strategy');
    }
    /**
     * @stability stable
     */
    set spotAllocationStrategy(value) {
        this._spotAllocationStrategy = value;
    }
    /**
     * @stability stable
     */
    resetSpotAllocationStrategy() {
        this._spotAllocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotAllocationStrategyInput() {
        return this._spotAllocationStrategy;
    }
    /**
     * @stability stable
     */
    get spotInstancePools() {
        return this.getNumberAttribute('spot_instance_pools');
    }
    /**
     * @stability stable
     */
    set spotInstancePools(value) {
        this._spotInstancePools = value;
    }
    /**
     * @stability stable
     */
    resetSpotInstancePools() {
        this._spotInstancePools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotInstancePoolsInput() {
        return this._spotInstancePools;
    }
    /**
     * @stability stable
     */
    get spotMaxPrice() {
        return this.getStringAttribute('spot_max_price');
    }
    /**
     * @stability stable
     */
    set spotMaxPrice(value) {
        this._spotMaxPrice = value;
    }
    /**
     * @stability stable
     */
    resetSpotMaxPrice() {
        this._spotMaxPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotMaxPriceInput() {
        return this._spotMaxPrice;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference = AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference[_d] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference", version: "3.0.1" };
function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._launchTemplateId) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._version) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._version = value.version;
        }
    }
    /**
     * @stability stable
     */
    get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    /**
     * @stability stable
     */
    set launchTemplateId(value) {
        this._launchTemplateId = value;
    }
    /**
     * @stability stable
     */
    resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateIdInput() {
        return this._launchTemplateId;
    }
    /**
     * @stability stable
     */
    get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    /**
     * @stability stable
     */
    set launchTemplateName(value) {
        this._launchTemplateName = value;
    }
    /**
     * @stability stable
     */
    resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateNameInput() {
        return this._launchTemplateName;
    }
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    /**
     * @stability stable
     */
    set version(value) {
        this._version = value;
    }
    /**
     * @stability stable
     */
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionInput() {
        return this._version;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference = AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference[_e] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference", version: "3.0.1" };
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_id: cdktf.stringToTerraform(struct.launchTemplateId),
        launch_template_name: cdktf.stringToTerraform(struct.launchTemplateName),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._launchTemplateId) {
            hasAnyValues = true;
            internalValueResult.launchTemplateId = this._launchTemplateId;
        }
        if (this._launchTemplateName) {
            hasAnyValues = true;
            internalValueResult.launchTemplateName = this._launchTemplateName;
        }
        if (this._version) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._launchTemplateId = undefined;
            this._launchTemplateName = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateId = value.launchTemplateId;
            this._launchTemplateName = value.launchTemplateName;
            this._version = value.version;
        }
    }
    /**
     * @stability stable
     */
    get launchTemplateId() {
        return this.getStringAttribute('launch_template_id');
    }
    /**
     * @stability stable
     */
    set launchTemplateId(value) {
        this._launchTemplateId = value;
    }
    /**
     * @stability stable
     */
    resetLaunchTemplateId() {
        this._launchTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateIdInput() {
        return this._launchTemplateId;
    }
    /**
     * @stability stable
     */
    get launchTemplateName() {
        return this.getStringAttribute('launch_template_name');
    }
    /**
     * @stability stable
     */
    set launchTemplateName(value) {
        this._launchTemplateName = value;
    }
    /**
     * @stability stable
     */
    resetLaunchTemplateName() {
        this._launchTemplateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateNameInput() {
        return this._launchTemplateName;
    }
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    /**
     * @stability stable
     */
    set version(value) {
        this._version = value;
    }
    /**
     * @stability stable
     */
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionInput() {
        return this._version;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference = AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference[_f] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference", version: "3.0.1" };
function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        launch_template_specification: autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform;
function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_specification: autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
        override: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform)(struct.override),
    };
}
exports.autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform = autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // launch_template_specification - computed: false, optional: false, required: true
        this._launchTemplateSpecification = new AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference(this, "launch_template_specification", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _m, _o;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_m = this._launchTemplateSpecification) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.launchTemplateSpecification = (_o = this._launchTemplateSpecification) === null || _o === void 0 ? void 0 : _o.internalValue;
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
            this._launchTemplateSpecification.internalValue = undefined;
            this._override = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._launchTemplateSpecification.internalValue = value.launchTemplateSpecification;
            this._override = value.override;
        }
    }
    /**
     * @stability stable
     */
    get launchTemplateSpecification() {
        return this._launchTemplateSpecification;
    }
    /**
     * @stability stable
     */
    putLaunchTemplateSpecification(value) {
        this._launchTemplateSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateSpecificationInput() {
        return this._launchTemplateSpecification.internalValue;
    }
    /**
     * @stability stable
     */
    get override() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('override');
    }
    /**
     * @stability stable
     */
    set override(value) {
        this._override = value;
    }
    /**
     * @stability stable
     */
    resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get overrideInput() {
        return this._override;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference = AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
_g = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference[_g] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference", version: "3.0.1" };
function autoscalingGroupMixedInstancesPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instances_distribution: autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct.instancesDistribution),
        launch_template: autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct.launchTemplate),
    };
}
exports.autoscalingGroupMixedInstancesPolicyToTerraform = autoscalingGroupMixedInstancesPolicyToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // instances_distribution - computed: false, optional: true, required: false
        this._instancesDistribution = new AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference(this, "instances_distribution", true);
        // launch_template - computed: false, optional: false, required: true
        this._launchTemplate = new AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference(this, "launch_template", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _m, _o, _p, _q;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_m = this._instancesDistribution) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.instancesDistribution = (_o = this._instancesDistribution) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        if ((_p = this._launchTemplate) === null || _p === void 0 ? void 0 : _p.internalValue) {
            hasAnyValues = true;
            internalValueResult.launchTemplate = (_q = this._launchTemplate) === null || _q === void 0 ? void 0 : _q.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instancesDistribution.internalValue = undefined;
            this._launchTemplate.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instancesDistribution.internalValue = value.instancesDistribution;
            this._launchTemplate.internalValue = value.launchTemplate;
        }
    }
    /**
     * @stability stable
     */
    get instancesDistribution() {
        return this._instancesDistribution;
    }
    /**
     * @stability stable
     */
    putInstancesDistribution(value) {
        this._instancesDistribution.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInstancesDistribution() {
        this._instancesDistribution.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instancesDistributionInput() {
        return this._instancesDistribution.internalValue;
    }
    /**
     * @stability stable
     */
    get launchTemplate() {
        return this._launchTemplate;
    }
    /**
     * @stability stable
     */
    putLaunchTemplate(value) {
        this._launchTemplate.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }
}
exports.AutoscalingGroupMixedInstancesPolicyOutputReference = AutoscalingGroupMixedInstancesPolicyOutputReference;
_h = JSII_RTTI_SYMBOL_1;
AutoscalingGroupMixedInstancesPolicyOutputReference[_h] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupMixedInstancesPolicyOutputReference", version: "3.0.1" };
function autoscalingGroupTagToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        propagate_at_launch: cdktf.booleanToTerraform(struct.propagateAtLaunch),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.autoscalingGroupTagToTerraform = autoscalingGroupTagToTerraform;
function autoscalingGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
exports.autoscalingGroupTimeoutsToTerraform = autoscalingGroupTimeoutsToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._delete) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._delete = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._delete = value.delete;
        }
    }
    /**
     * @stability stable
     */
    get delete() {
        return this.getStringAttribute('delete');
    }
    /**
     * @stability stable
     */
    set delete(value) {
        this._delete = value;
    }
    /**
     * @stability stable
     */
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteInput() {
        return this._delete;
    }
}
exports.AutoscalingGroupTimeoutsOutputReference = AutoscalingGroupTimeoutsOutputReference;
_j = JSII_RTTI_SYMBOL_1;
AutoscalingGroupTimeoutsOutputReference[_j] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupTimeoutsOutputReference", version: "3.0.1" };
function autoscalingGroupWarmPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_group_prepared_capacity: cdktf.numberToTerraform(struct.maxGroupPreparedCapacity),
        min_size: cdktf.numberToTerraform(struct.minSize),
        pool_state: cdktf.stringToTerraform(struct.poolState),
    };
}
exports.autoscalingGroupWarmPoolToTerraform = autoscalingGroupWarmPoolToTerraform;
/**
 * @stability stable
 */
class AutoscalingGroupWarmPoolOutputReference extends cdktf.ComplexObject {
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
        if (this._maxGroupPreparedCapacity) {
            hasAnyValues = true;
            internalValueResult.maxGroupPreparedCapacity = this._maxGroupPreparedCapacity;
        }
        if (this._minSize) {
            hasAnyValues = true;
            internalValueResult.minSize = this._minSize;
        }
        if (this._poolState) {
            hasAnyValues = true;
            internalValueResult.poolState = this._poolState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxGroupPreparedCapacity = undefined;
            this._minSize = undefined;
            this._poolState = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxGroupPreparedCapacity = value.maxGroupPreparedCapacity;
            this._minSize = value.minSize;
            this._poolState = value.poolState;
        }
    }
    /**
     * @stability stable
     */
    get maxGroupPreparedCapacity() {
        return this.getNumberAttribute('max_group_prepared_capacity');
    }
    /**
     * @stability stable
     */
    set maxGroupPreparedCapacity(value) {
        this._maxGroupPreparedCapacity = value;
    }
    /**
     * @stability stable
     */
    resetMaxGroupPreparedCapacity() {
        this._maxGroupPreparedCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxGroupPreparedCapacityInput() {
        return this._maxGroupPreparedCapacity;
    }
    /**
     * @stability stable
     */
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
    /**
     * @stability stable
     */
    set minSize(value) {
        this._minSize = value;
    }
    /**
     * @stability stable
     */
    resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minSizeInput() {
        return this._minSize;
    }
    /**
     * @stability stable
     */
    get poolState() {
        return this.getStringAttribute('pool_state');
    }
    /**
     * @stability stable
     */
    set poolState(value) {
        this._poolState = value;
    }
    /**
     * @stability stable
     */
    resetPoolState() {
        this._poolState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get poolStateInput() {
        return this._poolState;
    }
}
exports.AutoscalingGroupWarmPoolOutputReference = AutoscalingGroupWarmPoolOutputReference;
_k = JSII_RTTI_SYMBOL_1;
AutoscalingGroupWarmPoolOutputReference[_k] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroupWarmPoolOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group}.
 *
 * @stability stable
 */
class AutoscalingGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // instance_refresh - computed: false, optional: true, required: false
        this._instanceRefresh = new AutoscalingGroupInstanceRefreshOutputReference(this, "instance_refresh", true);
        // launch_template - computed: false, optional: true, required: false
        this._launchTemplate = new AutoscalingGroupLaunchTemplateOutputReference(this, "launch_template", true);
        // mixed_instances_policy - computed: false, optional: true, required: false
        this._mixedInstancesPolicy = new AutoscalingGroupMixedInstancesPolicyOutputReference(this, "mixed_instances_policy", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new AutoscalingGroupTimeoutsOutputReference(this, "timeouts", true);
        // warm_pool - computed: false, optional: true, required: false
        this._warmPool = new AutoscalingGroupWarmPoolOutputReference(this, "warm_pool", true);
        this._availabilityZones = config.availabilityZones;
        this._capacityRebalance = config.capacityRebalance;
        this._defaultCooldown = config.defaultCooldown;
        this._desiredCapacity = config.desiredCapacity;
        this._enabledMetrics = config.enabledMetrics;
        this._forceDelete = config.forceDelete;
        this._forceDeleteWarmPool = config.forceDeleteWarmPool;
        this._healthCheckGracePeriod = config.healthCheckGracePeriod;
        this._healthCheckType = config.healthCheckType;
        this._launchConfiguration = config.launchConfiguration;
        this._loadBalancers = config.loadBalancers;
        this._maxInstanceLifetime = config.maxInstanceLifetime;
        this._maxSize = config.maxSize;
        this._metricsGranularity = config.metricsGranularity;
        this._minElbCapacity = config.minElbCapacity;
        this._minSize = config.minSize;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._placementGroup = config.placementGroup;
        this._protectFromScaleIn = config.protectFromScaleIn;
        this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
        this._suspendedProcesses = config.suspendedProcesses;
        this._tags = config.tags;
        this._targetGroupArns = config.targetGroupArns;
        this._terminationPolicies = config.terminationPolicies;
        this._vpcZoneIdentifier = config.vpcZoneIdentifier;
        this._waitForCapacityTimeout = config.waitForCapacityTimeout;
        this._waitForElbCapacity = config.waitForElbCapacity;
        this._initialLifecycleHook = config.initialLifecycleHook;
        this._instanceRefresh.internalValue = config.instanceRefresh;
        this._launchTemplate.internalValue = config.launchTemplate;
        this._mixedInstancesPolicy.internalValue = config.mixedInstancesPolicy;
        this._tag = config.tag;
        this._timeouts.internalValue = config.timeouts;
        this._warmPool.internalValue = config.warmPool;
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
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    /**
     * @stability stable
     */
    set availabilityZones(value) {
        this._availabilityZones = value;
    }
    /**
     * @stability stable
     */
    resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get availabilityZonesInput() {
        return this._availabilityZones;
    }
    /**
     * @stability stable
     */
    get capacityRebalance() {
        return this.getBooleanAttribute('capacity_rebalance');
    }
    /**
     * @stability stable
     */
    set capacityRebalance(value) {
        this._capacityRebalance = value;
    }
    /**
     * @stability stable
     */
    resetCapacityRebalance() {
        this._capacityRebalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityRebalanceInput() {
        return this._capacityRebalance;
    }
    /**
     * @stability stable
     */
    get defaultCooldown() {
        return this.getNumberAttribute('default_cooldown');
    }
    /**
     * @stability stable
     */
    set defaultCooldown(value) {
        this._defaultCooldown = value;
    }
    /**
     * @stability stable
     */
    resetDefaultCooldown() {
        this._defaultCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultCooldownInput() {
        return this._defaultCooldown;
    }
    /**
     * @stability stable
     */
    get desiredCapacity() {
        return this.getNumberAttribute('desired_capacity');
    }
    /**
     * @stability stable
     */
    set desiredCapacity(value) {
        this._desiredCapacity = value;
    }
    /**
     * @stability stable
     */
    resetDesiredCapacity() {
        this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get desiredCapacityInput() {
        return this._desiredCapacity;
    }
    /**
     * @stability stable
     */
    get enabledMetrics() {
        return this.getListAttribute('enabled_metrics');
    }
    /**
     * @stability stable
     */
    set enabledMetrics(value) {
        this._enabledMetrics = value;
    }
    /**
     * @stability stable
     */
    resetEnabledMetrics() {
        this._enabledMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledMetricsInput() {
        return this._enabledMetrics;
    }
    /**
     * @stability stable
     */
    get forceDelete() {
        return this.getBooleanAttribute('force_delete');
    }
    /**
     * @stability stable
     */
    set forceDelete(value) {
        this._forceDelete = value;
    }
    /**
     * @stability stable
     */
    resetForceDelete() {
        this._forceDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forceDeleteInput() {
        return this._forceDelete;
    }
    /**
     * @stability stable
     */
    get forceDeleteWarmPool() {
        return this.getBooleanAttribute('force_delete_warm_pool');
    }
    /**
     * @stability stable
     */
    set forceDeleteWarmPool(value) {
        this._forceDeleteWarmPool = value;
    }
    /**
     * @stability stable
     */
    resetForceDeleteWarmPool() {
        this._forceDeleteWarmPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forceDeleteWarmPoolInput() {
        return this._forceDeleteWarmPool;
    }
    /**
     * @stability stable
     */
    get healthCheckGracePeriod() {
        return this.getNumberAttribute('health_check_grace_period');
    }
    /**
     * @stability stable
     */
    set healthCheckGracePeriod(value) {
        this._healthCheckGracePeriod = value;
    }
    /**
     * @stability stable
     */
    resetHealthCheckGracePeriod() {
        this._healthCheckGracePeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get healthCheckGracePeriodInput() {
        return this._healthCheckGracePeriod;
    }
    /**
     * @stability stable
     */
    get healthCheckType() {
        return this.getStringAttribute('health_check_type');
    }
    /**
     * @stability stable
     */
    set healthCheckType(value) {
        this._healthCheckType = value;
    }
    /**
     * @stability stable
     */
    resetHealthCheckType() {
        this._healthCheckType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get healthCheckTypeInput() {
        return this._healthCheckType;
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
    get launchConfiguration() {
        return this.getStringAttribute('launch_configuration');
    }
    /**
     * @stability stable
     */
    set launchConfiguration(value) {
        this._launchConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetLaunchConfiguration() {
        this._launchConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchConfigurationInput() {
        return this._launchConfiguration;
    }
    /**
     * @stability stable
     */
    get loadBalancers() {
        return this.getListAttribute('load_balancers');
    }
    /**
     * @stability stable
     */
    set loadBalancers(value) {
        this._loadBalancers = value;
    }
    /**
     * @stability stable
     */
    resetLoadBalancers() {
        this._loadBalancers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loadBalancersInput() {
        return this._loadBalancers;
    }
    /**
     * @stability stable
     */
    get maxInstanceLifetime() {
        return this.getNumberAttribute('max_instance_lifetime');
    }
    /**
     * @stability stable
     */
    set maxInstanceLifetime(value) {
        this._maxInstanceLifetime = value;
    }
    /**
     * @stability stable
     */
    resetMaxInstanceLifetime() {
        this._maxInstanceLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxInstanceLifetimeInput() {
        return this._maxInstanceLifetime;
    }
    /**
     * @stability stable
     */
    get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    /**
     * @stability stable
     */
    set maxSize(value) {
        this._maxSize = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxSizeInput() {
        return this._maxSize;
    }
    /**
     * @stability stable
     */
    get metricsGranularity() {
        return this.getStringAttribute('metrics_granularity');
    }
    /**
     * @stability stable
     */
    set metricsGranularity(value) {
        this._metricsGranularity = value;
    }
    /**
     * @stability stable
     */
    resetMetricsGranularity() {
        this._metricsGranularity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricsGranularityInput() {
        return this._metricsGranularity;
    }
    /**
     * @stability stable
     */
    get minElbCapacity() {
        return this.getNumberAttribute('min_elb_capacity');
    }
    /**
     * @stability stable
     */
    set minElbCapacity(value) {
        this._minElbCapacity = value;
    }
    /**
     * @stability stable
     */
    resetMinElbCapacity() {
        this._minElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minElbCapacityInput() {
        return this._minElbCapacity;
    }
    /**
     * @stability stable
     */
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
    /**
     * @stability stable
     */
    set minSize(value) {
        this._minSize = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minSizeInput() {
        return this._minSize;
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
    /**
     * @stability stable
     */
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    /**
     * @stability stable
     */
    set namePrefix(value) {
        this._namePrefix = value;
    }
    /**
     * @stability stable
     */
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get namePrefixInput() {
        return this._namePrefix;
    }
    /**
     * @stability stable
     */
    get placementGroup() {
        return this.getStringAttribute('placement_group');
    }
    /**
     * @stability stable
     */
    set placementGroup(value) {
        this._placementGroup = value;
    }
    /**
     * @stability stable
     */
    resetPlacementGroup() {
        this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get placementGroupInput() {
        return this._placementGroup;
    }
    /**
     * @stability stable
     */
    get protectFromScaleIn() {
        return this.getBooleanAttribute('protect_from_scale_in');
    }
    /**
     * @stability stable
     */
    set protectFromScaleIn(value) {
        this._protectFromScaleIn = value;
    }
    /**
     * @stability stable
     */
    resetProtectFromScaleIn() {
        this._protectFromScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protectFromScaleInInput() {
        return this._protectFromScaleIn;
    }
    /**
     * @stability stable
     */
    get serviceLinkedRoleArn() {
        return this.getStringAttribute('service_linked_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceLinkedRoleArn(value) {
        this._serviceLinkedRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetServiceLinkedRoleArn() {
        this._serviceLinkedRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceLinkedRoleArnInput() {
        return this._serviceLinkedRoleArn;
    }
    /**
     * @stability stable
     */
    get suspendedProcesses() {
        return this.getListAttribute('suspended_processes');
    }
    /**
     * @stability stable
     */
    set suspendedProcesses(value) {
        this._suspendedProcesses = value;
    }
    /**
     * @stability stable
     */
    resetSuspendedProcesses() {
        this._suspendedProcesses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get suspendedProcessesInput() {
        return this._suspendedProcesses;
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
    get targetGroupArns() {
        return this.getListAttribute('target_group_arns');
    }
    /**
     * @stability stable
     */
    set targetGroupArns(value) {
        this._targetGroupArns = value;
    }
    /**
     * @stability stable
     */
    resetTargetGroupArns() {
        this._targetGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetGroupArnsInput() {
        return this._targetGroupArns;
    }
    /**
     * @stability stable
     */
    get terminationPolicies() {
        return this.getListAttribute('termination_policies');
    }
    /**
     * @stability stable
     */
    set terminationPolicies(value) {
        this._terminationPolicies = value;
    }
    /**
     * @stability stable
     */
    resetTerminationPolicies() {
        this._terminationPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get terminationPoliciesInput() {
        return this._terminationPolicies;
    }
    /**
     * @stability stable
     */
    get vpcZoneIdentifier() {
        return this.getListAttribute('vpc_zone_identifier');
    }
    /**
     * @stability stable
     */
    set vpcZoneIdentifier(value) {
        this._vpcZoneIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetVpcZoneIdentifier() {
        this._vpcZoneIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcZoneIdentifierInput() {
        return this._vpcZoneIdentifier;
    }
    /**
     * @stability stable
     */
    get waitForCapacityTimeout() {
        return this.getStringAttribute('wait_for_capacity_timeout');
    }
    /**
     * @stability stable
     */
    set waitForCapacityTimeout(value) {
        this._waitForCapacityTimeout = value;
    }
    /**
     * @stability stable
     */
    resetWaitForCapacityTimeout() {
        this._waitForCapacityTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get waitForCapacityTimeoutInput() {
        return this._waitForCapacityTimeout;
    }
    /**
     * @stability stable
     */
    get waitForElbCapacity() {
        return this.getNumberAttribute('wait_for_elb_capacity');
    }
    /**
     * @stability stable
     */
    set waitForElbCapacity(value) {
        this._waitForElbCapacity = value;
    }
    /**
     * @stability stable
     */
    resetWaitForElbCapacity() {
        this._waitForElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get waitForElbCapacityInput() {
        return this._waitForElbCapacity;
    }
    /**
     * @stability stable
     */
    get initialLifecycleHook() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('initial_lifecycle_hook');
    }
    /**
     * @stability stable
     */
    set initialLifecycleHook(value) {
        this._initialLifecycleHook = value;
    }
    /**
     * @stability stable
     */
    resetInitialLifecycleHook() {
        this._initialLifecycleHook = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get initialLifecycleHookInput() {
        return this._initialLifecycleHook;
    }
    /**
     * @stability stable
     */
    get instanceRefresh() {
        return this._instanceRefresh;
    }
    /**
     * @stability stable
     */
    putInstanceRefresh(value) {
        this._instanceRefresh.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInstanceRefresh() {
        this._instanceRefresh.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceRefreshInput() {
        return this._instanceRefresh.internalValue;
    }
    /**
     * @stability stable
     */
    get launchTemplate() {
        return this._launchTemplate;
    }
    /**
     * @stability stable
     */
    putLaunchTemplate(value) {
        this._launchTemplate.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateInput() {
        return this._launchTemplate.internalValue;
    }
    /**
     * @stability stable
     */
    get mixedInstancesPolicy() {
        return this._mixedInstancesPolicy;
    }
    /**
     * @stability stable
     */
    putMixedInstancesPolicy(value) {
        this._mixedInstancesPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMixedInstancesPolicy() {
        this._mixedInstancesPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mixedInstancesPolicyInput() {
        return this._mixedInstancesPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get tag() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tag');
    }
    /**
     * @stability stable
     */
    set tag(value) {
        this._tag = value;
    }
    /**
     * @stability stable
     */
    resetTag() {
        this._tag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagInput() {
        return this._tag;
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
    /**
     * @stability stable
     */
    get warmPool() {
        return this._warmPool;
    }
    /**
     * @stability stable
     */
    putWarmPool(value) {
        this._warmPool.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetWarmPool() {
        this._warmPool.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get warmPoolInput() {
        return this._warmPool.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            capacity_rebalance: cdktf.booleanToTerraform(this._capacityRebalance),
            default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
            desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
            enabled_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledMetrics),
            force_delete: cdktf.booleanToTerraform(this._forceDelete),
            force_delete_warm_pool: cdktf.booleanToTerraform(this._forceDeleteWarmPool),
            health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
            health_check_type: cdktf.stringToTerraform(this._healthCheckType),
            launch_configuration: cdktf.stringToTerraform(this._launchConfiguration),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
            max_instance_lifetime: cdktf.numberToTerraform(this._maxInstanceLifetime),
            max_size: cdktf.numberToTerraform(this._maxSize),
            metrics_granularity: cdktf.stringToTerraform(this._metricsGranularity),
            min_elb_capacity: cdktf.numberToTerraform(this._minElbCapacity),
            min_size: cdktf.numberToTerraform(this._minSize),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            placement_group: cdktf.stringToTerraform(this._placementGroup),
            protect_from_scale_in: cdktf.booleanToTerraform(this._protectFromScaleIn),
            service_linked_role_arn: cdktf.stringToTerraform(this._serviceLinkedRoleArn),
            suspended_processes: cdktf.listMapper(cdktf.stringToTerraform)(this._suspendedProcesses),
            tags: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._tags),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
            termination_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._terminationPolicies),
            vpc_zone_identifier: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcZoneIdentifier),
            wait_for_capacity_timeout: cdktf.stringToTerraform(this._waitForCapacityTimeout),
            wait_for_elb_capacity: cdktf.numberToTerraform(this._waitForElbCapacity),
            initial_lifecycle_hook: cdktf.listMapper(autoscalingGroupInitialLifecycleHookToTerraform)(this._initialLifecycleHook),
            instance_refresh: autoscalingGroupInstanceRefreshToTerraform(this._instanceRefresh.internalValue),
            launch_template: autoscalingGroupLaunchTemplateToTerraform(this._launchTemplate.internalValue),
            mixed_instances_policy: autoscalingGroupMixedInstancesPolicyToTerraform(this._mixedInstancesPolicy.internalValue),
            tag: cdktf.listMapper(autoscalingGroupTagToTerraform)(this._tag),
            timeouts: autoscalingGroupTimeoutsToTerraform(this._timeouts.internalValue),
            warm_pool: autoscalingGroupWarmPoolToTerraform(this._warmPool.internalValue),
        };
    }
}
exports.AutoscalingGroup = AutoscalingGroup;
_l = JSII_RTTI_SYMBOL_1;
AutoscalingGroup[_l] = { fqn: "@cdktf/provider-aws.autoscaling.AutoscalingGroup", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AutoscalingGroup.tfResourceType = "aws_autoscaling_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmctZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXV0b3NjYWxpbmcvYXV0b3NjYWxpbmctZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE0Ri9CLFNBQWdCLCtDQUErQyxDQUFDLE1BQTZDO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMxRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM1RSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO1FBQy9FLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNuRCxDQUFBO0FBQ0gsQ0FBQztBQWRELDBHQWNDO0FBYUQsU0FBZ0IscURBQXFELENBQUMsTUFBK0c7SUFDbkwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVB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QUF5QyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1lBQzlGLHNCQUFzQixFQUFFLCtDQUErQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7WUFDakgsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hFLFFBQVEsRUFBRSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUMzRSxTQUFTLEVBQUUsbUNBQW1DLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDN0UsQ0FBQztJQUNKLENBQUM7O0FBanFCSCw0Q0FrcUJDOzs7QUFocUJDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csK0JBQWMsR0FBVyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVpvbmVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlSZWJhbGFuY2U/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0Q29vbGRvd24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNpcmVkQ2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZE1ldHJpY3M/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3JjZURlbGV0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvcmNlRGVsZXRlV2FybVBvb2w/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFsdGhDaGVja0dyYWNlUGVyaW9kPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFsdGhDaGVja1R5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaENvbmZpZ3VyYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvYWRCYWxhbmNlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhJbnN0YW5jZUxpZmV0aW1lPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhTaXplOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRyaWNzR3JhbnVsYXJpdHk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5FbGJDYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluU2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZVByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwbGFjZW1lbnRHcm91cD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm90ZWN0RnJvbVNjYWxlSW4/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VMaW5rZWRSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VzcGVuZGVkUHJvY2Vzc2VzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRHcm91cEFybnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVybWluYXRpb25Qb2xpY2llcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjWm9uZUlkZW50aWZpZXI/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdhaXRGb3JDYXBhY2l0eVRpbWVvdXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2FpdEZvckVsYkNhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbml0aWFsTGlmZWN5Y2xlSG9vaz86IEF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9va1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVJlZnJlc2g/OiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZT86IEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWl4ZWRJbnN0YW5jZXNQb2xpY3k/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZz86IEF1dG9zY2FsaW5nR3JvdXBUYWdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdhcm1Qb29sPzogQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2sge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0UmVzdWx0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFydGJlYXRUaW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaWZlY3ljbGVUcmFuc2l0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uTWV0YWRhdGE/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvblRhcmdldEFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9va1RvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9vayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRfcmVzdWx0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRSZXN1bHQpLFxuICAgIGhlYXJ0YmVhdF90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYXJ0YmVhdFRpbWVvdXQpLFxuICAgIGxpZmVjeWNsZV90cmFuc2l0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxpZmVjeWNsZVRyYW5zaXRpb24pLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgbm90aWZpY2F0aW9uX21ldGFkYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvbk1ldGFkYXRhKSxcbiAgICBub3RpZmljYXRpb25fdGFyZ2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25UYXJnZXRBcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNoZWNrcG9pbnREZWxheT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNoZWNrcG9pbnRQZXJjZW50YWdlcz86IG51bWJlcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlV2FybXVwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluSGVhbHRoeVBlcmNlbnRhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXNPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjaGVja3BvaW50X2RlbGF5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNoZWNrcG9pbnREZWxheSksXG4gICAgY2hlY2twb2ludF9wZXJjZW50YWdlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSkoc3RydWN0IS5jaGVja3BvaW50UGVyY2VudGFnZXMpLFxuICAgIGluc3RhbmNlX3dhcm11cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVdhcm11cCksXG4gICAgbWluX2hlYWx0aHlfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5IZWFsdGh5UGVyY2VudGFnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hQcmVmZXJlbmNlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoUHJlZmVyZW5jZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NoZWNrcG9pbnREZWxheSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2hlY2twb2ludERlbGF5ID0gdGhpcy5fY2hlY2twb2ludERlbGF5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jaGVja3BvaW50UGVyY2VudGFnZXMgPSB0aGlzLl9jaGVja3BvaW50UGVyY2VudGFnZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnN0YW5jZVdhcm11cCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VXYXJtdXAgPSB0aGlzLl9pbnN0YW5jZVdhcm11cDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pbkhlYWx0aHlQZXJjZW50YWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5taW5IZWFsdGh5UGVyY2VudGFnZSA9IHRoaXMuX21pbkhlYWx0aHlQZXJjZW50YWdlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hlY2twb2ludERlbGF5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5zdGFuY2VXYXJtdXAgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9taW5IZWFsdGh5UGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2hlY2twb2ludERlbGF5ID0gdmFsdWUuY2hlY2twb2ludERlbGF5O1xuICAgICAgdGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzID0gdmFsdWUuY2hlY2twb2ludFBlcmNlbnRhZ2VzO1xuICAgICAgdGhpcy5faW5zdGFuY2VXYXJtdXAgPSB2YWx1ZS5pbnN0YW5jZVdhcm11cDtcbiAgICAgIHRoaXMuX21pbkhlYWx0aHlQZXJjZW50YWdlID0gdmFsdWUubWluSGVhbHRoeVBlcmNlbnRhZ2U7XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2twb2ludF9kZWxheSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jaGVja3BvaW50RGVsYXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNoZWNrcG9pbnREZWxheSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NoZWNrcG9pbnRfZGVsYXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNoZWNrcG9pbnREZWxheSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludERlbGF5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2hlY2twb2ludERlbGF5KCkge1xuICAgIHRoaXMuX2NoZWNrcG9pbnREZWxheSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludERlbGF5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrcG9pbnREZWxheTtcbiAgfVxuXG4gIC8vIGNoZWNrcG9pbnRfcGVyY2VudGFnZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2hlY2twb2ludFBlcmNlbnRhZ2VzPzogbnVtYmVyW107IFxuICBwdWJsaWMgZ2V0IGNoZWNrcG9pbnRQZXJjZW50YWdlcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2hlY2twb2ludF9wZXJjZW50YWdlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNoZWNrcG9pbnRQZXJjZW50YWdlcyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9jaGVja3BvaW50UGVyY2VudGFnZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGVja3BvaW50UGVyY2VudGFnZXMoKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaGVja3BvaW50UGVyY2VudGFnZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2twb2ludFBlcmNlbnRhZ2VzO1xuICB9XG5cbiAgLy8gaW5zdGFuY2Vfd2FybXVwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlV2FybXVwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVdhcm11cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3dhcm11cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VXYXJtdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlV2FybXVwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VXYXJtdXAoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VXYXJtdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlV2FybXVwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlV2FybXVwO1xuICB9XG5cbiAgLy8gbWluX2hlYWx0aHlfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5IZWFsdGh5UGVyY2VudGFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluSGVhbHRoeVBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5faGVhbHRoeV9wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5IZWFsdGh5UGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluSGVhbHRoeVBlcmNlbnRhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5IZWFsdGh5UGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl9taW5IZWFsdGh5UGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluSGVhbHRoeVBlcmNlbnRhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluSGVhbHRoeVBlcmNlbnRhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0cmF0ZWd5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRyaWdnZXJzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZlcmVuY2VzPzogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFRvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwSW5zdGFuY2VSZWZyZXNoKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RyYXRlZ3kpLFxuICAgIHRyaWdnZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRyaWdnZXJzKSxcbiAgICBwcmVmZXJlbmNlczogYXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmZXJlbmNlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc3RyYXRlZ3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0cmF0ZWd5ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgfVxuICAgIGlmICh0aGlzLl90cmlnZ2Vycykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHJpZ2dlcnMgPSB0aGlzLl90cmlnZ2VycztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWZlcmVuY2VzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVmZXJlbmNlcyA9IHRoaXMuX3ByZWZlcmVuY2VzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHJpZ2dlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVmZXJlbmNlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zdHJhdGVneSA9IHZhbHVlLnN0cmF0ZWd5O1xuICAgICAgdGhpcy5fdHJpZ2dlcnMgPSB2YWx1ZS50cmlnZ2VycztcbiAgICAgIHRoaXMuX3ByZWZlcmVuY2VzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcmVmZXJlbmNlcztcbiAgICB9XG4gIH1cblxuICAvLyBzdHJhdGVneSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdHJhdGVneT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdHJhdGVneScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RyYXRlZ3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5O1xuICB9XG5cbiAgLy8gdHJpZ2dlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJpZ2dlcnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdHJpZ2dlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHJpZ2dlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRyaWdnZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RyaWdnZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHJpZ2dlcnMoKSB7XG4gICAgdGhpcy5fdHJpZ2dlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyaWdnZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXJzO1xuICB9XG5cbiAgLy8gcHJlZmVyZW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVyZW5jZXMgPSBuZXcgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaFByZWZlcmVuY2VzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByZWZlcmVuY2VzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHByZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJlbmNlcztcbiAgfVxuICBwdWJsaWMgcHV0UHJlZmVyZW5jZXModmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hQcmVmZXJlbmNlcykge1xuICAgIHRoaXMuX3ByZWZlcmVuY2VzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmZXJlbmNlcygpIHtcbiAgICB0aGlzLl9wcmVmZXJlbmNlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJlbmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJlbmNlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmVyc2lvbiA9IHRoaXMuX3ZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTGF1bmNoVGVtcGxhdGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWUudmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB2ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbigpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kQmFzZUNhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdEFsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RJbnN0YW5jZVBvb2xzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcG90TWF4UHJpY2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvbl9kZW1hbmRfYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgb25fZGVtYW5kX2Jhc2VfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub25EZW1hbmRCYXNlQ2FwYWNpdHkpLFxuICAgIG9uX2RlbWFuZF9wZXJjZW50YWdlX2Fib3ZlX2Jhc2VfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEub25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkpLFxuICAgIHNwb3RfYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90QWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICBzcG90X2luc3RhbmNlX3Bvb2xzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RJbnN0YW5jZVBvb2xzKSxcbiAgICBzcG90X21heF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90TWF4UHJpY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29uRGVtYW5kQmFzZUNhcGFjaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vbkRlbWFuZEJhc2VDYXBhY2l0eSA9IHRoaXMuX29uRGVtYW5kQmFzZUNhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9uRGVtYW5kUGVyY2VudGFnZUFib3ZlQmFzZUNhcGFjaXR5ID0gdGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcG90QWxsb2NhdGlvblN0cmF0ZWd5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcG90QWxsb2NhdGlvblN0cmF0ZWd5ID0gdGhpcy5fc3BvdEFsbG9jYXRpb25TdHJhdGVneTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nwb3RJbnN0YW5jZVBvb2xzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcG90SW5zdGFuY2VQb29scyA9IHRoaXMuX3Nwb3RJbnN0YW5jZVBvb2xzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3BvdE1heFByaWNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcG90TWF4UHJpY2UgPSB0aGlzLl9zcG90TWF4UHJpY2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX29uRGVtYW5kQmFzZUNhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zcG90QWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BvdEluc3RhbmNlUG9vbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zcG90TWF4UHJpY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ID0gdmFsdWUub25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k7XG4gICAgICB0aGlzLl9vbkRlbWFuZEJhc2VDYXBhY2l0eSA9IHZhbHVlLm9uRGVtYW5kQmFzZUNhcGFjaXR5O1xuICAgICAgdGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkgPSB2YWx1ZS5vbkRlbWFuZFBlcmNlbnRhZ2VBYm92ZUJhc2VDYXBhY2l0eTtcbiAgICAgIHRoaXMuX3Nwb3RBbGxvY2F0aW9uU3RyYXRlZ3kgPSB2YWx1ZS5zcG90QWxsb2NhdGlvblN0cmF0ZWd5O1xuICAgICAgdGhpcy5fc3BvdEluc3RhbmNlUG9vbHMgPSB2YWx1ZS5zcG90SW5zdGFuY2VQb29scztcbiAgICAgIHRoaXMuX3Nwb3RNYXhQcmljZSA9IHZhbHVlLnNwb3RNYXhQcmljZTtcbiAgICB9XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfYWxsb2NhdGlvbl9zdHJhdGVneSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29uX2RlbWFuZF9hbGxvY2F0aW9uX3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfYmFzZV9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uRGVtYW5kQmFzZUNhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBvbkRlbWFuZEJhc2VDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ29uX2RlbWFuZF9iYXNlX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZEJhc2VDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb25EZW1hbmRCYXNlQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPbkRlbWFuZEJhc2VDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9vbkRlbWFuZEJhc2VDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRCYXNlQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25EZW1hbmRCYXNlQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfcGVyY2VudGFnZV9hYm92ZV9iYXNlX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kUGVyY2VudGFnZUFib3ZlQmFzZUNhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnb25fZGVtYW5kX3BlcmNlbnRhZ2VfYWJvdmVfYmFzZV9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29uRGVtYW5kUGVyY2VudGFnZUFib3ZlQmFzZUNhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fb25EZW1hbmRQZXJjZW50YWdlQWJvdmVCYXNlQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kUGVyY2VudGFnZUFib3ZlQmFzZUNhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uRGVtYW5kUGVyY2VudGFnZUFib3ZlQmFzZUNhcGFjaXR5O1xuICB9XG5cbiAgLy8gc3BvdF9hbGxvY2F0aW9uX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdEFsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3BvdEFsbG9jYXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nwb3RfYWxsb2NhdGlvbl9zdHJhdGVneScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3BvdEFsbG9jYXRpb25TdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3BvdEFsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RBbGxvY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgdGhpcy5fc3BvdEFsbG9jYXRpb25TdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdEFsbG9jYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90QWxsb2NhdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgLy8gc3BvdF9pbnN0YW5jZV9wb29scyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nwb3RJbnN0YW5jZVBvb2xzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzcG90SW5zdGFuY2VQb29scygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Nwb3RfaW5zdGFuY2VfcG9vbHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RJbnN0YW5jZVBvb2xzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zcG90SW5zdGFuY2VQb29scyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RJbnN0YW5jZVBvb2xzKCkge1xuICAgIHRoaXMuX3Nwb3RJbnN0YW5jZVBvb2xzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90SW5zdGFuY2VQb29sc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90SW5zdGFuY2VQb29scztcbiAgfVxuXG4gIC8vIHNwb3RfbWF4X3ByaWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nwb3RNYXhQcmljZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3BvdE1heFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9tYXhfcHJpY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RNYXhQcmljZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3BvdE1heFByaWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdE1heFByaWNlKCkge1xuICAgIHRoaXMuX3Nwb3RNYXhQcmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdE1heFByaWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RNYXhQcmljZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZUlkKSxcbiAgICBsYXVuY2hfdGVtcGxhdGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZU5hbWUpLFxuICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUZW1wbGF0ZUlkID0gdGhpcy5fbGF1bmNoVGVtcGxhdGVJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoVGVtcGxhdGVOYW1lID0gdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmVyc2lvbiA9IHRoaXMuX3ZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkID0gdmFsdWUubGF1bmNoVGVtcGxhdGVJZDtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSA9IHZhbHVlLmxhdW5jaFRlbXBsYXRlTmFtZTtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhdW5jaFRlbXBsYXRlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZUlkKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVJZDtcbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoVGVtcGxhdGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZU5hbWUoKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcnNpb24oKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsYXVuY2hfdGVtcGxhdGVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVJZCksXG4gICAgbGF1bmNoX3RlbXBsYXRlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVOYW1lKSxcbiAgICB2ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxhdW5jaFRlbXBsYXRlSWQgPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUZW1wbGF0ZU5hbWUgPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJzaW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52ZXJzaW9uID0gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVJZCA9IHZhbHVlLmxhdW5jaFRlbXBsYXRlSWQ7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZU5hbWUgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZU5hbWU7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWUudmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYXVuY2hUZW1wbGF0ZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGF1bmNoX3RlbXBsYXRlX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hUZW1wbGF0ZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoVGVtcGxhdGVJZCgpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlSWQ7XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGF1bmNoX3RlbXBsYXRlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhdW5jaFRlbXBsYXRlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoVGVtcGxhdGVOYW1lKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlTmFtZTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0ZWRDYXBhY2l0eT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uPzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIHdlaWdodGVkX2NhcGFjaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndlaWdodGVkQ2FwYWNpdHkpLFxuICAgIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb246IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdmVycmlkZT86IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3ZlcnJpZGVbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uOiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSxcbiAgICBvdmVycmlkZTogY2RrdGYubGlzdE1hcHBlcihhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU92ZXJyaWRlVG9UZXJyYWZvcm0pKHN0cnVjdCEub3ZlcnJpZGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gPSB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVycmlkZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3ZlcnJpZGUgPSB0aGlzLl9vdmVycmlkZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb247XG4gICAgICB0aGlzLl9vdmVycmlkZSA9IHZhbHVlLm92ZXJyaWRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhdW5jaF90ZW1wbGF0ZV9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsYXVuY2hfdGVtcGxhdGVfc3BlY2lmaWNhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0TGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZUxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX292ZXJyaWRlPzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZVtdOyBcbiAgcHVibGljIGdldCBvdmVycmlkZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3ZlcnJpZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBvdmVycmlkZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGVPdmVycmlkZVtdKSB7XG4gICAgdGhpcy5fb3ZlcnJpZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdmVycmlkZSgpIHtcbiAgICB0aGlzLl9vdmVycmlkZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3ZlcnJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcnJpZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VzRGlzdHJpYnV0aW9uPzogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5SW5zdGFuY2VzRGlzdHJpYnV0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5TGF1bmNoVGVtcGxhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3kpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZXNfZGlzdHJpYnV0aW9uOiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlc0Rpc3RyaWJ1dGlvbiksXG4gICAgbGF1bmNoX3RlbXBsYXRlOiBhdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZXNEaXN0cmlidXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlc0Rpc3RyaWJ1dGlvbiA9IHRoaXMuX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhdW5jaFRlbXBsYXRlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUZW1wbGF0ZSA9IHRoaXMuX2xhdW5jaFRlbXBsYXRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VzRGlzdHJpYnV0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnN0YW5jZXNEaXN0cmlidXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmluc3RhbmNlc0Rpc3RyaWJ1dGlvbjtcbiAgICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYXVuY2hUZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YW5jZXNfZGlzdHJpYnV0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbiA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaW5zdGFuY2VzX2Rpc3RyaWJ1dGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbnN0YW5jZXNEaXN0cmlidXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SW5zdGFuY2VzRGlzdHJpYnV0aW9uKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lJbnN0YW5jZXNEaXN0cmlidXRpb24pIHtcbiAgICB0aGlzLl9pbnN0YW5jZXNEaXN0cmlidXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlc0Rpc3RyaWJ1dGlvbigpIHtcbiAgICB0aGlzLl9pbnN0YW5jZXNEaXN0cmlidXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VzRGlzdHJpYnV0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlc0Rpc3RyaWJ1dGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlID0gbmV3IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeUxhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImxhdW5jaF90ZW1wbGF0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGU7XG4gIH1cbiAgcHVibGljIHB1dExhdW5jaFRlbXBsYXRlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwTWl4ZWRJbnN0YW5jZXNQb2xpY3lMYXVuY2hUZW1wbGF0ZSkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwVGFnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3BhZ2F0ZUF0TGF1bmNoOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvc2NhbGluZ0dyb3VwVGFnVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cFRhZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHByb3BhZ2F0ZV9hdF9sYXVuY2g6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByb3BhZ2F0ZUF0TGF1bmNoKSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IEF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0c091dHB1dFJlZmVyZW5jZSB8IEF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdHcm91cFRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWxldGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZSA9IHRoaXMuX2RlbGV0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdmFsdWUuZGVsZXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1dG9zY2FsaW5nR3JvdXBXYXJtUG9vbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5TaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9vbFN0YXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sVG9UZXJyYWZvcm0oc3RydWN0PzogQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sT3V0cHV0UmVmZXJlbmNlIHwgQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X2dyb3VwX3ByZXBhcmVkX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSksXG4gICAgbWluX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluU2l6ZSksXG4gICAgcG9vbF9zdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb29sU3RhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2xPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhHcm91cFByZXBhcmVkQ2FwYWNpdHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSA9IHRoaXMuX21heEdyb3VwUHJlcGFyZWRDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pblNpemUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pblNpemUgPSB0aGlzLl9taW5TaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9vbFN0YXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wb29sU3RhdGUgPSB0aGlzLl9wb29sU3RhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2wgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhHcm91cFByZXBhcmVkQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9taW5TaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcG9vbFN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhHcm91cFByZXBhcmVkQ2FwYWNpdHkgPSB2YWx1ZS5tYXhHcm91cFByZXBhcmVkQ2FwYWNpdHk7XG4gICAgICB0aGlzLl9taW5TaXplID0gdmFsdWUubWluU2l6ZTtcbiAgICAgIHRoaXMuX3Bvb2xTdGF0ZSA9IHZhbHVlLnBvb2xTdGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfZ3JvdXBfcHJlcGFyZWRfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhHcm91cFByZXBhcmVkQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfZ3JvdXBfcHJlcGFyZWRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5KCkge1xuICAgIHRoaXMuX21heEdyb3VwUHJlcGFyZWRDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4R3JvdXBQcmVwYXJlZENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heEdyb3VwUHJlcGFyZWRDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIG1pbl9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pblNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pblNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pblNpemUoKSB7XG4gICAgdGhpcy5fbWluU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5TaXplO1xuICB9XG5cbiAgLy8gcG9vbF9zdGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb29sU3RhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBvb2xTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bvb2xfc3RhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvb2xTdGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9vbFN0YXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UG9vbFN0YXRlKCkge1xuICAgIHRoaXMuX3Bvb2xTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9vbFN0YXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvb2xTdGF0ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBdXRvc2NhbGluZ0dyb3VwIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2F1dG9zY2FsaW5nX2dyb3VwXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBdXRvc2NhbGluZ0dyb3VwQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXV0b3NjYWxpbmdfZ3JvdXAnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZXM7XG4gICAgdGhpcy5fY2FwYWNpdHlSZWJhbGFuY2UgPSBjb25maWcuY2FwYWNpdHlSZWJhbGFuY2U7XG4gICAgdGhpcy5fZGVmYXVsdENvb2xkb3duID0gY29uZmlnLmRlZmF1bHRDb29sZG93bjtcbiAgICB0aGlzLl9kZXNpcmVkQ2FwYWNpdHkgPSBjb25maWcuZGVzaXJlZENhcGFjaXR5O1xuICAgIHRoaXMuX2VuYWJsZWRNZXRyaWNzID0gY29uZmlnLmVuYWJsZWRNZXRyaWNzO1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlID0gY29uZmlnLmZvcmNlRGVsZXRlO1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2wgPSBjb25maWcuZm9yY2VEZWxldGVXYXJtUG9vbDtcbiAgICB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kID0gY29uZmlnLmhlYWx0aENoZWNrR3JhY2VQZXJpb2Q7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tUeXBlID0gY29uZmlnLmhlYWx0aENoZWNrVHlwZTtcbiAgICB0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uID0gY29uZmlnLmxhdW5jaENvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IGNvbmZpZy5sb2FkQmFsYW5jZXJzO1xuICAgIHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUgPSBjb25maWcubWF4SW5zdGFuY2VMaWZldGltZTtcbiAgICB0aGlzLl9tYXhTaXplID0gY29uZmlnLm1heFNpemU7XG4gICAgdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5ID0gY29uZmlnLm1ldHJpY3NHcmFudWxhcml0eTtcbiAgICB0aGlzLl9taW5FbGJDYXBhY2l0eSA9IGNvbmZpZy5taW5FbGJDYXBhY2l0eTtcbiAgICB0aGlzLl9taW5TaXplID0gY29uZmlnLm1pblNpemU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSBjb25maWcubmFtZVByZWZpeDtcbiAgICB0aGlzLl9wbGFjZW1lbnRHcm91cCA9IGNvbmZpZy5wbGFjZW1lbnRHcm91cDtcbiAgICB0aGlzLl9wcm90ZWN0RnJvbVNjYWxlSW4gPSBjb25maWcucHJvdGVjdEZyb21TY2FsZUluO1xuICAgIHRoaXMuX3NlcnZpY2VMaW5rZWRSb2xlQXJuID0gY29uZmlnLnNlcnZpY2VMaW5rZWRSb2xlQXJuO1xuICAgIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3NlcyA9IGNvbmZpZy5zdXNwZW5kZWRQcm9jZXNzZXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IGNvbmZpZy50YXJnZXRHcm91cEFybnM7XG4gICAgdGhpcy5fdGVybWluYXRpb25Qb2xpY2llcyA9IGNvbmZpZy50ZXJtaW5hdGlvblBvbGljaWVzO1xuICAgIHRoaXMuX3ZwY1pvbmVJZGVudGlmaWVyID0gY29uZmlnLnZwY1pvbmVJZGVudGlmaWVyO1xuICAgIHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQgPSBjb25maWcud2FpdEZvckNhcGFjaXR5VGltZW91dDtcbiAgICB0aGlzLl93YWl0Rm9yRWxiQ2FwYWNpdHkgPSBjb25maWcud2FpdEZvckVsYkNhcGFjaXR5O1xuICAgIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rID0gY29uZmlnLmluaXRpYWxMaWZlY3ljbGVIb29rO1xuICAgIHRoaXMuX2luc3RhbmNlUmVmcmVzaC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmluc3RhbmNlUmVmcmVzaDtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxhdW5jaFRlbXBsYXRlO1xuICAgIHRoaXMuX21peGVkSW5zdGFuY2VzUG9saWN5LmludGVybmFsVmFsdWUgPSBjb25maWcubWl4ZWRJbnN0YW5jZXNQb2xpY3k7XG4gICAgdGhpcy5fdGFnID0gY29uZmlnLnRhZztcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICAgIHRoaXMuX3dhcm1Qb29sLmludGVybmFsVmFsdWUgPSBjb25maWcud2FybVBvb2w7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZhaWxhYmlsaXR5Wm9uZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFiaWxpdHlab25lcztcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3JlYmFsYW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlYmFsYW5jZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZWJhbGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2FwYWNpdHlfcmViYWxhbmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY2FwYWNpdHlSZWJhbGFuY2UodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FwYWNpdHlSZWJhbGFuY2UoKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZWJhbGFuY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmViYWxhbmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9jb29sZG93biAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRDb29sZG93bj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdENvb2xkb3duKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF9jb29sZG93bicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdENvb2xkb3duKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q29vbGRvd24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0Q29vbGRvd24oKSB7XG4gICAgdGhpcy5fZGVmYXVsdENvb2xkb3duID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0Q29vbGRvd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENvb2xkb3duO1xuICB9XG5cbiAgLy8gZGVzaXJlZF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2lyZWRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZGVzaXJlZENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVzaXJlZF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzaXJlZENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZXNpcmVkQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNpcmVkQ2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fZGVzaXJlZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNpcmVkQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzaXJlZENhcGFjaXR5O1xuICB9XG5cbiAgLy8gZW5hYmxlZF9tZXRyaWNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWRNZXRyaWNzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWRNZXRyaWNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2VuYWJsZWRfbWV0cmljcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZE1ldHJpY3ModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZW5hYmxlZE1ldHJpY3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkTWV0cmljcygpIHtcbiAgICB0aGlzLl9lbmFibGVkTWV0cmljcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZE1ldHJpY3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZE1ldHJpY3M7XG4gIH1cblxuICAvLyBmb3JjZV9kZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZm9yY2VEZWxldGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGZvcmNlRGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZvcmNlX2RlbGV0ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcmNlRGVsZXRlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9mb3JjZURlbGV0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvcmNlRGVsZXRlKCkge1xuICAgIHRoaXMuX2ZvcmNlRGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JjZURlbGV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZURlbGV0ZTtcbiAgfVxuXG4gIC8vIGZvcmNlX2RlbGV0ZV93YXJtX3Bvb2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZm9yY2VEZWxldGVXYXJtUG9vbD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZm9yY2VEZWxldGVXYXJtUG9vbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3JjZV9kZWxldGVfd2FybV9wb29sJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZm9yY2VEZWxldGVXYXJtUG9vbCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZm9yY2VEZWxldGVXYXJtUG9vbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZvcmNlRGVsZXRlV2FybVBvb2woKSB7XG4gICAgdGhpcy5fZm9yY2VEZWxldGVXYXJtUG9vbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9yY2VEZWxldGVXYXJtUG9vbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JjZURlbGV0ZVdhcm1Qb29sO1xuICB9XG5cbiAgLy8gaGVhbHRoX2NoZWNrX2dyYWNlX3BlcmlvZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFsdGhDaGVja0dyYWNlUGVyaW9kPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja0dyYWNlUGVyaW9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaGVhbHRoX2NoZWNrX2dyYWNlX3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhlYWx0aENoZWNrR3JhY2VQZXJpb2QoKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhbHRoQ2hlY2tHcmFjZVBlcmlvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGhDaGVja0dyYWNlUGVyaW9kO1xuICB9XG5cbiAgLy8gaGVhbHRoX2NoZWNrX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFsdGhDaGVja1R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hlYWx0aF9jaGVja190eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFsdGhDaGVja1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hlYWx0aENoZWNrVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhlYWx0aENoZWNrVHlwZSgpIHtcbiAgICB0aGlzLl9oZWFsdGhDaGVja1R5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGhDaGVja1R5cGU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGF1bmNoX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoQ29uZmlndXJhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGF1bmNoQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF9jb25maWd1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hDb25maWd1cmF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaENvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyBsb2FkX2JhbGFuY2VycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlcnMoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJzO1xuICB9XG5cbiAgLy8gbWF4X2luc3RhbmNlX2xpZmV0aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heEluc3RhbmNlTGlmZXRpbWU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heEluc3RhbmNlTGlmZXRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfaW5zdGFuY2VfbGlmZXRpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEluc3RhbmNlTGlmZXRpbWUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXhJbnN0YW5jZUxpZmV0aW1lKCkge1xuICAgIHRoaXMuX21heEluc3RhbmNlTGlmZXRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heEluc3RhbmNlTGlmZXRpbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4SW5zdGFuY2VMaWZldGltZTtcbiAgfVxuXG4gIC8vIG1heF9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heFNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4U2l6ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFNpemU7XG4gIH1cblxuICAvLyBtZXRyaWNzX2dyYW51bGFyaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldHJpY3NHcmFudWxhcml0eT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWV0cmljc0dyYW51bGFyaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljc19ncmFudWxhcml0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWV0cmljc0dyYW51bGFyaXR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXRyaWNzR3JhbnVsYXJpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRyaWNzR3JhbnVsYXJpdHkoKSB7XG4gICAgdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXRyaWNzR3JhbnVsYXJpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0cmljc0dyYW51bGFyaXR5O1xuICB9XG5cbiAgLy8gbWluX2VsYl9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5FbGJDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluRWxiQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fZWxiX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5FbGJDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluRWxiQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5FbGJDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9taW5FbGJDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluRWxiQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluRWxiQ2FwYWNpdHk7XG4gIH1cblxuICAvLyBtaW5fc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9taW5TaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5TaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pblNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21pblNpemUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5TaXplO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBuYW1lX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWVQcmVmaXgoKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lUHJlZml4O1xuICB9XG5cbiAgLy8gcGxhY2VtZW50X2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYWNlbWVudEdyb3VwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwbGFjZW1lbnRHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYWNlbWVudF9ncm91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhY2VtZW50R3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlbWVudEdyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50R3JvdXAoKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50R3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudEdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudEdyb3VwO1xuICB9XG5cbiAgLy8gcHJvdGVjdF9mcm9tX3NjYWxlX2luIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3RlY3RGcm9tU2NhbGVJbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcHJvdGVjdEZyb21TY2FsZUluKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Byb3RlY3RfZnJvbV9zY2FsZV9pbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb3RlY3RGcm9tU2NhbGVJbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcHJvdGVjdEZyb21TY2FsZUluID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdGVjdEZyb21TY2FsZUluKCkge1xuICAgIHRoaXMuX3Byb3RlY3RGcm9tU2NhbGVJbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvdGVjdEZyb21TY2FsZUluSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RlY3RGcm9tU2NhbGVJbjtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfbGlua2VkX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmljZUxpbmtlZFJvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VMaW5rZWRSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9saW5rZWRfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VMaW5rZWRSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlTGlua2VkUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZpY2VMaW5rZWRSb2xlQXJuKCkge1xuICAgIHRoaXMuX3NlcnZpY2VMaW5rZWRSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlTGlua2VkUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlTGlua2VkUm9sZUFybjtcbiAgfVxuXG4gIC8vIHN1c3BlbmRlZF9wcm9jZXNzZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VzcGVuZGVkUHJvY2Vzc2VzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1c3BlbmRlZFByb2Nlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXNwZW5kZWRfcHJvY2Vzc2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdXNwZW5kZWRQcm9jZXNzZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3VzcGVuZGVkUHJvY2Vzc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3VzcGVuZGVkUHJvY2Vzc2VzKCkge1xuICAgIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3NlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VzcGVuZGVkUHJvY2Vzc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1c3BlbmRlZFByb2Nlc3NlcztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cF9hcm5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldEdyb3VwQXJucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0YXJnZXRHcm91cEFybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndGFyZ2V0X2dyb3VwX2FybnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldEdyb3VwQXJucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90YXJnZXRHcm91cEFybnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRHcm91cEFybnMoKSB7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXBBcm5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRHcm91cEFybnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0R3JvdXBBcm5zO1xuICB9XG5cbiAgLy8gdGVybWluYXRpb25fcG9saWNpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVybWluYXRpb25Qb2xpY2llcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0ZXJtaW5hdGlvblBvbGljaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3Rlcm1pbmF0aW9uX3BvbGljaWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZXJtaW5hdGlvblBvbGljaWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Rlcm1pbmF0aW9uUG9saWNpZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZXJtaW5hdGlvblBvbGljaWVzKCkge1xuICAgIHRoaXMuX3Rlcm1pbmF0aW9uUG9saWNpZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlcm1pbmF0aW9uUG9saWNpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybWluYXRpb25Qb2xpY2llcztcbiAgfVxuXG4gIC8vIHZwY196b25lX2lkZW50aWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNab25lSWRlbnRpZmllcj86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB2cGNab25lSWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfem9uZV9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNab25lSWRlbnRpZmllcih2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92cGNab25lSWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY1pvbmVJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX3ZwY1pvbmVJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNab25lSWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNab25lSWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHdhaXRfZm9yX2NhcGFjaXR5X3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FpdEZvckNhcGFjaXR5VGltZW91dD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2FpdEZvckNhcGFjaXR5VGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dhaXRfZm9yX2NhcGFjaXR5X3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhaXRGb3JDYXBhY2l0eVRpbWVvdXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYWl0Rm9yQ2FwYWNpdHlUaW1lb3V0KCkge1xuICAgIHRoaXMuX3dhaXRGb3JDYXBhY2l0eVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdhaXRGb3JDYXBhY2l0eVRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdEZvckNhcGFjaXR5VGltZW91dDtcbiAgfVxuXG4gIC8vIHdhaXRfZm9yX2VsYl9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YWl0Rm9yRWxiQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHdhaXRGb3JFbGJDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3dhaXRfZm9yX2VsYl9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2FpdEZvckVsYkNhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl93YWl0Rm9yRWxiQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYWl0Rm9yRWxiQ2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fd2FpdEZvckVsYkNhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3YWl0Rm9yRWxiQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FpdEZvckVsYkNhcGFjaXR5O1xuICB9XG5cbiAgLy8gaW5pdGlhbF9saWZlY3ljbGVfaG9vayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbml0aWFsTGlmZWN5Y2xlSG9vaz86IEF1dG9zY2FsaW5nR3JvdXBJbml0aWFsTGlmZWN5Y2xlSG9va1tdOyBcbiAgcHVibGljIGdldCBpbml0aWFsTGlmZWN5Y2xlSG9vaygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5pdGlhbF9saWZlY3ljbGVfaG9vaycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluaXRpYWxMaWZlY3ljbGVIb29rKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwSW5pdGlhbExpZmVjeWNsZUhvb2tbXSkge1xuICAgIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5pdGlhbExpZmVjeWNsZUhvb2soKSB7XG4gICAgdGhpcy5faW5pdGlhbExpZmVjeWNsZUhvb2sgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluaXRpYWxMaWZlY3ljbGVIb29rSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfcmVmcmVzaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVJlZnJlc2ggPSBuZXcgQXV0b3NjYWxpbmdHcm91cEluc3RhbmNlUmVmcmVzaE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbnN0YW5jZV9yZWZyZXNoXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGluc3RhbmNlUmVmcmVzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VSZWZyZXNoO1xuICB9XG4gIHB1YmxpYyBwdXRJbnN0YW5jZVJlZnJlc2godmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2gpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVJlZnJlc2guaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlUmVmcmVzaCgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVJlZnJlc2guaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSZWZyZXNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlUmVmcmVzaC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGF1bmNoX3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlID0gbmV3IEF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsYXVuY2hfdGVtcGxhdGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRMYXVuY2hUZW1wbGF0ZSh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cExhdW5jaFRlbXBsYXRlKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhdW5jaFRlbXBsYXRlKCkge1xuICAgIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBtaXhlZF9pbnN0YW5jZXNfcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21peGVkSW5zdGFuY2VzUG9saWN5ID0gbmV3IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtaXhlZF9pbnN0YW5jZXNfcG9saWN5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1peGVkSW5zdGFuY2VzUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9taXhlZEluc3RhbmNlc1BvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0TWl4ZWRJbnN0YW5jZXNQb2xpY3kodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBNaXhlZEluc3RhbmNlc1BvbGljeSkge1xuICAgIHRoaXMuX21peGVkSW5zdGFuY2VzUG9saWN5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaXhlZEluc3RhbmNlc1BvbGljeSgpIHtcbiAgICB0aGlzLl9taXhlZEluc3RhbmNlc1BvbGljeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaXhlZEluc3RhbmNlc1BvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taXhlZEluc3RhbmNlc1BvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGFnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZz86IEF1dG9zY2FsaW5nR3JvdXBUYWdbXTsgXG4gIHB1YmxpYyBnZXQgdGFnKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWcodmFsdWU6IEF1dG9zY2FsaW5nR3JvdXBUYWdbXSkge1xuICAgIHRoaXMuX3RhZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZygpIHtcbiAgICB0aGlzLl90YWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWc7XG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cyA9IG5ldyBBdXRvc2NhbGluZ0dyb3VwVGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogQXV0b3NjYWxpbmdHcm91cFRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB3YXJtX3Bvb2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FybVBvb2wgPSBuZXcgQXV0b3NjYWxpbmdHcm91cFdhcm1Qb29sT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIndhcm1fcG9vbFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB3YXJtUG9vbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FybVBvb2w7XG4gIH1cbiAgcHVibGljIHB1dFdhcm1Qb29sKHZhbHVlOiBBdXRvc2NhbGluZ0dyb3VwV2FybVBvb2wpIHtcbiAgICB0aGlzLl93YXJtUG9vbC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FybVBvb2woKSB7XG4gICAgdGhpcy5fd2FybVBvb2wuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FybVBvb2xJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FybVBvb2wuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhaWxhYmlsaXR5X3pvbmVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9hdmFpbGFiaWxpdHlab25lcyksXG4gICAgICBjYXBhY2l0eV9yZWJhbGFuY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZSksXG4gICAgICBkZWZhdWx0X2Nvb2xkb3duOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0Q29vbGRvd24pLFxuICAgICAgZGVzaXJlZF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZGVzaXJlZENhcGFjaXR5KSxcbiAgICAgIGVuYWJsZWRfbWV0cmljczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fZW5hYmxlZE1ldHJpY3MpLFxuICAgICAgZm9yY2VfZGVsZXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZm9yY2VEZWxldGUpLFxuICAgICAgZm9yY2VfZGVsZXRlX3dhcm1fcG9vbDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZvcmNlRGVsZXRlV2FybVBvb2wpLFxuICAgICAgaGVhbHRoX2NoZWNrX2dyYWNlX3BlcmlvZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5faGVhbHRoQ2hlY2tHcmFjZVBlcmlvZCksXG4gICAgICBoZWFsdGhfY2hlY2tfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faGVhbHRoQ2hlY2tUeXBlKSxcbiAgICAgIGxhdW5jaF9jb25maWd1cmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sYXVuY2hDb25maWd1cmF0aW9uKSxcbiAgICAgIGxvYWRfYmFsYW5jZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9sb2FkQmFsYW5jZXJzKSxcbiAgICAgIG1heF9pbnN0YW5jZV9saWZldGltZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4SW5zdGFuY2VMaWZldGltZSksXG4gICAgICBtYXhfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4U2l6ZSksXG4gICAgICBtZXRyaWNzX2dyYW51bGFyaXR5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZXRyaWNzR3JhbnVsYXJpdHkpLFxuICAgICAgbWluX2VsYl9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluRWxiQ2FwYWNpdHkpLFxuICAgICAgbWluX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21pblNpemUpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBuYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZVByZWZpeCksXG4gICAgICBwbGFjZW1lbnRfZ3JvdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3BsYWNlbWVudEdyb3VwKSxcbiAgICAgIHByb3RlY3RfZnJvbV9zY2FsZV9pbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Byb3RlY3RGcm9tU2NhbGVJbiksXG4gICAgICBzZXJ2aWNlX2xpbmtlZF9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZUxpbmtlZFJvbGVBcm4pLFxuICAgICAgc3VzcGVuZGVkX3Byb2Nlc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc3VzcGVuZGVkUHJvY2Vzc2VzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkpKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFyZ2V0X2dyb3VwX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RhcmdldEdyb3VwQXJucyksXG4gICAgICB0ZXJtaW5hdGlvbl9wb2xpY2llczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGVybWluYXRpb25Qb2xpY2llcyksXG4gICAgICB2cGNfem9uZV9pZGVudGlmaWVyOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl92cGNab25lSWRlbnRpZmllciksXG4gICAgICB3YWl0X2Zvcl9jYXBhY2l0eV90aW1lb3V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl93YWl0Rm9yQ2FwYWNpdHlUaW1lb3V0KSxcbiAgICAgIHdhaXRfZm9yX2VsYl9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fd2FpdEZvckVsYkNhcGFjaXR5KSxcbiAgICAgIGluaXRpYWxfbGlmZWN5Y2xlX2hvb2s6IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdHcm91cEluaXRpYWxMaWZlY3ljbGVIb29rVG9UZXJyYWZvcm0pKHRoaXMuX2luaXRpYWxMaWZlY3ljbGVIb29rKSxcbiAgICAgIGluc3RhbmNlX3JlZnJlc2g6IGF1dG9zY2FsaW5nR3JvdXBJbnN0YW5jZVJlZnJlc2hUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVJlZnJlc2guaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsYXVuY2hfdGVtcGxhdGU6IGF1dG9zY2FsaW5nR3JvdXBMYXVuY2hUZW1wbGF0ZVRvVGVycmFmb3JtKHRoaXMuX2xhdW5jaFRlbXBsYXRlLmludGVybmFsVmFsdWUpLFxuICAgICAgbWl4ZWRfaW5zdGFuY2VzX3BvbGljeTogYXV0b3NjYWxpbmdHcm91cE1peGVkSW5zdGFuY2VzUG9saWN5VG9UZXJyYWZvcm0odGhpcy5fbWl4ZWRJbnN0YW5jZXNQb2xpY3kuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YWc6IGNka3RmLmxpc3RNYXBwZXIoYXV0b3NjYWxpbmdHcm91cFRhZ1RvVGVycmFmb3JtKSh0aGlzLl90YWcpLFxuICAgICAgdGltZW91dHM6IGF1dG9zY2FsaW5nR3JvdXBUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgICAgd2FybV9wb29sOiBhdXRvc2NhbGluZ0dyb3VwV2FybVBvb2xUb1RlcnJhZm9ybSh0aGlzLl93YXJtUG9vbC5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=