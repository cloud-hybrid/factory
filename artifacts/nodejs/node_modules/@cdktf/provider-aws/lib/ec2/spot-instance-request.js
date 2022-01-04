"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotInstanceRequest = exports.SpotInstanceRequestTimeoutsOutputReference = exports.spotInstanceRequestTimeoutsToTerraform = exports.SpotInstanceRequestRootBlockDeviceOutputReference = exports.spotInstanceRequestRootBlockDeviceToTerraform = exports.spotInstanceRequestNetworkInterfaceToTerraform = exports.SpotInstanceRequestMetadataOptionsOutputReference = exports.spotInstanceRequestMetadataOptionsToTerraform = exports.SpotInstanceRequestLaunchTemplateOutputReference = exports.spotInstanceRequestLaunchTemplateToTerraform = exports.spotInstanceRequestEphemeralBlockDeviceToTerraform = exports.SpotInstanceRequestEnclaveOptionsOutputReference = exports.spotInstanceRequestEnclaveOptionsToTerraform = exports.spotInstanceRequestEbsBlockDeviceToTerraform = exports.SpotInstanceRequestCreditSpecificationOutputReference = exports.spotInstanceRequestCreditSpecificationToTerraform = exports.SpotInstanceRequestCapacityReservationSpecificationOutputReference = exports.spotInstanceRequestCapacityReservationSpecificationToTerraform = exports.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference = exports.spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct) {
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
exports.spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform = spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
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
exports.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference = SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference;
_a = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference[_a] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference", version: "3.0.1" };
function spotInstanceRequestCapacityReservationSpecificationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        capacity_reservation_preference: cdktf.stringToTerraform(struct.capacityReservationPreference),
        capacity_reservation_target: spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct.capacityReservationTarget),
    };
}
exports.spotInstanceRequestCapacityReservationSpecificationToTerraform = spotInstanceRequestCapacityReservationSpecificationToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
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
        this._capacityReservationTarget = new SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._capacityReservationPreference) {
            hasAnyValues = true;
            internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
        }
        if ((_k = this._capacityReservationTarget) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.capacityReservationTarget = (_l = this._capacityReservationTarget) === null || _l === void 0 ? void 0 : _l.internalValue;
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
exports.SpotInstanceRequestCapacityReservationSpecificationOutputReference = SpotInstanceRequestCapacityReservationSpecificationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestCapacityReservationSpecificationOutputReference[_b] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestCapacityReservationSpecificationOutputReference", version: "3.0.1" };
function spotInstanceRequestCreditSpecificationToTerraform(struct) {
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
exports.spotInstanceRequestCreditSpecificationToTerraform = spotInstanceRequestCreditSpecificationToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestCreditSpecificationOutputReference extends cdktf.ComplexObject {
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
exports.SpotInstanceRequestCreditSpecificationOutputReference = SpotInstanceRequestCreditSpecificationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestCreditSpecificationOutputReference[_c] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestCreditSpecificationOutputReference", version: "3.0.1" };
function spotInstanceRequestEbsBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_name: cdktf.stringToTerraform(struct.deviceName),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        snapshot_id: cdktf.stringToTerraform(struct.snapshotId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.spotInstanceRequestEbsBlockDeviceToTerraform = spotInstanceRequestEbsBlockDeviceToTerraform;
function spotInstanceRequestEnclaveOptionsToTerraform(struct) {
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
exports.spotInstanceRequestEnclaveOptionsToTerraform = spotInstanceRequestEnclaveOptionsToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestEnclaveOptionsOutputReference extends cdktf.ComplexObject {
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
exports.SpotInstanceRequestEnclaveOptionsOutputReference = SpotInstanceRequestEnclaveOptionsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestEnclaveOptionsOutputReference[_d] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestEnclaveOptionsOutputReference", version: "3.0.1" };
function spotInstanceRequestEphemeralBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        no_device: cdktf.booleanToTerraform(struct.noDevice),
        virtual_name: cdktf.stringToTerraform(struct.virtualName),
    };
}
exports.spotInstanceRequestEphemeralBlockDeviceToTerraform = spotInstanceRequestEphemeralBlockDeviceToTerraform;
function spotInstanceRequestLaunchTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        version: cdktf.stringToTerraform(struct.version),
    };
}
exports.spotInstanceRequestLaunchTemplateToTerraform = spotInstanceRequestLaunchTemplateToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestLaunchTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._version = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._version = value.version;
        }
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
    get version() {
        return this.getStringAttribute('version');
    }
    /**
     * @stability stable
     */
    set version(value) {
        this._version = value;
    }
    /**
     * @stability stable
     */
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionInput() {
        return this._version;
    }
}
exports.SpotInstanceRequestLaunchTemplateOutputReference = SpotInstanceRequestLaunchTemplateOutputReference;
_e = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestLaunchTemplateOutputReference[_e] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestLaunchTemplateOutputReference", version: "3.0.1" };
function spotInstanceRequestMetadataOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        http_endpoint: cdktf.stringToTerraform(struct.httpEndpoint),
        http_put_response_hop_limit: cdktf.numberToTerraform(struct.httpPutResponseHopLimit),
        http_tokens: cdktf.stringToTerraform(struct.httpTokens),
    };
}
exports.spotInstanceRequestMetadataOptionsToTerraform = spotInstanceRequestMetadataOptionsToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestMetadataOptionsOutputReference extends cdktf.ComplexObject {
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
            this._httpPutResponseHopLimit = undefined;
            this._httpTokens = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._httpEndpoint = value.httpEndpoint;
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
exports.SpotInstanceRequestMetadataOptionsOutputReference = SpotInstanceRequestMetadataOptionsOutputReference;
_f = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestMetadataOptionsOutputReference[_f] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestMetadataOptionsOutputReference", version: "3.0.1" };
function spotInstanceRequestNetworkInterfaceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        device_index: cdktf.numberToTerraform(struct.deviceIndex),
        network_interface_id: cdktf.stringToTerraform(struct.networkInterfaceId),
    };
}
exports.spotInstanceRequestNetworkInterfaceToTerraform = spotInstanceRequestNetworkInterfaceToTerraform;
function spotInstanceRequestRootBlockDeviceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delete_on_termination: cdktf.booleanToTerraform(struct.deleteOnTermination),
        encrypted: cdktf.booleanToTerraform(struct.encrypted),
        iops: cdktf.numberToTerraform(struct.iops),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct.tags),
        throughput: cdktf.numberToTerraform(struct.throughput),
        volume_size: cdktf.numberToTerraform(struct.volumeSize),
        volume_type: cdktf.stringToTerraform(struct.volumeType),
    };
}
exports.spotInstanceRequestRootBlockDeviceToTerraform = spotInstanceRequestRootBlockDeviceToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestRootBlockDeviceOutputReference extends cdktf.ComplexObject {
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
        if (this._tags) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags;
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
            this._tags = undefined;
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
            this._tags = value.tags;
            this._throughput = value.throughput;
            this._volumeSize = value.volumeSize;
            this._volumeType = value.volumeType;
        }
    }
    /**
     * @stability stable
     */
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
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
        return this.getBooleanAttribute('encrypted');
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
exports.SpotInstanceRequestRootBlockDeviceOutputReference = SpotInstanceRequestRootBlockDeviceOutputReference;
_g = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestRootBlockDeviceOutputReference[_g] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestRootBlockDeviceOutputReference", version: "3.0.1" };
function spotInstanceRequestTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
exports.spotInstanceRequestTimeoutsToTerraform = spotInstanceRequestTimeoutsToTerraform;
/**
 * @stability stable
 */
class SpotInstanceRequestTimeoutsOutputReference extends cdktf.ComplexObject {
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
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
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
}
exports.SpotInstanceRequestTimeoutsOutputReference = SpotInstanceRequestTimeoutsOutputReference;
_h = JSII_RTTI_SYMBOL_1;
SpotInstanceRequestTimeoutsOutputReference[_h] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequestTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request}.
 *
 * @stability stable
 */
class SpotInstanceRequest extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html aws_spot_instance_request} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_spot_instance_request',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // capacity_reservation_specification - computed: false, optional: true, required: false
        this._capacityReservationSpecification = new SpotInstanceRequestCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification", true);
        // credit_specification - computed: false, optional: true, required: false
        this._creditSpecification = new SpotInstanceRequestCreditSpecificationOutputReference(this, "credit_specification", true);
        // enclave_options - computed: false, optional: true, required: false
        this._enclaveOptions = new SpotInstanceRequestEnclaveOptionsOutputReference(this, "enclave_options", true);
        // launch_template - computed: false, optional: true, required: false
        this._launchTemplate = new SpotInstanceRequestLaunchTemplateOutputReference(this, "launch_template", true);
        // metadata_options - computed: false, optional: true, required: false
        this._metadataOptions = new SpotInstanceRequestMetadataOptionsOutputReference(this, "metadata_options", true);
        // root_block_device - computed: false, optional: true, required: false
        this._rootBlockDevice = new SpotInstanceRequestRootBlockDeviceOutputReference(this, "root_block_device", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new SpotInstanceRequestTimeoutsOutputReference(this, "timeouts", true);
        this._ami = config.ami;
        this._associatePublicIpAddress = config.associatePublicIpAddress;
        this._availabilityZone = config.availabilityZone;
        this._blockDurationMinutes = config.blockDurationMinutes;
        this._cpuCoreCount = config.cpuCoreCount;
        this._cpuThreadsPerCore = config.cpuThreadsPerCore;
        this._disableApiTermination = config.disableApiTermination;
        this._ebsOptimized = config.ebsOptimized;
        this._getPasswordData = config.fetchPasswordData;
        this._hibernation = config.hibernation;
        this._hostId = config.hostId;
        this._iamInstanceProfile = config.iamInstanceProfile;
        this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
        this._instanceInterruptionBehavior = config.instanceInterruptionBehavior;
        this._instanceInterruptionBehaviour = config.instanceInterruptionBehaviour;
        this._instanceType = config.instanceType;
        this._ipv6AddressCount = config.ipv6AddressCount;
        this._ipv6Addresses = config.ipv6Addresses;
        this._keyName = config.keyName;
        this._launchGroup = config.launchGroup;
        this._monitoring = config.monitoring;
        this._placementGroup = config.placementGroup;
        this._placementPartitionNumber = config.placementPartitionNumber;
        this._privateIp = config.privateIp;
        this._secondaryPrivateIps = config.secondaryPrivateIps;
        this._securityGroups = config.securityGroups;
        this._sourceDestCheck = config.sourceDestCheck;
        this._spotPrice = config.spotPrice;
        this._spotType = config.spotType;
        this._subnetId = config.subnetId;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._tenancy = config.tenancy;
        this._userData = config.userData;
        this._userDataBase64 = config.userDataBase64;
        this._validFrom = config.validFrom;
        this._validUntil = config.validUntil;
        this._volumeTags = config.volumeTags;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._waitForFulfillment = config.waitForFulfillment;
        this._capacityReservationSpecification.internalValue = config.capacityReservationSpecification;
        this._creditSpecification.internalValue = config.creditSpecification;
        this._ebsBlockDevice = config.ebsBlockDevice;
        this._enclaveOptions.internalValue = config.enclaveOptions;
        this._ephemeralBlockDevice = config.ephemeralBlockDevice;
        this._launchTemplate.internalValue = config.launchTemplate;
        this._metadataOptions.internalValue = config.metadataOptions;
        this._networkInterface = config.networkInterface;
        this._rootBlockDevice.internalValue = config.rootBlockDevice;
        this._timeouts.internalValue = config.timeouts;
    }
    /**
     * @stability stable
     */
    get ami() {
        return this.getStringAttribute('ami');
    }
    /**
     * @stability stable
     */
    set ami(value) {
        this._ami = value;
    }
    /**
     * @stability stable
     */
    resetAmi() {
        this._ami = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get amiInput() {
        return this._ami;
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
    get associatePublicIpAddress() {
        return this.getBooleanAttribute('associate_public_ip_address');
    }
    /**
     * @stability stable
     */
    set associatePublicIpAddress(value) {
        this._associatePublicIpAddress = value;
    }
    /**
     * @stability stable
     */
    resetAssociatePublicIpAddress() {
        this._associatePublicIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get associatePublicIpAddressInput() {
        return this._associatePublicIpAddress;
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
    get cpuCoreCount() {
        return this.getNumberAttribute('cpu_core_count');
    }
    /**
     * @stability stable
     */
    set cpuCoreCount(value) {
        this._cpuCoreCount = value;
    }
    /**
     * @stability stable
     */
    resetCpuCoreCount() {
        this._cpuCoreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cpuCoreCountInput() {
        return this._cpuCoreCount;
    }
    /**
     * @stability stable
     */
    get cpuThreadsPerCore() {
        return this.getNumberAttribute('cpu_threads_per_core');
    }
    /**
     * @stability stable
     */
    set cpuThreadsPerCore(value) {
        this._cpuThreadsPerCore = value;
    }
    /**
     * @stability stable
     */
    resetCpuThreadsPerCore() {
        this._cpuThreadsPerCore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cpuThreadsPerCoreInput() {
        return this._cpuThreadsPerCore;
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
    /**
     * @stability stable
     */
    get fetchPasswordData() {
        return this.getBooleanAttribute('get_password_data');
    }
    /**
     * @stability stable
     */
    set fetchPasswordData(value) {
        this._getPasswordData = value;
    }
    /**
     * @stability stable
     */
    resetFetchPasswordData() {
        this._getPasswordData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fetchPasswordDataInput() {
        return this._getPasswordData;
    }
    /**
     * @stability stable
     */
    get hibernation() {
        return this.getBooleanAttribute('hibernation');
    }
    /**
     * @stability stable
     */
    set hibernation(value) {
        this._hibernation = value;
    }
    /**
     * @stability stable
     */
    resetHibernation() {
        this._hibernation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hibernationInput() {
        return this._hibernation;
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
    get iamInstanceProfile() {
        return this.getStringAttribute('iam_instance_profile');
    }
    /**
     * @stability stable
     */
    set iamInstanceProfile(value) {
        this._iamInstanceProfile = value;
    }
    /**
     * @stability stable
     */
    resetIamInstanceProfile() {
        this._iamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamInstanceProfileInput() {
        return this._iamInstanceProfile;
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
    get instanceInterruptionBehaviour() {
        return this.getStringAttribute('instance_interruption_behaviour');
    }
    /**
     * @stability stable
     */
    set instanceInterruptionBehaviour(value) {
        this._instanceInterruptionBehaviour = value;
    }
    /**
     * @stability stable
     */
    resetInstanceInterruptionBehaviour() {
        this._instanceInterruptionBehaviour = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceInterruptionBehaviourInput() {
        return this._instanceInterruptionBehaviour;
    }
    // instance_state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceState() {
        return this.getStringAttribute('instance_state');
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
    get ipv6AddressCount() {
        return this.getNumberAttribute('ipv6_address_count');
    }
    /**
     * @stability stable
     */
    set ipv6AddressCount(value) {
        this._ipv6AddressCount = value;
    }
    /**
     * @stability stable
     */
    resetIpv6AddressCount() {
        this._ipv6AddressCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv6AddressCountInput() {
        return this._ipv6AddressCount;
    }
    /**
     * @stability stable
     */
    get ipv6Addresses() {
        return this.getListAttribute('ipv6_addresses');
    }
    /**
     * @stability stable
     */
    set ipv6Addresses(value) {
        this._ipv6Addresses = value;
    }
    /**
     * @stability stable
     */
    resetIpv6Addresses() {
        this._ipv6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipv6AddressesInput() {
        return this._ipv6Addresses;
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
    /**
     * @stability stable
     */
    get launchGroup() {
        return this.getStringAttribute('launch_group');
    }
    /**
     * @stability stable
     */
    set launchGroup(value) {
        this._launchGroup = value;
    }
    /**
     * @stability stable
     */
    resetLaunchGroup() {
        this._launchGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchGroupInput() {
        return this._launchGroup;
    }
    /**
     * @stability stable
     */
    get monitoring() {
        return this.getBooleanAttribute('monitoring');
    }
    /**
     * @stability stable
     */
    set monitoring(value) {
        this._monitoring = value;
    }
    /**
     * @stability stable
     */
    resetMonitoring() {
        this._monitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get monitoringInput() {
        return this._monitoring;
    }
    // outpost_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get outpostArn() {
        return this.getStringAttribute('outpost_arn');
    }
    // password_data - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get passwordData() {
        return this.getStringAttribute('password_data');
    }
    /**
     * @stability stable
     */
    get placementGroup() {
        return this.getStringAttribute('placement_group');
    }
    /**
     * @stability stable
     */
    set placementGroup(value) {
        this._placementGroup = value;
    }
    /**
     * @stability stable
     */
    resetPlacementGroup() {
        this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get placementGroupInput() {
        return this._placementGroup;
    }
    /**
     * @stability stable
     */
    get placementPartitionNumber() {
        return this.getNumberAttribute('placement_partition_number');
    }
    /**
     * @stability stable
     */
    set placementPartitionNumber(value) {
        this._placementPartitionNumber = value;
    }
    /**
     * @stability stable
     */
    resetPlacementPartitionNumber() {
        this._placementPartitionNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get placementPartitionNumberInput() {
        return this._placementPartitionNumber;
    }
    // primary_network_interface_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get primaryNetworkInterfaceId() {
        return this.getStringAttribute('primary_network_interface_id');
    }
    // private_dns - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get privateDns() {
        return this.getStringAttribute('private_dns');
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
    // public_dns - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get publicDns() {
        return this.getStringAttribute('public_dns');
    }
    // public_ip - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get publicIp() {
        return this.getStringAttribute('public_ip');
    }
    /**
     * @stability stable
     */
    get secondaryPrivateIps() {
        return this.getListAttribute('secondary_private_ips');
    }
    /**
     * @stability stable
     */
    set secondaryPrivateIps(value) {
        this._secondaryPrivateIps = value;
    }
    /**
     * @stability stable
     */
    resetSecondaryPrivateIps() {
        this._secondaryPrivateIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get secondaryPrivateIpsInput() {
        return this._secondaryPrivateIps;
    }
    /**
     * @stability stable
     */
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    /**
     * @stability stable
     */
    set securityGroups(value) {
        this._securityGroups = value;
    }
    /**
     * @stability stable
     */
    resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupsInput() {
        return this._securityGroups;
    }
    /**
     * @stability stable
     */
    get sourceDestCheck() {
        return this.getBooleanAttribute('source_dest_check');
    }
    /**
     * @stability stable
     */
    set sourceDestCheck(value) {
        this._sourceDestCheck = value;
    }
    /**
     * @stability stable
     */
    resetSourceDestCheck() {
        this._sourceDestCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceDestCheckInput() {
        return this._sourceDestCheck;
    }
    // spot_bid_status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spotBidStatus() {
        return this.getStringAttribute('spot_bid_status');
    }
    // spot_instance_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spotInstanceId() {
        return this.getStringAttribute('spot_instance_id');
    }
    /**
     * @stability stable
     */
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    /**
     * @stability stable
     */
    set spotPrice(value) {
        this._spotPrice = value;
    }
    /**
     * @stability stable
     */
    resetSpotPrice() {
        this._spotPrice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotPriceInput() {
        return this._spotPrice;
    }
    // spot_request_state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get spotRequestState() {
        return this.getStringAttribute('spot_request_state');
    }
    /**
     * @stability stable
     */
    get spotType() {
        return this.getStringAttribute('spot_type');
    }
    /**
     * @stability stable
     */
    set spotType(value) {
        this._spotType = value;
    }
    /**
     * @stability stable
     */
    resetSpotType() {
        this._spotType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get spotTypeInput() {
        return this._spotType;
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
    get userDataBase64() {
        return this.getStringAttribute('user_data_base64');
    }
    /**
     * @stability stable
     */
    set userDataBase64(value) {
        this._userDataBase64 = value;
    }
    /**
     * @stability stable
     */
    resetUserDataBase64() {
        this._userDataBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userDataBase64Input() {
        return this._userDataBase64;
    }
    /**
     * @stability stable
     */
    get validFrom() {
        return this.getStringAttribute('valid_from');
    }
    /**
     * @stability stable
     */
    set validFrom(value) {
        this._validFrom = value;
    }
    /**
     * @stability stable
     */
    resetValidFrom() {
        this._validFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validFromInput() {
        return this._validFrom;
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
    /**
     * @stability stable
     */
    get volumeTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('volume_tags');
    }
    /**
     * @stability stable
     */
    set volumeTags(value) {
        this._volumeTags = value;
    }
    /**
     * @stability stable
     */
    resetVolumeTags() {
        this._volumeTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get volumeTagsInput() {
        return this._volumeTags;
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
    get waitForFulfillment() {
        return this.getBooleanAttribute('wait_for_fulfillment');
    }
    /**
     * @stability stable
     */
    set waitForFulfillment(value) {
        this._waitForFulfillment = value;
    }
    /**
     * @stability stable
     */
    resetWaitForFulfillment() {
        this._waitForFulfillment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get waitForFulfillmentInput() {
        return this._waitForFulfillment;
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
    get launchTemplate() {
        return this._launchTemplate;
    }
    /**
     * @stability stable
     */
    putLaunchTemplate(value) {
        this._launchTemplate.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLaunchTemplate() {
        this._launchTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get launchTemplateInput() {
        return this._launchTemplate.internalValue;
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
    get networkInterface() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_interface');
    }
    /**
     * @stability stable
     */
    set networkInterface(value) {
        this._networkInterface = value;
    }
    /**
     * @stability stable
     */
    resetNetworkInterface() {
        this._networkInterface = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkInterfaceInput() {
        return this._networkInterface;
    }
    /**
     * @stability stable
     */
    get rootBlockDevice() {
        return this._rootBlockDevice;
    }
    /**
     * @stability stable
     */
    putRootBlockDevice(value) {
        this._rootBlockDevice.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRootBlockDevice() {
        this._rootBlockDevice.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rootBlockDeviceInput() {
        return this._rootBlockDevice.internalValue;
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
            ami: cdktf.stringToTerraform(this._ami),
            associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            block_duration_minutes: cdktf.numberToTerraform(this._blockDurationMinutes),
            cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
            cpu_threads_per_core: cdktf.numberToTerraform(this._cpuThreadsPerCore),
            disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
            ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
            get_password_data: cdktf.booleanToTerraform(this._getPasswordData),
            hibernation: cdktf.booleanToTerraform(this._hibernation),
            host_id: cdktf.stringToTerraform(this._hostId),
            iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
            instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
            instance_interruption_behavior: cdktf.stringToTerraform(this._instanceInterruptionBehavior),
            instance_interruption_behaviour: cdktf.stringToTerraform(this._instanceInterruptionBehaviour),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
            ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipv6Addresses),
            key_name: cdktf.stringToTerraform(this._keyName),
            launch_group: cdktf.stringToTerraform(this._launchGroup),
            monitoring: cdktf.booleanToTerraform(this._monitoring),
            placement_group: cdktf.stringToTerraform(this._placementGroup),
            placement_partition_number: cdktf.numberToTerraform(this._placementPartitionNumber),
            private_ip: cdktf.stringToTerraform(this._privateIp),
            secondary_private_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._secondaryPrivateIps),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
            spot_price: cdktf.stringToTerraform(this._spotPrice),
            spot_type: cdktf.stringToTerraform(this._spotType),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tenancy: cdktf.stringToTerraform(this._tenancy),
            user_data: cdktf.stringToTerraform(this._userData),
            user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
            valid_from: cdktf.stringToTerraform(this._validFrom),
            valid_until: cdktf.stringToTerraform(this._validUntil),
            volume_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._volumeTags),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            wait_for_fulfillment: cdktf.booleanToTerraform(this._waitForFulfillment),
            capacity_reservation_specification: spotInstanceRequestCapacityReservationSpecificationToTerraform(this._capacityReservationSpecification.internalValue),
            credit_specification: spotInstanceRequestCreditSpecificationToTerraform(this._creditSpecification.internalValue),
            ebs_block_device: cdktf.listMapper(spotInstanceRequestEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
            enclave_options: spotInstanceRequestEnclaveOptionsToTerraform(this._enclaveOptions.internalValue),
            ephemeral_block_device: cdktf.listMapper(spotInstanceRequestEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
            launch_template: spotInstanceRequestLaunchTemplateToTerraform(this._launchTemplate.internalValue),
            metadata_options: spotInstanceRequestMetadataOptionsToTerraform(this._metadataOptions.internalValue),
            network_interface: cdktf.listMapper(spotInstanceRequestNetworkInterfaceToTerraform)(this._networkInterface),
            root_block_device: spotInstanceRequestRootBlockDeviceToTerraform(this._rootBlockDevice.internalValue),
            timeouts: spotInstanceRequestTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.SpotInstanceRequest = SpotInstanceRequest;
_j = JSII_RTTI_SYMBOL_1;
SpotInstanceRequest[_j] = { fqn: "@cdktf/provider-aws.ec2.SpotInstanceRequest", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SpotInstanceRequest.tfResourceType = "aws_spot_instance_request";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdC1pbnN0YW5jZS1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VjMi9zcG90LWluc3RhbmNlLXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUE4Ry9CLFNBQWdCLHVGQUF1RixDQUFDLE1BQW1MO0lBQ3pSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUNoRixDQUFBO0FBQ0gsQ0FBQztBQVJELDBMQVFDOzs7O0FBRUQsTUFBYSwyRkFBNEYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlsSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3pFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMs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Q0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsYUFBYSxDQUFDO1lBQ3hKLG9CQUFvQixFQUFFLGlEQUFpRCxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7WUFDaEgsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDdEcsZUFBZSxFQUFFLDRDQUE0QyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1lBQ2pHLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsa0RBQWtELENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDeEgsZUFBZSxFQUFFLDRDQUE0QyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1lBQ2pHLGdCQUFnQixFQUFFLDZDQUE2QyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7WUFDcEcsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUMzRyxpQkFBaUIsRUFBRSw2Q0FBNkMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBQ3JHLFFBQVEsRUFBRSxzQ0FBc0MsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUMvRSxDQUFDO0lBQ0osQ0FBQzs7QUExK0JILGtEQTIrQkM7OztBQXorQkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxrQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBTcG90SW5zdGFuY2VSZXF1ZXN0Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFtaT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9ja0R1cmF0aW9uTWludXRlcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNwdUNvcmVDb3VudD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNwdVRocmVhZHNQZXJDb3JlPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlzYWJsZUFwaVRlcm1pbmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVic09wdGltaXplZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZldGNoUGFzc3dvcmREYXRhPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGliZXJuYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaG9zdElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaWFtSW5zdGFuY2VQcm9maWxlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3I/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3I/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpcHY2QWRkcmVzc0NvdW50PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaXB2NkFkZHJlc3Nlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2V5TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoR3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9uaXRvcmluZz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGxhY2VtZW50R3JvdXA/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwbGFjZW1lbnRQYXJ0aXRpb25OdW1iZXI/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpdmF0ZUlwPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZWNvbmRhcnlQcml2YXRlSXBzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VEZXN0Q2hlY2s/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BvdFByaWNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcG90VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGVuYW5jeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlckRhdGE/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlckRhdGFCYXNlNjQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRGcm9tPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsaWRVbnRpbD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZVRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdnBjU2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd2FpdEZvckZ1bGZpbGxtZW50PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24/OiBTcG90SW5zdGFuY2VSZXF1ZXN0Q2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVkaXRTcGVjaWZpY2F0aW9uPzogU3BvdEluc3RhbmNlUmVxdWVzdENyZWRpdFNwZWNpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlYnNCbG9ja0RldmljZT86IFNwb3RJbnN0YW5jZVJlcXVlc3RFYnNCbG9ja0RldmljZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jbGF2ZU9wdGlvbnM/OiBTcG90SW5zdGFuY2VSZXF1ZXN0RW5jbGF2ZU9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcGhlbWVyYWxCbG9ja0RldmljZT86IFNwb3RJbnN0YW5jZVJlcXVlc3RFcGhlbWVyYWxCbG9ja0RldmljZVtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGU/OiBTcG90SW5zdGFuY2VSZXF1ZXN0TGF1bmNoVGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXRhZGF0YU9wdGlvbnM/OiBTcG90SW5zdGFuY2VSZXF1ZXN0TWV0YWRhdGFPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZT86IFNwb3RJbnN0YW5jZVJlcXVlc3ROZXR3b3JrSW50ZXJmYWNlW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb290QmxvY2tEZXZpY2U/OiBTcG90SW5zdGFuY2VSZXF1ZXN0Um9vdEJsb2NrRGV2aWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZW91dHM/OiBTcG90SW5zdGFuY2VSZXF1ZXN0VGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RJbnN0YW5jZVJlcXVlc3RDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FwYWNpdHlSZXNlcnZhdGlvbklkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldFRvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RJbnN0YW5jZVJlcXVlc3RDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXRPdXRwdXRSZWZlcmVuY2UgfCBTcG90SW5zdGFuY2VSZXF1ZXN0Q2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2FwYWNpdHlSZXNlcnZhdGlvbklkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uQ2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90SW5zdGFuY2VSZXF1ZXN0Q2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcGFjaXR5UmVzZXJ2YXRpb25JZCA9IHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25JZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25JZCA9IHZhbHVlLmNhcGFjaXR5UmVzZXJ2YXRpb25JZDtcbiAgICB9XG4gIH1cblxuICAvLyBjYXBhY2l0eV9yZXNlcnZhdGlvbl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlc2VydmF0aW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhcGFjaXR5X3Jlc2VydmF0aW9uX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXBhY2l0eVJlc2VydmF0aW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmVzZXJ2YXRpb25JZCgpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uSWQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQ/OiBTcG90SW5zdGFuY2VSZXF1ZXN0Q2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIHwgU3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25fcHJlZmVyZW5jZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSksXG4gICAgY2FwYWNpdHlfcmVzZXJ2YXRpb25fdGFyZ2V0OiBzcG90SW5zdGFuY2VSZXF1ZXN0Q2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25DYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0VG9UZXJyYWZvcm0oc3RydWN0IS5jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RJbnN0YW5jZVJlcXVlc3RDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlID0gdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblByZWZlcmVuY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0ID0gdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSA9IHZhbHVlLmNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlO1xuICAgICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldDtcbiAgICB9XG4gIH1cblxuICAvLyBjYXBhY2l0eV9yZXNlcnZhdGlvbl9wcmVmZXJlbmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhcGFjaXR5X3Jlc2VydmF0aW9uX3ByZWZlcmVuY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlKCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25QcmVmZXJlbmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uUHJlZmVyZW5jZTtcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3RhcmdldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0ID0gbmV3IFNwb3RJbnN0YW5jZVJlcXVlc3RDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2FwYWNpdHlfcmVzZXJ2YXRpb25fdGFyZ2V0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQ7XG4gIH1cbiAgcHVibGljIHB1dENhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbkNhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQpIHtcbiAgICB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0KCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25UYXJnZXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZXNlcnZhdGlvblRhcmdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uVGFyZ2V0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEluc3RhbmNlUmVxdWVzdENyZWRpdFNwZWNpZmljYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3B1Q3JlZGl0cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RJbnN0YW5jZVJlcXVlc3RDcmVkaXRTcGVjaWZpY2F0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEluc3RhbmNlUmVxdWVzdENyZWRpdFNwZWNpZmljYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBTcG90SW5zdGFuY2VSZXF1ZXN0Q3JlZGl0U3BlY2lmaWNhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNwdV9jcmVkaXRzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNwdUNyZWRpdHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90SW5zdGFuY2VSZXF1ZXN0Q3JlZGl0U3BlY2lmaWNhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90SW5zdGFuY2VSZXF1ZXN0Q3JlZGl0U3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3B1Q3JlZGl0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3B1Q3JlZGl0cyA9IHRoaXMuX2NwdUNyZWRpdHM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBTcG90SW5zdGFuY2VSZXF1ZXN0Q3JlZGl0U3BlY2lmaWNhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NwdUNyZWRpdHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NwdUNyZWRpdHMgPSB2YWx1ZS5jcHVDcmVkaXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNwdV9jcmVkaXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdUNyZWRpdHM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNwdUNyZWRpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHVfY3JlZGl0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1Q3JlZGl0cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3B1Q3JlZGl0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdUNyZWRpdHMoKSB7XG4gICAgdGhpcy5fY3B1Q3JlZGl0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1Q3JlZGl0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHVDcmVkaXRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwb3RJbnN0YW5jZVJlcXVlc3RFYnNCbG9ja0RldmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGV0ZU9uVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpb3BzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc25hcHNob3RJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRocm91Z2hwdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2b2x1bWVTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RJbnN0YW5jZVJlcXVlc3RFYnNCbG9ja0RldmljZVRvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RJbnN0YW5jZVJlcXVlc3RFYnNCbG9ja0RldmljZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlT25UZXJtaW5hdGlvbiksXG4gICAgZGV2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgZW5jcnlwdGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0ZWQpLFxuICAgIGlvcHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW9wcyksXG4gICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgc25hcHNob3RfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RJZCksXG4gICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS50YWdzKSxcbiAgICB0aHJvdWdocHV0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnRocm91Z2hwdXQpLFxuICAgIHZvbHVtZV9zaXplOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVNpemUpLFxuICAgIHZvbHVtZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZvbHVtZVR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEluc3RhbmNlUmVxdWVzdEVuY2xhdmVPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BvdEluc3RhbmNlUmVxdWVzdEVuY2xhdmVPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEluc3RhbmNlUmVxdWVzdEVuY2xhdmVPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgU3BvdEluc3RhbmNlUmVxdWVzdEVuY2xhdmVPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwb3RJbnN0YW5jZVJlcXVlc3RFbmNsYXZlT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90SW5zdGFuY2VSZXF1ZXN0RW5jbGF2ZU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3BvdEluc3RhbmNlUmVxdWVzdEVuY2xhdmVPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTcG90SW5zdGFuY2VSZXF1ZXN0RXBoZW1lcmFsQmxvY2tEZXZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBub0RldmljZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmlydHVhbE5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90SW5zdGFuY2VSZXF1ZXN0RXBoZW1lcmFsQmxvY2tEZXZpY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90SW5zdGFuY2VSZXF1ZXN0RXBoZW1lcmFsQmxvY2tEZXZpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZXZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXZpY2VOYW1lKSxcbiAgICBub19kZXZpY2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm5vRGV2aWNlKSxcbiAgICB2aXJ0dWFsX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmlydHVhbE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEluc3RhbmNlUmVxdWVzdExhdW5jaFRlbXBsYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RJbnN0YW5jZVJlcXVlc3RMYXVuY2hUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RJbnN0YW5jZVJlcXVlc3RMYXVuY2hUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSB8IFNwb3RJbnN0YW5jZVJlcXVlc3RMYXVuY2hUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BvdEluc3RhbmNlUmVxdWVzdExhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RJbnN0YW5jZVJlcXVlc3RMYXVuY2hUZW1wbGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJzaW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52ZXJzaW9uID0gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RMYXVuY2hUZW1wbGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWUubmFtZTtcbiAgICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX3ZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBTcG90SW5zdGFuY2VSZXF1ZXN0TWV0YWRhdGFPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBodHRwRW5kcG9pbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBQdXRSZXNwb25zZUhvcExpbWl0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaHR0cFRva2Vucz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwb3RJbnN0YW5jZVJlcXVlc3RNZXRhZGF0YU9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90SW5zdGFuY2VSZXF1ZXN0TWV0YWRhdGFPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgU3BvdEluc3RhbmNlUmVxdWVzdE1ldGFkYXRhT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGh0dHBfZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaHR0cEVuZHBvaW50KSxcbiAgICBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaHR0cFB1dFJlc3BvbnNlSG9wTGltaXQpLFxuICAgIGh0dHBfdG9rZW5zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmh0dHBUb2tlbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcG90SW5zdGFuY2VSZXF1ZXN0TWV0YWRhdGFPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RJbnN0YW5jZVJlcXVlc3RNZXRhZGF0YU9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2h0dHBFbmRwb2ludCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaHR0cEVuZHBvaW50ID0gdGhpcy5faHR0cEVuZHBvaW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5faHR0cFB1dFJlc3BvbnNlSG9wTGltaXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmh0dHBQdXRSZXNwb25zZUhvcExpbWl0ID0gdGhpcy5faHR0cFB1dFJlc3BvbnNlSG9wTGltaXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9odHRwVG9rZW5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5odHRwVG9rZW5zID0gdGhpcy5faHR0cFRva2VucztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RNZXRhZGF0YU9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9odHRwRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2h0dHBUb2tlbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2h0dHBFbmRwb2ludCA9IHZhbHVlLmh0dHBFbmRwb2ludDtcbiAgICAgIHRoaXMuX2h0dHBQdXRSZXNwb25zZUhvcExpbWl0ID0gdmFsdWUuaHR0cFB1dFJlc3BvbnNlSG9wTGltaXQ7XG4gICAgICB0aGlzLl9odHRwVG9rZW5zID0gdmFsdWUuaHR0cFRva2VucztcbiAgICB9XG4gIH1cblxuICAvLyBodHRwX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cEVuZHBvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBodHRwRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdodHRwX2VuZHBvaW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwRW5kcG9pbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2h0dHBFbmRwb2ludCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBFbmRwb2ludCgpIHtcbiAgICB0aGlzLl9odHRwRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGh0dHBFbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwRW5kcG9pbnQ7XG4gIH1cblxuICAvLyBodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgaHR0cFB1dFJlc3BvbnNlSG9wTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdodHRwX3B1dF9yZXNwb25zZV9ob3BfbGltaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGh0dHBQdXRSZXNwb25zZUhvcExpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBQdXRSZXNwb25zZUhvcExpbWl0KCkge1xuICAgIHRoaXMuX2h0dHBQdXRSZXNwb25zZUhvcExpbWl0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwUHV0UmVzcG9uc2VIb3BMaW1pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9odHRwUHV0UmVzcG9uc2VIb3BMaW1pdDtcbiAgfVxuXG4gIC8vIGh0dHBfdG9rZW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cFRva2Vucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaHR0cFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2h0dHBfdG9rZW5zJyk7XG4gIH1cbiAgcHVibGljIHNldCBodHRwVG9rZW5zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odHRwVG9rZW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SHR0cFRva2VucygpIHtcbiAgICB0aGlzLl9odHRwVG9rZW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwVG9rZW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBUb2tlbnM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEluc3RhbmNlUmVxdWVzdE5ldHdvcmtJbnRlcmZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGVPblRlcm1pbmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VJbmRleDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmV0d29ya0ludGVyZmFjZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90SW5zdGFuY2VSZXF1ZXN0TmV0d29ya0ludGVyZmFjZVRvVGVycmFmb3JtKHN0cnVjdD86IFNwb3RJbnN0YW5jZVJlcXVlc3ROZXR3b3JrSW50ZXJmYWNlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGVsZXRlX29uX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGVPblRlcm1pbmF0aW9uKSxcbiAgICBkZXZpY2VfaW5kZXg6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlSW5kZXgpLFxuICAgIG5ldHdvcmtfaW50ZXJmYWNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5ldHdvcmtJbnRlcmZhY2VJZCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcG90SW5zdGFuY2VSZXF1ZXN0Um9vdEJsb2NrRGV2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlT25UZXJtaW5hdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlvcHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5SWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aHJvdWdocHV0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdm9sdW1lU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90SW5zdGFuY2VSZXF1ZXN0Um9vdEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0oc3RydWN0PzogU3BvdEluc3RhbmNlUmVxdWVzdFJvb3RCbG9ja0RldmljZU91dHB1dFJlZmVyZW5jZSB8IFNwb3RJbnN0YW5jZVJlcXVlc3RSb290QmxvY2tEZXZpY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVfb25fdGVybWluYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGV0ZU9uVGVybWluYXRpb24pLFxuICAgIGVuY3J5cHRlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGVkKSxcbiAgICBpb3BzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmlvcHMpLFxuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEudGFncyksXG4gICAgdGhyb3VnaHB1dDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aHJvdWdocHV0KSxcbiAgICB2b2x1bWVfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVTaXplKSxcbiAgICB2b2x1bWVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52b2x1bWVUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BvdEluc3RhbmNlUmVxdWVzdFJvb3RCbG9ja0RldmljZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTcG90SW5zdGFuY2VSZXF1ZXN0Um9vdEJsb2NrRGV2aWNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGVPblRlcm1pbmF0aW9uID0gdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuY3J5cHRlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5jcnlwdGVkID0gdGhpcy5fZW5jcnlwdGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW9wcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW9wcyA9IHRoaXMuX2lvcHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5SWQgPSB0aGlzLl9rbXNLZXlJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ3MpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhZ3MgPSB0aGlzLl90YWdzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGhyb3VnaHB1dCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGhyb3VnaHB1dCA9IHRoaXMuX3Rocm91Z2hwdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl92b2x1bWVTaXplKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52b2x1bWVTaXplID0gdGhpcy5fdm9sdW1lU2l6ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ZvbHVtZVR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZvbHVtZVR5cGUgPSB0aGlzLl92b2x1bWVUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3BvdEluc3RhbmNlUmVxdWVzdFJvb3RCbG9ja0RldmljZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pb3BzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGhyb3VnaHB1dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92b2x1bWVUeXBlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWxldGVPblRlcm1pbmF0aW9uID0gdmFsdWUuZGVsZXRlT25UZXJtaW5hdGlvbjtcbiAgICAgIHRoaXMuX2VuY3J5cHRlZCA9IHZhbHVlLmVuY3J5cHRlZDtcbiAgICAgIHRoaXMuX2lvcHMgPSB2YWx1ZS5pb3BzO1xuICAgICAgdGhpcy5fa21zS2V5SWQgPSB2YWx1ZS5rbXNLZXlJZDtcbiAgICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZS50YWdzO1xuICAgICAgdGhpcy5fdGhyb3VnaHB1dCA9IHZhbHVlLnRocm91Z2hwdXQ7XG4gICAgICB0aGlzLl92b2x1bWVTaXplID0gdmFsdWUudm9sdW1lU2l6ZTtcbiAgICAgIHRoaXMuX3ZvbHVtZVR5cGUgPSB2YWx1ZS52b2x1bWVUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlbGV0ZV9vbl90ZXJtaW5hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGVPblRlcm1pbmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkZWxldGVPblRlcm1pbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RlbGV0ZV9vbl90ZXJtaW5hdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZU9uVGVybWluYXRpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGVPblRlcm1pbmF0aW9uKCkge1xuICAgIHRoaXMuX2RlbGV0ZU9uVGVybWluYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZU9uVGVybWluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlT25UZXJtaW5hdGlvbjtcbiAgfVxuXG4gIC8vIGVuY3J5cHRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY3J5cHRlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuY3J5cHRlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5jcnlwdGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5jcnlwdGVkKCkge1xuICAgIHRoaXMuX2VuY3J5cHRlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRlZDtcbiAgfVxuXG4gIC8vIGlvcHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pb3BzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpb3BzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW9wcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW9wcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW9wcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElvcHMoKSB7XG4gICAgdGhpcy5faW9wcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW9wc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pb3BzO1xuICB9XG5cbiAgLy8ga21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRocm91Z2hwdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHJvdWdocHV0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aHJvdWdocHV0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGhyb3VnaHB1dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGhyb3VnaHB1dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRocm91Z2hwdXQoKSB7XG4gICAgdGhpcy5fdGhyb3VnaHB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGhyb3VnaHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aHJvdWdocHV0O1xuICB9XG5cbiAgLy8gdm9sdW1lX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92b2x1bWVTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB2b2x1bWVTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndm9sdW1lX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZvbHVtZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWb2x1bWVTaXplKCkge1xuICAgIHRoaXMuX3ZvbHVtZVNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZvbHVtZVNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lU2l6ZTtcbiAgfVxuXG4gIC8vIHZvbHVtZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdm9sdW1lVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdm9sdW1lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZvbHVtZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2b2x1bWVUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92b2x1bWVUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Vm9sdW1lVHlwZSgpIHtcbiAgICB0aGlzLl92b2x1bWVUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2b2x1bWVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZVR5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3BvdEluc3RhbmNlUmVxdWVzdFRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxldGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcG90SW5zdGFuY2VSZXF1ZXN0VGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTcG90SW5zdGFuY2VSZXF1ZXN0VGltZW91dHNPdXRwdXRSZWZlcmVuY2UgfCBTcG90SW5zdGFuY2VSZXF1ZXN0VGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BvdEluc3RhbmNlUmVxdWVzdFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFNwb3RJbnN0YW5jZVJlcXVlc3RUaW1lb3V0cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVhdGUgPSB0aGlzLl9jcmVhdGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kZWxldGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGV0ZSA9IHRoaXMuX2RlbGV0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RUaW1lb3V0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdmFsdWUuY3JlYXRlO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdmFsdWUuZGVsZXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNyZWF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGUoKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlO1xuICB9XG5cbiAgLy8gZGVsZXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGV0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsZXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxldGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGV0ZSgpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGV0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTcG90SW5zdGFuY2VSZXF1ZXN0IGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3Nwb3RfaW5zdGFuY2VfcmVxdWVzdFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNwb3RJbnN0YW5jZVJlcXVlc3RDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3Nwb3RfaW5zdGFuY2VfcmVxdWVzdCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbWkgPSBjb25maWcuYW1pO1xuICAgIHRoaXMuX2Fzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyA9IGNvbmZpZy5hc3NvY2lhdGVQdWJsaWNJcEFkZHJlc3M7XG4gICAgdGhpcy5fYXZhaWxhYmlsaXR5Wm9uZSA9IGNvbmZpZy5hdmFpbGFiaWxpdHlab25lO1xuICAgIHRoaXMuX2Jsb2NrRHVyYXRpb25NaW51dGVzID0gY29uZmlnLmJsb2NrRHVyYXRpb25NaW51dGVzO1xuICAgIHRoaXMuX2NwdUNvcmVDb3VudCA9IGNvbmZpZy5jcHVDb3JlQ291bnQ7XG4gICAgdGhpcy5fY3B1VGhyZWFkc1BlckNvcmUgPSBjb25maWcuY3B1VGhyZWFkc1BlckNvcmU7XG4gICAgdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uID0gY29uZmlnLmRpc2FibGVBcGlUZXJtaW5hdGlvbjtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSBjb25maWcuZWJzT3B0aW1pemVkO1xuICAgIHRoaXMuX2dldFBhc3N3b3JkRGF0YSA9IGNvbmZpZy5mZXRjaFBhc3N3b3JkRGF0YTtcbiAgICB0aGlzLl9oaWJlcm5hdGlvbiA9IGNvbmZpZy5oaWJlcm5hdGlvbjtcbiAgICB0aGlzLl9ob3N0SWQgPSBjb25maWcuaG9zdElkO1xuICAgIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZSA9IGNvbmZpZy5pYW1JbnN0YW5jZVByb2ZpbGU7XG4gICAgdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yID0gY29uZmlnLmluc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvcjtcbiAgICB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yID0gY29uZmlnLmluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3I7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIgPSBjb25maWcuaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXI7XG4gICAgdGhpcy5faW5zdGFuY2VUeXBlID0gY29uZmlnLmluc3RhbmNlVHlwZTtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc0NvdW50ID0gY29uZmlnLmlwdjZBZGRyZXNzQ291bnQ7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NlcyA9IGNvbmZpZy5pcHY2QWRkcmVzc2VzO1xuICAgIHRoaXMuX2tleU5hbWUgPSBjb25maWcua2V5TmFtZTtcbiAgICB0aGlzLl9sYXVuY2hHcm91cCA9IGNvbmZpZy5sYXVuY2hHcm91cDtcbiAgICB0aGlzLl9tb25pdG9yaW5nID0gY29uZmlnLm1vbml0b3Jpbmc7XG4gICAgdGhpcy5fcGxhY2VtZW50R3JvdXAgPSBjb25maWcucGxhY2VtZW50R3JvdXA7XG4gICAgdGhpcy5fcGxhY2VtZW50UGFydGl0aW9uTnVtYmVyID0gY29uZmlnLnBsYWNlbWVudFBhcnRpdGlvbk51bWJlcjtcbiAgICB0aGlzLl9wcml2YXRlSXAgPSBjb25maWcucHJpdmF0ZUlwO1xuICAgIHRoaXMuX3NlY29uZGFyeVByaXZhdGVJcHMgPSBjb25maWcuc2Vjb25kYXJ5UHJpdmF0ZUlwcztcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IGNvbmZpZy5zZWN1cml0eUdyb3VwcztcbiAgICB0aGlzLl9zb3VyY2VEZXN0Q2hlY2sgPSBjb25maWcuc291cmNlRGVzdENoZWNrO1xuICAgIHRoaXMuX3Nwb3RQcmljZSA9IGNvbmZpZy5zcG90UHJpY2U7XG4gICAgdGhpcy5fc3BvdFR5cGUgPSBjb25maWcuc3BvdFR5cGU7XG4gICAgdGhpcy5fc3VibmV0SWQgPSBjb25maWcuc3VibmV0SWQ7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90ZW5hbmN5ID0gY29uZmlnLnRlbmFuY3k7XG4gICAgdGhpcy5fdXNlckRhdGEgPSBjb25maWcudXNlckRhdGE7XG4gICAgdGhpcy5fdXNlckRhdGFCYXNlNjQgPSBjb25maWcudXNlckRhdGFCYXNlNjQ7XG4gICAgdGhpcy5fdmFsaWRGcm9tID0gY29uZmlnLnZhbGlkRnJvbTtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gY29uZmlnLnZhbGlkVW50aWw7XG4gICAgdGhpcy5fdm9sdW1lVGFncyA9IGNvbmZpZy52b2x1bWVUYWdzO1xuICAgIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHMgPSBjb25maWcudnBjU2VjdXJpdHlHcm91cElkcztcbiAgICB0aGlzLl93YWl0Rm9yRnVsZmlsbG1lbnQgPSBjb25maWcud2FpdEZvckZ1bGZpbGxtZW50O1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb247XG4gICAgdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNyZWRpdFNwZWNpZmljYXRpb247XG4gICAgdGhpcy5fZWJzQmxvY2tEZXZpY2UgPSBjb25maWcuZWJzQmxvY2tEZXZpY2U7XG4gICAgdGhpcy5fZW5jbGF2ZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5lbmNsYXZlT3B0aW9ucztcbiAgICB0aGlzLl9lcGhlbWVyYWxCbG9ja0RldmljZSA9IGNvbmZpZy5lcGhlbWVyYWxCbG9ja0RldmljZTtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmxhdW5jaFRlbXBsYXRlO1xuICAgIHRoaXMuX21ldGFkYXRhT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLm1ldGFkYXRhT3B0aW9ucztcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlID0gY29uZmlnLm5ldHdvcmtJbnRlcmZhY2U7XG4gICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlLmludGVybmFsVmFsdWUgPSBjb25maWcucm9vdEJsb2NrRGV2aWNlO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFtaSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FtaT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYW1pKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYW1pJyk7XG4gIH1cbiAgcHVibGljIHNldCBhbWkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FtaSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFtaSgpIHtcbiAgICB0aGlzLl9hbWkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFtaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbWk7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGFzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Fzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Fzc29jaWF0ZV9wdWJsaWNfaXBfYWRkcmVzcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKCkge1xuICAgIHRoaXMuX2Fzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc29jaWF0ZVB1YmxpY0lwQWRkcmVzcztcbiAgfVxuXG4gIC8vIGF2YWlsYWJpbGl0eV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZhaWxhYmlsaXR5Wm9uZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F2YWlsYWJpbGl0eV96b25lJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmFpbGFiaWxpdHlab25lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZhaWxhYmlsaXR5Wm9uZSgpIHtcbiAgICB0aGlzLl9hdmFpbGFiaWxpdHlab25lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJpbGl0eVpvbmU7XG4gIH1cblxuICAvLyBibG9ja19kdXJhdGlvbl9taW51dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jsb2NrRHVyYXRpb25NaW51dGVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBibG9ja0R1cmF0aW9uTWludXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Jsb2NrX2R1cmF0aW9uX21pbnV0ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJsb2NrRHVyYXRpb25NaW51dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9ibG9ja0R1cmF0aW9uTWludXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJsb2NrRHVyYXRpb25NaW51dGVzKCkge1xuICAgIHRoaXMuX2Jsb2NrRHVyYXRpb25NaW51dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBibG9ja0R1cmF0aW9uTWludXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9ja0R1cmF0aW9uTWludXRlcztcbiAgfVxuXG4gIC8vIGNwdV9jb3JlX2NvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3B1Q29yZUNvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBjcHVDb3JlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjcHVfY29yZV9jb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1Q29yZUNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jcHVDb3JlQ291bnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcHVDb3JlQ291bnQoKSB7XG4gICAgdGhpcy5fY3B1Q29yZUNvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcHVDb3JlQ291bnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3B1Q29yZUNvdW50O1xuICB9XG5cbiAgLy8gY3B1X3RocmVhZHNfcGVyX2NvcmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcHVUaHJlYWRzUGVyQ29yZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY3B1VGhyZWFkc1BlckNvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjcHVfdGhyZWFkc19wZXJfY29yZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3B1VGhyZWFkc1BlckNvcmUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NwdVRocmVhZHNQZXJDb3JlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1VGhyZWFkc1BlckNvcmUoKSB7XG4gICAgdGhpcy5fY3B1VGhyZWFkc1BlckNvcmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNwdVRocmVhZHNQZXJDb3JlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdVRocmVhZHNQZXJDb3JlO1xuICB9XG5cbiAgLy8gZGlzYWJsZV9hcGlfdGVybWluYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaXNhYmxlQXBpVGVybWluYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRpc2FibGVBcGlUZXJtaW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkaXNhYmxlX2FwaV90ZXJtaW5hdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc2FibGVBcGlUZXJtaW5hdGlvbih2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGlzYWJsZUFwaVRlcm1pbmF0aW9uKCkge1xuICAgIHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlzYWJsZUFwaVRlcm1pbmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVBcGlUZXJtaW5hdGlvbjtcbiAgfVxuXG4gIC8vIGVic19vcHRpbWl6ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNPcHRpbWl6ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVic09wdGltaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlYnNfb3B0aW1pemVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZWJzT3B0aW1pemVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lYnNPcHRpbWl6ZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFYnNPcHRpbWl6ZWQoKSB7XG4gICAgdGhpcy5fZWJzT3B0aW1pemVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlYnNPcHRpbWl6ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWJzT3B0aW1pemVkO1xuICB9XG5cbiAgLy8gZ2V0X3Bhc3N3b3JkX2RhdGEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ2V0UGFzc3dvcmREYXRhPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBmZXRjaFBhc3N3b3JkRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdnZXRfcGFzc3dvcmRfZGF0YScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGZldGNoUGFzc3dvcmREYXRhKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9nZXRQYXNzd29yZERhdGEgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGZXRjaFBhc3N3b3JkRGF0YSgpIHtcbiAgICB0aGlzLl9nZXRQYXNzd29yZERhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZldGNoUGFzc3dvcmREYXRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFBhc3N3b3JkRGF0YTtcbiAgfVxuXG4gIC8vIGhpYmVybmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hpYmVybmF0aW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBoaWJlcm5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdoaWJlcm5hdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGhpYmVybmF0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9oaWJlcm5hdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEhpYmVybmF0aW9uKCkge1xuICAgIHRoaXMuX2hpYmVybmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoaWJlcm5hdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oaWJlcm5hdGlvbjtcbiAgfVxuXG4gIC8vIGhvc3RfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3N0SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvc3RJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3RJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faG9zdElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SG9zdElkKCkge1xuICAgIHRoaXMuX2hvc3RJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvc3RJZDtcbiAgfVxuXG4gIC8vIGlhbV9pbnN0YW5jZV9wcm9maWxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lhbUluc3RhbmNlUHJvZmlsZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWFtSW5zdGFuY2VQcm9maWxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWFtX2luc3RhbmNlX3Byb2ZpbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbUluc3RhbmNlUHJvZmlsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWFtSW5zdGFuY2VQcm9maWxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWFtSW5zdGFuY2VQcm9maWxlKCkge1xuICAgIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWFtSW5zdGFuY2VQcm9maWxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9pbml0aWF0ZWRfc2h1dGRvd25fYmVoYXZpb3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3I/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2luaXRpYXRlZF9zaHV0ZG93bl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUluaXRpYXRlZFNodXRkb3duQmVoYXZpb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VJbml0aWF0ZWRTaHV0ZG93bkJlaGF2aW9yO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW9yO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91ciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX2ludGVycnVwdGlvbl9iZWhhdmlvdXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91ciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyKCkge1xuICAgIHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3VyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUludGVycnVwdGlvbkJlaGF2aW91cjtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3N0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3N0YXRlJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnN0YW5jZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2luc3RhbmNlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluc3RhbmNlVHlwZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVR5cGU7XG4gIH1cblxuICAvLyBpcHY2X2FkZHJlc3NfY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pcHY2QWRkcmVzc0NvdW50PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpcHY2QWRkcmVzc0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaXB2Nl9hZGRyZXNzX2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpcHY2QWRkcmVzc0NvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc0NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXB2NkFkZHJlc3NDb3VudCgpIHtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc0NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcHY2QWRkcmVzc0NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwdjZBZGRyZXNzQ291bnQ7XG4gIH1cblxuICAvLyBpcHY2X2FkZHJlc3NlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwdjZBZGRyZXNzZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgaXB2NkFkZHJlc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpcHY2X2FkZHJlc3NlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXB2NkFkZHJlc3Nlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc2VzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SXB2NkFkZHJlc3NlcygpIHtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpcHY2QWRkcmVzc2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lwdjZBZGRyZXNzZXM7XG4gIH1cblxuICAvLyBrZXlfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5TmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleU5hbWUoKSB7XG4gICAgdGhpcy5fa2V5TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlOYW1lO1xuICB9XG5cbiAgLy8gbGF1bmNoX2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xhdW5jaEdyb3VwPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYXVuY2hHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhdW5jaF9ncm91cCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGF1bmNoR3JvdXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhdW5jaEdyb3VwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoR3JvdXAoKSB7XG4gICAgdGhpcy5fbGF1bmNoR3JvdXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhdW5jaEdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaEdyb3VwO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21vbml0b3Jpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnbW9uaXRvcmluZycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vbml0b3JpbmcodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX21vbml0b3JpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNb25pdG9yaW5nKCkge1xuICAgIHRoaXMuX21vbml0b3JpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9uaXRvcmluZztcbiAgfVxuXG4gIC8vIG91dHBvc3RfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3V0cG9zdEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ291dHBvc3RfYXJuJyk7XG4gIH1cblxuICAvLyBwYXNzd29yZF9kYXRhIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc3dvcmRfZGF0YScpO1xuICB9XG5cbiAgLy8gcGxhY2VtZW50X2dyb3VwIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGxhY2VtZW50R3JvdXA/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBsYWNlbWVudEdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxhY2VtZW50X2dyb3VwJyk7XG4gIH1cbiAgcHVibGljIHNldCBwbGFjZW1lbnRHcm91cCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50R3JvdXAgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQbGFjZW1lbnRHcm91cCgpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnRHcm91cCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50R3JvdXBJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50R3JvdXA7XG4gIH1cblxuICAvLyBwbGFjZW1lbnRfcGFydGl0aW9uX251bWJlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BsYWNlbWVudFBhcnRpdGlvbk51bWJlcj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50UGFydGl0aW9uTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGxhY2VtZW50X3BhcnRpdGlvbl9udW1iZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYWNlbWVudFBhcnRpdGlvbk51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50UGFydGl0aW9uTnVtYmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGxhY2VtZW50UGFydGl0aW9uTnVtYmVyKCkge1xuICAgIHRoaXMuX3BsYWNlbWVudFBhcnRpdGlvbk51bWJlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50UGFydGl0aW9uTnVtYmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudFBhcnRpdGlvbk51bWJlcjtcbiAgfVxuXG4gIC8vIHByaW1hcnlfbmV0d29ya19pbnRlcmZhY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmltYXJ5TmV0d29ya0ludGVyZmFjZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpbWFyeV9uZXR3b3JrX2ludGVyZmFjZV9pZCcpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZV9kbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcml2YXRlRG5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpdmF0ZV9kbnMnKTtcbiAgfVxuXG4gIC8vIHByaXZhdGVfaXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcml2YXRlSXA/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByaXZhdGVJcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaXZhdGVfaXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByaXZhdGVJcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpdmF0ZUlwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJpdmF0ZUlwKCkge1xuICAgIHRoaXMuX3ByaXZhdGVJcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpdmF0ZUlwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXZhdGVJcDtcbiAgfVxuXG4gIC8vIHB1YmxpY19kbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwdWJsaWNEbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwdWJsaWNfZG5zJyk7XG4gIH1cblxuICAvLyBwdWJsaWNfaXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwdWJsaWNJcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3B1YmxpY19pcCcpO1xuICB9XG5cbiAgLy8gc2Vjb25kYXJ5X3ByaXZhdGVfaXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2Vjb25kYXJ5UHJpdmF0ZUlwcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWNvbmRhcnlQcml2YXRlSXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY29uZGFyeV9wcml2YXRlX2lwcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2Vjb25kYXJ5UHJpdmF0ZUlwcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlQcml2YXRlSXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2Vjb25kYXJ5UHJpdmF0ZUlwcygpIHtcbiAgICB0aGlzLl9zZWNvbmRhcnlQcml2YXRlSXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWNvbmRhcnlQcml2YXRlSXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZGFyeVByaXZhdGVJcHM7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZWN1cml0eUdyb3Vwcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5R3JvdXBzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlHcm91cHMoKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBzO1xuICB9XG5cbiAgLy8gc291cmNlX2Rlc3RfY2hlY2sgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlRGVzdENoZWNrPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzb3VyY2VEZXN0Q2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc291cmNlX2Rlc3RfY2hlY2snKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VEZXN0Q2hlY2sodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NvdXJjZURlc3RDaGVjayA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvdXJjZURlc3RDaGVjaygpIHtcbiAgICB0aGlzLl9zb3VyY2VEZXN0Q2hlY2sgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZURlc3RDaGVja0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VEZXN0Q2hlY2s7XG4gIH1cblxuICAvLyBzcG90X2JpZF9zdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcG90QmlkU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9iaWRfc3RhdHVzJyk7XG4gIH1cblxuICAvLyBzcG90X2luc3RhbmNlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3BvdEluc3RhbmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X2luc3RhbmNlX2lkJyk7XG4gIH1cblxuICAvLyBzcG90X3ByaWNlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFByaWNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzcG90UHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzcG90X3ByaWNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcG90UHJpY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nwb3RQcmljZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNwb3RQcmljZSgpIHtcbiAgICB0aGlzLl9zcG90UHJpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNwb3RQcmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcG90UHJpY2U7XG4gIH1cblxuICAvLyBzcG90X3JlcXVlc3Rfc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzcG90UmVxdWVzdFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF9yZXF1ZXN0X3N0YXRlJyk7XG4gIH1cblxuICAvLyBzcG90X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3BvdFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNwb3RUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3BvdF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzcG90VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3BvdFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcG90VHlwZSgpIHtcbiAgICB0aGlzLl9zcG90VHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BvdFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BvdFR5cGU7XG4gIH1cblxuICAvLyBzdWJuZXRfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdWJuZXRJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VibmV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdWJuZXRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Ym5ldElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWJuZXRJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldElkKCkge1xuICAgIHRoaXMuX3N1Ym5ldElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZDtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0ZW5hbmN5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVuYW5jeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGVuYW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RlbmFuY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlbmFuY3kodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW5hbmN5KCkge1xuICAgIHRoaXMuX3RlbmFuY3kgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlbmFuY3lJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVuYW5jeTtcbiAgfVxuXG4gIC8vIHVzZXJfZGF0YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJEYXRhPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfZGF0YScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlckRhdGEodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJEYXRhID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlckRhdGEoKSB7XG4gICAgdGhpcy5fdXNlckRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJEYXRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJEYXRhO1xuICB9XG5cbiAgLy8gdXNlcl9kYXRhX2Jhc2U2NCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJEYXRhQmFzZTY0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VyRGF0YUJhc2U2NCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfZGF0YV9iYXNlNjQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzZXJEYXRhQmFzZTY0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VyRGF0YUJhc2U2NCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJEYXRhQmFzZTY0KCkge1xuICAgIHRoaXMuX3VzZXJEYXRhQmFzZTY0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyRGF0YUJhc2U2NElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyRGF0YUJhc2U2NDtcbiAgfVxuXG4gIC8vIHZhbGlkX2Zyb20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92YWxpZEZyb20/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbGlkRnJvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX2Zyb20nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbGlkRnJvbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsaWRGcm9tID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsaWRGcm9tKCkge1xuICAgIHRoaXMuX3ZhbGlkRnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRGcm9tSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkRnJvbTtcbiAgfVxuXG4gIC8vIHZhbGlkX3VudGlsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdmFsaWRVbnRpbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmFsaWRVbnRpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX3VudGlsJyk7XG4gIH1cbiAgcHVibGljIHNldCB2YWxpZFVudGlsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmFsaWRVbnRpbCgpIHtcbiAgICB0aGlzLl92YWxpZFVudGlsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWxpZFVudGlsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkVW50aWw7XG4gIH1cblxuICAvLyB2b2x1bWVfdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92b2x1bWVUYWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB2b2x1bWVUYWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2b2x1bWVfdGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHZvbHVtZVRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3ZvbHVtZVRhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWb2x1bWVUYWdzKCkge1xuICAgIHRoaXMuX3ZvbHVtZVRhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZvbHVtZVRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdm9sdW1lVGFncztcbiAgfVxuXG4gIC8vIHZwY19zZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92cGNTZWN1cml0eUdyb3VwSWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHZwY1NlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndnBjX3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdnBjU2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjU2VjdXJpdHlHcm91cElkcygpIHtcbiAgICB0aGlzLl92cGNTZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2cGNTZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY1NlY3VyaXR5R3JvdXBJZHM7XG4gIH1cblxuICAvLyB3YWl0X2Zvcl9mdWxmaWxsbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF93YWl0Rm9yRnVsZmlsbG1lbnQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHdhaXRGb3JGdWxmaWxsbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd3YWl0X2Zvcl9mdWxmaWxsbWVudCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhaXRGb3JGdWxmaWxsbWVudCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fd2FpdEZvckZ1bGZpbGxtZW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V2FpdEZvckZ1bGZpbGxtZW50KCkge1xuICAgIHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgd2FpdEZvckZ1bGZpbGxtZW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudDtcbiAgfVxuXG4gIC8vIGNhcGFjaXR5X3Jlc2VydmF0aW9uX3NwZWNpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24gPSBuZXcgU3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNhcGFjaXR5X3Jlc2VydmF0aW9uX3NwZWNpZmljYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRDYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbih2YWx1ZTogU3BvdEluc3RhbmNlUmVxdWVzdENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fY2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uKCkge1xuICAgIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5UmVzZXJ2YXRpb25TcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjcmVkaXRfc3BlY2lmaWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVkaXRTcGVjaWZpY2F0aW9uID0gbmV3IFNwb3RJbnN0YW5jZVJlcXVlc3RDcmVkaXRTcGVjaWZpY2F0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNyZWRpdF9zcGVjaWZpY2F0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNyZWRpdFNwZWNpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWRpdFNwZWNpZmljYXRpb247XG4gIH1cbiAgcHVibGljIHB1dENyZWRpdFNwZWNpZmljYXRpb24odmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RDcmVkaXRTcGVjaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlZGl0U3BlY2lmaWNhdGlvbigpIHtcbiAgICB0aGlzLl9jcmVkaXRTcGVjaWZpY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWRpdFNwZWNpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlZGl0U3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZWJzX2Jsb2NrX2RldmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lYnNCbG9ja0RldmljZT86IFNwb3RJbnN0YW5jZVJlcXVlc3RFYnNCbG9ja0RldmljZVtdOyBcbiAgcHVibGljIGdldCBlYnNCbG9ja0RldmljZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWJzX2Jsb2NrX2RldmljZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVic0Jsb2NrRGV2aWNlKHZhbHVlOiBTcG90SW5zdGFuY2VSZXF1ZXN0RWJzQmxvY2tEZXZpY2VbXSkge1xuICAgIHRoaXMuX2Vic0Jsb2NrRGV2aWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RWJzQmxvY2tEZXZpY2UoKSB7XG4gICAgdGhpcy5fZWJzQmxvY2tEZXZpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVic0Jsb2NrRGV2aWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vic0Jsb2NrRGV2aWNlO1xuICB9XG5cbiAgLy8gZW5jbGF2ZV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY2xhdmVPcHRpb25zID0gbmV3IFNwb3RJbnN0YW5jZVJlcXVlc3RFbmNsYXZlT3B0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJlbmNsYXZlX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZW5jbGF2ZU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY2xhdmVPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRFbmNsYXZlT3B0aW9ucyh2YWx1ZTogU3BvdEluc3RhbmNlUmVxdWVzdEVuY2xhdmVPcHRpb25zKSB7XG4gICAgdGhpcy5fZW5jbGF2ZU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY2xhdmVPcHRpb25zKCkge1xuICAgIHRoaXMuX2VuY2xhdmVPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY2xhdmVPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY2xhdmVPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBlcGhlbWVyYWxfYmxvY2tfZGV2aWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VwaGVtZXJhbEJsb2NrRGV2aWNlPzogU3BvdEluc3RhbmNlUmVxdWVzdEVwaGVtZXJhbEJsb2NrRGV2aWNlW107IFxuICBwdWJsaWMgZ2V0IGVwaGVtZXJhbEJsb2NrRGV2aWNlKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlcGhlbWVyYWxfYmxvY2tfZGV2aWNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZXBoZW1lcmFsQmxvY2tEZXZpY2UodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3RFcGhlbWVyYWxCbG9ja0RldmljZVtdKSB7XG4gICAgdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFcGhlbWVyYWxCbG9ja0RldmljZSgpIHtcbiAgICB0aGlzLl9lcGhlbWVyYWxCbG9ja0RldmljZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXBoZW1lcmFsQmxvY2tEZXZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2U7XG4gIH1cblxuICAvLyBsYXVuY2hfdGVtcGxhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGF1bmNoVGVtcGxhdGUgPSBuZXcgU3BvdEluc3RhbmNlUmVxdWVzdExhdW5jaFRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImxhdW5jaF90ZW1wbGF0ZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBsYXVuY2hUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGU7XG4gIH1cbiAgcHVibGljIHB1dExhdW5jaFRlbXBsYXRlKHZhbHVlOiBTcG90SW5zdGFuY2VSZXF1ZXN0TGF1bmNoVGVtcGxhdGUpIHtcbiAgICB0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGF1bmNoVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5fbGF1bmNoVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGF1bmNoVGVtcGxhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1ldGFkYXRhX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWV0YWRhdGFPcHRpb25zID0gbmV3IFNwb3RJbnN0YW5jZVJlcXVlc3RNZXRhZGF0YU9wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWV0YWRhdGFfb3B0aW9uc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtZXRhZGF0YU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhT3B0aW9ucztcbiAgfVxuICBwdWJsaWMgcHV0TWV0YWRhdGFPcHRpb25zKHZhbHVlOiBTcG90SW5zdGFuY2VSZXF1ZXN0TWV0YWRhdGFPcHRpb25zKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXRhZGF0YU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fbWV0YWRhdGFPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldGFkYXRhT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YU9wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG5ldHdvcmtfaW50ZXJmYWNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25ldHdvcmtJbnRlcmZhY2U/OiBTcG90SW5zdGFuY2VSZXF1ZXN0TmV0d29ya0ludGVyZmFjZVtdOyBcbiAgcHVibGljIGdldCBuZXR3b3JrSW50ZXJmYWNlKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCduZXR3b3JrX2ludGVyZmFjZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtJbnRlcmZhY2UodmFsdWU6IFNwb3RJbnN0YW5jZVJlcXVlc3ROZXR3b3JrSW50ZXJmYWNlW10pIHtcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmV0d29ya0ludGVyZmFjZSgpIHtcbiAgICB0aGlzLl9uZXR3b3JrSW50ZXJmYWNlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3JrSW50ZXJmYWNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25ldHdvcmtJbnRlcmZhY2U7XG4gIH1cblxuICAvLyByb290X2Jsb2NrX2RldmljZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb290QmxvY2tEZXZpY2UgPSBuZXcgU3BvdEluc3RhbmNlUmVxdWVzdFJvb3RCbG9ja0RldmljZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyb290X2Jsb2NrX2RldmljZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByb290QmxvY2tEZXZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3RCbG9ja0RldmljZTtcbiAgfVxuICBwdWJsaWMgcHV0Um9vdEJsb2NrRGV2aWNlKHZhbHVlOiBTcG90SW5zdGFuY2VSZXF1ZXN0Um9vdEJsb2NrRGV2aWNlKSB7XG4gICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb290QmxvY2tEZXZpY2UoKSB7XG4gICAgdGhpcy5fcm9vdEJsb2NrRGV2aWNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvb3RCbG9ja0RldmljZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290QmxvY2tEZXZpY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IFNwb3RJbnN0YW5jZVJlcXVlc3RUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBTcG90SW5zdGFuY2VSZXF1ZXN0VGltZW91dHMpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dHMoKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYW1pOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hbWkpLFxuICAgICAgYXNzb2NpYXRlX3B1YmxpY19pcF9hZGRyZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fYXNzb2NpYXRlUHVibGljSXBBZGRyZXNzKSxcbiAgICAgIGF2YWlsYWJpbGl0eV96b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hdmFpbGFiaWxpdHlab25lKSxcbiAgICAgIGJsb2NrX2R1cmF0aW9uX21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2Jsb2NrRHVyYXRpb25NaW51dGVzKSxcbiAgICAgIGNwdV9jb3JlX2NvdW50OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9jcHVDb3JlQ291bnQpLFxuICAgICAgY3B1X3RocmVhZHNfcGVyX2NvcmU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2NwdVRocmVhZHNQZXJDb3JlKSxcbiAgICAgIGRpc2FibGVfYXBpX3Rlcm1pbmF0aW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZGlzYWJsZUFwaVRlcm1pbmF0aW9uKSxcbiAgICAgIGVic19vcHRpbWl6ZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lYnNPcHRpbWl6ZWQpLFxuICAgICAgZ2V0X3Bhc3N3b3JkX2RhdGE6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9nZXRQYXNzd29yZERhdGEpLFxuICAgICAgaGliZXJuYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9oaWJlcm5hdGlvbiksXG4gICAgICBob3N0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ob3N0SWQpLFxuICAgICAgaWFtX2luc3RhbmNlX3Byb2ZpbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lhbUluc3RhbmNlUHJvZmlsZSksXG4gICAgICBpbnN0YW5jZV9pbml0aWF0ZWRfc2h1dGRvd25fYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlSW5pdGlhdGVkU2h1dGRvd25CZWhhdmlvciksXG4gICAgICBpbnN0YW5jZV9pbnRlcnJ1cHRpb25fYmVoYXZpb3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2luc3RhbmNlSW50ZXJydXB0aW9uQmVoYXZpb3IpLFxuICAgICAgaW5zdGFuY2VfaW50ZXJydXB0aW9uX2JlaGF2aW91cjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VJbnRlcnJ1cHRpb25CZWhhdmlvdXIpLFxuICAgICAgaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VUeXBlKSxcbiAgICAgIGlwdjZfYWRkcmVzc19jb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5faXB2NkFkZHJlc3NDb3VudCksXG4gICAgICBpcHY2X2FkZHJlc3NlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5faXB2NkFkZHJlc3NlcyksXG4gICAgICBrZXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fa2V5TmFtZSksXG4gICAgICBsYXVuY2hfZ3JvdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2xhdW5jaEdyb3VwKSxcbiAgICAgIG1vbml0b3Jpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9tb25pdG9yaW5nKSxcbiAgICAgIHBsYWNlbWVudF9ncm91cDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGxhY2VtZW50R3JvdXApLFxuICAgICAgcGxhY2VtZW50X3BhcnRpdGlvbl9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3BsYWNlbWVudFBhcnRpdGlvbk51bWJlciksXG4gICAgICBwcml2YXRlX2lwOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wcml2YXRlSXApLFxuICAgICAgc2Vjb25kYXJ5X3ByaXZhdGVfaXBzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zZWNvbmRhcnlQcml2YXRlSXBzKSxcbiAgICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc2VjdXJpdHlHcm91cHMpLFxuICAgICAgc291cmNlX2Rlc3RfY2hlY2s6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VEZXN0Q2hlY2spLFxuICAgICAgc3BvdF9wcmljZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3BvdFByaWNlKSxcbiAgICAgIHNwb3RfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3BvdFR5cGUpLFxuICAgICAgc3VibmV0X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdWJuZXRJZCksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHRlbmFuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RlbmFuY3kpLFxuICAgICAgdXNlcl9kYXRhOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl91c2VyRGF0YSksXG4gICAgICB1c2VyX2RhdGFfYmFzZTY0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl91c2VyRGF0YUJhc2U2NCksXG4gICAgICB2YWxpZF9mcm9tOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl92YWxpZEZyb20pLFxuICAgICAgdmFsaWRfdW50aWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZhbGlkVW50aWwpLFxuICAgICAgdm9sdW1lX3RhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3ZvbHVtZVRhZ3MpLFxuICAgICAgdnBjX3NlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdnBjU2VjdXJpdHlHcm91cElkcyksXG4gICAgICB3YWl0X2Zvcl9mdWxmaWxsbWVudDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3dhaXRGb3JGdWxmaWxsbWVudCksXG4gICAgICBjYXBhY2l0eV9yZXNlcnZhdGlvbl9zcGVjaWZpY2F0aW9uOiBzcG90SW5zdGFuY2VSZXF1ZXN0Q2FwYWNpdHlSZXNlcnZhdGlvblNwZWNpZmljYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jYXBhY2l0eVJlc2VydmF0aW9uU3BlY2lmaWNhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNyZWRpdF9zcGVjaWZpY2F0aW9uOiBzcG90SW5zdGFuY2VSZXF1ZXN0Q3JlZGl0U3BlY2lmaWNhdGlvblRvVGVycmFmb3JtKHRoaXMuX2NyZWRpdFNwZWNpZmljYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlYnNfYmxvY2tfZGV2aWNlOiBjZGt0Zi5saXN0TWFwcGVyKHNwb3RJbnN0YW5jZVJlcXVlc3RFYnNCbG9ja0RldmljZVRvVGVycmFmb3JtKSh0aGlzLl9lYnNCbG9ja0RldmljZSksXG4gICAgICBlbmNsYXZlX29wdGlvbnM6IHNwb3RJbnN0YW5jZVJlcXVlc3RFbmNsYXZlT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX2VuY2xhdmVPcHRpb25zLmludGVybmFsVmFsdWUpLFxuICAgICAgZXBoZW1lcmFsX2Jsb2NrX2RldmljZTogY2RrdGYubGlzdE1hcHBlcihzcG90SW5zdGFuY2VSZXF1ZXN0RXBoZW1lcmFsQmxvY2tEZXZpY2VUb1RlcnJhZm9ybSkodGhpcy5fZXBoZW1lcmFsQmxvY2tEZXZpY2UpLFxuICAgICAgbGF1bmNoX3RlbXBsYXRlOiBzcG90SW5zdGFuY2VSZXF1ZXN0TGF1bmNoVGVtcGxhdGVUb1RlcnJhZm9ybSh0aGlzLl9sYXVuY2hUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIG1ldGFkYXRhX29wdGlvbnM6IHNwb3RJbnN0YW5jZVJlcXVlc3RNZXRhZGF0YU9wdGlvbnNUb1RlcnJhZm9ybSh0aGlzLl9tZXRhZGF0YU9wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBuZXR3b3JrX2ludGVyZmFjZTogY2RrdGYubGlzdE1hcHBlcihzcG90SW5zdGFuY2VSZXF1ZXN0TmV0d29ya0ludGVyZmFjZVRvVGVycmFmb3JtKSh0aGlzLl9uZXR3b3JrSW50ZXJmYWNlKSxcbiAgICAgIHJvb3RfYmxvY2tfZGV2aWNlOiBzcG90SW5zdGFuY2VSZXF1ZXN0Um9vdEJsb2NrRGV2aWNlVG9UZXJyYWZvcm0odGhpcy5fcm9vdEJsb2NrRGV2aWNlLmludGVybmFsVmFsdWUpLFxuICAgICAgdGltZW91dHM6IHNwb3RJbnN0YW5jZVJlcXVlc3RUaW1lb3V0c1RvVGVycmFmb3JtKHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==