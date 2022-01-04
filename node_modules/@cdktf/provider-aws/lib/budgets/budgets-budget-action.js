"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsBudgetAction = exports.budgetsBudgetActionSubscriberToTerraform = exports.BudgetsBudgetActionDefinitionOutputReference = exports.budgetsBudgetActionDefinitionToTerraform = exports.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference = exports.budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform = exports.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference = exports.budgetsBudgetActionDefinitionScpActionDefinitionToTerraform = exports.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference = exports.budgetsBudgetActionDefinitionIamActionDefinitionToTerraform = exports.BudgetsBudgetActionActionThresholdOutputReference = exports.budgetsBudgetActionActionThresholdToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function budgetsBudgetActionActionThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_threshold_type: cdktf.stringToTerraform(struct.actionThresholdType),
        action_threshold_value: cdktf.numberToTerraform(struct.actionThresholdValue),
    };
}
exports.budgetsBudgetActionActionThresholdToTerraform = budgetsBudgetActionActionThresholdToTerraform;
/**
 * @stability stable
 */
class BudgetsBudgetActionActionThresholdOutputReference extends cdktf.ComplexObject {
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
        if (this._actionThresholdType) {
            hasAnyValues = true;
            internalValueResult.actionThresholdType = this._actionThresholdType;
        }
        if (this._actionThresholdValue) {
            hasAnyValues = true;
            internalValueResult.actionThresholdValue = this._actionThresholdValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._actionThresholdType = undefined;
            this._actionThresholdValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._actionThresholdType = value.actionThresholdType;
            this._actionThresholdValue = value.actionThresholdValue;
        }
    }
    /**
     * @stability stable
     */
    get actionThresholdType() {
        return this.getStringAttribute('action_threshold_type');
    }
    /**
     * @stability stable
     */
    set actionThresholdType(value) {
        this._actionThresholdType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionThresholdTypeInput() {
        return this._actionThresholdType;
    }
    /**
     * @stability stable
     */
    get actionThresholdValue() {
        return this.getNumberAttribute('action_threshold_value');
    }
    /**
     * @stability stable
     */
    set actionThresholdValue(value) {
        this._actionThresholdValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionThresholdValueInput() {
        return this._actionThresholdValue;
    }
}
exports.BudgetsBudgetActionActionThresholdOutputReference = BudgetsBudgetActionActionThresholdOutputReference;
_a = JSII_RTTI_SYMBOL_1;
BudgetsBudgetActionActionThresholdOutputReference[_a] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudgetActionActionThresholdOutputReference", version: "3.0.1" };
function budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.groups),
        policy_arn: cdktf.stringToTerraform(struct.policyArn),
        roles: cdktf.listMapper(cdktf.stringToTerraform)(struct.roles),
        users: cdktf.listMapper(cdktf.stringToTerraform)(struct.users),
    };
}
exports.budgetsBudgetActionDefinitionIamActionDefinitionToTerraform = budgetsBudgetActionDefinitionIamActionDefinitionToTerraform;
/**
 * @stability stable
 */
class BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference extends cdktf.ComplexObject {
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
        if (this._groups) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups;
        }
        if (this._policyArn) {
            hasAnyValues = true;
            internalValueResult.policyArn = this._policyArn;
        }
        if (this._roles) {
            hasAnyValues = true;
            internalValueResult.roles = this._roles;
        }
        if (this._users) {
            hasAnyValues = true;
            internalValueResult.users = this._users;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._groups = undefined;
            this._policyArn = undefined;
            this._roles = undefined;
            this._users = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._groups = value.groups;
            this._policyArn = value.policyArn;
            this._roles = value.roles;
            this._users = value.users;
        }
    }
    /**
     * @stability stable
     */
    get groups() {
        return this.getListAttribute('groups');
    }
    /**
     * @stability stable
     */
    set groups(value) {
        this._groups = value;
    }
    /**
     * @stability stable
     */
    resetGroups() {
        this._groups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get groupsInput() {
        return this._groups;
    }
    /**
     * @stability stable
     */
    get policyArn() {
        return this.getStringAttribute('policy_arn');
    }
    /**
     * @stability stable
     */
    set policyArn(value) {
        this._policyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyArnInput() {
        return this._policyArn;
    }
    /**
     * @stability stable
     */
    get roles() {
        return this.getListAttribute('roles');
    }
    /**
     * @stability stable
     */
    set roles(value) {
        this._roles = value;
    }
    /**
     * @stability stable
     */
    resetRoles() {
        this._roles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rolesInput() {
        return this._roles;
    }
    /**
     * @stability stable
     */
    get users() {
        return this.getListAttribute('users');
    }
    /**
     * @stability stable
     */
    set users(value) {
        this._users = value;
    }
    /**
     * @stability stable
     */
    resetUsers() {
        this._users = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usersInput() {
        return this._users;
    }
}
exports.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference = BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference;
_b = JSII_RTTI_SYMBOL_1;
BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference[_b] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference", version: "3.0.1" };
function budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        policy_id: cdktf.stringToTerraform(struct.policyId),
        target_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.targetIds),
    };
}
exports.budgetsBudgetActionDefinitionScpActionDefinitionToTerraform = budgetsBudgetActionDefinitionScpActionDefinitionToTerraform;
/**
 * @stability stable
 */
class BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference extends cdktf.ComplexObject {
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
        if (this._policyId) {
            hasAnyValues = true;
            internalValueResult.policyId = this._policyId;
        }
        if (this._targetIds) {
            hasAnyValues = true;
            internalValueResult.targetIds = this._targetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._policyId = undefined;
            this._targetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._policyId = value.policyId;
            this._targetIds = value.targetIds;
        }
    }
    /**
     * @stability stable
     */
    get policyId() {
        return this.getStringAttribute('policy_id');
    }
    /**
     * @stability stable
     */
    set policyId(value) {
        this._policyId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get policyIdInput() {
        return this._policyId;
    }
    /**
     * @stability stable
     */
    get targetIds() {
        return this.getListAttribute('target_ids');
    }
    /**
     * @stability stable
     */
    set targetIds(value) {
        this._targetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetIdsInput() {
        return this._targetIds;
    }
}
exports.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference = BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference;
_c = JSII_RTTI_SYMBOL_1;
BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference[_c] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference", version: "3.0.1" };
function budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_sub_type: cdktf.stringToTerraform(struct.actionSubType),
        instance_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.instanceIds),
        region: cdktf.stringToTerraform(struct.region),
    };
}
exports.budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform = budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform;
/**
 * @stability stable
 */
class BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference extends cdktf.ComplexObject {
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
        if (this._actionSubType) {
            hasAnyValues = true;
            internalValueResult.actionSubType = this._actionSubType;
        }
        if (this._instanceIds) {
            hasAnyValues = true;
            internalValueResult.instanceIds = this._instanceIds;
        }
        if (this._region) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._actionSubType = undefined;
            this._instanceIds = undefined;
            this._region = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._actionSubType = value.actionSubType;
            this._instanceIds = value.instanceIds;
            this._region = value.region;
        }
    }
    /**
     * @stability stable
     */
    get actionSubType() {
        return this.getStringAttribute('action_sub_type');
    }
    /**
     * @stability stable
     */
    set actionSubType(value) {
        this._actionSubType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionSubTypeInput() {
        return this._actionSubType;
    }
    /**
     * @stability stable
     */
    get instanceIds() {
        return this.getListAttribute('instance_ids');
    }
    /**
     * @stability stable
     */
    set instanceIds(value) {
        this._instanceIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceIdsInput() {
        return this._instanceIds;
    }
    /**
     * @stability stable
     */
    get region() {
        return this.getStringAttribute('region');
    }
    /**
     * @stability stable
     */
    set region(value) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regionInput() {
        return this._region;
    }
}
exports.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference = BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference;
_d = JSII_RTTI_SYMBOL_1;
BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference[_d] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference", version: "3.0.1" };
function budgetsBudgetActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iam_action_definition: budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct.iamActionDefinition),
        scp_action_definition: budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct.scpActionDefinition),
        ssm_action_definition: budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct.ssmActionDefinition),
    };
}
exports.budgetsBudgetActionDefinitionToTerraform = budgetsBudgetActionDefinitionToTerraform;
/**
 * @stability stable
 */
class BudgetsBudgetActionDefinitionOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // iam_action_definition - computed: false, optional: true, required: false
        this._iamActionDefinition = new BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference(this, "iam_action_definition", true);
        // scp_action_definition - computed: false, optional: true, required: false
        this._scpActionDefinition = new BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference(this, "scp_action_definition", true);
        // ssm_action_definition - computed: false, optional: true, required: false
        this._ssmActionDefinition = new BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference(this, "ssm_action_definition", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _g, _h, _j, _k, _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_g = this._iamActionDefinition) === null || _g === void 0 ? void 0 : _g.internalValue) {
            hasAnyValues = true;
            internalValueResult.iamActionDefinition = (_h = this._iamActionDefinition) === null || _h === void 0 ? void 0 : _h.internalValue;
        }
        if ((_j = this._scpActionDefinition) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.scpActionDefinition = (_k = this._scpActionDefinition) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        if ((_l = this._ssmActionDefinition) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.ssmActionDefinition = (_m = this._ssmActionDefinition) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._iamActionDefinition.internalValue = undefined;
            this._scpActionDefinition.internalValue = undefined;
            this._ssmActionDefinition.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._iamActionDefinition.internalValue = value.iamActionDefinition;
            this._scpActionDefinition.internalValue = value.scpActionDefinition;
            this._ssmActionDefinition.internalValue = value.ssmActionDefinition;
        }
    }
    /**
     * @stability stable
     */
    get iamActionDefinition() {
        return this._iamActionDefinition;
    }
    /**
     * @stability stable
     */
    putIamActionDefinition(value) {
        this._iamActionDefinition.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIamActionDefinition() {
        this._iamActionDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamActionDefinitionInput() {
        return this._iamActionDefinition.internalValue;
    }
    /**
     * @stability stable
     */
    get scpActionDefinition() {
        return this._scpActionDefinition;
    }
    /**
     * @stability stable
     */
    putScpActionDefinition(value) {
        this._scpActionDefinition.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetScpActionDefinition() {
        this._scpActionDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scpActionDefinitionInput() {
        return this._scpActionDefinition.internalValue;
    }
    /**
     * @stability stable
     */
    get ssmActionDefinition() {
        return this._ssmActionDefinition;
    }
    /**
     * @stability stable
     */
    putSsmActionDefinition(value) {
        this._ssmActionDefinition.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSsmActionDefinition() {
        this._ssmActionDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ssmActionDefinitionInput() {
        return this._ssmActionDefinition.internalValue;
    }
}
exports.BudgetsBudgetActionDefinitionOutputReference = BudgetsBudgetActionDefinitionOutputReference;
_e = JSII_RTTI_SYMBOL_1;
BudgetsBudgetActionDefinitionOutputReference[_e] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudgetActionDefinitionOutputReference", version: "3.0.1" };
function budgetsBudgetActionSubscriberToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        subscription_type: cdktf.stringToTerraform(struct.subscriptionType),
    };
}
exports.budgetsBudgetActionSubscriberToTerraform = budgetsBudgetActionSubscriberToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action}.
 *
 * @stability stable
 */
class BudgetsBudgetAction extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_budgets_budget_action',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // action_threshold - computed: false, optional: false, required: true
        this._actionThreshold = new BudgetsBudgetActionActionThresholdOutputReference(this, "action_threshold", true);
        // definition - computed: false, optional: false, required: true
        this._definition = new BudgetsBudgetActionDefinitionOutputReference(this, "definition", true);
        this._accountId = config.accountId;
        this._actionType = config.actionType;
        this._approvalModel = config.approvalModel;
        this._budgetName = config.budgetName;
        this._executionRoleArn = config.executionRoleArn;
        this._notificationType = config.notificationType;
        this._actionThreshold.internalValue = config.actionThreshold;
        this._definition.internalValue = config.definition;
        this._subscriber = config.subscriber;
    }
    /**
     * @stability stable
     */
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    /**
     * @stability stable
     */
    set accountId(value) {
        this._accountId = value;
    }
    /**
     * @stability stable
     */
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountIdInput() {
        return this._accountId;
    }
    // action_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get actionId() {
        return this.getStringAttribute('action_id');
    }
    /**
     * @stability stable
     */
    get actionType() {
        return this.getStringAttribute('action_type');
    }
    /**
     * @stability stable
     */
    set actionType(value) {
        this._actionType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionTypeInput() {
        return this._actionType;
    }
    /**
     * @stability stable
     */
    get approvalModel() {
        return this.getStringAttribute('approval_model');
    }
    /**
     * @stability stable
     */
    set approvalModel(value) {
        this._approvalModel = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get approvalModelInput() {
        return this._approvalModel;
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
    get budgetName() {
        return this.getStringAttribute('budget_name');
    }
    /**
     * @stability stable
     */
    set budgetName(value) {
        this._budgetName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get budgetNameInput() {
        return this._budgetName;
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
    get notificationType() {
        return this.getStringAttribute('notification_type');
    }
    /**
     * @stability stable
     */
    set notificationType(value) {
        this._notificationType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationTypeInput() {
        return this._notificationType;
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    get actionThreshold() {
        return this._actionThreshold;
    }
    /**
     * @stability stable
     */
    putActionThreshold(value) {
        this._actionThreshold.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionThresholdInput() {
        return this._actionThreshold.internalValue;
    }
    /**
     * @stability stable
     */
    get definition() {
        return this._definition;
    }
    /**
     * @stability stable
     */
    putDefinition(value) {
        this._definition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get definitionInput() {
        return this._definition.internalValue;
    }
    /**
     * @stability stable
     */
    get subscriber() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('subscriber');
    }
    /**
     * @stability stable
     */
    set subscriber(value) {
        this._subscriber = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subscriberInput() {
        return this._subscriber;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            action_type: cdktf.stringToTerraform(this._actionType),
            approval_model: cdktf.stringToTerraform(this._approvalModel),
            budget_name: cdktf.stringToTerraform(this._budgetName),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            notification_type: cdktf.stringToTerraform(this._notificationType),
            action_threshold: budgetsBudgetActionActionThresholdToTerraform(this._actionThreshold.internalValue),
            definition: budgetsBudgetActionDefinitionToTerraform(this._definition.internalValue),
            subscriber: cdktf.listMapper(budgetsBudgetActionSubscriberToTerraform)(this._subscriber),
        };
    }
}
exports.BudgetsBudgetAction = BudgetsBudgetAction;
_f = JSII_RTTI_SYMBOL_1;
BudgetsBudgetAction[_f] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudgetAction", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
BudgetsBudgetAction.tfResourceType = "aws_budgets_budget_action";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0cy1idWRnZXQtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2J1ZGdldHMvYnVkZ2V0cy1idWRnZXQtYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBOEIvQixTQUFnQiw2Q0FBNkMsQ0FBQyxNQUErRjtJQUMzSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDM0Usc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztLQUM5RSxDQUFBO0FBQ0gsQ0FBQztBQVRELHNHQVNDOzs7O0FBRUQsTUFBYSxpREFBa0QsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl4RixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFD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RUFBRSx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUNwRixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekYsQ0FBQztJQUNKLENBQUM7O0FBbk1ILGtEQW9NQzs7O0FBbE1DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csa0NBQWMsR0FBVywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZGdldHNCdWRnZXRBY3Rpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb25UeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHByb3ZhbE1vZGVsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWRnZXROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4ZWN1dGlvblJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvblR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvblRocmVzaG9sZDogQnVkZ2V0c0J1ZGdldEFjdGlvbkFjdGlvblRocmVzaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmluaXRpb246IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3Vic2NyaWJlcjogQnVkZ2V0c0J1ZGdldEFjdGlvblN1YnNjcmliZXJbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0J1ZGdldEFjdGlvbkFjdGlvblRocmVzaG9sZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGlvblRocmVzaG9sZFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb25UaHJlc2hvbGRWYWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVkZ2V0c0J1ZGdldEFjdGlvbkFjdGlvblRocmVzaG9sZFRvVGVycmFmb3JtKHN0cnVjdD86IEJ1ZGdldHNCdWRnZXRBY3Rpb25BY3Rpb25UaHJlc2hvbGRPdXRwdXRSZWZlcmVuY2UgfCBCdWRnZXRzQnVkZ2V0QWN0aW9uQWN0aW9uVGhyZXNob2xkKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uX3RocmVzaG9sZF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvblRocmVzaG9sZFR5cGUpLFxuICAgIGFjdGlvbl90aHJlc2hvbGRfdmFsdWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYWN0aW9uVGhyZXNob2xkVmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdWRnZXRzQnVkZ2V0QWN0aW9uQWN0aW9uVGhyZXNob2xkT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEJ1ZGdldHNCdWRnZXRBY3Rpb25BY3Rpb25UaHJlc2hvbGQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvblRocmVzaG9sZFR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvblRocmVzaG9sZFR5cGUgPSB0aGlzLl9hY3Rpb25UaHJlc2hvbGRUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYWN0aW9uVGhyZXNob2xkVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvblRocmVzaG9sZFZhbHVlID0gdGhpcy5fYWN0aW9uVGhyZXNob2xkVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBCdWRnZXRzQnVkZ2V0QWN0aW9uQWN0aW9uVGhyZXNob2xkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWN0aW9uVGhyZXNob2xkVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2FjdGlvblRocmVzaG9sZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hY3Rpb25UaHJlc2hvbGRUeXBlID0gdmFsdWUuYWN0aW9uVGhyZXNob2xkVHlwZTtcbiAgICAgIHRoaXMuX2FjdGlvblRocmVzaG9sZFZhbHVlID0gdmFsdWUuYWN0aW9uVGhyZXNob2xkVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aW9uX3RocmVzaG9sZF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvblRocmVzaG9sZFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjdGlvblRocmVzaG9sZFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY3Rpb25fdGhyZXNob2xkX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjdGlvblRocmVzaG9sZFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdGlvblRocmVzaG9sZFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uVGhyZXNob2xkVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25UaHJlc2hvbGRUeXBlO1xuICB9XG5cbiAgLy8gYWN0aW9uX3RocmVzaG9sZF92YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY3Rpb25UaHJlc2hvbGRWYWx1ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uVGhyZXNob2xkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhY3Rpb25fdGhyZXNob2xkX3ZhbHVlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb25UaHJlc2hvbGRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWN0aW9uVGhyZXNob2xkVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aW9uVGhyZXNob2xkVmFsdWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uVGhyZXNob2xkVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25JYW1BY3Rpb25EZWZpbml0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JvdXBzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9saWN5QXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlcnM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uSWFtQWN0aW9uRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uSWFtQWN0aW9uRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSB8IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uSWFtQWN0aW9uRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ncm91cHMpLFxuICAgIHBvbGljeV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9saWN5QXJuKSxcbiAgICByb2xlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5yb2xlcyksXG4gICAgdXNlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudXNlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvbklhbUFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25JYW1BY3Rpb25EZWZpbml0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ncm91cHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmdyb3VwcyA9IHRoaXMuX2dyb3VwcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvbGljeUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucG9saWN5QXJuID0gdGhpcy5fcG9saWN5QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVzID0gdGhpcy5fcm9sZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2Vycykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlcnMgPSB0aGlzLl91c2VycztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uSWFtQWN0aW9uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dyb3VwcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BvbGljeUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlcnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2dyb3VwcyA9IHZhbHVlLmdyb3VwcztcbiAgICAgIHRoaXMuX3BvbGljeUFybiA9IHZhbHVlLnBvbGljeUFybjtcbiAgICAgIHRoaXMuX3JvbGVzID0gdmFsdWUucm9sZXM7XG4gICAgICB0aGlzLl91c2VycyA9IHZhbHVlLnVzZXJzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdyb3VwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncm91cHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZ3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2dyb3VwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ3JvdXBzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2dyb3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdyb3VwcygpIHtcbiAgICB0aGlzLl9ncm91cHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdyb3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ncm91cHM7XG4gIH1cblxuICAvLyBwb2xpY3lfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BvbGljeUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcG9saWN5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9saWN5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9saWN5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wb2xpY3lBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9saWN5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbGljeUFybjtcbiAgfVxuXG4gIC8vIHJvbGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JvbGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHJvbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JvbGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9yb2xlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvbGVzKCkge1xuICAgIHRoaXMuX3JvbGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlcztcbiAgfVxuXG4gIC8vIHVzZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHVzZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3VzZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2Vycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl91c2VycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJzKCkge1xuICAgIHRoaXMuX3VzZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2Vyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VycztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvblNjcEFjdGlvbkRlZmluaXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb2xpY3lJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldElkczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvblNjcEFjdGlvbkRlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvblNjcEFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvblNjcEFjdGlvbkRlZmluaXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwb2xpY3lfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucG9saWN5SWQpLFxuICAgIHRhcmdldF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGFyZ2V0SWRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25TY3BBY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uU2NwQWN0aW9uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcG9saWN5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvbGljeUlkID0gdGhpcy5fcG9saWN5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXJnZXRJZHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhcmdldElkcyA9IHRoaXMuX3RhcmdldElkcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uU2NwQWN0aW9uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3BvbGljeUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFyZ2V0SWRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wb2xpY3lJZCA9IHZhbHVlLnBvbGljeUlkO1xuICAgICAgdGhpcy5fdGFyZ2V0SWRzID0gdmFsdWUudGFyZ2V0SWRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBvbGljeV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wb2xpY3lJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcG9saWN5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb2xpY3lfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvbGljeUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wb2xpY3lJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwb2xpY3lJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb2xpY3lJZDtcbiAgfVxuXG4gIC8vIHRhcmdldF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFyZ2V0SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRhcmdldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0YXJnZXRfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXJnZXRJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGFyZ2V0SWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRJZHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25Tc21BY3Rpb25EZWZpbml0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWN0aW9uU3ViVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZUlkczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZ2lvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25Tc21BY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25Tc21BY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25Tc21BY3Rpb25EZWZpbml0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aW9uX3N1Yl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjdGlvblN1YlR5cGUpLFxuICAgIGluc3RhbmNlX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pbnN0YW5jZUlkcyksXG4gICAgcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZ2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uU3NtQWN0aW9uRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvblNzbUFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FjdGlvblN1YlR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjdGlvblN1YlR5cGUgPSB0aGlzLl9hY3Rpb25TdWJUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VJZHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlSWRzID0gdGhpcy5faW5zdGFuY2VJZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWdpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZ2lvbiA9IHRoaXMuX3JlZ2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uU3NtQWN0aW9uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdGlvblN1YlR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZUlkcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZ2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWN0aW9uU3ViVHlwZSA9IHZhbHVlLmFjdGlvblN1YlR5cGU7XG4gICAgICB0aGlzLl9pbnN0YW5jZUlkcyA9IHZhbHVlLmluc3RhbmNlSWRzO1xuICAgICAgdGhpcy5fcmVnaW9uID0gdmFsdWUucmVnaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjdGlvbl9zdWJfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY3Rpb25TdWJUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY3Rpb25TdWJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aW9uX3N1Yl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb25TdWJUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpb25TdWJUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvblN1YlR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uU3ViVHlwZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbnN0YW5jZUlkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZUlkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpbnN0YW5jZV9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2luc3RhbmNlSWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlSWRzO1xuICB9XG5cbiAgLy8gcmVnaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlZ2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWdpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlZ2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWdpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbUFjdGlvbkRlZmluaXRpb24/OiBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvbklhbUFjdGlvbkRlZmluaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY3BBY3Rpb25EZWZpbml0aW9uPzogQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25TY3BBY3Rpb25EZWZpbml0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NtQWN0aW9uRGVmaW5pdGlvbj86IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uU3NtQWN0aW9uRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UgfCBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlhbV9hY3Rpb25fZGVmaW5pdGlvbjogYnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25JYW1BY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5pYW1BY3Rpb25EZWZpbml0aW9uKSxcbiAgICBzY3BfYWN0aW9uX2RlZmluaXRpb246IGJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uU2NwQWN0aW9uRGVmaW5pdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc2NwQWN0aW9uRGVmaW5pdGlvbiksXG4gICAgc3NtX2FjdGlvbl9kZWZpbml0aW9uOiBidWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvblNzbUFjdGlvbkRlZmluaXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNzbUFjdGlvbkRlZmluaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faWFtQWN0aW9uRGVmaW5pdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWFtQWN0aW9uRGVmaW5pdGlvbiA9IHRoaXMuX2lhbUFjdGlvbkRlZmluaXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY3BBY3Rpb25EZWZpbml0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY3BBY3Rpb25EZWZpbml0aW9uID0gdGhpcy5fc2NwQWN0aW9uRGVmaW5pdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NzbUFjdGlvbkRlZmluaXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzbUFjdGlvbkRlZmluaXRpb24gPSB0aGlzLl9zc21BY3Rpb25EZWZpbml0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pYW1BY3Rpb25EZWZpbml0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY3BBY3Rpb25EZWZpbml0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc21BY3Rpb25EZWZpbml0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lhbUFjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlhbUFjdGlvbkRlZmluaXRpb247XG4gICAgICB0aGlzLl9zY3BBY3Rpb25EZWZpbml0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zY3BBY3Rpb25EZWZpbml0aW9uO1xuICAgICAgdGhpcy5fc3NtQWN0aW9uRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3NtQWN0aW9uRGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBpYW1fYWN0aW9uX2RlZmluaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWFtQWN0aW9uRGVmaW5pdGlvbiA9IG5ldyBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvbklhbUFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaWFtX2FjdGlvbl9kZWZpbml0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlhbUFjdGlvbkRlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbUFjdGlvbkRlZmluaXRpb247XG4gIH1cbiAgcHVibGljIHB1dElhbUFjdGlvbkRlZmluaXRpb24odmFsdWU6IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uSWFtQWN0aW9uRGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2lhbUFjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElhbUFjdGlvbkRlZmluaXRpb24oKSB7XG4gICAgdGhpcy5faWFtQWN0aW9uRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYW1BY3Rpb25EZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbUFjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNjcF9hY3Rpb25fZGVmaW5pdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY3BBY3Rpb25EZWZpbml0aW9uID0gbmV3IEJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uU2NwQWN0aW9uRGVmaW5pdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzY3BfYWN0aW9uX2RlZmluaXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2NwQWN0aW9uRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NwQWN0aW9uRGVmaW5pdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0U2NwQWN0aW9uRGVmaW5pdGlvbih2YWx1ZTogQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25TY3BBY3Rpb25EZWZpbml0aW9uKSB7XG4gICAgdGhpcy5fc2NwQWN0aW9uRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NwQWN0aW9uRGVmaW5pdGlvbigpIHtcbiAgICB0aGlzLl9zY3BBY3Rpb25EZWZpbml0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjcEFjdGlvbkRlZmluaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NwQWN0aW9uRGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3NtX2FjdGlvbl9kZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzbUFjdGlvbkRlZmluaXRpb24gPSBuZXcgQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25Tc21BY3Rpb25EZWZpbml0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNzbV9hY3Rpb25fZGVmaW5pdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzc21BY3Rpb25EZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zc21BY3Rpb25EZWZpbml0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTc21BY3Rpb25EZWZpbml0aW9uKHZhbHVlOiBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvblNzbUFjdGlvbkRlZmluaXRpb24pIHtcbiAgICB0aGlzLl9zc21BY3Rpb25EZWZpbml0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc21BY3Rpb25EZWZpbml0aW9uKCkge1xuICAgIHRoaXMuX3NzbUFjdGlvbkRlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NtQWN0aW9uRGVmaW5pdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc21BY3Rpb25EZWZpbml0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0J1ZGdldEFjdGlvblN1YnNjcmliZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1YnNjcmlwdGlvblR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZGdldHNCdWRnZXRBY3Rpb25TdWJzY3JpYmVyVG9UZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldEFjdGlvblN1YnNjcmliZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFkZHJlc3MpLFxuICAgIHN1YnNjcmlwdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN1YnNjcmlwdGlvblR5cGUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBCdWRnZXRzQnVkZ2V0QWN0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2J1ZGdldHNfYnVkZ2V0X2FjdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBCdWRnZXRzQnVkZ2V0QWN0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYnVkZ2V0c19idWRnZXRfYWN0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FjY291bnRJZCA9IGNvbmZpZy5hY2NvdW50SWQ7XG4gICAgdGhpcy5fYWN0aW9uVHlwZSA9IGNvbmZpZy5hY3Rpb25UeXBlO1xuICAgIHRoaXMuX2FwcHJvdmFsTW9kZWwgPSBjb25maWcuYXBwcm92YWxNb2RlbDtcbiAgICB0aGlzLl9idWRnZXROYW1lID0gY29uZmlnLmJ1ZGdldE5hbWU7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IGNvbmZpZy5leGVjdXRpb25Sb2xlQXJuO1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblR5cGUgPSBjb25maWcubm90aWZpY2F0aW9uVHlwZTtcbiAgICB0aGlzLl9hY3Rpb25UaHJlc2hvbGQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hY3Rpb25UaHJlc2hvbGQ7XG4gICAgdGhpcy5fZGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmRlZmluaXRpb247XG4gICAgdGhpcy5fc3Vic2NyaWJlciA9IGNvbmZpZy5zdWJzY3JpYmVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWNjb3VudElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2NvdW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2NvdW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2NvdW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY291bnRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjY291bnRJZCgpIHtcbiAgICB0aGlzLl9hY2NvdW50SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY291bnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50SWQ7XG4gIH1cblxuICAvLyBhY3Rpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhY3Rpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGlvbl9pZCcpO1xuICB9XG5cbiAgLy8gYWN0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWN0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY3Rpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIGFwcHJvdmFsX21vZGVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FwcHJvdmFsTW9kZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwcHJvdmFsTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHByb3ZhbF9tb2RlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwcm92YWxNb2RlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwcm92YWxNb2RlbCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHByb3ZhbE1vZGVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcHJvdmFsTW9kZWw7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGJ1ZGdldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2J1ZGdldE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1ZGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWRnZXRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVkZ2V0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVkZ2V0TmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWRnZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZGdldE5hbWU7XG4gIH1cblxuICAvLyBleGVjdXRpb25fcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGVjdXRpb25Sb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvblJvbGVBcm47XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vdGlmaWNhdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBub3RpZmljYXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uVHlwZTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gYWN0aW9uX3RocmVzaG9sZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hY3Rpb25UaHJlc2hvbGQgPSBuZXcgQnVkZ2V0c0J1ZGdldEFjdGlvbkFjdGlvblRocmVzaG9sZE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhY3Rpb25fdGhyZXNob2xkXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjdGlvblRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uVGhyZXNob2xkO1xuICB9XG4gIHB1YmxpYyBwdXRBY3Rpb25UaHJlc2hvbGQodmFsdWU6IEJ1ZGdldHNCdWRnZXRBY3Rpb25BY3Rpb25UaHJlc2hvbGQpIHtcbiAgICB0aGlzLl9hY3Rpb25UaHJlc2hvbGQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3Rpb25UaHJlc2hvbGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uVGhyZXNob2xkLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBkZWZpbml0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RlZmluaXRpb24gPSBuZXcgQnVkZ2V0c0J1ZGdldEFjdGlvbkRlZmluaXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZGVmaW5pdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZpbml0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXREZWZpbml0aW9uKHZhbHVlOiBCdWRnZXRzQnVkZ2V0QWN0aW9uRGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2RlZmluaXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmluaXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN1YnNjcmliZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3Vic2NyaWJlcj86IEJ1ZGdldHNCdWRnZXRBY3Rpb25TdWJzY3JpYmVyW107IFxuICBwdWJsaWMgZ2V0IHN1YnNjcmliZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3N1YnNjcmliZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJzY3JpYmVyKHZhbHVlOiBCdWRnZXRzQnVkZ2V0QWN0aW9uU3Vic2NyaWJlcltdKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJzY3JpYmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjY291bnRJZCksXG4gICAgICBhY3Rpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWN0aW9uVHlwZSksXG4gICAgICBhcHByb3ZhbF9tb2RlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXBwcm92YWxNb2RlbCksXG4gICAgICBidWRnZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVkZ2V0TmFtZSksXG4gICAgICBleGVjdXRpb25fcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4pLFxuICAgICAgbm90aWZpY2F0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25vdGlmaWNhdGlvblR5cGUpLFxuICAgICAgYWN0aW9uX3RocmVzaG9sZDogYnVkZ2V0c0J1ZGdldEFjdGlvbkFjdGlvblRocmVzaG9sZFRvVGVycmFmb3JtKHRoaXMuX2FjdGlvblRocmVzaG9sZC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGRlZmluaXRpb246IGJ1ZGdldHNCdWRnZXRBY3Rpb25EZWZpbml0aW9uVG9UZXJyYWZvcm0odGhpcy5fZGVmaW5pdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHN1YnNjcmliZXI6IGNka3RmLmxpc3RNYXBwZXIoYnVkZ2V0c0J1ZGdldEFjdGlvblN1YnNjcmliZXJUb1RlcnJhZm9ybSkodGhpcy5fc3Vic2NyaWJlciksXG4gICAgfTtcbiAgfVxufVxuIl19