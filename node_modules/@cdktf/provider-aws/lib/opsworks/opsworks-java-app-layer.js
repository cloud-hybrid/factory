"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksJavaAppLayer = exports.opsworksJavaAppLayerEbsVolumeToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function opsworksJavaAppLayerEbsVolumeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        mount_point: cdktf.stringToTerraform(struct.mountPoint),
        number_of_disks: cdktf.numberToTerraform(struct.numberOfDisks),
        raid_level: cdktf.stringToTerraform(struct.raidLevel),
        size: cdktf.numberToTerraform(struct.size),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.opsworksJavaAppLayerEbsVolumeToTerraform = opsworksJavaAppLayerEbsVolumeToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html aws_opsworks_java_app_layer}.
 *
 * @stability stable
 */
class OpsworksJavaAppLayer extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_java_app_layer.html aws_opsworks_java_app_layer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_java_app_layer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._appServer = config.appServer;
        this._appServerVersion = config.appServerVersion;
        this._autoAssignElasticIps = config.autoAssignElasticIps;
        this._autoAssignPublicIps = config.autoAssignPublicIps;
        this._autoHealing = config.autoHealing;
        this._customConfigureRecipes = config.customConfigureRecipes;
        this._customDeployRecipes = config.customDeployRecipes;
        this._customInstanceProfileArn = config.customInstanceProfileArn;
        this._customJson = config.customJson;
        this._customSecurityGroupIds = config.customSecurityGroupIds;
        this._customSetupRecipes = config.customSetupRecipes;
        this._customShutdownRecipes = config.customShutdownRecipes;
        this._customUndeployRecipes = config.customUndeployRecipes;
        this._drainElbOnShutdown = config.drainElbOnShutdown;
        this._elasticLoadBalancer = config.elasticLoadBalancer;
        this._installUpdatesOnBoot = config.installUpdatesOnBoot;
        this._instanceShutdownTimeout = config.instanceShutdownTimeout;
        this._jvmOptions = config.jvmOptions;
        this._jvmType = config.jvmType;
        this._jvmVersion = config.jvmVersion;
        this._name = config.name;
        this._stackId = config.stackId;
        this._systemPackages = config.systemPackages;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
        this._ebsVolume = config.ebsVolume;
    }
    /**
     * @stability stable
     */
    get appServer() {
        return this.getStringAttribute('app_server');
    }
    /**
     * @stability stable
     */
    set appServer(value) {
        this._appServer = value;
    }
    /**
     * @stability stable
     */
    resetAppServer() {
        this._appServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get appServerInput() {
        return this._appServer;
    }
    /**
     * @stability stable
     */
    get appServerVersion() {
        return this.getStringAttribute('app_server_version');
    }
    /**
     * @stability stable
     */
    set appServerVersion(value) {
        this._appServerVersion = value;
    }
    /**
     * @stability stable
     */
    resetAppServerVersion() {
        this._appServerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get appServerVersionInput() {
        return this._appServerVersion;
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
    get autoAssignElasticIps() {
        return this.getBooleanAttribute('auto_assign_elastic_ips');
    }
    /**
     * @stability stable
     */
    set autoAssignElasticIps(value) {
        this._autoAssignElasticIps = value;
    }
    /**
     * @stability stable
     */
    resetAutoAssignElasticIps() {
        this._autoAssignElasticIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoAssignElasticIpsInput() {
        return this._autoAssignElasticIps;
    }
    /**
     * @stability stable
     */
    get autoAssignPublicIps() {
        return this.getBooleanAttribute('auto_assign_public_ips');
    }
    /**
     * @stability stable
     */
    set autoAssignPublicIps(value) {
        this._autoAssignPublicIps = value;
    }
    /**
     * @stability stable
     */
    resetAutoAssignPublicIps() {
        this._autoAssignPublicIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoAssignPublicIpsInput() {
        return this._autoAssignPublicIps;
    }
    /**
     * @stability stable
     */
    get autoHealing() {
        return this.getBooleanAttribute('auto_healing');
    }
    /**
     * @stability stable
     */
    set autoHealing(value) {
        this._autoHealing = value;
    }
    /**
     * @stability stable
     */
    resetAutoHealing() {
        this._autoHealing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoHealingInput() {
        return this._autoHealing;
    }
    /**
     * @stability stable
     */
    get customConfigureRecipes() {
        return this.getListAttribute('custom_configure_recipes');
    }
    /**
     * @stability stable
     */
    set customConfigureRecipes(value) {
        this._customConfigureRecipes = value;
    }
    /**
     * @stability stable
     */
    resetCustomConfigureRecipes() {
        this._customConfigureRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customConfigureRecipesInput() {
        return this._customConfigureRecipes;
    }
    /**
     * @stability stable
     */
    get customDeployRecipes() {
        return this.getListAttribute('custom_deploy_recipes');
    }
    /**
     * @stability stable
     */
    set customDeployRecipes(value) {
        this._customDeployRecipes = value;
    }
    /**
     * @stability stable
     */
    resetCustomDeployRecipes() {
        this._customDeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customDeployRecipesInput() {
        return this._customDeployRecipes;
    }
    /**
     * @stability stable
     */
    get customInstanceProfileArn() {
        return this.getStringAttribute('custom_instance_profile_arn');
    }
    /**
     * @stability stable
     */
    set customInstanceProfileArn(value) {
        this._customInstanceProfileArn = value;
    }
    /**
     * @stability stable
     */
    resetCustomInstanceProfileArn() {
        this._customInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customInstanceProfileArnInput() {
        return this._customInstanceProfileArn;
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
    get customSecurityGroupIds() {
        return this.getListAttribute('custom_security_group_ids');
    }
    /**
     * @stability stable
     */
    set customSecurityGroupIds(value) {
        this._customSecurityGroupIds = value;
    }
    /**
     * @stability stable
     */
    resetCustomSecurityGroupIds() {
        this._customSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customSecurityGroupIdsInput() {
        return this._customSecurityGroupIds;
    }
    /**
     * @stability stable
     */
    get customSetupRecipes() {
        return this.getListAttribute('custom_setup_recipes');
    }
    /**
     * @stability stable
     */
    set customSetupRecipes(value) {
        this._customSetupRecipes = value;
    }
    /**
     * @stability stable
     */
    resetCustomSetupRecipes() {
        this._customSetupRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customSetupRecipesInput() {
        return this._customSetupRecipes;
    }
    /**
     * @stability stable
     */
    get customShutdownRecipes() {
        return this.getListAttribute('custom_shutdown_recipes');
    }
    /**
     * @stability stable
     */
    set customShutdownRecipes(value) {
        this._customShutdownRecipes = value;
    }
    /**
     * @stability stable
     */
    resetCustomShutdownRecipes() {
        this._customShutdownRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customShutdownRecipesInput() {
        return this._customShutdownRecipes;
    }
    /**
     * @stability stable
     */
    get customUndeployRecipes() {
        return this.getListAttribute('custom_undeploy_recipes');
    }
    /**
     * @stability stable
     */
    set customUndeployRecipes(value) {
        this._customUndeployRecipes = value;
    }
    /**
     * @stability stable
     */
    resetCustomUndeployRecipes() {
        this._customUndeployRecipes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customUndeployRecipesInput() {
        return this._customUndeployRecipes;
    }
    /**
     * @stability stable
     */
    get drainElbOnShutdown() {
        return this.getBooleanAttribute('drain_elb_on_shutdown');
    }
    /**
     * @stability stable
     */
    set drainElbOnShutdown(value) {
        this._drainElbOnShutdown = value;
    }
    /**
     * @stability stable
     */
    resetDrainElbOnShutdown() {
        this._drainElbOnShutdown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get drainElbOnShutdownInput() {
        return this._drainElbOnShutdown;
    }
    /**
     * @stability stable
     */
    get elasticLoadBalancer() {
        return this.getStringAttribute('elastic_load_balancer');
    }
    /**
     * @stability stable
     */
    set elasticLoadBalancer(value) {
        this._elasticLoadBalancer = value;
    }
    /**
     * @stability stable
     */
    resetElasticLoadBalancer() {
        this._elasticLoadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get elasticLoadBalancerInput() {
        return this._elasticLoadBalancer;
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
    get installUpdatesOnBoot() {
        return this.getBooleanAttribute('install_updates_on_boot');
    }
    /**
     * @stability stable
     */
    set installUpdatesOnBoot(value) {
        this._installUpdatesOnBoot = value;
    }
    /**
     * @stability stable
     */
    resetInstallUpdatesOnBoot() {
        this._installUpdatesOnBoot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get installUpdatesOnBootInput() {
        return this._installUpdatesOnBoot;
    }
    /**
     * @stability stable
     */
    get instanceShutdownTimeout() {
        return this.getNumberAttribute('instance_shutdown_timeout');
    }
    /**
     * @stability stable
     */
    set instanceShutdownTimeout(value) {
        this._instanceShutdownTimeout = value;
    }
    /**
     * @stability stable
     */
    resetInstanceShutdownTimeout() {
        this._instanceShutdownTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceShutdownTimeoutInput() {
        return this._instanceShutdownTimeout;
    }
    /**
     * @stability stable
     */
    get jvmOptions() {
        return this.getStringAttribute('jvm_options');
    }
    /**
     * @stability stable
     */
    set jvmOptions(value) {
        this._jvmOptions = value;
    }
    /**
     * @stability stable
     */
    resetJvmOptions() {
        this._jvmOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jvmOptionsInput() {
        return this._jvmOptions;
    }
    /**
     * @stability stable
     */
    get jvmType() {
        return this.getStringAttribute('jvm_type');
    }
    /**
     * @stability stable
     */
    set jvmType(value) {
        this._jvmType = value;
    }
    /**
     * @stability stable
     */
    resetJvmType() {
        this._jvmType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jvmTypeInput() {
        return this._jvmType;
    }
    /**
     * @stability stable
     */
    get jvmVersion() {
        return this.getStringAttribute('jvm_version');
    }
    /**
     * @stability stable
     */
    set jvmVersion(value) {
        this._jvmVersion = value;
    }
    /**
     * @stability stable
     */
    resetJvmVersion() {
        this._jvmVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jvmVersionInput() {
        return this._jvmVersion;
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
    /**
     * @stability stable
     */
    resetName() {
        this._name = undefined;
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
    get stackId() {
        return this.getStringAttribute('stack_id');
    }
    /**
     * @stability stable
     */
    set stackId(value) {
        this._stackId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stackIdInput() {
        return this._stackId;
    }
    /**
     * @stability stable
     */
    get systemPackages() {
        return this.getListAttribute('system_packages');
    }
    /**
     * @stability stable
     */
    set systemPackages(value) {
        this._systemPackages = value;
    }
    /**
     * @stability stable
     */
    resetSystemPackages() {
        this._systemPackages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get systemPackagesInput() {
        return this._systemPackages;
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
    get useEbsOptimizedInstances() {
        return this.getBooleanAttribute('use_ebs_optimized_instances');
    }
    /**
     * @stability stable
     */
    set useEbsOptimizedInstances(value) {
        this._useEbsOptimizedInstances = value;
    }
    /**
     * @stability stable
     */
    resetUseEbsOptimizedInstances() {
        this._useEbsOptimizedInstances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get useEbsOptimizedInstancesInput() {
        return this._useEbsOptimizedInstances;
    }
    /**
     * @stability stable
     */
    get ebsVolume() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ebs_volume');
    }
    /**
     * @stability stable
     */
    set ebsVolume(value) {
        this._ebsVolume = value;
    }
    /**
     * @stability stable
     */
    resetEbsVolume() {
        this._ebsVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ebsVolumeInput() {
        return this._ebsVolume;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            app_server: cdktf.stringToTerraform(this._appServer),
            app_server_version: cdktf.stringToTerraform(this._appServerVersion),
            auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
            auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
            auto_healing: cdktf.booleanToTerraform(this._autoHealing),
            custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
            custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
            custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
            custom_json: cdktf.stringToTerraform(this._customJson),
            custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
            custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
            custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
            custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
            drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
            elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
            install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
            instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
            jvm_options: cdktf.stringToTerraform(this._jvmOptions),
            jvm_type: cdktf.stringToTerraform(this._jvmType),
            jvm_version: cdktf.stringToTerraform(this._jvmVersion),
            name: cdktf.stringToTerraform(this._name),
            stack_id: cdktf.stringToTerraform(this._stackId),
            system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
            ebs_volume: cdktf.listMapper(opsworksJavaAppLayerEbsVolumeToTerraform)(this._ebsVolume),
        };
    }
}
exports.OpsworksJavaAppLayer = OpsworksJavaAppLayer;
_a = JSII_RTTI_SYMBOL_1;
OpsworksJavaAppLayer[_a] = { fqn: "@cdktf/provider-aws.opsworks.OpsworksJavaAppLayer", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
OpsworksJavaAppLayer.tfResourceType = "aws_opsworks_java_app_layer";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Bzd29ya3MtamF2YS1hcHAtbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3Bzd29ya3Mvb3Bzd29ya3MtamF2YS1hcHAtbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE0RS9CLFNBQWdCLHdDQUF3QyxDQUFDLE1BQXNDO0lBQzdGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQy9ELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzVDLENBQUE7QUFDSCxDQUFDO0FBZEQsNEZBY0M7Ozs7OztBQUlELE1BQWEsb0JBQXFCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU8vRCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lB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QUNHLG1DQUFjLEdBQVcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NKYXZhQXBwTGF5ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBTZXJ2ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcFNlcnZlclZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvQXNzaWduRWxhc3RpY0lwcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvQXNzaWduUHVibGljSXBzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvSGVhbGluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tQ29uZmlndXJlUmVjaXBlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21EZXBsb3lSZWNpcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUluc3RhbmNlUHJvZmlsZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUpzb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tU2V0dXBSZWNpcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21TaHV0ZG93blJlY2lwZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbVVuZGVwbG95UmVjaXBlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkcmFpbkVsYk9uU2h1dGRvd24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVsYXN0aWNMb2FkQmFsYW5jZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YWxsVXBkYXRlc09uQm9vdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVNodXRkb3duVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGp2bU9wdGlvbnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqdm1UeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganZtVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhY2tJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzeXN0ZW1QYWNrYWdlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNWb2x1bWU/OiBPcHN3b3Jrc0phdmFBcHBMYXllckVic1ZvbHVtZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc0phdmFBcHBMYXllckVic1ZvbHVtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW91bnRQb2ludDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBudW1iZXJPZkRpc2tzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmFpZExldmVsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Bzd29ya3NKYXZhQXBwTGF5ZXJFYnNWb2x1bWVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc0phdmFBcHBMYXllckVic1ZvbHVtZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIG1vdW50X3BvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vdW50UG9pbnQpLFxuICAgIG51bWJlcl9vZl9kaXNrczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5udW1iZXJPZkRpc2tzKSxcbiAgICByYWlkX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhaWRMZXZlbCksXG4gICAgc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgT3Bzd29ya3NKYXZhQXBwTGF5ZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfb3Bzd29ya3NfamF2YV9hcHBfbGF5ZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBPcHN3b3Jrc0phdmFBcHBMYXllckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX29wc3dvcmtzX2phdmFfYXBwX2xheWVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FwcFNlcnZlciA9IGNvbmZpZy5hcHBTZXJ2ZXI7XG4gICAgdGhpcy5fYXBwU2VydmVyVmVyc2lvbiA9IGNvbmZpZy5hcHBTZXJ2ZXJWZXJzaW9uO1xuICAgIHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzID0gY29uZmlnLmF1dG9Bc3NpZ25FbGFzdGljSXBzO1xuICAgIHRoaXMuX2F1dG9Bc3NpZ25QdWJsaWNJcHMgPSBjb25maWcuYXV0b0Fzc2lnblB1YmxpY0lwcztcbiAgICB0aGlzLl9hdXRvSGVhbGluZyA9IGNvbmZpZy5hdXRvSGVhbGluZztcbiAgICB0aGlzLl9jdXN0b21Db25maWd1cmVSZWNpcGVzID0gY29uZmlnLmN1c3RvbUNvbmZpZ3VyZVJlY2lwZXM7XG4gICAgdGhpcy5fY3VzdG9tRGVwbG95UmVjaXBlcyA9IGNvbmZpZy5jdXN0b21EZXBsb3lSZWNpcGVzO1xuICAgIHRoaXMuX2N1c3RvbUluc3RhbmNlUHJvZmlsZUFybiA9IGNvbmZpZy5jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm47XG4gICAgdGhpcy5fY3VzdG9tSnNvbiA9IGNvbmZpZy5jdXN0b21Kc29uO1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMgPSBjb25maWcuY3VzdG9tU2VjdXJpdHlHcm91cElkcztcbiAgICB0aGlzLl9jdXN0b21TZXR1cFJlY2lwZXMgPSBjb25maWcuY3VzdG9tU2V0dXBSZWNpcGVzO1xuICAgIHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcyA9IGNvbmZpZy5jdXN0b21TaHV0ZG93blJlY2lwZXM7XG4gICAgdGhpcy5fY3VzdG9tVW5kZXBsb3lSZWNpcGVzID0gY29uZmlnLmN1c3RvbVVuZGVwbG95UmVjaXBlcztcbiAgICB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24gPSBjb25maWcuZHJhaW5FbGJPblNodXRkb3duO1xuICAgIHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXIgPSBjb25maWcuZWxhc3RpY0xvYWRCYWxhbmNlcjtcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IGNvbmZpZy5pbnN0YWxsVXBkYXRlc09uQm9vdDtcbiAgICB0aGlzLl9pbnN0YW5jZVNodXRkb3duVGltZW91dCA9IGNvbmZpZy5pbnN0YW5jZVNodXRkb3duVGltZW91dDtcbiAgICB0aGlzLl9qdm1PcHRpb25zID0gY29uZmlnLmp2bU9wdGlvbnM7XG4gICAgdGhpcy5fanZtVHlwZSA9IGNvbmZpZy5qdm1UeXBlO1xuICAgIHRoaXMuX2p2bVZlcnNpb24gPSBjb25maWcuanZtVmVyc2lvbjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fc3RhY2tJZCA9IGNvbmZpZy5zdGFja0lkO1xuICAgIHRoaXMuX3N5c3RlbVBhY2thZ2VzID0gY29uZmlnLnN5c3RlbVBhY2thZ2VzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzID0gY29uZmlnLnVzZUVic09wdGltaXplZEluc3RhbmNlcztcbiAgICB0aGlzLl9lYnNWb2x1bWUgPSBjb25maWcuZWJzVm9sdW1lO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcHBfc2VydmVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcFNlcnZlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwU2VydmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXBwX3NlcnZlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwU2VydmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcHBTZXJ2ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBTZXJ2ZXIoKSB7XG4gICAgdGhpcy5fYXBwU2VydmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBTZXJ2ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwU2VydmVyO1xuICB9XG5cbiAgLy8gYXBwX3NlcnZlcl92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcFNlcnZlclZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFwcFNlcnZlclZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBfc2VydmVyX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFwcFNlcnZlclZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcFNlcnZlclZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBTZXJ2ZXJWZXJzaW9uKCkge1xuICAgIHRoaXMuX2FwcFNlcnZlclZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcFNlcnZlclZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwU2VydmVyVmVyc2lvbjtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b19hc3NpZ25fZWxhc3RpY19pcHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0Fzc2lnbkVsYXN0aWNJcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9Bc3NpZ25FbGFzdGljSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fYXNzaWduX2VsYXN0aWNfaXBzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0Fzc2lnbkVsYXN0aWNJcHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b0Fzc2lnbkVsYXN0aWNJcHMoKSB7XG4gICAgdGhpcy5fYXV0b0Fzc2lnbkVsYXN0aWNJcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9Bc3NpZ25FbGFzdGljSXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzO1xuICB9XG5cbiAgLy8gYXV0b19hc3NpZ25fcHVibGljX2lwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvQXNzaWduUHVibGljSXBzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvQXNzaWduUHVibGljSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fYXNzaWduX3B1YmxpY19pcHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvQXNzaWduUHVibGljSXBzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b0Fzc2lnblB1YmxpY0lwcygpIHtcbiAgICB0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvQXNzaWduUHVibGljSXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Bc3NpZ25QdWJsaWNJcHM7XG4gIH1cblxuICAvLyBhdXRvX2hlYWxpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0hlYWxpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9IZWFsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9faGVhbGluZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9IZWFsaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvSGVhbGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9IZWFsaW5nKCkge1xuICAgIHRoaXMuX2F1dG9IZWFsaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvSGVhbGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvSGVhbGluZztcbiAgfVxuXG4gIC8vIGN1c3RvbV9jb25maWd1cmVfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21Db25maWd1cmVSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUNvbmZpZ3VyZVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2NvbmZpZ3VyZV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21Db25maWd1cmVSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21Db25maWd1cmVSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUNvbmZpZ3VyZVJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ29uZmlndXJlUmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9kZXBsb3lfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21EZXBsb3lSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbURlcGxveVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2RlcGxveV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21EZXBsb3lSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21EZXBsb3lSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbURlcGxveVJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRGVwbG95UmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUluc3RhbmNlUHJvZmlsZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4oKSB7XG4gICAgdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21JbnN0YW5jZVByb2ZpbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuO1xuICB9XG5cbiAgLy8gY3VzdG9tX2pzb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tSnNvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbV9qc29uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21Kc29uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21Kc29uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tSnNvbigpIHtcbiAgICB0aGlzLl9jdXN0b21Kc29uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21Kc29uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUpzb247XG4gIH1cblxuICAvLyBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21TZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21TZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVNlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9zZXR1cF9yZWNpcGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVNldHVwUmVjaXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBjdXN0b21TZXR1cFJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX3NldHVwX3JlY2lwZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVNldHVwUmVjaXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jdXN0b21TZXR1cFJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21TZXR1cFJlY2lwZXMoKSB7XG4gICAgdGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21TZXR1cFJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzO1xuICB9XG5cbiAgLy8gY3VzdG9tX3NodXRkb3duX3JlY2lwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tU2h1dGRvd25SZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbVNodXRkb3duUmVjaXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjdXN0b21fc2h1dGRvd25fcmVjaXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tU2h1dGRvd25SZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbVNodXRkb3duUmVjaXBlcygpIHtcbiAgICB0aGlzLl9jdXN0b21TaHV0ZG93blJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVNodXRkb3duUmVjaXBlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TaHV0ZG93blJlY2lwZXM7XG4gIH1cblxuICAvLyBjdXN0b21fdW5kZXBsb3lfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21VbmRlcGxveVJlY2lwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tVW5kZXBsb3lSZWNpcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2N1c3RvbV91bmRlcGxveV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21VbmRlcGxveVJlY2lwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY3VzdG9tVW5kZXBsb3lSZWNpcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tVW5kZXBsb3lSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tVW5kZXBsb3lSZWNpcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcztcbiAgfVxuXG4gIC8vIGRyYWluX2VsYl9vbl9zaHV0ZG93biAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kcmFpbkVsYk9uU2h1dGRvd24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRyYWluRWxiT25TaHV0ZG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkcmFpbl9lbGJfb25fc2h1dGRvd24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkcmFpbkVsYk9uU2h1dGRvd24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RyYWluRWxiT25TaHV0ZG93biA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERyYWluRWxiT25TaHV0ZG93bigpIHtcbiAgICB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRyYWluRWxiT25TaHV0ZG93bklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd247XG4gIH1cblxuICAvLyBlbGFzdGljX2xvYWRfYmFsYW5jZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0xvYWRCYWxhbmNlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0xvYWRCYWxhbmNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VsYXN0aWNfbG9hZF9iYWxhbmNlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZWxhc3RpY0xvYWRCYWxhbmNlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNMb2FkQmFsYW5jZXIoKSB7XG4gICAgdGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0xvYWRCYWxhbmNlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljTG9hZEJhbGFuY2VyO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbGxfdXBkYXRlc19vbl9ib290IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbGxVcGRhdGVzT25Cb290PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbGxVcGRhdGVzT25Cb290KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbGxVcGRhdGVzT25Cb290KCkge1xuICAgIHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3NodXRkb3duX3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VTaHV0ZG93blRpbWVvdXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlU2h1dGRvd25UaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2Vfc2h1dGRvd25fdGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VTaHV0ZG93blRpbWVvdXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VTaHV0ZG93blRpbWVvdXQoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VTaHV0ZG93blRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlU2h1dGRvd25UaW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0O1xuICB9XG5cbiAgLy8ganZtX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfanZtT3B0aW9ucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQganZtT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2p2bV9vcHRpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBqdm1PcHRpb25zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9qdm1PcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnZtT3B0aW9ucygpIHtcbiAgICB0aGlzLl9qdm1PcHRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqdm1PcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2p2bU9wdGlvbnM7XG4gIH1cblxuICAvLyBqdm1fdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qdm1UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBqdm1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnanZtX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGp2bVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2p2bVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRKdm1UeXBlKCkge1xuICAgIHRoaXMuX2p2bVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGp2bVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanZtVHlwZTtcbiAgfVxuXG4gIC8vIGp2bV92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2p2bVZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGp2bVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqdm1fdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQganZtVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fanZtVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEp2bVZlcnNpb24oKSB7XG4gICAgdGhpcy5fanZtVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQganZtVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qdm1WZXJzaW9uO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc3RhY2tfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3RhY2tJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhY2tJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YWNrX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFja0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGFja0lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YWNrSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2tJZDtcbiAgfVxuXG4gIC8vIHN5c3RlbV9wYWNrYWdlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zeXN0ZW1QYWNrYWdlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzeXN0ZW1QYWNrYWdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzeXN0ZW1fcGFja2FnZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN5c3RlbVBhY2thZ2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N5c3RlbVBhY2thZ2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3lzdGVtUGFja2FnZXMoKSB7XG4gICAgdGhpcy5fc3lzdGVtUGFja2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN5c3RlbVBhY2thZ2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5c3RlbVBhY2thZ2VzO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHVzZV9lYnNfb3B0aW1pemVkX2luc3RhbmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVzZUVic09wdGltaXplZEluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VfZWJzX29wdGltaXplZF9pbnN0YW5jZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZUVic09wdGltaXplZEluc3RhbmNlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZUVic09wdGltaXplZEluc3RhbmNlcygpIHtcbiAgICB0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZUVic09wdGltaXplZEluc3RhbmNlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXM7XG4gIH1cblxuICAvLyBlYnNfdm9sdW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vic1ZvbHVtZT86IE9wc3dvcmtzSmF2YUFwcExheWVyRWJzVm9sdW1lW107IFxuICBwdWJsaWMgZ2V0IGVic1ZvbHVtZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWJzX3ZvbHVtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic1ZvbHVtZSh2YWx1ZTogT3Bzd29ya3NKYXZhQXBwTGF5ZXJFYnNWb2x1bWVbXSkge1xuICAgIHRoaXMuX2Vic1ZvbHVtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic1ZvbHVtZSgpIHtcbiAgICB0aGlzLl9lYnNWb2x1bWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic1ZvbHVtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNWb2x1bWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcF9zZXJ2ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwcFNlcnZlciksXG4gICAgICBhcHBfc2VydmVyX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FwcFNlcnZlclZlcnNpb24pLFxuICAgICAgYXV0b19hc3NpZ25fZWxhc3RpY19pcHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvQXNzaWduRWxhc3RpY0lwcyksXG4gICAgICBhdXRvX2Fzc2lnbl9wdWJsaWNfaXBzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyksXG4gICAgICBhdXRvX2hlYWxpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvSGVhbGluZyksXG4gICAgICBjdXN0b21fY29uZmlndXJlX3JlY2lwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMpLFxuICAgICAgY3VzdG9tX2RlcGxveV9yZWNpcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21EZXBsb3lSZWNpcGVzKSxcbiAgICAgIGN1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuKSxcbiAgICAgIGN1c3RvbV9qc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jdXN0b21Kc29uKSxcbiAgICAgIGN1c3RvbV9zZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMpLFxuICAgICAgY3VzdG9tX3NldHVwX3JlY2lwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbVNldHVwUmVjaXBlcyksXG4gICAgICBjdXN0b21fc2h1dGRvd25fcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fY3VzdG9tU2h1dGRvd25SZWNpcGVzKSxcbiAgICAgIGN1c3RvbV91bmRlcGxveV9yZWNpcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21VbmRlcGxveVJlY2lwZXMpLFxuICAgICAgZHJhaW5fZWxiX29uX3NodXRkb3duOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZHJhaW5FbGJPblNodXRkb3duKSxcbiAgICAgIGVsYXN0aWNfbG9hZF9iYWxhbmNlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlciksXG4gICAgICBpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290KSxcbiAgICAgIGluc3RhbmNlX3NodXRkb3duX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0KSxcbiAgICAgIGp2bV9vcHRpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9qdm1PcHRpb25zKSxcbiAgICAgIGp2bV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9qdm1UeXBlKSxcbiAgICAgIGp2bV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9qdm1WZXJzaW9uKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgc3RhY2tfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0YWNrSWQpLFxuICAgICAgc3lzdGVtX3BhY2thZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zeXN0ZW1QYWNrYWdlcyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHVzZV9lYnNfb3B0aW1pemVkX2luc3RhbmNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3VzZUVic09wdGltaXplZEluc3RhbmNlcyksXG4gICAgICBlYnNfdm9sdW1lOiBjZGt0Zi5saXN0TWFwcGVyKG9wc3dvcmtzSmF2YUFwcExheWVyRWJzVm9sdW1lVG9UZXJyYWZvcm0pKHRoaXMuX2Vic1ZvbHVtZSksXG4gICAgfTtcbiAgfVxufVxuIl19