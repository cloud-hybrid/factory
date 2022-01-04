"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsCluster = exports.RdsClusterTimeoutsOutputReference = exports.rdsClusterTimeoutsToTerraform = exports.RdsClusterScalingConfigurationOutputReference = exports.rdsClusterScalingConfigurationToTerraform = exports.RdsClusterS3ImportOutputReference = exports.rdsClusterS3ImportToTerraform = exports.RdsClusterRestoreToPointInTimeOutputReference = exports.rdsClusterRestoreToPointInTimeToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function rdsClusterRestoreToPointInTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        restore_to_time: cdktf.stringToTerraform(struct.restoreToTime),
        restore_type: cdktf.stringToTerraform(struct.restoreType),
        source_cluster_identifier: cdktf.stringToTerraform(struct.sourceClusterIdentifier),
        use_latest_restorable_time: cdktf.booleanToTerraform(struct.useLatestRestorableTime),
    };
}
exports.rdsClusterRestoreToPointInTimeToTerraform = rdsClusterRestoreToPointInTimeToTerraform;
/**
 * @stability stable
 */
class RdsClusterRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
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
        if (this._restoreToTime) {
            hasAnyValues = true;
            internalValueResult.restoreToTime = this._restoreToTime;
        }
        if (this._restoreType) {
            hasAnyValues = true;
            internalValueResult.restoreType = this._restoreType;
        }
        if (this._sourceClusterIdentifier) {
            hasAnyValues = true;
            internalValueResult.sourceClusterIdentifier = this._sourceClusterIdentifier;
        }
        if (this._useLatestRestorableTime) {
            hasAnyValues = true;
            internalValueResult.useLatestRestorableTime = this._useLatestRestorableTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._restoreToTime = undefined;
            this._restoreType = undefined;
            this._sourceClusterIdentifier = undefined;
            this._useLatestRestorableTime = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._restoreToTime = value.restoreToTime;
            this._restoreType = value.restoreType;
            this._sourceClusterIdentifier = value.sourceClusterIdentifier;
            this._useLatestRestorableTime = value.useLatestRestorableTime;
        }
    }
    /**
     * @stability stable
     */
    get restoreToTime() {
        return this.getStringAttribute('restore_to_time');
    }
    /**
     * @stability stable
     */
    set restoreToTime(value) {
        this._restoreToTime = value;
    }
    /**
     * @stability stable
     */
    resetRestoreToTime() {
        this._restoreToTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restoreToTimeInput() {
        return this._restoreToTime;
    }
    /**
     * @stability stable
     */
    get restoreType() {
        return this.getStringAttribute('restore_type');
    }
    /**
     * @stability stable
     */
    set restoreType(value) {
        this._restoreType = value;
    }
    /**
     * @stability stable
     */
    resetRestoreType() {
        this._restoreType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restoreTypeInput() {
        return this._restoreType;
    }
    /**
     * @stability stable
     */
    get sourceClusterIdentifier() {
        return this.getStringAttribute('source_cluster_identifier');
    }
    /**
     * @stability stable
     */
    set sourceClusterIdentifier(value) {
        this._sourceClusterIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceClusterIdentifierInput() {
        return this._sourceClusterIdentifier;
    }
    /**
     * @stability stable
     */
    get useLatestRestorableTime() {
        return this.getBooleanAttribute('use_latest_restorable_time');
    }
    /**
     * @stability stable
     */
    set useLatestRestorableTime(value) {
        this._useLatestRestorableTime = value;
    }
    /**
     * @stability stable
     */
    resetUseLatestRestorableTime() {
        this._useLatestRestorableTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get useLatestRestorableTimeInput() {
        return this._useLatestRestorableTime;
    }
}
exports.RdsClusterRestoreToPointInTimeOutputReference = RdsClusterRestoreToPointInTimeOutputReference;
_a = JSII_RTTI_SYMBOL_1;
RdsClusterRestoreToPointInTimeOutputReference[_a] = { fqn: "@cdktf/provider-aws.rds.RdsClusterRestoreToPointInTimeOutputReference", version: "3.0.1" };
function rdsClusterS3ImportToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        ingestion_role: cdktf.stringToTerraform(struct.ingestionRole),
        source_engine: cdktf.stringToTerraform(struct.sourceEngine),
        source_engine_version: cdktf.stringToTerraform(struct.sourceEngineVersion),
    };
}
exports.rdsClusterS3ImportToTerraform = rdsClusterS3ImportToTerraform;
/**
 * @stability stable
 */
class RdsClusterS3ImportOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketName) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._ingestionRole) {
            hasAnyValues = true;
            internalValueResult.ingestionRole = this._ingestionRole;
        }
        if (this._sourceEngine) {
            hasAnyValues = true;
            internalValueResult.sourceEngine = this._sourceEngine;
        }
        if (this._sourceEngineVersion) {
            hasAnyValues = true;
            internalValueResult.sourceEngineVersion = this._sourceEngineVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._ingestionRole = undefined;
            this._sourceEngine = undefined;
            this._sourceEngineVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._ingestionRole = value.ingestionRole;
            this._sourceEngine = value.sourceEngine;
            this._sourceEngineVersion = value.sourceEngineVersion;
        }
    }
    /**
     * @stability stable
     */
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    /**
     * @stability stable
     */
    set bucketName(value) {
        this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketNameInput() {
        return this._bucketName;
    }
    /**
     * @stability stable
     */
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    /**
     * @stability stable
     */
    set bucketPrefix(value) {
        this._bucketPrefix = value;
    }
    /**
     * @stability stable
     */
    resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketPrefixInput() {
        return this._bucketPrefix;
    }
    /**
     * @stability stable
     */
    get ingestionRole() {
        return this.getStringAttribute('ingestion_role');
    }
    /**
     * @stability stable
     */
    set ingestionRole(value) {
        this._ingestionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ingestionRoleInput() {
        return this._ingestionRole;
    }
    /**
     * @stability stable
     */
    get sourceEngine() {
        return this.getStringAttribute('source_engine');
    }
    /**
     * @stability stable
     */
    set sourceEngine(value) {
        this._sourceEngine = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceEngineInput() {
        return this._sourceEngine;
    }
    /**
     * @stability stable
     */
    get sourceEngineVersion() {
        return this.getStringAttribute('source_engine_version');
    }
    /**
     * @stability stable
     */
    set sourceEngineVersion(value) {
        this._sourceEngineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceEngineVersionInput() {
        return this._sourceEngineVersion;
    }
}
exports.RdsClusterS3ImportOutputReference = RdsClusterS3ImportOutputReference;
_b = JSII_RTTI_SYMBOL_1;
RdsClusterS3ImportOutputReference[_b] = { fqn: "@cdktf/provider-aws.rds.RdsClusterS3ImportOutputReference", version: "3.0.1" };
function rdsClusterScalingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_pause: cdktf.booleanToTerraform(struct.autoPause),
        max_capacity: cdktf.numberToTerraform(struct.maxCapacity),
        min_capacity: cdktf.numberToTerraform(struct.minCapacity),
        seconds_until_auto_pause: cdktf.numberToTerraform(struct.secondsUntilAutoPause),
        timeout_action: cdktf.stringToTerraform(struct.timeoutAction),
    };
}
exports.rdsClusterScalingConfigurationToTerraform = rdsClusterScalingConfigurationToTerraform;
/**
 * @stability stable
 */
class RdsClusterScalingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._autoPause) {
            hasAnyValues = true;
            internalValueResult.autoPause = this._autoPause;
        }
        if (this._maxCapacity) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._secondsUntilAutoPause) {
            hasAnyValues = true;
            internalValueResult.secondsUntilAutoPause = this._secondsUntilAutoPause;
        }
        if (this._timeoutAction) {
            hasAnyValues = true;
            internalValueResult.timeoutAction = this._timeoutAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoPause = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._secondsUntilAutoPause = undefined;
            this._timeoutAction = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoPause = value.autoPause;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._secondsUntilAutoPause = value.secondsUntilAutoPause;
            this._timeoutAction = value.timeoutAction;
        }
    }
    /**
     * @stability stable
     */
    get autoPause() {
        return this.getBooleanAttribute('auto_pause');
    }
    /**
     * @stability stable
     */
    set autoPause(value) {
        this._autoPause = value;
    }
    /**
     * @stability stable
     */
    resetAutoPause() {
        this._autoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoPauseInput() {
        return this._autoPause;
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
    get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    /**
     * @stability stable
     */
    set minCapacity(value) {
        this._minCapacity = value;
    }
    /**
     * @stability stable
     */
    resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minCapacityInput() {
        return this._minCapacity;
    }
    /**
     * @stability stable
     */
    get secondsUntilAutoPause() {
        return this.getNumberAttribute('seconds_until_auto_pause');
    }
    /**
     * @stability stable
     */
    set secondsUntilAutoPause(value) {
        this._secondsUntilAutoPause = value;
    }
    /**
     * @stability stable
     */
    resetSecondsUntilAutoPause() {
        this._secondsUntilAutoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secondsUntilAutoPauseInput() {
        return this._secondsUntilAutoPause;
    }
    /**
     * @stability stable
     */
    get timeoutAction() {
        return this.getStringAttribute('timeout_action');
    }
    /**
     * @stability stable
     */
    set timeoutAction(value) {
        this._timeoutAction = value;
    }
    /**
     * @stability stable
     */
    resetTimeoutAction() {
        this._timeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutActionInput() {
        return this._timeoutAction;
    }
}
exports.RdsClusterScalingConfigurationOutputReference = RdsClusterScalingConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
RdsClusterScalingConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.rds.RdsClusterScalingConfigurationOutputReference", version: "3.0.1" };
function rdsClusterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
exports.rdsClusterTimeoutsToTerraform = rdsClusterTimeoutsToTerraform;
/**
 * @stability stable
 */
class RdsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
        if (this._create) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    /**
     * @stability stable
     */
    get create() {
        return this.getStringAttribute('create');
    }
    /**
     * @stability stable
     */
    set create(value) {
        this._create = value;
    }
    /**
     * @stability stable
     */
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createInput() {
        return this._create;
    }
    /**
     * @stability stable
     */
    get delete() {
        return this.getStringAttribute('delete');
    }
    /**
     * @stability stable
     */
    set delete(value) {
        this._delete = value;
    }
    /**
     * @stability stable
     */
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteInput() {
        return this._delete;
    }
    /**
     * @stability stable
     */
    get update() {
        return this.getStringAttribute('update');
    }
    /**
     * @stability stable
     */
    set update(value) {
        this._update = value;
    }
    /**
     * @stability stable
     */
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get updateInput() {
        return this._update;
    }
}
exports.RdsClusterTimeoutsOutputReference = RdsClusterTimeoutsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
RdsClusterTimeoutsOutputReference[_d] = { fqn: "@cdktf/provider-aws.rds.RdsClusterTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster}.
 *
 * @stability stable
 */
class RdsCluster extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster.html aws_rds_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // restore_to_point_in_time - computed: false, optional: true, required: false
        this._restoreToPointInTime = new RdsClusterRestoreToPointInTimeOutputReference(this, "restore_to_point_in_time", true);
        // s3_import - computed: false, optional: true, required: false
        this._s3Import = new RdsClusterS3ImportOutputReference(this, "s3_import", true);
        // scaling_configuration - computed: false, optional: true, required: false
        this._scalingConfiguration = new RdsClusterScalingConfigurationOutputReference(this, "scaling_configuration", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new RdsClusterTimeoutsOutputReference(this, "timeouts", true);
        this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        this._applyImmediately = config.applyImmediately;
        this._availabilityZones = config.availabilityZones;
        this._backtrackWindow = config.backtrackWindow;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._clusterIdentifier = config.clusterIdentifier;
        this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
        this._clusterMembers = config.clusterMembers;
        this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        this._databaseName = config.databaseName;
        this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
        this._dbInstanceParameterGroupName = config.dbInstanceParameterGroupName;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._deletionProtection = config.deletionProtection;
        this._enableGlobalWriteForwarding = config.enableGlobalWriteForwarding;
        this._enableHttpEndpoint = config.enableHttpEndpoint;
        this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
        this._engine = config.engine;
        this._engineMode = config.engineMode;
        this._engineVersion = config.engineVersion;
        this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        this._globalClusterIdentifier = config.globalClusterIdentifier;
        this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
        this._iamRoles = config.iamRoles;
        this._kmsKeyId = config.kmsKeyId;
        this._masterPassword = config.masterPassword;
        this._masterUsername = config.masterUsername;
        this._port = config.port;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._replicationSourceIdentifier = config.replicationSourceIdentifier;
        this._skipFinalSnapshot = config.skipFinalSnapshot;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._sourceRegion = config.sourceRegion;
        this._storageEncrypted = config.storageEncrypted;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._restoreToPointInTime.internalValue = config.restoreToPointInTime;
        this._s3Import.internalValue = config.s3Import;
        this._scalingConfiguration.internalValue = config.scalingConfiguration;
        this._timeouts.internalValue = config.timeouts;
    }
    /**
     * @stability stable
     */
    get allowMajorVersionUpgrade() {
        return this.getBooleanAttribute('allow_major_version_upgrade');
    }
    /**
     * @stability stable
     */
    set allowMajorVersionUpgrade(value) {
        this._allowMajorVersionUpgrade = value;
    }
    /**
     * @stability stable
     */
    resetAllowMajorVersionUpgrade() {
        this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowMajorVersionUpgradeInput() {
        return this._allowMajorVersionUpgrade;
    }
    /**
     * @stability stable
     */
    get applyImmediately() {
        return this.getBooleanAttribute('apply_immediately');
    }
    /**
     * @stability stable
     */
    set applyImmediately(value) {
        this._applyImmediately = value;
    }
    /**
     * @stability stable
     */
    resetApplyImmediately() {
        this._applyImmediately = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applyImmediatelyInput() {
        return this._applyImmediately;
    }
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
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    /**
     * @stability stable
     */
    set availabilityZones(value) {
        this._availabilityZones = value;
    }
    /**
     * @stability stable
     */
    resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get availabilityZonesInput() {
        return this._availabilityZones;
    }
    /**
     * @stability stable
     */
    get backtrackWindow() {
        return this.getNumberAttribute('backtrack_window');
    }
    /**
     * @stability stable
     */
    set backtrackWindow(value) {
        this._backtrackWindow = value;
    }
    /**
     * @stability stable
     */
    resetBacktrackWindow() {
        this._backtrackWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get backtrackWindowInput() {
        return this._backtrackWindow;
    }
    /**
     * @stability stable
     */
    get backupRetentionPeriod() {
        return this.getNumberAttribute('backup_retention_period');
    }
    /**
     * @stability stable
     */
    set backupRetentionPeriod(value) {
        this._backupRetentionPeriod = value;
    }
    /**
     * @stability stable
     */
    resetBackupRetentionPeriod() {
        this._backupRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get backupRetentionPeriodInput() {
        return this._backupRetentionPeriod;
    }
    /**
     * @stability stable
     */
    get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    /**
     * @stability stable
     */
    set clusterIdentifier(value) {
        this._clusterIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }
    /**
     * @stability stable
     */
    get clusterIdentifierPrefix() {
        return this.getStringAttribute('cluster_identifier_prefix');
    }
    /**
     * @stability stable
     */
    set clusterIdentifierPrefix(value) {
        this._clusterIdentifierPrefix = value;
    }
    /**
     * @stability stable
     */
    resetClusterIdentifierPrefix() {
        this._clusterIdentifierPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdentifierPrefixInput() {
        return this._clusterIdentifierPrefix;
    }
    /**
     * @stability stable
     */
    get clusterMembers() {
        return this.getListAttribute('cluster_members');
    }
    /**
     * @stability stable
     */
    set clusterMembers(value) {
        this._clusterMembers = value;
    }
    /**
     * @stability stable
     */
    resetClusterMembers() {
        this._clusterMembers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterMembersInput() {
        return this._clusterMembers;
    }
    // cluster_resource_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clusterResourceId() {
        return this.getStringAttribute('cluster_resource_id');
    }
    /**
     * @stability stable
     */
    get copyTagsToSnapshot() {
        return this.getBooleanAttribute('copy_tags_to_snapshot');
    }
    /**
     * @stability stable
     */
    set copyTagsToSnapshot(value) {
        this._copyTagsToSnapshot = value;
    }
    /**
     * @stability stable
     */
    resetCopyTagsToSnapshot() {
        this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copyTagsToSnapshotInput() {
        return this._copyTagsToSnapshot;
    }
    /**
     * @stability stable
     */
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    /**
     * @stability stable
     */
    set databaseName(value) {
        this._databaseName = value;
    }
    /**
     * @stability stable
     */
    resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseNameInput() {
        return this._databaseName;
    }
    /**
     * @stability stable
     */
    get dbClusterParameterGroupName() {
        return this.getStringAttribute('db_cluster_parameter_group_name');
    }
    /**
     * @stability stable
     */
    set dbClusterParameterGroupName(value) {
        this._dbClusterParameterGroupName = value;
    }
    /**
     * @stability stable
     */
    resetDbClusterParameterGroupName() {
        this._dbClusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dbClusterParameterGroupNameInput() {
        return this._dbClusterParameterGroupName;
    }
    /**
     * @stability stable
     */
    get dbInstanceParameterGroupName() {
        return this.getStringAttribute('db_instance_parameter_group_name');
    }
    /**
     * @stability stable
     */
    set dbInstanceParameterGroupName(value) {
        this._dbInstanceParameterGroupName = value;
    }
    /**
     * @stability stable
     */
    resetDbInstanceParameterGroupName() {
        this._dbInstanceParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dbInstanceParameterGroupNameInput() {
        return this._dbInstanceParameterGroupName;
    }
    /**
     * @stability stable
     */
    get dbSubnetGroupName() {
        return this.getStringAttribute('db_subnet_group_name');
    }
    /**
     * @stability stable
     */
    set dbSubnetGroupName(value) {
        this._dbSubnetGroupName = value;
    }
    /**
     * @stability stable
     */
    resetDbSubnetGroupName() {
        this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dbSubnetGroupNameInput() {
        return this._dbSubnetGroupName;
    }
    /**
     * @stability stable
     */
    get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    /**
     * @stability stable
     */
    set deletionProtection(value) {
        this._deletionProtection = value;
    }
    /**
     * @stability stable
     */
    resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deletionProtectionInput() {
        return this._deletionProtection;
    }
    /**
     * @stability stable
     */
    get enableGlobalWriteForwarding() {
        return this.getBooleanAttribute('enable_global_write_forwarding');
    }
    /**
     * @stability stable
     */
    set enableGlobalWriteForwarding(value) {
        this._enableGlobalWriteForwarding = value;
    }
    /**
     * @stability stable
     */
    resetEnableGlobalWriteForwarding() {
        this._enableGlobalWriteForwarding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableGlobalWriteForwardingInput() {
        return this._enableGlobalWriteForwarding;
    }
    /**
     * @stability stable
     */
    get enableHttpEndpoint() {
        return this.getBooleanAttribute('enable_http_endpoint');
    }
    /**
     * @stability stable
     */
    set enableHttpEndpoint(value) {
        this._enableHttpEndpoint = value;
    }
    /**
     * @stability stable
     */
    resetEnableHttpEndpoint() {
        this._enableHttpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableHttpEndpointInput() {
        return this._enableHttpEndpoint;
    }
    /**
     * @stability stable
     */
    get enabledCloudwatchLogsExports() {
        return this.getListAttribute('enabled_cloudwatch_logs_exports');
    }
    /**
     * @stability stable
     */
    set enabledCloudwatchLogsExports(value) {
        this._enabledCloudwatchLogsExports = value;
    }
    /**
     * @stability stable
     */
    resetEnabledCloudwatchLogsExports() {
        this._enabledCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledCloudwatchLogsExportsInput() {
        return this._enabledCloudwatchLogsExports;
    }
    // endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    /**
     * @stability stable
     */
    get engine() {
        return this.getStringAttribute('engine');
    }
    /**
     * @stability stable
     */
    set engine(value) {
        this._engine = value;
    }
    /**
     * @stability stable
     */
    resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineInput() {
        return this._engine;
    }
    /**
     * @stability stable
     */
    get engineMode() {
        return this.getStringAttribute('engine_mode');
    }
    /**
     * @stability stable
     */
    set engineMode(value) {
        this._engineMode = value;
    }
    /**
     * @stability stable
     */
    resetEngineMode() {
        this._engineMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineModeInput() {
        return this._engineMode;
    }
    /**
     * @stability stable
     */
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    /**
     * @stability stable
     */
    set engineVersion(value) {
        this._engineVersion = value;
    }
    /**
     * @stability stable
     */
    resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineVersionInput() {
        return this._engineVersion;
    }
    // engine_version_actual - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get engineVersionActual() {
        return this.getStringAttribute('engine_version_actual');
    }
    /**
     * @stability stable
     */
    get finalSnapshotIdentifier() {
        return this.getStringAttribute('final_snapshot_identifier');
    }
    /**
     * @stability stable
     */
    set finalSnapshotIdentifier(value) {
        this._finalSnapshotIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetFinalSnapshotIdentifier() {
        this._finalSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get finalSnapshotIdentifierInput() {
        return this._finalSnapshotIdentifier;
    }
    /**
     * @stability stable
     */
    get globalClusterIdentifier() {
        return this.getStringAttribute('global_cluster_identifier');
    }
    /**
     * @stability stable
     */
    set globalClusterIdentifier(value) {
        this._globalClusterIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetGlobalClusterIdentifier() {
        this._globalClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get globalClusterIdentifierInput() {
        return this._globalClusterIdentifier;
    }
    // hosted_zone_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    /**
     * @stability stable
     */
    get iamDatabaseAuthenticationEnabled() {
        return this.getBooleanAttribute('iam_database_authentication_enabled');
    }
    /**
     * @stability stable
     */
    set iamDatabaseAuthenticationEnabled(value) {
        this._iamDatabaseAuthenticationEnabled = value;
    }
    /**
     * @stability stable
     */
    resetIamDatabaseAuthenticationEnabled() {
        this._iamDatabaseAuthenticationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamDatabaseAuthenticationEnabledInput() {
        return this._iamDatabaseAuthenticationEnabled;
    }
    /**
     * @stability stable
     */
    get iamRoles() {
        return this.getListAttribute('iam_roles');
    }
    /**
     * @stability stable
     */
    set iamRoles(value) {
        this._iamRoles = value;
    }
    /**
     * @stability stable
     */
    resetIamRoles() {
        this._iamRoles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamRolesInput() {
        return this._iamRoles;
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
    get masterPassword() {
        return this.getStringAttribute('master_password');
    }
    /**
     * @stability stable
     */
    set masterPassword(value) {
        this._masterPassword = value;
    }
    /**
     * @stability stable
     */
    resetMasterPassword() {
        this._masterPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get masterPasswordInput() {
        return this._masterPassword;
    }
    /**
     * @stability stable
     */
    get masterUsername() {
        return this.getStringAttribute('master_username');
    }
    /**
     * @stability stable
     */
    set masterUsername(value) {
        this._masterUsername = value;
    }
    /**
     * @stability stable
     */
    resetMasterUsername() {
        this._masterUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get masterUsernameInput() {
        return this._masterUsername;
    }
    /**
     * @stability stable
     */
    get port() {
        return this.getNumberAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    /**
     * @stability stable
     */
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get preferredBackupWindow() {
        return this.getStringAttribute('preferred_backup_window');
    }
    /**
     * @stability stable
     */
    set preferredBackupWindow(value) {
        this._preferredBackupWindow = value;
    }
    /**
     * @stability stable
     */
    resetPreferredBackupWindow() {
        this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredBackupWindowInput() {
        return this._preferredBackupWindow;
    }
    /**
     * @stability stable
     */
    get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    /**
     * @stability stable
     */
    set preferredMaintenanceWindow(value) {
        this._preferredMaintenanceWindow = value;
    }
    /**
     * @stability stable
     */
    resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
    }
    // reader_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get readerEndpoint() {
        return this.getStringAttribute('reader_endpoint');
    }
    /**
     * @stability stable
     */
    get replicationSourceIdentifier() {
        return this.getStringAttribute('replication_source_identifier');
    }
    /**
     * @stability stable
     */
    set replicationSourceIdentifier(value) {
        this._replicationSourceIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetReplicationSourceIdentifier() {
        this._replicationSourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get replicationSourceIdentifierInput() {
        return this._replicationSourceIdentifier;
    }
    /**
     * @stability stable
     */
    get skipFinalSnapshot() {
        return this.getBooleanAttribute('skip_final_snapshot');
    }
    /**
     * @stability stable
     */
    set skipFinalSnapshot(value) {
        this._skipFinalSnapshot = value;
    }
    /**
     * @stability stable
     */
    resetSkipFinalSnapshot() {
        this._skipFinalSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get skipFinalSnapshotInput() {
        return this._skipFinalSnapshot;
    }
    /**
     * @stability stable
     */
    get snapshotIdentifier() {
        return this.getStringAttribute('snapshot_identifier');
    }
    /**
     * @stability stable
     */
    set snapshotIdentifier(value) {
        this._snapshotIdentifier = value;
    }
    /**
     * @stability stable
     */
    resetSnapshotIdentifier() {
        this._snapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snapshotIdentifierInput() {
        return this._snapshotIdentifier;
    }
    /**
     * @stability stable
     */
    get sourceRegion() {
        return this.getStringAttribute('source_region');
    }
    /**
     * @stability stable
     */
    set sourceRegion(value) {
        this._sourceRegion = value;
    }
    /**
     * @stability stable
     */
    resetSourceRegion() {
        this._sourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceRegionInput() {
        return this._sourceRegion;
    }
    /**
     * @stability stable
     */
    get storageEncrypted() {
        return this.getBooleanAttribute('storage_encrypted');
    }
    /**
     * @stability stable
     */
    set storageEncrypted(value) {
        this._storageEncrypted = value;
    }
    /**
     * @stability stable
     */
    resetStorageEncrypted() {
        this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageEncryptedInput() {
        return this._storageEncrypted;
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
    get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    /**
     * @stability stable
     */
    set vpcSecurityGroupIds(value) {
        this._vpcSecurityGroupIds = value;
    }
    /**
     * @stability stable
     */
    resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }
    /**
     * @stability stable
     */
    get restoreToPointInTime() {
        return this._restoreToPointInTime;
    }
    /**
     * @stability stable
     */
    putRestoreToPointInTime(value) {
        this._restoreToPointInTime.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRestoreToPointInTime() {
        this._restoreToPointInTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restoreToPointInTimeInput() {
        return this._restoreToPointInTime.internalValue;
    }
    /**
     * @stability stable
     */
    get s3Import() {
        return this._s3Import;
    }
    /**
     * @stability stable
     */
    putS3Import(value) {
        this._s3Import.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3Import() {
        this._s3Import.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3ImportInput() {
        return this._s3Import.internalValue;
    }
    /**
     * @stability stable
     */
    get scalingConfiguration() {
        return this._scalingConfiguration;
    }
    /**
     * @stability stable
     */
    putScalingConfiguration(value) {
        this._scalingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetScalingConfiguration() {
        this._scalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scalingConfigurationInput() {
        return this._scalingConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get timeouts() {
        return this._timeouts;
    }
    /**
     * @stability stable
     */
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            backtrack_window: cdktf.numberToTerraform(this._backtrackWindow),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
            cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            database_name: cdktf.stringToTerraform(this._databaseName),
            db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
            db_instance_parameter_group_name: cdktf.stringToTerraform(this._dbInstanceParameterGroupName),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            enable_global_write_forwarding: cdktf.booleanToTerraform(this._enableGlobalWriteForwarding),
            enable_http_endpoint: cdktf.booleanToTerraform(this._enableHttpEndpoint),
            enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_mode: cdktf.stringToTerraform(this._engineMode),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
            iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
            iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            master_password: cdktf.stringToTerraform(this._masterPassword),
            master_username: cdktf.stringToTerraform(this._masterUsername),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            source_region: cdktf.stringToTerraform(this._sourceRegion),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            restore_to_point_in_time: rdsClusterRestoreToPointInTimeToTerraform(this._restoreToPointInTime.internalValue),
            s3_import: rdsClusterS3ImportToTerraform(this._s3Import.internalValue),
            scaling_configuration: rdsClusterScalingConfigurationToTerraform(this._scalingConfiguration.internalValue),
            timeouts: rdsClusterTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.RdsCluster = RdsCluster;
_e = JSII_RTTI_SYMBOL_1;
RdsCluster[_e] = { fqn: "@cdktf/provider-aws.rds.RdsCluster", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
RdsCluster.tfResourceType = "aws_rds_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmRzLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmRzL3Jkcy1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBb0cvQixTQUFnQix5Q0FBeUMsQ0FBQyxNQUF1RjtJQUMvSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUMvRCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUQseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNuRiwwQkFBMEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO0tBQ3RGLENBQUE7QUFDSCxDQUFDO0FBWEQsOEZBV0M7Ozs7QUFFRCxNQUFhLDZDQUE4QyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXBGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMs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QUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUM1Rix3QkFBd0IsRUFBRSx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1lBQzdHLFNBQVMsRUFBRSw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUN0RSxxQkFBcUIsRUFBRSx5Q0FBeUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO1lBQzFHLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUN0RSxDQUFDO0lBQ0osQ0FBQzs7QUE3ekJILGdDQTh6QkM7OztBQTV6QkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyx5QkFBYyxHQUFXLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBSZHNDbHVzdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dNYWpvclZlcnNpb25VcGdyYWRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBseUltbWVkaWF0ZWx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVpvbmVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiYWNrdHJhY2tXaW5kb3c/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJhY2t1cFJldGVudGlvblBlcmlvZD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVySWRlbnRpZmllcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsdXN0ZXJNZW1iZXJzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29weVRhZ3NUb1NuYXBzaG90PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YWJhc2VOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYlN1Ym5ldEdyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVHbG9iYWxXcml0ZUZvcndhcmRpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZUh0dHBFbmRwb2ludD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmdpbmU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZU1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZVZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaW5hbFNuYXBzaG90SWRlbnRpZmllcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdsb2JhbENsdXN0ZXJJZGVudGlmaWVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1Sb2xlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFzdGVyUGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFzdGVyVXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmZXJyZWRCYWNrdXBXaW5kb3c/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2tpcEZpbmFsU25hcHNob3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VSZWdpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0b3JhZ2VFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXN0b3JlVG9Qb2ludEluVGltZT86IFJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNJbXBvcnQ/OiBSZHNDbHVzdGVyUzNJbXBvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjYWxpbmdDb25maWd1cmF0aW9uPzogUmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0cz86IFJkc0NsdXN0ZXJUaW1lb3V0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmRzQ2x1c3RlclJlc3RvcmVUb1BvaW50SW5UaW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXN0b3JlVG9UaW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3RvcmVUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlQ2x1c3RlcklkZW50aWZpZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBSZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWVPdXRwdXRSZWZlcmVuY2UgfCBSZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN0b3JlX3RvX3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzdG9yZVRvVGltZSksXG4gICAgcmVzdG9yZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3RvcmVUeXBlKSxcbiAgICBzb3VyY2VfY2x1c3Rlcl9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUNsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICB1c2VfbGF0ZXN0X3Jlc3RvcmFibGVfdGltZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZHNDbHVzdGVyUmVzdG9yZVRvUG9pbnRJblRpbWVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUmRzQ2x1c3RlclJlc3RvcmVUb1BvaW50SW5UaW1lIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXN0b3JlVG9UaW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXN0b3JlVG9UaW1lID0gdGhpcy5fcmVzdG9yZVRvVGltZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc3RvcmVUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXN0b3JlVHlwZSA9IHRoaXMuX3Jlc3RvcmVUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlQ2x1c3RlcklkZW50aWZpZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZUNsdXN0ZXJJZGVudGlmaWVyID0gdGhpcy5fc291cmNlQ2x1c3RlcklkZW50aWZpZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VMYXRlc3RSZXN0b3JhYmxlVGltZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWUgPSB0aGlzLl91c2VMYXRlc3RSZXN0b3JhYmxlVGltZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc3RvcmVUb1RpbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN0b3JlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvdXJjZUNsdXN0ZXJJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlTGF0ZXN0UmVzdG9yYWJsZVRpbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc3RvcmVUb1RpbWUgPSB2YWx1ZS5yZXN0b3JlVG9UaW1lO1xuICAgICAgdGhpcy5fcmVzdG9yZVR5cGUgPSB2YWx1ZS5yZXN0b3JlVHlwZTtcbiAgICAgIHRoaXMuX3NvdXJjZUNsdXN0ZXJJZGVudGlmaWVyID0gdmFsdWUuc291cmNlQ2x1c3RlcklkZW50aWZpZXI7XG4gICAgICB0aGlzLl91c2VMYXRlc3RSZXN0b3JhYmxlVGltZSA9IHZhbHVlLnVzZUxhdGVzdFJlc3RvcmFibGVUaW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc3RvcmVfdG9fdGltZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXN0b3JlVG9UaW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXN0b3JlVG9UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzdG9yZV90b190aW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0b3JlVG9UaW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXN0b3JlVG9UaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVzdG9yZVRvVGltZSgpIHtcbiAgICB0aGlzLl9yZXN0b3JlVG9UaW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXN0b3JlVG9UaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RvcmVUb1RpbWU7XG4gIH1cblxuICAvLyByZXN0b3JlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzdG9yZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc3RvcmVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzdG9yZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0b3JlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzdG9yZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXN0b3JlVHlwZSgpIHtcbiAgICB0aGlzLl9yZXN0b3JlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzdG9yZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdG9yZVR5cGU7XG4gIH1cblxuICAvLyBzb3VyY2VfY2x1c3Rlcl9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZUNsdXN0ZXJJZGVudGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzb3VyY2VDbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9jbHVzdGVyX2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUNsdXN0ZXJJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VDbHVzdGVySWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VDbHVzdGVySWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDbHVzdGVySWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHVzZV9sYXRlc3RfcmVzdG9yYWJsZV90aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZUxhdGVzdFJlc3RvcmFibGVUaW1lPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB1c2VMYXRlc3RSZXN0b3JhYmxlVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VfbGF0ZXN0X3Jlc3RvcmFibGVfdGltZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZUxhdGVzdFJlc3RvcmFibGVUaW1lKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl91c2VMYXRlc3RSZXN0b3JhYmxlVGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZUxhdGVzdFJlc3RvcmFibGVUaW1lKCkge1xuICAgIHRoaXMuX3VzZUxhdGVzdFJlc3RvcmFibGVUaW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VMYXRlc3RSZXN0b3JhYmxlVGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VMYXRlc3RSZXN0b3JhYmxlVGltZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBSZHNDbHVzdGVyUzNJbXBvcnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXRQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluZ2VzdGlvblJvbGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZUVuZ2luZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZUVuZ2luZVZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJkc0NsdXN0ZXJTM0ltcG9ydFRvVGVycmFmb3JtKHN0cnVjdD86IFJkc0NsdXN0ZXJTM0ltcG9ydE91dHB1dFJlZmVyZW5jZSB8IFJkc0NsdXN0ZXJTM0ltcG9ydCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgIGJ1Y2tldF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0UHJlZml4KSxcbiAgICBpbmdlc3Rpb25fcm9sZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmdlc3Rpb25Sb2xlKSxcbiAgICBzb3VyY2VfZW5naW5lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUVuZ2luZSksXG4gICAgc291cmNlX2VuZ2luZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUVuZ2luZVZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZHNDbHVzdGVyUzNJbXBvcnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUmRzQ2x1c3RlclMzSW1wb3J0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXROYW1lID0gdGhpcy5fYnVja2V0TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1Y2tldFByZWZpeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0UHJlZml4ID0gdGhpcy5fYnVja2V0UHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5nZXN0aW9uUm9sZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5nZXN0aW9uUm9sZSA9IHRoaXMuX2luZ2VzdGlvblJvbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VFbmdpbmUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZUVuZ2luZSA9IHRoaXMuX3NvdXJjZUVuZ2luZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZUVuZ2luZVZlcnNpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZUVuZ2luZVZlcnNpb24gPSB0aGlzLl9zb3VyY2VFbmdpbmVWZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogUmRzQ2x1c3RlclMzSW1wb3J0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnVja2V0TmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1Y2tldFByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luZ2VzdGlvblJvbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zb3VyY2VFbmdpbmUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zb3VyY2VFbmdpbmVWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXROYW1lID0gdmFsdWUuYnVja2V0TmFtZTtcbiAgICAgIHRoaXMuX2J1Y2tldFByZWZpeCA9IHZhbHVlLmJ1Y2tldFByZWZpeDtcbiAgICAgIHRoaXMuX2luZ2VzdGlvblJvbGUgPSB2YWx1ZS5pbmdlc3Rpb25Sb2xlO1xuICAgICAgdGhpcy5fc291cmNlRW5naW5lID0gdmFsdWUuc291cmNlRW5naW5lO1xuICAgICAgdGhpcy5fc291cmNlRW5naW5lVmVyc2lvbiA9IHZhbHVlLnNvdXJjZUVuZ2luZVZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0TmFtZTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0UHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldFByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldFByZWZpeCgpIHtcbiAgICB0aGlzLl9idWNrZXRQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldFByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRQcmVmaXg7XG4gIH1cblxuICAvLyBpbmdlc3Rpb25fcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbmdlc3Rpb25Sb2xlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbmdlc3Rpb25Sb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5nZXN0aW9uX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluZ2VzdGlvblJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luZ2VzdGlvblJvbGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5nZXN0aW9uUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmdlc3Rpb25Sb2xlO1xuICB9XG5cbiAgLy8gc291cmNlX2VuZ2luZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zb3VyY2VFbmdpbmU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZUVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9lbmdpbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUVuZ2luZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlRW5naW5lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUVuZ2luZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VFbmdpbmU7XG4gIH1cblxuICAvLyBzb3VyY2VfZW5naW5lX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc291cmNlRW5naW5lVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlRW5naW5lVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9lbmdpbmVfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlRW5naW5lVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlRW5naW5lVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VFbmdpbmVWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUVuZ2luZVZlcnNpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9QYXVzZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhDYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5DYXBhY2l0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWNvbmRzVW50aWxBdXRvUGF1c2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRBY3Rpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvX3BhdXNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvUGF1c2UpLFxuICAgIG1heF9jYXBhY2l0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhDYXBhY2l0eSksXG4gICAgbWluX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1pbkNhcGFjaXR5KSxcbiAgICBzZWNvbmRzX3VudGlsX2F1dG9fcGF1c2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2Vjb25kc1VudGlsQXV0b1BhdXNlKSxcbiAgICB0aW1lb3V0X2FjdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0QWN0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXV0b1BhdXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRvUGF1c2UgPSB0aGlzLl9hdXRvUGF1c2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXhDYXBhY2l0eSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4Q2FwYWNpdHkgPSB0aGlzLl9tYXhDYXBhY2l0eTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21pbkNhcGFjaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5taW5DYXBhY2l0eSA9IHRoaXMuX21pbkNhcGFjaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Vjb25kc1VudGlsQXV0b1BhdXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWNvbmRzVW50aWxBdXRvUGF1c2UgPSB0aGlzLl9zZWNvbmRzVW50aWxBdXRvUGF1c2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0QWN0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0QWN0aW9uID0gdGhpcy5fdGltZW91dEFjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2F1dG9QYXVzZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluQ2FwYWNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWNvbmRzVW50aWxBdXRvUGF1c2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0QWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRvUGF1c2UgPSB2YWx1ZS5hdXRvUGF1c2U7XG4gICAgICB0aGlzLl9tYXhDYXBhY2l0eSA9IHZhbHVlLm1heENhcGFjaXR5O1xuICAgICAgdGhpcy5fbWluQ2FwYWNpdHkgPSB2YWx1ZS5taW5DYXBhY2l0eTtcbiAgICAgIHRoaXMuX3NlY29uZHNVbnRpbEF1dG9QYXVzZSA9IHZhbHVlLnNlY29uZHNVbnRpbEF1dG9QYXVzZTtcbiAgICAgIHRoaXMuX3RpbWVvdXRBY3Rpb24gPSB2YWx1ZS50aW1lb3V0QWN0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGF1dG9fcGF1c2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b1BhdXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvUGF1c2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b19wYXVzZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9QYXVzZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0b1BhdXNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b1BhdXNlKCkge1xuICAgIHRoaXMuX2F1dG9QYXVzZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1BhdXNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9QYXVzZTtcbiAgfVxuXG4gIC8vIG1heF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhDYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4Q2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heENhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhDYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heENhcGFjaXR5KCkge1xuICAgIHRoaXMuX21heENhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIG1pbl9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9taW5DYXBhY2l0eT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWluQ2FwYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5fY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1pbkNhcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9taW5DYXBhY2l0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbkNhcGFjaXR5KCkge1xuICAgIHRoaXMuX21pbkNhcGFjaXR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5DYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5DYXBhY2l0eTtcbiAgfVxuXG4gIC8vIHNlY29uZHNfdW50aWxfYXV0b19wYXVzZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWNvbmRzVW50aWxBdXRvUGF1c2U/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNlY29uZHNVbnRpbEF1dG9QYXVzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NlY29uZHNfdW50aWxfYXV0b19wYXVzZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2Vjb25kc1VudGlsQXV0b1BhdXNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZWNvbmRzVW50aWxBdXRvUGF1c2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWNvbmRzVW50aWxBdXRvUGF1c2UoKSB7XG4gICAgdGhpcy5fc2Vjb25kc1VudGlsQXV0b1BhdXNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNvbmRzVW50aWxBdXRvUGF1c2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kc1VudGlsQXV0b1BhdXNlO1xuICB9XG5cbiAgLy8gdGltZW91dF9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dEFjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGltZW91dEFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVvdXRfYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0QWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aW1lb3V0QWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dEFjdGlvbigpIHtcbiAgICB0aGlzLl90aW1lb3V0QWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0QWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRBY3Rpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgUmRzQ2x1c3RlclRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVwZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJkc0NsdXN0ZXJUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IFJkc0NsdXN0ZXJUaW1lb3V0c091dHB1dFJlZmVyZW5jZSB8IFJkc0NsdXN0ZXJUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZHNDbHVzdGVyVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogUmRzQ2x1c3RlclRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVsZXRlID0gdGhpcy5fZGVsZXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXBkYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51cGRhdGUgPSB0aGlzLl91cGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBSZHNDbHVzdGVyVGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgUmRzQ2x1c3RlciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19yZHNfY2x1c3RlclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBSZHNDbHVzdGVyQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19yZHNfY2x1c3RlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGUgPSBjb25maWcuYWxsb3dNYWpvclZlcnNpb25VcGdyYWRlO1xuICAgIHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkgPSBjb25maWcuYXBwbHlJbW1lZGlhdGVseTtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IGNvbmZpZy5hdmFpbGFiaWxpdHlab25lcztcbiAgICB0aGlzLl9iYWNrdHJhY2tXaW5kb3cgPSBjb25maWcuYmFja3RyYWNrV2luZG93O1xuICAgIHRoaXMuX2JhY2t1cFJldGVudGlvblBlcmlvZCA9IGNvbmZpZy5iYWNrdXBSZXRlbnRpb25QZXJpb2Q7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSBjb25maWcuY2x1c3RlcklkZW50aWZpZXI7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXggPSBjb25maWcuY2x1c3RlcklkZW50aWZpZXJQcmVmaXg7XG4gICAgdGhpcy5fY2x1c3Rlck1lbWJlcnMgPSBjb25maWcuY2x1c3Rlck1lbWJlcnM7XG4gICAgdGhpcy5fY29weVRhZ3NUb1NuYXBzaG90ID0gY29uZmlnLmNvcHlUYWdzVG9TbmFwc2hvdDtcbiAgICB0aGlzLl9kYXRhYmFzZU5hbWUgPSBjb25maWcuZGF0YWJhc2VOYW1lO1xuICAgIHRoaXMuX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSA9IGNvbmZpZy5kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU7XG4gICAgdGhpcy5fZGJJbnN0YW5jZVBhcmFtZXRlckdyb3VwTmFtZSA9IGNvbmZpZy5kYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lO1xuICAgIHRoaXMuX2RiU3VibmV0R3JvdXBOYW1lID0gY29uZmlnLmRiU3VibmV0R3JvdXBOYW1lO1xuICAgIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiA9IGNvbmZpZy5kZWxldGlvblByb3RlY3Rpb247XG4gICAgdGhpcy5fZW5hYmxlR2xvYmFsV3JpdGVGb3J3YXJkaW5nID0gY29uZmlnLmVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZztcbiAgICB0aGlzLl9lbmFibGVIdHRwRW5kcG9pbnQgPSBjb25maWcuZW5hYmxlSHR0cEVuZHBvaW50O1xuICAgIHRoaXMuX2VuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHMgPSBjb25maWcuZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cztcbiAgICB0aGlzLl9lbmdpbmUgPSBjb25maWcuZW5naW5lO1xuICAgIHRoaXMuX2VuZ2luZU1vZGUgPSBjb25maWcuZW5naW5lTW9kZTtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gY29uZmlnLmVuZ2luZVZlcnNpb247XG4gICAgdGhpcy5fZmluYWxTbmFwc2hvdElkZW50aWZpZXIgPSBjb25maWcuZmluYWxTbmFwc2hvdElkZW50aWZpZXI7XG4gICAgdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIgPSBjb25maWcuZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI7XG4gICAgdGhpcy5faWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQgPSBjb25maWcuaWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQ7XG4gICAgdGhpcy5faWFtUm9sZXMgPSBjb25maWcuaWFtUm9sZXM7XG4gICAgdGhpcy5fa21zS2V5SWQgPSBjb25maWcua21zS2V5SWQ7XG4gICAgdGhpcy5fbWFzdGVyUGFzc3dvcmQgPSBjb25maWcubWFzdGVyUGFzc3dvcmQ7XG4gICAgdGhpcy5fbWFzdGVyVXNlcm5hbWUgPSBjb25maWcubWFzdGVyVXNlcm5hbWU7XG4gICAgdGhpcy5fcG9ydCA9IGNvbmZpZy5wb3J0O1xuICAgIHRoaXMuX3ByZWZlcnJlZEJhY2t1cFdpbmRvdyA9IGNvbmZpZy5wcmVmZXJyZWRCYWNrdXBXaW5kb3c7XG4gICAgdGhpcy5fcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3cgPSBjb25maWcucHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3c7XG4gICAgdGhpcy5fcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyID0gY29uZmlnLnJlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcjtcbiAgICB0aGlzLl9za2lwRmluYWxTbmFwc2hvdCA9IGNvbmZpZy5za2lwRmluYWxTbmFwc2hvdDtcbiAgICB0aGlzLl9zbmFwc2hvdElkZW50aWZpZXIgPSBjb25maWcuc25hcHNob3RJZGVudGlmaWVyO1xuICAgIHRoaXMuX3NvdXJjZVJlZ2lvbiA9IGNvbmZpZy5zb3VyY2VSZWdpb247XG4gICAgdGhpcy5fc3RvcmFnZUVuY3J5cHRlZCA9IGNvbmZpZy5zdG9yYWdlRW5jcnlwdGVkO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy52cGNTZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWUgPSBjb25maWcucmVzdG9yZVRvUG9pbnRJblRpbWU7XG4gICAgdGhpcy5fczNJbXBvcnQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zM0ltcG9ydDtcbiAgICB0aGlzLl9zY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNjYWxpbmdDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFsbG93X21ham9yX3ZlcnNpb25fdXBncmFkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFsbG93TWFqb3JWZXJzaW9uVXBncmFkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19tYWpvcl92ZXJzaW9uX3VwZ3JhZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd01ham9yVmVyc2lvblVwZ3JhZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93TWFqb3JWZXJzaW9uVXBncmFkZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93TWFqb3JWZXJzaW9uVXBncmFkZSgpIHtcbiAgICB0aGlzLl9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93TWFqb3JWZXJzaW9uVXBncmFkZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGU7XG4gIH1cblxuICAvLyBhcHBseV9pbW1lZGlhdGVseSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGx5SW1tZWRpYXRlbHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGFwcGx5SW1tZWRpYXRlbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXBwbHlfaW1tZWRpYXRlbHknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBseUltbWVkaWF0ZWx5KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hcHBseUltbWVkaWF0ZWx5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbHlJbW1lZGlhdGVseSgpIHtcbiAgICB0aGlzLl9hcHBseUltbWVkaWF0ZWx5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBseUltbWVkaWF0ZWx5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGx5SW1tZWRpYXRlbHk7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F2YWlsYWJpbGl0eVpvbmVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZhaWxhYmlsaXR5Wm9uZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXM7XG4gIH1cblxuICAvLyBiYWNrdHJhY2tfd2luZG93IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JhY2t0cmFja1dpbmRvdz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYmFja3RyYWNrV2luZG93KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmFja3RyYWNrX3dpbmRvdycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFja3RyYWNrV2luZG93KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9iYWNrdHJhY2tXaW5kb3cgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYWNrdHJhY2tXaW5kb3coKSB7XG4gICAgdGhpcy5fYmFja3RyYWNrV2luZG93ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYWNrdHJhY2tXaW5kb3dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja3RyYWNrV2luZG93O1xuICB9XG5cbiAgLy8gYmFja3VwX3JldGVudGlvbl9wZXJpb2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmFja3VwUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBiYWNrdXBSZXRlbnRpb25QZXJpb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdiYWNrdXBfcmV0ZW50aW9uX3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFja3VwUmV0ZW50aW9uUGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9iYWNrdXBSZXRlbnRpb25QZXJpb2QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYWNrdXBSZXRlbnRpb25QZXJpb2QoKSB7XG4gICAgdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYWNrdXBSZXRlbnRpb25QZXJpb2RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlcklkZW50aWZpZXI7XG4gIH1cblxuICAvLyBjbHVzdGVyX2lkZW50aWZpZXJfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXJQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlcklkZW50aWZpZXJQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3RlcklkZW50aWZpZXJQcmVmaXgoKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4O1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9tZW1iZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3Rlck1lbWJlcnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2x1c3Rlck1lbWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY2x1c3Rlcl9tZW1iZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyTWVtYmVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jbHVzdGVyTWVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsdXN0ZXJNZW1iZXJzKCkge1xuICAgIHRoaXMuX2NsdXN0ZXJNZW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVyTWVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyTWVtYmVycztcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfcmVzb3VyY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbHVzdGVyUmVzb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfcmVzb3VyY2VfaWQnKTtcbiAgfVxuXG4gIC8vIGNvcHlfdGFnc190b19zbmFwc2hvdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3B5VGFnc1RvU25hcHNob3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNvcHlUYWdzVG9TbmFwc2hvdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb3B5X3RhZ3NfdG9fc25hcHNob3QnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb3B5VGFnc1RvU25hcHNob3QodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NvcHlUYWdzVG9TbmFwc2hvdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcHlUYWdzVG9TbmFwc2hvdCgpIHtcbiAgICB0aGlzLl9jb3B5VGFnc1RvU25hcHNob3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcHlUYWdzVG9TbmFwc2hvdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3B5VGFnc1RvU25hcHNob3Q7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGF0YWJhc2VOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhYmFzZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhdGFiYXNlTmFtZSgpIHtcbiAgICB0aGlzLl9kYXRhYmFzZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gIH1cblxuICAvLyBkYl9jbHVzdGVyX3BhcmFtZXRlcl9ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYl9jbHVzdGVyX3BhcmFtZXRlcl9ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU7XG4gIH1cblxuICAvLyBkYl9pbnN0YW5jZV9wYXJhbWV0ZXJfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGJfaW5zdGFuY2VfcGFyYW1ldGVyX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2RiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRiSW5zdGFuY2VQYXJhbWV0ZXJHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGJJbnN0YW5jZVBhcmFtZXRlckdyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGRiX3N1Ym5ldF9ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGJTdWJuZXRHcm91cE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRiU3VibmV0R3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGJfc3VibmV0X2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRiU3VibmV0R3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYlN1Ym5ldEdyb3VwTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERiU3VibmV0R3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2RiU3VibmV0R3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYlN1Ym5ldEdyb3VwTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYlN1Ym5ldEdyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGRlbGV0aW9uX3Byb3RlY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkZWxldGlvblByb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRpb25fcHJvdGVjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0aW9uUHJvdGVjdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGVsZXRpb25Qcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRpb25Qcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbjtcbiAgfVxuXG4gIC8vIGVuYWJsZV9nbG9iYWxfd3JpdGVfZm9yd2FyZGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVHbG9iYWxXcml0ZUZvcndhcmRpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZ2xvYmFsX3dyaXRlX2ZvcndhcmRpbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVHbG9iYWxXcml0ZUZvcndhcmRpbmcodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZygpIHtcbiAgICB0aGlzLl9lbmFibGVHbG9iYWxXcml0ZUZvcndhcmRpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVHbG9iYWxXcml0ZUZvcndhcmRpbmc7XG4gIH1cblxuICAvLyBlbmFibGVfaHR0cF9lbmRwb2ludCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVIdHRwRW5kcG9pbnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZUh0dHBFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfaHR0cF9lbmRwb2ludCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZUh0dHBFbmRwb2ludCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlSHR0cEVuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlSHR0cEVuZHBvaW50KCkge1xuICAgIHRoaXMuX2VuYWJsZUh0dHBFbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlSHR0cEVuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUh0dHBFbmRwb2ludDtcbiAgfVxuXG4gIC8vIGVuYWJsZWRfY2xvdWR3YXRjaF9sb2dzX2V4cG9ydHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBlbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2VuYWJsZWRfY2xvdWR3YXRjaF9sb2dzX2V4cG9ydHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHMoKSB7XG4gICAgdGhpcy5fZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzO1xuICB9XG5cbiAgLy8gZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBlbmdpbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5naW5lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5naW5lKCkge1xuICAgIHRoaXMuX2VuZ2luZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZTtcbiAgfVxuXG4gIC8vIGVuZ2luZV9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuZ2luZU1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZ2luZU1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5naW5lTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuZ2luZU1vZGUoKSB7XG4gICAgdGhpcy5fZW5naW5lTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmVNb2RlO1xuICB9XG5cbiAgLy8gZW5naW5lX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmdpbmVWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmdpbmVWZXJzaW9uKCkge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lVmVyc2lvbjtcbiAgfVxuXG4gIC8vIGVuZ2luZV92ZXJzaW9uX2FjdHVhbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb25BY3R1YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfdmVyc2lvbl9hY3R1YWwnKTtcbiAgfVxuXG4gIC8vIGZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmluYWxTbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbmFsU25hcHNob3RJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmluYWxfc25hcHNob3RfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmluYWxTbmFwc2hvdElkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmluYWxTbmFwc2hvdElkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fZmluYWxTbmFwc2hvdElkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmFsU25hcHNob3RJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gZ2xvYmFsX2NsdXN0ZXJfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9nbG9iYWxDbHVzdGVySWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnbG9iYWxfY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBnbG9iYWxDbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRHbG9iYWxDbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9nbG9iYWxDbHVzdGVySWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI7XG4gIH1cblxuICAvLyBob3N0ZWRfem9uZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RlZFpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RlZF96b25lX2lkJyk7XG4gIH1cblxuICAvLyBpYW1fZGF0YWJhc2VfYXV0aGVudGljYXRpb25fZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQ7XG4gIH1cblxuICAvLyBpYW1fcm9sZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pYW1Sb2xlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpYW1Sb2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpYW1fcm9sZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbVJvbGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2lhbVJvbGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWFtUm9sZXMoKSB7XG4gICAgdGhpcy5faWFtUm9sZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbVJvbGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbVJvbGVzO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBtYXN0ZXJfcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFzdGVyUGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1hc3RlclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFzdGVyX3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXN0ZXJQYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFzdGVyUGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXN0ZXJQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9tYXN0ZXJQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFzdGVyUGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFzdGVyUGFzc3dvcmQ7XG4gIH1cblxuICAvLyBtYXN0ZXJfdXNlcm5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXN0ZXJVc2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWFzdGVyVXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXN0ZXJfdXNlcm5hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hc3RlclVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXN0ZXJVc2VybmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hc3RlclVzZXJuYW1lKCkge1xuICAgIHRoaXMuX21hc3RlclVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXN0ZXJVc2VybmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJVc2VybmFtZTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb3J0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnQoKSB7XG4gICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0O1xuICB9XG5cbiAgLy8gcHJlZmVycmVkX2JhY2t1cF93aW5kb3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWRCYWNrdXBXaW5kb3c/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZEJhY2t1cFdpbmRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZlcnJlZF9iYWNrdXBfd2luZG93Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmZXJyZWRCYWNrdXBXaW5kb3codmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZlcnJlZEJhY2t1cFdpbmRvdyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZlcnJlZEJhY2t1cFdpbmRvdygpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3cgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZEJhY2t1cFdpbmRvd0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3c7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfbWFpbnRlbmFuY2Vfd2luZG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3c/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZmVycmVkX21haW50ZW5hbmNlX3dpbmRvdycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3codmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3coKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3cgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93O1xuICB9XG5cbiAgLy8gcmVhZGVyX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVhZGVyRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWFkZXJfZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIHJlcGxpY2F0aW9uX3NvdXJjZV9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwbGljYXRpb25fc291cmNlX2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHNraXBfZmluYWxfc25hcHNob3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tpcEZpbmFsU25hcHNob3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNraXBGaW5hbFNuYXBzaG90KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NraXBfZmluYWxfc25hcHNob3QnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBza2lwRmluYWxTbmFwc2hvdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc2tpcEZpbmFsU25hcHNob3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTa2lwRmluYWxTbmFwc2hvdCgpIHtcbiAgICB0aGlzLl9za2lwRmluYWxTbmFwc2hvdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tpcEZpbmFsU25hcHNob3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tpcEZpbmFsU25hcHNob3Q7XG4gIH1cblxuICAvLyBzbmFwc2hvdF9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NuYXBzaG90SWRlbnRpZmllcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc25hcHNob3RJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc25hcHNob3RfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc25hcHNob3RJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbmFwc2hvdElkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbmFwc2hvdElkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fc25hcHNob3RJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbmFwc2hvdElkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc25hcHNob3RJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gc291cmNlX3JlZ2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VSZWdpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZVJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9yZWdpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZVJlZ2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlUmVnaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlUmVnaW9uKCkge1xuICAgIHRoaXMuX3NvdXJjZVJlZ2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlUmVnaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZVJlZ2lvbjtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfZW5jcnlwdGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RvcmFnZUVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdG9yYWdlX2VuY3J5cHRlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VFbmNyeXB0ZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3N0b3JhZ2VFbmNyeXB0ZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdG9yYWdlRW5jcnlwdGVkKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VFbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VFbmNyeXB0ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZUVuY3J5cHRlZDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB2cGNTZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZwY19zZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZwY1NlY3VyaXR5R3JvdXBJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZwY1NlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdnBjU2VjdXJpdHlHcm91cElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzO1xuICB9XG5cbiAgLy8gcmVzdG9yZV90b19wb2ludF9pbl90aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc3RvcmVUb1BvaW50SW5UaW1lID0gbmV3IFJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyZXN0b3JlX3RvX3BvaW50X2luX3RpbWVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVzdG9yZVRvUG9pbnRJblRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lO1xuICB9XG4gIHB1YmxpYyBwdXRSZXN0b3JlVG9Qb2ludEluVGltZSh2YWx1ZTogUmRzQ2x1c3RlclJlc3RvcmVUb1BvaW50SW5UaW1lKSB7XG4gICAgdGhpcy5fcmVzdG9yZVRvUG9pbnRJblRpbWUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3RvcmVUb1BvaW50SW5UaW1lKCkge1xuICAgIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3RvcmVUb1BvaW50SW5UaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzM19pbXBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNJbXBvcnQgPSBuZXcgUmRzQ2x1c3RlclMzSW1wb3J0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInMzX2ltcG9ydFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzM0ltcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNJbXBvcnQ7XG4gIH1cbiAgcHVibGljIHB1dFMzSW1wb3J0KHZhbHVlOiBSZHNDbHVzdGVyUzNJbXBvcnQpIHtcbiAgICB0aGlzLl9zM0ltcG9ydC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNJbXBvcnQoKSB7XG4gICAgdGhpcy5fczNJbXBvcnQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNJbXBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNJbXBvcnQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNjYWxpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2FsaW5nQ29uZmlndXJhdGlvbiA9IG5ldyBSZHNDbHVzdGVyU2NhbGluZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2NhbGluZ19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNjYWxpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FsaW5nQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0U2NhbGluZ0NvbmZpZ3VyYXRpb24odmFsdWU6IFJkc0NsdXN0ZXJTY2FsaW5nQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3NjYWxpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2FsaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9zY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2FsaW5nQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FsaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgUmRzQ2x1c3RlclRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRpbWVvdXRzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IFJkc0NsdXN0ZXJUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd19tYWpvcl92ZXJzaW9uX3VwZ3JhZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hbGxvd01ham9yVmVyc2lvblVwZ3JhZGUpLFxuICAgICAgYXBwbHlfaW1tZWRpYXRlbHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hcHBseUltbWVkaWF0ZWx5KSxcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMpLFxuICAgICAgYmFja3RyYWNrX3dpbmRvdzogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYmFja3RyYWNrV2luZG93KSxcbiAgICAgIGJhY2t1cF9yZXRlbnRpb25fcGVyaW9kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9iYWNrdXBSZXRlbnRpb25QZXJpb2QpLFxuICAgICAgY2x1c3Rlcl9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVySWRlbnRpZmllciksXG4gICAgICBjbHVzdGVyX2lkZW50aWZpZXJfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVySWRlbnRpZmllclByZWZpeCksXG4gICAgICBjbHVzdGVyX21lbWJlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2NsdXN0ZXJNZW1iZXJzKSxcbiAgICAgIGNvcHlfdGFnc190b19zbmFwc2hvdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2NvcHlUYWdzVG9TbmFwc2hvdCksXG4gICAgICBkYXRhYmFzZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhYmFzZU5hbWUpLFxuICAgICAgZGJfY2x1c3Rlcl9wYXJhbWV0ZXJfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lKSxcbiAgICAgIGRiX2luc3RhbmNlX3BhcmFtZXRlcl9ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYkluc3RhbmNlUGFyYW1ldGVyR3JvdXBOYW1lKSxcbiAgICAgIGRiX3N1Ym5ldF9ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYlN1Ym5ldEdyb3VwTmFtZSksXG4gICAgICBkZWxldGlvbl9wcm90ZWN0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZGVsZXRpb25Qcm90ZWN0aW9uKSxcbiAgICAgIGVuYWJsZV9nbG9iYWxfd3JpdGVfZm9yd2FyZGluZzogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZUdsb2JhbFdyaXRlRm9yd2FyZGluZyksXG4gICAgICBlbmFibGVfaHR0cF9lbmRwb2ludDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZUh0dHBFbmRwb2ludCksXG4gICAgICBlbmFibGVkX2Nsb3Vkd2F0Y2hfbG9nc19leHBvcnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9lbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzKSxcbiAgICAgIGVuZ2luZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5naW5lKSxcbiAgICAgIGVuZ2luZV9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVNb2RlKSxcbiAgICAgIGVuZ2luZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVWZXJzaW9uKSxcbiAgICAgIGZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyKSxcbiAgICAgIGdsb2JhbF9jbHVzdGVyX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2dsb2JhbENsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICAgIGlhbV9kYXRhYmFzZV9hdXRoZW50aWNhdGlvbl9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5faWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQpLFxuICAgICAgaWFtX3JvbGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9pYW1Sb2xlcyksXG4gICAgICBrbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXlJZCksXG4gICAgICBtYXN0ZXJfcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21hc3RlclBhc3N3b3JkKSxcbiAgICAgIG1hc3Rlcl91c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWFzdGVyVXNlcm5hbWUpLFxuICAgICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcG9ydCksXG4gICAgICBwcmVmZXJyZWRfYmFja3VwX3dpbmRvdzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJlZmVycmVkQmFja3VwV2luZG93KSxcbiAgICAgIHByZWZlcnJlZF9tYWludGVuYW5jZV93aW5kb3c6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93KSxcbiAgICAgIHJlcGxpY2F0aW9uX3NvdXJjZV9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXIpLFxuICAgICAgc2tpcF9maW5hbF9zbmFwc2hvdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3NraXBGaW5hbFNuYXBzaG90KSxcbiAgICAgIHNuYXBzaG90X2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NuYXBzaG90SWRlbnRpZmllciksXG4gICAgICBzb3VyY2VfcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VSZWdpb24pLFxuICAgICAgc3RvcmFnZV9lbmNyeXB0ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlRW5jcnlwdGVkKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyksXG4gICAgICByZXN0b3JlX3RvX3BvaW50X2luX3RpbWU6IHJkc0NsdXN0ZXJSZXN0b3JlVG9Qb2ludEluVGltZVRvVGVycmFmb3JtKHRoaXMuX3Jlc3RvcmVUb1BvaW50SW5UaW1lLmludGVybmFsVmFsdWUpLFxuICAgICAgczNfaW1wb3J0OiByZHNDbHVzdGVyUzNJbXBvcnRUb1RlcnJhZm9ybSh0aGlzLl9zM0ltcG9ydC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNjYWxpbmdfY29uZmlndXJhdGlvbjogcmRzQ2x1c3RlclNjYWxpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fc2NhbGluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogcmRzQ2x1c3RlclRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19