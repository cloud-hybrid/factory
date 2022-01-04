"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigRemediationConfiguration = exports.configRemediationConfigurationParameterToTerraform = exports.ConfigRemediationConfigurationExecutionControlsOutputReference = exports.configRemediationConfigurationExecutionControlsToTerraform = exports.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference = exports.configRemediationConfigurationExecutionControlsSsmControlsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function configRemediationConfigurationExecutionControlsSsmControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        concurrent_execution_rate_percentage: cdktf.numberToTerraform(struct.concurrentExecutionRatePercentage),
        error_percentage: cdktf.numberToTerraform(struct.errorPercentage),
    };
}
exports.configRemediationConfigurationExecutionControlsSsmControlsToTerraform = configRemediationConfigurationExecutionControlsSsmControlsToTerraform;
/**
 * @stability stable
 */
class ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference extends cdktf.ComplexObject {
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
        if (this._concurrentExecutionRatePercentage) {
            hasAnyValues = true;
            internalValueResult.concurrentExecutionRatePercentage = this._concurrentExecutionRatePercentage;
        }
        if (this._errorPercentage) {
            hasAnyValues = true;
            internalValueResult.errorPercentage = this._errorPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._concurrentExecutionRatePercentage = undefined;
            this._errorPercentage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._concurrentExecutionRatePercentage = value.concurrentExecutionRatePercentage;
            this._errorPercentage = value.errorPercentage;
        }
    }
    /**
     * @stability stable
     */
    get concurrentExecutionRatePercentage() {
        return this.getNumberAttribute('concurrent_execution_rate_percentage');
    }
    /**
     * @stability stable
     */
    set concurrentExecutionRatePercentage(value) {
        this._concurrentExecutionRatePercentage = value;
    }
    /**
     * @stability stable
     */
    resetConcurrentExecutionRatePercentage() {
        this._concurrentExecutionRatePercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get concurrentExecutionRatePercentageInput() {
        return this._concurrentExecutionRatePercentage;
    }
    /**
     * @stability stable
     */
    get errorPercentage() {
        return this.getNumberAttribute('error_percentage');
    }
    /**
     * @stability stable
     */
    set errorPercentage(value) {
        this._errorPercentage = value;
    }
    /**
     * @stability stable
     */
    resetErrorPercentage() {
        this._errorPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get errorPercentageInput() {
        return this._errorPercentage;
    }
}
exports.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference = ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference[_a] = { fqn: "@cdktf/provider-aws.config.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference", version: "3.0.1" };
function configRemediationConfigurationExecutionControlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ssm_controls: configRemediationConfigurationExecutionControlsSsmControlsToTerraform(struct.ssmControls),
    };
}
exports.configRemediationConfigurationExecutionControlsToTerraform = configRemediationConfigurationExecutionControlsToTerraform;
/**
 * @stability stable
 */
class ConfigRemediationConfigurationExecutionControlsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // ssm_controls - computed: false, optional: true, required: false
        this._ssmControls = new ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(this, "ssm_controls", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _d, _e;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_d = this._ssmControls) === null || _d === void 0 ? void 0 : _d.internalValue) {
            hasAnyValues = true;
            internalValueResult.ssmControls = (_e = this._ssmControls) === null || _e === void 0 ? void 0 : _e.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._ssmControls.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._ssmControls.internalValue = value.ssmControls;
        }
    }
    /**
     * @stability stable
     */
    get ssmControls() {
        return this._ssmControls;
    }
    /**
     * @stability stable
     */
    putSsmControls(value) {
        this._ssmControls.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSsmControls() {
        this._ssmControls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ssmControlsInput() {
        return this._ssmControls.internalValue;
    }
}
exports.ConfigRemediationConfigurationExecutionControlsOutputReference = ConfigRemediationConfigurationExecutionControlsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ConfigRemediationConfigurationExecutionControlsOutputReference[_b] = { fqn: "@cdktf/provider-aws.config.ConfigRemediationConfigurationExecutionControlsOutputReference", version: "3.0.1" };
function configRemediationConfigurationParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        resource_value: cdktf.stringToTerraform(struct.resourceValue),
        static_value: cdktf.stringToTerraform(struct.staticValue),
    };
}
exports.configRemediationConfigurationParameterToTerraform = configRemediationConfigurationParameterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration}.
 *
 * @stability stable
 */
class ConfigRemediationConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_config_remediation_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // execution_controls - computed: false, optional: true, required: false
        this._executionControls = new ConfigRemediationConfigurationExecutionControlsOutputReference(this, "execution_controls", true);
        this._automatic = config.automatic;
        this._configRuleName = config.configRuleName;
        this._maximumAutomaticAttempts = config.maximumAutomaticAttempts;
        this._resourceType = config.resourceType;
        this._retryAttemptSeconds = config.retryAttemptSeconds;
        this._targetId = config.targetId;
        this._targetType = config.targetType;
        this._targetVersion = config.targetVersion;
        this._executionControls.internalValue = config.executionControls;
        this._parameter = config.parameter;
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
    get automatic() {
        return this.getBooleanAttribute('automatic');
    }
    /**
     * @stability stable
     */
    set automatic(value) {
        this._automatic = value;
    }
    /**
     * @stability stable
     */
    resetAutomatic() {
        this._automatic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get automaticInput() {
        return this._automatic;
    }
    /**
     * @stability stable
     */
    get configRuleName() {
        return this.getStringAttribute('config_rule_name');
    }
    /**
     * @stability stable
     */
    set configRuleName(value) {
        this._configRuleName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configRuleNameInput() {
        return this._configRuleName;
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
    get maximumAutomaticAttempts() {
        return this.getNumberAttribute('maximum_automatic_attempts');
    }
    /**
     * @stability stable
     */
    set maximumAutomaticAttempts(value) {
        this._maximumAutomaticAttempts = value;
    }
    /**
     * @stability stable
     */
    resetMaximumAutomaticAttempts() {
        this._maximumAutomaticAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumAutomaticAttemptsInput() {
        return this._maximumAutomaticAttempts;
    }
    /**
     * @stability stable
     */
    get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    /**
     * @stability stable
     */
    set resourceType(value) {
        this._resourceType = value;
    }
    /**
     * @stability stable
     */
    resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTypeInput() {
        return this._resourceType;
    }
    /**
     * @stability stable
     */
    get retryAttemptSeconds() {
        return this.getNumberAttribute('retry_attempt_seconds');
    }
    /**
     * @stability stable
     */
    set retryAttemptSeconds(value) {
        this._retryAttemptSeconds = value;
    }
    /**
     * @stability stable
     */
    resetRetryAttemptSeconds() {
        this._retryAttemptSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryAttemptSecondsInput() {
        return this._retryAttemptSeconds;
    }
    /**
     * @stability stable
     */
    get targetId() {
        return this.getStringAttribute('target_id');
    }
    /**
     * @stability stable
     */
    set targetId(value) {
        this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetIdInput() {
        return this._targetId;
    }
    /**
     * @stability stable
     */
    get targetType() {
        return this.getStringAttribute('target_type');
    }
    /**
     * @stability stable
     */
    set targetType(value) {
        this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetTypeInput() {
        return this._targetType;
    }
    /**
     * @stability stable
     */
    get targetVersion() {
        return this.getStringAttribute('target_version');
    }
    /**
     * @stability stable
     */
    set targetVersion(value) {
        this._targetVersion = value;
    }
    /**
     * @stability stable
     */
    resetTargetVersion() {
        this._targetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetVersionInput() {
        return this._targetVersion;
    }
    /**
     * @stability stable
     */
    get executionControls() {
        return this._executionControls;
    }
    /**
     * @stability stable
     */
    putExecutionControls(value) {
        this._executionControls.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetExecutionControls() {
        this._executionControls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get executionControlsInput() {
        return this._executionControls.internalValue;
    }
    /**
     * @stability stable
     */
    get parameter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('parameter');
    }
    /**
     * @stability stable
     */
    set parameter(value) {
        this._parameter = value;
    }
    /**
     * @stability stable
     */
    resetParameter() {
        this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parameterInput() {
        return this._parameter;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            automatic: cdktf.booleanToTerraform(this._automatic),
            config_rule_name: cdktf.stringToTerraform(this._configRuleName),
            maximum_automatic_attempts: cdktf.numberToTerraform(this._maximumAutomaticAttempts),
            resource_type: cdktf.stringToTerraform(this._resourceType),
            retry_attempt_seconds: cdktf.numberToTerraform(this._retryAttemptSeconds),
            target_id: cdktf.stringToTerraform(this._targetId),
            target_type: cdktf.stringToTerraform(this._targetType),
            target_version: cdktf.stringToTerraform(this._targetVersion),
            execution_controls: configRemediationConfigurationExecutionControlsToTerraform(this._executionControls.internalValue),
            parameter: cdktf.listMapper(configRemediationConfigurationParameterToTerraform)(this._parameter),
        };
    }
}
exports.ConfigRemediationConfiguration = ConfigRemediationConfiguration;
_c = JSII_RTTI_SYMBOL_1;
ConfigRemediationConfiguration[_c] = { fqn: "@cdktf/provider-aws.config.ConfigRemediationConfiguration", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ConfigRemediationConfiguration.tfResourceType = "aws_config_remediation_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXJlbWVkaWF0aW9uLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy1yZW1lZGlhdGlvbi1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0MvQixTQUFnQixxRUFBcUUsQ0FBQyxNQUErSTtJQUNuTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLG9DQUFvQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUNBQWlDLENBQUM7UUFDeEcsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7S0FDbkUsQ0FBQTtBQUNILENBQUM7QUFURCxzSkFTQzs7OztBQUVELE1BQWEseUVBQTBFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJaEgsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxrQ0FBa0MsRUFBRTtZQUMzQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlD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LEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUNuRixhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN6RSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM1RCxrQkFBa0IsRUFBRSwwREFBMEQsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1lBQ3JILFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRyxDQUFDO0lBQ0osQ0FBQzs7QUExTkgsd0VBMk5DOzs7QUF6TkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw2Q0FBYyxHQUFXLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9tYXRpYz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlnUnVsZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhpbXVtQXV0b21hdGljQXR0ZW1wdHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJldHJ5QXR0ZW1wdFNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4ZWN1dGlvbkNvbnRyb2xzPzogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyPzogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uUGFyYW1ldGVyW107XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1JlbWVkaWF0aW9uQ29uZmlndXJhdGlvbkV4ZWN1dGlvbkNvbnRyb2xzU3NtQ29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uY3VycmVudEV4ZWN1dGlvblJhdGVQZXJjZW50YWdlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcnJvclBlcmNlbnRhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25FeGVjdXRpb25Db250cm9sc1NzbUNvbnRyb2xzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNTc21Db250cm9sc091dHB1dFJlZmVyZW5jZSB8IENvbmZpZ1JlbWVkaWF0aW9uQ29uZmlndXJhdGlvbkV4ZWN1dGlvbkNvbnRyb2xzU3NtQ29udHJvbHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb25jdXJyZW50X2V4ZWN1dGlvbl9yYXRlX3BlcmNlbnRhZ2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY29uY3VycmVudEV4ZWN1dGlvblJhdGVQZXJjZW50YWdlKSxcbiAgICBlcnJvcl9wZXJjZW50YWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmVycm9yUGVyY2VudGFnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpZ1JlbWVkaWF0aW9uQ29uZmlndXJhdGlvbkV4ZWN1dGlvbkNvbnRyb2xzU3NtQ29udHJvbHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNTc21Db250cm9scyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29uY3VycmVudEV4ZWN1dGlvblJhdGVQZXJjZW50YWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25jdXJyZW50RXhlY3V0aW9uUmF0ZVBlcmNlbnRhZ2UgPSB0aGlzLl9jb25jdXJyZW50RXhlY3V0aW9uUmF0ZVBlcmNlbnRhZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lcnJvclBlcmNlbnRhZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVycm9yUGVyY2VudGFnZSA9IHRoaXMuX2Vycm9yUGVyY2VudGFnZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvbmZpZ1JlbWVkaWF0aW9uQ29uZmlndXJhdGlvbkV4ZWN1dGlvbkNvbnRyb2xzU3NtQ29udHJvbHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25jdXJyZW50RXhlY3V0aW9uUmF0ZVBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lcnJvclBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbmN1cnJlbnRFeGVjdXRpb25SYXRlUGVyY2VudGFnZSA9IHZhbHVlLmNvbmN1cnJlbnRFeGVjdXRpb25SYXRlUGVyY2VudGFnZTtcbiAgICAgIHRoaXMuX2Vycm9yUGVyY2VudGFnZSA9IHZhbHVlLmVycm9yUGVyY2VudGFnZTtcbiAgICB9XG4gIH1cblxuICAvLyBjb25jdXJyZW50X2V4ZWN1dGlvbl9yYXRlX3BlcmNlbnRhZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29uY3VycmVudEV4ZWN1dGlvblJhdGVQZXJjZW50YWdlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBjb25jdXJyZW50RXhlY3V0aW9uUmF0ZVBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjb25jdXJyZW50X2V4ZWN1dGlvbl9yYXRlX3BlcmNlbnRhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmN1cnJlbnRFeGVjdXRpb25SYXRlUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY29uY3VycmVudEV4ZWN1dGlvblJhdGVQZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uY3VycmVudEV4ZWN1dGlvblJhdGVQZXJjZW50YWdlKCkge1xuICAgIHRoaXMuX2NvbmN1cnJlbnRFeGVjdXRpb25SYXRlUGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uY3VycmVudEV4ZWN1dGlvblJhdGVQZXJjZW50YWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmN1cnJlbnRFeGVjdXRpb25SYXRlUGVyY2VudGFnZTtcbiAgfVxuXG4gIC8vIGVycm9yX3BlcmNlbnRhZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXJyb3JQZXJjZW50YWdlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBlcnJvclBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlcnJvcl9wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBlcnJvclBlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Vycm9yUGVyY2VudGFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVycm9yUGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl9lcnJvclBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVycm9yUGVyY2VudGFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvclBlcmNlbnRhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNzbUNvbnRyb2xzPzogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNTc21Db250cm9scztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ1JlbWVkaWF0aW9uQ29uZmlndXJhdGlvbkV4ZWN1dGlvbkNvbnRyb2xzVG9UZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNPdXRwdXRSZWZlcmVuY2UgfCBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25FeGVjdXRpb25Db250cm9scyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNzbV9jb250cm9sczogY29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNTc21Db250cm9sc1RvVGVycmFmb3JtKHN0cnVjdCEuc3NtQ29udHJvbHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25FeGVjdXRpb25Db250cm9sc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25FeGVjdXRpb25Db250cm9scyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc3NtQ29udHJvbHM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzbUNvbnRyb2xzID0gdGhpcy5fc3NtQ29udHJvbHM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25FeGVjdXRpb25Db250cm9scyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NzbUNvbnRyb2xzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NzbUNvbnRyb2xzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zc21Db250cm9scztcbiAgICB9XG4gIH1cblxuICAvLyBzc21fY29udHJvbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NtQ29udHJvbHMgPSBuZXcgQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNTc21Db250cm9sc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzc21fY29udHJvbHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3NtQ29udHJvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzbUNvbnRyb2xzO1xuICB9XG4gIHB1YmxpYyBwdXRTc21Db250cm9scyh2YWx1ZTogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNTc21Db250cm9scykge1xuICAgIHRoaXMuX3NzbUNvbnRyb2xzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTc21Db250cm9scygpIHtcbiAgICB0aGlzLl9zc21Db250cm9scy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzc21Db250cm9sc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc21Db250cm9scy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1JlbWVkaWF0aW9uQ29uZmlndXJhdGlvblBhcmFtZXRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVZhbHVlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGljVmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbWV0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHJlc291cmNlX3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlVmFsdWUpLFxuICAgIHN0YXRpY192YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aWNWYWx1ZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY29uZmlnX3JlbWVkaWF0aW9uX2NvbmZpZ3VyYXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY29uZmlnX3JlbWVkaWF0aW9uX2NvbmZpZ3VyYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0b21hdGljID0gY29uZmlnLmF1dG9tYXRpYztcbiAgICB0aGlzLl9jb25maWdSdWxlTmFtZSA9IGNvbmZpZy5jb25maWdSdWxlTmFtZTtcbiAgICB0aGlzLl9tYXhpbXVtQXV0b21hdGljQXR0ZW1wdHMgPSBjb25maWcubWF4aW11bUF1dG9tYXRpY0F0dGVtcHRzO1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZSA9IGNvbmZpZy5yZXNvdXJjZVR5cGU7XG4gICAgdGhpcy5fcmV0cnlBdHRlbXB0U2Vjb25kcyA9IGNvbmZpZy5yZXRyeUF0dGVtcHRTZWNvbmRzO1xuICAgIHRoaXMuX3RhcmdldElkID0gY29uZmlnLnRhcmdldElkO1xuICAgIHRoaXMuX3RhcmdldFR5cGUgPSBjb25maWcudGFyZ2V0VHlwZTtcbiAgICB0aGlzLl90YXJnZXRWZXJzaW9uID0gY29uZmlnLnRhcmdldFZlcnNpb247XG4gICAgdGhpcy5fZXhlY3V0aW9uQ29udHJvbHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5leGVjdXRpb25Db250cm9scztcbiAgICB0aGlzLl9wYXJhbWV0ZXIgPSBjb25maWcucGFyYW1ldGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9tYXRpYyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvbWF0aWM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9tYXRpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvbWF0aWMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvbWF0aWModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9tYXRpYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9tYXRpYygpIHtcbiAgICB0aGlzLl9hdXRvbWF0aWMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9tYXRpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvbWF0aWM7XG4gIH1cblxuICAvLyBjb25maWdfcnVsZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbmZpZ1J1bGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25maWdSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ19ydWxlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZpZ1J1bGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25maWdSdWxlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25maWdSdWxlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdSdWxlTmFtZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtYXhpbXVtX2F1dG9tYXRpY19hdHRlbXB0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtQXV0b21hdGljQXR0ZW1wdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1BdXRvbWF0aWNBdHRlbXB0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fYXV0b21hdGljX2F0dGVtcHRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhpbXVtQXV0b21hdGljQXR0ZW1wdHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltdW1BdXRvbWF0aWNBdHRlbXB0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heGltdW1BdXRvbWF0aWNBdHRlbXB0cygpIHtcbiAgICB0aGlzLl9tYXhpbXVtQXV0b21hdGljQXR0ZW1wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1BdXRvbWF0aWNBdHRlbXB0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhpbXVtQXV0b21hdGljQXR0ZW1wdHM7XG4gIH1cblxuICAvLyByZXNvdXJjZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZVR5cGUoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUeXBlO1xuICB9XG5cbiAgLy8gcmV0cnlfYXR0ZW1wdF9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldHJ5QXR0ZW1wdFNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHJldHJ5QXR0ZW1wdFNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyZXRyeV9hdHRlbXB0X3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJldHJ5QXR0ZW1wdFNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JldHJ5QXR0ZW1wdFNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXRyeUF0dGVtcHRTZWNvbmRzKCkge1xuICAgIHRoaXMuX3JldHJ5QXR0ZW1wdFNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldHJ5QXR0ZW1wdFNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0cnlBdHRlbXB0U2Vjb25kcztcbiAgfVxuXG4gIC8vIHRhcmdldF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXJnZXRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXJnZXRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRJZDtcbiAgfVxuXG4gIC8vIHRhcmdldF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RhcmdldFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcmdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXJnZXRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFyZ2V0VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXJnZXRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFR5cGU7XG4gIH1cblxuICAvLyB0YXJnZXRfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YXJnZXRWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXJnZXRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFyZ2V0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhcmdldFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3RhcmdldFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0VmVyc2lvbjtcbiAgfVxuXG4gIC8vIGV4ZWN1dGlvbl9jb250cm9scyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGVjdXRpb25Db250cm9scyA9IG5ldyBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25FeGVjdXRpb25Db250cm9sc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJleGVjdXRpb25fY29udHJvbHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uQ29udHJvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGlvbkNvbnRyb2xzO1xuICB9XG4gIHB1YmxpYyBwdXRFeGVjdXRpb25Db250cm9scyh2YWx1ZTogQ29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHMpIHtcbiAgICB0aGlzLl9leGVjdXRpb25Db250cm9scy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXhlY3V0aW9uQ29udHJvbHMoKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uQ29udHJvbHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uQ29udHJvbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhlY3V0aW9uQ29udHJvbHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbWV0ZXI/OiBDb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJbXTsgXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJhbWV0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwYXJhbWV0ZXIodmFsdWU6IENvbmZpZ1JlbWVkaWF0aW9uQ29uZmlndXJhdGlvblBhcmFtZXRlcltdKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyYW1ldGVyKCkge1xuICAgIHRoaXMuX3BhcmFtZXRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcjtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0b21hdGljOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXV0b21hdGljKSxcbiAgICAgIGNvbmZpZ19ydWxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbmZpZ1J1bGVOYW1lKSxcbiAgICAgIG1heGltdW1fYXV0b21hdGljX2F0dGVtcHRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhpbXVtQXV0b21hdGljQXR0ZW1wdHMpLFxuICAgICAgcmVzb3VyY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVzb3VyY2VUeXBlKSxcbiAgICAgIHJldHJ5X2F0dGVtcHRfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcmV0cnlBdHRlbXB0U2Vjb25kcyksXG4gICAgICB0YXJnZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RhcmdldElkKSxcbiAgICAgIHRhcmdldF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXJnZXRUeXBlKSxcbiAgICAgIHRhcmdldF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXJnZXRWZXJzaW9uKSxcbiAgICAgIGV4ZWN1dGlvbl9jb250cm9sczogY29uZmlnUmVtZWRpYXRpb25Db25maWd1cmF0aW9uRXhlY3V0aW9uQ29udHJvbHNUb1RlcnJhZm9ybSh0aGlzLl9leGVjdXRpb25Db250cm9scy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHBhcmFtZXRlcjogY2RrdGYubGlzdE1hcHBlcihjb25maWdSZW1lZGlhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJUb1RlcnJhZm9ybSkodGhpcy5fcGFyYW1ldGVyKSxcbiAgICB9O1xuICB9XG59XG4iXX0=