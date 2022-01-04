"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsTaskDefinition = exports.ecsTaskDefinitionVolumeToTerraform = exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference = exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform = exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference = exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform = exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference = exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform = exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference = exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform = exports.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference = exports.ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform = exports.EcsTaskDefinitionProxyConfigurationOutputReference = exports.ecsTaskDefinitionProxyConfigurationToTerraform = exports.ecsTaskDefinitionPlacementConstraintsToTerraform = exports.ecsTaskDefinitionInferenceAcceleratorToTerraform = exports.EcsTaskDefinitionEphemeralStorageOutputReference = exports.ecsTaskDefinitionEphemeralStorageToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function ecsTaskDefinitionEphemeralStorageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        size_in_gib: cdktf.numberToTerraform(struct.sizeInGib),
    };
}
exports.ecsTaskDefinitionEphemeralStorageToTerraform = ecsTaskDefinitionEphemeralStorageToTerraform;
/**
 * @stability stable
 */
class EcsTaskDefinitionEphemeralStorageOutputReference extends cdktf.ComplexObject {
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
        if (this._sizeInGib) {
            hasAnyValues = true;
            internalValueResult.sizeInGib = this._sizeInGib;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._sizeInGib = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._sizeInGib = value.sizeInGib;
        }
    }
    /**
     * @stability stable
     */
    get sizeInGib() {
        return this.getNumberAttribute('size_in_gib');
    }
    /**
     * @stability stable
     */
    set sizeInGib(value) {
        this._sizeInGib = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sizeInGibInput() {
        return this._sizeInGib;
    }
}
exports.EcsTaskDefinitionEphemeralStorageOutputReference = EcsTaskDefinitionEphemeralStorageOutputReference;
_a = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionEphemeralStorageOutputReference[_a] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinitionEphemeralStorageOutputReference", version: "3.0.1" };
function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        device_name: cdktf.stringToTerraform(struct.deviceName),
        device_type: cdktf.stringToTerraform(struct.deviceType),
    };
}
exports.ecsTaskDefinitionInferenceAcceleratorToTerraform = ecsTaskDefinitionInferenceAcceleratorToTerraform;
function ecsTaskDefinitionPlacementConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        expression: cdktf.stringToTerraform(struct.expression),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.ecsTaskDefinitionPlacementConstraintsToTerraform = ecsTaskDefinitionPlacementConstraintsToTerraform;
function ecsTaskDefinitionProxyConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        container_name: cdktf.stringToTerraform(struct.containerName),
        properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct.properties),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.ecsTaskDefinitionProxyConfigurationToTerraform = ecsTaskDefinitionProxyConfigurationToTerraform;
/**
 * @stability stable
 */
class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._containerName) {
            hasAnyValues = true;
            internalValueResult.containerName = this._containerName;
        }
        if (this._properties) {
            hasAnyValues = true;
            internalValueResult.properties = this._properties;
        }
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
            this._containerName = undefined;
            this._properties = undefined;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._containerName = value.containerName;
            this._properties = value.properties;
            this._type = value.type;
        }
    }
    /**
     * @stability stable
     */
    get containerName() {
        return this.getStringAttribute('container_name');
    }
    /**
     * @stability stable
     */
    set containerName(value) {
        this._containerName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get containerNameInput() {
        return this._containerName;
    }
    /**
     * @stability stable
     */
    get properties() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('properties');
    }
    /**
     * @stability stable
     */
    set properties(value) {
        this._properties = value;
    }
    /**
     * @stability stable
     */
    resetProperties() {
        this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get propertiesInput() {
        return this._properties;
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
    /**
     * @stability stable
     */
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeInput() {
        return this._type;
    }
}
exports.EcsTaskDefinitionProxyConfigurationOutputReference = EcsTaskDefinitionProxyConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionProxyConfigurationOutputReference[_b] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinitionProxyConfigurationOutputReference", version: "3.0.1" };
function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        autoprovision: cdktf.booleanToTerraform(struct.autoprovision),
        driver: cdktf.stringToTerraform(struct.driver),
        driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(struct.driverOpts),
        labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct.labels),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
exports.ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform = ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform;
/**
 * @stability stable
 */
class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._autoprovision) {
            hasAnyValues = true;
            internalValueResult.autoprovision = this._autoprovision;
        }
        if (this._driver) {
            hasAnyValues = true;
            internalValueResult.driver = this._driver;
        }
        if (this._driverOpts) {
            hasAnyValues = true;
            internalValueResult.driverOpts = this._driverOpts;
        }
        if (this._labels) {
            hasAnyValues = true;
            internalValueResult.labels = this._labels;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoprovision = undefined;
            this._driver = undefined;
            this._driverOpts = undefined;
            this._labels = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoprovision = value.autoprovision;
            this._driver = value.driver;
            this._driverOpts = value.driverOpts;
            this._labels = value.labels;
            this._scope = value.scope;
        }
    }
    /**
     * @stability stable
     */
    get autoprovision() {
        return this.getBooleanAttribute('autoprovision');
    }
    /**
     * @stability stable
     */
    set autoprovision(value) {
        this._autoprovision = value;
    }
    /**
     * @stability stable
     */
    resetAutoprovision() {
        this._autoprovision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoprovisionInput() {
        return this._autoprovision;
    }
    /**
     * @stability stable
     */
    get driver() {
        return this.getStringAttribute('driver');
    }
    /**
     * @stability stable
     */
    set driver(value) {
        this._driver = value;
    }
    /**
     * @stability stable
     */
    resetDriver() {
        this._driver = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get driverInput() {
        return this._driver;
    }
    /**
     * @stability stable
     */
    get driverOpts() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('driver_opts');
    }
    /**
     * @stability stable
     */
    set driverOpts(value) {
        this._driverOpts = value;
    }
    /**
     * @stability stable
     */
    resetDriverOpts() {
        this._driverOpts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get driverOptsInput() {
        return this._driverOpts;
    }
    /**
     * @stability stable
     */
    get labels() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('labels');
    }
    /**
     * @stability stable
     */
    set labels(value) {
        this._labels = value;
    }
    /**
     * @stability stable
     */
    resetLabels() {
        this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get labelsInput() {
        return this._labels;
    }
    /**
     * @stability stable
     */
    get scope() {
        return this.getStringAttribute('scope');
    }
    /**
     * @stability stable
     */
    set scope(value) {
        this._scope = value;
    }
    /**
     * @stability stable
     */
    resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scopeInput() {
        return this._scope;
    }
}
exports.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference = EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference", version: "3.0.1" };
function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_point_id: cdktf.stringToTerraform(struct.accessPointId),
        iam: cdktf.stringToTerraform(struct.iam),
    };
}
exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform = ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform;
/**
 * @stability stable
 */
class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._accessPointId) {
            hasAnyValues = true;
            internalValueResult.accessPointId = this._accessPointId;
        }
        if (this._iam) {
            hasAnyValues = true;
            internalValueResult.iam = this._iam;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessPointId = undefined;
            this._iam = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessPointId = value.accessPointId;
            this._iam = value.iam;
        }
    }
    /**
     * @stability stable
     */
    get accessPointId() {
        return this.getStringAttribute('access_point_id');
    }
    /**
     * @stability stable
     */
    set accessPointId(value) {
        this._accessPointId = value;
    }
    /**
     * @stability stable
     */
    resetAccessPointId() {
        this._accessPointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessPointIdInput() {
        return this._accessPointId;
    }
    /**
     * @stability stable
     */
    get iam() {
        return this.getStringAttribute('iam');
    }
    /**
     * @stability stable
     */
    set iam(value) {
        this._iam = value;
    }
    /**
     * @stability stable
     */
    resetIam() {
        this._iam = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamInput() {
        return this._iam;
    }
}
exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference = EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference;
_d = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference[_d] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference", version: "3.0.1" };
function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_system_id: cdktf.stringToTerraform(struct.fileSystemId),
        root_directory: cdktf.stringToTerraform(struct.rootDirectory),
        transit_encryption: cdktf.stringToTerraform(struct.transitEncryption),
        transit_encryption_port: cdktf.numberToTerraform(struct.transitEncryptionPort),
        authorization_config: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct.authorizationConfig),
    };
}
exports.ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform = ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform;
/**
 * @stability stable
 */
class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // authorization_config - computed: false, optional: true, required: false
        this._authorizationConfig = new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fileSystemId) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._rootDirectory) {
            hasAnyValues = true;
            internalValueResult.rootDirectory = this._rootDirectory;
        }
        if (this._transitEncryption) {
            hasAnyValues = true;
            internalValueResult.transitEncryption = this._transitEncryption;
        }
        if (this._transitEncryptionPort) {
            hasAnyValues = true;
            internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
        }
        if ((_j = this._authorizationConfig) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = (_k = this._authorizationConfig) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fileSystemId = undefined;
            this._rootDirectory = undefined;
            this._transitEncryption = undefined;
            this._transitEncryptionPort = undefined;
            this._authorizationConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fileSystemId = value.fileSystemId;
            this._rootDirectory = value.rootDirectory;
            this._transitEncryption = value.transitEncryption;
            this._transitEncryptionPort = value.transitEncryptionPort;
            this._authorizationConfig.internalValue = value.authorizationConfig;
        }
    }
    /**
     * @stability stable
     */
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    /**
     * @stability stable
     */
    set fileSystemId(value) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileSystemIdInput() {
        return this._fileSystemId;
    }
    /**
     * @stability stable
     */
    get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    /**
     * @stability stable
     */
    set rootDirectory(value) {
        this._rootDirectory = value;
    }
    /**
     * @stability stable
     */
    resetRootDirectory() {
        this._rootDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rootDirectoryInput() {
        return this._rootDirectory;
    }
    /**
     * @stability stable
     */
    get transitEncryption() {
        return this.getStringAttribute('transit_encryption');
    }
    /**
     * @stability stable
     */
    set transitEncryption(value) {
        this._transitEncryption = value;
    }
    /**
     * @stability stable
     */
    resetTransitEncryption() {
        this._transitEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transitEncryptionInput() {
        return this._transitEncryption;
    }
    /**
     * @stability stable
     */
    get transitEncryptionPort() {
        return this.getNumberAttribute('transit_encryption_port');
    }
    /**
     * @stability stable
     */
    set transitEncryptionPort(value) {
        this._transitEncryptionPort = value;
    }
    /**
     * @stability stable
     */
    resetTransitEncryptionPort() {
        this._transitEncryptionPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get transitEncryptionPortInput() {
        return this._transitEncryptionPort;
    }
    /**
     * @stability stable
     */
    get authorizationConfig() {
        return this._authorizationConfig;
    }
    /**
     * @stability stable
     */
    putAuthorizationConfig(value) {
        this._authorizationConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }
}
exports.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference = EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference[_e] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference", version: "3.0.1" };
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        credentials_parameter: cdktf.stringToTerraform(struct.credentialsParameter),
        domain: cdktf.stringToTerraform(struct.domain),
    };
}
exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform = ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform;
/**
 * @stability stable
 */
class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._credentialsParameter) {
            hasAnyValues = true;
            internalValueResult.credentialsParameter = this._credentialsParameter;
        }
        if (this._domain) {
            hasAnyValues = true;
            internalValueResult.domain = this._domain;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._credentialsParameter = undefined;
            this._domain = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._credentialsParameter = value.credentialsParameter;
            this._domain = value.domain;
        }
    }
    /**
     * @stability stable
     */
    get credentialsParameter() {
        return this.getStringAttribute('credentials_parameter');
    }
    /**
     * @stability stable
     */
    set credentialsParameter(value) {
        this._credentialsParameter = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get credentialsParameterInput() {
        return this._credentialsParameter;
    }
    /**
     * @stability stable
     */
    get domain() {
        return this.getStringAttribute('domain');
    }
    /**
     * @stability stable
     */
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainInput() {
        return this._domain;
    }
}
exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference = EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference;
_f = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference[_f] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference", version: "3.0.1" };
function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_system_id: cdktf.stringToTerraform(struct.fileSystemId),
        root_directory: cdktf.stringToTerraform(struct.rootDirectory),
        authorization_config: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct.authorizationConfig),
    };
}
exports.ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform = ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform;
/**
 * @stability stable
 */
class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // authorization_config - computed: false, optional: false, required: true
        this._authorizationConfig = new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _j, _k;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fileSystemId) {
            hasAnyValues = true;
            internalValueResult.fileSystemId = this._fileSystemId;
        }
        if (this._rootDirectory) {
            hasAnyValues = true;
            internalValueResult.rootDirectory = this._rootDirectory;
        }
        if ((_j = this._authorizationConfig) === null || _j === void 0 ? void 0 : _j.internalValue) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = (_k = this._authorizationConfig) === null || _k === void 0 ? void 0 : _k.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fileSystemId = undefined;
            this._rootDirectory = undefined;
            this._authorizationConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fileSystemId = value.fileSystemId;
            this._rootDirectory = value.rootDirectory;
            this._authorizationConfig.internalValue = value.authorizationConfig;
        }
    }
    /**
     * @stability stable
     */
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    /**
     * @stability stable
     */
    set fileSystemId(value) {
        this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileSystemIdInput() {
        return this._fileSystemId;
    }
    /**
     * @stability stable
     */
    get rootDirectory() {
        return this.getStringAttribute('root_directory');
    }
    /**
     * @stability stable
     */
    set rootDirectory(value) {
        this._rootDirectory = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rootDirectoryInput() {
        return this._rootDirectory;
    }
    /**
     * @stability stable
     */
    get authorizationConfig() {
        return this._authorizationConfig;
    }
    /**
     * @stability stable
     */
    putAuthorizationConfig(value) {
        this._authorizationConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }
}
exports.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference = EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference[_g] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference", version: "3.0.1" };
function ecsTaskDefinitionVolumeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host_path: cdktf.stringToTerraform(struct.hostPath),
        name: cdktf.stringToTerraform(struct.name),
        docker_volume_configuration: ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct.dockerVolumeConfiguration),
        efs_volume_configuration: ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct.efsVolumeConfiguration),
        fsx_windows_file_server_volume_configuration: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct.fsxWindowsFileServerVolumeConfiguration),
    };
}
exports.ecsTaskDefinitionVolumeToTerraform = ecsTaskDefinitionVolumeToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition}.
 *
 * @stability stable
 */
class EcsTaskDefinition extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ecs_task_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // ephemeral_storage - computed: false, optional: true, required: false
        this._ephemeralStorage = new EcsTaskDefinitionEphemeralStorageOutputReference(this, "ephemeral_storage", true);
        // proxy_configuration - computed: false, optional: true, required: false
        this._proxyConfiguration = new EcsTaskDefinitionProxyConfigurationOutputReference(this, "proxy_configuration", true);
        this._containerDefinitions = config.containerDefinitions;
        this._cpu = config.cpu;
        this._executionRoleArn = config.executionRoleArn;
        this._family = config.family;
        this._ipcMode = config.ipcMode;
        this._memory = config.memory;
        this._networkMode = config.networkMode;
        this._pidMode = config.pidMode;
        this._requiresCompatibilities = config.requiresCompatibilities;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._taskRoleArn = config.taskRoleArn;
        this._ephemeralStorage.internalValue = config.ephemeralStorage;
        this._inferenceAccelerator = config.inferenceAccelerator;
        this._placementConstraints = config.placementConstraints;
        this._proxyConfiguration.internalValue = config.proxyConfiguration;
        this._volume = config.volume;
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
    get containerDefinitions() {
        return this.getStringAttribute('container_definitions');
    }
    /**
     * @stability stable
     */
    set containerDefinitions(value) {
        this._containerDefinitions = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get containerDefinitionsInput() {
        return this._containerDefinitions;
    }
    /**
     * @stability stable
     */
    get cpu() {
        return this.getStringAttribute('cpu');
    }
    /**
     * @stability stable
     */
    set cpu(value) {
        this._cpu = value;
    }
    /**
     * @stability stable
     */
    resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cpuInput() {
        return this._cpu;
    }
    /**
     * @stability stable
     */
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    /**
     * @stability stable
     */
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get executionRoleArnInput() {
        return this._executionRoleArn;
    }
    /**
     * @stability stable
     */
    get family() {
        return this.getStringAttribute('family');
    }
    /**
     * @stability stable
     */
    set family(value) {
        this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get familyInput() {
        return this._family;
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
    get ipcMode() {
        return this.getStringAttribute('ipc_mode');
    }
    /**
     * @stability stable
     */
    set ipcMode(value) {
        this._ipcMode = value;
    }
    /**
     * @stability stable
     */
    resetIpcMode() {
        this._ipcMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ipcModeInput() {
        return this._ipcMode;
    }
    /**
     * @stability stable
     */
    get memory() {
        return this.getStringAttribute('memory');
    }
    /**
     * @stability stable
     */
    set memory(value) {
        this._memory = value;
    }
    /**
     * @stability stable
     */
    resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get memoryInput() {
        return this._memory;
    }
    /**
     * @stability stable
     */
    get networkMode() {
        return this.getStringAttribute('network_mode');
    }
    /**
     * @stability stable
     */
    set networkMode(value) {
        this._networkMode = value;
    }
    /**
     * @stability stable
     */
    resetNetworkMode() {
        this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get networkModeInput() {
        return this._networkMode;
    }
    /**
     * @stability stable
     */
    get pidMode() {
        return this.getStringAttribute('pid_mode');
    }
    /**
     * @stability stable
     */
    set pidMode(value) {
        this._pidMode = value;
    }
    /**
     * @stability stable
     */
    resetPidMode() {
        this._pidMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pidModeInput() {
        return this._pidMode;
    }
    /**
     * @stability stable
     */
    get requiresCompatibilities() {
        return this.getListAttribute('requires_compatibilities');
    }
    /**
     * @stability stable
     */
    set requiresCompatibilities(value) {
        this._requiresCompatibilities = value;
    }
    /**
     * @stability stable
     */
    resetRequiresCompatibilities() {
        this._requiresCompatibilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requiresCompatibilitiesInput() {
        return this._requiresCompatibilities;
    }
    // revision - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get revision() {
        return this.getNumberAttribute('revision');
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
    get taskRoleArn() {
        return this.getStringAttribute('task_role_arn');
    }
    /**
     * @stability stable
     */
    set taskRoleArn(value) {
        this._taskRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetTaskRoleArn() {
        this._taskRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get taskRoleArnInput() {
        return this._taskRoleArn;
    }
    /**
     * @stability stable
     */
    get ephemeralStorage() {
        return this._ephemeralStorage;
    }
    /**
     * @stability stable
     */
    putEphemeralStorage(value) {
        this._ephemeralStorage.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEphemeralStorage() {
        this._ephemeralStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ephemeralStorageInput() {
        return this._ephemeralStorage.internalValue;
    }
    /**
     * @stability stable
     */
    get inferenceAccelerator() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('inference_accelerator');
    }
    /**
     * @stability stable
     */
    set inferenceAccelerator(value) {
        this._inferenceAccelerator = value;
    }
    /**
     * @stability stable
     */
    resetInferenceAccelerator() {
        this._inferenceAccelerator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inferenceAcceleratorInput() {
        return this._inferenceAccelerator;
    }
    /**
     * @stability stable
     */
    get placementConstraints() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('placement_constraints');
    }
    /**
     * @stability stable
     */
    set placementConstraints(value) {
        this._placementConstraints = value;
    }
    /**
     * @stability stable
     */
    resetPlacementConstraints() {
        this._placementConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get placementConstraintsInput() {
        return this._placementConstraints;
    }
    /**
     * @stability stable
     */
    get proxyConfiguration() {
        return this._proxyConfiguration;
    }
    /**
     * @stability stable
     */
    putProxyConfiguration(value) {
        this._proxyConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetProxyConfiguration() {
        this._proxyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get proxyConfigurationInput() {
        return this._proxyConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get volume() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('volume');
    }
    /**
     * @stability stable
     */
    set volume(value) {
        this._volume = value;
    }
    /**
     * @stability stable
     */
    resetVolume() {
        this._volume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get volumeInput() {
        return this._volume;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
            cpu: cdktf.stringToTerraform(this._cpu),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            family: cdktf.stringToTerraform(this._family),
            ipc_mode: cdktf.stringToTerraform(this._ipcMode),
            memory: cdktf.stringToTerraform(this._memory),
            network_mode: cdktf.stringToTerraform(this._networkMode),
            pid_mode: cdktf.stringToTerraform(this._pidMode),
            requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform)(this._requiresCompatibilities),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
            ephemeral_storage: ecsTaskDefinitionEphemeralStorageToTerraform(this._ephemeralStorage.internalValue),
            inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform)(this._inferenceAccelerator),
            placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform)(this._placementConstraints),
            proxy_configuration: ecsTaskDefinitionProxyConfigurationToTerraform(this._proxyConfiguration.internalValue),
            volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform)(this._volume),
        };
    }
}
exports.EcsTaskDefinition = EcsTaskDefinition;
_h = JSII_RTTI_SYMBOL_1;
EcsTaskDefinition[_h] = { fqn: "@cdktf/provider-aws.ecs.EcsTaskDefinition", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
EcsTaskDefinition.tfResourceType = "aws_ecs_task_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzLXRhc2stZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lY3MvZWNzLXRhc2stZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTRDL0IsU0FBZ0IsNENBQTRDLENBQUMsTUFBNkY7SUFDeEosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDeEQsQ0FBQTtBQUNILENBQUM7QUFSRCxvR0FRQzs7OztBQUVELE1BQWEsZ0RBQWlELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJdkYsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFD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SUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzRSxDQUFDO0lBQ0osQ0FBQzs7QUFwV0gsOENBcVdDOzs7QUFuV0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxnQ0FBYyxHQUFXLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRhaW5lckRlZmluaXRpb25zOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3B1Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4ZWN1dGlvblJvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmFtaWx5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlwY01vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVtb3J5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5ldHdvcmtNb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwaWRNb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVzQ29tcGF0aWJpbGl0aWVzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFza1JvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVwaGVtZXJhbFN0b3JhZ2U/OiBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluZmVyZW5jZUFjY2VsZXJhdG9yPzogRWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvcltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwbGFjZW1lbnRDb25zdHJhaW50cz86IEVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJveHlDb25maWd1cmF0aW9uPzogRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZvbHVtZT86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNpemVJbkdpYjogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2l6ZV9pbl9naWI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluR2liKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2l6ZUluR2liKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zaXplSW5HaWIgPSB0aGlzLl9zaXplSW5HaWI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvbkVwaGVtZXJhbFN0b3JhZ2UgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9zaXplSW5HaWIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NpemVJbkdpYiA9IHZhbHVlLnNpemVJbkdpYjtcbiAgICB9XG4gIH1cblxuICAvLyBzaXplX2luX2dpYiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zaXplSW5HaWI/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHNpemVJbkdpYigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NpemVfaW5fZ2liJyk7XG4gIH1cbiAgcHVibGljIHNldCBzaXplSW5HaWIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NpemVJbkdpYiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzaXplSW5HaWJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZUluR2liO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmljZVR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGV2aWNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlTmFtZSksXG4gICAgZGV2aWNlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4cHJlc3Npb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXhwcmVzc2lvbiksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGFpbmVyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvcGVydGllcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluZXJOYW1lKSxcbiAgICBwcm9wZXJ0aWVzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnByb3BlcnRpZXMpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb250YWluZXJOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250YWluZXJOYW1lID0gdGhpcy5fY29udGFpbmVyTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb3BlcnRpZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb3BlcnRpZXMgPSB0aGlzLl9wcm9wZXJ0aWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lck5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29udGFpbmVyTmFtZSA9IHZhbHVlLmNvbnRhaW5lck5hbWU7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzID0gdmFsdWUucHJvcGVydGllcztcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRhaW5lcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbnRhaW5lck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250YWluZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbmVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGFpbmVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250YWluZXJOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lck5hbWU7XG4gIH1cblxuICAvLyBwcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb3BlcnRpZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9wZXJ0aWVzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9wcm9wZXJ0aWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvcGVydGllcygpIHtcbiAgICB0aGlzLl9wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9wZXJ0aWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BlcnRpZXM7XG4gIH1cblxuICAvLyB0eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHlwZSgpIHtcbiAgICB0aGlzLl90eXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0eXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9wcm92aXNpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZHJpdmVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkcml2ZXJPcHRzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhYmVscz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NvcGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvcHJvdmlzaW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvcHJvdmlzaW9uKSxcbiAgICBkcml2ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZHJpdmVyKSxcbiAgICBkcml2ZXJfb3B0czogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5kcml2ZXJPcHRzKSxcbiAgICBsYWJlbHM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEubGFiZWxzKSxcbiAgICBzY29wZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY29wZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dG9wcm92aXNpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dG9wcm92aXNpb24gPSB0aGlzLl9hdXRvcHJvdmlzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZHJpdmVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kcml2ZXIgPSB0aGlzLl9kcml2ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kcml2ZXJPcHRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kcml2ZXJPcHRzID0gdGhpcy5fZHJpdmVyT3B0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhYmVscykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFiZWxzID0gdGhpcy5fbGFiZWxzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NvcGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjb3BlID0gdGhpcy5fc2NvcGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZURvY2tlclZvbHVtZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRvcHJvdmlzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZHJpdmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZHJpdmVyT3B0cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhYmVscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Njb3BlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRvcHJvdmlzaW9uID0gdmFsdWUuYXV0b3Byb3Zpc2lvbjtcbiAgICAgIHRoaXMuX2RyaXZlciA9IHZhbHVlLmRyaXZlcjtcbiAgICAgIHRoaXMuX2RyaXZlck9wdHMgPSB2YWx1ZS5kcml2ZXJPcHRzO1xuICAgICAgdGhpcy5fbGFiZWxzID0gdmFsdWUubGFiZWxzO1xuICAgICAgdGhpcy5fc2NvcGUgPSB2YWx1ZS5zY29wZTtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRvcHJvdmlzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9wcm92aXNpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9wcm92aXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0b3Byb3Zpc2lvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dG9wcm92aXNpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9wcm92aXNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvcHJvdmlzaW9uKCkge1xuICAgIHRoaXMuX2F1dG9wcm92aXNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9wcm92aXNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3Byb3Zpc2lvbjtcbiAgfVxuXG4gIC8vIGRyaXZlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kcml2ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRyaXZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RyaXZlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZHJpdmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kcml2ZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREcml2ZXIoKSB7XG4gICAgdGhpcy5fZHJpdmVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkcml2ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyO1xuICB9XG5cbiAgLy8gZHJpdmVyX29wdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZHJpdmVyT3B0cz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZHJpdmVyT3B0cygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZHJpdmVyX29wdHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkcml2ZXJPcHRzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kcml2ZXJPcHRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RHJpdmVyT3B0cygpIHtcbiAgICB0aGlzLl9kcml2ZXJPcHRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkcml2ZXJPcHRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RyaXZlck9wdHM7XG4gIH1cblxuICAvLyBsYWJlbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFiZWxzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBsYWJlbHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhYmVscycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGxhYmVscyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fbGFiZWxzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFiZWxzKCkge1xuICAgIHRoaXMuX2xhYmVscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFiZWxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVscztcbiAgfVxuXG4gIC8vIHNjb3BlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NvcGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjb3BlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NvcGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjb3BlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zY29wZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjb3BlKCkge1xuICAgIHRoaXMuX3Njb3BlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY29wZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY29wZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NQb2ludElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlhbT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2Vzc19wb2ludF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NQb2ludElkKSxcbiAgICBpYW06IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaWFtKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZ091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2Nlc3NQb2ludElkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hY2Nlc3NQb2ludElkID0gdGhpcy5fYWNjZXNzUG9pbnRJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lhbSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaWFtID0gdGhpcy5faWFtO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjY2Vzc1BvaW50SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pYW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY2Vzc1BvaW50SWQgPSB2YWx1ZS5hY2Nlc3NQb2ludElkO1xuICAgICAgdGhpcy5faWFtID0gdmFsdWUuaWFtO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFjY2Vzc19wb2ludF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NQb2ludElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhY2Nlc3NQb2ludElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX3BvaW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY2Nlc3NQb2ludElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hY2Nlc3NQb2ludElkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzUG9pbnRJZCgpIHtcbiAgICB0aGlzLl9hY2Nlc3NQb2ludElkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY2Nlc3NQb2ludElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1BvaW50SWQ7XG4gIH1cblxuICAvLyBpYW0gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaWFtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpYW0nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlhbSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWFtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SWFtKCkge1xuICAgIHRoaXMuX2lhbSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaWFtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWxlU3lzdGVtSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9vdERpcmVjdG9yeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cmFuc2l0RW5jcnlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHJhbnNpdEVuY3J5cHRpb25Qb3J0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRob3JpemF0aW9uQ29uZmlnPzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZpbGVfc3lzdGVtX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGVTeXN0ZW1JZCksXG4gICAgcm9vdF9kaXJlY3Rvcnk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9vdERpcmVjdG9yeSksXG4gICAgdHJhbnNpdF9lbmNyeXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyYW5zaXRFbmNyeXB0aW9uKSxcbiAgICB0cmFuc2l0X2VuY3J5cHRpb25fcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50cmFuc2l0RW5jcnlwdGlvblBvcnQpLFxuICAgIGF1dGhvcml6YXRpb25fY29uZmlnOiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUVmc1ZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemF0aW9uQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZmlsZVN5c3RlbUlkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maWxlU3lzdGVtSWQgPSB0aGlzLl9maWxlU3lzdGVtSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb290RGlyZWN0b3J5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb290RGlyZWN0b3J5ID0gdGhpcy5fcm9vdERpcmVjdG9yeTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cmFuc2l0RW5jcnlwdGlvbiA9IHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdHJhbnNpdEVuY3J5cHRpb25Qb3J0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50cmFuc2l0RW5jcnlwdGlvblBvcnQgPSB0aGlzLl90cmFuc2l0RW5jcnlwdGlvblBvcnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdXRob3JpemF0aW9uQ29uZmlnPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRob3JpemF0aW9uQ29uZmlnID0gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jvb3REaXJlY3RvcnkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90cmFuc2l0RW5jcnlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uUG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhvcml6YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZmlsZVN5c3RlbUlkID0gdmFsdWUuZmlsZVN5c3RlbUlkO1xuICAgICAgdGhpcy5fcm9vdERpcmVjdG9yeSA9IHZhbHVlLnJvb3REaXJlY3Rvcnk7XG4gICAgICB0aGlzLl90cmFuc2l0RW5jcnlwdGlvbiA9IHZhbHVlLnRyYW5zaXRFbmNyeXB0aW9uO1xuICAgICAgdGhpcy5fdHJhbnNpdEVuY3J5cHRpb25Qb3J0ID0gdmFsdWUudHJhbnNpdEVuY3J5cHRpb25Qb3J0O1xuICAgICAgdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuYXV0aG9yaXphdGlvbkNvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBmaWxlX3N5c3RlbV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maWxlU3lzdGVtSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbGVTeXN0ZW1JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfc3lzdGVtX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBmaWxlU3lzdGVtSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVTeXN0ZW1JZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlU3lzdGVtSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZVN5c3RlbUlkO1xuICB9XG5cbiAgLy8gcm9vdF9kaXJlY3RvcnkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9vdERpcmVjdG9yeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9vdERpcmVjdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jvb3RfZGlyZWN0b3J5Jyk7XG4gIH1cbiAgcHVibGljIHNldCByb290RGlyZWN0b3J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb290RGlyZWN0b3J5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9vdERpcmVjdG9yeSgpIHtcbiAgICB0aGlzLl9yb290RGlyZWN0b3J5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb290RGlyZWN0b3J5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3REaXJlY3Rvcnk7XG4gIH1cblxuICAvLyB0cmFuc2l0X2VuY3J5cHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdHJhbnNpdEVuY3J5cHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRyYW5zaXRFbmNyeXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJhbnNpdF9lbmNyeXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2l0RW5jcnlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJhbnNpdEVuY3J5cHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcmFuc2l0RW5jcnlwdGlvbigpIHtcbiAgICB0aGlzLl90cmFuc2l0RW5jcnlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHJhbnNpdEVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdEVuY3J5cHRpb247XG4gIH1cblxuICAvLyB0cmFuc2l0X2VuY3J5cHRpb25fcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90cmFuc2l0RW5jcnlwdGlvblBvcnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRyYW5zaXRFbmNyeXB0aW9uUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RyYW5zaXRfZW5jcnlwdGlvbl9wb3J0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0cmFuc2l0RW5jcnlwdGlvblBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RyYW5zaXRFbmNyeXB0aW9uUG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRyYW5zaXRFbmNyeXB0aW9uUG9ydCgpIHtcbiAgICB0aGlzLl90cmFuc2l0RW5jcnlwdGlvblBvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRyYW5zaXRFbmNyeXB0aW9uUG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2l0RW5jcnlwdGlvblBvcnQ7XG4gIH1cblxuICAvLyBhdXRob3JpemF0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRob3JpemF0aW9uQ29uZmlnID0gbmV3IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYXV0aG9yaXphdGlvbl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0QXV0aG9yaXphdGlvbkNvbmZpZyh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVFZnNWb2x1bWVDb25maWd1cmF0aW9uQXV0aG9yaXphdGlvbkNvbmZpZykge1xuICAgIHRoaXMuX2F1dGhvcml6YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhvcml6YXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRob3JpemF0aW9uQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWRlbnRpYWxzUGFyYW1ldGVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgfCBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVkZW50aWFsc19wYXJhbWV0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlZGVudGlhbHNQYXJhbWV0ZXIpLFxuICAgIGRvbWFpbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb21haW4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVkZW50aWFsc1BhcmFtZXRlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlZGVudGlhbHNQYXJhbWV0ZXIgPSB0aGlzLl9jcmVkZW50aWFsc1BhcmFtZXRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvbWFpbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZG9tYWluID0gdGhpcy5fZG9tYWluO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3JlZGVudGlhbHNQYXJhbWV0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kb21haW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWRlbnRpYWxzUGFyYW1ldGVyID0gdmFsdWUuY3JlZGVudGlhbHNQYXJhbWV0ZXI7XG4gICAgICB0aGlzLl9kb21haW4gPSB2YWx1ZS5kb21haW47XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlZGVudGlhbHNfcGFyYW1ldGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NyZWRlbnRpYWxzUGFyYW1ldGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVkZW50aWFsc1BhcmFtZXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NyZWRlbnRpYWxzX3BhcmFtZXRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY3JlZGVudGlhbHNQYXJhbWV0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWRlbnRpYWxzUGFyYW1ldGVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWRlbnRpYWxzUGFyYW1ldGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWRlbnRpYWxzUGFyYW1ldGVyO1xuICB9XG5cbiAgLy8gZG9tYWluIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9tYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZVN5c3RlbUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvb3REaXJlY3Rvcnk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aG9yaXphdGlvbkNvbmZpZzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmlsZV9zeXN0ZW1faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZVN5c3RlbUlkKSxcbiAgICByb290X2RpcmVjdG9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb290RGlyZWN0b3J5KSxcbiAgICBhdXRob3JpemF0aW9uX2NvbmZpZzogZWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRob3JpemF0aW9uQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ZpbGVTeXN0ZW1JZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZVN5c3RlbUlkID0gdGhpcy5fZmlsZVN5c3RlbUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9vdERpcmVjdG9yeSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9vdERpcmVjdG9yeSA9IHRoaXMuX3Jvb3REaXJlY3Rvcnk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdXRob3JpemF0aW9uQ29uZmlnPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRob3JpemF0aW9uQ29uZmlnID0gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZmlsZVN5c3RlbUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9vdERpcmVjdG9yeSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhvcml6YXRpb25Db25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZmlsZVN5c3RlbUlkID0gdmFsdWUuZmlsZVN5c3RlbUlkO1xuICAgICAgdGhpcy5fcm9vdERpcmVjdG9yeSA9IHZhbHVlLnJvb3REaXJlY3Rvcnk7XG4gICAgICB0aGlzLl9hdXRob3JpemF0aW9uQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hdXRob3JpemF0aW9uQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpbGVfc3lzdGVtX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpbGVTeXN0ZW1JZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlsZVN5c3RlbUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZV9zeXN0ZW1faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbGVTeXN0ZW1JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsZVN5c3RlbUlkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVTeXN0ZW1JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlU3lzdGVtSWQ7XG4gIH1cblxuICAvLyByb290X2RpcmVjdG9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb290RGlyZWN0b3J5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb290RGlyZWN0b3J5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9vdF9kaXJlY3RvcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvb3REaXJlY3RvcnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jvb3REaXJlY3RvcnkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9vdERpcmVjdG9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb290RGlyZWN0b3J5O1xuICB9XG5cbiAgLy8gYXV0aG9yaXphdGlvbl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYXV0aG9yaXphdGlvbkNvbmZpZyA9IG5ldyBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZUZzeFdpbmRvd3NGaWxlU2VydmVyVm9sdW1lQ29uZmlndXJhdGlvbkF1dGhvcml6YXRpb25Db25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYXV0aG9yaXphdGlvbl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0QXV0aG9yaXphdGlvbkNvbmZpZyh2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb25BdXRob3JpemF0aW9uQ29uZmlnKSB7XG4gICAgdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhvcml6YXRpb25Db25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXphdGlvbkNvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0UGF0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbj86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRG9ja2VyVm9sdW1lQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZWZzVm9sdW1lQ29uZmlndXJhdGlvbj86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uPzogRWNzVGFza0RlZmluaXRpb25Wb2x1bWVGc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlY3NUYXNrRGVmaW5pdGlvblZvbHVtZVRvVGVycmFmb3JtKHN0cnVjdD86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaG9zdF9wYXRoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhvc3RQYXRoKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIGRvY2tlcl92b2x1bWVfY29uZmlndXJhdGlvbjogZWNzVGFza0RlZmluaXRpb25Wb2x1bWVEb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5kb2NrZXJWb2x1bWVDb25maWd1cmF0aW9uKSxcbiAgICBlZnNfdm9sdW1lX2NvbmZpZ3VyYXRpb246IGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRWZzVm9sdW1lQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZWZzVm9sdW1lQ29uZmlndXJhdGlvbiksXG4gICAgZnN4X3dpbmRvd3NfZmlsZV9zZXJ2ZXJfdm9sdW1lX2NvbmZpZ3VyYXRpb246IGVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lRnN4V2luZG93c0ZpbGVTZXJ2ZXJWb2x1bWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5mc3hXaW5kb3dzRmlsZVNlcnZlclZvbHVtZUNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVjc1Rhc2tEZWZpbml0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2Vjc190YXNrX2RlZmluaXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWNzVGFza0RlZmluaXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lY3NfdGFza19kZWZpbml0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbnRhaW5lckRlZmluaXRpb25zID0gY29uZmlnLmNvbnRhaW5lckRlZmluaXRpb25zO1xuICAgIHRoaXMuX2NwdSA9IGNvbmZpZy5jcHU7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IGNvbmZpZy5leGVjdXRpb25Sb2xlQXJuO1xuICAgIHRoaXMuX2ZhbWlseSA9IGNvbmZpZy5mYW1pbHk7XG4gICAgdGhpcy5faXBjTW9kZSA9IGNvbmZpZy5pcGNNb2RlO1xuICAgIHRoaXMuX21lbW9yeSA9IGNvbmZpZy5tZW1vcnk7XG4gICAgdGhpcy5fbmV0d29ya01vZGUgPSBjb25maWcubmV0d29ya01vZGU7XG4gICAgdGhpcy5fcGlkTW9kZSA9IGNvbmZpZy5waWRNb2RlO1xuICAgIHRoaXMuX3JlcXVpcmVzQ29tcGF0aWJpbGl0aWVzID0gY29uZmlnLnJlcXVpcmVzQ29tcGF0aWJpbGl0aWVzO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdGFza1JvbGVBcm4gPSBjb25maWcudGFza1JvbGVBcm47XG4gICAgdGhpcy5fZXBoZW1lcmFsU3RvcmFnZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVwaGVtZXJhbFN0b3JhZ2U7XG4gICAgdGhpcy5faW5mZXJlbmNlQWNjZWxlcmF0b3IgPSBjb25maWcuaW5mZXJlbmNlQWNjZWxlcmF0b3I7XG4gICAgdGhpcy5fcGxhY2VtZW50Q29uc3RyYWludHMgPSBjb25maWcucGxhY2VtZW50Q29uc3RyYWludHM7XG4gICAgdGhpcy5fcHJveHlDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcucHJveHlDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3ZvbHVtZSA9IGNvbmZpZy52b2x1bWU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29udGFpbmVyX2RlZmluaXRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbnRhaW5lckRlZmluaXRpb25zPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250YWluZXJEZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRhaW5lcl9kZWZpbml0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbmVyRGVmaW5pdGlvbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRhaW5lckRlZmluaXRpb25zID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRhaW5lckRlZmluaXRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckRlZmluaXRpb25zO1xuICB9XG5cbiAgLy8gY3B1IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NwdT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3B1KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3B1Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjcHUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NwdSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENwdSgpIHtcbiAgICB0aGlzLl9jcHUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNwdUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcHU7XG4gIH1cblxuICAvLyBleGVjdXRpb25fcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXhlY3V0aW9uUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4ZWN1dGlvbl9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXhlY3V0aW9uUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4ZWN1dGlvblJvbGVBcm4oKSB7XG4gICAgdGhpcy5fZXhlY3V0aW9uUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXhlY3V0aW9uUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRpb25Sb2xlQXJuO1xuICB9XG5cbiAgLy8gZmFtaWx5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZhbWlseT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmFtaWx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmFtaWx5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmYW1pbHkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZhbWlseSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmYW1pbHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFtaWx5O1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGlwY19tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lwY01vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlwY01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcGNfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaXBjTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faXBjTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElwY01vZGUoKSB7XG4gICAgdGhpcy5faXBjTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaXBjTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pcGNNb2RlO1xuICB9XG5cbiAgLy8gbWVtb3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21lbW9yeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVtb3J5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVtb3J5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtZW1vcnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lbW9yeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lbW9yeSgpIHtcbiAgICB0aGlzLl9tZW1vcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lbW9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZW1vcnk7XG4gIH1cblxuICAvLyBuZXR3b3JrX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXR3b3JrTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmV0d29ya01vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduZXR3b3JrX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5ldHdvcmtNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uZXR3b3JrTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5ldHdvcmtNb2RlKCkge1xuICAgIHRoaXMuX25ldHdvcmtNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuZXR3b3JrTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uZXR3b3JrTW9kZTtcbiAgfVxuXG4gIC8vIHBpZF9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BpZE1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBpZE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwaWRfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGlkTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGlkTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBpZE1vZGUoKSB7XG4gICAgdGhpcy5fcGlkTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGlkTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9waWRNb2RlO1xuICB9XG5cbiAgLy8gcmVxdWlyZXNfY29tcGF0aWJpbGl0aWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVzQ29tcGF0aWJpbGl0aWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHJlcXVpcmVzQ29tcGF0aWJpbGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JlcXVpcmVzX2NvbXBhdGliaWxpdGllcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZXNDb21wYXRpYmlsaXRpZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcmVxdWlyZXNDb21wYXRpYmlsaXRpZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlc0NvbXBhdGliaWxpdGllcygpIHtcbiAgICB0aGlzLl9yZXF1aXJlc0NvbXBhdGliaWxpdGllcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZXNDb21wYXRpYmlsaXRpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZXNDb21wYXRpYmlsaXRpZXM7XG4gIH1cblxuICAvLyByZXZpc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJldmlzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncmV2aXNpb24nKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB0YXNrX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Rhc2tSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YXNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rhc2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhc2tSb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YXNrUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhc2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX3Rhc2tSb2xlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YXNrUm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGVwaGVtZXJhbF9zdG9yYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VwaGVtZXJhbFN0b3JhZ2UgPSBuZXcgRWNzVGFza0RlZmluaXRpb25FcGhlbWVyYWxTdG9yYWdlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImVwaGVtZXJhbF9zdG9yYWdlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGVwaGVtZXJhbFN0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VwaGVtZXJhbFN0b3JhZ2U7XG4gIH1cbiAgcHVibGljIHB1dEVwaGVtZXJhbFN0b3JhZ2UodmFsdWU6IEVjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZSkge1xuICAgIHRoaXMuX2VwaGVtZXJhbFN0b3JhZ2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVwaGVtZXJhbFN0b3JhZ2UoKSB7XG4gICAgdGhpcy5fZXBoZW1lcmFsU3RvcmFnZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlcGhlbWVyYWxTdG9yYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VwaGVtZXJhbFN0b3JhZ2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGluZmVyZW5jZV9hY2NlbGVyYXRvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmZlcmVuY2VBY2NlbGVyYXRvcj86IEVjc1Rhc2tEZWZpbml0aW9uSW5mZXJlbmNlQWNjZWxlcmF0b3JbXTsgXG4gIHB1YmxpYyBnZXQgaW5mZXJlbmNlQWNjZWxlcmF0b3IoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luZmVyZW5jZV9hY2NlbGVyYXRvcicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluZmVyZW5jZUFjY2VsZXJhdG9yKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvbkluZmVyZW5jZUFjY2VsZXJhdG9yW10pIHtcbiAgICB0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluZmVyZW5jZUFjY2VsZXJhdG9yKCkge1xuICAgIHRoaXMuX2luZmVyZW5jZUFjY2VsZXJhdG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmZlcmVuY2VBY2NlbGVyYXRvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvcjtcbiAgfVxuXG4gIC8vIHBsYWNlbWVudF9jb25zdHJhaW50cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGFjZW1lbnRDb25zdHJhaW50cz86IEVjc1Rhc2tEZWZpbml0aW9uUGxhY2VtZW50Q29uc3RyYWludHNbXTsgXG4gIHB1YmxpYyBnZXQgcGxhY2VtZW50Q29uc3RyYWludHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BsYWNlbWVudF9jb25zdHJhaW50cycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYWNlbWVudENvbnN0cmFpbnRzKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblBsYWNlbWVudENvbnN0cmFpbnRzW10pIHtcbiAgICB0aGlzLl9wbGFjZW1lbnRDb25zdHJhaW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYWNlbWVudENvbnN0cmFpbnRzKCkge1xuICAgIHRoaXMuX3BsYWNlbWVudENvbnN0cmFpbnRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGFjZW1lbnRDb25zdHJhaW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnRDb25zdHJhaW50cztcbiAgfVxuXG4gIC8vIHByb3h5X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJveHlDb25maWd1cmF0aW9uID0gbmV3IEVjc1Rhc2tEZWZpbml0aW9uUHJveHlDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByb3h5X2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcHJveHlDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm94eUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByb3h5Q29uZmlndXJhdGlvbih2YWx1ZTogRWNzVGFza0RlZmluaXRpb25Qcm94eUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9wcm94eUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb3h5Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9wcm94eUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJveHlDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3h5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdm9sdW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZvbHVtZT86IEVjc1Rhc2tEZWZpbml0aW9uVm9sdW1lW107IFxuICBwdWJsaWMgZ2V0IHZvbHVtZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndm9sdW1lJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdm9sdW1lKHZhbHVlOiBFY3NUYXNrRGVmaW5pdGlvblZvbHVtZVtdKSB7XG4gICAgdGhpcy5fdm9sdW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Vm9sdW1lKCkge1xuICAgIHRoaXMuX3ZvbHVtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdm9sdW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyX2RlZmluaXRpb25zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb250YWluZXJEZWZpbml0aW9ucyksXG4gICAgICBjcHU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NwdSksXG4gICAgICBleGVjdXRpb25fcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4ZWN1dGlvblJvbGVBcm4pLFxuICAgICAgZmFtaWx5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9mYW1pbHkpLFxuICAgICAgaXBjX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lwY01vZGUpLFxuICAgICAgbWVtb3J5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZW1vcnkpLFxuICAgICAgbmV0d29ya19tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uZXR3b3JrTW9kZSksXG4gICAgICBwaWRfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGlkTW9kZSksXG4gICAgICByZXF1aXJlc19jb21wYXRpYmlsaXRpZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3JlcXVpcmVzQ29tcGF0aWJpbGl0aWVzKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGFza19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFza1JvbGVBcm4pLFxuICAgICAgZXBoZW1lcmFsX3N0b3JhZ2U6IGVjc1Rhc2tEZWZpbml0aW9uRXBoZW1lcmFsU3RvcmFnZVRvVGVycmFmb3JtKHRoaXMuX2VwaGVtZXJhbFN0b3JhZ2UuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBpbmZlcmVuY2VfYWNjZWxlcmF0b3I6IGNka3RmLmxpc3RNYXBwZXIoZWNzVGFza0RlZmluaXRpb25JbmZlcmVuY2VBY2NlbGVyYXRvclRvVGVycmFmb3JtKSh0aGlzLl9pbmZlcmVuY2VBY2NlbGVyYXRvciksXG4gICAgICBwbGFjZW1lbnRfY29uc3RyYWludHM6IGNka3RmLmxpc3RNYXBwZXIoZWNzVGFza0RlZmluaXRpb25QbGFjZW1lbnRDb25zdHJhaW50c1RvVGVycmFmb3JtKSh0aGlzLl9wbGFjZW1lbnRDb25zdHJhaW50cyksXG4gICAgICBwcm94eV9jb25maWd1cmF0aW9uOiBlY3NUYXNrRGVmaW5pdGlvblByb3h5Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX3Byb3h5Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHZvbHVtZTogY2RrdGYubGlzdE1hcHBlcihlY3NUYXNrRGVmaW5pdGlvblZvbHVtZVRvVGVycmFmb3JtKSh0aGlzLl92b2x1bWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==