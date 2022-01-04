"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotFleetRequest = exports.SpotFleetRequestTimeoutsOutputReference = exports.spotFleetRequestTimeoutsToTerraform = exports.SpotFleetRequestSpotMaintenanceStrategiesOutputReference = exports.spotFleetRequestSpotMaintenanceStrategiesToTerraform = exports.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference = exports.spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform = exports.spotFleetRequestLaunchTemplateConfigToTerraform = exports.spotFleetRequestLaunchTemplateConfigOverridesToTerraform = exports.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference = exports.spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform = exports.spotFleetRequestLaunchSpecificationToTerraform = exports.spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform = exports.spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform = exports.spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform = spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform;
function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
    };
}
exports.spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform = spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform;
function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform = spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform;
function spotFleetRequestLaunchSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ami: cdktf.stringToTerraform(struct.ami),
        associate_public_ip_address: cdktf.booleanToTerraform(struct.associatePublicIpAddress),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        ebs_optimized: cdktf.booleanToTerraform(struct.ebsOptimized),
        iam_instance_profile: cdktf.stringToTerraform(struct.iamInstanceProfile),
        iam_instance_profile_arn: cdktf.stringToTerraform(struct.iamInstanceProfileArn),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        key_name: cdktf.stringToTerraform(struct.keyName),
        monitoring: cdktf.booleanToTerraform(struct.monitoring),
        placement_group: cdktf.stringToTerraform(struct.placementGroup),
        placement_tenancy: cdktf.stringToTerraform(struct.placementTenancy),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        user_data: cdktf.stringToTerraform(struct.userData),
        vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.vpcSecurityGroupIds),
        weighted_capacity: cdktf.stringToTerraform(struct.weightedCapacity),
        ebs_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform)(struct.ebsBlockDevice),
        ephemeral_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform)(struct.ephemeralBlockDevice),
        root_block_device: cdktf.listMapper(spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform)(struct.rootBlockDevice),
    };
}
exports.spotFleetRequestLaunchSpecificationToTerraform = spotFleetRequestLaunchSpecificationToTerraform;
function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform = spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform;
/**
 * @stability stable
 */
class SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._id) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
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
            this._id = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._id = value.id;
            this._name = value.name;
            this._version = value.version;
        }
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
exports.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference = SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference[_a] = { fqn: "@cdktf/provider-aws.ec2.SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference", version: "3.0.1" };
function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        priority: cdktf.numberToTerraform(struct.priority),
        spot_price: cdktf.stringToTerraform(struct.spotPrice),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
        weighted_capacity: cdktf.numberToTerraform(struct.weightedCapacity),
    };
}
exports.spotFleetRequestLaunchTemplateConfigOverridesToTerraform = spotFleetRequestLaunchTemplateConfigOverridesToTerraform;
function spotFleetRequestLaunchTemplateConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        launch_template_specification: spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct.launchTemplateSpecification),
        overrides: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigOverridesToTerraform)(struct.overrides),
    };
}
exports.spotFleetRequestLaunchTemplateConfigToTerraform = spotFleetRequestLaunchTemplateConfigToTerraform;
function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        replacement_strategy: cdktf.stringToTerraform(struct.replacementStrategy),
    };
}
exports.spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform = spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform;
/**
 * @stability stable
 */
class SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
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
        if (this._replacementStrategy) {
            hasAnyValues = true;
            internalValueResult.replacementStrategy = this._replacementStrategy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._replacementStrategy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._replacementStrategy = value.replacementStrategy;
        }
    }
    /**
     * @stability stable
     */
    get replacementStrategy() {
        return this.getStringAttribute('replacement_strategy');
    }
    /**
     * @stability stable
     */
    set replacementStrategy(value) {
        this._replacementStrategy = value;
    }
    /**
     * @stability stable
     */
    resetReplacementStrategy() {
        this._replacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get replacementStrategyInput() {
        return this._replacementStrategy;
    }
}
exports.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference = SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference[_b] = { fqn: "@cdktf/provider-aws.ec2.SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference", version: "3.0.1" };
function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_rebalance: spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct.capacityRebalance),
    };
}
exports.spotFleetRequestSpotMaintenanceStrategiesToTerraform = spotFleetRequestSpotMaintenanceStrategiesToTerraform;
/**
 * @stability stable
 */
class SpotFleetRequestSpotMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // capacity_rebalance - computed: false, optional: true, required: false
        this._capacityRebalance = new SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference(this, "capacity_rebalance", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_f = this._capacityRebalance) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.capacityRebalance = (_g = this._capacityRebalance) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._capacityRebalance.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._capacityRebalance.internalValue = value.capacityRebalance;
        }
    }
    /**
     * @stability stable
     */
    get capacityRebalance() {
        return this._capacityRebalance;
    }
    /**
     * @stability stable
     */
    putCapacityRebalance(value) {
        this._capacityRebalance.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCapacityRebalance() {
        this._capacityRebalance.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityRebalanceInput() {
        return this._capacityRebalance.internalValue;
    }
}
exports.SpotFleetRequestSpotMaintenanceStrategiesOutputReference = SpotFleetRequestSpotMaintenanceStrategiesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SpotFleetRequestSpotMaintenanceStrategiesOutputReference[_c] = { fqn: "@cdktf/provider-aws.ec2.SpotFleetRequestSpotMaintenanceStrategiesOutputReference", version: "3.0.1" };
function spotFleetRequestTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
exports.spotFleetRequestTimeoutsToTerraform = spotFleetRequestTimeoutsToTerraform;
/**
 * @stability stable
 */
class SpotFleetRequestTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._create) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
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
            this._create = undefined;
            this._delete = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
        }
    }
    /**
     * @stability stable
     */
    get create() {
        return this.getStringAttribute('create');
    }
    /**
     * @stability stable
     */
    set create(value) {
        this._create = value;
    }
    /**
     * @stability stable
     */
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createInput() {
        return this._create;
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
exports.SpotFleetRequestTimeoutsOutputReference = SpotFleetRequestTimeoutsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SpotFleetRequestTimeoutsOutputReference[_d] = { fqn: "@cdktf/provider-aws.ec2.SpotFleetRequestTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request}.
 *
 * @stability stable
 */
class SpotFleetRequest extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html aws_spot_fleet_request} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_spot_fleet_request',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // spot_maintenance_strategies - computed: false, optional: true, required: false
        this._spotMaintenanceStrategies = new SpotFleetRequestSpotMaintenanceStrategiesOutputReference(this, "spot_maintenance_strategies", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new SpotFleetRequestTimeoutsOutputReference(this, "timeouts", true);
        this._allocationStrategy = config.allocationStrategy;
        this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
        this._fleetType = config.fleetType;
        this._iamFleetRole = config.iamFleetRole;
        this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
        this._instancePoolsToUseCount = config.instancePoolsToUseCount;
        this._loadBalancers = config.loadBalancers;
        this._onDemandAllocationStrategy = config.onDemandAllocationStrategy;
        this._onDemandMaxTotalPrice = config.onDemandMaxTotalPrice;
        this._onDemandTargetCapacity = config.onDemandTargetCapacity;
        this._replaceUnhealthyInstances = config.replaceUnhealthyInstances;
        this._spotPrice = config.spotPrice;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._targetCapacity = config.targetCapacity;
        this._targetGroupArns = config.targetGroupArns;
        this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
        this._validFrom = config.validFrom;
        this._validUntil = config.validUntil;
        this._waitForFulfillment = config.waitForFulfillment;
        this._launchSpecification = config.launchSpecification;
        this._launchTemplateConfig = config.launchTemplateConfig;
        this._spotMaintenanceStrategies.internalValue = config.spotMaintenanceStrategies;
        this._timeouts.internalValue = config.timeouts;
    }
    /**
     * @stability stable
     */
    get allocationStrategy() {
        return this.getStringAttribute('allocation_strategy');
    }
    /**
     * @stability stable
     */
    set allocationStrategy(value) {
        this._allocationStrategy = value;
    }
    /**
     * @stability stable
     */
    resetAllocationStrategy() {
        this._allocationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allocationStrategyInput() {
        return this._allocationStrategy;
    }
    // client_token - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clientToken() {
        return this.getStringAttribute('client_token');
    }
    /**
     * @stability stable
     */
    get excessCapacityTerminationPolicy() {
        return this.getStringAttribute('excess_capacity_termination_policy');
    }
    /**
     * @stability stable
     */
    set excessCapacityTerminationPolicy(value) {
        this._excessCapacityTerminationPolicy = value;
    }
    /**
     * @stability stable
     */
    resetExcessCapacityTerminationPolicy() {
        this._excessCapacityTerminationPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get excessCapacityTerminationPolicyInput() {
        return this._excessCapacityTerminationPolicy;
    }
    /**
     * @stability stable
     */
    get fleetType() {
        return this.getStringAttribute('fleet_type');
    }
    /**
     * @stability stable
     */
    set fleetType(value) {
        this._fleetType = value;
    }
    /**
     * @stability stable
     */
    resetFleetType() {
        this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fleetTypeInput() {
        return this._fleetType;
    }
    /**
     * @stability stable
     */
    get iamFleetRole() {
        return this.getStringAttribute('iam_fleet_role');
    }
    /**
     * @stability stable
     */
    set iamFleetRole(value) {
        this._iamFleetRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamFleetRoleInput() {
        return this._iamFleetRole;
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
    get instanceInterruptionBehaviour() {
        return this.getStringAttribute('instance_interruption_behaviour');
    }
    /**
     * @stability stable
     */
    set instanceInterruptionBehaviour(value) {
        this._instanceInterruptionBehaviour = value;
    }
    /**
     * @stability stable
     */
    resetInstanceInterruptionBehaviour() {
        this._instanceInterruptionBehaviour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceInterruptionBehaviourInput() {
        return this._instanceInterruptionBehaviour;
    }
    /**
     * @stability stable
     */
    get instancePoolsToUseCount() {
        return this.getNumberAttribute('instance_pools_to_use_count');
    }
    /**
     * @stability stable
     */
    set instancePoolsToUseCount(value) {
        this._instancePoolsToUseCount = value;
    }
    /**
     * @stability stable
     */
    resetInstancePoolsToUseCount() {
        this._instancePoolsToUseCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instancePoolsToUseCountInput() {
        return this._instancePoolsToUseCount;
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
    get onDemandMaxTotalPrice() {
        return this.getStringAttribute('on_demand_max_total_price');
    }
    /**
     * @stability stable
     */
    set onDemandMaxTotalPrice(value) {
        this._onDemandMaxTotalPrice = value;
    }
    /**
     * @stability stable
     */
    resetOnDemandMaxTotalPrice() {
        this._onDemandMaxTotalPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onDemandMaxTotalPriceInput() {
        return this._onDemandMaxTotalPrice;
    }
    /**
     * @stability stable
     */
    get onDemandTargetCapacity() {
        return this.getNumberAttribute('on_demand_target_capacity');
    }
    /**
     * @stability stable
     */
    set onDemandTargetCapacity(value) {
        this._onDemandTargetCapacity = value;
    }
    /**
     * @stability stable
     */
    resetOnDemandTargetCapacity() {
        this._onDemandTargetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onDemandTargetCapacityInput() {
        return this._onDemandTargetCapacity;
    }
    /**
     * @stability stable
     */
    get replaceUnhealthyInstances() {
        return this.getBooleanAttribute('replace_unhealthy_instances');
    }
    /**
     * @stability stable
     */
    set replaceUnhealthyInstances(value) {
        this._replaceUnhealthyInstances = value;
    }
    /**
     * @stability stable
     */
    resetReplaceUnhealthyInstances() {
        this._replaceUnhealthyInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get replaceUnhealthyInstancesInput() {
        return this._replaceUnhealthyInstances;
    }
    /**
     * @stability stable
     */
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    /**
     * @stability stable
     */
    set spotPrice(value) {
        this._spotPrice = value;
    }
    /**
     * @stability stable
     */
    resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotPriceInput() {
        return this._spotPrice;
    }
    // spot_request_state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spotRequestState() {
        return this.getStringAttribute('spot_request_state');
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
    get targetCapacity() {
        return this.getNumberAttribute('target_capacity');
    }
    /**
     * @stability stable
     */
    set targetCapacity(value) {
        this._targetCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetCapacityInput() {
        return this._targetCapacity;
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
    get terminateInstancesWithExpiration() {
        return this.getBooleanAttribute('terminate_instances_with_expiration');
    }
    /**
     * @stability stable
     */
    set terminateInstancesWithExpiration(value) {
        this._terminateInstancesWithExpiration = value;
    }
    /**
     * @stability stable
     */
    resetTerminateInstancesWithExpiration() {
        this._terminateInstancesWithExpiration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get terminateInstancesWithExpirationInput() {
        return this._terminateInstancesWithExpiration;
    }
    /**
     * @stability stable
     */
    get validFrom() {
        return this.getStringAttribute('valid_from');
    }
    /**
     * @stability stable
     */
    set validFrom(value) {
        this._validFrom = value;
    }
    /**
     * @stability stable
     */
    resetValidFrom() {
        this._validFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validFromInput() {
        return this._validFrom;
    }
    /**
     * @stability stable
     */
    get validUntil() {
        return this.getStringAttribute('valid_until');
    }
    /**
     * @stability stable
     */
    set validUntil(value) {
        this._validUntil = value;
    }
    /**
     * @stability stable
     */
    resetValidUntil() {
        this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validUntilInput() {
        return this._validUntil;
    }
    /**
     * @stability stable
     */
    get waitForFulfillment() {
        return this.getBooleanAttribute('wait_for_fulfillment');
    }
    /**
     * @stability stable
     */
    set waitForFulfillment(value) {
        this._waitForFulfillment = value;
    }
    /**
     * @stability stable
     */
    resetWaitForFulfillment() {
        this._waitForFulfillment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get waitForFulfillmentInput() {
        return this._waitForFulfillment;
    }
    /**
     * @stability stable
     */
    get launchSpecification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('launch_specification');
    }
    /**
     * @stability stable
     */
    set launchSpecification(value) {
        this._launchSpecification = value;
    }
    /**
     * @stability stable
     */
    resetLaunchSpecification() {
        this._launchSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchSpecificationInput() {
        return this._launchSpecification;
    }
    /**
     * @stability stable
     */
    get launchTemplateConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('launch_template_config');
    }
    /**
     * @stability stable
     */
    set launchTemplateConfig(value) {
        this._launchTemplateConfig = value;
    }
    /**
     * @stability stable
     */
    resetLaunchTemplateConfig() {
        this._launchTemplateConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateConfigInput() {
        return this._launchTemplateConfig;
    }
    /**
     * @stability stable
     */
    get spotMaintenanceStrategies() {
        return this._spotMaintenanceStrategies;
    }
    /**
     * @stability stable
     */
    putSpotMaintenanceStrategies(value) {
        this._spotMaintenanceStrategies.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSpotMaintenanceStrategies() {
        this._spotMaintenanceStrategies.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotMaintenanceStrategiesInput() {
        return this._spotMaintenanceStrategies.internalValue;
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
            allocation_strategy: cdktf.stringToTerraform(this._allocationStrategy),
            excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            iam_fleet_role: cdktf.stringToTerraform(this._iamFleetRole),
            instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
            instance_pools_to_use_count: cdktf.numberToTerraform(this._instancePoolsToUseCount),
            load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
            on_demand_allocation_strategy: cdktf.stringToTerraform(this._onDemandAllocationStrategy),
            on_demand_max_total_price: cdktf.stringToTerraform(this._onDemandMaxTotalPrice),
            on_demand_target_capacity: cdktf.numberToTerraform(this._onDemandTargetCapacity),
            replace_unhealthy_instances: cdktf.booleanToTerraform(this._replaceUnhealthyInstances),
            spot_price: cdktf.stringToTerraform(this._spotPrice),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target_capacity: cdktf.numberToTerraform(this._targetCapacity),
            target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
            terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
            valid_from: cdktf.stringToTerraform(this._validFrom),
            valid_until: cdktf.stringToTerraform(this._validUntil),
            wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
            launch_specification: cdktf.listMapper(spotFleetRequestLaunchSpecificationToTerraform)(this._launchSpecification),
            launch_template_config: cdktf.listMapper(spotFleetRequestLaunchTemplateConfigToTerraform)(this._launchTemplateConfig),
            spot_maintenance_strategies: spotFleetRequestSpotMaintenanceStrategiesToTerraform(this._spotMaintenanceStrategies.internalValue),
            timeouts: spotFleetRequestTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.SpotFleetRequest = SpotFleetRequest;
_e = JSII_RTTI_SYMBOL_1;
SpotFleetRequest[_e] = { fqn: "@cdktf/provider-aws.ec2.SpotFleetRequest", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SpotFleetRequest.tfResourceType = "aws_spot_fleet_request";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdC1mbGVldC1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VjMi9zcG90LWZsZWV0LXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUEwRS9CLFNBQWdCLDREQUE0RCxDQUFDLE1BQTBEO0lBQ3JJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDckQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7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Qy9ELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM5RCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuRixtQ0FBbUMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDO1lBQ3JHLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDhDQUE4QyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pILHNCQUFzQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDckgsMkJBQTJCLEVBQUUsb0RBQW9ELENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztZQUNoSSxRQUFRLEVBQUUsbUNBQW1DLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDNUUsQ0FBQztJQUNKLENBQUM7O0FBamVILDRDQWtlQzs7O0FBaGVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csK0JBQWMsR0FBVyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZsZWV0VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbUZsZWV0Um9sZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvYWRCYWxhbmNlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kTWF4VG90YWxQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvbkRlbWFuZFRhcmdldENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0Q2FwYWNpdHk6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldEdyb3VwQXJucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRGcm9tPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRVbnRpbD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdhaXRGb3JGdWxmaWxsbWVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFNwZWNpZmljYXRpb24/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVDb25maWc/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXM/OiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlT25UZXJtaW5hdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbmFwc2hvdElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm91Z2hwdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICBlbmNyeXB0ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRlZCksXG4gICAgaW9wczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pb3BzKSxcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBzbmFwc2hvdF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbmFwc2hvdElkKSxcbiAgICB0aHJvdWdocHV0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRocm91Z2hwdXQpLFxuICAgIHZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgIHZvbHVtZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZpcnR1YWxOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25FcGhlbWVyYWxCbG9ja0RldmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRldmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU5hbWUpLFxuICAgIHZpcnR1YWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblJvb3RCbG9ja0RldmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZU9uVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm91Z2hwdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFNwZWNpZmljYXRpb25Sb290QmxvY2tEZXZpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIHRocm91Z2hwdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGhyb3VnaHB1dCksXG4gICAgdm9sdW1lX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZSksXG4gICAgdm9sdW1lX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFtaTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic09wdGltaXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbUluc3RhbmNlUHJvZmlsZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWFtSW5zdGFuY2VQcm9maWxlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb25pdG9yaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwbGFjZW1lbnRHcm91cD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYWNlbWVudFRlbmFuY3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdFByaWNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyRGF0YT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2cGNTZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZENhcGFjaXR5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzQmxvY2tEZXZpY2U/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVic0Jsb2NrRGV2aWNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcGhlbWVyYWxCbG9ja0RldmljZT86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRXBoZW1lcmFsQmxvY2tEZXZpY2VbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvb3RCbG9ja0RldmljZT86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYW1pOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFtaSksXG4gICAgYXNzb2NpYXRlX3B1YmxpY19pcF9hZGRyZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MpLFxuICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmUpLFxuICAgIGVic19vcHRpbWl6ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVic09wdGltaXplZCksXG4gICAgaWFtX2luc3RhbmNlX3Byb2ZpbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWFtSW5zdGFuY2VQcm9maWxlKSxcbiAgICBpYW1faW5zdGFuY2VfcHJvZmlsZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWFtSW5zdGFuY2VQcm9maWxlQXJuKSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAga2V5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5TmFtZSksXG4gICAgbW9uaXRvcmluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEubW9uaXRvcmluZyksXG4gICAgcGxhY2VtZW50X2dyb3VwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBsYWNlbWVudEdyb3VwKSxcbiAgICBwbGFjZW1lbnRfdGVuYW5jeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wbGFjZW1lbnRUZW5hbmN5KSxcbiAgICBzcG90X3ByaWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RQcmljZSksXG4gICAgc3VibmV0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICAgIHVzZXJfZGF0YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VyRGF0YSksXG4gICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52cGNTZWN1cml0eUdyb3VwSWRzKSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHRlZENhcGFjaXR5KSxcbiAgICBlYnNfYmxvY2tfZGV2aWNlOiBjZGt0Zi5saXN0TWFwcGVyKHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uRWJzQmxvY2tEZXZpY2VUb1RlcnJhZm9ybSkoc3RydWN0IS5lYnNCbG9ja0RldmljZSksXG4gICAgZXBoZW1lcmFsX2Jsb2NrX2RldmljZTogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbkVwaGVtZXJhbEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0pKHN0cnVjdCEuZXBoZW1lcmFsQmxvY2tEZXZpY2UpLFxuICAgIHJvb3RfYmxvY2tfZGV2aWNlOiBjZGt0Zi5saXN0TWFwcGVyKHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uUm9vdEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0pKHN0cnVjdCEucm9vdEJsb2NrRGV2aWNlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pZCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnTGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWQgPSB0aGlzLl9pZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmVyc2lvbiA9IHRoaXMuX3ZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdMYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pZCA9IHZhbHVlLmlkO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWUudmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5faWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcnNpb24oKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdmFpbGFiaWxpdHlab25lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW9yaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZENhcGFjaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXZhaWxhYmlsaXR5X3pvbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVR5cGUpLFxuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICBzcG90X3ByaWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwb3RQcmljZSksXG4gICAgc3VibmV0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1Ym5ldElkKSxcbiAgICB3ZWlnaHRlZF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS53ZWlnaHRlZENhcGFjaXR5KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZVNwZWNpZmljYXRpb246IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG92ZXJyaWRlcz86IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ092ZXJyaWRlc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGF1bmNoX3RlbXBsYXRlX3NwZWNpZmljYXRpb246IHNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ0xhdW5jaFRlbXBsYXRlU3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubGF1bmNoVGVtcGxhdGVTcGVjaWZpY2F0aW9uKSxcbiAgICBvdmVycmlkZXM6IGNka3RmLmxpc3RNYXBwZXIoc3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnT3ZlcnJpZGVzVG9UZXJyYWZvcm0pKHN0cnVjdCEub3ZlcnJpZGVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwbGFjZW1lbnRTdHJhdGVneT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlT3V0cHV0UmVmZXJlbmNlIHwgU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlcGxhY2VtZW50X3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcGxhY2VtZW50U3RyYXRlZ3kpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0NhcGFjaXR5UmViYWxhbmNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzQ2FwYWNpdHlSZWJhbGFuY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlcGxhY2VtZW50U3RyYXRlZ3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcGxhY2VtZW50U3RyYXRlZ3kgPSB0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlcGxhY2VtZW50U3RyYXRlZ3kgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlcGxhY2VtZW50U3RyYXRlZ3kgPSB2YWx1ZS5yZXBsYWNlbWVudFN0cmF0ZWd5O1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlcGxhY2VtZW50X3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcGxhY2VtZW50U3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcGxhY2VtZW50U3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBsYWNlbWVudF9zdHJhdGVneScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwbGFjZW1lbnRTdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwbGFjZW1lbnRTdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcGxhY2VtZW50U3RyYXRlZ3koKSB7XG4gICAgdGhpcy5fcmVwbGFjZW1lbnRTdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwbGFjZW1lbnRTdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBsYWNlbWVudFN0cmF0ZWd5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcGFjaXR5UmViYWxhbmNlPzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RGbGVldFJlcXVlc3RTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNPdXRwdXRSZWZlcmVuY2UgfCBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhcGFjaXR5X3JlYmFsYW5jZTogc3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZVRvVGVycmFmb3JtKHN0cnVjdCEuY2FwYWNpdHlSZWJhbGFuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2FwYWNpdHlSZWJhbGFuY2U/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcGFjaXR5UmViYWxhbmNlID0gdGhpcy5fY2FwYWNpdHlSZWJhbGFuY2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jYXBhY2l0eVJlYmFsYW5jZTtcbiAgICB9XG4gIH1cblxuICAvLyBjYXBhY2l0eV9yZWJhbGFuY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwYWNpdHlSZWJhbGFuY2UgPSBuZXcgU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjYXBhY2l0eV9yZWJhbGFuY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZWJhbGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlO1xuICB9XG4gIHB1YmxpYyBwdXRDYXBhY2l0eVJlYmFsYW5jZSh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXNDYXBhY2l0eVJlYmFsYW5jZSkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmViYWxhbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlYmFsYW5jZSgpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlYmFsYW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlYmFsYW5jZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIHwgU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgZGVsZXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwb3RGbGVldFJlcXVlc3RUaW1lb3V0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90RmxlZXRSZXF1ZXN0VGltZW91dHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlID0gdGhpcy5fY3JlYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVsZXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90RmxlZXRSZXF1ZXN0VGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgU3BvdEZsZWV0UmVxdWVzdCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zcG90X2ZsZWV0X3JlcXVlc3RcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogU3BvdEZsZWV0UmVxdWVzdENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3Nwb3RfZmxlZXRfcmVxdWVzdCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSBjb25maWcuYWxsb2NhdGlvblN0cmF0ZWd5O1xuICAgIHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kgPSBjb25maWcuZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeTtcbiAgICB0aGlzLl9mbGVldFR5cGUgPSBjb25maWcuZmxlZXRUeXBlO1xuICAgIHRoaXMuX2lhbUZsZWV0Um9sZSA9IGNvbmZpZy5pYW1GbGVldFJvbGU7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIgPSBjb25maWcuaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXI7XG4gICAgdGhpcy5faW5zdGFuY2VQb29sc1RvVXNlQ291bnQgPSBjb25maWcuaW5zdGFuY2VQb29sc1RvVXNlQ291bnQ7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IGNvbmZpZy5sb2FkQmFsYW5jZXJzO1xuICAgIHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ID0gY29uZmlnLm9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5O1xuICAgIHRoaXMuX29uRGVtYW5kTWF4VG90YWxQcmljZSA9IGNvbmZpZy5vbkRlbWFuZE1heFRvdGFsUHJpY2U7XG4gICAgdGhpcy5fb25EZW1hbmRUYXJnZXRDYXBhY2l0eSA9IGNvbmZpZy5vbkRlbWFuZFRhcmdldENhcGFjaXR5O1xuICAgIHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMgPSBjb25maWcucmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcztcbiAgICB0aGlzLl9zcG90UHJpY2UgPSBjb25maWcuc3BvdFByaWNlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdGFyZ2V0Q2FwYWNpdHkgPSBjb25maWcudGFyZ2V0Q2FwYWNpdHk7XG4gICAgdGhpcy5fdGFyZ2V0R3JvdXBBcm5zID0gY29uZmlnLnRhcmdldEdyb3VwQXJucztcbiAgICB0aGlzLl90ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbiA9IGNvbmZpZy50ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbjtcbiAgICB0aGlzLl92YWxpZEZyb20gPSBjb25maWcudmFsaWRGcm9tO1xuICAgIHRoaXMuX3ZhbGlkVW50aWwgPSBjb25maWcudmFsaWRVbnRpbDtcbiAgICB0aGlzLl93YWl0Rm9yRnVsZmlsbG1lbnQgPSBjb25maWcud2FpdEZvckZ1bGZpbGxtZW50O1xuICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb24gPSBjb25maWcubGF1bmNoU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUNvbmZpZyA9IGNvbmZpZy5sYXVuY2hUZW1wbGF0ZUNvbmZpZztcbiAgICB0aGlzLl9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzLmludGVybmFsVmFsdWUgPSBjb25maWcuc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcztcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGxvY2F0aW9uX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG9jYXRpb25TdHJhdGVneT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWxsb2NhdGlvbl9zdHJhdGVneScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb2NhdGlvblN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hbGxvY2F0aW9uU3RyYXRlZ3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbGxvY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGxvY2F0aW9uU3RyYXRlZ3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb2NhdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgLy8gY2xpZW50X3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xpZW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbGllbnRfdG9rZW4nKTtcbiAgfVxuXG4gIC8vIGV4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4Y2Vzc19jYXBhY2l0eV90ZXJtaW5hdGlvbl9wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5KCkge1xuICAgIHRoaXMuX2V4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4Y2Vzc0NhcGFjaXR5VGVybWluYXRpb25Qb2xpY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjZXNzQ2FwYWNpdHlUZXJtaW5hdGlvblBvbGljeTtcbiAgfVxuXG4gIC8vIGZsZWV0X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmxlZXRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmbGVldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmbGVldF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBmbGVldFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZsZWV0VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZsZWV0VHlwZSgpIHtcbiAgICB0aGlzLl9mbGVldFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZsZWV0VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mbGVldFR5cGU7XG4gIH1cblxuICAvLyBpYW1fZmxlZXRfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pYW1GbGVldFJvbGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlhbUZsZWV0Um9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lhbV9mbGVldF9yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpYW1GbGVldFJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbUZsZWV0Um9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYW1GbGVldFJvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtRmxlZXRSb2xlO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvdXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91cicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfcG9vbHNfdG9fdXNlX2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVBvb2xzVG9Vc2VDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2luc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VQb29sc1RvVXNlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VQb29sc1RvVXNlQ291bnQoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VQb29sc1RvVXNlQ291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlUG9vbHNUb1VzZUNvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlUG9vbHNUb1VzZUNvdW50O1xuICB9XG5cbiAgLy8gbG9hZF9iYWxhbmNlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2FkQmFsYW5jZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGxvYWRCYWxhbmNlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbG9hZF9iYWxhbmNlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvYWRCYWxhbmNlcnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvYWRCYWxhbmNlcnMoKSB7XG4gICAgdGhpcy5fbG9hZEJhbGFuY2VycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9hZEJhbGFuY2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkQmFsYW5jZXJzO1xuICB9XG5cbiAgLy8gb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRBbGxvY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KCkge1xuICAgIHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZEFsbG9jYXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIC8vIG9uX2RlbWFuZF9tYXhfdG90YWxfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25EZW1hbmRNYXhUb3RhbFByaWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvbkRlbWFuZE1heFRvdGFsUHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvbl9kZW1hbmRfbWF4X3RvdGFsX3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZE1heFRvdGFsUHJpY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29uRGVtYW5kTWF4VG90YWxQcmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9uRGVtYW5kTWF4VG90YWxQcmljZSgpIHtcbiAgICB0aGlzLl9vbkRlbWFuZE1heFRvdGFsUHJpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kTWF4VG90YWxQcmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkRlbWFuZE1heFRvdGFsUHJpY2U7XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29uRGVtYW5kVGFyZ2V0Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG9uRGVtYW5kVGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvbkRlbWFuZFRhcmdldENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25EZW1hbmRUYXJnZXRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkRlbWFuZFRhcmdldENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uRGVtYW5kVGFyZ2V0Q2FwYWNpdHk7XG4gIH1cblxuICAvLyByZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXBsYWNlX3VuaGVhbHRoeV9pbnN0YW5jZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbGFjZVVuaGVhbHRoeUluc3RhbmNlcygpIHtcbiAgICB0aGlzLl9yZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBsYWNlVW5oZWFsdGh5SW5zdGFuY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXM7XG4gIH1cblxuICAvLyBzcG90X3ByaWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nwb3RQcmljZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3BvdFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9wcmljZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3BvdFByaWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcG90UHJpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90UHJpY2UoKSB7XG4gICAgdGhpcy5fc3BvdFByaWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90UHJpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdFByaWNlO1xuICB9XG5cbiAgLy8gc3BvdF9yZXF1ZXN0X3N0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BvdFJlcXVlc3RTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nwb3RfcmVxdWVzdF9zdGF0ZScpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHRhcmdldF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXJnZXRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXJnZXRDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIHRhcmdldF9ncm91cF9hcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0R3JvdXBBcm5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0YXJnZXRfZ3JvdXBfYXJucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0R3JvdXBBcm5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3RhcmdldEdyb3VwQXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldEdyb3VwQXJucygpIHtcbiAgICB0aGlzLl90YXJnZXRHcm91cEFybnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldEdyb3VwQXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRHcm91cEFybnM7XG4gIH1cblxuICAvLyB0ZXJtaW5hdGVfaW5zdGFuY2VzX3dpdGhfZXhwaXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndGVybWluYXRlX2luc3RhbmNlc193aXRoX2V4cGlyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbigpIHtcbiAgICB0aGlzLl90ZXJtaW5hdGVJbnN0YW5jZXNXaXRoRXhwaXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb247XG4gIH1cblxuICAvLyB2YWxpZF9mcm9tIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZhbGlkRnJvbT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsaWRGcm9tKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsaWRfZnJvbScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsaWRGcm9tKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWxpZEZyb20gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWYWxpZEZyb20oKSB7XG4gICAgdGhpcy5fdmFsaWRGcm9tID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZEZyb21JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRGcm9tO1xuICB9XG5cbiAgLy8gdmFsaWRfdW50aWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsaWRVbnRpbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX3VudGlsJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWxpZFVudGlsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsaWRVbnRpbCgpIHtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZFVudGlsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkVW50aWw7XG4gIH1cblxuICAvLyB3YWl0X2Zvcl9mdWxmaWxsbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YWl0Rm9yRnVsZmlsbG1lbnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHdhaXRGb3JGdWxmaWxsbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd3YWl0X2Zvcl9mdWxmaWxsbWVudCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhaXRGb3JGdWxmaWxsbWVudCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fd2FpdEZvckZ1bGZpbGxtZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdEZvckZ1bGZpbGxtZW50KCkge1xuICAgIHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdEZvckZ1bGZpbGxtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudDtcbiAgfVxuXG4gIC8vIGxhdW5jaF9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFNwZWNpZmljYXRpb24/OiBTcG90RmxlZXRSZXF1ZXN0TGF1bmNoU3BlY2lmaWNhdGlvbltdOyBcbiAgcHVibGljIGdldCBsYXVuY2hTcGVjaWZpY2F0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXVuY2hfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhdW5jaFNwZWNpZmljYXRpb24odmFsdWU6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uW10pIHtcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hTcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb247XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGVfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaFRlbXBsYXRlQ29uZmlnPzogU3BvdEZsZWV0UmVxdWVzdExhdW5jaFRlbXBsYXRlQ29uZmlnW107IFxuICBwdWJsaWMgZ2V0IGxhdW5jaFRlbXBsYXRlQ29uZmlnKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsYXVuY2hfdGVtcGxhdGVfY29uZmlnJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoVGVtcGxhdGVDb25maWcodmFsdWU6IFNwb3RGbGVldFJlcXVlc3RMYXVuY2hUZW1wbGF0ZUNvbmZpZ1tdKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hUZW1wbGF0ZUNvbmZpZygpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZUNvbmZpZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWc7XG4gIH1cblxuICAvLyBzcG90X21haW50ZW5hbmNlX3N0cmF0ZWdpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyA9IG5ldyBTcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzcG90X21haW50ZW5hbmNlX3N0cmF0ZWdpZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcztcbiAgfVxuICBwdWJsaWMgcHV0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llcyh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdFNwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMpIHtcbiAgICB0aGlzLl9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzKCkge1xuICAgIHRoaXMuX3Nwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90TWFpbnRlbmFuY2VTdHJhdGVnaWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cyA9IG5ldyBTcG90RmxlZXRSZXF1ZXN0VGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogU3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG9jYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FsbG9jYXRpb25TdHJhdGVneSksXG4gICAgICBleGNlc3NfY2FwYWNpdHlfdGVybWluYXRpb25fcG9saWN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9leGNlc3NDYXBhY2l0eVRlcm1pbmF0aW9uUG9saWN5KSxcbiAgICAgIGZsZWV0X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZsZWV0VHlwZSksXG4gICAgICBpYW1fZmxlZXRfcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWFtRmxlZXRSb2xlKSxcbiAgICAgIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvdXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyKSxcbiAgICAgIGluc3RhbmNlX3Bvb2xzX3RvX3VzZV9jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VQb29sc1RvVXNlQ291bnQpLFxuICAgICAgbG9hZF9iYWxhbmNlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2xvYWRCYWxhbmNlcnMpLFxuICAgICAgb25fZGVtYW5kX2FsbG9jYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29uRGVtYW5kQWxsb2NhdGlvblN0cmF0ZWd5KSxcbiAgICAgIG9uX2RlbWFuZF9tYXhfdG90YWxfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29uRGVtYW5kTWF4VG90YWxQcmljZSksXG4gICAgICBvbl9kZW1hbmRfdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9vbkRlbWFuZFRhcmdldENhcGFjaXR5KSxcbiAgICAgIHJlcGxhY2VfdW5oZWFsdGh5X2luc3RhbmNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3JlcGxhY2VVbmhlYWx0aHlJbnN0YW5jZXMpLFxuICAgICAgc3BvdF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3BvdFByaWNlKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGFyZ2V0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90YXJnZXRDYXBhY2l0eSksXG4gICAgICB0YXJnZXRfZ3JvdXBfYXJuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdGFyZ2V0R3JvdXBBcm5zKSxcbiAgICAgIHRlcm1pbmF0ZV9pbnN0YW5jZXNfd2l0aF9leHBpcmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fdGVybWluYXRlSW5zdGFuY2VzV2l0aEV4cGlyYXRpb24pLFxuICAgICAgdmFsaWRfZnJvbTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmFsaWRGcm9tKSxcbiAgICAgIHZhbGlkX3VudGlsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92YWxpZFVudGlsKSxcbiAgICAgIHdhaXRfZm9yX2Z1bGZpbGxtZW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fd2FpdEZvckZ1bGZpbGxtZW50KSxcbiAgICAgIGxhdW5jaF9zcGVjaWZpY2F0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHNwb3RGbGVldFJlcXVlc3RMYXVuY2hTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb24pLFxuICAgICAgbGF1bmNoX3RlbXBsYXRlX2NvbmZpZzogY2RrdGYubGlzdE1hcHBlcihzcG90RmxlZXRSZXF1ZXN0TGF1bmNoVGVtcGxhdGVDb25maWdUb1RlcnJhZm9ybSkodGhpcy5fbGF1bmNoVGVtcGxhdGVDb25maWcpLFxuICAgICAgc3BvdF9tYWludGVuYW5jZV9zdHJhdGVnaWVzOiBzcG90RmxlZXRSZXF1ZXN0U3BvdE1haW50ZW5hbmNlU3RyYXRlZ2llc1RvVGVycmFmb3JtKHRoaXMuX3Nwb3RNYWludGVuYW5jZVN0cmF0ZWdpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogc3BvdEZsZWV0UmVxdWVzdFRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19