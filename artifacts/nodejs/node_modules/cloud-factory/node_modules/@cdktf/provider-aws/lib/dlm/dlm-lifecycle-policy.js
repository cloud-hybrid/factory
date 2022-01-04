"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DlmLifecyclePolicy = exports.DlmLifecyclePolicyPolicyDetailsOutputReference = exports.dlmLifecyclePolicyPolicyDetailsToTerraform = exports.dlmLifecyclePolicyPolicyDetailsScheduleToTerraform = exports.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference = exports.dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform = exports.dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform = exports.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference = exports.dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform = exports.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference = exports.dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform = exports.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference = exports.dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        interval_unit: cdktf.stringToTerraform(struct.intervalUnit),
        times: cdktf.listMapper(cdktf.stringToTerraform)(struct.times),
    };
}
exports.dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform = dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform;
/**
 * @stability stable
 */
class DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference extends cdktf.ComplexObject {
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
        if (this._interval) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        if (this._times) {
            hasAnyValues = true;
            internalValueResult.times = this._times;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._intervalUnit = undefined;
            this._times = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
            this._times = value.times;
        }
    }
    /**
     * @stability stable
     */
    get interval() {
        return this.getNumberAttribute('interval');
    }
    /**
     * @stability stable
     */
    set interval(value) {
        this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    /**
     * @stability stable
     */
    set intervalUnit(value) {
        this._intervalUnit = value;
    }
    /**
     * @stability stable
     */
    resetIntervalUnit() {
        this._intervalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalUnitInput() {
        return this._intervalUnit;
    }
    /**
     * @stability stable
     */
    get times() {
        return this.getListAttribute('times');
    }
    /**
     * @stability stable
     */
    set times(value) {
        this._times = value;
    }
    /**
     * @stability stable
     */
    resetTimes() {
        this._times = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timesInput() {
        return this._times;
    }
}
exports.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference = DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference;
_a = JSII_RTTI_SYMBOL_1;
DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference[_a] = { fqn: "@cdktf/provider-aws.dlm.DlmLifecyclePolicyPolicyDetailsScheduleCreateRuleOutputReference", version: "3.0.1" };
function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        interval_unit: cdktf.stringToTerraform(struct.intervalUnit),
    };
}
exports.dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform = dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform;
/**
 * @stability stable
 */
class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference extends cdktf.ComplexObject {
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
        if (this._interval) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
        }
    }
    /**
     * @stability stable
     */
    get interval() {
        return this.getNumberAttribute('interval');
    }
    /**
     * @stability stable
     */
    set interval(value) {
        this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    /**
     * @stability stable
     */
    set intervalUnit(value) {
        this._intervalUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalUnitInput() {
        return this._intervalUnit;
    }
}
exports.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference = DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference;
_b = JSII_RTTI_SYMBOL_1;
DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference[_b] = { fqn: "@cdktf/provider-aws.dlm.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleOutputReference", version: "3.0.1" };
function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        interval: cdktf.numberToTerraform(struct.interval),
        interval_unit: cdktf.stringToTerraform(struct.intervalUnit),
    };
}
exports.dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform = dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform;
/**
 * @stability stable
 */
class DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference extends cdktf.ComplexObject {
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
        if (this._interval) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._intervalUnit) {
            hasAnyValues = true;
            internalValueResult.intervalUnit = this._intervalUnit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._interval = undefined;
            this._intervalUnit = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._interval = value.interval;
            this._intervalUnit = value.intervalUnit;
        }
    }
    /**
     * @stability stable
     */
    get interval() {
        return this.getNumberAttribute('interval');
    }
    /**
     * @stability stable
     */
    set interval(value) {
        this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    get intervalUnit() {
        return this.getStringAttribute('interval_unit');
    }
    /**
     * @stability stable
     */
    set intervalUnit(value) {
        this._intervalUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalUnitInput() {
        return this._intervalUnit;
    }
}
exports.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference = DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference;
_c = JSII_RTTI_SYMBOL_1;
DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference[_c] = { fqn: "@cdktf/provider-aws.dlm.DlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleOutputReference", version: "3.0.1" };
function dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cmk_arn: cdktf.stringToTerraform(struct.cmkArn),
        copy_tags: cdktf.booleanToTerraform(struct.copyTags),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        target: cdktf.stringToTerraform(struct.target),
        deprecate_rule: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleDeprecateRuleToTerraform(struct.deprecateRule),
        retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleRetainRuleToTerraform(struct.retainRule),
    };
}
exports.dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform = dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform;
function dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        count: cdktf.numberToTerraform(struct.count),
    };
}
exports.dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform = dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform;
/**
 * @stability stable
 */
class DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference extends cdktf.ComplexObject {
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
        if (this._count) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._count = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._count = value.count;
        }
    }
    /**
     * @stability stable
     */
    get count() {
        return this.getNumberAttribute('count');
    }
    /**
     * @stability stable
     */
    set count(value) {
        this._count = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get countInput() {
        return this._count;
    }
}
exports.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference = DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference;
_d = JSII_RTTI_SYMBOL_1;
DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference[_d] = { fqn: "@cdktf/provider-aws.dlm.DlmLifecyclePolicyPolicyDetailsScheduleRetainRuleOutputReference", version: "3.0.1" };
function dlmLifecyclePolicyPolicyDetailsScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        copy_tags: cdktf.booleanToTerraform(struct.copyTags),
        name: cdktf.stringToTerraform(struct.name),
        tags_to_add: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tagsToAdd),
        create_rule: dlmLifecyclePolicyPolicyDetailsScheduleCreateRuleToTerraform(struct.createRule),
        cross_region_copy_rule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleCrossRegionCopyRuleToTerraform)(struct.crossRegionCopyRule),
        retain_rule: dlmLifecyclePolicyPolicyDetailsScheduleRetainRuleToTerraform(struct.retainRule),
    };
}
exports.dlmLifecyclePolicyPolicyDetailsScheduleToTerraform = dlmLifecyclePolicyPolicyDetailsScheduleToTerraform;
function dlmLifecyclePolicyPolicyDetailsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.resourceTypes),
        target_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.targetTags),
        schedule: cdktf.listMapper(dlmLifecyclePolicyPolicyDetailsScheduleToTerraform)(struct.schedule),
    };
}
exports.dlmLifecyclePolicyPolicyDetailsToTerraform = dlmLifecyclePolicyPolicyDetailsToTerraform;
/**
 * @stability stable
 */
class DlmLifecyclePolicyPolicyDetailsOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceTypes) {
            hasAnyValues = true;
            internalValueResult.resourceTypes = this._resourceTypes;
        }
        if (this._targetTags) {
            hasAnyValues = true;
            internalValueResult.targetTags = this._targetTags;
        }
        if (this._schedule) {
            hasAnyValues = true;
            internalValueResult.schedule = this._schedule;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceTypes = undefined;
            this._targetTags = undefined;
            this._schedule = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceTypes = value.resourceTypes;
            this._targetTags = value.targetTags;
            this._schedule = value.schedule;
        }
    }
    /**
     * @stability stable
     */
    get resourceTypes() {
        return this.getListAttribute('resource_types');
    }
    /**
     * @stability stable
     */
    set resourceTypes(value) {
        this._resourceTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTypesInput() {
        return this._resourceTypes;
    }
    /**
     * @stability stable
     */
    get targetTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('target_tags');
    }
    /**
     * @stability stable
     */
    set targetTags(value) {
        this._targetTags = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetTagsInput() {
        return this._targetTags;
    }
    /**
     * @stability stable
     */
    get schedule() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('schedule');
    }
    /**
     * @stability stable
     */
    set schedule(value) {
        this._schedule = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scheduleInput() {
        return this._schedule;
    }
}
exports.DlmLifecyclePolicyPolicyDetailsOutputReference = DlmLifecyclePolicyPolicyDetailsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
DlmLifecyclePolicyPolicyDetailsOutputReference[_e] = { fqn: "@cdktf/provider-aws.dlm.DlmLifecyclePolicyPolicyDetailsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy}.
 *
 * @stability stable
 */
class DlmLifecyclePolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_dlm_lifecycle_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // policy_details - computed: false, optional: false, required: true
        this._policyDetails = new DlmLifecyclePolicyPolicyDetailsOutputReference(this, "policy_details", true);
        this._description = config.description;
        this._executionRoleArn = config.executionRoleArn;
        this._state = config.state;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._policyDetails.internalValue = config.policyDetails;
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
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
    }
    /**
     * @stability stable
     */
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    /**
     * @stability stable
     */
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get executionRoleArnInput() {
        return this._executionRoleArn;
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
    get state() {
        return this.getStringAttribute('state');
    }
    /**
     * @stability stable
     */
    set state(value) {
        this._state = value;
    }
    /**
     * @stability stable
     */
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stateInput() {
        return this._state;
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
    get policyDetails() {
        return this._policyDetails;
    }
    /**
     * @stability stable
     */
    putPolicyDetails(value) {
        this._policyDetails.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyDetailsInput() {
        return this._policyDetails.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            policy_details: dlmLifecyclePolicyPolicyDetailsToTerraform(this._policyDetails.internalValue),
        };
    }
}
exports.DlmLifecyclePolicy = DlmLifecyclePolicy;
_f = JSII_RTTI_SYMBOL_1;
DlmLifecyclePolicy[_f] = { fqn: "@cdktf/provider-aws.dlm.DlmLifecyclePolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DlmLifecyclePolicy.tfResourceType = "aws_dlm_lifecycle_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGxtLWxpZmVjeWNsZS1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGxtL2RsbS1saWZlY3ljbGUtcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBMEIvQixTQUFnQiw0REFBNEQsQ0FBQyxNQUE2SDtJQUN4TSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQVZELG9JQVVDOzs7O0FBRUQsTUFBYSxnRUFBaUUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2RyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFB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Q3ZELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkUsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGNBQWMsRUFBRSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztTQUM5RixDQUFDO0lBQ0osQ0FBQzs7QUFuSkgsZ0RBb0pDOzs7QUFsSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxpQ0FBYyxHQUFXLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGxtTGlmZWN5Y2xlUG9saWN5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4ZWN1dGlvblJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvbGljeURldGFpbHM6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyZWF0ZVJ1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsVW5pdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3JlYXRlUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyZWF0ZVJ1bGVPdXRwdXRSZWZlcmVuY2UgfCBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcmVhdGVSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW50ZXJ2YWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIGludGVydmFsX3VuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxVbml0KSxcbiAgICB0aW1lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50aW1lcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyZWF0ZVJ1bGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3JlYXRlUnVsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsID0gdGhpcy5faW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnRlcnZhbFVuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsVW5pdCA9IHRoaXMuX2ludGVydmFsVW5pdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lcyA9IHRoaXMuX3RpbWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3JlYXRlUnVsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZXJ2YWxVbml0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGltZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWUuaW50ZXJ2YWw7XG4gICAgICB0aGlzLl9pbnRlcnZhbFVuaXQgPSB2YWx1ZS5pbnRlcnZhbFVuaXQ7XG4gICAgICB0aGlzLl90aW1lcyA9IHZhbHVlLnRpbWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGludGVydmFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ludGVydmFsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICAvLyBpbnRlcnZhbF91bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ludGVydmFsVW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxVbml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZXJ2YWxfdW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW50ZXJ2YWxVbml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlcnZhbFVuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnRlcnZhbFVuaXQoKSB7XG4gICAgdGhpcy5faW50ZXJ2YWxVbml0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlcnZhbFVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxVbml0O1xuICB9XG5cbiAgLy8gdGltZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0aW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0aW1lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGltZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lcygpIHtcbiAgICB0aGlzLl90aW1lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3Jvc3NSZWdpb25Db3B5UnVsZURlcHJlY2F0ZVJ1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsVW5pdDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3Jvc3NSZWdpb25Db3B5UnVsZURlcHJlY2F0ZVJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlRGVwcmVjYXRlUnVsZU91dHB1dFJlZmVyZW5jZSB8IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGVEZXByZWNhdGVSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW50ZXJ2YWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIGludGVydmFsX3VuaXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxVbml0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3Jvc3NSZWdpb25Db3B5UnVsZURlcHJlY2F0ZVJ1bGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3Jvc3NSZWdpb25Db3B5UnVsZURlcHJlY2F0ZVJ1bGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnRlcnZhbCA9IHRoaXMuX2ludGVydmFsO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW50ZXJ2YWxVbml0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnRlcnZhbFVuaXQgPSB0aGlzLl9pbnRlcnZhbFVuaXQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlRGVwcmVjYXRlUnVsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZXJ2YWxVbml0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlLmludGVydmFsO1xuICAgICAgdGhpcy5faW50ZXJ2YWxVbml0ID0gdmFsdWUuaW50ZXJ2YWxVbml0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGludGVydmFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ludGVydmFsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICAvLyBpbnRlcnZhbF91bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ludGVydmFsVW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxVbml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZXJ2YWxfdW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW50ZXJ2YWxVbml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRlcnZhbFVuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxVbml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsVW5pdDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlUmV0YWluUnVsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZXJ2YWw6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW50ZXJ2YWxVbml0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlUmV0YWluUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGVSZXRhaW5SdWxlT3V0cHV0UmVmZXJlbmNlIHwgRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3Jvc3NSZWdpb25Db3B5UnVsZVJldGFpblJ1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnRlcnZhbDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbCksXG4gICAgaW50ZXJ2YWxfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbFVuaXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlUmV0YWluUnVsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlUmV0YWluUnVsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsID0gdGhpcy5faW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnRlcnZhbFVuaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsVW5pdCA9IHRoaXMuX2ludGVydmFsVW5pdDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGVSZXRhaW5SdWxlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnRlcnZhbFVuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWUuaW50ZXJ2YWw7XG4gICAgICB0aGlzLl9pbnRlcnZhbFVuaXQgPSB2YWx1ZS5pbnRlcnZhbFVuaXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gaW50ZXJ2YWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlcnZhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgfVxuXG4gIC8vIGludGVydmFsX3VuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW50ZXJ2YWxVbml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnRlcnZhbFVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlcnZhbF91bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbFVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ludGVydmFsVW5pdCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnRlcnZhbFVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxVbml0O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbWtBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3B5VGFncz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRlZDogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwcmVjYXRlUnVsZT86IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGVEZXByZWNhdGVSdWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJldGFpblJ1bGU/OiBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlUmV0YWluUnVsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY21rX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbWtBcm4pLFxuICAgIGNvcHlfdGFnczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY29weVRhZ3MpLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICB0YXJnZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFyZ2V0KSxcbiAgICBkZXByZWNhdGVfcnVsZTogZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlQ3Jvc3NSZWdpb25Db3B5UnVsZURlcHJlY2F0ZVJ1bGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlcHJlY2F0ZVJ1bGUpLFxuICAgIHJldGFpbl9ydWxlOiBkbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcm9zc1JlZ2lvbkNvcHlSdWxlUmV0YWluUnVsZVRvVGVycmFmb3JtKHN0cnVjdCEucmV0YWluUnVsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVSZXRhaW5SdWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlUmV0YWluUnVsZVRvVGVycmFmb3JtKHN0cnVjdD86IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZVJldGFpblJ1bGVPdXRwdXRSZWZlcmVuY2UgfCBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVSZXRhaW5SdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY291bnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVSZXRhaW5SdWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZVJldGFpblJ1bGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvdW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb3VudCA9IHRoaXMuX2NvdW50O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlUmV0YWluUnVsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvdW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb3VudCA9IHZhbHVlLmNvdW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvcHlUYWdzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc1RvQWRkPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZVJ1bGU6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyZWF0ZVJ1bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3Jvc3NSZWdpb25Db3B5UnVsZT86IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGVbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRhaW5SdWxlOiBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVSZXRhaW5SdWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlVG9UZXJyYWZvcm0oc3RydWN0PzogRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29weV90YWdzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jb3B5VGFncyksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB0YWdzX3RvX2FkZDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS50YWdzVG9BZGQpLFxuICAgIGNyZWF0ZV9ydWxlOiBkbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVDcmVhdGVSdWxlVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGVSdWxlKSxcbiAgICBjcm9zc19yZWdpb25fY29weV9ydWxlOiBjZGt0Zi5saXN0TWFwcGVyKGRsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZUNyb3NzUmVnaW9uQ29weVJ1bGVUb1RlcnJhZm9ybSkoc3RydWN0IS5jcm9zc1JlZ2lvbkNvcHlSdWxlKSxcbiAgICByZXRhaW5fcnVsZTogZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlUmV0YWluUnVsZVRvVGVycmFmb3JtKHN0cnVjdCEucmV0YWluUnVsZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVR5cGVzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRUYWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NoZWR1bGU6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1RvVGVycmFmb3JtKHN0cnVjdD86IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNPdXRwdXRSZWZlcmVuY2UgfCBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfdHlwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVzb3VyY2VUeXBlcyksXG4gICAgdGFyZ2V0X3RhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEudGFyZ2V0VGFncyksXG4gICAgc2NoZWR1bGU6IGNka3RmLmxpc3RNYXBwZXIoZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1NjaGVkdWxlVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2NoZWR1bGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlVHlwZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlVHlwZXMgPSB0aGlzLl9yZXNvdXJjZVR5cGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0VGFncykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFyZ2V0VGFncyA9IHRoaXMuX3RhcmdldFRhZ3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlZHVsZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NoZWR1bGUgPSB0aGlzLl9zY2hlZHVsZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNvdXJjZVR5cGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0VGFncyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NjaGVkdWxlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXNvdXJjZVR5cGVzID0gdmFsdWUucmVzb3VyY2VUeXBlcztcbiAgICAgIHRoaXMuX3RhcmdldFRhZ3MgPSB2YWx1ZS50YXJnZXRUYWdzO1xuICAgICAgdGhpcy5fc2NoZWR1bGUgPSB2YWx1ZS5zY2hlZHVsZTtcbiAgICB9XG4gIH1cblxuICAvLyByZXNvdXJjZV90eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZVR5cGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncmVzb3VyY2VfdHlwZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlVHlwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlVHlwZXM7XG4gIH1cblxuICAvLyB0YXJnZXRfdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRUYWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YXJnZXRUYWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YXJnZXRfdGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhcmdldFRhZ3MgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0VGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRUYWdzO1xuICB9XG5cbiAgLy8gc2NoZWR1bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NoZWR1bGU/OiBEbG1MaWZlY3ljbGVQb2xpY3lQb2xpY3lEZXRhaWxzU2NoZWR1bGVbXTsgXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NjaGVkdWxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZWR1bGUodmFsdWU6IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNTY2hlZHVsZVtdKSB7XG4gICAgdGhpcy5fc2NoZWR1bGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGxtTGlmZWN5Y2xlUG9saWN5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2RsbV9saWZlY3ljbGVfcG9saWN5XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERsbUxpZmVjeWNsZVBvbGljeUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2RsbV9saWZlY3ljbGVfcG9saWN5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4gPSBjb25maWcuZXhlY3V0aW9uUm9sZUFybjtcbiAgICB0aGlzLl9zdGF0ZSA9IGNvbmZpZy5zdGF0ZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3BvbGljeURldGFpbHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wb2xpY3lEZXRhaWxzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBleGVjdXRpb25fcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGVjdXRpb25Sb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm47XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlKCkge1xuICAgIHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBwb2xpY3lfZGV0YWlscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb2xpY3lEZXRhaWxzID0gbmV3IERsbUxpZmVjeWNsZVBvbGljeVBvbGljeURldGFpbHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicG9saWN5X2RldGFpbHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcG9saWN5RGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9saWN5RGV0YWlscztcbiAgfVxuICBwdWJsaWMgcHV0UG9saWN5RGV0YWlscyh2YWx1ZTogRGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlscykge1xuICAgIHRoaXMuX3BvbGljeURldGFpbHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb2xpY3lEZXRhaWxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGljeURldGFpbHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGV4ZWN1dGlvbl9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZXhlY3V0aW9uUm9sZUFybiksXG4gICAgICBzdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhdGUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBwb2xpY3lfZGV0YWlsczogZGxtTGlmZWN5Y2xlUG9saWN5UG9saWN5RGV0YWlsc1RvVGVycmFmb3JtKHRoaXMuX3BvbGljeURldGFpbHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19