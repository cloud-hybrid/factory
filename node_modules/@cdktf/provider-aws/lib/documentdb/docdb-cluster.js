"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocdbCluster = exports.DocdbClusterTimeoutsOutputReference = exports.docdbClusterTimeoutsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function docdbClusterTimeoutsToTerraform(struct) {
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
exports.docdbClusterTimeoutsToTerraform = docdbClusterTimeoutsToTerraform;
/**
 * @stability stable
 */
class DocdbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.DocdbClusterTimeoutsOutputReference = DocdbClusterTimeoutsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
DocdbClusterTimeoutsOutputReference[_a] = { fqn: "@cdktf/provider-aws.documentdb.DocdbClusterTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster}.
 *
 * @stability stable
 */
class DocdbCluster extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_docdb_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new DocdbClusterTimeoutsOutputReference(this, "timeouts", true);
        this._applyImmediately = config.applyImmediately;
        this._availabilityZones = config.availabilityZones;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._clusterIdentifier = config.clusterIdentifier;
        this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
        this._clusterMembers = config.clusterMembers;
        this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._deletionProtection = config.deletionProtection;
        this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        this._globalClusterIdentifier = config.globalClusterIdentifier;
        this._kmsKeyId = config.kmsKeyId;
        this._masterPassword = config.masterPassword;
        this._masterUsername = config.masterUsername;
        this._port = config.port;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._skipFinalSnapshot = config.skipFinalSnapshot;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._storageEncrypted = config.storageEncrypted;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._timeouts.internalValue = config.timeouts;
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
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            cluster_identifier_prefix: cdktf.stringToTerraform(this._clusterIdentifierPrefix),
            cluster_members: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterMembers),
            db_cluster_parameter_group_name: cdktf.stringToTerraform(this._dbClusterParameterGroupName),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            master_password: cdktf.stringToTerraform(this._masterPassword),
            master_username: cdktf.stringToTerraform(this._masterUsername),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            timeouts: docdbClusterTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.DocdbCluster = DocdbCluster;
_b = JSII_RTTI_SYMBOL_1;
DocdbCluster[_b] = { fqn: "@cdktf/provider-aws.documentdb.DocdbCluster", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DocdbCluster.tfResourceType = "aws_docdb_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jZGItY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb2N1bWVudGRiL2RvY2RiLWNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFvRS9CLFNBQWdCLCtCQUErQixDQUFDLE1BQW1FO0lBQ2pILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFWRCwwRUFVQzs7OztBQUVELE1BQWEsbUNBQW9DLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJMUUsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNw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QUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0Qsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDNUYsUUFBUSxFQUFFLCtCQUErQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQ3hFLENBQUM7SUFDSixDQUFDOztBQTFpQkgsb0NBMmlCQzs7O0FBemlCQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDJCQUFjLEdBQVcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEb2NkYkNsdXN0ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcGx5SW1tZWRpYXRlbHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVpvbmVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiYWNrdXBSZXRlbnRpb25QZXJpb2Q/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsdXN0ZXJJZGVudGlmaWVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyTWVtYmVycz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRiU3VibmV0R3JvdXBOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZVZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmluYWxTbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hc3RlclBhc3N3b3JkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXN0ZXJVc2VybmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3J0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZmVycmVkQmFja3VwV2luZG93Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNraXBGaW5hbFNuYXBzaG90PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNuYXBzaG90SWRlbnRpZmllcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0b3JhZ2VFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBEb2NkYkNsdXN0ZXJUaW1lb3V0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG9jZGJDbHVzdGVyVGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXBkYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9jZGJDbHVzdGVyVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEb2NkYkNsdXN0ZXJUaW1lb3V0c091dHB1dFJlZmVyZW5jZSB8IERvY2RiQ2x1c3RlclRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgZGVsZXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gICAgdXBkYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVwZGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvY2RiQ2x1c3RlclRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERvY2RiQ2x1c3RlclRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVsZXRlID0gdGhpcy5fZGVsZXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXBkYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51cGRhdGUgPSB0aGlzLl91cGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEb2NkYkNsdXN0ZXJUaW1lb3V0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdmFsdWUuY3JlYXRlO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdmFsdWUuZGVsZXRlO1xuICAgICAgdGhpcy5fdXBkYXRlID0gdmFsdWUudXBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNyZWF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGUoKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlO1xuICB9XG5cbiAgLy8gZGVsZXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsZXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZSgpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGU7XG4gIH1cblxuICAvLyB1cGRhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXBkYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cGRhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVwZGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXBkYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXBkYXRlKCkge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXBkYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRG9jZGJDbHVzdGVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2RvY2RiX2NsdXN0ZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRG9jZGJDbHVzdGVyQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19kb2NkYl9jbHVzdGVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkgPSBjb25maWcuYXBwbHlJbW1lZGlhdGVseTtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IGNvbmZpZy5hdmFpbGFiaWxpdHlab25lcztcbiAgICB0aGlzLl9iYWNrdXBSZXRlbnRpb25QZXJpb2QgPSBjb25maWcuYmFja3VwUmV0ZW50aW9uUGVyaW9kO1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyID0gY29uZmlnLmNsdXN0ZXJJZGVudGlmaWVyO1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4ID0gY29uZmlnLmNsdXN0ZXJJZGVudGlmaWVyUHJlZml4O1xuICAgIHRoaXMuX2NsdXN0ZXJNZW1iZXJzID0gY29uZmlnLmNsdXN0ZXJNZW1iZXJzO1xuICAgIHRoaXMuX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSA9IGNvbmZpZy5kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU7XG4gICAgdGhpcy5fZGJTdWJuZXRHcm91cE5hbWUgPSBjb25maWcuZGJTdWJuZXRHcm91cE5hbWU7XG4gICAgdGhpcy5fZGVsZXRpb25Qcm90ZWN0aW9uID0gY29uZmlnLmRlbGV0aW9uUHJvdGVjdGlvbjtcbiAgICB0aGlzLl9lbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzID0gY29uZmlnLmVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHM7XG4gICAgdGhpcy5fZW5naW5lID0gY29uZmlnLmVuZ2luZTtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gY29uZmlnLmVuZ2luZVZlcnNpb247XG4gICAgdGhpcy5fZmluYWxTbmFwc2hvdElkZW50aWZpZXIgPSBjb25maWcuZmluYWxTbmFwc2hvdElkZW50aWZpZXI7XG4gICAgdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIgPSBjb25maWcuZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI7XG4gICAgdGhpcy5fa21zS2V5SWQgPSBjb25maWcua21zS2V5SWQ7XG4gICAgdGhpcy5fbWFzdGVyUGFzc3dvcmQgPSBjb25maWcubWFzdGVyUGFzc3dvcmQ7XG4gICAgdGhpcy5fbWFzdGVyVXNlcm5hbWUgPSBjb25maWcubWFzdGVyVXNlcm5hbWU7XG4gICAgdGhpcy5fcG9ydCA9IGNvbmZpZy5wb3J0O1xuICAgIHRoaXMuX3ByZWZlcnJlZEJhY2t1cFdpbmRvdyA9IGNvbmZpZy5wcmVmZXJyZWRCYWNrdXBXaW5kb3c7XG4gICAgdGhpcy5fcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3cgPSBjb25maWcucHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3c7XG4gICAgdGhpcy5fc2tpcEZpbmFsU25hcHNob3QgPSBjb25maWcuc2tpcEZpbmFsU25hcHNob3Q7XG4gICAgdGhpcy5fc25hcHNob3RJZGVudGlmaWVyID0gY29uZmlnLnNuYXBzaG90SWRlbnRpZmllcjtcbiAgICB0aGlzLl9zdG9yYWdlRW5jcnlwdGVkID0gY29uZmlnLnN0b3JhZ2VFbmNyeXB0ZWQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gY29uZmlnLnZwY1NlY3VyaXR5R3JvdXBJZHM7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50aW1lb3V0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXBwbHlfaW1tZWRpYXRlbHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBseUltbWVkaWF0ZWx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhcHBseUltbWVkaWF0ZWx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FwcGx5X2ltbWVkaWF0ZWx5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbHlJbW1lZGlhdGVseSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXBwbHlJbW1lZGlhdGVseSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGx5SW1tZWRpYXRlbHkoKSB7XG4gICAgdGhpcy5fYXBwbHlJbW1lZGlhdGVseSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbHlJbW1lZGlhdGVseUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBseUltbWVkaWF0ZWx5O1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF2YWlsYWJpbGl0eVpvbmVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZhaWxhYmlsaXR5Wm9uZXMoKSB7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzO1xuICB9XG5cbiAgLy8gYmFja3VwX3JldGVudGlvbl9wZXJpb2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmFja3VwUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBiYWNrdXBSZXRlbnRpb25QZXJpb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdiYWNrdXBfcmV0ZW50aW9uX3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFja3VwUmV0ZW50aW9uUGVyaW9kKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9iYWNrdXBSZXRlbnRpb25QZXJpb2QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCYWNrdXBSZXRlbnRpb25QZXJpb2QoKSB7XG4gICAgdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYWNrdXBSZXRlbnRpb25QZXJpb2RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVySWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlcklkZW50aWZpZXI7XG4gIH1cblxuICAvLyBjbHVzdGVyX2lkZW50aWZpZXJfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlcklkZW50aWZpZXJQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlcklkZW50aWZpZXJQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3RlcklkZW50aWZpZXJQcmVmaXgoKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4O1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9tZW1iZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3Rlck1lbWJlcnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY2x1c3Rlck1lbWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY2x1c3Rlcl9tZW1iZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyTWVtYmVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jbHVzdGVyTWVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsdXN0ZXJNZW1iZXJzKCkge1xuICAgIHRoaXMuX2NsdXN0ZXJNZW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVyTWVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyTWVtYmVycztcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfcmVzb3VyY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbHVzdGVyUmVzb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfcmVzb3VyY2VfaWQnKTtcbiAgfVxuXG4gIC8vIGRiX2NsdXN0ZXJfcGFyYW1ldGVyX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYkNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RiX2NsdXN0ZXJfcGFyYW1ldGVyX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGJDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGRiX3N1Ym5ldF9ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGJTdWJuZXRHcm91cE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRiU3VibmV0R3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGJfc3VibmV0X2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRiU3VibmV0R3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYlN1Ym5ldEdyb3VwTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERiU3VibmV0R3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2RiU3VibmV0R3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYlN1Ym5ldEdyb3VwTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYlN1Ym5ldEdyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGRlbGV0aW9uX3Byb3RlY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkZWxldGlvblByb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRpb25fcHJvdGVjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0aW9uUHJvdGVjdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGVsZXRpb25Qcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRpb25Qcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbjtcbiAgfVxuXG4gIC8vIGVuYWJsZWRfY2xvdWR3YXRjaF9sb2dzX2V4cG9ydHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBlbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2VuYWJsZWRfY2xvdWR3YXRjaF9sb2dzX2V4cG9ydHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWRDbG91ZHdhdGNoTG9nc0V4cG9ydHMoKSB7XG4gICAgdGhpcy5fZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZENsb3Vkd2F0Y2hMb2dzRXhwb3J0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzO1xuICB9XG5cbiAgLy8gZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBlbmdpbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5naW5lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5naW5lKCkge1xuICAgIHRoaXMuX2VuZ2luZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZTtcbiAgfVxuXG4gIC8vIGVuZ2luZV92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5naW5lVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5naW5lVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmdpbmVWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5naW5lVmVyc2lvbigpIHtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZVZlcnNpb247XG4gIH1cblxuICAvLyBmaW5hbF9zbmFwc2hvdF9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaW5hbFNuYXBzaG90SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbmFsU25hcHNob3RJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maW5hbFNuYXBzaG90SWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbmFsU25hcHNob3RJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaW5hbFNuYXBzaG90SWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maW5hbFNuYXBzaG90SWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIGdsb2JhbF9jbHVzdGVyX2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdsb2JhbENsdXN0ZXJJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2xvYmFsX2NsdXN0ZXJfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dsb2JhbENsdXN0ZXJJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2xvYmFsQ2x1c3RlcklkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fZ2xvYmFsQ2x1c3RlcklkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdsb2JhbENsdXN0ZXJJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbENsdXN0ZXJJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gaG9zdGVkX3pvbmVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0ZWRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0ZWRfem9uZV9pZCcpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlJZCgpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5SWQ7XG4gIH1cblxuICAvLyBtYXN0ZXJfcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWFzdGVyUGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1hc3RlclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWFzdGVyX3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXN0ZXJQYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFzdGVyUGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXN0ZXJQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9tYXN0ZXJQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFzdGVyUGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFzdGVyUGFzc3dvcmQ7XG4gIH1cblxuICAvLyBtYXN0ZXJfdXNlcm5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXN0ZXJVc2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWFzdGVyVXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXN0ZXJfdXNlcm5hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1hc3RlclVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXN0ZXJVc2VybmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hc3RlclVzZXJuYW1lKCkge1xuICAgIHRoaXMuX21hc3RlclVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXN0ZXJVc2VybmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXN0ZXJVc2VybmFtZTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByZWZlcnJlZF9iYWNrdXBfd2luZG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVycmVkQmFja3VwV2luZG93Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRCYWNrdXBXaW5kb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmZXJyZWRfYmFja3VwX3dpbmRvdycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZmVycmVkQmFja3VwV2luZG93KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3cgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmZXJyZWRCYWNrdXBXaW5kb3coKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkQmFja3VwV2luZG93ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRCYWNrdXBXaW5kb3dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmVycmVkQmFja3VwV2luZG93O1xuICB9XG5cbiAgLy8gcHJlZmVycmVkX21haW50ZW5hbmNlX3dpbmRvdyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZlcnJlZF9tYWludGVuYW5jZV93aW5kb3cnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93KCkge1xuICAgIHRoaXMuX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvd0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdztcbiAgfVxuXG4gIC8vIHJlYWRlcl9lbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlYWRlckVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVhZGVyX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBza2lwX2ZpbmFsX3NuYXBzaG90IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NraXBGaW5hbFNuYXBzaG90PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBza2lwRmluYWxTbmFwc2hvdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdza2lwX2ZpbmFsX3NuYXBzaG90JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2tpcEZpbmFsU25hcHNob3QodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NraXBGaW5hbFNuYXBzaG90ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tpcEZpbmFsU25hcHNob3QoKSB7XG4gICAgdGhpcy5fc2tpcEZpbmFsU25hcHNob3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNraXBGaW5hbFNuYXBzaG90SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NraXBGaW5hbFNuYXBzaG90O1xuICB9XG5cbiAgLy8gc25hcHNob3RfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNuYXBzaG90SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NuYXBzaG90X2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuYXBzaG90SWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25hcHNob3RJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U25hcHNob3RJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX3NuYXBzaG90SWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25hcHNob3RJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NuYXBzaG90SWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfZW5jcnlwdGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VFbmNyeXB0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3RvcmFnZV9lbmNyeXB0ZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yYWdlRW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdG9yYWdlRW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUVuY3J5cHRlZCgpIHtcbiAgICB0aGlzLl9zdG9yYWdlRW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlRW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VFbmNyeXB0ZWQ7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdnBjX3NlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY1NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNTZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNTZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY1NlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IERvY2RiQ2x1c3RlclRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRpbWVvdXRzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IERvY2RiQ2x1c3RlclRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcGx5X2ltbWVkaWF0ZWx5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXBwbHlJbW1lZGlhdGVseSksXG4gICAgICBhdmFpbGFiaWxpdHlfem9uZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzKSxcbiAgICAgIGJhY2t1cF9yZXRlbnRpb25fcGVyaW9kOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9iYWNrdXBSZXRlbnRpb25QZXJpb2QpLFxuICAgICAgY2x1c3Rlcl9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVySWRlbnRpZmllciksXG4gICAgICBjbHVzdGVyX2lkZW50aWZpZXJfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVySWRlbnRpZmllclByZWZpeCksXG4gICAgICBjbHVzdGVyX21lbWJlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2NsdXN0ZXJNZW1iZXJzKSxcbiAgICAgIGRiX2NsdXN0ZXJfcGFyYW1ldGVyX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RiQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSksXG4gICAgICBkYl9zdWJuZXRfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGJTdWJuZXRHcm91cE5hbWUpLFxuICAgICAgZGVsZXRpb25fcHJvdGVjdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiksXG4gICAgICBlbmFibGVkX2Nsb3Vkd2F0Y2hfbG9nc19leHBvcnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9lbmFibGVkQ2xvdWR3YXRjaExvZ3NFeHBvcnRzKSxcbiAgICAgIGVuZ2luZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5naW5lKSxcbiAgICAgIGVuZ2luZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVWZXJzaW9uKSxcbiAgICAgIGZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyKSxcbiAgICAgIGdsb2JhbF9jbHVzdGVyX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2dsb2JhbENsdXN0ZXJJZGVudGlmaWVyKSxcbiAgICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc0tleUlkKSxcbiAgICAgIG1hc3Rlcl9wYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbWFzdGVyUGFzc3dvcmQpLFxuICAgICAgbWFzdGVyX3VzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tYXN0ZXJVc2VybmFtZSksXG4gICAgICBwb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9wb3J0KSxcbiAgICAgIHByZWZlcnJlZF9iYWNrdXBfd2luZG93OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3cpLFxuICAgICAgcHJlZmVycmVkX21haW50ZW5hbmNlX3dpbmRvdzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJlZmVycmVkTWFpbnRlbmFuY2VXaW5kb3cpLFxuICAgICAgc2tpcF9maW5hbF9zbmFwc2hvdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3NraXBGaW5hbFNuYXBzaG90KSxcbiAgICAgIHNuYXBzaG90X2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NuYXBzaG90SWRlbnRpZmllciksXG4gICAgICBzdG9yYWdlX2VuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N0b3JhZ2VFbmNyeXB0ZWQpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzKSxcbiAgICAgIHRpbWVvdXRzOiBkb2NkYkNsdXN0ZXJUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==