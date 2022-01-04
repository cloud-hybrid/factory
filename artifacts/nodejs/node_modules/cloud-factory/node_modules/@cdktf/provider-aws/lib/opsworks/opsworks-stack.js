"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksStack = exports.opsworksStackCustomCookbooksSourceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function opsworksStackCustomCookbooksSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        password: cdktf.stringToTerraform(struct.password),
        revision: cdktf.stringToTerraform(struct.revision),
        ssh_key: cdktf.stringToTerraform(struct.sshKey),
        type: cdktf.stringToTerraform(struct.type),
        url: cdktf.stringToTerraform(struct.url),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.opsworksStackCustomCookbooksSourceToTerraform = opsworksStackCustomCookbooksSourceToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack}.
 *
 * @stability stable
 */
class OpsworksStack extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_stack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._agentVersion = config.agentVersion;
        this._berkshelfVersion = config.berkshelfVersion;
        this._color = config.color;
        this._configurationManagerName = config.configurationManagerName;
        this._configurationManagerVersion = config.configurationManagerVersion;
        this._customJson = config.customJson;
        this._defaultAvailabilityZone = config.defaultAvailabilityZone;
        this._defaultInstanceProfileArn = config.defaultInstanceProfileArn;
        this._defaultOs = config.defaultOs;
        this._defaultRootDeviceType = config.defaultRootDeviceType;
        this._defaultSshKeyName = config.defaultSshKeyName;
        this._defaultSubnetId = config.defaultSubnetId;
        this._hostnameTheme = config.hostnameTheme;
        this._manageBerkshelf = config.manageBerkshelf;
        this._name = config.name;
        this._region = config.region;
        this._serviceRoleArn = config.serviceRoleArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._useCustomCookbooks = config.useCustomCookbooks;
        this._useOpsworksSecurityGroups = config.useOpsworksSecurityGroups;
        this._vpcId = config.vpcId;
        this._customCookbooksSource = config.customCookbooksSource;
    }
    /**
     * @stability stable
     */
    get agentVersion() {
        return this.getStringAttribute('agent_version');
    }
    /**
     * @stability stable
     */
    set agentVersion(value) {
        this._agentVersion = value;
    }
    /**
     * @stability stable
     */
    resetAgentVersion() {
        this._agentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get agentVersionInput() {
        return this._agentVersion;
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
    get berkshelfVersion() {
        return this.getStringAttribute('berkshelf_version');
    }
    /**
     * @stability stable
     */
    set berkshelfVersion(value) {
        this._berkshelfVersion = value;
    }
    /**
     * @stability stable
     */
    resetBerkshelfVersion() {
        this._berkshelfVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get berkshelfVersionInput() {
        return this._berkshelfVersion;
    }
    /**
     * @stability stable
     */
    get color() {
        return this.getStringAttribute('color');
    }
    /**
     * @stability stable
     */
    set color(value) {
        this._color = value;
    }
    /**
     * @stability stable
     */
    resetColor() {
        this._color = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get colorInput() {
        return this._color;
    }
    /**
     * @stability stable
     */
    get configurationManagerName() {
        return this.getStringAttribute('configuration_manager_name');
    }
    /**
     * @stability stable
     */
    set configurationManagerName(value) {
        this._configurationManagerName = value;
    }
    /**
     * @stability stable
     */
    resetConfigurationManagerName() {
        this._configurationManagerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationManagerNameInput() {
        return this._configurationManagerName;
    }
    /**
     * @stability stable
     */
    get configurationManagerVersion() {
        return this.getStringAttribute('configuration_manager_version');
    }
    /**
     * @stability stable
     */
    set configurationManagerVersion(value) {
        this._configurationManagerVersion = value;
    }
    /**
     * @stability stable
     */
    resetConfigurationManagerVersion() {
        this._configurationManagerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationManagerVersionInput() {
        return this._configurationManagerVersion;
    }
    /**
     * @stability stable
     */
    get customJson() {
        return this.getStringAttribute('custom_json');
    }
    /**
     * @stability stable
     */
    set customJson(value) {
        this._customJson = value;
    }
    /**
     * @stability stable
     */
    resetCustomJson() {
        this._customJson = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customJsonInput() {
        return this._customJson;
    }
    /**
     * @stability stable
     */
    get defaultAvailabilityZone() {
        return this.getStringAttribute('default_availability_zone');
    }
    /**
     * @stability stable
     */
    set defaultAvailabilityZone(value) {
        this._defaultAvailabilityZone = value;
    }
    /**
     * @stability stable
     */
    resetDefaultAvailabilityZone() {
        this._defaultAvailabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultAvailabilityZoneInput() {
        return this._defaultAvailabilityZone;
    }
    /**
     * @stability stable
     */
    get defaultInstanceProfileArn() {
        return this.getStringAttribute('default_instance_profile_arn');
    }
    /**
     * @stability stable
     */
    set defaultInstanceProfileArn(value) {
        this._defaultInstanceProfileArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultInstanceProfileArnInput() {
        return this._defaultInstanceProfileArn;
    }
    /**
     * @stability stable
     */
    get defaultOs() {
        return this.getStringAttribute('default_os');
    }
    /**
     * @stability stable
     */
    set defaultOs(value) {
        this._defaultOs = value;
    }
    /**
     * @stability stable
     */
    resetDefaultOs() {
        this._defaultOs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultOsInput() {
        return this._defaultOs;
    }
    /**
     * @stability stable
     */
    get defaultRootDeviceType() {
        return this.getStringAttribute('default_root_device_type');
    }
    /**
     * @stability stable
     */
    set defaultRootDeviceType(value) {
        this._defaultRootDeviceType = value;
    }
    /**
     * @stability stable
     */
    resetDefaultRootDeviceType() {
        this._defaultRootDeviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultRootDeviceTypeInput() {
        return this._defaultRootDeviceType;
    }
    /**
     * @stability stable
     */
    get defaultSshKeyName() {
        return this.getStringAttribute('default_ssh_key_name');
    }
    /**
     * @stability stable
     */
    set defaultSshKeyName(value) {
        this._defaultSshKeyName = value;
    }
    /**
     * @stability stable
     */
    resetDefaultSshKeyName() {
        this._defaultSshKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultSshKeyNameInput() {
        return this._defaultSshKeyName;
    }
    /**
     * @stability stable
     */
    get defaultSubnetId() {
        return this.getStringAttribute('default_subnet_id');
    }
    /**
     * @stability stable
     */
    set defaultSubnetId(value) {
        this._defaultSubnetId = value;
    }
    /**
     * @stability stable
     */
    resetDefaultSubnetId() {
        this._defaultSubnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultSubnetIdInput() {
        return this._defaultSubnetId;
    }
    /**
     * @stability stable
     */
    get hostnameTheme() {
        return this.getStringAttribute('hostname_theme');
    }
    /**
     * @stability stable
     */
    set hostnameTheme(value) {
        this._hostnameTheme = value;
    }
    /**
     * @stability stable
     */
    resetHostnameTheme() {
        this._hostnameTheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostnameThemeInput() {
        return this._hostnameTheme;
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
    get manageBerkshelf() {
        return this.getBooleanAttribute('manage_berkshelf');
    }
    /**
     * @stability stable
     */
    set manageBerkshelf(value) {
        this._manageBerkshelf = value;
    }
    /**
     * @stability stable
     */
    resetManageBerkshelf() {
        this._manageBerkshelf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get manageBerkshelfInput() {
        return this._manageBerkshelf;
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
    get region() {
        return this.getStringAttribute('region');
    }
    /**
     * @stability stable
     */
    set region(value) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regionInput() {
        return this._region;
    }
    /**
     * @stability stable
     */
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceRoleArn(value) {
        this._serviceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceRoleArnInput() {
        return this._serviceRoleArn;
    }
    // stack_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get stackEndpoint() {
        return this.getStringAttribute('stack_endpoint');
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
    get useCustomCookbooks() {
        return this.getBooleanAttribute('use_custom_cookbooks');
    }
    /**
     * @stability stable
     */
    set useCustomCookbooks(value) {
        this._useCustomCookbooks = value;
    }
    /**
     * @stability stable
     */
    resetUseCustomCookbooks() {
        this._useCustomCookbooks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get useCustomCookbooksInput() {
        return this._useCustomCookbooks;
    }
    /**
     * @stability stable
     */
    get useOpsworksSecurityGroups() {
        return this.getBooleanAttribute('use_opsworks_security_groups');
    }
    /**
     * @stability stable
     */
    set useOpsworksSecurityGroups(value) {
        this._useOpsworksSecurityGroups = value;
    }
    /**
     * @stability stable
     */
    resetUseOpsworksSecurityGroups() {
        this._useOpsworksSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get useOpsworksSecurityGroupsInput() {
        return this._useOpsworksSecurityGroups;
    }
    /**
     * @stability stable
     */
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    /**
     * @stability stable
     */
    set vpcId(value) {
        this._vpcId = value;
    }
    /**
     * @stability stable
     */
    resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcIdInput() {
        return this._vpcId;
    }
    /**
     * @stability stable
     */
    get customCookbooksSource() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_cookbooks_source');
    }
    /**
     * @stability stable
     */
    set customCookbooksSource(value) {
        this._customCookbooksSource = value;
    }
    /**
     * @stability stable
     */
    resetCustomCookbooksSource() {
        this._customCookbooksSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customCookbooksSourceInput() {
        return this._customCookbooksSource;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            agent_version: cdktf.stringToTerraform(this._agentVersion),
            berkshelf_version: cdktf.stringToTerraform(this._berkshelfVersion),
            color: cdktf.stringToTerraform(this._color),
            configuration_manager_name: cdktf.stringToTerraform(this._configurationManagerName),
            configuration_manager_version: cdktf.stringToTerraform(this._configurationManagerVersion),
            custom_json: cdktf.stringToTerraform(this._customJson),
            default_availability_zone: cdktf.stringToTerraform(this._defaultAvailabilityZone),
            default_instance_profile_arn: cdktf.stringToTerraform(this._defaultInstanceProfileArn),
            default_os: cdktf.stringToTerraform(this._defaultOs),
            default_root_device_type: cdktf.stringToTerraform(this._defaultRootDeviceType),
            default_ssh_key_name: cdktf.stringToTerraform(this._defaultSshKeyName),
            default_subnet_id: cdktf.stringToTerraform(this._defaultSubnetId),
            hostname_theme: cdktf.stringToTerraform(this._hostnameTheme),
            manage_berkshelf: cdktf.booleanToTerraform(this._manageBerkshelf),
            name: cdktf.stringToTerraform(this._name),
            region: cdktf.stringToTerraform(this._region),
            service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            use_custom_cookbooks: cdktf.booleanToTerraform(this._useCustomCookbooks),
            use_opsworks_security_groups: cdktf.booleanToTerraform(this._useOpsworksSecurityGroups),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            custom_cookbooks_source: cdktf.listMapper(opsworksStackCustomCookbooksSourceToTerraform)(this._customCookbooksSource),
        };
    }
}
exports.OpsworksStack = OpsworksStack;
_a = JSII_RTTI_SYMBOL_1;
OpsworksStack[_a] = { fqn: "@cdktf/provider-aws.opsworks.OpsworksStack", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
OpsworksStack.tfResourceType = "aws_opsworks_stack";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Bzd29ya3Mtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3Bzd29ya3Mvb3Bzd29ya3Mtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrRS9CLFNBQWdCLDZDQUE2QyxDQUFDLE1BQTJDO0lBQ3ZHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25ELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDcEQsQ0FBQTtBQUNILENBQUM7QUFiRCxzR0FhQzs7Ozs7O0FBSUQsTUFBYSxhQUFjLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU94RCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBMkI7UUFDMUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixx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a0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0Qsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZGLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM1Qyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RILENBQUM7SUFDSixDQUFDOztBQXhjSCxzQ0F5Y0M7OztBQXZjQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDRCQUFjLEdBQVcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NTdGFja0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWdlbnRWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBiZXJrc2hlbGZWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2xvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvbk1hbmFnZXJOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmF0aW9uTWFuYWdlclZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUpzb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRJbnN0YW5jZVByb2ZpbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRPcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0Um9vdERldmljZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRTc2hLZXlOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0U3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvc3RuYW1lVGhlbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYW5hZ2VCZXJrc2hlbGY/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVnaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlUm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlQ3VzdG9tQ29va2Jvb2tzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlT3Bzd29ya3NTZWN1cml0eUdyb3Vwcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2cGNJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tQ29va2Jvb2tzU291cmNlPzogT3Bzd29ya3NTdGFja0N1c3RvbUNvb2tib29rc1NvdXJjZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc1N0YWNrQ3VzdG9tQ29va2Jvb2tzU291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJldmlzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NoS2V5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VybmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wc3dvcmtzU3RhY2tDdXN0b21Db29rYm9va3NTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc1N0YWNrQ3VzdG9tQ29va2Jvb2tzU291cmNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHJldmlzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJldmlzaW9uKSxcbiAgICBzc2hfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNzaEtleSksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICB1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJsKSxcbiAgICB1c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VybmFtZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBPcHN3b3Jrc1N0YWNrIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX29wc3dvcmtzX3N0YWNrXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBPcHN3b3Jrc1N0YWNrQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfb3Bzd29ya3Nfc3RhY2snLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYWdlbnRWZXJzaW9uID0gY29uZmlnLmFnZW50VmVyc2lvbjtcbiAgICB0aGlzLl9iZXJrc2hlbGZWZXJzaW9uID0gY29uZmlnLmJlcmtzaGVsZlZlcnNpb247XG4gICAgdGhpcy5fY29sb3IgPSBjb25maWcuY29sb3I7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbk1hbmFnZXJOYW1lID0gY29uZmlnLmNvbmZpZ3VyYXRpb25NYW5hZ2VyTmFtZTtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uTWFuYWdlclZlcnNpb24gPSBjb25maWcuY29uZmlndXJhdGlvbk1hbmFnZXJWZXJzaW9uO1xuICAgIHRoaXMuX2N1c3RvbUpzb24gPSBjb25maWcuY3VzdG9tSnNvbjtcbiAgICB0aGlzLl9kZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZSA9IGNvbmZpZy5kZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZTtcbiAgICB0aGlzLl9kZWZhdWx0SW5zdGFuY2VQcm9maWxlQXJuID0gY29uZmlnLmRlZmF1bHRJbnN0YW5jZVByb2ZpbGVBcm47XG4gICAgdGhpcy5fZGVmYXVsdE9zID0gY29uZmlnLmRlZmF1bHRPcztcbiAgICB0aGlzLl9kZWZhdWx0Um9vdERldmljZVR5cGUgPSBjb25maWcuZGVmYXVsdFJvb3REZXZpY2VUeXBlO1xuICAgIHRoaXMuX2RlZmF1bHRTc2hLZXlOYW1lID0gY29uZmlnLmRlZmF1bHRTc2hLZXlOYW1lO1xuICAgIHRoaXMuX2RlZmF1bHRTdWJuZXRJZCA9IGNvbmZpZy5kZWZhdWx0U3VibmV0SWQ7XG4gICAgdGhpcy5faG9zdG5hbWVUaGVtZSA9IGNvbmZpZy5ob3N0bmFtZVRoZW1lO1xuICAgIHRoaXMuX21hbmFnZUJlcmtzaGVsZiA9IGNvbmZpZy5tYW5hZ2VCZXJrc2hlbGY7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3JlZ2lvbiA9IGNvbmZpZy5yZWdpb247XG4gICAgdGhpcy5fc2VydmljZVJvbGVBcm4gPSBjb25maWcuc2VydmljZVJvbGVBcm47XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl91c2VDdXN0b21Db29rYm9va3MgPSBjb25maWcudXNlQ3VzdG9tQ29va2Jvb2tzO1xuICAgIHRoaXMuX3VzZU9wc3dvcmtzU2VjdXJpdHlHcm91cHMgPSBjb25maWcudXNlT3Bzd29ya3NTZWN1cml0eUdyb3VwcztcbiAgICB0aGlzLl92cGNJZCA9IGNvbmZpZy52cGNJZDtcbiAgICB0aGlzLl9jdXN0b21Db29rYm9va3NTb3VyY2UgPSBjb25maWcuY3VzdG9tQ29va2Jvb2tzU291cmNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhZ2VudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWdlbnRWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhZ2VudFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZ2VudF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhZ2VudFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FnZW50VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFnZW50VmVyc2lvbigpIHtcbiAgICB0aGlzLl9hZ2VudFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFnZW50VmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZ2VudFZlcnNpb247XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGJlcmtzaGVsZl92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2JlcmtzaGVsZlZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJlcmtzaGVsZlZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdiZXJrc2hlbGZfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmVya3NoZWxmVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmVya3NoZWxmVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJlcmtzaGVsZlZlcnNpb24oKSB7XG4gICAgdGhpcy5fYmVya3NoZWxmVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmVya3NoZWxmVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9iZXJrc2hlbGZWZXJzaW9uO1xuICB9XG5cbiAgLy8gY29sb3IgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29sb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29sb3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbG9yKCkge1xuICAgIHRoaXMuX2NvbG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2xvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb25fbWFuYWdlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25NYW5hZ2VyTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbk1hbmFnZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uZmlndXJhdGlvbl9tYW5hZ2VyX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZpZ3VyYXRpb25NYW5hZ2VyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbk1hbmFnZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmlndXJhdGlvbk1hbmFnZXJOYW1lKCkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25NYW5hZ2VyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbk1hbmFnZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25NYW5hZ2VyTmFtZTtcbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb25fbWFuYWdlcl92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25NYW5hZ2VyVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbk1hbmFnZXJWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uZmlndXJhdGlvbl9tYW5hZ2VyX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZpZ3VyYXRpb25NYW5hZ2VyVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbk1hbmFnZXJWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29uZmlndXJhdGlvbk1hbmFnZXJWZXJzaW9uKCkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25NYW5hZ2VyVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvbk1hbmFnZXJWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25NYW5hZ2VyVmVyc2lvbjtcbiAgfVxuXG4gIC8vIGN1c3RvbV9qc29uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbUpzb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fanNvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tSnNvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tSnNvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUpzb24oKSB7XG4gICAgdGhpcy5fY3VzdG9tSnNvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tSnNvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21Kc29uO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9hdmFpbGFiaWxpdHlfem9uZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRBdmFpbGFiaWxpdHlab25lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRBdmFpbGFiaWxpdHlab25lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRBdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHRoaXMuX2RlZmF1bHRBdmFpbGFiaWxpdHlab25lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfaW5zdGFuY2VfcHJvZmlsZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVmYXVsdEluc3RhbmNlUHJvZmlsZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdEluc3RhbmNlUHJvZmlsZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfaW5zdGFuY2VfcHJvZmlsZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRJbnN0YW5jZVByb2ZpbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRJbnN0YW5jZVByb2ZpbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdEluc3RhbmNlUHJvZmlsZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0SW5zdGFuY2VQcm9maWxlQXJuO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9vcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0T3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRPcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfb3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRPcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdE9zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdE9zKCkge1xuICAgIHRoaXMuX2RlZmF1bHRPcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdE9zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcztcbiAgfVxuXG4gIC8vIGRlZmF1bHRfcm9vdF9kZXZpY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0Um9vdERldmljZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRSb290RGV2aWNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfcm9vdF9kZXZpY2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFJvb3REZXZpY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0Um9vdERldmljZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0Um9vdERldmljZVR5cGUoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFJvb3REZXZpY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0Um9vdERldmljZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFJvb3REZXZpY2VUeXBlO1xuICB9XG5cbiAgLy8gZGVmYXVsdF9zc2hfa2V5X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFNzaEtleU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRTc2hLZXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9zc2hfa2V5X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRTc2hLZXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0U3NoS2V5TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRTc2hLZXlOYW1lKCkge1xuICAgIHRoaXMuX2RlZmF1bHRTc2hLZXlOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0U3NoS2V5TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0U3NoS2V5TmFtZTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfc3VibmV0X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFN1Ym5ldElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0U3VibmV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X3N1Ym5ldF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN1Ym5ldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0U3VibmV0SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0U3VibmV0SWQoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFN1Ym5ldElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0U3VibmV0SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFN1Ym5ldElkO1xuICB9XG5cbiAgLy8gaG9zdG5hbWVfdGhlbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaG9zdG5hbWVUaGVtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdG5hbWVUaGVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RuYW1lX3RoZW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0bmFtZVRoZW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0bmFtZVRoZW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdG5hbWVUaGVtZSgpIHtcbiAgICB0aGlzLl9ob3N0bmFtZVRoZW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0bmFtZVRoZW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RuYW1lVGhlbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbWFuYWdlX2JlcmtzaGVsZiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYW5hZ2VCZXJrc2hlbGY/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG1hbmFnZUJlcmtzaGVsZigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdtYW5hZ2VfYmVya3NoZWxmJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbWFuYWdlQmVya3NoZWxmKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9tYW5hZ2VCZXJrc2hlbGYgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYW5hZ2VCZXJrc2hlbGYoKSB7XG4gICAgdGhpcy5fbWFuYWdlQmVya3NoZWxmID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYW5hZ2VCZXJrc2hlbGZJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFuYWdlQmVya3NoZWxmO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyByZWdpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVnaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZ2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVnaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZ2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWdpb247XG4gIH1cblxuICAvLyBzZXJ2aWNlX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlcnZpY2VSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2Vfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlUm9sZUFybjtcbiAgfVxuXG4gIC8vIHN0YWNrX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhY2tFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YWNrX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdXNlX2N1c3RvbV9jb29rYm9va3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlQ3VzdG9tQ29va2Jvb2tzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB1c2VDdXN0b21Db29rYm9va3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2N1c3RvbV9jb29rYm9va3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VDdXN0b21Db29rYm9va3ModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZUN1c3RvbUNvb2tib29rcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZUN1c3RvbUNvb2tib29rcygpIHtcbiAgICB0aGlzLl91c2VDdXN0b21Db29rYm9va3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZUN1c3RvbUNvb2tib29rc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VDdXN0b21Db29rYm9va3M7XG4gIH1cblxuICAvLyB1c2Vfb3Bzd29ya3Nfc2VjdXJpdHlfZ3JvdXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZU9wc3dvcmtzU2VjdXJpdHlHcm91cHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVzZU9wc3dvcmtzU2VjdXJpdHlHcm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX29wc3dvcmtzX3NlY3VyaXR5X2dyb3VwcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZU9wc3dvcmtzU2VjdXJpdHlHcm91cHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZU9wc3dvcmtzU2VjdXJpdHlHcm91cHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VPcHN3b3Jrc1NlY3VyaXR5R3JvdXBzKCkge1xuICAgIHRoaXMuX3VzZU9wc3dvcmtzU2VjdXJpdHlHcm91cHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZU9wc3dvcmtzU2VjdXJpdHlHcm91cHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlT3Bzd29ya3NTZWN1cml0eUdyb3VwcztcbiAgfVxuXG4gIC8vIHZwY19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2cGNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZwY0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjSWQoKSB7XG4gICAgdGhpcy5fdnBjSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY0lkO1xuICB9XG5cbiAgLy8gY3VzdG9tX2Nvb2tib29rc19zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tQ29va2Jvb2tzU291cmNlPzogT3Bzd29ya3NTdGFja0N1c3RvbUNvb2tib29rc1NvdXJjZVtdOyBcbiAgcHVibGljIGdldCBjdXN0b21Db29rYm9va3NTb3VyY2UoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2N1c3RvbV9jb29rYm9va3Nfc291cmNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tQ29va2Jvb2tzU291cmNlKHZhbHVlOiBPcHN3b3Jrc1N0YWNrQ3VzdG9tQ29va2Jvb2tzU291cmNlW10pIHtcbiAgICB0aGlzLl9jdXN0b21Db29rYm9va3NTb3VyY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21Db29rYm9va3NTb3VyY2UoKSB7XG4gICAgdGhpcy5fY3VzdG9tQ29va2Jvb2tzU291cmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21Db29rYm9va3NTb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ29va2Jvb2tzU291cmNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhZ2VudF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hZ2VudFZlcnNpb24pLFxuICAgICAgYmVya3NoZWxmX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2JlcmtzaGVsZlZlcnNpb24pLFxuICAgICAgY29sb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbG9yKSxcbiAgICAgIGNvbmZpZ3VyYXRpb25fbWFuYWdlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb25maWd1cmF0aW9uTWFuYWdlck5hbWUpLFxuICAgICAgY29uZmlndXJhdGlvbl9tYW5hZ2VyX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvbmZpZ3VyYXRpb25NYW5hZ2VyVmVyc2lvbiksXG4gICAgICBjdXN0b21fanNvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tSnNvbiksXG4gICAgICBkZWZhdWx0X2F2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0QXZhaWxhYmlsaXR5Wm9uZSksXG4gICAgICBkZWZhdWx0X2luc3RhbmNlX3Byb2ZpbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0SW5zdGFuY2VQcm9maWxlQXJuKSxcbiAgICAgIGRlZmF1bHRfb3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRPcyksXG4gICAgICBkZWZhdWx0X3Jvb3RfZGV2aWNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRSb290RGV2aWNlVHlwZSksXG4gICAgICBkZWZhdWx0X3NzaF9rZXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdFNzaEtleU5hbWUpLFxuICAgICAgZGVmYXVsdF9zdWJuZXRfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRTdWJuZXRJZCksXG4gICAgICBob3N0bmFtZV90aGVtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faG9zdG5hbWVUaGVtZSksXG4gICAgICBtYW5hZ2VfYmVya3NoZWxmOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fbWFuYWdlQmVya3NoZWxmKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZWdpb24pLFxuICAgICAgc2VydmljZV9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZVJvbGVBcm4pLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB1c2VfY3VzdG9tX2Nvb2tib29rczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3VzZUN1c3RvbUNvb2tib29rcyksXG4gICAgICB1c2Vfb3Bzd29ya3Nfc2VjdXJpdHlfZ3JvdXBzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fdXNlT3Bzd29ya3NTZWN1cml0eUdyb3VwcyksXG4gICAgICB2cGNfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZwY0lkKSxcbiAgICAgIGN1c3RvbV9jb29rYm9va3Nfc291cmNlOiBjZGt0Zi5saXN0TWFwcGVyKG9wc3dvcmtzU3RhY2tDdXN0b21Db29rYm9va3NTb3VyY2VUb1RlcnJhZm9ybSkodGhpcy5fY3VzdG9tQ29va2Jvb2tzU291cmNlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=