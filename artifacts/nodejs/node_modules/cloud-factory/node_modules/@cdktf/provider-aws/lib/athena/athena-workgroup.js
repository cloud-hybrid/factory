"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AthenaWorkgroup = exports.AthenaWorkgroupConfigurationOutputReference = exports.athenaWorkgroupConfigurationToTerraform = exports.AthenaWorkgroupConfigurationResultConfigurationOutputReference = exports.athenaWorkgroupConfigurationResultConfigurationToTerraform = exports.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference = exports.athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform = exports.AthenaWorkgroupConfigurationEngineVersionOutputReference = exports.athenaWorkgroupConfigurationEngineVersionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function athenaWorkgroupConfigurationEngineVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        selected_engine_version: cdktf.stringToTerraform(struct.selectedEngineVersion),
    };
}
exports.athenaWorkgroupConfigurationEngineVersionToTerraform = athenaWorkgroupConfigurationEngineVersionToTerraform;
/**
 * @stability stable
 */
class AthenaWorkgroupConfigurationEngineVersionOutputReference extends cdktf.ComplexObject {
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
        if (this._selectedEngineVersion) {
            hasAnyValues = true;
            internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._selectedEngineVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._selectedEngineVersion = value.selectedEngineVersion;
        }
    }
    /**
     * @stability stable
     */
    get selectedEngineVersion() {
        return this.getStringAttribute('selected_engine_version');
    }
    /**
     * @stability stable
     */
    set selectedEngineVersion(value) {
        this._selectedEngineVersion = value;
    }
    /**
     * @stability stable
     */
    resetSelectedEngineVersion() {
        this._selectedEngineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get selectedEngineVersionInput() {
        return this._selectedEngineVersion;
    }
}
exports.AthenaWorkgroupConfigurationEngineVersionOutputReference = AthenaWorkgroupConfigurationEngineVersionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
AthenaWorkgroupConfigurationEngineVersionOutputReference[_a] = { fqn: "@cdktf/provider-aws.athena.AthenaWorkgroupConfigurationEngineVersionOutputReference", version: "3.0.1" };
function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        encryption_option: cdktf.stringToTerraform(struct.encryptionOption),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
    };
}
exports.athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform = athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform;
/**
 * @stability stable
 */
class AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._encryptionOption) {
            hasAnyValues = true;
            internalValueResult.encryptionOption = this._encryptionOption;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._encryptionOption = undefined;
            this._kmsKeyArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._encryptionOption = value.encryptionOption;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }
    /**
     * @stability stable
     */
    get encryptionOption() {
        return this.getStringAttribute('encryption_option');
    }
    /**
     * @stability stable
     */
    set encryptionOption(value) {
        this._encryptionOption = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionOption() {
        this._encryptionOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionOptionInput() {
        return this._encryptionOption;
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
}
exports.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference = AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference[_b] = { fqn: "@cdktf/provider-aws.athena.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference", version: "3.0.1" };
function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        output_location: cdktf.stringToTerraform(struct.outputLocation),
        encryption_configuration: athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
    };
}
exports.athenaWorkgroupConfigurationResultConfigurationToTerraform = athenaWorkgroupConfigurationResultConfigurationToTerraform;
/**
 * @stability stable
 */
class AthenaWorkgroupConfigurationResultConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // encryption_configuration - computed: false, optional: true, required: false
        this._encryptionConfiguration = new AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._outputLocation) {
            hasAnyValues = true;
            internalValueResult.outputLocation = this._outputLocation;
        }
        if ((_f = this._encryptionConfiguration) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = (_g = this._encryptionConfiguration) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._outputLocation = undefined;
            this._encryptionConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._outputLocation = value.outputLocation;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get outputLocation() {
        return this.getStringAttribute('output_location');
    }
    /**
     * @stability stable
     */
    set outputLocation(value) {
        this._outputLocation = value;
    }
    /**
     * @stability stable
     */
    resetOutputLocation() {
        this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputLocationInput() {
        return this._outputLocation;
    }
    /**
     * @stability stable
     */
    get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    /**
     * @stability stable
     */
    putEncryptionConfiguration(value) {
        this._encryptionConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }
}
exports.AthenaWorkgroupConfigurationResultConfigurationOutputReference = AthenaWorkgroupConfigurationResultConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
AthenaWorkgroupConfigurationResultConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.athena.AthenaWorkgroupConfigurationResultConfigurationOutputReference", version: "3.0.1" };
function athenaWorkgroupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct.bytesScannedCutoffPerQuery),
        enforce_workgroup_configuration: cdktf.booleanToTerraform(struct.enforceWorkgroupConfiguration),
        publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct.publishCloudwatchMetricsEnabled),
        requester_pays_enabled: cdktf.booleanToTerraform(struct.requesterPaysEnabled),
        engine_version: athenaWorkgroupConfigurationEngineVersionToTerraform(struct.engineVersion),
        result_configuration: athenaWorkgroupConfigurationResultConfigurationToTerraform(struct.resultConfiguration),
    };
}
exports.athenaWorkgroupConfigurationToTerraform = athenaWorkgroupConfigurationToTerraform;
/**
 * @stability stable
 */
class AthenaWorkgroupConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // engine_version - computed: false, optional: true, required: false
        this._engineVersion = new AthenaWorkgroupConfigurationEngineVersionOutputReference(this, "engine_version", true);
        // result_configuration - computed: false, optional: true, required: false
        this._resultConfiguration = new AthenaWorkgroupConfigurationResultConfigurationOutputReference(this, "result_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g, _h, _j;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bytesScannedCutoffPerQuery) {
            hasAnyValues = true;
            internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
        }
        if (this._enforceWorkgroupConfiguration) {
            hasAnyValues = true;
            internalValueResult.enforceWorkgroupConfiguration = this._enforceWorkgroupConfiguration;
        }
        if (this._publishCloudwatchMetricsEnabled) {
            hasAnyValues = true;
            internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
        }
        if (this._requesterPaysEnabled) {
            hasAnyValues = true;
            internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
        }
        if ((_f = this._engineVersion) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.engineVersion = (_g = this._engineVersion) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        if ((_h = this._resultConfiguration) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.resultConfiguration = (_j = this._resultConfiguration) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bytesScannedCutoffPerQuery = undefined;
            this._enforceWorkgroupConfiguration = undefined;
            this._publishCloudwatchMetricsEnabled = undefined;
            this._requesterPaysEnabled = undefined;
            this._engineVersion.internalValue = undefined;
            this._resultConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
            this._enforceWorkgroupConfiguration = value.enforceWorkgroupConfiguration;
            this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
            this._requesterPaysEnabled = value.requesterPaysEnabled;
            this._engineVersion.internalValue = value.engineVersion;
            this._resultConfiguration.internalValue = value.resultConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get bytesScannedCutoffPerQuery() {
        return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
    }
    /**
     * @stability stable
     */
    set bytesScannedCutoffPerQuery(value) {
        this._bytesScannedCutoffPerQuery = value;
    }
    /**
     * @stability stable
     */
    resetBytesScannedCutoffPerQuery() {
        this._bytesScannedCutoffPerQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bytesScannedCutoffPerQueryInput() {
        return this._bytesScannedCutoffPerQuery;
    }
    /**
     * @stability stable
     */
    get enforceWorkgroupConfiguration() {
        return this.getBooleanAttribute('enforce_workgroup_configuration');
    }
    /**
     * @stability stable
     */
    set enforceWorkgroupConfiguration(value) {
        this._enforceWorkgroupConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetEnforceWorkgroupConfiguration() {
        this._enforceWorkgroupConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enforceWorkgroupConfigurationInput() {
        return this._enforceWorkgroupConfiguration;
    }
    /**
     * @stability stable
     */
    get publishCloudwatchMetricsEnabled() {
        return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled');
    }
    /**
     * @stability stable
     */
    set publishCloudwatchMetricsEnabled(value) {
        this._publishCloudwatchMetricsEnabled = value;
    }
    /**
     * @stability stable
     */
    resetPublishCloudwatchMetricsEnabled() {
        this._publishCloudwatchMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publishCloudwatchMetricsEnabledInput() {
        return this._publishCloudwatchMetricsEnabled;
    }
    /**
     * @stability stable
     */
    get requesterPaysEnabled() {
        return this.getBooleanAttribute('requester_pays_enabled');
    }
    /**
     * @stability stable
     */
    set requesterPaysEnabled(value) {
        this._requesterPaysEnabled = value;
    }
    /**
     * @stability stable
     */
    resetRequesterPaysEnabled() {
        this._requesterPaysEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requesterPaysEnabledInput() {
        return this._requesterPaysEnabled;
    }
    /**
     * @stability stable
     */
    get engineVersion() {
        return this._engineVersion;
    }
    /**
     * @stability stable
     */
    putEngineVersion(value) {
        this._engineVersion.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEngineVersion() {
        this._engineVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineVersionInput() {
        return this._engineVersion.internalValue;
    }
    /**
     * @stability stable
     */
    get resultConfiguration() {
        return this._resultConfiguration;
    }
    /**
     * @stability stable
     */
    putResultConfiguration(value) {
        this._resultConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetResultConfiguration() {
        this._resultConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resultConfigurationInput() {
        return this._resultConfiguration.internalValue;
    }
}
exports.AthenaWorkgroupConfigurationOutputReference = AthenaWorkgroupConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
AthenaWorkgroupConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.athena.AthenaWorkgroupConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup}.
 *
 * @stability stable
 */
class AthenaWorkgroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_athena_workgroup',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // configuration - computed: false, optional: true, required: false
        this._configuration = new AthenaWorkgroupConfigurationOutputReference(this, "configuration", true);
        this._description = config.description;
        this._forceDestroy = config.forceDestroy;
        this._name = config.name;
        this._state = config.state;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._configuration.internalValue = config.configuration;
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
    get forceDestroy() {
        return this.getBooleanAttribute('force_destroy');
    }
    /**
     * @stability stable
     */
    set forceDestroy(value) {
        this._forceDestroy = value;
    }
    /**
     * @stability stable
     */
    resetForceDestroy() {
        this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forceDestroyInput() {
        return this._forceDestroy;
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
    get state() {
        return this.getStringAttribute('state');
    }
    /**
     * @stability stable
     */
    set state(value) {
        this._state = value;
    }
    /**
     * @stability stable
     */
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stateInput() {
        return this._state;
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
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            name: cdktf.stringToTerraform(this._name),
            state: cdktf.stringToTerraform(this._state),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            configuration: athenaWorkgroupConfigurationToTerraform(this._configuration.internalValue),
        };
    }
}
exports.AthenaWorkgroup = AthenaWorkgroup;
_e = JSII_RTTI_SYMBOL_1;
AthenaWorkgroup[_e] = { fqn: "@cdktf/provider-aws.athena.AthenaWorkgroup", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
AthenaWorkgroup.tfResourceType = "aws_athena_workgroup";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRoZW5hLXdvcmtncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdGhlbmEvYXRoZW5hLXdvcmtncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXdCL0IsU0FBZ0Isb0RBQW9ELENBQUMsTUFBNkc7SUFDaEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO0tBQ2hGLENBQUE7QUFDSCxDQUFDO0FBUkQsb0hBUUM7Ozs7QUFFRCxNQUFhLHdEQUF5RCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9GLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDekU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNB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QUFjLEdBQVcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEF0aGVuYVdvcmtncm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9yY2VEZXN0cm95PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvbj86IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25FbmdpbmVWZXJzaW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlbGVjdGVkRW5naW5lVmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25FbmdpbmVWZXJzaW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvbkVuZ2luZVZlcnNpb25PdXRwdXRSZWZlcmVuY2UgfCBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uRW5naW5lVmVyc2lvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlbGVjdGVkX2VuZ2luZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlbGVjdGVkRW5naW5lVmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25FbmdpbmVWZXJzaW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25FbmdpbmVWZXJzaW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZEVuZ2luZVZlcnNpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlbGVjdGVkRW5naW5lVmVyc2lvbiA9IHRoaXMuX3NlbGVjdGVkRW5naW5lVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25FbmdpbmVWZXJzaW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRFbmdpbmVWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVuZ2luZVZlcnNpb24gPSB2YWx1ZS5zZWxlY3RlZEVuZ2luZVZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gc2VsZWN0ZWRfZW5naW5lX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRFbmdpbmVWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZWxlY3RlZEVuZ2luZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWxlY3RlZF9lbmdpbmVfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRFbmdpbmVWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWxlY3RlZEVuZ2luZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWxlY3RlZEVuZ2luZVZlcnNpb24oKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRFbmdpbmVWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWxlY3RlZEVuZ2luZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRFbmdpbmVWZXJzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGlvbk9wdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uUmVzdWx0Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuY3J5cHRpb25fb3B0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRpb25PcHRpb24pLFxuICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5jcnlwdGlvbk9wdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5jcnlwdGlvbk9wdGlvbiA9IHRoaXMuX2VuY3J5cHRpb25PcHRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUFybiA9IHRoaXMuX2ttc0tleUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uT3B0aW9uID0gdmFsdWUuZW5jcnlwdGlvbk9wdGlvbjtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlLmttc0tleUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX29wdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmNyeXB0aW9uT3B0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uT3B0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5jcnlwdGlvbl9vcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRpb25PcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuY3J5cHRpb25PcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNyeXB0aW9uT3B0aW9uKCkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25PcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25PcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGlvbk9wdGlvbjtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uUmVzdWx0Q29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG91dHB1dExvY2F0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/OiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uUmVzdWx0Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uUmVzdWx0Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgb3V0cHV0X2xvY2F0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm91dHB1dExvY2F0aW9uKSxcbiAgICBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb246IGF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRpb25Db25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX291dHB1dExvY2F0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdXRwdXRMb2NhdGlvbiA9IHRoaXMuX291dHB1dExvY2F0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuY3J5cHRpb25Db25maWd1cmF0aW9uID0gdGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uUmVzdWx0Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX291dHB1dExvY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fb3V0cHV0TG9jYXRpb24gPSB2YWx1ZS5vdXRwdXRMb2NhdGlvbjtcbiAgICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBvdXRwdXRfbG9jYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3V0cHV0TG9jYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG91dHB1dExvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3V0cHV0X2xvY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBvdXRwdXRMb2NhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3V0cHV0TG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdXRwdXRMb2NhdGlvbigpIHtcbiAgICB0aGlzLl9vdXRwdXRMb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0TG9jYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0TG9jYXRpb247XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRFbmNyeXB0aW9uQ29uZmlndXJhdGlvbih2YWx1ZTogQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmNyeXB0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBieXRlc1NjYW5uZWRDdXRvZmZQZXJRdWVyeT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmZvcmNlV29ya2dyb3VwQ29uZmlndXJhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RlclBheXNFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5naW5lVmVyc2lvbj86IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25FbmdpbmVWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdWx0Q29uZmlndXJhdGlvbj86IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnl0ZXNfc2Nhbm5lZF9jdXRvZmZfcGVyX3F1ZXJ5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ5dGVzU2Nhbm5lZEN1dG9mZlBlclF1ZXJ5KSxcbiAgICBlbmZvcmNlX3dvcmtncm91cF9jb25maWd1cmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmZvcmNlV29ya2dyb3VwQ29uZmlndXJhdGlvbiksXG4gICAgcHVibGlzaF9jbG91ZHdhdGNoX21ldHJpY3NfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucHVibGlzaENsb3Vkd2F0Y2hNZXRyaWNzRW5hYmxlZCksXG4gICAgcmVxdWVzdGVyX3BheXNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVxdWVzdGVyUGF5c0VuYWJsZWQpLFxuICAgIGVuZ2luZV92ZXJzaW9uOiBhdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uRW5naW5lVmVyc2lvblRvVGVycmFmb3JtKHN0cnVjdCEuZW5naW5lVmVyc2lvbiksXG4gICAgcmVzdWx0X2NvbmZpZ3VyYXRpb246IGF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25SZXN1bHRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5yZXN1bHRDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ieXRlc1NjYW5uZWRDdXRvZmZQZXJRdWVyeSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnl0ZXNTY2FubmVkQ3V0b2ZmUGVyUXVlcnkgPSB0aGlzLl9ieXRlc1NjYW5uZWRDdXRvZmZQZXJRdWVyeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuZm9yY2VXb3JrZ3JvdXBDb25maWd1cmF0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmZvcmNlV29ya2dyb3VwQ29uZmlndXJhdGlvbiA9IHRoaXMuX2VuZm9yY2VXb3JrZ3JvdXBDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHVibGlzaENsb3Vkd2F0Y2hNZXRyaWNzRW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHVibGlzaENsb3Vkd2F0Y2hNZXRyaWNzRW5hYmxlZCA9IHRoaXMuX3B1Ymxpc2hDbG91ZHdhdGNoTWV0cmljc0VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXF1ZXN0ZXJQYXlzRW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVxdWVzdGVyUGF5c0VuYWJsZWQgPSB0aGlzLl9yZXF1ZXN0ZXJQYXlzRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuZ2luZVZlcnNpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuZ2luZVZlcnNpb24gPSB0aGlzLl9lbmdpbmVWZXJzaW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzdWx0Q29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzdWx0Q29uZmlndXJhdGlvbiA9IHRoaXMuX3Jlc3VsdENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnl0ZXNTY2FubmVkQ3V0b2ZmUGVyUXVlcnkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmZvcmNlV29ya2dyb3VwQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3B1Ymxpc2hDbG91ZHdhdGNoTWV0cmljc0VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXF1ZXN0ZXJQYXlzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VuZ2luZVZlcnNpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc3VsdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnl0ZXNTY2FubmVkQ3V0b2ZmUGVyUXVlcnkgPSB2YWx1ZS5ieXRlc1NjYW5uZWRDdXRvZmZQZXJRdWVyeTtcbiAgICAgIHRoaXMuX2VuZm9yY2VXb3JrZ3JvdXBDb25maWd1cmF0aW9uID0gdmFsdWUuZW5mb3JjZVdvcmtncm91cENvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9wdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkID0gdmFsdWUucHVibGlzaENsb3Vkd2F0Y2hNZXRyaWNzRW5hYmxlZDtcbiAgICAgIHRoaXMuX3JlcXVlc3RlclBheXNFbmFibGVkID0gdmFsdWUucmVxdWVzdGVyUGF5c0VuYWJsZWQ7XG4gICAgICB0aGlzLl9lbmdpbmVWZXJzaW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5lbmdpbmVWZXJzaW9uO1xuICAgICAgdGhpcy5fcmVzdWx0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVzdWx0Q29uZmlndXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBieXRlc19zY2FubmVkX2N1dG9mZl9wZXJfcXVlcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnl0ZXNTY2FubmVkQ3V0b2ZmUGVyUXVlcnk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJ5dGVzU2Nhbm5lZEN1dG9mZlBlclF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYnl0ZXNfc2Nhbm5lZF9jdXRvZmZfcGVyX3F1ZXJ5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBieXRlc1NjYW5uZWRDdXRvZmZQZXJRdWVyeSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYnl0ZXNTY2FubmVkQ3V0b2ZmUGVyUXVlcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCeXRlc1NjYW5uZWRDdXRvZmZQZXJRdWVyeSgpIHtcbiAgICB0aGlzLl9ieXRlc1NjYW5uZWRDdXRvZmZQZXJRdWVyeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnl0ZXNTY2FubmVkQ3V0b2ZmUGVyUXVlcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnl0ZXNTY2FubmVkQ3V0b2ZmUGVyUXVlcnk7XG4gIH1cblxuICAvLyBlbmZvcmNlX3dvcmtncm91cF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuZm9yY2VXb3JrZ3JvdXBDb25maWd1cmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmZvcmNlV29ya2dyb3VwQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmZvcmNlX3dvcmtncm91cF9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5mb3JjZVdvcmtncm91cENvbmZpZ3VyYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuZm9yY2VXb3JrZ3JvdXBDb25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5mb3JjZVdvcmtncm91cENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZW5mb3JjZVdvcmtncm91cENvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZm9yY2VXb3JrZ3JvdXBDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZm9yY2VXb3JrZ3JvdXBDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgLy8gcHVibGlzaF9jbG91ZHdhdGNoX21ldHJpY3NfZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3B1Ymxpc2hfY2xvdWR3YXRjaF9tZXRyaWNzX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHVibGlzaENsb3Vkd2F0Y2hNZXRyaWNzRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9wdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWJsaXNoQ2xvdWR3YXRjaE1ldHJpY3NFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3B1Ymxpc2hDbG91ZHdhdGNoTWV0cmljc0VuYWJsZWQ7XG4gIH1cblxuICAvLyByZXF1ZXN0ZXJfcGF5c19lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVlc3RlclBheXNFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1ZXN0ZXJQYXlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1ZXN0ZXJfcGF5c19lbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWVzdGVyUGF5c0VuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcXVlc3RlclBheXNFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdGVyUGF5c0VuYWJsZWQoKSB7XG4gICAgdGhpcy5fcmVxdWVzdGVyUGF5c0VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVlc3RlclBheXNFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RlclBheXNFbmFibGVkO1xuICB9XG5cbiAgLy8gZW5naW5lX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5naW5lVmVyc2lvbiA9IG5ldyBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uRW5naW5lVmVyc2lvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJlbmdpbmVfdmVyc2lvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmVWZXJzaW9uO1xuICB9XG4gIHB1YmxpYyBwdXRFbmdpbmVWZXJzaW9uKHZhbHVlOiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uRW5naW5lVmVyc2lvbikge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZ2luZVZlcnNpb24oKSB7XG4gICAgdGhpcy5fZW5naW5lVmVyc2lvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZVZlcnNpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlc3VsdF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc3VsdENvbmZpZ3VyYXRpb24gPSBuZXcgQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmVzdWx0X2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVzdWx0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UmVzdWx0Q29uZmlndXJhdGlvbih2YWx1ZTogQXRoZW5hV29ya2dyb3VwQ29uZmlndXJhdGlvblJlc3VsdENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9yZXN1bHRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXN1bHRDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3Jlc3VsdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzdWx0Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEF0aGVuYVdvcmtncm91cCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19hdGhlbmFfd29ya2dyb3VwXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBdGhlbmFXb3JrZ3JvdXBDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hdGhlbmFfd29ya2dyb3VwJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2ZvcmNlRGVzdHJveSA9IGNvbmZpZy5mb3JjZURlc3Ryb3k7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3N0YXRlID0gY29uZmlnLnN0YXRlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGZvcmNlX2Rlc3Ryb3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZm9yY2VEZXN0cm95PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBmb3JjZURlc3Ryb3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZm9yY2VfZGVzdHJveScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcmNlRGVzdHJveSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZm9yY2VEZXN0cm95ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9yY2VEZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvcmNlRGVzdHJveSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9yY2VEZXN0cm95SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlRGVzdHJveTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHN0YXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0ZSgpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9uID0gbmV3IEF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDb25maWd1cmF0aW9uKHZhbHVlOiBBdGhlbmFXb3JrZ3JvdXBDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZm9yY2VfZGVzdHJveTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZvcmNlRGVzdHJveSksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHN0YXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGF0ZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IGF0aGVuYVdvcmtncm91cENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==