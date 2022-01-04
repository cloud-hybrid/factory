"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsmMaintenanceWindowTask = exports.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform = exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference = exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform = exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform = exports.ssmMaintenanceWindowTaskTargetsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ssmMaintenanceWindowTaskTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.ssmMaintenanceWindowTaskTargetsToTerraform = ssmMaintenanceWindowTaskTargetsToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct) {
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
exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        document_version: cdktf.stringToTerraform(struct.documentVersion),
        parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform)(struct.parameter),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform;
/**
 * @stability stable
 */
class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._documentVersion) {
            hasAnyValues = true;
            internalValueResult.documentVersion = this._documentVersion;
        }
        if (this._parameter) {
            hasAnyValues = true;
            internalValueResult.parameter = this._parameter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._documentVersion = undefined;
            this._parameter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._documentVersion = value.documentVersion;
            this._parameter = value.parameter;
        }
    }
    /**
     * @stability stable
     */
    get documentVersion() {
        return this.getStringAttribute('document_version');
    }
    /**
     * @stability stable
     */
    set documentVersion(value) {
        this._documentVersion = value;
    }
    /**
     * @stability stable
     */
    resetDocumentVersion() {
        this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get documentVersionInput() {
        return this._documentVersion;
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
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference[_a] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference", version: "3.0.1" };
function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_context: cdktf.stringToTerraform(struct.clientContext),
        payload: cdktf.stringToTerraform(struct.payload),
        qualifier: cdktf.stringToTerraform(struct.qualifier),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform;
/**
 * @stability stable
 */
class SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._clientContext) {
            hasAnyValues = true;
            internalValueResult.clientContext = this._clientContext;
        }
        if (this._payload) {
            hasAnyValues = true;
            internalValueResult.payload = this._payload;
        }
        if (this._qualifier) {
            hasAnyValues = true;
            internalValueResult.qualifier = this._qualifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientContext = undefined;
            this._payload = undefined;
            this._qualifier = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientContext = value.clientContext;
            this._payload = value.payload;
            this._qualifier = value.qualifier;
        }
    }
    /**
     * @stability stable
     */
    get clientContext() {
        return this.getStringAttribute('client_context');
    }
    /**
     * @stability stable
     */
    set clientContext(value) {
        this._clientContext = value;
    }
    /**
     * @stability stable
     */
    resetClientContext() {
        this._clientContext = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clientContextInput() {
        return this._clientContext;
    }
    /**
     * @stability stable
     */
    get payload() {
        return this.getStringAttribute('payload');
    }
    /**
     * @stability stable
     */
    set payload(value) {
        this._payload = value;
    }
    /**
     * @stability stable
     */
    resetPayload() {
        this._payload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get payloadInput() {
        return this._payload;
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
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference[_b] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference", version: "3.0.1" };
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_log_group_name: cdktf.stringToTerraform(struct.cloudwatchLogGroupName),
        cloudwatch_output_enabled: cdktf.booleanToTerraform(struct.cloudwatchOutputEnabled),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform;
/**
 * @stability stable
 */
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchLogGroupName) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogGroupName = this._cloudwatchLogGroupName;
        }
        if (this._cloudwatchOutputEnabled) {
            hasAnyValues = true;
            internalValueResult.cloudwatchOutputEnabled = this._cloudwatchOutputEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchLogGroupName = undefined;
            this._cloudwatchOutputEnabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchLogGroupName = value.cloudwatchLogGroupName;
            this._cloudwatchOutputEnabled = value.cloudwatchOutputEnabled;
        }
    }
    /**
     * @stability stable
     */
    get cloudwatchLogGroupName() {
        return this.getStringAttribute('cloudwatch_log_group_name');
    }
    /**
     * @stability stable
     */
    set cloudwatchLogGroupName(value) {
        this._cloudwatchLogGroupName = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLogGroupName() {
        this._cloudwatchLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLogGroupNameInput() {
        return this._cloudwatchLogGroupName;
    }
    /**
     * @stability stable
     */
    get cloudwatchOutputEnabled() {
        return this.getBooleanAttribute('cloudwatch_output_enabled');
    }
    /**
     * @stability stable
     */
    set cloudwatchOutputEnabled(value) {
        this._cloudwatchOutputEnabled = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchOutputEnabled() {
        this._cloudwatchOutputEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchOutputEnabledInput() {
        return this._cloudwatchOutputEnabled;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference", version: "3.0.1" };
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        notification_arn: cdktf.stringToTerraform(struct.notificationArn),
        notification_events: cdktf.listMapper(cdktf.stringToTerraform)(struct.notificationEvents),
        notification_type: cdktf.stringToTerraform(struct.notificationType),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform;
/**
 * @stability stable
 */
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._notificationArn) {
            hasAnyValues = true;
            internalValueResult.notificationArn = this._notificationArn;
        }
        if (this._notificationEvents) {
            hasAnyValues = true;
            internalValueResult.notificationEvents = this._notificationEvents;
        }
        if (this._notificationType) {
            hasAnyValues = true;
            internalValueResult.notificationType = this._notificationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._notificationArn = undefined;
            this._notificationEvents = undefined;
            this._notificationType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._notificationArn = value.notificationArn;
            this._notificationEvents = value.notificationEvents;
            this._notificationType = value.notificationType;
        }
    }
    /**
     * @stability stable
     */
    get notificationArn() {
        return this.getStringAttribute('notification_arn');
    }
    /**
     * @stability stable
     */
    set notificationArn(value) {
        this._notificationArn = value;
    }
    /**
     * @stability stable
     */
    resetNotificationArn() {
        this._notificationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationArnInput() {
        return this._notificationArn;
    }
    /**
     * @stability stable
     */
    get notificationEvents() {
        return this.getListAttribute('notification_events');
    }
    /**
     * @stability stable
     */
    set notificationEvents(value) {
        this._notificationEvents = value;
    }
    /**
     * @stability stable
     */
    resetNotificationEvents() {
        this._notificationEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationEventsInput() {
        return this._notificationEvents;
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
    /**
     * @stability stable
     */
    resetNotificationType() {
        this._notificationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationTypeInput() {
        return this._notificationType;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference[_d] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference", version: "3.0.1" };
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct) {
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
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform;
function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        document_hash: cdktf.stringToTerraform(struct.documentHash),
        document_hash_type: cdktf.stringToTerraform(struct.documentHashType),
        document_version: cdktf.stringToTerraform(struct.documentVersion),
        output_s3_bucket: cdktf.stringToTerraform(struct.outputS3Bucket),
        output_s3_key_prefix: cdktf.stringToTerraform(struct.outputS3KeyPrefix),
        service_role_arn: cdktf.stringToTerraform(struct.serviceRoleArn),
        timeout_seconds: cdktf.numberToTerraform(struct.timeoutSeconds),
        cloudwatch_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct.cloudwatchConfig),
        notification_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct.notificationConfig),
        parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform)(struct.parameter),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform;
/**
 * @stability stable
 */
class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_config - computed: false, optional: true, required: false
        this._cloudwatchConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference(this, "cloudwatch_config", true);
        // notification_config - computed: false, optional: true, required: false
        this._notificationConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference(this, "notification_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k, _l, _m;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comment) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._documentHash) {
            hasAnyValues = true;
            internalValueResult.documentHash = this._documentHash;
        }
        if (this._documentHashType) {
            hasAnyValues = true;
            internalValueResult.documentHashType = this._documentHashType;
        }
        if (this._documentVersion) {
            hasAnyValues = true;
            internalValueResult.documentVersion = this._documentVersion;
        }
        if (this._outputS3Bucket) {
            hasAnyValues = true;
            internalValueResult.outputS3Bucket = this._outputS3Bucket;
        }
        if (this._outputS3KeyPrefix) {
            hasAnyValues = true;
            internalValueResult.outputS3KeyPrefix = this._outputS3KeyPrefix;
        }
        if (this._serviceRoleArn) {
            hasAnyValues = true;
            internalValueResult.serviceRoleArn = this._serviceRoleArn;
        }
        if (this._timeoutSeconds) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        if ((_j = this._cloudwatchConfig) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchConfig = (_k = this._cloudwatchConfig) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        if ((_l = this._notificationConfig) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.notificationConfig = (_m = this._notificationConfig) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        if (this._parameter) {
            hasAnyValues = true;
            internalValueResult.parameter = this._parameter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comment = undefined;
            this._documentHash = undefined;
            this._documentHashType = undefined;
            this._documentVersion = undefined;
            this._outputS3Bucket = undefined;
            this._outputS3KeyPrefix = undefined;
            this._serviceRoleArn = undefined;
            this._timeoutSeconds = undefined;
            this._cloudwatchConfig.internalValue = undefined;
            this._notificationConfig.internalValue = undefined;
            this._parameter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comment = value.comment;
            this._documentHash = value.documentHash;
            this._documentHashType = value.documentHashType;
            this._documentVersion = value.documentVersion;
            this._outputS3Bucket = value.outputS3Bucket;
            this._outputS3KeyPrefix = value.outputS3KeyPrefix;
            this._serviceRoleArn = value.serviceRoleArn;
            this._timeoutSeconds = value.timeoutSeconds;
            this._cloudwatchConfig.internalValue = value.cloudwatchConfig;
            this._notificationConfig.internalValue = value.notificationConfig;
            this._parameter = value.parameter;
        }
    }
    /**
     * @stability stable
     */
    get comment() {
        return this.getStringAttribute('comment');
    }
    /**
     * @stability stable
     */
    set comment(value) {
        this._comment = value;
    }
    /**
     * @stability stable
     */
    resetComment() {
        this._comment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get commentInput() {
        return this._comment;
    }
    /**
     * @stability stable
     */
    get documentHash() {
        return this.getStringAttribute('document_hash');
    }
    /**
     * @stability stable
     */
    set documentHash(value) {
        this._documentHash = value;
    }
    /**
     * @stability stable
     */
    resetDocumentHash() {
        this._documentHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get documentHashInput() {
        return this._documentHash;
    }
    /**
     * @stability stable
     */
    get documentHashType() {
        return this.getStringAttribute('document_hash_type');
    }
    /**
     * @stability stable
     */
    set documentHashType(value) {
        this._documentHashType = value;
    }
    /**
     * @stability stable
     */
    resetDocumentHashType() {
        this._documentHashType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get documentHashTypeInput() {
        return this._documentHashType;
    }
    /**
     * @stability stable
     */
    get documentVersion() {
        return this.getStringAttribute('document_version');
    }
    /**
     * @stability stable
     */
    set documentVersion(value) {
        this._documentVersion = value;
    }
    /**
     * @stability stable
     */
    resetDocumentVersion() {
        this._documentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get documentVersionInput() {
        return this._documentVersion;
    }
    /**
     * @stability stable
     */
    get outputS3Bucket() {
        return this.getStringAttribute('output_s3_bucket');
    }
    /**
     * @stability stable
     */
    set outputS3Bucket(value) {
        this._outputS3Bucket = value;
    }
    /**
     * @stability stable
     */
    resetOutputS3Bucket() {
        this._outputS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputS3BucketInput() {
        return this._outputS3Bucket;
    }
    /**
     * @stability stable
     */
    get outputS3KeyPrefix() {
        return this.getStringAttribute('output_s3_key_prefix');
    }
    /**
     * @stability stable
     */
    set outputS3KeyPrefix(value) {
        this._outputS3KeyPrefix = value;
    }
    /**
     * @stability stable
     */
    resetOutputS3KeyPrefix() {
        this._outputS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputS3KeyPrefixInput() {
        return this._outputS3KeyPrefix;
    }
    /**
     * @stability stable
     */
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceRoleArn(value) {
        this._serviceRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetServiceRoleArn() {
        this._serviceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceRoleArnInput() {
        return this._serviceRoleArn;
    }
    /**
     * @stability stable
     */
    get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    /**
     * @stability stable
     */
    set timeoutSeconds(value) {
        this._timeoutSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
    /**
     * @stability stable
     */
    get cloudwatchConfig() {
        return this._cloudwatchConfig;
    }
    /**
     * @stability stable
     */
    putCloudwatchConfig(value) {
        this._cloudwatchConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchConfig() {
        this._cloudwatchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchConfigInput() {
        return this._cloudwatchConfig.internalValue;
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
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference[_e] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference", version: "3.0.1" };
function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input: cdktf.stringToTerraform(struct.input),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform;
/**
 * @stability stable
 */
class SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference extends cdktf.ComplexObject {
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
        if (this._input) {
            hasAnyValues = true;
            internalValueResult.input = this._input;
        }
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._input = undefined;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._input = value.input;
            this._name = value.name;
        }
    }
    /**
     * @stability stable
     */
    get input() {
        return this.getStringAttribute('input');
    }
    /**
     * @stability stable
     */
    set input(value) {
        this._input = value;
    }
    /**
     * @stability stable
     */
    resetInput() {
        this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputInput() {
        return this._input;
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
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference[_f] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference", version: "3.0.1" };
function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        automation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct.automationParameters),
        lambda_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct.lambdaParameters),
        run_command_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct.runCommandParameters),
        step_functions_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct.stepFunctionsParameters),
    };
}
exports.ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform = ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform;
/**
 * @stability stable
 */
class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // automation_parameters - computed: false, optional: true, required: false
        this._automationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference(this, "automation_parameters", true);
        // lambda_parameters - computed: false, optional: true, required: false
        this._lambdaParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference(this, "lambda_parameters", true);
        // run_command_parameters - computed: false, optional: true, required: false
        this._runCommandParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference(this, "run_command_parameters", true);
        // step_functions_parameters - computed: false, optional: true, required: false
        this._stepFunctionsParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference(this, "step_functions_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k, _l, _m, _o, _p, _q, _r;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_j = this._automationParameters) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.automationParameters = (_k = this._automationParameters) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        if ((_l = this._lambdaParameters) === null || _l === void 0 ? void 0 : _l.internalValue) {
            hasAnyValues = true;
            internalValueResult.lambdaParameters = (_m = this._lambdaParameters) === null || _m === void 0 ? void 0 : _m.internalValue;
        }
        if ((_o = this._runCommandParameters) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.runCommandParameters = (_p = this._runCommandParameters) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        if ((_q = this._stepFunctionsParameters) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.stepFunctionsParameters = (_r = this._stepFunctionsParameters) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._automationParameters.internalValue = undefined;
            this._lambdaParameters.internalValue = undefined;
            this._runCommandParameters.internalValue = undefined;
            this._stepFunctionsParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._automationParameters.internalValue = value.automationParameters;
            this._lambdaParameters.internalValue = value.lambdaParameters;
            this._runCommandParameters.internalValue = value.runCommandParameters;
            this._stepFunctionsParameters.internalValue = value.stepFunctionsParameters;
        }
    }
    /**
     * @stability stable
     */
    get automationParameters() {
        return this._automationParameters;
    }
    /**
     * @stability stable
     */
    putAutomationParameters(value) {
        this._automationParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAutomationParameters() {
        this._automationParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get automationParametersInput() {
        return this._automationParameters.internalValue;
    }
    /**
     * @stability stable
     */
    get lambdaParameters() {
        return this._lambdaParameters;
    }
    /**
     * @stability stable
     */
    putLambdaParameters(value) {
        this._lambdaParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLambdaParameters() {
        this._lambdaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaParametersInput() {
        return this._lambdaParameters.internalValue;
    }
    /**
     * @stability stable
     */
    get runCommandParameters() {
        return this._runCommandParameters;
    }
    /**
     * @stability stable
     */
    putRunCommandParameters(value) {
        this._runCommandParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRunCommandParameters() {
        this._runCommandParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get runCommandParametersInput() {
        return this._runCommandParameters.internalValue;
    }
    /**
     * @stability stable
     */
    get stepFunctionsParameters() {
        return this._stepFunctionsParameters;
    }
    /**
     * @stability stable
     */
    putStepFunctionsParameters(value) {
        this._stepFunctionsParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetStepFunctionsParameters() {
        this._stepFunctionsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stepFunctionsParametersInput() {
        return this._stepFunctionsParameters.internalValue;
    }
}
exports.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference = SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference[_g] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task}.
 *
 * @stability stable
 */
class SsmMaintenanceWindowTask extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ssm_maintenance_window_task',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // task_invocation_parameters - computed: false, optional: true, required: false
        this._taskInvocationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(this, "task_invocation_parameters", true);
        this._description = config.description;
        this._maxConcurrency = config.maxConcurrency;
        this._maxErrors = config.maxErrors;
        this._name = config.name;
        this._priority = config.priority;
        this._serviceRoleArn = config.serviceRoleArn;
        this._taskArn = config.taskArn;
        this._taskType = config.taskType;
        this._windowId = config.windowId;
        this._targets = config.targets;
        this._taskInvocationParameters.internalValue = config.taskInvocationParameters;
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
    get maxConcurrency() {
        return this.getStringAttribute('max_concurrency');
    }
    /**
     * @stability stable
     */
    set maxConcurrency(value) {
        this._maxConcurrency = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxConcurrencyInput() {
        return this._maxConcurrency;
    }
    /**
     * @stability stable
     */
    get maxErrors() {
        return this.getStringAttribute('max_errors');
    }
    /**
     * @stability stable
     */
    set maxErrors(value) {
        this._maxErrors = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxErrorsInput() {
        return this._maxErrors;
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
    get priority() {
        return this.getNumberAttribute('priority');
    }
    /**
     * @stability stable
     */
    set priority(value) {
        this._priority = value;
    }
    /**
     * @stability stable
     */
    resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get priorityInput() {
        return this._priority;
    }
    /**
     * @stability stable
     */
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceRoleArn(value) {
        this._serviceRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetServiceRoleArn() {
        this._serviceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceRoleArnInput() {
        return this._serviceRoleArn;
    }
    /**
     * @stability stable
     */
    get taskArn() {
        return this.getStringAttribute('task_arn');
    }
    /**
     * @stability stable
     */
    set taskArn(value) {
        this._taskArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskArnInput() {
        return this._taskArn;
    }
    /**
     * @stability stable
     */
    get taskType() {
        return this.getStringAttribute('task_type');
    }
    /**
     * @stability stable
     */
    set taskType(value) {
        this._taskType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskTypeInput() {
        return this._taskType;
    }
    /**
     * @stability stable
     */
    get windowId() {
        return this.getStringAttribute('window_id');
    }
    /**
     * @stability stable
     */
    set windowId(value) {
        this._windowId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get windowIdInput() {
        return this._windowId;
    }
    /**
     * @stability stable
     */
    get targets() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('targets');
    }
    /**
     * @stability stable
     */
    set targets(value) {
        this._targets = value;
    }
    /**
     * @stability stable
     */
    resetTargets() {
        this._targets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetsInput() {
        return this._targets;
    }
    /**
     * @stability stable
     */
    get taskInvocationParameters() {
        return this._taskInvocationParameters;
    }
    /**
     * @stability stable
     */
    putTaskInvocationParameters(value) {
        this._taskInvocationParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTaskInvocationParameters() {
        this._taskInvocationParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskInvocationParametersInput() {
        return this._taskInvocationParameters.internalValue;
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
            max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
            max_errors: cdktf.stringToTerraform(this._maxErrors),
            name: cdktf.stringToTerraform(this._name),
            priority: cdktf.numberToTerraform(this._priority),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            task_arn: cdktf.stringToTerraform(this._taskArn),
            task_type: cdktf.stringToTerraform(this._taskType),
            window_id: cdktf.stringToTerraform(this._windowId),
            targets: cdktf.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform)(this._targets),
            task_invocation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(this._taskInvocationParameters.internalValue),
        };
    }
}
exports.SsmMaintenanceWindowTask = SsmMaintenanceWindowTask;
_h = JSII_RTTI_SYMBOL_1;
SsmMaintenanceWindowTask[_h] = { fqn: "@cdktf/provider-aws.ssm.SsmMaintenanceWindowTask", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SsmMaintenanceWindowTask.tfResourceType = "aws_ssm_maintenance_window_task";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NtLW1haW50ZW5hbmNlLXdpbmRvdy10YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NzbS9zc20tbWFpbnRlbmFuY2Utd2luZG93LXRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrQy9CLFNBQWdCLDBDQUEwQyxDQUFDLE1BQXdDO0lBQ2pHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDbEUsQ0FBQTtBQUNILENBQUM7QUFURCxnR0FTQztBQVNELFNBQWdCLHdGQUF3RixDQUFDLE1BQXNGO0lBQzdMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFN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QUN6QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0QsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BGLDBCQUEwQixFQUFFLDJEQUEyRCxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7U0FDdEksQ0FBQztJQUNKLENBQUM7O0FBak9ILDREQWtPQzs7O0FBaE9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csdUNBQWMsR0FBVyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heENvbmN1cnJlbmN5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhFcnJvcnM6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW9yaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZVJvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhc2tBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXNrVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdpbmRvd0lkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldHM/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhc2tJbnZvY2F0aW9uUGFyYW1ldGVycz86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFyZ2V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXJnZXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNQYXJhbWV0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9jdW1lbnRWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXI/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlcltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudFZlcnNpb24pLFxuICAgIHBhcmFtZXRlcjogY2RrdGYubGlzdE1hcHBlcihzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kb2N1bWVudFZlcnNpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvY3VtZW50VmVyc2lvbiA9IHRoaXMuX2RvY3VtZW50VmVyc2lvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhcmFtZXRlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYW1ldGVyID0gdGhpcy5fcGFyYW1ldGVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzQXV0b21hdGlvblBhcmFtZXRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RvY3VtZW50VmVyc2lvbiA9IHZhbHVlLmRvY3VtZW50VmVyc2lvbjtcbiAgICAgIHRoaXMuX3BhcmFtZXRlciA9IHZhbHVlLnBhcmFtZXRlcjtcbiAgICB9XG4gIH1cblxuICAvLyBkb2N1bWVudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RvY3VtZW50VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9jdW1lbnRWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb2N1bWVudFZlcnNpb24oKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb2N1bWVudFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnRWZXJzaW9uO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFtZXRlcj86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzUGFyYW1ldGVyW107IFxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYW1ldGVyKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVyc1BhcmFtZXRlcltdKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyYW1ldGVyKCkge1xuICAgIHRoaXMuX3BhcmFtZXRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtZXRlcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xpZW50Q29udGV4dD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBheWxvYWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVhbGlmaWVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xpZW50X2NvbnRleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xpZW50Q29udGV4dCksXG4gICAgcGF5bG9hZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXlsb2FkKSxcbiAgICBxdWFsaWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVhbGlmaWVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzTGFtYmRhUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jbGllbnRDb250ZXh0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbGllbnRDb250ZXh0ID0gdGhpcy5fY2xpZW50Q29udGV4dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BheWxvYWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBheWxvYWQgPSB0aGlzLl9wYXlsb2FkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcXVhbGlmaWVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5xdWFsaWZpZXIgPSB0aGlzLl9xdWFsaWZpZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xpZW50Q29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BheWxvYWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdWFsaWZpZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NsaWVudENvbnRleHQgPSB2YWx1ZS5jbGllbnRDb250ZXh0O1xuICAgICAgdGhpcy5fcGF5bG9hZCA9IHZhbHVlLnBheWxvYWQ7XG4gICAgICB0aGlzLl9xdWFsaWZpZXIgPSB2YWx1ZS5xdWFsaWZpZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gY2xpZW50X2NvbnRleHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xpZW50Q29udGV4dD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2xpZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsaWVudF9jb250ZXh0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjbGllbnRDb250ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGllbnRDb250ZXh0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xpZW50Q29udGV4dCgpIHtcbiAgICB0aGlzLl9jbGllbnRDb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGllbnRDb250ZXh0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudENvbnRleHQ7XG4gIH1cblxuICAvLyBwYXlsb2FkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BheWxvYWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXlsb2FkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXlsb2FkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXlsb2FkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGF5bG9hZCgpIHtcbiAgICB0aGlzLl9wYXlsb2FkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXlsb2FkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BheWxvYWQ7XG4gIH1cblxuICAvLyBxdWFsaWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcXVhbGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBxdWFsaWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdWFsaWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1YWxpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcXVhbGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVhbGlmaWVyKCkge1xuICAgIHRoaXMuX3F1YWxpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVhbGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1YWxpZmllcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ0dyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNDbG91ZHdhdGNoQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNDbG91ZHdhdGNoQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNDbG91ZHdhdGNoQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xvdWR3YXRjaF9sb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nR3JvdXBOYW1lKSxcbiAgICBjbG91ZHdhdGNoX291dHB1dF9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsb3Vkd2F0Y2hMb2dHcm91cE5hbWUgPSB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkID0gdGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWUgPSB2YWx1ZS5jbG91ZHdhdGNoTG9nR3JvdXBOYW1lO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQgPSB2YWx1ZS5jbG91ZHdhdGNoT3V0cHV0RW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaExvZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ0dyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsb3Vkd2F0Y2hMb2dHcm91cE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfb3V0cHV0X2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hPdXRwdXRFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfb3V0cHV0X2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoT3V0cHV0RW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaE91dHB1dEVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaE91dHB1dEVuYWJsZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uRXZlbnRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGlmaWNhdGlvblR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTm90aWZpY2F0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBub3RpZmljYXRpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvbkFybiksXG4gICAgbm90aWZpY2F0aW9uX2V2ZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5ub3RpZmljYXRpb25FdmVudHMpLFxuICAgIG5vdGlmaWNhdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvblR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9uQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ub3RpZmljYXRpb25Bcm4gPSB0aGlzLl9ub3RpZmljYXRpb25Bcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9ub3RpZmljYXRpb25FdmVudHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vdGlmaWNhdGlvbkV2ZW50cyA9IHRoaXMuX25vdGlmaWNhdGlvbkV2ZW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvblR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vdGlmaWNhdGlvblR5cGUgPSB0aGlzLl9ub3RpZmljYXRpb25UeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25FdmVudHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25Bcm4gPSB2YWx1ZS5ub3RpZmljYXRpb25Bcm47XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25FdmVudHMgPSB2YWx1ZS5ub3RpZmljYXRpb25FdmVudHM7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdmFsdWUubm90aWZpY2F0aW9uVHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBub3RpZmljYXRpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm90aWZpY2F0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbm90aWZpY2F0aW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb3RpZmljYXRpb25Bcm4oKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RpZmljYXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uQXJuO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uX2V2ZW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ub3RpZmljYXRpb25FdmVudHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ25vdGlmaWNhdGlvbl9ldmVudHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGlmaWNhdGlvbkV2ZW50cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25FdmVudHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb3RpZmljYXRpb25FdmVudHMoKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uRXZlbnRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RpZmljYXRpb25FdmVudHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uRXZlbnRzO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vdGlmaWNhdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBub3RpZmljYXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90aWZpY2F0aW9uVHlwZSgpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBub3RpZmljYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblR5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNQYXJhbWV0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlclRvVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkb2N1bWVudEhhc2g/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9jdW1lbnRIYXNoVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvY3VtZW50VmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG91dHB1dFMzQnVja2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdXRwdXRTM0tleVByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZHdhdGNoQ29uZmlnPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNDbG91ZHdhdGNoQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBub3RpZmljYXRpb25Db25maWc/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNQYXJhbWV0ZXJbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbWVudCksXG4gICAgZG9jdW1lbnRfaGFzaDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudEhhc2gpLFxuICAgIGRvY3VtZW50X2hhc2hfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb2N1bWVudEhhc2hUeXBlKSxcbiAgICBkb2N1bWVudF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY3VtZW50VmVyc2lvbiksXG4gICAgb3V0cHV0X3MzX2J1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vdXRwdXRTM0J1Y2tldCksXG4gICAgb3V0cHV0X3MzX2tleV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3V0cHV0UzNLZXlQcmVmaXgpLFxuICAgIHNlcnZpY2Vfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZVJvbGVBcm4pLFxuICAgIHRpbWVvdXRfc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0U2Vjb25kcyksXG4gICAgY2xvdWR3YXRjaF9jb25maWc6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaENvbmZpZyksXG4gICAgbm90aWZpY2F0aW9uX2NvbmZpZzogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNOb3RpZmljYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vdGlmaWNhdGlvbkNvbmZpZyksXG4gICAgcGFyYW1ldGVyOiBjZGt0Zi5saXN0TWFwcGVyKHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzUGFyYW1ldGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbW1lbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbW1lbnQgPSB0aGlzLl9jb21tZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZG9jdW1lbnRIYXNoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb2N1bWVudEhhc2ggPSB0aGlzLl9kb2N1bWVudEhhc2g7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb2N1bWVudEhhc2hUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb2N1bWVudEhhc2hUeXBlID0gdGhpcy5fZG9jdW1lbnRIYXNoVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50VmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9jdW1lbnRWZXJzaW9uID0gdGhpcy5fZG9jdW1lbnRWZXJzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3V0cHV0UzNCdWNrZXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm91dHB1dFMzQnVja2V0ID0gdGhpcy5fb3V0cHV0UzNCdWNrZXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdXRwdXRTM0tleVByZWZpeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3V0cHV0UzNLZXlQcmVmaXggPSB0aGlzLl9vdXRwdXRTM0tleVByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlcnZpY2VSb2xlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJ2aWNlUm9sZUFybiA9IHRoaXMuX3NlcnZpY2VSb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dFNlY29uZHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRpbWVvdXRTZWNvbmRzID0gdGhpcy5fdGltZW91dFNlY29uZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG91ZHdhdGNoQ29uZmlnPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZHdhdGNoQ29uZmlnID0gdGhpcy5fY2xvdWR3YXRjaENvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25vdGlmaWNhdGlvbkNvbmZpZz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubm90aWZpY2F0aW9uQ29uZmlnID0gdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFyYW1ldGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXJhbWV0ZXIgPSB0aGlzLl9wYXJhbWV0ZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kb2N1bWVudEhhc2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kb2N1bWVudEhhc2hUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZG9jdW1lbnRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3V0cHV0UzNCdWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdXRwdXRTM0tleVByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZpY2VSb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGltZW91dFNlY29uZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcmFtZXRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29tbWVudCA9IHZhbHVlLmNvbW1lbnQ7XG4gICAgICB0aGlzLl9kb2N1bWVudEhhc2ggPSB2YWx1ZS5kb2N1bWVudEhhc2g7XG4gICAgICB0aGlzLl9kb2N1bWVudEhhc2hUeXBlID0gdmFsdWUuZG9jdW1lbnRIYXNoVHlwZTtcbiAgICAgIHRoaXMuX2RvY3VtZW50VmVyc2lvbiA9IHZhbHVlLmRvY3VtZW50VmVyc2lvbjtcbiAgICAgIHRoaXMuX291dHB1dFMzQnVja2V0ID0gdmFsdWUub3V0cHV0UzNCdWNrZXQ7XG4gICAgICB0aGlzLl9vdXRwdXRTM0tleVByZWZpeCA9IHZhbHVlLm91dHB1dFMzS2V5UHJlZml4O1xuICAgICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSB2YWx1ZS5zZXJ2aWNlUm9sZUFybjtcbiAgICAgIHRoaXMuX3RpbWVvdXRTZWNvbmRzID0gdmFsdWUudGltZW91dFNlY29uZHM7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbG91ZHdhdGNoQ29uZmlnO1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ub3RpZmljYXRpb25Db25maWc7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXIgPSB2YWx1ZS5wYXJhbWV0ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21tZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tbWVudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbW1lbnQoKSB7XG4gICAgdGhpcy5fY29tbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21tZW50O1xuICB9XG5cbiAgLy8gZG9jdW1lbnRfaGFzaCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb2N1bWVudEhhc2g/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvY3VtZW50SGFzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RvY3VtZW50X2hhc2gnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvY3VtZW50SGFzaCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRIYXNoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9jdW1lbnRIYXNoKCkge1xuICAgIHRoaXMuX2RvY3VtZW50SGFzaCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRIYXNoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50SGFzaDtcbiAgfVxuXG4gIC8vIGRvY3VtZW50X2hhc2hfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kb2N1bWVudEhhc2hUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb2N1bWVudEhhc2hUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfaGFzaF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb2N1bWVudEhhc2hUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudEhhc2hUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9jdW1lbnRIYXNoVHlwZSgpIHtcbiAgICB0aGlzLl9kb2N1bWVudEhhc2hUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb2N1bWVudEhhc2hUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50SGFzaFR5cGU7XG4gIH1cblxuICAvLyBkb2N1bWVudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RvY3VtZW50VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9jdW1lbnRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jdW1lbnRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9jdW1lbnRWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb2N1bWVudFZlcnNpb24oKSB7XG4gICAgdGhpcy5fZG9jdW1lbnRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb2N1bWVudFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnRWZXJzaW9uO1xuICB9XG5cbiAgLy8gb3V0cHV0X3MzX2J1Y2tldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRTM0J1Y2tldD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3V0cHV0UzNCdWNrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvdXRwdXRfczNfYnVja2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBvdXRwdXRTM0J1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3V0cHV0UzNCdWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdXRwdXRTM0J1Y2tldCgpIHtcbiAgICB0aGlzLl9vdXRwdXRTM0J1Y2tldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0UzNCdWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0UzNCdWNrZXQ7XG4gIH1cblxuICAvLyBvdXRwdXRfczNfa2V5X3ByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRTM0tleVByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3V0cHV0UzNLZXlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvdXRwdXRfczNfa2V5X3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0cHV0UzNLZXlQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX291dHB1dFMzS2V5UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3V0cHV0UzNLZXlQcmVmaXgoKSB7XG4gICAgdGhpcy5fb3V0cHV0UzNLZXlQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dFMzS2V5UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dFMzS2V5UHJlZml4O1xuICB9XG5cbiAgLy8gc2VydmljZV9yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlUm9sZUFybigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZVJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZVJvbGVBcm47XG4gIH1cblxuICAvLyB0aW1lb3V0X3NlY29uZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dFNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRpbWVvdXRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGltZW91dFNlY29uZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0U2Vjb25kcygpIHtcbiAgICB0aGlzLl90aW1lb3V0U2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dFNlY29uZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dFNlY29uZHM7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoQ29uZmlnID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzQ2xvdWR3YXRjaENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjbG91ZHdhdGNoX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoQ29uZmlnKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc0Nsb3Vkd2F0Y2hDb25maWcpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoQ29uZmlnKCkge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaENvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBub3RpZmljYXRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvbkNvbmZpZyA9IG5ldyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc05vdGlmaWNhdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJub3RpZmljYXRpb25fY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXROb3RpZmljYXRpb25Db25maWcodmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzTm90aWZpY2F0aW9uQ29uZmlnKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb3RpZmljYXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbkNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbWV0ZXI/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNSdW5Db21tYW5kUGFyYW1ldGVyc1BhcmFtZXRlcltdOyBcbiAgcHVibGljIGdldCBwYXJhbWV0ZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhcmFtZXRlcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFtZXRlcih2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnNQYXJhbWV0ZXJbXSkge1xuICAgIHRoaXMuX3BhcmFtZXRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFtZXRlcigpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXI7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpbnB1dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lucHV0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnB1dCA9IHRoaXMuX2lucHV0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lucHV0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5wdXQgPSB2YWx1ZS5pbnB1dDtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlucHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lucHV0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lucHV0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b21hdGlvblBhcmFtZXRlcnM/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhUGFyYW1ldGVycz86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bkNvbW1hbmRQYXJhbWV0ZXJzPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzPzogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvbWF0aW9uX3BhcmFtZXRlcnM6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvbWF0aW9uUGFyYW1ldGVycyksXG4gICAgbGFtYmRhX3BhcmFtZXRlcnM6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYVBhcmFtZXRlcnMpLFxuICAgIHJ1bl9jb21tYW5kX3BhcmFtZXRlcnM6IHNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5ydW5Db21tYW5kUGFyYW1ldGVycyksXG4gICAgc3RlcF9mdW5jdGlvbnNfcGFyYW1ldGVyczogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0b21hdGlvblBhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dG9tYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5fYXV0b21hdGlvblBhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYW1iZGFQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYW1iZGFQYXJhbWV0ZXJzID0gdGhpcy5fbGFtYmRhUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3J1bkNvbW1hbmRQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydW5Db21tYW5kUGFyYW1ldGVycyA9IHRoaXMuX3J1bkNvbW1hbmRQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzID0gdGhpcy5fc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRvbWF0aW9uUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGFtYmRhUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcnVuQ29tbWFuZFBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9tYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hdXRvbWF0aW9uUGFyYW1ldGVycztcbiAgICAgIHRoaXMuX2xhbWJkYVBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmxhbWJkYVBhcmFtZXRlcnM7XG4gICAgICB0aGlzLl9ydW5Db21tYW5kUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUucnVuQ29tbWFuZFBhcmFtZXRlcnM7XG4gICAgICB0aGlzLl9zdGVwRnVuY3Rpb25zUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b21hdGlvbl9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9tYXRpb25QYXJhbWV0ZXJzID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0F1dG9tYXRpb25QYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF1dG9tYXRpb25fcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhdXRvbWF0aW9uUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b21hdGlvblBhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dEF1dG9tYXRpb25QYXJhbWV0ZXJzKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNBdXRvbWF0aW9uUGFyYW1ldGVycykge1xuICAgIHRoaXMuX2F1dG9tYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvbWF0aW9uUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9hdXRvbWF0aW9uUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvbWF0aW9uUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvbWF0aW9uUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbGFtYmRhX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFtYmRhUGFyYW1ldGVycyA9IG5ldyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNMYW1iZGFQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImxhbWJkYV9wYXJhbWV0ZXJzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxhbWJkYVBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYVBhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dExhbWJkYVBhcmFtZXRlcnModmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0xhbWJkYVBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9sYW1iZGFQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX2xhbWJkYVBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFtYmRhUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGFQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBydW5fY29tbWFuZF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bkNvbW1hbmRQYXJhbWV0ZXJzID0gbmV3IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc1J1bkNvbW1hbmRQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJ1bl9jb21tYW5kX3BhcmFtZXRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcnVuQ29tbWFuZFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bkNvbW1hbmRQYXJhbWV0ZXJzO1xuICB9XG4gIHB1YmxpYyBwdXRSdW5Db21tYW5kUGFyYW1ldGVycyh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzUnVuQ29tbWFuZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9ydW5Db21tYW5kUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UnVuQ29tbWFuZFBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fcnVuQ29tbWFuZFBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVuQ29tbWFuZFBhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVuQ29tbWFuZFBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHN0ZXBfZnVuY3Rpb25zX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnMgPSBuZXcgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzU3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3RlcF9mdW5jdGlvbnNfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzdGVwRnVuY3Rpb25zUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcEZ1bmN0aW9uc1BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dFN0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzKHZhbHVlOiBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNTdGVwRnVuY3Rpb25zUGFyYW1ldGVycykge1xuICAgIHRoaXMuX3N0ZXBGdW5jdGlvbnNQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGVwRnVuY3Rpb25zUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9zdGVwRnVuY3Rpb25zUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGVwRnVuY3Rpb25zUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGVwRnVuY3Rpb25zUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFza1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3NzbV9tYWludGVuYW5jZV93aW5kb3dfdGFzaycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW5jeSA9IGNvbmZpZy5tYXhDb25jdXJyZW5jeTtcbiAgICB0aGlzLl9tYXhFcnJvcnMgPSBjb25maWcubWF4RXJyb3JzO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wcmlvcml0eSA9IGNvbmZpZy5wcmlvcml0eTtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZUFybiA9IGNvbmZpZy5zZXJ2aWNlUm9sZUFybjtcbiAgICB0aGlzLl90YXNrQXJuID0gY29uZmlnLnRhc2tBcm47XG4gICAgdGhpcy5fdGFza1R5cGUgPSBjb25maWcudGFza1R5cGU7XG4gICAgdGhpcy5fd2luZG93SWQgPSBjb25maWcud2luZG93SWQ7XG4gICAgdGhpcy5fdGFyZ2V0cyA9IGNvbmZpZy50YXJnZXRzO1xuICAgIHRoaXMuX3Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRhc2tJbnZvY2F0aW9uUGFyYW1ldGVycztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtYXhfY29uY3VycmVuY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWF4Q29uY3VycmVuY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heENvbmN1cnJlbmN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X2NvbmN1cnJlbmN5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhDb25jdXJyZW5jeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4Q29uY3VycmVuY3kgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4Q29uY3VycmVuY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Q29uY3VycmVuY3k7XG4gIH1cblxuICAvLyBtYXhfZXJyb3JzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21heEVycm9ycz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4RXJyb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWF4X2Vycm9ycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4RXJyb3JzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhFcnJvcnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4RXJyb3JzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heEVycm9ycztcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHByaW9yaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByaW9yaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ByaW9yaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmlvcml0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmlvcml0eSgpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpb3JpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VydmljZVJvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmljZVJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmljZVJvbGVBcm4oKSB7XG4gICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VSb2xlQXJuO1xuICB9XG5cbiAgLy8gdGFza19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFza0Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFza0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rhc2tfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXNrQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0FybjtcbiAgfVxuXG4gIC8vIHRhc2tfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXNrVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFza1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXNrX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrVHlwZTtcbiAgfVxuXG4gIC8vIHdpbmRvd19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF93aW5kb3dJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2luZG93SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3aW5kb3dfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdpbmRvd0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93aW5kb3dJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3aW5kb3dJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93aW5kb3dJZDtcbiAgfVxuXG4gIC8vIHRhcmdldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFyZ2V0cz86IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNbXTsgXG4gIHB1YmxpYyBnZXQgdGFyZ2V0cygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFyZ2V0cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcmdldHModmFsdWU6IFNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNbXSkge1xuICAgIHRoaXMuX3RhcmdldHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXJnZXRzKCkge1xuICAgIHRoaXMuX3RhcmdldHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcbiAgfVxuXG4gIC8vIHRhc2tfaW52b2NhdGlvbl9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rhc2tJbnZvY2F0aW9uUGFyYW1ldGVycyA9IG5ldyBTc21NYWludGVuYW5jZVdpbmRvd1Rhc2tUYXNrSW52b2NhdGlvblBhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGFza19pbnZvY2F0aW9uX3BhcmFtZXRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrSW52b2NhdGlvblBhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dFRhc2tJbnZvY2F0aW9uUGFyYW1ldGVycyh2YWx1ZTogU3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXNrSW52b2NhdGlvblBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhc2tJbnZvY2F0aW9uUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrSW52b2NhdGlvblBhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIG1heF9jb25jdXJyZW5jeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWF4Q29uY3VycmVuY3kpLFxuICAgICAgbWF4X2Vycm9yczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWF4RXJyb3JzKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcHJpb3JpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3ByaW9yaXR5KSxcbiAgICAgIHNlcnZpY2Vfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NlcnZpY2VSb2xlQXJuKSxcbiAgICAgIHRhc2tfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXNrQXJuKSxcbiAgICAgIHRhc2tfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFza1R5cGUpLFxuICAgICAgd2luZG93X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl93aW5kb3dJZCksXG4gICAgICB0YXJnZXRzOiBjZGt0Zi5saXN0TWFwcGVyKHNzbU1haW50ZW5hbmNlV2luZG93VGFza1RhcmdldHNUb1RlcnJhZm9ybSkodGhpcy5fdGFyZ2V0cyksXG4gICAgICB0YXNrX2ludm9jYXRpb25fcGFyYW1ldGVyczogc3NtTWFpbnRlbmFuY2VXaW5kb3dUYXNrVGFza0ludm9jYXRpb25QYXJhbWV0ZXJzVG9UZXJyYWZvcm0odGhpcy5fdGFza0ludm9jYXRpb25QYXJhbWV0ZXJzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==