"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerFlowDefinition = exports.SagemakerFlowDefinitionOutputConfigOutputReference = exports.sagemakerFlowDefinitionOutputConfigToTerraform = exports.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference = exports.sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform = exports.SagemakerFlowDefinitionHumanLoopConfigOutputReference = exports.sagemakerFlowDefinitionHumanLoopConfigToTerraform = exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference = exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform = exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference = exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform = exports.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference = exports.sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform = exports.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference = exports.sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        human_loop_activation_conditions: cdktf.stringToTerraform(struct.humanLoopActivationConditions),
    };
}
exports.sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform = sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._humanLoopActivationConditions) {
            hasAnyValues = true;
            internalValueResult.humanLoopActivationConditions = this._humanLoopActivationConditions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._humanLoopActivationConditions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._humanLoopActivationConditions = value.humanLoopActivationConditions;
        }
    }
    /**
     * @stability stable
     */
    get humanLoopActivationConditions() {
        return this.getStringAttribute('human_loop_activation_conditions');
    }
    /**
     * @stability stable
     */
    set humanLoopActivationConditions(value) {
        this._humanLoopActivationConditions = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get humanLoopActivationConditionsInput() {
        return this._humanLoopActivationConditions;
    }
}
exports.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference = SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference[_a] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference", version: "3.0.1" };
function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        human_loop_activation_conditions_config: sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct.humanLoopActivationConditionsConfig),
    };
}
exports.sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform = sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // human_loop_activation_conditions_config - computed: false, optional: true, required: false
        this._humanLoopActivationConditionsConfig = new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(this, "human_loop_activation_conditions_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_j = this._humanLoopActivationConditionsConfig) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.humanLoopActivationConditionsConfig = (_k = this._humanLoopActivationConditionsConfig) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._humanLoopActivationConditionsConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._humanLoopActivationConditionsConfig.internalValue = value.humanLoopActivationConditionsConfig;
        }
    }
    /**
     * @stability stable
     */
    get humanLoopActivationConditionsConfig() {
        return this._humanLoopActivationConditionsConfig;
    }
    /**
     * @stability stable
     */
    putHumanLoopActivationConditionsConfig(value) {
        this._humanLoopActivationConditionsConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHumanLoopActivationConditionsConfig() {
        this._humanLoopActivationConditionsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get humanLoopActivationConditionsConfigInput() {
        return this._humanLoopActivationConditionsConfig.internalValue;
    }
}
exports.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference = SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference", version: "3.0.1" };
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cents: cdktf.numberToTerraform(struct.cents),
        dollars: cdktf.numberToTerraform(struct.dollars),
        tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct.tenthFractionsOfACent),
    };
}
exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform = sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform;
/**
 * @stability stable
 */
class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference extends cdktf.ComplexObject {
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
        if (this._cents) {
            hasAnyValues = true;
            internalValueResult.cents = this._cents;
        }
        if (this._dollars) {
            hasAnyValues = true;
            internalValueResult.dollars = this._dollars;
        }
        if (this._tenthFractionsOfACent) {
            hasAnyValues = true;
            internalValueResult.tenthFractionsOfACent = this._tenthFractionsOfACent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cents = undefined;
            this._dollars = undefined;
            this._tenthFractionsOfACent = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cents = value.cents;
            this._dollars = value.dollars;
            this._tenthFractionsOfACent = value.tenthFractionsOfACent;
        }
    }
    /**
     * @stability stable
     */
    get cents() {
        return this.getNumberAttribute('cents');
    }
    /**
     * @stability stable
     */
    set cents(value) {
        this._cents = value;
    }
    /**
     * @stability stable
     */
    resetCents() {
        this._cents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get centsInput() {
        return this._cents;
    }
    /**
     * @stability stable
     */
    get dollars() {
        return this.getNumberAttribute('dollars');
    }
    /**
     * @stability stable
     */
    set dollars(value) {
        this._dollars = value;
    }
    /**
     * @stability stable
     */
    resetDollars() {
        this._dollars = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dollarsInput() {
        return this._dollars;
    }
    /**
     * @stability stable
     */
    get tenthFractionsOfACent() {
        return this.getNumberAttribute('tenth_fractions_of_a_cent');
    }
    /**
     * @stability stable
     */
    set tenthFractionsOfACent(value) {
        this._tenthFractionsOfACent = value;
    }
    /**
     * @stability stable
     */
    resetTenthFractionsOfACent() {
        this._tenthFractionsOfACent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tenthFractionsOfACentInput() {
        return this._tenthFractionsOfACent;
    }
}
exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference = SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference[_c] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference", version: "3.0.1" };
function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        amount_in_usd: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct.amountInUsd),
    };
}
exports.sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform = sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform;
/**
 * @stability stable
 */
class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // amount_in_usd - computed: false, optional: true, required: false
        this._amountInUsd = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(this, "amount_in_usd", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_j = this._amountInUsd) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.amountInUsd = (_k = this._amountInUsd) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._amountInUsd.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._amountInUsd.internalValue = value.amountInUsd;
        }
    }
    /**
     * @stability stable
     */
    get amountInUsd() {
        return this._amountInUsd;
    }
    /**
     * @stability stable
     */
    putAmountInUsd(value) {
        this._amountInUsd.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAmountInUsd() {
        this._amountInUsd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get amountInUsdInput() {
        return this._amountInUsd.internalValue;
    }
}
exports.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference = SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference[_d] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference", version: "3.0.1" };
function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        human_task_ui_arn: cdktf.stringToTerraform(struct.humanTaskUiArn),
        task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct.taskAvailabilityLifetimeInSeconds),
        task_count: cdktf.numberToTerraform(struct.taskCount),
        task_description: cdktf.stringToTerraform(struct.taskDescription),
        task_keywords: cdktf.listMapper(cdktf.stringToTerraform)(struct.taskKeywords),
        task_time_limit_in_seconds: cdktf.numberToTerraform(struct.taskTimeLimitInSeconds),
        task_title: cdktf.stringToTerraform(struct.taskTitle),
        workteam_arn: cdktf.stringToTerraform(struct.workteamArn),
        public_workforce_task_price: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct.publicWorkforceTaskPrice),
    };
}
exports.sagemakerFlowDefinitionHumanLoopConfigToTerraform = sagemakerFlowDefinitionHumanLoopConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerFlowDefinitionHumanLoopConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // public_workforce_task_price - computed: false, optional: true, required: false
        this._publicWorkforceTaskPrice = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(this, "public_workforce_task_price", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._humanTaskUiArn) {
            hasAnyValues = true;
            internalValueResult.humanTaskUiArn = this._humanTaskUiArn;
        }
        if (this._taskAvailabilityLifetimeInSeconds) {
            hasAnyValues = true;
            internalValueResult.taskAvailabilityLifetimeInSeconds = this._taskAvailabilityLifetimeInSeconds;
        }
        if (this._taskCount) {
            hasAnyValues = true;
            internalValueResult.taskCount = this._taskCount;
        }
        if (this._taskDescription) {
            hasAnyValues = true;
            internalValueResult.taskDescription = this._taskDescription;
        }
        if (this._taskKeywords) {
            hasAnyValues = true;
            internalValueResult.taskKeywords = this._taskKeywords;
        }
        if (this._taskTimeLimitInSeconds) {
            hasAnyValues = true;
            internalValueResult.taskTimeLimitInSeconds = this._taskTimeLimitInSeconds;
        }
        if (this._taskTitle) {
            hasAnyValues = true;
            internalValueResult.taskTitle = this._taskTitle;
        }
        if (this._workteamArn) {
            hasAnyValues = true;
            internalValueResult.workteamArn = this._workteamArn;
        }
        if ((_j = this._publicWorkforceTaskPrice) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.publicWorkforceTaskPrice = (_k = this._publicWorkforceTaskPrice) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._humanTaskUiArn = undefined;
            this._taskAvailabilityLifetimeInSeconds = undefined;
            this._taskCount = undefined;
            this._taskDescription = undefined;
            this._taskKeywords = undefined;
            this._taskTimeLimitInSeconds = undefined;
            this._taskTitle = undefined;
            this._workteamArn = undefined;
            this._publicWorkforceTaskPrice.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._humanTaskUiArn = value.humanTaskUiArn;
            this._taskAvailabilityLifetimeInSeconds = value.taskAvailabilityLifetimeInSeconds;
            this._taskCount = value.taskCount;
            this._taskDescription = value.taskDescription;
            this._taskKeywords = value.taskKeywords;
            this._taskTimeLimitInSeconds = value.taskTimeLimitInSeconds;
            this._taskTitle = value.taskTitle;
            this._workteamArn = value.workteamArn;
            this._publicWorkforceTaskPrice.internalValue = value.publicWorkforceTaskPrice;
        }
    }
    /**
     * @stability stable
     */
    get humanTaskUiArn() {
        return this.getStringAttribute('human_task_ui_arn');
    }
    /**
     * @stability stable
     */
    set humanTaskUiArn(value) {
        this._humanTaskUiArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get humanTaskUiArnInput() {
        return this._humanTaskUiArn;
    }
    /**
     * @stability stable
     */
    get taskAvailabilityLifetimeInSeconds() {
        return this.getNumberAttribute('task_availability_lifetime_in_seconds');
    }
    /**
     * @stability stable
     */
    set taskAvailabilityLifetimeInSeconds(value) {
        this._taskAvailabilityLifetimeInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTaskAvailabilityLifetimeInSeconds() {
        this._taskAvailabilityLifetimeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskAvailabilityLifetimeInSecondsInput() {
        return this._taskAvailabilityLifetimeInSeconds;
    }
    /**
     * @stability stable
     */
    get taskCount() {
        return this.getNumberAttribute('task_count');
    }
    /**
     * @stability stable
     */
    set taskCount(value) {
        this._taskCount = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskCountInput() {
        return this._taskCount;
    }
    /**
     * @stability stable
     */
    get taskDescription() {
        return this.getStringAttribute('task_description');
    }
    /**
     * @stability stable
     */
    set taskDescription(value) {
        this._taskDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskDescriptionInput() {
        return this._taskDescription;
    }
    /**
     * @stability stable
     */
    get taskKeywords() {
        return this.getListAttribute('task_keywords');
    }
    /**
     * @stability stable
     */
    set taskKeywords(value) {
        this._taskKeywords = value;
    }
    /**
     * @stability stable
     */
    resetTaskKeywords() {
        this._taskKeywords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskKeywordsInput() {
        return this._taskKeywords;
    }
    /**
     * @stability stable
     */
    get taskTimeLimitInSeconds() {
        return this.getNumberAttribute('task_time_limit_in_seconds');
    }
    /**
     * @stability stable
     */
    set taskTimeLimitInSeconds(value) {
        this._taskTimeLimitInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTaskTimeLimitInSeconds() {
        this._taskTimeLimitInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskTimeLimitInSecondsInput() {
        return this._taskTimeLimitInSeconds;
    }
    /**
     * @stability stable
     */
    get taskTitle() {
        return this.getStringAttribute('task_title');
    }
    /**
     * @stability stable
     */
    set taskTitle(value) {
        this._taskTitle = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskTitleInput() {
        return this._taskTitle;
    }
    /**
     * @stability stable
     */
    get workteamArn() {
        return this.getStringAttribute('workteam_arn');
    }
    /**
     * @stability stable
     */
    set workteamArn(value) {
        this._workteamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get workteamArnInput() {
        return this._workteamArn;
    }
    /**
     * @stability stable
     */
    get publicWorkforceTaskPrice() {
        return this._publicWorkforceTaskPrice;
    }
    /**
     * @stability stable
     */
    putPublicWorkforceTaskPrice(value) {
        this._publicWorkforceTaskPrice.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPublicWorkforceTaskPrice() {
        this._publicWorkforceTaskPrice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publicWorkforceTaskPriceInput() {
        return this._publicWorkforceTaskPrice.internalValue;
    }
}
exports.SagemakerFlowDefinitionHumanLoopConfigOutputReference = SagemakerFlowDefinitionHumanLoopConfigOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopConfigOutputReference[_e] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinitionHumanLoopConfigOutputReference", version: "3.0.1" };
function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_managed_human_loop_request_source: cdktf.stringToTerraform(struct.awsManagedHumanLoopRequestSource),
    };
}
exports.sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform = sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform;
/**
 * @stability stable
 */
class SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._awsManagedHumanLoopRequestSource) {
            hasAnyValues = true;
            internalValueResult.awsManagedHumanLoopRequestSource = this._awsManagedHumanLoopRequestSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsManagedHumanLoopRequestSource = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsManagedHumanLoopRequestSource = value.awsManagedHumanLoopRequestSource;
        }
    }
    /**
     * @stability stable
     */
    get awsManagedHumanLoopRequestSource() {
        return this.getStringAttribute('aws_managed_human_loop_request_source');
    }
    /**
     * @stability stable
     */
    set awsManagedHumanLoopRequestSource(value) {
        this._awsManagedHumanLoopRequestSource = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsManagedHumanLoopRequestSourceInput() {
        return this._awsManagedHumanLoopRequestSource;
    }
}
exports.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference = SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference[_f] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference", version: "3.0.1" };
function sagemakerFlowDefinitionOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
    };
}
exports.sagemakerFlowDefinitionOutputConfigToTerraform = sagemakerFlowDefinitionOutputConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerFlowDefinitionOutputConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._kmsKeyId) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._s3OutputPath) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyId = value.kmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
    }
    /**
     * @stability stable
     */
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    /**
     * @stability stable
     */
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    /**
     * @stability stable
     */
    get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    /**
     * @stability stable
     */
    set s3OutputPath(value) {
        this._s3OutputPath = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
exports.SagemakerFlowDefinitionOutputConfigOutputReference = SagemakerFlowDefinitionOutputConfigOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinitionOutputConfigOutputReference[_g] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinitionOutputConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition}.
 *
 * @stability stable
 */
class SagemakerFlowDefinition extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_flow_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // human_loop_activation_config - computed: false, optional: true, required: false
        this._humanLoopActivationConfig = new SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(this, "human_loop_activation_config", true);
        // human_loop_config - computed: false, optional: false, required: true
        this._humanLoopConfig = new SagemakerFlowDefinitionHumanLoopConfigOutputReference(this, "human_loop_config", true);
        // human_loop_request_source - computed: false, optional: true, required: false
        this._humanLoopRequestSource = new SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(this, "human_loop_request_source", true);
        // output_config - computed: false, optional: false, required: true
        this._outputConfig = new SagemakerFlowDefinitionOutputConfigOutputReference(this, "output_config", true);
        this._flowDefinitionName = config.flowDefinitionName;
        this._roleArn = config.roleArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._humanLoopActivationConfig.internalValue = config.humanLoopActivationConfig;
        this._humanLoopConfig.internalValue = config.humanLoopConfig;
        this._humanLoopRequestSource.internalValue = config.humanLoopRequestSource;
        this._outputConfig.internalValue = config.outputConfig;
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
    get flowDefinitionName() {
        return this.getStringAttribute('flow_definition_name');
    }
    /**
     * @stability stable
     */
    set flowDefinitionName(value) {
        this._flowDefinitionName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get flowDefinitionNameInput() {
        return this._flowDefinitionName;
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
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
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
    get humanLoopActivationConfig() {
        return this._humanLoopActivationConfig;
    }
    /**
     * @stability stable
     */
    putHumanLoopActivationConfig(value) {
        this._humanLoopActivationConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHumanLoopActivationConfig() {
        this._humanLoopActivationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get humanLoopActivationConfigInput() {
        return this._humanLoopActivationConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get humanLoopConfig() {
        return this._humanLoopConfig;
    }
    /**
     * @stability stable
     */
    putHumanLoopConfig(value) {
        this._humanLoopConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get humanLoopConfigInput() {
        return this._humanLoopConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get humanLoopRequestSource() {
        return this._humanLoopRequestSource;
    }
    /**
     * @stability stable
     */
    putHumanLoopRequestSource(value) {
        this._humanLoopRequestSource.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHumanLoopRequestSource() {
        this._humanLoopRequestSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get humanLoopRequestSourceInput() {
        return this._humanLoopRequestSource.internalValue;
    }
    /**
     * @stability stable
     */
    get outputConfig() {
        return this._outputConfig;
    }
    /**
     * @stability stable
     */
    putOutputConfig(value) {
        this._outputConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputConfigInput() {
        return this._outputConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            flow_definition_name: cdktf.stringToTerraform(this._flowDefinitionName),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            human_loop_activation_config: sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(this._humanLoopActivationConfig.internalValue),
            human_loop_config: sagemakerFlowDefinitionHumanLoopConfigToTerraform(this._humanLoopConfig.internalValue),
            human_loop_request_source: sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(this._humanLoopRequestSource.internalValue),
            output_config: sagemakerFlowDefinitionOutputConfigToTerraform(this._outputConfig.internalValue),
        };
    }
}
exports.SagemakerFlowDefinition = SagemakerFlowDefinition;
_h = JSII_RTTI_SYMBOL_1;
SagemakerFlowDefinition[_h] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerFlowDefinition", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SagemakerFlowDefinition.tfResourceType = "aws_sagemaker_flow_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLWZsb3ctZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdlbWFrZXIvc2FnZW1ha2VyLWZsb3ctZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBCL0IsU0FBZ0IsOEZBQThGLENBQUMsTUFBaU07SUFDOVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLDZCQUE2QixDQUFDO0tBQ2pHLENBQUE7QUFDSCxDQUFDO0FBUkQsd01BUUM7Ozs7QUFFRCxNQUFhLGtHQUFtRyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXpJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDdkMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUM7U0FDekY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJB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LEdBQVcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZsb3dEZWZpbml0aW9uTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnPzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodW1hbkxvb3BDb25maWc6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodW1hbkxvb3BSZXF1ZXN0U291cmNlPzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdXRwdXRDb25maWc6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnMgPSB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zID0gdmFsdWUuaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmRpdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmRpdGlvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9ucztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZz86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmRpdGlvbnNfY29uZmlnOiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcgPSB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBodW1hbl9sb29wX2FjdGl2YXRpb25fY29uZGl0aW9uc19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmRpdGlvbnNfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZGl0aW9uc0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0SHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnKSB7XG4gICAgdGhpcy5faHVtYW5Mb29wQWN0aXZhdGlvbkNvbmRpdGlvbnNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnKCkge1xuICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25kaXRpb25zQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNlbnRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9sbGFycz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlbnRoRnJhY3Rpb25zT2ZBQ2VudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNlbnRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNlbnRzKSxcbiAgICBkb2xsYXJzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvbGxhcnMpLFxuICAgIHRlbnRoX2ZyYWN0aW9uc19vZl9hX2NlbnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGVudGhGcmFjdGlvbnNPZkFDZW50KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jZW50cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2VudHMgPSB0aGlzLl9jZW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvbGxhcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvbGxhcnMgPSB0aGlzLl9kb2xsYXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVudGhGcmFjdGlvbnNPZkFDZW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50ZW50aEZyYWN0aW9uc09mQUNlbnQgPSB0aGlzLl90ZW50aEZyYWN0aW9uc09mQUNlbnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2VudHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kb2xsYXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGVudGhGcmFjdGlvbnNPZkFDZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jZW50cyA9IHZhbHVlLmNlbnRzO1xuICAgICAgdGhpcy5fZG9sbGFycyA9IHZhbHVlLmRvbGxhcnM7XG4gICAgICB0aGlzLl90ZW50aEZyYWN0aW9uc09mQUNlbnQgPSB2YWx1ZS50ZW50aEZyYWN0aW9uc09mQUNlbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY2VudHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2VudHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY2VudHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNlbnRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jZW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENlbnRzKCkge1xuICAgIHRoaXMuX2NlbnRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjZW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jZW50cztcbiAgfVxuXG4gIC8vIGRvbGxhcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZG9sbGFycz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZG9sbGFycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RvbGxhcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbGxhcnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RvbGxhcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb2xsYXJzKCkge1xuICAgIHRoaXMuX2RvbGxhcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvbGxhcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9sbGFycztcbiAgfVxuXG4gIC8vIHRlbnRoX2ZyYWN0aW9uc19vZl9hX2NlbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVudGhGcmFjdGlvbnNPZkFDZW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0ZW50aEZyYWN0aW9uc09mQUNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0ZW50aF9mcmFjdGlvbnNfb2ZfYV9jZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZW50aEZyYWN0aW9uc09mQUNlbnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RlbnRoRnJhY3Rpb25zT2ZBQ2VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlbnRoRnJhY3Rpb25zT2ZBQ2VudCgpIHtcbiAgICB0aGlzLl90ZW50aEZyYWN0aW9uc09mQUNlbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlbnRoRnJhY3Rpb25zT2ZBQ2VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW50aEZyYWN0aW9uc09mQUNlbnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbW91bnRJblVzZD86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZVRvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhbW91bnRfaW5fdXNkOiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZUFtb3VudEluVXNkVG9UZXJyYWZvcm0oc3RydWN0IS5hbW91bnRJblVzZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbW91bnRJblVzZD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYW1vdW50SW5Vc2QgPSB0aGlzLl9hbW91bnRJblVzZD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYW1vdW50SW5Vc2QuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYW1vdW50SW5Vc2QuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFtb3VudEluVXNkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFtb3VudF9pbl91c2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYW1vdW50SW5Vc2QgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdQdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VBbW91bnRJblVzZE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhbW91bnRfaW5fdXNkXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFtb3VudEluVXNkKCkge1xuICAgIHJldHVybiB0aGlzLl9hbW91bnRJblVzZDtcbiAgfVxuICBwdWJsaWMgcHV0QW1vdW50SW5Vc2QodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlQW1vdW50SW5Vc2QpIHtcbiAgICB0aGlzLl9hbW91bnRJblVzZC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QW1vdW50SW5Vc2QoKSB7XG4gICAgdGhpcy5fYW1vdW50SW5Vc2QuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYW1vdW50SW5Vc2RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW1vdW50SW5Vc2QuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh1bWFuVGFza1VpQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXNrQ291bnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhc2tEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFza0tleXdvcmRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhc2tUaW1lTGltaXRJblNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXNrVGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3b3JrdGVhbUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2U/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGh1bWFuX3Rhc2tfdWlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh1bWFuVGFza1VpQXJuKSxcbiAgICB0YXNrX2F2YWlsYWJpbGl0eV9saWZldGltZV9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcyksXG4gICAgdGFza19jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50YXNrQ291bnQpLFxuICAgIHRhc2tfZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFza0Rlc2NyaXB0aW9uKSxcbiAgICB0YXNrX2tleXdvcmRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRhc2tLZXl3b3JkcyksXG4gICAgdGFza190aW1lX2xpbWl0X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFza1RpbWVMaW1pdEluU2Vjb25kcyksXG4gICAgdGFza190aXRsZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YXNrVGl0bGUpLFxuICAgIHdvcmt0ZWFtX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53b3JrdGVhbUFybiksXG4gICAgcHVibGljX3dvcmtmb3JjZV90YXNrX3ByaWNlOiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZVRvVGVycmFmb3JtKHN0cnVjdCEucHVibGljV29ya2ZvcmNlVGFza1ByaWNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2h1bWFuVGFza1VpQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odW1hblRhc2tVaUFybiA9IHRoaXMuX2h1bWFuVGFza1VpQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHMgPSB0aGlzLl90YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXNrQ291bnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhc2tDb3VudCA9IHRoaXMuX3Rhc2tDb3VudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rhc2tEZXNjcmlwdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFza0Rlc2NyaXB0aW9uID0gdGhpcy5fdGFza0Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFza0tleXdvcmRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXNrS2V5d29yZHMgPSB0aGlzLl90YXNrS2V5d29yZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YXNrVGltZUxpbWl0SW5TZWNvbmRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YXNrVGltZUxpbWl0SW5TZWNvbmRzID0gdGhpcy5fdGFza1RpbWVMaW1pdEluU2Vjb25kcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rhc2tUaXRsZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFza1RpdGxlID0gdGhpcy5fdGFza1RpdGxlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fd29ya3RlYW1Bcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lndvcmt0ZWFtQXJuID0gdGhpcy5fd29ya3RlYW1Bcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2U/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnB1YmxpY1dvcmtmb3JjZVRhc2tQcmljZSA9IHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faHVtYW5UYXNrVWlBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXNrQ291bnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXNrRGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXNrS2V5d29yZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YXNrVGltZUxpbWl0SW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFza1RpdGxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd29ya3RlYW1Bcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faHVtYW5UYXNrVWlBcm4gPSB2YWx1ZS5odW1hblRhc2tVaUFybjtcbiAgICAgIHRoaXMuX3Rhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcyA9IHZhbHVlLnRhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcztcbiAgICAgIHRoaXMuX3Rhc2tDb3VudCA9IHZhbHVlLnRhc2tDb3VudDtcbiAgICAgIHRoaXMuX3Rhc2tEZXNjcmlwdGlvbiA9IHZhbHVlLnRhc2tEZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuX3Rhc2tLZXl3b3JkcyA9IHZhbHVlLnRhc2tLZXl3b3JkcztcbiAgICAgIHRoaXMuX3Rhc2tUaW1lTGltaXRJblNlY29uZHMgPSB2YWx1ZS50YXNrVGltZUxpbWl0SW5TZWNvbmRzO1xuICAgICAgdGhpcy5fdGFza1RpdGxlID0gdmFsdWUudGFza1RpdGxlO1xuICAgICAgdGhpcy5fd29ya3RlYW1Bcm4gPSB2YWx1ZS53b3JrdGVhbUFybjtcbiAgICAgIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHVibGljV29ya2ZvcmNlVGFza1ByaWNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGh1bWFuX3Rhc2tfdWlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2h1bWFuVGFza1VpQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBodW1hblRhc2tVaUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h1bWFuX3Rhc2tfdWlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBodW1hblRhc2tVaUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faHVtYW5UYXNrVWlBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHVtYW5UYXNrVWlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtYW5UYXNrVWlBcm47XG4gIH1cblxuICAvLyB0YXNrX2F2YWlsYWJpbGl0eV9saWZldGltZV9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rhc2tBdmFpbGFiaWxpdHlMaWZldGltZUluU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFza19hdmFpbGFiaWxpdHlfbGlmZXRpbWVfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHMoKSB7XG4gICAgdGhpcy5fdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrQXZhaWxhYmlsaXR5TGlmZXRpbWVJblNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0F2YWlsYWJpbGl0eUxpZmV0aW1lSW5TZWNvbmRzO1xuICB9XG5cbiAgLy8gdGFza19jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXNrQ291bnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRhc2tDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Rhc2tfY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFza0NvdW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tDb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrQ291bnQ7XG4gIH1cblxuICAvLyB0YXNrX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Rhc2tEZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFza0Rlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFza19kZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza0Rlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrRGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFza0Rlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rhc2tEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIHRhc2tfa2V5d29yZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFza0tleXdvcmRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRhc2tLZXl3b3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0YXNrX2tleXdvcmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXNrS2V5d29yZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGFza0tleXdvcmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFza0tleXdvcmRzKCkge1xuICAgIHRoaXMuX3Rhc2tLZXl3b3JkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFza0tleXdvcmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rhc2tLZXl3b3JkcztcbiAgfVxuXG4gIC8vIHRhc2tfdGltZV9saW1pdF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rhc2tUaW1lTGltaXRJblNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRhc2tUaW1lTGltaXRJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0YXNrX3RpbWVfbGltaXRfaW5fc2Vjb25kcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza1RpbWVMaW1pdEluU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFza1RpbWVMaW1pdEluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhc2tUaW1lTGltaXRJblNlY29uZHMoKSB7XG4gICAgdGhpcy5fdGFza1RpbWVMaW1pdEluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFza1RpbWVMaW1pdEluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrVGltZUxpbWl0SW5TZWNvbmRzO1xuICB9XG5cbiAgLy8gdGFza190aXRsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXNrVGl0bGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhc2tUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rhc2tfdGl0bGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFza1RpdGxlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tUaXRsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrVGl0bGU7XG4gIH1cblxuICAvLyB3b3JrdGVhbV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfd29ya3RlYW1Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHdvcmt0ZWFtQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd29ya3RlYW1fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCB3b3JrdGVhbUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fd29ya3RlYW1Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd29ya3RlYW1Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3RlYW1Bcm47XG4gIH1cblxuICAvLyBwdWJsaWNfd29ya2ZvcmNlX3Rhc2tfcHJpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHVibGljV29ya2ZvcmNlVGFza1ByaWNlID0gbmV3IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQ29uZmlnUHVibGljV29ya2ZvcmNlVGFza1ByaWNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInB1YmxpY193b3JrZm9yY2VfdGFza19wcmljZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZTtcbiAgfVxuICBwdWJsaWMgcHV0UHVibGljV29ya2ZvcmNlVGFza1ByaWNlKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcENvbmZpZ1B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZSkge1xuICAgIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHVibGljV29ya2ZvcmNlVGFza1ByaWNlKCkge1xuICAgIHRoaXMuX3B1YmxpY1dvcmtmb3JjZVRhc2tQcmljZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWJsaWNXb3JrZm9yY2VUYXNrUHJpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVibGljV29ya2ZvcmNlVGFza1ByaWNlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2VPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhd3NfbWFuYWdlZF9odW1hbl9sb29wX3JlcXVlc3Rfc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXdzTWFuYWdlZEh1bWFuTG9vcFJlcXVlc3RTb3VyY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlID0gdGhpcy5fYXdzTWFuYWdlZEh1bWFuTG9vcFJlcXVlc3RTb3VyY2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXdzTWFuYWdlZEh1bWFuTG9vcFJlcXVlc3RTb3VyY2UgPSB2YWx1ZS5hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZTtcbiAgICB9XG4gIH1cblxuICAvLyBhd3NfbWFuYWdlZF9odW1hbl9sb29wX3JlcXVlc3Rfc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2F3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F3c19tYW5hZ2VkX2h1bWFuX2xvb3BfcmVxdWVzdF9zb3VyY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF3c01hbmFnZWRIdW1hbkxvb3BSZXF1ZXN0U291cmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NNYW5hZ2VkSHVtYW5Mb29wUmVxdWVzdFNvdXJjZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNPdXRwdXRQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25PdXRwdXRDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBzM19vdXRwdXRfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dFBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUlkID0gdGhpcy5fa21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM091dHB1dFBhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzT3V0cHV0UGF0aCA9IHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uT3V0cHV0Q29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWUua21zS2V5SWQ7XG4gICAgICB0aGlzLl9zM091dHB1dFBhdGggPSB2YWx1ZS5zM091dHB1dFBhdGg7XG4gICAgfVxuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBzM19vdXRwdXRfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zM091dHB1dFBhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHMzT3V0cHV0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX291dHB1dF9wYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM091dHB1dFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM091dHB1dFBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNPdXRwdXRQYXRoO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zYWdlbWFrZXJfZmxvd19kZWZpbml0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNhZ2VtYWtlckZsb3dEZWZpbml0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc2FnZW1ha2VyX2Zsb3dfZGVmaW5pdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9mbG93RGVmaW5pdGlvbk5hbWUgPSBjb25maWcuZmxvd0RlZmluaXRpb25OYW1lO1xuICAgIHRoaXMuX3JvbGVBcm4gPSBjb25maWcucm9sZUFybjtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnO1xuICAgIHRoaXMuX2h1bWFuTG9vcENvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmh1bWFuTG9vcENvbmZpZztcbiAgICB0aGlzLl9odW1hbkxvb3BSZXF1ZXN0U291cmNlLmludGVybmFsVmFsdWUgPSBjb25maWcuaHVtYW5Mb29wUmVxdWVzdFNvdXJjZTtcbiAgICB0aGlzLl9vdXRwdXRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5vdXRwdXRDb25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZmxvd19kZWZpbml0aW9uX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmxvd0RlZmluaXRpb25OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmbG93RGVmaW5pdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmbG93X2RlZmluaXRpb25fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmxvd0RlZmluaXRpb25OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mbG93RGVmaW5pdGlvbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmxvd0RlZmluaXRpb25OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb3dEZWZpbml0aW9uTmFtZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlQXJuO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGh1bWFuX2xvb3BfYWN0aXZhdGlvbl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZyA9IG5ldyBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHVtYW5fbG9vcF9hY3RpdmF0aW9uX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBodW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcEFjdGl2YXRpb25Db25maWcpIHtcbiAgICB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIdW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BBY3RpdmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodW1hbl9sb29wX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9odW1hbkxvb3BDb25maWcgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHVtYW5fbG9vcF9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaHVtYW5Mb29wQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9odW1hbkxvb3BDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dEh1bWFuTG9vcENvbmZpZyh2YWx1ZTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWcpIHtcbiAgICB0aGlzLl9odW1hbkxvb3BDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodW1hbkxvb3BDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtYW5Mb29wQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodW1hbl9sb29wX3JlcXVlc3Rfc291cmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2h1bWFuTG9vcFJlcXVlc3RTb3VyY2UgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImh1bWFuX2xvb3BfcmVxdWVzdF9zb3VyY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaHVtYW5Mb29wUmVxdWVzdFNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtYW5Mb29wUmVxdWVzdFNvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0SHVtYW5Mb29wUmVxdWVzdFNvdXJjZSh2YWx1ZTogU2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BSZXF1ZXN0U291cmNlKSB7XG4gICAgdGhpcy5faHVtYW5Mb29wUmVxdWVzdFNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHVtYW5Mb29wUmVxdWVzdFNvdXJjZSgpIHtcbiAgICB0aGlzLl9odW1hbkxvb3BSZXF1ZXN0U291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh1bWFuTG9vcFJlcXVlc3RTb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtYW5Mb29wUmVxdWVzdFNvdXJjZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3V0cHV0X2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9vdXRwdXRDb25maWcgPSBuZXcgU2FnZW1ha2VyRmxvd0RlZmluaXRpb25PdXRwdXRDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwib3V0cHV0X2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBvdXRwdXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0T3V0cHV0Q29uZmlnKHZhbHVlOiBTYWdlbWFrZXJGbG93RGVmaW5pdGlvbk91dHB1dENvbmZpZykge1xuICAgIHRoaXMuX291dHB1dENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmxvd19kZWZpbml0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Zsb3dEZWZpbml0aW9uTmFtZSksXG4gICAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcm9sZUFybiksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGh1bWFuX2xvb3BfYWN0aXZhdGlvbl9jb25maWc6IHNhZ2VtYWtlckZsb3dEZWZpbml0aW9uSHVtYW5Mb29wQWN0aXZhdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2h1bWFuTG9vcEFjdGl2YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBodW1hbl9sb29wX2NvbmZpZzogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25IdW1hbkxvb3BDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9odW1hbkxvb3BDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBodW1hbl9sb29wX3JlcXVlc3Rfc291cmNlOiBzYWdlbWFrZXJGbG93RGVmaW5pdGlvbkh1bWFuTG9vcFJlcXVlc3RTb3VyY2VUb1RlcnJhZm9ybSh0aGlzLl9odW1hbkxvb3BSZXF1ZXN0U291cmNlLmludGVybmFsVmFsdWUpLFxuICAgICAgb3V0cHV0X2NvbmZpZzogc2FnZW1ha2VyRmxvd0RlZmluaXRpb25PdXRwdXRDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9vdXRwdXRDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19