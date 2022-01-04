"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmrInstanceFleet = exports.EmrInstanceFleetLaunchSpecificationsOutputReference = exports.emrInstanceFleetLaunchSpecificationsToTerraform = exports.emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform = exports.emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform = exports.emrInstanceFleetInstanceTypeConfigsToTerraform = exports.emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform = exports.emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct) {
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
exports.emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform = emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform;
function emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct) {
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
exports.emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform = emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform;
function emrInstanceFleetInstanceTypeConfigsToTerraform(struct) {
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
        configurations: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform)(struct.configurations),
        ebs_config: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform)(struct.ebsConfig),
    };
}
exports.emrInstanceFleetInstanceTypeConfigsToTerraform = emrInstanceFleetInstanceTypeConfigsToTerraform;
function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct) {
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
exports.emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform = emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform;
function emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct) {
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
exports.emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform = emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform;
function emrInstanceFleetLaunchSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_demand_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform)(struct.onDemandSpecification),
        spot_specification: cdktf.listMapper(emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform)(struct.spotSpecification),
    };
}
exports.emrInstanceFleetLaunchSpecificationsToTerraform = emrInstanceFleetLaunchSpecificationsToTerraform;
/**
 * @stability stable
 */
class EmrInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
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
exports.EmrInstanceFleetLaunchSpecificationsOutputReference = EmrInstanceFleetLaunchSpecificationsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
EmrInstanceFleetLaunchSpecificationsOutputReference[_a] = { fqn: "@cdktf/provider-aws.emr.EmrInstanceFleetLaunchSpecificationsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet}.
 *
 * @stability stable
 */
class EmrInstanceFleet extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_fleet.html aws_emr_instance_fleet} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_emr_instance_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // launch_specifications - computed: false, optional: true, required: false
        this._launchSpecifications = new EmrInstanceFleetLaunchSpecificationsOutputReference(this, "launch_specifications", true);
        this._clusterId = config.clusterId;
        this._name = config.name;
        this._targetOnDemandCapacity = config.targetOnDemandCapacity;
        this._targetSpotCapacity = config.targetSpotCapacity;
        this._instanceTypeConfigs = config.instanceTypeConfigs;
        this._launchSpecifications.internalValue = config.launchSpecifications;
    }
    /**
     * @stability stable
     */
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    /**
     * @stability stable
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdInput() {
        return this._clusterId;
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
    // provisioned_on_demand_capacity - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get provisionedOnDemandCapacity() {
        return this.getNumberAttribute('provisioned_on_demand_capacity');
    }
    // provisioned_spot_capacity - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get provisionedSpotCapacity() {
        return this.getNumberAttribute('provisioned_spot_capacity');
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
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            name: cdktf.stringToTerraform(this._name),
            target_on_demand_capacity: cdktf.numberToTerraform(this._targetOnDemandCapacity),
            target_spot_capacity: cdktf.numberToTerraform(this._targetSpotCapacity),
            instance_type_configs: cdktf.listMapper(emrInstanceFleetInstanceTypeConfigsToTerraform)(this._instanceTypeConfigs),
            launch_specifications: emrInstanceFleetLaunchSpecificationsToTerraform(this._launchSpecifications.internalValue),
        };
    }
}
exports.EmrInstanceFleet = EmrInstanceFleet;
_b = JSII_RTTI_SYMBOL_1;
EmrInstanceFleet[_b] = { fqn: "@cdktf/provider-aws.emr.EmrInstanceFleet", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
EmrInstanceFleet.tfResourceType = "aws_emr_instance_fleet";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1yLWluc3RhbmNlLWZsZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vtci9lbXItaW5zdGFuY2UtZmxlZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUF3Qi9CLFNBQWdCLDREQUE0RCxDQUFDLE1BQTBEO0lBQ3JJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQy9ELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3ZFLENBQUE7QUFDSCxDQUFDO0FBVEQsb0lBU0M7QUFhRCxTQUFnQix1REFBdUQsQ0FBQyxNQUFxRDtJQUMzSCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7S0FDMUUsQ0FBQTtBQUNILENBQUM7QUFYRCwwSEFXQztBQWlCRCxTQUFnQiw4Q0FBOEMsQ0FBQyxNQUE0QztJQUN6RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCwwQ0FBMEMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1DQUFtQyxDQUFDO1FBQ2hILGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDREQUE0RCxDQUFDLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUN0SCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDekcsQ0FBQTtBQUNILENBQUM7QUFiRCx3R0FhQztBQU9ELFNBQWdCLG9FQUFvRSxDQUFDLE1BQWtFO0lBQ3JKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztLQUN6RSxDQUFBO0FBQ0gsQ0FBQztBQVJELG9KQVFDO0FBYUQsU0FBZ0IsZ0VBQWdFLENBQUMsTUFBOEQ7SUFDN0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3hFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0UsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELHdCQUF3QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7S0FDbEYsQ0FBQTtBQUNILENBQUM7QUFYRCw0SUFXQztBQVNELFNBQWdCLCtDQUErQyxDQUFDLE1BQW1HO0lBQ2pLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUM5SSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGdFQUFnRSxDQUFDLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO0tBQ2xJLENBQUE7QUFDSCxDQUFDO0FBVEQsMEdBU0M7Ozs7QUFFRCxNQUFhLG1EQUFvRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTFGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDekU7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF1RDtRQUM5RSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1NBQ3JDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1lBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFRLENBQUM7SUFDMUUsQ0FBQzs7OztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBa0U7UUFDakcsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFRLENBQUM7SUFDckUsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBOEQ7UUFDekYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOztBQW5FSCxrSEFvRUM7Ozs7Ozs7O0FBR0QsTUFBYSxnQkFBaUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzNELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE4QjtRQUM3RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHdCQUF3QjtZQUMvQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBMEdMLDJFQUEyRTtRQUNuRSwwQkFBcUIsR0FBRyxJQUFJLG1EQUFtRCxDQUFDLElBQVcsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQTFHbEksSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1FBQzdELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztJQUN6RSxDQUFDOzs7O0lBUUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsb0ZBQW9GOzs7O0lBQ3BGLElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELCtFQUErRTs7OztJQUMvRSxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFJRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFDRCxJQUFXLHNCQUFzQixDQUFDLEtBQWE7UUFDN0MsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDOzs7O0lBQ00sMkJBQTJCO1FBQ2hDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDOzs7O0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNNLHVCQUF1QjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELElBQVcsbUJBQW1CO1FBQzVCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBUSxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQTRDO1FBQ3pFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx1QkFBdUIsQ0FBQyxLQUEyQztRQUN4RSxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUNoRixvQkFBb0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDbEgscUJBQXFCLEVBQUUsK0NBQStDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztTQUNqSCxDQUFDO0lBQ0osQ0FBQzs7QUE3SkgsNENBOEpDOzs7QUE1SkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywrQkFBYyxHQUFXLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEVtckluc3RhbmNlRmxlZXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldE9uRGVtYW5kQ2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRTcG90Q2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVR5cGVDb25maWdzPzogRW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFNwZWNpZmljYXRpb25zPzogRW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zO1xufVxuZXhwb3J0IGludGVyZmFjZSBFbXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsYXNzaWZpY2F0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3BlcnRpZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsYXNzaWZpY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsYXNzaWZpY2F0aW9uKSxcbiAgICBwcm9wZXJ0aWVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnRpZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NFYnNDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZXNQZXJJbnN0YW5jZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NFYnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHNpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB2b2x1bWVzX3Blcl9pbnN0YW5jZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVzUGVySW5zdGFuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiaWRQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmlkUHJpY2VBc1BlcmNlbnRhZ2VPZk9uRGVtYW5kUHJpY2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHRlZENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvbnM/OiBFbXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0NvbmZpZ3VyYXRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNDb25maWc/OiBFbXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlnc0Vic0NvbmZpZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJJbnN0YW5jZUZsZWV0SW5zdGFuY2VUeXBlQ29uZmlncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJpZF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5iaWRQcmljZSksXG4gICAgYmlkX3ByaWNlX2FzX3BlcmNlbnRhZ2Vfb2Zfb25fZGVtYW5kX3ByaWNlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJpZFByaWNlQXNQZXJjZW50YWdlT2ZPbkRlbWFuZFByaWNlKSxcbiAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmluc3RhbmNlVHlwZSksXG4gICAgd2VpZ2h0ZWRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0ZWRDYXBhY2l0eSksXG4gICAgY29uZmlndXJhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIoZW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NDb25maWd1cmF0aW9uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25zKSxcbiAgICBlYnNfY29uZmlnOiBjZGt0Zi5saXN0TWFwcGVyKGVtckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzRWJzQ29uZmlnVG9UZXJyYWZvcm0pKHN0cnVjdCEuZWJzQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVtckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb2NhdGlvblN0cmF0ZWd5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb2NhdGlvblN0cmF0ZWd5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tEdXJhdGlvbk1pbnV0ZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0QWN0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXREdXJhdGlvbk1pbnV0ZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc1Nwb3RTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbGxvY2F0aW9uX3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG9jYXRpb25TdHJhdGVneSksXG4gICAgYmxvY2tfZHVyYXRpb25fbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ibG9ja0R1cmF0aW9uTWludXRlcyksXG4gICAgdGltZW91dF9hY3Rpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dEFjdGlvbiksXG4gICAgdGltZW91dF9kdXJhdGlvbl9taW51dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWVvdXREdXJhdGlvbk1pbnV0ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRGVtYW5kU3BlY2lmaWNhdGlvbj86IEVtckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc09uRGVtYW5kU3BlY2lmaWNhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdFNwZWNpZmljYXRpb24/OiBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIHwgRW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb25fZGVtYW5kX3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoZW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEub25EZW1hbmRTcGVjaWZpY2F0aW9uKSxcbiAgICBzcG90X3NwZWNpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoZW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5zcG90U3BlY2lmaWNhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX29uRGVtYW5kU3BlY2lmaWNhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub25EZW1hbmRTcGVjaWZpY2F0aW9uID0gdGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3BvdFNwZWNpZmljYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNwb3RTcGVjaWZpY2F0aW9uID0gdGhpcy5fc3BvdFNwZWNpZmljYXRpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zcG90U3BlY2lmaWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uID0gdmFsdWUub25EZW1hbmRTcGVjaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fc3BvdFNwZWNpZmljYXRpb24gPSB2YWx1ZS5zcG90U3BlY2lmaWNhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBvbl9kZW1hbmRfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vbkRlbWFuZFNwZWNpZmljYXRpb24/OiBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPbkRlbWFuZFNwZWNpZmljYXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgb25EZW1hbmRTcGVjaWZpY2F0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvbl9kZW1hbmRfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG9uRGVtYW5kU3BlY2lmaWNhdGlvbih2YWx1ZTogRW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zT25EZW1hbmRTcGVjaWZpY2F0aW9uW10pIHtcbiAgICB0aGlzLl9vbkRlbWFuZFNwZWNpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPbkRlbWFuZFNwZWNpZmljYXRpb24oKSB7XG4gICAgdGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkRlbWFuZFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25EZW1hbmRTcGVjaWZpY2F0aW9uO1xuICB9XG5cbiAgLy8gc3BvdF9zcGVjaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nwb3RTcGVjaWZpY2F0aW9uPzogRW1ySW5zdGFuY2VGbGVldExhdW5jaFNwZWNpZmljYXRpb25zU3BvdFNwZWNpZmljYXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgc3BvdFNwZWNpZmljYXRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Nwb3Rfc3BlY2lmaWNhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNwb3RTcGVjaWZpY2F0aW9uKHZhbHVlOiBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNTcG90U3BlY2lmaWNhdGlvbltdKSB7XG4gICAgdGhpcy5fc3BvdFNwZWNpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90U3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9zcG90U3BlY2lmaWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdFNwZWNpZmljYXRpb247XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBFbXJJbnN0YW5jZUZsZWV0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Vtcl9pbnN0YW5jZV9mbGVldFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBFbXJJbnN0YW5jZUZsZWV0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZW1yX2luc3RhbmNlX2ZsZWV0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NsdXN0ZXJJZCA9IGNvbmZpZy5jbHVzdGVySWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHkgPSBjb25maWcudGFyZ2V0T25EZW1hbmRDYXBhY2l0eTtcbiAgICB0aGlzLl90YXJnZXRTcG90Q2FwYWNpdHkgPSBjb25maWcudGFyZ2V0U3BvdENhcGFjaXR5O1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZUNvbmZpZ3MgPSBjb25maWcuaW5zdGFuY2VUeXBlQ29uZmlncztcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxhdW5jaFNwZWNpZmljYXRpb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjbHVzdGVyX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NsdXN0ZXJJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlcklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVySWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJJZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwcm92aXNpb25lZF9vbl9kZW1hbmRfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm92aXNpb25lZE9uRGVtYW5kQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwcm92aXNpb25lZF9vbl9kZW1hbmRfY2FwYWNpdHknKTtcbiAgfVxuXG4gIC8vIHByb3Zpc2lvbmVkX3Nwb3RfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm92aXNpb25lZFNwb3RDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Byb3Zpc2lvbmVkX3Nwb3RfY2FwYWNpdHknKTtcbiAgfVxuXG4gIC8vIHRhcmdldF9vbl9kZW1hbmRfY2FwYWNpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0T25EZW1hbmRDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0T25EZW1hbmRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RhcmdldF9vbl9kZW1hbmRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldE9uRGVtYW5kQ2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRPbkRlbWFuZENhcGFjaXR5KCkge1xuICAgIHRoaXMuX3RhcmdldE9uRGVtYW5kQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldE9uRGVtYW5kQ2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0T25EZW1hbmRDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIHRhcmdldF9zcG90X2NhcGFjaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldFNwb3RDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0U3BvdENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFyZ2V0X3Nwb3RfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFNwb3RDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFyZ2V0U3BvdENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0U3BvdENhcGFjaXR5KCkge1xuICAgIHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0U3BvdENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFNwb3RDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGVfY29uZmlncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGVDb25maWdzPzogRW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NbXTsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlQ29uZmlncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5zdGFuY2VfdHlwZV9jb25maWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VUeXBlQ29uZmlncyh2YWx1ZTogRW1ySW5zdGFuY2VGbGVldEluc3RhbmNlVHlwZUNvbmZpZ3NbXSkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZUNvbmZpZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVR5cGVDb25maWdzKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZUNvbmZpZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUNvbmZpZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlQ29uZmlncztcbiAgfVxuXG4gIC8vIGxhdW5jaF9zcGVjaWZpY2F0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYXVuY2hTcGVjaWZpY2F0aW9ucyA9IG5ldyBFbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibGF1bmNoX3NwZWNpZmljYXRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxhdW5jaFNwZWNpZmljYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0TGF1bmNoU3BlY2lmaWNhdGlvbnModmFsdWU6IEVtckluc3RhbmNlRmxlZXRMYXVuY2hTcGVjaWZpY2F0aW9ucykge1xuICAgIHRoaXMuX2xhdW5jaFNwZWNpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYXVuY2hTcGVjaWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hTcGVjaWZpY2F0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjbHVzdGVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVySWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0YXJnZXRfb25fZGVtYW5kX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90YXJnZXRPbkRlbWFuZENhcGFjaXR5KSxcbiAgICAgIHRhcmdldF9zcG90X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90YXJnZXRTcG90Q2FwYWNpdHkpLFxuICAgICAgaW5zdGFuY2VfdHlwZV9jb25maWdzOiBjZGt0Zi5saXN0TWFwcGVyKGVtckluc3RhbmNlRmxlZXRJbnN0YW5jZVR5cGVDb25maWdzVG9UZXJyYWZvcm0pKHRoaXMuX2luc3RhbmNlVHlwZUNvbmZpZ3MpLFxuICAgICAgbGF1bmNoX3NwZWNpZmljYXRpb25zOiBlbXJJbnN0YW5jZUZsZWV0TGF1bmNoU3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9sYXVuY2hTcGVjaWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=