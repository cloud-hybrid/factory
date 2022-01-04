"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsxWindowsFileSystem = exports.FsxWindowsFileSystemTimeoutsOutputReference = exports.fsxWindowsFileSystemTimeoutsToTerraform = exports.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference = exports.fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform = exports.FsxWindowsFileSystemAuditLogConfigurationOutputReference = exports.fsxWindowsFileSystemAuditLogConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function fsxWindowsFileSystemAuditLogConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        audit_log_destination: cdktf.stringToTerraform(struct.auditLogDestination),
        file_access_audit_log_level: cdktf.stringToTerraform(struct.fileAccessAuditLogLevel),
        file_share_access_audit_log_level: cdktf.stringToTerraform(struct.fileShareAccessAuditLogLevel),
    };
}
exports.fsxWindowsFileSystemAuditLogConfigurationToTerraform = fsxWindowsFileSystemAuditLogConfigurationToTerraform;
/**
 * @stability stable
 */
class FsxWindowsFileSystemAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._auditLogDestination) {
            hasAnyValues = true;
            internalValueResult.auditLogDestination = this._auditLogDestination;
        }
        if (this._fileAccessAuditLogLevel) {
            hasAnyValues = true;
            internalValueResult.fileAccessAuditLogLevel = this._fileAccessAuditLogLevel;
        }
        if (this._fileShareAccessAuditLogLevel) {
            hasAnyValues = true;
            internalValueResult.fileShareAccessAuditLogLevel = this._fileShareAccessAuditLogLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._auditLogDestination = undefined;
            this._fileAccessAuditLogLevel = undefined;
            this._fileShareAccessAuditLogLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._auditLogDestination = value.auditLogDestination;
            this._fileAccessAuditLogLevel = value.fileAccessAuditLogLevel;
            this._fileShareAccessAuditLogLevel = value.fileShareAccessAuditLogLevel;
        }
    }
    /**
     * @stability stable
     */
    get auditLogDestination() {
        return this.getStringAttribute('audit_log_destination');
    }
    /**
     * @stability stable
     */
    set auditLogDestination(value) {
        this._auditLogDestination = value;
    }
    /**
     * @stability stable
     */
    resetAuditLogDestination() {
        this._auditLogDestination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get auditLogDestinationInput() {
        return this._auditLogDestination;
    }
    /**
     * @stability stable
     */
    get fileAccessAuditLogLevel() {
        return this.getStringAttribute('file_access_audit_log_level');
    }
    /**
     * @stability stable
     */
    set fileAccessAuditLogLevel(value) {
        this._fileAccessAuditLogLevel = value;
    }
    /**
     * @stability stable
     */
    resetFileAccessAuditLogLevel() {
        this._fileAccessAuditLogLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileAccessAuditLogLevelInput() {
        return this._fileAccessAuditLogLevel;
    }
    /**
     * @stability stable
     */
    get fileShareAccessAuditLogLevel() {
        return this.getStringAttribute('file_share_access_audit_log_level');
    }
    /**
     * @stability stable
     */
    set fileShareAccessAuditLogLevel(value) {
        this._fileShareAccessAuditLogLevel = value;
    }
    /**
     * @stability stable
     */
    resetFileShareAccessAuditLogLevel() {
        this._fileShareAccessAuditLogLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileShareAccessAuditLogLevelInput() {
        return this._fileShareAccessAuditLogLevel;
    }
}
exports.FsxWindowsFileSystemAuditLogConfigurationOutputReference = FsxWindowsFileSystemAuditLogConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
FsxWindowsFileSystemAuditLogConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.fsx.FsxWindowsFileSystemAuditLogConfigurationOutputReference", version: "3.0.1" };
function fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct.dnsIps),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        file_system_administrators_group: cdktf.stringToTerraform(struct.fileSystemAdministratorsGroup),
        organizational_unit_distinguished_name: cdktf.stringToTerraform(struct.organizationalUnitDistinguishedName),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform = fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform;
/**
 * @stability stable
 */
class FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference extends cdktf.ComplexObject {
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
        if (this._dnsIps) {
            hasAnyValues = true;
            internalValueResult.dnsIps = this._dnsIps;
        }
        if (this._domainName) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._fileSystemAdministratorsGroup) {
            hasAnyValues = true;
            internalValueResult.fileSystemAdministratorsGroup = this._fileSystemAdministratorsGroup;
        }
        if (this._organizationalUnitDistinguishedName) {
            hasAnyValues = true;
            internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
        }
        if (this._password) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._username) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dnsIps = undefined;
            this._domainName = undefined;
            this._fileSystemAdministratorsGroup = undefined;
            this._organizationalUnitDistinguishedName = undefined;
            this._password = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dnsIps = value.dnsIps;
            this._domainName = value.domainName;
            this._fileSystemAdministratorsGroup = value.fileSystemAdministratorsGroup;
            this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
            this._password = value.password;
            this._username = value.username;
        }
    }
    /**
     * @stability stable
     */
    get dnsIps() {
        return this.getListAttribute('dns_ips');
    }
    /**
     * @stability stable
     */
    set dnsIps(value) {
        this._dnsIps = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dnsIpsInput() {
        return this._dnsIps;
    }
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
    }
    /**
     * @stability stable
     */
    get fileSystemAdministratorsGroup() {
        return this.getStringAttribute('file_system_administrators_group');
    }
    /**
     * @stability stable
     */
    set fileSystemAdministratorsGroup(value) {
        this._fileSystemAdministratorsGroup = value;
    }
    /**
     * @stability stable
     */
    resetFileSystemAdministratorsGroup() {
        this._fileSystemAdministratorsGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileSystemAdministratorsGroupInput() {
        return this._fileSystemAdministratorsGroup;
    }
    /**
     * @stability stable
     */
    get organizationalUnitDistinguishedName() {
        return this.getStringAttribute('organizational_unit_distinguished_name');
    }
    /**
     * @stability stable
     */
    set organizationalUnitDistinguishedName(value) {
        this._organizationalUnitDistinguishedName = value;
    }
    /**
     * @stability stable
     */
    resetOrganizationalUnitDistinguishedName() {
        this._organizationalUnitDistinguishedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get organizationalUnitDistinguishedNameInput() {
        return this._organizationalUnitDistinguishedName;
    }
    /**
     * @stability stable
     */
    get password() {
        return this.getStringAttribute('password');
    }
    /**
     * @stability stable
     */
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passwordInput() {
        return this._password;
    }
    /**
     * @stability stable
     */
    get username() {
        return this.getStringAttribute('username');
    }
    /**
     * @stability stable
     */
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usernameInput() {
        return this._username;
    }
}
exports.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference = FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference;
_b = JSII_RTTI_SYMBOL_1;
FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference[_b] = { fqn: "@cdktf/provider-aws.fsx.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference", version: "3.0.1" };
function fsxWindowsFileSystemTimeoutsToTerraform(struct) {
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
exports.fsxWindowsFileSystemTimeoutsToTerraform = fsxWindowsFileSystemTimeoutsToTerraform;
/**
 * @stability stable
 */
class FsxWindowsFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.FsxWindowsFileSystemTimeoutsOutputReference = FsxWindowsFileSystemTimeoutsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
FsxWindowsFileSystemTimeoutsOutputReference[_c] = { fqn: "@cdktf/provider-aws.fsx.FsxWindowsFileSystemTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system}.
 *
 * @stability stable
 */
class FsxWindowsFileSystem extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_fsx_windows_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // audit_log_configuration - computed: false, optional: true, required: false
        this._auditLogConfiguration = new FsxWindowsFileSystemAuditLogConfigurationOutputReference(this, "audit_log_configuration", true);
        // self_managed_active_directory - computed: false, optional: true, required: false
        this._selfManagedActiveDirectory = new FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(this, "self_managed_active_directory", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new FsxWindowsFileSystemTimeoutsOutputReference(this, "timeouts", true);
        this._activeDirectoryId = config.activeDirectoryId;
        this._aliases = config.aliases;
        this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
        this._backupId = config.backupId;
        this._copyTagsToBackups = config.copyTagsToBackups;
        this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
        this._deploymentType = config.deploymentType;
        this._kmsKeyId = config.kmsKeyId;
        this._preferredSubnetId = config.preferredSubnetId;
        this._securityGroupIds = config.securityGroupIds;
        this._skipFinalBackup = config.skipFinalBackup;
        this._storageCapacity = config.storageCapacity;
        this._storageType = config.storageType;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._throughputCapacity = config.throughputCapacity;
        this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
        this._auditLogConfiguration.internalValue = config.auditLogConfiguration;
        this._selfManagedActiveDirectory.internalValue = config.selfManagedActiveDirectory;
        this._timeouts.internalValue = config.timeouts;
    }
    /**
     * @stability stable
     */
    get activeDirectoryId() {
        return this.getStringAttribute('active_directory_id');
    }
    /**
     * @stability stable
     */
    set activeDirectoryId(value) {
        this._activeDirectoryId = value;
    }
    /**
     * @stability stable
     */
    resetActiveDirectoryId() {
        this._activeDirectoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get activeDirectoryIdInput() {
        return this._activeDirectoryId;
    }
    /**
     * @stability stable
     */
    get aliases() {
        return this.getListAttribute('aliases');
    }
    /**
     * @stability stable
     */
    set aliases(value) {
        this._aliases = value;
    }
    /**
     * @stability stable
     */
    resetAliases() {
        this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get aliasesInput() {
        return this._aliases;
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
    get automaticBackupRetentionDays() {
        return this.getNumberAttribute('automatic_backup_retention_days');
    }
    /**
     * @stability stable
     */
    set automaticBackupRetentionDays(value) {
        this._automaticBackupRetentionDays = value;
    }
    /**
     * @stability stable
     */
    resetAutomaticBackupRetentionDays() {
        this._automaticBackupRetentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get automaticBackupRetentionDaysInput() {
        return this._automaticBackupRetentionDays;
    }
    /**
     * @stability stable
     */
    get backupId() {
        return this.getStringAttribute('backup_id');
    }
    /**
     * @stability stable
     */
    set backupId(value) {
        this._backupId = value;
    }
    /**
     * @stability stable
     */
    resetBackupId() {
        this._backupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get backupIdInput() {
        return this._backupId;
    }
    /**
     * @stability stable
     */
    get copyTagsToBackups() {
        return this.getBooleanAttribute('copy_tags_to_backups');
    }
    /**
     * @stability stable
     */
    set copyTagsToBackups(value) {
        this._copyTagsToBackups = value;
    }
    /**
     * @stability stable
     */
    resetCopyTagsToBackups() {
        this._copyTagsToBackups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copyTagsToBackupsInput() {
        return this._copyTagsToBackups;
    }
    /**
     * @stability stable
     */
    get dailyAutomaticBackupStartTime() {
        return this.getStringAttribute('daily_automatic_backup_start_time');
    }
    /**
     * @stability stable
     */
    set dailyAutomaticBackupStartTime(value) {
        this._dailyAutomaticBackupStartTime = value;
    }
    /**
     * @stability stable
     */
    resetDailyAutomaticBackupStartTime() {
        this._dailyAutomaticBackupStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dailyAutomaticBackupStartTimeInput() {
        return this._dailyAutomaticBackupStartTime;
    }
    /**
     * @stability stable
     */
    get deploymentType() {
        return this.getStringAttribute('deployment_type');
    }
    /**
     * @stability stable
     */
    set deploymentType(value) {
        this._deploymentType = value;
    }
    /**
     * @stability stable
     */
    resetDeploymentType() {
        this._deploymentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentTypeInput() {
        return this._deploymentType;
    }
    // dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsName() {
        return this.getStringAttribute('dns_name');
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
    // network_interface_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get networkInterfaceIds() {
        return this.getListAttribute('network_interface_ids');
    }
    // owner_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // preferred_file_server_ip - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get preferredFileServerIp() {
        return this.getStringAttribute('preferred_file_server_ip');
    }
    /**
     * @stability stable
     */
    get preferredSubnetId() {
        return this.getStringAttribute('preferred_subnet_id');
    }
    /**
     * @stability stable
     */
    set preferredSubnetId(value) {
        this._preferredSubnetId = value;
    }
    /**
     * @stability stable
     */
    resetPreferredSubnetId() {
        this._preferredSubnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredSubnetIdInput() {
        return this._preferredSubnetId;
    }
    // remote_administration_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get remoteAdministrationEndpoint() {
        return this.getStringAttribute('remote_administration_endpoint');
    }
    /**
     * @stability stable
     */
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    /**
     * @stability stable
     */
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    /**
     * @stability stable
     */
    resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    /**
     * @stability stable
     */
    get skipFinalBackup() {
        return this.getBooleanAttribute('skip_final_backup');
    }
    /**
     * @stability stable
     */
    set skipFinalBackup(value) {
        this._skipFinalBackup = value;
    }
    /**
     * @stability stable
     */
    resetSkipFinalBackup() {
        this._skipFinalBackup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get skipFinalBackupInput() {
        return this._skipFinalBackup;
    }
    /**
     * @stability stable
     */
    get storageCapacity() {
        return this.getNumberAttribute('storage_capacity');
    }
    /**
     * @stability stable
     */
    set storageCapacity(value) {
        this._storageCapacity = value;
    }
    /**
     * @stability stable
     */
    resetStorageCapacity() {
        this._storageCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageCapacityInput() {
        return this._storageCapacity;
    }
    /**
     * @stability stable
     */
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    /**
     * @stability stable
     */
    set storageType(value) {
        this._storageType = value;
    }
    /**
     * @stability stable
     */
    resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageTypeInput() {
        return this._storageType;
    }
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    /**
     * @stability stable
     */
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetIdsInput() {
        return this._subnetIds;
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
    get throughputCapacity() {
        return this.getNumberAttribute('throughput_capacity');
    }
    /**
     * @stability stable
     */
    set throughputCapacity(value) {
        this._throughputCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get throughputCapacityInput() {
        return this._throughputCapacity;
    }
    // vpc_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    /**
     * @stability stable
     */
    get weeklyMaintenanceStartTime() {
        return this.getStringAttribute('weekly_maintenance_start_time');
    }
    /**
     * @stability stable
     */
    set weeklyMaintenanceStartTime(value) {
        this._weeklyMaintenanceStartTime = value;
    }
    /**
     * @stability stable
     */
    resetWeeklyMaintenanceStartTime() {
        this._weeklyMaintenanceStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get weeklyMaintenanceStartTimeInput() {
        return this._weeklyMaintenanceStartTime;
    }
    /**
     * @stability stable
     */
    get auditLogConfiguration() {
        return this._auditLogConfiguration;
    }
    /**
     * @stability stable
     */
    putAuditLogConfiguration(value) {
        this._auditLogConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAuditLogConfiguration() {
        this._auditLogConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get auditLogConfigurationInput() {
        return this._auditLogConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get selfManagedActiveDirectory() {
        return this._selfManagedActiveDirectory;
    }
    /**
     * @stability stable
     */
    putSelfManagedActiveDirectory(value) {
        this._selfManagedActiveDirectory.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSelfManagedActiveDirectory() {
        this._selfManagedActiveDirectory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get selfManagedActiveDirectoryInput() {
        return this._selfManagedActiveDirectory.internalValue;
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
            active_directory_id: cdktf.stringToTerraform(this._activeDirectoryId),
            aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
            automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
            backup_id: cdktf.stringToTerraform(this._backupId),
            copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
            daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
            deployment_type: cdktf.stringToTerraform(this._deploymentType),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            skip_final_backup: cdktf.booleanToTerraform(this._skipFinalBackup),
            storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
            storage_type: cdktf.stringToTerraform(this._storageType),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
            weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
            audit_log_configuration: fsxWindowsFileSystemAuditLogConfigurationToTerraform(this._auditLogConfiguration.internalValue),
            self_managed_active_directory: fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(this._selfManagedActiveDirectory.internalValue),
            timeouts: fsxWindowsFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.FsxWindowsFileSystem = FsxWindowsFileSystem;
_d = JSII_RTTI_SYMBOL_1;
FsxWindowsFileSystem[_d] = { fqn: "@cdktf/provider-aws.fsx.FsxWindowsFileSystem", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
FsxWindowsFileSystem.tfResourceType = "aws_fsx_windows_file_system";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnN4LXdpbmRvd3MtZmlsZS1zeXN0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnN4L2ZzeC13aW5kb3dzLWZpbGUtc3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBd0QvQixTQUFnQixvREFBb0QsQ0FBQyxNQUE2RztJQUNoTCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDM0UsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNyRixpQ0FBaUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLDRCQUE0QixDQUFDO0tBQ2pHLENBQUE7QUFDSCxDQUFDO0FBVkQsb0hBVUM7Ozs7QUFFRCxNQUFhLHdEQUF5RCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9GLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFD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U0FDaEYsQ0FBQztJQUNKLENBQUM7O0FBbGNILG9EQW1jQzs7O0FBamNDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csbUNBQWMsR0FBVyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRnN4V2luZG93c0ZpbGVTeXN0ZW1Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3RpdmVEaXJlY3RvcnlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGlhc2VzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmFja3VwSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3B5VGFnc1RvQmFja3Vwcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGFpbHlBdXRvbWF0aWNCYWNrdXBTdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlcGxveW1lbnRUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZlcnJlZFN1Ym5ldElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBza2lwRmluYWxCYWNrdXA/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZUNhcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdG9yYWdlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm91Z2hwdXRDYXBhY2l0eTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdWRpdExvZ0NvbmZpZ3VyYXRpb24/OiBGc3hXaW5kb3dzRmlsZVN5c3RlbUF1ZGl0TG9nQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5PzogRnN4V2luZG93c0ZpbGVTeXN0ZW1TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogRnN4V2luZG93c0ZpbGVTeXN0ZW1UaW1lb3V0cztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnN4V2luZG93c0ZpbGVTeXN0ZW1BdWRpdExvZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdWRpdExvZ0Rlc3RpbmF0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlQWNjZXNzQXVkaXRMb2dMZXZlbD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZVNoYXJlQWNjZXNzQXVkaXRMb2dMZXZlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZzeFdpbmRvd3NGaWxlU3lzdGVtQXVkaXRMb2dDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRnN4V2luZG93c0ZpbGVTeXN0ZW1BdWRpdExvZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBGc3hXaW5kb3dzRmlsZVN5c3RlbUF1ZGl0TG9nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGF1ZGl0X2xvZ19kZXN0aW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdWRpdExvZ0Rlc3RpbmF0aW9uKSxcbiAgICBmaWxlX2FjY2Vzc19hdWRpdF9sb2dfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwpLFxuICAgIGZpbGVfc2hhcmVfYWNjZXNzX2F1ZGl0X2xvZ19sZXZlbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlU2hhcmVBY2Nlc3NBdWRpdExvZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnN4V2luZG93c0ZpbGVTeXN0ZW1BdWRpdExvZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRnN4V2luZG93c0ZpbGVTeXN0ZW1BdWRpdExvZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1ZGl0TG9nRGVzdGluYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1ZGl0TG9nRGVzdGluYXRpb24gPSB0aGlzLl9hdWRpdExvZ0Rlc3RpbmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGVBY2Nlc3NBdWRpdExvZ0xldmVsID0gdGhpcy5fZmlsZUFjY2Vzc0F1ZGl0TG9nTGV2ZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9maWxlU2hhcmVBY2Nlc3NBdWRpdExvZ0xldmVsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maWxlU2hhcmVBY2Nlc3NBdWRpdExvZ0xldmVsID0gdGhpcy5fZmlsZVNoYXJlQWNjZXNzQXVkaXRMb2dMZXZlbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEZzeFdpbmRvd3NGaWxlU3lzdGVtQXVkaXRMb2dDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXVkaXRMb2dEZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGVBY2Nlc3NBdWRpdExvZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsZVNoYXJlQWNjZXNzQXVkaXRMb2dMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXVkaXRMb2dEZXN0aW5hdGlvbiA9IHZhbHVlLmF1ZGl0TG9nRGVzdGluYXRpb247XG4gICAgICB0aGlzLl9maWxlQWNjZXNzQXVkaXRMb2dMZXZlbCA9IHZhbHVlLmZpbGVBY2Nlc3NBdWRpdExvZ0xldmVsO1xuICAgICAgdGhpcy5fZmlsZVNoYXJlQWNjZXNzQXVkaXRMb2dMZXZlbCA9IHZhbHVlLmZpbGVTaGFyZUFjY2Vzc0F1ZGl0TG9nTGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gYXVkaXRfbG9nX2Rlc3RpbmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXVkaXRMb2dEZXN0aW5hdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXVkaXRMb2dEZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1ZGl0X2xvZ19kZXN0aW5hdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXVkaXRMb2dEZXN0aW5hdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXVkaXRMb2dEZXN0aW5hdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1ZGl0TG9nRGVzdGluYXRpb24oKSB7XG4gICAgdGhpcy5fYXVkaXRMb2dEZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXVkaXRMb2dEZXN0aW5hdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpdExvZ0Rlc3RpbmF0aW9uO1xuICB9XG5cbiAgLy8gZmlsZV9hY2Nlc3NfYXVkaXRfbG9nX2xldmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbGVBY2Nlc3NBdWRpdExvZ0xldmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWxlQWNjZXNzQXVkaXRMb2dMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfYWNjZXNzX2F1ZGl0X2xvZ19sZXZlbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVBY2Nlc3NBdWRpdExvZ0xldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwoKSB7XG4gICAgdGhpcy5fZmlsZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVBY2Nlc3NBdWRpdExvZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVBY2Nlc3NBdWRpdExvZ0xldmVsO1xuICB9XG5cbiAgLy8gZmlsZV9zaGFyZV9hY2Nlc3NfYXVkaXRfbG9nX2xldmVsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbGVTaGFyZUFjY2Vzc0F1ZGl0TG9nTGV2ZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbGVTaGFyZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlX3NoYXJlX2FjY2Vzc19hdWRpdF9sb2dfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbGVTaGFyZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVTaGFyZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGaWxlU2hhcmVBY2Nlc3NBdWRpdExvZ0xldmVsKCkge1xuICAgIHRoaXMuX2ZpbGVTaGFyZUFjY2Vzc0F1ZGl0TG9nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVTaGFyZUFjY2Vzc0F1ZGl0TG9nTGV2ZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZVNoYXJlQWNjZXNzQXVkaXRMb2dMZXZlbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBGc3hXaW5kb3dzRmlsZVN5c3RlbVNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkbnNJcHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnN4V2luZG93c0ZpbGVTeXN0ZW1TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeVRvVGVycmFmb3JtKHN0cnVjdD86IEZzeFdpbmRvd3NGaWxlU3lzdGVtU2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlPdXRwdXRSZWZlcmVuY2UgfCBGc3hXaW5kb3dzRmlsZVN5c3RlbVNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZG5zX2lwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kbnNJcHMpLFxuICAgIGRvbWFpbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvbWFpbk5hbWUpLFxuICAgIGZpbGVfc3lzdGVtX2FkbWluaXN0cmF0b3JzX2dyb3VwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwKSxcbiAgICBvcmdhbml6YXRpb25hbF91bml0X2Rpc3Rpbmd1aXNoZWRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZSksXG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHVzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJuYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnN4V2luZG93c0ZpbGVTeXN0ZW1TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBGc3hXaW5kb3dzRmlsZVN5c3RlbVNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kbnNJcHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRuc0lwcyA9IHRoaXMuX2Ruc0lwcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvbWFpbk5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvbWFpbk5hbWUgPSB0aGlzLl9kb21haW5OYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXApIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwID0gdGhpcy5fZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXA7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3Vpc2hlZE5hbWUgPSB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXNzd29yZCA9IHRoaXMuX3Bhc3N3b3JkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlcm5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJuYW1lID0gdGhpcy5fdXNlcm5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBGc3hXaW5kb3dzRmlsZVN5c3RlbVNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZG5zSXBzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZG9tYWluTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3Vpc2hlZE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJuYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kbnNJcHMgPSB2YWx1ZS5kbnNJcHM7XG4gICAgICB0aGlzLl9kb21haW5OYW1lID0gdmFsdWUuZG9tYWluTmFtZTtcbiAgICAgIHRoaXMuX2ZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwID0gdmFsdWUuZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXA7XG4gICAgICB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZSA9IHZhbHVlLm9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lO1xuICAgICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZS5wYXNzd29yZDtcbiAgICAgIHRoaXMuX3VzZXJuYW1lID0gdmFsdWUudXNlcm5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gZG5zX2lwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kbnNJcHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZG5zSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2Ruc19pcHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRuc0lwcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9kbnNJcHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG5zSXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Ruc0lwcztcbiAgfVxuXG4gIC8vIGRvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbk5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9tYWluTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbk5hbWU7XG4gIH1cblxuICAvLyBmaWxlX3N5c3RlbV9hZG1pbmlzdHJhdG9yc19ncm91cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9maWxlU3lzdGVtQWRtaW5pc3RyYXRvcnNHcm91cD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlX3N5c3RlbV9hZG1pbmlzdHJhdG9yc19ncm91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXAoKSB7XG4gICAgdGhpcy5fZmlsZVN5c3RlbUFkbWluaXN0cmF0b3JzR3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVTeXN0ZW1BZG1pbmlzdHJhdG9yc0dyb3VwO1xuICB9XG5cbiAgLy8gb3JnYW5pemF0aW9uYWxfdW5pdF9kaXN0aW5ndWlzaGVkX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3JnYW5pemF0aW9uYWxVbml0RGlzdGluZ3Vpc2hlZE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JnYW5pemF0aW9uYWxfdW5pdF9kaXN0aW5ndWlzaGVkX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lKCkge1xuICAgIHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdERpc3Rpbmd1aXNoZWROYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXREaXN0aW5ndWlzaGVkTmFtZTtcbiAgfVxuXG4gIC8vIHBhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Bhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJuYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEZzeFdpbmRvd3NGaWxlU3lzdGVtVGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXBkYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnN4V2luZG93c0ZpbGVTeXN0ZW1UaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IEZzeFdpbmRvd3NGaWxlU3lzdGVtVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgfCBGc3hXaW5kb3dzRmlsZVN5c3RlbVRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gICAgZGVsZXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZSksXG4gICAgdXBkYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVwZGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZzeFdpbmRvd3NGaWxlU3lzdGVtVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRnN4V2luZG93c0ZpbGVTeXN0ZW1UaW1lb3V0cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVhdGUgPSB0aGlzLl9jcmVhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWxldGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZSA9IHRoaXMuX2RlbGV0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VwZGF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRnN4V2luZG93c0ZpbGVTeXN0ZW1UaW1lb3V0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdmFsdWUuY3JlYXRlO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdmFsdWUuZGVsZXRlO1xuICAgICAgdGhpcy5fdXBkYXRlID0gdmFsdWUudXBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNyZWF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGUoKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlO1xuICB9XG5cbiAgLy8gZGVsZXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsZXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZSgpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGU7XG4gIH1cblxuICAvLyB1cGRhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXBkYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1cGRhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVwZGF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXBkYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXBkYXRlKCkge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXBkYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBGc3hXaW5kb3dzRmlsZVN5c3RlbSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19mc3hfd2luZG93c19maWxlX3N5c3RlbVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEZzeFdpbmRvd3NGaWxlU3lzdGVtQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZnN4X3dpbmRvd3NfZmlsZV9zeXN0ZW0nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWN0aXZlRGlyZWN0b3J5SWQgPSBjb25maWcuYWN0aXZlRGlyZWN0b3J5SWQ7XG4gICAgdGhpcy5fYWxpYXNlcyA9IGNvbmZpZy5hbGlhc2VzO1xuICAgIHRoaXMuX2F1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXMgPSBjb25maWcuYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cztcbiAgICB0aGlzLl9iYWNrdXBJZCA9IGNvbmZpZy5iYWNrdXBJZDtcbiAgICB0aGlzLl9jb3B5VGFnc1RvQmFja3VwcyA9IGNvbmZpZy5jb3B5VGFnc1RvQmFja3VwcztcbiAgICB0aGlzLl9kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZSA9IGNvbmZpZy5kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZTtcbiAgICB0aGlzLl9kZXBsb3ltZW50VHlwZSA9IGNvbmZpZy5kZXBsb3ltZW50VHlwZTtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IGNvbmZpZy5rbXNLZXlJZDtcbiAgICB0aGlzLl9wcmVmZXJyZWRTdWJuZXRJZCA9IGNvbmZpZy5wcmVmZXJyZWRTdWJuZXRJZDtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gY29uZmlnLnNlY3VyaXR5R3JvdXBJZHM7XG4gICAgdGhpcy5fc2tpcEZpbmFsQmFja3VwID0gY29uZmlnLnNraXBGaW5hbEJhY2t1cDtcbiAgICB0aGlzLl9zdG9yYWdlQ2FwYWNpdHkgPSBjb25maWcuc3RvcmFnZUNhcGFjaXR5O1xuICAgIHRoaXMuX3N0b3JhZ2VUeXBlID0gY29uZmlnLnN0b3JhZ2VUeXBlO1xuICAgIHRoaXMuX3N1Ym5ldElkcyA9IGNvbmZpZy5zdWJuZXRJZHM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90aHJvdWdocHV0Q2FwYWNpdHkgPSBjb25maWcudGhyb3VnaHB1dENhcGFjaXR5O1xuICAgIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lID0gY29uZmlnLndlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lO1xuICAgIHRoaXMuX2F1ZGl0TG9nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmF1ZGl0TG9nQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9zZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5O1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjdGl2ZV9kaXJlY3RvcnlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWN0aXZlRGlyZWN0b3J5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjdGl2ZURpcmVjdG9yeUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aXZlX2RpcmVjdG9yeV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aXZlRGlyZWN0b3J5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdGl2ZURpcmVjdG9yeUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWN0aXZlRGlyZWN0b3J5SWQoKSB7XG4gICAgdGhpcy5fYWN0aXZlRGlyZWN0b3J5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjdGl2ZURpcmVjdG9yeUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURpcmVjdG9yeUlkO1xuICB9XG5cbiAgLy8gYWxpYXNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hbGlhc2VzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFsaWFzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxpYXNlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxpYXNlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hbGlhc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxpYXNlcygpIHtcbiAgICB0aGlzLl9hbGlhc2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhbGlhc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWFzZXM7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9tYXRpY19iYWNrdXBfcmV0ZW50aW9uX2RheXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2F1dG9tYXRpY19iYWNrdXBfcmV0ZW50aW9uX2RheXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2F1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvbWF0aWNCYWNrdXBSZXRlbnRpb25EYXlzKCkge1xuICAgIHRoaXMuX2F1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cztcbiAgfVxuXG4gIC8vIGJhY2t1cF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9iYWNrdXBJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYmFja3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiYWNrdXBfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJhY2t1cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iYWNrdXBJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJhY2t1cElkKCkge1xuICAgIHRoaXMuX2JhY2t1cElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBiYWNrdXBJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iYWNrdXBJZDtcbiAgfVxuXG4gIC8vIGNvcHlfdGFnc190b19iYWNrdXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlUYWdzVG9CYWNrdXBzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjb3B5VGFnc1RvQmFja3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb3B5X3RhZ3NfdG9fYmFja3VwcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcHlUYWdzVG9CYWNrdXBzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jb3B5VGFnc1RvQmFja3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvcHlUYWdzVG9CYWNrdXBzKCkge1xuICAgIHRoaXMuX2NvcHlUYWdzVG9CYWNrdXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3B5VGFnc1RvQmFja3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3B5VGFnc1RvQmFja3VwcztcbiAgfVxuXG4gIC8vIGRhaWx5X2F1dG9tYXRpY19iYWNrdXBfc3RhcnRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhaWx5X2F1dG9tYXRpY19iYWNrdXBfc3RhcnRfdGltZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGFpbHlBdXRvbWF0aWNCYWNrdXBTdGFydFRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGFpbHlBdXRvbWF0aWNCYWNrdXBTdGFydFRpbWUoKSB7XG4gICAgdGhpcy5fZGFpbHlBdXRvbWF0aWNCYWNrdXBTdGFydFRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lO1xuICB9XG5cbiAgLy8gZGVwbG95bWVudF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlcGxveW1lbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXBsb3ltZW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlcGxveW1lbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVwbG95bWVudFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlcGxveW1lbnRUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVwbG95bWVudFR5cGUoKSB7XG4gICAgdGhpcy5fZGVwbG95bWVudFR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlcGxveW1lbnRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlcGxveW1lbnRUeXBlO1xuICB9XG5cbiAgLy8gZG5zX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkbnNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG5zX25hbWUnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUlkO1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnRlcmZhY2VfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCduZXR3b3JrX2ludGVyZmFjZV9pZHMnKTtcbiAgfVxuXG4gIC8vIG93bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyX2lkJyk7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfZmlsZV9zZXJ2ZXJfaXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmZXJyZWRGaWxlU2VydmVySXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmZXJyZWRfZmlsZV9zZXJ2ZXJfaXAnKTtcbiAgfVxuXG4gIC8vIHByZWZlcnJlZF9zdWJuZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWRTdWJuZXRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkU3VibmV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmZXJyZWRfc3VibmV0X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmZXJyZWRTdWJuZXRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkU3VibmV0SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmZXJyZWRTdWJuZXRJZCgpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRTdWJuZXRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkU3VibmV0SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmVycmVkU3VibmV0SWQ7XG4gIH1cblxuICAvLyByZW1vdGVfYWRtaW5pc3RyYXRpb25fZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZW1vdGVBZG1pbmlzdHJhdGlvbkVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVtb3RlX2FkbWluaXN0cmF0aW9uX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHM7XG4gIH1cblxuICAvLyBza2lwX2ZpbmFsX2JhY2t1cCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9za2lwRmluYWxCYWNrdXA/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNraXBGaW5hbEJhY2t1cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdza2lwX2ZpbmFsX2JhY2t1cCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNraXBGaW5hbEJhY2t1cCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc2tpcEZpbmFsQmFja3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tpcEZpbmFsQmFja3VwKCkge1xuICAgIHRoaXMuX3NraXBGaW5hbEJhY2t1cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tpcEZpbmFsQmFja3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NraXBGaW5hbEJhY2t1cDtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfY2FwYWNpdHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUNhcGFjaXR5KCkge1xuICAgIHRoaXMuX3N0b3JhZ2VDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RvcmFnZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdG9yYWdlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0b3JhZ2VUeXBlKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlVHlwZTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VibmV0SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJuZXRJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3VibmV0SWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZHM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdGhyb3VnaHB1dF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90aHJvdWdocHV0Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRocm91Z2hwdXRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Rocm91Z2hwdXRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocm91Z2hwdXRDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocm91Z2hwdXRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJvdWdocHV0Q2FwYWNpdHk7XG4gIH1cblxuICAvLyB2cGNfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19pZCcpO1xuICB9XG5cbiAgLy8gd2Vla2x5X21haW50ZW5hbmNlX3N0YXJ0X3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWVrbHlNYWludGVuYW5jZVN0YXJ0VGltZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWVrbHlfbWFpbnRlbmFuY2Vfc3RhcnRfdGltZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUoKSB7XG4gICAgdGhpcy5fd2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lO1xuICB9XG5cbiAgLy8gYXVkaXRfbG9nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXVkaXRMb2dDb25maWd1cmF0aW9uID0gbmV3IEZzeFdpbmRvd3NGaWxlU3lzdGVtQXVkaXRMb2dDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImF1ZGl0X2xvZ19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1ZGl0TG9nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXVkaXRMb2dDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBdWRpdExvZ0NvbmZpZ3VyYXRpb24odmFsdWU6IEZzeFdpbmRvd3NGaWxlU3lzdGVtQXVkaXRMb2dDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYXVkaXRMb2dDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdWRpdExvZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fYXVkaXRMb2dDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1ZGl0TG9nQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdWRpdExvZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNlbGZfbWFuYWdlZF9hY3RpdmVfZGlyZWN0b3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5ID0gbmV3IEZzeFdpbmRvd3NGaWxlU3lzdGVtU2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnlPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2VsZl9tYW5hZ2VkX2FjdGl2ZV9kaXJlY3RvcnlcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5O1xuICB9XG4gIHB1YmxpYyBwdXRTZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeSh2YWx1ZTogRnN4V2luZG93c0ZpbGVTeXN0ZW1TZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeSkge1xuICAgIHRoaXMuX3NlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeSgpIHtcbiAgICB0aGlzLl9zZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxmTWFuYWdlZEFjdGl2ZURpcmVjdG9yeS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgRnN4V2luZG93c0ZpbGVTeXN0ZW1UaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBGc3hXaW5kb3dzRmlsZVN5c3RlbVRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZV9kaXJlY3RvcnlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FjdGl2ZURpcmVjdG9yeUlkKSxcbiAgICAgIGFsaWFzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2FsaWFzZXMpLFxuICAgICAgYXV0b21hdGljX2JhY2t1cF9yZXRlbnRpb25fZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cyksXG4gICAgICBiYWNrdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2JhY2t1cElkKSxcbiAgICAgIGNvcHlfdGFnc190b19iYWNrdXBzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY29weVRhZ3NUb0JhY2t1cHMpLFxuICAgICAgZGFpbHlfYXV0b21hdGljX2JhY2t1cF9zdGFydF90aW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZSksXG4gICAgICBkZXBsb3ltZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlcGxveW1lbnRUeXBlKSxcbiAgICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc0tleUlkKSxcbiAgICAgIHByZWZlcnJlZF9zdWJuZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByZWZlcnJlZFN1Ym5ldElkKSxcbiAgICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc2VjdXJpdHlHcm91cElkcyksXG4gICAgICBza2lwX2ZpbmFsX2JhY2t1cDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3NraXBGaW5hbEJhY2t1cCksXG4gICAgICBzdG9yYWdlX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlQ2FwYWNpdHkpLFxuICAgICAgc3RvcmFnZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlVHlwZSksXG4gICAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zdWJuZXRJZHMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB0aHJvdWdocHV0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aHJvdWdocHV0Q2FwYWNpdHkpLFxuICAgICAgd2Vla2x5X21haW50ZW5hbmNlX3N0YXJ0X3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lKSxcbiAgICAgIGF1ZGl0X2xvZ19jb25maWd1cmF0aW9uOiBmc3hXaW5kb3dzRmlsZVN5c3RlbUF1ZGl0TG9nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2F1ZGl0TG9nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNlbGZfbWFuYWdlZF9hY3RpdmVfZGlyZWN0b3J5OiBmc3hXaW5kb3dzRmlsZVN5c3RlbVNlbGZNYW5hZ2VkQWN0aXZlRGlyZWN0b3J5VG9UZXJyYWZvcm0odGhpcy5fc2VsZk1hbmFnZWRBY3RpdmVEaXJlY3RvcnkuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogZnN4V2luZG93c0ZpbGVTeXN0ZW1UaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==