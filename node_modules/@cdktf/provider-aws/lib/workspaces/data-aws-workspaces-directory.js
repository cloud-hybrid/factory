"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsWorkspacesDirectory = exports.DataAwsWorkspacesDirectoryWorkspaceCreationProperties = exports.DataAwsWorkspacesDirectoryWorkspaceAccessProperties = exports.DataAwsWorkspacesDirectorySelfServicePermissions = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsWorkspacesDirectorySelfServicePermissions extends cdktf.ComplexComputedList {
    // change_compute_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get changeComputeType() {
        return this.getBooleanAttribute('change_compute_type');
    }
    // increase_volume_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get increaseVolumeSize() {
        return this.getBooleanAttribute('increase_volume_size');
    }
    // rebuild_workspace - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get rebuildWorkspace() {
        return this.getBooleanAttribute('rebuild_workspace');
    }
    // restart_workspace - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get restartWorkspace() {
        return this.getBooleanAttribute('restart_workspace');
    }
    // switch_running_mode - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get switchRunningMode() {
        return this.getBooleanAttribute('switch_running_mode');
    }
}
exports.DataAwsWorkspacesDirectorySelfServicePermissions = DataAwsWorkspacesDirectorySelfServicePermissions;
_a = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectorySelfServicePermissions[_a] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesDirectorySelfServicePermissions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsWorkspacesDirectoryWorkspaceAccessProperties extends cdktf.ComplexComputedList {
    // device_type_android - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeAndroid() {
        return this.getStringAttribute('device_type_android');
    }
    // device_type_chromeos - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeChromeos() {
        return this.getStringAttribute('device_type_chromeos');
    }
    // device_type_ios - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeIos() {
        return this.getStringAttribute('device_type_ios');
    }
    // device_type_linux - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeLinux() {
        return this.getStringAttribute('device_type_linux');
    }
    // device_type_osx - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeOsx() {
        return this.getStringAttribute('device_type_osx');
    }
    // device_type_web - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeWeb() {
        return this.getStringAttribute('device_type_web');
    }
    // device_type_windows - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeWindows() {
        return this.getStringAttribute('device_type_windows');
    }
    // device_type_zeroclient - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceTypeZeroclient() {
        return this.getStringAttribute('device_type_zeroclient');
    }
}
exports.DataAwsWorkspacesDirectoryWorkspaceAccessProperties = DataAwsWorkspacesDirectoryWorkspaceAccessProperties;
_b = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectoryWorkspaceAccessProperties[_b] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesDirectoryWorkspaceAccessProperties", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsWorkspacesDirectoryWorkspaceCreationProperties extends cdktf.ComplexComputedList {
    // custom_security_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get customSecurityGroupId() {
        return this.getStringAttribute('custom_security_group_id');
    }
    // default_ou - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultOu() {
        return this.getStringAttribute('default_ou');
    }
    // enable_internet_access - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enableInternetAccess() {
        return this.getBooleanAttribute('enable_internet_access');
    }
    // enable_maintenance_mode - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enableMaintenanceMode() {
        return this.getBooleanAttribute('enable_maintenance_mode');
    }
    // user_enabled_as_local_administrator - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userEnabledAsLocalAdministrator() {
        return this.getBooleanAttribute('user_enabled_as_local_administrator');
    }
}
exports.DataAwsWorkspacesDirectoryWorkspaceCreationProperties = DataAwsWorkspacesDirectoryWorkspaceCreationProperties;
_c = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectoryWorkspaceCreationProperties[_c] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesDirectoryWorkspaceCreationProperties", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory}.
 *
 * @stability stable
 */
class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory} Data Source.
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
        this._directoryId = config.directoryId;
        this._tags = config.tags;
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
    // ip_group_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipGroupIds() {
        return this.getListAttribute('ip_group_ids');
    }
    // registration_code - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get registrationCode() {
        return this.getStringAttribute('registration_code');
    }
    // self_service_permissions - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    selfServicePermissions(index) {
        return new DataAwsWorkspacesDirectorySelfServicePermissions(this, 'self_service_permissions', index);
    }
    // subnet_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
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
    // workspace_access_properties - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    workspaceAccessProperties(index) {
        return new DataAwsWorkspacesDirectoryWorkspaceAccessProperties(this, 'workspace_access_properties', index);
    }
    // workspace_creation_properties - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    workspaceCreationProperties(index) {
        return new DataAwsWorkspacesDirectoryWorkspaceCreationProperties(this, 'workspace_creation_properties', index);
    }
    // workspace_security_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get workspaceSecurityGroupId() {
        return this.getStringAttribute('workspace_security_group_id');
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
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsWorkspacesDirectory = DataAwsWorkspacesDirectory;
_d = JSII_RTTI_SYMBOL_1;
DataAwsWorkspacesDirectory[_d] = { fqn: "@cdktf/provider-aws.workspaces.DataAwsWorkspacesDirectory", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsWorkspacesDirectory.tfResourceType = "aws_workspaces_directory";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtd29ya3NwYWNlcy1kaXJlY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd29ya3NwYWNlcy9kYXRhLWF3cy13b3Jrc3BhY2VzLWRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVMvQixNQUFhLGdEQUFpRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0YseUVBQXlFOzs7O0lBQ3pFLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFRLENBQUM7SUFDaEUsQ0FBQztJQUVELDBFQUEwRTs7OztJQUMxRSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBUSxDQUFDO0lBQ2pFLENBQUM7SUFFRCx1RUFBdUU7Ozs7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQVEsQ0FBQztJQUM5RCxDQUFDO0lBRUQsdUVBQXVFOzs7O0lBQ3ZFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFRLENBQUM7SUFDOUQsQ0FBQztJQUVELHlFQUF5RTs7OztJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7O0FBekJILDRHQTBCQzs7Ozs7O0FBQ0QsTUFBYSxtREFBb0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWhHLHlFQUF5RTs7OztJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwwRUFBMEU7Ozs7SUFDMUUsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUVBQXFFOzs7O0lBQ3JFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCx1RUFBdUU7Ozs7SUFDdkUsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHFFQUFxRTs7OztJQUNyRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQscUVBQXFFOzs7O0lBQ3JFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCx5RUFBeUU7Ozs7SUFDekUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsNEVBQTRFOzs7O0lBQzVFLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7QUF4Q0gsa0hBeUNDOzs7Ozs7QUFDRCxNQUFhLHFEQUFzRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFbEcsOEVBQThFOzs7O0lBQzlFLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDRFQUE0RTs7OztJQUM1RSxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBUSxDQUFDO0lBQ25FLENBQUM7SUFFRCw2RUFBNkU7Ozs7SUFDN0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQVEsQ0FBQztJQUNwRSxDQUFDO0lBRUQseUZBQXlGOzs7O0lBQ3pGLElBQVcsK0JBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFDQUFxQyxDQUFRLENBQUM7SUFDaEYsQ0FBQzs7QUF6Qkgsc0hBMEJDOzs7Ozs7OztBQUdELE1BQWEsMEJBQTJCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQU92RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBd0M7UUFDdkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwwQkFBMEI7WUFDakQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLDJEQUEyRDs7OztJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsd0VBQXdFOzs7O0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsb0VBQW9FOzs7O0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxvRUFBb0U7Ozs7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNFQUFzRTs7OztJQUN0RSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaUVBQWlFOzs7O0lBQ2pFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx1RUFBdUU7Ozs7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOEVBQThFOzs7O0lBQ3ZFLHNCQUFzQixDQUFDLEtBQWE7UUFDekMsT0FBTyxJQUFJLGdEQUFnRCxDQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUQsZ0VBQWdFOzs7O0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsaUZBQWlGOzs7O0lBQzFFLHlCQUF5QixDQUFDLEtBQWE7UUFDNUMsT0FBTyxJQUFJLG1EQUFtRCxDQUFDLElBQUksRUFBRSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBRUQsbUZBQW1GOzs7O0lBQzVFLDJCQUEyQixDQUFDLEtBQWE7UUFDOUMsT0FBTyxJQUFJLHFEQUFxRCxDQUFDLElBQUksRUFBRSwrQkFBK0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQsaUZBQWlGOzs7O0lBQ2pGLElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDOztBQTVJSCxnRUE2SUM7OztBQTNJQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHlDQUFjLEdBQVcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzV29ya3NwYWNlc0RpcmVjdG9yeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c1dvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2hhbmdlX2NvbXB1dGVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNoYW5nZUNvbXB1dGVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NoYW5nZV9jb21wdXRlX3R5cGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbmNyZWFzZV92b2x1bWVfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluY3JlYXNlVm9sdW1lU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNyZWFzZV92b2x1bWVfc2l6ZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlYnVpbGRfd29ya3NwYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVidWlsZFdvcmtzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZWJ1aWxkX3dvcmtzcGFjZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlc3RhcnRfd29ya3NwYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVzdGFydFdvcmtzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXN0YXJ0X3dvcmtzcGFjZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN3aXRjaF9ydW5uaW5nX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzd2l0Y2hSdW5uaW5nTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzd2l0Y2hfcnVubmluZ19tb2RlJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c1dvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VBY2Nlc3NQcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGV2aWNlX3R5cGVfYW5kcm9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVBbmRyb2lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfYW5kcm9pZCcpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfY2hyb21lb3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlQ2hyb21lb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV9jaHJvbWVvcycpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfaW9zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZUlvcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX2lvcycpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfbGludXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VUeXBlTGludXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfdHlwZV9saW51eCcpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfb3N4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZU9zeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX29zeCcpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfd2ViIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZVdlYigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RldmljZV90eXBlX3dlYicpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfd2luZG93cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVXaW5kb3dzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfd2luZG93cycpO1xuICB9XG5cbiAgLy8gZGV2aWNlX3R5cGVfemVyb2NsaWVudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZVR5cGVaZXJvY2xpZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGV2aWNlX3R5cGVfemVyb2NsaWVudCcpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c1dvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21TZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWQnKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfb3UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWZhdWx0T3UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X291Jyk7XG4gIH1cblxuICAvLyBlbmFibGVfaW50ZXJuZXRfYWNjZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlSW50ZXJuZXRBY2Nlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2ludGVybmV0X2FjY2VzcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVuYWJsZV9tYWludGVuYW5jZV9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlTWFpbnRlbmFuY2VNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9tYWludGVuYW5jZV9tb2RlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdXNlcl9lbmFibGVkX2FzX2xvY2FsX2FkbWluaXN0cmF0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyRW5hYmxlZEFzTG9jYWxBZG1pbmlzdHJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VzZXJfZW5hYmxlZF9hc19sb2NhbF9hZG1pbmlzdHJhdG9yJykgYXMgYW55O1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NXb3Jrc3BhY2VzRGlyZWN0b3J5IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfd29ya3NwYWNlc19kaXJlY3RvcnlcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzV29ya3NwYWNlc0RpcmVjdG9yeUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3dvcmtzcGFjZXNfZGlyZWN0b3J5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RpcmVjdG9yeUlkID0gY29uZmlnLmRpcmVjdG9yeUlkO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxpYXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsaWFzJyk7XG4gIH1cblxuICAvLyBjdXN0b21lcl91c2VyX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjdXN0b21lclVzZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfdXNlcl9uYW1lJyk7XG4gIH1cblxuICAvLyBkaXJlY3RvcnlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGlyZWN0b3J5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlyZWN0b3J5X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBkaXJlY3RvcnlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlyZWN0b3J5SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlyZWN0b3J5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0b3J5SWQ7XG4gIH1cblxuICAvLyBkaXJlY3RvcnlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpcmVjdG9yeU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXJlY3RvcnlfbmFtZScpO1xuICB9XG5cbiAgLy8gZGlyZWN0b3J5X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaXJlY3RvcnlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGlyZWN0b3J5X3R5cGUnKTtcbiAgfVxuXG4gIC8vIGRuc19pcF9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkbnNJcEFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkbnNfaXBfYWRkcmVzc2VzJyk7XG4gIH1cblxuICAvLyBpYW1fcm9sZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlhbVJvbGVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lhbV9yb2xlX2lkJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaXBfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXBHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpcF9ncm91cF9pZHMnKTtcbiAgfVxuXG4gIC8vIHJlZ2lzdHJhdGlvbl9jb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnaXN0cmF0aW9uQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lzdHJhdGlvbl9jb2RlJyk7XG4gIH1cblxuICAvLyBzZWxmX3NlcnZpY2VfcGVybWlzc2lvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHNlbGZTZXJ2aWNlUGVybWlzc2lvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c1dvcmtzcGFjZXNEaXJlY3RvcnlTZWxmU2VydmljZVBlcm1pc3Npb25zKHRoaXMsICdzZWxmX3NlcnZpY2VfcGVybWlzc2lvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBzdWJuZXRfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldF9pZHMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHdvcmtzcGFjZV9hY2Nlc3NfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgd29ya3NwYWNlQWNjZXNzUHJvcGVydGllcyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzV29ya3NwYWNlc0RpcmVjdG9yeVdvcmtzcGFjZUFjY2Vzc1Byb3BlcnRpZXModGhpcywgJ3dvcmtzcGFjZV9hY2Nlc3NfcHJvcGVydGllcycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHdvcmtzcGFjZV9jcmVhdGlvbl9wcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyB3b3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c1dvcmtzcGFjZXNEaXJlY3RvcnlXb3Jrc3BhY2VDcmVhdGlvblByb3BlcnRpZXModGhpcywgJ3dvcmtzcGFjZV9jcmVhdGlvbl9wcm9wZXJ0aWVzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gd29ya3NwYWNlX3NlY3VyaXR5X2dyb3VwX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd29ya3NwYWNlU2VjdXJpdHlHcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd29ya3NwYWNlX3NlY3VyaXR5X2dyb3VwX2lkJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpcmVjdG9yeV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGlyZWN0b3J5SWQpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgfTtcbiAgfVxufVxuIl19