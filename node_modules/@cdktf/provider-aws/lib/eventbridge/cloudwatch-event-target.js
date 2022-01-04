"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudwatchEventTarget = exports.CloudwatchEventTargetSqsTargetOutputReference = exports.cloudwatchEventTargetSqsTargetToTerraform = exports.cloudwatchEventTargetRunCommandTargetsToTerraform = exports.CloudwatchEventTargetRetryPolicyOutputReference = exports.cloudwatchEventTargetRetryPolicyToTerraform = exports.CloudwatchEventTargetRedshiftTargetOutputReference = exports.cloudwatchEventTargetRedshiftTargetToTerraform = exports.CloudwatchEventTargetKinesisTargetOutputReference = exports.cloudwatchEventTargetKinesisTargetToTerraform = exports.CloudwatchEventTargetInputTransformerOutputReference = exports.cloudwatchEventTargetInputTransformerToTerraform = exports.CloudwatchEventTargetHttpTargetOutputReference = exports.cloudwatchEventTargetHttpTargetToTerraform = exports.CloudwatchEventTargetEcsTargetOutputReference = exports.cloudwatchEventTargetEcsTargetToTerraform = exports.cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform = exports.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference = exports.cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform = exports.CloudwatchEventTargetDeadLetterConfigOutputReference = exports.cloudwatchEventTargetDeadLetterConfigToTerraform = exports.CloudwatchEventTargetBatchTargetOutputReference = exports.cloudwatchEventTargetBatchTargetToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cloudwatchEventTargetBatchTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        array_size: cdktf.numberToTerraform(struct.arraySize),
        job_attempts: cdktf.numberToTerraform(struct.jobAttempts),
        job_definition: cdktf.stringToTerraform(struct.jobDefinition),
        job_name: cdktf.stringToTerraform(struct.jobName),
    };
}
exports.cloudwatchEventTargetBatchTargetToTerraform = cloudwatchEventTargetBatchTargetToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetBatchTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._arraySize) {
            hasAnyValues = true;
            internalValueResult.arraySize = this._arraySize;
        }
        if (this._jobAttempts) {
            hasAnyValues = true;
            internalValueResult.jobAttempts = this._jobAttempts;
        }
        if (this._jobDefinition) {
            hasAnyValues = true;
            internalValueResult.jobDefinition = this._jobDefinition;
        }
        if (this._jobName) {
            hasAnyValues = true;
            internalValueResult.jobName = this._jobName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arraySize = undefined;
            this._jobAttempts = undefined;
            this._jobDefinition = undefined;
            this._jobName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arraySize = value.arraySize;
            this._jobAttempts = value.jobAttempts;
            this._jobDefinition = value.jobDefinition;
            this._jobName = value.jobName;
        }
    }
    /**
     * @stability stable
     */
    get arraySize() {
        return this.getNumberAttribute('array_size');
    }
    /**
     * @stability stable
     */
    set arraySize(value) {
        this._arraySize = value;
    }
    /**
     * @stability stable
     */
    resetArraySize() {
        this._arraySize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get arraySizeInput() {
        return this._arraySize;
    }
    /**
     * @stability stable
     */
    get jobAttempts() {
        return this.getNumberAttribute('job_attempts');
    }
    /**
     * @stability stable
     */
    set jobAttempts(value) {
        this._jobAttempts = value;
    }
    /**
     * @stability stable
     */
    resetJobAttempts() {
        this._jobAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jobAttemptsInput() {
        return this._jobAttempts;
    }
    /**
     * @stability stable
     */
    get jobDefinition() {
        return this.getStringAttribute('job_definition');
    }
    /**
     * @stability stable
     */
    set jobDefinition(value) {
        this._jobDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jobDefinitionInput() {
        return this._jobDefinition;
    }
    /**
     * @stability stable
     */
    get jobName() {
        return this.getStringAttribute('job_name');
    }
    /**
     * @stability stable
     */
    set jobName(value) {
        this._jobName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jobNameInput() {
        return this._jobName;
    }
}
exports.CloudwatchEventTargetBatchTargetOutputReference = CloudwatchEventTargetBatchTargetOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetBatchTargetOutputReference[_a] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetBatchTargetOutputReference", version: "3.0.1" };
function cloudwatchEventTargetDeadLetterConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
    };
}
exports.cloudwatchEventTargetDeadLetterConfigToTerraform = cloudwatchEventTargetDeadLetterConfigToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetDeadLetterConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
        }
    }
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    set arn(value) {
        this._arn = value;
    }
    /**
     * @stability stable
     */
    resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get arnInput() {
        return this._arn;
    }
}
exports.CloudwatchEventTargetDeadLetterConfigOutputReference = CloudwatchEventTargetDeadLetterConfigOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetDeadLetterConfigOutputReference[_b] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetDeadLetterConfigOutputReference", version: "3.0.1" };
function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        assign_public_ip: cdktf.booleanToTerraform(struct.assignPublicIp),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnets),
    };
}
exports.cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform = cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._assignPublicIp) {
            hasAnyValues = true;
            internalValueResult.assignPublicIp = this._assignPublicIp;
        }
        if (this._securityGroups) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._assignPublicIp = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._assignPublicIp = value.assignPublicIp;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }
    /**
     * @stability stable
     */
    get assignPublicIp() {
        return this.getBooleanAttribute('assign_public_ip');
    }
    /**
     * @stability stable
     */
    set assignPublicIp(value) {
        this._assignPublicIp = value;
    }
    /**
     * @stability stable
     */
    resetAssignPublicIp() {
        this._assignPublicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get assignPublicIpInput() {
        return this._assignPublicIp;
    }
    /**
     * @stability stable
     */
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    /**
     * @stability stable
     */
    set securityGroups(value) {
        this._securityGroups = value;
    }
    /**
     * @stability stable
     */
    resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupsInput() {
        return this._securityGroups;
    }
    /**
     * @stability stable
     */
    get subnets() {
        return this.getListAttribute('subnets');
    }
    /**
     * @stability stable
     */
    set subnets(value) {
        this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetsInput() {
        return this._subnets;
    }
}
exports.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference = CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference", version: "3.0.1" };
function cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform = cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform;
function cloudwatchEventTargetEcsTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enable_ecs_managed_tags: cdktf.booleanToTerraform(struct.enableEcsManagedTags),
        enable_execute_command: cdktf.booleanToTerraform(struct.enableExecuteCommand),
        group: cdktf.stringToTerraform(struct.group),
        launch_type: cdktf.stringToTerraform(struct.launchType),
        platform_version: cdktf.stringToTerraform(struct.platformVersion),
        propagate_tags: cdktf.stringToTerraform(struct.propagateTags),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        task_count: cdktf.numberToTerraform(struct.taskCount),
        task_definition_arn: cdktf.stringToTerraform(struct.taskDefinitionArn),
        network_configuration: cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct.networkConfiguration),
        placement_constraint: cdktf.listMapper(cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform)(struct.placementConstraint),
    };
}
exports.cloudwatchEventTargetEcsTargetToTerraform = cloudwatchEventTargetEcsTargetToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetEcsTargetOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // network_configuration - computed: false, optional: true, required: false
        this._networkConfiguration = new CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference(this, "network_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _m, _o;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enableEcsManagedTags) {
            hasAnyValues = true;
            internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
        }
        if (this._enableExecuteCommand) {
            hasAnyValues = true;
            internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
        }
        if (this._group) {
            hasAnyValues = true;
            internalValueResult.group = this._group;
        }
        if (this._launchType) {
            hasAnyValues = true;
            internalValueResult.launchType = this._launchType;
        }
        if (this._platformVersion) {
            hasAnyValues = true;
            internalValueResult.platformVersion = this._platformVersion;
        }
        if (this._propagateTags) {
            hasAnyValues = true;
            internalValueResult.propagateTags = this._propagateTags;
        }
        if (this._tags) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
        }
        if (this._taskCount) {
            hasAnyValues = true;
            internalValueResult.taskCount = this._taskCount;
        }
        if (this._taskDefinitionArn) {
            hasAnyValues = true;
            internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
        }
        if ((_m = this._networkConfiguration) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.networkConfiguration = (_o = this._networkConfiguration) === null || _o === void 0 ? void 0 : _o.internalValue;
        }
        if (this._placementConstraint) {
            hasAnyValues = true;
            internalValueResult.placementConstraint = this._placementConstraint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enableEcsManagedTags = undefined;
            this._enableExecuteCommand = undefined;
            this._group = undefined;
            this._launchType = undefined;
            this._platformVersion = undefined;
            this._propagateTags = undefined;
            this._tags = undefined;
            this._taskCount = undefined;
            this._taskDefinitionArn = undefined;
            this._networkConfiguration.internalValue = undefined;
            this._placementConstraint = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enableEcsManagedTags = value.enableEcsManagedTags;
            this._enableExecuteCommand = value.enableExecuteCommand;
            this._group = value.group;
            this._launchType = value.launchType;
            this._platformVersion = value.platformVersion;
            this._propagateTags = value.propagateTags;
            this._tags = value.tags;
            this._taskCount = value.taskCount;
            this._taskDefinitionArn = value.taskDefinitionArn;
            this._networkConfiguration.internalValue = value.networkConfiguration;
            this._placementConstraint = value.placementConstraint;
        }
    }
    /**
     * @stability stable
     */
    get enableEcsManagedTags() {
        return this.getBooleanAttribute('enable_ecs_managed_tags');
    }
    /**
     * @stability stable
     */
    set enableEcsManagedTags(value) {
        this._enableEcsManagedTags = value;
    }
    /**
     * @stability stable
     */
    resetEnableEcsManagedTags() {
        this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableEcsManagedTagsInput() {
        return this._enableEcsManagedTags;
    }
    /**
     * @stability stable
     */
    get enableExecuteCommand() {
        return this.getBooleanAttribute('enable_execute_command');
    }
    /**
     * @stability stable
     */
    set enableExecuteCommand(value) {
        this._enableExecuteCommand = value;
    }
    /**
     * @stability stable
     */
    resetEnableExecuteCommand() {
        this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableExecuteCommandInput() {
        return this._enableExecuteCommand;
    }
    /**
     * @stability stable
     */
    get group() {
        return this.getStringAttribute('group');
    }
    /**
     * @stability stable
     */
    set group(value) {
        this._group = value;
    }
    /**
     * @stability stable
     */
    resetGroup() {
        this._group = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get groupInput() {
        return this._group;
    }
    /**
     * @stability stable
     */
    get launchType() {
        return this.getStringAttribute('launch_type');
    }
    /**
     * @stability stable
     */
    set launchType(value) {
        this._launchType = value;
    }
    /**
     * @stability stable
     */
    resetLaunchType() {
        this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTypeInput() {
        return this._launchType;
    }
    /**
     * @stability stable
     */
    get platformVersion() {
        return this.getStringAttribute('platform_version');
    }
    /**
     * @stability stable
     */
    set platformVersion(value) {
        this._platformVersion = value;
    }
    /**
     * @stability stable
     */
    resetPlatformVersion() {
        this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get platformVersionInput() {
        return this._platformVersion;
    }
    /**
     * @stability stable
     */
    get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    /**
     * @stability stable
     */
    set propagateTags(value) {
        this._propagateTags = value;
    }
    /**
     * @stability stable
     */
    resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get propagateTagsInput() {
        return this._propagateTags;
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
    get taskCount() {
        return this.getNumberAttribute('task_count');
    }
    /**
     * @stability stable
     */
    set taskCount(value) {
        this._taskCount = value;
    }
    /**
     * @stability stable
     */
    resetTaskCount() {
        this._taskCount = undefined;
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
    get taskDefinitionArn() {
        return this.getStringAttribute('task_definition_arn');
    }
    /**
     * @stability stable
     */
    set taskDefinitionArn(value) {
        this._taskDefinitionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskDefinitionArnInput() {
        return this._taskDefinitionArn;
    }
    /**
     * @stability stable
     */
    get networkConfiguration() {
        return this._networkConfiguration;
    }
    /**
     * @stability stable
     */
    putNetworkConfiguration(value) {
        this._networkConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get placementConstraint() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('placement_constraint');
    }
    /**
     * @stability stable
     */
    set placementConstraint(value) {
        this._placementConstraint = value;
    }
    /**
     * @stability stable
     */
    resetPlacementConstraint() {
        this._placementConstraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get placementConstraintInput() {
        return this._placementConstraint;
    }
}
exports.CloudwatchEventTargetEcsTargetOutputReference = CloudwatchEventTargetEcsTargetOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetEcsTargetOutputReference[_d] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetEcsTargetOutputReference", version: "3.0.1" };
function cloudwatchEventTargetHttpTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.headerParameters),
        path_parameter_values: cdktf.listMapper(cdktf.stringToTerraform)(struct.pathParameterValues),
        query_string_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.queryStringParameters),
    };
}
exports.cloudwatchEventTargetHttpTargetToTerraform = cloudwatchEventTargetHttpTargetToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetHttpTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._headerParameters) {
            hasAnyValues = true;
            internalValueResult.headerParameters = this._headerParameters;
        }
        if (this._pathParameterValues) {
            hasAnyValues = true;
            internalValueResult.pathParameterValues = this._pathParameterValues;
        }
        if (this._queryStringParameters) {
            hasAnyValues = true;
            internalValueResult.queryStringParameters = this._queryStringParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._headerParameters = undefined;
            this._pathParameterValues = undefined;
            this._queryStringParameters = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._headerParameters = value.headerParameters;
            this._pathParameterValues = value.pathParameterValues;
            this._queryStringParameters = value.queryStringParameters;
        }
    }
    /**
     * @stability stable
     */
    get headerParameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('header_parameters');
    }
    /**
     * @stability stable
     */
    set headerParameters(value) {
        this._headerParameters = value;
    }
    /**
     * @stability stable
     */
    resetHeaderParameters() {
        this._headerParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headerParametersInput() {
        return this._headerParameters;
    }
    /**
     * @stability stable
     */
    get pathParameterValues() {
        return this.getListAttribute('path_parameter_values');
    }
    /**
     * @stability stable
     */
    set pathParameterValues(value) {
        this._pathParameterValues = value;
    }
    /**
     * @stability stable
     */
    resetPathParameterValues() {
        this._pathParameterValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pathParameterValuesInput() {
        return this._pathParameterValues;
    }
    /**
     * @stability stable
     */
    get queryStringParameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('query_string_parameters');
    }
    /**
     * @stability stable
     */
    set queryStringParameters(value) {
        this._queryStringParameters = value;
    }
    /**
     * @stability stable
     */
    resetQueryStringParameters() {
        this._queryStringParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get queryStringParametersInput() {
        return this._queryStringParameters;
    }
}
exports.CloudwatchEventTargetHttpTargetOutputReference = CloudwatchEventTargetHttpTargetOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetHttpTargetOutputReference[_e] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetHttpTargetOutputReference", version: "3.0.1" };
function cloudwatchEventTargetInputTransformerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input_paths: cdktf.hashMapper(cdktf.anyToTerraform)(struct.inputPaths),
        input_template: cdktf.stringToTerraform(struct.inputTemplate),
    };
}
exports.cloudwatchEventTargetInputTransformerToTerraform = cloudwatchEventTargetInputTransformerToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetInputTransformerOutputReference extends cdktf.ComplexObject {
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
        if (this._inputPaths) {
            hasAnyValues = true;
            internalValueResult.inputPaths = this._inputPaths;
        }
        if (this._inputTemplate) {
            hasAnyValues = true;
            internalValueResult.inputTemplate = this._inputTemplate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._inputPaths = undefined;
            this._inputTemplate = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._inputPaths = value.inputPaths;
            this._inputTemplate = value.inputTemplate;
        }
    }
    /**
     * @stability stable
     */
    get inputPaths() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('input_paths');
    }
    /**
     * @stability stable
     */
    set inputPaths(value) {
        this._inputPaths = value;
    }
    /**
     * @stability stable
     */
    resetInputPaths() {
        this._inputPaths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputPathsInput() {
        return this._inputPaths;
    }
    /**
     * @stability stable
     */
    get inputTemplate() {
        return this.getStringAttribute('input_template');
    }
    /**
     * @stability stable
     */
    set inputTemplate(value) {
        this._inputTemplate = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputTemplateInput() {
        return this._inputTemplate;
    }
}
exports.CloudwatchEventTargetInputTransformerOutputReference = CloudwatchEventTargetInputTransformerOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetInputTransformerOutputReference[_f] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetInputTransformerOutputReference", version: "3.0.1" };
function cloudwatchEventTargetKinesisTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        partition_key_path: cdktf.stringToTerraform(struct.partitionKeyPath),
    };
}
exports.cloudwatchEventTargetKinesisTargetToTerraform = cloudwatchEventTargetKinesisTargetToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetKinesisTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._partitionKeyPath) {
            hasAnyValues = true;
            internalValueResult.partitionKeyPath = this._partitionKeyPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._partitionKeyPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._partitionKeyPath = value.partitionKeyPath;
        }
    }
    /**
     * @stability stable
     */
    get partitionKeyPath() {
        return this.getStringAttribute('partition_key_path');
    }
    /**
     * @stability stable
     */
    set partitionKeyPath(value) {
        this._partitionKeyPath = value;
    }
    /**
     * @stability stable
     */
    resetPartitionKeyPath() {
        this._partitionKeyPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionKeyPathInput() {
        return this._partitionKeyPath;
    }
}
exports.CloudwatchEventTargetKinesisTargetOutputReference = CloudwatchEventTargetKinesisTargetOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetKinesisTargetOutputReference[_g] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetKinesisTargetOutputReference", version: "3.0.1" };
function cloudwatchEventTargetRedshiftTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        database: cdktf.stringToTerraform(struct.database),
        db_user: cdktf.stringToTerraform(struct.dbUser),
        secrets_manager_arn: cdktf.stringToTerraform(struct.secretsManagerArn),
        sql: cdktf.stringToTerraform(struct.sql),
        statement_name: cdktf.stringToTerraform(struct.statementName),
        with_event: cdktf.booleanToTerraform(struct.withEvent),
    };
}
exports.cloudwatchEventTargetRedshiftTargetToTerraform = cloudwatchEventTargetRedshiftTargetToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetRedshiftTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._database) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._dbUser) {
            hasAnyValues = true;
            internalValueResult.dbUser = this._dbUser;
        }
        if (this._secretsManagerArn) {
            hasAnyValues = true;
            internalValueResult.secretsManagerArn = this._secretsManagerArn;
        }
        if (this._sql) {
            hasAnyValues = true;
            internalValueResult.sql = this._sql;
        }
        if (this._statementName) {
            hasAnyValues = true;
            internalValueResult.statementName = this._statementName;
        }
        if (this._withEvent) {
            hasAnyValues = true;
            internalValueResult.withEvent = this._withEvent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._database = undefined;
            this._dbUser = undefined;
            this._secretsManagerArn = undefined;
            this._sql = undefined;
            this._statementName = undefined;
            this._withEvent = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._database = value.database;
            this._dbUser = value.dbUser;
            this._secretsManagerArn = value.secretsManagerArn;
            this._sql = value.sql;
            this._statementName = value.statementName;
            this._withEvent = value.withEvent;
        }
    }
    /**
     * @stability stable
     */
    get database() {
        return this.getStringAttribute('database');
    }
    /**
     * @stability stable
     */
    set database(value) {
        this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseInput() {
        return this._database;
    }
    /**
     * @stability stable
     */
    get dbUser() {
        return this.getStringAttribute('db_user');
    }
    /**
     * @stability stable
     */
    set dbUser(value) {
        this._dbUser = value;
    }
    /**
     * @stability stable
     */
    resetDbUser() {
        this._dbUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dbUserInput() {
        return this._dbUser;
    }
    /**
     * @stability stable
     */
    get secretsManagerArn() {
        return this.getStringAttribute('secrets_manager_arn');
    }
    /**
     * @stability stable
     */
    set secretsManagerArn(value) {
        this._secretsManagerArn = value;
    }
    /**
     * @stability stable
     */
    resetSecretsManagerArn() {
        this._secretsManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secretsManagerArnInput() {
        return this._secretsManagerArn;
    }
    /**
     * @stability stable
     */
    get sql() {
        return this.getStringAttribute('sql');
    }
    /**
     * @stability stable
     */
    set sql(value) {
        this._sql = value;
    }
    /**
     * @stability stable
     */
    resetSql() {
        this._sql = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqlInput() {
        return this._sql;
    }
    /**
     * @stability stable
     */
    get statementName() {
        return this.getStringAttribute('statement_name');
    }
    /**
     * @stability stable
     */
    set statementName(value) {
        this._statementName = value;
    }
    /**
     * @stability stable
     */
    resetStatementName() {
        this._statementName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statementNameInput() {
        return this._statementName;
    }
    /**
     * @stability stable
     */
    get withEvent() {
        return this.getBooleanAttribute('with_event');
    }
    /**
     * @stability stable
     */
    set withEvent(value) {
        this._withEvent = value;
    }
    /**
     * @stability stable
     */
    resetWithEvent() {
        this._withEvent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get withEventInput() {
        return this._withEvent;
    }
}
exports.CloudwatchEventTargetRedshiftTargetOutputReference = CloudwatchEventTargetRedshiftTargetOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetRedshiftTargetOutputReference[_h] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetRedshiftTargetOutputReference", version: "3.0.1" };
function cloudwatchEventTargetRetryPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        maximum_event_age_in_seconds: cdktf.numberToTerraform(struct.maximumEventAgeInSeconds),
        maximum_retry_attempts: cdktf.numberToTerraform(struct.maximumRetryAttempts),
    };
}
exports.cloudwatchEventTargetRetryPolicyToTerraform = cloudwatchEventTargetRetryPolicyToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetRetryPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._maximumEventAgeInSeconds) {
            hasAnyValues = true;
            internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
        }
        if (this._maximumRetryAttempts) {
            hasAnyValues = true;
            internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maximumEventAgeInSeconds = undefined;
            this._maximumRetryAttempts = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
            this._maximumRetryAttempts = value.maximumRetryAttempts;
        }
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
}
exports.CloudwatchEventTargetRetryPolicyOutputReference = CloudwatchEventTargetRetryPolicyOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetRetryPolicyOutputReference[_j] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetRetryPolicyOutputReference", version: "3.0.1" };
function cloudwatchEventTargetRunCommandTargetsToTerraform(struct) {
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
exports.cloudwatchEventTargetRunCommandTargetsToTerraform = cloudwatchEventTargetRunCommandTargetsToTerraform;
function cloudwatchEventTargetSqsTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        message_group_id: cdktf.stringToTerraform(struct.messageGroupId),
    };
}
exports.cloudwatchEventTargetSqsTargetToTerraform = cloudwatchEventTargetSqsTargetToTerraform;
/**
 * @stability stable
 */
class CloudwatchEventTargetSqsTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._messageGroupId) {
            hasAnyValues = true;
            internalValueResult.messageGroupId = this._messageGroupId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._messageGroupId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._messageGroupId = value.messageGroupId;
        }
    }
    /**
     * @stability stable
     */
    get messageGroupId() {
        return this.getStringAttribute('message_group_id');
    }
    /**
     * @stability stable
     */
    set messageGroupId(value) {
        this._messageGroupId = value;
    }
    /**
     * @stability stable
     */
    resetMessageGroupId() {
        this._messageGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageGroupIdInput() {
        return this._messageGroupId;
    }
}
exports.CloudwatchEventTargetSqsTargetOutputReference = CloudwatchEventTargetSqsTargetOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CloudwatchEventTargetSqsTargetOutputReference[_k] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTargetSqsTargetOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target}.
 *
 * @stability stable
 */
class CloudwatchEventTarget extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // batch_target - computed: false, optional: true, required: false
        this._batchTarget = new CloudwatchEventTargetBatchTargetOutputReference(this, "batch_target", true);
        // dead_letter_config - computed: false, optional: true, required: false
        this._deadLetterConfig = new CloudwatchEventTargetDeadLetterConfigOutputReference(this, "dead_letter_config", true);
        // ecs_target - computed: false, optional: true, required: false
        this._ecsTarget = new CloudwatchEventTargetEcsTargetOutputReference(this, "ecs_target", true);
        // http_target - computed: false, optional: true, required: false
        this._httpTarget = new CloudwatchEventTargetHttpTargetOutputReference(this, "http_target", true);
        // input_transformer - computed: false, optional: true, required: false
        this._inputTransformer = new CloudwatchEventTargetInputTransformerOutputReference(this, "input_transformer", true);
        // kinesis_target - computed: false, optional: true, required: false
        this._kinesisTarget = new CloudwatchEventTargetKinesisTargetOutputReference(this, "kinesis_target", true);
        // redshift_target - computed: false, optional: true, required: false
        this._redshiftTarget = new CloudwatchEventTargetRedshiftTargetOutputReference(this, "redshift_target", true);
        // retry_policy - computed: false, optional: true, required: false
        this._retryPolicy = new CloudwatchEventTargetRetryPolicyOutputReference(this, "retry_policy", true);
        // sqs_target - computed: false, optional: true, required: false
        this._sqsTarget = new CloudwatchEventTargetSqsTargetOutputReference(this, "sqs_target", true);
        this._arn = config.arn;
        this._eventBusName = config.eventBusName;
        this._input = config.input;
        this._inputPath = config.inputPath;
        this._roleArn = config.roleArn;
        this._rule = config.rule;
        this._targetId = config.targetId;
        this._batchTarget.internalValue = config.batchTarget;
        this._deadLetterConfig.internalValue = config.deadLetterConfig;
        this._ecsTarget.internalValue = config.ecsTarget;
        this._httpTarget.internalValue = config.httpTarget;
        this._inputTransformer.internalValue = config.inputTransformer;
        this._kinesisTarget.internalValue = config.kinesisTarget;
        this._redshiftTarget.internalValue = config.redshiftTarget;
        this._retryPolicy.internalValue = config.retryPolicy;
        this._runCommandTargets = config.runCommandTargets;
        this._sqsTarget.internalValue = config.sqsTarget;
    }
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get arnInput() {
        return this._arn;
    }
    /**
     * @stability stable
     */
    get eventBusName() {
        return this.getStringAttribute('event_bus_name');
    }
    /**
     * @stability stable
     */
    set eventBusName(value) {
        this._eventBusName = value;
    }
    /**
     * @stability stable
     */
    resetEventBusName() {
        this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventBusNameInput() {
        return this._eventBusName;
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
    get inputPath() {
        return this.getStringAttribute('input_path');
    }
    /**
     * @stability stable
     */
    set inputPath(value) {
        this._inputPath = value;
    }
    /**
     * @stability stable
     */
    resetInputPath() {
        this._inputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputPathInput() {
        return this._inputPath;
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
    /**
     * @stability stable
     */
    resetRoleArn() {
        this._roleArn = undefined;
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
    get rule() {
        return this.getStringAttribute('rule');
    }
    /**
     * @stability stable
     */
    set rule(value) {
        this._rule = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ruleInput() {
        return this._rule;
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
    /**
     * @stability stable
     */
    resetTargetId() {
        this._targetId = undefined;
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
    get batchTarget() {
        return this._batchTarget;
    }
    /**
     * @stability stable
     */
    putBatchTarget(value) {
        this._batchTarget.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetBatchTarget() {
        this._batchTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get batchTargetInput() {
        return this._batchTarget.internalValue;
    }
    /**
     * @stability stable
     */
    get deadLetterConfig() {
        return this._deadLetterConfig;
    }
    /**
     * @stability stable
     */
    putDeadLetterConfig(value) {
        this._deadLetterConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDeadLetterConfig() {
        this._deadLetterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deadLetterConfigInput() {
        return this._deadLetterConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get ecsTarget() {
        return this._ecsTarget;
    }
    /**
     * @stability stable
     */
    putEcsTarget(value) {
        this._ecsTarget.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEcsTarget() {
        this._ecsTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ecsTargetInput() {
        return this._ecsTarget.internalValue;
    }
    /**
     * @stability stable
     */
    get httpTarget() {
        return this._httpTarget;
    }
    /**
     * @stability stable
     */
    putHttpTarget(value) {
        this._httpTarget.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttpTarget() {
        this._httpTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpTargetInput() {
        return this._httpTarget.internalValue;
    }
    /**
     * @stability stable
     */
    get inputTransformer() {
        return this._inputTransformer;
    }
    /**
     * @stability stable
     */
    putInputTransformer(value) {
        this._inputTransformer.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInputTransformer() {
        this._inputTransformer.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputTransformerInput() {
        return this._inputTransformer.internalValue;
    }
    /**
     * @stability stable
     */
    get kinesisTarget() {
        return this._kinesisTarget;
    }
    /**
     * @stability stable
     */
    putKinesisTarget(value) {
        this._kinesisTarget.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisTarget() {
        this._kinesisTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisTargetInput() {
        return this._kinesisTarget.internalValue;
    }
    /**
     * @stability stable
     */
    get redshiftTarget() {
        return this._redshiftTarget;
    }
    /**
     * @stability stable
     */
    putRedshiftTarget(value) {
        this._redshiftTarget.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRedshiftTarget() {
        this._redshiftTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get redshiftTargetInput() {
        return this._redshiftTarget.internalValue;
    }
    /**
     * @stability stable
     */
    get retryPolicy() {
        return this._retryPolicy;
    }
    /**
     * @stability stable
     */
    putRetryPolicy(value) {
        this._retryPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRetryPolicy() {
        this._retryPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryPolicyInput() {
        return this._retryPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get runCommandTargets() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('run_command_targets');
    }
    /**
     * @stability stable
     */
    set runCommandTargets(value) {
        this._runCommandTargets = value;
    }
    /**
     * @stability stable
     */
    resetRunCommandTargets() {
        this._runCommandTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get runCommandTargetsInput() {
        return this._runCommandTargets;
    }
    /**
     * @stability stable
     */
    get sqsTarget() {
        return this._sqsTarget;
    }
    /**
     * @stability stable
     */
    putSqsTarget(value) {
        this._sqsTarget.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSqsTarget() {
        this._sqsTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqsTargetInput() {
        return this._sqsTarget.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            event_bus_name: cdktf.stringToTerraform(this._eventBusName),
            input: cdktf.stringToTerraform(this._input),
            input_path: cdktf.stringToTerraform(this._inputPath),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            rule: cdktf.stringToTerraform(this._rule),
            target_id: cdktf.stringToTerraform(this._targetId),
            batch_target: cloudwatchEventTargetBatchTargetToTerraform(this._batchTarget.internalValue),
            dead_letter_config: cloudwatchEventTargetDeadLetterConfigToTerraform(this._deadLetterConfig.internalValue),
            ecs_target: cloudwatchEventTargetEcsTargetToTerraform(this._ecsTarget.internalValue),
            http_target: cloudwatchEventTargetHttpTargetToTerraform(this._httpTarget.internalValue),
            input_transformer: cloudwatchEventTargetInputTransformerToTerraform(this._inputTransformer.internalValue),
            kinesis_target: cloudwatchEventTargetKinesisTargetToTerraform(this._kinesisTarget.internalValue),
            redshift_target: cloudwatchEventTargetRedshiftTargetToTerraform(this._redshiftTarget.internalValue),
            retry_policy: cloudwatchEventTargetRetryPolicyToTerraform(this._retryPolicy.internalValue),
            run_command_targets: cdktf.listMapper(cloudwatchEventTargetRunCommandTargetsToTerraform)(this._runCommandTargets),
            sqs_target: cloudwatchEventTargetSqsTargetToTerraform(this._sqsTarget.internalValue),
        };
    }
}
exports.CloudwatchEventTarget = CloudwatchEventTarget;
_l = JSII_RTTI_SYMBOL_1;
CloudwatchEventTarget[_l] = { fqn: "@cdktf/provider-aws.eventbridge.CloudwatchEventTarget", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudwatchEventTarget.tfResourceType = "aws_cloudwatch_event_target";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWR3YXRjaC1ldmVudC10YXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRicmlkZ2UvY2xvdWR3YXRjaC1ldmVudC10YXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrRC9CLFNBQWdCLDJDQUEyQyxDQUFDLE1BQTJGO0lBQ3JKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ25ELENBQUE7QUFDSCxDQUFDO0FBWEQsa0dBV0M7Ozs7QUFFRCxNQUFhLCtDQUFnRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXRGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBbUQ7UUFDMUUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQzNCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7O0FBdkdILDBHQXdHQzs7O0FBTUQsU0FBZ0IsZ0RBQWdELENBQUMsTUFBcUc7SUFDcEssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7S0FDMUMsQ0FBQTtBQUNILENBQUM7QUFSRCw0R0FRQzs7OztBQUVELE1BQWEsb0RBQXFELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXdEO1FBQy9FLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDRCxJQUFXLEdBQUcsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7O0FBM0NILG9IQTRDQzs7O0FBVUQsU0FBZ0IsNkRBQTZELENBQUMsTUFBK0g7SUFDM00sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNsRSxlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2xGLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFWRCxzSUFVQzs7OztBQUVELE1BQWEsaUVBQWtFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJeEcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUU7UUFDNUYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQzNCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQVEsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBa0M7UUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWU7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFlO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOztBQXBGSCw4SUFxRkM7OztBQVFELFNBQWdCLDREQUE0RCxDQUFDLE1BQTBEO0lBQ3JJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVRELG9JQVNDO0FBMkJELFNBQWdCLHlDQUF5QyxDQUFDLE1BQXVGO0lBQy9JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUMvRSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzlFLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbEUsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzFELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZFLHFCQUFxQixFQUFFLDZEQUE2RCxDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUNsSCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDREQUE0RCxDQUFDLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQ2xJLENBQUE7QUFDSCxDQUFDO0FBbEJELDhGQWtCQzs7OztBQUVELE1BQWEsNkNBQThDLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJcEYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBc085QiwyRUFBMkU7UUFDbkUsMEJBQXFCLEdBQUcsSUFBSSxpRUFBaUUsQ0FBQyxJQUFXLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFsT2xKLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDdkU7UUFDRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUN2RTtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxVQUFJLElBQUksQ0FBQyxxQkFBcUIsMENBQUUsYUFBYSxFQUFFO1lBQzdDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLFNBQUcsSUFBSSxDQUFDLHFCQUFxQiwwQ0FBRSxhQUFhLENBQUM7U0FDdEY7UUFDRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUNyRTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFpRDtRQUN4RSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNyRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1NBQ3ZDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1lBQ3hELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1lBQ3RFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQVEsQ0FBQztJQUNwRSxDQUFDOzs7O0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFrQztRQUNoRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBUSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQWtDO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQW9EO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sdUJBQXVCLENBQUMsS0FBeUQ7UUFDdEYsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHNCQUFzQixDQUFRLENBQUM7SUFDdkUsQ0FBQzs7OztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBMEQ7UUFDdkYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOztBQXRRSCxzR0F1UUM7OztBQVVELFNBQWdCLDBDQUEwQyxDQUFDLE1BQXlGO0lBQ2xKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ25GLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO1FBQzdGLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUMvRixDQUFBO0FBQ0gsQ0FBQztBQVZELGdHQVVDOzs7O0FBRUQsTUFBYSw4Q0FBK0MsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlyRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztTQUN6RTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFrRDtRQUN6RSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7U0FDekM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDaEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztZQUN0RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBUSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQW9EO1FBQzlFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBZTtRQUM1QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMseUJBQXlCLENBQVEsQ0FBQztJQUMxRSxDQUFDOzs7O0lBQ0QsSUFBVyxxQkFBcUIsQ0FBQyxLQUFvRDtRQUNuRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDTSwwQkFBMEI7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7O0FBekZILHdHQTBGQzs7O0FBUUQsU0FBZ0IsZ0RBQWdELENBQUMsTUFBcUc7SUFDcEssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDL0QsQ0FBQTtBQUNILENBQUM7QUFURCw0R0FTQzs7OztBQUVELE1BQWEsb0RBQXFELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXdEO1FBQy9FLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBUSxDQUFDO0lBQzlELENBQUM7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFvRDtRQUN4RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O0FBL0RILG9IQWdFQzs7O0FBTUQsU0FBZ0IsNkNBQTZDLENBQUMsTUFBK0Y7SUFDM0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO0tBQ3RFLENBQUE7QUFDSCxDQUFDO0FBUkQsc0dBUUM7Ozs7QUFFRCxNQUFhLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXhGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0Q7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUQ7UUFDNUUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7U0FDcEM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7QUEzQ0gsOEdBNENDOzs7QUFnQkQsU0FBZ0IsOENBQThDLENBQUMsTUFBaUc7SUFDOUosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2hELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkUsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDeEQsQ0FBQTtBQUNILENBQUM7QUFiRCx3R0FhQzs7OztBQUVELE1BQWEsa0RBQW1ELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJekYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFzRDtRQUM3RSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDRCxJQUFXLEdBQUcsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWtDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztBQXRKSCxnSEF1SkM7OztBQVFELFNBQWdCLDJDQUEyQyxDQUFDLE1BQTJGO0lBQ3JKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUN2RixzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO0tBQzlFLENBQUE7QUFDSCxDQUFDO0FBVEQsa0dBU0M7Ozs7QUFFRCxNQUFhLCtDQUFnRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXRGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUM7U0FDL0U7UUFDRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUN2RTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFtRDtRQUMxRSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQztZQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1NBQ3hDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1lBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7U0FDekQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBQ0QsSUFBVyx3QkFBd0IsQ0FBQyxLQUFhO1FBQy9DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztJQUNNLDZCQUE2QjtRQUNsQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBYTtRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7O0FBakVILDBHQWtFQzs7O0FBUUQsU0FBZ0IsaURBQWlELENBQUMsTUFBK0M7SUFDL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxHQUFHLENBQUM7UUFDekMsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQVRELDhHQVNDO0FBT0QsU0FBZ0IseUNBQXlDLENBQUMsTUFBdUY7SUFDL0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQVJELDhGQVFDOzs7O0FBRUQsTUFBYSw2Q0FBOEMsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlwRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWlEO1FBQ3hFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztTQUNsQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7QUEzQ0gsc0dBNENDOzs7Ozs7OztBQUdELE1BQWEscUJBQXNCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9oRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBbUM7UUFDbEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw2QkFBNkI7WUFDcEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQXVJTCxrRUFBa0U7UUFDMUQsaUJBQVksR0FBRyxJQUFJLCtDQUErQyxDQUFDLElBQVcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlOUcsd0VBQXdFO1FBQ2hFLHNCQUFpQixHQUFHLElBQUksb0RBQW9ELENBQUMsSUFBVyxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZTlILGdFQUFnRTtRQUN4RCxlQUFVLEdBQUcsSUFBSSw2Q0FBNkMsQ0FBQyxJQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZXhHLGlFQUFpRTtRQUN6RCxnQkFBVyxHQUFHLElBQUksOENBQThDLENBQUMsSUFBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWUzRyx1RUFBdUU7UUFDL0Qsc0JBQWlCLEdBQUcsSUFBSSxvREFBb0QsQ0FBQyxJQUFXLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlN0gsb0VBQW9FO1FBQzVELG1CQUFjLEdBQUcsSUFBSSxpREFBaUQsQ0FBQyxJQUFXLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlcEgscUVBQXFFO1FBQzdELG9CQUFlLEdBQUcsSUFBSSxrREFBa0QsQ0FBQyxJQUFXLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFldkgsa0VBQWtFO1FBQzFELGlCQUFZLEdBQUcsSUFBSSwrQ0FBK0MsQ0FBQyxJQUFXLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZ0M5RyxnRUFBZ0U7UUFDeEQsZUFBVSxHQUFHLElBQUksNkNBQTZDLENBQUMsSUFBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQXhSdEcsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBUUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNELElBQVcsR0FBRyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGNBQWMsQ0FBQyxLQUF1QztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sbUJBQW1CLENBQUMsS0FBNEM7UUFDckUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBQ00sWUFBWSxDQUFDLEtBQXFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDNUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sYUFBYSxDQUFDLEtBQXNDO1FBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUNNLG1CQUFtQixDQUFDLEtBQTRDO1FBQ3JFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7SUFDOUMsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGdCQUFnQixDQUFDLEtBQXlDO1FBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7SUFDM0MsQ0FBQzs7OztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGlCQUFpQixDQUFDLEtBQTBDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGNBQWMsQ0FBQyxLQUF1QztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMscUJBQXFCLENBQVEsQ0FBQztJQUN0RSxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUErQztRQUMxRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDTSxZQUFZLENBQUMsS0FBcUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDM0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxZQUFZLEVBQUUsMkNBQTJDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDMUYsa0JBQWtCLEVBQUUsZ0RBQWdELENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUMxRyxVQUFVLEVBQUUseUNBQXlDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDcEYsV0FBVyxFQUFFLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQ3ZGLGlCQUFpQixFQUFFLGdEQUFnRCxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDekcsY0FBYyxFQUFFLDZDQUE2QyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1lBQ2hHLGVBQWUsRUFBRSw4Q0FBOEMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztZQUNuRyxZQUFZLEVBQUUsMkNBQTJDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDMUYsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNqSCxVQUFVLEVBQUUseUNBQXlDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7U0FDckYsQ0FBQztJQUNKLENBQUM7O0FBdFZILHNEQXVWQzs7O0FBclZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csb0NBQWMsR0FBVyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRUYXJnZXRDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50QnVzTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5wdXRQYXRoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhcmdldElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhdGNoVGFyZ2V0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0QmF0Y2hUYXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVhZExldHRlckNvbmZpZz86IENsb3Vkd2F0Y2hFdmVudFRhcmdldERlYWRMZXR0ZXJDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWNzVGFyZ2V0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBUYXJnZXQ/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRIdHRwVGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlucHV0VHJhbnNmb3JtZXI/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRJbnB1dFRyYW5zZm9ybWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtpbmVzaXNUYXJnZXQ/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRLaW5lc2lzVGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlZHNoaWZ0VGFyZ2V0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmVkc2hpZnRUYXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmV0cnlQb2xpY3k/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRSZXRyeVBvbGljeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBydW5Db21tYW5kVGFyZ2V0cz86IENsb3Vkd2F0Y2hFdmVudFRhcmdldFJ1bkNvbW1hbmRUYXJnZXRzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FzVGFyZ2V0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0U3FzVGFyZ2V0O1xufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRUYXJnZXRCYXRjaFRhcmdldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFycmF5U2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpvYkF0dGVtcHRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpvYkRlZmluaXRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqb2JOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRUYXJnZXRCYXRjaFRhcmdldFRvVGVycmFmb3JtKHN0cnVjdD86IENsb3Vkd2F0Y2hFdmVudFRhcmdldEJhdGNoVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0QmF0Y2hUYXJnZXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcnJheV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmFycmF5U2l6ZSksXG4gICAgam9iX2F0dGVtcHRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmpvYkF0dGVtcHRzKSxcbiAgICBqb2JfZGVmaW5pdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5qb2JEZWZpbml0aW9uKSxcbiAgICBqb2JfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5qb2JOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0QmF0Y2hUYXJnZXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0QmF0Y2hUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FycmF5U2l6ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXJyYXlTaXplID0gdGhpcy5fYXJyYXlTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fam9iQXR0ZW1wdHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmpvYkF0dGVtcHRzID0gdGhpcy5fam9iQXR0ZW1wdHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9qb2JEZWZpbml0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qb2JEZWZpbml0aW9uID0gdGhpcy5fam9iRGVmaW5pdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2pvYk5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmpvYk5hbWUgPSB0aGlzLl9qb2JOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0QmF0Y2hUYXJnZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hcnJheVNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9qb2JBdHRlbXB0cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2pvYkRlZmluaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9qb2JOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcnJheVNpemUgPSB2YWx1ZS5hcnJheVNpemU7XG4gICAgICB0aGlzLl9qb2JBdHRlbXB0cyA9IHZhbHVlLmpvYkF0dGVtcHRzO1xuICAgICAgdGhpcy5fam9iRGVmaW5pdGlvbiA9IHZhbHVlLmpvYkRlZmluaXRpb247XG4gICAgICB0aGlzLl9qb2JOYW1lID0gdmFsdWUuam9iTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBhcnJheV9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FycmF5U2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYXJyYXlTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYXJyYXlfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXJyYXlTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hcnJheVNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcnJheVNpemUoKSB7XG4gICAgdGhpcy5fYXJyYXlTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcnJheVNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyYXlTaXplO1xuICB9XG5cbiAgLy8gam9iX2F0dGVtcHRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2pvYkF0dGVtcHRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBqb2JBdHRlbXB0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2pvYl9hdHRlbXB0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgam9iQXR0ZW1wdHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2pvYkF0dGVtcHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Sm9iQXR0ZW1wdHMoKSB7XG4gICAgdGhpcy5fam9iQXR0ZW1wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpvYkF0dGVtcHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pvYkF0dGVtcHRzO1xuICB9XG5cbiAgLy8gam9iX2RlZmluaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfam9iRGVmaW5pdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgam9iRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2pvYl9kZWZpbml0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBqb2JEZWZpbml0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9qb2JEZWZpbml0aW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpvYkRlZmluaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fam9iRGVmaW5pdGlvbjtcbiAgfVxuXG4gIC8vIGpvYl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2pvYk5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGpvYk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgam9iTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fam9iTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqb2JOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pvYk5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RGVhZExldHRlckNvbmZpZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRUYXJnZXREZWFkTGV0dGVyQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RGVhZExldHRlckNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENsb3Vkd2F0Y2hFdmVudFRhcmdldERlYWRMZXR0ZXJDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RGVhZExldHRlckNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXREZWFkTGV0dGVyQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFybiA9IHRoaXMuX2FybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldERlYWRMZXR0ZXJDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FybiA9IHZhbHVlLmFybjtcbiAgICB9XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXJuKCkge1xuICAgIHRoaXMuX2FybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRUYXJnZXRFY3NUYXJnZXROZXR3b3JrQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFzc2lnblB1YmxpY0lwPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0czogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRUYXJnZXRFY3NUYXJnZXROZXR3b3JrQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldE5ldHdvcmtDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0TmV0d29ya0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhc3NpZ25fcHVibGljX2lwOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NpZ25QdWJsaWNJcCksXG4gICAgc2VjdXJpdHlfZ3JvdXBzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBzKSxcbiAgICBzdWJuZXRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoRXZlbnRUYXJnZXRFY3NUYXJnZXROZXR3b3JrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRFY3NUYXJnZXROZXR3b3JrQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXNzaWduUHVibGljSXApIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFzc2lnblB1YmxpY0lwID0gdGhpcy5fYXNzaWduUHVibGljSXA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWN1cml0eUdyb3Vwcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VjdXJpdHlHcm91cHMgPSB0aGlzLl9zZWN1cml0eUdyb3VwcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1Ym5ldHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN1Ym5ldHMgPSB0aGlzLl9zdWJuZXRzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0TmV0d29ya0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hc3NpZ25QdWJsaWNJcCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VibmV0cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXNzaWduUHVibGljSXAgPSB2YWx1ZS5hc3NpZ25QdWJsaWNJcDtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdmFsdWUuc2VjdXJpdHlHcm91cHM7XG4gICAgICB0aGlzLl9zdWJuZXRzID0gdmFsdWUuc3VibmV0cztcbiAgICB9XG4gIH1cblxuICAvLyBhc3NpZ25fcHVibGljX2lwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Fzc2lnblB1YmxpY0lwPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhc3NpZ25QdWJsaWNJcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhc3NpZ25fcHVibGljX2lwJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXNzaWduUHVibGljSXAodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Fzc2lnblB1YmxpY0lwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXNzaWduUHVibGljSXAoKSB7XG4gICAgdGhpcy5fYXNzaWduUHVibGljSXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFzc2lnblB1YmxpY0lwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnblB1YmxpY0lwO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eUdyb3VwcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cHM7XG4gIH1cblxuICAvLyBzdWJuZXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N1Ym5ldHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3VibmV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJuZXRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1Ym5ldHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3VibmV0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldFBsYWNlbWVudENvbnN0cmFpbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHByZXNzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZHdhdGNoRXZlbnRUYXJnZXRFY3NUYXJnZXRQbGFjZW1lbnRDb25zdHJhaW50VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0UGxhY2VtZW50Q29uc3RyYWludCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhwcmVzc2lvbiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlRWNzTWFuYWdlZFRhZ3M/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUV4ZWN1dGVDb21tYW5kPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3VwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhdW5jaFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYXRmb3JtVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9wYWdhdGVUYWdzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXNrQ291bnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhc2tEZWZpbml0aW9uQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0NvbmZpZ3VyYXRpb24/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRFY3NUYXJnZXROZXR3b3JrQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwbGFjZW1lbnRDb25zdHJhaW50PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0UGxhY2VtZW50Q29uc3RyYWludFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlX2Vjc19tYW5hZ2VkX3RhZ3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUVjc01hbmFnZWRUYWdzKSxcbiAgICBlbmFibGVfZXhlY3V0ZV9jb21tYW5kOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVFeGVjdXRlQ29tbWFuZCksXG4gICAgZ3JvdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXApLFxuICAgIGxhdW5jaF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhdW5jaFR5cGUpLFxuICAgIHBsYXRmb3JtX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGxhdGZvcm1WZXJzaW9uKSxcbiAgICBwcm9wYWdhdGVfdGFnczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9wYWdhdGVUYWdzKSxcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICAgIHRhc2tfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGFza0NvdW50KSxcbiAgICB0YXNrX2RlZmluaXRpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhc2tEZWZpbml0aW9uQXJuKSxcbiAgICBuZXR3b3JrX2NvbmZpZ3VyYXRpb246IGNsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldE5ldHdvcmtDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrQ29uZmlndXJhdGlvbiksXG4gICAgcGxhY2VtZW50X2NvbnN0cmFpbnQ6IGNka3RmLmxpc3RNYXBwZXIoY2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0UGxhY2VtZW50Q29uc3RyYWludFRvVGVycmFmb3JtKShzdHJ1Y3QhLnBsYWNlbWVudENvbnN0cmFpbnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoRXZlbnRUYXJnZXRFY3NUYXJnZXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFncykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlRWNzTWFuYWdlZFRhZ3MgPSB0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFncztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZUV4ZWN1dGVDb21tYW5kKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVFeGVjdXRlQ29tbWFuZCA9IHRoaXMuX2VuYWJsZUV4ZWN1dGVDb21tYW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZ3JvdXApIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmdyb3VwID0gdGhpcy5fZ3JvdXA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYXVuY2hUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sYXVuY2hUeXBlID0gdGhpcy5fbGF1bmNoVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtVmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGxhdGZvcm1WZXJzaW9uID0gdGhpcy5fcGxhdGZvcm1WZXJzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvcGFnYXRlVGFncykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvcGFnYXRlVGFncyA9IHRoaXMuX3Byb3BhZ2F0ZVRhZ3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl90YWdzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWdzID0gdGhpcy5fdGFncztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Rhc2tDb3VudCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFza0NvdW50ID0gdGhpcy5fdGFza0NvdW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFza0RlZmluaXRpb25Bcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhc2tEZWZpbml0aW9uQXJuID0gdGhpcy5fdGFza0RlZmluaXRpb25Bcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXR3b3JrQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmV0d29ya0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9uZXR3b3JrQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBsYWNlbWVudENvbnN0cmFpbnQgPSB0aGlzLl9wbGFjZW1lbnRDb25zdHJhaW50O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlRWNzTWFuYWdlZFRhZ3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVFeGVjdXRlQ29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dyb3VwID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbGF1bmNoVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BsYXRmb3JtVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb3BhZ2F0ZVRhZ3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFza0NvdW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFza0RlZmluaXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9uZXR3b3JrQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlRWNzTWFuYWdlZFRhZ3MgPSB2YWx1ZS5lbmFibGVFY3NNYW5hZ2VkVGFncztcbiAgICAgIHRoaXMuX2VuYWJsZUV4ZWN1dGVDb21tYW5kID0gdmFsdWUuZW5hYmxlRXhlY3V0ZUNvbW1hbmQ7XG4gICAgICB0aGlzLl9ncm91cCA9IHZhbHVlLmdyb3VwO1xuICAgICAgdGhpcy5fbGF1bmNoVHlwZSA9IHZhbHVlLmxhdW5jaFR5cGU7XG4gICAgICB0aGlzLl9wbGF0Zm9ybVZlcnNpb24gPSB2YWx1ZS5wbGF0Zm9ybVZlcnNpb247XG4gICAgICB0aGlzLl9wcm9wYWdhdGVUYWdzID0gdmFsdWUucHJvcGFnYXRlVGFncztcbiAgICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZS50YWdzO1xuICAgICAgdGhpcy5fdGFza0NvdW50ID0gdmFsdWUudGFza0NvdW50O1xuICAgICAgdGhpcy5fdGFza0RlZmluaXRpb25Bcm4gPSB2YWx1ZS50YXNrRGVmaW5pdGlvbkFybjtcbiAgICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5uZXR3b3JrQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnQgPSB2YWx1ZS5wbGFjZW1lbnRDb25zdHJhaW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZV9lY3NfbWFuYWdlZF90YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUVjc01hbmFnZWRUYWdzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVFY3NNYW5hZ2VkVGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZWNzX21hbmFnZWRfdGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUVjc01hbmFnZWRUYWdzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUVjc01hbmFnZWRUYWdzKCkge1xuICAgIHRoaXMuX2VuYWJsZUVjc01hbmFnZWRUYWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVFY3NNYW5hZ2VkVGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVFY3NNYW5hZ2VkVGFncztcbiAgfVxuXG4gIC8vIGVuYWJsZV9leGVjdXRlX2NvbW1hbmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlRXhlY3V0ZUNvbW1hbmQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUV4ZWN1dGVDb21tYW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9leGVjdXRlX2NvbW1hbmQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVFeGVjdXRlQ29tbWFuZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlRXhlY3V0ZUNvbW1hbmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVFeGVjdXRlQ29tbWFuZCgpIHtcbiAgICB0aGlzLl9lbmFibGVFeGVjdXRlQ29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlRXhlY3V0ZUNvbW1hbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlRXhlY3V0ZUNvbW1hbmQ7XG4gIH1cblxuICAvLyBncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncm91cD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncm91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3JvdXAoKSB7XG4gICAgdGhpcy5fZ3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyb3VwO1xuICB9XG5cbiAgLy8gbGF1bmNoX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGF1bmNoVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXVuY2hUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXVuY2hUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoVHlwZSgpIHtcbiAgICB0aGlzLl9sYXVuY2hUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXVuY2hUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaFR5cGU7XG4gIH1cblxuICAvLyBwbGF0Zm9ybV92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYXRmb3JtVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1WZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxhdGZvcm1fdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhdGZvcm1WZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbGF0Zm9ybVZlcnNpb24oKSB7XG4gICAgdGhpcy5fcGxhdGZvcm1WZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGF0Zm9ybVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm1WZXJzaW9uO1xuICB9XG5cbiAgLy8gcHJvcGFnYXRlX3RhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvcGFnYXRlVGFncz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvcGFnYXRlVGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Byb3BhZ2F0ZV90YWdzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9wYWdhdGVUYWdzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVUYWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvcGFnYXRlVGFncygpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVUYWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9wYWdhdGVUYWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BhZ2F0ZVRhZ3M7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YXNrX2NvdW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rhc2tDb3VudD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGFza0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGFza19jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFza0NvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90YXNrQ291bnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXNrQ291bnQoKSB7XG4gICAgdGhpcy5fdGFza0NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrQ291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0NvdW50O1xuICB9XG5cbiAgLy8gdGFza19kZWZpbml0aW9uX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YXNrRGVmaW5pdGlvbkFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFza0RlZmluaXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXNrX2RlZmluaXRpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YXNrRGVmaW5pdGlvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFza0RlZmluaXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFza0RlZmluaXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0RlZmluaXRpb25Bcm47XG4gIH1cblxuICAvLyBuZXR3b3JrX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya0NvbmZpZ3VyYXRpb24gPSBuZXcgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0TmV0d29ya0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibmV0d29ya19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0TmV0d29ya0NvbmZpZ3VyYXRpb24odmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldE5ldHdvcmtDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fbmV0d29ya0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5ldHdvcmtDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwbGFjZW1lbnRfY29uc3RyYWludCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGFjZW1lbnRDb25zdHJhaW50PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0UGxhY2VtZW50Q29uc3RyYWludFtdOyBcbiAgcHVibGljIGdldCBwbGFjZW1lbnRDb25zdHJhaW50KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwbGFjZW1lbnRfY29uc3RyYWludCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYWNlbWVudENvbnN0cmFpbnQodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldFBsYWNlbWVudENvbnN0cmFpbnRbXSkge1xuICAgIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbGFjZW1lbnRDb25zdHJhaW50KCkge1xuICAgIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudENvbnN0cmFpbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRUYXJnZXRIdHRwVGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFkZXJQYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF0aFBhcmFtZXRlclZhbHVlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHF1ZXJ5U3RyaW5nUGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudFRhcmdldEh0dHBUYXJnZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRIdHRwVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0SHR0cFRhcmdldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcl9wYXJhbWV0ZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWRlclBhcmFtZXRlcnMpLFxuICAgIHBhdGhfcGFyYW1ldGVyX3ZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wYXRoUGFyYW1ldGVyVmFsdWVzKSxcbiAgICBxdWVyeV9zdHJpbmdfcGFyYW1ldGVyczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5xdWVyeVN0cmluZ1BhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoRXZlbnRUYXJnZXRIdHRwVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3Vkd2F0Y2hFdmVudFRhcmdldEh0dHBUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hlYWRlclBhcmFtZXRlcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlYWRlclBhcmFtZXRlcnMgPSB0aGlzLl9oZWFkZXJQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGF0aFBhcmFtZXRlclZhbHVlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGF0aFBhcmFtZXRlclZhbHVlcyA9IHRoaXMuX3BhdGhQYXJhbWV0ZXJWYWx1ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9xdWVyeVN0cmluZ1BhcmFtZXRlcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycyA9IHRoaXMuX3F1ZXJ5U3RyaW5nUGFyYW1ldGVycztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldEh0dHBUYXJnZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9oZWFkZXJQYXJhbWV0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGF0aFBhcmFtZXRlclZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nUGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faGVhZGVyUGFyYW1ldGVycyA9IHZhbHVlLmhlYWRlclBhcmFtZXRlcnM7XG4gICAgICB0aGlzLl9wYXRoUGFyYW1ldGVyVmFsdWVzID0gdmFsdWUucGF0aFBhcmFtZXRlclZhbHVlcztcbiAgICAgIHRoaXMuX3F1ZXJ5U3RyaW5nUGFyYW1ldGVycyA9IHZhbHVlLnF1ZXJ5U3RyaW5nUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyBoZWFkZXJfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFkZXJQYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBoZWFkZXJQYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoZWFkZXJfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWRlclBhcmFtZXRlcnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2hlYWRlclBhcmFtZXRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFkZXJQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX2hlYWRlclBhcmFtZXRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWRlclBhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyUGFyYW1ldGVycztcbiAgfVxuXG4gIC8vIHBhdGhfcGFyYW1ldGVyX3ZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXRoUGFyYW1ldGVyVmFsdWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHBhdGhQYXJhbWV0ZXJWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncGF0aF9wYXJhbWV0ZXJfdmFsdWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoUGFyYW1ldGVyVmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3BhdGhQYXJhbWV0ZXJWYWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXRoUGFyYW1ldGVyVmFsdWVzKCkge1xuICAgIHRoaXMuX3BhdGhQYXJhbWV0ZXJWYWx1ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhdGhQYXJhbWV0ZXJWYWx1ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aFBhcmFtZXRlclZhbHVlcztcbiAgfVxuXG4gIC8vIHF1ZXJ5X3N0cmluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3F1ZXJ5U3RyaW5nUGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdQYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdxdWVyeV9zdHJpbmdfcGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1ZXJ5U3RyaW5nUGFyYW1ldGVycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcXVlcnlTdHJpbmdQYXJhbWV0ZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UXVlcnlTdHJpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX3F1ZXJ5U3RyaW5nUGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcXVlcnlTdHJpbmdQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U3RyaW5nUGFyYW1ldGVycztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDbG91ZHdhdGNoRXZlbnRUYXJnZXRJbnB1dFRyYW5zZm9ybWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dFBhdGhzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlucHV0VGVtcGxhdGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudFRhcmdldElucHV0VHJhbnNmb3JtZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRJbnB1dFRyYW5zZm9ybWVyT3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0SW5wdXRUcmFuc2Zvcm1lcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlucHV0X3BhdGhzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLmlucHV0UGF0aHMpLFxuICAgIGlucHV0X3RlbXBsYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0VGVtcGxhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoRXZlbnRUYXJnZXRJbnB1dFRyYW5zZm9ybWVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENsb3Vkd2F0Y2hFdmVudFRhcmdldElucHV0VHJhbnNmb3JtZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lucHV0UGF0aHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0UGF0aHMgPSB0aGlzLl9pbnB1dFBhdGhzO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXRUZW1wbGF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5wdXRUZW1wbGF0ZSA9IHRoaXMuX2lucHV0VGVtcGxhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRJbnB1dFRyYW5zZm9ybWVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5wdXRQYXRocyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0VGVtcGxhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lucHV0UGF0aHMgPSB2YWx1ZS5pbnB1dFBhdGhzO1xuICAgICAgdGhpcy5faW5wdXRUZW1wbGF0ZSA9IHZhbHVlLmlucHV0VGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5wdXRfcGF0aHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5wdXRQYXRocz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5wdXRQYXRocygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5wdXRfcGF0aHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dFBhdGhzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbnB1dFBhdGhzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRQYXRocygpIHtcbiAgICB0aGlzLl9pbnB1dFBhdGhzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dFBhdGhzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UGF0aHM7XG4gIH1cblxuICAvLyBpbnB1dF90ZW1wbGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbnB1dFRlbXBsYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnB1dFRlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfdGVtcGxhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlucHV0VGVtcGxhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0VGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRUZW1wbGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFRlbXBsYXRlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudFRhcmdldEtpbmVzaXNUYXJnZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFydGl0aW9uS2V5UGF0aD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudFRhcmdldEtpbmVzaXNUYXJnZXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRLaW5lc2lzVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0S2luZXNpc1RhcmdldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcnRpdGlvbl9rZXlfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb25LZXlQYXRoKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0S2luZXNpc1RhcmdldE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRLaW5lc2lzVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wYXJ0aXRpb25LZXlQYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXJ0aXRpb25LZXlQYXRoID0gdGhpcy5fcGFydGl0aW9uS2V5UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldEtpbmVzaXNUYXJnZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9wYXJ0aXRpb25LZXlQYXRoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9wYXJ0aXRpb25LZXlQYXRoID0gdmFsdWUucGFydGl0aW9uS2V5UGF0aDtcbiAgICB9XG4gIH1cblxuICAvLyBwYXJ0aXRpb25fa2V5X3BhdGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFydGl0aW9uS2V5UGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uS2V5UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcnRpdGlvbl9rZXlfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFydGl0aW9uS2V5UGF0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFydGl0aW9uS2V5UGF0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcnRpdGlvbktleVBhdGgoKSB7XG4gICAgdGhpcy5fcGFydGl0aW9uS2V5UGF0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uS2V5UGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJ0aXRpb25LZXlQYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudFRhcmdldFJlZHNoaWZ0VGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYlVzZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3JldHNNYW5hZ2VyQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRlbWVudE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdpdGhFdmVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudFRhcmdldFJlZHNoaWZ0VGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmVkc2hpZnRUYXJnZXRPdXRwdXRSZWZlcmVuY2UgfCBDbG91ZHdhdGNoRXZlbnRUYXJnZXRSZWRzaGlmdFRhcmdldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGFiYXNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlKSxcbiAgICBkYl91c2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRiVXNlciksXG4gICAgc2VjcmV0c19tYW5hZ2VyX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWNyZXRzTWFuYWdlckFybiksXG4gICAgc3FsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbCksXG4gICAgc3RhdGVtZW50X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGVtZW50TmFtZSksXG4gICAgd2l0aF9ldmVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEud2l0aEV2ZW50KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmVkc2hpZnRUYXJnZXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmVkc2hpZnRUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RhdGFiYXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhYmFzZSA9IHRoaXMuX2RhdGFiYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGJVc2VyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYlVzZXIgPSB0aGlzLl9kYlVzZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWNyZXRzTWFuYWdlckFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VjcmV0c01hbmFnZXJBcm4gPSB0aGlzLl9zZWNyZXRzTWFuYWdlckFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NxbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3FsID0gdGhpcy5fc3FsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RhdGVtZW50TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhdGVtZW50TmFtZSA9IHRoaXMuX3N0YXRlbWVudE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl93aXRoRXZlbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndpdGhFdmVudCA9IHRoaXMuX3dpdGhFdmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldFJlZHNoaWZ0VGFyZ2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGF0YWJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kYlVzZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWNyZXRzTWFuYWdlckFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NxbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXRlbWVudE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93aXRoRXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2RhdGFiYXNlID0gdmFsdWUuZGF0YWJhc2U7XG4gICAgICB0aGlzLl9kYlVzZXIgPSB2YWx1ZS5kYlVzZXI7XG4gICAgICB0aGlzLl9zZWNyZXRzTWFuYWdlckFybiA9IHZhbHVlLnNlY3JldHNNYW5hZ2VyQXJuO1xuICAgICAgdGhpcy5fc3FsID0gdmFsdWUuc3FsO1xuICAgICAgdGhpcy5fc3RhdGVtZW50TmFtZSA9IHZhbHVlLnN0YXRlbWVudE5hbWU7XG4gICAgICB0aGlzLl93aXRoRXZlbnQgPSB2YWx1ZS53aXRoRXZlbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZGF0YWJhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGF0YWJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhYmFzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZTtcbiAgfVxuXG4gIC8vIGRiX3VzZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGJVc2VyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYlVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYl91c2VyJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYlVzZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RiVXNlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERiVXNlcigpIHtcbiAgICB0aGlzLl9kYlVzZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRiVXNlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYlVzZXI7XG4gIH1cblxuICAvLyBzZWNyZXRzX21hbmFnZXJfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3JldHNNYW5hZ2VyQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWNyZXRzTWFuYWdlckFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3JldHNfbWFuYWdlcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3JldHNNYW5hZ2VyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWNyZXRzTWFuYWdlckFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3JldHNNYW5hZ2VyQXJuKCkge1xuICAgIHRoaXMuX3NlY3JldHNNYW5hZ2VyQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNyZXRzTWFuYWdlckFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWNyZXRzTWFuYWdlckFybjtcbiAgfVxuXG4gIC8vIHNxbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNxbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NxbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3FsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcWwoKSB7XG4gICAgdGhpcy5fc3FsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3FsO1xuICB9XG5cbiAgLy8gc3RhdGVtZW50X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGVtZW50TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdGVtZW50TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlbWVudF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0ZW1lbnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0ZW1lbnROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdGVtZW50TmFtZSgpIHtcbiAgICB0aGlzLl9zdGF0ZW1lbnROYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZW1lbnROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlbWVudE5hbWU7XG4gIH1cblxuICAvLyB3aXRoX2V2ZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dpdGhFdmVudD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgd2l0aEV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3dpdGhfZXZlbnQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB3aXRoRXZlbnQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3dpdGhFdmVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFdpdGhFdmVudCgpIHtcbiAgICB0aGlzLl93aXRoRXZlbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdpdGhFdmVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoRXZlbnQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmV0cnlQb2xpY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhpbXVtRXZlbnRBZ2VJblNlY29uZHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heGltdW1SZXRyeUF0dGVtcHRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmV0cnlQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRSZXRyeVBvbGljeU91dHB1dFJlZmVyZW5jZSB8IENsb3Vkd2F0Y2hFdmVudFRhcmdldFJldHJ5UG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4aW11bV9ldmVudF9hZ2VfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHMpLFxuICAgIG1heGltdW1fcmV0cnlfYXR0ZW1wdHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4aW11bVJldHJ5QXR0ZW1wdHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZHdhdGNoRXZlbnRUYXJnZXRSZXRyeVBvbGljeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRSZXRyeVBvbGljeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHMgPSB0aGlzLl9tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4aW11bVJldHJ5QXR0ZW1wdHMgPSB0aGlzLl9tYXhpbXVtUmV0cnlBdHRlbXB0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldFJldHJ5UG9saWN5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21heGltdW1FdmVudEFnZUluU2Vjb25kcyA9IHZhbHVlLm1heGltdW1FdmVudEFnZUluU2Vjb25kcztcbiAgICAgIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzID0gdmFsdWUubWF4aW11bVJldHJ5QXR0ZW1wdHM7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4aW11bV9ldmVudF9hZ2VfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhpbXVtRXZlbnRBZ2VJblNlY29uZHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1FdmVudEFnZUluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1fZXZlbnRfYWdlX2luX3NlY29uZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heGltdW1FdmVudEFnZUluU2Vjb25kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzKCkge1xuICAgIHRoaXMuX21heGltdW1FdmVudEFnZUluU2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4aW11bUV2ZW50QWdlSW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1FdmVudEFnZUluU2Vjb25kcztcbiAgfVxuXG4gIC8vIG1heGltdW1fcmV0cnlfYXR0ZW1wdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4aW11bVJldHJ5QXR0ZW1wdHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heGltdW1SZXRyeUF0dGVtcHRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWF4aW11bV9yZXRyeV9hdHRlbXB0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bVJldHJ5QXR0ZW1wdHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bVJldHJ5QXR0ZW1wdHMoKSB7XG4gICAgdGhpcy5fbWF4aW11bVJldHJ5QXR0ZW1wdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1SZXRyeUF0dGVtcHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1SZXRyeUF0dGVtcHRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudFRhcmdldFJ1bkNvbW1hbmRUYXJnZXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3Vkd2F0Y2hFdmVudFRhcmdldFJ1bkNvbW1hbmRUYXJnZXRzVG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UnVuQ29tbWFuZFRhcmdldHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudmFsdWVzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3Vkd2F0Y2hFdmVudFRhcmdldFNxc1RhcmdldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2VHcm91cElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvdWR3YXRjaEV2ZW50VGFyZ2V0U3FzVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0U3FzVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIHwgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0U3FzVGFyZ2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZV9ncm91cF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlR3JvdXBJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3Vkd2F0Y2hFdmVudFRhcmdldFNxc1RhcmdldE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRTcXNUYXJnZXQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VHcm91cElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXNzYWdlR3JvdXBJZCA9IHRoaXMuX21lc3NhZ2VHcm91cElkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0U3FzVGFyZ2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWVzc2FnZUdyb3VwSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21lc3NhZ2VHcm91cElkID0gdmFsdWUubWVzc2FnZUdyb3VwSWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gbWVzc2FnZV9ncm91cF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXNzYWdlR3JvdXBJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNzYWdlX2dyb3VwX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNzYWdlR3JvdXBJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVzc2FnZUdyb3VwSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXNzYWdlR3JvdXBJZCgpIHtcbiAgICB0aGlzLl9tZXNzYWdlR3JvdXBJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUdyb3VwSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUdyb3VwSWQ7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Nsb3Vkd2F0Y2hfZXZlbnRfdGFyZ2V0XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENsb3Vkd2F0Y2hFdmVudFRhcmdldENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2Nsb3Vkd2F0Y2hfZXZlbnRfdGFyZ2V0JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FybiA9IGNvbmZpZy5hcm47XG4gICAgdGhpcy5fZXZlbnRCdXNOYW1lID0gY29uZmlnLmV2ZW50QnVzTmFtZTtcbiAgICB0aGlzLl9pbnB1dCA9IGNvbmZpZy5pbnB1dDtcbiAgICB0aGlzLl9pbnB1dFBhdGggPSBjb25maWcuaW5wdXRQYXRoO1xuICAgIHRoaXMuX3JvbGVBcm4gPSBjb25maWcucm9sZUFybjtcbiAgICB0aGlzLl9ydWxlID0gY29uZmlnLnJ1bGU7XG4gICAgdGhpcy5fdGFyZ2V0SWQgPSBjb25maWcudGFyZ2V0SWQ7XG4gICAgdGhpcy5fYmF0Y2hUYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5iYXRjaFRhcmdldDtcbiAgICB0aGlzLl9kZWFkTGV0dGVyQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuZGVhZExldHRlckNvbmZpZztcbiAgICB0aGlzLl9lY3NUYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lY3NUYXJnZXQ7XG4gICAgdGhpcy5faHR0cFRhcmdldC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmh0dHBUYXJnZXQ7XG4gICAgdGhpcy5faW5wdXRUcmFuc2Zvcm1lci5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmlucHV0VHJhbnNmb3JtZXI7XG4gICAgdGhpcy5fa2luZXNpc1RhcmdldC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmtpbmVzaXNUYXJnZXQ7XG4gICAgdGhpcy5fcmVkc2hpZnRUYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5yZWRzaGlmdFRhcmdldDtcbiAgICB0aGlzLl9yZXRyeVBvbGljeS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnJldHJ5UG9saWN5O1xuICAgIHRoaXMuX3J1bkNvbW1hbmRUYXJnZXRzID0gY29uZmlnLnJ1bkNvbW1hbmRUYXJnZXRzO1xuICAgIHRoaXMuX3Nxc1RhcmdldC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNxc1RhcmdldDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJuO1xuICB9XG5cbiAgLy8gZXZlbnRfYnVzX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXZlbnRCdXNOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBldmVudEJ1c05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmVudF9idXNfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXZlbnRCdXNOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ldmVudEJ1c05hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFdmVudEJ1c05hbWUoKSB7XG4gICAgdGhpcy5fZXZlbnRCdXNOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBldmVudEJ1c05hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRCdXNOYW1lO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGlucHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lucHV0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lucHV0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gIH1cblxuICAvLyBpbnB1dF9wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lucHV0UGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5wdXRQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfcGF0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5wdXRQYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnB1dFBhdGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnB1dFBhdGgoKSB7XG4gICAgdGhpcy5faW5wdXRQYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dFBhdGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRQYXRoO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9sZUFybigpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyBydWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3J1bGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlJyk7XG4gIH1cbiAgcHVibGljIHNldCBydWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ydWxlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZTtcbiAgfVxuXG4gIC8vIHRhcmdldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXJnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhcmdldF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFyZ2V0SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhcmdldElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFyZ2V0SWQoKSB7XG4gICAgdGhpcy5fdGFyZ2V0SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldElkO1xuICB9XG5cbiAgLy8gYmF0Y2hfdGFyZ2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JhdGNoVGFyZ2V0ID0gbmV3IENsb3Vkd2F0Y2hFdmVudFRhcmdldEJhdGNoVGFyZ2V0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImJhdGNoX3RhcmdldFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBiYXRjaFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmF0Y2hUYXJnZXQ7XG4gIH1cbiAgcHVibGljIHB1dEJhdGNoVGFyZ2V0KHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRCYXRjaFRhcmdldCkge1xuICAgIHRoaXMuX2JhdGNoVGFyZ2V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYXRjaFRhcmdldCgpIHtcbiAgICB0aGlzLl9iYXRjaFRhcmdldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYXRjaFRhcmdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYXRjaFRhcmdldC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZGVhZF9sZXR0ZXJfY29uZmlnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlYWRMZXR0ZXJDb25maWcgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RGVhZExldHRlckNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkZWFkX2xldHRlcl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZGVhZExldHRlckNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVhZExldHRlckNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0RGVhZExldHRlckNvbmZpZyh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0RGVhZExldHRlckNvbmZpZykge1xuICAgIHRoaXMuX2RlYWRMZXR0ZXJDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlYWRMZXR0ZXJDb25maWcoKSB7XG4gICAgdGhpcy5fZGVhZExldHRlckNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWFkTGV0dGVyQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlYWRMZXR0ZXJDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGVjc190YXJnZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWNzVGFyZ2V0ID0gbmV3IENsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJlY3NfdGFyZ2V0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGVjc1RhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWNzVGFyZ2V0O1xuICB9XG4gIHB1YmxpYyBwdXRFY3NUYXJnZXQodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldEVjc1RhcmdldCkge1xuICAgIHRoaXMuX2Vjc1RhcmdldC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWNzVGFyZ2V0KCkge1xuICAgIHRoaXMuX2Vjc1RhcmdldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlY3NUYXJnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWNzVGFyZ2V0LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodHRwX3RhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwVGFyZ2V0ID0gbmV3IENsb3Vkd2F0Y2hFdmVudFRhcmdldEh0dHBUYXJnZXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHR0cF90YXJnZXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaHR0cFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cFRhcmdldDtcbiAgfVxuICBwdWJsaWMgcHV0SHR0cFRhcmdldCh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0SHR0cFRhcmdldCkge1xuICAgIHRoaXMuX2h0dHBUYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBUYXJnZXQoKSB7XG4gICAgdGhpcy5faHR0cFRhcmdldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwVGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBUYXJnZXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGlucHV0X3RyYW5zZm9ybWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lucHV0VHJhbnNmb3JtZXIgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0SW5wdXRUcmFuc2Zvcm1lck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbnB1dF90cmFuc2Zvcm1lclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbnB1dFRyYW5zZm9ybWVyKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFRyYW5zZm9ybWVyO1xuICB9XG4gIHB1YmxpYyBwdXRJbnB1dFRyYW5zZm9ybWVyKHZhbHVlOiBDbG91ZHdhdGNoRXZlbnRUYXJnZXRJbnB1dFRyYW5zZm9ybWVyKSB7XG4gICAgdGhpcy5faW5wdXRUcmFuc2Zvcm1lci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRUcmFuc2Zvcm1lcigpIHtcbiAgICB0aGlzLl9pbnB1dFRyYW5zZm9ybWVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlucHV0VHJhbnNmb3JtZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRUcmFuc2Zvcm1lci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8ga2luZXNpc190YXJnZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2luZXNpc1RhcmdldCA9IG5ldyBDbG91ZHdhdGNoRXZlbnRUYXJnZXRLaW5lc2lzVGFyZ2V0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImtpbmVzaXNfdGFyZ2V0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmVzaXNUYXJnZXQ7XG4gIH1cbiAgcHVibGljIHB1dEtpbmVzaXNUYXJnZXQodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldEtpbmVzaXNUYXJnZXQpIHtcbiAgICB0aGlzLl9raW5lc2lzVGFyZ2V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLaW5lc2lzVGFyZ2V0KCkge1xuICAgIHRoaXMuX2tpbmVzaXNUYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2luZXNpc1RhcmdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzVGFyZ2V0LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZWRzaGlmdF90YXJnZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVkc2hpZnRUYXJnZXQgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmVkc2hpZnRUYXJnZXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmVkc2hpZnRfdGFyZ2V0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJlZHNoaWZ0VGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRzaGlmdFRhcmdldDtcbiAgfVxuICBwdWJsaWMgcHV0UmVkc2hpZnRUYXJnZXQodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldFJlZHNoaWZ0VGFyZ2V0KSB7XG4gICAgdGhpcy5fcmVkc2hpZnRUYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZHNoaWZ0VGFyZ2V0KCkge1xuICAgIHRoaXMuX3JlZHNoaWZ0VGFyZ2V0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZHNoaWZ0VGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZHNoaWZ0VGFyZ2V0LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyByZXRyeV9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0cnlQb2xpY3kgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UmV0cnlQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmV0cnlfcG9saWN5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJldHJ5UG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeVBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0UmV0cnlQb2xpY3kodmFsdWU6IENsb3Vkd2F0Y2hFdmVudFRhcmdldFJldHJ5UG9saWN5KSB7XG4gICAgdGhpcy5fcmV0cnlQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldHJ5UG9saWN5KCkge1xuICAgIHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldHJ5UG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBydW5fY29tbWFuZF90YXJnZXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3J1bkNvbW1hbmRUYXJnZXRzPzogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UnVuQ29tbWFuZFRhcmdldHNbXTsgXG4gIHB1YmxpYyBnZXQgcnVuQ29tbWFuZFRhcmdldHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3J1bl9jb21tYW5kX3RhcmdldHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBydW5Db21tYW5kVGFyZ2V0cyh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0UnVuQ29tbWFuZFRhcmdldHNbXSkge1xuICAgIHRoaXMuX3J1bkNvbW1hbmRUYXJnZXRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UnVuQ29tbWFuZFRhcmdldHMoKSB7XG4gICAgdGhpcy5fcnVuQ29tbWFuZFRhcmdldHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bkNvbW1hbmRUYXJnZXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bkNvbW1hbmRUYXJnZXRzO1xuICB9XG5cbiAgLy8gc3FzX3RhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcXNUYXJnZXQgPSBuZXcgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0U3FzVGFyZ2V0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNxc190YXJnZXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3FzVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcXNUYXJnZXQ7XG4gIH1cbiAgcHVibGljIHB1dFNxc1RhcmdldCh2YWx1ZTogQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0U3FzVGFyZ2V0KSB7XG4gICAgdGhpcy5fc3FzVGFyZ2V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcXNUYXJnZXQoKSB7XG4gICAgdGhpcy5fc3FzVGFyZ2V0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNxc1RhcmdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcXNUYXJnZXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcm4pLFxuICAgICAgZXZlbnRfYnVzX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50QnVzTmFtZSksXG4gICAgICBpbnB1dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5wdXQpLFxuICAgICAgaW5wdXRfcGF0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5wdXRQYXRoKSxcbiAgICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb2xlQXJuKSxcbiAgICAgIHJ1bGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3J1bGUpLFxuICAgICAgdGFyZ2V0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXJnZXRJZCksXG4gICAgICBiYXRjaF90YXJnZXQ6IGNsb3Vkd2F0Y2hFdmVudFRhcmdldEJhdGNoVGFyZ2V0VG9UZXJyYWZvcm0odGhpcy5fYmF0Y2hUYXJnZXQuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBkZWFkX2xldHRlcl9jb25maWc6IGNsb3Vkd2F0Y2hFdmVudFRhcmdldERlYWRMZXR0ZXJDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9kZWFkTGV0dGVyQ29uZmlnLmludGVybmFsVmFsdWUpLFxuICAgICAgZWNzX3RhcmdldDogY2xvdWR3YXRjaEV2ZW50VGFyZ2V0RWNzVGFyZ2V0VG9UZXJyYWZvcm0odGhpcy5fZWNzVGFyZ2V0LmludGVybmFsVmFsdWUpLFxuICAgICAgaHR0cF90YXJnZXQ6IGNsb3Vkd2F0Y2hFdmVudFRhcmdldEh0dHBUYXJnZXRUb1RlcnJhZm9ybSh0aGlzLl9odHRwVGFyZ2V0LmludGVybmFsVmFsdWUpLFxuICAgICAgaW5wdXRfdHJhbnNmb3JtZXI6IGNsb3Vkd2F0Y2hFdmVudFRhcmdldElucHV0VHJhbnNmb3JtZXJUb1RlcnJhZm9ybSh0aGlzLl9pbnB1dFRyYW5zZm9ybWVyLmludGVybmFsVmFsdWUpLFxuICAgICAga2luZXNpc190YXJnZXQ6IGNsb3Vkd2F0Y2hFdmVudFRhcmdldEtpbmVzaXNUYXJnZXRUb1RlcnJhZm9ybSh0aGlzLl9raW5lc2lzVGFyZ2V0LmludGVybmFsVmFsdWUpLFxuICAgICAgcmVkc2hpZnRfdGFyZ2V0OiBjbG91ZHdhdGNoRXZlbnRUYXJnZXRSZWRzaGlmdFRhcmdldFRvVGVycmFmb3JtKHRoaXMuX3JlZHNoaWZ0VGFyZ2V0LmludGVybmFsVmFsdWUpLFxuICAgICAgcmV0cnlfcG9saWN5OiBjbG91ZHdhdGNoRXZlbnRUYXJnZXRSZXRyeVBvbGljeVRvVGVycmFmb3JtKHRoaXMuX3JldHJ5UG9saWN5LmludGVybmFsVmFsdWUpLFxuICAgICAgcnVuX2NvbW1hbmRfdGFyZ2V0czogY2RrdGYubGlzdE1hcHBlcihjbG91ZHdhdGNoRXZlbnRUYXJnZXRSdW5Db21tYW5kVGFyZ2V0c1RvVGVycmFmb3JtKSh0aGlzLl9ydW5Db21tYW5kVGFyZ2V0cyksXG4gICAgICBzcXNfdGFyZ2V0OiBjbG91ZHdhdGNoRXZlbnRUYXJnZXRTcXNUYXJnZXRUb1RlcnJhZm9ybSh0aGlzLl9zcXNUYXJnZXQuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19