"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsCapacityProvider = exports.EcsCapacityProviderAutoScalingGroupProviderOutputReference = exports.ecsCapacityProviderAutoScalingGroupProviderToTerraform = exports.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference = exports.ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_warmup_period: cdktf.numberToTerraform(struct.instanceWarmupPeriod),
        maximum_scaling_step_size: cdktf.numberToTerraform(struct.maximumScalingStepSize),
        minimum_scaling_step_size: cdktf.numberToTerraform(struct.minimumScalingStepSize),
        status: cdktf.stringToTerraform(struct.status),
        target_capacity: cdktf.numberToTerraform(struct.targetCapacity),
    };
}
exports.ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform = ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform;
/**
 * @stability stable
 */
class EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference extends cdktf.ComplexObject {
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
        if (this._instanceWarmupPeriod) {
            hasAnyValues = true;
            internalValueResult.instanceWarmupPeriod = this._instanceWarmupPeriod;
        }
        if (this._maximumScalingStepSize) {
            hasAnyValues = true;
            internalValueResult.maximumScalingStepSize = this._maximumScalingStepSize;
        }
        if (this._minimumScalingStepSize) {
            hasAnyValues = true;
            internalValueResult.minimumScalingStepSize = this._minimumScalingStepSize;
        }
        if (this._status) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._targetCapacity) {
            hasAnyValues = true;
            internalValueResult.targetCapacity = this._targetCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceWarmupPeriod = undefined;
            this._maximumScalingStepSize = undefined;
            this._minimumScalingStepSize = undefined;
            this._status = undefined;
            this._targetCapacity = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceWarmupPeriod = value.instanceWarmupPeriod;
            this._maximumScalingStepSize = value.maximumScalingStepSize;
            this._minimumScalingStepSize = value.minimumScalingStepSize;
            this._status = value.status;
            this._targetCapacity = value.targetCapacity;
        }
    }
    /**
     * @stability stable
     */
    get instanceWarmupPeriod() {
        return this.getNumberAttribute('instance_warmup_period');
    }
    /**
     * @stability stable
     */
    set instanceWarmupPeriod(value) {
        this._instanceWarmupPeriod = value;
    }
    /**
     * @stability stable
     */
    resetInstanceWarmupPeriod() {
        this._instanceWarmupPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceWarmupPeriodInput() {
        return this._instanceWarmupPeriod;
    }
    /**
     * @stability stable
     */
    get maximumScalingStepSize() {
        return this.getNumberAttribute('maximum_scaling_step_size');
    }
    /**
     * @stability stable
     */
    set maximumScalingStepSize(value) {
        this._maximumScalingStepSize = value;
    }
    /**
     * @stability stable
     */
    resetMaximumScalingStepSize() {
        this._maximumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumScalingStepSizeInput() {
        return this._maximumScalingStepSize;
    }
    /**
     * @stability stable
     */
    get minimumScalingStepSize() {
        return this.getNumberAttribute('minimum_scaling_step_size');
    }
    /**
     * @stability stable
     */
    set minimumScalingStepSize(value) {
        this._minimumScalingStepSize = value;
    }
    /**
     * @stability stable
     */
    resetMinimumScalingStepSize() {
        this._minimumScalingStepSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minimumScalingStepSizeInput() {
        return this._minimumScalingStepSize;
    }
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    set status(value) {
        this._status = value;
    }
    /**
     * @stability stable
     */
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusInput() {
        return this._status;
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
    /**
     * @stability stable
     */
    resetTargetCapacity() {
        this._targetCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetCapacityInput() {
        return this._targetCapacity;
    }
}
exports.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference = EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference;
_a = JSII_RTTI_SYMBOL_1;
EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference[_a] = { fqn: "@cdktf/provider-aws.ecs.EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference", version: "3.0.1" };
function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_scaling_group_arn: cdktf.stringToTerraform(struct.autoScalingGroupArn),
        managed_termination_protection: cdktf.stringToTerraform(struct.managedTerminationProtection),
        managed_scaling: ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct.managedScaling),
    };
}
exports.ecsCapacityProviderAutoScalingGroupProviderToTerraform = ecsCapacityProviderAutoScalingGroupProviderToTerraform;
/**
 * @stability stable
 */
class EcsCapacityProviderAutoScalingGroupProviderOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // managed_scaling - computed: false, optional: true, required: false
        this._managedScaling = new EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference(this, "managed_scaling", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _d, _e;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._autoScalingGroupArn) {
            hasAnyValues = true;
            internalValueResult.autoScalingGroupArn = this._autoScalingGroupArn;
        }
        if (this._managedTerminationProtection) {
            hasAnyValues = true;
            internalValueResult.managedTerminationProtection = this._managedTerminationProtection;
        }
        if ((_d = this._managedScaling) === null || _d === void 0 ? void 0 : _d.internalValue) {
            hasAnyValues = true;
            internalValueResult.managedScaling = (_e = this._managedScaling) === null || _e === void 0 ? void 0 : _e.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoScalingGroupArn = undefined;
            this._managedTerminationProtection = undefined;
            this._managedScaling.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoScalingGroupArn = value.autoScalingGroupArn;
            this._managedTerminationProtection = value.managedTerminationProtection;
            this._managedScaling.internalValue = value.managedScaling;
        }
    }
    /**
     * @stability stable
     */
    get autoScalingGroupArn() {
        return this.getStringAttribute('auto_scaling_group_arn');
    }
    /**
     * @stability stable
     */
    set autoScalingGroupArn(value) {
        this._autoScalingGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoScalingGroupArnInput() {
        return this._autoScalingGroupArn;
    }
    /**
     * @stability stable
     */
    get managedTerminationProtection() {
        return this.getStringAttribute('managed_termination_protection');
    }
    /**
     * @stability stable
     */
    set managedTerminationProtection(value) {
        this._managedTerminationProtection = value;
    }
    /**
     * @stability stable
     */
    resetManagedTerminationProtection() {
        this._managedTerminationProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get managedTerminationProtectionInput() {
        return this._managedTerminationProtection;
    }
    /**
     * @stability stable
     */
    get managedScaling() {
        return this._managedScaling;
    }
    /**
     * @stability stable
     */
    putManagedScaling(value) {
        this._managedScaling.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetManagedScaling() {
        this._managedScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get managedScalingInput() {
        return this._managedScaling.internalValue;
    }
}
exports.EcsCapacityProviderAutoScalingGroupProviderOutputReference = EcsCapacityProviderAutoScalingGroupProviderOutputReference;
_b = JSII_RTTI_SYMBOL_1;
EcsCapacityProviderAutoScalingGroupProviderOutputReference[_b] = { fqn: "@cdktf/provider-aws.ecs.EcsCapacityProviderAutoScalingGroupProviderOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider}.
 *
 * @stability stable
 */
class EcsCapacityProvider extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ecs_capacity_provider',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // auto_scaling_group_provider - computed: false, optional: false, required: true
        this._autoScalingGroupProvider = new EcsCapacityProviderAutoScalingGroupProviderOutputReference(this, "auto_scaling_group_provider", true);
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._autoScalingGroupProvider.internalValue = config.autoScalingGroupProvider;
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
    get autoScalingGroupProvider() {
        return this._autoScalingGroupProvider;
    }
    /**
     * @stability stable
     */
    putAutoScalingGroupProvider(value) {
        this._autoScalingGroupProvider.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoScalingGroupProviderInput() {
        return this._autoScalingGroupProvider.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            auto_scaling_group_provider: ecsCapacityProviderAutoScalingGroupProviderToTerraform(this._autoScalingGroupProvider.internalValue),
        };
    }
}
exports.EcsCapacityProvider = EcsCapacityProvider;
_c = JSII_RTTI_SYMBOL_1;
EcsCapacityProvider[_c] = { fqn: "@cdktf/provider-aws.ecs.EcsCapacityProvider", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
EcsCapacityProvider.tfResourceType = "aws_ecs_capacity_provider";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzLWNhcGFjaXR5LXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vjcy9lY3MtY2FwYWNpdHktcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUEwQi9CLFNBQWdCLG9FQUFvRSxDQUFDLE1BQTZJO0lBQ2hPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSx5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2xGLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsc0JBQXNCLENBQUM7UUFDbEYsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNqRSxDQUFBO0FBQ0gsQ0FBQztBQVpELG9KQVlDOzs7O0FBRUQsTUFBYSx3RUFBeUUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkvRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFB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YSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztJQUN0RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsMkJBQTJCLEVBQUUsc0RBQXNELENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztTQUNsSSxDQUFDO0lBQ0osQ0FBQzs7QUFsSEgsa0RBbUhDOzs7QUFqSEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxrQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBFY3NDYXBhY2l0eVByb3ZpZGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyOiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlV2FybXVwUGVyaW9kPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heGltdW1TY2FsaW5nU3RlcFNpemU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluaW11bVNjYWxpbmdTdGVwU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRDYXBhY2l0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZ091dHB1dFJlZmVyZW5jZSB8IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlX3dhcm11cF9wZXJpb2Q6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VXYXJtdXBQZXJpb2QpLFxuICAgIG1heGltdW1fc2NhbGluZ19zdGVwX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4aW11bVNjYWxpbmdTdGVwU2l6ZSksXG4gICAgbWluaW11bV9zY2FsaW5nX3N0ZXBfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5taW5pbXVtU2NhbGluZ1N0ZXBTaXplKSxcbiAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzKSxcbiAgICB0YXJnZXRfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0Q2FwYWNpdHkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck1hbmFnZWRTY2FsaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZVdhcm11cFBlcmlvZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5zdGFuY2VXYXJtdXBQZXJpb2QgPSB0aGlzLl9pbnN0YW5jZVdhcm11cFBlcmlvZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21heGltdW1TY2FsaW5nU3RlcFNpemUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heGltdW1TY2FsaW5nU3RlcFNpemUgPSB0aGlzLl9tYXhpbXVtU2NhbGluZ1N0ZXBTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWluaW11bVNjYWxpbmdTdGVwU2l6ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluaW11bVNjYWxpbmdTdGVwU2l6ZSA9IHRoaXMuX21pbmltdW1TY2FsaW5nU3RlcFNpemU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0dXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXR1cyA9IHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldENhcGFjaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXJnZXRDYXBhY2l0eSA9IHRoaXMuX3RhcmdldENhcGFjaXR5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck1hbmFnZWRTY2FsaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5zdGFuY2VXYXJtdXBQZXJpb2QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXhpbXVtU2NhbGluZ1N0ZXBTaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluaW11bVNjYWxpbmdTdGVwU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhcmdldENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnN0YW5jZVdhcm11cFBlcmlvZCA9IHZhbHVlLmluc3RhbmNlV2FybXVwUGVyaW9kO1xuICAgICAgdGhpcy5fbWF4aW11bVNjYWxpbmdTdGVwU2l6ZSA9IHZhbHVlLm1heGltdW1TY2FsaW5nU3RlcFNpemU7XG4gICAgICB0aGlzLl9taW5pbXVtU2NhbGluZ1N0ZXBTaXplID0gdmFsdWUubWluaW11bVNjYWxpbmdTdGVwU2l6ZTtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlLnN0YXR1cztcbiAgICAgIHRoaXMuX3RhcmdldENhcGFjaXR5ID0gdmFsdWUudGFyZ2V0Q2FwYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFuY2Vfd2FybXVwX3BlcmlvZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlV2FybXVwUGVyaW9kPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVdhcm11cFBlcmlvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2luc3RhbmNlX3dhcm11cF9wZXJpb2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlV2FybXVwUGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVdhcm11cFBlcmlvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlV2FybXVwUGVyaW9kKCkge1xuICAgIHRoaXMuX2luc3RhbmNlV2FybXVwUGVyaW9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVdhcm11cFBlcmlvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVdhcm11cFBlcmlvZDtcbiAgfVxuXG4gIC8vIG1heGltdW1fc2NhbGluZ19zdGVwX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtU2NhbGluZ1N0ZXBTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhpbXVtU2NhbGluZ1N0ZXBTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4aW11bV9zY2FsaW5nX3N0ZXBfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bVNjYWxpbmdTdGVwU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4aW11bVNjYWxpbmdTdGVwU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heGltdW1TY2FsaW5nU3RlcFNpemUoKSB7XG4gICAgdGhpcy5fbWF4aW11bVNjYWxpbmdTdGVwU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4aW11bVNjYWxpbmdTdGVwU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhpbXVtU2NhbGluZ1N0ZXBTaXplO1xuICB9XG5cbiAgLy8gbWluaW11bV9zY2FsaW5nX3N0ZXBfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pbmltdW1TY2FsaW5nU3RlcFNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbmltdW1TY2FsaW5nU3RlcFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5pbXVtX3NjYWxpbmdfc3RlcF9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5pbXVtU2NhbGluZ1N0ZXBTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5pbXVtU2NhbGluZ1N0ZXBTaXplID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluaW11bVNjYWxpbmdTdGVwU2l6ZSgpIHtcbiAgICB0aGlzLl9taW5pbXVtU2NhbGluZ1N0ZXBTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5pbXVtU2NhbGluZ1N0ZXBTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbmltdW1TY2FsaW5nU3RlcFNpemU7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0dXM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdHVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0dXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgLy8gdGFyZ2V0X2NhcGFjaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRhcmdldENhcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFyZ2V0X2NhcGFjaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFyZ2V0Q2FwYWNpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRDYXBhY2l0eSgpIHtcbiAgICB0aGlzLl90YXJnZXRDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0Q2FwYWNpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0Q2FwYWNpdHk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b1NjYWxpbmdHcm91cEFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFuYWdlZFNjYWxpbmc/OiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck91dHB1dFJlZmVyZW5jZSB8IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvX3NjYWxpbmdfZ3JvdXBfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dG9TY2FsaW5nR3JvdXBBcm4pLFxuICAgIG1hbmFnZWRfdGVybWluYXRpb25fcHJvdGVjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uKSxcbiAgICBtYW5hZ2VkX3NjYWxpbmc6IGVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJNYW5hZ2VkU2NhbGluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFuYWdlZFNjYWxpbmcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dG9TY2FsaW5nR3JvdXBBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dG9TY2FsaW5nR3JvdXBBcm4gPSB0aGlzLl9hdXRvU2NhbGluZ0dyb3VwQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbiA9IHRoaXMuX21hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYW5hZ2VkU2NhbGluZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFuYWdlZFNjYWxpbmcgPSB0aGlzLl9tYW5hZ2VkU2NhbGluZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRvU2NhbGluZ0dyb3VwQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21hbmFnZWRTY2FsaW5nLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9TY2FsaW5nR3JvdXBBcm4gPSB2YWx1ZS5hdXRvU2NhbGluZ0dyb3VwQXJuO1xuICAgICAgdGhpcy5fbWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbiA9IHZhbHVlLm1hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb247XG4gICAgICB0aGlzLl9tYW5hZ2VkU2NhbGluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWFuYWdlZFNjYWxpbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b19zY2FsaW5nX2dyb3VwX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hdXRvU2NhbGluZ0dyb3VwQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ0dyb3VwQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0b19zY2FsaW5nX2dyb3VwX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1NjYWxpbmdHcm91cEFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdHcm91cEFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ0dyb3VwQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9TY2FsaW5nR3JvdXBBcm47XG4gIH1cblxuICAvLyBtYW5hZ2VkX3Rlcm1pbmF0aW9uX3Byb3RlY3Rpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFuYWdlZF90ZXJtaW5hdGlvbl9wcm90ZWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFuYWdlZFRlcm1pbmF0aW9uUHJvdGVjdGlvbigpIHtcbiAgICB0aGlzLl9tYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYW5hZ2VkVGVybWluYXRpb25Qcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZWRUZXJtaW5hdGlvblByb3RlY3Rpb247XG4gIH1cblxuICAvLyBtYW5hZ2VkX3NjYWxpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFuYWdlZFNjYWxpbmcgPSBuZXcgRWNzQ2FwYWNpdHlQcm92aWRlckF1dG9TY2FsaW5nR3JvdXBQcm92aWRlck1hbmFnZWRTY2FsaW5nT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm1hbmFnZWRfc2NhbGluZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYW5hZ2VkU2NhbGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFuYWdlZFNjYWxpbmc7XG4gIH1cbiAgcHVibGljIHB1dE1hbmFnZWRTY2FsaW5nKHZhbHVlOiBFY3NDYXBhY2l0eVByb3ZpZGVyQXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyTWFuYWdlZFNjYWxpbmcpIHtcbiAgICB0aGlzLl9tYW5hZ2VkU2NhbGluZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFuYWdlZFNjYWxpbmcoKSB7XG4gICAgdGhpcy5fbWFuYWdlZFNjYWxpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFuYWdlZFNjYWxpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFuYWdlZFNjYWxpbmcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVjc0NhcGFjaXR5UHJvdmlkZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWNzX2NhcGFjaXR5X3Byb3ZpZGVyXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVjc0NhcGFjaXR5UHJvdmlkZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lY3NfY2FwYWNpdHlfcHJvdmlkZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyLmludGVybmFsVmFsdWUgPSBjb25maWcuYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBhdXRvX3NjYWxpbmdfZ3JvdXBfcHJvdmlkZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyID0gbmV3IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYXV0b19zY2FsaW5nX2dyb3VwX3Byb3ZpZGVyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1dG9TY2FsaW5nR3JvdXBQcm92aWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyO1xuICB9XG4gIHB1YmxpYyBwdXRBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIodmFsdWU6IEVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIpIHtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1NjYWxpbmdHcm91cFByb3ZpZGVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBhdXRvX3NjYWxpbmdfZ3JvdXBfcHJvdmlkZXI6IGVjc0NhcGFjaXR5UHJvdmlkZXJBdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXJUb1RlcnJhZm9ybSh0aGlzLl9hdXRvU2NhbGluZ0dyb3VwUHJvdmlkZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19