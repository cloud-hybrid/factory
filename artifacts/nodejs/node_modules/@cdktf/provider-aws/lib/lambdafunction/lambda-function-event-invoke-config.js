"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaFunctionEventInvokeConfig = exports.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference = exports.lambdaFunctionEventInvokeConfigDestinationConfigToTerraform = exports.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference = exports.lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform = exports.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference = exports.lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
    };
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform = lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform;
/**
 * @stability stable
 */
class LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
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
        if (this._destination) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destination = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destination = value.destination;
        }
    }
    /**
     * @stability stable
     */
    get destination() {
        return this.getStringAttribute('destination');
    }
    /**
     * @stability stable
     */
    set destination(value) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationInput() {
        return this._destination;
    }
}
exports.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference = LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference;
_a = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference[_a] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference", version: "3.0.1" };
function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
    };
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform = lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform;
/**
 * @stability stable
 */
class LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
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
        if (this._destination) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destination = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destination = value.destination;
        }
    }
    /**
     * @stability stable
     */
    get destination() {
        return this.getStringAttribute('destination');
    }
    /**
     * @stability stable
     */
    set destination(value) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationInput() {
        return this._destination;
    }
}
exports.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference = LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference;
_b = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference[_b] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference", version: "3.0.1" };
function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_failure: lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct.onFailure),
        on_success: lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct.onSuccess),
    };
}
exports.lambdaFunctionEventInvokeConfigDestinationConfigToTerraform = lambdaFunctionEventInvokeConfigDestinationConfigToTerraform;
/**
 * @stability stable
 */
class LambdaFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // on_failure - computed: false, optional: true, required: false
        this._onFailure = new LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(this, "on_failure", true);
        // on_success - computed: false, optional: true, required: false
        this._onSuccess = new LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(this, "on_success", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f, _g, _h;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_e = this._onFailure) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.onFailure = (_f = this._onFailure) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        if ((_g = this._onSuccess) === null || _g === void 0 ? void 0 : _g.internalValue) {
            hasAnyValues = true;
            internalValueResult.onSuccess = (_h = this._onSuccess) === null || _h === void 0 ? void 0 : _h.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._onFailure.internalValue = undefined;
            this._onSuccess.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onFailure.internalValue = value.onFailure;
            this._onSuccess.internalValue = value.onSuccess;
        }
    }
    /**
     * @stability stable
     */
    get onFailure() {
        return this._onFailure;
    }
    /**
     * @stability stable
     */
    putOnFailure(value) {
        this._onFailure.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOnFailure() {
        this._onFailure.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onFailureInput() {
        return this._onFailure.internalValue;
    }
    /**
     * @stability stable
     */
    get onSuccess() {
        return this._onSuccess;
    }
    /**
     * @stability stable
     */
    putOnSuccess(value) {
        this._onSuccess.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOnSuccess() {
        this._onSuccess.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get onSuccessInput() {
        return this._onSuccess.internalValue;
    }
}
exports.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference = LambdaFunctionEventInvokeConfigDestinationConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfigDestinationConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaFunctionEventInvokeConfigDestinationConfigOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config}.
 *
 * @stability stable
 */
class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lambda_function_event_invoke_config',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // destination_config - computed: false, optional: true, required: false
        this._destinationConfig = new LambdaFunctionEventInvokeConfigDestinationConfigOutputReference(this, "destination_config", true);
        this._functionName = config.functionName;
        this._maximumEventAgeInSeconds = config.maximumEventAgeInSeconds;
        this._maximumRetryAttempts = config.maximumRetryAttempts;
        this._qualifier = config.qualifier;
        this._destinationConfig.internalValue = config.destinationConfig;
    }
    /**
     * @stability stable
     */
    get functionName() {
        return this.getStringAttribute('function_name');
    }
    /**
     * @stability stable
     */
    set functionName(value) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionNameInput() {
        return this._functionName;
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
    get maximumEventAgeInSeconds() {
        return this.getNumberAttribute('maximum_event_age_in_seconds');
    }
    /**
     * @stability stable
     */
    set maximumEventAgeInSeconds(value) {
        this._maximumEventAgeInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetMaximumEventAgeInSeconds() {
        this._maximumEventAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumEventAgeInSecondsInput() {
        return this._maximumEventAgeInSeconds;
    }
    /**
     * @stability stable
     */
    get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    /**
     * @stability stable
     */
    set maximumRetryAttempts(value) {
        this._maximumRetryAttempts = value;
    }
    /**
     * @stability stable
     */
    resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }
    /**
     * @stability stable
     */
    get qualifier() {
        return this.getStringAttribute('qualifier');
    }
    /**
     * @stability stable
     */
    set qualifier(value) {
        this._qualifier = value;
    }
    /**
     * @stability stable
     */
    resetQualifier() {
        this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get qualifierInput() {
        return this._qualifier;
    }
    /**
     * @stability stable
     */
    get destinationConfig() {
        return this._destinationConfig;
    }
    /**
     * @stability stable
     */
    putDestinationConfig(value) {
        this._destinationConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDestinationConfig() {
        this._destinationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationConfigInput() {
        return this._destinationConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            function_name: cdktf.stringToTerraform(this._functionName),
            maximum_event_age_in_seconds: cdktf.numberToTerraform(this._maximumEventAgeInSeconds),
            maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            destination_config: lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(this._destinationConfig.internalValue),
        };
    }
}
exports.LambdaFunctionEventInvokeConfig = LambdaFunctionEventInvokeConfig;
_d = JSII_RTTI_SYMBOL_1;
LambdaFunctionEventInvokeConfig[_d] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaFunctionEventInvokeConfig", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
LambdaFunctionEventInvokeConfig.tfResourceType = "aws_lambda_function_event_invoke_config";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWZ1bmN0aW9uLWV2ZW50LWludm9rZS1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGFtYmRhZnVuY3Rpb24vbGFtYmRhLWZ1bmN0aW9uLWV2ZW50LWludm9rZS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFvQi9CLFNBQWdCLG9FQUFvRSxDQUFDLE1BQTZJO0lBQ2hPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzFELENBQUE7QUFDSCxDQUFDO0FBUkQsb0pBUUM7Ozs7QUFFRCxNQUFhLHdFQUF5RSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9HLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxPQUFPLFlBQVksQ0FB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QUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCw0QkFBNEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBQ3JGLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDM0UsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25ELGtCQUFrQixFQUFFLDJEQUEyRCxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7U0FDdkgsQ0FBQztJQUNKLENBQUM7O0FBaElILDBFQWlJQzs7O0FBL0hDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csOENBQWMsR0FBVyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhpbXVtRXZlbnRBZ2VJblNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhpbXVtUmV0cnlBdHRlbXB0cz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdWFsaWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uQ29uZmlnPzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnO1xufVxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXN0aW5hdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlT3V0cHV0UmVmZXJlbmNlIHwgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVzdGluYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZXN0aW5hdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb24gPSB0aGlzLl9kZXN0aW5hdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHZhbHVlLmRlc3RpbmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzdGluYXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzc1RvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzc091dHB1dFJlZmVyZW5jZSB8IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2VzcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlc3RpbmF0aW9uID0gdGhpcy5fZGVzdGluYXRpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdPblN1Y2Nlc3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVzdGluYXRpb24gPSB2YWx1ZS5kZXN0aW5hdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9uRmFpbHVyZT86IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb25TdWNjZXNzPzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25TdWNjZXNzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb25fZmFpbHVyZTogbGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlVG9UZXJyYWZvcm0oc3RydWN0IS5vbkZhaWx1cmUpLFxuICAgIG9uX3N1Y2Nlc3M6IGxhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzc1RvVGVycmFmb3JtKHN0cnVjdCEub25TdWNjZXNzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fb25GYWlsdXJlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vbkZhaWx1cmUgPSB0aGlzLl9vbkZhaWx1cmU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vblN1Y2Nlc3M/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm9uU3VjY2VzcyA9IHRoaXMuX29uU3VjY2Vzcz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uRmFpbHVyZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb25TdWNjZXNzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX29uRmFpbHVyZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUub25GYWlsdXJlO1xuICAgICAgdGhpcy5fb25TdWNjZXNzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5vblN1Y2Nlc3M7XG4gICAgfVxuICB9XG5cbiAgLy8gb25fZmFpbHVyZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vbkZhaWx1cmUgPSBuZXcgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm9uX2ZhaWx1cmVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgb25GYWlsdXJlKCkge1xuICAgIHJldHVybiB0aGlzLl9vbkZhaWx1cmU7XG4gIH1cbiAgcHVibGljIHB1dE9uRmFpbHVyZSh2YWx1ZTogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlKSB7XG4gICAgdGhpcy5fb25GYWlsdXJlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPbkZhaWx1cmUoKSB7XG4gICAgdGhpcy5fb25GYWlsdXJlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9uRmFpbHVyZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vbkZhaWx1cmUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG9uX3N1Y2Nlc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb25TdWNjZXNzID0gbmV3IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJvbl9zdWNjZXNzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG9uU3VjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fb25TdWNjZXNzO1xuICB9XG4gIHB1YmxpYyBwdXRPblN1Y2Nlc3ModmFsdWU6IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ09uU3VjY2Vzcykge1xuICAgIHRoaXMuX29uU3VjY2Vzcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25TdWNjZXNzKCkge1xuICAgIHRoaXMuX29uU3VjY2Vzcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvblN1Y2Nlc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25TdWNjZXNzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19sYW1iZGFfZnVuY3Rpb25fZXZlbnRfaW52b2tlX2NvbmZpZ1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2xhbWJkYV9mdW5jdGlvbl9ldmVudF9pbnZva2VfY29uZmlnJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IGNvbmZpZy5mdW5jdGlvbk5hbWU7XG4gICAgdGhpcy5fbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzID0gY29uZmlnLm1heGltdW1FdmVudEFnZUluU2Vjb25kcztcbiAgICB0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cyA9IGNvbmZpZy5tYXhpbXVtUmV0cnlBdHRlbXB0cztcbiAgICB0aGlzLl9xdWFsaWZpZXIgPSBjb25maWcucXVhbGlmaWVyO1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuZGVzdGluYXRpb25Db25maWc7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGZ1bmN0aW9uX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZnVuY3Rpb25OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmdW5jdGlvbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBmdW5jdGlvbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25OYW1lO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1heGltdW1fZXZlbnRfYWdlX2luX3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhpbXVtRXZlbnRBZ2VJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX2V2ZW50X2FnZV9pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhpbXVtRXZlbnRBZ2VJblNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltdW1FdmVudEFnZUluU2Vjb25kcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heGltdW1FdmVudEFnZUluU2Vjb25kcygpIHtcbiAgICB0aGlzLl9tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1FdmVudEFnZUluU2Vjb25kc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHM7XG4gIH1cblxuICAvLyBtYXhpbXVtX3JldHJ5X2F0dGVtcHRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heGltdW1SZXRyeUF0dGVtcHRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhpbXVtUmV0cnlBdHRlbXB0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fcmV0cnlfYXR0ZW1wdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heGltdW1SZXRyeUF0dGVtcHRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heGltdW1SZXRyeUF0dGVtcHRzKCkge1xuICAgIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhpbXVtUmV0cnlBdHRlbXB0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cztcbiAgfVxuXG4gIC8vIHF1YWxpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdWFsaWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHF1YWxpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3F1YWxpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcXVhbGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWFsaWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRRdWFsaWZpZXIoKSB7XG4gICAgdGhpcy5fcXVhbGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWFsaWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVhbGlmaWVyO1xuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uQ29uZmlnID0gbmV3IExhbWJkYUZ1bmN0aW9uRXZlbnRJbnZva2VDb25maWdEZXN0aW5hdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkZXN0aW5hdGlvbl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXREZXN0aW5hdGlvbkNvbmZpZyh2YWx1ZTogTGFtYmRhRnVuY3Rpb25FdmVudEludm9rZUNvbmZpZ0Rlc3RpbmF0aW9uQ29uZmlnKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc3RpbmF0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bmN0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Z1bmN0aW9uTmFtZSksXG4gICAgICBtYXhpbXVtX2V2ZW50X2FnZV9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHMpLFxuICAgICAgbWF4aW11bV9yZXRyeV9hdHRlbXB0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMpLFxuICAgICAgcXVhbGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9xdWFsaWZpZXIpLFxuICAgICAgZGVzdGluYXRpb25fY29uZmlnOiBsYW1iZGFGdW5jdGlvbkV2ZW50SW52b2tlQ29uZmlnRGVzdGluYXRpb25Db25maWdUb1RlcnJhZm9ybSh0aGlzLl9kZXN0aW5hdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=