"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagemakerEndpointConfiguration = exports.sagemakerEndpointConfigurationProductionVariantsToTerraform = exports.SagemakerEndpointConfigurationDataCaptureConfigOutputReference = exports.sagemakerEndpointConfigurationDataCaptureConfigToTerraform = exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform = exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference = exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform = exports.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference = exports.sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_concurrent_invocations_per_instance: cdktf.numberToTerraform(struct.maxConcurrentInvocationsPerInstance),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._maxConcurrentInvocationsPerInstance) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentInvocationsPerInstance = this._maxConcurrentInvocationsPerInstance;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxConcurrentInvocationsPerInstance = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxConcurrentInvocationsPerInstance = value.maxConcurrentInvocationsPerInstance;
        }
    }
    /**
     * @stability stable
     */
    get maxConcurrentInvocationsPerInstance() {
        return this.getNumberAttribute('max_concurrent_invocations_per_instance');
    }
    /**
     * @stability stable
     */
    set maxConcurrentInvocationsPerInstance(value) {
        this._maxConcurrentInvocationsPerInstance = value;
    }
    /**
     * @stability stable
     */
    resetMaxConcurrentInvocationsPerInstance() {
        this._maxConcurrentInvocationsPerInstance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxConcurrentInvocationsPerInstanceInput() {
        return this._maxConcurrentInvocationsPerInstance;
    }
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference[_a] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference", version: "3.0.1" };
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        error_topic: cdktf.stringToTerraform(struct.errorTopic),
        success_topic: cdktf.stringToTerraform(struct.successTopic),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._errorTopic) {
            hasAnyValues = true;
            internalValueResult.errorTopic = this._errorTopic;
        }
        if (this._successTopic) {
            hasAnyValues = true;
            internalValueResult.successTopic = this._successTopic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._errorTopic = undefined;
            this._successTopic = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._errorTopic = value.errorTopic;
            this._successTopic = value.successTopic;
        }
    }
    /**
     * @stability stable
     */
    get errorTopic() {
        return this.getStringAttribute('error_topic');
    }
    /**
     * @stability stable
     */
    set errorTopic(value) {
        this._errorTopic = value;
    }
    /**
     * @stability stable
     */
    resetErrorTopic() {
        this._errorTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get errorTopicInput() {
        return this._errorTopic;
    }
    /**
     * @stability stable
     */
    get successTopic() {
        return this.getStringAttribute('success_topic');
    }
    /**
     * @stability stable
     */
    set successTopic(value) {
        this._successTopic = value;
    }
    /**
     * @stability stable
     */
    resetSuccessTopic() {
        this._successTopic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get successTopicInput() {
        return this._successTopic;
    }
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference", version: "3.0.1" };
function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
        notification_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct.notificationConfig),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // notification_config - computed: false, optional: true, required: false
        this._notificationConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(this, "notification_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _h, _j;
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
        if ((_h = this._notificationConfig) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.notificationConfig = (_j = this._notificationConfig) === null || _j === void 0 ? void 0 : _j.internalValue;
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
            this._notificationConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyId = value.kmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
            this._notificationConfig.internalValue = value.notificationConfig;
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
    /**
     * @stability stable
     */
    get notificationConfig() {
        return this._notificationConfig;
    }
    /**
     * @stability stable
     */
    putNotificationConfig(value) {
        this._notificationConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetNotificationConfig() {
        this._notificationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationConfigInput() {
        return this._notificationConfig.internalValue;
    }
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference", version: "3.0.1" };
function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_config: sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct.clientConfig),
        output_config: sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct.outputConfig),
    };
}
exports.sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform = sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // client_config - computed: false, optional: true, required: false
        this._clientConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference(this, "client_config", true);
        // output_config - computed: false, optional: false, required: true
        this._outputConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference(this, "output_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _h, _j, _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_h = this._clientConfig) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.clientConfig = (_j = this._clientConfig) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        if ((_k = this._outputConfig) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.outputConfig = (_l = this._outputConfig) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientConfig.internalValue = undefined;
            this._outputConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientConfig.internalValue = value.clientConfig;
            this._outputConfig.internalValue = value.outputConfig;
        }
    }
    /**
     * @stability stable
     */
    get clientConfig() {
        return this._clientConfig;
    }
    /**
     * @stability stable
     */
    putClientConfig(value) {
        this._clientConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetClientConfig() {
        this._clientConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientConfigInput() {
        return this._clientConfig.internalValue;
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
}
exports.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference = SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference[_d] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference", version: "3.0.1" };
function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.csvContentTypes),
        json_content_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.jsonContentTypes),
    };
}
exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform = sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform;
/**
 * @stability stable
 */
class SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._csvContentTypes) {
            hasAnyValues = true;
            internalValueResult.csvContentTypes = this._csvContentTypes;
        }
        if (this._jsonContentTypes) {
            hasAnyValues = true;
            internalValueResult.jsonContentTypes = this._jsonContentTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csvContentTypes = undefined;
            this._jsonContentTypes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csvContentTypes = value.csvContentTypes;
            this._jsonContentTypes = value.jsonContentTypes;
        }
    }
    /**
     * @stability stable
     */
    get csvContentTypes() {
        return this.getListAttribute('csv_content_types');
    }
    /**
     * @stability stable
     */
    set csvContentTypes(value) {
        this._csvContentTypes = value;
    }
    /**
     * @stability stable
     */
    resetCsvContentTypes() {
        this._csvContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvContentTypesInput() {
        return this._csvContentTypes;
    }
    /**
     * @stability stable
     */
    get jsonContentTypes() {
        return this.getListAttribute('json_content_types');
    }
    /**
     * @stability stable
     */
    set jsonContentTypes(value) {
        this._jsonContentTypes = value;
    }
    /**
     * @stability stable
     */
    resetJsonContentTypes() {
        this._jsonContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jsonContentTypesInput() {
        return this._jsonContentTypes;
    }
}
exports.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference = SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference[_e] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference", version: "3.0.1" };
function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capture_mode: cdktf.stringToTerraform(struct.captureMode),
    };
}
exports.sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform = sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform;
function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination_s3_uri: cdktf.stringToTerraform(struct.destinationS3Uri),
        enable_capture: cdktf.booleanToTerraform(struct.enableCapture),
        initial_sampling_percentage: cdktf.numberToTerraform(struct.initialSamplingPercentage),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        capture_content_type_header: sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct.captureContentTypeHeader),
        capture_options: cdktf.listMapper(sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform)(struct.captureOptions),
    };
}
exports.sagemakerEndpointConfigurationDataCaptureConfigToTerraform = sagemakerEndpointConfigurationDataCaptureConfigToTerraform;
/**
 * @stability stable
 */
class SagemakerEndpointConfigurationDataCaptureConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // capture_content_type_header - computed: false, optional: true, required: false
        this._captureContentTypeHeader = new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(this, "capture_content_type_header", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _h, _j;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._destinationS3Uri) {
            hasAnyValues = true;
            internalValueResult.destinationS3Uri = this._destinationS3Uri;
        }
        if (this._enableCapture) {
            hasAnyValues = true;
            internalValueResult.enableCapture = this._enableCapture;
        }
        if (this._initialSamplingPercentage) {
            hasAnyValues = true;
            internalValueResult.initialSamplingPercentage = this._initialSamplingPercentage;
        }
        if (this._kmsKeyId) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if ((_h = this._captureContentTypeHeader) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.captureContentTypeHeader = (_j = this._captureContentTypeHeader) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        if (this._captureOptions) {
            hasAnyValues = true;
            internalValueResult.captureOptions = this._captureOptions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destinationS3Uri = undefined;
            this._enableCapture = undefined;
            this._initialSamplingPercentage = undefined;
            this._kmsKeyId = undefined;
            this._captureContentTypeHeader.internalValue = undefined;
            this._captureOptions = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destinationS3Uri = value.destinationS3Uri;
            this._enableCapture = value.enableCapture;
            this._initialSamplingPercentage = value.initialSamplingPercentage;
            this._kmsKeyId = value.kmsKeyId;
            this._captureContentTypeHeader.internalValue = value.captureContentTypeHeader;
            this._captureOptions = value.captureOptions;
        }
    }
    /**
     * @stability stable
     */
    get destinationS3Uri() {
        return this.getStringAttribute('destination_s3_uri');
    }
    /**
     * @stability stable
     */
    set destinationS3Uri(value) {
        this._destinationS3Uri = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationS3UriInput() {
        return this._destinationS3Uri;
    }
    /**
     * @stability stable
     */
    get enableCapture() {
        return this.getBooleanAttribute('enable_capture');
    }
    /**
     * @stability stable
     */
    set enableCapture(value) {
        this._enableCapture = value;
    }
    /**
     * @stability stable
     */
    resetEnableCapture() {
        this._enableCapture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableCaptureInput() {
        return this._enableCapture;
    }
    /**
     * @stability stable
     */
    get initialSamplingPercentage() {
        return this.getNumberAttribute('initial_sampling_percentage');
    }
    /**
     * @stability stable
     */
    set initialSamplingPercentage(value) {
        this._initialSamplingPercentage = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get initialSamplingPercentageInput() {
        return this._initialSamplingPercentage;
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
    get captureContentTypeHeader() {
        return this._captureContentTypeHeader;
    }
    /**
     * @stability stable
     */
    putCaptureContentTypeHeader(value) {
        this._captureContentTypeHeader.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCaptureContentTypeHeader() {
        this._captureContentTypeHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get captureContentTypeHeaderInput() {
        return this._captureContentTypeHeader.internalValue;
    }
    /**
     * @stability stable
     */
    get captureOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('capture_options');
    }
    /**
     * @stability stable
     */
    set captureOptions(value) {
        this._captureOptions = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get captureOptionsInput() {
        return this._captureOptions;
    }
}
exports.SagemakerEndpointConfigurationDataCaptureConfigOutputReference = SagemakerEndpointConfigurationDataCaptureConfigOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfigurationDataCaptureConfigOutputReference[_f] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerEndpointConfigurationDataCaptureConfigOutputReference", version: "3.0.1" };
function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        accelerator_type: cdktf.stringToTerraform(struct.acceleratorType),
        initial_instance_count: cdktf.numberToTerraform(struct.initialInstanceCount),
        initial_variant_weight: cdktf.numberToTerraform(struct.initialVariantWeight),
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        model_name: cdktf.stringToTerraform(struct.modelName),
        variant_name: cdktf.stringToTerraform(struct.variantName),
    };
}
exports.sagemakerEndpointConfigurationProductionVariantsToTerraform = sagemakerEndpointConfigurationProductionVariantsToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration}.
 *
 * @stability stable
 */
class SagemakerEndpointConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration.html aws_sagemaker_endpoint_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_endpoint_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // async_inference_config - computed: false, optional: true, required: false
        this._asyncInferenceConfig = new SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference(this, "async_inference_config", true);
        // data_capture_config - computed: false, optional: true, required: false
        this._dataCaptureConfig = new SagemakerEndpointConfigurationDataCaptureConfigOutputReference(this, "data_capture_config", true);
        this._kmsKeyArn = config.kmsKeyArn;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._asyncInferenceConfig.internalValue = config.asyncInferenceConfig;
        this._dataCaptureConfig.internalValue = config.dataCaptureConfig;
        this._productionVariants = config.productionVariants;
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
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    /**
     * @stability stable
     */
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
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
    get asyncInferenceConfig() {
        return this._asyncInferenceConfig;
    }
    /**
     * @stability stable
     */
    putAsyncInferenceConfig(value) {
        this._asyncInferenceConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAsyncInferenceConfig() {
        this._asyncInferenceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get asyncInferenceConfigInput() {
        return this._asyncInferenceConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get dataCaptureConfig() {
        return this._dataCaptureConfig;
    }
    /**
     * @stability stable
     */
    putDataCaptureConfig(value) {
        this._dataCaptureConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDataCaptureConfig() {
        this._dataCaptureConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataCaptureConfigInput() {
        return this._dataCaptureConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get productionVariants() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('production_variants');
    }
    /**
     * @stability stable
     */
    set productionVariants(value) {
        this._productionVariants = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get productionVariantsInput() {
        return this._productionVariants;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            async_inference_config: sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(this._asyncInferenceConfig.internalValue),
            data_capture_config: sagemakerEndpointConfigurationDataCaptureConfigToTerraform(this._dataCaptureConfig.internalValue),
            production_variants: cdktf.listMapper(sagemakerEndpointConfigurationProductionVariantsToTerraform)(this._productionVariants),
        };
    }
}
exports.SagemakerEndpointConfiguration = SagemakerEndpointConfiguration;
_g = JSII_RTTI_SYMBOL_1;
SagemakerEndpointConfiguration[_g] = { fqn: "@cdktf/provider-aws.sagemaker.SagemakerEndpointConfiguration", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SagemakerEndpointConfiguration.tfResourceType = "aws_sagemaker_endpoint_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLWVuZHBvaW50LWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2FnZW1ha2VyL3NhZ2VtYWtlci1lbmRwb2ludC1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBd0IvQixTQUFnQix5RUFBeUUsQ0FBQyxNQUF1SjtJQUMvTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsbUNBQW1DLENBQUM7S0FDOUcsQ0FBQTtBQUNILENBQUM7QUFSRCw4SkFRQzs7OztBQUVELE1BQWEsNkVBQThFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJcEgsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxvQ0FBb0MsRUFBRTtZQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztTQUNyRztRQUNELE9BQU8sWUFBWSxDQUFD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O0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUF5RDtRQUNyRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3JELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxzQkFBc0IsRUFBRSw2REFBNkQsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1lBQy9ILG1CQUFtQixFQUFFLDBEQUEwRCxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7WUFDdEgsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQywyREFBMkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUM3SCxDQUFDO0lBQ0osQ0FBQzs7QUE1S0gsd0VBNktDOzs7QUEzS0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw2Q0FBYyxHQUFXLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhc3luY0luZmVyZW5jZUNvbmZpZz86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGFDYXB0dXJlQ29uZmlnPzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvZHVjdGlvblZhcmlhbnRzOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnQ2xpZW50Q29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfY29uY3VycmVudF9pbnZvY2F0aW9uc19wZXJfaW5zdGFuY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2UpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlID0gdGhpcy5fbWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZSA9IHZhbHVlLm1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9jb25jdXJyZW50X2ludm9jYXRpb25zX3Blcl9pbnN0YW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4Q29uY3VycmVudEludm9jYXRpb25zUGVySW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfY29uY3VycmVudF9pbnZvY2F0aW9uc19wZXJfaW5zdGFuY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlKCkge1xuICAgIHRoaXMuX21heENvbmN1cnJlbnRJbnZvY2F0aW9uc1Blckluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDb25jdXJyZW50SW52b2NhdGlvbnNQZXJJbnN0YW5jZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXJyb3JUb3BpYz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VjY2Vzc1RvcGljPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXJyb3JfdG9waWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JUb3BpYyksXG4gICAgc3VjY2Vzc190b3BpYzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWNjZXNzVG9waWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXJyb3JUb3BpYykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXJyb3JUb3BpYyA9IHRoaXMuX2Vycm9yVG9waWM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWNjZXNzVG9waWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1Y2Nlc3NUb3BpYyA9IHRoaXMuX3N1Y2Nlc3NUb3BpYztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXJyb3JUb3BpYyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1Y2Nlc3NUb3BpYyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXJyb3JUb3BpYyA9IHZhbHVlLmVycm9yVG9waWM7XG4gICAgICB0aGlzLl9zdWNjZXNzVG9waWMgPSB2YWx1ZS5zdWNjZXNzVG9waWM7XG4gICAgfVxuICB9XG5cbiAgLy8gZXJyb3JfdG9waWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXJyb3JUb3BpYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXJyb3JUb3BpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX3RvcGljJyk7XG4gIH1cbiAgcHVibGljIHNldCBlcnJvclRvcGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lcnJvclRvcGljID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXJyb3JUb3BpYygpIHtcbiAgICB0aGlzLl9lcnJvclRvcGljID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlcnJvclRvcGljSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yVG9waWM7XG4gIH1cblxuICAvLyBzdWNjZXNzX3RvcGljIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Y2Nlc3NUb3BpYz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VjY2Vzc1RvcGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VjY2Vzc190b3BpYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VjY2Vzc1RvcGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWNjZXNzVG9waWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWNjZXNzVG9waWMoKSB7XG4gICAgdGhpcy5fc3VjY2Vzc1RvcGljID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWNjZXNzVG9waWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VjY2Vzc1RvcGljO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNPdXRwdXRQYXRoOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uQ29uZmlnPzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBzM19vdXRwdXRfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM091dHB1dFBhdGgpLFxuICAgIG5vdGlmaWNhdGlvbl9jb25maWc6IHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnTm90aWZpY2F0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5ub3RpZmljYXRpb25Db25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUlkID0gdGhpcy5fa21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM091dHB1dFBhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzT3V0cHV0UGF0aCA9IHRoaXMuX3MzT3V0cHV0UGF0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90aWZpY2F0aW9uQ29uZmlnID0gdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlLmttc0tleUlkO1xuICAgICAgdGhpcy5fczNPdXRwdXRQYXRoID0gdmFsdWUuczNPdXRwdXRQYXRoO1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ub3RpZmljYXRpb25Db25maWc7XG4gICAgfVxuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBzM19vdXRwdXRfcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zM091dHB1dFBhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHMzT3V0cHV0UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX291dHB1dF9wYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM091dHB1dFBhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzT3V0cHV0UGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM091dHB1dFBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNPdXRwdXRQYXRoO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ub3RpZmljYXRpb25Db25maWcgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWdOb3RpZmljYXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibm90aWZpY2F0aW9uX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBub3RpZmljYXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0Tm90aWZpY2F0aW9uQ29uZmlnKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ05vdGlmaWNhdGlvbkNvbmZpZykge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90aWZpY2F0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RpZmljYXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsaWVudENvbmZpZz86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnQ2xpZW50Q29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG91dHB1dENvbmZpZzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRDb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbGllbnRfY29uZmlnOiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50Q29uZmlnKSxcbiAgICBvdXRwdXRfY29uZmlnOiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEub3V0cHV0Q29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsaWVudENvbmZpZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xpZW50Q29uZmlnID0gdGhpcy5fY2xpZW50Q29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3V0cHV0Q29uZmlnPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdXRwdXRDb25maWcgPSB0aGlzLl9vdXRwdXRDb25maWc/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsaWVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3V0cHV0Q29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NsaWVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2xpZW50Q29uZmlnO1xuICAgICAgdGhpcy5fb3V0cHV0Q29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5vdXRwdXRDb25maWc7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xpZW50X2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbGllbnRDb25maWcgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWdDbGllbnRDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xpZW50X2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjbGllbnRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudENvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0Q2xpZW50Q29uZmlnKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ0NsaWVudENvbmZpZykge1xuICAgIHRoaXMuX2NsaWVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xpZW50Q29uZmlnKCkge1xuICAgIHRoaXMuX2NsaWVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50Q29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBvdXRwdXRfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX291dHB1dENvbmZpZyA9IG5ldyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ091dHB1dENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJvdXRwdXRfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG91dHB1dENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0Q29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRPdXRwdXRDb25maWcodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0Q29uZmlnKSB7XG4gICAgdGhpcy5fb3V0cHV0Q29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0Q29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dENvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjc3ZDb250ZW50VHlwZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpzb25Db250ZW50VHlwZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlQ29udGVudFR5cGVIZWFkZXJPdXRwdXRSZWZlcmVuY2UgfCBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNzdl9jb250ZW50X3R5cGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNzdkNvbnRlbnRUeXBlcyksXG4gICAganNvbl9jb250ZW50X3R5cGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmpzb25Db250ZW50VHlwZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3N2Q29udGVudFR5cGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jc3ZDb250ZW50VHlwZXMgPSB0aGlzLl9jc3ZDb250ZW50VHlwZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9qc29uQ29udGVudFR5cGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qc29uQ29udGVudFR5cGVzID0gdGhpcy5fanNvbkNvbnRlbnRUeXBlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3N2Q29udGVudFR5cGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fanNvbkNvbnRlbnRUeXBlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3N2Q29udGVudFR5cGVzID0gdmFsdWUuY3N2Q29udGVudFR5cGVzO1xuICAgICAgdGhpcy5fanNvbkNvbnRlbnRUeXBlcyA9IHZhbHVlLmpzb25Db250ZW50VHlwZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gY3N2X2NvbnRlbnRfdHlwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3N2Q29udGVudFR5cGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNzdkNvbnRlbnRUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjc3ZfY29udGVudF90eXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3N2Q29udGVudFR5cGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NzdkNvbnRlbnRUeXBlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENzdkNvbnRlbnRUeXBlcygpIHtcbiAgICB0aGlzLl9jc3ZDb250ZW50VHlwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzdkNvbnRlbnRUeXBlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jc3ZDb250ZW50VHlwZXM7XG4gIH1cblxuICAvLyBqc29uX2NvbnRlbnRfdHlwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfanNvbkNvbnRlbnRUeXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBqc29uQ29udGVudFR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2pzb25fY29udGVudF90eXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQganNvbkNvbnRlbnRUeXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9qc29uQ29udGVudFR5cGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnNvbkNvbnRlbnRUeXBlcygpIHtcbiAgICB0aGlzLl9qc29uQ29udGVudFR5cGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqc29uQ29udGVudFR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25Db250ZW50VHlwZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXB0dXJlTW9kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXB0dXJlX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FwdHVyZU1vZGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzdGluYXRpb25TM1VyaTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUNhcHR1cmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcHR1cmVDb250ZW50VHlwZUhlYWRlcj86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcHR1cmVPcHRpb25zOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVPcHRpb25zW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbl9zM191cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25TM1VyaSksXG4gICAgZW5hYmxlX2NhcHR1cmU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUNhcHR1cmUpLFxuICAgIGluaXRpYWxfc2FtcGxpbmdfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlKSxcbiAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUlkKSxcbiAgICBjYXB0dXJlX2NvbnRlbnRfdHlwZV9oZWFkZXI6IHNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5jYXB0dXJlQ29udGVudFR5cGVIZWFkZXIpLFxuICAgIGNhcHR1cmVfb3B0aW9uczogY2RrdGYubGlzdE1hcHBlcihzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVPcHRpb25zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2FwdHVyZU9wdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVzdGluYXRpb25TM1VyaSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVzdGluYXRpb25TM1VyaSA9IHRoaXMuX2Rlc3RpbmF0aW9uUzNVcmk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmFibGVDYXB0dXJlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVDYXB0dXJlID0gdGhpcy5fZW5hYmxlQ2FwdHVyZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UgPSB0aGlzLl9pbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUlkID0gdGhpcy5fa21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYXB0dXJlQ29udGVudFR5cGVIZWFkZXI/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcHR1cmVDb250ZW50VHlwZUhlYWRlciA9IHRoaXMuX2NhcHR1cmVDb250ZW50VHlwZUhlYWRlcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhcHR1cmVPcHRpb25zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYXB0dXJlT3B0aW9ucyA9IHRoaXMuX2NhcHR1cmVPcHRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZXN0aW5hdGlvblMzVXJpID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5hYmxlQ2FwdHVyZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NhcHR1cmVDb250ZW50VHlwZUhlYWRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FwdHVyZU9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Rlc3RpbmF0aW9uUzNVcmkgPSB2YWx1ZS5kZXN0aW5hdGlvblMzVXJpO1xuICAgICAgdGhpcy5fZW5hYmxlQ2FwdHVyZSA9IHZhbHVlLmVuYWJsZUNhcHR1cmU7XG4gICAgICB0aGlzLl9pbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlID0gdmFsdWUuaW5pdGlhbFNhbXBsaW5nUGVyY2VudGFnZTtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWUua21zS2V5SWQ7XG4gICAgICB0aGlzLl9jYXB0dXJlQ29udGVudFR5cGVIZWFkZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNhcHR1cmVDb250ZW50VHlwZUhlYWRlcjtcbiAgICAgIHRoaXMuX2NhcHR1cmVPcHRpb25zID0gdmFsdWUuY2FwdHVyZU9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVzdGluYXRpb25fczNfdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uUzNVcmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uUzNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9zM191cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc3RpbmF0aW9uUzNVcmkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uUzNVcmkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25TM1VyaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvblMzVXJpO1xuICB9XG5cbiAgLy8gZW5hYmxlX2NhcHR1cmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlQ2FwdHVyZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQ2FwdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfY2FwdHVyZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUNhcHR1cmUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUNhcHR1cmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVDYXB0dXJlKCkge1xuICAgIHRoaXMuX2VuYWJsZUNhcHR1cmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUNhcHR1cmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlQ2FwdHVyZTtcbiAgfVxuXG4gIC8vIGluaXRpYWxfc2FtcGxpbmdfcGVyY2VudGFnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5pdGlhbF9zYW1wbGluZ19wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbml0aWFsU2FtcGxpbmdQZXJjZW50YWdlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluaXRpYWxTYW1wbGluZ1BlcmNlbnRhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbFNhbXBsaW5nUGVyY2VudGFnZTtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUlkO1xuICB9XG5cbiAgLy8gY2FwdHVyZV9jb250ZW50X3R5cGVfaGVhZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhcHR1cmVDb250ZW50VHlwZUhlYWRlciA9IG5ldyBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZ0NhcHR1cmVDb250ZW50VHlwZUhlYWRlck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjYXB0dXJlX2NvbnRlbnRfdHlwZV9oZWFkZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jYXB0dXJlQ29udGVudFR5cGVIZWFkZXI7XG4gIH1cbiAgcHVibGljIHB1dENhcHR1cmVDb250ZW50VHlwZUhlYWRlcih2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlQ29udGVudFR5cGVIZWFkZXIpIHtcbiAgICB0aGlzLl9jYXB0dXJlQ29udGVudFR5cGVIZWFkZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcHR1cmVDb250ZW50VHlwZUhlYWRlcigpIHtcbiAgICB0aGlzLl9jYXB0dXJlQ29udGVudFR5cGVIZWFkZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FwdHVyZUNvbnRlbnRUeXBlSGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcHR1cmVDb250ZW50VHlwZUhlYWRlci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gY2FwdHVyZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NhcHR1cmVPcHRpb25zPzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdDYXB0dXJlT3B0aW9uc1tdOyBcbiAgcHVibGljIGdldCBjYXB0dXJlT3B0aW9ucygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2FwdHVyZV9vcHRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY2FwdHVyZU9wdGlvbnModmFsdWU6IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkRhdGFDYXB0dXJlQ29uZmlnQ2FwdHVyZU9wdGlvbnNbXSkge1xuICAgIHRoaXMuX2NhcHR1cmVPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcHR1cmVPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcHR1cmVPcHRpb25zO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvblByb2R1Y3Rpb25WYXJpYW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY2VsZXJhdG9yVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5pdGlhbEluc3RhbmNlQ291bnQ6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5pdGlhbFZhcmlhbnRXZWlnaHQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb2RlbE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhcmlhbnROYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjZWxlcmF0b3JfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2NlbGVyYXRvclR5cGUpLFxuICAgIGluaXRpYWxfaW5zdGFuY2VfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbEluc3RhbmNlQ291bnQpLFxuICAgIGluaXRpYWxfdmFyaWFudF93ZWlnaHQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW5pdGlhbFZhcmlhbnRXZWlnaHQpLFxuICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5zdGFuY2VUeXBlKSxcbiAgICBtb2RlbF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vZGVsTmFtZSksXG4gICAgdmFyaWFudF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhcmlhbnROYW1lKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zYWdlbWFrZXJfZW5kcG9pbnRfY29uZmlndXJhdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSBjb25maWcua21zS2V5QXJuO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2FzeW5jSW5mZXJlbmNlQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuYXN5bmNJbmZlcmVuY2VDb25maWc7XG4gICAgdGhpcy5fZGF0YUNhcHR1cmVDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5kYXRhQ2FwdHVyZUNvbmZpZztcbiAgICB0aGlzLl9wcm9kdWN0aW9uVmFyaWFudHMgPSBjb25maWcucHJvZHVjdGlvblZhcmlhbnRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfa2V5X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUFybigpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlBcm47XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBhc3luY19pbmZlcmVuY2VfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FzeW5jSW5mZXJlbmNlQ29uZmlnID0gbmV3IFNhZ2VtYWtlckVuZHBvaW50Q29uZmlndXJhdGlvbkFzeW5jSW5mZXJlbmNlQ29uZmlnT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFzeW5jX2luZmVyZW5jZV9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXN5bmNJbmZlcmVuY2VDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FzeW5jSW5mZXJlbmNlQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRBc3luY0luZmVyZW5jZUNvbmZpZyh2YWx1ZTogU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uQXN5bmNJbmZlcmVuY2VDb25maWcpIHtcbiAgICB0aGlzLl9hc3luY0luZmVyZW5jZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXN5bmNJbmZlcmVuY2VDb25maWcoKSB7XG4gICAgdGhpcy5fYXN5bmNJbmZlcmVuY2VDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXN5bmNJbmZlcmVuY2VDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXN5bmNJbmZlcmVuY2VDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGRhdGFfY2FwdHVyZV9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YUNhcHR1cmVDb25maWcgPSBuZXcgU2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZGF0YV9jYXB0dXJlX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkYXRhQ2FwdHVyZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YUNhcHR1cmVDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dERhdGFDYXB0dXJlQ29uZmlnKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25EYXRhQ2FwdHVyZUNvbmZpZykge1xuICAgIHRoaXMuX2RhdGFDYXB0dXJlQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhQ2FwdHVyZUNvbmZpZygpIHtcbiAgICB0aGlzLl9kYXRhQ2FwdHVyZUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhQ2FwdHVyZUNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhQ2FwdHVyZUNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcHJvZHVjdGlvbl92YXJpYW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcm9kdWN0aW9uVmFyaWFudHM/OiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNbXTsgXG4gIHB1YmxpYyBnZXQgcHJvZHVjdGlvblZhcmlhbnRzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9kdWN0aW9uX3ZhcmlhbnRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvZHVjdGlvblZhcmlhbnRzKHZhbHVlOiBTYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9kdWN0aW9uVmFyaWFudHNbXSkge1xuICAgIHRoaXMuX3Byb2R1Y3Rpb25WYXJpYW50cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9kdWN0aW9uVmFyaWFudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZHVjdGlvblZhcmlhbnRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zS2V5QXJuKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBhc3luY19pbmZlcmVuY2VfY29uZmlnOiBzYWdlbWFrZXJFbmRwb2ludENvbmZpZ3VyYXRpb25Bc3luY0luZmVyZW5jZUNvbmZpZ1RvVGVycmFmb3JtKHRoaXMuX2FzeW5jSW5mZXJlbmNlQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgZGF0YV9jYXB0dXJlX2NvbmZpZzogc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uRGF0YUNhcHR1cmVDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhQ2FwdHVyZUNvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHByb2R1Y3Rpb25fdmFyaWFudHM6IGNka3RmLmxpc3RNYXBwZXIoc2FnZW1ha2VyRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvZHVjdGlvblZhcmlhbnRzVG9UZXJyYWZvcm0pKHRoaXMuX3Byb2R1Y3Rpb25WYXJpYW50cyksXG4gICAgfTtcbiAgfVxufVxuIl19