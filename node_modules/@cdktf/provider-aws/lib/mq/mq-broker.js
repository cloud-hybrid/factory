"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqBroker = exports.mqBrokerUserToTerraform = exports.MqBrokerMaintenanceWindowStartTimeOutputReference = exports.mqBrokerMaintenanceWindowStartTimeToTerraform = exports.MqBrokerLogsOutputReference = exports.mqBrokerLogsToTerraform = exports.MqBrokerLdapServerMetadataOutputReference = exports.mqBrokerLdapServerMetadataToTerraform = exports.MqBrokerEncryptionOptionsOutputReference = exports.mqBrokerEncryptionOptionsToTerraform = exports.MqBrokerConfigurationOutputReference = exports.mqBrokerConfigurationToTerraform = exports.MqBrokerInstances = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class MqBrokerInstances extends cdktf.ComplexComputedList {
    // console_url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get consoleUrl() {
        return this.getStringAttribute('console_url');
    }
    // endpoints - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get endpoints() {
        return this.getListAttribute('endpoints');
    }
    // ip_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
}
exports.MqBrokerInstances = MqBrokerInstances;
_a = JSII_RTTI_SYMBOL_1;
MqBrokerInstances[_a] = { fqn: "@cdktf/provider-aws.mq.MqBrokerInstances", version: "3.0.1" };
function mqBrokerConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        revision: cdktf.numberToTerraform(struct.revision),
    };
}
exports.mqBrokerConfigurationToTerraform = mqBrokerConfigurationToTerraform;
/**
 * @stability stable
 */
class MqBrokerConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._revision) {
            hasAnyValues = true;
            internalValueResult.revision = this._revision;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._revision = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._revision = value.revision;
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
    get revision() {
        return this.getNumberAttribute('revision');
    }
    /**
     * @stability stable
     */
    set revision(value) {
        this._revision = value;
    }
    /**
     * @stability stable
     */
    resetRevision() {
        this._revision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get revisionInput() {
        return this._revision;
    }
}
exports.MqBrokerConfigurationOutputReference = MqBrokerConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
MqBrokerConfigurationOutputReference[_b] = { fqn: "@cdktf/provider-aws.mq.MqBrokerConfigurationOutputReference", version: "3.0.1" };
function mqBrokerEncryptionOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        use_aws_owned_key: cdktf.booleanToTerraform(struct.useAwsOwnedKey),
    };
}
exports.mqBrokerEncryptionOptionsToTerraform = mqBrokerEncryptionOptionsToTerraform;
/**
 * @stability stable
 */
class MqBrokerEncryptionOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._kmsKeyId) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._useAwsOwnedKey) {
            hasAnyValues = true;
            internalValueResult.useAwsOwnedKey = this._useAwsOwnedKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKeyId = undefined;
            this._useAwsOwnedKey = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyId = value.kmsKeyId;
            this._useAwsOwnedKey = value.useAwsOwnedKey;
        }
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
    get useAwsOwnedKey() {
        return this.getBooleanAttribute('use_aws_owned_key');
    }
    /**
     * @stability stable
     */
    set useAwsOwnedKey(value) {
        this._useAwsOwnedKey = value;
    }
    /**
     * @stability stable
     */
    resetUseAwsOwnedKey() {
        this._useAwsOwnedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get useAwsOwnedKeyInput() {
        return this._useAwsOwnedKey;
    }
}
exports.MqBrokerEncryptionOptionsOutputReference = MqBrokerEncryptionOptionsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
MqBrokerEncryptionOptionsOutputReference[_c] = { fqn: "@cdktf/provider-aws.mq.MqBrokerEncryptionOptionsOutputReference", version: "3.0.1" };
function mqBrokerLdapServerMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct.hosts),
        role_base: cdktf.stringToTerraform(struct.roleBase),
        role_name: cdktf.stringToTerraform(struct.roleName),
        role_search_matching: cdktf.stringToTerraform(struct.roleSearchMatching),
        role_search_subtree: cdktf.booleanToTerraform(struct.roleSearchSubtree),
        service_account_password: cdktf.stringToTerraform(struct.serviceAccountPassword),
        service_account_username: cdktf.stringToTerraform(struct.serviceAccountUsername),
        user_base: cdktf.stringToTerraform(struct.userBase),
        user_role_name: cdktf.stringToTerraform(struct.userRoleName),
        user_search_matching: cdktf.stringToTerraform(struct.userSearchMatching),
        user_search_subtree: cdktf.booleanToTerraform(struct.userSearchSubtree),
    };
}
exports.mqBrokerLdapServerMetadataToTerraform = mqBrokerLdapServerMetadataToTerraform;
/**
 * @stability stable
 */
class MqBrokerLdapServerMetadataOutputReference extends cdktf.ComplexObject {
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
        if (this._hosts) {
            hasAnyValues = true;
            internalValueResult.hosts = this._hosts;
        }
        if (this._roleBase) {
            hasAnyValues = true;
            internalValueResult.roleBase = this._roleBase;
        }
        if (this._roleName) {
            hasAnyValues = true;
            internalValueResult.roleName = this._roleName;
        }
        if (this._roleSearchMatching) {
            hasAnyValues = true;
            internalValueResult.roleSearchMatching = this._roleSearchMatching;
        }
        if (this._roleSearchSubtree) {
            hasAnyValues = true;
            internalValueResult.roleSearchSubtree = this._roleSearchSubtree;
        }
        if (this._serviceAccountPassword) {
            hasAnyValues = true;
            internalValueResult.serviceAccountPassword = this._serviceAccountPassword;
        }
        if (this._serviceAccountUsername) {
            hasAnyValues = true;
            internalValueResult.serviceAccountUsername = this._serviceAccountUsername;
        }
        if (this._userBase) {
            hasAnyValues = true;
            internalValueResult.userBase = this._userBase;
        }
        if (this._userRoleName) {
            hasAnyValues = true;
            internalValueResult.userRoleName = this._userRoleName;
        }
        if (this._userSearchMatching) {
            hasAnyValues = true;
            internalValueResult.userSearchMatching = this._userSearchMatching;
        }
        if (this._userSearchSubtree) {
            hasAnyValues = true;
            internalValueResult.userSearchSubtree = this._userSearchSubtree;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._hosts = undefined;
            this._roleBase = undefined;
            this._roleName = undefined;
            this._roleSearchMatching = undefined;
            this._roleSearchSubtree = undefined;
            this._serviceAccountPassword = undefined;
            this._serviceAccountUsername = undefined;
            this._userBase = undefined;
            this._userRoleName = undefined;
            this._userSearchMatching = undefined;
            this._userSearchSubtree = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._hosts = value.hosts;
            this._roleBase = value.roleBase;
            this._roleName = value.roleName;
            this._roleSearchMatching = value.roleSearchMatching;
            this._roleSearchSubtree = value.roleSearchSubtree;
            this._serviceAccountPassword = value.serviceAccountPassword;
            this._serviceAccountUsername = value.serviceAccountUsername;
            this._userBase = value.userBase;
            this._userRoleName = value.userRoleName;
            this._userSearchMatching = value.userSearchMatching;
            this._userSearchSubtree = value.userSearchSubtree;
        }
    }
    /**
     * @stability stable
     */
    get hosts() {
        return this.getListAttribute('hosts');
    }
    /**
     * @stability stable
     */
    set hosts(value) {
        this._hosts = value;
    }
    /**
     * @stability stable
     */
    resetHosts() {
        this._hosts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostsInput() {
        return this._hosts;
    }
    /**
     * @stability stable
     */
    get roleBase() {
        return this.getStringAttribute('role_base');
    }
    /**
     * @stability stable
     */
    set roleBase(value) {
        this._roleBase = value;
    }
    /**
     * @stability stable
     */
    resetRoleBase() {
        this._roleBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleBaseInput() {
        return this._roleBase;
    }
    /**
     * @stability stable
     */
    get roleName() {
        return this.getStringAttribute('role_name');
    }
    /**
     * @stability stable
     */
    set roleName(value) {
        this._roleName = value;
    }
    /**
     * @stability stable
     */
    resetRoleName() {
        this._roleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleNameInput() {
        return this._roleName;
    }
    /**
     * @stability stable
     */
    get roleSearchMatching() {
        return this.getStringAttribute('role_search_matching');
    }
    /**
     * @stability stable
     */
    set roleSearchMatching(value) {
        this._roleSearchMatching = value;
    }
    /**
     * @stability stable
     */
    resetRoleSearchMatching() {
        this._roleSearchMatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleSearchMatchingInput() {
        return this._roleSearchMatching;
    }
    /**
     * @stability stable
     */
    get roleSearchSubtree() {
        return this.getBooleanAttribute('role_search_subtree');
    }
    /**
     * @stability stable
     */
    set roleSearchSubtree(value) {
        this._roleSearchSubtree = value;
    }
    /**
     * @stability stable
     */
    resetRoleSearchSubtree() {
        this._roleSearchSubtree = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleSearchSubtreeInput() {
        return this._roleSearchSubtree;
    }
    /**
     * @stability stable
     */
    get serviceAccountPassword() {
        return this.getStringAttribute('service_account_password');
    }
    /**
     * @stability stable
     */
    set serviceAccountPassword(value) {
        this._serviceAccountPassword = value;
    }
    /**
     * @stability stable
     */
    resetServiceAccountPassword() {
        this._serviceAccountPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccountPasswordInput() {
        return this._serviceAccountPassword;
    }
    /**
     * @stability stable
     */
    get serviceAccountUsername() {
        return this.getStringAttribute('service_account_username');
    }
    /**
     * @stability stable
     */
    set serviceAccountUsername(value) {
        this._serviceAccountUsername = value;
    }
    /**
     * @stability stable
     */
    resetServiceAccountUsername() {
        this._serviceAccountUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccountUsernameInput() {
        return this._serviceAccountUsername;
    }
    /**
     * @stability stable
     */
    get userBase() {
        return this.getStringAttribute('user_base');
    }
    /**
     * @stability stable
     */
    set userBase(value) {
        this._userBase = value;
    }
    /**
     * @stability stable
     */
    resetUserBase() {
        this._userBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userBaseInput() {
        return this._userBase;
    }
    /**
     * @stability stable
     */
    get userRoleName() {
        return this.getStringAttribute('user_role_name');
    }
    /**
     * @stability stable
     */
    set userRoleName(value) {
        this._userRoleName = value;
    }
    /**
     * @stability stable
     */
    resetUserRoleName() {
        this._userRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userRoleNameInput() {
        return this._userRoleName;
    }
    /**
     * @stability stable
     */
    get userSearchMatching() {
        return this.getStringAttribute('user_search_matching');
    }
    /**
     * @stability stable
     */
    set userSearchMatching(value) {
        this._userSearchMatching = value;
    }
    /**
     * @stability stable
     */
    resetUserSearchMatching() {
        this._userSearchMatching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userSearchMatchingInput() {
        return this._userSearchMatching;
    }
    /**
     * @stability stable
     */
    get userSearchSubtree() {
        return this.getBooleanAttribute('user_search_subtree');
    }
    /**
     * @stability stable
     */
    set userSearchSubtree(value) {
        this._userSearchSubtree = value;
    }
    /**
     * @stability stable
     */
    resetUserSearchSubtree() {
        this._userSearchSubtree = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userSearchSubtreeInput() {
        return this._userSearchSubtree;
    }
}
exports.MqBrokerLdapServerMetadataOutputReference = MqBrokerLdapServerMetadataOutputReference;
_d = JSII_RTTI_SYMBOL_1;
MqBrokerLdapServerMetadataOutputReference[_d] = { fqn: "@cdktf/provider-aws.mq.MqBrokerLdapServerMetadataOutputReference", version: "3.0.1" };
function mqBrokerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        audit: cdktf.stringToTerraform(struct.audit),
        general: cdktf.booleanToTerraform(struct.general),
    };
}
exports.mqBrokerLogsToTerraform = mqBrokerLogsToTerraform;
/**
 * @stability stable
 */
class MqBrokerLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._audit) {
            hasAnyValues = true;
            internalValueResult.audit = this._audit;
        }
        if (this._general) {
            hasAnyValues = true;
            internalValueResult.general = this._general;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._audit = undefined;
            this._general = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._audit = value.audit;
            this._general = value.general;
        }
    }
    /**
     * @stability stable
     */
    get audit() {
        return this.getStringAttribute('audit');
    }
    /**
     * @stability stable
     */
    set audit(value) {
        this._audit = value;
    }
    /**
     * @stability stable
     */
    resetAudit() {
        this._audit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get auditInput() {
        return this._audit;
    }
    /**
     * @stability stable
     */
    get general() {
        return this.getBooleanAttribute('general');
    }
    /**
     * @stability stable
     */
    set general(value) {
        this._general = value;
    }
    /**
     * @stability stable
     */
    resetGeneral() {
        this._general = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get generalInput() {
        return this._general;
    }
}
exports.MqBrokerLogsOutputReference = MqBrokerLogsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
MqBrokerLogsOutputReference[_e] = { fqn: "@cdktf/provider-aws.mq.MqBrokerLogsOutputReference", version: "3.0.1" };
function mqBrokerMaintenanceWindowStartTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        day_of_week: cdktf.stringToTerraform(struct.dayOfWeek),
        time_of_day: cdktf.stringToTerraform(struct.timeOfDay),
        time_zone: cdktf.stringToTerraform(struct.timeZone),
    };
}
exports.mqBrokerMaintenanceWindowStartTimeToTerraform = mqBrokerMaintenanceWindowStartTimeToTerraform;
/**
 * @stability stable
 */
class MqBrokerMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
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
        if (this._dayOfWeek) {
            hasAnyValues = true;
            internalValueResult.dayOfWeek = this._dayOfWeek;
        }
        if (this._timeOfDay) {
            hasAnyValues = true;
            internalValueResult.timeOfDay = this._timeOfDay;
        }
        if (this._timeZone) {
            hasAnyValues = true;
            internalValueResult.timeZone = this._timeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dayOfWeek = undefined;
            this._timeOfDay = undefined;
            this._timeZone = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dayOfWeek = value.dayOfWeek;
            this._timeOfDay = value.timeOfDay;
            this._timeZone = value.timeZone;
        }
    }
    /**
     * @stability stable
     */
    get dayOfWeek() {
        return this.getStringAttribute('day_of_week');
    }
    /**
     * @stability stable
     */
    set dayOfWeek(value) {
        this._dayOfWeek = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dayOfWeekInput() {
        return this._dayOfWeek;
    }
    /**
     * @stability stable
     */
    get timeOfDay() {
        return this.getStringAttribute('time_of_day');
    }
    /**
     * @stability stable
     */
    set timeOfDay(value) {
        this._timeOfDay = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeOfDayInput() {
        return this._timeOfDay;
    }
    /**
     * @stability stable
     */
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    /**
     * @stability stable
     */
    set timeZone(value) {
        this._timeZone = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeZoneInput() {
        return this._timeZone;
    }
}
exports.MqBrokerMaintenanceWindowStartTimeOutputReference = MqBrokerMaintenanceWindowStartTimeOutputReference;
_f = JSII_RTTI_SYMBOL_1;
MqBrokerMaintenanceWindowStartTimeOutputReference[_f] = { fqn: "@cdktf/provider-aws.mq.MqBrokerMaintenanceWindowStartTimeOutputReference", version: "3.0.1" };
function mqBrokerUserToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        console_access: cdktf.booleanToTerraform(struct.consoleAccess),
        groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.groups),
        password: cdktf.stringToTerraform(struct.password),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.mqBrokerUserToTerraform = mqBrokerUserToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker}.
 *
 * @stability stable
 */
class MqBroker extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_mq_broker',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // configuration - computed: false, optional: true, required: false
        this._configuration = new MqBrokerConfigurationOutputReference(this, "configuration", true);
        // encryption_options - computed: false, optional: true, required: false
        this._encryptionOptions = new MqBrokerEncryptionOptionsOutputReference(this, "encryption_options", true);
        // ldap_server_metadata - computed: false, optional: true, required: false
        this._ldapServerMetadata = new MqBrokerLdapServerMetadataOutputReference(this, "ldap_server_metadata", true);
        // logs - computed: false, optional: true, required: false
        this._logs = new MqBrokerLogsOutputReference(this, "logs", true);
        // maintenance_window_start_time - computed: false, optional: true, required: false
        this._maintenanceWindowStartTime = new MqBrokerMaintenanceWindowStartTimeOutputReference(this, "maintenance_window_start_time", true);
        this._applyImmediately = config.applyImmediately;
        this._authenticationStrategy = config.authenticationStrategy;
        this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        this._brokerName = config.brokerName;
        this._deploymentMode = config.deploymentMode;
        this._engineType = config.engineType;
        this._engineVersion = config.engineVersion;
        this._hostInstanceType = config.hostInstanceType;
        this._publiclyAccessible = config.publiclyAccessible;
        this._securityGroups = config.securityGroups;
        this._storageType = config.storageType;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._configuration.internalValue = config.configuration;
        this._encryptionOptions.internalValue = config.encryptionOptions;
        this._ldapServerMetadata.internalValue = config.ldapServerMetadata;
        this._logs.internalValue = config.logs;
        this._maintenanceWindowStartTime.internalValue = config.maintenanceWindowStartTime;
        this._user = config.user;
    }
    /**
     * @stability stable
     */
    get applyImmediately() {
        return this.getBooleanAttribute('apply_immediately');
    }
    /**
     * @stability stable
     */
    set applyImmediately(value) {
        this._applyImmediately = value;
    }
    /**
     * @stability stable
     */
    resetApplyImmediately() {
        this._applyImmediately = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applyImmediatelyInput() {
        return this._applyImmediately;
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
    get authenticationStrategy() {
        return this.getStringAttribute('authentication_strategy');
    }
    /**
     * @stability stable
     */
    set authenticationStrategy(value) {
        this._authenticationStrategy = value;
    }
    /**
     * @stability stable
     */
    resetAuthenticationStrategy() {
        this._authenticationStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authenticationStrategyInput() {
        return this._authenticationStrategy;
    }
    /**
     * @stability stable
     */
    get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }
    /**
     * @stability stable
     */
    set autoMinorVersionUpgrade(value) {
        this._autoMinorVersionUpgrade = value;
    }
    /**
     * @stability stable
     */
    resetAutoMinorVersionUpgrade() {
        this._autoMinorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoMinorVersionUpgradeInput() {
        return this._autoMinorVersionUpgrade;
    }
    /**
     * @stability stable
     */
    get brokerName() {
        return this.getStringAttribute('broker_name');
    }
    /**
     * @stability stable
     */
    set brokerName(value) {
        this._brokerName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get brokerNameInput() {
        return this._brokerName;
    }
    /**
     * @stability stable
     */
    get deploymentMode() {
        return this.getStringAttribute('deployment_mode');
    }
    /**
     * @stability stable
     */
    set deploymentMode(value) {
        this._deploymentMode = value;
    }
    /**
     * @stability stable
     */
    resetDeploymentMode() {
        this._deploymentMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deploymentModeInput() {
        return this._deploymentMode;
    }
    /**
     * @stability stable
     */
    get engineType() {
        return this.getStringAttribute('engine_type');
    }
    /**
     * @stability stable
     */
    set engineType(value) {
        this._engineType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineTypeInput() {
        return this._engineType;
    }
    /**
     * @stability stable
     */
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    /**
     * @stability stable
     */
    set engineVersion(value) {
        this._engineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineVersionInput() {
        return this._engineVersion;
    }
    /**
     * @stability stable
     */
    get hostInstanceType() {
        return this.getStringAttribute('host_instance_type');
    }
    /**
     * @stability stable
     */
    set hostInstanceType(value) {
        this._hostInstanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hostInstanceTypeInput() {
        return this._hostInstanceType;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // instances - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    instances(index) {
        return new MqBrokerInstances(this, 'instances', index);
    }
    /**
     * @stability stable
     */
    get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    /**
     * @stability stable
     */
    set publiclyAccessible(value) {
        this._publiclyAccessible = value;
    }
    /**
     * @stability stable
     */
    resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get publiclyAccessibleInput() {
        return this._publiclyAccessible;
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
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    /**
     * @stability stable
     */
    set storageType(value) {
        this._storageType = value;
    }
    /**
     * @stability stable
     */
    resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageTypeInput() {
        return this._storageType;
    }
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    /**
     * @stability stable
     */
    set subnetIds(value) {
        this._subnetIds = value;
    }
    /**
     * @stability stable
     */
    resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetIdsInput() {
        return this._subnetIds;
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
    get configuration() {
        return this._configuration;
    }
    /**
     * @stability stable
     */
    putConfiguration(value) {
        this._configuration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationInput() {
        return this._configuration.internalValue;
    }
    /**
     * @stability stable
     */
    get encryptionOptions() {
        return this._encryptionOptions;
    }
    /**
     * @stability stable
     */
    putEncryptionOptions(value) {
        this._encryptionOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionOptions() {
        this._encryptionOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionOptionsInput() {
        return this._encryptionOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get ldapServerMetadata() {
        return this._ldapServerMetadata;
    }
    /**
     * @stability stable
     */
    putLdapServerMetadata(value) {
        this._ldapServerMetadata.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLdapServerMetadata() {
        this._ldapServerMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ldapServerMetadataInput() {
        return this._ldapServerMetadata.internalValue;
    }
    /**
     * @stability stable
     */
    get logs() {
        return this._logs;
    }
    /**
     * @stability stable
     */
    putLogs(value) {
        this._logs.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLogs() {
        this._logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logsInput() {
        return this._logs.internalValue;
    }
    /**
     * @stability stable
     */
    get maintenanceWindowStartTime() {
        return this._maintenanceWindowStartTime;
    }
    /**
     * @stability stable
     */
    putMaintenanceWindowStartTime(value) {
        this._maintenanceWindowStartTime.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMaintenanceWindowStartTime() {
        this._maintenanceWindowStartTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maintenanceWindowStartTimeInput() {
        return this._maintenanceWindowStartTime.internalValue;
    }
    /**
     * @stability stable
     */
    get user() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('user');
    }
    /**
     * @stability stable
     */
    set user(value) {
        this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userInput() {
        return this._user;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            authentication_strategy: cdktf.stringToTerraform(this._authenticationStrategy),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            broker_name: cdktf.stringToTerraform(this._brokerName),
            deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
            engine_type: cdktf.stringToTerraform(this._engineType),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            host_instance_type: cdktf.stringToTerraform(this._hostInstanceType),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
            storage_type: cdktf.stringToTerraform(this._storageType),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            configuration: mqBrokerConfigurationToTerraform(this._configuration.internalValue),
            encryption_options: mqBrokerEncryptionOptionsToTerraform(this._encryptionOptions.internalValue),
            ldap_server_metadata: mqBrokerLdapServerMetadataToTerraform(this._ldapServerMetadata.internalValue),
            logs: mqBrokerLogsToTerraform(this._logs.internalValue),
            maintenance_window_start_time: mqBrokerMaintenanceWindowStartTimeToTerraform(this._maintenanceWindowStartTime.internalValue),
            user: cdktf.listMapper(mqBrokerUserToTerraform)(this._user),
        };
    }
}
exports.MqBroker = MqBroker;
_g = JSII_RTTI_SYMBOL_1;
MqBroker[_g] = { fqn: "@cdktf/provider-aws.mq.MqBroker", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
MqBroker.tfResourceType = "aws_mq_broker";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXEtYnJva2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21xL21xLWJyb2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQTZDL0IsTUFBYSxpQkFBa0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlELGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELCtEQUErRDs7OztJQUMvRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7QUFmSCw4Q0FnQkM7OztBQVFELFNBQWdCLGdDQUFnQyxDQUFDLE1BQXFFO0lBQ3BILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3BELENBQUE7QUFDSCxDQUFDO0FBUkQsNEVBUUM7Ozs7QUFFRCxNQUFhLG9DQUFxQyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTNFLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMs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QUMsYUFBYSxDQUFDO1lBQzVILElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1RCxDQUFDO0lBQ0osQ0FBQzs7QUEvWUgsNEJBZ1pDOzs7QUE5WUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyx1QkFBYyxHQUFXLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgTXFCcm9rZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBseUltbWVkaWF0ZWx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dGhlbnRpY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b01pbm9yVmVyc2lvblVwZ3JhZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnJva2VyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVwbG95bWVudE1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5naW5lVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZ2luZVZlcnNpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhvc3RJbnN0YW5jZVR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHVibGljbHlBY2Nlc3NpYmxlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0b3JhZ2VUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdWJuZXRJZHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb24/OiBNcUJyb2tlckNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGlvbk9wdGlvbnM/OiBNcUJyb2tlckVuY3J5cHRpb25PcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxkYXBTZXJ2ZXJNZXRhZGF0YT86IE1xQnJva2VyTGRhcFNlcnZlck1ldGFkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ3M/OiBNcUJyb2tlckxvZ3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWU/OiBNcUJyb2tlck1haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXI6IE1xQnJva2VyVXNlcltdO1xufVxuZXhwb3J0IGNsYXNzIE1xQnJva2VySW5zdGFuY2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29uc29sZV91cmwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25zb2xlVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uc29sZV91cmwnKTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdlbmRwb2ludHMnKTtcbiAgfVxuXG4gIC8vIGlwX2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpcEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpcF9hZGRyZXNzJyk7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXFCcm9rZXJDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXZpc2lvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1xQnJva2VyQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IE1xQnJva2VyQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IE1xQnJva2VyQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJldmlzaW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnJldmlzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXFCcm9rZXJDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1xQnJva2VyQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmV2aXNpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJldmlzaW9uID0gdGhpcy5fcmV2aXNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNcUJyb2tlckNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXZpc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmV2aXNpb24gPSB2YWx1ZS5yZXZpc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcmV2aXNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXZpc2lvbj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcmV2aXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyZXZpc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmV2aXNpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JldmlzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV2aXNpb24oKSB7XG4gICAgdGhpcy5fcmV2aXNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldmlzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldmlzaW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1xQnJva2VyRW5jcnlwdGlvbk9wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VBd3NPd25lZEtleT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1xQnJva2VyRW5jcnlwdGlvbk9wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNcUJyb2tlckVuY3J5cHRpb25PcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgTXFCcm9rZXJFbmNyeXB0aW9uT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGttc19rZXlfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5SWQpLFxuICAgIHVzZV9hd3Nfb3duZWRfa2V5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51c2VBd3NPd25lZEtleSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1xQnJva2VyRW5jcnlwdGlvbk9wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTXFCcm9rZXJFbmNyeXB0aW9uT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUlkID0gdGhpcy5fa21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VBd3NPd25lZEtleSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlQXdzT3duZWRLZXkgPSB0aGlzLl91c2VBd3NPd25lZEtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IE1xQnJva2VyRW5jcnlwdGlvbk9wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZUF3c093bmVkS2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlLmttc0tleUlkO1xuICAgICAgdGhpcy5fdXNlQXdzT3duZWRLZXkgPSB2YWx1ZS51c2VBd3NPd25lZEtleTtcbiAgICB9XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5SWQoKSB7XG4gICAgdGhpcy5fa21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUlkO1xuICB9XG5cbiAgLy8gdXNlX2F3c19vd25lZF9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlQXdzT3duZWRLZXk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHVzZUF3c093bmVkS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VzZV9hd3Nfb3duZWRfa2V5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlQXdzT3duZWRLZXkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZUF3c093bmVkS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlQXdzT3duZWRLZXkoKSB7XG4gICAgdGhpcy5fdXNlQXdzT3duZWRLZXkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZUF3c093bmVkS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUF3c093bmVkS2V5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1xQnJva2VyTGRhcFNlcnZlck1ldGFkYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBob3N0cz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUJhc2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlU2VhcmNoTWF0Y2hpbmc/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVTZWFyY2hTdWJ0cmVlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZUFjY291bnRQYXNzd29yZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VBY2NvdW50VXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyQmFzZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyUm9sZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlclNlYXJjaE1hdGNoaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyU2VhcmNoU3VidHJlZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1xQnJva2VyTGRhcFNlcnZlck1ldGFkYXRhVG9UZXJyYWZvcm0oc3RydWN0PzogTXFCcm9rZXJMZGFwU2VydmVyTWV0YWRhdGFPdXRwdXRSZWZlcmVuY2UgfCBNcUJyb2tlckxkYXBTZXJ2ZXJNZXRhZGF0YSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhvc3RzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhvc3RzKSxcbiAgICByb2xlX2Jhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUJhc2UpLFxuICAgIHJvbGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlTmFtZSksXG4gICAgcm9sZV9zZWFyY2hfbWF0Y2hpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZVNlYXJjaE1hdGNoaW5nKSxcbiAgICByb2xlX3NlYXJjaF9zdWJ0cmVlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlU2VhcmNoU3VidHJlZSksXG4gICAgc2VydmljZV9hY2NvdW50X3Bhc3N3b3JkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VBY2NvdW50UGFzc3dvcmQpLFxuICAgIHNlcnZpY2VfYWNjb3VudF91c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJ2aWNlQWNjb3VudFVzZXJuYW1lKSxcbiAgICB1c2VyX2Jhc2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlckJhc2UpLFxuICAgIHVzZXJfcm9sZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJSb2xlTmFtZSksXG4gICAgdXNlcl9zZWFyY2hfbWF0Y2hpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlclNlYXJjaE1hdGNoaW5nKSxcbiAgICB1c2VyX3NlYXJjaF9zdWJ0cmVlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS51c2VyU2VhcmNoU3VidHJlZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1xQnJva2VyTGRhcFNlcnZlck1ldGFkYXRhT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IE1xQnJva2VyTGRhcFNlcnZlck1ldGFkYXRhIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9ob3N0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaG9zdHMgPSB0aGlzLl9ob3N0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVCYXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb2xlQmFzZSA9IHRoaXMuX3JvbGVCYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVOYW1lID0gdGhpcy5fcm9sZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb2xlU2VhcmNoTWF0Y2hpbmcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVTZWFyY2hNYXRjaGluZyA9IHRoaXMuX3JvbGVTZWFyY2hNYXRjaGluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVTZWFyY2hTdWJ0cmVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb2xlU2VhcmNoU3VidHJlZSA9IHRoaXMuX3JvbGVTZWFyY2hTdWJ0cmVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZUFjY291bnRQYXNzd29yZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VydmljZUFjY291bnRQYXNzd29yZCA9IHRoaXMuX3NlcnZpY2VBY2NvdW50UGFzc3dvcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJ2aWNlQWNjb3VudFVzZXJuYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJ2aWNlQWNjb3VudFVzZXJuYW1lID0gdGhpcy5fc2VydmljZUFjY291bnRVc2VybmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJCYXNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyQmFzZSA9IHRoaXMuX3VzZXJCYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlclJvbGVOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyUm9sZU5hbWUgPSB0aGlzLl91c2VyUm9sZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VyU2VhcmNoTWF0Y2hpbmcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVzZXJTZWFyY2hNYXRjaGluZyA9IHRoaXMuX3VzZXJTZWFyY2hNYXRjaGluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VzZXJTZWFyY2hTdWJ0cmVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51c2VyU2VhcmNoU3VidHJlZSA9IHRoaXMuX3VzZXJTZWFyY2hTdWJ0cmVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTXFCcm9rZXJMZGFwU2VydmVyTWV0YWRhdGEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9ob3N0cyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVCYXNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlU2VhcmNoTWF0Y2hpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlU2VhcmNoU3VidHJlZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZpY2VBY2NvdW50UGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlQWNjb3VudFVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXNlckJhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VyUm9sZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VyU2VhcmNoTWF0Y2hpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91c2VyU2VhcmNoU3VidHJlZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faG9zdHMgPSB2YWx1ZS5ob3N0cztcbiAgICAgIHRoaXMuX3JvbGVCYXNlID0gdmFsdWUucm9sZUJhc2U7XG4gICAgICB0aGlzLl9yb2xlTmFtZSA9IHZhbHVlLnJvbGVOYW1lO1xuICAgICAgdGhpcy5fcm9sZVNlYXJjaE1hdGNoaW5nID0gdmFsdWUucm9sZVNlYXJjaE1hdGNoaW5nO1xuICAgICAgdGhpcy5fcm9sZVNlYXJjaFN1YnRyZWUgPSB2YWx1ZS5yb2xlU2VhcmNoU3VidHJlZTtcbiAgICAgIHRoaXMuX3NlcnZpY2VBY2NvdW50UGFzc3dvcmQgPSB2YWx1ZS5zZXJ2aWNlQWNjb3VudFBhc3N3b3JkO1xuICAgICAgdGhpcy5fc2VydmljZUFjY291bnRVc2VybmFtZSA9IHZhbHVlLnNlcnZpY2VBY2NvdW50VXNlcm5hbWU7XG4gICAgICB0aGlzLl91c2VyQmFzZSA9IHZhbHVlLnVzZXJCYXNlO1xuICAgICAgdGhpcy5fdXNlclJvbGVOYW1lID0gdmFsdWUudXNlclJvbGVOYW1lO1xuICAgICAgdGhpcy5fdXNlclNlYXJjaE1hdGNoaW5nID0gdmFsdWUudXNlclNlYXJjaE1hdGNoaW5nO1xuICAgICAgdGhpcy5fdXNlclNlYXJjaFN1YnRyZWUgPSB2YWx1ZS51c2VyU2VhcmNoU3VidHJlZTtcbiAgICB9XG4gIH1cblxuICAvLyBob3N0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ob3N0cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBob3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdob3N0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgaG9zdHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faG9zdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIb3N0cygpIHtcbiAgICB0aGlzLl9ob3N0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdHM7XG4gIH1cblxuICAvLyByb2xlX2Jhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZUJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVCYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9iYXNlJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQmFzZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUJhc2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb2xlQmFzZSgpIHtcbiAgICB0aGlzLl9yb2xlQmFzZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUJhc2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUJhc2U7XG4gIH1cblxuICAvLyByb2xlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcm9sZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb2xlTmFtZSgpIHtcbiAgICB0aGlzLl9yb2xlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZU5hbWU7XG4gIH1cblxuICAvLyByb2xlX3NlYXJjaF9tYXRjaGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb2xlU2VhcmNoTWF0Y2hpbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVTZWFyY2hNYXRjaGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfc2VhcmNoX21hdGNoaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlU2VhcmNoTWF0Y2hpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVTZWFyY2hNYXRjaGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJvbGVTZWFyY2hNYXRjaGluZygpIHtcbiAgICB0aGlzLl9yb2xlU2VhcmNoTWF0Y2hpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVTZWFyY2hNYXRjaGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlU2VhcmNoTWF0Y2hpbmc7XG4gIH1cblxuICAvLyByb2xlX3NlYXJjaF9zdWJ0cmVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JvbGVTZWFyY2hTdWJ0cmVlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByb2xlU2VhcmNoU3VidHJlZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyb2xlX3NlYXJjaF9zdWJ0cmVlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZVNlYXJjaFN1YnRyZWUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JvbGVTZWFyY2hTdWJ0cmVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Um9sZVNlYXJjaFN1YnRyZWUoKSB7XG4gICAgdGhpcy5fcm9sZVNlYXJjaFN1YnRyZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVTZWFyY2hTdWJ0cmVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVTZWFyY2hTdWJ0cmVlO1xuICB9XG5cbiAgLy8gc2VydmljZV9hY2NvdW50X3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZpY2VBY2NvdW50UGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBY2NvdW50UGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2FjY291bnRfcGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VBY2NvdW50UGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VBY2NvdW50UGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlQWNjb3VudFBhc3N3b3JkKCkge1xuICAgIHRoaXMuX3NlcnZpY2VBY2NvdW50UGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBY2NvdW50UGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUFjY291bnRQYXNzd29yZDtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfYWNjb3VudF91c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlQWNjb3VudFVzZXJuYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjb3VudFVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9hY2NvdW50X3VzZXJuYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlQWNjb3VudFVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjb3VudFVzZXJuYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmljZUFjY291bnRVc2VybmFtZSgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjb3VudFVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjb3VudFVzZXJuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VBY2NvdW50VXNlcm5hbWU7XG4gIH1cblxuICAvLyB1c2VyX2Jhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlckJhc2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJCYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9iYXNlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyQmFzZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlckJhc2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VyQmFzZSgpIHtcbiAgICB0aGlzLl91c2VyQmFzZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlckJhc2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckJhc2U7XG4gIH1cblxuICAvLyB1c2VyX3JvbGVfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VyUm9sZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJSb2xlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfcm9sZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyUm9sZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJSb2xlTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJSb2xlTmFtZSgpIHtcbiAgICB0aGlzLl91c2VyUm9sZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJSb2xlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyUm9sZU5hbWU7XG4gIH1cblxuICAvLyB1c2VyX3NlYXJjaF9tYXRjaGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VyU2VhcmNoTWF0Y2hpbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJTZWFyY2hNYXRjaGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfc2VhcmNoX21hdGNoaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyU2VhcmNoTWF0Y2hpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJTZWFyY2hNYXRjaGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJTZWFyY2hNYXRjaGluZygpIHtcbiAgICB0aGlzLl91c2VyU2VhcmNoTWF0Y2hpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJTZWFyY2hNYXRjaGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VhcmNoTWF0Y2hpbmc7XG4gIH1cblxuICAvLyB1c2VyX3NlYXJjaF9zdWJ0cmVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJTZWFyY2hTdWJ0cmVlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB1c2VyU2VhcmNoU3VidHJlZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd1c2VyX3NlYXJjaF9zdWJ0cmVlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlclNlYXJjaFN1YnRyZWUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3VzZXJTZWFyY2hTdWJ0cmVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlclNlYXJjaFN1YnRyZWUoKSB7XG4gICAgdGhpcy5fdXNlclNlYXJjaFN1YnRyZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJTZWFyY2hTdWJ0cmVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTZWFyY2hTdWJ0cmVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1xQnJva2VyTG9ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXVkaXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdlbmVyYWw/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtcUJyb2tlckxvZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBNcUJyb2tlckxvZ3NPdXRwdXRSZWZlcmVuY2UgfCBNcUJyb2tlckxvZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdWRpdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdWRpdCksXG4gICAgZ2VuZXJhbDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZ2VuZXJhbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1xQnJva2VyTG9nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBNcUJyb2tlckxvZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1ZGl0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hdWRpdCA9IHRoaXMuX2F1ZGl0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZ2VuZXJhbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZ2VuZXJhbCA9IHRoaXMuX2dlbmVyYWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBNcUJyb2tlckxvZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdWRpdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dlbmVyYWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1ZGl0ID0gdmFsdWUuYXVkaXQ7XG4gICAgICB0aGlzLl9nZW5lcmFsID0gdmFsdWUuZ2VuZXJhbDtcbiAgICB9XG4gIH1cblxuICAvLyBhdWRpdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdWRpdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXVkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdWRpdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXVkaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1ZGl0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXVkaXQoKSB7XG4gICAgdGhpcy5fYXVkaXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1ZGl0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGl0O1xuICB9XG5cbiAgLy8gZ2VuZXJhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9nZW5lcmFsPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBnZW5lcmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2dlbmVyYWwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBnZW5lcmFsKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9nZW5lcmFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2VuZXJhbCgpIHtcbiAgICB0aGlzLl9nZW5lcmFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBnZW5lcmFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXFCcm9rZXJNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF5T2ZXZWVrOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZU9mRGF5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lWm9uZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXFCcm9rZXJNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZVRvVGVycmFmb3JtKHN0cnVjdD86IE1xQnJva2VyTWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWVPdXRwdXRSZWZlcmVuY2UgfCBNcUJyb2tlck1haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF5X29mX3dlZWs6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF5T2ZXZWVrKSxcbiAgICB0aW1lX29mX2RheTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lT2ZEYXkpLFxuICAgIHRpbWVfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lWm9uZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1xQnJva2VyTWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTXFCcm9rZXJNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGF5T2ZXZWVrKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXlPZldlZWsgPSB0aGlzLl9kYXlPZldlZWs7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lT2ZEYXkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRpbWVPZkRheSA9IHRoaXMuX3RpbWVPZkRheTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVab25lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lWm9uZSA9IHRoaXMuX3RpbWVab25lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTXFCcm9rZXJNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RheU9mV2VlayA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVPZkRheSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVab25lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kYXlPZldlZWsgPSB2YWx1ZS5kYXlPZldlZWs7XG4gICAgICB0aGlzLl90aW1lT2ZEYXkgPSB2YWx1ZS50aW1lT2ZEYXk7XG4gICAgICB0aGlzLl90aW1lWm9uZSA9IHZhbHVlLnRpbWVab25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRheV9vZl93ZWVrIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RheU9mV2Vlaz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGF5T2ZXZWVrKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF5X29mX3dlZWsnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRheU9mV2Vlayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF5T2ZXZWVrID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRheU9mV2Vla0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXlPZldlZWs7XG4gIH1cblxuICAvLyB0aW1lX29mX2RheSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90aW1lT2ZEYXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRpbWVPZkRheSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfb2ZfZGF5Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0aW1lT2ZEYXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpbWVPZkRheSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lT2ZEYXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZU9mRGF5O1xuICB9XG5cbiAgLy8gdGltZV96b25lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RpbWVab25lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0aW1lWm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfem9uZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZVpvbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpbWVab25lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVab25lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVab25lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIE1xQnJva2VyVXNlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uc29sZUFjY2Vzcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3Vwcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1xQnJva2VyVXNlclRvVGVycmFmb3JtKHN0cnVjdD86IE1xQnJva2VyVXNlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnNvbGVfYWNjZXNzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jb25zb2xlQWNjZXNzKSxcbiAgICBncm91cHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuZ3JvdXBzKSxcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBNcUJyb2tlciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19tcV9icm9rZXJcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IE1xQnJva2VyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbXFfYnJva2VyJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkgPSBjb25maWcuYXBwbHlJbW1lZGlhdGVseTtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblN0cmF0ZWd5ID0gY29uZmlnLmF1dGhlbnRpY2F0aW9uU3RyYXRlZ3k7XG4gICAgdGhpcy5fYXV0b01pbm9yVmVyc2lvblVwZ3JhZGUgPSBjb25maWcuYXV0b01pbm9yVmVyc2lvblVwZ3JhZGU7XG4gICAgdGhpcy5fYnJva2VyTmFtZSA9IGNvbmZpZy5icm9rZXJOYW1lO1xuICAgIHRoaXMuX2RlcGxveW1lbnRNb2RlID0gY29uZmlnLmRlcGxveW1lbnRNb2RlO1xuICAgIHRoaXMuX2VuZ2luZVR5cGUgPSBjb25maWcuZW5naW5lVHlwZTtcbiAgICB0aGlzLl9lbmdpbmVWZXJzaW9uID0gY29uZmlnLmVuZ2luZVZlcnNpb247XG4gICAgdGhpcy5faG9zdEluc3RhbmNlVHlwZSA9IGNvbmZpZy5ob3N0SW5zdGFuY2VUeXBlO1xuICAgIHRoaXMuX3B1YmxpY2x5QWNjZXNzaWJsZSA9IGNvbmZpZy5wdWJsaWNseUFjY2Vzc2libGU7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cHMgPSBjb25maWcuc2VjdXJpdHlHcm91cHM7XG4gICAgdGhpcy5fc3RvcmFnZVR5cGUgPSBjb25maWcuc3RvcmFnZVR5cGU7XG4gICAgdGhpcy5fc3VibmV0SWRzID0gY29uZmlnLnN1Ym5ldElkcztcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX2VuY3J5cHRpb25PcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuZW5jcnlwdGlvbk9wdGlvbnM7XG4gICAgdGhpcy5fbGRhcFNlcnZlck1ldGFkYXRhLmludGVybmFsVmFsdWUgPSBjb25maWcubGRhcFNlcnZlck1ldGFkYXRhO1xuICAgIHRoaXMuX2xvZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5sb2dzO1xuICAgIHRoaXMuX21haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lLmludGVybmFsVmFsdWUgPSBjb25maWcubWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWU7XG4gICAgdGhpcy5fdXNlciA9IGNvbmZpZy51c2VyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcHBseV9pbW1lZGlhdGVseSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBseUltbWVkaWF0ZWx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhcHBseUltbWVkaWF0ZWx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FwcGx5X2ltbWVkaWF0ZWx5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbHlJbW1lZGlhdGVseSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYXBwbHlJbW1lZGlhdGVseSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGx5SW1tZWRpYXRlbHkoKSB7XG4gICAgdGhpcy5fYXBwbHlJbW1lZGlhdGVseSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbHlJbW1lZGlhdGVseUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBseUltbWVkaWF0ZWx5O1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhdXRoZW50aWNhdGlvbl9zdHJhdGVneSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU3RyYXRlZ3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF1dGhlbnRpY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRoZW50aWNhdGlvbl9zdHJhdGVneScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0aGVudGljYXRpb25TdHJhdGVneSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25TdHJhdGVneSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhlbnRpY2F0aW9uU3RyYXRlZ3koKSB7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25TdHJhdGVneSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25TdHJhdGVneUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoZW50aWNhdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgLy8gYXV0b19taW5vcl92ZXJzaW9uX3VwZ3JhZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0b01pbm9yVmVyc2lvblVwZ3JhZGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGF1dG9NaW5vclZlcnNpb25VcGdyYWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fbWlub3JfdmVyc2lvbl91cGdyYWRlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b01pbm9yVmVyc2lvblVwZ3JhZGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2F1dG9NaW5vclZlcnNpb25VcGdyYWRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0b01pbm9yVmVyc2lvblVwZ3JhZGUoKSB7XG4gICAgdGhpcy5fYXV0b01pbm9yVmVyc2lvblVwZ3JhZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9NaW5vclZlcnNpb25VcGdyYWRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9NaW5vclZlcnNpb25VcGdyYWRlO1xuICB9XG5cbiAgLy8gYnJva2VyX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnJva2VyTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnJva2VyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Jyb2tlcl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBicm9rZXJOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9icm9rZXJOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJyb2tlck5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnJva2VyTmFtZTtcbiAgfVxuXG4gIC8vIGRlcGxveW1lbnRfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXBsb3ltZW50TW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXBsb3ltZW50X21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlcGxveW1lbnRNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXBsb3ltZW50TW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlcGxveW1lbnRNb2RlKCkge1xuICAgIHRoaXMuX2RlcGxveW1lbnRNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXBsb3ltZW50TW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXBsb3ltZW50TW9kZTtcbiAgfVxuXG4gIC8vIGVuZ2luZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuZ2luZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZ2luZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW5naW5lVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lVHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZVR5cGU7XG4gIH1cblxuICAvLyBlbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmdpbmVWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZ2luZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmVWZXJzaW9uO1xuICB9XG5cbiAgLy8gaG9zdF9pbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hvc3RJbnN0YW5jZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGhvc3RJbnN0YW5jZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdob3N0X2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGhvc3RJbnN0YW5jZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3RJbnN0YW5jZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaG9zdEluc3RhbmNlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0SW5zdGFuY2VUeXBlO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgaW5zdGFuY2VzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IE1xQnJva2VySW5zdGFuY2VzKHRoaXMsICdpbnN0YW5jZXMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBwdWJsaWNseV9hY2Nlc3NpYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3B1YmxpY2x5QWNjZXNzaWJsZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcHVibGljbHlBY2Nlc3NpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3B1YmxpY2x5X2FjY2Vzc2libGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwdWJsaWNseUFjY2Vzc2libGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3B1YmxpY2x5QWNjZXNzaWJsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFB1YmxpY2x5QWNjZXNzaWJsZSgpIHtcbiAgICB0aGlzLl9wdWJsaWNseUFjY2Vzc2libGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHB1YmxpY2x5QWNjZXNzaWJsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wdWJsaWNseUFjY2Vzc2libGU7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2VjdXJpdHlfZ3JvdXBzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eUdyb3Vwcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3Vwc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWN1cml0eUdyb3VwcztcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdG9yYWdlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3RvcmFnZVR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0b3JhZ2VUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZVR5cGUoKSB7XG4gICAgdGhpcy5fc3RvcmFnZVR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VUeXBlO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N1Ym5ldElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0SWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1Ym5ldElkcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN1Ym5ldElkcygpIHtcbiAgICB0aGlzLl9zdWJuZXRJZHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZHM7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB0YWdzX2FsbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3NBbGwoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3NfYWxsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnc0FsbCh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3NBbGwoKSB7XG4gICAgdGhpcy5fdGFnc0FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0FsbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzQWxsO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9uID0gbmV3IE1xQnJva2VyQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dENvbmZpZ3VyYXRpb24odmFsdWU6IE1xQnJva2VyQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmNyeXB0aW9uT3B0aW9ucyA9IG5ldyBNcUJyb2tlckVuY3J5cHRpb25PcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImVuY3J5cHRpb25fb3B0aW9uc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGlvbk9wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dEVuY3J5cHRpb25PcHRpb25zKHZhbHVlOiBNcUJyb2tlckVuY3J5cHRpb25PcHRpb25zKSB7XG4gICAgdGhpcy5fZW5jcnlwdGlvbk9wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRpb25PcHRpb25zKCkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25PcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25PcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25PcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBsZGFwX3NlcnZlcl9tZXRhZGF0YSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sZGFwU2VydmVyTWV0YWRhdGEgPSBuZXcgTXFCcm9rZXJMZGFwU2VydmVyTWV0YWRhdGFPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibGRhcF9zZXJ2ZXJfbWV0YWRhdGFcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbGRhcFNlcnZlck1ldGFkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9sZGFwU2VydmVyTWV0YWRhdGE7XG4gIH1cbiAgcHVibGljIHB1dExkYXBTZXJ2ZXJNZXRhZGF0YSh2YWx1ZTogTXFCcm9rZXJMZGFwU2VydmVyTWV0YWRhdGEpIHtcbiAgICB0aGlzLl9sZGFwU2VydmVyTWV0YWRhdGEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExkYXBTZXJ2ZXJNZXRhZGF0YSgpIHtcbiAgICB0aGlzLl9sZGFwU2VydmVyTWV0YWRhdGEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGRhcFNlcnZlck1ldGFkYXRhSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xkYXBTZXJ2ZXJNZXRhZGF0YS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbG9ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dzID0gbmV3IE1xQnJva2VyTG9nc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsb2dzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxvZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ3M7XG4gIH1cbiAgcHVibGljIHB1dExvZ3ModmFsdWU6IE1xQnJva2VyTG9ncykge1xuICAgIHRoaXMuX2xvZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ3MoKSB7XG4gICAgdGhpcy5fbG9ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG1haW50ZW5hbmNlX3dpbmRvd19zdGFydF90aW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lID0gbmV3IE1xQnJva2VyTWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0X3RpbWVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lO1xuICB9XG4gIHB1YmxpYyBwdXRNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZSh2YWx1ZTogTXFCcm9rZXJNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZSkge1xuICAgIHRoaXMuX21haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZSgpIHtcbiAgICB0aGlzLl9tYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdXNlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VyPzogTXFCcm9rZXJVc2VyW107IFxuICBwdWJsaWMgZ2V0IHVzZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3VzZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VyKHZhbHVlOiBNcUJyb2tlclVzZXJbXSkge1xuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBseV9pbW1lZGlhdGVseTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FwcGx5SW1tZWRpYXRlbHkpLFxuICAgICAgYXV0aGVudGljYXRpb25fc3RyYXRlZ3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F1dGhlbnRpY2F0aW9uU3RyYXRlZ3kpLFxuICAgICAgYXV0b19taW5vcl92ZXJzaW9uX3VwZ3JhZGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9hdXRvTWlub3JWZXJzaW9uVXBncmFkZSksXG4gICAgICBicm9rZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnJva2VyTmFtZSksXG4gICAgICBkZXBsb3ltZW50X21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlcGxveW1lbnRNb2RlKSxcbiAgICAgIGVuZ2luZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVUeXBlKSxcbiAgICAgIGVuZ2luZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmdpbmVWZXJzaW9uKSxcbiAgICAgIGhvc3RfaW5zdGFuY2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faG9zdEluc3RhbmNlVHlwZSksXG4gICAgICBwdWJsaWNseV9hY2Nlc3NpYmxlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcHVibGljbHlBY2Nlc3NpYmxlKSxcbiAgICAgIHNlY3VyaXR5X2dyb3VwczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fc2VjdXJpdHlHcm91cHMpLFxuICAgICAgc3RvcmFnZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdG9yYWdlVHlwZSksXG4gICAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zdWJuZXRJZHMpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBjb25maWd1cmF0aW9uOiBtcUJyb2tlckNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9jb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgZW5jcnlwdGlvbl9vcHRpb25zOiBtcUJyb2tlckVuY3J5cHRpb25PcHRpb25zVG9UZXJyYWZvcm0odGhpcy5fZW5jcnlwdGlvbk9wdGlvbnMuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsZGFwX3NlcnZlcl9tZXRhZGF0YTogbXFCcm9rZXJMZGFwU2VydmVyTWV0YWRhdGFUb1RlcnJhZm9ybSh0aGlzLl9sZGFwU2VydmVyTWV0YWRhdGEuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsb2dzOiBtcUJyb2tlckxvZ3NUb1RlcnJhZm9ybSh0aGlzLl9sb2dzLmludGVybmFsVmFsdWUpLFxuICAgICAgbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0X3RpbWU6IG1xQnJva2VyTWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWVUb1RlcnJhZm9ybSh0aGlzLl9tYWludGVuYW5jZVdpbmRvd1N0YXJ0VGltZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHVzZXI6IGNka3RmLmxpc3RNYXBwZXIobXFCcm9rZXJVc2VyVG9UZXJyYWZvcm0pKHRoaXMuX3VzZXIpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==