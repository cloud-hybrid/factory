"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkfirewallFirewallPolicy = exports.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform = exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct.dimension),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
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
        if (this._dimension) {
            hasAnyValues = true;
            internalValueResult.dimension = this._dimension;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimension = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimension = value.dimension;
        }
    }
    /**
     * @stability stable
     */
    get dimension() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('dimension');
    }
    /**
     * @stability stable
     */
    set dimension(value) {
        this._dimension = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dimensionInput() {
        return this._dimension;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference[_a] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference", version: "3.0.1" };
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        publish_metric_action: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct.publishMetricAction),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // publish_metric_action - computed: false, optional: false, required: true
        this._publishMetricAction = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_e = this._publishMetricAction) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.publishMetricAction = (_f = this._publishMetricAction) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._publishMetricAction.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._publishMetricAction.internalValue = value.publishMetricAction;
        }
    }
    /**
     * @stability stable
     */
    get publishMetricAction() {
        return this._publishMetricAction;
    }
    /**
     * @stability stable
     */
    putPublishMetricAction(value) {
        this._publishMetricAction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publishMetricActionInput() {
        return this._publishMetricAction.internalValue;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference;
_b = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference[_b] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference", version: "3.0.1" };
function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_name: cdktf.stringToTerraform(struct.actionName),
        action_definition: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct.actionDefinition),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform = networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform;
function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessDefaultActions),
        stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessFragmentDefaultActions),
        stateful_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform)(struct.statefulRuleGroupReference),
        stateless_custom_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform)(struct.statelessCustomAction),
        stateless_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform)(struct.statelessRuleGroupReference),
    };
}
exports.networkfirewallFirewallPolicyFirewallPolicyToTerraform = networkfirewallFirewallPolicyFirewallPolicyToTerraform;
/**
 * @stability stable
 */
class NetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._statelessDefaultActions) {
            hasAnyValues = true;
            internalValueResult.statelessDefaultActions = this._statelessDefaultActions;
        }
        if (this._statelessFragmentDefaultActions) {
            hasAnyValues = true;
            internalValueResult.statelessFragmentDefaultActions = this._statelessFragmentDefaultActions;
        }
        if (this._statefulRuleGroupReference) {
            hasAnyValues = true;
            internalValueResult.statefulRuleGroupReference = this._statefulRuleGroupReference;
        }
        if (this._statelessCustomAction) {
            hasAnyValues = true;
            internalValueResult.statelessCustomAction = this._statelessCustomAction;
        }
        if (this._statelessRuleGroupReference) {
            hasAnyValues = true;
            internalValueResult.statelessRuleGroupReference = this._statelessRuleGroupReference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statelessDefaultActions = undefined;
            this._statelessFragmentDefaultActions = undefined;
            this._statefulRuleGroupReference = undefined;
            this._statelessCustomAction = undefined;
            this._statelessRuleGroupReference = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statelessDefaultActions = value.statelessDefaultActions;
            this._statelessFragmentDefaultActions = value.statelessFragmentDefaultActions;
            this._statefulRuleGroupReference = value.statefulRuleGroupReference;
            this._statelessCustomAction = value.statelessCustomAction;
            this._statelessRuleGroupReference = value.statelessRuleGroupReference;
        }
    }
    /**
     * @stability stable
     */
    get statelessDefaultActions() {
        return this.getListAttribute('stateless_default_actions');
    }
    /**
     * @stability stable
     */
    set statelessDefaultActions(value) {
        this._statelessDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statelessDefaultActionsInput() {
        return this._statelessDefaultActions;
    }
    /**
     * @stability stable
     */
    get statelessFragmentDefaultActions() {
        return this.getListAttribute('stateless_fragment_default_actions');
    }
    /**
     * @stability stable
     */
    set statelessFragmentDefaultActions(value) {
        this._statelessFragmentDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statelessFragmentDefaultActionsInput() {
        return this._statelessFragmentDefaultActions;
    }
    /**
     * @stability stable
     */
    get statefulRuleGroupReference() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateful_rule_group_reference');
    }
    /**
     * @stability stable
     */
    set statefulRuleGroupReference(value) {
        this._statefulRuleGroupReference = value;
    }
    /**
     * @stability stable
     */
    resetStatefulRuleGroupReference() {
        this._statefulRuleGroupReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statefulRuleGroupReferenceInput() {
        return this._statefulRuleGroupReference;
    }
    /**
     * @stability stable
     */
    get statelessCustomAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateless_custom_action');
    }
    /**
     * @stability stable
     */
    set statelessCustomAction(value) {
        this._statelessCustomAction = value;
    }
    /**
     * @stability stable
     */
    resetStatelessCustomAction() {
        this._statelessCustomAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statelessCustomActionInput() {
        return this._statelessCustomAction;
    }
    /**
     * @stability stable
     */
    get statelessRuleGroupReference() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateless_rule_group_reference');
    }
    /**
     * @stability stable
     */
    set statelessRuleGroupReference(value) {
        this._statelessRuleGroupReference = value;
    }
    /**
     * @stability stable
     */
    resetStatelessRuleGroupReference() {
        this._statelessRuleGroupReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statelessRuleGroupReferenceInput() {
        return this._statelessRuleGroupReference;
    }
}
exports.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference = NetworkfirewallFirewallPolicyFirewallPolicyOutputReference;
_c = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicyFirewallPolicyOutputReference[_c] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy}.
 *
 * @stability stable
 */
class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_networkfirewall_firewall_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // firewall_policy - computed: false, optional: false, required: true
        this._firewallPolicy = new NetworkfirewallFirewallPolicyFirewallPolicyOutputReference(this, "firewall_policy", true);
        this._description = config.description;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._firewallPolicy.internalValue = config.firewallPolicy;
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
    // update_token - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get updateToken() {
        return this.getStringAttribute('update_token');
    }
    /**
     * @stability stable
     */
    get firewallPolicy() {
        return this._firewallPolicy;
    }
    /**
     * @stability stable
     */
    putFirewallPolicy(value) {
        this._firewallPolicy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get firewallPolicyInput() {
        return this._firewallPolicy.internalValue;
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
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            firewall_policy: networkfirewallFirewallPolicyFirewallPolicyToTerraform(this._firewallPolicy.internalValue),
        };
    }
}
exports.NetworkfirewallFirewallPolicy = NetworkfirewallFirewallPolicy;
_d = JSII_RTTI_SYMBOL_1;
NetworkfirewallFirewallPolicy[_d] = { fqn: "@cdktf/provider-aws.networkfirewall.NetworkfirewallFirewallPolicy", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
NetworkfirewallFirewallPolicy.tfResourceType = "aws_networkfirewall_firewall_policy";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2ZpcmV3YWxsLWZpcmV3YWxsLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrZmlyZXdhbGwvbmV0d29ya2ZpcmV3YWxsLWZpcmV3YWxsLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQW9CL0IsU0FBZ0IsZ0ZBQWdGLENBQUMsTUFBOEU7SUFDN0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFSRCw0S0FRQztBQU9ELFNBQWdCLHVIQUF1SCxDQUFDLE1BQXFIO0lBQzNQLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBUkQsMFBBUUM7QUFPRCxTQUFnQiw4R0FBOEcsQ0FBQyxNQUFpTztJQUM5VixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVIQUF1SCxDQUFDLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN4SyxDQUFBO0FBQ0gsQ0FBQztBQVJELHdPQVFDOzs7O0FBRUQsTUFBYSxrSEFBbUgsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl6SixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXNIO1FBQzdJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFRLENBQUM7SUFDNUQsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQXFIO1FBQ3hJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztBQXpDSCxnUEEwQ0M7OztBQU1ELFNBQWdCLDJGQUEyRixDQUFDLE1BQTJMO0lBQ3JTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsOEdBQThHLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQ25LLENBQUE7QUFDSCxDQUFDO0FBUkQsa01BUUM7Ozs7QUFFRCxNQUFhLCtGQUFnRyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXRJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQTRCOUIsMkVBQTJFO1FBQ25FLHlCQUFvQixHQUFHLElBQUksa0hBQWtILENBQUMsSUFBVyxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBeEJsTSxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLFVBQUksSUFBSSxDQUFDLG9CQUFvQiwwQ0FBRSxhQUFhLEVBQUU7WUFDNUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsU0FBRyxJQUFJLENBQUMsb0JBQW9CLDBDQUFFLGFBQWEsQ0FBQztTQUNwRjtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFtRztRQUMxSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDckQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFDTSxzQkFBc0IsQ0FBQyxLQUEwRztRQUN0SSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDOztBQXhDSCwwTUF5Q0M7OztBQVFELFNBQWdCLDJFQUEyRSxDQUFDLE1BQXlFO0lBQ25LLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELGlCQUFpQixFQUFFLDJGQUEyRixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztLQUN6SSxDQUFBO0FBQ0gsQ0FBQztBQVRELGtLQVNDO0FBU0QsU0FBZ0IsaUZBQWlGLENBQUMsTUFBK0U7SUFDL0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNELENBQUE7QUFDSCxDQUFDO0FBVEQsOEtBU0M7QUFlRCxTQUFnQixzREFBc0QsQ0FBQyxNQUFpSDtJQUN0TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ3JHLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLCtCQUErQixDQUFDO1FBQ3RILDZCQUE2QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDckssdUJBQXVCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUNySiw4QkFBOEIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGlGQUFpRixDQUFDLENBQUMsTUFBTyxDQUFDLDJCQUEyQixDQUFDO0tBQ3pLLENBQUE7QUFDSCxDQUFDO0FBWkQsd0hBWUM7Ozs7QUFFRCxNQUFhLDBEQUEyRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWpHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7U0FDN0U7UUFDRCxJQUFJLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtZQUN6QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3RjtRQUNELElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1NBQ25GO1FBQ0QsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDekU7UUFDRCxJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUNyQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztTQUNyRjtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE4RDtRQUNyRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztZQUMxQyxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsU0FBUyxDQUFDO1lBQ2xELElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7WUFDN0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsU0FBUyxDQUFDO1NBQy9DO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1lBQzlELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUMsK0JBQStCLENBQUM7WUFDOUUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztZQUNwRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1lBQzFELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsMkJBQTJCLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFlO1FBQ2hELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBQ0QsSUFBVywrQkFBK0IsQ0FBQyxLQUFlO1FBQ3hELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9DQUFvQztRQUM3QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMvQyxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLCtCQUErQixDQUFRLENBQUM7SUFDaEYsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBOEU7UUFDbEgsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDOzs7O0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHlCQUF5QixDQUFRLENBQUM7SUFDMUUsQ0FBQzs7OztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBeUU7UUFDeEcsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBSUQsSUFBVywyQkFBMkI7UUFDcEMsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFRLENBQUM7SUFDakYsQ0FBQzs7OztJQUNELElBQVcsMkJBQTJCLENBQUMsS0FBK0U7UUFDcEgsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sZ0NBQWdDO1FBQ3JDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDOztBQWhJSCxnSUFpSUM7Ozs7Ozs7O0FBR0QsTUFBYSw2QkFBOEIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3hFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEyQztRQUMxRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFDQUFxQztZQUM1RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBMEZMLHFFQUFxRTtRQUM3RCxvQkFBZSxHQUFHLElBQUksMERBQTBELENBQUMsSUFBVyxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBMUY3SCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFRLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQW9EO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsa0VBQWtFOzs7O0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00saUJBQWlCLENBQUMsS0FBa0Q7UUFDekUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdkQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGVBQWUsRUFBRSxzREFBc0QsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztTQUM1RyxDQUFDO0lBQ0osQ0FBQzs7QUF6SUgsc0VBMElDOzs7QUF4SUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw0Q0FBYyxHQUFXLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaXJld2FsbFBvbGljeTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb25EaW1lbnNpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkaW1lbnNpb246IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uT3V0cHV0UmVmZXJlbmNlIHwgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvblRvVGVycmFmb3JtKShzdHJ1Y3QhLmRpbWVuc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RpbWVuc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGltZW5zaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kaW1lbnNpb24gPSB2YWx1ZS5kaW1lbnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZGltZW5zaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RpbWVuc2lvbj86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbkRpbWVuc2lvbltdOyBcbiAgcHVibGljIGdldCBkaW1lbnNpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RpbWVuc2lvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpbWVuc2lvbih2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uRGltZW5zaW9uW10pIHtcbiAgICB0aGlzLl9kaW1lbnNpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHB1Ymxpc2hNZXRyaWNBY3Rpb246IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uUHVibGlzaE1ldHJpY0FjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25BY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHB1Ymxpc2hfbWV0cmljX2FjdGlvbjogbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wdWJsaXNoTWV0cmljQWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnB1Ymxpc2hNZXRyaWNBY3Rpb24gPSB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3B1Ymxpc2hNZXRyaWNBY3Rpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnB1Ymxpc2hNZXRyaWNBY3Rpb247XG4gICAgfVxuICB9XG5cbiAgLy8gcHVibGlzaF9tZXRyaWNfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3B1Ymxpc2hNZXRyaWNBY3Rpb24gPSBuZXcgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb25QdWJsaXNoTWV0cmljQWN0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInB1Ymxpc2hfbWV0cmljX2FjdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwdWJsaXNoTWV0cmljQWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRQdWJsaXNoTWV0cmljQWN0aW9uKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblB1Ymxpc2hNZXRyaWNBY3Rpb24pIHtcbiAgICB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHVibGlzaE1ldHJpY0FjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaXNoTWV0cmljQWN0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uRGVmaW5pdGlvbjogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbkFjdGlvbkRlZmluaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvbk5hbWUpLFxuICAgIGFjdGlvbl9kZWZpbml0aW9uOiBuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzQ3VzdG9tQWN0aW9uQWN0aW9uRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uRGVmaW5pdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZVRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9uczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlPzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRlbGVzc0N1c3RvbUFjdGlvbj86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlPzogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVRvVGVycmFmb3JtKHN0cnVjdD86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lPdXRwdXRSZWZlcmVuY2UgfCBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdGVsZXNzX2RlZmF1bHRfYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucyksXG4gICAgc3RhdGVsZXNzX2ZyYWdtZW50X2RlZmF1bHRfYWN0aW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zKSxcbiAgICBzdGF0ZWZ1bF9ydWxlX2dyb3VwX3JlZmVyZW5jZTogY2RrdGYubGlzdE1hcHBlcihuZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2VUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSksXG4gICAgc3RhdGVsZXNzX2N1c3RvbV9hY3Rpb246IGNka3RmLmxpc3RNYXBwZXIobmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvblRvVGVycmFmb3JtKShzdHJ1Y3QhLnN0YXRlbGVzc0N1c3RvbUFjdGlvbiksXG4gICAgc3RhdGVsZXNzX3J1bGVfZ3JvdXBfcmVmZXJlbmNlOiBjZGt0Zi5saXN0TWFwcGVyKG5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VUb1RlcnJhZm9ybSkoc3RydWN0IS5zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3kgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3N0YXRlbGVzc0RlZmF1bHRBY3Rpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucyA9IHRoaXMuX3N0YXRlbGVzc0RlZmF1bHRBY3Rpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucyA9IHRoaXMuX3N0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UgPSB0aGlzLl9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXRlbGVzc0N1c3RvbUFjdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGVsZXNzQ3VzdG9tQWN0aW9uID0gdGhpcy5fc3RhdGVsZXNzQ3VzdG9tQWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UgPSB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NDdXN0b21BY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3N0YXRlbGVzc0RlZmF1bHRBY3Rpb25zID0gdmFsdWUuc3RhdGVsZXNzRGVmYXVsdEFjdGlvbnM7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zID0gdmFsdWUuc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucztcbiAgICAgIHRoaXMuX3N0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlID0gdmFsdWUuc3RhdGVmdWxSdWxlR3JvdXBSZWZlcmVuY2U7XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NDdXN0b21BY3Rpb24gPSB2YWx1ZS5zdGF0ZWxlc3NDdXN0b21BY3Rpb247XG4gICAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UgPSB2YWx1ZS5zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2U7XG4gICAgfVxuICB9XG5cbiAgLy8gc3RhdGVsZXNzX2RlZmF1bHRfYWN0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdGF0ZWxlc3NfZGVmYXVsdF9hY3Rpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWxlc3NEZWZhdWx0QWN0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWxlc3NEZWZhdWx0QWN0aW9ucztcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19mcmFnbWVudF9kZWZhdWx0X2FjdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N0YXRlbGVzc19mcmFnbWVudF9kZWZhdWx0X2FjdGlvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzRnJhZ21lbnREZWZhdWx0QWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWxlc3NGcmFnbWVudERlZmF1bHRBY3Rpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlbGVzc0ZyYWdtZW50RGVmYXVsdEFjdGlvbnM7XG4gIH1cblxuICAvLyBzdGF0ZWZ1bF9ydWxlX2dyb3VwX3JlZmVyZW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZT86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZVtdOyBcbiAgcHVibGljIGdldCBzdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGVmdWxfcnVsZV9ncm91cF9yZWZlcmVuY2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSh2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlW10pIHtcbiAgICB0aGlzLl9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlKCkge1xuICAgIHRoaXMuX3N0YXRlZnVsUnVsZUdyb3VwUmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZWZ1bFJ1bGVHcm91cFJlZmVyZW5jZTtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19jdXN0b21fYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlbGVzc0N1c3RvbUFjdGlvbj86IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5RmlyZXdhbGxQb2xpY3lTdGF0ZWxlc3NDdXN0b21BY3Rpb25bXTsgXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzQ3VzdG9tQWN0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGF0ZWxlc3NfY3VzdG9tX2FjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlbGVzc0N1c3RvbUFjdGlvbih2YWx1ZTogTmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVN0YXRlbGVzc0N1c3RvbUFjdGlvbltdKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzQ3VzdG9tQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGVsZXNzQ3VzdG9tQWN0aW9uKCkge1xuICAgIHRoaXMuX3N0YXRlbGVzc0N1c3RvbUFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVsZXNzQ3VzdG9tQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlbGVzc0N1c3RvbUFjdGlvbjtcbiAgfVxuXG4gIC8vIHN0YXRlbGVzc19ydWxlX2dyb3VwX3JlZmVyZW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2U/OiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlW107IFxuICBwdWJsaWMgZ2V0IHN0YXRlbGVzc1J1bGVHcm91cFJlZmVyZW5jZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGVsZXNzX3J1bGVfZ3JvdXBfcmVmZXJlbmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlKHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5U3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlW10pIHtcbiAgICB0aGlzLl9zdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2UoKSB7XG4gICAgdGhpcy5fc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZWxlc3NSdWxlR3JvdXBSZWZlcmVuY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVsZXNzUnVsZUdyb3VwUmVmZXJlbmNlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19uZXR3b3JrZmlyZXdhbGxfZmlyZXdhbGxfcG9saWN5XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE5ldHdvcmtmaXJld2FsbEZpcmV3YWxsUG9saWN5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbmV0d29ya2ZpcmV3YWxsX2ZpcmV3YWxsX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9maXJld2FsbFBvbGljeS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmZpcmV3YWxsUG9saWN5O1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdXBkYXRlX3Rva2VuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXBkYXRlVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cGRhdGVfdG9rZW4nKTtcbiAgfVxuXG4gIC8vIGZpcmV3YWxsX3BvbGljeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maXJld2FsbFBvbGljeSA9IG5ldyBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZpcmV3YWxsX3BvbGljeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmaXJld2FsbFBvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZXdhbGxQb2xpY3k7XG4gIH1cbiAgcHVibGljIHB1dEZpcmV3YWxsUG9saWN5KHZhbHVlOiBOZXR3b3JrZmlyZXdhbGxGaXJld2FsbFBvbGljeUZpcmV3YWxsUG9saWN5KSB7XG4gICAgdGhpcy5fZmlyZXdhbGxQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaXJld2FsbFBvbGljeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maXJld2FsbFBvbGljeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGZpcmV3YWxsX3BvbGljeTogbmV0d29ya2ZpcmV3YWxsRmlyZXdhbGxQb2xpY3lGaXJld2FsbFBvbGljeVRvVGVycmFmb3JtKHRoaXMuX2ZpcmV3YWxsUG9saWN5LmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==