"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchTemplate = exports.launchTemplateTagSpecificationsToTerraform = exports.LaunchTemplatePlacementOutputReference = exports.launchTemplatePlacementToTerraform = exports.launchTemplateNetworkInterfacesToTerraform = exports.LaunchTemplateMonitoringOutputReference = exports.launchTemplateMonitoringToTerraform = exports.LaunchTemplateMetadataOptionsOutputReference = exports.launchTemplateMetadataOptionsToTerraform = exports.launchTemplateLicenseSpecificationToTerraform = exports.LaunchTemplateInstanceMarketOptionsOutputReference = exports.launchTemplateInstanceMarketOptionsToTerraform = exports.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference = exports.launchTemplateInstanceMarketOptionsSpotOptionsToTerraform = exports.LaunchTemplateIamInstanceProfileOutputReference = exports.launchTemplateIamInstanceProfileToTerraform = exports.LaunchTemplateHibernationOptionsOutputReference = exports.launchTemplateHibernationOptionsToTerraform = exports.LaunchTemplateEnclaveOptionsOutputReference = exports.launchTemplateEnclaveOptionsToTerraform = exports.LaunchTemplateElasticInferenceAcceleratorOutputReference = exports.launchTemplateElasticInferenceAcceleratorToTerraform = exports.launchTemplateElasticGpuSpecificationsToTerraform = exports.LaunchTemplateCreditSpecificationOutputReference = exports.launchTemplateCreditSpecificationToTerraform = exports.LaunchTemplateCpuOptionsOutputReference = exports.launchTemplateCpuOptionsToTerraform = exports.LaunchTemplateCapacityReservationSpecificationOutputReference = exports.launchTemplateCapacityReservationSpecificationToTerraform = exports.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference = exports.launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform = exports.launchTemplateBlockDeviceMappingsToTerraform = exports.LaunchTemplateBlockDeviceMappingsEbsOutputReference = exports.launchTemplateBlockDeviceMappingsEbsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function launchTemplateBlockDeviceMappingsEbsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.stringToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.launchTemplateBlockDeviceMappingsEbsToTerraform = launchTemplateBlockDeviceMappingsEbsToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
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
        if (this._deleteOnTermination) {
            hasAnyValues = true;
            internalValueResult.deleteOnTermination = this._deleteOnTermination;
        }
        if (this._encrypted) {
            hasAnyValues = true;
            internalValueResult.encrypted = this._encrypted;
        }
        if (this._iops) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._kmsKeyId) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._snapshotId) {
            hasAnyValues = true;
            internalValueResult.snapshotId = this._snapshotId;
        }
        if (this._throughput) {
            hasAnyValues = true;
            internalValueResult.throughput = this._throughput;
        }
        if (this._volumeSize) {
            hasAnyValues = true;
            internalValueResult.volumeSize = this._volumeSize;
        }
        if (this._volumeType) {
            hasAnyValues = true;
            internalValueResult.volumeType = this._volumeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deleteOnTermination = undefined;
            this._encrypted = undefined;
            this._iops = undefined;
            this._kmsKeyId = undefined;
            this._snapshotId = undefined;
            this._throughput = undefined;
            this._volumeSize = undefined;
            this._volumeType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deleteOnTermination = value.deleteOnTermination;
            this._encrypted = value.encrypted;
            this._iops = value.iops;
            this._kmsKeyId = value.kmsKeyId;
            this._snapshotId = value.snapshotId;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }
    /**
     * @stability stable
     */
    get deleteOnTermination() {
        return this.getStringAttribute('delete_on_termination');
    }
    /**
     * @stability stable
     */
    set deleteOnTermination(value) {
        this._deleteOnTermination = value;
    }
    /**
     * @stability stable
     */
    resetDeleteOnTermination() {
        this._deleteOnTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deleteOnTerminationInput() {
        return this._deleteOnTermination;
    }
    /**
     * @stability stable
     */
    get encrypted() {
        return this.getStringAttribute('encrypted');
    }
    /**
     * @stability stable
     */
    set encrypted(value) {
        this._encrypted = value;
    }
    /**
     * @stability stable
     */
    resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptedInput() {
        return this._encrypted;
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
    /**
     * @stability stable
     */
    get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    /**
     * @stability stable
     */
    set snapshotId(value) {
        this._snapshotId = value;
    }
    /**
     * @stability stable
     */
    resetSnapshotId() {
        this._snapshotId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snapshotIdInput() {
        return this._snapshotId;
    }
    /**
     * @stability stable
     */
    get throughput() {
        return this.getNumberAttribute('throughput');
    }
    /**
     * @stability stable
     */
    set throughput(value) {
        this._throughput = value;
    }
    /**
     * @stability stable
     */
    resetThroughput() {
        this._throughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get throughputInput() {
        return this._throughput;
    }
    /**
     * @stability stable
     */
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    /**
     * @stability stable
     */
    set volumeSize(value) {
        this._volumeSize = value;
    }
    /**
     * @stability stable
     */
    resetVolumeSize() {
        this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get volumeSizeInput() {
        return this._volumeSize;
    }
    /**
     * @stability stable
     */
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
    /**
     * @stability stable
     */
    set volumeType(value) {
        this._volumeType = value;
    }
    /**
     * @stability stable
     */
    resetVolumeType() {
        this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get volumeTypeInput() {
        return this._volumeType;
    }
}
exports.LaunchTemplateBlockDeviceMappingsEbsOutputReference = LaunchTemplateBlockDeviceMappingsEbsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
LaunchTemplateBlockDeviceMappingsEbsOutputReference[_a] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateBlockDeviceMappingsEbsOutputReference", version: "3.0.1" };
function launchTemplateBlockDeviceMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.stringToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
        ebs: launchTemplateBlockDeviceMappingsEbsToTerraform(struct.ebs),
    };
}
exports.launchTemplateBlockDeviceMappingsToTerraform = launchTemplateBlockDeviceMappingsToTerraform;
function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_reservation_id: cdktf.stringToTerraform(struct.capacityReservationId),
    };
}
exports.launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform = launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._capacityReservationId) {
            hasAnyValues = true;
            internalValueResult.capacityReservationId = this._capacityReservationId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._capacityReservationId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._capacityReservationId = value.capacityReservationId;
        }
    }
    /**
     * @stability stable
     */
    get capacityReservationId() {
        return this.getStringAttribute('capacity_reservation_id');
    }
    /**
     * @stability stable
     */
    set capacityReservationId(value) {
        this._capacityReservationId = value;
    }
    /**
     * @stability stable
     */
    resetCapacityReservationId() {
        this._capacityReservationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityReservationIdInput() {
        return this._capacityReservationId;
    }
}
exports.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference = LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference;
_b = JSII_RTTI_SYMBOL_1;
LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference[_b] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference", version: "3.0.1" };
function launchTemplateCapacityReservationSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_reservation_preference: cdktf.stringToTerraform(struct.capacityReservationPreference),
        capacity_reservation_target: launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct.capacityReservationTarget),
    };
}
exports.launchTemplateCapacityReservationSpecificationToTerraform = launchTemplateCapacityReservationSpecificationToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // capacity_reservation_target - computed: false, optional: true, required: false
        this._capacityReservationTarget = new LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _r, _s;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._capacityReservationPreference) {
            hasAnyValues = true;
            internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
        }
        if ((_r = this._capacityReservationTarget) === null || _r === void 0 ? void 0 : _r.internalValue) {
            hasAnyValues = true;
            internalValueResult.capacityReservationTarget = (_s = this._capacityReservationTarget) === null || _s === void 0 ? void 0 : _s.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._capacityReservationPreference = undefined;
            this._capacityReservationTarget.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._capacityReservationPreference = value.capacityReservationPreference;
            this._capacityReservationTarget.internalValue = value.capacityReservationTarget;
        }
    }
    /**
     * @stability stable
     */
    get capacityReservationPreference() {
        return this.getStringAttribute('capacity_reservation_preference');
    }
    /**
     * @stability stable
     */
    set capacityReservationPreference(value) {
        this._capacityReservationPreference = value;
    }
    /**
     * @stability stable
     */
    resetCapacityReservationPreference() {
        this._capacityReservationPreference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityReservationPreferenceInput() {
        return this._capacityReservationPreference;
    }
    /**
     * @stability stable
     */
    get capacityReservationTarget() {
        return this._capacityReservationTarget;
    }
    /**
     * @stability stable
     */
    putCapacityReservationTarget(value) {
        this._capacityReservationTarget.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCapacityReservationTarget() {
        this._capacityReservationTarget.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityReservationTargetInput() {
        return this._capacityReservationTarget.internalValue;
    }
}
exports.LaunchTemplateCapacityReservationSpecificationOutputReference = LaunchTemplateCapacityReservationSpecificationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
LaunchTemplateCapacityReservationSpecificationOutputReference[_c] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateCapacityReservationSpecificationOutputReference", version: "3.0.1" };
function launchTemplateCpuOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        core_count: cdktf.numberToTerraform(struct.coreCount),
        threads_per_core: cdktf.numberToTerraform(struct.threadsPerCore),
    };
}
exports.launchTemplateCpuOptionsToTerraform = launchTemplateCpuOptionsToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateCpuOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._coreCount) {
            hasAnyValues = true;
            internalValueResult.coreCount = this._coreCount;
        }
        if (this._threadsPerCore) {
            hasAnyValues = true;
            internalValueResult.threadsPerCore = this._threadsPerCore;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._coreCount = undefined;
            this._threadsPerCore = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._coreCount = value.coreCount;
            this._threadsPerCore = value.threadsPerCore;
        }
    }
    /**
     * @stability stable
     */
    get coreCount() {
        return this.getNumberAttribute('core_count');
    }
    /**
     * @stability stable
     */
    set coreCount(value) {
        this._coreCount = value;
    }
    /**
     * @stability stable
     */
    resetCoreCount() {
        this._coreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get coreCountInput() {
        return this._coreCount;
    }
    /**
     * @stability stable
     */
    get threadsPerCore() {
        return this.getNumberAttribute('threads_per_core');
    }
    /**
     * @stability stable
     */
    set threadsPerCore(value) {
        this._threadsPerCore = value;
    }
    /**
     * @stability stable
     */
    resetThreadsPerCore() {
        this._threadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get threadsPerCoreInput() {
        return this._threadsPerCore;
    }
}
exports.LaunchTemplateCpuOptionsOutputReference = LaunchTemplateCpuOptionsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
LaunchTemplateCpuOptionsOutputReference[_d] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateCpuOptionsOutputReference", version: "3.0.1" };
function launchTemplateCreditSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_credits: cdktf.stringToTerraform(struct.cpuCredits),
    };
}
exports.launchTemplateCreditSpecificationToTerraform = launchTemplateCreditSpecificationToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
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
        if (this._cpuCredits) {
            hasAnyValues = true;
            internalValueResult.cpuCredits = this._cpuCredits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cpuCredits = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cpuCredits = value.cpuCredits;
        }
    }
    /**
     * @stability stable
     */
    get cpuCredits() {
        return this.getStringAttribute('cpu_credits');
    }
    /**
     * @stability stable
     */
    set cpuCredits(value) {
        this._cpuCredits = value;
    }
    /**
     * @stability stable
     */
    resetCpuCredits() {
        this._cpuCredits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cpuCreditsInput() {
        return this._cpuCredits;
    }
}
exports.LaunchTemplateCreditSpecificationOutputReference = LaunchTemplateCreditSpecificationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
LaunchTemplateCreditSpecificationOutputReference[_e] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateCreditSpecificationOutputReference", version: "3.0.1" };
function launchTemplateElasticGpuSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.launchTemplateElasticGpuSpecificationsToTerraform = launchTemplateElasticGpuSpecificationsToTerraform;
function launchTemplateElasticInferenceAcceleratorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.launchTemplateElasticInferenceAcceleratorToTerraform = launchTemplateElasticInferenceAcceleratorToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateElasticInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
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
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get type() {
        return this.getStringAttribute('type');
    }
    /**
     * @stability stable
     */
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
}
exports.LaunchTemplateElasticInferenceAcceleratorOutputReference = LaunchTemplateElasticInferenceAcceleratorOutputReference;
_f = JSII_RTTI_SYMBOL_1;
LaunchTemplateElasticInferenceAcceleratorOutputReference[_f] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateElasticInferenceAcceleratorOutputReference", version: "3.0.1" };
function launchTemplateEnclaveOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.launchTemplateEnclaveOptionsToTerraform = launchTemplateEnclaveOptionsToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
}
exports.LaunchTemplateEnclaveOptionsOutputReference = LaunchTemplateEnclaveOptionsOutputReference;
_g = JSII_RTTI_SYMBOL_1;
LaunchTemplateEnclaveOptionsOutputReference[_g] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateEnclaveOptionsOutputReference", version: "3.0.1" };
function launchTemplateHibernationOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configured: cdktf.booleanToTerraform(struct.configured),
    };
}
exports.launchTemplateHibernationOptionsToTerraform = launchTemplateHibernationOptionsToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._configured) {
            hasAnyValues = true;
            internalValueResult.configured = this._configured;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configured = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configured = value.configured;
        }
    }
    /**
     * @stability stable
     */
    get configured() {
        return this.getBooleanAttribute('configured');
    }
    /**
     * @stability stable
     */
    set configured(value) {
        this._configured = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configuredInput() {
        return this._configured;
    }
}
exports.LaunchTemplateHibernationOptionsOutputReference = LaunchTemplateHibernationOptionsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
LaunchTemplateHibernationOptionsOutputReference[_h] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateHibernationOptionsOutputReference", version: "3.0.1" };
function launchTemplateIamInstanceProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.launchTemplateIamInstanceProfileToTerraform = launchTemplateIamInstanceProfileToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._name = value.name;
        }
    }
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    set arn(value) {
        this._arn = value;
    }
    /**
     * @stability stable
     */
    resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get arnInput() {
        return this._arn;
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
}
exports.LaunchTemplateIamInstanceProfileOutputReference = LaunchTemplateIamInstanceProfileOutputReference;
_j = JSII_RTTI_SYMBOL_1;
LaunchTemplateIamInstanceProfileOutputReference[_j] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateIamInstanceProfileOutputReference", version: "3.0.1" };
function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        block_duration_minutes: cdktf.numberToTerraform(struct.blockDurationMinutes),
        instance_interruption_behavior: cdktf.stringToTerraform(struct.instanceInterruptionBehavior),
        max_price: cdktf.stringToTerraform(struct.maxPrice),
        spot_instance_type: cdktf.stringToTerraform(struct.spotInstanceType),
        valid_until: cdktf.stringToTerraform(struct.validUntil),
    };
}
exports.launchTemplateInstanceMarketOptionsSpotOptionsToTerraform = launchTemplateInstanceMarketOptionsSpotOptionsToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._blockDurationMinutes) {
            hasAnyValues = true;
            internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
        }
        if (this._instanceInterruptionBehavior) {
            hasAnyValues = true;
            internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
        }
        if (this._maxPrice) {
            hasAnyValues = true;
            internalValueResult.maxPrice = this._maxPrice;
        }
        if (this._spotInstanceType) {
            hasAnyValues = true;
            internalValueResult.spotInstanceType = this._spotInstanceType;
        }
        if (this._validUntil) {
            hasAnyValues = true;
            internalValueResult.validUntil = this._validUntil;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._blockDurationMinutes = undefined;
            this._instanceInterruptionBehavior = undefined;
            this._maxPrice = undefined;
            this._spotInstanceType = undefined;
            this._validUntil = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._blockDurationMinutes = value.blockDurationMinutes;
            this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
            this._maxPrice = value.maxPrice;
            this._spotInstanceType = value.spotInstanceType;
            this._validUntil = value.validUntil;
        }
    }
    /**
     * @stability stable
     */
    get blockDurationMinutes() {
        return this.getNumberAttribute('block_duration_minutes');
    }
    /**
     * @stability stable
     */
    set blockDurationMinutes(value) {
        this._blockDurationMinutes = value;
    }
    /**
     * @stability stable
     */
    resetBlockDurationMinutes() {
        this._blockDurationMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockDurationMinutesInput() {
        return this._blockDurationMinutes;
    }
    /**
     * @stability stable
     */
    get instanceInterruptionBehavior() {
        return this.getStringAttribute('instance_interruption_behavior');
    }
    /**
     * @stability stable
     */
    set instanceInterruptionBehavior(value) {
        this._instanceInterruptionBehavior = value;
    }
    /**
     * @stability stable
     */
    resetInstanceInterruptionBehavior() {
        this._instanceInterruptionBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceInterruptionBehaviorInput() {
        return this._instanceInterruptionBehavior;
    }
    /**
     * @stability stable
     */
    get maxPrice() {
        return this.getStringAttribute('max_price');
    }
    /**
     * @stability stable
     */
    set maxPrice(value) {
        this._maxPrice = value;
    }
    /**
     * @stability stable
     */
    resetMaxPrice() {
        this._maxPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxPriceInput() {
        return this._maxPrice;
    }
    /**
     * @stability stable
     */
    get spotInstanceType() {
        return this.getStringAttribute('spot_instance_type');
    }
    /**
     * @stability stable
     */
    set spotInstanceType(value) {
        this._spotInstanceType = value;
    }
    /**
     * @stability stable
     */
    resetSpotInstanceType() {
        this._spotInstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotInstanceTypeInput() {
        return this._spotInstanceType;
    }
    /**
     * @stability stable
     */
    get validUntil() {
        return this.getStringAttribute('valid_until');
    }
    /**
     * @stability stable
     */
    set validUntil(value) {
        this._validUntil = value;
    }
    /**
     * @stability stable
     */
    resetValidUntil() {
        this._validUntil = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validUntilInput() {
        return this._validUntil;
    }
}
exports.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference = LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;
_k = JSII_RTTI_SYMBOL_1;
LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference[_k] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference", version: "3.0.1" };
function launchTemplateInstanceMarketOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        market_type: cdktf.stringToTerraform(struct.marketType),
        spot_options: launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct.spotOptions),
    };
}
exports.launchTemplateInstanceMarketOptionsToTerraform = launchTemplateInstanceMarketOptionsToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // spot_options - computed: false, optional: true, required: false
        this._spotOptions = new LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(this, "spot_options", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _r, _s;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._marketType) {
            hasAnyValues = true;
            internalValueResult.marketType = this._marketType;
        }
        if ((_r = this._spotOptions) === null || _r === void 0 ? void 0 : _r.internalValue) {
            hasAnyValues = true;
            internalValueResult.spotOptions = (_s = this._spotOptions) === null || _s === void 0 ? void 0 : _s.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._marketType = undefined;
            this._spotOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._marketType = value.marketType;
            this._spotOptions.internalValue = value.spotOptions;
        }
    }
    /**
     * @stability stable
     */
    get marketType() {
        return this.getStringAttribute('market_type');
    }
    /**
     * @stability stable
     */
    set marketType(value) {
        this._marketType = value;
    }
    /**
     * @stability stable
     */
    resetMarketType() {
        this._marketType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get marketTypeInput() {
        return this._marketType;
    }
    /**
     * @stability stable
     */
    get spotOptions() {
        return this._spotOptions;
    }
    /**
     * @stability stable
     */
    putSpotOptions(value) {
        this._spotOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSpotOptions() {
        this._spotOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotOptionsInput() {
        return this._spotOptions.internalValue;
    }
}
exports.LaunchTemplateInstanceMarketOptionsOutputReference = LaunchTemplateInstanceMarketOptionsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
LaunchTemplateInstanceMarketOptionsOutputReference[_l] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateInstanceMarketOptionsOutputReference", version: "3.0.1" };
function launchTemplateLicenseSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        license_configuration_arn: cdktf.stringToTerraform(struct.licenseConfigurationArn),
    };
}
exports.launchTemplateLicenseSpecificationToTerraform = launchTemplateLicenseSpecificationToTerraform;
function launchTemplateMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_protocol_ipv6: cdktf.stringToTerraform(struct.httpProtocolIpv6),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens),
    };
}
exports.launchTemplateMetadataOptionsToTerraform = launchTemplateMetadataOptionsToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._httpEndpoint) {
            hasAnyValues = true;
            internalValueResult.httpEndpoint = this._httpEndpoint;
        }
        if (this._httpProtocolIpv6) {
            hasAnyValues = true;
            internalValueResult.httpProtocolIpv6 = this._httpProtocolIpv6;
        }
        if (this._httpPutResponseHopLimit) {
            hasAnyValues = true;
            internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
        }
        if (this._httpTokens) {
            hasAnyValues = true;
            internalValueResult.httpTokens = this._httpTokens;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._httpEndpoint = undefined;
            this._httpProtocolIpv6 = undefined;
            this._httpPutResponseHopLimit = undefined;
            this._httpTokens = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._httpEndpoint = value.httpEndpoint;
            this._httpProtocolIpv6 = value.httpProtocolIpv6;
            this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
            this._httpTokens = value.httpTokens;
        }
    }
    /**
     * @stability stable
     */
    get httpEndpoint() {
        return this.getStringAttribute('http_endpoint');
    }
    /**
     * @stability stable
     */
    set httpEndpoint(value) {
        this._httpEndpoint = value;
    }
    /**
     * @stability stable
     */
    resetHttpEndpoint() {
        this._httpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpEndpointInput() {
        return this._httpEndpoint;
    }
    /**
     * @stability stable
     */
    get httpProtocolIpv6() {
        return this.getStringAttribute('http_protocol_ipv6');
    }
    /**
     * @stability stable
     */
    set httpProtocolIpv6(value) {
        this._httpProtocolIpv6 = value;
    }
    /**
     * @stability stable
     */
    resetHttpProtocolIpv6() {
        this._httpProtocolIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpProtocolIpv6Input() {
        return this._httpProtocolIpv6;
    }
    /**
     * @stability stable
     */
    get httpPutResponseHopLimit() {
        return this.getNumberAttribute('http_put_response_hop_limit');
    }
    /**
     * @stability stable
     */
    set httpPutResponseHopLimit(value) {
        this._httpPutResponseHopLimit = value;
    }
    /**
     * @stability stable
     */
    resetHttpPutResponseHopLimit() {
        this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpPutResponseHopLimitInput() {
        return this._httpPutResponseHopLimit;
    }
    /**
     * @stability stable
     */
    get httpTokens() {
        return this.getStringAttribute('http_tokens');
    }
    /**
     * @stability stable
     */
    set httpTokens(value) {
        this._httpTokens = value;
    }
    /**
     * @stability stable
     */
    resetHttpTokens() {
        this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpTokensInput() {
        return this._httpTokens;
    }
}
exports.LaunchTemplateMetadataOptionsOutputReference = LaunchTemplateMetadataOptionsOutputReference;
_m = JSII_RTTI_SYMBOL_1;
LaunchTemplateMetadataOptionsOutputReference[_m] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateMetadataOptionsOutputReference", version: "3.0.1" };
function launchTemplateMonitoringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
    };
}
exports.launchTemplateMonitoringToTerraform = launchTemplateMonitoringToTerraform;
/**
 * @stability stable
 */
class LaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
}
exports.LaunchTemplateMonitoringOutputReference = LaunchTemplateMonitoringOutputReference;
_o = JSII_RTTI_SYMBOL_1;
LaunchTemplateMonitoringOutputReference[_o] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplateMonitoringOutputReference", version: "3.0.1" };
function launchTemplateNetworkInterfacesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        associate_carrier_ip_address: cdktf.stringToTerraform(struct.associateCarrierIpAddress),
        associate_public_ip_address: cdktf.stringToTerraform(struct.associatePublicIpAddress),
        delete_on_termination: cdktf.stringToTerraform(struct.deleteOnTermination),
        description: cdktf.stringToTerraform(struct.description),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        interface_type: cdktf.stringToTerraform(struct.interfaceType),
        ipv4_address_count: cdktf.numberToTerraform(struct.ipv4AddressCount),
        ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv4Addresses),
        ipv6_address_count: cdktf.numberToTerraform(struct.ipv6AddressCount),
        ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct.ipv6Addresses),
        network_card_index: cdktf.numberToTerraform(struct.networkCardIndex),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
        private_ip_address: cdktf.stringToTerraform(struct.privateIpAddress),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        subnet_id: cdktf.stringToTerraform(struct.subnetId),
    };
}
exports.launchTemplateNetworkInterfacesToTerraform = launchTemplateNetworkInterfacesToTerraform;
function launchTemplatePlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        affinity: cdktf.stringToTerraform(struct.affinity),
        availability_zone: cdktf.stringToTerraform(struct.availabilityZone),
        group_name: cdktf.stringToTerraform(struct.groupName),
        host_id: cdktf.stringToTerraform(struct.hostId),
        host_resource_group_arn: cdktf.stringToTerraform(struct.hostResourceGroupArn),
        partition_number: cdktf.numberToTerraform(struct.partitionNumber),
        spread_domain: cdktf.stringToTerraform(struct.spreadDomain),
        tenancy: cdktf.stringToTerraform(struct.tenancy),
    };
}
exports.launchTemplatePlacementToTerraform = launchTemplatePlacementToTerraform;
/**
 * @stability stable
 */
class LaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
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
        if (this._affinity) {
            hasAnyValues = true;
            internalValueResult.affinity = this._affinity;
        }
        if (this._availabilityZone) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._groupName) {
            hasAnyValues = true;
            internalValueResult.groupName = this._groupName;
        }
        if (this._hostId) {
            hasAnyValues = true;
            internalValueResult.hostId = this._hostId;
        }
        if (this._hostResourceGroupArn) {
            hasAnyValues = true;
            internalValueResult.hostResourceGroupArn = this._hostResourceGroupArn;
        }
        if (this._partitionNumber) {
            hasAnyValues = true;
            internalValueResult.partitionNumber = this._partitionNumber;
        }
        if (this._spreadDomain) {
            hasAnyValues = true;
            internalValueResult.spreadDomain = this._spreadDomain;
        }
        if (this._tenancy) {
            hasAnyValues = true;
            internalValueResult.tenancy = this._tenancy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._affinity = undefined;
            this._availabilityZone = undefined;
            this._groupName = undefined;
            this._hostId = undefined;
            this._hostResourceGroupArn = undefined;
            this._partitionNumber = undefined;
            this._spreadDomain = undefined;
            this._tenancy = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._affinity = value.affinity;
            this._availabilityZone = value.availabilityZone;
            this._groupName = value.groupName;
            this._hostId = value.hostId;
            this._hostResourceGroupArn = value.hostResourceGroupArn;
            this._partitionNumber = value.partitionNumber;
            this._spreadDomain = value.spreadDomain;
            this._tenancy = value.tenancy;
        }
    }
    /**
     * @stability stable
     */
    get affinity() {
        return this.getStringAttribute('affinity');
    }
    /**
     * @stability stable
     */
    set affinity(value) {
        this._affinity = value;
    }
    /**
     * @stability stable
     */
    resetAffinity() {
        this._affinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get affinityInput() {
        return this._affinity;
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
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    /**
     * @stability stable
     */
    set groupName(value) {
        this._groupName = value;
    }
    /**
     * @stability stable
     */
    resetGroupName() {
        this._groupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get groupNameInput() {
        return this._groupName;
    }
    /**
     * @stability stable
     */
    get hostId() {
        return this.getStringAttribute('host_id');
    }
    /**
     * @stability stable
     */
    set hostId(value) {
        this._hostId = value;
    }
    /**
     * @stability stable
     */
    resetHostId() {
        this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostIdInput() {
        return this._hostId;
    }
    /**
     * @stability stable
     */
    get hostResourceGroupArn() {
        return this.getStringAttribute('host_resource_group_arn');
    }
    /**
     * @stability stable
     */
    set hostResourceGroupArn(value) {
        this._hostResourceGroupArn = value;
    }
    /**
     * @stability stable
     */
    resetHostResourceGroupArn() {
        this._hostResourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostResourceGroupArnInput() {
        return this._hostResourceGroupArn;
    }
    /**
     * @stability stable
     */
    get partitionNumber() {
        return this.getNumberAttribute('partition_number');
    }
    /**
     * @stability stable
     */
    set partitionNumber(value) {
        this._partitionNumber = value;
    }
    /**
     * @stability stable
     */
    resetPartitionNumber() {
        this._partitionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionNumberInput() {
        return this._partitionNumber;
    }
    /**
     * @stability stable
     */
    get spreadDomain() {
        return this.getStringAttribute('spread_domain');
    }
    /**
     * @stability stable
     */
    set spreadDomain(value) {
        this._spreadDomain = value;
    }
    /**
     * @stability stable
     */
    resetSpreadDomain() {
        this._spreadDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spreadDomainInput() {
        return this._spreadDomain;
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
}
exports.LaunchTemplatePlacementOutputReference = LaunchTemplatePlacementOutputReference;
_p = JSII_RTTI_SYMBOL_1;
LaunchTemplatePlacementOutputReference[_p] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplatePlacementOutputReference", version: "3.0.1" };
function launchTemplateTagSpecificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_type: cdktf.stringToTerraform(struct.resourceType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
    };
}
exports.launchTemplateTagSpecificationsToTerraform = launchTemplateTagSpecificationsToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template}.
 *
 * @stability stable
 */
class LaunchTemplate extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_template.html aws_launch_template} Resource.
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
        // capacity_reservation_specification - computed: false, optional: true, required: false
        this._capacityReservationSpecification = new LaunchTemplateCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification", true);
        // cpu_options - computed: false, optional: true, required: false
        this._cpuOptions = new LaunchTemplateCpuOptionsOutputReference(this, "cpu_options", true);
        // credit_specification - computed: false, optional: true, required: false
        this._creditSpecification = new LaunchTemplateCreditSpecificationOutputReference(this, "credit_specification", true);
        // elastic_inference_accelerator - computed: false, optional: true, required: false
        this._elasticInferenceAccelerator = new LaunchTemplateElasticInferenceAcceleratorOutputReference(this, "elastic_inference_accelerator", true);
        // enclave_options - computed: false, optional: true, required: false
        this._enclaveOptions = new LaunchTemplateEnclaveOptionsOutputReference(this, "enclave_options", true);
        // hibernation_options - computed: false, optional: true, required: false
        this._hibernationOptions = new LaunchTemplateHibernationOptionsOutputReference(this, "hibernation_options", true);
        // iam_instance_profile - computed: false, optional: true, required: false
        this._iamInstanceProfile = new LaunchTemplateIamInstanceProfileOutputReference(this, "iam_instance_profile", true);
        // instance_market_options - computed: false, optional: true, required: false
        this._instanceMarketOptions = new LaunchTemplateInstanceMarketOptionsOutputReference(this, "instance_market_options", true);
        // metadata_options - computed: false, optional: true, required: false
        this._metadataOptions = new LaunchTemplateMetadataOptionsOutputReference(this, "metadata_options", true);
        // monitoring - computed: false, optional: true, required: false
        this._monitoring = new LaunchTemplateMonitoringOutputReference(this, "monitoring", true);
        // placement - computed: false, optional: true, required: false
        this._placement = new LaunchTemplatePlacementOutputReference(this, "placement", true);
        this._defaultVersion = config.defaultVersion;
        this._description = config.description;
        this._disableApiTermination = config.disableApiTermination;
        this._ebsOptimized = config.ebsOptimized;
        this._imageId = config.imageId;
        this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        this._instanceType = config.instanceType;
        this._kernelId = config.kernelId;
        this._keyName = config.keyName;
        this._name = config.name;
        this._namePrefix = config.namePrefix;
        this._ramDiskId = config.ramDiskId;
        this._securityGroupNames = config.securityGroupNames;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._updateDefaultVersion = config.updateDefaultVersion;
        this._userData = config.userData;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._blockDeviceMappings = config.blockDeviceMappings;
        this._capacityReservationSpecification.internalValue = config.capacityReservationSpecification;
        this._cpuOptions.internalValue = config.cpuOptions;
        this._creditSpecification.internalValue = config.creditSpecification;
        this._elasticGpuSpecifications = config.elasticGpuSpecifications;
        this._elasticInferenceAccelerator.internalValue = config.elasticInferenceAccelerator;
        this._enclaveOptions.internalValue = config.enclaveOptions;
        this._hibernationOptions.internalValue = config.hibernationOptions;
        this._iamInstanceProfile.internalValue = config.iamInstanceProfile;
        this._instanceMarketOptions.internalValue = config.instanceMarketOptions;
        this._licenseSpecification = config.licenseSpecification;
        this._metadataOptions.internalValue = config.metadataOptions;
        this._monitoring.internalValue = config.monitoring;
        this._networkInterfaces = config.networkInterfaces;
        this._placement.internalValue = config.placement;
        this._tagSpecifications = config.tagSpecifications;
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
    get defaultVersion() {
        return this.getNumberAttribute('default_version');
    }
    /**
     * @stability stable
     */
    set defaultVersion(value) {
        this._defaultVersion = value;
    }
    /**
     * @stability stable
     */
    resetDefaultVersion() {
        this._defaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultVersionInput() {
        return this._defaultVersion;
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
    }
    /**
     * @stability stable
     */
    get disableApiTermination() {
        return this.getBooleanAttribute('disable_api_termination');
    }
    /**
     * @stability stable
     */
    set disableApiTermination(value) {
        this._disableApiTermination = value;
    }
    /**
     * @stability stable
     */
    resetDisableApiTermination() {
        this._disableApiTermination = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get disableApiTerminationInput() {
        return this._disableApiTermination;
    }
    /**
     * @stability stable
     */
    get ebsOptimized() {
        return this.getStringAttribute('ebs_optimized');
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
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    /**
     * @stability stable
     */
    set imageId(value) {
        this._imageId = value;
    }
    /**
     * @stability stable
     */
    resetImageId() {
        this._imageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageIdInput() {
        return this._imageId;
    }
    /**
     * @stability stable
     */
    get instanceInitiatedShutdownBehavior() {
        return this.getStringAttribute('instance_initiated_shutdown_behavior');
    }
    /**
     * @stability stable
     */
    set instanceInitiatedShutdownBehavior(value) {
        this._instanceInitiatedShutdownBehavior = value;
    }
    /**
     * @stability stable
     */
    resetInstanceInitiatedShutdownBehavior() {
        this._instanceInitiatedShutdownBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceInitiatedShutdownBehaviorInput() {
        return this._instanceInitiatedShutdownBehavior;
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
    get kernelId() {
        return this.getStringAttribute('kernel_id');
    }
    /**
     * @stability stable
     */
    set kernelId(value) {
        this._kernelId = value;
    }
    /**
     * @stability stable
     */
    resetKernelId() {
        this._kernelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kernelIdInput() {
        return this._kernelId;
    }
    /**
     * @stability stable
     */
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    /**
     * @stability stable
     */
    set keyName(value) {
        this._keyName = value;
    }
    /**
     * @stability stable
     */
    resetKeyName() {
        this._keyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyNameInput() {
        return this._keyName;
    }
    // latest_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get latestVersion() {
        return this.getNumberAttribute('latest_version');
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
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    /**
     * @stability stable
     */
    set namePrefix(value) {
        this._namePrefix = value;
    }
    /**
     * @stability stable
     */
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get namePrefixInput() {
        return this._namePrefix;
    }
    /**
     * @stability stable
     */
    get ramDiskId() {
        return this.getStringAttribute('ram_disk_id');
    }
    /**
     * @stability stable
     */
    set ramDiskId(value) {
        this._ramDiskId = value;
    }
    /**
     * @stability stable
     */
    resetRamDiskId() {
        this._ramDiskId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ramDiskIdInput() {
        return this._ramDiskId;
    }
    /**
     * @stability stable
     */
    get securityGroupNames() {
        return this.getListAttribute('security_group_names');
    }
    /**
     * @stability stable
     */
    set securityGroupNames(value) {
        this._securityGroupNames = value;
    }
    /**
     * @stability stable
     */
    resetSecurityGroupNames() {
        this._securityGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupNamesInput() {
        return this._securityGroupNames;
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
    get updateDefaultVersion() {
        return this.getBooleanAttribute('update_default_version');
    }
    /**
     * @stability stable
     */
    set updateDefaultVersion(value) {
        this._updateDefaultVersion = value;
    }
    /**
     * @stability stable
     */
    resetUpdateDefaultVersion() {
        this._updateDefaultVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get updateDefaultVersionInput() {
        return this._updateDefaultVersion;
    }
    /**
     * @stability stable
     */
    get userData() {
        return this.getStringAttribute('user_data');
    }
    /**
     * @stability stable
     */
    set userData(value) {
        this._userData = value;
    }
    /**
     * @stability stable
     */
    resetUserData() {
        this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userDataInput() {
        return this._userData;
    }
    /**
     * @stability stable
     */
    get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    /**
     * @stability stable
     */
    set vpcSecurityGroupIds(value) {
        this._vpcSecurityGroupIds = value;
    }
    /**
     * @stability stable
     */
    resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }
    /**
     * @stability stable
     */
    get blockDeviceMappings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('block_device_mappings');
    }
    /**
     * @stability stable
     */
    set blockDeviceMappings(value) {
        this._blockDeviceMappings = value;
    }
    /**
     * @stability stable
     */
    resetBlockDeviceMappings() {
        this._blockDeviceMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockDeviceMappingsInput() {
        return this._blockDeviceMappings;
    }
    /**
     * @stability stable
     */
    get capacityReservationSpecification() {
        return this._capacityReservationSpecification;
    }
    /**
     * @stability stable
     */
    putCapacityReservationSpecification(value) {
        this._capacityReservationSpecification.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCapacityReservationSpecification() {
        this._capacityReservationSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get capacityReservationSpecificationInput() {
        return this._capacityReservationSpecification.internalValue;
    }
    /**
     * @stability stable
     */
    get cpuOptions() {
        return this._cpuOptions;
    }
    /**
     * @stability stable
     */
    putCpuOptions(value) {
        this._cpuOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCpuOptions() {
        this._cpuOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cpuOptionsInput() {
        return this._cpuOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get creditSpecification() {
        return this._creditSpecification;
    }
    /**
     * @stability stable
     */
    putCreditSpecification(value) {
        this._creditSpecification.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCreditSpecification() {
        this._creditSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get creditSpecificationInput() {
        return this._creditSpecification.internalValue;
    }
    /**
     * @stability stable
     */
    get elasticGpuSpecifications() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('elastic_gpu_specifications');
    }
    /**
     * @stability stable
     */
    set elasticGpuSpecifications(value) {
        this._elasticGpuSpecifications = value;
    }
    /**
     * @stability stable
     */
    resetElasticGpuSpecifications() {
        this._elasticGpuSpecifications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get elasticGpuSpecificationsInput() {
        return this._elasticGpuSpecifications;
    }
    /**
     * @stability stable
     */
    get elasticInferenceAccelerator() {
        return this._elasticInferenceAccelerator;
    }
    /**
     * @stability stable
     */
    putElasticInferenceAccelerator(value) {
        this._elasticInferenceAccelerator.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetElasticInferenceAccelerator() {
        this._elasticInferenceAccelerator.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get elasticInferenceAcceleratorInput() {
        return this._elasticInferenceAccelerator.internalValue;
    }
    /**
     * @stability stable
     */
    get enclaveOptions() {
        return this._enclaveOptions;
    }
    /**
     * @stability stable
     */
    putEnclaveOptions(value) {
        this._enclaveOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEnclaveOptions() {
        this._enclaveOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enclaveOptionsInput() {
        return this._enclaveOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get hibernationOptions() {
        return this._hibernationOptions;
    }
    /**
     * @stability stable
     */
    putHibernationOptions(value) {
        this._hibernationOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHibernationOptions() {
        this._hibernationOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hibernationOptionsInput() {
        return this._hibernationOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get iamInstanceProfile() {
        return this._iamInstanceProfile;
    }
    /**
     * @stability stable
     */
    putIamInstanceProfile(value) {
        this._iamInstanceProfile.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetIamInstanceProfile() {
        this._iamInstanceProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamInstanceProfileInput() {
        return this._iamInstanceProfile.internalValue;
    }
    /**
     * @stability stable
     */
    get instanceMarketOptions() {
        return this._instanceMarketOptions;
    }
    /**
     * @stability stable
     */
    putInstanceMarketOptions(value) {
        this._instanceMarketOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInstanceMarketOptions() {
        this._instanceMarketOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceMarketOptionsInput() {
        return this._instanceMarketOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get licenseSpecification() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('license_specification');
    }
    /**
     * @stability stable
     */
    set licenseSpecification(value) {
        this._licenseSpecification = value;
    }
    /**
     * @stability stable
     */
    resetLicenseSpecification() {
        this._licenseSpecification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get licenseSpecificationInput() {
        return this._licenseSpecification;
    }
    /**
     * @stability stable
     */
    get metadataOptions() {
        return this._metadataOptions;
    }
    /**
     * @stability stable
     */
    putMetadataOptions(value) {
        this._metadataOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMetadataOptions() {
        this._metadataOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metadataOptionsInput() {
        return this._metadataOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get monitoring() {
        return this._monitoring;
    }
    /**
     * @stability stable
     */
    putMonitoring(value) {
        this._monitoring.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMonitoring() {
        this._monitoring.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get monitoringInput() {
        return this._monitoring.internalValue;
    }
    /**
     * @stability stable
     */
    get networkInterfaces() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_interfaces');
    }
    /**
     * @stability stable
     */
    set networkInterfaces(value) {
        this._networkInterfaces = value;
    }
    /**
     * @stability stable
     */
    resetNetworkInterfaces() {
        this._networkInterfaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkInterfacesInput() {
        return this._networkInterfaces;
    }
    /**
     * @stability stable
     */
    get placement() {
        return this._placement;
    }
    /**
     * @stability stable
     */
    putPlacement(value) {
        this._placement.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get placementInput() {
        return this._placement.internalValue;
    }
    /**
     * @stability stable
     */
    get tagSpecifications() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tag_specifications');
    }
    /**
     * @stability stable
     */
    set tagSpecifications(value) {
        this._tagSpecifications = value;
    }
    /**
     * @stability stable
     */
    resetTagSpecifications() {
        this._tagSpecifications = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagSpecificationsInput() {
        return this._tagSpecifications;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            default_version: cdktf.numberToTerraform(this._defaultVersion),
            description: cdktf.stringToTerraform(this._description),
            disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktf.stringToTerraform(this._ebsOptimized),
            image_id: cdktf.stringToTerraform(this._imageId),
            instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            kernel_id: cdktf.stringToTerraform(this._kernelId),
            key_name: cdktf.stringToTerraform(this._keyName),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            ram_disk_id: cdktf.stringToTerraform(this._ramDiskId),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
            user_data: cdktf.stringToTerraform(this._userData),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
            capacity_reservation_specification: launchTemplateCapacityReservationSpecificationToTerraform(this._capacityReservationSpecification.internalValue),
            cpu_options: launchTemplateCpuOptionsToTerraform(this._cpuOptions.internalValue),
            credit_specification: launchTemplateCreditSpecificationToTerraform(this._creditSpecification.internalValue),
            elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform)(this._elasticGpuSpecifications),
            elastic_inference_accelerator: launchTemplateElasticInferenceAcceleratorToTerraform(this._elasticInferenceAccelerator.internalValue),
            enclave_options: launchTemplateEnclaveOptionsToTerraform(this._enclaveOptions.internalValue),
            hibernation_options: launchTemplateHibernationOptionsToTerraform(this._hibernationOptions.internalValue),
            iam_instance_profile: launchTemplateIamInstanceProfileToTerraform(this._iamInstanceProfile.internalValue),
            instance_market_options: launchTemplateInstanceMarketOptionsToTerraform(this._instanceMarketOptions.internalValue),
            license_specification: cdktf.listMapper(launchTemplateLicenseSpecificationToTerraform)(this._licenseSpecification),
            metadata_options: launchTemplateMetadataOptionsToTerraform(this._metadataOptions.internalValue),
            monitoring: launchTemplateMonitoringToTerraform(this._monitoring.internalValue),
            network_interfaces: cdktf.listMapper(launchTemplateNetworkInterfacesToTerraform)(this._networkInterfaces),
            placement: launchTemplatePlacementToTerraform(this._placement.internalValue),
            tag_specifications: cdktf.listMapper(launchTemplateTagSpecificationsToTerraform)(this._tagSpecifications),
        };
    }
}
exports.LaunchTemplate = LaunchTemplate;
_q = JSII_RTTI_SYMBOL_1;
LaunchTemplate[_q] = { fqn: "@cdktf/provider-aws.ec2.LaunchTemplate", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
LaunchTemplate.tfResourceType = "aws_launch_template";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VjMi9sYXVuY2gtdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE0Ri9CLFNBQWdCLCtDQUErQyxDQUFDLE1BQW1HO0lBQ2pLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNyRCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3ZELFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDekQsQ0FBQTtBQUNILENBQUM7QUFmRCwwR0FlQzs7OztBQUVELE1BQWEsbURBQW9ELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7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Q0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDMUcsQ0FBQztJQUNKLENBQUM7O0FBOXBCSCx3Q0ErcEJDOzs7QUE3cEJDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNkJBQWMsR0FBVyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRWZXJzaW9uPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc2FibGVBcGlUZXJtaW5hdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzT3B0aW1pemVkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3I/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtlcm5lbElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZVByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByYW1EaXNrSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cE5hbWVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXBkYXRlRGVmYXVsdFZlcnNpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyRGF0YT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJsb2NrRGV2aWNlTWFwcGluZ3M/OiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbj86IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3B1T3B0aW9ucz86IExhdW5jaFRlbXBsYXRlQ3B1T3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVkaXRTcGVjaWZpY2F0aW9uPzogTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucz86IExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yPzogTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jbGF2ZU9wdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhpYmVybmF0aW9uT3B0aW9ucz86IExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbUluc3RhbmNlUHJvZmlsZT86IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlTWFya2V0T3B0aW9ucz86IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxpY2Vuc2VTcGVjaWZpY2F0aW9uPzogTGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1ldGFkYXRhT3B0aW9ucz86IExhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vbml0b3Jpbmc/OiBMYXVuY2hUZW1wbGF0ZU1vbml0b3Jpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZXM/OiBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGxhY2VtZW50PzogTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnU3BlY2lmaWNhdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zW107XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0VicyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGVPblRlcm1pbmF0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbmFwc2hvdElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJvdWdocHV0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZVNpemU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0Vic1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0Vic091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0Vicyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBlbmNyeXB0ZWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIHNuYXBzaG90X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNuYXBzaG90SWQpLFxuICAgIHRocm91Z2hwdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGhyb3VnaHB1dCksXG4gICAgdm9sdW1lX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lU2l6ZSksXG4gICAgdm9sdW1lX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudm9sdW1lVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc0Vic091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZU9uVGVybWluYXRpb24gPSB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5jcnlwdGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmNyeXB0ZWQgPSB0aGlzLl9lbmNyeXB0ZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pb3BzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pb3BzID0gdGhpcy5faW9wcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ttc0tleUlkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlJZCA9IHRoaXMuX2ttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc25hcHNob3RJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc25hcHNob3RJZCA9IHRoaXMuX3NuYXBzaG90SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aHJvdWdocHV0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aHJvdWdocHV0ID0gdGhpcy5fdGhyb3VnaHB1dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZvbHVtZVNpemUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZvbHVtZVNpemUgPSB0aGlzLl92b2x1bWVTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdm9sdW1lVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudm9sdW1lVHlwZSA9IHRoaXMuX3ZvbHVtZVR5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUJsb2NrRGV2aWNlTWFwcGluZ3NFYnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW9wcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc25hcHNob3RJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Rocm91Z2hwdXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92b2x1bWVTaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdm9sdW1lVHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbiA9IHZhbHVlLmRlbGV0ZU9uVGVybWluYXRpb247XG4gICAgICB0aGlzLl9lbmNyeXB0ZWQgPSB2YWx1ZS5lbmNyeXB0ZWQ7XG4gICAgICB0aGlzLl9pb3BzID0gdmFsdWUuaW9wcztcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWUua21zS2V5SWQ7XG4gICAgICB0aGlzLl9zbmFwc2hvdElkID0gdmFsdWUuc25hcHNob3RJZDtcbiAgICAgIHRoaXMuX3Rocm91Z2hwdXQgPSB2YWx1ZS50aHJvdWdocHV0O1xuICAgICAgdGhpcy5fdm9sdW1lU2l6ZSA9IHZhbHVlLnZvbHVtZVNpemU7XG4gICAgICB0aGlzLl92b2x1bWVUeXBlID0gdmFsdWUudm9sdW1lVHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBkZWxldGVfb25fdGVybWluYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlT25UZXJtaW5hdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsZXRlT25UZXJtaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZV9vbl90ZXJtaW5hdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlT25UZXJtaW5hdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZU9uVGVybWluYXRpb24oKSB7XG4gICAgdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlT25UZXJtaW5hdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uO1xuICB9XG5cbiAgLy8gZW5jcnlwdGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5jcnlwdGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmNyeXB0ZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRlZCgpIHtcbiAgICB0aGlzLl9lbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0ZWQ7XG4gIH1cblxuICAvLyBpb3BzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW9wcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaW9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lvcHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlvcHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2lvcHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJb3BzKCkge1xuICAgIHRoaXMuX2lvcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlvcHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW9wcztcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUlkO1xuICB9XG5cbiAgLy8gc25hcHNob3RfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc25hcHNob3RJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc25hcHNob3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NuYXBzaG90X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbmFwc2hvdElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbmFwc2hvdElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U25hcHNob3RJZCgpIHtcbiAgICB0aGlzLl9zbmFwc2hvdElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbmFwc2hvdElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NuYXBzaG90SWQ7XG4gIH1cblxuICAvLyB0aHJvdWdocHV0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyb3VnaHB1dD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGhyb3VnaHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Rocm91Z2hwdXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRocm91Z2hwdXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3Rocm91Z2hwdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaHJvdWdocHV0KCkge1xuICAgIHRoaXMuX3Rocm91Z2hwdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocm91Z2hwdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhyb3VnaHB1dDtcbiAgfVxuXG4gIC8vIHZvbHVtZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdm9sdW1lU2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdm9sdW1lU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZvbHVtZV9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCB2b2x1bWVTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92b2x1bWVTaXplID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Vm9sdW1lU2l6ZSgpIHtcbiAgICB0aGlzLl92b2x1bWVTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2b2x1bWVTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZVNpemU7XG4gIH1cblxuICAvLyB2b2x1bWVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZvbHVtZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZvbHVtZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2b2x1bWVfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdm9sdW1lVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdm9sdW1lVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZvbHVtZVR5cGUoKSB7XG4gICAgdGhpcy5fdm9sdW1lVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdm9sdW1lVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92b2x1bWVUeXBlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5vRGV2aWNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWJzPzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGV2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgbm9fZGV2aWNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vRGV2aWNlKSxcbiAgICB2aXJ0dWFsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5hbWUpLFxuICAgIGViczogbGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzRWJzVG9UZXJyYWZvcm0oc3RydWN0IS5lYnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcGFjaXR5UmVzZXJ2YXRpb25JZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXRPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmVzZXJ2YXRpb25JZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcGFjaXR5UmVzZXJ2YXRpb25JZCA9IHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25JZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvbklkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQgPSB2YWx1ZS5jYXBhY2l0eVJlc2VydmF0aW9uSWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FwYWNpdHlfcmVzZXJ2YXRpb25faWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwYWNpdHlSZXNlcnZhdGlvbklkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXBhY2l0eV9yZXNlcnZhdGlvbl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2FwYWNpdHlSZXNlcnZhdGlvbklkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlc2VydmF0aW9uSWQoKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvbklkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvbklkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0PzogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXBhY2l0eV9yZXNlcnZhdGlvbl9wcmVmZXJlbmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlKSxcbiAgICBjYXBhY2l0eV9yZXNlcnZhdGlvbl90YXJnZXQ6IGxhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UgPSB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQgPSB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSA9IHZhbHVlLmNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlO1xuICAgICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldDtcbiAgICB9XG4gIH1cblxuICAvLyBjYXBhY2l0eV9yZXNlcnZhdGlvbl9wcmVmZXJlbmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhcGFjaXR5X3Jlc2VydmF0aW9uX3ByZWZlcmVuY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlKCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZTtcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3RhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0ID0gbmV3IExhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNhcGFjaXR5X3Jlc2VydmF0aW9uX3RhcmdldFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0O1xuICB9XG4gIHB1YmxpYyBwdXRDYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQoKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb3JlQ291bnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocmVhZHNQZXJDb3JlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29yZV9jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jb3JlQ291bnQpLFxuICAgIHRocmVhZHNfcGVyX2NvcmU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGhyZWFkc1BlckNvcmUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb3JlQ291bnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvcmVDb3VudCA9IHRoaXMuX2NvcmVDb3VudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RocmVhZHNQZXJDb3JlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aHJlYWRzUGVyQ29yZSA9IHRoaXMuX3RocmVhZHNQZXJDb3JlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29yZUNvdW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGhyZWFkc1BlckNvcmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvcmVDb3VudCA9IHZhbHVlLmNvcmVDb3VudDtcbiAgICAgIHRoaXMuX3RocmVhZHNQZXJDb3JlID0gdmFsdWUudGhyZWFkc1BlckNvcmU7XG4gICAgfVxuICB9XG5cbiAgLy8gY29yZV9jb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3JlQ291bnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNvcmVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NvcmVfY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvcmVDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY29yZUNvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29yZUNvdW50KCkge1xuICAgIHRoaXMuX2NvcmVDb3VudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29yZUNvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVDb3VudDtcbiAgfVxuXG4gIC8vIHRocmVhZHNfcGVyX2NvcmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGhyZWFkc1BlckNvcmU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRocmVhZHNQZXJDb3JlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGhyZWFkc19wZXJfY29yZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyZWFkc1BlckNvcmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RocmVhZHNQZXJDb3JlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGhyZWFkc1BlckNvcmUoKSB7XG4gICAgdGhpcy5fdGhyZWFkc1BlckNvcmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRocmVhZHNQZXJDb3JlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RocmVhZHNQZXJDb3JlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3B1Q3JlZGl0cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNwdV9jcmVkaXRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdUNyZWRpdHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcHVDcmVkaXRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcHVDcmVkaXRzID0gdGhpcy5fY3B1Q3JlZGl0cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NwdUNyZWRpdHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NwdUNyZWRpdHMgPSB2YWx1ZS5jcHVDcmVkaXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNwdV9jcmVkaXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdUNyZWRpdHM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNwdUNyZWRpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHVfY3JlZGl0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1Q3JlZGl0cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3B1Q3JlZGl0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdUNyZWRpdHMoKSB7XG4gICAgdGhpcy5fY3B1Q3JlZGl0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1Q3JlZGl0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVDcmVkaXRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlRWxhc3RpY0dwdVNwZWNpZmljYXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3JPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl90eXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50eXBlID0gdGhpcy5fdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90eXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVFbmNsYXZlT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZ3VyZWQ6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29uZmlndXJlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29uZmlndXJlZCA9IHRoaXMuX2NvbmZpZ3VyZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyZWQgPSB2YWx1ZS5jb25maWd1cmVkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbmZpZ3VyZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29uZmlndXJlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb25maWd1cmVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmlndXJlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29uZmlndXJlZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25maWd1cmVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyZWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZU91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFybiksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVJYW1JbnN0YW5jZVByb2ZpbGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Fybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXJuID0gdGhpcy5fYXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FybiA9IHZhbHVlLmFybjtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcm4oKSB7XG4gICAgdGhpcy5fYXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJuO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9ja0R1cmF0aW9uTWludXRlcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3I/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhQcmljZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RJbnN0YW5jZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRVbnRpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJsb2NrX2R1cmF0aW9uX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tEdXJhdGlvbk1pbnV0ZXMpLFxuICAgIGluc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yKSxcbiAgICBtYXhfcHJpY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWF4UHJpY2UpLFxuICAgIHNwb3RfaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcG90SW5zdGFuY2VUeXBlKSxcbiAgICB2YWxpZF91bnRpbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWxpZFVudGlsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1Nwb3RPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ibG9ja0R1cmF0aW9uTWludXRlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYmxvY2tEdXJhdGlvbk1pbnV0ZXMgPSB0aGlzLl9ibG9ja0R1cmF0aW9uTWludXRlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IgPSB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4UHJpY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFByaWNlID0gdGhpcy5fbWF4UHJpY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcG90SW5zdGFuY2VUeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcG90SW5zdGFuY2VUeXBlID0gdGhpcy5fc3BvdEluc3RhbmNlVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZhbGlkVW50aWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZhbGlkVW50aWwgPSB0aGlzLl92YWxpZFVudGlsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Jsb2NrRHVyYXRpb25NaW51dGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFByaWNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3BvdEluc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZhbGlkVW50aWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Jsb2NrRHVyYXRpb25NaW51dGVzID0gdmFsdWUuYmxvY2tEdXJhdGlvbk1pbnV0ZXM7XG4gICAgICB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yID0gdmFsdWUuaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcjtcbiAgICAgIHRoaXMuX21heFByaWNlID0gdmFsdWUubWF4UHJpY2U7XG4gICAgICB0aGlzLl9zcG90SW5zdGFuY2VUeXBlID0gdmFsdWUuc3BvdEluc3RhbmNlVHlwZTtcbiAgICAgIHRoaXMuX3ZhbGlkVW50aWwgPSB2YWx1ZS52YWxpZFVudGlsO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJsb2NrX2R1cmF0aW9uX21pbnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvY2tEdXJhdGlvbk1pbnV0ZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJsb2NrRHVyYXRpb25NaW51dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmxvY2tfZHVyYXRpb25fbWludXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvY2tEdXJhdGlvbk1pbnV0ZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Jsb2NrRHVyYXRpb25NaW51dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmxvY2tEdXJhdGlvbk1pbnV0ZXMoKSB7XG4gICAgdGhpcy5fYmxvY2tEdXJhdGlvbk1pbnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJsb2NrRHVyYXRpb25NaW51dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2NrRHVyYXRpb25NaW51dGVzO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3InKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yKCkge1xuICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcjtcbiAgfVxuXG4gIC8vIG1heF9wcmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhQcmljZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXhfcHJpY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFByaWNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXhQcmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFByaWNlKCkge1xuICAgIHRoaXMuX21heFByaWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhQcmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhQcmljZTtcbiAgfVxuXG4gIC8vIHNwb3RfaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcG90SW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcG90SW5zdGFuY2VUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9pbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcG90SW5zdGFuY2VUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcG90SW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9zcG90SW5zdGFuY2VUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcG90SW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nwb3RJbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyB2YWxpZF91bnRpbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZhbGlkVW50aWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbGlkVW50aWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWxpZF91bnRpbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsaWRVbnRpbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsaWRVbnRpbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkVW50aWwoKSB7XG4gICAgdGhpcy5fdmFsaWRVbnRpbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZFVudGlsO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXJrZXRUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNwb3RPcHRpb25zPzogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hcmtldF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcmtldFR5cGUpLFxuICAgIHNwb3Rfb3B0aW9uczogbGF1bmNoVGVtcGxhdGVJbnN0YW5jZU1hcmtldE9wdGlvbnNTcG90T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuc3BvdE9wdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWFya2V0VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFya2V0VHlwZSA9IHRoaXMuX21hcmtldFR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zcG90T3B0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3BvdE9wdGlvbnMgPSB0aGlzLl9zcG90T3B0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWFya2V0VHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nwb3RPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21hcmtldFR5cGUgPSB2YWx1ZS5tYXJrZXRUeXBlO1xuICAgICAgdGhpcy5fc3BvdE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNwb3RPcHRpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hcmtldF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hcmtldFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1hcmtldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXJrZXRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWFya2V0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFya2V0VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1hcmtldFR5cGUoKSB7XG4gICAgdGhpcy5fbWFya2V0VHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFya2V0VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXRUeXBlO1xuICB9XG5cbiAgLy8gc3BvdF9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nwb3RPcHRpb25zID0gbmV3IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3BvdF9vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNwb3RPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90T3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0U3BvdE9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlSW5zdGFuY2VNYXJrZXRPcHRpb25zU3BvdE9wdGlvbnMpIHtcbiAgICB0aGlzLl9zcG90T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3BvdE9wdGlvbnMoKSB7XG4gICAgdGhpcy5fc3BvdE9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdE9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdE9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGljZW5zZUNvbmZpZ3VyYXRpb25Bcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTGljZW5zZVNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGljZW5zZV9jb25maWd1cmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5saWNlbnNlQ29uZmlndXJhdGlvbkFybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBFbmRwb2ludD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBQcm90b2NvbElwdjY/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwVG9rZW5zPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVNZXRhZGF0YU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaHR0cF9lbmRwb2ludDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5odHRwRW5kcG9pbnQpLFxuICAgIGh0dHBfcHJvdG9jb2xfaXB2NjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5odHRwUHJvdG9jb2xJcHY2KSxcbiAgICBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaHR0cFB1dFJlc3BvbnNlSG9wTGltaXQpLFxuICAgIGh0dHBfdG9rZW5zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBUb2tlbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faHR0cEVuZHBvaW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwRW5kcG9pbnQgPSB0aGlzLl9odHRwRW5kcG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwUHJvdG9jb2xJcHY2KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwUHJvdG9jb2xJcHY2ID0gdGhpcy5faHR0cFByb3RvY29sSXB2NjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2h0dHBQdXRSZXNwb25zZUhvcExpbWl0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHRoaXMuX2h0dHBQdXRSZXNwb25zZUhvcExpbWl0O1xuICAgIH1cbiAgICBpZiAodGhpcy5faHR0cFRva2Vucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cFRva2VucyA9IHRoaXMuX2h0dHBUb2tlbnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2h0dHBFbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2h0dHBQcm90b2NvbElwdjYgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2h0dHBUb2tlbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2h0dHBFbmRwb2ludCA9IHZhbHVlLmh0dHBFbmRwb2ludDtcbiAgICAgIHRoaXMuX2h0dHBQcm90b2NvbElwdjYgPSB2YWx1ZS5odHRwUHJvdG9jb2xJcHY2O1xuICAgICAgdGhpcy5faHR0cFB1dFJlc3BvbnNlSG9wTGltaXQgPSB2YWx1ZS5odHRwUHV0UmVzcG9uc2VIb3BMaW1pdDtcbiAgICAgIHRoaXMuX2h0dHBUb2tlbnMgPSB2YWx1ZS5odHRwVG9rZW5zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGh0dHBfZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwRW5kcG9pbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGh0dHBFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h0dHBfZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBFbmRwb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faHR0cEVuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cEVuZHBvaW50KCkge1xuICAgIHRoaXMuX2h0dHBFbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaHR0cEVuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBFbmRwb2ludDtcbiAgfVxuXG4gIC8vIGh0dHBfcHJvdG9jb2xfaXB2NiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwUHJvdG9jb2xJcHY2Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBodHRwUHJvdG9jb2xJcHY2KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaHR0cF9wcm90b2NvbF9pcHY2Jyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwUHJvdG9jb2xJcHY2KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwUHJvdG9jb2xJcHY2ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFByb3RvY29sSXB2NigpIHtcbiAgICB0aGlzLl9odHRwUHJvdG9jb2xJcHY2ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwUHJvdG9jb2xJcHY2SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBQcm90b2NvbElwdjY7XG4gIH1cblxuICAvLyBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaHR0cFB1dFJlc3BvbnNlSG9wTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBQdXRSZXNwb25zZUhvcExpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBQdXRSZXNwb25zZUhvcExpbWl0KCkge1xuICAgIHRoaXMuX2h0dHBQdXRSZXNwb25zZUhvcExpbWl0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdDtcbiAgfVxuXG4gIC8vIGh0dHBfdG9rZW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFRva2Vucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHR0cFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h0dHBfdG9rZW5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwVG9rZW5zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwVG9rZW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFRva2VucygpIHtcbiAgICB0aGlzLl9odHRwVG9rZW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwVG9rZW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBUb2tlbnM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZ091dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExhdW5jaFRlbXBsYXRlTW9uaXRvcmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhc3NvY2lhdGVDYXJyaWVySXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlT25UZXJtaW5hdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZUluZGV4PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVyZmFjZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcHY0QWRkcmVzc0NvdW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlwdjRBZGRyZXNzZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlwdjZBZGRyZXNzQ291bnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXB2NkFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0NhcmRJbmRleD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuZXR3b3JrSW50ZXJmYWNlSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1Ym5ldElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlc1RvVGVycmFmb3JtKHN0cnVjdD86IExhdW5jaFRlbXBsYXRlTmV0d29ya0ludGVyZmFjZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhc3NvY2lhdGVfY2Fycmllcl9pcF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFzc29jaWF0ZUNhcnJpZXJJcEFkZHJlc3MpLFxuICAgIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3MpLFxuICAgIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXNjcmlwdGlvbiksXG4gICAgZGV2aWNlX2luZGV4OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRldmljZUluZGV4KSxcbiAgICBpbnRlcmZhY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcmZhY2VUeXBlKSxcbiAgICBpcHY0X2FkZHJlc3NfY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaXB2NEFkZHJlc3NDb3VudCksXG4gICAgaXB2NF9hZGRyZXNzZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaXB2NEFkZHJlc3NlcyksXG4gICAgaXB2Nl9hZGRyZXNzX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlwdjZBZGRyZXNzQ291bnQpLFxuICAgIGlwdjZfYWRkcmVzc2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmlwdjZBZGRyZXNzZXMpLFxuICAgIG5ldHdvcmtfY2FyZF9pbmRleDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrQ2FyZEluZGV4KSxcbiAgICBuZXR3b3JrX2ludGVyZmFjZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uZXR3b3JrSW50ZXJmYWNlSWQpLFxuICAgIHByaXZhdGVfaXBfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcml2YXRlSXBBZGRyZXNzKSxcbiAgICBzZWN1cml0eV9ncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cHMpLFxuICAgIHN1Ym5ldF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zdWJuZXRJZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWZmaW5pdHk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JvdXBOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdFJlc291cmNlR3JvdXBBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcnRpdGlvbk51bWJlcj86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3ByZWFkRG9tYWluPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZW5hbmN5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudE91dHB1dFJlZmVyZW5jZSB8IExhdW5jaFRlbXBsYXRlUGxhY2VtZW50KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWZmaW5pdHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWZmaW5pdHkpLFxuICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF2YWlsYWJpbGl0eVpvbmUpLFxuICAgIGdyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBOYW1lKSxcbiAgICBob3N0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RJZCksXG4gICAgaG9zdF9yZXNvdXJjZV9ncm91cF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaG9zdFJlc291cmNlR3JvdXBBcm4pLFxuICAgIHBhcnRpdGlvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGFydGl0aW9uTnVtYmVyKSxcbiAgICBzcHJlYWRfZG9tYWluOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNwcmVhZERvbWFpbiksXG4gICAgdGVuYW5jeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50ZW5hbmN5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGF1bmNoVGVtcGxhdGVQbGFjZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FmZmluaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hZmZpbml0eSA9IHRoaXMuX2FmZmluaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXZhaWxhYmlsaXR5Wm9uZSA9IHRoaXMuX2F2YWlsYWJpbGl0eVpvbmU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ncm91cE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmdyb3VwTmFtZSA9IHRoaXMuX2dyb3VwTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvc3RJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9zdElkID0gdGhpcy5faG9zdElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG9zdFJlc291cmNlR3JvdXBBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmhvc3RSZXNvdXJjZUdyb3VwQXJuID0gdGhpcy5faG9zdFJlc291cmNlR3JvdXBBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJ0aXRpb25OdW1iZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcnRpdGlvbk51bWJlciA9IHRoaXMuX3BhcnRpdGlvbk51bWJlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NwcmVhZERvbWFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3ByZWFkRG9tYWluID0gdGhpcy5fc3ByZWFkRG9tYWluO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVuYW5jeSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGVuYW5jeSA9IHRoaXMuX3RlbmFuY3k7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FmZmluaXR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3RJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hvc3RSZXNvdXJjZUdyb3VwQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFydGl0aW9uTnVtYmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3ByZWFkRG9tYWluID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGVuYW5jeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWZmaW5pdHkgPSB2YWx1ZS5hZmZpbml0eTtcbiAgICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB2YWx1ZS5hdmFpbGFiaWxpdHlab25lO1xuICAgICAgdGhpcy5fZ3JvdXBOYW1lID0gdmFsdWUuZ3JvdXBOYW1lO1xuICAgICAgdGhpcy5faG9zdElkID0gdmFsdWUuaG9zdElkO1xuICAgICAgdGhpcy5faG9zdFJlc291cmNlR3JvdXBBcm4gPSB2YWx1ZS5ob3N0UmVzb3VyY2VHcm91cEFybjtcbiAgICAgIHRoaXMuX3BhcnRpdGlvbk51bWJlciA9IHZhbHVlLnBhcnRpdGlvbk51bWJlcjtcbiAgICAgIHRoaXMuX3NwcmVhZERvbWFpbiA9IHZhbHVlLnNwcmVhZERvbWFpbjtcbiAgICAgIHRoaXMuX3RlbmFuY3kgPSB2YWx1ZS50ZW5hbmN5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGFmZmluaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FmZmluaXR5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhZmZpbml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FmZmluaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBhZmZpbml0eSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWZmaW5pdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZmZpbml0eSgpIHtcbiAgICB0aGlzLl9hZmZpbml0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWZmaW5pdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWZmaW5pdHk7XG4gIH1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdmFpbGFiaWxpdHlab25lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF2YWlsYWJpbGl0eVpvbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmFpbGFiaWxpdHlab25lKCkge1xuICAgIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF2YWlsYWJpbGl0eVpvbmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZTtcbiAgfVxuXG4gIC8vIGdyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBncm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBncm91cE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dyb3VwTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9ncm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdyb3VwTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ncm91cE5hbWU7XG4gIH1cblxuICAvLyBob3N0X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hvc3RJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaG9zdElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3N0SWQoKSB7XG4gICAgdGhpcy5faG9zdElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdElkO1xuICB9XG5cbiAgLy8gaG9zdF9yZXNvdXJjZV9ncm91cF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaG9zdFJlc291cmNlR3JvdXBBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvc3RSZXNvdXJjZUdyb3VwQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaG9zdF9yZXNvdXJjZV9ncm91cF9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3RSZXNvdXJjZUdyb3VwQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ob3N0UmVzb3VyY2VHcm91cEFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhvc3RSZXNvdXJjZUdyb3VwQXJuKCkge1xuICAgIHRoaXMuX2hvc3RSZXNvdXJjZUdyb3VwQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBob3N0UmVzb3VyY2VHcm91cEFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0UmVzb3VyY2VHcm91cEFybjtcbiAgfVxuXG4gIC8vIHBhcnRpdGlvbl9udW1iZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFydGl0aW9uTnVtYmVyPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwYXJ0aXRpb25OdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwYXJ0aXRpb25fbnVtYmVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXJ0aXRpb25OdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhcnRpdGlvbk51bWJlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcnRpdGlvbk51bWJlcigpIHtcbiAgICB0aGlzLl9wYXJ0aXRpb25OdW1iZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbk51bWJlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJ0aXRpb25OdW1iZXI7XG4gIH1cblxuICAvLyBzcHJlYWRfZG9tYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NwcmVhZERvbWFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3ByZWFkRG9tYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3ByZWFkX2RvbWFpbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3ByZWFkRG9tYWluKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcHJlYWREb21haW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcHJlYWREb21haW4oKSB7XG4gICAgdGhpcy5fc3ByZWFkRG9tYWluID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzcHJlYWREb21haW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3ByZWFkRG9tYWluO1xuICB9XG5cbiAgLy8gdGVuYW5jeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90ZW5hbmN5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0ZW5hbmN5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGVuYW5jeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVuYW5jeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGVuYW5jeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlbmFuY3koKSB7XG4gICAgdGhpcy5fdGVuYW5jeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGVuYW5jeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW5hbmN5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFRlbXBsYXRlVGFnU3BlY2lmaWNhdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZVR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogTGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VUeXBlKSxcbiAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnRhZ3MpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBMYXVuY2hUZW1wbGF0ZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19sYXVuY2hfdGVtcGxhdGVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTGF1bmNoVGVtcGxhdGVDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2xhdW5jaF90ZW1wbGF0ZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZWZhdWx0VmVyc2lvbiA9IGNvbmZpZy5kZWZhdWx0VmVyc2lvbjtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kaXNhYmxlQXBpVGVybWluYXRpb24gPSBjb25maWcuZGlzYWJsZUFwaVRlcm1pbmF0aW9uO1xuICAgIHRoaXMuX2Vic09wdGltaXplZCA9IGNvbmZpZy5lYnNPcHRpbWl6ZWQ7XG4gICAgdGhpcy5faW1hZ2VJZCA9IGNvbmZpZy5pbWFnZUlkO1xuICAgIHRoaXMuX2luc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvciA9IGNvbmZpZy5pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3I7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gY29uZmlnLmluc3RhbmNlVHlwZTtcbiAgICB0aGlzLl9rZXJuZWxJZCA9IGNvbmZpZy5rZXJuZWxJZDtcbiAgICB0aGlzLl9rZXlOYW1lID0gY29uZmlnLmtleU5hbWU7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSBjb25maWcubmFtZVByZWZpeDtcbiAgICB0aGlzLl9yYW1EaXNrSWQgPSBjb25maWcucmFtRGlza0lkO1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBOYW1lcyA9IGNvbmZpZy5zZWN1cml0eUdyb3VwTmFtZXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbiA9IGNvbmZpZy51cGRhdGVEZWZhdWx0VmVyc2lvbjtcbiAgICB0aGlzLl91c2VyRGF0YSA9IGNvbmZpZy51c2VyRGF0YTtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gY29uZmlnLnZwY1NlY3VyaXR5R3JvdXBJZHM7XG4gICAgdGhpcy5fYmxvY2tEZXZpY2VNYXBwaW5ncyA9IGNvbmZpZy5ibG9ja0RldmljZU1hcHBpbmdzO1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb247XG4gICAgdGhpcy5fY3B1T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNwdU9wdGlvbnM7XG4gICAgdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNyZWRpdFNwZWNpZmljYXRpb247XG4gICAgdGhpcy5fZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zID0gY29uZmlnLmVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucztcbiAgICB0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3I7XG4gICAgdGhpcy5fZW5jbGF2ZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lbmNsYXZlT3B0aW9ucztcbiAgICB0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5oaWJlcm5hdGlvbk9wdGlvbnM7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlLmludGVybmFsVmFsdWUgPSBjb25maWcuaWFtSW5zdGFuY2VQcm9maWxlO1xuICAgIHRoaXMuX2luc3RhbmNlTWFya2V0T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmluc3RhbmNlTWFya2V0T3B0aW9ucztcbiAgICB0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbiA9IGNvbmZpZy5saWNlbnNlU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLl9tZXRhZGF0YU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5tZXRhZGF0YU9wdGlvbnM7XG4gICAgdGhpcy5fbW9uaXRvcmluZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLm1vbml0b3Jpbmc7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZXMgPSBjb25maWcubmV0d29ya0ludGVyZmFjZXM7XG4gICAgdGhpcy5fcGxhY2VtZW50LmludGVybmFsVmFsdWUgPSBjb25maWcucGxhY2VtZW50O1xuICAgIHRoaXMuX3RhZ1NwZWNpZmljYXRpb25zID0gY29uZmlnLnRhZ1NwZWNpZmljYXRpb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRWZXJzaW9uPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBkZWZhdWx0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RlZmF1bHRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFZlcnNpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RlZmF1bHRWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdFZlcnNpb24oKSB7XG4gICAgdGhpcy5fZGVmYXVsdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWZXJzaW9uO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGRpc2FibGVfYXBpX3Rlcm1pbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc2FibGVBcGlUZXJtaW5hdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUFwaVRlcm1pbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Rpc2FibGVfYXBpX3Rlcm1pbmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGlzYWJsZUFwaVRlcm1pbmF0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kaXNhYmxlQXBpVGVybWluYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXNhYmxlQXBpVGVybWluYXRpb24oKSB7XG4gICAgdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkaXNhYmxlQXBpVGVybWluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uO1xuICB9XG5cbiAgLy8gZWJzX29wdGltaXplZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNPcHRpbWl6ZWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vic19vcHRpbWl6ZWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic09wdGltaXplZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWJzT3B0aW1pemVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWJzT3B0aW1pemVkKCkge1xuICAgIHRoaXMuX2Vic09wdGltaXplZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWJzT3B0aW1pemVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic09wdGltaXplZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbWFnZV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbWFnZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZUlkKCkge1xuICAgIHRoaXMuX2ltYWdlSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VJZDtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VUeXBlKCkge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlVHlwZTtcbiAgfVxuXG4gIC8vIGtlcm5lbF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXJuZWxJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2VybmVsSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXJuZWxfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtlcm5lbElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXJuZWxJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtlcm5lbElkKCkge1xuICAgIHRoaXMuX2tlcm5lbElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXJuZWxJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXJuZWxJZDtcbiAgfVxuXG4gIC8vIGtleV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleU5hbWUoKSB7XG4gICAgdGhpcy5fa2V5TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlOYW1lO1xuICB9XG5cbiAgLy8gbGF0ZXN0X3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXRlc3RWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbGF0ZXN0X3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gbmFtZV9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZV9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWVQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lUHJlZml4KCkge1xuICAgIHRoaXMuX25hbWVQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVByZWZpeDtcbiAgfVxuXG4gIC8vIHJhbV9kaXNrX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JhbURpc2tJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmFtRGlza0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmFtX2Rpc2tfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJhbURpc2tJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmFtRGlza0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmFtRGlza0lkKCkge1xuICAgIHRoaXMuX3JhbURpc2tJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmFtRGlza0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbURpc2tJZDtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX25hbWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBOYW1lcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBfbmFtZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5R3JvdXBOYW1lcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwTmFtZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZWN1cml0eUdyb3VwTmFtZXMoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cE5hbWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwTmFtZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cE5hbWVzO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHVwZGF0ZV9kZWZhdWx0X3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXBkYXRlRGVmYXVsdFZlcnNpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVwZGF0ZURlZmF1bHRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VwZGF0ZV9kZWZhdWx0X3ZlcnNpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGVEZWZhdWx0VmVyc2lvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdXBkYXRlRGVmYXVsdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcGRhdGVEZWZhdWx0VmVyc2lvbigpIHtcbiAgICB0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXBkYXRlRGVmYXVsdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlRGVmYXVsdFZlcnNpb247XG4gIH1cblxuICAvLyB1c2VyX2RhdGEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlckRhdGE/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9kYXRhJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyRGF0YSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlckRhdGEgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VyRGF0YSgpIHtcbiAgICB0aGlzLl91c2VyRGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlckRhdGFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckRhdGE7XG4gIH1cblxuICAvLyB2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZwY1NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgdnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd2cGNfc2VjdXJpdHlfZ3JvdXBfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB2cGNTZWN1cml0eUdyb3VwSWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNTZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY1NlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIGJsb2NrX2RldmljZV9tYXBwaW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ibG9ja0RldmljZU1hcHBpbmdzPzogTGF1bmNoVGVtcGxhdGVCbG9ja0RldmljZU1hcHBpbmdzW107IFxuICBwdWJsaWMgZ2V0IGJsb2NrRGV2aWNlTWFwcGluZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Jsb2NrX2RldmljZV9tYXBwaW5ncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGJsb2NrRGV2aWNlTWFwcGluZ3ModmFsdWU6IExhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc1tdKSB7XG4gICAgdGhpcy5fYmxvY2tEZXZpY2VNYXBwaW5ncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJsb2NrRGV2aWNlTWFwcGluZ3MoKSB7XG4gICAgdGhpcy5fYmxvY2tEZXZpY2VNYXBwaW5ncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tEZXZpY2VNYXBwaW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja0RldmljZU1hcHBpbmdzO1xuICB9XG5cbiAgLy8gY2FwYWNpdHlfcmVzZXJ2YXRpb25fc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiA9IG5ldyBMYXVuY2hUZW1wbGF0ZUNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNhcGFjaXR5X3Jlc2VydmF0aW9uX3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbih2YWx1ZTogTGF1bmNoVGVtcGxhdGVDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gY3B1X29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3B1T3B0aW9ucyA9IG5ldyBMYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3B1X29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3B1T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3B1T3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0Q3B1T3B0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVDcHVPcHRpb25zKSB7XG4gICAgdGhpcy5fY3B1T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1T3B0aW9ucygpIHtcbiAgICB0aGlzLl9jcHVPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNwdU9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3B1T3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gY3JlZGl0X3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlZGl0U3BlY2lmaWNhdGlvbiA9IG5ldyBMYXVuY2hUZW1wbGF0ZUNyZWRpdFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3JlZGl0X3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3JlZGl0U3BlY2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q3JlZGl0U3BlY2lmaWNhdGlvbih2YWx1ZTogTGF1bmNoVGVtcGxhdGVDcmVkaXRTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlZGl0U3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jcmVkaXRTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWRpdFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZWxhc3RpY19ncHVfc3BlY2lmaWNhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zPzogTGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnNbXTsgXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0dwdVNwZWNpZmljYXRpb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbGFzdGljX2dwdV9zcGVjaWZpY2F0aW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVFbGFzdGljR3B1U3BlY2lmaWNhdGlvbnNbXSkge1xuICAgIHRoaXMuX2VsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNHcHVTcGVjaWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl9lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnM7XG4gIH1cblxuICAvLyBlbGFzdGljX2luZmVyZW5jZV9hY2NlbGVyYXRvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IgPSBuZXcgTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3JPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZWxhc3RpY19pbmZlcmVuY2VfYWNjZWxlcmF0b3JcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3I7XG4gIH1cbiAgcHVibGljIHB1dEVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcih2YWx1ZTogTGF1bmNoVGVtcGxhdGVFbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IpIHtcbiAgICB0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvcigpIHtcbiAgICB0aGlzLl9lbGFzdGljSW5mZXJlbmNlQWNjZWxlcmF0b3IuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYXN0aWNJbmZlcmVuY2VBY2NlbGVyYXRvci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZW5jbGF2ZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY2xhdmVPcHRpb25zID0gbmV3IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZW5jbGF2ZV9vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGVuY2xhdmVPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNsYXZlT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0RW5jbGF2ZU9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlRW5jbGF2ZU9wdGlvbnMpIHtcbiAgICB0aGlzLl9lbmNsYXZlT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jbGF2ZU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fZW5jbGF2ZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jbGF2ZU9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jbGF2ZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGhpYmVybmF0aW9uX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGliZXJuYXRpb25PcHRpb25zID0gbmV3IExhdW5jaFRlbXBsYXRlSGliZXJuYXRpb25PcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImhpYmVybmF0aW9uX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaGliZXJuYXRpb25PcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dEhpYmVybmF0aW9uT3B0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVIaWJlcm5hdGlvbk9wdGlvbnMpIHtcbiAgICB0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhpYmVybmF0aW9uT3B0aW9ucygpIHtcbiAgICB0aGlzLl9oaWJlcm5hdGlvbk9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGliZXJuYXRpb25PcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpYmVybmF0aW9uT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaWFtX2luc3RhbmNlX3Byb2ZpbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWFtSW5zdGFuY2VQcm9maWxlID0gbmV3IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlhbV9pbnN0YW5jZV9wcm9maWxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlhbUluc3RhbmNlUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlO1xuICB9XG4gIHB1YmxpYyBwdXRJYW1JbnN0YW5jZVByb2ZpbGUodmFsdWU6IExhdW5jaFRlbXBsYXRlSWFtSW5zdGFuY2VQcm9maWxlKSB7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJYW1JbnN0YW5jZVByb2ZpbGUoKSB7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlhbUluc3RhbmNlUHJvZmlsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pYW1JbnN0YW5jZVByb2ZpbGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX21hcmtldF9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlTWFya2V0T3B0aW9ucyA9IG5ldyBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbnN0YW5jZV9tYXJrZXRfb3B0aW9uc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbnN0YW5jZU1hcmtldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlTWFya2V0T3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0SW5zdGFuY2VNYXJrZXRPcHRpb25zKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9ucykge1xuICAgIHRoaXMuX2luc3RhbmNlTWFya2V0T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VNYXJrZXRPcHRpb25zKCkge1xuICAgIHRoaXMuX2luc3RhbmNlTWFya2V0T3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZU1hcmtldE9wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VNYXJrZXRPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBsaWNlbnNlX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGljZW5zZVNwZWNpZmljYXRpb24/OiBMYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uW107IFxuICBwdWJsaWMgZ2V0IGxpY2Vuc2VTcGVjaWZpY2F0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdsaWNlbnNlX3NwZWNpZmljYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsaWNlbnNlU3BlY2lmaWNhdGlvbih2YWx1ZTogTGF1bmNoVGVtcGxhdGVMaWNlbnNlU3BlY2lmaWNhdGlvbltdKSB7XG4gICAgdGhpcy5fbGljZW5zZVNwZWNpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMaWNlbnNlU3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9saWNlbnNlU3BlY2lmaWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGljZW5zZVNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGljZW5zZVNwZWNpZmljYXRpb247XG4gIH1cblxuICAvLyBtZXRhZGF0YV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21ldGFkYXRhT3B0aW9ucyA9IG5ldyBMYXVuY2hUZW1wbGF0ZU1ldGFkYXRhT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtZXRhZGF0YV9vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1ldGFkYXRhT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRNZXRhZGF0YU9wdGlvbnModmFsdWU6IExhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRhZGF0YU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1vbml0b3JpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbW9uaXRvcmluZyA9IG5ldyBMYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibW9uaXRvcmluZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtb25pdG9yaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9tb25pdG9yaW5nO1xuICB9XG4gIHB1YmxpYyBwdXRNb25pdG9yaW5nKHZhbHVlOiBMYXVuY2hUZW1wbGF0ZU1vbml0b3JpbmcpIHtcbiAgICB0aGlzLl9tb25pdG9yaW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb25pdG9yaW5nKCkge1xuICAgIHRoaXMuX21vbml0b3JpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb25pdG9yaW5nLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBuZXR3b3JrX2ludGVyZmFjZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmV0d29ya0ludGVyZmFjZXM/OiBMYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzW107IFxuICBwdWJsaWMgZ2V0IG5ldHdvcmtJbnRlcmZhY2VzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2ludGVyZmFjZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBuZXR3b3JrSW50ZXJmYWNlcyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVOZXR3b3JrSW50ZXJmYWNlc1tdKSB7XG4gICAgdGhpcy5fbmV0d29ya0ludGVyZmFjZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROZXR3b3JrSW50ZXJmYWNlcygpIHtcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmV0d29ya0ludGVyZmFjZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV0d29ya0ludGVyZmFjZXM7XG4gIH1cblxuICAvLyBwbGFjZW1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGxhY2VtZW50ID0gbmV3IExhdW5jaFRlbXBsYXRlUGxhY2VtZW50T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBsYWNlbWVudFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgfVxuICBwdWJsaWMgcHV0UGxhY2VtZW50KHZhbHVlOiBMYXVuY2hUZW1wbGF0ZVBsYWNlbWVudCkge1xuICAgIHRoaXMuX3BsYWNlbWVudC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50KCkge1xuICAgIHRoaXMuX3BsYWNlbWVudC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGFjZW1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0YWdfc3BlY2lmaWNhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnU3BlY2lmaWNhdGlvbnM/OiBMYXVuY2hUZW1wbGF0ZVRhZ1NwZWNpZmljYXRpb25zW107IFxuICBwdWJsaWMgZ2V0IHRhZ1NwZWNpZmljYXRpb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdfc3BlY2lmaWNhdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdTcGVjaWZpY2F0aW9ucyh2YWx1ZTogTGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9uc1tdKSB7XG4gICAgdGhpcy5fdGFnU3BlY2lmaWNhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdTcGVjaWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl90YWdTcGVjaWZpY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnU3BlY2lmaWNhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnU3BlY2lmaWNhdGlvbnM7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRfdmVyc2lvbjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fZGVmYXVsdFZlcnNpb24pLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGRpc2FibGVfYXBpX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uKSxcbiAgICAgIGVic19vcHRpbWl6ZWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Vic09wdGltaXplZCksXG4gICAgICBpbWFnZV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW1hZ2VJZCksXG4gICAgICBpbnN0YW5jZV9pbml0aWF0ZWRfc2h1dGRvd25fYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvciksXG4gICAgICBpbnN0YW5jZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbnN0YW5jZVR5cGUpLFxuICAgICAga2VybmVsX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rZXJuZWxJZCksXG4gICAgICBrZXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa2V5TmFtZSksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIG5hbWVfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lUHJlZml4KSxcbiAgICAgIHJhbV9kaXNrX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yYW1EaXNrSWQpLFxuICAgICAgc2VjdXJpdHlfZ3JvdXBfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3NlY3VyaXR5R3JvdXBOYW1lcyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHVwZGF0ZV9kZWZhdWx0X3ZlcnNpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl91cGRhdGVEZWZhdWx0VmVyc2lvbiksXG4gICAgICB1c2VyX2RhdGE6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VzZXJEYXRhKSxcbiAgICAgIHZwY19zZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMpLFxuICAgICAgYmxvY2tfZGV2aWNlX21hcHBpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGxhdW5jaFRlbXBsYXRlQmxvY2tEZXZpY2VNYXBwaW5nc1RvVGVycmFmb3JtKSh0aGlzLl9ibG9ja0RldmljZU1hcHBpbmdzKSxcbiAgICAgIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3NwZWNpZmljYXRpb246IGxhdW5jaFRlbXBsYXRlQ2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNwdV9vcHRpb25zOiBsYXVuY2hUZW1wbGF0ZUNwdU9wdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9jcHVPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgY3JlZGl0X3NwZWNpZmljYXRpb246IGxhdW5jaFRlbXBsYXRlQ3JlZGl0U3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHRoaXMuX2NyZWRpdFNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlbGFzdGljX2dwdV9zcGVjaWZpY2F0aW9uczogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUVsYXN0aWNHcHVTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl9lbGFzdGljR3B1U3BlY2lmaWNhdGlvbnMpLFxuICAgICAgZWxhc3RpY19pbmZlcmVuY2VfYWNjZWxlcmF0b3I6IGxhdW5jaFRlbXBsYXRlRWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yVG9UZXJyYWZvcm0odGhpcy5fZWxhc3RpY0luZmVyZW5jZUFjY2VsZXJhdG9yLmludGVybmFsVmFsdWUpLFxuICAgICAgZW5jbGF2ZV9vcHRpb25zOiBsYXVuY2hUZW1wbGF0ZUVuY2xhdmVPcHRpb25zVG9UZXJyYWZvcm0odGhpcy5fZW5jbGF2ZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBoaWJlcm5hdGlvbl9vcHRpb25zOiBsYXVuY2hUZW1wbGF0ZUhpYmVybmF0aW9uT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX2hpYmVybmF0aW9uT3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGlhbV9pbnN0YW5jZV9wcm9maWxlOiBsYXVuY2hUZW1wbGF0ZUlhbUluc3RhbmNlUHJvZmlsZVRvVGVycmFmb3JtKHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGluc3RhbmNlX21hcmtldF9vcHRpb25zOiBsYXVuY2hUZW1wbGF0ZUluc3RhbmNlTWFya2V0T3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlTWFya2V0T3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGxpY2Vuc2Vfc3BlY2lmaWNhdGlvbjogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZUxpY2Vuc2VTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX2xpY2Vuc2VTcGVjaWZpY2F0aW9uKSxcbiAgICAgIG1ldGFkYXRhX29wdGlvbnM6IGxhdW5jaFRlbXBsYXRlTWV0YWRhdGFPcHRpb25zVG9UZXJyYWZvcm0odGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgbW9uaXRvcmluZzogbGF1bmNoVGVtcGxhdGVNb25pdG9yaW5nVG9UZXJyYWZvcm0odGhpcy5fbW9uaXRvcmluZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG5ldHdvcmtfaW50ZXJmYWNlczogY2RrdGYubGlzdE1hcHBlcihsYXVuY2hUZW1wbGF0ZU5ldHdvcmtJbnRlcmZhY2VzVG9UZXJyYWZvcm0pKHRoaXMuX25ldHdvcmtJbnRlcmZhY2VzKSxcbiAgICAgIHBsYWNlbWVudDogbGF1bmNoVGVtcGxhdGVQbGFjZW1lbnRUb1RlcnJhZm9ybSh0aGlzLl9wbGFjZW1lbnQuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YWdfc3BlY2lmaWNhdGlvbnM6IGNka3RmLmxpc3RNYXBwZXIobGF1bmNoVGVtcGxhdGVUYWdTcGVjaWZpY2F0aW9uc1RvVGVycmFmb3JtKSh0aGlzLl90YWdTcGVjaWZpY2F0aW9ucyksXG4gICAgfTtcbiAgfVxufVxuIl19