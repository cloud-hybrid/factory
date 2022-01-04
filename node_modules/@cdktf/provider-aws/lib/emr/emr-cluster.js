"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmrCluster = exports.EmrClusterMasterInstanceGroupOutputReference = exports.emrClusterMasterInstanceGroupToTerraform = exports.emrClusterMasterInstanceGroupEbsConfigToTerraform = exports.EmrClusterMasterInstanceFleetOutputReference = exports.emrClusterMasterInstanceFleetToTerraform = exports.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference = exports.emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform = exports.emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform = exports.emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform = exports.emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform = exports.emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform = exports.emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform = exports.EmrClusterKerberosAttributesOutputReference = exports.emrClusterKerberosAttributesToTerraform = exports.EmrClusterEc2AttributesOutputReference = exports.emrClusterEc2AttributesToTerraform = exports.EmrClusterCoreInstanceGroupOutputReference = exports.emrClusterCoreInstanceGroupToTerraform = exports.emrClusterCoreInstanceGroupEbsConfigToTerraform = exports.EmrClusterCoreInstanceFleetOutputReference = exports.emrClusterCoreInstanceFleetToTerraform = exports.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference = exports.emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform = exports.emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform = exports.emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform = exports.emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform = exports.emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform = exports.emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform = exports.emrClusterBootstrapActionToTerraform = exports.EmrClusterAutoTerminationPolicyOutputReference = exports.emrClusterAutoTerminationPolicyToTerraform = exports.emrClusterStepToTerraform = exports.emrClusterStepHadoopJarStepToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function emrClusterStepHadoopJarStepToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        args: struct.args === undefined ? null : cdktf.listMapper(cdktf.stringToTerraform)(struct.args),
        jar: struct.jar === undefined ? null : cdktf.stringToTerraform(struct.jar),
        main_class: struct.mainClass === undefined ? null : cdktf.stringToTerraform(struct.mainClass),
        properties: struct.properties === undefined ? null : cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
    };
}
exports.emrClusterStepHadoopJarStepToTerraform = emrClusterStepHadoopJarStepToTerraform;
function emrClusterStepToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_on_failure: struct.actionOnFailure === undefined ? null : cdktf.stringToTerraform(struct.actionOnFailure),
        hadoop_jar_step: struct.hadoopJarStep === undefined ? null : cdktf.listMapper(emrClusterStepHadoopJarStepToTerraform)(struct.hadoopJarStep),
        name: struct.name === undefined ? null : cdktf.stringToTerraform(struct.name),
    };
}
exports.emrClusterStepToTerraform = emrClusterStepToTerraform;
function emrClusterAutoTerminationPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        idle_timeout: cdktf.numberToTerraform(struct.idleTimeout),
    };
}
exports.emrClusterAutoTerminationPolicyToTerraform = emrClusterAutoTerminationPolicyToTerraform;
/**
 * @stability stable
 */
class EmrClusterAutoTerminationPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._idleTimeout) {
            hasAnyValues = true;
            internalValueResult.idleTimeout = this._idleTimeout;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._idleTimeout = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._idleTimeout = value.idleTimeout;
        }
    }
    /**
     * @stability stable
     */
    get idleTimeout() {
        return this.getNumberAttribute('idle_timeout');
    }
    /**
     * @stability stable
     */
    set idleTimeout(value) {
        this._idleTimeout = value;
    }
    /**
     * @stability stable
     */
    resetIdleTimeout() {
        this._idleTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get idleTimeoutInput() {
        return this._idleTimeout;
    }
}
exports.EmrClusterAutoTerminationPolicyOutputReference = EmrClusterAutoTerminationPolicyOutputReference;
_a = JSII_RTTI_SYMBOL_1;
EmrClusterAutoTerminationPolicyOutputReference[_a] = { fqn: "@cdktf/provider-aws.emr.EmrClusterAutoTerminationPolicyOutputReference", version: "3.0.1" };
function emrClusterBootstrapActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        args: cdktf.listMapper(cdktf.stringToTerraform)(struct.args),
        name: cdktf.stringToTerraform(struct.name),
        path: cdktf.stringToTerraform(struct.path),
    };
}
exports.emrClusterBootstrapActionToTerraform = emrClusterBootstrapActionToTerraform;
function emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
    };
}
exports.emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform = emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform;
function emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
exports.emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform = emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform;
function emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct.bidPriceAsPercentageOfOnDemandPrice),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
        configurations: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig),
    };
}
exports.emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform = emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform;
function emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
    };
}
exports.emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform = emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform;
function emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
        timeout_duration_minutes: cdktf.numberToTerraform(struct.timeoutDurationMinutes),
    };
}
exports.emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform = emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform;
function emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_demand_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification),
    };
}
exports.emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform = emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform;
/**
 * @stability stable
 */
class EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
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
        if (this._onDemandSpecification) {
            hasAnyValues = true;
            internalValueResult.onDemandSpecification = this._onDemandSpecification;
        }
        if (this._spotSpecification) {
            hasAnyValues = true;
            internalValueResult.spotSpecification = this._spotSpecification;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._onDemandSpecification = undefined;
            this._spotSpecification = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onDemandSpecification = value.onDemandSpecification;
            this._spotSpecification = value.spotSpecification;
        }
    }
    /**
     * @stability stable
     */
    get onDemandSpecification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('on_demand_specification');
    }
    /**
     * @stability stable
     */
    set onDemandSpecification(value) {
        this._onDemandSpecification = value;
    }
    /**
     * @stability stable
     */
    resetOnDemandSpecification() {
        this._onDemandSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onDemandSpecificationInput() {
        return this._onDemandSpecification;
    }
    /**
     * @stability stable
     */
    get spotSpecification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('spot_specification');
    }
    /**
     * @stability stable
     */
    set spotSpecification(value) {
        this._spotSpecification = value;
    }
    /**
     * @stability stable
     */
    resetSpotSpecification() {
        this._spotSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotSpecificationInput() {
        return this._spotSpecification;
    }
}
exports.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference = EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference[_b] = { fqn: "@cdktf/provider-aws.emr.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference", version: "3.0.1" };
function emrClusterCoreInstanceFleetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        target_on_demand_capacity: cdktf.numberToTerraform(struct.targetOnDemandCapacity),
        target_spot_capacity: cdktf.numberToTerraform(struct.targetSpotCapacity),
        instance_type_configs: cdktf.listMapper(emrClusterCoreInstanceFleetInstanceTypeConfigsToTerraform)(struct.instanceTypeConfigs),
        launch_specifications: emrClusterCoreInstanceFleetLaunchSpecificationsToTerraform(struct.launchSpecifications),
    };
}
exports.emrClusterCoreInstanceFleetToTerraform = emrClusterCoreInstanceFleetToTerraform;
/**
 * @stability stable
 */
class EmrClusterCoreInstanceFleetOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // launch_specifications - computed: false, optional: true, required: false
        this._launchSpecifications = new EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference(this, "launch_specifications", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._targetOnDemandCapacity) {
            hasAnyValues = true;
            internalValueResult.targetOnDemandCapacity = this._targetOnDemandCapacity;
        }
        if (this._targetSpotCapacity) {
            hasAnyValues = true;
            internalValueResult.targetSpotCapacity = this._targetSpotCapacity;
        }
        if (this._instanceTypeConfigs) {
            hasAnyValues = true;
            internalValueResult.instanceTypeConfigs = this._instanceTypeConfigs;
        }
        if ((_l = this._launchSpecifications) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.launchSpecifications = (_m = this._launchSpecifications) === null || _m === void 0 ? void 0 : _m.internalValue;
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
            this._targetOnDemandCapacity = undefined;
            this._targetSpotCapacity = undefined;
            this._instanceTypeConfigs = undefined;
            this._launchSpecifications.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._targetOnDemandCapacity = value.targetOnDemandCapacity;
            this._targetSpotCapacity = value.targetSpotCapacity;
            this._instanceTypeConfigs = value.instanceTypeConfigs;
            this._launchSpecifications.internalValue = value.launchSpecifications;
        }
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
    get targetOnDemandCapacity() {
        return this.getNumberAttribute('target_on_demand_capacity');
    }
    /**
     * @stability stable
     */
    set targetOnDemandCapacity(value) {
        this._targetOnDemandCapacity = value;
    }
    /**
     * @stability stable
     */
    resetTargetOnDemandCapacity() {
        this._targetOnDemandCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetOnDemandCapacityInput() {
        return this._targetOnDemandCapacity;
    }
    /**
     * @stability stable
     */
    get targetSpotCapacity() {
        return this.getNumberAttribute('target_spot_capacity');
    }
    /**
     * @stability stable
     */
    set targetSpotCapacity(value) {
        this._targetSpotCapacity = value;
    }
    /**
     * @stability stable
     */
    resetTargetSpotCapacity() {
        this._targetSpotCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetSpotCapacityInput() {
        return this._targetSpotCapacity;
    }
    /**
     * @stability stable
     */
    get instanceTypeConfigs() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('instance_type_configs');
    }
    /**
     * @stability stable
     */
    set instanceTypeConfigs(value) {
        this._instanceTypeConfigs = value;
    }
    /**
     * @stability stable
     */
    resetInstanceTypeConfigs() {
        this._instanceTypeConfigs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeConfigsInput() {
        return this._instanceTypeConfigs;
    }
    /**
     * @stability stable
     */
    get launchSpecifications() {
        return this._launchSpecifications;
    }
    /**
     * @stability stable
     */
    putLaunchSpecifications(value) {
        this._launchSpecifications.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLaunchSpecifications() {
        this._launchSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchSpecificationsInput() {
        return this._launchSpecifications.internalValue;
    }
}
exports.EmrClusterCoreInstanceFleetOutputReference = EmrClusterCoreInstanceFleetOutputReference;
_c = JSII_RTTI_SYMBOL_1;
EmrClusterCoreInstanceFleetOutputReference[_c] = { fqn: "@cdktf/provider-aws.emr.EmrClusterCoreInstanceFleetOutputReference", version: "3.0.1" };
function emrClusterCoreInstanceGroupEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
exports.emrClusterCoreInstanceGroupEbsConfigToTerraform = emrClusterCoreInstanceGroupEbsConfigToTerraform;
function emrClusterCoreInstanceGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        autoscaling_policy: cdktf.stringToTerraform(struct.autoscalingPolicy),
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        name: cdktf.stringToTerraform(struct.name),
        ebs_config: cdktf.listMapper(emrClusterCoreInstanceGroupEbsConfigToTerraform)(struct.ebsConfig),
    };
}
exports.emrClusterCoreInstanceGroupToTerraform = emrClusterCoreInstanceGroupToTerraform;
/**
 * @stability stable
 */
class EmrClusterCoreInstanceGroupOutputReference extends cdktf.ComplexObject {
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
        if (this._autoscalingPolicy) {
            hasAnyValues = true;
            internalValueResult.autoscalingPolicy = this._autoscalingPolicy;
        }
        if (this._bidPrice) {
            hasAnyValues = true;
            internalValueResult.bidPrice = this._bidPrice;
        }
        if (this._instanceCount) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._ebsConfig) {
            hasAnyValues = true;
            internalValueResult.ebsConfig = this._ebsConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoscalingPolicy = undefined;
            this._bidPrice = undefined;
            this._instanceCount = undefined;
            this._instanceType = undefined;
            this._name = undefined;
            this._ebsConfig = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoscalingPolicy = value.autoscalingPolicy;
            this._bidPrice = value.bidPrice;
            this._instanceCount = value.instanceCount;
            this._instanceType = value.instanceType;
            this._name = value.name;
            this._ebsConfig = value.ebsConfig;
        }
    }
    /**
     * @stability stable
     */
    get autoscalingPolicy() {
        return this.getStringAttribute('autoscaling_policy');
    }
    /**
     * @stability stable
     */
    set autoscalingPolicy(value) {
        this._autoscalingPolicy = value;
    }
    /**
     * @stability stable
     */
    resetAutoscalingPolicy() {
        this._autoscalingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoscalingPolicyInput() {
        return this._autoscalingPolicy;
    }
    /**
     * @stability stable
     */
    get bidPrice() {
        return this.getStringAttribute('bid_price');
    }
    /**
     * @stability stable
     */
    set bidPrice(value) {
        this._bidPrice = value;
    }
    /**
     * @stability stable
     */
    resetBidPrice() {
        this._bidPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bidPriceInput() {
        return this._bidPrice;
    }
    /**
     * @stability stable
     */
    get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    /**
     * @stability stable
     */
    set instanceCount(value) {
        this._instanceCount = value;
    }
    /**
     * @stability stable
     */
    resetInstanceCount() {
        this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceCountInput() {
        return this._instanceCount;
    }
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    /**
     * @stability stable
     */
    set instanceType(value) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeInput() {
        return this._instanceType;
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
    get ebsConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ebs_config');
    }
    /**
     * @stability stable
     */
    set ebsConfig(value) {
        this._ebsConfig = value;
    }
    /**
     * @stability stable
     */
    resetEbsConfig() {
        this._ebsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ebsConfigInput() {
        return this._ebsConfig;
    }
}
exports.EmrClusterCoreInstanceGroupOutputReference = EmrClusterCoreInstanceGroupOutputReference;
_d = JSII_RTTI_SYMBOL_1;
EmrClusterCoreInstanceGroupOutputReference[_d] = { fqn: "@cdktf/provider-aws.emr.EmrClusterCoreInstanceGroupOutputReference", version: "3.0.1" };
function emrClusterEc2AttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        additional_master_security_groups: cdktf.stringToTerraform(struct.additionalMasterSecurityGroups),
        additional_slave_security_groups: cdktf.stringToTerraform(struct.additionalSlaveSecurityGroups),
        emr_managed_master_security_group: cdktf.stringToTerraform(struct.emrManagedMasterSecurityGroup),
        emr_managed_slave_security_group: cdktf.stringToTerraform(struct.emrManagedSlaveSecurityGroup),
        instance_profile: cdktf.stringToTerraform(struct.instanceProfile),
        key_name: cdktf.stringToTerraform(struct.keyName),
        service_access_security_group: cdktf.stringToTerraform(struct.serviceAccessSecurityGroup),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.emrClusterEc2AttributesToTerraform = emrClusterEc2AttributesToTerraform;
/**
 * @stability stable
 */
class EmrClusterEc2AttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._additionalMasterSecurityGroups) {
            hasAnyValues = true;
            internalValueResult.additionalMasterSecurityGroups = this._additionalMasterSecurityGroups;
        }
        if (this._additionalSlaveSecurityGroups) {
            hasAnyValues = true;
            internalValueResult.additionalSlaveSecurityGroups = this._additionalSlaveSecurityGroups;
        }
        if (this._emrManagedMasterSecurityGroup) {
            hasAnyValues = true;
            internalValueResult.emrManagedMasterSecurityGroup = this._emrManagedMasterSecurityGroup;
        }
        if (this._emrManagedSlaveSecurityGroup) {
            hasAnyValues = true;
            internalValueResult.emrManagedSlaveSecurityGroup = this._emrManagedSlaveSecurityGroup;
        }
        if (this._instanceProfile) {
            hasAnyValues = true;
            internalValueResult.instanceProfile = this._instanceProfile;
        }
        if (this._keyName) {
            hasAnyValues = true;
            internalValueResult.keyName = this._keyName;
        }
        if (this._serviceAccessSecurityGroup) {
            hasAnyValues = true;
            internalValueResult.serviceAccessSecurityGroup = this._serviceAccessSecurityGroup;
        }
        if (this._subnetId) {
            hasAnyValues = true;
            internalValueResult.subnetId = this._subnetId;
        }
        if (this._subnetIds) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._additionalMasterSecurityGroups = undefined;
            this._additionalSlaveSecurityGroups = undefined;
            this._emrManagedMasterSecurityGroup = undefined;
            this._emrManagedSlaveSecurityGroup = undefined;
            this._instanceProfile = undefined;
            this._keyName = undefined;
            this._serviceAccessSecurityGroup = undefined;
            this._subnetId = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._additionalMasterSecurityGroups = value.additionalMasterSecurityGroups;
            this._additionalSlaveSecurityGroups = value.additionalSlaveSecurityGroups;
            this._emrManagedMasterSecurityGroup = value.emrManagedMasterSecurityGroup;
            this._emrManagedSlaveSecurityGroup = value.emrManagedSlaveSecurityGroup;
            this._instanceProfile = value.instanceProfile;
            this._keyName = value.keyName;
            this._serviceAccessSecurityGroup = value.serviceAccessSecurityGroup;
            this._subnetId = value.subnetId;
            this._subnetIds = value.subnetIds;
        }
    }
    /**
     * @stability stable
     */
    get additionalMasterSecurityGroups() {
        return this.getStringAttribute('additional_master_security_groups');
    }
    /**
     * @stability stable
     */
    set additionalMasterSecurityGroups(value) {
        this._additionalMasterSecurityGroups = value;
    }
    /**
     * @stability stable
     */
    resetAdditionalMasterSecurityGroups() {
        this._additionalMasterSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get additionalMasterSecurityGroupsInput() {
        return this._additionalMasterSecurityGroups;
    }
    /**
     * @stability stable
     */
    get additionalSlaveSecurityGroups() {
        return this.getStringAttribute('additional_slave_security_groups');
    }
    /**
     * @stability stable
     */
    set additionalSlaveSecurityGroups(value) {
        this._additionalSlaveSecurityGroups = value;
    }
    /**
     * @stability stable
     */
    resetAdditionalSlaveSecurityGroups() {
        this._additionalSlaveSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get additionalSlaveSecurityGroupsInput() {
        return this._additionalSlaveSecurityGroups;
    }
    /**
     * @stability stable
     */
    get emrManagedMasterSecurityGroup() {
        return this.getStringAttribute('emr_managed_master_security_group');
    }
    /**
     * @stability stable
     */
    set emrManagedMasterSecurityGroup(value) {
        this._emrManagedMasterSecurityGroup = value;
    }
    /**
     * @stability stable
     */
    resetEmrManagedMasterSecurityGroup() {
        this._emrManagedMasterSecurityGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emrManagedMasterSecurityGroupInput() {
        return this._emrManagedMasterSecurityGroup;
    }
    /**
     * @stability stable
     */
    get emrManagedSlaveSecurityGroup() {
        return this.getStringAttribute('emr_managed_slave_security_group');
    }
    /**
     * @stability stable
     */
    set emrManagedSlaveSecurityGroup(value) {
        this._emrManagedSlaveSecurityGroup = value;
    }
    /**
     * @stability stable
     */
    resetEmrManagedSlaveSecurityGroup() {
        this._emrManagedSlaveSecurityGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emrManagedSlaveSecurityGroupInput() {
        return this._emrManagedSlaveSecurityGroup;
    }
    /**
     * @stability stable
     */
    get instanceProfile() {
        return this.getStringAttribute('instance_profile');
    }
    /**
     * @stability stable
     */
    set instanceProfile(value) {
        this._instanceProfile = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceProfileInput() {
        return this._instanceProfile;
    }
    /**
     * @stability stable
     */
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    /**
     * @stability stable
     */
    set keyName(value) {
        this._keyName = value;
    }
    /**
     * @stability stable
     */
    resetKeyName() {
        this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyNameInput() {
        return this._keyName;
    }
    /**
     * @stability stable
     */
    get serviceAccessSecurityGroup() {
        return this.getStringAttribute('service_access_security_group');
    }
    /**
     * @stability stable
     */
    set serviceAccessSecurityGroup(value) {
        this._serviceAccessSecurityGroup = value;
    }
    /**
     * @stability stable
     */
    resetServiceAccessSecurityGroup() {
        this._serviceAccessSecurityGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccessSecurityGroupInput() {
        return this._serviceAccessSecurityGroup;
    }
    /**
     * @stability stable
     */
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    /**
     * @stability stable
     */
    set subnetId(value) {
        this._subnetId = value;
    }
    /**
     * @stability stable
     */
    resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetIdInput() {
        return this._subnetId;
    }
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    /**
     * @stability stable
     */
    set subnetIds(value) {
        this._subnetIds = value;
    }
    /**
     * @stability stable
     */
    resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetIdsInput() {
        return this._subnetIds;
    }
}
exports.EmrClusterEc2AttributesOutputReference = EmrClusterEc2AttributesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
EmrClusterEc2AttributesOutputReference[_e] = { fqn: "@cdktf/provider-aws.emr.EmrClusterEc2AttributesOutputReference", version: "3.0.1" };
function emrClusterKerberosAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ad_domain_join_password: cdktf.stringToTerraform(struct.adDomainJoinPassword),
        ad_domain_join_user: cdktf.stringToTerraform(struct.adDomainJoinUser),
        cross_realm_trust_principal_password: cdktf.stringToTerraform(struct.crossRealmTrustPrincipalPassword),
        kdc_admin_password: cdktf.stringToTerraform(struct.kdcAdminPassword),
        realm: cdktf.stringToTerraform(struct.realm),
    };
}
exports.emrClusterKerberosAttributesToTerraform = emrClusterKerberosAttributesToTerraform;
/**
 * @stability stable
 */
class EmrClusterKerberosAttributesOutputReference extends cdktf.ComplexObject {
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
        if (this._adDomainJoinPassword) {
            hasAnyValues = true;
            internalValueResult.adDomainJoinPassword = this._adDomainJoinPassword;
        }
        if (this._adDomainJoinUser) {
            hasAnyValues = true;
            internalValueResult.adDomainJoinUser = this._adDomainJoinUser;
        }
        if (this._crossRealmTrustPrincipalPassword) {
            hasAnyValues = true;
            internalValueResult.crossRealmTrustPrincipalPassword = this._crossRealmTrustPrincipalPassword;
        }
        if (this._kdcAdminPassword) {
            hasAnyValues = true;
            internalValueResult.kdcAdminPassword = this._kdcAdminPassword;
        }
        if (this._realm) {
            hasAnyValues = true;
            internalValueResult.realm = this._realm;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._adDomainJoinPassword = undefined;
            this._adDomainJoinUser = undefined;
            this._crossRealmTrustPrincipalPassword = undefined;
            this._kdcAdminPassword = undefined;
            this._realm = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._adDomainJoinPassword = value.adDomainJoinPassword;
            this._adDomainJoinUser = value.adDomainJoinUser;
            this._crossRealmTrustPrincipalPassword = value.crossRealmTrustPrincipalPassword;
            this._kdcAdminPassword = value.kdcAdminPassword;
            this._realm = value.realm;
        }
    }
    /**
     * @stability stable
     */
    get adDomainJoinPassword() {
        return this.getStringAttribute('ad_domain_join_password');
    }
    /**
     * @stability stable
     */
    set adDomainJoinPassword(value) {
        this._adDomainJoinPassword = value;
    }
    /**
     * @stability stable
     */
    resetAdDomainJoinPassword() {
        this._adDomainJoinPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get adDomainJoinPasswordInput() {
        return this._adDomainJoinPassword;
    }
    /**
     * @stability stable
     */
    get adDomainJoinUser() {
        return this.getStringAttribute('ad_domain_join_user');
    }
    /**
     * @stability stable
     */
    set adDomainJoinUser(value) {
        this._adDomainJoinUser = value;
    }
    /**
     * @stability stable
     */
    resetAdDomainJoinUser() {
        this._adDomainJoinUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get adDomainJoinUserInput() {
        return this._adDomainJoinUser;
    }
    /**
     * @stability stable
     */
    get crossRealmTrustPrincipalPassword() {
        return this.getStringAttribute('cross_realm_trust_principal_password');
    }
    /**
     * @stability stable
     */
    set crossRealmTrustPrincipalPassword(value) {
        this._crossRealmTrustPrincipalPassword = value;
    }
    /**
     * @stability stable
     */
    resetCrossRealmTrustPrincipalPassword() {
        this._crossRealmTrustPrincipalPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get crossRealmTrustPrincipalPasswordInput() {
        return this._crossRealmTrustPrincipalPassword;
    }
    /**
     * @stability stable
     */
    get kdcAdminPassword() {
        return this.getStringAttribute('kdc_admin_password');
    }
    /**
     * @stability stable
     */
    set kdcAdminPassword(value) {
        this._kdcAdminPassword = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kdcAdminPasswordInput() {
        return this._kdcAdminPassword;
    }
    /**
     * @stability stable
     */
    get realm() {
        return this.getStringAttribute('realm');
    }
    /**
     * @stability stable
     */
    set realm(value) {
        this._realm = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get realmInput() {
        return this._realm;
    }
}
exports.EmrClusterKerberosAttributesOutputReference = EmrClusterKerberosAttributesOutputReference;
_f = JSII_RTTI_SYMBOL_1;
EmrClusterKerberosAttributesOutputReference[_f] = { fqn: "@cdktf/provider-aws.emr.EmrClusterKerberosAttributesOutputReference", version: "3.0.1" };
function emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
    };
}
exports.emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform = emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform;
function emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
exports.emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform = emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform;
function emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        bid_price_as_percentage_of_on_demand_price: cdktf.numberToTerraform(struct.bidPriceAsPercentageOfOnDemandPrice),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
        configurations: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig),
    };
}
exports.emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform = emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform;
function emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
    };
}
exports.emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform = emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform;
function emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allocation_strategy: cdktf.stringToTerraform(struct.allocationStrategy),
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
        timeout_duration_minutes: cdktf.numberToTerraform(struct.timeoutDurationMinutes),
    };
}
exports.emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform = emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform;
function emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_demand_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification),
    };
}
exports.emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform = emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform;
/**
 * @stability stable
 */
class EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
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
        if (this._onDemandSpecification) {
            hasAnyValues = true;
            internalValueResult.onDemandSpecification = this._onDemandSpecification;
        }
        if (this._spotSpecification) {
            hasAnyValues = true;
            internalValueResult.spotSpecification = this._spotSpecification;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._onDemandSpecification = undefined;
            this._spotSpecification = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onDemandSpecification = value.onDemandSpecification;
            this._spotSpecification = value.spotSpecification;
        }
    }
    /**
     * @stability stable
     */
    get onDemandSpecification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('on_demand_specification');
    }
    /**
     * @stability stable
     */
    set onDemandSpecification(value) {
        this._onDemandSpecification = value;
    }
    /**
     * @stability stable
     */
    resetOnDemandSpecification() {
        this._onDemandSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onDemandSpecificationInput() {
        return this._onDemandSpecification;
    }
    /**
     * @stability stable
     */
    get spotSpecification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('spot_specification');
    }
    /**
     * @stability stable
     */
    set spotSpecification(value) {
        this._spotSpecification = value;
    }
    /**
     * @stability stable
     */
    resetSpotSpecification() {
        this._spotSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotSpecificationInput() {
        return this._spotSpecification;
    }
}
exports.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference = EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference[_g] = { fqn: "@cdktf/provider-aws.emr.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference", version: "3.0.1" };
function emrClusterMasterInstanceFleetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        target_on_demand_capacity: cdktf.numberToTerraform(struct.targetOnDemandCapacity),
        target_spot_capacity: cdktf.numberToTerraform(struct.targetSpotCapacity),
        instance_type_configs: cdktf.listMapper(emrClusterMasterInstanceFleetInstanceTypeConfigsToTerraform)(struct.instanceTypeConfigs),
        launch_specifications: emrClusterMasterInstanceFleetLaunchSpecificationsToTerraform(struct.launchSpecifications),
    };
}
exports.emrClusterMasterInstanceFleetToTerraform = emrClusterMasterInstanceFleetToTerraform;
/**
 * @stability stable
 */
class EmrClusterMasterInstanceFleetOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // launch_specifications - computed: false, optional: true, required: false
        this._launchSpecifications = new EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference(this, "launch_specifications", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._targetOnDemandCapacity) {
            hasAnyValues = true;
            internalValueResult.targetOnDemandCapacity = this._targetOnDemandCapacity;
        }
        if (this._targetSpotCapacity) {
            hasAnyValues = true;
            internalValueResult.targetSpotCapacity = this._targetSpotCapacity;
        }
        if (this._instanceTypeConfigs) {
            hasAnyValues = true;
            internalValueResult.instanceTypeConfigs = this._instanceTypeConfigs;
        }
        if ((_l = this._launchSpecifications) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.launchSpecifications = (_m = this._launchSpecifications) === null || _m === void 0 ? void 0 : _m.internalValue;
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
            this._targetOnDemandCapacity = undefined;
            this._targetSpotCapacity = undefined;
            this._instanceTypeConfigs = undefined;
            this._launchSpecifications.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._targetOnDemandCapacity = value.targetOnDemandCapacity;
            this._targetSpotCapacity = value.targetSpotCapacity;
            this._instanceTypeConfigs = value.instanceTypeConfigs;
            this._launchSpecifications.internalValue = value.launchSpecifications;
        }
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
    get targetOnDemandCapacity() {
        return this.getNumberAttribute('target_on_demand_capacity');
    }
    /**
     * @stability stable
     */
    set targetOnDemandCapacity(value) {
        this._targetOnDemandCapacity = value;
    }
    /**
     * @stability stable
     */
    resetTargetOnDemandCapacity() {
        this._targetOnDemandCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetOnDemandCapacityInput() {
        return this._targetOnDemandCapacity;
    }
    /**
     * @stability stable
     */
    get targetSpotCapacity() {
        return this.getNumberAttribute('target_spot_capacity');
    }
    /**
     * @stability stable
     */
    set targetSpotCapacity(value) {
        this._targetSpotCapacity = value;
    }
    /**
     * @stability stable
     */
    resetTargetSpotCapacity() {
        this._targetSpotCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetSpotCapacityInput() {
        return this._targetSpotCapacity;
    }
    /**
     * @stability stable
     */
    get instanceTypeConfigs() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('instance_type_configs');
    }
    /**
     * @stability stable
     */
    set instanceTypeConfigs(value) {
        this._instanceTypeConfigs = value;
    }
    /**
     * @stability stable
     */
    resetInstanceTypeConfigs() {
        this._instanceTypeConfigs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeConfigsInput() {
        return this._instanceTypeConfigs;
    }
    /**
     * @stability stable
     */
    get launchSpecifications() {
        return this._launchSpecifications;
    }
    /**
     * @stability stable
     */
    putLaunchSpecifications(value) {
        this._launchSpecifications.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLaunchSpecifications() {
        this._launchSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchSpecificationsInput() {
        return this._launchSpecifications.internalValue;
    }
}
exports.EmrClusterMasterInstanceFleetOutputReference = EmrClusterMasterInstanceFleetOutputReference;
_h = JSII_RTTI_SYMBOL_1;
EmrClusterMasterInstanceFleetOutputReference[_h] = { fqn: "@cdktf/provider-aws.emr.EmrClusterMasterInstanceFleetOutputReference", version: "3.0.1" };
function emrClusterMasterInstanceGroupEbsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
        volumes_per_instance: cdktf.numberToTerraform(struct.volumesPerInstance),
    };
}
exports.emrClusterMasterInstanceGroupEbsConfigToTerraform = emrClusterMasterInstanceGroupEbsConfigToTerraform;
function emrClusterMasterInstanceGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bid_price: cdktf.stringToTerraform(struct.bidPrice),
        instance_count: cdktf.numberToTerraform(struct.instanceCount),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        name: cdktf.stringToTerraform(struct.name),
        ebs_config: cdktf.listMapper(emrClusterMasterInstanceGroupEbsConfigToTerraform)(struct.ebsConfig),
    };
}
exports.emrClusterMasterInstanceGroupToTerraform = emrClusterMasterInstanceGroupToTerraform;
/**
 * @stability stable
 */
class EmrClusterMasterInstanceGroupOutputReference extends cdktf.ComplexObject {
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
        if (this._bidPrice) {
            hasAnyValues = true;
            internalValueResult.bidPrice = this._bidPrice;
        }
        if (this._instanceCount) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._ebsConfig) {
            hasAnyValues = true;
            internalValueResult.ebsConfig = this._ebsConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bidPrice = undefined;
            this._instanceCount = undefined;
            this._instanceType = undefined;
            this._name = undefined;
            this._ebsConfig = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bidPrice = value.bidPrice;
            this._instanceCount = value.instanceCount;
            this._instanceType = value.instanceType;
            this._name = value.name;
            this._ebsConfig = value.ebsConfig;
        }
    }
    /**
     * @stability stable
     */
    get bidPrice() {
        return this.getStringAttribute('bid_price');
    }
    /**
     * @stability stable
     */
    set bidPrice(value) {
        this._bidPrice = value;
    }
    /**
     * @stability stable
     */
    resetBidPrice() {
        this._bidPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bidPriceInput() {
        return this._bidPrice;
    }
    /**
     * @stability stable
     */
    get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    /**
     * @stability stable
     */
    set instanceCount(value) {
        this._instanceCount = value;
    }
    /**
     * @stability stable
     */
    resetInstanceCount() {
        this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceCountInput() {
        return this._instanceCount;
    }
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    /**
     * @stability stable
     */
    set instanceType(value) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeInput() {
        return this._instanceType;
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
    get ebsConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ebs_config');
    }
    /**
     * @stability stable
     */
    set ebsConfig(value) {
        this._ebsConfig = value;
    }
    /**
     * @stability stable
     */
    resetEbsConfig() {
        this._ebsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ebsConfigInput() {
        return this._ebsConfig;
    }
}
exports.EmrClusterMasterInstanceGroupOutputReference = EmrClusterMasterInstanceGroupOutputReference;
_j = JSII_RTTI_SYMBOL_1;
EmrClusterMasterInstanceGroupOutputReference[_j] = { fqn: "@cdktf/provider-aws.emr.EmrClusterMasterInstanceGroupOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster}.
 *
 * @stability stable
 */
class EmrCluster extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster.html aws_emr_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_emr_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // auto_termination_policy - computed: false, optional: true, required: false
        this._autoTerminationPolicy = new EmrClusterAutoTerminationPolicyOutputReference(this, "auto_termination_policy", true);
        // core_instance_fleet - computed: false, optional: true, required: false
        this._coreInstanceFleet = new EmrClusterCoreInstanceFleetOutputReference(this, "core_instance_fleet", true);
        // core_instance_group - computed: false, optional: true, required: false
        this._coreInstanceGroup = new EmrClusterCoreInstanceGroupOutputReference(this, "core_instance_group", true);
        // ec2_attributes - computed: false, optional: true, required: false
        this._ec2Attributes = new EmrClusterEc2AttributesOutputReference(this, "ec2_attributes", true);
        // kerberos_attributes - computed: false, optional: true, required: false
        this._kerberosAttributes = new EmrClusterKerberosAttributesOutputReference(this, "kerberos_attributes", true);
        // master_instance_fleet - computed: false, optional: true, required: false
        this._masterInstanceFleet = new EmrClusterMasterInstanceFleetOutputReference(this, "master_instance_fleet", true);
        // master_instance_group - computed: false, optional: true, required: false
        this._masterInstanceGroup = new EmrClusterMasterInstanceGroupOutputReference(this, "master_instance_group", true);
        this._additionalInfo = config.additionalInfo;
        this._applications = config.applications;
        this._autoscalingRole = config.autoscalingRole;
        this._configurations = config.configurations;
        this._configurationsJson = config.configurationsJson;
        this._customAmiId = config.customAmiId;
        this._ebsRootVolumeSize = config.ebsRootVolumeSize;
        this._keepJobFlowAliveWhenNoSteps = config.keepJobFlowAliveWhenNoSteps;
        this._logEncryptionKmsKeyId = config.logEncryptionKmsKeyId;
        this._logUri = config.logUri;
        this._name = config.name;
        this._releaseLabel = config.releaseLabel;
        this._scaleDownBehavior = config.scaleDownBehavior;
        this._securityConfiguration = config.securityConfiguration;
        this._serviceRole = config.serviceRole;
        this._step = config.step;
        this._stepConcurrencyLevel = config.stepConcurrencyLevel;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._terminationProtection = config.terminationProtection;
        this._visibleToAllUsers = config.visibleToAllUsers;
        this._autoTerminationPolicy.internalValue = config.autoTerminationPolicy;
        this._bootstrapAction = config.bootstrapAction;
        this._coreInstanceFleet.internalValue = config.coreInstanceFleet;
        this._coreInstanceGroup.internalValue = config.coreInstanceGroup;
        this._ec2Attributes.internalValue = config.ec2Attributes;
        this._kerberosAttributes.internalValue = config.kerberosAttributes;
        this._masterInstanceFleet.internalValue = config.masterInstanceFleet;
        this._masterInstanceGroup.internalValue = config.masterInstanceGroup;
    }
    /**
     * @stability stable
     */
    get additionalInfo() {
        return this.getStringAttribute('additional_info');
    }
    /**
     * @stability stable
     */
    set additionalInfo(value) {
        this._additionalInfo = value;
    }
    /**
     * @stability stable
     */
    resetAdditionalInfo() {
        this._additionalInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get additionalInfoInput() {
        return this._additionalInfo;
    }
    /**
     * @stability stable
     */
    get applications() {
        return this.getListAttribute('applications');
    }
    /**
     * @stability stable
     */
    set applications(value) {
        this._applications = value;
    }
    /**
     * @stability stable
     */
    resetApplications() {
        this._applications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationsInput() {
        return this._applications;
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
    get autoscalingRole() {
        return this.getStringAttribute('autoscaling_role');
    }
    /**
     * @stability stable
     */
    set autoscalingRole(value) {
        this._autoscalingRole = value;
    }
    /**
     * @stability stable
     */
    resetAutoscalingRole() {
        this._autoscalingRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoscalingRoleInput() {
        return this._autoscalingRole;
    }
    // cluster_state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clusterState() {
        return this.getStringAttribute('cluster_state');
    }
    /**
     * @stability stable
     */
    get configurations() {
        return this.getStringAttribute('configurations');
    }
    /**
     * @stability stable
     */
    set configurations(value) {
        this._configurations = value;
    }
    /**
     * @stability stable
     */
    resetConfigurations() {
        this._configurations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationsInput() {
        return this._configurations;
    }
    /**
     * @stability stable
     */
    get configurationsJson() {
        return this.getStringAttribute('configurations_json');
    }
    /**
     * @stability stable
     */
    set configurationsJson(value) {
        this._configurationsJson = value;
    }
    /**
     * @stability stable
     */
    resetConfigurationsJson() {
        this._configurationsJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationsJsonInput() {
        return this._configurationsJson;
    }
    /**
     * @stability stable
     */
    get customAmiId() {
        return this.getStringAttribute('custom_ami_id');
    }
    /**
     * @stability stable
     */
    set customAmiId(value) {
        this._customAmiId = value;
    }
    /**
     * @stability stable
     */
    resetCustomAmiId() {
        this._customAmiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customAmiIdInput() {
        return this._customAmiId;
    }
    /**
     * @stability stable
     */
    get ebsRootVolumeSize() {
        return this.getNumberAttribute('ebs_root_volume_size');
    }
    /**
     * @stability stable
     */
    set ebsRootVolumeSize(value) {
        this._ebsRootVolumeSize = value;
    }
    /**
     * @stability stable
     */
    resetEbsRootVolumeSize() {
        this._ebsRootVolumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ebsRootVolumeSizeInput() {
        return this._ebsRootVolumeSize;
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
    get keepJobFlowAliveWhenNoSteps() {
        return this.getBooleanAttribute('keep_job_flow_alive_when_no_steps');
    }
    /**
     * @stability stable
     */
    set keepJobFlowAliveWhenNoSteps(value) {
        this._keepJobFlowAliveWhenNoSteps = value;
    }
    /**
     * @stability stable
     */
    resetKeepJobFlowAliveWhenNoSteps() {
        this._keepJobFlowAliveWhenNoSteps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keepJobFlowAliveWhenNoStepsInput() {
        return this._keepJobFlowAliveWhenNoSteps;
    }
    /**
     * @stability stable
     */
    get logEncryptionKmsKeyId() {
        return this.getStringAttribute('log_encryption_kms_key_id');
    }
    /**
     * @stability stable
     */
    set logEncryptionKmsKeyId(value) {
        this._logEncryptionKmsKeyId = value;
    }
    /**
     * @stability stable
     */
    resetLogEncryptionKmsKeyId() {
        this._logEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logEncryptionKmsKeyIdInput() {
        return this._logEncryptionKmsKeyId;
    }
    /**
     * @stability stable
     */
    get logUri() {
        return this.getStringAttribute('log_uri');
    }
    /**
     * @stability stable
     */
    set logUri(value) {
        this._logUri = value;
    }
    /**
     * @stability stable
     */
    resetLogUri() {
        this._logUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logUriInput() {
        return this._logUri;
    }
    // master_public_dns - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get masterPublicDns() {
        return this.getStringAttribute('master_public_dns');
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
    get releaseLabel() {
        return this.getStringAttribute('release_label');
    }
    /**
     * @stability stable
     */
    set releaseLabel(value) {
        this._releaseLabel = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get releaseLabelInput() {
        return this._releaseLabel;
    }
    /**
     * @stability stable
     */
    get scaleDownBehavior() {
        return this.getStringAttribute('scale_down_behavior');
    }
    /**
     * @stability stable
     */
    set scaleDownBehavior(value) {
        this._scaleDownBehavior = value;
    }
    /**
     * @stability stable
     */
    resetScaleDownBehavior() {
        this._scaleDownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scaleDownBehaviorInput() {
        return this._scaleDownBehavior;
    }
    /**
     * @stability stable
     */
    get securityConfiguration() {
        return this.getStringAttribute('security_configuration');
    }
    /**
     * @stability stable
     */
    set securityConfiguration(value) {
        this._securityConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetSecurityConfiguration() {
        this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityConfigurationInput() {
        return this._securityConfiguration;
    }
    /**
     * @stability stable
     */
    get serviceRole() {
        return this.getStringAttribute('service_role');
    }
    /**
     * @stability stable
     */
    set serviceRole(value) {
        this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceRoleInput() {
        return this._serviceRole;
    }
    /**
     * @stability stable
     */
    get step() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('step');
    }
    /**
     * @stability stable
     */
    set step(value) {
        this._step = value;
    }
    /**
     * @stability stable
     */
    resetStep() {
        this._step = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stepInput() {
        return this._step;
    }
    /**
     * @stability stable
     */
    get stepConcurrencyLevel() {
        return this.getNumberAttribute('step_concurrency_level');
    }
    /**
     * @stability stable
     */
    set stepConcurrencyLevel(value) {
        this._stepConcurrencyLevel = value;
    }
    /**
     * @stability stable
     */
    resetStepConcurrencyLevel() {
        this._stepConcurrencyLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stepConcurrencyLevelInput() {
        return this._stepConcurrencyLevel;
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
    get terminationProtection() {
        return this.getBooleanAttribute('termination_protection');
    }
    /**
     * @stability stable
     */
    set terminationProtection(value) {
        this._terminationProtection = value;
    }
    /**
     * @stability stable
     */
    resetTerminationProtection() {
        this._terminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get terminationProtectionInput() {
        return this._terminationProtection;
    }
    /**
     * @stability stable
     */
    get visibleToAllUsers() {
        return this.getBooleanAttribute('visible_to_all_users');
    }
    /**
     * @stability stable
     */
    set visibleToAllUsers(value) {
        this._visibleToAllUsers = value;
    }
    /**
     * @stability stable
     */
    resetVisibleToAllUsers() {
        this._visibleToAllUsers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get visibleToAllUsersInput() {
        return this._visibleToAllUsers;
    }
    /**
     * @stability stable
     */
    get autoTerminationPolicy() {
        return this._autoTerminationPolicy;
    }
    /**
     * @stability stable
     */
    putAutoTerminationPolicy(value) {
        this._autoTerminationPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAutoTerminationPolicy() {
        this._autoTerminationPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoTerminationPolicyInput() {
        return this._autoTerminationPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get bootstrapAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('bootstrap_action');
    }
    /**
     * @stability stable
     */
    set bootstrapAction(value) {
        this._bootstrapAction = value;
    }
    /**
     * @stability stable
     */
    resetBootstrapAction() {
        this._bootstrapAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bootstrapActionInput() {
        return this._bootstrapAction;
    }
    /**
     * @stability stable
     */
    get coreInstanceFleet() {
        return this._coreInstanceFleet;
    }
    /**
     * @stability stable
     */
    putCoreInstanceFleet(value) {
        this._coreInstanceFleet.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCoreInstanceFleet() {
        this._coreInstanceFleet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get coreInstanceFleetInput() {
        return this._coreInstanceFleet.internalValue;
    }
    /**
     * @stability stable
     */
    get coreInstanceGroup() {
        return this._coreInstanceGroup;
    }
    /**
     * @stability stable
     */
    putCoreInstanceGroup(value) {
        this._coreInstanceGroup.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCoreInstanceGroup() {
        this._coreInstanceGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get coreInstanceGroupInput() {
        return this._coreInstanceGroup.internalValue;
    }
    /**
     * @stability stable
     */
    get ec2Attributes() {
        return this._ec2Attributes;
    }
    /**
     * @stability stable
     */
    putEc2Attributes(value) {
        this._ec2Attributes.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEc2Attributes() {
        this._ec2Attributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ec2AttributesInput() {
        return this._ec2Attributes.internalValue;
    }
    /**
     * @stability stable
     */
    get kerberosAttributes() {
        return this._kerberosAttributes;
    }
    /**
     * @stability stable
     */
    putKerberosAttributes(value) {
        this._kerberosAttributes.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKerberosAttributes() {
        this._kerberosAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kerberosAttributesInput() {
        return this._kerberosAttributes.internalValue;
    }
    /**
     * @stability stable
     */
    get masterInstanceFleet() {
        return this._masterInstanceFleet;
    }
    /**
     * @stability stable
     */
    putMasterInstanceFleet(value) {
        this._masterInstanceFleet.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMasterInstanceFleet() {
        this._masterInstanceFleet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get masterInstanceFleetInput() {
        return this._masterInstanceFleet.internalValue;
    }
    /**
     * @stability stable
     */
    get masterInstanceGroup() {
        return this._masterInstanceGroup;
    }
    /**
     * @stability stable
     */
    putMasterInstanceGroup(value) {
        this._masterInstanceGroup.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMasterInstanceGroup() {
        this._masterInstanceGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get masterInstanceGroupInput() {
        return this._masterInstanceGroup.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            additional_info: cdktf.stringToTerraform(this._additionalInfo),
            applications: cdktf.listMapper(cdktf.stringToTerraform)(this._applications),
            autoscaling_role: cdktf.stringToTerraform(this._autoscalingRole),
            configurations: cdktf.stringToTerraform(this._configurations),
            configurations_json: cdktf.stringToTerraform(this._configurationsJson),
            custom_ami_id: cdktf.stringToTerraform(this._customAmiId),
            ebs_root_volume_size: cdktf.numberToTerraform(this._ebsRootVolumeSize),
            keep_job_flow_alive_when_no_steps: cdktf.booleanToTerraform(this._keepJobFlowAliveWhenNoSteps),
            log_encryption_kms_key_id: cdktf.stringToTerraform(this._logEncryptionKmsKeyId),
            log_uri: cdktf.stringToTerraform(this._logUri),
            name: cdktf.stringToTerraform(this._name),
            release_label: cdktf.stringToTerraform(this._releaseLabel),
            scale_down_behavior: cdktf.stringToTerraform(this._scaleDownBehavior),
            security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
            service_role: cdktf.stringToTerraform(this._serviceRole),
            step: cdktf.listMapper(emrClusterStepToTerraform)(this._step),
            step_concurrency_level: cdktf.numberToTerraform(this._stepConcurrencyLevel),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
            visible_to_all_users: cdktf.booleanToTerraform(this._visibleToAllUsers),
            auto_termination_policy: emrClusterAutoTerminationPolicyToTerraform(this._autoTerminationPolicy.internalValue),
            bootstrap_action: cdktf.listMapper(emrClusterBootstrapActionToTerraform)(this._bootstrapAction),
            core_instance_fleet: emrClusterCoreInstanceFleetToTerraform(this._coreInstanceFleet.internalValue),
            core_instance_group: emrClusterCoreInstanceGroupToTerraform(this._coreInstanceGroup.internalValue),
            ec2_attributes: emrClusterEc2AttributesToTerraform(this._ec2Attributes.internalValue),
            kerberos_attributes: emrClusterKerberosAttributesToTerraform(this._kerberosAttributes.internalValue),
            master_instance_fleet: emrClusterMasterInstanceFleetToTerraform(this._masterInstanceFleet.internalValue),
            master_instance_group: emrClusterMasterInstanceGroupToTerraform(this._masterInstanceGroup.internalValue),
        };
    }
}
exports.EmrCluster = EmrCluster;
_k = JSII_RTTI_SYMBOL_1;
EmrCluster[_k] = { fqn: "@cdktf/provider-aws.emr.EmrCluster", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
EmrCluster.tfResourceType = "aws_emr_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1yLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW1yL2Vtci1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBMEUvQixTQUFnQixzQ0FBc0MsQ0FBQyxNQUFvQztJQUN6RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxNQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDakcsR0FBRyxFQUFFLE1BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQzVFLFVBQVUsRUFBRSxNQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUMvRixVQUFVLEVBQUUsTUFBTyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUNqSCxDQUFBO0FBQ0gsQ0FBQztBQVhELHdGQVdD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VyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWRkaXRpb25hbEluZm8/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXBwbGljYXRpb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvc2NhbGluZ1JvbGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25zPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvbnNKc29uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tQW1pSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic1Jvb3RWb2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0VuY3J5cHRpb25LbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ1VyaT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlbGVhc2VMYWJlbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NhbGVEb3duQmVoYXZpb3I/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUNvbmZpZ3VyYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZVJvbGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0ZXA/OiBFbXJDbHVzdGVyU3RlcFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RlcENvbmN1cnJlbmN5TGV2ZWw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVybWluYXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aXNpYmxlVG9BbGxVc2Vycz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b1Rlcm1pbmF0aW9uUG9saWN5PzogRW1yQ2x1c3RlckF1dG9UZXJtaW5hdGlvblBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYm9vdHN0cmFwQWN0aW9uPzogRW1yQ2x1c3RlckJvb3RzdHJhcEFjdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3JlSW5zdGFuY2VGbGVldD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29yZUluc3RhbmNlR3JvdXA/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVjMkF0dHJpYnV0ZXM/OiBFbXJDbHVzdGVyRWMyQXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2VyYmVyb3NBdHRyaWJ1dGVzPzogRW1yQ2x1c3RlcktlcmJlcm9zQXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFzdGVySW5zdGFuY2VGbGVldD86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXN0ZXJJbnN0YW5jZUdyb3VwPzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXA7XG59XG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcmdzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgamFyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFpbkNsYXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvcGVydGllcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcFRvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFyZ3M6IHN0cnVjdCEuYXJncyA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYXJncyksXG4gICAgamFyOiBzdHJ1Y3QhLmphciA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuamFyKSxcbiAgICBtYWluX2NsYXNzOiBzdHJ1Y3QhLm1haW5DbGFzcyA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFpbkNsYXNzKSxcbiAgICBwcm9wZXJ0aWVzOiBzdHJ1Y3QhLnByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnRpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlclN0ZXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb25PbkZhaWx1cmU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGFkb29wSmFyU3RlcD86IEVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJTdGVwVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlclN0ZXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25fb25fZmFpbHVyZTogc3RydWN0IS5hY3Rpb25PbkZhaWx1cmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbk9uRmFpbHVyZSksXG4gICAgaGFkb29wX2phcl9zdGVwOiBzdHJ1Y3QhLmhhZG9vcEphclN0ZXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJTdGVwSGFkb29wSmFyU3RlcFRvVGVycmFmb3JtKShzdHJ1Y3QhLmhhZG9vcEphclN0ZXApLFxuICAgIG5hbWU6IHN0cnVjdCEubmFtZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQXV0b1Rlcm1pbmF0aW9uUG9saWN5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZGxlVGltZW91dD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJBdXRvVGVybWluYXRpb25Qb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQXV0b1Rlcm1pbmF0aW9uUG9saWN5T3V0cHV0UmVmZXJlbmNlIHwgRW1yQ2x1c3RlckF1dG9UZXJtaW5hdGlvblBvbGljeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlkbGVfdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pZGxlVGltZW91dCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtckNsdXN0ZXJBdXRvVGVybWluYXRpb25Qb2xpY3lPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRW1yQ2x1c3RlckF1dG9UZXJtaW5hdGlvblBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faWRsZVRpbWVvdXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlkbGVUaW1lb3V0ID0gdGhpcy5faWRsZVRpbWVvdXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbXJDbHVzdGVyQXV0b1Rlcm1pbmF0aW9uUG9saWN5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faWRsZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lkbGVUaW1lb3V0ID0gdmFsdWUuaWRsZVRpbWVvdXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gaWRsZV90aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lkbGVUaW1lb3V0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpZGxlVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lkbGVfdGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWRsZVRpbWVvdXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2lkbGVUaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWRsZVRpbWVvdXQoKSB7XG4gICAgdGhpcy5faWRsZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkbGVUaW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGVUaW1lb3V0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJCb290c3RyYXBBY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXJncz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1yQ2x1c3RlckJvb3RzdHJhcEFjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJCb290c3RyYXBBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcmdzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmFyZ3MpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXRoKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsYXNzaWZpY2F0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvcGVydGllcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsYXNzaWZpY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsYXNzaWZpY2F0aW9uKSxcbiAgICBwcm9wZXJ0aWVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnRpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVzUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZvbHVtZXNfcGVyX2luc3RhbmNlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZXNQZXJJbnN0YW5jZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZUFzUGVyY2VudGFnZU9mT25EZW1hbmRQcmljZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmF0aW9ucz86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNDb25maWc/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJpZF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaWRQcmljZSksXG4gICAgYmlkX3ByaWNlX2FzX3BlcmNlbnRhZ2Vfb2Zfb25fZGVtYW5kX3ByaWNlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpZFByaWNlQXNQZXJjZW50YWdlT2ZPbkRlbWFuZFByaWNlKSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgY29uZmlndXJhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29uZmlndXJhdGlvbnMpLFxuICAgIGVic19jb25maWc6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVic0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvY2F0aW9uU3RyYXRlZ3k6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25TdHJhdGVneTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tEdXJhdGlvbk1pbnV0ZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRBY3Rpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0RHVyYXRpb25NaW51dGVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFsbG9jYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICBibG9ja19kdXJhdGlvbl9taW51dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJsb2NrRHVyYXRpb25NaW51dGVzKSxcbiAgICB0aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0QWN0aW9uKSxcbiAgICB0aW1lb3V0X2R1cmF0aW9uX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dER1cmF0aW9uTWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kU3BlY2lmaWNhdGlvbj86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RTcGVjaWZpY2F0aW9uPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSB8IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb25fZGVtYW5kX3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5vbkRlbWFuZFNwZWNpZmljYXRpb24pLFxuICAgIHNwb3Rfc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3BvdFNwZWNpZmljYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vbkRlbWFuZFNwZWNpZmljYXRpb24gPSB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcG90U3BlY2lmaWNhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3BvdFNwZWNpZmljYXRpb24gPSB0aGlzLl9zcG90U3BlY2lmaWNhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BvdFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX29uRGVtYW5kU3BlY2lmaWNhdGlvbiA9IHZhbHVlLm9uRGVtYW5kU3BlY2lmaWNhdGlvbjtcbiAgICAgIHRoaXMuX3Nwb3RTcGVjaWZpY2F0aW9uID0gdmFsdWUuc3BvdFNwZWNpZmljYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gb25fZGVtYW5kX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRTcGVjaWZpY2F0aW9uPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRTcGVjaWZpY2F0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvbl9kZW1hbmRfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uRGVtYW5kU3BlY2lmaWNhdGlvbih2YWx1ZTogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25bXSkge1xuICAgIHRoaXMuX29uRGVtYW5kU3BlY2lmaWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb247XG4gIH1cblxuICAvLyBzcG90X3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFNwZWNpZmljYXRpb24/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uW107IFxuICBwdWJsaWMgZ2V0IHNwb3RTcGVjaWZpY2F0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcG90X3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzcG90U3BlY2lmaWNhdGlvbih2YWx1ZTogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbltdKSB7XG4gICAgdGhpcy5fc3BvdFNwZWNpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90U3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9zcG90U3BlY2lmaWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdFNwZWNpZmljYXRpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRPbkRlbWFuZENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRTcG90Q2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZUNvbmZpZ3M/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFNwZWNpZmljYXRpb25zPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRPdXRwdXRSZWZlcmVuY2UgfCBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHRhcmdldF9vbl9kZW1hbmRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0T25EZW1hbmRDYXBhY2l0eSksXG4gICAgdGFyZ2V0X3Nwb3RfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0U3BvdENhcGFjaXR5KSxcbiAgICBpbnN0YW5jZV90eXBlX2NvbmZpZ3M6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluc3RhbmNlVHlwZUNvbmZpZ3MpLFxuICAgIGxhdW5jaF9zcGVjaWZpY2F0aW9uczogZW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFNwZWNpZmljYXRpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRPbkRlbWFuZENhcGFjaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRPbkRlbWFuZENhcGFjaXR5ID0gdGhpcy5fdGFyZ2V0T25EZW1hbmRDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0U3BvdENhcGFjaXR5ID0gdGhpcy5fdGFyZ2V0U3BvdENhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlQ29uZmlncyA9IHRoaXMuX2luc3RhbmNlVHlwZUNvbmZpZ3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoU3BlY2lmaWNhdGlvbnMgPSB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXRPbkRlbWFuZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0U3BvdENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5fdGFyZ2V0T25EZW1hbmRDYXBhY2l0eSA9IHZhbHVlLnRhcmdldE9uRGVtYW5kQ2FwYWNpdHk7XG4gICAgICB0aGlzLl90YXJnZXRTcG90Q2FwYWNpdHkgPSB2YWx1ZS50YXJnZXRTcG90Q2FwYWNpdHk7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGVDb25maWdzID0gdmFsdWUuaW5zdGFuY2VUeXBlQ29uZmlncztcbiAgICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYXVuY2hTcGVjaWZpY2F0aW9ucztcbiAgICB9XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB0YXJnZXRfb25fZGVtYW5kX2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRhcmdldE9uRGVtYW5kQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfb25fZGVtYW5kX2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRPbkRlbWFuZENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRPbkRlbWFuZENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0T25EZW1hbmRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl90YXJnZXRPbkRlbWFuZENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRPbkRlbWFuZENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHk7XG4gIH1cblxuICAvLyB0YXJnZXRfc3BvdF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRTcG90Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRhcmdldFNwb3RDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF9zcG90X2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRTcG90Q2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldFNwb3RDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl90YXJnZXRTcG90Q2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFNwb3RDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRTcG90Q2FwYWNpdHk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlX2NvbmZpZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlQ29uZmlncz86IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NbXTsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlQ29uZmlncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZV9jb25maWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlQ29uZmlncyh2YWx1ZTogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1tdKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZUNvbmZpZ3MoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlQ29uZmlnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGVDb25maWdzO1xuICB9XG5cbiAgLy8gbGF1bmNoX3NwZWNpZmljYXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFNwZWNpZmljYXRpb25zID0gbmV3IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImxhdW5jaF9zcGVjaWZpY2F0aW9uc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsYXVuY2hTcGVjaWZpY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dExhdW5jaFNwZWNpZmljYXRpb25zKHZhbHVlOiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucykge1xuICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hTcGVjaWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hTcGVjaWZpY2F0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cEVic0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVzUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBFYnNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBFYnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHNpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2b2x1bWVzX3Blcl9pbnN0YW5jZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVzUGVySW5zdGFuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvc2NhbGluZ1BvbGljeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzQ29uZmlnPzogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUdyb3VwRWJzQ29uZmlnW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBPdXRwdXRSZWZlcmVuY2UgfCBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvc2NhbGluZ19wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0b3NjYWxpbmdQb2xpY3kpLFxuICAgIGJpZF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaWRQcmljZSksXG4gICAgaW5zdGFuY2VfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VDb3VudCksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgZWJzX2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBFYnNDb25maWdUb1RlcnJhZm9ybSkoc3RydWN0IS5lYnNDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRvc2NhbGluZ1BvbGljeSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0b3NjYWxpbmdQb2xpY3kgPSB0aGlzLl9hdXRvc2NhbGluZ1BvbGljeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2JpZFByaWNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5iaWRQcmljZSA9IHRoaXMuX2JpZFByaWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VDb3VudCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VDb3VudCA9IHRoaXMuX2luc3RhbmNlQ291bnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnN0YW5jZVR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlVHlwZSA9IHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZWJzQ29uZmlnKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lYnNDb25maWcgPSB0aGlzLl9lYnNDb25maWc7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXAgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRvc2NhbGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2JpZFByaWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5zdGFuY2VDb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lYnNDb25maWcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9zY2FsaW5nUG9saWN5ID0gdmFsdWUuYXV0b3NjYWxpbmdQb2xpY3k7XG4gICAgICB0aGlzLl9iaWRQcmljZSA9IHZhbHVlLmJpZFByaWNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VDb3VudCA9IHZhbHVlLmluc3RhbmNlQ291bnQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX2Vic0NvbmZpZyA9IHZhbHVlLmVic0NvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBhdXRvc2NhbGluZ19wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b3NjYWxpbmdQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dG9zY2FsaW5nUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0b3NjYWxpbmdfcG9saWN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvc2NhbGluZ1BvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdQb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvc2NhbGluZ1BvbGljeSgpIHtcbiAgICB0aGlzLl9hdXRvc2NhbGluZ1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdQb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NjYWxpbmdQb2xpY3k7XG4gIH1cblxuICAvLyBiaWRfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmlkUHJpY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJpZFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmlkX3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBiaWRQcmljZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmlkUHJpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCaWRQcmljZSgpIHtcbiAgICB0aGlzLl9iaWRQcmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmlkUHJpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmlkUHJpY2U7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZUNvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2VfY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luc3RhbmNlQ291bnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUNvdW50KCkge1xuICAgIHRoaXMuX2luc3RhbmNlQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VDb3VudDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gZWJzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNDb25maWc/OiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBFYnNDb25maWdbXTsgXG4gIHB1YmxpYyBnZXQgZWJzQ29uZmlnKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlYnNfY29uZmlnJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZWJzQ29uZmlnKHZhbHVlOiBFbXJDbHVzdGVyQ29yZUluc3RhbmNlR3JvdXBFYnNDb25maWdbXSkge1xuICAgIHRoaXMuX2Vic0NvbmZpZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic0NvbmZpZygpIHtcbiAgICB0aGlzLl9lYnNDb25maWcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNDb25maWc7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3RlckVjMkF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3Vwcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWRkaXRpb25hbFNsYXZlU2VjdXJpdHlHcm91cHM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVByb2ZpbGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJFYzJBdHRyaWJ1dGVzVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3RlckVjMkF0dHJpYnV0ZXNPdXRwdXRSZWZlcmVuY2UgfCBFbXJDbHVzdGVyRWMyQXR0cmlidXRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkZGl0aW9uYWxfbWFzdGVyX3NlY3VyaXR5X2dyb3VwczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZGRpdGlvbmFsTWFzdGVyU2VjdXJpdHlHcm91cHMpLFxuICAgIGFkZGl0aW9uYWxfc2xhdmVfc2VjdXJpdHlfZ3JvdXBzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzKSxcbiAgICBlbXJfbWFuYWdlZF9tYXN0ZXJfc2VjdXJpdHlfZ3JvdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXApLFxuICAgIGVtcl9tYW5hZ2VkX3NsYXZlX3NlY3VyaXR5X2dyb3VwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXApLFxuICAgIGluc3RhbmNlX3Byb2ZpbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VQcm9maWxlKSxcbiAgICBrZXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlOYW1lKSxcbiAgICBzZXJ2aWNlX2FjY2Vzc19zZWN1cml0eV9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlQWNjZXNzU2VjdXJpdHlHcm91cCksXG4gICAgc3VibmV0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtckNsdXN0ZXJFYzJBdHRyaWJ1dGVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVtckNsdXN0ZXJFYzJBdHRyaWJ1dGVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hZGRpdGlvbmFsTWFzdGVyU2VjdXJpdHlHcm91cHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3VwcyA9IHRoaXMuX2FkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3VwcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hZGRpdGlvbmFsU2xhdmVTZWN1cml0eUdyb3VwcyA9IHRoaXMuX2FkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXApIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVtck1hbmFnZWRNYXN0ZXJTZWN1cml0eUdyb3VwID0gdGhpcy5fZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbXJNYW5hZ2VkU2xhdmVTZWN1cml0eUdyb3VwKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbXJNYW5hZ2VkU2xhdmVTZWN1cml0eUdyb3VwID0gdGhpcy5fZW1yTWFuYWdlZFNsYXZlU2VjdXJpdHlHcm91cDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlUHJvZmlsZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VQcm9maWxlID0gdGhpcy5faW5zdGFuY2VQcm9maWxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2V5TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2V5TmFtZSA9IHRoaXMuX2tleU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJ2aWNlQWNjZXNzU2VjdXJpdHlHcm91cCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXAgPSB0aGlzLl9zZXJ2aWNlQWNjZXNzU2VjdXJpdHlHcm91cDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1Ym5ldElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJuZXRJZCA9IHRoaXMuX3N1Ym5ldElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VibmV0SWRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdWJuZXRJZHMgPSB0aGlzLl9zdWJuZXRJZHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbXJDbHVzdGVyRWMyQXR0cmlidXRlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbXJNYW5hZ2VkU2xhdmVTZWN1cml0eUdyb3VwID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5zdGFuY2VQcm9maWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2V5TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZpY2VBY2Nlc3NTZWN1cml0eUdyb3VwID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VibmV0SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJuZXRJZHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3VwcyA9IHZhbHVlLmFkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3VwcztcbiAgICAgIHRoaXMuX2FkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzID0gdmFsdWUuYWRkaXRpb25hbFNsYXZlU2VjdXJpdHlHcm91cHM7XG4gICAgICB0aGlzLl9lbXJNYW5hZ2VkTWFzdGVyU2VjdXJpdHlHcm91cCA9IHZhbHVlLmVtck1hbmFnZWRNYXN0ZXJTZWN1cml0eUdyb3VwO1xuICAgICAgdGhpcy5fZW1yTWFuYWdlZFNsYXZlU2VjdXJpdHlHcm91cCA9IHZhbHVlLmVtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXA7XG4gICAgICB0aGlzLl9pbnN0YW5jZVByb2ZpbGUgPSB2YWx1ZS5pbnN0YW5jZVByb2ZpbGU7XG4gICAgICB0aGlzLl9rZXlOYW1lID0gdmFsdWUua2V5TmFtZTtcbiAgICAgIHRoaXMuX3NlcnZpY2VBY2Nlc3NTZWN1cml0eUdyb3VwID0gdmFsdWUuc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXA7XG4gICAgICB0aGlzLl9zdWJuZXRJZCA9IHZhbHVlLnN1Ym5ldElkO1xuICAgICAgdGhpcy5fc3VibmV0SWRzID0gdmFsdWUuc3VibmV0SWRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZGl0aW9uYWxfbWFzdGVyX3NlY3VyaXR5X2dyb3VwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZGRpdGlvbmFsTWFzdGVyU2VjdXJpdHlHcm91cHM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFkZGl0aW9uYWxNYXN0ZXJTZWN1cml0eUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkZGl0aW9uYWxfbWFzdGVyX3NlY3VyaXR5X2dyb3VwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWRkaXRpb25hbE1hc3RlclNlY3VyaXR5R3JvdXBzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGRpdGlvbmFsTWFzdGVyU2VjdXJpdHlHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZGRpdGlvbmFsTWFzdGVyU2VjdXJpdHlHcm91cHMoKSB7XG4gICAgdGhpcy5fYWRkaXRpb25hbE1hc3RlclNlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGRpdGlvbmFsTWFzdGVyU2VjdXJpdHlHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbE1hc3RlclNlY3VyaXR5R3JvdXBzO1xuICB9XG5cbiAgLy8gYWRkaXRpb25hbF9zbGF2ZV9zZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRkaXRpb25hbFNsYXZlU2VjdXJpdHlHcm91cHM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWRkaXRpb25hbF9zbGF2ZV9zZWN1cml0eV9ncm91cHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZGRpdGlvbmFsU2xhdmVTZWN1cml0eUdyb3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxTbGF2ZVNlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGRpdGlvbmFsU2xhdmVTZWN1cml0eUdyb3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZGRpdGlvbmFsU2xhdmVTZWN1cml0eUdyb3VwcztcbiAgfVxuXG4gIC8vIGVtcl9tYW5hZ2VkX21hc3Rlcl9zZWN1cml0eV9ncm91cCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vtck1hbmFnZWRNYXN0ZXJTZWN1cml0eUdyb3VwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbXJNYW5hZ2VkTWFzdGVyU2VjdXJpdHlHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vtcl9tYW5hZ2VkX21hc3Rlcl9zZWN1cml0eV9ncm91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Vtck1hbmFnZWRNYXN0ZXJTZWN1cml0eUdyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXAoKSB7XG4gICAgdGhpcy5fZW1yTWFuYWdlZE1hc3RlclNlY3VyaXR5R3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtck1hbmFnZWRNYXN0ZXJTZWN1cml0eUdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vtck1hbmFnZWRNYXN0ZXJTZWN1cml0eUdyb3VwO1xuICB9XG5cbiAgLy8gZW1yX21hbmFnZWRfc2xhdmVfc2VjdXJpdHlfZ3JvdXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbXJNYW5hZ2VkU2xhdmVTZWN1cml0eUdyb3VwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbXJNYW5hZ2VkU2xhdmVTZWN1cml0eUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1yX21hbmFnZWRfc2xhdmVfc2VjdXJpdHlfZ3JvdXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Vtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbXJNYW5hZ2VkU2xhdmVTZWN1cml0eUdyb3VwKCkge1xuICAgIHRoaXMuX2Vtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtck1hbmFnZWRTbGF2ZVNlY3VyaXR5R3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1yTWFuYWdlZFNsYXZlU2VjdXJpdHlHcm91cDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3Byb2ZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5zdGFuY2VQcm9maWxlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9wcm9maWxlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVByb2ZpbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlUHJvZmlsZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVByb2ZpbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VQcm9maWxlO1xuICB9XG5cbiAgLy8ga2V5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2V5TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBrZXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5TmFtZSgpIHtcbiAgICB0aGlzLl9rZXlOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleU5hbWU7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2FjY2Vzc19zZWN1cml0eV9ncm91cCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZpY2VBY2Nlc3NTZWN1cml0eUdyb3VwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjZXNzU2VjdXJpdHlHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfYWNjZXNzX3NlY3VyaXR5X2dyb3VwJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlQWNjZXNzU2VjdXJpdHlHcm91cCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlQWNjZXNzU2VjdXJpdHlHcm91cCgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzU2VjdXJpdHlHcm91cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUFjY2Vzc1NlY3VyaXR5R3JvdXA7XG4gIH1cblxuICAvLyBzdWJuZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJuZXRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VibmV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWJuZXRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWJuZXRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldElkKCkge1xuICAgIHRoaXMuX3N1Ym5ldElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZDtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJuZXRJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldF9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWJuZXRJZHMoKSB7XG4gICAgdGhpcy5fc3VibmV0SWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0SWRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJLZXJiZXJvc0F0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZERvbWFpbkpvaW5QYXNzd29yZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkRG9tYWluSm9pblVzZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3Jvc3NSZWFsbVRydXN0UHJpbmNpcGFsUGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2RjQWRtaW5QYXNzd29yZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWFsbTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1yQ2x1c3RlcktlcmJlcm9zQXR0cmlidXRlc1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJLZXJiZXJvc0F0dHJpYnV0ZXNPdXRwdXRSZWZlcmVuY2UgfCBFbXJDbHVzdGVyS2VyYmVyb3NBdHRyaWJ1dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWRfZG9tYWluX2pvaW5fcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWREb21haW5Kb2luUGFzc3dvcmQpLFxuICAgIGFkX2RvbWFpbl9qb2luX3VzZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWREb21haW5Kb2luVXNlciksXG4gICAgY3Jvc3NfcmVhbG1fdHJ1c3RfcHJpbmNpcGFsX3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyb3NzUmVhbG1UcnVzdFByaW5jaXBhbFBhc3N3b3JkKSxcbiAgICBrZGNfYWRtaW5fcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2RjQWRtaW5QYXNzd29yZCksXG4gICAgcmVhbG06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVhbG0pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXJDbHVzdGVyS2VyYmVyb3NBdHRyaWJ1dGVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVtckNsdXN0ZXJLZXJiZXJvc0F0dHJpYnV0ZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FkRG9tYWluSm9pblBhc3N3b3JkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hZERvbWFpbkpvaW5QYXNzd29yZCA9IHRoaXMuX2FkRG9tYWluSm9pblBhc3N3b3JkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWREb21haW5Kb2luVXNlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWREb21haW5Kb2luVXNlciA9IHRoaXMuX2FkRG9tYWluSm9pblVzZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3Jvc3NSZWFsbVRydXN0UHJpbmNpcGFsUGFzc3dvcmQgPSB0aGlzLl9jcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tkY0FkbWluUGFzc3dvcmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtkY0FkbWluUGFzc3dvcmQgPSB0aGlzLl9rZGNBZG1pblBhc3N3b3JkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVhbG0pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlYWxtID0gdGhpcy5fcmVhbG07XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbXJDbHVzdGVyS2VyYmVyb3NBdHRyaWJ1dGVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWREb21haW5Kb2luUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hZERvbWFpbkpvaW5Vc2VyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3Jvc3NSZWFsbVRydXN0UHJpbmNpcGFsUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZGNBZG1pblBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVhbG0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FkRG9tYWluSm9pblBhc3N3b3JkID0gdmFsdWUuYWREb21haW5Kb2luUGFzc3dvcmQ7XG4gICAgICB0aGlzLl9hZERvbWFpbkpvaW5Vc2VyID0gdmFsdWUuYWREb21haW5Kb2luVXNlcjtcbiAgICAgIHRoaXMuX2Nyb3NzUmVhbG1UcnVzdFByaW5jaXBhbFBhc3N3b3JkID0gdmFsdWUuY3Jvc3NSZWFsbVRydXN0UHJpbmNpcGFsUGFzc3dvcmQ7XG4gICAgICB0aGlzLl9rZGNBZG1pblBhc3N3b3JkID0gdmFsdWUua2RjQWRtaW5QYXNzd29yZDtcbiAgICAgIHRoaXMuX3JlYWxtID0gdmFsdWUucmVhbG07XG4gICAgfVxuICB9XG5cbiAgLy8gYWRfZG9tYWluX2pvaW5fcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWREb21haW5Kb2luUGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFkRG9tYWluSm9pblBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWRfZG9tYWluX2pvaW5fcGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkRG9tYWluSm9pblBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZERvbWFpbkpvaW5QYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFkRG9tYWluSm9pblBhc3N3b3JkKCkge1xuICAgIHRoaXMuX2FkRG9tYWluSm9pblBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZERvbWFpbkpvaW5QYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZERvbWFpbkpvaW5QYXNzd29yZDtcbiAgfVxuXG4gIC8vIGFkX2RvbWFpbl9qb2luX3VzZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWREb21haW5Kb2luVXNlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWREb21haW5Kb2luVXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkX2RvbWFpbl9qb2luX3VzZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkRG9tYWluSm9pblVzZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FkRG9tYWluSm9pblVzZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZERvbWFpbkpvaW5Vc2VyKCkge1xuICAgIHRoaXMuX2FkRG9tYWluSm9pblVzZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkRG9tYWluSm9pblVzZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWREb21haW5Kb2luVXNlcjtcbiAgfVxuXG4gIC8vIGNyb3NzX3JlYWxtX3RydXN0X3ByaW5jaXBhbF9wYXNzd29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3Jvc3NSZWFsbVRydXN0UHJpbmNpcGFsUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcm9zc19yZWFsbV90cnVzdF9wcmluY2lwYWxfcGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyb3NzUmVhbG1UcnVzdFByaW5jaXBhbFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyb3NzUmVhbG1UcnVzdFByaW5jaXBhbFBhc3N3b3JkKCkge1xuICAgIHRoaXMuX2Nyb3NzUmVhbG1UcnVzdFByaW5jaXBhbFBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcm9zc1JlYWxtVHJ1c3RQcmluY2lwYWxQYXNzd29yZDtcbiAgfVxuXG4gIC8vIGtkY19hZG1pbl9wYXNzd29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9rZGNBZG1pblBhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrZGNBZG1pblBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2RjX2FkbWluX3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrZGNBZG1pblBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZGNBZG1pblBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtkY0FkbWluUGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2RjQWRtaW5QYXNzd29yZDtcbiAgfVxuXG4gIC8vIHJlYWxtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlYWxtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWFsbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlYWxtJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWFsbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVhbG0gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVhbG1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhbG07XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzQ29uZmlndXJhdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbGFzc2lmaWNhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3BlcnRpZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xhc3NpZmljYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xhc3NpZmljYXRpb24pLFxuICAgIHByb3BlcnRpZXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvcGVydGllcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NFYnNDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW9wcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lc1Blckluc3RhbmNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW9wczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pb3BzKSxcbiAgICBzaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdm9sdW1lc19wZXJfaW5zdGFuY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lc1Blckluc3RhbmNlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmlkUHJpY2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmlkUHJpY2VBc1BlcmNlbnRhZ2VPZk9uRGVtYW5kUHJpY2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2VpZ2h0ZWRDYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvbnM/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNDb25maWc/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NFYnNDb25maWdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJpZF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaWRQcmljZSksXG4gICAgYmlkX3ByaWNlX2FzX3BlcmNlbnRhZ2Vfb2Zfb25fZGVtYW5kX3ByaWNlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpZFByaWNlQXNQZXJjZW50YWdlT2ZPbkRlbWFuZFByaWNlKSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgY29uZmlndXJhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzQ29uZmlndXJhdGlvbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5jb25maWd1cmF0aW9ucyksXG4gICAgZWJzX2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NFYnNDb25maWdUb1RlcnJhZm9ybSkoc3RydWN0IS5lYnNDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGxvY2F0aW9uU3RyYXRlZ3k6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb2NhdGlvbl9zdHJhdGVneTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvY2F0aW9uU3RyYXRlZ3kpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25TdHJhdGVneTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tEdXJhdGlvbk1pbnV0ZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRBY3Rpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0RHVyYXRpb25NaW51dGVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgYmxvY2tfZHVyYXRpb25fbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ibG9ja0R1cmF0aW9uTWludXRlcyksXG4gICAgdGltZW91dF9hY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dEFjdGlvbiksXG4gICAgdGltZW91dF9kdXJhdGlvbl9taW51dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXREdXJhdGlvbk1pbnV0ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kU3BlY2lmaWNhdGlvbj86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdFNwZWNpZmljYXRpb24/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIHwgRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9uX2RlbWFuZF9zcGVjaWZpY2F0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5vbkRlbWFuZFNwZWNpZmljYXRpb24pLFxuICAgIHNwb3Rfc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5zcG90U3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vbkRlbWFuZFNwZWNpZmljYXRpb24gPSB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcG90U3BlY2lmaWNhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3BvdFNwZWNpZmljYXRpb24gPSB0aGlzLl9zcG90U3BlY2lmaWNhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zcG90U3BlY2lmaWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uID0gdmFsdWUub25EZW1hbmRTcGVjaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fc3BvdFNwZWNpZmljYXRpb24gPSB2YWx1ZS5zcG90U3BlY2lmaWNhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vbkRlbWFuZFNwZWNpZmljYXRpb24/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uW107IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kU3BlY2lmaWNhdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb25fZGVtYW5kX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZFNwZWNpZmljYXRpb24odmFsdWU6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25bXSkge1xuICAgIHRoaXMuX29uRGVtYW5kU3BlY2lmaWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb247XG4gIH1cblxuICAvLyBzcG90X3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFNwZWNpZmljYXRpb24/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgc3BvdFNwZWNpZmljYXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Nwb3Rfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RTcGVjaWZpY2F0aW9uKHZhbHVlOiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25bXSkge1xuICAgIHRoaXMuX3Nwb3RTcGVjaWZpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdFNwZWNpZmljYXRpb24oKSB7XG4gICAgdGhpcy5fc3BvdFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RTcGVjaWZpY2F0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRPbkRlbWFuZENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRTcG90Q2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZUNvbmZpZ3M/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoU3BlY2lmaWNhdGlvbnM/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldE91dHB1dFJlZmVyZW5jZSB8IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0YXJnZXRfb25fZGVtYW5kX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldE9uRGVtYW5kQ2FwYWNpdHkpLFxuICAgIHRhcmdldF9zcG90X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhcmdldFNwb3RDYXBhY2l0eSksXG4gICAgaW5zdGFuY2VfdHlwZV9jb25maWdzOiBjZGt0Zi5saXN0TWFwcGVyKGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmluc3RhbmNlVHlwZUNvbmZpZ3MpLFxuICAgIGxhdW5jaF9zcGVjaWZpY2F0aW9uczogZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoU3BlY2lmaWNhdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRPbkRlbWFuZENhcGFjaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRPbkRlbWFuZENhcGFjaXR5ID0gdGhpcy5fdGFyZ2V0T25EZW1hbmRDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0U3BvdENhcGFjaXR5ID0gdGhpcy5fdGFyZ2V0U3BvdENhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VUeXBlQ29uZmlncyA9IHRoaXMuX2luc3RhbmNlVHlwZUNvbmZpZ3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGF1bmNoU3BlY2lmaWNhdGlvbnMgPSB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXJnZXRTcG90Q2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGVDb25maWdzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl90YXJnZXRPbkRlbWFuZENhcGFjaXR5ID0gdmFsdWUudGFyZ2V0T25EZW1hbmRDYXBhY2l0eTtcbiAgICAgIHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eSA9IHZhbHVlLnRhcmdldFNwb3RDYXBhY2l0eTtcbiAgICAgIHRoaXMuX2luc3RhbmNlVHlwZUNvbmZpZ3MgPSB2YWx1ZS5pbnN0YW5jZVR5cGVDb25maWdzO1xuICAgICAgdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmxhdW5jaFNwZWNpZmljYXRpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHRhcmdldF9vbl9kZW1hbmRfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0T25EZW1hbmRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0T25EZW1hbmRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF9vbl9kZW1hbmRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldE9uRGVtYW5kQ2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRPbkRlbWFuZENhcGFjaXR5KCkge1xuICAgIHRoaXMuX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldE9uRGVtYW5kQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0T25EZW1hbmRDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIHRhcmdldF9zcG90X2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldFNwb3RDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0U3BvdENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFyZ2V0X3Nwb3RfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFNwb3RDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFyZ2V0U3BvdENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0U3BvdENhcGFjaXR5KCkge1xuICAgIHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0U3BvdENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGVfY29uZmlncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGVDb25maWdzPzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzW107IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUNvbmZpZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGVfY29uZmlncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZUNvbmZpZ3ModmFsdWU6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc1tdKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZUNvbmZpZ3MoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlQ29uZmlnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGVDb25maWdzO1xuICB9XG5cbiAgLy8gbGF1bmNoX3NwZWNpZmljYXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFNwZWNpZmljYXRpb25zID0gbmV3IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibGF1bmNoX3NwZWNpZmljYXRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFNwZWNpZmljYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0TGF1bmNoU3BlY2lmaWNhdGlvbnModmFsdWU6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnMpIHtcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoU3BlY2lmaWNhdGlvbnMoKSB7XG4gICAgdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoU3BlY2lmaWNhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoU3BlY2lmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cEVic0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVzUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cEVic0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwRWJzQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW9wczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pb3BzKSxcbiAgICBzaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdm9sdW1lc19wZXJfaW5zdGFuY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lc1Blckluc3RhbmNlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzQ29uZmlnPzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBFYnNDb25maWdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBPdXRwdXRSZWZlcmVuY2UgfCBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJpZF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaWRQcmljZSksXG4gICAgaW5zdGFuY2VfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VDb3VudCksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgZWJzX2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cEVic0NvbmZpZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmVic0NvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9iaWRQcmljZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmlkUHJpY2UgPSB0aGlzLl9iaWRQcmljZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlQ291bnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlQ291bnQgPSB0aGlzLl9pbnN0YW5jZUNvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZVR5cGUgPSB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vic0NvbmZpZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZWJzQ29uZmlnID0gdGhpcy5fZWJzQ29uZmlnO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXAgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9iaWRQcmljZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luc3RhbmNlQ291bnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZWJzQ29uZmlnID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9iaWRQcmljZSA9IHZhbHVlLmJpZFByaWNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VDb3VudCA9IHZhbHVlLmluc3RhbmNlQ291bnQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB2YWx1ZS5pbnN0YW5jZVR5cGU7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX2Vic0NvbmZpZyA9IHZhbHVlLmVic0NvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBiaWRfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmlkUHJpY2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJpZFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYmlkX3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBiaWRQcmljZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmlkUHJpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCaWRQcmljZSgpIHtcbiAgICB0aGlzLl9iaWRQcmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmlkUHJpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmlkUHJpY2U7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZUNvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2VfY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luc3RhbmNlQ291bnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUNvdW50KCkge1xuICAgIHRoaXMuX2luc3RhbmNlQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VDb3VudDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gZWJzX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNDb25maWc/OiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cEVic0NvbmZpZ1tdOyBcbiAgcHVibGljIGdldCBlYnNDb25maWcoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vic19jb25maWcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlYnNDb25maWcodmFsdWU6IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwRWJzQ29uZmlnW10pIHtcbiAgICB0aGlzLl9lYnNDb25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFYnNDb25maWcoKSB7XG4gICAgdGhpcy5fZWJzQ29uZmlnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYnNDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWJzQ29uZmlnO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVtckNsdXN0ZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZW1yX2NsdXN0ZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVtckNsdXN0ZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lbXJfY2x1c3RlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hZGRpdGlvbmFsSW5mbyA9IGNvbmZpZy5hZGRpdGlvbmFsSW5mbztcbiAgICB0aGlzLl9hcHBsaWNhdGlvbnMgPSBjb25maWcuYXBwbGljYXRpb25zO1xuICAgIHRoaXMuX2F1dG9zY2FsaW5nUm9sZSA9IGNvbmZpZy5hdXRvc2NhbGluZ1JvbGU7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnMgPSBjb25maWcuY29uZmlndXJhdGlvbnM7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnNKc29uID0gY29uZmlnLmNvbmZpZ3VyYXRpb25zSnNvbjtcbiAgICB0aGlzLl9jdXN0b21BbWlJZCA9IGNvbmZpZy5jdXN0b21BbWlJZDtcbiAgICB0aGlzLl9lYnNSb290Vm9sdW1lU2l6ZSA9IGNvbmZpZy5lYnNSb290Vm9sdW1lU2l6ZTtcbiAgICB0aGlzLl9rZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHMgPSBjb25maWcua2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzO1xuICAgIHRoaXMuX2xvZ0VuY3J5cHRpb25LbXNLZXlJZCA9IGNvbmZpZy5sb2dFbmNyeXB0aW9uS21zS2V5SWQ7XG4gICAgdGhpcy5fbG9nVXJpID0gY29uZmlnLmxvZ1VyaTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcmVsZWFzZUxhYmVsID0gY29uZmlnLnJlbGVhc2VMYWJlbDtcbiAgICB0aGlzLl9zY2FsZURvd25CZWhhdmlvciA9IGNvbmZpZy5zY2FsZURvd25CZWhhdmlvcjtcbiAgICB0aGlzLl9zZWN1cml0eUNvbmZpZ3VyYXRpb24gPSBjb25maWcuc2VjdXJpdHlDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3NlcnZpY2VSb2xlID0gY29uZmlnLnNlcnZpY2VSb2xlO1xuICAgIHRoaXMuX3N0ZXAgPSBjb25maWcuc3RlcDtcbiAgICB0aGlzLl9zdGVwQ29uY3VycmVuY3lMZXZlbCA9IGNvbmZpZy5zdGVwQ29uY3VycmVuY3lMZXZlbDtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3Rlcm1pbmF0aW9uUHJvdGVjdGlvbiA9IGNvbmZpZy50ZXJtaW5hdGlvblByb3RlY3Rpb247XG4gICAgdGhpcy5fdmlzaWJsZVRvQWxsVXNlcnMgPSBjb25maWcudmlzaWJsZVRvQWxsVXNlcnM7XG4gICAgdGhpcy5fYXV0b1Rlcm1pbmF0aW9uUG9saWN5LmludGVybmFsVmFsdWUgPSBjb25maWcuYXV0b1Rlcm1pbmF0aW9uUG9saWN5O1xuICAgIHRoaXMuX2Jvb3RzdHJhcEFjdGlvbiA9IGNvbmZpZy5ib290c3RyYXBBY3Rpb247XG4gICAgdGhpcy5fY29yZUluc3RhbmNlRmxlZXQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb3JlSW5zdGFuY2VGbGVldDtcbiAgICB0aGlzLl9jb3JlSW5zdGFuY2VHcm91cC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvcmVJbnN0YW5jZUdyb3VwO1xuICAgIHRoaXMuX2VjMkF0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lYzJBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2tlcmJlcm9zQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmtlcmJlcm9zQXR0cmlidXRlcztcbiAgICB0aGlzLl9tYXN0ZXJJbnN0YW5jZUZsZWV0LmludGVybmFsVmFsdWUgPSBjb25maWcubWFzdGVySW5zdGFuY2VGbGVldDtcbiAgICB0aGlzLl9tYXN0ZXJJbnN0YW5jZUdyb3VwLmludGVybmFsVmFsdWUgPSBjb25maWcubWFzdGVySW5zdGFuY2VHcm91cDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWRkaXRpb25hbF9pbmZvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FkZGl0aW9uYWxJbmZvPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhZGRpdGlvbmFsSW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FkZGl0aW9uYWxfaW5mbycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWRkaXRpb25hbEluZm8odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxJbmZvID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWRkaXRpb25hbEluZm8oKSB7XG4gICAgdGhpcy5fYWRkaXRpb25hbEluZm8gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkZGl0aW9uYWxJbmZvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZGl0aW9uYWxJbmZvO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXBwbGljYXRpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBsaWNhdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25zKCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9ucztcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b3NjYWxpbmdfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvc2NhbGluZ1JvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dG9zY2FsaW5nUm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dG9zY2FsaW5nX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9zY2FsaW5nUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0b3NjYWxpbmdSb2xlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b3NjYWxpbmdSb2xlKCkge1xuICAgIHRoaXMuX2F1dG9zY2FsaW5nUm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdSb2xlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9zY2FsaW5nUm9sZTtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbHVzdGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX3N0YXRlJyk7XG4gIH1cblxuICAvLyBjb25maWd1cmF0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9ucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWd1cmF0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmlndXJhdGlvbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmlndXJhdGlvbnMoKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25zO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbnNfanNvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9uc0pzb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25zSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25zX2pzb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZpZ3VyYXRpb25zSnNvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbnNKc29uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmlndXJhdGlvbnNKc29uKCkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25zSnNvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbnNKc29uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25zSnNvbjtcbiAgfVxuXG4gIC8vIGN1c3RvbV9hbWlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tQW1pSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUFtaUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX2FtaV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tQW1pSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbUFtaUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tQW1pSWQoKSB7XG4gICAgdGhpcy5fY3VzdG9tQW1pSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUFtaUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUFtaUlkO1xuICB9XG5cbiAgLy8gZWJzX3Jvb3Rfdm9sdW1lX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzUm9vdFZvbHVtZVNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGVic1Jvb3RWb2x1bWVTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZWJzX3Jvb3Rfdm9sdW1lX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic1Jvb3RWb2x1bWVTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9lYnNSb290Vm9sdW1lU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic1Jvb3RWb2x1bWVTaXplKCkge1xuICAgIHRoaXMuX2Vic1Jvb3RWb2x1bWVTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYnNSb290Vm9sdW1lU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNSb290Vm9sdW1lU2l6ZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrZWVwX2pvYl9mbG93X2FsaXZlX3doZW5fbm9fc3RlcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGtlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdrZWVwX2pvYl9mbG93X2FsaXZlX3doZW5fbm9fc3RlcHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBrZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2tlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwcygpIHtcbiAgICB0aGlzLl9rZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtlZXBKb2JGbG93QWxpdmVXaGVuTm9TdGVwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZWVwSm9iRmxvd0FsaXZlV2hlbk5vU3RlcHM7XG4gIH1cblxuICAvLyBsb2dfZW5jcnlwdGlvbl9rbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0VuY3J5cHRpb25LbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nRW5jcnlwdGlvbkttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2VuY3J5cHRpb25fa21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nRW5jcnlwdGlvbkttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dFbmNyeXB0aW9uS21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dFbmNyeXB0aW9uS21zS2V5SWQoKSB7XG4gICAgdGhpcy5fbG9nRW5jcnlwdGlvbkttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dFbmNyeXB0aW9uS21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nRW5jcnlwdGlvbkttc0tleUlkO1xuICB9XG5cbiAgLy8gbG9nX3VyaSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dVcmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ1VyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ191cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ1VyaSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nVXJpID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nVXJpKCkge1xuICAgIHRoaXMuX2xvZ1VyaSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nVXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1VyaTtcbiAgfVxuXG4gIC8vIG1hc3Rlcl9wdWJsaWNfZG5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFzdGVyUHVibGljRG5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFzdGVyX3B1YmxpY19kbnMnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcmVsZWFzZV9sYWJlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWxlYXNlTGFiZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlbGVhc2VMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlbGVhc2VfbGFiZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlbGVhc2VMYWJlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVsZWFzZUxhYmVsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlbGVhc2VMYWJlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWxlYXNlTGFiZWw7XG4gIH1cblxuICAvLyBzY2FsZV9kb3duX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NhbGVEb3duQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjYWxlRG93bkJlaGF2aW9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NhbGVfZG93bl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NhbGVEb3duQmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjYWxlRG93bkJlaGF2aW9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NhbGVEb3duQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5fc2NhbGVEb3duQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjYWxlRG93bkJlaGF2aW9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlRG93bkJlaGF2aW9yO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eUNvbmZpZ3VyYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3VyaXR5X2NvbmZpZ3VyYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5Q29uZmlndXJhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NlY3VyaXR5Q29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5Q29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vIHNlcnZpY2Vfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlUm9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VSb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlUm9sZTtcbiAgfVxuXG4gIC8vIHN0ZXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGVwPzogRW1yQ2x1c3RlclN0ZXBbXTsgXG4gIHB1YmxpYyBnZXQgc3RlcCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RlcCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0ZXAodmFsdWU6IEVtckNsdXN0ZXJTdGVwW10pIHtcbiAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RlcCgpIHtcbiAgICB0aGlzLl9zdGVwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGVwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0ZXA7XG4gIH1cblxuICAvLyBzdGVwX2NvbmN1cnJlbmN5X2xldmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0ZXBDb25jdXJyZW5jeUxldmVsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBzdGVwQ29uY3VycmVuY3lMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0ZXBfY29uY3VycmVuY3lfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0ZXBDb25jdXJyZW5jeUxldmVsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGVwQ29uY3VycmVuY3lMZXZlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0ZXBDb25jdXJyZW5jeUxldmVsKCkge1xuICAgIHRoaXMuX3N0ZXBDb25jdXJyZW5jeUxldmVsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGVwQ29uY3VycmVuY3lMZXZlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGVwQ29uY3VycmVuY3lMZXZlbDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0ZXJtaW5hdGlvbl9wcm90ZWN0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVybWluYXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0ZXJtaW5hdGlvblByb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndGVybWluYXRpb25fcHJvdGVjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlcm1pbmF0aW9uUHJvdGVjdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGVybWluYXRpb25Qcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGVybWluYXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX3Rlcm1pbmF0aW9uUHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVybWluYXRpb25Qcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm1pbmF0aW9uUHJvdGVjdGlvbjtcbiAgfVxuXG4gIC8vIHZpc2libGVfdG9fYWxsX3VzZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Zpc2libGVUb0FsbFVzZXJzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB2aXNpYmxlVG9BbGxVc2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd2aXNpYmxlX3RvX2FsbF91c2VycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHZpc2libGVUb0FsbFVzZXJzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl92aXNpYmxlVG9BbGxVc2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZpc2libGVUb0FsbFVzZXJzKCkge1xuICAgIHRoaXMuX3Zpc2libGVUb0FsbFVzZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aXNpYmxlVG9BbGxVc2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlVG9BbGxVc2VycztcbiAgfVxuXG4gIC8vIGF1dG9fdGVybWluYXRpb25fcG9saWN5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9UZXJtaW5hdGlvblBvbGljeSA9IG5ldyBFbXJDbHVzdGVyQXV0b1Rlcm1pbmF0aW9uUG9saWN5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF1dG9fdGVybWluYXRpb25fcG9saWN5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1dG9UZXJtaW5hdGlvblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1Rlcm1pbmF0aW9uUG9saWN5O1xuICB9XG4gIHB1YmxpYyBwdXRBdXRvVGVybWluYXRpb25Qb2xpY3kodmFsdWU6IEVtckNsdXN0ZXJBdXRvVGVybWluYXRpb25Qb2xpY3kpIHtcbiAgICB0aGlzLl9hdXRvVGVybWluYXRpb25Qb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9UZXJtaW5hdGlvblBvbGljeSgpIHtcbiAgICB0aGlzLl9hdXRvVGVybWluYXRpb25Qb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1Rlcm1pbmF0aW9uUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9UZXJtaW5hdGlvblBvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYm9vdHN0cmFwX2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ib290c3RyYXBBY3Rpb24/OiBFbXJDbHVzdGVyQm9vdHN0cmFwQWN0aW9uW107IFxuICBwdWJsaWMgZ2V0IGJvb3RzdHJhcEFjdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYm9vdHN0cmFwX2FjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJvb3RzdHJhcEFjdGlvbih2YWx1ZTogRW1yQ2x1c3RlckJvb3RzdHJhcEFjdGlvbltdKSB7XG4gICAgdGhpcy5fYm9vdHN0cmFwQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Qm9vdHN0cmFwQWN0aW9uKCkge1xuICAgIHRoaXMuX2Jvb3RzdHJhcEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYm9vdHN0cmFwQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jvb3RzdHJhcEFjdGlvbjtcbiAgfVxuXG4gIC8vIGNvcmVfaW5zdGFuY2VfZmxlZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29yZUluc3RhbmNlRmxlZXQgPSBuZXcgRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNvcmVfaW5zdGFuY2VfZmxlZXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29yZUluc3RhbmNlRmxlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVJbnN0YW5jZUZsZWV0O1xuICB9XG4gIHB1YmxpYyBwdXRDb3JlSW5zdGFuY2VGbGVldCh2YWx1ZTogRW1yQ2x1c3RlckNvcmVJbnN0YW5jZUZsZWV0KSB7XG4gICAgdGhpcy5fY29yZUluc3RhbmNlRmxlZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcmVJbnN0YW5jZUZsZWV0KCkge1xuICAgIHRoaXMuX2NvcmVJbnN0YW5jZUZsZWV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcmVJbnN0YW5jZUZsZWV0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVJbnN0YW5jZUZsZWV0LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjb3JlX2luc3RhbmNlX2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcmVJbnN0YW5jZUdyb3VwID0gbmV3IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb3JlX2luc3RhbmNlX2dyb3VwXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvcmVJbnN0YW5jZUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JlSW5zdGFuY2VHcm91cDtcbiAgfVxuICBwdWJsaWMgcHV0Q29yZUluc3RhbmNlR3JvdXAodmFsdWU6IEVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cCkge1xuICAgIHRoaXMuX2NvcmVJbnN0YW5jZUdyb3VwLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3JlSW5zdGFuY2VHcm91cCgpIHtcbiAgICB0aGlzLl9jb3JlSW5zdGFuY2VHcm91cC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3JlSW5zdGFuY2VHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JlSW5zdGFuY2VHcm91cC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZWMyX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWMyQXR0cmlidXRlcyA9IG5ldyBFbXJDbHVzdGVyRWMyQXR0cmlidXRlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJlYzJfYXR0cmlidXRlc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlYzJBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9lYzJBdHRyaWJ1dGVzO1xuICB9XG4gIHB1YmxpYyBwdXRFYzJBdHRyaWJ1dGVzKHZhbHVlOiBFbXJDbHVzdGVyRWMyQXR0cmlidXRlcykge1xuICAgIHRoaXMuX2VjMkF0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVjMkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fZWMyQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYzJBdHRyaWJ1dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VjMkF0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGtlcmJlcm9zX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2VyYmVyb3NBdHRyaWJ1dGVzID0gbmV3IEVtckNsdXN0ZXJLZXJiZXJvc0F0dHJpYnV0ZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwia2VyYmVyb3NfYXR0cmlidXRlc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBrZXJiZXJvc0F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tlcmJlcm9zQXR0cmlidXRlcztcbiAgfVxuICBwdWJsaWMgcHV0S2VyYmVyb3NBdHRyaWJ1dGVzKHZhbHVlOiBFbXJDbHVzdGVyS2VyYmVyb3NBdHRyaWJ1dGVzKSB7XG4gICAgdGhpcy5fa2VyYmVyb3NBdHRyaWJ1dGVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLZXJiZXJvc0F0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fa2VyYmVyb3NBdHRyaWJ1dGVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtlcmJlcm9zQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXJiZXJvc0F0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1hc3Rlcl9pbnN0YW5jZV9mbGVldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXN0ZXJJbnN0YW5jZUZsZWV0ID0gbmV3IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm1hc3Rlcl9pbnN0YW5jZV9mbGVldFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYXN0ZXJJbnN0YW5jZUZsZWV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJJbnN0YW5jZUZsZWV0O1xuICB9XG4gIHB1YmxpYyBwdXRNYXN0ZXJJbnN0YW5jZUZsZWV0KHZhbHVlOiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VGbGVldCkge1xuICAgIHRoaXMuX21hc3Rlckluc3RhbmNlRmxlZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hc3Rlckluc3RhbmNlRmxlZXQoKSB7XG4gICAgdGhpcy5fbWFzdGVySW5zdGFuY2VGbGVldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXN0ZXJJbnN0YW5jZUZsZWV0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hc3Rlckluc3RhbmNlRmxlZXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1hc3Rlcl9pbnN0YW5jZV9ncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXN0ZXJJbnN0YW5jZUdyb3VwID0gbmV3IEVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUdyb3VwT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm1hc3Rlcl9pbnN0YW5jZV9ncm91cFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYXN0ZXJJbnN0YW5jZUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJJbnN0YW5jZUdyb3VwO1xuICB9XG4gIHB1YmxpYyBwdXRNYXN0ZXJJbnN0YW5jZUdyb3VwKHZhbHVlOiBFbXJDbHVzdGVyTWFzdGVySW5zdGFuY2VHcm91cCkge1xuICAgIHRoaXMuX21hc3Rlckluc3RhbmNlR3JvdXAuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hc3Rlckluc3RhbmNlR3JvdXAoKSB7XG4gICAgdGhpcy5fbWFzdGVySW5zdGFuY2VHcm91cC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXN0ZXJJbnN0YW5jZUdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hc3Rlckluc3RhbmNlR3JvdXAuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkaXRpb25hbF9pbmZvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hZGRpdGlvbmFsSW5mbyksXG4gICAgICBhcHBsaWNhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2FwcGxpY2F0aW9ucyksXG4gICAgICBhdXRvc2NhbGluZ19yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdXRvc2NhbGluZ1JvbGUpLFxuICAgICAgY29uZmlndXJhdGlvbnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbmZpZ3VyYXRpb25zKSxcbiAgICAgIGNvbmZpZ3VyYXRpb25zX2pzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbmZpZ3VyYXRpb25zSnNvbiksXG4gICAgICBjdXN0b21fYW1pX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jdXN0b21BbWlJZCksXG4gICAgICBlYnNfcm9vdF92b2x1bWVfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZWJzUm9vdFZvbHVtZVNpemUpLFxuICAgICAga2VlcF9qb2JfZmxvd19hbGl2ZV93aGVuX25vX3N0ZXBzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fa2VlcEpvYkZsb3dBbGl2ZVdoZW5Ob1N0ZXBzKSxcbiAgICAgIGxvZ19lbmNyeXB0aW9uX2ttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xvZ0VuY3J5cHRpb25LbXNLZXlJZCksXG4gICAgICBsb2dfdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9sb2dVcmkpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICByZWxlYXNlX2xhYmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZWxlYXNlTGFiZWwpLFxuICAgICAgc2NhbGVfZG93bl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2NhbGVEb3duQmVoYXZpb3IpLFxuICAgICAgc2VjdXJpdHlfY29uZmlndXJhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VjdXJpdHlDb25maWd1cmF0aW9uKSxcbiAgICAgIHNlcnZpY2Vfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZVJvbGUpLFxuICAgICAgc3RlcDogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyU3RlcFRvVGVycmFmb3JtKSh0aGlzLl9zdGVwKSxcbiAgICAgIHN0ZXBfY29uY3VycmVuY3lfbGV2ZWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3N0ZXBDb25jdXJyZW5jeUxldmVsKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGVybWluYXRpb25fcHJvdGVjdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Rlcm1pbmF0aW9uUHJvdGVjdGlvbiksXG4gICAgICB2aXNpYmxlX3RvX2FsbF91c2VyczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3Zpc2libGVUb0FsbFVzZXJzKSxcbiAgICAgIGF1dG9fdGVybWluYXRpb25fcG9saWN5OiBlbXJDbHVzdGVyQXV0b1Rlcm1pbmF0aW9uUG9saWN5VG9UZXJyYWZvcm0odGhpcy5fYXV0b1Rlcm1pbmF0aW9uUG9saWN5LmludGVybmFsVmFsdWUpLFxuICAgICAgYm9vdHN0cmFwX2FjdGlvbjogY2RrdGYubGlzdE1hcHBlcihlbXJDbHVzdGVyQm9vdHN0cmFwQWN0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2Jvb3RzdHJhcEFjdGlvbiksXG4gICAgICBjb3JlX2luc3RhbmNlX2ZsZWV0OiBlbXJDbHVzdGVyQ29yZUluc3RhbmNlRmxlZXRUb1RlcnJhZm9ybSh0aGlzLl9jb3JlSW5zdGFuY2VGbGVldC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNvcmVfaW5zdGFuY2VfZ3JvdXA6IGVtckNsdXN0ZXJDb3JlSW5zdGFuY2VHcm91cFRvVGVycmFmb3JtKHRoaXMuX2NvcmVJbnN0YW5jZUdyb3VwLmludGVybmFsVmFsdWUpLFxuICAgICAgZWMyX2F0dHJpYnV0ZXM6IGVtckNsdXN0ZXJFYzJBdHRyaWJ1dGVzVG9UZXJyYWZvcm0odGhpcy5fZWMyQXR0cmlidXRlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGtlcmJlcm9zX2F0dHJpYnV0ZXM6IGVtckNsdXN0ZXJLZXJiZXJvc0F0dHJpYnV0ZXNUb1RlcnJhZm9ybSh0aGlzLl9rZXJiZXJvc0F0dHJpYnV0ZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBtYXN0ZXJfaW5zdGFuY2VfZmxlZXQ6IGVtckNsdXN0ZXJNYXN0ZXJJbnN0YW5jZUZsZWV0VG9UZXJyYWZvcm0odGhpcy5fbWFzdGVySW5zdGFuY2VGbGVldC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG1hc3Rlcl9pbnN0YW5jZV9ncm91cDogZW1yQ2x1c3Rlck1hc3Rlckluc3RhbmNlR3JvdXBUb1RlcnJhZm9ybSh0aGlzLl9tYXN0ZXJJbnN0YW5jZUdyb3VwLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==