"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueJob = exports.GlueJobNotificationPropertyOutputReference = exports.glueJobNotificationPropertyToTerraform = exports.GlueJobExecutionPropertyOutputReference = exports.glueJobExecutionPropertyToTerraform = exports.GlueJobCommandOutputReference = exports.glueJobCommandToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueJobCommandToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        python_version: cdktf.stringToTerraform(struct.pythonVersion),
        script_location: cdktf.stringToTerraform(struct.scriptLocation),
    };
}
exports.glueJobCommandToTerraform = glueJobCommandToTerraform;
/**
 * @stability stable
 */
class GlueJobCommandOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._pythonVersion) {
            hasAnyValues = true;
            internalValueResult.pythonVersion = this._pythonVersion;
        }
        if (this._scriptLocation) {
            hasAnyValues = true;
            internalValueResult.scriptLocation = this._scriptLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._pythonVersion = undefined;
            this._scriptLocation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._pythonVersion = value.pythonVersion;
            this._scriptLocation = value.scriptLocation;
        }
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
    get pythonVersion() {
        return this.getStringAttribute('python_version');
    }
    /**
     * @stability stable
     */
    set pythonVersion(value) {
        this._pythonVersion = value;
    }
    /**
     * @stability stable
     */
    resetPythonVersion() {
        this._pythonVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pythonVersionInput() {
        return this._pythonVersion;
    }
    /**
     * @stability stable
     */
    get scriptLocation() {
        return this.getStringAttribute('script_location');
    }
    /**
     * @stability stable
     */
    set scriptLocation(value) {
        this._scriptLocation = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scriptLocationInput() {
        return this._scriptLocation;
    }
}
exports.GlueJobCommandOutputReference = GlueJobCommandOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GlueJobCommandOutputReference[_a] = { fqn: "@cdktf/provider-aws.glue.GlueJobCommandOutputReference", version: "3.0.1" };
function glueJobExecutionPropertyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_concurrent_runs: cdktf.numberToTerraform(struct.maxConcurrentRuns),
    };
}
exports.glueJobExecutionPropertyToTerraform = glueJobExecutionPropertyToTerraform;
/**
 * @stability stable
 */
class GlueJobExecutionPropertyOutputReference extends cdktf.ComplexObject {
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
        if (this._maxConcurrentRuns) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentRuns = this._maxConcurrentRuns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxConcurrentRuns = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxConcurrentRuns = value.maxConcurrentRuns;
        }
    }
    /**
     * @stability stable
     */
    get maxConcurrentRuns() {
        return this.getNumberAttribute('max_concurrent_runs');
    }
    /**
     * @stability stable
     */
    set maxConcurrentRuns(value) {
        this._maxConcurrentRuns = value;
    }
    /**
     * @stability stable
     */
    resetMaxConcurrentRuns() {
        this._maxConcurrentRuns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxConcurrentRunsInput() {
        return this._maxConcurrentRuns;
    }
}
exports.GlueJobExecutionPropertyOutputReference = GlueJobExecutionPropertyOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GlueJobExecutionPropertyOutputReference[_b] = { fqn: "@cdktf/provider-aws.glue.GlueJobExecutionPropertyOutputReference", version: "3.0.1" };
function glueJobNotificationPropertyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        notify_delay_after: cdktf.numberToTerraform(struct.notifyDelayAfter),
    };
}
exports.glueJobNotificationPropertyToTerraform = glueJobNotificationPropertyToTerraform;
/**
 * @stability stable
 */
class GlueJobNotificationPropertyOutputReference extends cdktf.ComplexObject {
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
        if (this._notifyDelayAfter) {
            hasAnyValues = true;
            internalValueResult.notifyDelayAfter = this._notifyDelayAfter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._notifyDelayAfter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._notifyDelayAfter = value.notifyDelayAfter;
        }
    }
    /**
     * @stability stable
     */
    get notifyDelayAfter() {
        return this.getNumberAttribute('notify_delay_after');
    }
    /**
     * @stability stable
     */
    set notifyDelayAfter(value) {
        this._notifyDelayAfter = value;
    }
    /**
     * @stability stable
     */
    resetNotifyDelayAfter() {
        this._notifyDelayAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notifyDelayAfterInput() {
        return this._notifyDelayAfter;
    }
}
exports.GlueJobNotificationPropertyOutputReference = GlueJobNotificationPropertyOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GlueJobNotificationPropertyOutputReference[_c] = { fqn: "@cdktf/provider-aws.glue.GlueJobNotificationPropertyOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job}.
 *
 * @stability stable
 */
class GlueJob extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_job.html aws_glue_job} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_job',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // command - computed: false, optional: false, required: true
        this._command = new GlueJobCommandOutputReference(this, "command", true);
        // execution_property - computed: false, optional: true, required: false
        this._executionProperty = new GlueJobExecutionPropertyOutputReference(this, "execution_property", true);
        // notification_property - computed: false, optional: true, required: false
        this._notificationProperty = new GlueJobNotificationPropertyOutputReference(this, "notification_property", true);
        this._connections = config.connections;
        this._defaultArguments = config.defaultArguments;
        this._description = config.description;
        this._glueVersion = config.glueVersion;
        this._maxCapacity = config.maxCapacity;
        this._maxRetries = config.maxRetries;
        this._name = config.name;
        this._nonOverridableArguments = config.nonOverridableArguments;
        this._numberOfWorkers = config.numberOfWorkers;
        this._roleArn = config.roleArn;
        this._securityConfiguration = config.securityConfiguration;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._timeout = config.timeout;
        this._workerType = config.workerType;
        this._command.internalValue = config.command;
        this._executionProperty.internalValue = config.executionProperty;
        this._notificationProperty.internalValue = config.notificationProperty;
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
    get connections() {
        return this.getListAttribute('connections');
    }
    /**
     * @stability stable
     */
    set connections(value) {
        this._connections = value;
    }
    /**
     * @stability stable
     */
    resetConnections() {
        this._connections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionsInput() {
        return this._connections;
    }
    /**
     * @stability stable
     */
    get defaultArguments() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('default_arguments');
    }
    /**
     * @stability stable
     */
    set defaultArguments(value) {
        this._defaultArguments = value;
    }
    /**
     * @stability stable
     */
    resetDefaultArguments() {
        this._defaultArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultArgumentsInput() {
        return this._defaultArguments;
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
    /**
     * @stability stable
     */
    get glueVersion() {
        return this.getStringAttribute('glue_version');
    }
    /**
     * @stability stable
     */
    set glueVersion(value) {
        this._glueVersion = value;
    }
    /**
     * @stability stable
     */
    resetGlueVersion() {
        this._glueVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get glueVersionInput() {
        return this._glueVersion;
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
    get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    /**
     * @stability stable
     */
    set maxCapacity(value) {
        this._maxCapacity = value;
    }
    /**
     * @stability stable
     */
    resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxCapacityInput() {
        return this._maxCapacity;
    }
    /**
     * @stability stable
     */
    get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    /**
     * @stability stable
     */
    set maxRetries(value) {
        this._maxRetries = value;
    }
    /**
     * @stability stable
     */
    resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxRetriesInput() {
        return this._maxRetries;
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
    get nonOverridableArguments() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('non_overridable_arguments');
    }
    /**
     * @stability stable
     */
    set nonOverridableArguments(value) {
        this._nonOverridableArguments = value;
    }
    /**
     * @stability stable
     */
    resetNonOverridableArguments() {
        this._nonOverridableArguments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nonOverridableArgumentsInput() {
        return this._nonOverridableArguments;
    }
    /**
     * @stability stable
     */
    get numberOfWorkers() {
        return this.getNumberAttribute('number_of_workers');
    }
    /**
     * @stability stable
     */
    set numberOfWorkers(value) {
        this._numberOfWorkers = value;
    }
    /**
     * @stability stable
     */
    resetNumberOfWorkers() {
        this._numberOfWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get numberOfWorkersInput() {
        return this._numberOfWorkers;
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
    get securityConfiguration() {
        return this.getStringAttribute('security_configuration');
    }
    /**
     * @stability stable
     */
    set securityConfiguration(value) {
        this._securityConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetSecurityConfiguration() {
        this._securityConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityConfigurationInput() {
        return this._securityConfiguration;
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
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    /**
     * @stability stable
     */
    set timeout(value) {
        this._timeout = value;
    }
    /**
     * @stability stable
     */
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInput() {
        return this._timeout;
    }
    /**
     * @stability stable
     */
    get workerType() {
        return this.getStringAttribute('worker_type');
    }
    /**
     * @stability stable
     */
    set workerType(value) {
        this._workerType = value;
    }
    /**
     * @stability stable
     */
    resetWorkerType() {
        this._workerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get workerTypeInput() {
        return this._workerType;
    }
    /**
     * @stability stable
     */
    get command() {
        return this._command;
    }
    /**
     * @stability stable
     */
    putCommand(value) {
        this._command.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get commandInput() {
        return this._command.internalValue;
    }
    /**
     * @stability stable
     */
    get executionProperty() {
        return this._executionProperty;
    }
    /**
     * @stability stable
     */
    putExecutionProperty(value) {
        this._executionProperty.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetExecutionProperty() {
        this._executionProperty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get executionPropertyInput() {
        return this._executionProperty.internalValue;
    }
    /**
     * @stability stable
     */
    get notificationProperty() {
        return this._notificationProperty;
    }
    /**
     * @stability stable
     */
    putNotificationProperty(value) {
        this._notificationProperty.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetNotificationProperty() {
        this._notificationProperty.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationPropertyInput() {
        return this._notificationProperty.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            connections: cdktf.listMapper(cdktf.stringToTerraform)(this._connections),
            default_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._defaultArguments),
            description: cdktf.stringToTerraform(this._description),
            glue_version: cdktf.stringToTerraform(this._glueVersion),
            max_capacity: cdktf.numberToTerraform(this._maxCapacity),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            name: cdktf.stringToTerraform(this._name),
            non_overridable_arguments: cdktf.hashMapper(cdktf.anyToTerraform)(this._nonOverridableArguments),
            number_of_workers: cdktf.numberToTerraform(this._numberOfWorkers),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            security_configuration: cdktf.stringToTerraform(this._securityConfiguration),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeout: cdktf.numberToTerraform(this._timeout),
            worker_type: cdktf.stringToTerraform(this._workerType),
            command: glueJobCommandToTerraform(this._command.internalValue),
            execution_property: glueJobExecutionPropertyToTerraform(this._executionProperty.internalValue),
            notification_property: glueJobNotificationPropertyToTerraform(this._notificationProperty.internalValue),
        };
    }
}
exports.GlueJob = GlueJob;
_d = JSII_RTTI_SYMBOL_1;
GlueJob[_d] = { fqn: "@cdktf/provider-aws.glue.GlueJob", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GlueJob.tfResourceType = "aws_glue_job";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1qb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2x1ZS9nbHVlLWpvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWtEL0IsU0FBZ0IseUJBQXlCLENBQUMsTUFBdUQ7SUFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNqRSxDQUFBO0FBQ0gsQ0FBQztBQVZELDhEQVVDOzs7O0FBRUQsTUFBYSw2QkFBOEIsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlwRSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFB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QUN6Qyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDaEcsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM1RSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUMvRCxrQkFBa0IsRUFBRSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1lBQzlGLHFCQUFxQixFQUFFLHNDQUFzQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7U0FDeEcsQ0FBQztJQUNKLENBQUM7O0FBN1dILDBCQThXQzs7O0FBNVdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csc0JBQWMsR0FBVyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBHbHVlSm9iQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRBcmd1bWVudHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdsdWVWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heENhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhSZXRyaWVzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm9uT3ZlcnJpZGFibGVBcmd1bWVudHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG51bWJlck9mV29ya2Vycz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlDb25maWd1cmF0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdvcmtlclR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbW1hbmQ6IEdsdWVKb2JDb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleGVjdXRpb25Qcm9wZXJ0eT86IEdsdWVKb2JFeGVjdXRpb25Qcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm90aWZpY2F0aW9uUHJvcGVydHk/OiBHbHVlSm9iTm90aWZpY2F0aW9uUHJvcGVydHk7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVKb2JDb21tYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHB5dGhvblZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NyaXB0TG9jYXRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVKb2JDb21tYW5kVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZUpvYkNvbW1hbmRPdXRwdXRSZWZlcmVuY2UgfCBHbHVlSm9iQ29tbWFuZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgcHl0aG9uX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHl0aG9uVmVyc2lvbiksXG4gICAgc2NyaXB0X2xvY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjcmlwdExvY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZUpvYkNvbW1hbmRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZUpvYkNvbW1hbmQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHl0aG9uVmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHl0aG9uVmVyc2lvbiA9IHRoaXMuX3B5dGhvblZlcnNpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY3JpcHRMb2NhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NyaXB0TG9jYXRpb24gPSB0aGlzLl9zY3JpcHRMb2NhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVKb2JDb21tYW5kIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3B5dGhvblZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY3JpcHRMb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl9weXRob25WZXJzaW9uID0gdmFsdWUucHl0aG9uVmVyc2lvbjtcbiAgICAgIHRoaXMuX3NjcmlwdExvY2F0aW9uID0gdmFsdWUuc2NyaXB0TG9jYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcHl0aG9uX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9weXRob25WZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBweXRob25WZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHl0aG9uX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHB5dGhvblZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3B5dGhvblZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQeXRob25WZXJzaW9uKCkge1xuICAgIHRoaXMuX3B5dGhvblZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB5dGhvblZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHl0aG9uVmVyc2lvbjtcbiAgfVxuXG4gIC8vIHNjcmlwdF9sb2NhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zY3JpcHRMb2NhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2NyaXB0TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY3JpcHRfbG9jYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjcmlwdExvY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY3JpcHRMb2NhdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY3JpcHRMb2NhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JpcHRMb2NhdGlvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlSm9iRXhlY3V0aW9uUHJvcGVydHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4Q29uY3VycmVudFJ1bnM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlSm9iRXhlY3V0aW9uUHJvcGVydHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlSm9iRXhlY3V0aW9uUHJvcGVydHlPdXRwdXRSZWZlcmVuY2UgfCBHbHVlSm9iRXhlY3V0aW9uUHJvcGVydHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfY29uY3VycmVudF9ydW5zOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heENvbmN1cnJlbnRSdW5zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZUpvYkV4ZWN1dGlvblByb3BlcnR5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVKb2JFeGVjdXRpb25Qcm9wZXJ0eSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF4Q29uY3VycmVudFJ1bnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heENvbmN1cnJlbnRSdW5zID0gdGhpcy5fbWF4Q29uY3VycmVudFJ1bnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlSm9iRXhlY3V0aW9uUHJvcGVydHkgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXhDb25jdXJyZW50UnVucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4Q29uY3VycmVudFJ1bnMgPSB2YWx1ZS5tYXhDb25jdXJyZW50UnVucztcbiAgICB9XG4gIH1cblxuICAvLyBtYXhfY29uY3VycmVudF9ydW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heENvbmN1cnJlbnRSdW5zPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhDb25jdXJyZW50UnVucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jb25jdXJyZW50X3J1bnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENvbmN1cnJlbnRSdW5zKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhDb25jdXJyZW50UnVucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heENvbmN1cnJlbnRSdW5zKCkge1xuICAgIHRoaXMuX21heENvbmN1cnJlbnRSdW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDb25jdXJyZW50UnVuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDb25jdXJyZW50UnVucztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlSm9iTm90aWZpY2F0aW9uUHJvcGVydHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vdGlmeURlbGF5QWZ0ZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlSm9iTm90aWZpY2F0aW9uUHJvcGVydHlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlSm9iTm90aWZpY2F0aW9uUHJvcGVydHlPdXRwdXRSZWZlcmVuY2UgfCBHbHVlSm9iTm90aWZpY2F0aW9uUHJvcGVydHkpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBub3RpZnlfZGVsYXlfYWZ0ZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubm90aWZ5RGVsYXlBZnRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVKb2JOb3RpZmljYXRpb25Qcm9wZXJ0eU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlSm9iTm90aWZpY2F0aW9uUHJvcGVydHkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25vdGlmeURlbGF5QWZ0ZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vdGlmeURlbGF5QWZ0ZXIgPSB0aGlzLl9ub3RpZnlEZWxheUFmdGVyO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZUpvYk5vdGlmaWNhdGlvblByb3BlcnR5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbm90aWZ5RGVsYXlBZnRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbm90aWZ5RGVsYXlBZnRlciA9IHZhbHVlLm5vdGlmeURlbGF5QWZ0ZXI7XG4gICAgfVxuICB9XG5cbiAgLy8gbm90aWZ5X2RlbGF5X2FmdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmeURlbGF5QWZ0ZXI/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG5vdGlmeURlbGF5QWZ0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdub3RpZnlfZGVsYXlfYWZ0ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5vdGlmeURlbGF5QWZ0ZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX25vdGlmeURlbGF5QWZ0ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb3RpZnlEZWxheUFmdGVyKCkge1xuICAgIHRoaXMuX25vdGlmeURlbGF5QWZ0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmeURlbGF5QWZ0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZ5RGVsYXlBZnRlcjtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBHbHVlSm9iIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2dsdWVfam9iXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBHbHVlSm9iQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZ2x1ZV9qb2InLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY29ubmVjdGlvbnMgPSBjb25maWcuY29ubmVjdGlvbnM7XG4gICAgdGhpcy5fZGVmYXVsdEFyZ3VtZW50cyA9IGNvbmZpZy5kZWZhdWx0QXJndW1lbnRzO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2dsdWVWZXJzaW9uID0gY29uZmlnLmdsdWVWZXJzaW9uO1xuICAgIHRoaXMuX21heENhcGFjaXR5ID0gY29uZmlnLm1heENhcGFjaXR5O1xuICAgIHRoaXMuX21heFJldHJpZXMgPSBjb25maWcubWF4UmV0cmllcztcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fbm9uT3ZlcnJpZGFibGVBcmd1bWVudHMgPSBjb25maWcubm9uT3ZlcnJpZGFibGVBcmd1bWVudHM7XG4gICAgdGhpcy5fbnVtYmVyT2ZXb3JrZXJzID0gY29uZmlnLm51bWJlck9mV29ya2VycztcbiAgICB0aGlzLl9yb2xlQXJuID0gY29uZmlnLnJvbGVBcm47XG4gICAgdGhpcy5fc2VjdXJpdHlDb25maWd1cmF0aW9uID0gY29uZmlnLnNlY3VyaXR5Q29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3RpbWVvdXQgPSBjb25maWcudGltZW91dDtcbiAgICB0aGlzLl93b3JrZXJUeXBlID0gY29uZmlnLndvcmtlclR5cGU7XG4gICAgdGhpcy5fY29tbWFuZC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvbW1hbmQ7XG4gICAgdGhpcy5fZXhlY3V0aW9uUHJvcGVydHkuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5leGVjdXRpb25Qcm9wZXJ0eTtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25Qcm9wZXJ0eS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLm5vdGlmaWNhdGlvblByb3BlcnR5O1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2Nvbm5lY3Rpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25uZWN0aW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jb25uZWN0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbm5lY3Rpb25zKCkge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25uZWN0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9ucztcbiAgfVxuXG4gIC8vIGRlZmF1bHRfYXJndW1lbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRBcmd1bWVudHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRBcmd1bWVudHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2RlZmF1bHRfYXJndW1lbnRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdEFyZ3VtZW50cyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGVmYXVsdEFyZ3VtZW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRBcmd1bWVudHMoKSB7XG4gICAgdGhpcy5fZGVmYXVsdEFyZ3VtZW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdEFyZ3VtZW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QXJndW1lbnRzO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGdsdWVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dsdWVWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBnbHVlVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dsdWVfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2x1ZVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dsdWVWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2x1ZVZlcnNpb24oKSB7XG4gICAgdGhpcy5fZ2x1ZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdsdWVWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsdWVWZXJzaW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1heF9jYXBhY2l0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heENhcGFjaXR5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9jYXBhY2l0eScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4Q2FwYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4Q2FwYWNpdHkoKSB7XG4gICAgdGhpcy5fbWF4Q2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heENhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heENhcGFjaXR5O1xuICB9XG5cbiAgLy8gbWF4X3JldHJpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4UmV0cmllcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4UmV0cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9yZXRyaWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhSZXRyaWVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhSZXRyaWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4UmV0cmllcygpIHtcbiAgICB0aGlzLl9tYXhSZXRyaWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhSZXRyaWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFJldHJpZXM7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG5vbl9vdmVycmlkYWJsZV9hcmd1bWVudHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm9uT3ZlcnJpZGFibGVBcmd1bWVudHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG5vbk92ZXJyaWRhYmxlQXJndW1lbnRzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdub25fb3ZlcnJpZGFibGVfYXJndW1lbnRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbm9uT3ZlcnJpZGFibGVBcmd1bWVudHModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX25vbk92ZXJyaWRhYmxlQXJndW1lbnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm9uT3ZlcnJpZGFibGVBcmd1bWVudHMoKSB7XG4gICAgdGhpcy5fbm9uT3ZlcnJpZGFibGVBcmd1bWVudHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vbk92ZXJyaWRhYmxlQXJndW1lbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vbk92ZXJyaWRhYmxlQXJndW1lbnRzO1xuICB9XG5cbiAgLy8gbnVtYmVyX29mX3dvcmtlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbnVtYmVyT2ZXb3JrZXJzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBudW1iZXJPZldvcmtlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdudW1iZXJfb2Zfd29ya2VycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbnVtYmVyT2ZXb3JrZXJzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9udW1iZXJPZldvcmtlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROdW1iZXJPZldvcmtlcnMoKSB7XG4gICAgdGhpcy5fbnVtYmVyT2ZXb3JrZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBudW1iZXJPZldvcmtlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZXb3JrZXJzO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlDb25maWd1cmF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWN1cml0eV9jb25maWd1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eUNvbmZpZ3VyYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlY3VyaXR5Q29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9zZWN1cml0eUNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUNvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdGltZW91dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXQoKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICB9XG5cbiAgLy8gd29ya2VyX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd29ya2VyVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd29ya2VyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dvcmtlcl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB3b3JrZXJUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93b3JrZXJUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V29ya2VyVHlwZSgpIHtcbiAgICB0aGlzLl93b3JrZXJUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3b3JrZXJUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtlclR5cGU7XG4gIH1cblxuICAvLyBjb21tYW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbW1hbmQgPSBuZXcgR2x1ZUpvYkNvbW1hbmRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29tbWFuZFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb21tYW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21tYW5kO1xuICB9XG4gIHB1YmxpYyBwdXRDb21tYW5kKHZhbHVlOiBHbHVlSm9iQ29tbWFuZCkge1xuICAgIHRoaXMuX2NvbW1hbmQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tYW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1hbmQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGV4ZWN1dGlvbl9wcm9wZXJ0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGVjdXRpb25Qcm9wZXJ0eSA9IG5ldyBHbHVlSm9iRXhlY3V0aW9uUHJvcGVydHlPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZXhlY3V0aW9uX3Byb3BlcnR5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGV4ZWN1dGlvblByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Qcm9wZXJ0eTtcbiAgfVxuICBwdWJsaWMgcHV0RXhlY3V0aW9uUHJvcGVydHkodmFsdWU6IEdsdWVKb2JFeGVjdXRpb25Qcm9wZXJ0eSkge1xuICAgIHRoaXMuX2V4ZWN1dGlvblByb3BlcnR5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGVjdXRpb25Qcm9wZXJ0eSgpIHtcbiAgICB0aGlzLl9leGVjdXRpb25Qcm9wZXJ0eS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleGVjdXRpb25Qcm9wZXJ0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Qcm9wZXJ0eS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbm90aWZpY2F0aW9uX3Byb3BlcnR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vdGlmaWNhdGlvblByb3BlcnR5ID0gbmV3IEdsdWVKb2JOb3RpZmljYXRpb25Qcm9wZXJ0eU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJub3RpZmljYXRpb25fcHJvcGVydHlcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbm90aWZpY2F0aW9uUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblByb3BlcnR5O1xuICB9XG4gIHB1YmxpYyBwdXROb3RpZmljYXRpb25Qcm9wZXJ0eSh2YWx1ZTogR2x1ZUpvYk5vdGlmaWNhdGlvblByb3BlcnR5KSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uUHJvcGVydHkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5vdGlmaWNhdGlvblByb3BlcnR5KCkge1xuICAgIHRoaXMuX25vdGlmaWNhdGlvblByb3BlcnR5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvblByb3BlcnR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvblByb3BlcnR5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbm5lY3Rpb25zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jb25uZWN0aW9ucyksXG4gICAgICBkZWZhdWx0X2FyZ3VtZW50czogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fZGVmYXVsdEFyZ3VtZW50cyksXG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZ2x1ZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nbHVlVmVyc2lvbiksXG4gICAgICBtYXhfY2FwYWNpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heENhcGFjaXR5KSxcbiAgICAgIG1heF9yZXRyaWVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhSZXRyaWVzKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgbm9uX292ZXJyaWRhYmxlX2FyZ3VtZW50czogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fbm9uT3ZlcnJpZGFibGVBcmd1bWVudHMpLFxuICAgICAgbnVtYmVyX29mX3dvcmtlcnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX251bWJlck9mV29ya2VycyksXG4gICAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcm9sZUFybiksXG4gICAgICBzZWN1cml0eV9jb25maWd1cmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZWN1cml0eUNvbmZpZ3VyYXRpb24pLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB0aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0KSxcbiAgICAgIHdvcmtlcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl93b3JrZXJUeXBlKSxcbiAgICAgIGNvbW1hbmQ6IGdsdWVKb2JDb21tYW5kVG9UZXJyYWZvcm0odGhpcy5fY29tbWFuZC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGV4ZWN1dGlvbl9wcm9wZXJ0eTogZ2x1ZUpvYkV4ZWN1dGlvblByb3BlcnR5VG9UZXJyYWZvcm0odGhpcy5fZXhlY3V0aW9uUHJvcGVydHkuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBub3RpZmljYXRpb25fcHJvcGVydHk6IGdsdWVKb2JOb3RpZmljYXRpb25Qcm9wZXJ0eVRvVGVycmFmb3JtKHRoaXMuX25vdGlmaWNhdGlvblByb3BlcnR5LmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==