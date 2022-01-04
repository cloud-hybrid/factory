"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksRailsAppLayer = exports.opsworksRailsAppLayerEbsVolumeToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function opsworksRailsAppLayerEbsVolumeToTerraform(struct) {
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
exports.opsworksRailsAppLayerEbsVolumeToTerraform = opsworksRailsAppLayerEbsVolumeToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html aws_opsworks_rails_app_layer}.
 *
 * @stability stable
 */
class OpsworksRailsAppLayer extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rails_app_layer.html aws_opsworks_rails_app_layer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_rails_app_layer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._appServer = config.appServer;
        this._autoAssignElasticIps = config.autoAssignElasticIps;
        this._autoAssignPublicIps = config.autoAssignPublicIps;
        this._autoHealing = config.autoHealing;
        this._bundlerVersion = config.bundlerVersion;
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
        this._manageBundler = config.manageBundler;
        this._name = config.name;
        this._passengerVersion = config.passengerVersion;
        this._rubyVersion = config.rubyVersion;
        this._rubygemsVersion = config.rubygemsVersion;
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
    get bundlerVersion() {
        return this.getStringAttribute('bundler_version');
    }
    /**
     * @stability stable
     */
    set bundlerVersion(value) {
        this._bundlerVersion = value;
    }
    /**
     * @stability stable
     */
    resetBundlerVersion() {
        this._bundlerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bundlerVersionInput() {
        return this._bundlerVersion;
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
    get manageBundler() {
        return this.getBooleanAttribute('manage_bundler');
    }
    /**
     * @stability stable
     */
    set manageBundler(value) {
        this._manageBundler = value;
    }
    /**
     * @stability stable
     */
    resetManageBundler() {
        this._manageBundler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get manageBundlerInput() {
        return this._manageBundler;
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
    get passengerVersion() {
        return this.getStringAttribute('passenger_version');
    }
    /**
     * @stability stable
     */
    set passengerVersion(value) {
        this._passengerVersion = value;
    }
    /**
     * @stability stable
     */
    resetPassengerVersion() {
        this._passengerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passengerVersionInput() {
        return this._passengerVersion;
    }
    /**
     * @stability stable
     */
    get rubyVersion() {
        return this.getStringAttribute('ruby_version');
    }
    /**
     * @stability stable
     */
    set rubyVersion(value) {
        this._rubyVersion = value;
    }
    /**
     * @stability stable
     */
    resetRubyVersion() {
        this._rubyVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rubyVersionInput() {
        return this._rubyVersion;
    }
    /**
     * @stability stable
     */
    get rubygemsVersion() {
        return this.getStringAttribute('rubygems_version');
    }
    /**
     * @stability stable
     */
    set rubygemsVersion(value) {
        this._rubygemsVersion = value;
    }
    /**
     * @stability stable
     */
    resetRubygemsVersion() {
        this._rubygemsVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rubygemsVersionInput() {
        return this._rubygemsVersion;
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
            auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
            auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
            auto_healing: cdktf.booleanToTerraform(this._autoHealing),
            bundler_version: cdktf.stringToTerraform(this._bundlerVersion),
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
            manage_bundler: cdktf.booleanToTerraform(this._manageBundler),
            name: cdktf.stringToTerraform(this._name),
            passenger_version: cdktf.stringToTerraform(this._passengerVersion),
            ruby_version: cdktf.stringToTerraform(this._rubyVersion),
            rubygems_version: cdktf.stringToTerraform(this._rubygemsVersion),
            stack_id: cdktf.stringToTerraform(this._stackId),
            system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
            ebs_volume: cdktf.listMapper(opsworksRailsAppLayerEbsVolumeToTerraform)(this._ebsVolume),
        };
    }
}
exports.OpsworksRailsAppLayer = OpsworksRailsAppLayer;
_a = JSII_RTTI_SYMBOL_1;
OpsworksRailsAppLayer[_a] = { fqn: "@cdktf/provider-aws.opsworks.OpsworksRailsAppLayer", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
OpsworksRailsAppLayer.tfResourceType = "aws_opsworks_rails_app_layer";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Bzd29ya3MtcmFpbHMtYXBwLWxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29wc3dvcmtzL29wc3dvcmtzLXJhaWxzLWFwcC1sYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQThFL0IsU0FBZ0IseUNBQXlDLENBQUMsTUFBdUM7SUFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDL0QsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFkRCw4RkFjQzs7Ozs7O0FBSUQsTUFBYSxxQkFBc0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT2hFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7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QUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ2hGLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELDJCQUEyQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDckYsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMseUNBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3pGLENBQUM7SUFDSixDQUFDOztBQXRpQkgsc0RBdWlCQzs7O0FBcmlCQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLG9DQUFjLEdBQVcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NSYWlsc0FwcExheWVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBTZXJ2ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9Bc3NpZ25FbGFzdGljSXBzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b0Fzc2lnblB1YmxpY0lwcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRvSGVhbGluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidW5kbGVyVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21Db25maWd1cmVSZWNpcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tRGVwbG95UmVjaXBlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbUluc3RhbmNlUHJvZmlsZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tSnNvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbVNlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tU2V0dXBSZWNpcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbVNodXRkb3duUmVjaXBlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21VbmRlcGxveVJlY2lwZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkcmFpbkVsYk9uU2h1dGRvd24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWxhc3RpY0xvYWRCYWxhbmNlcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFsbFVwZGF0ZXNPbkJvb3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZVNodXRkb3duVGltZW91dD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFuYWdlQnVuZGxlcj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhc3NlbmdlclZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcnVieVZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBydWJ5Z2Vtc1ZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YWNrSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzeXN0ZW1QYWNrYWdlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic1ZvbHVtZT86IE9wc3dvcmtzUmFpbHNBcHBMYXllckVic1ZvbHVtZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc1JhaWxzQXBwTGF5ZXJFYnNWb2x1bWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vdW50UG9pbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBudW1iZXJPZkRpc2tzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByYWlkTGV2ZWw/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzaXplOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Bzd29ya3NSYWlsc0FwcExheWVyRWJzVm9sdW1lVG9UZXJyYWZvcm0oc3RydWN0PzogT3Bzd29ya3NSYWlsc0FwcExheWVyRWJzVm9sdW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5jcnlwdGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0ZWQpLFxuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgbW91bnRfcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubW91bnRQb2ludCksXG4gICAgbnVtYmVyX29mX2Rpc2tzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm51bWJlck9mRGlza3MpLFxuICAgIHJhaWRfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmFpZExldmVsKSxcbiAgICBzaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIE9wc3dvcmtzUmFpbHNBcHBMYXllciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19vcHN3b3Jrc19yYWlsc19hcHBfbGF5ZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBPcHN3b3Jrc1JhaWxzQXBwTGF5ZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19vcHN3b3Jrc19yYWlsc19hcHBfbGF5ZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXBwU2VydmVyID0gY29uZmlnLmFwcFNlcnZlcjtcbiAgICB0aGlzLl9hdXRvQXNzaWduRWxhc3RpY0lwcyA9IGNvbmZpZy5hdXRvQXNzaWduRWxhc3RpY0lwcztcbiAgICB0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzID0gY29uZmlnLmF1dG9Bc3NpZ25QdWJsaWNJcHM7XG4gICAgdGhpcy5fYXV0b0hlYWxpbmcgPSBjb25maWcuYXV0b0hlYWxpbmc7XG4gICAgdGhpcy5fYnVuZGxlclZlcnNpb24gPSBjb25maWcuYnVuZGxlclZlcnNpb247XG4gICAgdGhpcy5fY3VzdG9tQ29uZmlndXJlUmVjaXBlcyA9IGNvbmZpZy5jdXN0b21Db25maWd1cmVSZWNpcGVzO1xuICAgIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMgPSBjb25maWcuY3VzdG9tRGVwbG95UmVjaXBlcztcbiAgICB0aGlzLl9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4gPSBjb25maWcuY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuO1xuICAgIHRoaXMuX2N1c3RvbUpzb24gPSBjb25maWcuY3VzdG9tSnNvbjtcbiAgICB0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWRzID0gY29uZmlnLmN1c3RvbVNlY3VyaXR5R3JvdXBJZHM7XG4gICAgdGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzID0gY29uZmlnLmN1c3RvbVNldHVwUmVjaXBlcztcbiAgICB0aGlzLl9jdXN0b21TaHV0ZG93blJlY2lwZXMgPSBjb25maWcuY3VzdG9tU2h1dGRvd25SZWNpcGVzO1xuICAgIHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcyA9IGNvbmZpZy5jdXN0b21VbmRlcGxveVJlY2lwZXM7XG4gICAgdGhpcy5fZHJhaW5FbGJPblNodXRkb3duID0gY29uZmlnLmRyYWluRWxiT25TaHV0ZG93bjtcbiAgICB0aGlzLl9lbGFzdGljTG9hZEJhbGFuY2VyID0gY29uZmlnLmVsYXN0aWNMb2FkQmFsYW5jZXI7XG4gICAgdGhpcy5faW5zdGFsbFVwZGF0ZXNPbkJvb3QgPSBjb25maWcuaW5zdGFsbFVwZGF0ZXNPbkJvb3Q7XG4gICAgdGhpcy5faW5zdGFuY2VTaHV0ZG93blRpbWVvdXQgPSBjb25maWcuaW5zdGFuY2VTaHV0ZG93blRpbWVvdXQ7XG4gICAgdGhpcy5fbWFuYWdlQnVuZGxlciA9IGNvbmZpZy5tYW5hZ2VCdW5kbGVyO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9wYXNzZW5nZXJWZXJzaW9uID0gY29uZmlnLnBhc3NlbmdlclZlcnNpb247XG4gICAgdGhpcy5fcnVieVZlcnNpb24gPSBjb25maWcucnVieVZlcnNpb247XG4gICAgdGhpcy5fcnVieWdlbXNWZXJzaW9uID0gY29uZmlnLnJ1YnlnZW1zVmVyc2lvbjtcbiAgICB0aGlzLl9zdGFja0lkID0gY29uZmlnLnN0YWNrSWQ7XG4gICAgdGhpcy5fc3lzdGVtUGFja2FnZXMgPSBjb25maWcuc3lzdGVtUGFja2FnZXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMgPSBjb25maWcudXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzO1xuICAgIHRoaXMuX2Vic1ZvbHVtZSA9IGNvbmZpZy5lYnNWb2x1bWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFwcF9zZXJ2ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwU2VydmVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcHBTZXJ2ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcHBfc2VydmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcHBTZXJ2ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FwcFNlcnZlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcFNlcnZlcigpIHtcbiAgICB0aGlzLl9hcHBTZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcFNlcnZlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBTZXJ2ZXI7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9fYXNzaWduX2VsYXN0aWNfaXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9Bc3NpZ25FbGFzdGljSXBzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvQXNzaWduRWxhc3RpY0lwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX2Fzc2lnbl9lbGFzdGljX2lwcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9Bc3NpZ25FbGFzdGljSXBzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvQXNzaWduRWxhc3RpY0lwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9Bc3NpZ25FbGFzdGljSXBzKCkge1xuICAgIHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvQXNzaWduRWxhc3RpY0lwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQXNzaWduRWxhc3RpY0lwcztcbiAgfVxuXG4gIC8vIGF1dG9fYXNzaWduX3B1YmxpY19pcHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0Fzc2lnblB1YmxpY0lwcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXV0b0Fzc2lnblB1YmxpY0lwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX2Fzc2lnbl9wdWJsaWNfaXBzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0Fzc2lnblB1YmxpY0lwcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9Bc3NpZ25QdWJsaWNJcHMoKSB7XG4gICAgdGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b0Fzc2lnblB1YmxpY0lwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzO1xuICB9XG5cbiAgLy8gYXV0b19oZWFsaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9IZWFsaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvSGVhbGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX2hlYWxpbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvSGVhbGluZyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXV0b0hlYWxpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvSGVhbGluZygpIHtcbiAgICB0aGlzLl9hdXRvSGVhbGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b0hlYWxpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0hlYWxpbmc7XG4gIH1cblxuICAvLyBidW5kbGVyX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVuZGxlclZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1bmRsZXJWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVuZGxlcl92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBidW5kbGVyVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVuZGxlclZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdW5kbGVyVmVyc2lvbigpIHtcbiAgICB0aGlzLl9idW5kbGVyVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVuZGxlclZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVuZGxlclZlcnNpb247XG4gIH1cblxuICAvLyBjdXN0b21fY29uZmlndXJlX3JlY2lwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tQ29uZmlndXJlUmVjaXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBjdXN0b21Db25maWd1cmVSZWNpcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2N1c3RvbV9jb25maWd1cmVfcmVjaXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tQ29uZmlndXJlUmVjaXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jdXN0b21Db25maWd1cmVSZWNpcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tQ29uZmlndXJlUmVjaXBlcygpIHtcbiAgICB0aGlzLl9jdXN0b21Db25maWd1cmVSZWNpcGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21Db25maWd1cmVSZWNpcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXM7XG4gIH1cblxuICAvLyBjdXN0b21fZGVwbG95X3JlY2lwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tRGVwbG95UmVjaXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBjdXN0b21EZXBsb3lSZWNpcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2N1c3RvbV9kZXBsb3lfcmVjaXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tRGVwbG95UmVjaXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jdXN0b21EZXBsb3lSZWNpcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tRGVwbG95UmVjaXBlcygpIHtcbiAgICB0aGlzLl9jdXN0b21EZXBsb3lSZWNpcGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21EZXBsb3lSZWNpcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXM7XG4gIH1cblxuICAvLyBjdXN0b21faW5zdGFuY2VfcHJvZmlsZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21faW5zdGFuY2VfcHJvZmlsZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbUluc3RhbmNlUHJvZmlsZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuKCkge1xuICAgIHRoaXMuX2N1c3RvbUluc3RhbmNlUHJvZmlsZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUluc3RhbmNlUHJvZmlsZUFybjtcbiAgfVxuXG4gIC8vIGN1c3RvbV9qc29uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbUpzb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fanNvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tSnNvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3VzdG9tSnNvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbUpzb24oKSB7XG4gICAgdGhpcy5fY3VzdG9tSnNvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tSnNvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21Kc29uO1xuICB9XG5cbiAgLy8gY3VzdG9tX3NlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21TZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbVNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl9jdXN0b21TZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21TZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHM7XG4gIH1cblxuICAvLyBjdXN0b21fc2V0dXBfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21TZXR1cFJlY2lwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2V0dXBSZWNpcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2N1c3RvbV9zZXR1cF9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21TZXR1cFJlY2lwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tU2V0dXBSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbVNldHVwUmVjaXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2V0dXBSZWNpcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVNldHVwUmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9zaHV0ZG93bl9yZWNpcGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVNodXRkb3duUmVjaXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBjdXN0b21TaHV0ZG93blJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX3NodXRkb3duX3JlY2lwZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVNodXRkb3duUmVjaXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jdXN0b21TaHV0ZG93blJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21TaHV0ZG93blJlY2lwZXMoKSB7XG4gICAgdGhpcy5fY3VzdG9tU2h1dGRvd25SZWNpcGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21TaHV0ZG93blJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tU2h1dGRvd25SZWNpcGVzO1xuICB9XG5cbiAgLy8gY3VzdG9tX3VuZGVwbG95X3JlY2lwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tVW5kZXBsb3lSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbVVuZGVwbG95UmVjaXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjdXN0b21fdW5kZXBsb3lfcmVjaXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tVW5kZXBsb3lSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbVVuZGVwbG95UmVjaXBlcygpIHtcbiAgICB0aGlzLl9jdXN0b21VbmRlcGxveVJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVVuZGVwbG95UmVjaXBlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21VbmRlcGxveVJlY2lwZXM7XG4gIH1cblxuICAvLyBkcmFpbl9lbGJfb25fc2h1dGRvd24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZHJhaW5FbGJPblNodXRkb3duPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkcmFpbkVsYk9uU2h1dGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZHJhaW5fZWxiX29uX3NodXRkb3duJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZHJhaW5FbGJPblNodXRkb3duKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREcmFpbkVsYk9uU2h1dGRvd24oKSB7XG4gICAgdGhpcy5fZHJhaW5FbGJPblNodXRkb3duID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkcmFpbkVsYk9uU2h1dGRvd25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhaW5FbGJPblNodXRkb3duO1xuICB9XG5cbiAgLy8gZWxhc3RpY19sb2FkX2JhbGFuY2VyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VsYXN0aWNMb2FkQmFsYW5jZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVsYXN0aWNMb2FkQmFsYW5jZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbGFzdGljX2xvYWRfYmFsYW5jZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVsYXN0aWNMb2FkQmFsYW5jZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbGFzdGljTG9hZEJhbGFuY2VyKCkge1xuICAgIHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNMb2FkQmFsYW5jZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlcjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YWxsVXBkYXRlc09uQm9vdD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5zdGFsbFVwZGF0ZXNPbkJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5zdGFsbF91cGRhdGVzX29uX2Jvb3QnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YWxsVXBkYXRlc09uQm9vdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5zdGFsbFVwZGF0ZXNPbkJvb3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YWxsVXBkYXRlc09uQm9vdCgpIHtcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFsbFVwZGF0ZXNPbkJvb3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFsbFVwZGF0ZXNPbkJvb3Q7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9zaHV0ZG93bl90aW1lb3V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVNodXRkb3duVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2luc3RhbmNlX3NodXRkb3duX3RpbWVvdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlU2h1dGRvd25UaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVNodXRkb3duVGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlU2h1dGRvd25UaW1lb3V0KCkge1xuICAgIHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVNodXRkb3duVGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVNodXRkb3duVGltZW91dDtcbiAgfVxuXG4gIC8vIG1hbmFnZV9idW5kbGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hbmFnZUJ1bmRsZXI/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG1hbmFnZUJ1bmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbWFuYWdlX2J1bmRsZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtYW5hZ2VCdW5kbGVyKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9tYW5hZ2VCdW5kbGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFuYWdlQnVuZGxlcigpIHtcbiAgICB0aGlzLl9tYW5hZ2VCdW5kbGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYW5hZ2VCdW5kbGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZUJ1bmRsZXI7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBwYXNzZW5nZXJfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXNzZW5nZXJWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXNzZW5nZXJWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc2VuZ2VyX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhc3NlbmdlclZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bhc3NlbmdlclZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXNzZW5nZXJWZXJzaW9uKCkge1xuICAgIHRoaXMuX3Bhc3NlbmdlclZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhc3NlbmdlclZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc2VuZ2VyVmVyc2lvbjtcbiAgfVxuXG4gIC8vIHJ1YnlfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ydWJ5VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcnVieVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWJ5X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1YnlWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ydWJ5VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1YnlWZXJzaW9uKCkge1xuICAgIHRoaXMuX3J1YnlWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydWJ5VmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWJ5VmVyc2lvbjtcbiAgfVxuXG4gIC8vIHJ1YnlnZW1zX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcnVieWdlbXNWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBydWJ5Z2Vtc1ZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWJ5Z2Vtc192ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBydWJ5Z2Vtc1ZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3J1YnlnZW1zVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1YnlnZW1zVmVyc2lvbigpIHtcbiAgICB0aGlzLl9ydWJ5Z2Vtc1ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1YnlnZW1zVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydWJ5Z2Vtc1ZlcnNpb247XG4gIH1cblxuICAvLyBzdGFja19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGFja0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGFja0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhY2tfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YWNrSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YWNrSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhY2tJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFja0lkO1xuICB9XG5cbiAgLy8gc3lzdGVtX3BhY2thZ2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N5c3RlbVBhY2thZ2VzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN5c3RlbVBhY2thZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N5c3RlbV9wYWNrYWdlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3lzdGVtUGFja2FnZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3lzdGVtUGFja2FnZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTeXN0ZW1QYWNrYWdlcygpIHtcbiAgICB0aGlzLl9zeXN0ZW1QYWNrYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3lzdGVtUGFja2FnZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3lzdGVtUGFja2FnZXM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdXNlX2Vic19vcHRpbWl6ZWRfaW5zdGFuY2VzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZUVic09wdGltaXplZEluc3RhbmNlcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VzZV9lYnNfb3B0aW1pemVkX2luc3RhbmNlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZUVic09wdGltaXplZEluc3RhbmNlcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzKCkge1xuICAgIHRoaXMuX3VzZUVic09wdGltaXplZEluc3RhbmNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUVic09wdGltaXplZEluc3RhbmNlcztcbiAgfVxuXG4gIC8vIGVic192b2x1bWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWJzVm9sdW1lPzogT3Bzd29ya3NSYWlsc0FwcExheWVyRWJzVm9sdW1lW107IFxuICBwdWJsaWMgZ2V0IGVic1ZvbHVtZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWJzX3ZvbHVtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic1ZvbHVtZSh2YWx1ZTogT3Bzd29ya3NSYWlsc0FwcExheWVyRWJzVm9sdW1lW10pIHtcbiAgICB0aGlzLl9lYnNWb2x1bWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFYnNWb2x1bWUoKSB7XG4gICAgdGhpcy5fZWJzVm9sdW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYnNWb2x1bWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWJzVm9sdW1lO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBfc2VydmVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hcHBTZXJ2ZXIpLFxuICAgICAgYXV0b19hc3NpZ25fZWxhc3RpY19pcHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvQXNzaWduRWxhc3RpY0lwcyksXG4gICAgICBhdXRvX2Fzc2lnbl9wdWJsaWNfaXBzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyksXG4gICAgICBhdXRvX2hlYWxpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvSGVhbGluZyksXG4gICAgICBidW5kbGVyX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1bmRsZXJWZXJzaW9uKSxcbiAgICAgIGN1c3RvbV9jb25maWd1cmVfcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fY3VzdG9tQ29uZmlndXJlUmVjaXBlcyksXG4gICAgICBjdXN0b21fZGVwbG95X3JlY2lwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMpLFxuICAgICAgY3VzdG9tX2luc3RhbmNlX3Byb2ZpbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4pLFxuICAgICAgY3VzdG9tX2pzb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2N1c3RvbUpzb24pLFxuICAgICAgY3VzdG9tX3NlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkcyksXG4gICAgICBjdXN0b21fc2V0dXBfcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzKSxcbiAgICAgIGN1c3RvbV9zaHV0ZG93bl9yZWNpcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21TaHV0ZG93blJlY2lwZXMpLFxuICAgICAgY3VzdG9tX3VuZGVwbG95X3JlY2lwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcyksXG4gICAgICBkcmFpbl9lbGJfb25fc2h1dGRvd246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24pLFxuICAgICAgZWxhc3RpY19sb2FkX2JhbGFuY2VyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbGFzdGljTG9hZEJhbGFuY2VyKSxcbiAgICAgIGluc3RhbGxfdXBkYXRlc19vbl9ib290OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5faW5zdGFsbFVwZGF0ZXNPbkJvb3QpLFxuICAgICAgaW5zdGFuY2Vfc2h1dGRvd25fdGltZW91dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VTaHV0ZG93blRpbWVvdXQpLFxuICAgICAgbWFuYWdlX2J1bmRsZXI6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9tYW5hZ2VCdW5kbGVyKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcGFzc2VuZ2VyX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Bhc3NlbmdlclZlcnNpb24pLFxuICAgICAgcnVieV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ydWJ5VmVyc2lvbiksXG4gICAgICBydWJ5Z2Vtc192ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ydWJ5Z2Vtc1ZlcnNpb24pLFxuICAgICAgc3RhY2tfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0YWNrSWQpLFxuICAgICAgc3lzdGVtX3BhY2thZ2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zeXN0ZW1QYWNrYWdlcyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHVzZV9lYnNfb3B0aW1pemVkX2luc3RhbmNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3VzZUVic09wdGltaXplZEluc3RhbmNlcyksXG4gICAgICBlYnNfdm9sdW1lOiBjZGt0Zi5saXN0TWFwcGVyKG9wc3dvcmtzUmFpbHNBcHBMYXllckVic1ZvbHVtZVRvVGVycmFmb3JtKSh0aGlzLl9lYnNWb2x1bWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==