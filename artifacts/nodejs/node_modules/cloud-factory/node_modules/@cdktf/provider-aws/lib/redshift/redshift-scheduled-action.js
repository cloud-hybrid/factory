"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedshiftScheduledAction = exports.RedshiftScheduledActionTargetActionOutputReference = exports.redshiftScheduledActionTargetActionToTerraform = exports.RedshiftScheduledActionTargetActionResumeClusterOutputReference = exports.redshiftScheduledActionTargetActionResumeClusterToTerraform = exports.RedshiftScheduledActionTargetActionResizeClusterOutputReference = exports.redshiftScheduledActionTargetActionResizeClusterToTerraform = exports.RedshiftScheduledActionTargetActionPauseClusterOutputReference = exports.redshiftScheduledActionTargetActionPauseClusterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function redshiftScheduledActionTargetActionPauseClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cluster_identifier: cdktf.stringToTerraform(struct.clusterIdentifier),
    };
}
exports.redshiftScheduledActionTargetActionPauseClusterToTerraform = redshiftScheduledActionTargetActionPauseClusterToTerraform;
/**
 * @stability stable
 */
class RedshiftScheduledActionTargetActionPauseClusterOutputReference extends cdktf.ComplexObject {
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
        if (this._clusterIdentifier) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clusterIdentifier = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clusterIdentifier = value.clusterIdentifier;
        }
    }
    /**
     * @stability stable
     */
    get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    /**
     * @stability stable
     */
    set clusterIdentifier(value) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
}
exports.RedshiftScheduledActionTargetActionPauseClusterOutputReference = RedshiftScheduledActionTargetActionPauseClusterOutputReference;
_a = JSII_RTTI_SYMBOL_1;
RedshiftScheduledActionTargetActionPauseClusterOutputReference[_a] = { fqn: "@cdktf/provider-aws.redshift.RedshiftScheduledActionTargetActionPauseClusterOutputReference", version: "3.0.1" };
function redshiftScheduledActionTargetActionResizeClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        classic: cdktf.booleanToTerraform(struct.classic),
        cluster_identifier: cdktf.stringToTerraform(struct.clusterIdentifier),
        cluster_type: cdktf.stringToTerraform(struct.clusterType),
        node_type: cdktf.stringToTerraform(struct.nodeType),
        number_of_nodes: cdktf.numberToTerraform(struct.numberOfNodes),
    };
}
exports.redshiftScheduledActionTargetActionResizeClusterToTerraform = redshiftScheduledActionTargetActionResizeClusterToTerraform;
/**
 * @stability stable
 */
class RedshiftScheduledActionTargetActionResizeClusterOutputReference extends cdktf.ComplexObject {
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
        if (this._classic) {
            hasAnyValues = true;
            internalValueResult.classic = this._classic;
        }
        if (this._clusterIdentifier) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        if (this._clusterType) {
            hasAnyValues = true;
            internalValueResult.clusterType = this._clusterType;
        }
        if (this._nodeType) {
            hasAnyValues = true;
            internalValueResult.nodeType = this._nodeType;
        }
        if (this._numberOfNodes) {
            hasAnyValues = true;
            internalValueResult.numberOfNodes = this._numberOfNodes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._classic = undefined;
            this._clusterIdentifier = undefined;
            this._clusterType = undefined;
            this._nodeType = undefined;
            this._numberOfNodes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._classic = value.classic;
            this._clusterIdentifier = value.clusterIdentifier;
            this._clusterType = value.clusterType;
            this._nodeType = value.nodeType;
            this._numberOfNodes = value.numberOfNodes;
        }
    }
    /**
     * @stability stable
     */
    get classic() {
        return this.getBooleanAttribute('classic');
    }
    /**
     * @stability stable
     */
    set classic(value) {
        this._classic = value;
    }
    /**
     * @stability stable
     */
    resetClassic() {
        this._classic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get classicInput() {
        return this._classic;
    }
    /**
     * @stability stable
     */
    get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    /**
     * @stability stable
     */
    set clusterIdentifier(value) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
    /**
     * @stability stable
     */
    get clusterType() {
        return this.getStringAttribute('cluster_type');
    }
    /**
     * @stability stable
     */
    set clusterType(value) {
        this._clusterType = value;
    }
    /**
     * @stability stable
     */
    resetClusterType() {
        this._clusterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterTypeInput() {
        return this._clusterType;
    }
    /**
     * @stability stable
     */
    get nodeType() {
        return this.getStringAttribute('node_type');
    }
    /**
     * @stability stable
     */
    set nodeType(value) {
        this._nodeType = value;
    }
    /**
     * @stability stable
     */
    resetNodeType() {
        this._nodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nodeTypeInput() {
        return this._nodeType;
    }
    /**
     * @stability stable
     */
    get numberOfNodes() {
        return this.getNumberAttribute('number_of_nodes');
    }
    /**
     * @stability stable
     */
    set numberOfNodes(value) {
        this._numberOfNodes = value;
    }
    /**
     * @stability stable
     */
    resetNumberOfNodes() {
        this._numberOfNodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get numberOfNodesInput() {
        return this._numberOfNodes;
    }
}
exports.RedshiftScheduledActionTargetActionResizeClusterOutputReference = RedshiftScheduledActionTargetActionResizeClusterOutputReference;
_b = JSII_RTTI_SYMBOL_1;
RedshiftScheduledActionTargetActionResizeClusterOutputReference[_b] = { fqn: "@cdktf/provider-aws.redshift.RedshiftScheduledActionTargetActionResizeClusterOutputReference", version: "3.0.1" };
function redshiftScheduledActionTargetActionResumeClusterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cluster_identifier: cdktf.stringToTerraform(struct.clusterIdentifier),
    };
}
exports.redshiftScheduledActionTargetActionResumeClusterToTerraform = redshiftScheduledActionTargetActionResumeClusterToTerraform;
/**
 * @stability stable
 */
class RedshiftScheduledActionTargetActionResumeClusterOutputReference extends cdktf.ComplexObject {
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
        if (this._clusterIdentifier) {
            hasAnyValues = true;
            internalValueResult.clusterIdentifier = this._clusterIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clusterIdentifier = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clusterIdentifier = value.clusterIdentifier;
        }
    }
    /**
     * @stability stable
     */
    get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    /**
     * @stability stable
     */
    set clusterIdentifier(value) {
        this._clusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
}
exports.RedshiftScheduledActionTargetActionResumeClusterOutputReference = RedshiftScheduledActionTargetActionResumeClusterOutputReference;
_c = JSII_RTTI_SYMBOL_1;
RedshiftScheduledActionTargetActionResumeClusterOutputReference[_c] = { fqn: "@cdktf/provider-aws.redshift.RedshiftScheduledActionTargetActionResumeClusterOutputReference", version: "3.0.1" };
function redshiftScheduledActionTargetActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        pause_cluster: redshiftScheduledActionTargetActionPauseClusterToTerraform(struct.pauseCluster),
        resize_cluster: redshiftScheduledActionTargetActionResizeClusterToTerraform(struct.resizeCluster),
        resume_cluster: redshiftScheduledActionTargetActionResumeClusterToTerraform(struct.resumeCluster),
    };
}
exports.redshiftScheduledActionTargetActionToTerraform = redshiftScheduledActionTargetActionToTerraform;
/**
 * @stability stable
 */
class RedshiftScheduledActionTargetActionOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // pause_cluster - computed: false, optional: true, required: false
        this._pauseCluster = new RedshiftScheduledActionTargetActionPauseClusterOutputReference(this, "pause_cluster", true);
        // resize_cluster - computed: false, optional: true, required: false
        this._resizeCluster = new RedshiftScheduledActionTargetActionResizeClusterOutputReference(this, "resize_cluster", true);
        // resume_cluster - computed: false, optional: true, required: false
        this._resumeCluster = new RedshiftScheduledActionTargetActionResumeClusterOutputReference(this, "resume_cluster", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g, _h, _j, _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_f = this._pauseCluster) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.pauseCluster = (_g = this._pauseCluster) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        if ((_h = this._resizeCluster) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.resizeCluster = (_j = this._resizeCluster) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        if ((_k = this._resumeCluster) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.resumeCluster = (_l = this._resumeCluster) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._pauseCluster.internalValue = undefined;
            this._resizeCluster.internalValue = undefined;
            this._resumeCluster.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._pauseCluster.internalValue = value.pauseCluster;
            this._resizeCluster.internalValue = value.resizeCluster;
            this._resumeCluster.internalValue = value.resumeCluster;
        }
    }
    /**
     * @stability stable
     */
    get pauseCluster() {
        return this._pauseCluster;
    }
    /**
     * @stability stable
     */
    putPauseCluster(value) {
        this._pauseCluster.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPauseCluster() {
        this._pauseCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pauseClusterInput() {
        return this._pauseCluster.internalValue;
    }
    /**
     * @stability stable
     */
    get resizeCluster() {
        return this._resizeCluster;
    }
    /**
     * @stability stable
     */
    putResizeCluster(value) {
        this._resizeCluster.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetResizeCluster() {
        this._resizeCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resizeClusterInput() {
        return this._resizeCluster.internalValue;
    }
    /**
     * @stability stable
     */
    get resumeCluster() {
        return this._resumeCluster;
    }
    /**
     * @stability stable
     */
    putResumeCluster(value) {
        this._resumeCluster.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetResumeCluster() {
        this._resumeCluster.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resumeClusterInput() {
        return this._resumeCluster.internalValue;
    }
}
exports.RedshiftScheduledActionTargetActionOutputReference = RedshiftScheduledActionTargetActionOutputReference;
_d = JSII_RTTI_SYMBOL_1;
RedshiftScheduledActionTargetActionOutputReference[_d] = { fqn: "@cdktf/provider-aws.redshift.RedshiftScheduledActionTargetActionOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action}.
 *
 * @stability stable
 */
class RedshiftScheduledAction extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_redshift_scheduled_action',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // target_action - computed: false, optional: false, required: true
        this._targetAction = new RedshiftScheduledActionTargetActionOutputReference(this, "target_action", true);
        this._description = config.description;
        this._enable = config.enable;
        this._endTime = config.endTime;
        this._iamRole = config.iamRole;
        this._name = config.name;
        this._schedule = config.schedule;
        this._startTime = config.startTime;
        this._targetAction.internalValue = config.targetAction;
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
    /**
     * @stability stable
     */
    get enable() {
        return this.getBooleanAttribute('enable');
    }
    /**
     * @stability stable
     */
    set enable(value) {
        this._enable = value;
    }
    /**
     * @stability stable
     */
    resetEnable() {
        this._enable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableInput() {
        return this._enable;
    }
    /**
     * @stability stable
     */
    get endTime() {
        return this.getStringAttribute('end_time');
    }
    /**
     * @stability stable
     */
    set endTime(value) {
        this._endTime = value;
    }
    /**
     * @stability stable
     */
    resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endTimeInput() {
        return this._endTime;
    }
    /**
     * @stability stable
     */
    get iamRole() {
        return this.getStringAttribute('iam_role');
    }
    /**
     * @stability stable
     */
    set iamRole(value) {
        this._iamRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamRoleInput() {
        return this._iamRole;
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
    get schedule() {
        return this.getStringAttribute('schedule');
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
    /**
     * @stability stable
     */
    get startTime() {
        return this.getStringAttribute('start_time');
    }
    /**
     * @stability stable
     */
    set startTime(value) {
        this._startTime = value;
    }
    /**
     * @stability stable
     */
    resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startTimeInput() {
        return this._startTime;
    }
    /**
     * @stability stable
     */
    get targetAction() {
        return this._targetAction;
    }
    /**
     * @stability stable
     */
    putTargetAction(value) {
        this._targetAction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetActionInput() {
        return this._targetAction.internalValue;
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
            enable: cdktf.booleanToTerraform(this._enable),
            end_time: cdktf.stringToTerraform(this._endTime),
            iam_role: cdktf.stringToTerraform(this._iamRole),
            name: cdktf.stringToTerraform(this._name),
            schedule: cdktf.stringToTerraform(this._schedule),
            start_time: cdktf.stringToTerraform(this._startTime),
            target_action: redshiftScheduledActionTargetActionToTerraform(this._targetAction.internalValue),
        };
    }
}
exports.RedshiftScheduledAction = RedshiftScheduledAction;
_e = JSII_RTTI_SYMBOL_1;
RedshiftScheduledAction[_e] = { fqn: "@cdktf/provider-aws.redshift.RedshiftScheduledAction", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
RedshiftScheduledAction.tfResourceType = "aws_redshift_scheduled_action";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkc2hpZnQtc2NoZWR1bGVkLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWRzaGlmdC9yZWRzaGlmdC1zY2hlZHVsZWQtYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBMEIvQixTQUFnQiwwREFBMEQsQ0FBQyxNQUF5SDtJQUNsTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDdkUsQ0FBQTtBQUNILENBQUM7QUFSRCxnSUFRQzs7OztBQUVELE1BQWEsOERBQStELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJckcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFB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b0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHNDQUFjLEdBQVcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmRUaW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1Sb2xlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVkdWxlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldEFjdGlvbjogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUGF1c2VDbHVzdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVySWRlbnRpZmllcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25QYXVzZUNsdXN0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblBhdXNlQ2x1c3Rlck91dHB1dFJlZmVyZW5jZSB8IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUGF1c2VDbHVzdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2x1c3Rlcl9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJJZGVudGlmaWVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25QYXVzZUNsdXN0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25QYXVzZUNsdXN0ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbHVzdGVySWRlbnRpZmllciA9IHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25QYXVzZUNsdXN0ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZS5jbHVzdGVySWRlbnRpZmllcjtcbiAgICB9XG4gIH1cblxuICAvLyBjbHVzdGVyX2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlcklkZW50aWZpZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXNpemVDbHVzdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsYXNzaWM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2x1c3RlcklkZW50aWZpZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBub2RlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBudW1iZXJPZk5vZGVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXNpemVDbHVzdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXNpemVDbHVzdGVyT3V0cHV0UmVmZXJlbmNlIHwgUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXNpemVDbHVzdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xhc3NpYzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2xhc3NpYyksXG4gICAgY2x1c3Rlcl9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICBjbHVzdGVyX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2x1c3RlclR5cGUpLFxuICAgIG5vZGVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub2RlVHlwZSksXG4gICAgbnVtYmVyX29mX25vZGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm51bWJlck9mTm9kZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblJlc2l6ZUNsdXN0ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXNpemVDbHVzdGVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jbGFzc2ljKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbGFzc2ljID0gdGhpcy5fY2xhc3NpYztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbHVzdGVySWRlbnRpZmllciA9IHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2x1c3RlclR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsdXN0ZXJUeXBlID0gdGhpcy5fY2x1c3RlclR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub2RlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm9kZVR5cGUgPSB0aGlzLl9ub2RlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX251bWJlck9mTm9kZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm51bWJlck9mTm9kZXMgPSB0aGlzLl9udW1iZXJPZk5vZGVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXNpemVDbHVzdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xhc3NpYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2x1c3RlclR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub2RlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX251bWJlck9mTm9kZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NsYXNzaWMgPSB2YWx1ZS5jbGFzc2ljO1xuICAgICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZS5jbHVzdGVySWRlbnRpZmllcjtcbiAgICAgIHRoaXMuX2NsdXN0ZXJUeXBlID0gdmFsdWUuY2x1c3RlclR5cGU7XG4gICAgICB0aGlzLl9ub2RlVHlwZSA9IHZhbHVlLm5vZGVUeXBlO1xuICAgICAgdGhpcy5fbnVtYmVyT2ZOb2RlcyA9IHZhbHVlLm51bWJlck9mTm9kZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xhc3NpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbGFzc2ljPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjbGFzc2ljKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NsYXNzaWMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjbGFzc2ljKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jbGFzc2ljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xhc3NpYygpIHtcbiAgICB0aGlzLl9jbGFzc2ljID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGFzc2ljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYXNzaWM7XG4gIH1cblxuICAvLyBjbHVzdGVyX2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlcklkZW50aWZpZXI7XG4gIH1cblxuICAvLyBjbHVzdGVyX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlclR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlclR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbHVzdGVyVHlwZSgpIHtcbiAgICB0aGlzLl9jbHVzdGVyVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlclR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlclR5cGU7XG4gIH1cblxuICAvLyBub2RlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm9kZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5vZGVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm9kZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBub2RlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbm9kZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb2RlVHlwZSgpIHtcbiAgICB0aGlzLl9ub2RlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm9kZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZVR5cGU7XG4gIH1cblxuICAvLyBudW1iZXJfb2Zfbm9kZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbnVtYmVyT2ZOb2Rlcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbnVtYmVyT2ZOb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ251bWJlcl9vZl9ub2RlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbnVtYmVyT2ZOb2Rlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbnVtYmVyT2ZOb2RlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE51bWJlck9mTm9kZXMoKSB7XG4gICAgdGhpcy5fbnVtYmVyT2ZOb2RlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbnVtYmVyT2ZOb2Rlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZk5vZGVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUmVzdW1lQ2x1c3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2x1c3RlcklkZW50aWZpZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUmVzdW1lQ2x1c3RlclRvVGVycmFmb3JtKHN0cnVjdD86IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUmVzdW1lQ2x1c3Rlck91dHB1dFJlZmVyZW5jZSB8IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUmVzdW1lQ2x1c3Rlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsdXN0ZXJfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbHVzdGVySWRlbnRpZmllciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUmVzdW1lQ2x1c3Rlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblJlc3VtZUNsdXN0ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbHVzdGVySWRlbnRpZmllciA9IHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXN1bWVDbHVzdGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyID0gdmFsdWUuY2x1c3RlcklkZW50aWZpZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gY2x1c3Rlcl9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NsdXN0ZXJJZGVudGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlcklkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF1c2VDbHVzdGVyPzogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25QYXVzZUNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc2l6ZUNsdXN0ZXI/OiBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblJlc2l6ZUNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3VtZUNsdXN0ZXI/OiBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblJlc3VtZUNsdXN0ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uT3V0cHV0UmVmZXJlbmNlIHwgUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXVzZV9jbHVzdGVyOiByZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblBhdXNlQ2x1c3RlclRvVGVycmFmb3JtKHN0cnVjdCEucGF1c2VDbHVzdGVyKSxcbiAgICByZXNpemVfY2x1c3RlcjogcmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXNpemVDbHVzdGVyVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNpemVDbHVzdGVyKSxcbiAgICByZXN1bWVfY2x1c3RlcjogcmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25SZXN1bWVDbHVzdGVyVG9UZXJyYWZvcm0oc3RydWN0IS5yZXN1bWVDbHVzdGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3BhdXNlQ2x1c3Rlcj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGF1c2VDbHVzdGVyID0gdGhpcy5fcGF1c2VDbHVzdGVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzaXplQ2x1c3Rlcj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzaXplQ2x1c3RlciA9IHRoaXMuX3Jlc2l6ZUNsdXN0ZXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXN1bWVDbHVzdGVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXN1bWVDbHVzdGVyID0gdGhpcy5fcmVzdW1lQ2x1c3Rlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcGF1c2VDbHVzdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXNpemVDbHVzdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN1bWVDbHVzdGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3BhdXNlQ2x1c3Rlci5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGF1c2VDbHVzdGVyO1xuICAgICAgdGhpcy5fcmVzaXplQ2x1c3Rlci5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVzaXplQ2x1c3RlcjtcbiAgICAgIHRoaXMuX3Jlc3VtZUNsdXN0ZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlc3VtZUNsdXN0ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gcGF1c2VfY2x1c3RlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXVzZUNsdXN0ZXIgPSBuZXcgUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25UYXJnZXRBY3Rpb25QYXVzZUNsdXN0ZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGF1c2VfY2x1c3RlclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwYXVzZUNsdXN0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdXNlQ2x1c3RlcjtcbiAgfVxuICBwdWJsaWMgcHV0UGF1c2VDbHVzdGVyKHZhbHVlOiBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblBhdXNlQ2x1c3Rlcikge1xuICAgIHRoaXMuX3BhdXNlQ2x1c3Rlci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGF1c2VDbHVzdGVyKCkge1xuICAgIHRoaXMuX3BhdXNlQ2x1c3Rlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXVzZUNsdXN0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF1c2VDbHVzdGVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZXNpemVfY2x1c3RlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNpemVDbHVzdGVyID0gbmV3IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUmVzaXplQ2x1c3Rlck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyZXNpemVfY2x1c3RlclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZXNpemVDbHVzdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemVDbHVzdGVyO1xuICB9XG4gIHB1YmxpYyBwdXRSZXNpemVDbHVzdGVyKHZhbHVlOiBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblJlc2l6ZUNsdXN0ZXIpIHtcbiAgICB0aGlzLl9yZXNpemVDbHVzdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNpemVDbHVzdGVyKCkge1xuICAgIHRoaXMuX3Jlc2l6ZUNsdXN0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzaXplQ2x1c3RlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNpemVDbHVzdGVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZXN1bWVfY2x1c3RlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXN1bWVDbHVzdGVyID0gbmV3IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uUmVzdW1lQ2x1c3Rlck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyZXN1bWVfY2x1c3RlclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZXN1bWVDbHVzdGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bWVDbHVzdGVyO1xuICB9XG4gIHB1YmxpYyBwdXRSZXN1bWVDbHVzdGVyKHZhbHVlOiBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblJlc3VtZUNsdXN0ZXIpIHtcbiAgICB0aGlzLl9yZXN1bWVDbHVzdGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXN1bWVDbHVzdGVyKCkge1xuICAgIHRoaXMuX3Jlc3VtZUNsdXN0ZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzdW1lQ2x1c3RlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bWVDbHVzdGVyLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3JlZHNoaWZ0X3NjaGVkdWxlZF9hY3Rpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogUmVkc2hpZnRTY2hlZHVsZWRBY3Rpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19yZWRzaGlmdF9zY2hlZHVsZWRfYWN0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2VuYWJsZSA9IGNvbmZpZy5lbmFibGU7XG4gICAgdGhpcy5fZW5kVGltZSA9IGNvbmZpZy5lbmRUaW1lO1xuICAgIHRoaXMuX2lhbVJvbGUgPSBjb25maWcuaWFtUm9sZTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fc2NoZWR1bGUgPSBjb25maWcuc2NoZWR1bGU7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gY29uZmlnLnN0YXJ0VGltZTtcbiAgICB0aGlzLl90YXJnZXRBY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50YXJnZXRBY3Rpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBlbmFibGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGUoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlO1xuICB9XG5cbiAgLy8gZW5kX3RpbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5kVGltZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5kVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZF90aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmRUaW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5kVGltZSgpIHtcbiAgICB0aGlzLl9lbmRUaW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmRUaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZFRpbWU7XG4gIH1cblxuICAvLyBpYW1fcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pYW1Sb2xlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpYW1Sb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbVJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lhbVJvbGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWFtUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW1Sb2xlO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc2NoZWR1bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NoZWR1bGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NoZWR1bGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjaGVkdWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY2hlZHVsZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlZHVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZTtcbiAgfVxuXG4gIC8vIHN0YXJ0X3RpbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhcnRUaW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydF90aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFydFRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXJ0VGltZSgpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXJ0VGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydFRpbWU7XG4gIH1cblxuICAvLyB0YXJnZXRfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhcmdldEFjdGlvbiA9IG5ldyBSZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0YXJnZXRfYWN0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRhcmdldEFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0QWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRUYXJnZXRBY3Rpb24odmFsdWU6IFJlZHNoaWZ0U2NoZWR1bGVkQWN0aW9uVGFyZ2V0QWN0aW9uKSB7XG4gICAgdGhpcy5fdGFyZ2V0QWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFyZ2V0QWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldEFjdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZW5hYmxlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlKSxcbiAgICAgIGVuZF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmRUaW1lKSxcbiAgICAgIGlhbV9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pYW1Sb2xlKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgc2NoZWR1bGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NjaGVkdWxlKSxcbiAgICAgIHN0YXJ0X3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0YXJ0VGltZSksXG4gICAgICB0YXJnZXRfYWN0aW9uOiByZWRzaGlmdFNjaGVkdWxlZEFjdGlvblRhcmdldEFjdGlvblRvVGVycmFmb3JtKHRoaXMuX3RhcmdldEFjdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=