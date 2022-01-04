"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsxOntapFileSystem = exports.FsxOntapFileSystemTimeoutsOutputReference = exports.fsxOntapFileSystemTimeoutsToTerraform = exports.FsxOntapFileSystemDiskIopsConfigurationOutputReference = exports.fsxOntapFileSystemDiskIopsConfigurationToTerraform = exports.FsxOntapFileSystemEndpoints = exports.FsxOntapFileSystemEndpointsManagement = exports.FsxOntapFileSystemEndpointsIntercluster = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class FsxOntapFileSystemEndpointsIntercluster extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // ip_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddresses() {
        return this.getListAttribute('ip_addresses');
    }
}
exports.FsxOntapFileSystemEndpointsIntercluster = FsxOntapFileSystemEndpointsIntercluster;
_a = JSII_RTTI_SYMBOL_1;
FsxOntapFileSystemEndpointsIntercluster[_a] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapFileSystemEndpointsIntercluster", version: "3.0.1" };
/**
 * @stability stable
 */
class FsxOntapFileSystemEndpointsManagement extends cdktf.ComplexComputedList {
    // dns_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // ip_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddresses() {
        return this.getListAttribute('ip_addresses');
    }
}
exports.FsxOntapFileSystemEndpointsManagement = FsxOntapFileSystemEndpointsManagement;
_b = JSII_RTTI_SYMBOL_1;
FsxOntapFileSystemEndpointsManagement[_b] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapFileSystemEndpointsManagement", version: "3.0.1" };
/**
 * @stability stable
 */
class FsxOntapFileSystemEndpoints extends cdktf.ComplexComputedList {
    // intercluster - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get intercluster() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('intercluster');
    }
    // management - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get management() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('management');
    }
}
exports.FsxOntapFileSystemEndpoints = FsxOntapFileSystemEndpoints;
_c = JSII_RTTI_SYMBOL_1;
FsxOntapFileSystemEndpoints[_c] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapFileSystemEndpoints", version: "3.0.1" };
function fsxOntapFileSystemDiskIopsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iops: cdktf.numberToTerraform(struct.iops),
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
exports.fsxOntapFileSystemDiskIopsConfigurationToTerraform = fsxOntapFileSystemDiskIopsConfigurationToTerraform;
/**
 * @stability stable
 */
class FsxOntapFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._iops) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._mode) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._iops = undefined;
            this._mode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._iops = value.iops;
            this._mode = value.mode;
        }
    }
    /**
     * @stability stable
     */
    get iops() {
        return this.getNumberAttribute('iops');
    }
    /**
     * @stability stable
     */
    set iops(value) {
        this._iops = value;
    }
    /**
     * @stability stable
     */
    resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iopsInput() {
        return this._iops;
    }
    /**
     * @stability stable
     */
    get mode() {
        return this.getStringAttribute('mode');
    }
    /**
     * @stability stable
     */
    set mode(value) {
        this._mode = value;
    }
    /**
     * @stability stable
     */
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get modeInput() {
        return this._mode;
    }
}
exports.FsxOntapFileSystemDiskIopsConfigurationOutputReference = FsxOntapFileSystemDiskIopsConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
FsxOntapFileSystemDiskIopsConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapFileSystemDiskIopsConfigurationOutputReference", version: "3.0.1" };
function fsxOntapFileSystemTimeoutsToTerraform(struct) {
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
exports.fsxOntapFileSystemTimeoutsToTerraform = fsxOntapFileSystemTimeoutsToTerraform;
/**
 * @stability stable
 */
class FsxOntapFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.FsxOntapFileSystemTimeoutsOutputReference = FsxOntapFileSystemTimeoutsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
FsxOntapFileSystemTimeoutsOutputReference[_e] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapFileSystemTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system}.
 *
 * @stability stable
 */
class FsxOntapFileSystem extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_fsx_ontap_file_system',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // disk_iops_configuration - computed: false, optional: true, required: false
        this._diskIopsConfiguration = new FsxOntapFileSystemDiskIopsConfigurationOutputReference(this, "disk_iops_configuration", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new FsxOntapFileSystemTimeoutsOutputReference(this, "timeouts", true);
        this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
        this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
        this._deploymentType = config.deploymentType;
        this._endpointIpAddressRange = config.endpointIpAddressRange;
        this._fsxAdminPassword = config.fsxAdminPassword;
        this._kmsKeyId = config.kmsKeyId;
        this._preferredSubnetId = config.preferredSubnetId;
        this._routeTableIds = config.routeTableIds;
        this._securityGroupIds = config.securityGroupIds;
        this._storageCapacity = config.storageCapacity;
        this._storageType = config.storageType;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._throughputCapacity = config.throughputCapacity;
        this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
        this._diskIopsConfiguration.internalValue = config.diskIopsConfiguration;
        this._timeouts.internalValue = config.timeouts;
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
    /**
     * @stability stable
     */
    get endpointIpAddressRange() {
        return this.getStringAttribute('endpoint_ip_address_range');
    }
    /**
     * @stability stable
     */
    set endpointIpAddressRange(value) {
        this._endpointIpAddressRange = value;
    }
    /**
     * @stability stable
     */
    resetEndpointIpAddressRange() {
        this._endpointIpAddressRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endpointIpAddressRangeInput() {
        return this._endpointIpAddressRange;
    }
    // endpoints - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    endpoints(index) {
        return new FsxOntapFileSystemEndpoints(this, 'endpoints', index);
    }
    /**
     * @stability stable
     */
    get fsxAdminPassword() {
        return this.getStringAttribute('fsx_admin_password');
    }
    /**
     * @stability stable
     */
    set fsxAdminPassword(value) {
        this._fsxAdminPassword = value;
    }
    /**
     * @stability stable
     */
    resetFsxAdminPassword() {
        this._fsxAdminPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fsxAdminPasswordInput() {
        return this._fsxAdminPassword;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredSubnetIdInput() {
        return this._preferredSubnetId;
    }
    /**
     * @stability stable
     */
    get routeTableIds() {
        return this.getListAttribute('route_table_ids');
    }
    /**
     * @stability stable
     */
    set routeTableIds(value) {
        this._routeTableIds = value;
    }
    /**
     * @stability stable
     */
    resetRouteTableIds() {
        this._routeTableIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get routeTableIdsInput() {
        return this._routeTableIds;
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
    get diskIopsConfiguration() {
        return this._diskIopsConfiguration;
    }
    /**
     * @stability stable
     */
    putDiskIopsConfiguration(value) {
        this._diskIopsConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDiskIopsConfiguration() {
        this._diskIopsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get diskIopsConfigurationInput() {
        return this._diskIopsConfiguration.internalValue;
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
            automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
            daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
            deployment_type: cdktf.stringToTerraform(this._deploymentType),
            endpoint_ip_address_range: cdktf.stringToTerraform(this._endpointIpAddressRange),
            fsx_admin_password: cdktf.stringToTerraform(this._fsxAdminPassword),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
            route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
            storage_type: cdktf.stringToTerraform(this._storageType),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
            weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
            disk_iops_configuration: fsxOntapFileSystemDiskIopsConfigurationToTerraform(this._diskIopsConfiguration.internalValue),
            timeouts: fsxOntapFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.FsxOntapFileSystem = FsxOntapFileSystem;
_f = JSII_RTTI_SYMBOL_1;
FsxOntapFileSystem[_f] = { fqn: "@cdktf/provider-aws.fsx.FsxOntapFileSystem", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
FsxOntapFileSystem.tfResourceType = "aws_fsx_ontap_file_system";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnN4LW9udGFwLWZpbGUtc3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZzeC9mc3gtb250YXAtZmlsZS1zeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUF5Qy9CLE1BQWEsdUNBQXdDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwRiw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0FBVkgsMEZBV0M7Ozs7OztBQUNELE1BQWEscUNBQXNDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRiw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0FBVkgsc0ZBV0M7Ozs7OztBQUNELE1BQWEsMkJBQTRCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV4RSxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxZQUFZO1FBQ3JCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQVEsQ0FBQztJQUMvRCxDQUFDO0lBRUQsZ0VBQWdFOzs7O0lBQ2hFLElBQVcsVUFBVTtRQUNuQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQzs7QUFaSCxrRUFhQzs7O0FBUUQsU0FBZ0Isa0RBQWtELENBQUMsTUFBeUc7SUFDMUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBVEQsZ0hBU0M7Ozs7QUFFRCxNQUFhLHNEQUF1RCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTdGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMEQ7UUFDakYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOztBQWpFSCx3SEFrRUM7OztBQVVELFNBQWdCLHFDQUFxQyxDQUFDLE1BQStFO0lBQ25JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFWRCxzRkFVQzs7OztBQUVELE1BQWEseUNBQTBDLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJaEYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBNkM7UUFDcEUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzFCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7O0FBdkZILDhGQXdGQzs7Ozs7Ozs7QUFHRCxNQUFhLGtCQUFtQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPN0QsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdDO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFrVEwsNkVBQTZFO1FBQ3JFLDJCQUFzQixHQUFHLElBQUksc0RBQXNELENBQUMsSUFBVyxFQUFFLHlCQUF5QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZTFJLDhEQUE4RDtRQUN0RCxjQUFTLEdBQUcsSUFBSSx5Q0FBeUMsQ0FBQyxJQUFXLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBbFUvRixJQUFJLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pFLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxNQUFNLENBQUMsNkJBQTZCLENBQUM7UUFDM0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakQsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBSUQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7O0lBQ0QsSUFBVyw0QkFBNEIsQ0FBQyxLQUFhO1FBQ25ELElBQUksQ0FBQyw2QkFBNkIsR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNNLGlDQUFpQztRQUN0QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQ0FBaUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDNUMsQ0FBQzs7OztJQUlELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUNELElBQVcsNkJBQTZCLENBQUMsS0FBYTtRQUNwRCxJQUFJLENBQUMsOEJBQThCLEdBQUcsS0FBSyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDTSxrQ0FBa0M7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0NBQWtDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQzdDLENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsOERBQThEOzs7O0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBVyxzQkFBc0IsQ0FBQyxLQUFhO1FBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQztJQUVELCtEQUErRDs7OztJQUN4RCxTQUFTLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksMkJBQTJCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsMkVBQTJFOzs7O0lBQzNFLElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDhEQUE4RDs7OztJQUM5RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFlO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBZTtRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFlO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQVEsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBb0Q7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFFRCw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUlELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBYTtRQUNqRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDTSwrQkFBK0I7UUFDcEMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsK0JBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQzFDLENBQUM7Ozs7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ00sd0JBQXdCLENBQUMsS0FBOEM7UUFDNUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sV0FBVyxDQUFDLEtBQWlDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDOzs7O0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCwrQkFBK0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzVGLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUM7WUFDL0YsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDaEYsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRSxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNyRSxlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQy9FLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3JGLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDaEUsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdEUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN0RSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hGLHVCQUF1QixFQUFFLGtEQUFrRCxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7WUFDdEgsUUFBUSxFQUFFLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQzlFLENBQUM7SUFDSixDQUFDOztBQWpZSCxnREFrWUM7OztBQWhZQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGlDQUFjLEdBQVcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEZzeE9udGFwRmlsZVN5c3RlbUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXBsb3ltZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRJcEFkZHJlc3NSYW5nZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmc3hBZG1pblBhc3N3b3JkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmZXJyZWRTdWJuZXRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvdXRlVGFibGVJZHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdG9yYWdlQ2FwYWNpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm91Z2hwdXRDYXBhY2l0eTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3ZWVrbHlNYWludGVuYW5jZVN0YXJ0VGltZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlza0lvcHNDb25maWd1cmF0aW9uPzogRnN4T250YXBGaWxlU3lzdGVtRGlza0lvcHNDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0cz86IEZzeE9udGFwRmlsZVN5c3RlbVRpbWVvdXRzO1xufVxuZXhwb3J0IGNsYXNzIEZzeE9udGFwRmlsZVN5c3RlbUVuZHBvaW50c0ludGVyY2x1c3RlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRuc19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG5zTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Ruc19uYW1lJyk7XG4gIH1cblxuICAvLyBpcF9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcEFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpcF9hZGRyZXNzZXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEZzeE9udGFwRmlsZVN5c3RlbUVuZHBvaW50c01hbmFnZW1lbnQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkbnNfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRuc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkbnNfbmFtZScpO1xuICB9XG5cbiAgLy8gaXBfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBBZGRyZXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaXBfYWRkcmVzc2VzJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBGc3hPbnRhcEZpbGVTeXN0ZW1FbmRwb2ludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcmNsdXN0ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlcmNsdXN0ZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ludGVyY2x1c3RlcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG1hbmFnZW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYW5hZ2VtZW50KCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYW5hZ2VtZW50JykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEZzeE9udGFwRmlsZVN5c3RlbURpc2tJb3BzQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9kZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZzeE9udGFwRmlsZVN5c3RlbURpc2tJb3BzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEZzeE9udGFwRmlsZVN5c3RlbURpc2tJb3BzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEZzeE9udGFwRmlsZVN5c3RlbURpc2tJb3BzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnN4T250YXBGaWxlU3lzdGVtRGlza0lvcHNDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEZzeE9udGFwRmlsZVN5c3RlbURpc2tJb3BzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW9wcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW9wcyA9IHRoaXMuX2lvcHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tb2RlID0gdGhpcy5fbW9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEZzeE9udGFwRmlsZVN5c3RlbURpc2tJb3BzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lvcHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pb3BzID0gdmFsdWUuaW9wcztcbiAgICAgIHRoaXMuX21vZGUgPSB2YWx1ZS5tb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlvcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pb3BzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpb3BzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW9wcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW9wcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW9wcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElvcHMoKSB7XG4gICAgdGhpcy5faW9wcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW9wc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pb3BzO1xuICB9XG5cbiAgLy8gbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1vZGUoKSB7XG4gICAgdGhpcy5fbW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEZzeE9udGFwRmlsZVN5c3RlbVRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVwZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZzeE9udGFwRmlsZVN5c3RlbVRpbWVvdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogRnN4T250YXBGaWxlU3lzdGVtVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgfCBGc3hPbnRhcEZpbGVTeXN0ZW1UaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGc3hPbnRhcEZpbGVTeXN0ZW1UaW1lb3V0c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBGc3hPbnRhcEZpbGVTeXN0ZW1UaW1lb3V0cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVhdGUgPSB0aGlzLl9jcmVhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWxldGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZSA9IHRoaXMuX2RlbGV0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VwZGF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRnN4T250YXBGaWxlU3lzdGVtVGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBGc3hPbnRhcEZpbGVTeXN0ZW0gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZnN4X29udGFwX2ZpbGVfc3lzdGVtXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRnN4T250YXBGaWxlU3lzdGVtQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZnN4X29udGFwX2ZpbGVfc3lzdGVtJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2F1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXMgPSBjb25maWcuYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cztcbiAgICB0aGlzLl9kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZSA9IGNvbmZpZy5kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZTtcbiAgICB0aGlzLl9kZXBsb3ltZW50VHlwZSA9IGNvbmZpZy5kZXBsb3ltZW50VHlwZTtcbiAgICB0aGlzLl9lbmRwb2ludElwQWRkcmVzc1JhbmdlID0gY29uZmlnLmVuZHBvaW50SXBBZGRyZXNzUmFuZ2U7XG4gICAgdGhpcy5fZnN4QWRtaW5QYXNzd29yZCA9IGNvbmZpZy5mc3hBZG1pblBhc3N3b3JkO1xuICAgIHRoaXMuX2ttc0tleUlkID0gY29uZmlnLmttc0tleUlkO1xuICAgIHRoaXMuX3ByZWZlcnJlZFN1Ym5ldElkID0gY29uZmlnLnByZWZlcnJlZFN1Ym5ldElkO1xuICAgIHRoaXMuX3JvdXRlVGFibGVJZHMgPSBjb25maWcucm91dGVUYWJsZUlkcztcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gY29uZmlnLnNlY3VyaXR5R3JvdXBJZHM7XG4gICAgdGhpcy5fc3RvcmFnZUNhcGFjaXR5ID0gY29uZmlnLnN0b3JhZ2VDYXBhY2l0eTtcbiAgICB0aGlzLl9zdG9yYWdlVHlwZSA9IGNvbmZpZy5zdG9yYWdlVHlwZTtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSBjb25maWcuc3VibmV0SWRzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdGhyb3VnaHB1dENhcGFjaXR5ID0gY29uZmlnLnRocm91Z2hwdXRDYXBhY2l0eTtcbiAgICB0aGlzLl93ZWVrbHlNYWludGVuYW5jZVN0YXJ0VGltZSA9IGNvbmZpZy53ZWVrbHlNYWludGVuYW5jZVN0YXJ0VGltZTtcbiAgICB0aGlzLl9kaXNrSW9wc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5kaXNrSW9wc0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50aW1lb3V0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdXRvbWF0aWNfYmFja3VwX3JldGVudGlvbl9kYXlzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGF1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhdXRvbWF0aWNfYmFja3VwX3JldGVudGlvbl9kYXlzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvbWF0aWNCYWNrdXBSZXRlbnRpb25EYXlzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdXRvbWF0aWNCYWNrdXBSZXRlbnRpb25EYXlzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cygpIHtcbiAgICB0aGlzLl9hdXRvbWF0aWNCYWNrdXBSZXRlbnRpb25EYXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvbWF0aWNCYWNrdXBSZXRlbnRpb25EYXlzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY0JhY2t1cFJldGVudGlvbkRheXM7XG4gIH1cblxuICAvLyBkYWlseV9hdXRvbWF0aWNfYmFja3VwX3N0YXJ0X3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGFpbHlBdXRvbWF0aWNCYWNrdXBTdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYWlseV9hdXRvbWF0aWNfYmFja3VwX3N0YXJ0X3RpbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lKCkge1xuICAgIHRoaXMuX2RhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYWlseUF1dG9tYXRpY0JhY2t1cFN0YXJ0VGltZTtcbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXBsb3ltZW50VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXBsb3ltZW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlcGxveW1lbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXBsb3ltZW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50VHlwZTtcbiAgfVxuXG4gIC8vIGRuc19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG5zTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Ruc19uYW1lJyk7XG4gIH1cblxuICAvLyBlbmRwb2ludF9pcF9hZGRyZXNzX3JhbmdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5kcG9pbnRJcEFkZHJlc3NSYW5nZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRJcEFkZHJlc3NSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50X2lwX2FkZHJlc3NfcmFuZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZHBvaW50SXBBZGRyZXNzUmFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZHBvaW50SXBBZGRyZXNzUmFuZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmRwb2ludElwQWRkcmVzc1JhbmdlKCkge1xuICAgIHRoaXMuX2VuZHBvaW50SXBBZGRyZXNzUmFuZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZHBvaW50SXBBZGRyZXNzUmFuZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5kcG9pbnRJcEFkZHJlc3NSYW5nZTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZW5kcG9pbnRzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEZzeE9udGFwRmlsZVN5c3RlbUVuZHBvaW50cyh0aGlzLCAnZW5kcG9pbnRzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gZnN4X2FkbWluX3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZzeEFkbWluUGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZzeEFkbWluUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmc3hfYWRtaW5fcGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZzeEFkbWluUGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZzeEFkbWluUGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGc3hBZG1pblBhc3N3b3JkKCkge1xuICAgIHRoaXMuX2ZzeEFkbWluUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZzeEFkbWluUGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnN4QWRtaW5QYXNzd29yZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUlkO1xuICB9XG5cbiAgLy8gbmV0d29ya19pbnRlcmZhY2VfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZUlkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCduZXR3b3JrX2ludGVyZmFjZV9pZHMnKTtcbiAgfVxuXG4gIC8vIG93bmVyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3duZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ293bmVyX2lkJyk7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfc3VibmV0X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3ByZWZlcnJlZFN1Ym5ldElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRTdWJuZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZlcnJlZF9zdWJuZXRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZlcnJlZFN1Ym5ldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRTdWJuZXRJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRTdWJuZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRTdWJuZXRJZDtcbiAgfVxuXG4gIC8vIHJvdXRlX3RhYmxlX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JvdXRlVGFibGVJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcm91dGVUYWJsZUlkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdyb3V0ZV90YWJsZV9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvdXRlVGFibGVJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcm91dGVUYWJsZUlkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvdXRlVGFibGVJZHMoKSB7XG4gICAgdGhpcy5fcm91dGVUYWJsZUlkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm91dGVUYWJsZUlkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZVRhYmxlSWRzO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5R3JvdXBJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwSWRzO1xuICB9XG5cbiAgLy8gc3RvcmFnZV9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUNhcGFjaXR5KCkge1xuICAgIHRoaXMuX3N0b3JhZ2VDYXBhY2l0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNhcGFjaXR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDYXBhY2l0eTtcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RvcmFnZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdG9yYWdlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0b3JhZ2VUeXBlKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlVHlwZTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VibmV0SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJuZXRJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3VibmV0SWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZHM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdGhyb3VnaHB1dF9jYXBhY2l0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90aHJvdWdocHV0Q2FwYWNpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRocm91Z2hwdXRDYXBhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Rocm91Z2hwdXRfY2FwYWNpdHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocm91Z2hwdXRDYXBhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dENhcGFjaXR5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocm91Z2hwdXRDYXBhY2l0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJvdWdocHV0Q2FwYWNpdHk7XG4gIH1cblxuICAvLyB2cGNfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19pZCcpO1xuICB9XG5cbiAgLy8gd2Vla2x5X21haW50ZW5hbmNlX3N0YXJ0X3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93ZWVrbHlNYWludGVuYW5jZVN0YXJ0VGltZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3ZWVrbHlfbWFpbnRlbmFuY2Vfc3RhcnRfdGltZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgd2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUoKSB7XG4gICAgdGhpcy5fd2Vla2x5TWFpbnRlbmFuY2VTdGFydFRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lO1xuICB9XG5cbiAgLy8gZGlza19pb3BzX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlza0lvcHNDb25maWd1cmF0aW9uID0gbmV3IEZzeE9udGFwRmlsZVN5c3RlbURpc2tJb3BzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkaXNrX2lvcHNfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkaXNrSW9wc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2tJb3BzQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RGlza0lvcHNDb25maWd1cmF0aW9uKHZhbHVlOiBGc3hPbnRhcEZpbGVTeXN0ZW1EaXNrSW9wc0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9kaXNrSW9wc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpc2tJb3BzQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9kaXNrSW9wc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlza0lvcHNDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2tJb3BzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgRnN4T250YXBGaWxlU3lzdGVtVGltZW91dHNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidGltZW91dHNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGltZW91dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzO1xuICB9XG4gIHB1YmxpYyBwdXRUaW1lb3V0cyh2YWx1ZTogRnN4T250YXBGaWxlU3lzdGVtVGltZW91dHMpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dHMoKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0b21hdGljX2JhY2t1cF9yZXRlbnRpb25fZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fYXV0b21hdGljQmFja3VwUmV0ZW50aW9uRGF5cyksXG4gICAgICBkYWlseV9hdXRvbWF0aWNfYmFja3VwX3N0YXJ0X3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RhaWx5QXV0b21hdGljQmFja3VwU3RhcnRUaW1lKSxcbiAgICAgIGRlcGxveW1lbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVwbG95bWVudFR5cGUpLFxuICAgICAgZW5kcG9pbnRfaXBfYWRkcmVzc19yYW5nZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5kcG9pbnRJcEFkZHJlc3NSYW5nZSksXG4gICAgICBmc3hfYWRtaW5fcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ZzeEFkbWluUGFzc3dvcmQpLFxuICAgICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa21zS2V5SWQpLFxuICAgICAgcHJlZmVycmVkX3N1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJlZmVycmVkU3VibmV0SWQpLFxuICAgICAgcm91dGVfdGFibGVfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9yb3V0ZVRhYmxlSWRzKSxcbiAgICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc2VjdXJpdHlHcm91cElkcyksXG4gICAgICBzdG9yYWdlX2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlQ2FwYWNpdHkpLFxuICAgICAgc3RvcmFnZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlVHlwZSksXG4gICAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zdWJuZXRJZHMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB0aHJvdWdocHV0X2NhcGFjaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90aHJvdWdocHV0Q2FwYWNpdHkpLFxuICAgICAgd2Vla2x5X21haW50ZW5hbmNlX3N0YXJ0X3RpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3dlZWtseU1haW50ZW5hbmNlU3RhcnRUaW1lKSxcbiAgICAgIGRpc2tfaW9wc19jb25maWd1cmF0aW9uOiBmc3hPbnRhcEZpbGVTeXN0ZW1EaXNrSW9wc0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9kaXNrSW9wc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aW1lb3V0czogZnN4T250YXBGaWxlU3lzdGVtVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=