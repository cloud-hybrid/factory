"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsLaunchTemplate = exports.dataAwsLaunchTemplateFilterToTerraform = exports.DataAwsLaunchTemplateTagSpecifications = exports.DataAwsLaunchTemplatePlacement = exports.DataAwsLaunchTemplateNetworkInterfaces = exports.DataAwsLaunchTemplateMonitoring = exports.DataAwsLaunchTemplateMetadataOptions = exports.DataAwsLaunchTemplateInstanceMarketOptions = exports.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions = exports.DataAwsLaunchTemplateIamInstanceProfile = exports.DataAwsLaunchTemplateHibernationOptions = exports.DataAwsLaunchTemplateEnclaveOptions = exports.DataAwsLaunchTemplateElasticGpuSpecifications = exports.DataAwsLaunchTemplateCreditSpecification = exports.DataAwsLaunchTemplateBlockDeviceMappings = exports.DataAwsLaunchTemplateBlockDeviceMappingsEbs = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsLaunchTemplateBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {
    // delete_on_termination - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deleteOnTermination() {
        return this.getStringAttribute('delete_on_termination');
    }
    // encrypted - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get encrypted() {
        return this.getStringAttribute('encrypted');
    }
    // iops - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // kms_key_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // snapshot_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    // throughput - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get throughput() {
        return this.getNumberAttribute('throughput');
    }
    // volume_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
exports.DataAwsLaunchTemplateBlockDeviceMappingsEbs = DataAwsLaunchTemplateBlockDeviceMappingsEbs;
_a = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateBlockDeviceMappingsEbs[_a] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateBlockDeviceMappingsEbs", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateBlockDeviceMappings extends cdktf.ComplexComputedList {
    // device_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    // ebs - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebs() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ebs');
    }
    // no_device - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get noDevice() {
        return this.getStringAttribute('no_device');
    }
    // virtual_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get virtualName() {
        return this.getStringAttribute('virtual_name');
    }
}
exports.DataAwsLaunchTemplateBlockDeviceMappings = DataAwsLaunchTemplateBlockDeviceMappings;
_b = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateBlockDeviceMappings[_b] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateBlockDeviceMappings", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateCreditSpecification extends cdktf.ComplexComputedList {
    // cpu_credits - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cpuCredits() {
        return this.getStringAttribute('cpu_credits');
    }
}
exports.DataAwsLaunchTemplateCreditSpecification = DataAwsLaunchTemplateCreditSpecification;
_c = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateCreditSpecification[_c] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateCreditSpecification", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateElasticGpuSpecifications extends cdktf.ComplexComputedList {
    // type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsLaunchTemplateElasticGpuSpecifications = DataAwsLaunchTemplateElasticGpuSpecifications;
_d = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateElasticGpuSpecifications[_d] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateElasticGpuSpecifications", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateEnclaveOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsLaunchTemplateEnclaveOptions = DataAwsLaunchTemplateEnclaveOptions;
_e = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateEnclaveOptions[_e] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateEnclaveOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateHibernationOptions extends cdktf.ComplexComputedList {
    // configured - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get configured() {
        return this.getBooleanAttribute('configured');
    }
}
exports.DataAwsLaunchTemplateHibernationOptions = DataAwsLaunchTemplateHibernationOptions;
_f = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateHibernationOptions[_f] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateHibernationOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateIamInstanceProfile extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsLaunchTemplateIamInstanceProfile = DataAwsLaunchTemplateIamInstanceProfile;
_g = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateIamInstanceProfile[_g] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateIamInstanceProfile", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions extends cdktf.ComplexComputedList {
    // block_duration_minutes - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get blockDurationMinutes() {
        return this.getNumberAttribute('block_duration_minutes');
    }
    // instance_interruption_behavior - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceInterruptionBehavior() {
        return this.getStringAttribute('instance_interruption_behavior');
    }
    // max_price - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maxPrice() {
        return this.getStringAttribute('max_price');
    }
    // spot_instance_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spotInstanceType() {
        return this.getStringAttribute('spot_instance_type');
    }
    // valid_until - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get validUntil() {
        return this.getStringAttribute('valid_until');
    }
}
exports.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions = DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions;
_h = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions[_h] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateInstanceMarketOptions extends cdktf.ComplexComputedList {
    // market_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get marketType() {
        return this.getStringAttribute('market_type');
    }
    // spot_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spotOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('spot_options');
    }
}
exports.DataAwsLaunchTemplateInstanceMarketOptions = DataAwsLaunchTemplateInstanceMarketOptions;
_j = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateInstanceMarketOptions[_j] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateInstanceMarketOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateMetadataOptions extends cdktf.ComplexComputedList {
    // http_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get httpEndpoint() {
        return this.getStringAttribute('http_endpoint');
    }
    // http_protocol_ipv6 - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get httpProtocolIpv6() {
        return this.getStringAttribute('http_protocol_ipv6');
    }
    // http_put_response_hop_limit - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get httpPutResponseHopLimit() {
        return this.getNumberAttribute('http_put_response_hop_limit');
    }
    // http_tokens - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get httpTokens() {
        return this.getStringAttribute('http_tokens');
    }
}
exports.DataAwsLaunchTemplateMetadataOptions = DataAwsLaunchTemplateMetadataOptions;
_k = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateMetadataOptions[_k] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateMetadataOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateMonitoring extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsLaunchTemplateMonitoring = DataAwsLaunchTemplateMonitoring;
_l = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateMonitoring[_l] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateMonitoring", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateNetworkInterfaces extends cdktf.ComplexComputedList {
    // associate_carrier_ip_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get associateCarrierIpAddress() {
        return this.getStringAttribute('associate_carrier_ip_address');
    }
    // associate_public_ip_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get associatePublicIpAddress() {
        return this.getStringAttribute('associate_public_ip_address');
    }
    // delete_on_termination - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deleteOnTermination() {
        return this.getStringAttribute('delete_on_termination');
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    // device_index - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deviceIndex() {
        return this.getNumberAttribute('device_index');
    }
    // interface_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get interfaceType() {
        return this.getStringAttribute('interface_type');
    }
    // ipv4_address_count - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv4AddressCount() {
        return this.getNumberAttribute('ipv4_address_count');
    }
    // ipv4_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv4Addresses() {
        return this.getListAttribute('ipv4_addresses');
    }
    // ipv6_address_count - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv6AddressCount() {
        return this.getNumberAttribute('ipv6_address_count');
    }
    // ipv6_addresses - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv6Addresses() {
        return this.getListAttribute('ipv6_addresses');
    }
    // network_card_index - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get networkCardIndex() {
        return this.getNumberAttribute('network_card_index');
    }
    // network_interface_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    // private_ip_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get privateIpAddress() {
        return this.getStringAttribute('private_ip_address');
    }
    // security_groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // subnet_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
}
exports.DataAwsLaunchTemplateNetworkInterfaces = DataAwsLaunchTemplateNetworkInterfaces;
_m = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateNetworkInterfaces[_m] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateNetworkInterfaces", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplatePlacement extends cdktf.ComplexComputedList {
    // affinity - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get affinity() {
        return this.getStringAttribute('affinity');
    }
    // availability_zone - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // group_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    // host_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hostId() {
        return this.getStringAttribute('host_id');
    }
    // host_resource_group_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hostResourceGroupArn() {
        return this.getStringAttribute('host_resource_group_arn');
    }
    // partition_number - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get partitionNumber() {
        return this.getNumberAttribute('partition_number');
    }
    // spread_domain - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spreadDomain() {
        return this.getStringAttribute('spread_domain');
    }
    // tenancy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tenancy() {
        return this.getStringAttribute('tenancy');
    }
}
exports.DataAwsLaunchTemplatePlacement = DataAwsLaunchTemplatePlacement;
_o = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplatePlacement[_o] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplatePlacement", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLaunchTemplateTagSpecifications extends cdktf.ComplexComputedList {
    // resource_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    // tags - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
}
exports.DataAwsLaunchTemplateTagSpecifications = DataAwsLaunchTemplateTagSpecifications;
_p = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplateTagSpecifications[_p] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplateTagSpecifications", version: "3.0.1" };
function dataAwsLaunchTemplateFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.dataAwsLaunchTemplateFilterToTerraform = dataAwsLaunchTemplateFilterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template}.
 *
 * @stability stable
 */
class DataAwsLaunchTemplate extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_launch_template',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._tags = config.tags;
        this._filter = config.filter;
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
    // block_device_mappings - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    blockDeviceMappings(index) {
        return new DataAwsLaunchTemplateBlockDeviceMappings(this, 'block_device_mappings', index);
    }
    // credit_specification - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    creditSpecification(index) {
        return new DataAwsLaunchTemplateCreditSpecification(this, 'credit_specification', index);
    }
    // default_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultVersion() {
        return this.getNumberAttribute('default_version');
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    // disable_api_termination - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get disableApiTermination() {
        return this.getBooleanAttribute('disable_api_termination');
    }
    // ebs_optimized - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsOptimized() {
        return this.getStringAttribute('ebs_optimized');
    }
    // elastic_gpu_specifications - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    elasticGpuSpecifications(index) {
        return new DataAwsLaunchTemplateElasticGpuSpecifications(this, 'elastic_gpu_specifications', index);
    }
    // enclave_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    enclaveOptions(index) {
        return new DataAwsLaunchTemplateEnclaveOptions(this, 'enclave_options', index);
    }
    // hibernation_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    hibernationOptions(index) {
        return new DataAwsLaunchTemplateHibernationOptions(this, 'hibernation_options', index);
    }
    // iam_instance_profile - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    iamInstanceProfile(index) {
        return new DataAwsLaunchTemplateIamInstanceProfile(this, 'iam_instance_profile', index);
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // image_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    // instance_initiated_shutdown_behavior - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceInitiatedShutdownBehavior() {
        return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    // instance_market_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    instanceMarketOptions(index) {
        return new DataAwsLaunchTemplateInstanceMarketOptions(this, 'instance_market_options', index);
    }
    // instance_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // kernel_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get kernelId() {
        return this.getStringAttribute('kernel_id');
    }
    // key_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    // latest_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get latestVersion() {
        return this.getNumberAttribute('latest_version');
    }
    // metadata_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    metadataOptions(index) {
        return new DataAwsLaunchTemplateMetadataOptions(this, 'metadata_options', index);
    }
    // monitoring - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    monitoring(index) {
        return new DataAwsLaunchTemplateMonitoring(this, 'monitoring', index);
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
    // network_interfaces - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    networkInterfaces(index) {
        return new DataAwsLaunchTemplateNetworkInterfaces(this, 'network_interfaces', index);
    }
    // placement - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    placement(index) {
        return new DataAwsLaunchTemplatePlacement(this, 'placement', index);
    }
    // ram_disk_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ramDiskId() {
        return this.getStringAttribute('ram_disk_id');
    }
    // security_group_names - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroupNames() {
        return this.getListAttribute('security_group_names');
    }
    // tag_specifications - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    tagSpecifications(index) {
        return new DataAwsLaunchTemplateTagSpecifications(this, 'tag_specifications', index);
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
    // user_data - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userData() {
        return this.getStringAttribute('user_data');
    }
    // vpc_security_group_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    /**
     * @stability stable
     */
    get filter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filter');
    }
    /**
     * @stability stable
     */
    set filter(value) {
        this._filter = value;
    }
    /**
     * @stability stable
     */
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get filterInput() {
        return this._filter;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsLaunchTemplateFilterToTerraform)(this._filter),
        };
    }
}
exports.DataAwsLaunchTemplate = DataAwsLaunchTemplate;
_q = JSII_RTTI_SYMBOL_1;
DataAwsLaunchTemplate[_q] = { fqn: "@cdktf/provider-aws.ec2.DataAwsLaunchTemplate", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsLaunchTemplate.tfResourceType = "aws_launch_template";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGF1bmNoLXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VjMi9kYXRhLWF3cy1sYXVuY2gtdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFXL0IsTUFBYSwyQ0FBNEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXhGLDJFQUEyRTs7OztJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwrREFBK0Q7Ozs7SUFDL0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwwREFBMEQ7Ozs7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENB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QyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDL0UsQ0FBQztJQUNKLENBQUM7O0FBeE9ILHNEQXlPQzs7O0FBdk9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csb0NBQWMsR0FBVyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0xhdW5jaFRlbXBsYXRlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsdGVyPzogRGF0YUF3c0xhdW5jaFRlbXBsYXRlRmlsdGVyW107XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0VicyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGVfb25fdGVybWluYXRpb24nKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuY3J5cHRlZCcpO1xuICB9XG5cbiAgLy8gaW9wcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlvcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpb3BzJyk7XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2lkJyk7XG4gIH1cblxuICAvLyBzbmFwc2hvdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNuYXBzaG90SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbmFwc2hvdF9pZCcpO1xuICB9XG5cbiAgLy8gdGhyb3VnaHB1dCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRocm91Z2hwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aHJvdWdocHV0Jyk7XG4gIH1cblxuICAvLyB2b2x1bWVfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZvbHVtZVNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd2b2x1bWVfc2l6ZScpO1xuICB9XG5cbiAgLy8gdm9sdW1lX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2b2x1bWVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndm9sdW1lX3R5cGUnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXZpY2VfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRldmljZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXZpY2VfbmFtZScpO1xuICB9XG5cbiAgLy8gZWJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZWJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlYnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBub19kZXZpY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBub0RldmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vX2RldmljZScpO1xuICB9XG5cbiAgLy8gdmlydHVhbF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmlydHVhbE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2aXJ0dWFsX25hbWUnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcHVfY3JlZGl0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNwdUNyZWRpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHVfY3JlZGl0cycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25maWd1cmVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uZmlndXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb25maWd1cmVkJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmxvY2tfZHVyYXRpb25fbWludXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJsb2NrRHVyYXRpb25NaW51dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmxvY2tfZHVyYXRpb25fbWludXRlcycpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcicpO1xuICB9XG5cbiAgLy8gbWF4X3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWF4UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfcHJpY2UnKTtcbiAgfVxuXG4gIC8vIHNwb3RfaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwb3RJbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHZhbGlkX3VudGlsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX3VudGlsJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBtYXJrZXRfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hcmtldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXJrZXRfdHlwZScpO1xuICB9XG5cbiAgLy8gc3BvdF9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BvdE9wdGlvbnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Nwb3Rfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGh0dHBfZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBodHRwX3Byb3RvY29sX2lwdjYgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwUHJvdG9jb2xJcHY2KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF9wcm90b2NvbF9pcHY2Jyk7XG4gIH1cblxuICAvLyBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2h0dHBfcHV0X3Jlc3BvbnNlX2hvcF9saW1pdCcpO1xuICB9XG5cbiAgLy8gaHR0cF90b2tlbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBodHRwVG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF90b2tlbnMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhc3NvY2lhdGVfY2Fycmllcl9pcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRlQ2FycmllcklwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc29jaWF0ZV9jYXJyaWVyX2lwX2FkZHJlc3MnKTtcbiAgfVxuXG4gIC8vIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Fzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gZGVsZXRlX29uX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsZXRlT25UZXJtaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZV9vbl90ZXJtaW5hdGlvbicpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBkZXZpY2VfaW5kZXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXZpY2VJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RldmljZV9pbmRleCcpO1xuICB9XG5cbiAgLy8gaW50ZXJmYWNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlcmZhY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW50ZXJmYWNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGlwdjRfYWRkcmVzc19jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwdjRBZGRyZXNzQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpcHY0X2FkZHJlc3NfY291bnQnKTtcbiAgfVxuXG4gIC8vIGlwdjRfYWRkcmVzc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXB2NEFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpcHY0X2FkZHJlc3NlcycpO1xuICB9XG5cbiAgLy8gaXB2Nl9hZGRyZXNzX2NvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaXB2NkFkZHJlc3NDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lwdjZfYWRkcmVzc19jb3VudCcpO1xuICB9XG5cbiAgLy8gaXB2Nl9hZGRyZXNzZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcHY2QWRkcmVzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lwdjZfYWRkcmVzc2VzJyk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2NhcmRfaW5kZXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuZXR3b3JrQ2FyZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbmV0d29ya19jYXJkX2luZGV4Jyk7XG4gIH1cblxuICAvLyBuZXR3b3JrX2ludGVyZmFjZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnRlcmZhY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25ldHdvcmtfaW50ZXJmYWNlX2lkJyk7XG4gIH1cblxuICAvLyBwcml2YXRlX2lwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcml2YXRlSXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpdmF0ZV9pcF9hZGRyZXNzJyk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cHMnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3VibmV0X2lkJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhZmZpbml0eSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFmZmluaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWZmaW5pdHknKTtcbiAgfVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lJyk7XG4gIH1cblxuICAvLyBncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gaG9zdF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhvc3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfaWQnKTtcbiAgfVxuXG4gIC8vIGhvc3RfcmVzb3VyY2VfZ3JvdXBfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdFJlc291cmNlR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X3Jlc291cmNlX2dyb3VwX2FybicpO1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BhcnRpdGlvbl9udW1iZXInKTtcbiAgfVxuXG4gIC8vIHNwcmVhZF9kb21haW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcHJlYWREb21haW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcHJlYWRfZG9tYWluJyk7XG4gIH1cblxuICAvLyB0ZW5hbmN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGVuYW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbmFuY3knKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcmVzb3VyY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NMYXVuY2hUZW1wbGF0ZUZpbHRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NMYXVuY2hUZW1wbGF0ZUZpbHRlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NMYXVuY2hUZW1wbGF0ZUZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnZhbHVlcyksXG4gIH1cbn1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NMYXVuY2hUZW1wbGF0ZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2xhdW5jaF90ZW1wbGF0ZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c0xhdW5jaFRlbXBsYXRlQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19sYXVuY2hfdGVtcGxhdGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl9maWx0ZXIgPSBjb25maWcuZmlsdGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGJsb2NrX2RldmljZV9tYXBwaW5ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgYmxvY2tEZXZpY2VNYXBwaW5ncyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzKHRoaXMsICdibG9ja19kZXZpY2VfbWFwcGluZ3MnLCBpbmRleCk7XG4gIH1cblxuICAvLyBjcmVkaXRfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgY3JlZGl0U3BlY2lmaWNhdGlvbihpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uKHRoaXMsICdjcmVkaXRfc3BlY2lmaWNhdGlvbicsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZmF1bHRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVmYXVsdF92ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGRpc2FibGVfYXBpX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUFwaVRlcm1pbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfYXBpX3Rlcm1pbmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZWJzX29wdGltaXplZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vic19vcHRpbWl6ZWQnKTtcbiAgfVxuXG4gIC8vIGVsYXN0aWNfZ3B1X3NwZWNpZmljYXRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBlbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0xhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zKHRoaXMsICdlbGFzdGljX2dwdV9zcGVjaWZpY2F0aW9ucycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGVuY2xhdmVfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZW5jbGF2ZU9wdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0xhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnModGhpcywgJ2VuY2xhdmVfb3B0aW9ucycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGhpYmVybmF0aW9uX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGhpYmVybmF0aW9uT3B0aW9ucyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnModGhpcywgJ2hpYmVybmF0aW9uX29wdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBpYW1faW5zdGFuY2VfcHJvZmlsZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgaWFtSW5zdGFuY2VQcm9maWxlKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZSh0aGlzLCAnaWFtX2luc3RhbmNlX3Byb2ZpbGUnLCBpbmRleCk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW1hZ2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbWFnZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcicpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfbWFya2V0X29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGluc3RhbmNlTWFya2V0T3B0aW9ucyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnModGhpcywgJ2luc3RhbmNlX21hcmtldF9vcHRpb25zJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGtlcm5lbF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtlcm5lbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2VybmVsX2lkJyk7XG4gIH1cblxuICAvLyBrZXlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfbmFtZScpO1xuICB9XG5cbiAgLy8gbGF0ZXN0X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXRlc3RWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbGF0ZXN0X3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIG1ldGFkYXRhX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIG1ldGFkYXRhT3B0aW9ucyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnModGhpcywgJ21ldGFkYXRhX29wdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBtb25pdG9yaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBtb25pdG9yaW5nKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NMYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmcodGhpcywgJ21vbml0b3JpbmcnLCBpbmRleCk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmFtZSgpIHtcbiAgICB0aGlzLl9uYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBuZXR3b3JrX2ludGVyZmFjZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIG5ldHdvcmtJbnRlcmZhY2VzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzKHRoaXMsICduZXR3b3JrX2ludGVyZmFjZXMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBwbGFjZW1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHBsYWNlbWVudChpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQodGhpcywgJ3BsYWNlbWVudCcsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHJhbV9kaXNrX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmFtRGlza0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFtX2Rpc2tfaWQnKTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX25hbWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX25hbWVzJyk7XG4gIH1cblxuICAvLyB0YWdfc3BlY2lmaWNhdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIHRhZ1NwZWNpZmljYXRpb25zKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zKHRoaXMsICd0YWdfc3BlY2lmaWNhdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHVzZXJfZGF0YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9kYXRhJyk7XG4gIH1cblxuICAvLyB2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cblxuICAvLyBmaWx0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmlsdGVyPzogRGF0YUF3c0xhdW5jaFRlbXBsYXRlRmlsdGVyW107IFxuICBwdWJsaWMgZ2V0IGZpbHRlcigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZmlsdGVyJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsdGVyKHZhbHVlOiBEYXRhQXdzTGF1bmNoVGVtcGxhdGVGaWx0ZXJbXSkge1xuICAgIHRoaXMuX2ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLl9maWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICBmaWx0ZXI6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c0xhdW5jaFRlbXBsYXRlRmlsdGVyVG9UZXJyYWZvcm0pKHRoaXMuX2ZpbHRlciksXG4gICAgfTtcbiAgfVxufVxuIl19