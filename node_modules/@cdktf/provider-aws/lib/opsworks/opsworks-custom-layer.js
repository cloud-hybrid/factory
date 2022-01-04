"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksCustomLayer = exports.opsworksCustomLayerEbsVolumeToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function opsworksCustomLayerEbsVolumeToTerraform(struct) {
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
exports.opsworksCustomLayerEbsVolumeToTerraform = opsworksCustomLayerEbsVolumeToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html aws_opsworks_custom_layer}.
 *
 * @stability stable
 */
class OpsworksCustomLayer extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_custom_layer.html aws_opsworks_custom_layer} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_custom_layer',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
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
        this._name = config.name;
        this._shortName = config.shortName;
        this._stackId = config.stackId;
        this._systemPackages = config.systemPackages;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
        this._ebsVolume = config.ebsVolume;
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
    get shortName() {
        return this.getStringAttribute('short_name');
    }
    /**
     * @stability stable
     */
    set shortName(value) {
        this._shortName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get shortNameInput() {
        return this._shortName;
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
            name: cdktf.stringToTerraform(this._name),
            short_name: cdktf.stringToTerraform(this._shortName),
            stack_id: cdktf.stringToTerraform(this._stackId),
            system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
            ebs_volume: cdktf.listMapper(opsworksCustomLayerEbsVolumeToTerraform)(this._ebsVolume),
        };
    }
}
exports.OpsworksCustomLayer = OpsworksCustomLayer;
_a = JSII_RTTI_SYMBOL_1;
OpsworksCustomLayer[_a] = { fqn: "@cdktf/provider-aws.opsworks.OpsworksCustomLayer", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
OpsworksCustomLayer.tfResourceType = "aws_opsworks_custom_layer";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Bzd29ya3MtY3VzdG9tLWxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29wc3dvcmtzL29wc3dvcmtzLWN1c3RvbS1sYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQW9FL0IsU0FBZ0IsdUNBQXVDLENBQUMsTUFBcUM7SUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDL0QsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFkRCwwRkFjQzs7Ozs7O0FBSUQsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzlELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZ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VSxDQUFDLHVDQUF1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN2RixDQUFDO0lBQ0osQ0FBQzs7QUF0Y0gsa0RBdWNDOzs7QUFyY0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxrQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIE9wc3dvcmtzQ3VzdG9tTGF5ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9Bc3NpZ25FbGFzdGljSXBzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9Bc3NpZ25QdWJsaWNJcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9IZWFsaW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21Db25maWd1cmVSZWNpcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbURlcGxveVJlY2lwZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tSnNvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21TZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21TZXR1cFJlY2lwZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbVNodXRkb3duUmVjaXBlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tVW5kZXBsb3lSZWNpcGVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRyYWluRWxiT25TaHV0ZG93bj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWxhc3RpY0xvYWRCYWxhbmNlcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbGxVcGRhdGVzT25Cb290PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlU2h1dGRvd25UaW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzaG9ydE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YWNrSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3lzdGVtUGFja2FnZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzVm9sdW1lPzogT3Bzd29ya3NDdXN0b21MYXllckVic1ZvbHVtZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc0N1c3RvbUxheWVyRWJzVm9sdW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb3VudFBvaW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG51bWJlck9mRGlza3M6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByYWlkTGV2ZWw/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHN3b3Jrc0N1c3RvbUxheWVyRWJzVm9sdW1lVG9UZXJyYWZvcm0oc3RydWN0PzogT3Bzd29ya3NDdXN0b21MYXllckVic1ZvbHVtZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIG1vdW50X3BvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1vdW50UG9pbnQpLFxuICAgIG51bWJlcl9vZl9kaXNrczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5udW1iZXJPZkRpc2tzKSxcbiAgICByYWlkX2xldmVsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJhaWRMZXZlbCksXG4gICAgc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBPcHN3b3Jrc0N1c3RvbUxheWVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX29wc3dvcmtzX2N1c3RvbV9sYXllclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBPcHN3b3Jrc0N1c3RvbUxheWVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfb3Bzd29ya3NfY3VzdG9tX2xheWVyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzID0gY29uZmlnLmF1dG9Bc3NpZ25FbGFzdGljSXBzO1xuICAgIHRoaXMuX2F1dG9Bc3NpZ25QdWJsaWNJcHMgPSBjb25maWcuYXV0b0Fzc2lnblB1YmxpY0lwcztcbiAgICB0aGlzLl9hdXRvSGVhbGluZyA9IGNvbmZpZy5hdXRvSGVhbGluZztcbiAgICB0aGlzLl9jdXN0b21Db25maWd1cmVSZWNpcGVzID0gY29uZmlnLmN1c3RvbUNvbmZpZ3VyZVJlY2lwZXM7XG4gICAgdGhpcy5fY3VzdG9tRGVwbG95UmVjaXBlcyA9IGNvbmZpZy5jdXN0b21EZXBsb3lSZWNpcGVzO1xuICAgIHRoaXMuX2N1c3RvbUluc3RhbmNlUHJvZmlsZUFybiA9IGNvbmZpZy5jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm47XG4gICAgdGhpcy5fY3VzdG9tSnNvbiA9IGNvbmZpZy5jdXN0b21Kc29uO1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMgPSBjb25maWcuY3VzdG9tU2VjdXJpdHlHcm91cElkcztcbiAgICB0aGlzLl9jdXN0b21TZXR1cFJlY2lwZXMgPSBjb25maWcuY3VzdG9tU2V0dXBSZWNpcGVzO1xuICAgIHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcyA9IGNvbmZpZy5jdXN0b21TaHV0ZG93blJlY2lwZXM7XG4gICAgdGhpcy5fY3VzdG9tVW5kZXBsb3lSZWNpcGVzID0gY29uZmlnLmN1c3RvbVVuZGVwbG95UmVjaXBlcztcbiAgICB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24gPSBjb25maWcuZHJhaW5FbGJPblNodXRkb3duO1xuICAgIHRoaXMuX2VsYXN0aWNMb2FkQmFsYW5jZXIgPSBjb25maWcuZWxhc3RpY0xvYWRCYWxhbmNlcjtcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IGNvbmZpZy5pbnN0YWxsVXBkYXRlc09uQm9vdDtcbiAgICB0aGlzLl9pbnN0YW5jZVNodXRkb3duVGltZW91dCA9IGNvbmZpZy5pbnN0YW5jZVNodXRkb3duVGltZW91dDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fc2hvcnROYW1lID0gY29uZmlnLnNob3J0TmFtZTtcbiAgICB0aGlzLl9zdGFja0lkID0gY29uZmlnLnN0YWNrSWQ7XG4gICAgdGhpcy5fc3lzdGVtUGFja2FnZXMgPSBjb25maWcuc3lzdGVtUGFja2FnZXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMgPSBjb25maWcudXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzO1xuICAgIHRoaXMuX2Vic1ZvbHVtZSA9IGNvbmZpZy5lYnNWb2x1bWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0b19hc3NpZ25fZWxhc3RpY19pcHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0Fzc2lnbkVsYXN0aWNJcHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9Bc3NpZ25FbGFzdGljSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fYXNzaWduX2VsYXN0aWNfaXBzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b0Fzc2lnbkVsYXN0aWNJcHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b0Fzc2lnbkVsYXN0aWNJcHMoKSB7XG4gICAgdGhpcy5fYXV0b0Fzc2lnbkVsYXN0aWNJcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9Bc3NpZ25FbGFzdGljSXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Bc3NpZ25FbGFzdGljSXBzO1xuICB9XG5cbiAgLy8gYXV0b19hc3NpZ25fcHVibGljX2lwcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvQXNzaWduUHVibGljSXBzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhdXRvQXNzaWduUHVibGljSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fYXNzaWduX3B1YmxpY19pcHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvQXNzaWduUHVibGljSXBzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b0Fzc2lnblB1YmxpY0lwcygpIHtcbiAgICB0aGlzLl9hdXRvQXNzaWduUHVibGljSXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvQXNzaWduUHVibGljSXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Bc3NpZ25QdWJsaWNJcHM7XG4gIH1cblxuICAvLyBhdXRvX2hlYWxpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0hlYWxpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9IZWFsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9faGVhbGluZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9IZWFsaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvSGVhbGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dG9IZWFsaW5nKCkge1xuICAgIHRoaXMuX2F1dG9IZWFsaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvSGVhbGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvSGVhbGluZztcbiAgfVxuXG4gIC8vIGN1c3RvbV9jb25maWd1cmVfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21Db25maWd1cmVSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUNvbmZpZ3VyZVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2NvbmZpZ3VyZV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21Db25maWd1cmVSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21Db25maWd1cmVSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbUNvbmZpZ3VyZVJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ29uZmlndXJlUmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9kZXBsb3lfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21EZXBsb3lSZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbURlcGxveVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX2RlcGxveV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21EZXBsb3lSZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21EZXBsb3lSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbURlcGxveVJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbURlcGxveVJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRGVwbG95UmVjaXBlcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGN1c3RvbUluc3RhbmNlUHJvZmlsZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21JbnN0YW5jZVByb2ZpbGVBcm4oKSB7XG4gICAgdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21JbnN0YW5jZVByb2ZpbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuO1xuICB9XG5cbiAgLy8gY3VzdG9tX2pzb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tSnNvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tSnNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2N1c3RvbV9qc29uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21Kc29uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21Kc29uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tSnNvbigpIHtcbiAgICB0aGlzLl9jdXN0b21Kc29uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21Kc29uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUpzb247XG4gIH1cblxuICAvLyBjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjdXN0b21fc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21TZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21TZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVNlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tU2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIGN1c3RvbV9zZXR1cF9yZWNpcGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVNldHVwUmVjaXBlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBjdXN0b21TZXR1cFJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY3VzdG9tX3NldHVwX3JlY2lwZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVNldHVwUmVjaXBlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jdXN0b21TZXR1cFJlY2lwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21TZXR1cFJlY2lwZXMoKSB7XG4gICAgdGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21TZXR1cFJlY2lwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tU2V0dXBSZWNpcGVzO1xuICB9XG5cbiAgLy8gY3VzdG9tX3NodXRkb3duX3JlY2lwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3VzdG9tU2h1dGRvd25SZWNpcGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGN1c3RvbVNodXRkb3duUmVjaXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdjdXN0b21fc2h1dGRvd25fcmVjaXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3VzdG9tU2h1dGRvd25SZWNpcGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2N1c3RvbVNodXRkb3duUmVjaXBlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbVNodXRkb3duUmVjaXBlcygpIHtcbiAgICB0aGlzLl9jdXN0b21TaHV0ZG93blJlY2lwZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVNodXRkb3duUmVjaXBlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TaHV0ZG93blJlY2lwZXM7XG4gIH1cblxuICAvLyBjdXN0b21fdW5kZXBsb3lfcmVjaXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21VbmRlcGxveVJlY2lwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tVW5kZXBsb3lSZWNpcGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2N1c3RvbV91bmRlcGxveV9yZWNpcGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBjdXN0b21VbmRlcGxveVJlY2lwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY3VzdG9tVW5kZXBsb3lSZWNpcGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tVW5kZXBsb3lSZWNpcGVzKCkge1xuICAgIHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tVW5kZXBsb3lSZWNpcGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbVVuZGVwbG95UmVjaXBlcztcbiAgfVxuXG4gIC8vIGRyYWluX2VsYl9vbl9zaHV0ZG93biAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kcmFpbkVsYk9uU2h1dGRvd24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRyYWluRWxiT25TaHV0ZG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkcmFpbl9lbGJfb25fc2h1dGRvd24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkcmFpbkVsYk9uU2h1dGRvd24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RyYWluRWxiT25TaHV0ZG93biA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERyYWluRWxiT25TaHV0ZG93bigpIHtcbiAgICB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRyYWluRWxiT25TaHV0ZG93bklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kcmFpbkVsYk9uU2h1dGRvd247XG4gIH1cblxuICAvLyBlbGFzdGljX2xvYWRfYmFsYW5jZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0xvYWRCYWxhbmNlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0xvYWRCYWxhbmNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VsYXN0aWNfbG9hZF9iYWxhbmNlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZWxhc3RpY0xvYWRCYWxhbmNlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNMb2FkQmFsYW5jZXIoKSB7XG4gICAgdGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0xvYWRCYWxhbmNlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljTG9hZEJhbGFuY2VyO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbGxfdXBkYXRlc19vbl9ib290IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbGxVcGRhdGVzT25Cb290PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbGxVcGRhdGVzT25Cb290KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbGxVcGRhdGVzT25Cb290KCkge1xuICAgIHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3NodXRkb3duX3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VTaHV0ZG93blRpbWVvdXQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlU2h1dGRvd25UaW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW5zdGFuY2Vfc2h1dGRvd25fdGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VTaHV0ZG93blRpbWVvdXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VTaHV0ZG93blRpbWVvdXQoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VTaHV0ZG93blRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlU2h1dGRvd25UaW1lb3V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBzaG9ydF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Nob3J0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2hvcnROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2hvcnRfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2hvcnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG9ydE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2hvcnROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3J0TmFtZTtcbiAgfVxuXG4gIC8vIHN0YWNrX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N0YWNrSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YWNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGFja19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhY2tJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhY2tJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFja0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrSWQ7XG4gIH1cblxuICAvLyBzeXN0ZW1fcGFja2FnZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3lzdGVtUGFja2FnZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc3lzdGVtUGFja2FnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3lzdGVtX3BhY2thZ2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzeXN0ZW1QYWNrYWdlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zeXN0ZW1QYWNrYWdlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN5c3RlbVBhY2thZ2VzKCkge1xuICAgIHRoaXMuX3N5c3RlbVBhY2thZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzeXN0ZW1QYWNrYWdlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zeXN0ZW1QYWNrYWdlcztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB1c2VfZWJzX29wdGltaXplZF9pbnN0YW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB1c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2Vic19vcHRpbWl6ZWRfaW5zdGFuY2VzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMoKSB7XG4gICAgdGhpcy5fdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlRWJzT3B0aW1pemVkSW5zdGFuY2VzO1xuICB9XG5cbiAgLy8gZWJzX3ZvbHVtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNWb2x1bWU/OiBPcHN3b3Jrc0N1c3RvbUxheWVyRWJzVm9sdW1lW107IFxuICBwdWJsaWMgZ2V0IGVic1ZvbHVtZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWJzX3ZvbHVtZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic1ZvbHVtZSh2YWx1ZTogT3Bzd29ya3NDdXN0b21MYXllckVic1ZvbHVtZVtdKSB7XG4gICAgdGhpcy5fZWJzVm9sdW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWJzVm9sdW1lKCkge1xuICAgIHRoaXMuX2Vic1ZvbHVtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWJzVm9sdW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic1ZvbHVtZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXV0b19hc3NpZ25fZWxhc3RpY19pcHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvQXNzaWduRWxhc3RpY0lwcyksXG4gICAgICBhdXRvX2Fzc2lnbl9wdWJsaWNfaXBzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXV0b0Fzc2lnblB1YmxpY0lwcyksXG4gICAgICBhdXRvX2hlYWxpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvSGVhbGluZyksXG4gICAgICBjdXN0b21fY29uZmlndXJlX3JlY2lwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbUNvbmZpZ3VyZVJlY2lwZXMpLFxuICAgICAgY3VzdG9tX2RlcGxveV9yZWNpcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21EZXBsb3lSZWNpcGVzKSxcbiAgICAgIGN1c3RvbV9pbnN0YW5jZV9wcm9maWxlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY3VzdG9tSW5zdGFuY2VQcm9maWxlQXJuKSxcbiAgICAgIGN1c3RvbV9qc29uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jdXN0b21Kc29uKSxcbiAgICAgIGN1c3RvbV9zZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbVNlY3VyaXR5R3JvdXBJZHMpLFxuICAgICAgY3VzdG9tX3NldHVwX3JlY2lwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX2N1c3RvbVNldHVwUmVjaXBlcyksXG4gICAgICBjdXN0b21fc2h1dGRvd25fcmVjaXBlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fY3VzdG9tU2h1dGRvd25SZWNpcGVzKSxcbiAgICAgIGN1c3RvbV91bmRlcGxveV9yZWNpcGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9jdXN0b21VbmRlcGxveVJlY2lwZXMpLFxuICAgICAgZHJhaW5fZWxiX29uX3NodXRkb3duOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZHJhaW5FbGJPblNodXRkb3duKSxcbiAgICAgIGVsYXN0aWNfbG9hZF9iYWxhbmNlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZWxhc3RpY0xvYWRCYWxhbmNlciksXG4gICAgICBpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290KSxcbiAgICAgIGluc3RhbmNlX3NodXRkb3duX3RpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlU2h1dGRvd25UaW1lb3V0KSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgc2hvcnRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2hvcnROYW1lKSxcbiAgICAgIHN0YWNrX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGFja0lkKSxcbiAgICAgIHN5c3RlbV9wYWNrYWdlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc3lzdGVtUGFja2FnZXMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICB1c2VfZWJzX29wdGltaXplZF9pbnN0YW5jZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl91c2VFYnNPcHRpbWl6ZWRJbnN0YW5jZXMpLFxuICAgICAgZWJzX3ZvbHVtZTogY2RrdGYubGlzdE1hcHBlcihvcHN3b3Jrc0N1c3RvbUxheWVyRWJzVm9sdW1lVG9UZXJyYWZvcm0pKHRoaXMuX2Vic1ZvbHVtZSksXG4gICAgfTtcbiAgfVxufVxuIl19