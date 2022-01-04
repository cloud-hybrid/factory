"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaEventSourceMapping = exports.lambdaEventSourceMappingSourceAccessConfigurationToTerraform = exports.LambdaEventSourceMappingSelfManagedEventSourceOutputReference = exports.lambdaEventSourceMappingSelfManagedEventSourceToTerraform = exports.LambdaEventSourceMappingDestinationConfigOutputReference = exports.lambdaEventSourceMappingDestinationConfigToTerraform = exports.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference = exports.lambdaEventSourceMappingDestinationConfigOnFailureToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
    };
}
exports.lambdaEventSourceMappingDestinationConfigOnFailureToTerraform = lambdaEventSourceMappingDestinationConfigOnFailureToTerraform;
/**
 * @stability stable
 */
class LambdaEventSourceMappingDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
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
        if (this._destinationArn) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destinationArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destinationArn = value.destinationArn;
        }
    }
    /**
     * @stability stable
     */
    get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    /**
     * @stability stable
     */
    set destinationArn(value) {
        this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationArnInput() {
        return this._destinationArn;
    }
}
exports.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference = LambdaEventSourceMappingDestinationConfigOnFailureOutputReference;
_a = JSII_RTTI_SYMBOL_1;
LambdaEventSourceMappingDestinationConfigOnFailureOutputReference[_a] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaEventSourceMappingDestinationConfigOnFailureOutputReference", version: "3.0.1" };
function lambdaEventSourceMappingDestinationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        on_failure: lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct.onFailure),
    };
}
exports.lambdaEventSourceMappingDestinationConfigToTerraform = lambdaEventSourceMappingDestinationConfigToTerraform;
/**
 * @stability stable
 */
class LambdaEventSourceMappingDestinationConfigOutputReference extends cdktf.ComplexObject {
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
        this._onFailure = new LambdaEventSourceMappingDestinationConfigOnFailureOutputReference(this, "on_failure", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_e = this._onFailure) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.onFailure = (_f = this._onFailure) === null || _f === void 0 ? void 0 : _f.internalValue;
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
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._onFailure.internalValue = value.onFailure;
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
}
exports.LambdaEventSourceMappingDestinationConfigOutputReference = LambdaEventSourceMappingDestinationConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
LambdaEventSourceMappingDestinationConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaEventSourceMappingDestinationConfigOutputReference", version: "3.0.1" };
function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        endpoints: cdktf.hashMapper(cdktf.anyToTerraform)(struct.endpoints),
    };
}
exports.lambdaEventSourceMappingSelfManagedEventSourceToTerraform = lambdaEventSourceMappingSelfManagedEventSourceToTerraform;
/**
 * @stability stable
 */
class LambdaEventSourceMappingSelfManagedEventSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._endpoints) {
            hasAnyValues = true;
            internalValueResult.endpoints = this._endpoints;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._endpoints = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._endpoints = value.endpoints;
        }
    }
    /**
     * @stability stable
     */
    get endpoints() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('endpoints');
    }
    /**
     * @stability stable
     */
    set endpoints(value) {
        this._endpoints = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endpointsInput() {
        return this._endpoints;
    }
}
exports.LambdaEventSourceMappingSelfManagedEventSourceOutputReference = LambdaEventSourceMappingSelfManagedEventSourceOutputReference;
_c = JSII_RTTI_SYMBOL_1;
LambdaEventSourceMappingSelfManagedEventSourceOutputReference[_c] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaEventSourceMappingSelfManagedEventSourceOutputReference", version: "3.0.1" };
function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
exports.lambdaEventSourceMappingSourceAccessConfigurationToTerraform = lambdaEventSourceMappingSourceAccessConfigurationToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping}.
 *
 * @stability stable
 */
class LambdaEventSourceMapping extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lambda_event_source_mapping',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // destination_config - computed: false, optional: true, required: false
        this._destinationConfig = new LambdaEventSourceMappingDestinationConfigOutputReference(this, "destination_config", true);
        // self_managed_event_source - computed: false, optional: true, required: false
        this._selfManagedEventSource = new LambdaEventSourceMappingSelfManagedEventSourceOutputReference(this, "self_managed_event_source", true);
        this._batchSize = config.batchSize;
        this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
        this._enabled = config.enabled;
        this._eventSourceArn = config.eventSourceArn;
        this._functionName = config.functionName;
        this._functionResponseTypes = config.functionResponseTypes;
        this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
        this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
        this._maximumRetryAttempts = config.maximumRetryAttempts;
        this._parallelizationFactor = config.parallelizationFactor;
        this._queues = config.queues;
        this._startingPosition = config.startingPosition;
        this._startingPositionTimestamp = config.startingPositionTimestamp;
        this._topics = config.topics;
        this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
        this._destinationConfig.internalValue = config.destinationConfig;
        this._selfManagedEventSource.internalValue = config.selfManagedEventSource;
        this._sourceAccessConfiguration = config.sourceAccessConfiguration;
    }
    /**
     * @stability stable
     */
    get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    /**
     * @stability stable
     */
    set batchSize(value) {
        this._batchSize = value;
    }
    /**
     * @stability stable
     */
    resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get batchSizeInput() {
        return this._batchSize;
    }
    /**
     * @stability stable
     */
    get bisectBatchOnFunctionError() {
        return this.getBooleanAttribute('bisect_batch_on_function_error');
    }
    /**
     * @stability stable
     */
    set bisectBatchOnFunctionError(value) {
        this._bisectBatchOnFunctionError = value;
    }
    /**
     * @stability stable
     */
    resetBisectBatchOnFunctionError() {
        this._bisectBatchOnFunctionError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bisectBatchOnFunctionErrorInput() {
        return this._bisectBatchOnFunctionError;
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get eventSourceArn() {
        return this.getStringAttribute('event_source_arn');
    }
    /**
     * @stability stable
     */
    set eventSourceArn(value) {
        this._eventSourceArn = value;
    }
    /**
     * @stability stable
     */
    resetEventSourceArn() {
        this._eventSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventSourceArnInput() {
        return this._eventSourceArn;
    }
    // function_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get functionArn() {
        return this.getStringAttribute('function_arn');
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
    /**
     * @stability stable
     */
    get functionResponseTypes() {
        return this.getListAttribute('function_response_types');
    }
    /**
     * @stability stable
     */
    set functionResponseTypes(value) {
        this._functionResponseTypes = value;
    }
    /**
     * @stability stable
     */
    resetFunctionResponseTypes() {
        this._functionResponseTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionResponseTypesInput() {
        return this._functionResponseTypes;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_modified - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    // last_processing_result - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastProcessingResult() {
        return this.getStringAttribute('last_processing_result');
    }
    /**
     * @stability stable
     */
    get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    /**
     * @stability stable
     */
    set maximumBatchingWindowInSeconds(value) {
        this._maximumBatchingWindowInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }
    /**
     * @stability stable
     */
    get maximumRecordAgeInSeconds() {
        return this.getNumberAttribute('maximum_record_age_in_seconds');
    }
    /**
     * @stability stable
     */
    set maximumRecordAgeInSeconds(value) {
        this._maximumRecordAgeInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetMaximumRecordAgeInSeconds() {
        this._maximumRecordAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumRecordAgeInSecondsInput() {
        return this._maximumRecordAgeInSeconds;
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
    get parallelizationFactor() {
        return this.getNumberAttribute('parallelization_factor');
    }
    /**
     * @stability stable
     */
    set parallelizationFactor(value) {
        this._parallelizationFactor = value;
    }
    /**
     * @stability stable
     */
    resetParallelizationFactor() {
        this._parallelizationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parallelizationFactorInput() {
        return this._parallelizationFactor;
    }
    /**
     * @stability stable
     */
    get queues() {
        return this.getListAttribute('queues');
    }
    /**
     * @stability stable
     */
    set queues(value) {
        this._queues = value;
    }
    /**
     * @stability stable
     */
    resetQueues() {
        this._queues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queuesInput() {
        return this._queues;
    }
    /**
     * @stability stable
     */
    get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    /**
     * @stability stable
     */
    set startingPosition(value) {
        this._startingPosition = value;
    }
    /**
     * @stability stable
     */
    resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startingPositionInput() {
        return this._startingPosition;
    }
    /**
     * @stability stable
     */
    get startingPositionTimestamp() {
        return this.getStringAttribute('starting_position_timestamp');
    }
    /**
     * @stability stable
     */
    set startingPositionTimestamp(value) {
        this._startingPositionTimestamp = value;
    }
    /**
     * @stability stable
     */
    resetStartingPositionTimestamp() {
        this._startingPositionTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startingPositionTimestampInput() {
        return this._startingPositionTimestamp;
    }
    // state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get state() {
        return this.getStringAttribute('state');
    }
    // state_transition_reason - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get stateTransitionReason() {
        return this.getStringAttribute('state_transition_reason');
    }
    /**
     * @stability stable
     */
    get topics() {
        return this.getListAttribute('topics');
    }
    /**
     * @stability stable
     */
    set topics(value) {
        this._topics = value;
    }
    /**
     * @stability stable
     */
    resetTopics() {
        this._topics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get topicsInput() {
        return this._topics;
    }
    /**
     * @stability stable
     */
    get tumblingWindowInSeconds() {
        return this.getNumberAttribute('tumbling_window_in_seconds');
    }
    /**
     * @stability stable
     */
    set tumblingWindowInSeconds(value) {
        this._tumblingWindowInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTumblingWindowInSeconds() {
        this._tumblingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tumblingWindowInSecondsInput() {
        return this._tumblingWindowInSeconds;
    }
    // uuid - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get uuid() {
        return this.getStringAttribute('uuid');
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
    /**
     * @stability stable
     */
    get selfManagedEventSource() {
        return this._selfManagedEventSource;
    }
    /**
     * @stability stable
     */
    putSelfManagedEventSource(value) {
        this._selfManagedEventSource.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSelfManagedEventSource() {
        this._selfManagedEventSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get selfManagedEventSourceInput() {
        return this._selfManagedEventSource.internalValue;
    }
    /**
     * @stability stable
     */
    get sourceAccessConfiguration() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('source_access_configuration');
    }
    /**
     * @stability stable
     */
    set sourceAccessConfiguration(value) {
        this._sourceAccessConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetSourceAccessConfiguration() {
        this._sourceAccessConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceAccessConfigurationInput() {
        return this._sourceAccessConfiguration;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            batch_size: cdktf.numberToTerraform(this._batchSize),
            bisect_batch_on_function_error: cdktf.booleanToTerraform(this._bisectBatchOnFunctionError),
            enabled: cdktf.booleanToTerraform(this._enabled),
            event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
            function_name: cdktf.stringToTerraform(this._functionName),
            function_response_types: cdktf.listMapper(cdktf.stringToTerraform)(this._functionResponseTypes),
            maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
            maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
            maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
            parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
            queues: cdktf.listMapper(cdktf.stringToTerraform)(this._queues),
            starting_position: cdktf.stringToTerraform(this._startingPosition),
            starting_position_timestamp: cdktf.stringToTerraform(this._startingPositionTimestamp),
            topics: cdktf.listMapper(cdktf.stringToTerraform)(this._topics),
            tumbling_window_in_seconds: cdktf.numberToTerraform(this._tumblingWindowInSeconds),
            destination_config: lambdaEventSourceMappingDestinationConfigToTerraform(this._destinationConfig.internalValue),
            self_managed_event_source: lambdaEventSourceMappingSelfManagedEventSourceToTerraform(this._selfManagedEventSource.internalValue),
            source_access_configuration: cdktf.listMapper(lambdaEventSourceMappingSourceAccessConfigurationToTerraform)(this._sourceAccessConfiguration),
        };
    }
}
exports.LambdaEventSourceMapping = LambdaEventSourceMapping;
_d = JSII_RTTI_SYMBOL_1;
LambdaEventSourceMapping[_d] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaEventSourceMapping", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
LambdaEventSourceMapping.tfResourceType = "aws_lambda_event_source_mapping";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWV2ZW50LXNvdXJjZS1tYXBwaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xhbWJkYWZ1bmN0aW9uL2xhbWJkYS1ldmVudC1zb3VyY2UtbWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQThDL0IsU0FBZ0IsNkRBQTZELENBQUMsTUFBK0g7SUFDM00sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDakUsQ0FBQTtBQUNILENBQUM7QUFSRCxzSUFRQzs7OztBQUVELE1BQWEsaUVBQWtFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJeEcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFB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SUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDNUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMvRCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ2xFLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7WUFDckYsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMvRCwwQkFBMEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1lBQ2xGLGtCQUFrQixFQUFFLG9EQUFvRCxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7WUFDL0cseUJBQXlCLEVBQUUseURBQXlELENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQztZQUNoSSwyQkFBMkIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDREQUE0RCxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1NBQzdJLENBQUM7SUFDSixDQUFDOztBQXpZSCw0REEwWUM7OztBQXhZQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHVDQUFjLEdBQVcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmF0Y2hTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9yPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50U291cmNlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZ1bmN0aW9uUmVzcG9uc2VUeXBlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4aW11bUJhdGNoaW5nV2luZG93SW5TZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4aW11bVJldHJ5QXR0ZW1wdHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbGxlbGl6YXRpb25GYWN0b3I/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVldWVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXJ0aW5nUG9zaXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3BpY3M/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHVtYmxpbmdXaW5kb3dJblNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uQ29uZmlnPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlbGZNYW5hZ2VkRXZlbnRTb3VyY2U/OiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzdGluYXRpb25Bcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmVPdXRwdXRSZWZlcmVuY2UgfCBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlc3RpbmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbkFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZXN0aW5hdGlvbkFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb25Bcm4gPSB0aGlzLl9kZXN0aW5hdGlvbkFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnT25GYWlsdXJlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVzdGluYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uQXJuID0gdmFsdWUuZGVzdGluYXRpb25Bcm47XG4gICAgfVxuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb25GYWlsdXJlPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ0Rlc3RpbmF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvbl9mYWlsdXJlOiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZVRvVGVycmFmb3JtKHN0cnVjdCEub25GYWlsdXJlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX29uRmFpbHVyZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub25GYWlsdXJlID0gdGhpcy5fb25GYWlsdXJlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkZhaWx1cmUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fb25GYWlsdXJlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5vbkZhaWx1cmU7XG4gICAgfVxuICB9XG5cbiAgLy8gb25fZmFpbHVyZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vbkZhaWx1cmUgPSBuZXcgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWdPbkZhaWx1cmVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwib25fZmFpbHVyZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBvbkZhaWx1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uRmFpbHVyZTtcbiAgfVxuICBwdWJsaWMgcHV0T25GYWlsdXJlKHZhbHVlOiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ09uRmFpbHVyZSkge1xuICAgIHRoaXMuX29uRmFpbHVyZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T25GYWlsdXJlKCkge1xuICAgIHRoaXMuX29uRmFpbHVyZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvbkZhaWx1cmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25GYWlsdXJlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZU91dHB1dFJlZmVyZW5jZSB8IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ1NlbGZNYW5hZ2VkRXZlbnRTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmRwb2ludHM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuZW5kcG9pbnRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmRwb2ludHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuZHBvaW50cyA9IHRoaXMuX2VuZHBvaW50cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhbWJkYUV2ZW50U291cmNlTWFwcGluZ1NlbGZNYW5hZ2VkRXZlbnRTb3VyY2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmRwb2ludHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuZHBvaW50cyA9IHZhbHVlLmVuZHBvaW50cztcbiAgICB9XG4gIH1cblxuICAvLyBlbmRwb2ludHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5kcG9pbnRzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmRwb2ludHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuZHBvaW50cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZHBvaW50cyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5kcG9pbnRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZHBvaW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgdXJpOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVyaSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIExhbWJkYUV2ZW50U291cmNlTWFwcGluZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmdcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19sYW1iZGFfZXZlbnRfc291cmNlX21hcHBpbmcnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYmF0Y2hTaXplID0gY29uZmlnLmJhdGNoU2l6ZTtcbiAgICB0aGlzLl9iaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvciA9IGNvbmZpZy5iaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvcjtcbiAgICB0aGlzLl9lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG4gICAgdGhpcy5fZXZlbnRTb3VyY2VBcm4gPSBjb25maWcuZXZlbnRTb3VyY2VBcm47XG4gICAgdGhpcy5fZnVuY3Rpb25OYW1lID0gY29uZmlnLmZ1bmN0aW9uTmFtZTtcbiAgICB0aGlzLl9mdW5jdGlvblJlc3BvbnNlVHlwZXMgPSBjb25maWcuZnVuY3Rpb25SZXNwb25zZVR5cGVzO1xuICAgIHRoaXMuX21heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcyA9IGNvbmZpZy5tYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHM7XG4gICAgdGhpcy5fbWF4aW11bVJlY29yZEFnZUluU2Vjb25kcyA9IGNvbmZpZy5tYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzO1xuICAgIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzID0gY29uZmlnLm1heGltdW1SZXRyeUF0dGVtcHRzO1xuICAgIHRoaXMuX3BhcmFsbGVsaXphdGlvbkZhY3RvciA9IGNvbmZpZy5wYXJhbGxlbGl6YXRpb25GYWN0b3I7XG4gICAgdGhpcy5fcXVldWVzID0gY29uZmlnLnF1ZXVlcztcbiAgICB0aGlzLl9zdGFydGluZ1Bvc2l0aW9uID0gY29uZmlnLnN0YXJ0aW5nUG9zaXRpb247XG4gICAgdGhpcy5fc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcCA9IGNvbmZpZy5zdGFydGluZ1Bvc2l0aW9uVGltZXN0YW1wO1xuICAgIHRoaXMuX3RvcGljcyA9IGNvbmZpZy50b3BpY3M7XG4gICAgdGhpcy5fdHVtYmxpbmdXaW5kb3dJblNlY29uZHMgPSBjb25maWcudHVtYmxpbmdXaW5kb3dJblNlY29uZHM7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5kZXN0aW5hdGlvbkNvbmZpZztcbiAgICB0aGlzLl9zZWxmTWFuYWdlZEV2ZW50U291cmNlLmludGVybmFsVmFsdWUgPSBjb25maWcuc2VsZk1hbmFnZWRFdmVudFNvdXJjZTtcbiAgICB0aGlzLl9zb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uID0gY29uZmlnLnNvdXJjZUFjY2Vzc0NvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGJhdGNoX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmF0Y2hTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBiYXRjaFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdiYXRjaF9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBiYXRjaFNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2JhdGNoU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJhdGNoU2l6ZSgpIHtcbiAgICB0aGlzLl9iYXRjaFNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJhdGNoU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFNpemU7XG4gIH1cblxuICAvLyBiaXNlY3RfYmF0Y2hfb25fZnVuY3Rpb25fZXJyb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmlzZWN0QmF0Y2hPbkZ1bmN0aW9uRXJyb3I/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGJpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Jpc2VjdF9iYXRjaF9vbl9mdW5jdGlvbl9lcnJvcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9yKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9iaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9yKCkge1xuICAgIHRoaXMuX2Jpc2VjdEJhdGNoT25GdW5jdGlvbkVycm9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvcjtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8gZXZlbnRfc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ldmVudFNvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXZlbnRTb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmVudF9zb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBldmVudFNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXZlbnRTb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFdmVudFNvdXJjZUFybigpIHtcbiAgICB0aGlzLl9ldmVudFNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXZlbnRTb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRTb3VyY2VBcm47XG4gIH1cblxuICAvLyBmdW5jdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmdW5jdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Z1bmN0aW9uX2FybicpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb25fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9mdW5jdGlvbk5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Z1bmN0aW9uX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZ1bmN0aW9uTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25OYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZ1bmN0aW9uTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbk5hbWU7XG4gIH1cblxuICAvLyBmdW5jdGlvbl9yZXNwb25zZV90eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mdW5jdGlvblJlc3BvbnNlVHlwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25SZXNwb25zZVR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2Z1bmN0aW9uX3Jlc3BvbnNlX3R5cGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBmdW5jdGlvblJlc3BvbnNlVHlwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZnVuY3Rpb25SZXNwb25zZVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RnVuY3Rpb25SZXNwb25zZVR5cGVzKCkge1xuICAgIHRoaXMuX2Z1bmN0aW9uUmVzcG9uc2VUeXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVuY3Rpb25SZXNwb25zZVR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uUmVzcG9uc2VUeXBlcztcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsYXN0X21vZGlmaWVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdE1vZGlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9tb2RpZmllZCcpO1xuICB9XG5cbiAgLy8gbGFzdF9wcm9jZXNzaW5nX3Jlc3VsdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RQcm9jZXNzaW5nUmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9wcm9jZXNzaW5nX3Jlc3VsdCcpO1xuICB9XG5cbiAgLy8gbWF4aW11bV9iYXRjaGluZ193aW5kb3dfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fYmF0Y2hpbmdfd2luZG93X2luX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4aW11bUJhdGNoaW5nV2luZG93SW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bUJhdGNoaW5nV2luZG93SW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX21heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4aW11bUJhdGNoaW5nV2luZG93SW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1CYXRjaGluZ1dpbmRvd0luU2Vjb25kcztcbiAgfVxuXG4gIC8vIG1heGltdW1fcmVjb3JkX2FnZV9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4aW11bVJlY29yZEFnZUluU2Vjb25kcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4aW11bVJlY29yZEFnZUluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fcmVjb3JkX2FnZV9pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bVJlY29yZEFnZUluU2Vjb25kcygpIHtcbiAgICB0aGlzLl9tYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhpbXVtUmVjb3JkQWdlSW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1SZWNvcmRBZ2VJblNlY29uZHM7XG4gIH1cblxuICAvLyBtYXhpbXVtX3JldHJ5X2F0dGVtcHRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4aW11bVJldHJ5QXR0ZW1wdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1SZXRyeUF0dGVtcHRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4aW11bV9yZXRyeV9hdHRlbXB0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bVJldHJ5QXR0ZW1wdHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bVJldHJ5QXR0ZW1wdHMoKSB7XG4gICAgdGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1SZXRyeUF0dGVtcHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzO1xuICB9XG5cbiAgLy8gcGFyYWxsZWxpemF0aW9uX2ZhY3RvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFsbGVsaXphdGlvbkZhY3Rvcj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcGFyYWxsZWxpemF0aW9uRmFjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGFyYWxsZWxpemF0aW9uX2ZhY3RvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYWxsZWxpemF0aW9uRmFjdG9yKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYXJhbGxlbGl6YXRpb25GYWN0b3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJhbGxlbGl6YXRpb25GYWN0b3IoKSB7XG4gICAgdGhpcy5fcGFyYWxsZWxpemF0aW9uRmFjdG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbGxlbGl6YXRpb25GYWN0b3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYWxsZWxpemF0aW9uRmFjdG9yO1xuICB9XG5cbiAgLy8gcXVldWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1ZXVlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBxdWV1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncXVldWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBxdWV1ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcXVldWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVldWVzKCkge1xuICAgIHRoaXMuX3F1ZXVlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVldWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlcztcbiAgfVxuXG4gIC8vIHN0YXJ0aW5nX3Bvc2l0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0aW5nUG9zaXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0aW5nUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydGluZ19wb3NpdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhcnRpbmdQb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhcnRpbmdQb3NpdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXJ0aW5nUG9zaXRpb24oKSB7XG4gICAgdGhpcy5fc3RhcnRpbmdQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhcnRpbmdQb3NpdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydGluZ1Bvc2l0aW9uO1xuICB9XG5cbiAgLy8gc3RhcnRpbmdfcG9zaXRpb25fdGltZXN0YW1wIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXA/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFydGluZ19wb3NpdGlvbl90aW1lc3RhbXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydGluZ1Bvc2l0aW9uVGltZXN0YW1wKCkge1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXJ0aW5nUG9zaXRpb25UaW1lc3RhbXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcDtcbiAgfVxuXG4gIC8vIHN0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0ZScpO1xuICB9XG5cbiAgLy8gc3RhdGVfdHJhbnNpdGlvbl9yZWFzb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0ZVRyYW5zaXRpb25SZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0ZV90cmFuc2l0aW9uX3JlYXNvbicpO1xuICB9XG5cbiAgLy8gdG9waWNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RvcGljcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0b3BpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndG9waWNzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0b3BpY3ModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdG9waWNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VG9waWNzKCkge1xuICAgIHRoaXMuX3RvcGljcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG9waWNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcGljcztcbiAgfVxuXG4gIC8vIHR1bWJsaW5nX3dpbmRvd19pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R1bWJsaW5nV2luZG93SW5TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0dW1ibGluZ1dpbmRvd0luU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3R1bWJsaW5nX3dpbmRvd19pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0dW1ibGluZ1dpbmRvd0luU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdHVtYmxpbmdXaW5kb3dJblNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUdW1ibGluZ1dpbmRvd0luU2Vjb25kcygpIHtcbiAgICB0aGlzLl90dW1ibGluZ1dpbmRvd0luU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHVtYmxpbmdXaW5kb3dJblNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHVtYmxpbmdXaW5kb3dJblNlY29uZHM7XG4gIH1cblxuICAvLyB1dWlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3V1aWQnKTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXN0aW5hdGlvbkNvbmZpZyA9IG5ldyBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkZXN0aW5hdGlvbl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXREZXN0aW5hdGlvbkNvbmZpZyh2YWx1ZTogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nRGVzdGluYXRpb25Db25maWcpIHtcbiAgICB0aGlzLl9kZXN0aW5hdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzdGluYXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNlbGZfbWFuYWdlZF9ldmVudF9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VsZk1hbmFnZWRFdmVudFNvdXJjZSA9IG5ldyBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTZWxmTWFuYWdlZEV2ZW50U291cmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNlbGZfbWFuYWdlZF9ldmVudF9zb3VyY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2VsZk1hbmFnZWRFdmVudFNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZk1hbmFnZWRFdmVudFNvdXJjZTtcbiAgfVxuICBwdWJsaWMgcHV0U2VsZk1hbmFnZWRFdmVudFNvdXJjZSh2YWx1ZTogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZSkge1xuICAgIHRoaXMuX3NlbGZNYW5hZ2VkRXZlbnRTb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlbGZNYW5hZ2VkRXZlbnRTb3VyY2UoKSB7XG4gICAgdGhpcy5fc2VsZk1hbmFnZWRFdmVudFNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWxmTWFuYWdlZEV2ZW50U291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGZNYW5hZ2VkRXZlbnRTb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9hY2Nlc3NfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uPzogTGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvbltdOyBcbiAgcHVibGljIGdldCBzb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfYWNjZXNzX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uKHZhbHVlOiBMYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdTb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uW10pIHtcbiAgICB0aGlzLl9zb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlQWNjZXNzQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9zb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUFjY2Vzc0NvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhdGNoX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2JhdGNoU2l6ZSksXG4gICAgICBiaXNlY3RfYmF0Y2hfb25fZnVuY3Rpb25fZXJyb3I6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9iaXNlY3RCYXRjaE9uRnVuY3Rpb25FcnJvciksXG4gICAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5hYmxlZCksXG4gICAgICBldmVudF9zb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ldmVudFNvdXJjZUFybiksXG4gICAgICBmdW5jdGlvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9mdW5jdGlvbk5hbWUpLFxuICAgICAgZnVuY3Rpb25fcmVzcG9uc2VfdHlwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2Z1bmN0aW9uUmVzcG9uc2VUeXBlcyksXG4gICAgICBtYXhpbXVtX2JhdGNoaW5nX3dpbmRvd19pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhpbXVtQmF0Y2hpbmdXaW5kb3dJblNlY29uZHMpLFxuICAgICAgbWF4aW11bV9yZWNvcmRfYWdlX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heGltdW1SZWNvcmRBZ2VJblNlY29uZHMpLFxuICAgICAgbWF4aW11bV9yZXRyeV9hdHRlbXB0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMpLFxuICAgICAgcGFyYWxsZWxpemF0aW9uX2ZhY3RvcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcGFyYWxsZWxpemF0aW9uRmFjdG9yKSxcbiAgICAgIHF1ZXVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fcXVldWVzKSxcbiAgICAgIHN0YXJ0aW5nX3Bvc2l0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGFydGluZ1Bvc2l0aW9uKSxcbiAgICAgIHN0YXJ0aW5nX3Bvc2l0aW9uX3RpbWVzdGFtcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhcnRpbmdQb3NpdGlvblRpbWVzdGFtcCksXG4gICAgICB0b3BpY3M6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3RvcGljcyksXG4gICAgICB0dW1ibGluZ193aW5kb3dfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdHVtYmxpbmdXaW5kb3dJblNlY29uZHMpLFxuICAgICAgZGVzdGluYXRpb25fY29uZmlnOiBsYW1iZGFFdmVudFNvdXJjZU1hcHBpbmdEZXN0aW5hdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc3RpbmF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgc2VsZl9tYW5hZ2VkX2V2ZW50X3NvdXJjZTogbGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU2VsZk1hbmFnZWRFdmVudFNvdXJjZVRvVGVycmFmb3JtKHRoaXMuX3NlbGZNYW5hZ2VkRXZlbnRTb3VyY2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzb3VyY2VfYWNjZXNzX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIobGFtYmRhRXZlbnRTb3VyY2VNYXBwaW5nU291cmNlQWNjZXNzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKSh0aGlzLl9zb3VyY2VBY2Nlc3NDb25maWd1cmF0aW9uKSxcbiAgICB9O1xuICB9XG59XG4iXX0=