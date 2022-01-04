"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsworksInstance = exports.OpsworksInstanceTimeoutsOutputReference = exports.opsworksInstanceTimeoutsToTerraform = exports.opsworksInstanceRootBlockDeviceToTerraform = exports.opsworksInstanceEphemeralBlockDeviceToTerraform = exports.opsworksInstanceEbsBlockDeviceToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function opsworksInstanceEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        iops: cdktf.numberToTerraform(struct.iops),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.opsworksInstanceEbsBlockDeviceToTerraform = opsworksInstanceEbsBlockDeviceToTerraform;
function opsworksInstanceEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
    };
}
exports.opsworksInstanceEphemeralBlockDeviceToTerraform = opsworksInstanceEphemeralBlockDeviceToTerraform;
function opsworksInstanceRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        iops: cdktf.numberToTerraform(struct.iops),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.opsworksInstanceRootBlockDeviceToTerraform = opsworksInstanceRootBlockDeviceToTerraform;
function opsworksInstanceTimeoutsToTerraform(struct) {
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
exports.opsworksInstanceTimeoutsToTerraform = opsworksInstanceTimeoutsToTerraform;
/**
 * @stability stable
 */
class OpsworksInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.OpsworksInstanceTimeoutsOutputReference = OpsworksInstanceTimeoutsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
OpsworksInstanceTimeoutsOutputReference[_a] = { fqn: "@cdktf/provider-aws.opsworks.OpsworksInstanceTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance}.
 *
 * @stability stable
 */
class OpsworksInstance extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_instance.html aws_opsworks_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_opsworks_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new OpsworksInstanceTimeoutsOutputReference(this, "timeouts", true);
        this._agentVersion = config.agentVersion;
        this._amiId = config.amiId;
        this._architecture = config.architecture;
        this._autoScalingType = config.autoScalingType;
        this._availabilityZone = config.availabilityZone;
        this._createdAt = config.createdAt;
        this._deleteEbs = config.deleteEbs;
        this._deleteEip = config.deleteEip;
        this._ebsOptimized = config.ebsOptimized;
        this._ecsClusterArn = config.ecsClusterArn;
        this._elasticIp = config.elasticIp;
        this._hostname = config.hostname;
        this._infrastructureClass = config.infrastructureClass;
        this._installUpdatesOnBoot = config.installUpdatesOnBoot;
        this._instanceProfileArn = config.instanceProfileArn;
        this._instanceType = config.instanceType;
        this._lastServiceErrorId = config.lastServiceErrorId;
        this._layerIds = config.layerIds;
        this._os = config.os;
        this._platform = config.platform;
        this._privateDns = config.privateDns;
        this._privateIp = config.privateIp;
        this._publicDns = config.publicDns;
        this._publicIp = config.publicIp;
        this._registeredBy = config.registeredBy;
        this._reportedAgentVersion = config.reportedAgentVersion;
        this._reportedOsFamily = config.reportedOsFamily;
        this._reportedOsName = config.reportedOsName;
        this._reportedOsVersion = config.reportedOsVersion;
        this._rootDeviceType = config.rootDeviceType;
        this._rootDeviceVolumeId = config.rootDeviceVolumeId;
        this._securityGroupIds = config.securityGroupIds;
        this._sshHostDsaKeyFingerprint = config.sshHostDsaKeyFingerprint;
        this._sshHostRsaKeyFingerprint = config.sshHostRsaKeyFingerprint;
        this._sshKeyName = config.sshKeyName;
        this._stackId = config.stackId;
        this._state = config.state;
        this._status = config.status;
        this._subnetId = config.subnetId;
        this._tenancy = config.tenancy;
        this._virtualizationType = config.virtualizationType;
        this._ebsBlockDevice = config.ebsBlockDevice;
        this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        this._rootBlockDevice = config.rootBlockDevice;
        this._timeouts.internalValue = config.timeouts;
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
    /**
     * @stability stable
     */
    get amiId() {
        return this.getStringAttribute('ami_id');
    }
    /**
     * @stability stable
     */
    set amiId(value) {
        this._amiId = value;
    }
    /**
     * @stability stable
     */
    resetAmiId() {
        this._amiId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get amiIdInput() {
        return this._amiId;
    }
    /**
     * @stability stable
     */
    get architecture() {
        return this.getStringAttribute('architecture');
    }
    /**
     * @stability stable
     */
    set architecture(value) {
        this._architecture = value;
    }
    /**
     * @stability stable
     */
    resetArchitecture() {
        this._architecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get architectureInput() {
        return this._architecture;
    }
    /**
     * @stability stable
     */
    get autoScalingType() {
        return this.getStringAttribute('auto_scaling_type');
    }
    /**
     * @stability stable
     */
    set autoScalingType(value) {
        this._autoScalingType = value;
    }
    /**
     * @stability stable
     */
    resetAutoScalingType() {
        this._autoScalingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoScalingTypeInput() {
        return this._autoScalingType;
    }
    /**
     * @stability stable
     */
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    /**
     * @stability stable
     */
    set availabilityZone(value) {
        this._availabilityZone = value;
    }
    /**
     * @stability stable
     */
    resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get availabilityZoneInput() {
        return this._availabilityZone;
    }
    /**
     * @stability stable
     */
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    /**
     * @stability stable
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     * @stability stable
     */
    resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createdAtInput() {
        return this._createdAt;
    }
    /**
     * @stability stable
     */
    get deleteEbs() {
        return this.getBooleanAttribute('delete_ebs');
    }
    /**
     * @stability stable
     */
    set deleteEbs(value) {
        this._deleteEbs = value;
    }
    /**
     * @stability stable
     */
    resetDeleteEbs() {
        this._deleteEbs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteEbsInput() {
        return this._deleteEbs;
    }
    /**
     * @stability stable
     */
    get deleteEip() {
        return this.getBooleanAttribute('delete_eip');
    }
    /**
     * @stability stable
     */
    set deleteEip(value) {
        this._deleteEip = value;
    }
    /**
     * @stability stable
     */
    resetDeleteEip() {
        this._deleteEip = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteEipInput() {
        return this._deleteEip;
    }
    /**
     * @stability stable
     */
    get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    /**
     * @stability stable
     */
    set ebsOptimized(value) {
        this._ebsOptimized = value;
    }
    /**
     * @stability stable
     */
    resetEbsOptimized() {
        this._ebsOptimized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ebsOptimizedInput() {
        return this._ebsOptimized;
    }
    // ec2_instance_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ec2InstanceId() {
        return this.getStringAttribute('ec2_instance_id');
    }
    /**
     * @stability stable
     */
    get ecsClusterArn() {
        return this.getStringAttribute('ecs_cluster_arn');
    }
    /**
     * @stability stable
     */
    set ecsClusterArn(value) {
        this._ecsClusterArn = value;
    }
    /**
     * @stability stable
     */
    resetEcsClusterArn() {
        this._ecsClusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ecsClusterArnInput() {
        return this._ecsClusterArn;
    }
    /**
     * @stability stable
     */
    get elasticIp() {
        return this.getStringAttribute('elastic_ip');
    }
    /**
     * @stability stable
     */
    set elasticIp(value) {
        this._elasticIp = value;
    }
    /**
     * @stability stable
     */
    resetElasticIp() {
        this._elasticIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get elasticIpInput() {
        return this._elasticIp;
    }
    /**
     * @stability stable
     */
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    /**
     * @stability stable
     */
    set hostname(value) {
        this._hostname = value;
    }
    /**
     * @stability stable
     */
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostnameInput() {
        return this._hostname;
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
    get infrastructureClass() {
        return this.getStringAttribute('infrastructure_class');
    }
    /**
     * @stability stable
     */
    set infrastructureClass(value) {
        this._infrastructureClass = value;
    }
    /**
     * @stability stable
     */
    resetInfrastructureClass() {
        this._infrastructureClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get infrastructureClassInput() {
        return this._infrastructureClass;
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
    get instanceProfileArn() {
        return this.getStringAttribute('instance_profile_arn');
    }
    /**
     * @stability stable
     */
    set instanceProfileArn(value) {
        this._instanceProfileArn = value;
    }
    /**
     * @stability stable
     */
    resetInstanceProfileArn() {
        this._instanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceProfileArnInput() {
        return this._instanceProfileArn;
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
    /**
     * @stability stable
     */
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceTypeInput() {
        return this._instanceType;
    }
    /**
     * @stability stable
     */
    get lastServiceErrorId() {
        return this.getStringAttribute('last_service_error_id');
    }
    /**
     * @stability stable
     */
    set lastServiceErrorId(value) {
        this._lastServiceErrorId = value;
    }
    /**
     * @stability stable
     */
    resetLastServiceErrorId() {
        this._lastServiceErrorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lastServiceErrorIdInput() {
        return this._lastServiceErrorId;
    }
    /**
     * @stability stable
     */
    get layerIds() {
        return this.getListAttribute('layer_ids');
    }
    /**
     * @stability stable
     */
    set layerIds(value) {
        this._layerIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get layerIdsInput() {
        return this._layerIds;
    }
    /**
     * @stability stable
     */
    get os() {
        return this.getStringAttribute('os');
    }
    /**
     * @stability stable
     */
    set os(value) {
        this._os = value;
    }
    /**
     * @stability stable
     */
    resetOs() {
        this._os = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get osInput() {
        return this._os;
    }
    /**
     * @stability stable
     */
    get platform() {
        return this.getStringAttribute('platform');
    }
    /**
     * @stability stable
     */
    set platform(value) {
        this._platform = value;
    }
    /**
     * @stability stable
     */
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get platformInput() {
        return this._platform;
    }
    /**
     * @stability stable
     */
    get privateDns() {
        return this.getStringAttribute('private_dns');
    }
    /**
     * @stability stable
     */
    set privateDns(value) {
        this._privateDns = value;
    }
    /**
     * @stability stable
     */
    resetPrivateDns() {
        this._privateDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privateDnsInput() {
        return this._privateDns;
    }
    /**
     * @stability stable
     */
    get privateIp() {
        return this.getStringAttribute('private_ip');
    }
    /**
     * @stability stable
     */
    set privateIp(value) {
        this._privateIp = value;
    }
    /**
     * @stability stable
     */
    resetPrivateIp() {
        this._privateIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get privateIpInput() {
        return this._privateIp;
    }
    /**
     * @stability stable
     */
    get publicDns() {
        return this.getStringAttribute('public_dns');
    }
    /**
     * @stability stable
     */
    set publicDns(value) {
        this._publicDns = value;
    }
    /**
     * @stability stable
     */
    resetPublicDns() {
        this._publicDns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publicDnsInput() {
        return this._publicDns;
    }
    /**
     * @stability stable
     */
    get publicIp() {
        return this.getStringAttribute('public_ip');
    }
    /**
     * @stability stable
     */
    set publicIp(value) {
        this._publicIp = value;
    }
    /**
     * @stability stable
     */
    resetPublicIp() {
        this._publicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publicIpInput() {
        return this._publicIp;
    }
    /**
     * @stability stable
     */
    get registeredBy() {
        return this.getStringAttribute('registered_by');
    }
    /**
     * @stability stable
     */
    set registeredBy(value) {
        this._registeredBy = value;
    }
    /**
     * @stability stable
     */
    resetRegisteredBy() {
        this._registeredBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get registeredByInput() {
        return this._registeredBy;
    }
    /**
     * @stability stable
     */
    get reportedAgentVersion() {
        return this.getStringAttribute('reported_agent_version');
    }
    /**
     * @stability stable
     */
    set reportedAgentVersion(value) {
        this._reportedAgentVersion = value;
    }
    /**
     * @stability stable
     */
    resetReportedAgentVersion() {
        this._reportedAgentVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportedAgentVersionInput() {
        return this._reportedAgentVersion;
    }
    /**
     * @stability stable
     */
    get reportedOsFamily() {
        return this.getStringAttribute('reported_os_family');
    }
    /**
     * @stability stable
     */
    set reportedOsFamily(value) {
        this._reportedOsFamily = value;
    }
    /**
     * @stability stable
     */
    resetReportedOsFamily() {
        this._reportedOsFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportedOsFamilyInput() {
        return this._reportedOsFamily;
    }
    /**
     * @stability stable
     */
    get reportedOsName() {
        return this.getStringAttribute('reported_os_name');
    }
    /**
     * @stability stable
     */
    set reportedOsName(value) {
        this._reportedOsName = value;
    }
    /**
     * @stability stable
     */
    resetReportedOsName() {
        this._reportedOsName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportedOsNameInput() {
        return this._reportedOsName;
    }
    /**
     * @stability stable
     */
    get reportedOsVersion() {
        return this.getStringAttribute('reported_os_version');
    }
    /**
     * @stability stable
     */
    set reportedOsVersion(value) {
        this._reportedOsVersion = value;
    }
    /**
     * @stability stable
     */
    resetReportedOsVersion() {
        this._reportedOsVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportedOsVersionInput() {
        return this._reportedOsVersion;
    }
    /**
     * @stability stable
     */
    get rootDeviceType() {
        return this.getStringAttribute('root_device_type');
    }
    /**
     * @stability stable
     */
    set rootDeviceType(value) {
        this._rootDeviceType = value;
    }
    /**
     * @stability stable
     */
    resetRootDeviceType() {
        this._rootDeviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rootDeviceTypeInput() {
        return this._rootDeviceType;
    }
    /**
     * @stability stable
     */
    get rootDeviceVolumeId() {
        return this.getStringAttribute('root_device_volume_id');
    }
    /**
     * @stability stable
     */
    set rootDeviceVolumeId(value) {
        this._rootDeviceVolumeId = value;
    }
    /**
     * @stability stable
     */
    resetRootDeviceVolumeId() {
        this._rootDeviceVolumeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rootDeviceVolumeIdInput() {
        return this._rootDeviceVolumeId;
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
    get sshHostDsaKeyFingerprint() {
        return this.getStringAttribute('ssh_host_dsa_key_fingerprint');
    }
    /**
     * @stability stable
     */
    set sshHostDsaKeyFingerprint(value) {
        this._sshHostDsaKeyFingerprint = value;
    }
    /**
     * @stability stable
     */
    resetSshHostDsaKeyFingerprint() {
        this._sshHostDsaKeyFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sshHostDsaKeyFingerprintInput() {
        return this._sshHostDsaKeyFingerprint;
    }
    /**
     * @stability stable
     */
    get sshHostRsaKeyFingerprint() {
        return this.getStringAttribute('ssh_host_rsa_key_fingerprint');
    }
    /**
     * @stability stable
     */
    set sshHostRsaKeyFingerprint(value) {
        this._sshHostRsaKeyFingerprint = value;
    }
    /**
     * @stability stable
     */
    resetSshHostRsaKeyFingerprint() {
        this._sshHostRsaKeyFingerprint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sshHostRsaKeyFingerprintInput() {
        return this._sshHostRsaKeyFingerprint;
    }
    /**
     * @stability stable
     */
    get sshKeyName() {
        return this.getStringAttribute('ssh_key_name');
    }
    /**
     * @stability stable
     */
    set sshKeyName(value) {
        this._sshKeyName = value;
    }
    /**
     * @stability stable
     */
    resetSshKeyName() {
        this._sshKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sshKeyNameInput() {
        return this._sshKeyName;
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
    get state() {
        return this.getStringAttribute('state');
    }
    /**
     * @stability stable
     */
    set state(value) {
        this._state = value;
    }
    /**
     * @stability stable
     */
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stateInput() {
        return this._state;
    }
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    set status(value) {
        this._status = value;
    }
    /**
     * @stability stable
     */
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusInput() {
        return this._status;
    }
    /**
     * @stability stable
     */
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    /**
     * @stability stable
     */
    set subnetId(value) {
        this._subnetId = value;
    }
    /**
     * @stability stable
     */
    resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetIdInput() {
        return this._subnetId;
    }
    /**
     * @stability stable
     */
    get tenancy() {
        return this.getStringAttribute('tenancy');
    }
    /**
     * @stability stable
     */
    set tenancy(value) {
        this._tenancy = value;
    }
    /**
     * @stability stable
     */
    resetTenancy() {
        this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tenancyInput() {
        return this._tenancy;
    }
    /**
     * @stability stable
     */
    get virtualizationType() {
        return this.getStringAttribute('virtualization_type');
    }
    /**
     * @stability stable
     */
    set virtualizationType(value) {
        this._virtualizationType = value;
    }
    /**
     * @stability stable
     */
    resetVirtualizationType() {
        this._virtualizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get virtualizationTypeInput() {
        return this._virtualizationType;
    }
    /**
     * @stability stable
     */
    get ebsBlockDevice() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ebs_block_device');
    }
    /**
     * @stability stable
     */
    set ebsBlockDevice(value) {
        this._ebsBlockDevice = value;
    }
    /**
     * @stability stable
     */
    resetEbsBlockDevice() {
        this._ebsBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ebsBlockDeviceInput() {
        return this._ebsBlockDevice;
    }
    /**
     * @stability stable
     */
    get ephemeralBlockDevice() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ephemeral_block_device');
    }
    /**
     * @stability stable
     */
    set ephemeralBlockDevice(value) {
        this._ephemeralBlockDevice = value;
    }
    /**
     * @stability stable
     */
    resetEphemeralBlockDevice() {
        this._ephemeralBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ephemeralBlockDeviceInput() {
        return this._ephemeralBlockDevice;
    }
    /**
     * @stability stable
     */
    get rootBlockDevice() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('root_block_device');
    }
    /**
     * @stability stable
     */
    set rootBlockDevice(value) {
        this._rootBlockDevice = value;
    }
    /**
     * @stability stable
     */
    resetRootBlockDevice() {
        this._rootBlockDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rootBlockDeviceInput() {
        return this._rootBlockDevice;
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
            agent_version: cdktf.stringToTerraform(this._agentVersion),
            ami_id: cdktf.stringToTerraform(this._amiId),
            architecture: cdktf.stringToTerraform(this._architecture),
            auto_scaling_type: cdktf.stringToTerraform(this._autoScalingType),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            created_at: cdktf.stringToTerraform(this._createdAt),
            delete_ebs: cdktf.booleanToTerraform(this._deleteEbs),
            delete_eip: cdktf.booleanToTerraform(this._deleteEip),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            ecs_cluster_arn: cdktf.stringToTerraform(this._ecsClusterArn),
            elastic_ip: cdktf.stringToTerraform(this._elasticIp),
            hostname: cdktf.stringToTerraform(this._hostname),
            infrastructure_class: cdktf.stringToTerraform(this._infrastructureClass),
            install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
            instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            last_service_error_id: cdktf.stringToTerraform(this._lastServiceErrorId),
            layer_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._layerIds),
            os: cdktf.stringToTerraform(this._os),
            platform: cdktf.stringToTerraform(this._platform),
            private_dns: cdktf.stringToTerraform(this._privateDns),
            private_ip: cdktf.stringToTerraform(this._privateIp),
            public_dns: cdktf.stringToTerraform(this._publicDns),
            public_ip: cdktf.stringToTerraform(this._publicIp),
            registered_by: cdktf.stringToTerraform(this._registeredBy),
            reported_agent_version: cdktf.stringToTerraform(this._reportedAgentVersion),
            reported_os_family: cdktf.stringToTerraform(this._reportedOsFamily),
            reported_os_name: cdktf.stringToTerraform(this._reportedOsName),
            reported_os_version: cdktf.stringToTerraform(this._reportedOsVersion),
            root_device_type: cdktf.stringToTerraform(this._rootDeviceType),
            root_device_volume_id: cdktf.stringToTerraform(this._rootDeviceVolumeId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            ssh_host_dsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostDsaKeyFingerprint),
            ssh_host_rsa_key_fingerprint: cdktf.stringToTerraform(this._sshHostRsaKeyFingerprint),
            ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
            stack_id: cdktf.stringToTerraform(this._stackId),
            state: cdktf.stringToTerraform(this._state),
            status: cdktf.stringToTerraform(this._status),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tenancy: cdktf.stringToTerraform(this._tenancy),
            virtualization_type: cdktf.stringToTerraform(this._virtualizationType),
            ebs_block_device: cdktf.listMapper(opsworksInstanceEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            ephemeral_block_device: cdktf.listMapper(opsworksInstanceEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            root_block_device: cdktf.listMapper(opsworksInstanceRootBlockDeviceToTerraform)(this._rootBlockDevice),
            timeouts: opsworksInstanceTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.OpsworksInstance = OpsworksInstance;
_b = JSII_RTTI_SYMBOL_1;
OpsworksInstance[_b] = { fqn: "@cdktf/provider-aws.opsworks.OpsworksInstance", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
OpsworksInstance.tfResourceType = "aws_opsworks_instance";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Bzd29ya3MtaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3Bzd29ya3Mvb3Bzd29ya3MtaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE4Ry9CLFNBQWdCLHlDQUF5QyxDQUFDLE1BQXVDO0lBQy9GLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ3pELENBQUE7QUFDSCxDQUFDO0FBYkQsOEZBYUM7QUFTRCxTQUFnQiwrQ0FBK0MsQ0FBQyxNQUE2QztJQUMzRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFURCwwR0FTQztBQWFELFNBQWdCLDBDQUEwQyxDQUFDLE1BQXdDO0lBQ2pHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6RCxDQUFBO0FBQ0gsQ0FBQztBQVhELGdHQVdDO0FBV0QsU0FBZ0IsbUNBQW1DLENBQUMsTUFBMkU7SUFDN0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQVZELGtGQVVDOzs7O0FBRUQsTUFBYSx1Q0FBd0MsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk5RSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEyQztRQUNsRSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FDMUI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7QUF2RkgsMEZBd0ZDOzs7Ozs7OztBQUdELE1BQWEsZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU8zRCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBOEI7UUFDN0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx1QkFBdUI7WUFDOUMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQTJ2QkwsOERBQThEO1FBQ3RELGNBQVMsR0FBRyxJQUFJLHVDQUF1QyxDQUFDLElBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUEzdkI3RixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDakUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakQsQ0FBQzs7OztJQVFELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFDRCxJQUFXLGVBQWUsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7OztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWtDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFrQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQVEsQ0FBQztJQUMxRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBa0M7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQscUVBQXFFOzs7O0lBQ3JFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUlELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUNELElBQVcsbUJBQW1CLENBQUMsS0FBYTtRQUMxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBUSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQWtDO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFDTSx1QkFBdUI7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNNLHVCQUF1QjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBZTtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFDTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0Is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QUksQ0FBQyxxQkFBcUIsQ0FBQztZQUNySCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3RHLFFBQVEsRUFBRSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUM1RSxDQUFDO0lBQ0osQ0FBQzs7QUFyMUJILDRDQXMxQkM7OztBQXAxQkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywrQkFBYyxHQUFXLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIE9wc3dvcmtzSW5zdGFuY2VDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFnZW50VmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbWlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcmNoaXRlY3R1cmU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9TY2FsaW5nVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZWRBdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZUVicz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZUVpcD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic09wdGltaXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlY3NDbHVzdGVyQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWxhc3RpY0lwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0bmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5mcmFzdHJ1Y3R1cmVDbGFzcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFsbFVwZGF0ZXNPbkJvb3Q/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlUHJvZmlsZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYXN0U2VydmljZUVycm9ySWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF5ZXJJZHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGxhdGZvcm0/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaXZhdGVEbnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2YXRlSXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwdWJsaWNEbnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHVibGljSXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWdpc3RlcmVkQnk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRlZEFnZW50VmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRlZE9zRmFtaWx5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwb3J0ZWRPc05hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRlZE9zVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvb3REZXZpY2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvb3REZXZpY2VWb2x1bWVJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2hIb3N0UnNhS2V5RmluZ2VycHJpbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NoS2V5TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhY2tJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZW5hbmN5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbGl6YXRpb25UeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VFYnNCbG9ja0RldmljZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcGhlbWVyYWxCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb290QmxvY2tEZXZpY2U/OiBPcHN3b3Jrc0luc3RhbmNlUm9vdEJsb2NrRGV2aWNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogT3Bzd29ya3NJbnN0YW5jZVRpbWVvdXRzO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZU9uVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNuYXBzaG90SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZVNpemU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGRldmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU5hbWUpLFxuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAgc25hcHNob3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RJZCksXG4gICAgdm9sdW1lX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZSksXG4gICAgdm9sdW1lX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc0luc3RhbmNlRXBoZW1lcmFsQmxvY2tEZXZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZVRvVGVycmFmb3JtKHN0cnVjdD86IE9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRldmljZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZU5hbWUpLFxuICAgIHZpcnR1YWxfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52aXJ0dWFsTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHN3b3Jrc0luc3RhbmNlUm9vdEJsb2NrRGV2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGVPblRlcm1pbmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW9wcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wc3dvcmtzSW5zdGFuY2VSb290QmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBPcHN3b3Jrc0luc3RhbmNlUm9vdEJsb2NrRGV2aWNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIHZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgIHZvbHVtZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3Bzd29ya3NJbnN0YW5jZVRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVwZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wc3dvcmtzSW5zdGFuY2VUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IE9wc3dvcmtzSW5zdGFuY2VUaW1lb3V0c091dHB1dFJlZmVyZW5jZSB8IE9wc3dvcmtzSW5zdGFuY2VUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHN3b3Jrc0luc3RhbmNlVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogT3Bzd29ya3NJbnN0YW5jZVRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlbGV0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGVsZXRlID0gdGhpcy5fZGVsZXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXBkYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51cGRhdGUgPSB0aGlzLl91cGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBPcHN3b3Jrc0luc3RhbmNlVGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgT3Bzd29ya3NJbnN0YW5jZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19vcHN3b3Jrc19pbnN0YW5jZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogT3Bzd29ya3NJbnN0YW5jZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX29wc3dvcmtzX2luc3RhbmNlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FnZW50VmVyc2lvbiA9IGNvbmZpZy5hZ2VudFZlcnNpb247XG4gICAgdGhpcy5fYW1pSWQgPSBjb25maWcuYW1pSWQ7XG4gICAgdGhpcy5fYXJjaGl0ZWN0dXJlID0gY29uZmlnLmFyY2hpdGVjdHVyZTtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ1R5cGUgPSBjb25maWcuYXV0b1NjYWxpbmdUeXBlO1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSBjb25maWcuYXZhaWxhYmlsaXR5Wm9uZTtcbiAgICB0aGlzLl9jcmVhdGVkQXQgPSBjb25maWcuY3JlYXRlZEF0O1xuICAgIHRoaXMuX2RlbGV0ZUVicyA9IGNvbmZpZy5kZWxldGVFYnM7XG4gICAgdGhpcy5fZGVsZXRlRWlwID0gY29uZmlnLmRlbGV0ZUVpcDtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSBjb25maWcuZWJzT3B0aW1pemVkO1xuICAgIHRoaXMuX2Vjc0NsdXN0ZXJBcm4gPSBjb25maWcuZWNzQ2x1c3RlckFybjtcbiAgICB0aGlzLl9lbGFzdGljSXAgPSBjb25maWcuZWxhc3RpY0lwO1xuICAgIHRoaXMuX2hvc3RuYW1lID0gY29uZmlnLmhvc3RuYW1lO1xuICAgIHRoaXMuX2luZnJhc3RydWN0dXJlQ2xhc3MgPSBjb25maWcuaW5mcmFzdHJ1Y3R1cmVDbGFzcztcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IGNvbmZpZy5pbnN0YWxsVXBkYXRlc09uQm9vdDtcbiAgICB0aGlzLl9pbnN0YW5jZVByb2ZpbGVBcm4gPSBjb25maWcuaW5zdGFuY2VQcm9maWxlQXJuO1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IGNvbmZpZy5pbnN0YW5jZVR5cGU7XG4gICAgdGhpcy5fbGFzdFNlcnZpY2VFcnJvcklkID0gY29uZmlnLmxhc3RTZXJ2aWNlRXJyb3JJZDtcbiAgICB0aGlzLl9sYXllcklkcyA9IGNvbmZpZy5sYXllcklkcztcbiAgICB0aGlzLl9vcyA9IGNvbmZpZy5vcztcbiAgICB0aGlzLl9wbGF0Zm9ybSA9IGNvbmZpZy5wbGF0Zm9ybTtcbiAgICB0aGlzLl9wcml2YXRlRG5zID0gY29uZmlnLnByaXZhdGVEbnM7XG4gICAgdGhpcy5fcHJpdmF0ZUlwID0gY29uZmlnLnByaXZhdGVJcDtcbiAgICB0aGlzLl9wdWJsaWNEbnMgPSBjb25maWcucHVibGljRG5zO1xuICAgIHRoaXMuX3B1YmxpY0lwID0gY29uZmlnLnB1YmxpY0lwO1xuICAgIHRoaXMuX3JlZ2lzdGVyZWRCeSA9IGNvbmZpZy5yZWdpc3RlcmVkQnk7XG4gICAgdGhpcy5fcmVwb3J0ZWRBZ2VudFZlcnNpb24gPSBjb25maWcucmVwb3J0ZWRBZ2VudFZlcnNpb247XG4gICAgdGhpcy5fcmVwb3J0ZWRPc0ZhbWlseSA9IGNvbmZpZy5yZXBvcnRlZE9zRmFtaWx5O1xuICAgIHRoaXMuX3JlcG9ydGVkT3NOYW1lID0gY29uZmlnLnJlcG9ydGVkT3NOYW1lO1xuICAgIHRoaXMuX3JlcG9ydGVkT3NWZXJzaW9uID0gY29uZmlnLnJlcG9ydGVkT3NWZXJzaW9uO1xuICAgIHRoaXMuX3Jvb3REZXZpY2VUeXBlID0gY29uZmlnLnJvb3REZXZpY2VUeXBlO1xuICAgIHRoaXMuX3Jvb3REZXZpY2VWb2x1bWVJZCA9IGNvbmZpZy5yb290RGV2aWNlVm9sdW1lSWQ7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IGNvbmZpZy5zZWN1cml0eUdyb3VwSWRzO1xuICAgIHRoaXMuX3NzaEhvc3REc2FLZXlGaW5nZXJwcmludCA9IGNvbmZpZy5zc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQ7XG4gICAgdGhpcy5fc3NoSG9zdFJzYUtleUZpbmdlcnByaW50ID0gY29uZmlnLnNzaEhvc3RSc2FLZXlGaW5nZXJwcmludDtcbiAgICB0aGlzLl9zc2hLZXlOYW1lID0gY29uZmlnLnNzaEtleU5hbWU7XG4gICAgdGhpcy5fc3RhY2tJZCA9IGNvbmZpZy5zdGFja0lkO1xuICAgIHRoaXMuX3N0YXRlID0gY29uZmlnLnN0YXRlO1xuICAgIHRoaXMuX3N0YXR1cyA9IGNvbmZpZy5zdGF0dXM7XG4gICAgdGhpcy5fc3VibmV0SWQgPSBjb25maWcuc3VibmV0SWQ7XG4gICAgdGhpcy5fdGVuYW5jeSA9IGNvbmZpZy50ZW5hbmN5O1xuICAgIHRoaXMuX3ZpcnR1YWxpemF0aW9uVHlwZSA9IGNvbmZpZy52aXJ0dWFsaXphdGlvblR5cGU7XG4gICAgdGhpcy5fZWJzQmxvY2tEZXZpY2UgPSBjb25maWcuZWJzQmxvY2tEZXZpY2U7XG4gICAgdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2UgPSBjb25maWcuZXBoZW1lcmFsQmxvY2tEZXZpY2U7XG4gICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlID0gY29uZmlnLnJvb3RCbG9ja0RldmljZTtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhZ2VudF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FnZW50VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWdlbnRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWdlbnRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWdlbnRWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hZ2VudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZ2VudFZlcnNpb24oKSB7XG4gICAgdGhpcy5fYWdlbnRWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZ2VudFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWdlbnRWZXJzaW9uO1xuICB9XG5cbiAgLy8gYW1pX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYW1pSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFtaUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYW1pX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbWlJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYW1pSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBbWlJZCgpIHtcbiAgICB0aGlzLl9hbWlJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYW1pSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYW1pSWQ7XG4gIH1cblxuICAvLyBhcmNoaXRlY3R1cmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXJjaGl0ZWN0dXJlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhcmNoaXRlY3R1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcmNoaXRlY3R1cmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFyY2hpdGVjdHVyZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXJjaGl0ZWN0dXJlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXJjaGl0ZWN0dXJlKCkge1xuICAgIHRoaXMuX2FyY2hpdGVjdHVyZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXJjaGl0ZWN0dXJlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FyY2hpdGVjdHVyZTtcbiAgfVxuXG4gIC8vIGF1dG9fc2NhbGluZ190eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9TY2FsaW5nVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0b1NjYWxpbmdUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0b19zY2FsaW5nX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9TY2FsaW5nVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b1NjYWxpbmdUeXBlKCkge1xuICAgIHRoaXMuX2F1dG9TY2FsaW5nVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0b1NjYWxpbmdUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9TY2FsaW5nVHlwZTtcbiAgfVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmU7XG4gIH1cblxuICAvLyBjcmVhdGVkX2F0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlZEF0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGVkQXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVkX2F0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGVkQXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZWRBdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZWRBdCgpIHtcbiAgICB0aGlzLl9jcmVhdGVkQXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZWRBdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVkQXQ7XG4gIH1cblxuICAvLyBkZWxldGVfZWJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZUVicz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGVsZXRlRWJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlbGV0ZV9lYnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGVFYnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RlbGV0ZUVicyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZUVicygpIHtcbiAgICB0aGlzLl9kZWxldGVFYnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZUVic0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVFYnM7XG4gIH1cblxuICAvLyBkZWxldGVfZWlwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZUVpcD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGVsZXRlRWlwKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlbGV0ZV9laXAnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGVFaXAodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RlbGV0ZUVpcCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZUVpcCgpIHtcbiAgICB0aGlzLl9kZWxldGVFaXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZUVpcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVFaXA7XG4gIH1cblxuICAvLyBlYnNfb3B0aW1pemVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vic09wdGltaXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZWJzT3B0aW1pemVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Vic19vcHRpbWl6ZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlYnNPcHRpbWl6ZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Vic09wdGltaXplZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVic09wdGltaXplZCgpIHtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lYnNPcHRpbWl6ZWQ7XG4gIH1cblxuICAvLyBlYzJfaW5zdGFuY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYzJJbnN0YW5jZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWMyX2luc3RhbmNlX2lkJyk7XG4gIH1cblxuICAvLyBlY3NfY2x1c3Rlcl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lY3NDbHVzdGVyQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlY3NDbHVzdGVyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWNzX2NsdXN0ZXJfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBlY3NDbHVzdGVyQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lY3NDbHVzdGVyQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWNzQ2x1c3RlckFybigpIHtcbiAgICB0aGlzLl9lY3NDbHVzdGVyQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlY3NDbHVzdGVyQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vjc0NsdXN0ZXJBcm47XG4gIH1cblxuICAvLyBlbGFzdGljX2lwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0lwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbGFzdGljSXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbGFzdGljX2lwJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbGFzdGljSXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VsYXN0aWNJcCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNJcCgpIHtcbiAgICB0aGlzLl9lbGFzdGljSXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNJcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljSXA7XG4gIH1cblxuICAvLyBob3N0bmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3RuYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBob3N0bmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RuYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBob3N0bmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdG5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3N0bmFtZSgpIHtcbiAgICB0aGlzLl9ob3N0bmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdG5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW5mcmFzdHJ1Y3R1cmVfY2xhc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmZyYXN0cnVjdHVyZUNsYXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbmZyYXN0cnVjdHVyZUNsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5mcmFzdHJ1Y3R1cmVfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluZnJhc3RydWN0dXJlQ2xhc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luZnJhc3RydWN0dXJlQ2xhc3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmZyYXN0cnVjdHVyZUNsYXNzKCkge1xuICAgIHRoaXMuX2luZnJhc3RydWN0dXJlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluZnJhc3RydWN0dXJlQ2xhc3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5mcmFzdHJ1Y3R1cmVDbGFzcztcbiAgfVxuXG4gIC8vIGluc3RhbGxfdXBkYXRlc19vbl9ib290IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbGxVcGRhdGVzT25Cb290PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbGxVcGRhdGVzT25Cb290KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbGxVcGRhdGVzT25Cb290KCkge1xuICAgIHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YWxsVXBkYXRlc09uQm9vdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YWxsVXBkYXRlc09uQm9vdDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3Byb2ZpbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VQcm9maWxlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVByb2ZpbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9wcm9maWxlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VQcm9maWxlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVByb2ZpbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZVByb2ZpbGVBcm4oKSB7XG4gICAgdGhpcy5faW5zdGFuY2VQcm9maWxlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZVByb2ZpbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VQcm9maWxlQXJuO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIGxhc3Rfc2VydmljZV9lcnJvcl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhc3RTZXJ2aWNlRXJyb3JJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGFzdFNlcnZpY2VFcnJvcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9zZXJ2aWNlX2Vycm9yX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXN0U2VydmljZUVycm9ySWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhc3RTZXJ2aWNlRXJyb3JJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExhc3RTZXJ2aWNlRXJyb3JJZCgpIHtcbiAgICB0aGlzLl9sYXN0U2VydmljZUVycm9ySWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhc3RTZXJ2aWNlRXJyb3JJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXN0U2VydmljZUVycm9ySWQ7XG4gIH1cblxuICAvLyBsYXllcl9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGF5ZXJJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgbGF5ZXJJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnbGF5ZXJfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYXllcklkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9sYXllcklkcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYXllcklkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sYXllcklkcztcbiAgfVxuXG4gIC8vIG9zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG9zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9zKCkge1xuICAgIHRoaXMuX29zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcztcbiAgfVxuXG4gIC8vIHBsYXRmb3JtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGxhdGZvcm0/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBsYXRmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxhdGZvcm0nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYXRmb3JtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYXRmb3JtKCkge1xuICAgIHRoaXMuX3BsYXRmb3JtID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGF0Zm9ybUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybTtcbiAgfVxuXG4gIC8vIHByaXZhdGVfZG5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJpdmF0ZURucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZURucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfZG5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlRG5zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcml2YXRlRG5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpdmF0ZURucygpIHtcbiAgICB0aGlzLl9wcml2YXRlRG5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcml2YXRlRG5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVEbnM7XG4gIH1cblxuICAvLyBwcml2YXRlX2lwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJpdmF0ZUlwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcml2YXRlSXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcml2YXRlX2lwJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcml2YXRlSXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByaXZhdGVJcCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByaXZhdGVJcCgpIHtcbiAgICB0aGlzLl9wcml2YXRlSXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByaXZhdGVJcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcml2YXRlSXA7XG4gIH1cblxuICAvLyBwdWJsaWNfZG5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHVibGljRG5zPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwdWJsaWNEbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwdWJsaWNfZG5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaWNEbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3B1YmxpY0RucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1YmxpY0RucygpIHtcbiAgICB0aGlzLl9wdWJsaWNEbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB1YmxpY0Ruc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaWNEbnM7XG4gIH1cblxuICAvLyBwdWJsaWNfaXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wdWJsaWNJcD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHVibGljSXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwdWJsaWNfaXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHB1YmxpY0lwKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wdWJsaWNJcCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1YmxpY0lwKCkge1xuICAgIHRoaXMuX3B1YmxpY0lwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwdWJsaWNJcElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaWNJcDtcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyZWRfYnkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWdpc3RlcmVkQnk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlZ2lzdGVyZWRCeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lzdGVyZWRfYnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlZ2lzdGVyZWRCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJlZEJ5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVnaXN0ZXJlZEJ5KCkge1xuICAgIHRoaXMuX3JlZ2lzdGVyZWRCeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVnaXN0ZXJlZEJ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyZWRCeTtcbiAgfVxuXG4gIC8vIHJlcG9ydGVkX2FnZW50X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBvcnRlZEFnZW50VmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRBZ2VudFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvcnRlZF9hZ2VudF92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvcnRlZEFnZW50VmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwb3J0ZWRBZ2VudFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXBvcnRlZEFnZW50VmVyc2lvbigpIHtcbiAgICB0aGlzLl9yZXBvcnRlZEFnZW50VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwb3J0ZWRBZ2VudFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3J0ZWRBZ2VudFZlcnNpb247XG4gIH1cblxuICAvLyByZXBvcnRlZF9vc19mYW1pbHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBvcnRlZE9zRmFtaWx5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXBvcnRlZE9zRmFtaWx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwb3J0ZWRfb3NfZmFtaWx5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvcnRlZE9zRmFtaWx5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvcnRlZE9zRmFtaWx5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwb3J0ZWRPc0ZhbWlseSgpIHtcbiAgICB0aGlzLl9yZXBvcnRlZE9zRmFtaWx5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBvcnRlZE9zRmFtaWx5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcG9ydGVkT3NGYW1pbHk7XG4gIH1cblxuICAvLyByZXBvcnRlZF9vc19uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVwb3J0ZWRPc05hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcG9ydGVkT3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwb3J0ZWRfb3NfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3J0ZWRPc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlcG9ydGVkT3NOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVwb3J0ZWRPc05hbWUoKSB7XG4gICAgdGhpcy5fcmVwb3J0ZWRPc05hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9ydGVkT3NOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcG9ydGVkT3NOYW1lO1xuICB9XG5cbiAgLy8gcmVwb3J0ZWRfb3NfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcG9ydGVkT3NWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXBvcnRlZE9zVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9ydGVkX29zX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcG9ydGVkT3NWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvcnRlZE9zVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcG9ydGVkT3NWZXJzaW9uKCkge1xuICAgIHRoaXMuX3JlcG9ydGVkT3NWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXBvcnRlZE9zVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBvcnRlZE9zVmVyc2lvbjtcbiAgfVxuXG4gIC8vIHJvb3RfZGV2aWNlX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb290RGV2aWNlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9vdERldmljZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb290X2RldmljZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCByb290RGV2aWNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9vdERldmljZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb290RGV2aWNlVHlwZSgpIHtcbiAgICB0aGlzLl9yb290RGV2aWNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9vdERldmljZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdERldmljZVR5cGU7XG4gIH1cblxuICAvLyByb290X2RldmljZV92b2x1bWVfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb290RGV2aWNlVm9sdW1lSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvb3REZXZpY2VWb2x1bWVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jvb3RfZGV2aWNlX3ZvbHVtZV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9vdERldmljZVZvbHVtZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb290RGV2aWNlVm9sdW1lSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb290RGV2aWNlVm9sdW1lSWQoKSB7XG4gICAgdGhpcy5fcm9vdERldmljZVZvbHVtZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290RGV2aWNlVm9sdW1lSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdERldmljZVZvbHVtZUlkO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHM7XG4gIH1cblxuICAvLyBzc2hfaG9zdF9kc2Ffa2V5X2ZpbmdlcnByaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NoSG9zdERzYUtleUZpbmdlcnByaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2hfaG9zdF9kc2Ffa2V5X2ZpbmdlcnByaW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzaEhvc3REc2FLZXlGaW5nZXJwcmludCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzaEhvc3REc2FLZXlGaW5nZXJwcmludCgpIHtcbiAgICB0aGlzLl9zc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzaEhvc3REc2FLZXlGaW5nZXJwcmludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2hIb3N0RHNhS2V5RmluZ2VycHJpbnQ7XG4gIH1cblxuICAvLyBzc2hfaG9zdF9yc2Ffa2V5X2ZpbmdlcnByaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3NoSG9zdFJzYUtleUZpbmdlcnByaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2hIb3N0UnNhS2V5RmluZ2VycHJpbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2hfaG9zdF9yc2Ffa2V5X2ZpbmdlcnByaW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2hIb3N0UnNhS2V5RmluZ2VycHJpbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzaEhvc3RSc2FLZXlGaW5nZXJwcmludCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzaEhvc3RSc2FLZXlGaW5nZXJwcmludCgpIHtcbiAgICB0aGlzLl9zc2hIb3N0UnNhS2V5RmluZ2VycHJpbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzaEhvc3RSc2FLZXlGaW5nZXJwcmludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2hIb3N0UnNhS2V5RmluZ2VycHJpbnQ7XG4gIH1cblxuICAvLyBzc2hfa2V5X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zc2hLZXlOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2hLZXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3NoX2tleV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2hLZXlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zc2hLZXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NoS2V5TmFtZSgpIHtcbiAgICB0aGlzLl9zc2hLZXlOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzc2hLZXlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzaEtleU5hbWU7XG4gIH1cblxuICAvLyBzdGFja19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zdGFja0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGFja0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhY2tfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YWNrSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YWNrSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhY2tJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFja0lkO1xuICB9XG5cbiAgLy8gc3RhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlKCkge1xuICAgIHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXR1cz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXR1cygpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0YXR1c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICAvLyBzdWJuZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJuZXRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VibmV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWJuZXRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWJuZXRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldElkKCkge1xuICAgIHRoaXMuX3N1Ym5ldElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZDtcbiAgfVxuXG4gIC8vIHRlbmFuY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZW5hbmN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0ZW5hbmN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGVuYW5jeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVuYW5jeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGVuYW5jeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlbmFuY3koKSB7XG4gICAgdGhpcy5fdGVuYW5jeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVuYW5jeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5hbmN5O1xuICB9XG5cbiAgLy8gdmlydHVhbGl6YXRpb25fdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZpcnR1YWxpemF0aW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmlydHVhbGl6YXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlydHVhbGl6YXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmlydHVhbGl6YXRpb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aXJ0dWFsaXphdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWaXJ0dWFsaXphdGlvblR5cGUoKSB7XG4gICAgdGhpcy5fdmlydHVhbGl6YXRpb25UeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aXJ0dWFsaXphdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbGl6YXRpb25UeXBlO1xuICB9XG5cbiAgLy8gZWJzX2Jsb2NrX2RldmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VFYnNCbG9ja0RldmljZVtdOyBcbiAgcHVibGljIGdldCBlYnNCbG9ja0RldmljZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWJzX2Jsb2NrX2RldmljZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic0Jsb2NrRGV2aWNlKHZhbHVlOiBPcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2VbXSkge1xuICAgIHRoaXMuX2Vic0Jsb2NrRGV2aWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWJzQmxvY2tEZXZpY2UoKSB7XG4gICAgdGhpcy5fZWJzQmxvY2tEZXZpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic0Jsb2NrRGV2aWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic0Jsb2NrRGV2aWNlO1xuICB9XG5cbiAgLy8gZXBoZW1lcmFsX2Jsb2NrX2RldmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lcGhlbWVyYWxCbG9ja0RldmljZT86IE9wc3dvcmtzSW5zdGFuY2VFcGhlbWVyYWxCbG9ja0RldmljZVtdOyBcbiAgcHVibGljIGdldCBlcGhlbWVyYWxCbG9ja0RldmljZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXBoZW1lcmFsX2Jsb2NrX2RldmljZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVwaGVtZXJhbEJsb2NrRGV2aWNlKHZhbHVlOiBPcHN3b3Jrc0luc3RhbmNlRXBoZW1lcmFsQmxvY2tEZXZpY2VbXSkge1xuICAgIHRoaXMuX2VwaGVtZXJhbEJsb2NrRGV2aWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXBoZW1lcmFsQmxvY2tEZXZpY2UoKSB7XG4gICAgdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVwaGVtZXJhbEJsb2NrRGV2aWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VwaGVtZXJhbEJsb2NrRGV2aWNlO1xuICB9XG5cbiAgLy8gcm9vdF9ibG9ja19kZXZpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9vdEJsb2NrRGV2aWNlPzogT3Bzd29ya3NJbnN0YW5jZVJvb3RCbG9ja0RldmljZVtdOyBcbiAgcHVibGljIGdldCByb290QmxvY2tEZXZpY2UoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Jvb3RfYmxvY2tfZGV2aWNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcm9vdEJsb2NrRGV2aWNlKHZhbHVlOiBPcHN3b3Jrc0luc3RhbmNlUm9vdEJsb2NrRGV2aWNlW10pIHtcbiAgICB0aGlzLl9yb290QmxvY2tEZXZpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb290QmxvY2tEZXZpY2UoKSB7XG4gICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290QmxvY2tEZXZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdEJsb2NrRGV2aWNlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgT3Bzd29ya3NJbnN0YW5jZVRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRpbWVvdXRzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IE9wc3dvcmtzSW5zdGFuY2VUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhZ2VudF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hZ2VudFZlcnNpb24pLFxuICAgICAgYW1pX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbWlJZCksXG4gICAgICBhcmNoaXRlY3R1cmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FyY2hpdGVjdHVyZSksXG4gICAgICBhdXRvX3NjYWxpbmdfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXV0b1NjYWxpbmdUeXBlKSxcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdmFpbGFiaWxpdHlab25lKSxcbiAgICAgIGNyZWF0ZWRfYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NyZWF0ZWRBdCksXG4gICAgICBkZWxldGVfZWJzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZGVsZXRlRWJzKSxcbiAgICAgIGRlbGV0ZV9laXA6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9kZWxldGVFaXApLFxuICAgICAgZWJzX29wdGltaXplZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2Vic09wdGltaXplZCksXG4gICAgICBlY3NfY2x1c3Rlcl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Vjc0NsdXN0ZXJBcm4pLFxuICAgICAgZWxhc3RpY19pcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZWxhc3RpY0lwKSxcbiAgICAgIGhvc3RuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ob3N0bmFtZSksXG4gICAgICBpbmZyYXN0cnVjdHVyZV9jbGFzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5mcmFzdHJ1Y3R1cmVDbGFzcyksXG4gICAgICBpbnN0YWxsX3VwZGF0ZXNfb25fYm9vdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2luc3RhbGxVcGRhdGVzT25Cb290KSxcbiAgICAgIGluc3RhbmNlX3Byb2ZpbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVByb2ZpbGVBcm4pLFxuICAgICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VUeXBlKSxcbiAgICAgIGxhc3Rfc2VydmljZV9lcnJvcl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbGFzdFNlcnZpY2VFcnJvcklkKSxcbiAgICAgIGxheWVyX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fbGF5ZXJJZHMpLFxuICAgICAgb3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX29zKSxcbiAgICAgIHBsYXRmb3JtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wbGF0Zm9ybSksXG4gICAgICBwcml2YXRlX2RuczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHJpdmF0ZURucyksXG4gICAgICBwcml2YXRlX2lwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcml2YXRlSXApLFxuICAgICAgcHVibGljX2RuczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHVibGljRG5zKSxcbiAgICAgIHB1YmxpY19pcDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcHVibGljSXApLFxuICAgICAgcmVnaXN0ZXJlZF9ieTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVnaXN0ZXJlZEJ5KSxcbiAgICAgIHJlcG9ydGVkX2FnZW50X3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcG9ydGVkQWdlbnRWZXJzaW9uKSxcbiAgICAgIHJlcG9ydGVkX29zX2ZhbWlseTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcmVwb3J0ZWRPc0ZhbWlseSksXG4gICAgICByZXBvcnRlZF9vc19uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXBvcnRlZE9zTmFtZSksXG4gICAgICByZXBvcnRlZF9vc192ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXBvcnRlZE9zVmVyc2lvbiksXG4gICAgICByb290X2RldmljZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yb290RGV2aWNlVHlwZSksXG4gICAgICByb290X2RldmljZV92b2x1bWVfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Jvb3REZXZpY2VWb2x1bWVJZCksXG4gICAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3NlY3VyaXR5R3JvdXBJZHMpLFxuICAgICAgc3NoX2hvc3RfZHNhX2tleV9maW5nZXJwcmludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3NoSG9zdERzYUtleUZpbmdlcnByaW50KSxcbiAgICAgIHNzaF9ob3N0X3JzYV9rZXlfZmluZ2VycHJpbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NzaEhvc3RSc2FLZXlGaW5nZXJwcmludCksXG4gICAgICBzc2hfa2V5X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NzaEtleU5hbWUpLFxuICAgICAgc3RhY2tfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0YWNrSWQpLFxuICAgICAgc3RhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0YXRlKSxcbiAgICAgIHN0YXR1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3RhdHVzKSxcbiAgICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3VibmV0SWQpLFxuICAgICAgdGVuYW5jeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGVuYW5jeSksXG4gICAgICB2aXJ0dWFsaXphdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92aXJ0dWFsaXphdGlvblR5cGUpLFxuICAgICAgZWJzX2Jsb2NrX2RldmljZTogY2RrdGYubGlzdE1hcHBlcihvcHN3b3Jrc0luc3RhbmNlRWJzQmxvY2tEZXZpY2VUb1RlcnJhZm9ybSkodGhpcy5fZWJzQmxvY2tEZXZpY2UpLFxuICAgICAgZXBoZW1lcmFsX2Jsb2NrX2RldmljZTogY2RrdGYubGlzdE1hcHBlcihvcHN3b3Jrc0luc3RhbmNlRXBoZW1lcmFsQmxvY2tEZXZpY2VUb1RlcnJhZm9ybSkodGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2UpLFxuICAgICAgcm9vdF9ibG9ja19kZXZpY2U6IGNka3RmLmxpc3RNYXBwZXIob3Bzd29ya3NJbnN0YW5jZVJvb3RCbG9ja0RldmljZVRvVGVycmFmb3JtKSh0aGlzLl9yb290QmxvY2tEZXZpY2UpLFxuICAgICAgdGltZW91dHM6IG9wc3dvcmtzSW5zdGFuY2VUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==