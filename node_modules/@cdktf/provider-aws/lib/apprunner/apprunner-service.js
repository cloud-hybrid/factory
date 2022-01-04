"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprunnerService = exports.ApprunnerServiceSourceConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationToTerraform = exports.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference = exports.apprunnerServiceSourceConfigurationImageRepositoryToTerraform = exports.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositoryToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform = exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference = exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform = exports.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference = exports.apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform = exports.ApprunnerServiceInstanceConfigurationOutputReference = exports.apprunnerServiceInstanceConfigurationToTerraform = exports.ApprunnerServiceHealthCheckConfigurationOutputReference = exports.apprunnerServiceHealthCheckConfigurationToTerraform = exports.ApprunnerServiceEncryptionConfigurationOutputReference = exports.apprunnerServiceEncryptionConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function apprunnerServiceEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key: cdktf.stringToTerraform(struct.kmsKey),
    };
}
exports.apprunnerServiceEncryptionConfigurationToTerraform = apprunnerServiceEncryptionConfigurationToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._kmsKey) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKey = value.kmsKey;
        }
    }
    /**
     * @stability stable
     */
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    /**
     * @stability stable
     */
    set kmsKey(value) {
        this._kmsKey = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyInput() {
        return this._kmsKey;
    }
}
exports.ApprunnerServiceEncryptionConfigurationOutputReference = ApprunnerServiceEncryptionConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ApprunnerServiceEncryptionConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceEncryptionConfigurationOutputReference", version: "3.0.1" };
function apprunnerServiceHealthCheckConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval: cdktf.numberToTerraform(struct.interval),
        path: cdktf.stringToTerraform(struct.path),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout: cdktf.numberToTerraform(struct.timeout),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold),
    };
}
exports.apprunnerServiceHealthCheckConfigurationToTerraform = apprunnerServiceHealthCheckConfigurationToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceHealthCheckConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._healthyThreshold) {
            hasAnyValues = true;
            internalValueResult.healthyThreshold = this._healthyThreshold;
        }
        if (this._interval) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._path) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._protocol) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._timeout) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        if (this._unhealthyThreshold) {
            hasAnyValues = true;
            internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._healthyThreshold = undefined;
            this._interval = undefined;
            this._path = undefined;
            this._protocol = undefined;
            this._timeout = undefined;
            this._unhealthyThreshold = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._healthyThreshold = value.healthyThreshold;
            this._interval = value.interval;
            this._path = value.path;
            this._protocol = value.protocol;
            this._timeout = value.timeout;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }
    /**
     * @stability stable
     */
    get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    /**
     * @stability stable
     */
    set healthyThreshold(value) {
        this._healthyThreshold = value;
    }
    /**
     * @stability stable
     */
    resetHealthyThreshold() {
        this._healthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get healthyThresholdInput() {
        return this._healthyThreshold;
    }
    /**
     * @stability stable
     */
    get interval() {
        return this.getNumberAttribute('interval');
    }
    /**
     * @stability stable
     */
    set interval(value) {
        this._interval = value;
    }
    /**
     * @stability stable
     */
    resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get intervalInput() {
        return this._interval;
    }
    /**
     * @stability stable
     */
    get path() {
        return this.getStringAttribute('path');
    }
    /**
     * @stability stable
     */
    set path(value) {
        this._path = value;
    }
    /**
     * @stability stable
     */
    resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pathInput() {
        return this._path;
    }
    /**
     * @stability stable
     */
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    /**
     * @stability stable
     */
    set protocol(value) {
        this._protocol = value;
    }
    /**
     * @stability stable
     */
    resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get protocolInput() {
        return this._protocol;
    }
    /**
     * @stability stable
     */
    get timeout() {
        return this.getNumberAttribute('timeout');
    }
    /**
     * @stability stable
     */
    set timeout(value) {
        this._timeout = value;
    }
    /**
     * @stability stable
     */
    resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInput() {
        return this._timeout;
    }
    /**
     * @stability stable
     */
    get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
    /**
     * @stability stable
     */
    set unhealthyThreshold(value) {
        this._unhealthyThreshold = value;
    }
    /**
     * @stability stable
     */
    resetUnhealthyThreshold() {
        this._unhealthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
exports.ApprunnerServiceHealthCheckConfigurationOutputReference = ApprunnerServiceHealthCheckConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ApprunnerServiceHealthCheckConfigurationOutputReference[_b] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceHealthCheckConfigurationOutputReference", version: "3.0.1" };
function apprunnerServiceInstanceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu: cdktf.stringToTerraform(struct.cpu),
        instance_role_arn: cdktf.stringToTerraform(struct.instanceRoleArn),
        memory: cdktf.stringToTerraform(struct.memory),
    };
}
exports.apprunnerServiceInstanceConfigurationToTerraform = apprunnerServiceInstanceConfigurationToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceInstanceConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._cpu) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._instanceRoleArn) {
            hasAnyValues = true;
            internalValueResult.instanceRoleArn = this._instanceRoleArn;
        }
        if (this._memory) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cpu = undefined;
            this._instanceRoleArn = undefined;
            this._memory = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cpu = value.cpu;
            this._instanceRoleArn = value.instanceRoleArn;
            this._memory = value.memory;
        }
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
    get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    /**
     * @stability stable
     */
    set instanceRoleArn(value) {
        this._instanceRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetInstanceRoleArn() {
        this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceRoleArnInput() {
        return this._instanceRoleArn;
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
}
exports.ApprunnerServiceInstanceConfigurationOutputReference = ApprunnerServiceInstanceConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
ApprunnerServiceInstanceConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceInstanceConfigurationOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_role_arn: cdktf.stringToTerraform(struct.accessRoleArn),
        connection_arn: cdktf.stringToTerraform(struct.connectionArn),
    };
}
exports.apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform = apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._accessRoleArn) {
            hasAnyValues = true;
            internalValueResult.accessRoleArn = this._accessRoleArn;
        }
        if (this._connectionArn) {
            hasAnyValues = true;
            internalValueResult.connectionArn = this._connectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessRoleArn = undefined;
            this._connectionArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessRoleArn = value.accessRoleArn;
            this._connectionArn = value.connectionArn;
        }
    }
    /**
     * @stability stable
     */
    get accessRoleArn() {
        return this.getStringAttribute('access_role_arn');
    }
    /**
     * @stability stable
     */
    set accessRoleArn(value) {
        this._accessRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetAccessRoleArn() {
        this._accessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessRoleArnInput() {
        return this._accessRoleArn;
    }
    /**
     * @stability stable
     */
    get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    /**
     * @stability stable
     */
    set connectionArn(value) {
        this._connectionArn = value;
    }
    /**
     * @stability stable
     */
    resetConnectionArn() {
        this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionArnInput() {
        return this._connectionArn;
    }
}
exports.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference = ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        build_command: cdktf.stringToTerraform(struct.buildCommand),
        port: cdktf.stringToTerraform(struct.port),
        runtime: cdktf.stringToTerraform(struct.runtime),
        runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform = apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference extends cdktf.ComplexObject {
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
        if (this._buildCommand) {
            hasAnyValues = true;
            internalValueResult.buildCommand = this._buildCommand;
        }
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._runtime) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._runtimeEnvironmentVariables) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
        }
        if (this._startCommand) {
            hasAnyValues = true;
            internalValueResult.startCommand = this._startCommand;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._buildCommand = undefined;
            this._port = undefined;
            this._runtime = undefined;
            this._runtimeEnvironmentVariables = undefined;
            this._startCommand = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._buildCommand = value.buildCommand;
            this._port = value.port;
            this._runtime = value.runtime;
            this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
            this._startCommand = value.startCommand;
        }
    }
    /**
     * @stability stable
     */
    get buildCommand() {
        return this.getStringAttribute('build_command');
    }
    /**
     * @stability stable
     */
    set buildCommand(value) {
        this._buildCommand = value;
    }
    /**
     * @stability stable
     */
    resetBuildCommand() {
        this._buildCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildCommandInput() {
        return this._buildCommand;
    }
    /**
     * @stability stable
     */
    get port() {
        return this.getStringAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    /**
     * @stability stable
     */
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get runtime() {
        return this.getStringAttribute('runtime');
    }
    /**
     * @stability stable
     */
    set runtime(value) {
        this._runtime = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get runtimeInput() {
        return this._runtime;
    }
    /**
     * @stability stable
     */
    get runtimeEnvironmentVariables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('runtime_environment_variables');
    }
    /**
     * @stability stable
     */
    set runtimeEnvironmentVariables(value) {
        this._runtimeEnvironmentVariables = value;
    }
    /**
     * @stability stable
     */
    resetRuntimeEnvironmentVariables() {
        this._runtimeEnvironmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get runtimeEnvironmentVariablesInput() {
        return this._runtimeEnvironmentVariables;
    }
    /**
     * @stability stable
     */
    get startCommand() {
        return this.getStringAttribute('start_command');
    }
    /**
     * @stability stable
     */
    set startCommand(value) {
        this._startCommand = value;
    }
    /**
     * @stability stable
     */
    resetStartCommand() {
        this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startCommandInput() {
        return this._startCommand;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference = ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference[_e] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configuration_source: cdktf.stringToTerraform(struct.configurationSource),
        code_configuration_values: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct.codeConfigurationValues),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform = apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // code_configuration_values - computed: false, optional: true, required: false
        this._codeConfigurationValues = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(this, "code_configuration_values", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _o, _p;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._configurationSource) {
            hasAnyValues = true;
            internalValueResult.configurationSource = this._configurationSource;
        }
        if ((_o = this._codeConfigurationValues) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.codeConfigurationValues = (_p = this._codeConfigurationValues) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configurationSource = undefined;
            this._codeConfigurationValues.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configurationSource = value.configurationSource;
            this._codeConfigurationValues.internalValue = value.codeConfigurationValues;
        }
    }
    /**
     * @stability stable
     */
    get configurationSource() {
        return this.getStringAttribute('configuration_source');
    }
    /**
     * @stability stable
     */
    set configurationSource(value) {
        this._configurationSource = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationSourceInput() {
        return this._configurationSource;
    }
    /**
     * @stability stable
     */
    get codeConfigurationValues() {
        return this._codeConfigurationValues;
    }
    /**
     * @stability stable
     */
    putCodeConfigurationValues(value) {
        this._codeConfigurationValues.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCodeConfigurationValues() {
        this._codeConfigurationValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codeConfigurationValuesInput() {
        return this._codeConfigurationValues.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference = ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference[_f] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform = apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference extends cdktf.ComplexObject {
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
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
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
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._value = value.value;
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
    /**
     * @stability stable
     */
    get value() {
        return this.getStringAttribute('value');
    }
    /**
     * @stability stable
     */
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get valueInput() {
        return this._value;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference = ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference;
_g = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference[_g] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        repository_url: cdktf.stringToTerraform(struct.repositoryUrl),
        code_configuration: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct.codeConfiguration),
        source_code_version: apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct.sourceCodeVersion),
    };
}
exports.apprunnerServiceSourceConfigurationCodeRepositoryToTerraform = apprunnerServiceSourceConfigurationCodeRepositoryToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // code_configuration - computed: false, optional: true, required: false
        this._codeConfiguration = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(this, "code_configuration", true);
        // source_code_version - computed: false, optional: false, required: true
        this._sourceCodeVersion = new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(this, "source_code_version", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _o, _p, _q, _r;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._repositoryUrl) {
            hasAnyValues = true;
            internalValueResult.repositoryUrl = this._repositoryUrl;
        }
        if ((_o = this._codeConfiguration) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.codeConfiguration = (_p = this._codeConfiguration) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        if ((_q = this._sourceCodeVersion) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.sourceCodeVersion = (_r = this._sourceCodeVersion) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._repositoryUrl = undefined;
            this._codeConfiguration.internalValue = undefined;
            this._sourceCodeVersion.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._repositoryUrl = value.repositoryUrl;
            this._codeConfiguration.internalValue = value.codeConfiguration;
            this._sourceCodeVersion.internalValue = value.sourceCodeVersion;
        }
    }
    /**
     * @stability stable
     */
    get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    /**
     * @stability stable
     */
    set repositoryUrl(value) {
        this._repositoryUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get repositoryUrlInput() {
        return this._repositoryUrl;
    }
    /**
     * @stability stable
     */
    get codeConfiguration() {
        return this._codeConfiguration;
    }
    /**
     * @stability stable
     */
    putCodeConfiguration(value) {
        this._codeConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCodeConfiguration() {
        this._codeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codeConfigurationInput() {
        return this._codeConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get sourceCodeVersion() {
        return this._sourceCodeVersion;
    }
    /**
     * @stability stable
     */
    putSourceCodeVersion(value) {
        this._sourceCodeVersion.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceCodeVersionInput() {
        return this._sourceCodeVersion.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference = ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference;
_h = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference[_h] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        port: cdktf.stringToTerraform(struct.port),
        runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runtimeEnvironmentVariables),
        start_command: cdktf.stringToTerraform(struct.startCommand),
    };
}
exports.apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform = apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._port) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._runtimeEnvironmentVariables) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
        }
        if (this._startCommand) {
            hasAnyValues = true;
            internalValueResult.startCommand = this._startCommand;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._port = undefined;
            this._runtimeEnvironmentVariables = undefined;
            this._startCommand = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._port = value.port;
            this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
            this._startCommand = value.startCommand;
        }
    }
    /**
     * @stability stable
     */
    get port() {
        return this.getStringAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    /**
     * @stability stable
     */
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get runtimeEnvironmentVariables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('runtime_environment_variables');
    }
    /**
     * @stability stable
     */
    set runtimeEnvironmentVariables(value) {
        this._runtimeEnvironmentVariables = value;
    }
    /**
     * @stability stable
     */
    resetRuntimeEnvironmentVariables() {
        this._runtimeEnvironmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get runtimeEnvironmentVariablesInput() {
        return this._runtimeEnvironmentVariables;
    }
    /**
     * @stability stable
     */
    get startCommand() {
        return this.getStringAttribute('start_command');
    }
    /**
     * @stability stable
     */
    set startCommand(value) {
        this._startCommand = value;
    }
    /**
     * @stability stable
     */
    resetStartCommand() {
        this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startCommandInput() {
        return this._startCommand;
    }
}
exports.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference = ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference[_j] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        image_identifier: cdktf.stringToTerraform(struct.imageIdentifier),
        image_repository_type: cdktf.stringToTerraform(struct.imageRepositoryType),
        image_configuration: apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct.imageConfiguration),
    };
}
exports.apprunnerServiceSourceConfigurationImageRepositoryToTerraform = apprunnerServiceSourceConfigurationImageRepositoryToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationImageRepositoryOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // image_configuration - computed: false, optional: true, required: false
        this._imageConfiguration = new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(this, "image_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _o, _p;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._imageIdentifier) {
            hasAnyValues = true;
            internalValueResult.imageIdentifier = this._imageIdentifier;
        }
        if (this._imageRepositoryType) {
            hasAnyValues = true;
            internalValueResult.imageRepositoryType = this._imageRepositoryType;
        }
        if ((_o = this._imageConfiguration) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.imageConfiguration = (_p = this._imageConfiguration) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._imageIdentifier = undefined;
            this._imageRepositoryType = undefined;
            this._imageConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._imageIdentifier = value.imageIdentifier;
            this._imageRepositoryType = value.imageRepositoryType;
            this._imageConfiguration.internalValue = value.imageConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get imageIdentifier() {
        return this.getStringAttribute('image_identifier');
    }
    /**
     * @stability stable
     */
    set imageIdentifier(value) {
        this._imageIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageIdentifierInput() {
        return this._imageIdentifier;
    }
    /**
     * @stability stable
     */
    get imageRepositoryType() {
        return this.getStringAttribute('image_repository_type');
    }
    /**
     * @stability stable
     */
    set imageRepositoryType(value) {
        this._imageRepositoryType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageRepositoryTypeInput() {
        return this._imageRepositoryType;
    }
    /**
     * @stability stable
     */
    get imageConfiguration() {
        return this._imageConfiguration;
    }
    /**
     * @stability stable
     */
    putImageConfiguration(value) {
        this._imageConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetImageConfiguration() {
        this._imageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageConfigurationInput() {
        return this._imageConfiguration.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference = ApprunnerServiceSourceConfigurationImageRepositoryOutputReference;
_k = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationImageRepositoryOutputReference[_k] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference", version: "3.0.1" };
function apprunnerServiceSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_deployments_enabled: cdktf.booleanToTerraform(struct.autoDeploymentsEnabled),
        authentication_configuration: apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct.authenticationConfiguration),
        code_repository: apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct.codeRepository),
        image_repository: apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct.imageRepository),
    };
}
exports.apprunnerServiceSourceConfigurationToTerraform = apprunnerServiceSourceConfigurationToTerraform;
/**
 * @stability stable
 */
class ApprunnerServiceSourceConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // authentication_configuration - computed: false, optional: true, required: false
        this._authenticationConfiguration = new ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration", true);
        // code_repository - computed: false, optional: true, required: false
        this._codeRepository = new ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(this, "code_repository", true);
        // image_repository - computed: false, optional: true, required: false
        this._imageRepository = new ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(this, "image_repository", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _o, _p, _q, _r, _s, _t;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._autoDeploymentsEnabled) {
            hasAnyValues = true;
            internalValueResult.autoDeploymentsEnabled = this._autoDeploymentsEnabled;
        }
        if ((_o = this._authenticationConfiguration) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.authenticationConfiguration = (_p = this._authenticationConfiguration) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        if ((_q = this._codeRepository) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.codeRepository = (_r = this._codeRepository) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        if ((_s = this._imageRepository) === null || _s === void 0 ? void 0 : _s.internalValue) {
            hasAnyValues = true;
            internalValueResult.imageRepository = (_t = this._imageRepository) === null || _t === void 0 ? void 0 : _t.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoDeploymentsEnabled = undefined;
            this._authenticationConfiguration.internalValue = undefined;
            this._codeRepository.internalValue = undefined;
            this._imageRepository.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoDeploymentsEnabled = value.autoDeploymentsEnabled;
            this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
            this._codeRepository.internalValue = value.codeRepository;
            this._imageRepository.internalValue = value.imageRepository;
        }
    }
    /**
     * @stability stable
     */
    get autoDeploymentsEnabled() {
        return this.getBooleanAttribute('auto_deployments_enabled');
    }
    /**
     * @stability stable
     */
    set autoDeploymentsEnabled(value) {
        this._autoDeploymentsEnabled = value;
    }
    /**
     * @stability stable
     */
    resetAutoDeploymentsEnabled() {
        this._autoDeploymentsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoDeploymentsEnabledInput() {
        return this._autoDeploymentsEnabled;
    }
    /**
     * @stability stable
     */
    get authenticationConfiguration() {
        return this._authenticationConfiguration;
    }
    /**
     * @stability stable
     */
    putAuthenticationConfiguration(value) {
        this._authenticationConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAuthenticationConfiguration() {
        this._authenticationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authenticationConfigurationInput() {
        return this._authenticationConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get codeRepository() {
        return this._codeRepository;
    }
    /**
     * @stability stable
     */
    putCodeRepository(value) {
        this._codeRepository.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCodeRepository() {
        this._codeRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codeRepositoryInput() {
        return this._codeRepository.internalValue;
    }
    /**
     * @stability stable
     */
    get imageRepository() {
        return this._imageRepository;
    }
    /**
     * @stability stable
     */
    putImageRepository(value) {
        this._imageRepository.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetImageRepository() {
        this._imageRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageRepositoryInput() {
        return this._imageRepository.internalValue;
    }
}
exports.ApprunnerServiceSourceConfigurationOutputReference = ApprunnerServiceSourceConfigurationOutputReference;
_l = JSII_RTTI_SYMBOL_1;
ApprunnerServiceSourceConfigurationOutputReference[_l] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerServiceSourceConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service}.
 *
 * @stability stable
 */
class ApprunnerService extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apprunner_service',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // encryption_configuration - computed: false, optional: true, required: false
        this._encryptionConfiguration = new ApprunnerServiceEncryptionConfigurationOutputReference(this, "encryption_configuration", true);
        // health_check_configuration - computed: false, optional: true, required: false
        this._healthCheckConfiguration = new ApprunnerServiceHealthCheckConfigurationOutputReference(this, "health_check_configuration", true);
        // instance_configuration - computed: false, optional: true, required: false
        this._instanceConfiguration = new ApprunnerServiceInstanceConfigurationOutputReference(this, "instance_configuration", true);
        // source_configuration - computed: false, optional: false, required: true
        this._sourceConfiguration = new ApprunnerServiceSourceConfigurationOutputReference(this, "source_configuration", true);
        this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
        this._serviceName = config.serviceName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._healthCheckConfiguration.internalValue = config.healthCheckConfiguration;
        this._instanceConfiguration.internalValue = config.instanceConfiguration;
        this._sourceConfiguration.internalValue = config.sourceConfiguration;
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
    get autoScalingConfigurationArn() {
        return this.getStringAttribute('auto_scaling_configuration_arn');
    }
    /**
     * @stability stable
     */
    set autoScalingConfigurationArn(value) {
        this._autoScalingConfigurationArn = value;
    }
    /**
     * @stability stable
     */
    resetAutoScalingConfigurationArn() {
        this._autoScalingConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoScalingConfigurationArnInput() {
        return this._autoScalingConfigurationArn;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // service_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get serviceId() {
        return this.getStringAttribute('service_id');
    }
    /**
     * @stability stable
     */
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    /**
     * @stability stable
     */
    set serviceName(value) {
        this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceNameInput() {
        return this._serviceName;
    }
    // service_url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get serviceUrl() {
        return this.getStringAttribute('service_url');
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
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
    get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    /**
     * @stability stable
     */
    putEncryptionConfiguration(value) {
        this._encryptionConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get healthCheckConfiguration() {
        return this._healthCheckConfiguration;
    }
    /**
     * @stability stable
     */
    putHealthCheckConfiguration(value) {
        this._healthCheckConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHealthCheckConfiguration() {
        this._healthCheckConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get healthCheckConfigurationInput() {
        return this._healthCheckConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get instanceConfiguration() {
        return this._instanceConfiguration;
    }
    /**
     * @stability stable
     */
    putInstanceConfiguration(value) {
        this._instanceConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInstanceConfiguration() {
        this._instanceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get instanceConfigurationInput() {
        return this._instanceConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    /**
     * @stability stable
     */
    putSourceConfiguration(value) {
        this._sourceConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
            service_name: cdktf.stringToTerraform(this._serviceName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            encryption_configuration: apprunnerServiceEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
            health_check_configuration: apprunnerServiceHealthCheckConfigurationToTerraform(this._healthCheckConfiguration.internalValue),
            instance_configuration: apprunnerServiceInstanceConfigurationToTerraform(this._instanceConfiguration.internalValue),
            source_configuration: apprunnerServiceSourceConfigurationToTerraform(this._sourceConfiguration.internalValue),
        };
    }
}
exports.ApprunnerService = ApprunnerService;
_m = JSII_RTTI_SYMBOL_1;
ApprunnerService[_m] = { fqn: "@cdktf/provider-aws.apprunner.ApprunnerService", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ApprunnerService.tfResourceType = "aws_apprunner_service";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcnVubmVyLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwcnVubmVyL2FwcHJ1bm5lci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBMEIvQixTQUFnQixrREFBa0QsQ0FBQyxNQUF5RztJQUMxSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNqRCxDQUFBO0FBQ0gsQ0FBQztBQVJELGdIQVFDOzs7O0FBRUQsTUFBYSxzREFBdUQsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk3RixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENB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Q0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7WUFDekgsMEJBQTBCLEVBQUUsbURBQW1ELENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztZQUM3SCxzQkFBc0IsRUFBRSxnREFBZ0QsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1lBQ25ILG9CQUFvQixFQUFFLDhDQUE4QyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7U0FDOUcsQ0FBQztJQUNKLENBQUM7O0FBek1ILDRDQTBNQzs7O0FBeE1DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csK0JBQWMsR0FBVyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQXBwcnVubmVyU2VydmljZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24/OiBBcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWx0aENoZWNrQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZUNvbmZpZ3VyYXRpb246IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBydW5uZXJTZXJ2aWNlRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ttc0tleSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5ID0gdGhpcy5fa21zS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fa21zS2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9rbXNLZXkgPSB2YWx1ZS5rbXNLZXk7XG4gICAgfVxuICB9XG5cbiAgLy8ga21zX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9rbXNLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF0aD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdW5oZWFsdGh5VGhyZXNob2xkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGVhbHRoeV90aHJlc2hvbGQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaGVhbHRoeVRocmVzaG9sZCksXG4gICAgaW50ZXJ2YWw6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWwpLFxuICAgIHBhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGF0aCksXG4gICAgcHJvdG9jb2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvdG9jb2wpLFxuICAgIHRpbWVvdXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dCksXG4gICAgdW5oZWFsdGh5X3RocmVzaG9sZDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS51bmhlYWx0aHlUaHJlc2hvbGQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlYWx0aHlUaHJlc2hvbGQgPSB0aGlzLl9oZWFsdGh5VGhyZXNob2xkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmludGVydmFsID0gdGhpcy5faW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXRoID0gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb3RvY29sKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm90b2NvbCA9IHRoaXMuX3Byb3RvY29sO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGltZW91dCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bmhlYWx0aHlUaHJlc2hvbGQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVuaGVhbHRoeVRocmVzaG9sZCA9IHRoaXMuX3VuaGVhbHRoeVRocmVzaG9sZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9oZWFsdGh5VGhyZXNob2xkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oZWFsdGh5VGhyZXNob2xkID0gdmFsdWUuaGVhbHRoeVRocmVzaG9sZDtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWUuaW50ZXJ2YWw7XG4gICAgICB0aGlzLl9wYXRoID0gdmFsdWUucGF0aDtcbiAgICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWUucHJvdG9jb2w7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gdmFsdWUudGltZW91dDtcbiAgICAgIHRoaXMuX3VuaGVhbHRoeVRocmVzaG9sZCA9IHZhbHVlLnVuaGVhbHRoeVRocmVzaG9sZDtcbiAgICB9XG4gIH1cblxuICAvLyBoZWFsdGh5X3RocmVzaG9sZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFsdGh5VGhyZXNob2xkPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBoZWFsdGh5VGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaGVhbHRoeV90aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhlYWx0aHlUaHJlc2hvbGQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGh5VGhyZXNob2xkKCkge1xuICAgIHRoaXMuX2hlYWx0aHlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aHlUaHJlc2hvbGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhbHRoeVRocmVzaG9sZDtcbiAgfVxuXG4gIC8vIGludGVydmFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ludGVydmFsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBpbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICAvLyBwYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXRoJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXRoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGF0aCgpIHtcbiAgICB0aGlzLl9wYXRoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXRoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGg7XG4gIH1cblxuICAvLyBwcm90b2NvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJvdG9jb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcm90b2NvbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJvdG9jb2wodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvdG9jb2woKSB7XG4gICAgdGhpcy5fcHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xuICB9XG5cbiAgLy8gdGltZW91dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZW91dCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXQoKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZW91dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICB9XG5cbiAgLy8gdW5oZWFsdGh5X3RocmVzaG9sZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91bmhlYWx0aHlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHVuaGVhbHRoeVRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3VuaGVhbHRoeV90aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVuaGVhbHRoeVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdW5oZWFsdGh5VGhyZXNob2xkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VW5oZWFsdGh5VGhyZXNob2xkKCkge1xuICAgIHRoaXMuX3VuaGVhbHRoeVRocmVzaG9sZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdW5oZWFsdGh5VGhyZXNob2xkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaGVhbHRoeVRocmVzaG9sZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcHU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluc3RhbmNlUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZW1vcnk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwcnVubmVyU2VydmljZUluc3RhbmNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcHU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3B1KSxcbiAgICBpbnN0YW5jZV9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnN0YW5jZVJvbGVBcm4pLFxuICAgIG1lbW9yeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZW1vcnkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NwdSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3B1ID0gdGhpcy5fY3B1O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5zdGFuY2VSb2xlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnN0YW5jZVJvbGVBcm4gPSB0aGlzLl9pbnN0YW5jZVJvbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZW1vcnkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1lbW9yeSA9IHRoaXMuX21lbW9yeTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcHUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbnN0YW5jZVJvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZW1vcnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NwdSA9IHZhbHVlLmNwdTtcbiAgICAgIHRoaXMuX2luc3RhbmNlUm9sZUFybiA9IHZhbHVlLmluc3RhbmNlUm9sZUFybjtcbiAgICAgIHRoaXMuX21lbW9yeSA9IHZhbHVlLm1lbW9yeTtcbiAgICB9XG4gIH1cblxuICAvLyBjcHUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3B1Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcHUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcHUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNwdSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3B1ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3B1KCkge1xuICAgIHRoaXMuX2NwdSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3B1SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NwdTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luc3RhbmNlUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5zdGFuY2Vfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluc3RhbmNlUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5zdGFuY2VSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5zdGFuY2VSb2xlQXJuKCkge1xuICAgIHRoaXMuX2luc3RhbmNlUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlUm9sZUFybjtcbiAgfVxuXG4gIC8vIG1lbW9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZW1vcnk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1lbW9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lbW9yeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVtb3J5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZW1vcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZW1vcnkoKSB7XG4gICAgdGhpcy5fbWVtb3J5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZW1vcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtb3J5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25uZWN0aW9uQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25BdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc1JvbGVBcm4pLFxuICAgIGNvbm5lY3Rpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3Rpb25Bcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWNjZXNzUm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWNjZXNzUm9sZUFybiA9IHRoaXMuX2FjY2Vzc1JvbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb25uZWN0aW9uQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25uZWN0aW9uQXJuID0gdGhpcy5fY29ubmVjdGlvbkFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjZXNzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25Bcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2FjY2Vzc1JvbGVBcm4gPSB2YWx1ZS5hY2Nlc3NSb2xlQXJuO1xuICAgICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHZhbHVlLmNvbm5lY3Rpb25Bcm47XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjY2Vzc1JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY2Nlc3Nfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjY2Vzc1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2Nlc3NSb2xlQXJuKCkge1xuICAgIHRoaXMuX2FjY2Vzc1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFjY2Vzc1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzUm9sZUFybjtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25uZWN0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29ubmVjdGlvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbm5lY3Rpb25Bcm4oKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvbkFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbkFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9uQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1aWxkQ29tbWFuZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBydW50aW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXJ0Q29tbWFuZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0PzogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXNPdXRwdXRSZWZlcmVuY2UgfCBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1aWxkX2NvbW1hbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVpbGRDb21tYW5kKSxcbiAgICBwb3J0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvcnQpLFxuICAgIHJ1bnRpbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucnVudGltZSksXG4gICAgcnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEucnVudGltZUVudmlyb25tZW50VmFyaWFibGVzKSxcbiAgICBzdGFydF9jb21tYW5kOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0Q29tbWFuZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWlsZENvbW1hbmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1aWxkQ29tbWFuZCA9IHRoaXMuX2J1aWxkQ29tbWFuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BvcnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvcnQgPSB0aGlzLl9wb3J0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcnVudGltZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucnVudGltZSA9IHRoaXMuX3J1bnRpbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0YXJ0Q29tbWFuZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhcnRDb21tYW5kID0gdGhpcy5fc3RhcnRDb21tYW5kO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWlsZENvbW1hbmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcnVudGltZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXJ0Q29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVpbGRDb21tYW5kID0gdmFsdWUuYnVpbGRDb21tYW5kO1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgICB0aGlzLl9ydW50aW1lID0gdmFsdWUucnVudGltZTtcbiAgICAgIHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHZhbHVlLnJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcztcbiAgICAgIHRoaXMuX3N0YXJ0Q29tbWFuZCA9IHZhbHVlLnN0YXJ0Q29tbWFuZDtcbiAgICB9XG4gIH1cblxuICAvLyBidWlsZF9jb21tYW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1aWxkQ29tbWFuZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVpbGRDb21tYW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVpbGRfY29tbWFuZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRDb21tYW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWlsZENvbW1hbmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZENvbW1hbmQoKSB7XG4gICAgdGhpcy5fYnVpbGRDb21tYW5kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWlsZENvbW1hbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRDb21tYW5kO1xuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb3J0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnQoKSB7XG4gICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0O1xuICB9XG5cbiAgLy8gcnVudGltZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ydW50aW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBydW50aW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncnVudGltZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcnVudGltZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcnVudGltZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydW50aW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bnRpbWU7XG4gIH1cblxuICAvLyBydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcygpIHtcbiAgICB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gIH1cblxuICAvLyBzdGFydF9jb21tYW5kIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0Q29tbWFuZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3RhcnRDb21tYW5kKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhcnRfY29tbWFuZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhcnRDb21tYW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGFydENvbW1hbmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGFydENvbW1hbmQoKSB7XG4gICAgdGhpcy5fc3RhcnRDb21tYW5kID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydENvbW1hbmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRDb21tYW5kO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25Tb3VyY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXM/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYXRpb25fc291cmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25Tb3VyY2UpLFxuICAgIGNvZGVfY29uZmlndXJhdGlvbl92YWx1ZXM6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbkNvZGVDb25maWd1cmF0aW9uVmFsdWVzVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29uZmlndXJhdGlvblZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbmZpZ3VyYXRpb25Tb3VyY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbmZpZ3VyYXRpb25Tb3VyY2UgPSB0aGlzLl9jb25maWd1cmF0aW9uU291cmNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVDb25maWd1cmF0aW9uVmFsdWVzID0gdGhpcy5fY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uU291cmNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29uZmlndXJhdGlvblNvdXJjZSA9IHZhbHVlLmNvbmZpZ3VyYXRpb25Tb3VyY2U7XG4gICAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvblZhbHVlcy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbl9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvblNvdXJjZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25fc291cmNlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uU291cmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uU291cmNlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25Tb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblNvdXJjZTtcbiAgfVxuXG4gIC8vIGNvZGVfY29uZmlndXJhdGlvbl92YWx1ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXMgPSBuZXcgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uQ29kZUNvbmZpZ3VyYXRpb25WYWx1ZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29kZV9jb25maWd1cmF0aW9uX3ZhbHVlc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb2RlQ29uZmlndXJhdGlvblZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZUNvbmZpZ3VyYXRpb25WYWx1ZXM7XG4gIH1cbiAgcHVibGljIHB1dENvZGVDb25maWd1cmF0aW9uVmFsdWVzKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25Db2RlQ29uZmlndXJhdGlvblZhbHVlcykge1xuICAgIHRoaXMuX2NvZGVDb25maWd1cmF0aW9uVmFsdWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2RlQ29uZmlndXJhdGlvblZhbHVlcygpIHtcbiAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvblZhbHVlcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2RlQ29uZmlndXJhdGlvblZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlQ29uZmlndXJhdGlvblZhbHVlcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb25PdXRwdXRSZWZlcmVuY2UgfCBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeVNvdXJjZUNvZGVWZXJzaW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92YWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2YWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwb3NpdG9yeVVybDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2RlQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlQ29kZVZlcnNpb246IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlTb3VyY2VDb2RlVmVyc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5T3V0cHV0UmVmZXJlbmNlIHwgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlcG9zaXRvcnlfdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlcG9zaXRvcnlVcmwpLFxuICAgIGNvZGVfY29uZmlndXJhdGlvbjogYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeUNvZGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29uZmlndXJhdGlvbiksXG4gICAgc291cmNlX2NvZGVfdmVyc2lvbjogYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeVNvdXJjZUNvZGVWZXJzaW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zb3VyY2VDb2RlVmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVwb3NpdG9yeVVybCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVwb3NpdG9yeVVybCA9IHRoaXMuX3JlcG9zaXRvcnlVcmw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb2RlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29kZUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZUNvZGVWZXJzaW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2VDb2RlVmVyc2lvbiA9IHRoaXMuX3NvdXJjZUNvZGVWZXJzaW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Db2RlUmVwb3NpdG9yeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlcG9zaXRvcnlVcmwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlQ29kZVZlcnNpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVwb3NpdG9yeVVybCA9IHZhbHVlLnJlcG9zaXRvcnlVcmw7XG4gICAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29kZUNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9zb3VyY2VDb2RlVmVyc2lvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc291cmNlQ29kZVZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gcmVwb3NpdG9yeV91cmwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVwb3NpdG9yeVVybD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwb3NpdG9yeVVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9zaXRvcnlfdXJsJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvc2l0b3J5VXJsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvc2l0b3J5VXJsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9zaXRvcnlVcmxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3NpdG9yeVVybDtcbiAgfVxuXG4gIC8vIGNvZGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlQ29uZmlndXJhdGlvbiA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5Q29kZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29kZV9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvZGVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q29kZUNvbmZpZ3VyYXRpb24odmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlDb2RlQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2NvZGVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2RlQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2RlQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc291cmNlX2NvZGVfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zb3VyY2VDb2RlVmVyc2lvbiA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic291cmNlX2NvZGVfdmVyc2lvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzb3VyY2VDb2RlVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQ29kZVZlcnNpb247XG4gIH1cbiAgcHVibGljIHB1dFNvdXJjZUNvZGVWZXJzaW9uKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5U291cmNlQ29kZVZlcnNpb24pIHtcbiAgICB0aGlzLl9zb3VyY2VDb2RlVmVyc2lvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUNvZGVWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUNvZGVWZXJzaW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9ydD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnRDb21tYW5kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcG9ydDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3J0KSxcbiAgICBydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkoc3RydWN0IS5ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMpLFxuICAgIHN0YXJ0X2NvbW1hbmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhcnRDb21tYW5kKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3BvcnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvcnQgPSB0aGlzLl9wb3J0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgPSB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGFydENvbW1hbmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0YXJ0Q29tbWFuZCA9IHRoaXMuX3N0YXJ0Q29tbWFuZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudFZhcmlhYmxlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0YXJ0Q29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcG9ydCA9IHZhbHVlLnBvcnQ7XG4gICAgICB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgPSB2YWx1ZS5ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXM7XG4gICAgICB0aGlzLl9zdGFydENvbW1hbmQgPSB2YWx1ZS5zdGFydENvbW1hbmQ7XG4gICAgfVxuICB9XG5cbiAgLy8gcG9ydCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb3J0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcG9ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcG9ydCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvcnQoKSB7XG4gICAgdGhpcy5fcG9ydCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcG9ydElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3J0O1xuICB9XG5cbiAgLy8gcnVudGltZV9lbnZpcm9ubWVudF92YXJpYWJsZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3J1bnRpbWVfZW52aXJvbm1lbnRfdmFyaWFibGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXMoKSB7XG4gICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBydW50aW1lRW52aXJvbm1lbnRWYXJpYWJsZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVudGltZUVudmlyb25tZW50VmFyaWFibGVzO1xuICB9XG5cbiAgLy8gc3RhcnRfY29tbWFuZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGFydENvbW1hbmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0Q29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXJ0X2NvbW1hbmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXJ0Q29tbWFuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhcnRDb21tYW5kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhcnRDb21tYW5kKCkge1xuICAgIHRoaXMuX3N0YXJ0Q29tbWFuZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhcnRDb21tYW5kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0Q29tbWFuZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZUlkZW50aWZpZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZVJlcG9zaXRvcnlUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5SW1hZ2VDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeU91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW1hZ2VfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZUlkZW50aWZpZXIpLFxuICAgIGltYWdlX3JlcG9zaXRvcnlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbWFnZVJlcG9zaXRvcnlUeXBlKSxcbiAgICBpbWFnZV9jb25maWd1cmF0aW9uOiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2ltYWdlSWRlbnRpZmllcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VJZGVudGlmaWVyID0gdGhpcy5faW1hZ2VJZGVudGlmaWVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW1hZ2VSZXBvc2l0b3J5VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VSZXBvc2l0b3J5VHlwZSA9IHRoaXMuX2ltYWdlUmVwb3NpdG9yeVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbWFnZUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmltYWdlQ29uZmlndXJhdGlvbiA9IHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW1hZ2VJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5VHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbWFnZUlkZW50aWZpZXIgPSB2YWx1ZS5pbWFnZUlkZW50aWZpZXI7XG4gICAgICB0aGlzLl9pbWFnZVJlcG9zaXRvcnlUeXBlID0gdmFsdWUuaW1hZ2VSZXBvc2l0b3J5VHlwZTtcbiAgICAgIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaW1hZ2VDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGltYWdlX2lkZW50aWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW1hZ2VJZGVudGlmaWVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbWFnZUlkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV9pZGVudGlmaWVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbWFnZUlkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlSWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZUlkZW50aWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VJZGVudGlmaWVyO1xuICB9XG5cbiAgLy8gaW1hZ2VfcmVwb3NpdG9yeV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ltYWdlUmVwb3NpdG9yeVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlUmVwb3NpdG9yeVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbWFnZV9yZXBvc2l0b3J5X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlUmVwb3NpdG9yeVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlUmVwb3NpdG9yeVR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW1hZ2VSZXBvc2l0b3J5VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVJlcG9zaXRvcnlUeXBlO1xuICB9XG5cbiAgLy8gaW1hZ2VfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZUNvbmZpZ3VyYXRpb24gPSBuZXcgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25JbWFnZVJlcG9zaXRvcnlJbWFnZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaW1hZ2VfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbWFnZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SW1hZ2VDb25maWd1cmF0aW9uKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeUltYWdlQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW1hZ2VDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2ltYWdlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9EZXBsb3ltZW50c0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbj86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2RlUmVwb3NpdG9yeT86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlUmVwb3NpdG9yeT86IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0b19kZXBsb3ltZW50c19lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hdXRvRGVwbG95bWVudHNFbmFibGVkKSxcbiAgICBhdXRoZW50aWNhdGlvbl9jb25maWd1cmF0aW9uOiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uKSxcbiAgICBjb2RlX3JlcG9zaXRvcnk6IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQ29kZVJlcG9zaXRvcnlUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvZGVSZXBvc2l0b3J5KSxcbiAgICBpbWFnZV9yZXBvc2l0b3J5OiBhcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeVRvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VSZXBvc2l0b3J5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dG9EZXBsb3ltZW50c0VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dG9EZXBsb3ltZW50c0VuYWJsZWQgPSB0aGlzLl9hdXRvRGVwbG95bWVudHNFbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb2RlUmVwb3NpdG9yeT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29kZVJlcG9zaXRvcnkgPSB0aGlzLl9jb2RlUmVwb3NpdG9yeT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ltYWdlUmVwb3NpdG9yeT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VSZXBvc2l0b3J5ID0gdGhpcy5faW1hZ2VSZXBvc2l0b3J5Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRvRGVwbG95bWVudHNFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2RlUmVwb3NpdG9yeS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9EZXBsb3ltZW50c0VuYWJsZWQgPSB2YWx1ZS5hdXRvRGVwbG95bWVudHNFbmFibGVkO1xuICAgICAgdGhpcy5fYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9jb2RlUmVwb3NpdG9yeS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29kZVJlcG9zaXRvcnk7XG4gICAgICB0aGlzLl9pbWFnZVJlcG9zaXRvcnkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmltYWdlUmVwb3NpdG9yeTtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRvX2RlcGxveW1lbnRzX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b0RlcGxveW1lbnRzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXV0b0RlcGxveW1lbnRzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvX2RlcGxveW1lbnRzX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvRGVwbG95bWVudHNFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvRGVwbG95bWVudHNFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b0RlcGxveW1lbnRzRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9hdXRvRGVwbG95bWVudHNFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvRGVwbG95bWVudHNFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9EZXBsb3ltZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBhdXRoZW50aWNhdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbiA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhdXRoZW50aWNhdGlvbl9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGNvZGVfcmVwb3NpdG9yeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlUmVwb3NpdG9yeSA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNvZGVfcmVwb3NpdG9yeVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb2RlUmVwb3NpdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZVJlcG9zaXRvcnk7XG4gIH1cbiAgcHVibGljIHB1dENvZGVSZXBvc2l0b3J5KHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkNvZGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5fY29kZVJlcG9zaXRvcnkuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvZGVSZXBvc2l0b3J5KCkge1xuICAgIHRoaXMuX2NvZGVSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvZGVSZXBvc2l0b3J5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVSZXBvc2l0b3J5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBpbWFnZV9yZXBvc2l0b3J5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltYWdlUmVwb3NpdG9yeSA9IG5ldyBBcHBydW5uZXJTZXJ2aWNlU291cmNlQ29uZmlndXJhdGlvbkltYWdlUmVwb3NpdG9yeU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbWFnZV9yZXBvc2l0b3J5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGltYWdlUmVwb3NpdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VSZXBvc2l0b3J5O1xuICB9XG4gIHB1YmxpYyBwdXRJbWFnZVJlcG9zaXRvcnkodmFsdWU6IEFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uSW1hZ2VSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZVJlcG9zaXRvcnkoKSB7XG4gICAgdGhpcy5faW1hZ2VSZXBvc2l0b3J5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlUmVwb3NpdG9yeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVJlcG9zaXRvcnkuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBBcHBydW5uZXJTZXJ2aWNlIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2FwcHJ1bm5lcl9zZXJ2aWNlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBBcHBydW5uZXJTZXJ2aWNlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfYXBwcnVubmVyX3NlcnZpY2UnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuID0gY29uZmlnLmF1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybjtcbiAgICB0aGlzLl9zZXJ2aWNlTmFtZSA9IGNvbmZpZy5zZXJ2aWNlTmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuaGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX2luc3RhbmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmluc3RhbmNlQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9zb3VyY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuc291cmNlQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdXRvX3NjYWxpbmdfY29uZmlndXJhdGlvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dG9TY2FsaW5nQ29uZmlndXJhdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dG9fc2NhbGluZ19jb25maWd1cmF0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm4oKSB7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ0NvbmZpZ3VyYXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2lkJyk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VydmljZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZU5hbWU7XG4gIH1cblxuICAvLyBzZXJ2aWNlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX3VybCcpO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuY3J5cHRpb25Db25maWd1cmF0aW9uID0gbmV3IEFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRFbmNyeXB0aW9uQ29uZmlndXJhdGlvbih2YWx1ZTogQXBwcnVubmVyU2VydmljZUVuY3J5cHRpb25Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBoZWFsdGhfY2hlY2tfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9oZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24gPSBuZXcgQXBwcnVubmVyU2VydmljZUhlYWx0aENoZWNrQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJoZWFsdGhfY2hlY2tfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBoZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWx0aENoZWNrQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlSGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5faGVhbHRoQ2hlY2tDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlYWx0aENoZWNrQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5zdGFuY2VDb25maWd1cmF0aW9uID0gbmV3IEFwcHJ1bm5lclNlcnZpY2VJbnN0YW5jZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaW5zdGFuY2VfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbnN0YW5jZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SW5zdGFuY2VDb25maWd1cmF0aW9uKHZhbHVlOiBBcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5faW5zdGFuY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnN0YW5jZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5faW5zdGFuY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZUNvbmZpZ3VyYXRpb24gPSBuZXcgQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic291cmNlX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc291cmNlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0U291cmNlQ29uZmlndXJhdGlvbih2YWx1ZTogQXBwcnVubmVyU2VydmljZVNvdXJjZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zb3VyY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF1dG9fc2NhbGluZ19jb25maWd1cmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYXV0b1NjYWxpbmdDb25maWd1cmF0aW9uQXJuKSxcbiAgICAgIHNlcnZpY2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmljZU5hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb246IGFwcHJ1bm5lclNlcnZpY2VFbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgaGVhbHRoX2NoZWNrX2NvbmZpZ3VyYXRpb246IGFwcHJ1bm5lclNlcnZpY2VIZWFsdGhDaGVja0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9oZWFsdGhDaGVja0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBpbnN0YW5jZV9jb25maWd1cmF0aW9uOiBhcHBydW5uZXJTZXJ2aWNlSW5zdGFuY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5faW5zdGFuY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgc291cmNlX2NvbmZpZ3VyYXRpb246IGFwcHJ1bm5lclNlcnZpY2VTb3VyY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fc291cmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=