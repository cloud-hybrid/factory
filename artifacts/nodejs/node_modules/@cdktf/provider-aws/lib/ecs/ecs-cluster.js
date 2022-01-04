"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsCluster = exports.ecsClusterSettingToTerraform = exports.ecsClusterDefaultCapacityProviderStrategyToTerraform = exports.EcsClusterConfigurationOutputReference = exports.ecsClusterConfigurationToTerraform = exports.EcsClusterConfigurationExecuteCommandConfigurationOutputReference = exports.ecsClusterConfigurationExecuteCommandConfigurationToTerraform = exports.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference = exports.ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloud_watch_encryption_enabled: cdktf.booleanToTerraform(struct.cloudWatchEncryptionEnabled),
        cloud_watch_log_group_name: cdktf.stringToTerraform(struct.cloudWatchLogGroupName),
        s3_bucket_encryption_enabled: cdktf.booleanToTerraform(struct.s3BucketEncryptionEnabled),
        s3_bucket_name: cdktf.stringToTerraform(struct.s3BucketName),
        s3_key_prefix: cdktf.stringToTerraform(struct.s3KeyPrefix),
    };
}
exports.ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform = ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform;
/**
 * @stability stable
 */
class EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudWatchEncryptionEnabled) {
            hasAnyValues = true;
            internalValueResult.cloudWatchEncryptionEnabled = this._cloudWatchEncryptionEnabled;
        }
        if (this._cloudWatchLogGroupName) {
            hasAnyValues = true;
            internalValueResult.cloudWatchLogGroupName = this._cloudWatchLogGroupName;
        }
        if (this._s3BucketEncryptionEnabled) {
            hasAnyValues = true;
            internalValueResult.s3BucketEncryptionEnabled = this._s3BucketEncryptionEnabled;
        }
        if (this._s3BucketName) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        if (this._s3KeyPrefix) {
            hasAnyValues = true;
            internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudWatchEncryptionEnabled = undefined;
            this._cloudWatchLogGroupName = undefined;
            this._s3BucketEncryptionEnabled = undefined;
            this._s3BucketName = undefined;
            this._s3KeyPrefix = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudWatchEncryptionEnabled = value.cloudWatchEncryptionEnabled;
            this._cloudWatchLogGroupName = value.cloudWatchLogGroupName;
            this._s3BucketEncryptionEnabled = value.s3BucketEncryptionEnabled;
            this._s3BucketName = value.s3BucketName;
            this._s3KeyPrefix = value.s3KeyPrefix;
        }
    }
    /**
     * @stability stable
     */
    get cloudWatchEncryptionEnabled() {
        return this.getBooleanAttribute('cloud_watch_encryption_enabled');
    }
    /**
     * @stability stable
     */
    set cloudWatchEncryptionEnabled(value) {
        this._cloudWatchEncryptionEnabled = value;
    }
    /**
     * @stability stable
     */
    resetCloudWatchEncryptionEnabled() {
        this._cloudWatchEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudWatchEncryptionEnabledInput() {
        return this._cloudWatchEncryptionEnabled;
    }
    /**
     * @stability stable
     */
    get cloudWatchLogGroupName() {
        return this.getStringAttribute('cloud_watch_log_group_name');
    }
    /**
     * @stability stable
     */
    set cloudWatchLogGroupName(value) {
        this._cloudWatchLogGroupName = value;
    }
    /**
     * @stability stable
     */
    resetCloudWatchLogGroupName() {
        this._cloudWatchLogGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudWatchLogGroupNameInput() {
        return this._cloudWatchLogGroupName;
    }
    /**
     * @stability stable
     */
    get s3BucketEncryptionEnabled() {
        return this.getBooleanAttribute('s3_bucket_encryption_enabled');
    }
    /**
     * @stability stable
     */
    set s3BucketEncryptionEnabled(value) {
        this._s3BucketEncryptionEnabled = value;
    }
    /**
     * @stability stable
     */
    resetS3BucketEncryptionEnabled() {
        this._s3BucketEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BucketEncryptionEnabledInput() {
        return this._s3BucketEncryptionEnabled;
    }
    /**
     * @stability stable
     */
    get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    /**
     * @stability stable
     */
    set s3BucketName(value) {
        this._s3BucketName = value;
    }
    /**
     * @stability stable
     */
    resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BucketNameInput() {
        return this._s3BucketName;
    }
    /**
     * @stability stable
     */
    get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    /**
     * @stability stable
     */
    set s3KeyPrefix(value) {
        this._s3KeyPrefix = value;
    }
    /**
     * @stability stable
     */
    resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
}
exports.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference = EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.ecs.EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference", version: "3.0.1" };
function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        logging: cdktf.stringToTerraform(struct.logging),
        log_configuration: ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct.logConfiguration),
    };
}
exports.ecsClusterConfigurationExecuteCommandConfigurationToTerraform = ecsClusterConfigurationExecuteCommandConfigurationToTerraform;
/**
 * @stability stable
 */
class EcsClusterConfigurationExecuteCommandConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // log_configuration - computed: false, optional: true, required: false
        this._logConfiguration = new EcsClusterConfigurationExecuteCommandConfigurationLogConfigurationOutputReference(this, "log_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._kmsKeyId) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._logging) {
            hasAnyValues = true;
            internalValueResult.logging = this._logging;
        }
        if ((_e = this._logConfiguration) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.logConfiguration = (_f = this._logConfiguration) === null || _f === void 0 ? void 0 : _f.internalValue;
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
            this._logging = undefined;
            this._logConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyId = value.kmsKeyId;
            this._logging = value.logging;
            this._logConfiguration.internalValue = value.logConfiguration;
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
    get logging() {
        return this.getStringAttribute('logging');
    }
    /**
     * @stability stable
     */
    set logging(value) {
        this._logging = value;
    }
    /**
     * @stability stable
     */
    resetLogging() {
        this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get loggingInput() {
        return this._logging;
    }
    /**
     * @stability stable
     */
    get logConfiguration() {
        return this._logConfiguration;
    }
    /**
     * @stability stable
     */
    putLogConfiguration(value) {
        this._logConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }
}
exports.EcsClusterConfigurationExecuteCommandConfigurationOutputReference = EcsClusterConfigurationExecuteCommandConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
EcsClusterConfigurationExecuteCommandConfigurationOutputReference[_b] = { fqn: "@cdktf/provider-aws.ecs.EcsClusterConfigurationExecuteCommandConfigurationOutputReference", version: "3.0.1" };
function ecsClusterConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        execute_command_configuration: ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct.executeCommandConfiguration),
    };
}
exports.ecsClusterConfigurationToTerraform = ecsClusterConfigurationToTerraform;
/**
 * @stability stable
 */
class EcsClusterConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // execute_command_configuration - computed: false, optional: true, required: false
        this._executeCommandConfiguration = new EcsClusterConfigurationExecuteCommandConfigurationOutputReference(this, "execute_command_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_e = this._executeCommandConfiguration) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.executeCommandConfiguration = (_f = this._executeCommandConfiguration) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._executeCommandConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._executeCommandConfiguration.internalValue = value.executeCommandConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get executeCommandConfiguration() {
        return this._executeCommandConfiguration;
    }
    /**
     * @stability stable
     */
    putExecuteCommandConfiguration(value) {
        this._executeCommandConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetExecuteCommandConfiguration() {
        this._executeCommandConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get executeCommandConfigurationInput() {
        return this._executeCommandConfiguration.internalValue;
    }
}
exports.EcsClusterConfigurationOutputReference = EcsClusterConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
EcsClusterConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.ecs.EcsClusterConfigurationOutputReference", version: "3.0.1" };
function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        base: cdktf.numberToTerraform(struct.base),
        capacity_provider: cdktf.stringToTerraform(struct.capacityProvider),
        weight: cdktf.numberToTerraform(struct.weight),
    };
}
exports.ecsClusterDefaultCapacityProviderStrategyToTerraform = ecsClusterDefaultCapacityProviderStrategyToTerraform;
function ecsClusterSettingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.ecsClusterSettingToTerraform = ecsClusterSettingToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster}.
 *
 * @stability stable
 */
class EcsCluster extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ecs_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // configuration - computed: false, optional: true, required: false
        this._configuration = new EcsClusterConfigurationOutputReference(this, "configuration", true);
        this._capacityProviders = config.capacityProviders;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._configuration.internalValue = config.configuration;
        this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
        this._setting = config.setting;
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
    get capacityProviders() {
        return this.getListAttribute('capacity_providers');
    }
    /**
     * @stability stable
     */
    set capacityProviders(value) {
        this._capacityProviders = value;
    }
    /**
     * @stability stable
     */
    resetCapacityProviders() {
        this._capacityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityProvidersInput() {
        return this._capacityProviders;
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
    get configuration() {
        return this._configuration;
    }
    /**
     * @stability stable
     */
    putConfiguration(value) {
        this._configuration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationInput() {
        return this._configuration.internalValue;
    }
    /**
     * @stability stable
     */
    get defaultCapacityProviderStrategy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('default_capacity_provider_strategy');
    }
    /**
     * @stability stable
     */
    set defaultCapacityProviderStrategy(value) {
        this._defaultCapacityProviderStrategy = value;
    }
    /**
     * @stability stable
     */
    resetDefaultCapacityProviderStrategy() {
        this._defaultCapacityProviderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultCapacityProviderStrategyInput() {
        return this._defaultCapacityProviderStrategy;
    }
    /**
     * @stability stable
     */
    get setting() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('setting');
    }
    /**
     * @stability stable
     */
    set setting(value) {
        this._setting = value;
    }
    /**
     * @stability stable
     */
    resetSetting() {
        this._setting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get settingInput() {
        return this._setting;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            configuration: ecsClusterConfigurationToTerraform(this._configuration.internalValue),
            default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
            setting: cdktf.listMapper(ecsClusterSettingToTerraform)(this._setting),
        };
    }
}
exports.EcsCluster = EcsCluster;
_d = JSII_RTTI_SYMBOL_1;
EcsCluster[_d] = { fqn: "@cdktf/provider-aws.ecs.EcsCluster", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
EcsCluster.tfResourceType = "aws_ecs_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWNzL2Vjcy1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0MvQixTQUFnQiw2RUFBNkUsQ0FBQyxNQUErSjtJQUMzUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDN0YsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxzQkFBc0IsQ0FBQztRQUNuRiw0QkFBNEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ3pGLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDNUQsQ0FBQTtBQUNILENBQUM7QUFaRCxzS0FZQzs7OztBQUVELE1BQWEsaUZBQWtGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJeEgsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdB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QUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDdEYsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGFBQWEsRUFBRSxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUNwRixrQ0FBa0MsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO1lBQ2pKLE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN2RSxDQUFDO0lBQ0osQ0FBQzs7QUE3S0gsZ0NBOEtDOzs7QUE1S0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyx5QkFBYyxHQUFXLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBFY3NDbHVzdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlQcm92aWRlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb24/OiBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdENhcGFjaXR5UHJvdmlkZXJTdHJhdGVneT86IEVjc0NsdXN0ZXJEZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5W107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNldHRpbmc/OiBFY3NDbHVzdGVyU2V0dGluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbkV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbkxvZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3VkV2F0Y2hFbmNyeXB0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWRXYXRjaExvZ0dyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzQnVja2V0TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzS2V5UHJlZml4Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25FeGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb25Mb2dDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25FeGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb25Mb2dDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25FeGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb25Mb2dDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xvdWRfd2F0Y2hfZW5jcnlwdGlvbl9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWQpLFxuICAgIGNsb3VkX3dhdGNoX2xvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3VkV2F0Y2hMb2dHcm91cE5hbWUpLFxuICAgIHMzX2J1Y2tldF9lbmNyeXB0aW9uX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnMzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQpLFxuICAgIHMzX2J1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzQnVja2V0TmFtZSksXG4gICAgczNfa2V5X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0tleVByZWZpeCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uTG9nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbkV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbkxvZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nsb3VkV2F0Y2hFbmNyeXB0aW9uRW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWRXYXRjaEVuY3J5cHRpb25FbmFibGVkID0gdGhpcy5fY2xvdWRXYXRjaEVuY3J5cHRpb25FbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWRXYXRjaExvZ0dyb3VwTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWRXYXRjaExvZ0dyb3VwTmFtZSA9IHRoaXMuX2Nsb3VkV2F0Y2hMb2dHcm91cE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0J1Y2tldEVuY3J5cHRpb25FbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM0J1Y2tldEVuY3J5cHRpb25FbmFibGVkID0gdGhpcy5fczNCdWNrZXRFbmNyeXB0aW9uRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3MzQnVja2V0TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNCdWNrZXROYW1lID0gdGhpcy5fczNCdWNrZXROYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNLZXlQcmVmaXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzS2V5UHJlZml4ID0gdGhpcy5fczNLZXlQcmVmaXg7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbkV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbkxvZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbG91ZFdhdGNoTG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNCdWNrZXRFbmNyeXB0aW9uRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzQnVja2V0TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzS2V5UHJlZml4ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWQgPSB2YWx1ZS5jbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWQ7XG4gICAgICB0aGlzLl9jbG91ZFdhdGNoTG9nR3JvdXBOYW1lID0gdmFsdWUuY2xvdWRXYXRjaExvZ0dyb3VwTmFtZTtcbiAgICAgIHRoaXMuX3MzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQgPSB2YWx1ZS5zM0J1Y2tldEVuY3J5cHRpb25FbmFibGVkO1xuICAgICAgdGhpcy5fczNCdWNrZXROYW1lID0gdmFsdWUuczNCdWNrZXROYW1lO1xuICAgICAgdGhpcy5fczNLZXlQcmVmaXggPSB2YWx1ZS5zM0tleVByZWZpeDtcbiAgICB9XG4gIH1cblxuICAvLyBjbG91ZF93YXRjaF9lbmNyeXB0aW9uX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWRXYXRjaEVuY3J5cHRpb25FbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2xvdWRfd2F0Y2hfZW5jcnlwdGlvbl9lbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY2xvdWRXYXRjaEVuY3J5cHRpb25FbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWQoKSB7XG4gICAgdGhpcy5fY2xvdWRXYXRjaEVuY3J5cHRpb25FbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZFdhdGNoRW5jcnlwdGlvbkVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWRXYXRjaEVuY3J5cHRpb25FbmFibGVkO1xuICB9XG5cbiAgLy8gY2xvdWRfd2F0Y2hfbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWRXYXRjaExvZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2xvdWRXYXRjaExvZ0dyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nsb3VkX3dhdGNoX2xvZ19ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbG91ZFdhdGNoTG9nR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbG91ZFdhdGNoTG9nR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWRXYXRjaExvZ0dyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9jbG91ZFdhdGNoTG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZFdhdGNoTG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3VkV2F0Y2hMb2dHcm91cE5hbWU7XG4gIH1cblxuICAvLyBzM19idWNrZXRfZW5jcnlwdGlvbl9lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHMzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnczNfYnVja2V0X2VuY3J5cHRpb25fZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3MzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0J1Y2tldEVuY3J5cHRpb25FbmFibGVkKCkge1xuICAgIHRoaXMuX3MzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQnVja2V0RW5jcnlwdGlvbkVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNCdWNrZXRFbmNyeXB0aW9uRW5hYmxlZDtcbiAgfVxuXG4gIC8vIHMzX2J1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQnVja2V0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNCdWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfYnVja2V0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzQnVja2V0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNCdWNrZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNCdWNrZXROYW1lKCkge1xuICAgIHRoaXMuX3MzQnVja2V0TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNCdWNrZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQnVja2V0TmFtZTtcbiAgfVxuXG4gIC8vIHMzX2tleV9wcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNLZXlQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHMzS2V5UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfa2V5X3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgczNLZXlQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzS2V5UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNLZXlQcmVmaXgoKSB7XG4gICAgdGhpcy5fczNLZXlQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzS2V5UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzS2V5UHJlZml4O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nZ2luZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nQ29uZmlndXJhdGlvbj86IEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uTG9nQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25FeGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbkV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIGxvZ2dpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nZ2luZyksXG4gICAgbG9nX2NvbmZpZ3VyYXRpb246IGVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uTG9nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubG9nQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9rbXNLZXlJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5SWQgPSB0aGlzLl9rbXNLZXlJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ2dpbmcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ2dpbmcgPSB0aGlzLl9sb2dnaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nQ29uZmlndXJhdGlvbiA9IHRoaXMuX2xvZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbkV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nZ2luZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZS5rbXNLZXlJZDtcbiAgICAgIHRoaXMuX2xvZ2dpbmcgPSB2YWx1ZS5sb2dnaW5nO1xuICAgICAgdGhpcy5fbG9nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUubG9nQ29uZmlndXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIGxvZ2dpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nZ2luZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ2dpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ2dpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ2dpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dnaW5nKCkge1xuICAgIHRoaXMuX2xvZ2dpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ2dpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nZ2luZztcbiAgfVxuXG4gIC8vIGxvZ19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0NvbmZpZ3VyYXRpb24gPSBuZXcgRWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25FeGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb25Mb2dDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImxvZ19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxvZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dExvZ0NvbmZpZ3VyYXRpb24odmFsdWU6IEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uTG9nQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2xvZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fbG9nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbj86IEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXhlY3V0ZV9jb21tYW5kX2NvbmZpZ3VyYXRpb246IGVjc0NsdXN0ZXJDb25maWd1cmF0aW9uRXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24gPSB0aGlzLl9leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2V4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBleGVjdXRlX2NvbW1hbmRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24gPSBuZXcgRWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25FeGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZXhlY3V0ZV9jb21tYW5kX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbih2YWx1ZTogRWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25FeGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9leGVjdXRlQ29tbWFuZENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0ZUNvbW1hbmRDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGVDb21tYW5kQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc0NsdXN0ZXJEZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhc2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcGFjaXR5UHJvdmlkZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NDbHVzdGVyRGVmYXVsdENhcGFjaXR5UHJvdmlkZXJTdHJhdGVneVRvVGVycmFmb3JtKHN0cnVjdD86IEVjc0NsdXN0ZXJEZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmFzZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5iYXNlKSxcbiAgICBjYXBhY2l0eV9wcm92aWRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVByb3ZpZGVyKSxcbiAgICB3ZWlnaHQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEud2VpZ2h0KSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc0NsdXN0ZXJTZXR0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc0NsdXN0ZXJTZXR0aW5nVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzQ2x1c3RlclNldHRpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVjc0NsdXN0ZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWNzX2NsdXN0ZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVjc0NsdXN0ZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lY3NfY2x1c3RlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jYXBhY2l0eVByb3ZpZGVycyA9IGNvbmZpZy5jYXBhY2l0eVByb3ZpZGVycztcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9kZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5ID0gY29uZmlnLmRlZmF1bHRDYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3k7XG4gICAgdGhpcy5fc2V0dGluZyA9IGNvbmZpZy5zZXR0aW5nO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3Byb3ZpZGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVByb3ZpZGVycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBjYXBhY2l0eVByb3ZpZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjYXBhY2l0eV9wcm92aWRlcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhcGFjaXR5UHJvdmlkZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NhcGFjaXR5UHJvdmlkZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2FwYWNpdHlQcm92aWRlcnMoKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlQcm92aWRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UHJvdmlkZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UHJvdmlkZXJzO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvbiA9IG5ldyBFY3NDbHVzdGVyQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dENvbmZpZ3VyYXRpb24odmFsdWU6IEVjc0NsdXN0ZXJDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9jYXBhY2l0eV9wcm92aWRlcl9zdHJhdGVneSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5PzogRWNzQ2x1c3RlckRlZmF1bHRDYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3lbXTsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdENhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVmYXVsdF9jYXBhY2l0eV9wcm92aWRlcl9zdHJhdGVneScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRDYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3kodmFsdWU6IEVjc0NsdXN0ZXJEZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5W10pIHtcbiAgICB0aGlzLl9kZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdENhcGFjaXR5UHJvdmlkZXJTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDYXBhY2l0eVByb3ZpZGVyU3RyYXRlZ3k7XG4gIH1cblxuICAvLyBzZXR0aW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NldHRpbmc/OiBFY3NDbHVzdGVyU2V0dGluZ1tdOyBcbiAgcHVibGljIGdldCBzZXR0aW5nKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzZXR0aW5nJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2V0dGluZyh2YWx1ZTogRWNzQ2x1c3RlclNldHRpbmdbXSkge1xuICAgIHRoaXMuX3NldHRpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXR0aW5nKCkge1xuICAgIHRoaXMuX3NldHRpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNldHRpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FwYWNpdHlfcHJvdmlkZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jYXBhY2l0eVByb3ZpZGVycyksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgY29uZmlndXJhdGlvbjogZWNzQ2x1c3RlckNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgZGVmYXVsdF9jYXBhY2l0eV9wcm92aWRlcl9zdHJhdGVneTogY2RrdGYubGlzdE1hcHBlcihlY3NDbHVzdGVyRGVmYXVsdENhcGFjaXR5UHJvdmlkZXJTdHJhdGVneVRvVGVycmFmb3JtKSh0aGlzLl9kZWZhdWx0Q2FwYWNpdHlQcm92aWRlclN0cmF0ZWd5KSxcbiAgICAgIHNldHRpbmc6IGNka3RmLmxpc3RNYXBwZXIoZWNzQ2x1c3RlclNldHRpbmdUb1RlcnJhZm9ybSkodGhpcy5fc2V0dGluZyksXG4gICAgfTtcbiAgfVxufVxuIl19