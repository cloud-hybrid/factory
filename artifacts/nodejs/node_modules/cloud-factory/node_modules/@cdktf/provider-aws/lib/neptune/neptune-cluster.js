"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeptuneCluster = exports.NeptuneClusterTimeoutsOutputReference = exports.neptuneClusterTimeoutsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function neptuneClusterTimeoutsToTerraform(struct) {
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
exports.neptuneClusterTimeoutsToTerraform = neptuneClusterTimeoutsToTerraform;
/**
 * @stability stable
 */
class NeptuneClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.NeptuneClusterTimeoutsOutputReference = NeptuneClusterTimeoutsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
NeptuneClusterTimeoutsOutputReference[_a] = { fqn: "@cdktf/provider-aws.neptune.NeptuneClusterTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster}.
 *
 * @stability stable
 */
class NeptuneCluster extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html aws_neptune_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_neptune_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new NeptuneClusterTimeoutsOutputReference(this, "timeouts", true);
        this._applyImmediately = config.applyImmediately;
        this._availabilityZones = config.availabilityZones;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._clusterIdentifier = config.clusterIdentifier;
        this._clusterIdentifierPrefix = config.clusterIdentifierPrefix;
        this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        this._deletionProtection = config.deletionProtection;
        this._enableCloudwatchLogsExports = config.enableCloudwatchLogsExports;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
        this._iamRoles = config.iamRoles;
        this._kmsKeyArn = config.kmsKeyArn;
        this._neptuneClusterParameterGroupName = config.neptuneClusterParameterGroupName;
        this._neptuneSubnetGroupName = config.neptuneSubnetGroupName;
        this._port = config.port;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._replicationSourceIdentifier = config.replicationSourceIdentifier;
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
    // cluster_members - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clusterMembers() {
        return this.getListAttribute('cluster_members');
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
    get enableCloudwatchLogsExports() {
        return this.getListAttribute('enable_cloudwatch_logs_exports');
    }
    /**
     * @stability stable
     */
    set enableCloudwatchLogsExports(value) {
        this._enableCloudwatchLogsExports = value;
    }
    /**
     * @stability stable
     */
    resetEnableCloudwatchLogsExports() {
        this._enableCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableCloudwatchLogsExportsInput() {
        return this._enableCloudwatchLogsExports;
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
    get neptuneClusterParameterGroupName() {
        return this.getStringAttribute('neptune_cluster_parameter_group_name');
    }
    /**
     * @stability stable
     */
    set neptuneClusterParameterGroupName(value) {
        this._neptuneClusterParameterGroupName = value;
    }
    /**
     * @stability stable
     */
    resetNeptuneClusterParameterGroupName() {
        this._neptuneClusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get neptuneClusterParameterGroupNameInput() {
        return this._neptuneClusterParameterGroupName;
    }
    /**
     * @stability stable
     */
    get neptuneSubnetGroupName() {
        return this.getStringAttribute('neptune_subnet_group_name');
    }
    /**
     * @stability stable
     */
    set neptuneSubnetGroupName(value) {
        this._neptuneSubnetGroupName = value;
    }
    /**
     * @stability stable
     */
    resetNeptuneSubnetGroupName() {
        this._neptuneSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get neptuneSubnetGroupNameInput() {
        return this._neptuneSubnetGroupName;
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
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            enable_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enableCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
            iam_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._iamRoles),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            neptune_cluster_parameter_group_name: cdktf.stringToTerraform(this._neptuneClusterParameterGroupName),
            neptune_subnet_group_name: cdktf.stringToTerraform(this._neptuneSubnetGroupName),
            port: cdktf.numberToTerraform(this._port),
            preferred_backup_window: cdktf.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktf.stringToTerraform(this._preferredMaintenanceWindow),
            replication_source_identifier: cdktf.stringToTerraform(this._replicationSourceIdentifier),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            timeouts: neptuneClusterTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.NeptuneCluster = NeptuneCluster;
_b = JSII_RTTI_SYMBOL_1;
NeptuneCluster[_b] = { fqn: "@cdktf/provider-aws.neptune.NeptuneCluster", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
NeptuneCluster.tfResourceType = "aws_neptune_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVwdHVuZS1jbHVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25lcHR1bmUvbmVwdHVuZS1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBb0UvQixTQUFnQixpQ0FBaUMsQ0FBQyxNQUF1RTtJQUN2SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBVkQsOEVBVUM7Ozs7QUFFRCxNQUFhLHFDQUFzQyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTVFLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXlDO1FBQ2hFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUMxQjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOztBQXZGSCxzRkF3RkM7Ozs7Ozs7O0FBR0QsTUFBYSxjQUFlLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU96RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBK0IsRUFBRTtRQUNoRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHFCQUFxQjtZQUM1QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBdWVMLDhEQUE4RDtRQUN0RCxjQUFTLEdBQUcsSUFBSSxxQ0FBcUMsQ0FBQyxJQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBdmUzRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7UUFDL0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3JELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxNQUFNLENBQUMsMkJBQTJCLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQy9ELElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxNQUFNLENBQUMsZ0NBQWdDLENBQUM7UUFDakYsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsTUFBTSxDQUFDLGdDQUFnQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDM0QsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUNyRSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFRRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBUSxDQUFDO0lBQzlELENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWtDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFlO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBYTtRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDTSwwQkFBMEI7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBVyx1QkFBdUIsQ0FBQyxLQUFhO1FBQzlDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQztJQUVELHFFQUFxRTs7OztJQUNyRSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQseUVBQXlFOzs7O0lBQ3pFLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFRLENBQUM7SUFDbEUsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBa0M7UUFDOUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs7O0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQVEsQ0FBQztJQUNoRSxDQUFDOzs7O0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFrQztRQUM5RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFDTSx1QkFBdUI7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7Ozs7SUFJRCxJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFDRCxJQUFXLDJCQUEyQixDQUFDLEtBQWU7UUFDcEQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sZ0NBQWdDO1FBQ3JDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOERBQThEOzs7O0lBQzlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFDRCxJQUFXLHVCQUF1QixDQUFDLEtBQWE7UUFDOUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUM7SUFDNUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0VBQW9FOzs7O0lBQ3BFLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFJRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBUSxDQUFDO0lBQ2hGLENBQUM7Ozs7SUFDRCxJQUFXLGdDQUFnQyxDQUFDLEtBQWtDO1FBQzVFLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxLQUFLLENBQUM7SUFDakQsQ0FBQzs7OztJQUNNLHFDQUFxQztRQUMxQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQ0FBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBZTtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxnQ0FBZ0M7UUFDekMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7O0lBQ0QsSUFBVyxnQ0FBZ0MsQ0FBQyxLQUFhO1FBQ3ZELElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxLQUFLLENBQUM7SUFDakQsQ0FBQzs7OztJQUNNLHFDQUFxQztRQUMxQyxJQUFJLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQ0FBcUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUlELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQzs7OztJQUNELElBQVcsc0JBQXNCLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ0QsSUFBVyxxQkFBcUIsQ0FBQyxLQUFhO1FBQzVDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzs7OztJQUlELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBYTtRQUNqRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDTSwrQkFBK0I7UUFDcEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsK0JBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7SUFFRCxxRUFBcUU7Ozs7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUlELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUNELElBQVcsMkJBQTJCLENBQUMsS0FBYTtRQUNsRCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFDTSxnQ0FBZ0M7UUFDckMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLFNBQVMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0NBQWdDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDO0lBQzNDLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWtDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFDTSx1QkFBdUI7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBUSxDQUFDO0lBQzlELENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWtDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFRLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQW9EO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFlO1FBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7OztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFdBQVcsQ0FBQyxLQUE2QjtRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN0Rix1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzdFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDcEUseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUNqRixxQkFBcUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdkUsOEJBQThCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7WUFDNUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdDLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM1RCx5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1lBQ2pGLG1DQUFtQyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUM7WUFDckcsU0FBUyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwRSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDckQsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztZQUNyRyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQ2hGLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6Qyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzdFLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7WUFDdkYsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztZQUN6RixtQkFBbUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3RFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdEUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUM1RixRQUFRLEVBQUUsaUNBQWlDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDMUUsQ0FBQztJQUNKLENBQUM7O0FBL2lCSCx3Q0FnakJDOzs7QUE5aUJDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNkJBQWMsR0FBVyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIE5lcHR1bmVDbHVzdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXBwbHlJbW1lZGlhdGVseT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF2YWlsYWJpbGl0eVpvbmVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmFja3VwUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2x1c3RlcklkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29weVRhZ3NUb1NuYXBzaG90PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGlvblByb3RlY3Rpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVDbG91ZHdhdGNoTG9nc0V4cG9ydHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmdpbmVWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaW5hbFNuYXBzaG90SWRlbnRpZmllcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbVJvbGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmVwdHVuZUNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5lcHR1bmVTdWJuZXRHcm91cE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZmVycmVkQmFja3VwV2luZG93Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNraXBGaW5hbFNuYXBzaG90PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZUVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2cGNTZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBOZXB0dW5lQ2x1c3RlclRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZXB0dW5lQ2x1c3RlclRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVwZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5lcHR1bmVDbHVzdGVyVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBOZXB0dW5lQ2x1c3RlclRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIHwgTmVwdHVuZUNsdXN0ZXJUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOZXB0dW5lQ2x1c3RlclRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE5lcHR1bmVDbHVzdGVyVGltZW91dHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlID0gdGhpcy5fY3JlYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVsZXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE5lcHR1bmVDbHVzdGVyVGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBOZXB0dW5lQ2x1c3RlciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19uZXB0dW5lX2NsdXN0ZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTmVwdHVuZUNsdXN0ZXJDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX25lcHR1bmVfY2x1c3RlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hcHBseUltbWVkaWF0ZWx5ID0gY29uZmlnLmFwcGx5SW1tZWRpYXRlbHk7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZXMgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZXM7XG4gICAgdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kID0gY29uZmlnLmJhY2t1cFJldGVudGlvblBlcmlvZDtcbiAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllciA9IGNvbmZpZy5jbHVzdGVySWRlbnRpZmllcjtcbiAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllclByZWZpeCA9IGNvbmZpZy5jbHVzdGVySWRlbnRpZmllclByZWZpeDtcbiAgICB0aGlzLl9jb3B5VGFnc1RvU25hcHNob3QgPSBjb25maWcuY29weVRhZ3NUb1NuYXBzaG90O1xuICAgIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiA9IGNvbmZpZy5kZWxldGlvblByb3RlY3Rpb247XG4gICAgdGhpcy5fZW5hYmxlQ2xvdWR3YXRjaExvZ3NFeHBvcnRzID0gY29uZmlnLmVuYWJsZUNsb3Vkd2F0Y2hMb2dzRXhwb3J0cztcbiAgICB0aGlzLl9lbmdpbmUgPSBjb25maWcuZW5naW5lO1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSBjb25maWcuZW5naW5lVmVyc2lvbjtcbiAgICB0aGlzLl9maW5hbFNuYXBzaG90SWRlbnRpZmllciA9IGNvbmZpZy5maW5hbFNuYXBzaG90SWRlbnRpZmllcjtcbiAgICB0aGlzLl9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZCA9IGNvbmZpZy5pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZDtcbiAgICB0aGlzLl9pYW1Sb2xlcyA9IGNvbmZpZy5pYW1Sb2xlcztcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSBjb25maWcua21zS2V5QXJuO1xuICAgIHRoaXMuX25lcHR1bmVDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lID0gY29uZmlnLm5lcHR1bmVDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lO1xuICAgIHRoaXMuX25lcHR1bmVTdWJuZXRHcm91cE5hbWUgPSBjb25maWcubmVwdHVuZVN1Ym5ldEdyb3VwTmFtZTtcbiAgICB0aGlzLl9wb3J0ID0gY29uZmlnLnBvcnQ7XG4gICAgdGhpcy5fcHJlZmVycmVkQmFja3VwV2luZG93ID0gY29uZmlnLnByZWZlcnJlZEJhY2t1cFdpbmRvdztcbiAgICB0aGlzLl9wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdyA9IGNvbmZpZy5wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdztcbiAgICB0aGlzLl9yZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXIgPSBjb25maWcucmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyO1xuICAgIHRoaXMuX3NraXBGaW5hbFNuYXBzaG90ID0gY29uZmlnLnNraXBGaW5hbFNuYXBzaG90O1xuICAgIHRoaXMuX3NuYXBzaG90SWRlbnRpZmllciA9IGNvbmZpZy5zbmFwc2hvdElkZW50aWZpZXI7XG4gICAgdGhpcy5fc3RvcmFnZUVuY3J5cHRlZCA9IGNvbmZpZy5zdG9yYWdlRW5jcnlwdGVkO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy52cGNTZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwcGx5X2ltbWVkaWF0ZWx5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbHlJbW1lZGlhdGVseT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXBwbHlJbW1lZGlhdGVseSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhcHBseV9pbW1lZGlhdGVseScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcGx5SW1tZWRpYXRlbHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBseUltbWVkaWF0ZWx5KCkge1xuICAgIHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGx5SW1tZWRpYXRlbHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlJbW1lZGlhdGVseTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZhaWxhYmlsaXR5Wm9uZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF2YWlsYWJpbGl0eVpvbmVzKCkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdmFpbGFiaWxpdHlab25lcztcbiAgfVxuXG4gIC8vIGJhY2t1cF9yZXRlbnRpb25fcGVyaW9kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JhY2t1cFJldGVudGlvblBlcmlvZD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYmFja3VwUmV0ZW50aW9uUGVyaW9kKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmFja3VwX3JldGVudGlvbl9wZXJpb2QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJhY2t1cFJldGVudGlvblBlcmlvZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmFja3VwUmV0ZW50aW9uUGVyaW9kKCkge1xuICAgIHRoaXMuX2JhY2t1cFJldGVudGlvblBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmFja3VwUmV0ZW50aW9uUGVyaW9kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2t1cFJldGVudGlvblBlcmlvZDtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfaWRlbnRpZmllciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsdXN0ZXJJZGVudGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVySWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlcklkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3RlcklkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVySWRlbnRpZmllclByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfaWRlbnRpZmllcl9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsdXN0ZXJJZGVudGlmaWVyUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbHVzdGVySWRlbnRpZmllclByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsdXN0ZXJJZGVudGlmaWVyUHJlZml4KCkge1xuICAgIHRoaXMuX2NsdXN0ZXJJZGVudGlmaWVyUHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbHVzdGVySWRlbnRpZmllclByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVySWRlbnRpZmllclByZWZpeDtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfbWVtYmVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJNZW1iZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2NsdXN0ZXJfbWVtYmVycycpO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9yZXNvdXJjZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJSZXNvdXJjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9yZXNvdXJjZV9pZCcpO1xuICB9XG5cbiAgLy8gY29weV90YWdzX3RvX3NuYXBzaG90IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlUYWdzVG9TbmFwc2hvdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY29weVRhZ3NUb1NuYXBzaG90KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvcHlfdGFnc190b19zbmFwc2hvdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcHlUYWdzVG9TbmFwc2hvdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29weVRhZ3NUb1NuYXBzaG90ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29weVRhZ3NUb1NuYXBzaG90KCkge1xuICAgIHRoaXMuX2NvcHlUYWdzVG9TbmFwc2hvdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29weVRhZ3NUb1NuYXBzaG90SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcHlUYWdzVG9TbmFwc2hvdDtcbiAgfVxuXG4gIC8vIGRlbGV0aW9uX3Byb3RlY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRpb25Qcm90ZWN0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkZWxldGlvblByb3RlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRpb25fcHJvdGVjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0aW9uUHJvdGVjdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGVsZXRpb25Qcm90ZWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRpb25Qcm90ZWN0aW9uKCkge1xuICAgIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRpb25Qcm90ZWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0aW9uUHJvdGVjdGlvbjtcbiAgfVxuXG4gIC8vIGVuYWJsZV9jbG91ZHdhdGNoX2xvZ3NfZXhwb3J0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVDbG91ZHdhdGNoTG9nc0V4cG9ydHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlQ2xvdWR3YXRjaExvZ3NFeHBvcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2VuYWJsZV9jbG91ZHdhdGNoX2xvZ3NfZXhwb3J0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlQ2xvdWR3YXRjaExvZ3NFeHBvcnRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2VuYWJsZUNsb3Vkd2F0Y2hMb2dzRXhwb3J0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZUNsb3Vkd2F0Y2hMb2dzRXhwb3J0cygpIHtcbiAgICB0aGlzLl9lbmFibGVDbG91ZHdhdGNoTG9nc0V4cG9ydHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUNsb3Vkd2F0Y2hMb2dzRXhwb3J0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVDbG91ZHdhdGNoTG9nc0V4cG9ydHM7XG4gIH1cblxuICAvLyBlbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIGVuZ2luZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmdpbmU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZ2luZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5naW5lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmdpbmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmdpbmUoKSB7XG4gICAgdGhpcy5fZW5naW5lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lO1xuICB9XG5cbiAgLy8gZW5naW5lX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmdpbmVWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmdpbmVWZXJzaW9uKCkge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lVmVyc2lvbjtcbiAgfVxuXG4gIC8vIGZpbmFsX3NuYXBzaG90X2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmluYWxTbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbmFsU25hcHNob3RJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmluYWxfc25hcHNob3RfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmluYWxTbmFwc2hvdElkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmluYWxTbmFwc2hvdElkZW50aWZpZXIoKSB7XG4gICAgdGhpcy5fZmluYWxTbmFwc2hvdElkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbmFsU25hcHNob3RJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmFsU25hcHNob3RJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gaG9zdGVkX3pvbmVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0ZWRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0ZWRfem9uZV9pZCcpO1xuICB9XG5cbiAgLy8gaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGlhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2lhbV9kYXRhYmFzZV9hdXRoZW50aWNhdGlvbl9lbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2lhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQoKSB7XG4gICAgdGhpcy5faWFtRGF0YWJhc2VBdXRoZW50aWNhdGlvbkVuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbURhdGFiYXNlQXV0aGVudGljYXRpb25FbmFibGVkO1xuICB9XG5cbiAgLy8gaWFtX3JvbGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lhbVJvbGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGlhbVJvbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lhbV9yb2xlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWFtUm9sZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faWFtUm9sZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYW1Sb2xlcygpIHtcbiAgICB0aGlzLl9pYW1Sb2xlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWFtUm9sZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtUm9sZXM7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUFybigpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlBcm47XG4gIH1cblxuICAvLyBuZXB0dW5lX2NsdXN0ZXJfcGFyYW1ldGVyX2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmVwdHVuZUNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5lcHR1bmVDbHVzdGVyUGFyYW1ldGVyR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmVwdHVuZV9jbHVzdGVyX3BhcmFtZXRlcl9ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuZXB0dW5lQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmVwdHVuZUNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXB0dW5lQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9uZXB0dW5lQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmVwdHVuZUNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmVwdHVuZUNsdXN0ZXJQYXJhbWV0ZXJHcm91cE5hbWU7XG4gIH1cblxuICAvLyBuZXB0dW5lX3N1Ym5ldF9ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmVwdHVuZVN1Ym5ldEdyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmVwdHVuZVN1Ym5ldEdyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25lcHR1bmVfc3VibmV0X2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5lcHR1bmVTdWJuZXRHcm91cE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25lcHR1bmVTdWJuZXRHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXB0dW5lU3VibmV0R3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX25lcHR1bmVTdWJuZXRHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5lcHR1bmVTdWJuZXRHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmVwdHVuZVN1Ym5ldEdyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHByZWZlcnJlZF9iYWNrdXBfd2luZG93IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVycmVkQmFja3VwV2luZG93Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRCYWNrdXBXaW5kb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmZXJyZWRfYmFja3VwX3dpbmRvdycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZmVycmVkQmFja3VwV2luZG93KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRCYWNrdXBXaW5kb3cgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmZXJyZWRCYWNrdXBXaW5kb3coKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkQmFja3VwV2luZG93ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRCYWNrdXBXaW5kb3dJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmVycmVkQmFja3VwV2luZG93O1xuICB9XG5cbiAgLy8gcHJlZmVycmVkX21haW50ZW5hbmNlX3dpbmRvdyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZlcnJlZF9tYWludGVuYW5jZV93aW5kb3cnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93KCkge1xuICAgIHRoaXMuX3ByZWZlcnJlZE1haW50ZW5hbmNlV2luZG93ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvd0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdztcbiAgfVxuXG4gIC8vIHJlYWRlcl9lbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlYWRlckVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVhZGVyX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyByZXBsaWNhdGlvbl9zb3VyY2VfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcGxpY2F0aW9uX3NvdXJjZV9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcigpIHtcbiAgICB0aGlzLl9yZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcGxpY2F0aW9uU291cmNlSWRlbnRpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBsaWNhdGlvblNvdXJjZUlkZW50aWZpZXI7XG4gIH1cblxuICAvLyBza2lwX2ZpbmFsX3NuYXBzaG90IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NraXBGaW5hbFNuYXBzaG90PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBza2lwRmluYWxTbmFwc2hvdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdza2lwX2ZpbmFsX3NuYXBzaG90JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2tpcEZpbmFsU25hcHNob3QodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NraXBGaW5hbFNuYXBzaG90ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tpcEZpbmFsU25hcHNob3QoKSB7XG4gICAgdGhpcy5fc2tpcEZpbmFsU25hcHNob3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNraXBGaW5hbFNuYXBzaG90SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NraXBGaW5hbFNuYXBzaG90O1xuICB9XG5cbiAgLy8gc25hcHNob3RfaWRlbnRpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbmFwc2hvdElkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNuYXBzaG90SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NuYXBzaG90X2lkZW50aWZpZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuYXBzaG90SWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25hcHNob3RJZGVudGlmaWVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U25hcHNob3RJZGVudGlmaWVyKCkge1xuICAgIHRoaXMuX3NuYXBzaG90SWRlbnRpZmllciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25hcHNob3RJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NuYXBzaG90SWRlbnRpZmllcjtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfZW5jcnlwdGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VFbmNyeXB0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3RvcmFnZV9lbmNyeXB0ZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yYWdlRW5jcnlwdGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdG9yYWdlRW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUVuY3J5cHRlZCgpIHtcbiAgICB0aGlzLl9zdG9yYWdlRW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlRW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VFbmNyeXB0ZWQ7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdnBjX3NlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY1NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNTZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNTZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY1NlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IE5lcHR1bmVDbHVzdGVyVGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogTmVwdHVuZUNsdXN0ZXJUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBseV9pbW1lZGlhdGVseTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkpLFxuICAgICAgYXZhaWxhYmlsaXR5X3pvbmVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9hdmFpbGFiaWxpdHlab25lcyksXG4gICAgICBiYWNrdXBfcmV0ZW50aW9uX3BlcmlvZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYmFja3VwUmV0ZW50aW9uUGVyaW9kKSxcbiAgICAgIGNsdXN0ZXJfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2x1c3RlcklkZW50aWZpZXIpLFxuICAgICAgY2x1c3Rlcl9pZGVudGlmaWVyX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2x1c3RlcklkZW50aWZpZXJQcmVmaXgpLFxuICAgICAgY29weV90YWdzX3RvX3NuYXBzaG90OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY29weVRhZ3NUb1NuYXBzaG90KSxcbiAgICAgIGRlbGV0aW9uX3Byb3RlY3Rpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9kZWxldGlvblByb3RlY3Rpb24pLFxuICAgICAgZW5hYmxlX2Nsb3Vkd2F0Y2hfbG9nc19leHBvcnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9lbmFibGVDbG91ZHdhdGNoTG9nc0V4cG9ydHMpLFxuICAgICAgZW5naW5lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmUpLFxuICAgICAgZW5naW5lX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZ2luZVZlcnNpb24pLFxuICAgICAgZmluYWxfc25hcHNob3RfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmluYWxTbmFwc2hvdElkZW50aWZpZXIpLFxuICAgICAgaWFtX2RhdGFiYXNlX2F1dGhlbnRpY2F0aW9uX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pYW1EYXRhYmFzZUF1dGhlbnRpY2F0aW9uRW5hYmxlZCksXG4gICAgICBpYW1fcm9sZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2lhbVJvbGVzKSxcbiAgICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rbXNLZXlBcm4pLFxuICAgICAgbmVwdHVuZV9jbHVzdGVyX3BhcmFtZXRlcl9ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uZXB0dW5lQ2x1c3RlclBhcmFtZXRlckdyb3VwTmFtZSksXG4gICAgICBuZXB0dW5lX3N1Ym5ldF9ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uZXB0dW5lU3VibmV0R3JvdXBOYW1lKSxcbiAgICAgIHBvcnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3BvcnQpLFxuICAgICAgcHJlZmVycmVkX2JhY2t1cF93aW5kb3c6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByZWZlcnJlZEJhY2t1cFdpbmRvdyksXG4gICAgICBwcmVmZXJyZWRfbWFpbnRlbmFuY2Vfd2luZG93OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcmVmZXJyZWRNYWludGVuYW5jZVdpbmRvdyksXG4gICAgICByZXBsaWNhdGlvbl9zb3VyY2VfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVwbGljYXRpb25Tb3VyY2VJZGVudGlmaWVyKSxcbiAgICAgIHNraXBfZmluYWxfc25hcHNob3Q6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9za2lwRmluYWxTbmFwc2hvdCksXG4gICAgICBzbmFwc2hvdF9pZGVudGlmaWVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbmFwc2hvdElkZW50aWZpZXIpLFxuICAgICAgc3RvcmFnZV9lbmNyeXB0ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlRW5jcnlwdGVkKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyksXG4gICAgICB0aW1lb3V0czogbmVwdHVuZUNsdXN0ZXJUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==