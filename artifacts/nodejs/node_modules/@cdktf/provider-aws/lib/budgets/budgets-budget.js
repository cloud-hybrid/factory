"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetsBudget = exports.budgetsBudgetNotificationToTerraform = exports.BudgetsBudgetCostTypesOutputReference = exports.budgetsBudgetCostTypesToTerraform = exports.budgetsBudgetCostFilterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function budgetsBudgetCostFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.budgetsBudgetCostFilterToTerraform = budgetsBudgetCostFilterToTerraform;
function budgetsBudgetCostTypesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_credit: cdktf.booleanToTerraform(struct.includeCredit),
        include_discount: cdktf.booleanToTerraform(struct.includeDiscount),
        include_other_subscription: cdktf.booleanToTerraform(struct.includeOtherSubscription),
        include_recurring: cdktf.booleanToTerraform(struct.includeRecurring),
        include_refund: cdktf.booleanToTerraform(struct.includeRefund),
        include_subscription: cdktf.booleanToTerraform(struct.includeSubscription),
        include_support: cdktf.booleanToTerraform(struct.includeSupport),
        include_tax: cdktf.booleanToTerraform(struct.includeTax),
        include_upfront: cdktf.booleanToTerraform(struct.includeUpfront),
        use_amortized: cdktf.booleanToTerraform(struct.useAmortized),
        use_blended: cdktf.booleanToTerraform(struct.useBlended),
    };
}
exports.budgetsBudgetCostTypesToTerraform = budgetsBudgetCostTypesToTerraform;
/**
 * @stability stable
 */
class BudgetsBudgetCostTypesOutputReference extends cdktf.ComplexObject {
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
        if (this._includeCredit) {
            hasAnyValues = true;
            internalValueResult.includeCredit = this._includeCredit;
        }
        if (this._includeDiscount) {
            hasAnyValues = true;
            internalValueResult.includeDiscount = this._includeDiscount;
        }
        if (this._includeOtherSubscription) {
            hasAnyValues = true;
            internalValueResult.includeOtherSubscription = this._includeOtherSubscription;
        }
        if (this._includeRecurring) {
            hasAnyValues = true;
            internalValueResult.includeRecurring = this._includeRecurring;
        }
        if (this._includeRefund) {
            hasAnyValues = true;
            internalValueResult.includeRefund = this._includeRefund;
        }
        if (this._includeSubscription) {
            hasAnyValues = true;
            internalValueResult.includeSubscription = this._includeSubscription;
        }
        if (this._includeSupport) {
            hasAnyValues = true;
            internalValueResult.includeSupport = this._includeSupport;
        }
        if (this._includeTax) {
            hasAnyValues = true;
            internalValueResult.includeTax = this._includeTax;
        }
        if (this._includeUpfront) {
            hasAnyValues = true;
            internalValueResult.includeUpfront = this._includeUpfront;
        }
        if (this._useAmortized) {
            hasAnyValues = true;
            internalValueResult.useAmortized = this._useAmortized;
        }
        if (this._useBlended) {
            hasAnyValues = true;
            internalValueResult.useBlended = this._useBlended;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._includeCredit = undefined;
            this._includeDiscount = undefined;
            this._includeOtherSubscription = undefined;
            this._includeRecurring = undefined;
            this._includeRefund = undefined;
            this._includeSubscription = undefined;
            this._includeSupport = undefined;
            this._includeTax = undefined;
            this._includeUpfront = undefined;
            this._useAmortized = undefined;
            this._useBlended = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._includeCredit = value.includeCredit;
            this._includeDiscount = value.includeDiscount;
            this._includeOtherSubscription = value.includeOtherSubscription;
            this._includeRecurring = value.includeRecurring;
            this._includeRefund = value.includeRefund;
            this._includeSubscription = value.includeSubscription;
            this._includeSupport = value.includeSupport;
            this._includeTax = value.includeTax;
            this._includeUpfront = value.includeUpfront;
            this._useAmortized = value.useAmortized;
            this._useBlended = value.useBlended;
        }
    }
    /**
     * @stability stable
     */
    get includeCredit() {
        return this.getBooleanAttribute('include_credit');
    }
    /**
     * @stability stable
     */
    set includeCredit(value) {
        this._includeCredit = value;
    }
    /**
     * @stability stable
     */
    resetIncludeCredit() {
        this._includeCredit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeCreditInput() {
        return this._includeCredit;
    }
    /**
     * @stability stable
     */
    get includeDiscount() {
        return this.getBooleanAttribute('include_discount');
    }
    /**
     * @stability stable
     */
    set includeDiscount(value) {
        this._includeDiscount = value;
    }
    /**
     * @stability stable
     */
    resetIncludeDiscount() {
        this._includeDiscount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeDiscountInput() {
        return this._includeDiscount;
    }
    /**
     * @stability stable
     */
    get includeOtherSubscription() {
        return this.getBooleanAttribute('include_other_subscription');
    }
    /**
     * @stability stable
     */
    set includeOtherSubscription(value) {
        this._includeOtherSubscription = value;
    }
    /**
     * @stability stable
     */
    resetIncludeOtherSubscription() {
        this._includeOtherSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeOtherSubscriptionInput() {
        return this._includeOtherSubscription;
    }
    /**
     * @stability stable
     */
    get includeRecurring() {
        return this.getBooleanAttribute('include_recurring');
    }
    /**
     * @stability stable
     */
    set includeRecurring(value) {
        this._includeRecurring = value;
    }
    /**
     * @stability stable
     */
    resetIncludeRecurring() {
        this._includeRecurring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeRecurringInput() {
        return this._includeRecurring;
    }
    /**
     * @stability stable
     */
    get includeRefund() {
        return this.getBooleanAttribute('include_refund');
    }
    /**
     * @stability stable
     */
    set includeRefund(value) {
        this._includeRefund = value;
    }
    /**
     * @stability stable
     */
    resetIncludeRefund() {
        this._includeRefund = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeRefundInput() {
        return this._includeRefund;
    }
    /**
     * @stability stable
     */
    get includeSubscription() {
        return this.getBooleanAttribute('include_subscription');
    }
    /**
     * @stability stable
     */
    set includeSubscription(value) {
        this._includeSubscription = value;
    }
    /**
     * @stability stable
     */
    resetIncludeSubscription() {
        this._includeSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeSubscriptionInput() {
        return this._includeSubscription;
    }
    /**
     * @stability stable
     */
    get includeSupport() {
        return this.getBooleanAttribute('include_support');
    }
    /**
     * @stability stable
     */
    set includeSupport(value) {
        this._includeSupport = value;
    }
    /**
     * @stability stable
     */
    resetIncludeSupport() {
        this._includeSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeSupportInput() {
        return this._includeSupport;
    }
    /**
     * @stability stable
     */
    get includeTax() {
        return this.getBooleanAttribute('include_tax');
    }
    /**
     * @stability stable
     */
    set includeTax(value) {
        this._includeTax = value;
    }
    /**
     * @stability stable
     */
    resetIncludeTax() {
        this._includeTax = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeTaxInput() {
        return this._includeTax;
    }
    /**
     * @stability stable
     */
    get includeUpfront() {
        return this.getBooleanAttribute('include_upfront');
    }
    /**
     * @stability stable
     */
    set includeUpfront(value) {
        this._includeUpfront = value;
    }
    /**
     * @stability stable
     */
    resetIncludeUpfront() {
        this._includeUpfront = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeUpfrontInput() {
        return this._includeUpfront;
    }
    /**
     * @stability stable
     */
    get useAmortized() {
        return this.getBooleanAttribute('use_amortized');
    }
    /**
     * @stability stable
     */
    set useAmortized(value) {
        this._useAmortized = value;
    }
    /**
     * @stability stable
     */
    resetUseAmortized() {
        this._useAmortized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get useAmortizedInput() {
        return this._useAmortized;
    }
    /**
     * @stability stable
     */
    get useBlended() {
        return this.getBooleanAttribute('use_blended');
    }
    /**
     * @stability stable
     */
    set useBlended(value) {
        this._useBlended = value;
    }
    /**
     * @stability stable
     */
    resetUseBlended() {
        this._useBlended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get useBlendedInput() {
        return this._useBlended;
    }
}
exports.BudgetsBudgetCostTypesOutputReference = BudgetsBudgetCostTypesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
BudgetsBudgetCostTypesOutputReference[_a] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudgetCostTypesOutputReference", version: "3.0.1" };
function budgetsBudgetNotificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        notification_type: cdktf.stringToTerraform(struct.notificationType),
        subscriber_email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.subscriberEmailAddresses),
        subscriber_sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.subscriberSnsTopicArns),
        threshold: cdktf.numberToTerraform(struct.threshold),
        threshold_type: cdktf.stringToTerraform(struct.thresholdType),
    };
}
exports.budgetsBudgetNotificationToTerraform = budgetsBudgetNotificationToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget}.
 *
 * @stability stable
 */
class BudgetsBudget extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget.html aws_budgets_budget} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_budgets_budget',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // cost_types - computed: false, optional: true, required: false
        this._costTypes = new BudgetsBudgetCostTypesOutputReference(this, "cost_types", true);
        this._accountId = config.accountId;
        this._budgetType = config.budgetType;
        this._costFilters = config.costFilters;
        this._limitAmount = config.limitAmount;
        this._limitUnit = config.limitUnit;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._timePeriodEnd = config.timePeriodEnd;
        this._timePeriodStart = config.timePeriodStart;
        this._timeUnit = config.timeUnit;
        this._costFilter = config.costFilter;
        this._costTypes.internalValue = config.costTypes;
        this._notification = config.notification;
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
    get budgetType() {
        return this.getStringAttribute('budget_type');
    }
    /**
     * @stability stable
     */
    set budgetType(value) {
        this._budgetType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get budgetTypeInput() {
        return this._budgetType;
    }
    /**
     * @stability stable
     */
    get costFilters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cost_filters');
    }
    /**
     * @stability stable
     */
    set costFilters(value) {
        this._costFilters = value;
    }
    /**
     * @stability stable
     */
    resetCostFilters() {
        this._costFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get costFiltersInput() {
        return this._costFilters;
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
    get limitAmount() {
        return this.getStringAttribute('limit_amount');
    }
    /**
     * @stability stable
     */
    set limitAmount(value) {
        this._limitAmount = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get limitAmountInput() {
        return this._limitAmount;
    }
    /**
     * @stability stable
     */
    get limitUnit() {
        return this.getStringAttribute('limit_unit');
    }
    /**
     * @stability stable
     */
    set limitUnit(value) {
        this._limitUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get limitUnitInput() {
        return this._limitUnit;
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
    get timePeriodEnd() {
        return this.getStringAttribute('time_period_end');
    }
    /**
     * @stability stable
     */
    set timePeriodEnd(value) {
        this._timePeriodEnd = value;
    }
    /**
     * @stability stable
     */
    resetTimePeriodEnd() {
        this._timePeriodEnd = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timePeriodEndInput() {
        return this._timePeriodEnd;
    }
    /**
     * @stability stable
     */
    get timePeriodStart() {
        return this.getStringAttribute('time_period_start');
    }
    /**
     * @stability stable
     */
    set timePeriodStart(value) {
        this._timePeriodStart = value;
    }
    /**
     * @stability stable
     */
    resetTimePeriodStart() {
        this._timePeriodStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timePeriodStartInput() {
        return this._timePeriodStart;
    }
    /**
     * @stability stable
     */
    get timeUnit() {
        return this.getStringAttribute('time_unit');
    }
    /**
     * @stability stable
     */
    set timeUnit(value) {
        this._timeUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeUnitInput() {
        return this._timeUnit;
    }
    /**
     * @stability stable
     */
    get costFilter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('cost_filter');
    }
    /**
     * @stability stable
     */
    set costFilter(value) {
        this._costFilter = value;
    }
    /**
     * @stability stable
     */
    resetCostFilter() {
        this._costFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get costFilterInput() {
        return this._costFilter;
    }
    /**
     * @stability stable
     */
    get costTypes() {
        return this._costTypes;
    }
    /**
     * @stability stable
     */
    putCostTypes(value) {
        this._costTypes.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCostTypes() {
        this._costTypes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get costTypesInput() {
        return this._costTypes.internalValue;
    }
    /**
     * @stability stable
     */
    get notification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('notification');
    }
    /**
     * @stability stable
     */
    set notification(value) {
        this._notification = value;
    }
    /**
     * @stability stable
     */
    resetNotification() {
        this._notification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationInput() {
        return this._notification;
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
            budget_type: cdktf.stringToTerraform(this._budgetType),
            cost_filters: cdktf.hashMapper(cdktf.anyToTerraform)(this._costFilters),
            limit_amount: cdktf.stringToTerraform(this._limitAmount),
            limit_unit: cdktf.stringToTerraform(this._limitUnit),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            time_period_end: cdktf.stringToTerraform(this._timePeriodEnd),
            time_period_start: cdktf.stringToTerraform(this._timePeriodStart),
            time_unit: cdktf.stringToTerraform(this._timeUnit),
            cost_filter: cdktf.listMapper(budgetsBudgetCostFilterToTerraform)(this._costFilter),
            cost_types: budgetsBudgetCostTypesToTerraform(this._costTypes.internalValue),
            notification: cdktf.listMapper(budgetsBudgetNotificationToTerraform)(this._notification),
        };
    }
}
exports.BudgetsBudget = BudgetsBudget;
_b = JSII_RTTI_SYMBOL_1;
BudgetsBudget[_b] = { fqn: "@cdktf/provider-aws.budgets.BudgetsBudget", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
BudgetsBudget.tfResourceType = "aws_budgets_budget";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0cy1idWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYnVkZ2V0cy9idWRnZXRzLWJ1ZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXNDL0IsU0FBZ0Isa0NBQWtDLENBQUMsTUFBZ0M7SUFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQVRELGdGQVNDO0FBMkJELFNBQWdCLGlDQUFpQyxDQUFDLE1BQXVFO0lBQ3ZILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQy9ELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25FLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FB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QVcsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNuRixVQUFVLEVBQUUsaUNBQWlDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDNUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3pGLENBQUM7SUFDSixDQUFDOztBQS9RSCxzQ0FnUkM7OztBQTlRQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDRCQUFjLEdBQVcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBCdWRnZXRzQnVkZ2V0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2NvdW50SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1ZGdldFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3N0RmlsdGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsaW1pdEFtb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGltaXRVbml0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVQZXJpb2RFbmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVQZXJpb2RTdGFydD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lVW5pdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3N0RmlsdGVyPzogQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXJbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29zdFR5cGVzPzogQnVkZ2V0c0J1ZGdldENvc3RUeXBlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uPzogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBCdWRnZXRzQnVkZ2V0Q29zdEZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZGdldHNCdWRnZXRDb3N0RmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0J1ZGdldENvc3RUeXBlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVDcmVkaXQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlRGlzY291bnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVPdGhlclN1YnNjcmlwdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZVJlY3VycmluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZVJlZnVuZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZVN1YnNjcmlwdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlU3VwcG9ydD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZVRheD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlVXBmcm9udD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZUFtb3J0aXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlQmxlbmRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1ZGdldHNCdWRnZXRDb3N0VHlwZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBCdWRnZXRzQnVkZ2V0Q29zdFR5cGVzT3V0cHV0UmVmZXJlbmNlIHwgQnVkZ2V0c0J1ZGdldENvc3RUeXBlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluY2x1ZGVfY3JlZGl0OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlQ3JlZGl0KSxcbiAgICBpbmNsdWRlX2Rpc2NvdW50OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlRGlzY291bnQpLFxuICAgIGluY2x1ZGVfb3RoZXJfc3Vic2NyaXB0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24pLFxuICAgIGluY2x1ZGVfcmVjdXJyaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlUmVjdXJyaW5nKSxcbiAgICBpbmNsdWRlX3JlZnVuZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVJlZnVuZCksXG4gICAgaW5jbHVkZV9zdWJzY3JpcHRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVTdWJzY3JpcHRpb24pLFxuICAgIGluY2x1ZGVfc3VwcG9ydDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVN1cHBvcnQpLFxuICAgIGluY2x1ZGVfdGF4OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlVGF4KSxcbiAgICBpbmNsdWRlX3VwZnJvbnQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVVcGZyb250KSxcbiAgICB1c2VfYW1vcnRpemVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51c2VBbW9ydGl6ZWQpLFxuICAgIHVzZV9ibGVuZGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51c2VCbGVuZGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnVkZ2V0c0J1ZGdldENvc3RUeXBlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBCdWRnZXRzQnVkZ2V0Q29zdFR5cGVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbmNsdWRlQ3JlZGl0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlQ3JlZGl0ID0gdGhpcy5faW5jbHVkZUNyZWRpdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVEaXNjb3VudCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZURpc2NvdW50ID0gdGhpcy5faW5jbHVkZURpc2NvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24gPSB0aGlzLl9pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlUmVjdXJyaW5nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlUmVjdXJyaW5nID0gdGhpcy5faW5jbHVkZVJlY3VycmluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVSZWZ1bmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVSZWZ1bmQgPSB0aGlzLl9pbmNsdWRlUmVmdW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVN1YnNjcmlwdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVN1YnNjcmlwdGlvbiA9IHRoaXMuX2luY2x1ZGVTdWJzY3JpcHRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlU3VwcG9ydCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVN1cHBvcnQgPSB0aGlzLl9pbmNsdWRlU3VwcG9ydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVUYXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVUYXggPSB0aGlzLl9pbmNsdWRlVGF4O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVVwZnJvbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVVcGZyb250ID0gdGhpcy5faW5jbHVkZVVwZnJvbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VBbW9ydGl6ZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZUFtb3J0aXplZCA9IHRoaXMuX3VzZUFtb3J0aXplZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZUJsZW5kZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZUJsZW5kZWQgPSB0aGlzLl91c2VCbGVuZGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQnVkZ2V0c0J1ZGdldENvc3RUeXBlcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luY2x1ZGVDcmVkaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlRGlzY291bnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlUmVjdXJyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVJlZnVuZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlU3VwcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVUYXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlVXBmcm9udCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZUFtb3J0aXplZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZUJsZW5kZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2luY2x1ZGVDcmVkaXQgPSB2YWx1ZS5pbmNsdWRlQ3JlZGl0O1xuICAgICAgdGhpcy5faW5jbHVkZURpc2NvdW50ID0gdmFsdWUuaW5jbHVkZURpc2NvdW50O1xuICAgICAgdGhpcy5faW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uID0gdmFsdWUuaW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uO1xuICAgICAgdGhpcy5faW5jbHVkZVJlY3VycmluZyA9IHZhbHVlLmluY2x1ZGVSZWN1cnJpbmc7XG4gICAgICB0aGlzLl9pbmNsdWRlUmVmdW5kID0gdmFsdWUuaW5jbHVkZVJlZnVuZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVTdWJzY3JpcHRpb24gPSB2YWx1ZS5pbmNsdWRlU3Vic2NyaXB0aW9uO1xuICAgICAgdGhpcy5faW5jbHVkZVN1cHBvcnQgPSB2YWx1ZS5pbmNsdWRlU3VwcG9ydDtcbiAgICAgIHRoaXMuX2luY2x1ZGVUYXggPSB2YWx1ZS5pbmNsdWRlVGF4O1xuICAgICAgdGhpcy5faW5jbHVkZVVwZnJvbnQgPSB2YWx1ZS5pbmNsdWRlVXBmcm9udDtcbiAgICAgIHRoaXMuX3VzZUFtb3J0aXplZCA9IHZhbHVlLnVzZUFtb3J0aXplZDtcbiAgICAgIHRoaXMuX3VzZUJsZW5kZWQgPSB2YWx1ZS51c2VCbGVuZGVkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluY2x1ZGVfY3JlZGl0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVDcmVkaXQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVDcmVkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9jcmVkaXQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlQ3JlZGl0KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlQ3JlZGl0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZUNyZWRpdCgpIHtcbiAgICB0aGlzLl9pbmNsdWRlQ3JlZGl0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlQ3JlZGl0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVDcmVkaXQ7XG4gIH1cblxuICAvLyBpbmNsdWRlX2Rpc2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVEaXNjb3VudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZURpc2NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfZGlzY291bnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlRGlzY291bnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVEaXNjb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVEaXNjb3VudCgpIHtcbiAgICB0aGlzLl9pbmNsdWRlRGlzY291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVEaXNjb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlRGlzY291bnQ7XG4gIH1cblxuICAvLyBpbmNsdWRlX290aGVyX3N1YnNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlT3RoZXJTdWJzY3JpcHRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVPdGhlclN1YnNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX290aGVyX3N1YnNjcmlwdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVPdGhlclN1YnNjcmlwdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2luY2x1ZGVPdGhlclN1YnNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZU90aGVyU3Vic2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVPdGhlclN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfcmVjdXJyaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVSZWN1cnJpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVSZWN1cnJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9yZWN1cnJpbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlUmVjdXJyaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlUmVjdXJyaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZVJlY3VycmluZygpIHtcbiAgICB0aGlzLl9pbmNsdWRlUmVjdXJyaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlUmVjdXJyaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVSZWN1cnJpbmc7XG4gIH1cblxuICAvLyBpbmNsdWRlX3JlZnVuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlUmVmdW5kPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlUmVmdW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfcmVmdW5kJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVJlZnVuZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVJlZnVuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVSZWZ1bmQoKSB7XG4gICAgdGhpcy5faW5jbHVkZVJlZnVuZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVJlZnVuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlUmVmdW5kO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9zdWJzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVN1YnNjcmlwdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVN1YnNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3N1YnNjcmlwdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVTdWJzY3JpcHRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVTdWJzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlU3Vic2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2luY2x1ZGVTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVTdWJzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfc3VwcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlU3VwcG9ydD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9zdXBwb3J0JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVN1cHBvcnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVTdXBwb3J0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZVN1cHBvcnQoKSB7XG4gICAgdGhpcy5faW5jbHVkZVN1cHBvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVTdXBwb3J0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVTdXBwb3J0O1xuICB9XG5cbiAgLy8gaW5jbHVkZV90YXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVRheD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVRheCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3RheCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVUYXgodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVUYXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlVGF4KCkge1xuICAgIHRoaXMuX2luY2x1ZGVUYXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUYXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVRheDtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfdXBmcm9udCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlVXBmcm9udD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVVwZnJvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV91cGZyb250JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVVwZnJvbnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVVcGZyb250ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZVVwZnJvbnQoKSB7XG4gICAgdGhpcy5faW5jbHVkZVVwZnJvbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVVcGZyb250SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVVcGZyb250O1xuICB9XG5cbiAgLy8gdXNlX2Ftb3J0aXplZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VBbW9ydGl6ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVzZUFtb3J0aXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VfYW1vcnRpemVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlQW1vcnRpemVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl91c2VBbW9ydGl6ZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VBbW9ydGl6ZWQoKSB7XG4gICAgdGhpcy5fdXNlQW1vcnRpemVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VBbW9ydGl6ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlQW1vcnRpemVkO1xuICB9XG5cbiAgLy8gdXNlX2JsZW5kZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlQmxlbmRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdXNlQmxlbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VfYmxlbmRlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZUJsZW5kZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZUJsZW5kZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VCbGVuZGVkKCkge1xuICAgIHRoaXMuX3VzZUJsZW5kZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZUJsZW5kZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlQmxlbmRlZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBCdWRnZXRzQnVkZ2V0Tm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXBhcmlzb25PcGVyYXRvcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBub3RpZmljYXRpb25UeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1YnNjcmliZXJFbWFpbEFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3Vic2NyaWJlclNuc1RvcGljQXJucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocmVzaG9sZDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJlc2hvbGRUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWRnZXRzQnVkZ2V0Tm90aWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbXBhcmlzb25fb3BlcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICBub3RpZmljYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25UeXBlKSxcbiAgICBzdWJzY3JpYmVyX2VtYWlsX2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJzY3JpYmVyRW1haWxBZGRyZXNzZXMpLFxuICAgIHN1YnNjcmliZXJfc25zX3RvcGljX2FybnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3Vic2NyaWJlclNuc1RvcGljQXJucyksXG4gICAgdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRocmVzaG9sZCksXG4gICAgdGhyZXNob2xkX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGhyZXNob2xkVHlwZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBCdWRnZXRzQnVkZ2V0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2J1ZGdldHNfYnVkZ2V0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBCdWRnZXRzQnVkZ2V0Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYnVkZ2V0c19idWRnZXQnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWNjb3VudElkID0gY29uZmlnLmFjY291bnRJZDtcbiAgICB0aGlzLl9idWRnZXRUeXBlID0gY29uZmlnLmJ1ZGdldFR5cGU7XG4gICAgdGhpcy5fY29zdEZpbHRlcnMgPSBjb25maWcuY29zdEZpbHRlcnM7XG4gICAgdGhpcy5fbGltaXRBbW91bnQgPSBjb25maWcubGltaXRBbW91bnQ7XG4gICAgdGhpcy5fbGltaXRVbml0ID0gY29uZmlnLmxpbWl0VW5pdDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IGNvbmZpZy5uYW1lUHJlZml4O1xuICAgIHRoaXMuX3RpbWVQZXJpb2RFbmQgPSBjb25maWcudGltZVBlcmlvZEVuZDtcbiAgICB0aGlzLl90aW1lUGVyaW9kU3RhcnQgPSBjb25maWcudGltZVBlcmlvZFN0YXJ0O1xuICAgIHRoaXMuX3RpbWVVbml0ID0gY29uZmlnLnRpbWVVbml0O1xuICAgIHRoaXMuX2Nvc3RGaWx0ZXIgPSBjb25maWcuY29zdEZpbHRlcjtcbiAgICB0aGlzLl9jb3N0VHlwZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb3N0VHlwZXM7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uID0gY29uZmlnLm5vdGlmaWNhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWNjb3VudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY291bnRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjb3VudF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWNjb3VudElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY2NvdW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2NvdW50SWQoKSB7XG4gICAgdGhpcy5fYWNjb3VudElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2NvdW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3VudElkO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBidWRnZXRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWRnZXRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWRnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVkZ2V0X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1ZGdldFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1ZGdldFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVkZ2V0VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWRnZXRUeXBlO1xuICB9XG5cbiAgLy8gY29zdF9maWx0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29zdEZpbHRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNvc3RGaWx0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb3N0X2ZpbHRlcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb3N0RmlsdGVycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29zdEZpbHRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb3N0RmlsdGVycygpIHtcbiAgICB0aGlzLl9jb3N0RmlsdGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29zdEZpbHRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdEZpbHRlcnM7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGltaXRfYW1vdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xpbWl0QW1vdW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsaW1pdEFtb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xpbWl0X2Ftb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGltaXRBbW91bnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xpbWl0QW1vdW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpbWl0QW1vdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0QW1vdW50O1xuICB9XG5cbiAgLy8gbGltaXRfdW5pdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9saW1pdFVuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxpbWl0VW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xpbWl0X3VuaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxpbWl0VW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGltaXRVbml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxpbWl0VW5pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9saW1pdFVuaXQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5hbWVfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZVByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZVByZWZpeCgpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVQcmVmaXg7XG4gIH1cblxuICAvLyB0aW1lX3BlcmlvZF9lbmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZVBlcmlvZEVuZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGltZVBlcmlvZEVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfcGVyaW9kX2VuZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZVBlcmlvZEVuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGltZVBlcmlvZEVuZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVQZXJpb2RFbmQoKSB7XG4gICAgdGhpcy5fdGltZVBlcmlvZEVuZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZVBlcmlvZEVuZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lUGVyaW9kRW5kO1xuICB9XG5cbiAgLy8gdGltZV9wZXJpb2Rfc3RhcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lUGVyaW9kU3RhcnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRpbWVQZXJpb2RTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfcGVyaW9kX3N0YXJ0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lUGVyaW9kU3RhcnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpbWVQZXJpb2RTdGFydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVQZXJpb2RTdGFydCgpIHtcbiAgICB0aGlzLl90aW1lUGVyaW9kU3RhcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVQZXJpb2RTdGFydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lUGVyaW9kU3RhcnQ7XG4gIH1cblxuICAvLyB0aW1lX3VuaXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGltZVVuaXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRpbWVVbml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZV91bml0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lVW5pdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGltZVVuaXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZVVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZVVuaXQ7XG4gIH1cblxuICAvLyBjb3N0X2ZpbHRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3N0RmlsdGVyPzogQnVkZ2V0c0J1ZGdldENvc3RGaWx0ZXJbXTsgXG4gIHB1YmxpYyBnZXQgY29zdEZpbHRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29zdF9maWx0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb3N0RmlsdGVyKHZhbHVlOiBCdWRnZXRzQnVkZ2V0Q29zdEZpbHRlcltdKSB7XG4gICAgdGhpcy5fY29zdEZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvc3RGaWx0ZXIoKSB7XG4gICAgdGhpcy5fY29zdEZpbHRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29zdEZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3N0RmlsdGVyO1xuICB9XG5cbiAgLy8gY29zdF90eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3N0VHlwZXMgPSBuZXcgQnVkZ2V0c0J1ZGdldENvc3RUeXBlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb3N0X3R5cGVzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvc3RUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29zdFR5cGVzO1xuICB9XG4gIHB1YmxpYyBwdXRDb3N0VHlwZXModmFsdWU6IEJ1ZGdldHNCdWRnZXRDb3N0VHlwZXMpIHtcbiAgICB0aGlzLl9jb3N0VHlwZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvc3RUeXBlcygpIHtcbiAgICB0aGlzLl9jb3N0VHlwZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29zdFR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvc3RUeXBlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbj86IEJ1ZGdldHNCdWRnZXROb3RpZmljYXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdub3RpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBub3RpZmljYXRpb24odmFsdWU6IEJ1ZGdldHNCdWRnZXROb3RpZmljYXRpb25bXSkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGlmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY291bnRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjY291bnRJZCksXG4gICAgICBidWRnZXRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnVkZ2V0VHlwZSksXG4gICAgICBjb3N0X2ZpbHRlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX2Nvc3RGaWx0ZXJzKSxcbiAgICAgIGxpbWl0X2Ftb3VudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGltaXRBbW91bnQpLFxuICAgICAgbGltaXRfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGltaXRVbml0KSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWVQcmVmaXgpLFxuICAgICAgdGltZV9wZXJpb2RfZW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aW1lUGVyaW9kRW5kKSxcbiAgICAgIHRpbWVfcGVyaW9kX3N0YXJ0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aW1lUGVyaW9kU3RhcnQpLFxuICAgICAgdGltZV91bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aW1lVW5pdCksXG4gICAgICBjb3N0X2ZpbHRlcjogY2RrdGYubGlzdE1hcHBlcihidWRnZXRzQnVkZ2V0Q29zdEZpbHRlclRvVGVycmFmb3JtKSh0aGlzLl9jb3N0RmlsdGVyKSxcbiAgICAgIGNvc3RfdHlwZXM6IGJ1ZGdldHNCdWRnZXRDb3N0VHlwZXNUb1RlcnJhZm9ybSh0aGlzLl9jb3N0VHlwZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBub3RpZmljYXRpb246IGNka3RmLmxpc3RNYXBwZXIoYnVkZ2V0c0J1ZGdldE5vdGlmaWNhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9ub3RpZmljYXRpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==