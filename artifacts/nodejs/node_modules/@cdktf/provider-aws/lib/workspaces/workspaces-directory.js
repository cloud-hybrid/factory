"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesDirectory = exports.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference = exports.workspacesDirectoryWorkspaceCreationPropertiesToTerraform = exports.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference = exports.workspacesDirectoryWorkspaceAccessPropertiesToTerraform = exports.WorkspacesDirectorySelfServicePermissionsOutputReference = exports.workspacesDirectorySelfServicePermissionsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function workspacesDirectorySelfServicePermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        change_compute_type: cdktf.booleanToTerraform(struct.changeComputeType),
        increase_volume_size: cdktf.booleanToTerraform(struct.increaseVolumeSize),
        rebuild_workspace: cdktf.booleanToTerraform(struct.rebuildWorkspace),
        restart_workspace: cdktf.booleanToTerraform(struct.restartWorkspace),
        switch_running_mode: cdktf.booleanToTerraform(struct.switchRunningMode),
    };
}
exports.workspacesDirectorySelfServicePermissionsToTerraform = workspacesDirectorySelfServicePermissionsToTerraform;
/**
 * @stability stable
 */
class WorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
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
        if (this._changeComputeType) {
            hasAnyValues = true;
            internalValueResult.changeComputeType = this._changeComputeType;
        }
        if (this._increaseVolumeSize) {
            hasAnyValues = true;
            internalValueResult.increaseVolumeSize = this._increaseVolumeSize;
        }
        if (this._rebuildWorkspace) {
            hasAnyValues = true;
            internalValueResult.rebuildWorkspace = this._rebuildWorkspace;
        }
        if (this._restartWorkspace) {
            hasAnyValues = true;
            internalValueResult.restartWorkspace = this._restartWorkspace;
        }
        if (this._switchRunningMode) {
            hasAnyValues = true;
            internalValueResult.switchRunningMode = this._switchRunningMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._changeComputeType = undefined;
            this._increaseVolumeSize = undefined;
            this._rebuildWorkspace = undefined;
            this._restartWorkspace = undefined;
            this._switchRunningMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._changeComputeType = value.changeComputeType;
            this._increaseVolumeSize = value.increaseVolumeSize;
            this._rebuildWorkspace = value.rebuildWorkspace;
            this._restartWorkspace = value.restartWorkspace;
            this._switchRunningMode = value.switchRunningMode;
        }
    }
    /**
     * @stability stable
     */
    get changeComputeType() {
        return this.getBooleanAttribute('change_compute_type');
    }
    /**
     * @stability stable
     */
    set changeComputeType(value) {
        this._changeComputeType = value;
    }
    /**
     * @stability stable
     */
    resetChangeComputeType() {
        this._changeComputeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get changeComputeTypeInput() {
        return this._changeComputeType;
    }
    /**
     * @stability stable
     */
    get increaseVolumeSize() {
        return this.getBooleanAttribute('increase_volume_size');
    }
    /**
     * @stability stable
     */
    set increaseVolumeSize(value) {
        this._increaseVolumeSize = value;
    }
    /**
     * @stability stable
     */
    resetIncreaseVolumeSize() {
        this._increaseVolumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get increaseVolumeSizeInput() {
        return this._increaseVolumeSize;
    }
    /**
     * @stability stable
     */
    get rebuildWorkspace() {
        return this.getBooleanAttribute('rebuild_workspace');
    }
    /**
     * @stability stable
     */
    set rebuildWorkspace(value) {
        this._rebuildWorkspace = value;
    }
    /**
     * @stability stable
     */
    resetRebuildWorkspace() {
        this._rebuildWorkspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rebuildWorkspaceInput() {
        return this._rebuildWorkspace;
    }
    /**
     * @stability stable
     */
    get restartWorkspace() {
        return this.getBooleanAttribute('restart_workspace');
    }
    /**
     * @stability stable
     */
    set restartWorkspace(value) {
        this._restartWorkspace = value;
    }
    /**
     * @stability stable
     */
    resetRestartWorkspace() {
        this._restartWorkspace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restartWorkspaceInput() {
        return this._restartWorkspace;
    }
    /**
     * @stability stable
     */
    get switchRunningMode() {
        return this.getBooleanAttribute('switch_running_mode');
    }
    /**
     * @stability stable
     */
    set switchRunningMode(value) {
        this._switchRunningMode = value;
    }
    /**
     * @stability stable
     */
    resetSwitchRunningMode() {
        this._switchRunningMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get switchRunningModeInput() {
        return this._switchRunningMode;
    }
}
exports.WorkspacesDirectorySelfServicePermissionsOutputReference = WorkspacesDirectorySelfServicePermissionsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
WorkspacesDirectorySelfServicePermissionsOutputReference[_a] = { fqn: "@cdktf/provider-aws.workspaces.WorkspacesDirectorySelfServicePermissionsOutputReference", version: "3.0.1" };
function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_type_android: cdktf.stringToTerraform(struct.deviceTypeAndroid),
        device_type_chromeos: cdktf.stringToTerraform(struct.deviceTypeChromeos),
        device_type_ios: cdktf.stringToTerraform(struct.deviceTypeIos),
        device_type_linux: cdktf.stringToTerraform(struct.deviceTypeLinux),
        device_type_osx: cdktf.stringToTerraform(struct.deviceTypeOsx),
        device_type_web: cdktf.stringToTerraform(struct.deviceTypeWeb),
        device_type_windows: cdktf.stringToTerraform(struct.deviceTypeWindows),
        device_type_zeroclient: cdktf.stringToTerraform(struct.deviceTypeZeroclient),
    };
}
exports.workspacesDirectoryWorkspaceAccessPropertiesToTerraform = workspacesDirectoryWorkspaceAccessPropertiesToTerraform;
/**
 * @stability stable
 */
class WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._deviceTypeAndroid) {
            hasAnyValues = true;
            internalValueResult.deviceTypeAndroid = this._deviceTypeAndroid;
        }
        if (this._deviceTypeChromeos) {
            hasAnyValues = true;
            internalValueResult.deviceTypeChromeos = this._deviceTypeChromeos;
        }
        if (this._deviceTypeIos) {
            hasAnyValues = true;
            internalValueResult.deviceTypeIos = this._deviceTypeIos;
        }
        if (this._deviceTypeLinux) {
            hasAnyValues = true;
            internalValueResult.deviceTypeLinux = this._deviceTypeLinux;
        }
        if (this._deviceTypeOsx) {
            hasAnyValues = true;
            internalValueResult.deviceTypeOsx = this._deviceTypeOsx;
        }
        if (this._deviceTypeWeb) {
            hasAnyValues = true;
            internalValueResult.deviceTypeWeb = this._deviceTypeWeb;
        }
        if (this._deviceTypeWindows) {
            hasAnyValues = true;
            internalValueResult.deviceTypeWindows = this._deviceTypeWindows;
        }
        if (this._deviceTypeZeroclient) {
            hasAnyValues = true;
            internalValueResult.deviceTypeZeroclient = this._deviceTypeZeroclient;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deviceTypeAndroid = undefined;
            this._deviceTypeChromeos = undefined;
            this._deviceTypeIos = undefined;
            this._deviceTypeLinux = undefined;
            this._deviceTypeOsx = undefined;
            this._deviceTypeWeb = undefined;
            this._deviceTypeWindows = undefined;
            this._deviceTypeZeroclient = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deviceTypeAndroid = value.deviceTypeAndroid;
            this._deviceTypeChromeos = value.deviceTypeChromeos;
            this._deviceTypeIos = value.deviceTypeIos;
            this._deviceTypeLinux = value.deviceTypeLinux;
            this._deviceTypeOsx = value.deviceTypeOsx;
            this._deviceTypeWeb = value.deviceTypeWeb;
            this._deviceTypeWindows = value.deviceTypeWindows;
            this._deviceTypeZeroclient = value.deviceTypeZeroclient;
        }
    }
    /**
     * @stability stable
     */
    get deviceTypeAndroid() {
        return this.getStringAttribute('device_type_android');
    }
    /**
     * @stability stable
     */
    set deviceTypeAndroid(value) {
        this._deviceTypeAndroid = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeAndroid() {
        this._deviceTypeAndroid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeAndroidInput() {
        return this._deviceTypeAndroid;
    }
    /**
     * @stability stable
     */
    get deviceTypeChromeos() {
        return this.getStringAttribute('device_type_chromeos');
    }
    /**
     * @stability stable
     */
    set deviceTypeChromeos(value) {
        this._deviceTypeChromeos = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeChromeos() {
        this._deviceTypeChromeos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeChromeosInput() {
        return this._deviceTypeChromeos;
    }
    /**
     * @stability stable
     */
    get deviceTypeIos() {
        return this.getStringAttribute('device_type_ios');
    }
    /**
     * @stability stable
     */
    set deviceTypeIos(value) {
        this._deviceTypeIos = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeIos() {
        this._deviceTypeIos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeIosInput() {
        return this._deviceTypeIos;
    }
    /**
     * @stability stable
     */
    get deviceTypeLinux() {
        return this.getStringAttribute('device_type_linux');
    }
    /**
     * @stability stable
     */
    set deviceTypeLinux(value) {
        this._deviceTypeLinux = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeLinux() {
        this._deviceTypeLinux = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeLinuxInput() {
        return this._deviceTypeLinux;
    }
    /**
     * @stability stable
     */
    get deviceTypeOsx() {
        return this.getStringAttribute('device_type_osx');
    }
    /**
     * @stability stable
     */
    set deviceTypeOsx(value) {
        this._deviceTypeOsx = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeOsx() {
        this._deviceTypeOsx = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeOsxInput() {
        return this._deviceTypeOsx;
    }
    /**
     * @stability stable
     */
    get deviceTypeWeb() {
        return this.getStringAttribute('device_type_web');
    }
    /**
     * @stability stable
     */
    set deviceTypeWeb(value) {
        this._deviceTypeWeb = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeWeb() {
        this._deviceTypeWeb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeWebInput() {
        return this._deviceTypeWeb;
    }
    /**
     * @stability stable
     */
    get deviceTypeWindows() {
        return this.getStringAttribute('device_type_windows');
    }
    /**
     * @stability stable
     */
    set deviceTypeWindows(value) {
        this._deviceTypeWindows = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeWindows() {
        this._deviceTypeWindows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeWindowsInput() {
        return this._deviceTypeWindows;
    }
    /**
     * @stability stable
     */
    get deviceTypeZeroclient() {
        return this.getStringAttribute('device_type_zeroclient');
    }
    /**
     * @stability stable
     */
    set deviceTypeZeroclient(value) {
        this._deviceTypeZeroclient = value;
    }
    /**
     * @stability stable
     */
    resetDeviceTypeZeroclient() {
        this._deviceTypeZeroclient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceTypeZeroclientInput() {
        return this._deviceTypeZeroclient;
    }
}
exports.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference = WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
_b = JSII_RTTI_SYMBOL_1;
WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference[_b] = { fqn: "@cdktf/provider-aws.workspaces.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference", version: "3.0.1" };
function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_security_group_id: cdktf.stringToTerraform(struct.customSecurityGroupId),
        default_ou: cdktf.stringToTerraform(struct.defaultOu),
        enable_internet_access: cdktf.booleanToTerraform(struct.enableInternetAccess),
        enable_maintenance_mode: cdktf.booleanToTerraform(struct.enableMaintenanceMode),
        user_enabled_as_local_administrator: cdktf.booleanToTerraform(struct.userEnabledAsLocalAdministrator),
    };
}
exports.workspacesDirectoryWorkspaceCreationPropertiesToTerraform = workspacesDirectoryWorkspaceCreationPropertiesToTerraform;
/**
 * @stability stable
 */
class WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._customSecurityGroupId) {
            hasAnyValues = true;
            internalValueResult.customSecurityGroupId = this._customSecurityGroupId;
        }
        if (this._defaultOu) {
            hasAnyValues = true;
            internalValueResult.defaultOu = this._defaultOu;
        }
        if (this._enableInternetAccess) {
            hasAnyValues = true;
            internalValueResult.enableInternetAccess = this._enableInternetAccess;
        }
        if (this._enableMaintenanceMode) {
            hasAnyValues = true;
            internalValueResult.enableMaintenanceMode = this._enableMaintenanceMode;
        }
        if (this._userEnabledAsLocalAdministrator) {
            hasAnyValues = true;
            internalValueResult.userEnabledAsLocalAdministrator = this._userEnabledAsLocalAdministrator;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customSecurityGroupId = undefined;
            this._defaultOu = undefined;
            this._enableInternetAccess = undefined;
            this._enableMaintenanceMode = undefined;
            this._userEnabledAsLocalAdministrator = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customSecurityGroupId = value.customSecurityGroupId;
            this._defaultOu = value.defaultOu;
            this._enableInternetAccess = value.enableInternetAccess;
            this._enableMaintenanceMode = value.enableMaintenanceMode;
            this._userEnabledAsLocalAdministrator = value.userEnabledAsLocalAdministrator;
        }
    }
    /**
     * @stability stable
     */
    get customSecurityGroupId() {
        return this.getStringAttribute('custom_security_group_id');
    }
    /**
     * @stability stable
     */
    set customSecurityGroupId(value) {
        this._customSecurityGroupId = value;
    }
    /**
     * @stability stable
     */
    resetCustomSecurityGroupId() {
        this._customSecurityGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customSecurityGroupIdInput() {
        return this._customSecurityGroupId;
    }
    /**
     * @stability stable
     */
    get defaultOu() {
        return this.getStringAttribute('default_ou');
    }
    /**
     * @stability stable
     */
    set defaultOu(value) {
        this._defaultOu = value;
    }
    /**
     * @stability stable
     */
    resetDefaultOu() {
        this._defaultOu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultOuInput() {
        return this._defaultOu;
    }
    /**
     * @stability stable
     */
    get enableInternetAccess() {
        return this.getBooleanAttribute('enable_internet_access');
    }
    /**
     * @stability stable
     */
    set enableInternetAccess(value) {
        this._enableInternetAccess = value;
    }
    /**
     * @stability stable
     */
    resetEnableInternetAccess() {
        this._enableInternetAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableInternetAccessInput() {
        return this._enableInternetAccess;
    }
    /**
     * @stability stable
     */
    get enableMaintenanceMode() {
        return this.getBooleanAttribute('enable_maintenance_mode');
    }
    /**
     * @stability stable
     */
    set enableMaintenanceMode(value) {
        this._enableMaintenanceMode = value;
    }
    /**
     * @stability stable
     */
    resetEnableMaintenanceMode() {
        this._enableMaintenanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableMaintenanceModeInput() {
        return this._enableMaintenanceMode;
    }
    /**
     * @stability stable
     */
    get userEnabledAsLocalAdministrator() {
        return this.getBooleanAttribute('user_enabled_as_local_administrator');
    }
    /**
     * @stability stable
     */
    set userEnabledAsLocalAdministrator(value) {
        this._userEnabledAsLocalAdministrator = value;
    }
    /**
     * @stability stable
     */
    resetUserEnabledAsLocalAdministrator() {
        this._userEnabledAsLocalAdministrator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userEnabledAsLocalAdministratorInput() {
        return this._userEnabledAsLocalAdministrator;
    }
}
exports.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference = WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
_c = JSII_RTTI_SYMBOL_1;
WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference[_c] = { fqn: "@cdktf/provider-aws.workspaces.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory}.
 *
 * @stability stable
 */
class WorkspacesDirectory extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_workspaces_directory',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // self_service_permissions - computed: false, optional: true, required: false
        this._selfServicePermissions = new WorkspacesDirectorySelfServicePermissionsOutputReference(this, "self_service_permissions", true);
        // workspace_access_properties - computed: false, optional: true, required: false
        this._workspaceAccessProperties = new WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(this, "workspace_access_properties", true);
        // workspace_creation_properties - computed: false, optional: true, required: false
        this._workspaceCreationProperties = new WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(this, "workspace_creation_properties", true);
        this._directoryId = config.directoryId;
        this._ipGroupIds = config.ipGroupIds;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._selfServicePermissions.internalValue = config.selfServicePermissions;
        this._workspaceAccessProperties.internalValue = config.workspaceAccessProperties;
        this._workspaceCreationProperties.internalValue = config.workspaceCreationProperties;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alias - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get alias() {
        return this.getStringAttribute('alias');
    }
    // customer_user_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get customerUserName() {
        return this.getStringAttribute('customer_user_name');
    }
    /**
     * @stability stable
     */
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    /**
     * @stability stable
     */
    set directoryId(value) {
        this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get directoryIdInput() {
        return this._directoryId;
    }
    // directory_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get directoryName() {
        return this.getStringAttribute('directory_name');
    }
    // directory_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get directoryType() {
        return this.getStringAttribute('directory_type');
    }
    // dns_ip_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dnsIpAddresses() {
        return this.getListAttribute('dns_ip_addresses');
    }
    // iam_role_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get iamRoleId() {
        return this.getStringAttribute('iam_role_id');
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
    get ipGroupIds() {
        return this.getListAttribute('ip_group_ids');
    }
    /**
     * @stability stable
     */
    set ipGroupIds(value) {
        this._ipGroupIds = value;
    }
    /**
     * @stability stable
     */
    resetIpGroupIds() {
        this._ipGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipGroupIdsInput() {
        return this._ipGroupIds;
    }
    // registration_code - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get registrationCode() {
        return this.getStringAttribute('registration_code');
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
    /**
     * @stability stable
     */
    resetSubnetIds() {
        this._subnetIds = undefined;
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
    // workspace_security_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get workspaceSecurityGroupId() {
        return this.getStringAttribute('workspace_security_group_id');
    }
    /**
     * @stability stable
     */
    get selfServicePermissions() {
        return this._selfServicePermissions;
    }
    /**
     * @stability stable
     */
    putSelfServicePermissions(value) {
        this._selfServicePermissions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSelfServicePermissions() {
        this._selfServicePermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get selfServicePermissionsInput() {
        return this._selfServicePermissions.internalValue;
    }
    /**
     * @stability stable
     */
    get workspaceAccessProperties() {
        return this._workspaceAccessProperties;
    }
    /**
     * @stability stable
     */
    putWorkspaceAccessProperties(value) {
        this._workspaceAccessProperties.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetWorkspaceAccessProperties() {
        this._workspaceAccessProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get workspaceAccessPropertiesInput() {
        return this._workspaceAccessProperties.internalValue;
    }
    /**
     * @stability stable
     */
    get workspaceCreationProperties() {
        return this._workspaceCreationProperties;
    }
    /**
     * @stability stable
     */
    putWorkspaceCreationProperties(value) {
        this._workspaceCreationProperties.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetWorkspaceCreationProperties() {
        this._workspaceCreationProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get workspaceCreationPropertiesInput() {
        return this._workspaceCreationProperties.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            ip_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._ipGroupIds),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            self_service_permissions: workspacesDirectorySelfServicePermissionsToTerraform(this._selfServicePermissions.internalValue),
            workspace_access_properties: workspacesDirectoryWorkspaceAccessPropertiesToTerraform(this._workspaceAccessProperties.internalValue),
            workspace_creation_properties: workspacesDirectoryWorkspaceCreationPropertiesToTerraform(this._workspaceCreationProperties.internalValue),
        };
    }
}
exports.WorkspacesDirectory = WorkspacesDirectory;
_d = JSII_RTTI_SYMBOL_1;
WorkspacesDirectory[_d] = { fqn: "@cdktf/provider-aws.workspaces.WorkspacesDirectory", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
WorkspacesDirectory.tfResourceType = "aws_workspaces_directory";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlcy1kaXJlY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd29ya3NwYWNlcy93b3Jrc3BhY2VzLWRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWtDL0IsU0FBZ0Isb0RBQW9ELENBQUMsTUFBNkc7SUFDaEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3hFLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDMUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDekUsQ0FBQTtBQUNILENBQUM7QUFaRCxvSEFZQzs7OztBQUVELE1BQWEsd0RBQXlELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJL0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7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QztZQUN6RSxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RFLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELHdCQUF3QixFQUFFLG9EQUFvRCxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUM7WUFDMUgsMkJBQTJCLEVBQUUsdURBQXVELENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztZQUNuSSw2QkFBNkIsRUFBRSx5REFBeUQsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxDQUFDO1NBQzFJLENBQUM7SUFDSixDQUFDOztBQWhPSCxrREFpT0M7OztBQS9OQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGtDQUFjLEdBQVcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBXb3Jrc3BhY2VzRGlyZWN0b3J5Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlyZWN0b3J5SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcEdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlbGZTZXJ2aWNlUGVybWlzc2lvbnM/OiBXb3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcz86IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB3b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXM/OiBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzO1xufVxuZXhwb3J0IGludGVyZmFjZSBXb3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjaGFuZ2VDb21wdXRlVHlwZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jcmVhc2VWb2x1bWVTaXplPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWJ1aWxkV29ya3NwYWNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXN0YXJ0V29ya3NwYWNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3dpdGNoUnVubmluZ01vZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3b3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zT3V0cHV0UmVmZXJlbmNlIHwgV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VfY29tcHV0ZV90eXBlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jaGFuZ2VDb21wdXRlVHlwZSksXG4gICAgaW5jcmVhc2Vfdm9sdW1lX3NpemU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY3JlYXNlVm9sdW1lU2l6ZSksXG4gICAgcmVidWlsZF93b3Jrc3BhY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlYnVpbGRXb3Jrc3BhY2UpLFxuICAgIHJlc3RhcnRfd29ya3NwYWNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXN0YXJ0V29ya3NwYWNlKSxcbiAgICBzd2l0Y2hfcnVubmluZ19tb2RlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zd2l0Y2hSdW5uaW5nTW9kZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFdvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jaGFuZ2VDb21wdXRlVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2hhbmdlQ29tcHV0ZVR5cGUgPSB0aGlzLl9jaGFuZ2VDb21wdXRlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY3JlYXNlVm9sdW1lU2l6ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jcmVhc2VWb2x1bWVTaXplID0gdGhpcy5faW5jcmVhc2VWb2x1bWVTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVidWlsZFdvcmtzcGFjZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVidWlsZFdvcmtzcGFjZSA9IHRoaXMuX3JlYnVpbGRXb3Jrc3BhY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXN0YXJ0V29ya3NwYWNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXN0YXJ0V29ya3NwYWNlID0gdGhpcy5fcmVzdGFydFdvcmtzcGFjZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N3aXRjaFJ1bm5pbmdNb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zd2l0Y2hSdW5uaW5nTW9kZSA9IHRoaXMuX3N3aXRjaFJ1bm5pbmdNb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jaGFuZ2VDb21wdXRlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY3JlYXNlVm9sdW1lU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlYnVpbGRXb3Jrc3BhY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN0YXJ0V29ya3NwYWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3dpdGNoUnVubmluZ01vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NoYW5nZUNvbXB1dGVUeXBlID0gdmFsdWUuY2hhbmdlQ29tcHV0ZVR5cGU7XG4gICAgICB0aGlzLl9pbmNyZWFzZVZvbHVtZVNpemUgPSB2YWx1ZS5pbmNyZWFzZVZvbHVtZVNpemU7XG4gICAgICB0aGlzLl9yZWJ1aWxkV29ya3NwYWNlID0gdmFsdWUucmVidWlsZFdvcmtzcGFjZTtcbiAgICAgIHRoaXMuX3Jlc3RhcnRXb3Jrc3BhY2UgPSB2YWx1ZS5yZXN0YXJ0V29ya3NwYWNlO1xuICAgICAgdGhpcy5fc3dpdGNoUnVubmluZ01vZGUgPSB2YWx1ZS5zd2l0Y2hSdW5uaW5nTW9kZTtcbiAgICB9XG4gIH1cblxuICAvLyBjaGFuZ2VfY29tcHV0ZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NoYW5nZUNvbXB1dGVUeXBlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjaGFuZ2VDb21wdXRlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjaGFuZ2VfY29tcHV0ZV90eXBlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY2hhbmdlQ29tcHV0ZVR5cGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NoYW5nZUNvbXB1dGVUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2hhbmdlQ29tcHV0ZVR5cGUoKSB7XG4gICAgdGhpcy5fY2hhbmdlQ29tcHV0ZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNoYW5nZUNvbXB1dGVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZUNvbXB1dGVUeXBlO1xuICB9XG5cbiAgLy8gaW5jcmVhc2Vfdm9sdW1lX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jcmVhc2VWb2x1bWVTaXplPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNyZWFzZVZvbHVtZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jcmVhc2Vfdm9sdW1lX3NpemUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNyZWFzZVZvbHVtZVNpemUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY3JlYXNlVm9sdW1lU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY3JlYXNlVm9sdW1lU2l6ZSgpIHtcbiAgICB0aGlzLl9pbmNyZWFzZVZvbHVtZVNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY3JlYXNlVm9sdW1lU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNyZWFzZVZvbHVtZVNpemU7XG4gIH1cblxuICAvLyByZWJ1aWxkX3dvcmtzcGFjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWJ1aWxkV29ya3NwYWNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZWJ1aWxkV29ya3NwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlYnVpbGRfd29ya3NwYWNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVidWlsZFdvcmtzcGFjZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVidWlsZFdvcmtzcGFjZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlYnVpbGRXb3Jrc3BhY2UoKSB7XG4gICAgdGhpcy5fcmVidWlsZFdvcmtzcGFjZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVidWlsZFdvcmtzcGFjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWJ1aWxkV29ya3NwYWNlO1xuICB9XG5cbiAgLy8gcmVzdGFydF93b3Jrc3BhY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzdGFydFdvcmtzcGFjZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVzdGFydFdvcmtzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXN0YXJ0X3dvcmtzcGFjZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc3RhcnRXb3Jrc3BhY2UodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3Jlc3RhcnRXb3Jrc3BhY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXN0YXJ0V29ya3NwYWNlKCkge1xuICAgIHRoaXMuX3Jlc3RhcnRXb3Jrc3BhY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3RhcnRXb3Jrc3BhY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdGFydFdvcmtzcGFjZTtcbiAgfVxuXG4gIC8vIHN3aXRjaF9ydW5uaW5nX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3dpdGNoUnVubmluZ01vZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN3aXRjaFJ1bm5pbmdNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N3aXRjaF9ydW5uaW5nX21vZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzd2l0Y2hSdW5uaW5nTW9kZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3dpdGNoUnVubmluZ01vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTd2l0Y2hSdW5uaW5nTW9kZSgpIHtcbiAgICB0aGlzLl9zd2l0Y2hSdW5uaW5nTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3dpdGNoUnVubmluZ01vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dpdGNoUnVubmluZ01vZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlVHlwZUFuZHJvaWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZVR5cGVDaHJvbWVvcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VUeXBlSW9zPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VUeXBlTGludXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlVHlwZU9zeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VUeXBlV2ViPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlVHlwZVdpbmRvd3M/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VUeXBlWmVyb2NsaWVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgfCBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRldmljZV90eXBlX2FuZHJvaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZUFuZHJvaWQpLFxuICAgIGRldmljZV90eXBlX2Nocm9tZW9zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVDaHJvbWVvcyksXG4gICAgZGV2aWNlX3R5cGVfaW9zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVJb3MpLFxuICAgIGRldmljZV90eXBlX2xpbnV4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVMaW51eCksXG4gICAgZGV2aWNlX3R5cGVfb3N4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVPc3gpLFxuICAgIGRldmljZV90eXBlX3dlYjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VUeXBlV2ViKSxcbiAgICBkZXZpY2VfdHlwZV93aW5kb3dzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVXaW5kb3dzKSxcbiAgICBkZXZpY2VfdHlwZV96ZXJvY2xpZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZVR5cGVaZXJvY2xpZW50KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RldmljZVR5cGVBbmRyb2lkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlQW5kcm9pZCA9IHRoaXMuX2RldmljZVR5cGVBbmRyb2lkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGV2aWNlVHlwZUNocm9tZW9zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlQ2hyb21lb3MgPSB0aGlzLl9kZXZpY2VUeXBlQ2hyb21lb3M7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXZpY2VUeXBlSW9zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlSW9zID0gdGhpcy5fZGV2aWNlVHlwZUlvcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RldmljZVR5cGVMaW51eCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGV2aWNlVHlwZUxpbnV4ID0gdGhpcy5fZGV2aWNlVHlwZUxpbnV4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGV2aWNlVHlwZU9zeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGV2aWNlVHlwZU9zeCA9IHRoaXMuX2RldmljZVR5cGVPc3g7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZXZpY2VUeXBlV2ViKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlV2ViID0gdGhpcy5fZGV2aWNlVHlwZVdlYjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RldmljZVR5cGVXaW5kb3dzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXZpY2VUeXBlV2luZG93cyA9IHRoaXMuX2RldmljZVR5cGVXaW5kb3dzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGV2aWNlVHlwZVplcm9jbGllbnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZVR5cGVaZXJvY2xpZW50ID0gdGhpcy5fZGV2aWNlVHlwZVplcm9jbGllbnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVBbmRyb2lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZUNocm9tZW9zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZUlvcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVMaW51eCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVPc3ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlV2ViID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZVdpbmRvd3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlWmVyb2NsaWVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZUFuZHJvaWQgPSB2YWx1ZS5kZXZpY2VUeXBlQW5kcm9pZDtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVDaHJvbWVvcyA9IHZhbHVlLmRldmljZVR5cGVDaHJvbWVvcztcbiAgICAgIHRoaXMuX2RldmljZVR5cGVJb3MgPSB2YWx1ZS5kZXZpY2VUeXBlSW9zO1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZUxpbnV4ID0gdmFsdWUuZGV2aWNlVHlwZUxpbnV4O1xuICAgICAgdGhpcy5fZGV2aWNlVHlwZU9zeCA9IHZhbHVlLmRldmljZVR5cGVPc3g7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlV2ViID0gdmFsdWUuZGV2aWNlVHlwZVdlYjtcbiAgICAgIHRoaXMuX2RldmljZVR5cGVXaW5kb3dzID0gdmFsdWUuZGV2aWNlVHlwZVdpbmRvd3M7XG4gICAgICB0aGlzLl9kZXZpY2VUeXBlWmVyb2NsaWVudCA9IHZhbHVlLmRldmljZVR5cGVaZXJvY2xpZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX2FuZHJvaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlVHlwZUFuZHJvaWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVBbmRyb2lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfYW5kcm9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlVHlwZUFuZHJvaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZVR5cGVBbmRyb2lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlVHlwZUFuZHJvaWQoKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZUFuZHJvaWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVBbmRyb2lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGVBbmRyb2lkO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfY2hyb21lb3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlVHlwZUNocm9tZW9zPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlQ2hyb21lb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV9jaHJvbWVvcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlVHlwZUNocm9tZW9zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlQ2hyb21lb3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXZpY2VUeXBlQ2hyb21lb3MoKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZUNocm9tZW9zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VUeXBlQ2hyb21lb3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVHlwZUNocm9tZW9zO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfaW9zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZVR5cGVJb3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVJb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV9pb3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZVR5cGVJb3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RldmljZVR5cGVJb3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXZpY2VUeXBlSW9zKCkge1xuICAgIHRoaXMuX2RldmljZVR5cGVJb3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVJb3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVHlwZUlvcztcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX2xpbnV4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZVR5cGVMaW51eD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZUxpbnV4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfbGludXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZVR5cGVMaW51eCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZUxpbnV4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlVHlwZUxpbnV4KCkge1xuICAgIHRoaXMuX2RldmljZVR5cGVMaW51eCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZUxpbnV4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGVMaW51eDtcbiAgfVxuXG4gIC8vIGRldmljZV90eXBlX29zeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXZpY2VUeXBlT3N4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlT3N4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfb3N4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VUeXBlT3N4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlT3N4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlVHlwZU9zeCgpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlT3N4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VUeXBlT3N4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVR5cGVPc3g7XG4gIH1cblxuICAvLyBkZXZpY2VfdHlwZV93ZWIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlVHlwZVdlYj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZVdlYigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX3dlYicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGV2aWNlVHlwZVdlYih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZVdlYiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERldmljZVR5cGVXZWIoKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZVdlYiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZVdlYklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUeXBlV2ViO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfd2luZG93cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXZpY2VUeXBlV2luZG93cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZVdpbmRvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV93aW5kb3dzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VUeXBlV2luZG93cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZVdpbmRvd3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXZpY2VUeXBlV2luZG93cygpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlV2luZG93cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZVdpbmRvd3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVHlwZVdpbmRvd3M7XG4gIH1cblxuICAvLyBkZXZpY2VfdHlwZV96ZXJvY2xpZW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZVR5cGVaZXJvY2xpZW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlWmVyb2NsaWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX3plcm9jbGllbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRldmljZVR5cGVaZXJvY2xpZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXZpY2VUeXBlWmVyb2NsaWVudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERldmljZVR5cGVaZXJvY2xpZW50KCkge1xuICAgIHRoaXMuX2RldmljZVR5cGVaZXJvY2xpZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXZpY2VUeXBlWmVyb2NsaWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUeXBlWmVyb2NsaWVudDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21TZWN1cml0eUdyb3VwSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0T3U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVJbnRlcm5ldEFjY2Vzcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlTWFpbnRlbmFuY2VNb2RlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgfCBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3VzdG9tX3NlY3VyaXR5X2dyb3VwX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmN1c3RvbVNlY3VyaXR5R3JvdXBJZCksXG4gICAgZGVmYXVsdF9vdTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWZhdWx0T3UpLFxuICAgIGVuYWJsZV9pbnRlcm5ldF9hY2Nlc3M6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUludGVybmV0QWNjZXNzKSxcbiAgICBlbmFibGVfbWFpbnRlbmFuY2VfbW9kZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlTWFpbnRlbmFuY2VNb2RlKSxcbiAgICB1c2VyX2VuYWJsZWRfYXNfbG9jYWxfYWRtaW5pc3RyYXRvcjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEudXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21TZWN1cml0eUdyb3VwSWQgPSB0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWZhdWx0T3UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmF1bHRPdSA9IHRoaXMuX2RlZmF1bHRPdTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZUludGVybmV0QWNjZXNzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVJbnRlcm5ldEFjY2VzcyA9IHRoaXMuX2VuYWJsZUludGVybmV0QWNjZXNzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5hYmxlTWFpbnRlbmFuY2VNb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVNYWludGVuYW5jZU1vZGUgPSB0aGlzLl9lbmFibGVNYWludGVuYW5jZU1vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yID0gdGhpcy5fdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWZhdWx0T3UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVJbnRlcm5ldEFjY2VzcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VuYWJsZU1haW50ZW5hbmNlTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJFbmFibGVkQXNMb2NhbEFkbWluaXN0cmF0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZCA9IHZhbHVlLmN1c3RvbVNlY3VyaXR5R3JvdXBJZDtcbiAgICAgIHRoaXMuX2RlZmF1bHRPdSA9IHZhbHVlLmRlZmF1bHRPdTtcbiAgICAgIHRoaXMuX2VuYWJsZUludGVybmV0QWNjZXNzID0gdmFsdWUuZW5hYmxlSW50ZXJuZXRBY2Nlc3M7XG4gICAgICB0aGlzLl9lbmFibGVNYWludGVuYW5jZU1vZGUgPSB2YWx1ZS5lbmFibGVNYWludGVuYW5jZU1vZGU7XG4gICAgICB0aGlzLl91c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yID0gdmFsdWUudXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tU2VjdXJpdHlHcm91cElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21TZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVNlY3VyaXR5R3JvdXBJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tU2VjdXJpdHlHcm91cElkKCkge1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZDtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfb3UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdE91Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0T3UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X291Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0T3UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRPdSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRPdSgpIHtcbiAgICB0aGlzLl9kZWZhdWx0T3UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRPdUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3U7XG4gIH1cblxuICAvLyBlbmFibGVfaW50ZXJuZXRfYWNjZXNzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZUludGVybmV0QWNjZXNzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVJbnRlcm5ldEFjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfaW50ZXJuZXRfYWNjZXNzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlSW50ZXJuZXRBY2Nlc3ModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZUludGVybmV0QWNjZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlSW50ZXJuZXRBY2Nlc3MoKSB7XG4gICAgdGhpcy5fZW5hYmxlSW50ZXJuZXRBY2Nlc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZUludGVybmV0QWNjZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZUludGVybmV0QWNjZXNzO1xuICB9XG5cbiAgLy8gZW5hYmxlX21haW50ZW5hbmNlX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlTWFpbnRlbmFuY2VNb2RlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVNYWludGVuYW5jZU1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX21haW50ZW5hbmNlX21vZGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVNYWludGVuYW5jZU1vZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZU1haW50ZW5hbmNlTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZU1haW50ZW5hbmNlTW9kZSgpIHtcbiAgICB0aGlzLl9lbmFibGVNYWludGVuYW5jZU1vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZU1haW50ZW5hbmNlTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVNYWludGVuYW5jZU1vZGU7XG4gIH1cblxuICAvLyB1c2VyX2VuYWJsZWRfYXNfbG9jYWxfYWRtaW5pc3RyYXRvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB1c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VzZXJfZW5hYmxlZF9hc19sb2NhbF9hZG1pbmlzdHJhdG9yJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJFbmFibGVkQXNMb2NhbEFkbWluaXN0cmF0b3IoKSB7XG4gICAgdGhpcy5fdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlckVuYWJsZWRBc0xvY2FsQWRtaW5pc3RyYXRvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZXNEaXJlY3RvcnkgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfd29ya3NwYWNlc19kaXJlY3RvcnlcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFdvcmtzcGFjZXNEaXJlY3RvcnlDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c193b3Jrc3BhY2VzX2RpcmVjdG9yeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kaXJlY3RvcnlJZCA9IGNvbmZpZy5kaXJlY3RvcnlJZDtcbiAgICB0aGlzLl9pcEdyb3VwSWRzID0gY29uZmlnLmlwR3JvdXBJZHM7XG4gICAgdGhpcy5fc3VibmV0SWRzID0gY29uZmlnLnN1Ym5ldElkcztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3NlbGZTZXJ2aWNlUGVybWlzc2lvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zZWxmU2VydmljZVBlcm1pc3Npb25zO1xuICAgIHRoaXMuX3dvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy53b3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzO1xuICAgIHRoaXMuX3dvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLndvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxpYXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsaWFzJyk7XG4gIH1cblxuICAvLyBjdXN0b21lcl91c2VyX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21lclVzZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfdXNlcl9uYW1lJyk7XG4gIH1cblxuICAvLyBkaXJlY3RvcnlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGlyZWN0b3J5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlyZWN0b3J5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaXJlY3RvcnlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlyZWN0b3J5SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0b3J5SWQ7XG4gIH1cblxuICAvLyBkaXJlY3RvcnlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3RvcnlfbmFtZScpO1xuICB9XG5cbiAgLy8gZGlyZWN0b3J5X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaXJlY3RvcnlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlyZWN0b3J5X3R5cGUnKTtcbiAgfVxuXG4gIC8vIGRuc19pcF9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkbnNJcEFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkbnNfaXBfYWRkcmVzc2VzJyk7XG4gIH1cblxuICAvLyBpYW1fcm9sZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlhbVJvbGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lhbV9yb2xlX2lkJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaXBfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaXBHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBpcEdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lwX2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXBHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pcEdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXBHcm91cElkcygpIHtcbiAgICB0aGlzLl9pcEdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcEdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwR3JvdXBJZHM7XG4gIH1cblxuICAvLyByZWdpc3RyYXRpb25fY29kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlZ2lzdHJhdGlvbkNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpc3RyYXRpb25fY29kZScpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0SWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1Ym5ldElkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldElkcygpIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZHM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gd29ya3NwYWNlX3NlY3VyaXR5X2dyb3VwX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlU2VjdXJpdHlHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd29ya3NwYWNlX3NlY3VyaXR5X2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyBzZWxmX3NlcnZpY2VfcGVybWlzc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VsZlNlcnZpY2VQZXJtaXNzaW9ucyA9IG5ldyBXb3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzZWxmX3NlcnZpY2VfcGVybWlzc2lvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2VsZlNlcnZpY2VQZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZlNlcnZpY2VQZXJtaXNzaW9ucztcbiAgfVxuICBwdWJsaWMgcHV0U2VsZlNlcnZpY2VQZXJtaXNzaW9ucyh2YWx1ZTogV29ya3NwYWNlc0RpcmVjdG9yeVNlbGZTZXJ2aWNlUGVybWlzc2lvbnMpIHtcbiAgICB0aGlzLl9zZWxmU2VydmljZVBlcm1pc3Npb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWxmU2VydmljZVBlcm1pc3Npb25zKCkge1xuICAgIHRoaXMuX3NlbGZTZXJ2aWNlUGVybWlzc2lvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VsZlNlcnZpY2VQZXJtaXNzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxmU2VydmljZVBlcm1pc3Npb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB3b3Jrc3BhY2VfYWNjZXNzX3Byb3BlcnRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyA9IG5ldyBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQWNjZXNzUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ3b3Jrc3BhY2VfYWNjZXNzX3Byb3BlcnRpZXNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcztcbiAgfVxuICBwdWJsaWMgcHV0V29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyh2YWx1ZTogV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMpIHtcbiAgICB0aGlzLl93b3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX3dvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlQWNjZXNzUHJvcGVydGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB3b3Jrc3BhY2VfY3JlYXRpb25fcHJvcGVydGllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMgPSBuZXcgV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ3b3Jrc3BhY2VfY3JlYXRpb25fcHJvcGVydGllc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB3b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllcztcbiAgfVxuICBwdWJsaWMgcHV0V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzKHZhbHVlOiBXb3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5fd29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5fd29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdvcmtzcGFjZUNyZWF0aW9uUHJvcGVydGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl93b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlyZWN0b3J5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kaXJlY3RvcnlJZCksXG4gICAgICBpcF9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2lwR3JvdXBJZHMpLFxuICAgICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc3VibmV0SWRzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgc2VsZl9zZXJ2aWNlX3Blcm1pc3Npb25zOiB3b3Jrc3BhY2VzRGlyZWN0b3J5U2VsZlNlcnZpY2VQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHRoaXMuX3NlbGZTZXJ2aWNlUGVybWlzc2lvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB3b3Jrc3BhY2VfYWNjZXNzX3Byb3BlcnRpZXM6IHdvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzVG9UZXJyYWZvcm0odGhpcy5fd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHdvcmtzcGFjZV9jcmVhdGlvbl9wcm9wZXJ0aWVzOiB3b3Jrc3BhY2VzRGlyZWN0b3J5V29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzVG9UZXJyYWZvcm0odGhpcy5fd29ya3NwYWNlQ3JlYXRpb25Qcm9wZXJ0aWVzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==