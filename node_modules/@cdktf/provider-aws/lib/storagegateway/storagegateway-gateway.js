"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoragegatewayGateway = exports.StoragegatewayGatewayTimeoutsOutputReference = exports.storagegatewayGatewayTimeoutsToTerraform = exports.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference = exports.storagegatewayGatewaySmbActiveDirectorySettingsToTerraform = exports.StoragegatewayGatewayGatewayNetworkInterface = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class StoragegatewayGatewayGatewayNetworkInterface extends cdktf.ComplexComputedList {
    // ipv4_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipv4Address() {
        return this.getStringAttribute('ipv4_address');
    }
}
exports.StoragegatewayGatewayGatewayNetworkInterface = StoragegatewayGatewayGatewayNetworkInterface;
_a = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewayGatewayNetworkInterface[_a] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayGatewayGatewayNetworkInterface", version: "3.0.1" };
function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        domain_controllers: cdktf.listMapper(cdktf.stringToTerraform)(struct.domainControllers),
        domain_name: cdktf.stringToTerraform(struct.domainName),
        organizational_unit: cdktf.stringToTerraform(struct.organizationalUnit),
        password: cdktf.stringToTerraform(struct.password),
        timeout_in_seconds: cdktf.numberToTerraform(struct.timeoutInSeconds),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.storagegatewayGatewaySmbActiveDirectorySettingsToTerraform = storagegatewayGatewaySmbActiveDirectorySettingsToTerraform;
/**
 * @stability stable
 */
class StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._domainControllers) {
            hasAnyValues = true;
            internalValueResult.domainControllers = this._domainControllers;
        }
        if (this._domainName) {
            hasAnyValues = true;
            internalValueResult.domainName = this._domainName;
        }
        if (this._organizationalUnit) {
            hasAnyValues = true;
            internalValueResult.organizationalUnit = this._organizationalUnit;
        }
        if (this._password) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._timeoutInSeconds) {
            hasAnyValues = true;
            internalValueResult.timeoutInSeconds = this._timeoutInSeconds;
        }
        if (this._username) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._domainControllers = undefined;
            this._domainName = undefined;
            this._organizationalUnit = undefined;
            this._password = undefined;
            this._timeoutInSeconds = undefined;
            this._username = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._domainControllers = value.domainControllers;
            this._domainName = value.domainName;
            this._organizationalUnit = value.organizationalUnit;
            this._password = value.password;
            this._timeoutInSeconds = value.timeoutInSeconds;
            this._username = value.username;
        }
    }
    /**
     * @stability stable
     */
    get domainControllers() {
        return this.getListAttribute('domain_controllers');
    }
    /**
     * @stability stable
     */
    set domainControllers(value) {
        this._domainControllers = value;
    }
    /**
     * @stability stable
     */
    resetDomainControllers() {
        this._domainControllers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainControllersInput() {
        return this._domainControllers;
    }
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
    }
    /**
     * @stability stable
     */
    get organizationalUnit() {
        return this.getStringAttribute('organizational_unit');
    }
    /**
     * @stability stable
     */
    set organizationalUnit(value) {
        this._organizationalUnit = value;
    }
    /**
     * @stability stable
     */
    resetOrganizationalUnit() {
        this._organizationalUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get organizationalUnitInput() {
        return this._organizationalUnit;
    }
    /**
     * @stability stable
     */
    get password() {
        return this.getStringAttribute('password');
    }
    /**
     * @stability stable
     */
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passwordInput() {
        return this._password;
    }
    /**
     * @stability stable
     */
    get timeoutInSeconds() {
        return this.getNumberAttribute('timeout_in_seconds');
    }
    /**
     * @stability stable
     */
    set timeoutInSeconds(value) {
        this._timeoutInSeconds = value;
    }
    /**
     * @stability stable
     */
    resetTimeoutInSeconds() {
        this._timeoutInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutInSecondsInput() {
        return this._timeoutInSeconds;
    }
    /**
     * @stability stable
     */
    get username() {
        return this.getStringAttribute('username');
    }
    /**
     * @stability stable
     */
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usernameInput() {
        return this._username;
    }
}
exports.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference = StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference[_b] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference", version: "3.0.1" };
function storagegatewayGatewayTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
    };
}
exports.storagegatewayGatewayTimeoutsToTerraform = storagegatewayGatewayTimeoutsToTerraform;
/**
 * @stability stable
 */
class StoragegatewayGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
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
}
exports.StoragegatewayGatewayTimeoutsOutputReference = StoragegatewayGatewayTimeoutsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
StoragegatewayGatewayTimeoutsOutputReference[_c] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayGatewayTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway}.
 *
 * @stability stable
 */
class StoragegatewayGateway extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_storagegateway_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // smb_active_directory_settings - computed: false, optional: true, required: false
        this._smbActiveDirectorySettings = new StoragegatewayGatewaySmbActiveDirectorySettingsOutputReference(this, "smb_active_directory_settings", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new StoragegatewayGatewayTimeoutsOutputReference(this, "timeouts", true);
        this._activationKey = config.activationKey;
        this._averageDownloadRateLimitInBitsPerSec = config.averageDownloadRateLimitInBitsPerSec;
        this._averageUploadRateLimitInBitsPerSec = config.averageUploadRateLimitInBitsPerSec;
        this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
        this._gatewayIpAddress = config.gatewayIpAddress;
        this._gatewayName = config.gatewayName;
        this._gatewayTimezone = config.gatewayTimezone;
        this._gatewayType = config.gatewayType;
        this._gatewayVpcEndpoint = config.gatewayVpcEndpoint;
        this._mediumChangerType = config.mediumChangerType;
        this._smbFileShareVisibility = config.smbFileShareVisibility;
        this._smbGuestPassword = config.smbGuestPassword;
        this._smbSecurityStrategy = config.smbSecurityStrategy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._tapeDriveType = config.tapeDriveType;
        this._smbActiveDirectorySettings.internalValue = config.smbActiveDirectorySettings;
        this._timeouts.internalValue = config.timeouts;
    }
    /**
     * @stability stable
     */
    get activationKey() {
        return this.getStringAttribute('activation_key');
    }
    /**
     * @stability stable
     */
    set activationKey(value) {
        this._activationKey = value;
    }
    /**
     * @stability stable
     */
    resetActivationKey() {
        this._activationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get activationKeyInput() {
        return this._activationKey;
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
    get averageDownloadRateLimitInBitsPerSec() {
        return this.getNumberAttribute('average_download_rate_limit_in_bits_per_sec');
    }
    /**
     * @stability stable
     */
    set averageDownloadRateLimitInBitsPerSec(value) {
        this._averageDownloadRateLimitInBitsPerSec = value;
    }
    /**
     * @stability stable
     */
    resetAverageDownloadRateLimitInBitsPerSec() {
        this._averageDownloadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get averageDownloadRateLimitInBitsPerSecInput() {
        return this._averageDownloadRateLimitInBitsPerSec;
    }
    /**
     * @stability stable
     */
    get averageUploadRateLimitInBitsPerSec() {
        return this.getNumberAttribute('average_upload_rate_limit_in_bits_per_sec');
    }
    /**
     * @stability stable
     */
    set averageUploadRateLimitInBitsPerSec(value) {
        this._averageUploadRateLimitInBitsPerSec = value;
    }
    /**
     * @stability stable
     */
    resetAverageUploadRateLimitInBitsPerSec() {
        this._averageUploadRateLimitInBitsPerSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get averageUploadRateLimitInBitsPerSecInput() {
        return this._averageUploadRateLimitInBitsPerSec;
    }
    /**
     * @stability stable
     */
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    /**
     * @stability stable
     */
    set cloudwatchLogGroupArn(value) {
        this._cloudwatchLogGroupArn = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLogGroupArn() {
        this._cloudwatchLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLogGroupArnInput() {
        return this._cloudwatchLogGroupArn;
    }
    // ec2_instance_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ec2InstanceId() {
        return this.getStringAttribute('ec2_instance_id');
    }
    // endpoint_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    // gateway_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get gatewayId() {
        return this.getStringAttribute('gateway_id');
    }
    /**
     * @stability stable
     */
    get gatewayIpAddress() {
        return this.getStringAttribute('gateway_ip_address');
    }
    /**
     * @stability stable
     */
    set gatewayIpAddress(value) {
        this._gatewayIpAddress = value;
    }
    /**
     * @stability stable
     */
    resetGatewayIpAddress() {
        this._gatewayIpAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gatewayIpAddressInput() {
        return this._gatewayIpAddress;
    }
    /**
     * @stability stable
     */
    get gatewayName() {
        return this.getStringAttribute('gateway_name');
    }
    /**
     * @stability stable
     */
    set gatewayName(value) {
        this._gatewayName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gatewayNameInput() {
        return this._gatewayName;
    }
    // gateway_network_interface - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    gatewayNetworkInterface(index) {
        return new StoragegatewayGatewayGatewayNetworkInterface(this, 'gateway_network_interface', index);
    }
    /**
     * @stability stable
     */
    get gatewayTimezone() {
        return this.getStringAttribute('gateway_timezone');
    }
    /**
     * @stability stable
     */
    set gatewayTimezone(value) {
        this._gatewayTimezone = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gatewayTimezoneInput() {
        return this._gatewayTimezone;
    }
    /**
     * @stability stable
     */
    get gatewayType() {
        return this.getStringAttribute('gateway_type');
    }
    /**
     * @stability stable
     */
    set gatewayType(value) {
        this._gatewayType = value;
    }
    /**
     * @stability stable
     */
    resetGatewayType() {
        this._gatewayType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gatewayTypeInput() {
        return this._gatewayType;
    }
    /**
     * @stability stable
     */
    get gatewayVpcEndpoint() {
        return this.getStringAttribute('gateway_vpc_endpoint');
    }
    /**
     * @stability stable
     */
    set gatewayVpcEndpoint(value) {
        this._gatewayVpcEndpoint = value;
    }
    /**
     * @stability stable
     */
    resetGatewayVpcEndpoint() {
        this._gatewayVpcEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get gatewayVpcEndpointInput() {
        return this._gatewayVpcEndpoint;
    }
    // host_environment - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hostEnvironment() {
        return this.getStringAttribute('host_environment');
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
    get mediumChangerType() {
        return this.getStringAttribute('medium_changer_type');
    }
    /**
     * @stability stable
     */
    set mediumChangerType(value) {
        this._mediumChangerType = value;
    }
    /**
     * @stability stable
     */
    resetMediumChangerType() {
        this._mediumChangerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mediumChangerTypeInput() {
        return this._mediumChangerType;
    }
    /**
     * @stability stable
     */
    get smbFileShareVisibility() {
        return this.getBooleanAttribute('smb_file_share_visibility');
    }
    /**
     * @stability stable
     */
    set smbFileShareVisibility(value) {
        this._smbFileShareVisibility = value;
    }
    /**
     * @stability stable
     */
    resetSmbFileShareVisibility() {
        this._smbFileShareVisibility = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smbFileShareVisibilityInput() {
        return this._smbFileShareVisibility;
    }
    /**
     * @stability stable
     */
    get smbGuestPassword() {
        return this.getStringAttribute('smb_guest_password');
    }
    /**
     * @stability stable
     */
    set smbGuestPassword(value) {
        this._smbGuestPassword = value;
    }
    /**
     * @stability stable
     */
    resetSmbGuestPassword() {
        this._smbGuestPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smbGuestPasswordInput() {
        return this._smbGuestPassword;
    }
    /**
     * @stability stable
     */
    get smbSecurityStrategy() {
        return this.getStringAttribute('smb_security_strategy');
    }
    /**
     * @stability stable
     */
    set smbSecurityStrategy(value) {
        this._smbSecurityStrategy = value;
    }
    /**
     * @stability stable
     */
    resetSmbSecurityStrategy() {
        this._smbSecurityStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smbSecurityStrategyInput() {
        return this._smbSecurityStrategy;
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
    get tapeDriveType() {
        return this.getStringAttribute('tape_drive_type');
    }
    /**
     * @stability stable
     */
    set tapeDriveType(value) {
        this._tapeDriveType = value;
    }
    /**
     * @stability stable
     */
    resetTapeDriveType() {
        this._tapeDriveType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tapeDriveTypeInput() {
        return this._tapeDriveType;
    }
    /**
     * @stability stable
     */
    get smbActiveDirectorySettings() {
        return this._smbActiveDirectorySettings;
    }
    /**
     * @stability stable
     */
    putSmbActiveDirectorySettings(value) {
        this._smbActiveDirectorySettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSmbActiveDirectorySettings() {
        this._smbActiveDirectorySettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smbActiveDirectorySettingsInput() {
        return this._smbActiveDirectorySettings.internalValue;
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
            activation_key: cdktf.stringToTerraform(this._activationKey),
            average_download_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageDownloadRateLimitInBitsPerSec),
            average_upload_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageUploadRateLimitInBitsPerSec),
            cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
            gateway_ip_address: cdktf.stringToTerraform(this._gatewayIpAddress),
            gateway_name: cdktf.stringToTerraform(this._gatewayName),
            gateway_timezone: cdktf.stringToTerraform(this._gatewayTimezone),
            gateway_type: cdktf.stringToTerraform(this._gatewayType),
            gateway_vpc_endpoint: cdktf.stringToTerraform(this._gatewayVpcEndpoint),
            medium_changer_type: cdktf.stringToTerraform(this._mediumChangerType),
            smb_file_share_visibility: cdktf.booleanToTerraform(this._smbFileShareVisibility),
            smb_guest_password: cdktf.stringToTerraform(this._smbGuestPassword),
            smb_security_strategy: cdktf.stringToTerraform(this._smbSecurityStrategy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            tape_drive_type: cdktf.stringToTerraform(this._tapeDriveType),
            smb_active_directory_settings: storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(this._smbActiveDirectorySettings.internalValue),
            timeouts: storagegatewayGatewayTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.StoragegatewayGateway = StoragegatewayGateway;
_d = JSII_RTTI_SYMBOL_1;
StoragegatewayGateway[_d] = { fqn: "@cdktf/provider-aws.storagegateway.StoragegatewayGateway", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
StoragegatewayGateway.tfResourceType = "aws_storagegateway_gateway";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZWdhdGV3YXktZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yYWdlZ2F0ZXdheS9zdG9yYWdlZ2F0ZXdheS1nYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7O0FBeUMvQixNQUFhLDRDQUE2QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFekYsa0VBQWtFOzs7O0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDOztBQUxILG9HQU1DOzs7QUFnQkQsU0FBZ0IsMERBQTBELENBQUMsTUFBeUg7SUFDbE0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RixXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUN4RSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRSxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8s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QW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN2RSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ3JFLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDakYsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRSxxQkFBcUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3pFLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM3RCw2QkFBNkIsRUFBRSwwREFBMEQsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDO1lBQ3pJLFFBQVEsRUFBRSx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUNqRixDQUFDO0lBQ0osQ0FBQzs7QUF2WUgsc0RBd1lDOzs7QUF0WUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxvQ0FBYyxHQUFXLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjdGl2YXRpb25LZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ0dyb3VwQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnYXRld2F5SXBBZGRyZXNzPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnYXRld2F5TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdhdGV3YXlUaW1lem9uZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnYXRld2F5VHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdhdGV3YXlWcGNFbmRwb2ludD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZWRpdW1DaGFuZ2VyVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbWJGaWxlU2hhcmVWaXNpYmlsaXR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbWJHdWVzdFBhc3N3b3JkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbWJTZWN1cml0eVN0cmF0ZWd5Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXBlRHJpdmVUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3M/OiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogU3RvcmFnZWdhdGV3YXlHYXRld2F5VGltZW91dHM7XG59XG5leHBvcnQgY2xhc3MgU3RvcmFnZWdhdGV3YXlHYXRld2F5R2F0ZXdheU5ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpcHY0X2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcHY0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwdjRfYWRkcmVzcycpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluQ29udHJvbGxlcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvcmdhbml6YXRpb25hbFVuaXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXNzd29yZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0SW5TZWNvbmRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogU3RvcmFnZWdhdGV3YXlHYXRld2F5U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRvbWFpbl9jb250cm9sbGVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5kb21haW5Db250cm9sbGVycyksXG4gICAgZG9tYWluX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZG9tYWluTmFtZSksXG4gICAgb3JnYW5pemF0aW9uYWxfdW5pdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vcmdhbml6YXRpb25hbFVuaXQpLFxuICAgIHBhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhc3N3b3JkKSxcbiAgICB0aW1lb3V0X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dEluU2Vjb25kcyksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZG9tYWluQ29udHJvbGxlcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvbWFpbkNvbnRyb2xsZXJzID0gdGhpcy5fZG9tYWluQ29udHJvbGxlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb21haW5OYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb21haW5OYW1lID0gdGhpcy5fZG9tYWluTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29yZ2FuaXphdGlvbmFsVW5pdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3JnYW5pemF0aW9uYWxVbml0ID0gdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFzc3dvcmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhc3N3b3JkID0gdGhpcy5fcGFzc3dvcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0SW5TZWNvbmRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0SW5TZWNvbmRzID0gdGhpcy5fdGltZW91dEluU2Vjb25kcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJuYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VybmFtZSA9IHRoaXMuX3VzZXJuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogU3RvcmFnZWdhdGV3YXlHYXRld2F5U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9kb21haW5Db250cm9sbGVycyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVvdXRJblNlY29uZHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VybmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZG9tYWluQ29udHJvbGxlcnMgPSB2YWx1ZS5kb21haW5Db250cm9sbGVycztcbiAgICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZS5kb21haW5OYW1lO1xuICAgICAgdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0ID0gdmFsdWUub3JnYW5pemF0aW9uYWxVbml0O1xuICAgICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZS5wYXNzd29yZDtcbiAgICAgIHRoaXMuX3RpbWVvdXRJblNlY29uZHMgPSB2YWx1ZS50aW1lb3V0SW5TZWNvbmRzO1xuICAgICAgdGhpcy5fdXNlcm5hbWUgPSB2YWx1ZS51c2VybmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBkb21haW5fY29udHJvbGxlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZG9tYWluQ29udHJvbGxlcnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgZG9tYWluQ29udHJvbGxlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnZG9tYWluX2NvbnRyb2xsZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBkb21haW5Db250cm9sbGVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9kb21haW5Db250cm9sbGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERvbWFpbkNvbnRyb2xsZXJzKCkge1xuICAgIHRoaXMuX2RvbWFpbkNvbnRyb2xsZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5Db250cm9sbGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5Db250cm9sbGVycztcbiAgfVxuXG4gIC8vIGRvbWFpbl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RvbWFpbk5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvbWFpbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9tYWluTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvbWFpbk5hbWU7XG4gIH1cblxuICAvLyBvcmdhbml6YXRpb25hbF91bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29yZ2FuaXphdGlvbmFsVW5pdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3JnYW5pemF0aW9uYWxVbml0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3JnYW5pemF0aW9uYWxfdW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3JnYW5pemF0aW9uYWxVbml0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmdhbml6YXRpb25hbFVuaXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmdhbml6YXRpb25hbFVuaXQoKSB7XG4gICAgdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmdhbml6YXRpb25hbFVuaXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JnYW5pemF0aW9uYWxVbml0O1xuICB9XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZDtcbiAgfVxuXG4gIC8vIHRpbWVvdXRfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0SW5TZWNvbmRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0SW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGltZW91dF9pbl9zZWNvbmRzJyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lb3V0SW5TZWNvbmRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90aW1lb3V0SW5TZWNvbmRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dEluU2Vjb25kcygpIHtcbiAgICB0aGlzLl90aW1lb3V0SW5TZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0SW5TZWNvbmRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRJblNlY29uZHM7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJuYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZWdhdGV3YXlHYXRld2F5VGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0c091dHB1dFJlZmVyZW5jZSB8IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jcmVhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNyZWF0ZSA9IHRoaXMuX2NyZWF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZS5jcmVhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VnYXRld2F5R2F0ZXdheSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zdG9yYWdlZ2F0ZXdheV9nYXRld2F5XCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19zdG9yYWdlZ2F0ZXdheV9nYXRld2F5JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FjdGl2YXRpb25LZXkgPSBjb25maWcuYWN0aXZhdGlvbktleTtcbiAgICB0aGlzLl9hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMgPSBjb25maWcuYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjO1xuICAgIHRoaXMuX2F2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMgPSBjb25maWcuYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYztcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBBcm4gPSBjb25maWcuY2xvdWR3YXRjaExvZ0dyb3VwQXJuO1xuICAgIHRoaXMuX2dhdGV3YXlJcEFkZHJlc3MgPSBjb25maWcuZ2F0ZXdheUlwQWRkcmVzcztcbiAgICB0aGlzLl9nYXRld2F5TmFtZSA9IGNvbmZpZy5nYXRld2F5TmFtZTtcbiAgICB0aGlzLl9nYXRld2F5VGltZXpvbmUgPSBjb25maWcuZ2F0ZXdheVRpbWV6b25lO1xuICAgIHRoaXMuX2dhdGV3YXlUeXBlID0gY29uZmlnLmdhdGV3YXlUeXBlO1xuICAgIHRoaXMuX2dhdGV3YXlWcGNFbmRwb2ludCA9IGNvbmZpZy5nYXRld2F5VnBjRW5kcG9pbnQ7XG4gICAgdGhpcy5fbWVkaXVtQ2hhbmdlclR5cGUgPSBjb25maWcubWVkaXVtQ2hhbmdlclR5cGU7XG4gICAgdGhpcy5fc21iRmlsZVNoYXJlVmlzaWJpbGl0eSA9IGNvbmZpZy5zbWJGaWxlU2hhcmVWaXNpYmlsaXR5O1xuICAgIHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQgPSBjb25maWcuc21iR3Vlc3RQYXNzd29yZDtcbiAgICB0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5ID0gY29uZmlnLnNtYlNlY3VyaXR5U3RyYXRlZ3k7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl90YXBlRHJpdmVUeXBlID0gY29uZmlnLnRhcGVEcml2ZVR5cGU7XG4gICAgdGhpcy5fc21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncztcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhY3RpdmF0aW9uX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FjdGl2YXRpb25LZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjdGl2YXRpb25LZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY3RpdmF0aW9uX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWN0aXZhdGlvbktleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWN0aXZhdGlvbktleSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFjdGl2YXRpb25LZXkoKSB7XG4gICAgdGhpcy5fYWN0aXZhdGlvbktleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWN0aXZhdGlvbktleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmF0aW9uS2V5O1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdmVyYWdlX2Rvd25sb2FkX3JhdGVfbGltaXRfaW5fYml0c19wZXJfc2VjIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F2ZXJhZ2VEb3dubG9hZFJhdGVMaW1pdEluQml0c1BlclNlYz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYXZlcmFnZV9kb3dubG9hZF9yYXRlX2xpbWl0X2luX2JpdHNfcGVyX3NlYycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMoKSB7XG4gICAgdGhpcy5fYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXZlcmFnZURvd25sb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjO1xuICB9XG5cbiAgLy8gYXZlcmFnZV91cGxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2F2ZXJhZ2VfdXBsb2FkX3JhdGVfbGltaXRfaW5fYml0c19wZXJfc2VjJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXZlcmFnZVVwbG9hZFJhdGVMaW1pdEluQml0c1BlclNlYygpIHtcbiAgICB0aGlzLl9hdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdmVyYWdlVXBsb2FkUmF0ZUxpbWl0SW5CaXRzUGVyU2VjSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWM7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaExvZ0dyb3VwQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsb3Vkd2F0Y2hMb2dHcm91cEFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ0dyb3VwQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWR3YXRjaExvZ0dyb3VwQXJuKCkge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cEFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ0dyb3VwQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dHcm91cEFybjtcbiAgfVxuXG4gIC8vIGVjMl9pbnN0YW5jZV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVjMkluc3RhbmNlSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlYzJfaW5zdGFuY2VfaWQnKTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF90eXBlJyk7XG4gIH1cblxuICAvLyBnYXRld2F5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV9pZCcpO1xuICB9XG5cbiAgLy8gZ2F0ZXdheV9pcF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ2F0ZXdheUlwQWRkcmVzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfaXBfYWRkcmVzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheUlwQWRkcmVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2F0ZXdheUlwQWRkcmVzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdhdGV3YXlJcEFkZHJlc3MoKSB7XG4gICAgdGhpcy5fZ2F0ZXdheUlwQWRkcmVzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheUlwQWRkcmVzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nYXRld2F5SXBBZGRyZXNzO1xuICB9XG5cbiAgLy8gZ2F0ZXdheV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2dhdGV3YXlOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBnYXRld2F5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dhdGV3YXlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2dhdGV3YXlOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdhdGV3YXlOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlOYW1lO1xuICB9XG5cbiAgLy8gZ2F0ZXdheV9uZXR3b3JrX2ludGVyZmFjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2F0ZXdheU5ldHdvcmtJbnRlcmZhY2UoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgU3RvcmFnZWdhdGV3YXlHYXRld2F5R2F0ZXdheU5ldHdvcmtJbnRlcmZhY2UodGhpcywgJ2dhdGV3YXlfbmV0d29ya19pbnRlcmZhY2UnLCBpbmRleCk7XG4gIH1cblxuICAvLyBnYXRld2F5X3RpbWV6b25lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2dhdGV3YXlUaW1lem9uZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVRpbWV6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV90aW1lem9uZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZ2F0ZXdheVRpbWV6b25lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nYXRld2F5VGltZXpvbmUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVRpbWV6b25lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlUaW1lem9uZTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9nYXRld2F5VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnYXRld2F5X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdhdGV3YXlUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9nYXRld2F5VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEdhdGV3YXlUeXBlKCkge1xuICAgIHRoaXMuX2dhdGV3YXlUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnYXRld2F5VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nYXRld2F5VHlwZTtcbiAgfVxuXG4gIC8vIGdhdGV3YXlfdnBjX2VuZHBvaW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dhdGV3YXlWcGNFbmRwb2ludD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVZwY0VuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZ2F0ZXdheV92cGNfZW5kcG9pbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdhdGV3YXlWcGNFbmRwb2ludCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2F0ZXdheVZwY0VuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2F0ZXdheVZwY0VuZHBvaW50KCkge1xuICAgIHRoaXMuX2dhdGV3YXlWcGNFbmRwb2ludCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2F0ZXdheVZwY0VuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXlWcGNFbmRwb2ludDtcbiAgfVxuXG4gIC8vIGhvc3RfZW52aXJvbm1lbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBob3N0RW52aXJvbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X2Vudmlyb25tZW50Jyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbWVkaXVtX2NoYW5nZXJfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZWRpdW1DaGFuZ2VyVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVkaXVtQ2hhbmdlclR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZWRpdW1fY2hhbmdlcl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZWRpdW1DaGFuZ2VyVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWVkaXVtQ2hhbmdlclR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZWRpdW1DaGFuZ2VyVHlwZSgpIHtcbiAgICB0aGlzLl9tZWRpdW1DaGFuZ2VyVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWVkaXVtQ2hhbmdlclR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVkaXVtQ2hhbmdlclR5cGU7XG4gIH1cblxuICAvLyBzbWJfZmlsZV9zaGFyZV92aXNpYmlsaXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NtYkZpbGVTaGFyZVZpc2liaWxpdHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNtYkZpbGVTaGFyZVZpc2liaWxpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc21iX2ZpbGVfc2hhcmVfdmlzaWJpbGl0eScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNtYkZpbGVTaGFyZVZpc2liaWxpdHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NtYkZpbGVTaGFyZVZpc2liaWxpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbWJGaWxlU2hhcmVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuX3NtYkZpbGVTaGFyZVZpc2liaWxpdHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtYkZpbGVTaGFyZVZpc2liaWxpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21iRmlsZVNoYXJlVmlzaWJpbGl0eTtcbiAgfVxuXG4gIC8vIHNtYl9ndWVzdF9wYXNzd29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbWJHdWVzdFBhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbWJHdWVzdFBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21iX2d1ZXN0X3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbWJHdWVzdFBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbWJHdWVzdFBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21iR3Vlc3RQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9zbWJHdWVzdFBhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbWJHdWVzdFBhc3N3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQ7XG4gIH1cblxuICAvLyBzbWJfc2VjdXJpdHlfc3RyYXRlZ3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbWJTZWN1cml0eVN0cmF0ZWd5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbWJTZWN1cml0eVN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc21iX3NlY3VyaXR5X3N0cmF0ZWd5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzbWJTZWN1cml0eVN0cmF0ZWd5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21iU2VjdXJpdHlTdHJhdGVneSgpIHtcbiAgICB0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbWJTZWN1cml0eVN0cmF0ZWd5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NtYlNlY3VyaXR5U3RyYXRlZ3k7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gdGFwZV9kcml2ZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcGVEcml2ZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhcGVEcml2ZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YXBlX2RyaXZlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhcGVEcml2ZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhcGVEcml2ZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYXBlRHJpdmVUeXBlKCkge1xuICAgIHRoaXMuX3RhcGVEcml2ZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcGVEcml2ZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFwZURyaXZlVHlwZTtcbiAgfVxuXG4gIC8vIHNtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzID0gbmV3IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9zbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0U21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3ModmFsdWU6IFN0b3JhZ2VnYXRld2F5R2F0ZXdheVNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKSB7XG4gICAgdGhpcy5fc21iQWN0aXZlRGlyZWN0b3J5U2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzKCkge1xuICAgIHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB0aW1lb3V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0cyA9IG5ldyBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBTdG9yYWdlZ2F0ZXdheUdhdGV3YXlUaW1lb3V0cykge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUaW1lb3V0cygpIHtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmF0aW9uX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWN0aXZhdGlvbktleSksXG4gICAgICBhdmVyYWdlX2Rvd25sb2FkX3JhdGVfbGltaXRfaW5fYml0c19wZXJfc2VjOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9hdmVyYWdlRG93bmxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMpLFxuICAgICAgYXZlcmFnZV91cGxvYWRfcmF0ZV9saW1pdF9pbl9iaXRzX3Blcl9zZWM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX2F2ZXJhZ2VVcGxvYWRSYXRlTGltaXRJbkJpdHNQZXJTZWMpLFxuICAgICAgY2xvdWR3YXRjaF9sb2dfZ3JvdXBfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbG91ZHdhdGNoTG9nR3JvdXBBcm4pLFxuICAgICAgZ2F0ZXdheV9pcF9hZGRyZXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nYXRld2F5SXBBZGRyZXNzKSxcbiAgICAgIGdhdGV3YXlfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheU5hbWUpLFxuICAgICAgZ2F0ZXdheV90aW1lem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheVRpbWV6b25lKSxcbiAgICAgIGdhdGV3YXlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2F0ZXdheVR5cGUpLFxuICAgICAgZ2F0ZXdheV92cGNfZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2dhdGV3YXlWcGNFbmRwb2ludCksXG4gICAgICBtZWRpdW1fY2hhbmdlcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9tZWRpdW1DaGFuZ2VyVHlwZSksXG4gICAgICBzbWJfZmlsZV9zaGFyZV92aXNpYmlsaXR5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fc21iRmlsZVNoYXJlVmlzaWJpbGl0eSksXG4gICAgICBzbWJfZ3Vlc3RfcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3NtYkd1ZXN0UGFzc3dvcmQpLFxuICAgICAgc21iX3NlY3VyaXR5X3N0cmF0ZWd5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zbWJTZWN1cml0eVN0cmF0ZWd5KSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdGFwZV9kcml2ZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90YXBlRHJpdmVUeXBlKSxcbiAgICAgIHNtYl9hY3RpdmVfZGlyZWN0b3J5X3NldHRpbmdzOiBzdG9yYWdlZ2F0ZXdheUdhdGV3YXlTbWJBY3RpdmVEaXJlY3RvcnlTZXR0aW5nc1RvVGVycmFmb3JtKHRoaXMuX3NtYkFjdGl2ZURpcmVjdG9yeVNldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAgdGltZW91dHM6IHN0b3JhZ2VnYXRld2F5R2F0ZXdheVRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19