"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsEc2InstanceType = exports.dataAwsEc2InstanceTypeInstanceDisksToTerraform = exports.dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform = exports.dataAwsEc2InstanceTypeGpusToTerraform = exports.dataAwsEc2InstanceTypeFpgasToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dataAwsEc2InstanceTypeFpgasToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsEc2InstanceTypeFpgasToTerraform = dataAwsEc2InstanceTypeFpgasToTerraform;
function dataAwsEc2InstanceTypeGpusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsEc2InstanceTypeGpusToTerraform = dataAwsEc2InstanceTypeGpusToTerraform;
function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform = dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform;
function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
exports.dataAwsEc2InstanceTypeInstanceDisksToTerraform = dataAwsEc2InstanceTypeInstanceDisksToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type}.
 *
 * @stability stable
 */
class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type.html aws_ec2_instance_type} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_instance_type',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._defaultCores = config.defaultCores;
        this._defaultThreadsPerCore = config.defaultThreadsPerCore;
        this._hypervisor = config.hypervisor;
        this._instanceType = config.instanceType;
        this._maximumIpv6AddressesPerInterface = config.maximumIpv6AddressesPerInterface;
        this._totalFpgaMemory = config.totalFpgaMemory;
        this._totalGpuMemory = config.totalGpuMemory;
        this._totalInstanceStorage = config.totalInstanceStorage;
        this._fpgas = config.fpgas;
        this._gpus = config.gpus;
        this._inferenceAccelerators = config.inferenceAccelerators;
        this._instanceDisks = config.instanceDisks;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // auto_recovery_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get autoRecoverySupported() {
        return this.getBooleanAttribute('auto_recovery_supported');
    }
    // bare_metal - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get bareMetal() {
        return this.getBooleanAttribute('bare_metal');
    }
    // burstable_performance_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get burstablePerformanceSupported() {
        return this.getBooleanAttribute('burstable_performance_supported');
    }
    // current_generation - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get currentGeneration() {
        return this.getBooleanAttribute('current_generation');
    }
    // dedicated_hosts_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dedicatedHostsSupported() {
        return this.getBooleanAttribute('dedicated_hosts_supported');
    }
    /**
     * @stability stable
     */
    get defaultCores() {
        return this.getNumberAttribute('default_cores');
    }
    /**
     * @stability stable
     */
    set defaultCores(value) {
        this._defaultCores = value;
    }
    /**
     * @stability stable
     */
    resetDefaultCores() {
        this._defaultCores = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultCoresInput() {
        return this._defaultCores;
    }
    /**
     * @stability stable
     */
    get defaultThreadsPerCore() {
        return this.getNumberAttribute('default_threads_per_core');
    }
    /**
     * @stability stable
     */
    set defaultThreadsPerCore(value) {
        this._defaultThreadsPerCore = value;
    }
    /**
     * @stability stable
     */
    resetDefaultThreadsPerCore() {
        this._defaultThreadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultThreadsPerCoreInput() {
        return this._defaultThreadsPerCore;
    }
    // default_vcpus - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultVcpus() {
        return this.getNumberAttribute('default_vcpus');
    }
    // ebs_encryption_support - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsEncryptionSupport() {
        return this.getStringAttribute('ebs_encryption_support');
    }
    // ebs_nvme_support - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsNvmeSupport() {
        return this.getStringAttribute('ebs_nvme_support');
    }
    // ebs_optimized_support - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsOptimizedSupport() {
        return this.getStringAttribute('ebs_optimized_support');
    }
    // ebs_performance_baseline_bandwidth - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsPerformanceBaselineBandwidth() {
        return this.getNumberAttribute('ebs_performance_baseline_bandwidth');
    }
    // ebs_performance_baseline_iops - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsPerformanceBaselineIops() {
        return this.getNumberAttribute('ebs_performance_baseline_iops');
    }
    // ebs_performance_baseline_throughput - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsPerformanceBaselineThroughput() {
        return this.getNumberAttribute('ebs_performance_baseline_throughput');
    }
    // ebs_performance_maximum_bandwidth - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsPerformanceMaximumBandwidth() {
        return this.getNumberAttribute('ebs_performance_maximum_bandwidth');
    }
    // ebs_performance_maximum_iops - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsPerformanceMaximumIops() {
        return this.getNumberAttribute('ebs_performance_maximum_iops');
    }
    // ebs_performance_maximum_throughput - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsPerformanceMaximumThroughput() {
        return this.getNumberAttribute('ebs_performance_maximum_throughput');
    }
    // efa_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get efaSupported() {
        return this.getBooleanAttribute('efa_supported');
    }
    // ena_support - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enaSupport() {
        return this.getStringAttribute('ena_support');
    }
    // encryption_in_transit_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get encryptionInTransitSupported() {
        return this.getBooleanAttribute('encryption_in_transit_supported');
    }
    // free_tier_eligible - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get freeTierEligible() {
        return this.getBooleanAttribute('free_tier_eligible');
    }
    // hibernation_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hibernationSupported() {
        return this.getBooleanAttribute('hibernation_supported');
    }
    /**
     * @stability stable
     */
    get hypervisor() {
        return this.getStringAttribute('hypervisor');
    }
    /**
     * @stability stable
     */
    set hypervisor(value) {
        this._hypervisor = value;
    }
    /**
     * @stability stable
     */
    resetHypervisor() {
        this._hypervisor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hypervisorInput() {
        return this._hypervisor;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_storage_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceStorageSupported() {
        return this.getBooleanAttribute('instance_storage_supported');
    }
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    /**
     * @stability stable
     */
    set instanceType(value) {
        this._instanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeInput() {
        return this._instanceType;
    }
    // ipv6_supported - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv6Supported() {
        return this.getBooleanAttribute('ipv6_supported');
    }
    // maximum_ipv4_addresses_per_interface - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maximumIpv4AddressesPerInterface() {
        return this.getNumberAttribute('maximum_ipv4_addresses_per_interface');
    }
    /**
     * @stability stable
     */
    get maximumIpv6AddressesPerInterface() {
        return this.getNumberAttribute('maximum_ipv6_addresses_per_interface');
    }
    /**
     * @stability stable
     */
    set maximumIpv6AddressesPerInterface(value) {
        this._maximumIpv6AddressesPerInterface = value;
    }
    /**
     * @stability stable
     */
    resetMaximumIpv6AddressesPerInterface() {
        this._maximumIpv6AddressesPerInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumIpv6AddressesPerInterfaceInput() {
        return this._maximumIpv6AddressesPerInterface;
    }
    // maximum_network_interfaces - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maximumNetworkInterfaces() {
        return this.getNumberAttribute('maximum_network_interfaces');
    }
    // memory_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get memorySize() {
        return this.getNumberAttribute('memory_size');
    }
    // network_performance - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get networkPerformance() {
        return this.getStringAttribute('network_performance');
    }
    // supported_architectures - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedArchitectures() {
        return this.getListAttribute('supported_architectures');
    }
    // supported_placement_strategies - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedPlacementStrategies() {
        return this.getListAttribute('supported_placement_strategies');
    }
    // supported_root_device_types - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedRootDeviceTypes() {
        return this.getListAttribute('supported_root_device_types');
    }
    // supported_usages_classes - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedUsagesClasses() {
        return this.getListAttribute('supported_usages_classes');
    }
    // supported_virtualization_types - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedVirtualizationTypes() {
        return this.getListAttribute('supported_virtualization_types');
    }
    // sustained_clock_speed - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sustainedClockSpeed() {
        return this.getNumberAttribute('sustained_clock_speed');
    }
    /**
     * @stability stable
     */
    get totalFpgaMemory() {
        return this.getNumberAttribute('total_fpga_memory');
    }
    /**
     * @stability stable
     */
    set totalFpgaMemory(value) {
        this._totalFpgaMemory = value;
    }
    /**
     * @stability stable
     */
    resetTotalFpgaMemory() {
        this._totalFpgaMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get totalFpgaMemoryInput() {
        return this._totalFpgaMemory;
    }
    /**
     * @stability stable
     */
    get totalGpuMemory() {
        return this.getNumberAttribute('total_gpu_memory');
    }
    /**
     * @stability stable
     */
    set totalGpuMemory(value) {
        this._totalGpuMemory = value;
    }
    /**
     * @stability stable
     */
    resetTotalGpuMemory() {
        this._totalGpuMemory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get totalGpuMemoryInput() {
        return this._totalGpuMemory;
    }
    /**
     * @stability stable
     */
    get totalInstanceStorage() {
        return this.getNumberAttribute('total_instance_storage');
    }
    /**
     * @stability stable
     */
    set totalInstanceStorage(value) {
        this._totalInstanceStorage = value;
    }
    /**
     * @stability stable
     */
    resetTotalInstanceStorage() {
        this._totalInstanceStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get totalInstanceStorageInput() {
        return this._totalInstanceStorage;
    }
    // valid_cores - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get validCores() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('valid_cores');
    }
    // valid_threads_per_core - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get validThreadsPerCore() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('valid_threads_per_core');
    }
    /**
     * @stability stable
     */
    get fpgas() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('fpgas');
    }
    /**
     * @stability stable
     */
    set fpgas(value) {
        this._fpgas = value;
    }
    /**
     * @stability stable
     */
    resetFpgas() {
        this._fpgas = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fpgasInput() {
        return this._fpgas;
    }
    /**
     * @stability stable
     */
    get gpus() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('gpus');
    }
    /**
     * @stability stable
     */
    set gpus(value) {
        this._gpus = value;
    }
    /**
     * @stability stable
     */
    resetGpus() {
        this._gpus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gpusInput() {
        return this._gpus;
    }
    /**
     * @stability stable
     */
    get inferenceAccelerators() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('inference_accelerators');
    }
    /**
     * @stability stable
     */
    set inferenceAccelerators(value) {
        this._inferenceAccelerators = value;
    }
    /**
     * @stability stable
     */
    resetInferenceAccelerators() {
        this._inferenceAccelerators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inferenceAcceleratorsInput() {
        return this._inferenceAccelerators;
    }
    /**
     * @stability stable
     */
    get instanceDisks() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('instance_disks');
    }
    /**
     * @stability stable
     */
    set instanceDisks(value) {
        this._instanceDisks = value;
    }
    /**
     * @stability stable
     */
    resetInstanceDisks() {
        this._instanceDisks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceDisksInput() {
        return this._instanceDisks;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            default_cores: cdktf.numberToTerraform(this._defaultCores),
            default_threads_per_core: cdktf.numberToTerraform(this._defaultThreadsPerCore),
            hypervisor: cdktf.stringToTerraform(this._hypervisor),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            maximum_ipv6_addresses_per_interface: cdktf.numberToTerraform(this._maximumIpv6AddressesPerInterface),
            total_fpga_memory: cdktf.numberToTerraform(this._totalFpgaMemory),
            total_gpu_memory: cdktf.numberToTerraform(this._totalGpuMemory),
            total_instance_storage: cdktf.numberToTerraform(this._totalInstanceStorage),
            fpgas: cdktf.listMapper(dataAwsEc2InstanceTypeFpgasToTerraform)(this._fpgas),
            gpus: cdktf.listMapper(dataAwsEc2InstanceTypeGpusToTerraform)(this._gpus),
            inference_accelerators: cdktf.listMapper(dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform)(this._inferenceAccelerators),
            instance_disks: cdktf.listMapper(dataAwsEc2InstanceTypeInstanceDisksToTerraform)(this._instanceDisks),
        };
    }
}
exports.DataAwsEc2InstanceType = DataAwsEc2InstanceType;
_a = JSII_RTTI_SYMBOL_1;
DataAwsEc2InstanceType[_a] = { fqn: "@cdktf/provider-aws.ec2.DataAwsEc2InstanceType", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsEc2InstanceType.tfResourceType = "aws_ec2_instance_type";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWMyLWluc3RhbmNlLXR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWMyL2RhdGEtYXdzLWVjMi1pbnN0YW5jZS10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0MvQixTQUFnQixzQ0FBc0MsQ0FBQyxNQUFvQztJQUN6RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTyxFQUNOLENBQUE7QUFDSCxDQUFDO0FBUEQsd0ZBT0M7QUFLRCxTQUFnQixxQ0FBcUMsQ0FBQyxNQUFtQztJQUN2RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTyxFQUNOLENBQUE7QUFDSCxDQUFDO0FBUEQsc0ZBT0M7QUFLRCxTQUFnQixzREFBc0QsQ0FBQyxNQUFvRDtJQUN6SCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTyxFQUNOLENBQUE7QUFDSCxDQUFDO0FBUEQsd0hBT0M7QUFL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IHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzRWMySW5zdGFuY2VUeXBlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0Q29yZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVmYXVsdFRocmVhZHNQZXJDb3JlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHlwZXJ2aXNvcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3RhbEZwZ2FNZW1vcnk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3RhbEdwdU1lbW9yeT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRvdGFsSW5zdGFuY2VTdG9yYWdlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmcGdhcz86IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVGcGdhc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncHVzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUdwdXNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5mZXJlbmNlQWNjZWxlcmF0b3JzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluZmVyZW5jZUFjY2VsZXJhdG9yc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZURpc2tzPzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3NbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUZwZ2FzIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NFYzJJbnN0YW5jZVR5cGVGcGdhc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVGcGdhcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUdwdXMge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0VjMkluc3RhbmNlVHlwZUdwdXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlR3B1cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluZmVyZW5jZUFjY2VsZXJhdG9ycyB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzRWMySW5zdGFuY2VUeXBlSW5mZXJlbmNlQWNjZWxlcmF0b3JzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluZmVyZW5jZUFjY2VsZXJhdG9ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3Mge1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c0VjMkluc3RhbmNlVHlwZUluc3RhbmNlRGlza3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlSW5zdGFuY2VEaXNrcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0VjMkluc3RhbmNlVHlwZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2VjMl9pbnN0YW5jZV90eXBlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWMyX2luc3RhbmNlX3R5cGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGVmYXVsdENvcmVzID0gY29uZmlnLmRlZmF1bHRDb3JlcztcbiAgICB0aGlzLl9kZWZhdWx0VGhyZWFkc1BlckNvcmUgPSBjb25maWcuZGVmYXVsdFRocmVhZHNQZXJDb3JlO1xuICAgIHRoaXMuX2h5cGVydmlzb3IgPSBjb25maWcuaHlwZXJ2aXNvcjtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSBjb25maWcuaW5zdGFuY2VUeXBlO1xuICAgIHRoaXMuX21heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlID0gY29uZmlnLm1heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlO1xuICAgIHRoaXMuX3RvdGFsRnBnYU1lbW9yeSA9IGNvbmZpZy50b3RhbEZwZ2FNZW1vcnk7XG4gICAgdGhpcy5fdG90YWxHcHVNZW1vcnkgPSBjb25maWcudG90YWxHcHVNZW1vcnk7XG4gICAgdGhpcy5fdG90YWxJbnN0YW5jZVN0b3JhZ2UgPSBjb25maWcudG90YWxJbnN0YW5jZVN0b3JhZ2U7XG4gICAgdGhpcy5fZnBnYXMgPSBjb25maWcuZnBnYXM7XG4gICAgdGhpcy5fZ3B1cyA9IGNvbmZpZy5ncHVzO1xuICAgIHRoaXMuX2luZmVyZW5jZUFjY2VsZXJhdG9ycyA9IGNvbmZpZy5pbmZlcmVuY2VBY2NlbGVyYXRvcnM7XG4gICAgdGhpcy5faW5zdGFuY2VEaXNrcyA9IGNvbmZpZy5pbnN0YW5jZURpc2tzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhdXRvX3JlY292ZXJ5X3N1cHBvcnRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dG9SZWNvdmVyeVN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX3JlY292ZXJ5X3N1cHBvcnRlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGJhcmVfbWV0YWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBiYXJlTWV0YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYmFyZV9tZXRhbCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGJ1cnN0YWJsZV9wZXJmb3JtYW5jZV9zdXBwb3J0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidXJzdGFibGVQZXJmb3JtYW5jZVN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdidXJzdGFibGVfcGVyZm9ybWFuY2Vfc3VwcG9ydGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY3VycmVudF9nZW5lcmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VycmVudEdlbmVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY3VycmVudF9nZW5lcmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGVkaWNhdGVkX2hvc3RzX3N1cHBvcnRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZGljYXRlZEhvc3RzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlZGljYXRlZF9ob3N0c19zdXBwb3J0ZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZWZhdWx0X2NvcmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdENvcmVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkZWZhdWx0Q29yZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkZWZhdWx0X2NvcmVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZhdWx0Q29yZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlZmF1bHRDb3JlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlZmF1bHRDb3JlcygpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q29yZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRDb3Jlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q29yZXM7XG4gIH1cblxuICAvLyBkZWZhdWx0X3RocmVhZHNfcGVyX2NvcmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZhdWx0VGhyZWFkc1BlckNvcmU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRUaHJlYWRzUGVyQ29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RlZmF1bHRfdGhyZWFkc19wZXJfY29yZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFRocmVhZHNQZXJDb3JlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZWZhdWx0VGhyZWFkc1BlckNvcmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0VGhyZWFkc1BlckNvcmUoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFRocmVhZHNQZXJDb3JlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0VGhyZWFkc1BlckNvcmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFRocmVhZHNQZXJDb3JlO1xuICB9XG5cbiAgLy8gZGVmYXVsdF92Y3B1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmF1bHRWY3B1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RlZmF1bHRfdmNwdXMnKTtcbiAgfVxuXG4gIC8vIGVic19lbmNyeXB0aW9uX3N1cHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNFbmNyeXB0aW9uU3VwcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vic19lbmNyeXB0aW9uX3N1cHBvcnQnKTtcbiAgfVxuXG4gIC8vIGVic19udm1lX3N1cHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNOdm1lU3VwcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vic19udm1lX3N1cHBvcnQnKTtcbiAgfVxuXG4gIC8vIGVic19vcHRpbWl6ZWRfc3VwcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlYnNfb3B0aW1pemVkX3N1cHBvcnQnKTtcbiAgfVxuXG4gIC8vIGVic19wZXJmb3JtYW5jZV9iYXNlbGluZV9iYW5kd2lkdGggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNQZXJmb3JtYW5jZUJhc2VsaW5lQmFuZHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZWJzX3BlcmZvcm1hbmNlX2Jhc2VsaW5lX2JhbmR3aWR0aCcpO1xuICB9XG5cbiAgLy8gZWJzX3BlcmZvcm1hbmNlX2Jhc2VsaW5lX2lvcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYnNQZXJmb3JtYW5jZUJhc2VsaW5lSW9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Vic19wZXJmb3JtYW5jZV9iYXNlbGluZV9pb3BzJyk7XG4gIH1cblxuICAvLyBlYnNfcGVyZm9ybWFuY2VfYmFzZWxpbmVfdGhyb3VnaHB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic1BlcmZvcm1hbmNlQmFzZWxpbmVUaHJvdWdocHV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZWJzX3BlcmZvcm1hbmNlX2Jhc2VsaW5lX3Rocm91Z2hwdXQnKTtcbiAgfVxuXG4gIC8vIGVic19wZXJmb3JtYW5jZV9tYXhpbXVtX2JhbmR3aWR0aCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic1BlcmZvcm1hbmNlTWF4aW11bUJhbmR3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Vic19wZXJmb3JtYW5jZV9tYXhpbXVtX2JhbmR3aWR0aCcpO1xuICB9XG5cbiAgLy8gZWJzX3BlcmZvcm1hbmNlX21heGltdW1faW9wcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic1BlcmZvcm1hbmNlTWF4aW11bUlvcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdlYnNfcGVyZm9ybWFuY2VfbWF4aW11bV9pb3BzJyk7XG4gIH1cblxuICAvLyBlYnNfcGVyZm9ybWFuY2VfbWF4aW11bV90aHJvdWdocHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWJzUGVyZm9ybWFuY2VNYXhpbXVtVGhyb3VnaHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Vic19wZXJmb3JtYW5jZV9tYXhpbXVtX3Rocm91Z2hwdXQnKTtcbiAgfVxuXG4gIC8vIGVmYV9zdXBwb3J0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlZmFTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZWZhX3N1cHBvcnRlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVuYV9zdXBwb3J0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hU3VwcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuYV9zdXBwb3J0Jyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2luX3RyYW5zaXRfc3VwcG9ydGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkluVHJhbnNpdFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmNyeXB0aW9uX2luX3RyYW5zaXRfc3VwcG9ydGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZnJlZV90aWVyX2VsaWdpYmxlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZnJlZVRpZXJFbGlnaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmcmVlX3RpZXJfZWxpZ2libGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBoaWJlcm5hdGlvbl9zdXBwb3J0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoaWJlcm5hdGlvblN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdoaWJlcm5hdGlvbl9zdXBwb3J0ZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBoeXBlcnZpc29yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHlwZXJ2aXNvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHlwZXJ2aXNvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h5cGVydmlzb3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh5cGVydmlzb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2h5cGVydmlzb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIeXBlcnZpc29yKCkge1xuICAgIHRoaXMuX2h5cGVydmlzb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh5cGVydmlzb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faHlwZXJ2aXNvcjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9zdG9yYWdlX3N1cHBvcnRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlU3RvcmFnZVN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbnN0YW5jZV9zdG9yYWdlX3N1cHBvcnRlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gaXB2Nl9zdXBwb3J0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcHY2U3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2lwdjZfc3VwcG9ydGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWF4aW11bV9pcHY0X2FkZHJlc3Nlc19wZXJfaW50ZXJmYWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4aW11bUlwdjRBZGRyZXNzZXNQZXJJbnRlcmZhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX2lwdjRfYWRkcmVzc2VzX3Blcl9pbnRlcmZhY2UnKTtcbiAgfVxuXG4gIC8vIG1heGltdW1faXB2Nl9hZGRyZXNzZXNfcGVyX2ludGVyZmFjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtYXhpbXVtSXB2NkFkZHJlc3Nlc1BlckludGVyZmFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heGltdW1faXB2Nl9hZGRyZXNzZXNfcGVyX2ludGVyZmFjZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bUlwdjZBZGRyZXNzZXNQZXJJbnRlcmZhY2UodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4aW11bUlwdjZBZGRyZXNzZXNQZXJJbnRlcmZhY2UoKSB7XG4gICAgdGhpcy5fbWF4aW11bUlwdjZBZGRyZXNzZXNQZXJJbnRlcmZhY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlO1xuICB9XG5cbiAgLy8gbWF4aW11bV9uZXR3b3JrX2ludGVyZmFjZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhpbXVtTmV0d29ya0ludGVyZmFjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhpbXVtX25ldHdvcmtfaW50ZXJmYWNlcycpO1xuICB9XG5cbiAgLy8gbWVtb3J5X3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZW1vcnlTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWVtb3J5X3NpemUnKTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfcGVyZm9ybWFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrUGVyZm9ybWFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX3BlcmZvcm1hbmNlJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfYXJjaGl0ZWN0dXJlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZEFyY2hpdGVjdHVyZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX2FyY2hpdGVjdHVyZXMnKTtcbiAgfVxuXG4gIC8vIHN1cHBvcnRlZF9wbGFjZW1lbnRfc3RyYXRlZ2llcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZFBsYWNlbWVudFN0cmF0ZWdpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX3BsYWNlbWVudF9zdHJhdGVnaWVzJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfcm9vdF9kZXZpY2VfdHlwZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRSb290RGV2aWNlVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX3Jvb3RfZGV2aWNlX3R5cGVzJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfdXNhZ2VzX2NsYXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRVc2FnZXNDbGFzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1cHBvcnRlZF91c2FnZXNfY2xhc3NlcycpO1xuICB9XG5cbiAgLy8gc3VwcG9ydGVkX3ZpcnR1YWxpemF0aW9uX3R5cGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VwcG9ydGVkVmlydHVhbGl6YXRpb25UeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXBwb3J0ZWRfdmlydHVhbGl6YXRpb25fdHlwZXMnKTtcbiAgfVxuXG4gIC8vIHN1c3RhaW5lZF9jbG9ja19zcGVlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1c3RhaW5lZENsb2NrU3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzdXN0YWluZWRfY2xvY2tfc3BlZWQnKTtcbiAgfVxuXG4gIC8vIHRvdGFsX2ZwZ2FfbWVtb3J5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdG90YWxGcGdhTWVtb3J5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0b3RhbEZwZ2FNZW1vcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0b3RhbF9mcGdhX21lbW9yeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdG90YWxGcGdhTWVtb3J5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbEZwZ2FNZW1vcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUb3RhbEZwZ2FNZW1vcnkoKSB7XG4gICAgdGhpcy5fdG90YWxGcGdhTWVtb3J5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0b3RhbEZwZ2FNZW1vcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxGcGdhTWVtb3J5O1xuICB9XG5cbiAgLy8gdG90YWxfZ3B1X21lbW9yeSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RvdGFsR3B1TWVtb3J5PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0b3RhbEdwdU1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RvdGFsX2dwdV9tZW1vcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRvdGFsR3B1TWVtb3J5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbEdwdU1lbW9yeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRvdGFsR3B1TWVtb3J5KCkge1xuICAgIHRoaXMuX3RvdGFsR3B1TWVtb3J5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0b3RhbEdwdU1lbW9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEdwdU1lbW9yeTtcbiAgfVxuXG4gIC8vIHRvdGFsX2luc3RhbmNlX3N0b3JhZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90b3RhbEluc3RhbmNlU3RvcmFnZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdG90YWxJbnN0YW5jZVN0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0b3RhbF9pbnN0YW5jZV9zdG9yYWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0b3RhbEluc3RhbmNlU3RvcmFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxJbnN0YW5jZVN0b3JhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUb3RhbEluc3RhbmNlU3RvcmFnZSgpIHtcbiAgICB0aGlzLl90b3RhbEluc3RhbmNlU3RvcmFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdG90YWxJbnN0YW5jZVN0b3JhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJbnN0YW5jZVN0b3JhZ2U7XG4gIH1cblxuICAvLyB2YWxpZF9jb3JlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbGlkQ29yZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhbGlkX2NvcmVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdmFsaWRfdGhyZWFkc19wZXJfY29yZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbGlkVGhyZWFkc1BlckNvcmUoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZhbGlkX3RocmVhZHNfcGVyX2NvcmUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBmcGdhcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mcGdhcz86IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVGcGdhc1tdOyBcbiAgcHVibGljIGdldCBmcGdhcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZnBnYXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmcGdhcyh2YWx1ZTogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUZwZ2FzW10pIHtcbiAgICB0aGlzLl9mcGdhcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZwZ2FzKCkge1xuICAgIHRoaXMuX2ZwZ2FzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmcGdhc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mcGdhcztcbiAgfVxuXG4gIC8vIGdwdXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3B1cz86IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVHcHVzW107IFxuICBwdWJsaWMgZ2V0IGdwdXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dwdXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBncHVzKHZhbHVlOiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlR3B1c1tdKSB7XG4gICAgdGhpcy5fZ3B1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdwdXMoKSB7XG4gICAgdGhpcy5fZ3B1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3B1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ncHVzO1xuICB9XG5cbiAgLy8gaW5mZXJlbmNlX2FjY2VsZXJhdG9ycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmZlcmVuY2VBY2NlbGVyYXRvcnM/OiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlSW5mZXJlbmNlQWNjZWxlcmF0b3JzW107IFxuICBwdWJsaWMgZ2V0IGluZmVyZW5jZUFjY2VsZXJhdG9ycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5mZXJlbmNlX2FjY2VsZXJhdG9ycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluZmVyZW5jZUFjY2VsZXJhdG9ycyh2YWx1ZTogRGF0YUF3c0VjMkluc3RhbmNlVHlwZUluZmVyZW5jZUFjY2VsZXJhdG9yc1tdKSB7XG4gICAgdGhpcy5faW5mZXJlbmNlQWNjZWxlcmF0b3JzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5mZXJlbmNlQWNjZWxlcmF0b3JzKCkge1xuICAgIHRoaXMuX2luZmVyZW5jZUFjY2VsZXJhdG9ycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5mZXJlbmNlQWNjZWxlcmF0b3JzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZmVyZW5jZUFjY2VsZXJhdG9ycztcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2Rpc2tzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlRGlza3M/OiBEYXRhQXdzRWMySW5zdGFuY2VUeXBlSW5zdGFuY2VEaXNrc1tdOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZURpc2tzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnN0YW5jZV9kaXNrcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlRGlza3ModmFsdWU6IERhdGFBd3NFYzJJbnN0YW5jZVR5cGVJbnN0YW5jZURpc2tzW10pIHtcbiAgICB0aGlzLl9pbnN0YW5jZURpc2tzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VEaXNrcygpIHtcbiAgICB0aGlzLl9pbnN0YW5jZURpc2tzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZURpc2tzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlRGlza3M7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRfY29yZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRDb3JlcyksXG4gICAgICBkZWZhdWx0X3RocmVhZHNfcGVyX2NvcmU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRUaHJlYWRzUGVyQ29yZSksXG4gICAgICBoeXBlcnZpc29yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9oeXBlcnZpc29yKSxcbiAgICAgIGluc3RhbmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlVHlwZSksXG4gICAgICBtYXhpbXVtX2lwdjZfYWRkcmVzc2VzX3Blcl9pbnRlcmZhY2U6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21heGltdW1JcHY2QWRkcmVzc2VzUGVySW50ZXJmYWNlKSxcbiAgICAgIHRvdGFsX2ZwZ2FfbWVtb3J5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl90b3RhbEZwZ2FNZW1vcnkpLFxuICAgICAgdG90YWxfZ3B1X21lbW9yeTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdG90YWxHcHVNZW1vcnkpLFxuICAgICAgdG90YWxfaW5zdGFuY2Vfc3RvcmFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fdG90YWxJbnN0YW5jZVN0b3JhZ2UpLFxuICAgICAgZnBnYXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c0VjMkluc3RhbmNlVHlwZUZwZ2FzVG9UZXJyYWZvcm0pKHRoaXMuX2ZwZ2FzKSxcbiAgICAgIGdwdXM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c0VjMkluc3RhbmNlVHlwZUdwdXNUb1RlcnJhZm9ybSkodGhpcy5fZ3B1cyksXG4gICAgICBpbmZlcmVuY2VfYWNjZWxlcmF0b3JzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NFYzJJbnN0YW5jZVR5cGVJbmZlcmVuY2VBY2NlbGVyYXRvcnNUb1RlcnJhZm9ybSkodGhpcy5faW5mZXJlbmNlQWNjZWxlcmF0b3JzKSxcbiAgICAgIGluc3RhbmNlX2Rpc2tzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NFYzJJbnN0YW5jZVR5cGVJbnN0YW5jZURpc2tzVG9UZXJyYWZvcm0pKHRoaXMuX2luc3RhbmNlRGlza3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==