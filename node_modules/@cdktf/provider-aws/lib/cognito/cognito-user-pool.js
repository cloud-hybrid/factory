"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoUserPool = exports.CognitoUserPoolVerificationMessageTemplateOutputReference = exports.cognitoUserPoolVerificationMessageTemplateToTerraform = exports.CognitoUserPoolUsernameConfigurationOutputReference = exports.cognitoUserPoolUsernameConfigurationToTerraform = exports.CognitoUserPoolUserPoolAddOnsOutputReference = exports.cognitoUserPoolUserPoolAddOnsToTerraform = exports.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference = exports.cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform = exports.CognitoUserPoolSmsConfigurationOutputReference = exports.cognitoUserPoolSmsConfigurationToTerraform = exports.cognitoUserPoolSchemaToTerraform = exports.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference = exports.cognitoUserPoolSchemaStringAttributeConstraintsToTerraform = exports.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference = exports.cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform = exports.CognitoUserPoolPasswordPolicyOutputReference = exports.cognitoUserPoolPasswordPolicyToTerraform = exports.CognitoUserPoolLambdaConfigOutputReference = exports.cognitoUserPoolLambdaConfigToTerraform = exports.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference = exports.cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform = exports.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference = exports.cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform = exports.CognitoUserPoolEmailConfigurationOutputReference = exports.cognitoUserPoolEmailConfigurationToTerraform = exports.CognitoUserPoolDeviceConfigurationOutputReference = exports.cognitoUserPoolDeviceConfigurationToTerraform = exports.CognitoUserPoolAdminCreateUserConfigOutputReference = exports.cognitoUserPoolAdminCreateUserConfigToTerraform = exports.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference = exports.cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform = exports.CognitoUserPoolAccountRecoverySettingOutputReference = exports.cognitoUserPoolAccountRecoverySettingToTerraform = exports.cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
    };
}
exports.cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform = cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform;
function cognitoUserPoolAccountRecoverySettingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform)(struct.recoveryMechanism),
    };
}
exports.cognitoUserPoolAccountRecoverySettingToTerraform = cognitoUserPoolAccountRecoverySettingToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
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
        if (this._recoveryMechanism) {
            hasAnyValues = true;
            internalValueResult.recoveryMechanism = this._recoveryMechanism;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recoveryMechanism = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recoveryMechanism = value.recoveryMechanism;
        }
    }
    /**
     * @stability stable
     */
    get recoveryMechanism() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('recovery_mechanism');
    }
    /**
     * @stability stable
     */
    set recoveryMechanism(value) {
        this._recoveryMechanism = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recoveryMechanismInput() {
        return this._recoveryMechanism;
    }
}
exports.CognitoUserPoolAccountRecoverySettingOutputReference = CognitoUserPoolAccountRecoverySettingOutputReference;
_a = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAccountRecoverySettingOutputReference[_a] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolAccountRecoverySettingOutputReference", version: "3.0.1" };
function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        sms_message: cdktf.stringToTerraform(struct.smsMessage),
    };
}
exports.cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform = cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._emailMessage) {
            hasAnyValues = true;
            internalValueResult.emailMessage = this._emailMessage;
        }
        if (this._emailSubject) {
            hasAnyValues = true;
            internalValueResult.emailSubject = this._emailSubject;
        }
        if (this._smsMessage) {
            hasAnyValues = true;
            internalValueResult.smsMessage = this._smsMessage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._emailMessage = undefined;
            this._emailSubject = undefined;
            this._smsMessage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._emailMessage = value.emailMessage;
            this._emailSubject = value.emailSubject;
            this._smsMessage = value.smsMessage;
        }
    }
    /**
     * @stability stable
     */
    get emailMessage() {
        return this.getStringAttribute('email_message');
    }
    /**
     * @stability stable
     */
    set emailMessage(value) {
        this._emailMessage = value;
    }
    /**
     * @stability stable
     */
    resetEmailMessage() {
        this._emailMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailMessageInput() {
        return this._emailMessage;
    }
    /**
     * @stability stable
     */
    get emailSubject() {
        return this.getStringAttribute('email_subject');
    }
    /**
     * @stability stable
     */
    set emailSubject(value) {
        this._emailSubject = value;
    }
    /**
     * @stability stable
     */
    resetEmailSubject() {
        this._emailSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailSubjectInput() {
        return this._emailSubject;
    }
    /**
     * @stability stable
     */
    get smsMessage() {
        return this.getStringAttribute('sms_message');
    }
    /**
     * @stability stable
     */
    set smsMessage(value) {
        this._smsMessage = value;
    }
    /**
     * @stability stable
     */
    resetSmsMessage() {
        this._smsMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smsMessageInput() {
        return this._smsMessage;
    }
}
exports.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference = CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference;
_b = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference[_b] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference", version: "3.0.1" };
function cognitoUserPoolAdminCreateUserConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_admin_create_user_only: cdktf.booleanToTerraform(struct.allowAdminCreateUserOnly),
        invite_message_template: cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct.inviteMessageTemplate),
    };
}
exports.cognitoUserPoolAdminCreateUserConfigToTerraform = cognitoUserPoolAdminCreateUserConfigToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // invite_message_template - computed: false, optional: true, required: false
        this._inviteMessageTemplate = new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(this, "invite_message_template", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _t, _u;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allowAdminCreateUserOnly) {
            hasAnyValues = true;
            internalValueResult.allowAdminCreateUserOnly = this._allowAdminCreateUserOnly;
        }
        if ((_t = this._inviteMessageTemplate) === null || _t === void 0 ? void 0 : _t.internalValue) {
            hasAnyValues = true;
            internalValueResult.inviteMessageTemplate = (_u = this._inviteMessageTemplate) === null || _u === void 0 ? void 0 : _u.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowAdminCreateUserOnly = undefined;
            this._inviteMessageTemplate.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowAdminCreateUserOnly = value.allowAdminCreateUserOnly;
            this._inviteMessageTemplate.internalValue = value.inviteMessageTemplate;
        }
    }
    /**
     * @stability stable
     */
    get allowAdminCreateUserOnly() {
        return this.getBooleanAttribute('allow_admin_create_user_only');
    }
    /**
     * @stability stable
     */
    set allowAdminCreateUserOnly(value) {
        this._allowAdminCreateUserOnly = value;
    }
    /**
     * @stability stable
     */
    resetAllowAdminCreateUserOnly() {
        this._allowAdminCreateUserOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowAdminCreateUserOnlyInput() {
        return this._allowAdminCreateUserOnly;
    }
    /**
     * @stability stable
     */
    get inviteMessageTemplate() {
        return this._inviteMessageTemplate;
    }
    /**
     * @stability stable
     */
    putInviteMessageTemplate(value) {
        this._inviteMessageTemplate.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInviteMessageTemplate() {
        this._inviteMessageTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inviteMessageTemplateInput() {
        return this._inviteMessageTemplate.internalValue;
    }
}
exports.CognitoUserPoolAdminCreateUserConfigOutputReference = CognitoUserPoolAdminCreateUserConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
CognitoUserPoolAdminCreateUserConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolAdminCreateUserConfigOutputReference", version: "3.0.1" };
function cognitoUserPoolDeviceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        challenge_required_on_new_device: cdktf.booleanToTerraform(struct.challengeRequiredOnNewDevice),
        device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct.deviceOnlyRememberedOnUserPrompt),
    };
}
exports.cognitoUserPoolDeviceConfigurationToTerraform = cognitoUserPoolDeviceConfigurationToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._challengeRequiredOnNewDevice) {
            hasAnyValues = true;
            internalValueResult.challengeRequiredOnNewDevice = this._challengeRequiredOnNewDevice;
        }
        if (this._deviceOnlyRememberedOnUserPrompt) {
            hasAnyValues = true;
            internalValueResult.deviceOnlyRememberedOnUserPrompt = this._deviceOnlyRememberedOnUserPrompt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._challengeRequiredOnNewDevice = undefined;
            this._deviceOnlyRememberedOnUserPrompt = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._challengeRequiredOnNewDevice = value.challengeRequiredOnNewDevice;
            this._deviceOnlyRememberedOnUserPrompt = value.deviceOnlyRememberedOnUserPrompt;
        }
    }
    /**
     * @stability stable
     */
    get challengeRequiredOnNewDevice() {
        return this.getBooleanAttribute('challenge_required_on_new_device');
    }
    /**
     * @stability stable
     */
    set challengeRequiredOnNewDevice(value) {
        this._challengeRequiredOnNewDevice = value;
    }
    /**
     * @stability stable
     */
    resetChallengeRequiredOnNewDevice() {
        this._challengeRequiredOnNewDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get challengeRequiredOnNewDeviceInput() {
        return this._challengeRequiredOnNewDevice;
    }
    /**
     * @stability stable
     */
    get deviceOnlyRememberedOnUserPrompt() {
        return this.getBooleanAttribute('device_only_remembered_on_user_prompt');
    }
    /**
     * @stability stable
     */
    set deviceOnlyRememberedOnUserPrompt(value) {
        this._deviceOnlyRememberedOnUserPrompt = value;
    }
    /**
     * @stability stable
     */
    resetDeviceOnlyRememberedOnUserPrompt() {
        this._deviceOnlyRememberedOnUserPrompt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceOnlyRememberedOnUserPromptInput() {
        return this._deviceOnlyRememberedOnUserPrompt;
    }
}
exports.CognitoUserPoolDeviceConfigurationOutputReference = CognitoUserPoolDeviceConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
CognitoUserPoolDeviceConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolDeviceConfigurationOutputReference", version: "3.0.1" };
function cognitoUserPoolEmailConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configuration_set: cdktf.stringToTerraform(struct.configurationSet),
        email_sending_account: cdktf.stringToTerraform(struct.emailSendingAccount),
        from_email_address: cdktf.stringToTerraform(struct.fromEmailAddress),
        reply_to_email_address: cdktf.stringToTerraform(struct.replyToEmailAddress),
        source_arn: cdktf.stringToTerraform(struct.sourceArn),
    };
}
exports.cognitoUserPoolEmailConfigurationToTerraform = cognitoUserPoolEmailConfigurationToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._configurationSet) {
            hasAnyValues = true;
            internalValueResult.configurationSet = this._configurationSet;
        }
        if (this._emailSendingAccount) {
            hasAnyValues = true;
            internalValueResult.emailSendingAccount = this._emailSendingAccount;
        }
        if (this._fromEmailAddress) {
            hasAnyValues = true;
            internalValueResult.fromEmailAddress = this._fromEmailAddress;
        }
        if (this._replyToEmailAddress) {
            hasAnyValues = true;
            internalValueResult.replyToEmailAddress = this._replyToEmailAddress;
        }
        if (this._sourceArn) {
            hasAnyValues = true;
            internalValueResult.sourceArn = this._sourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configurationSet = undefined;
            this._emailSendingAccount = undefined;
            this._fromEmailAddress = undefined;
            this._replyToEmailAddress = undefined;
            this._sourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configurationSet = value.configurationSet;
            this._emailSendingAccount = value.emailSendingAccount;
            this._fromEmailAddress = value.fromEmailAddress;
            this._replyToEmailAddress = value.replyToEmailAddress;
            this._sourceArn = value.sourceArn;
        }
    }
    /**
     * @stability stable
     */
    get configurationSet() {
        return this.getStringAttribute('configuration_set');
    }
    /**
     * @stability stable
     */
    set configurationSet(value) {
        this._configurationSet = value;
    }
    /**
     * @stability stable
     */
    resetConfigurationSet() {
        this._configurationSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationSetInput() {
        return this._configurationSet;
    }
    /**
     * @stability stable
     */
    get emailSendingAccount() {
        return this.getStringAttribute('email_sending_account');
    }
    /**
     * @stability stable
     */
    set emailSendingAccount(value) {
        this._emailSendingAccount = value;
    }
    /**
     * @stability stable
     */
    resetEmailSendingAccount() {
        this._emailSendingAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailSendingAccountInput() {
        return this._emailSendingAccount;
    }
    /**
     * @stability stable
     */
    get fromEmailAddress() {
        return this.getStringAttribute('from_email_address');
    }
    /**
     * @stability stable
     */
    set fromEmailAddress(value) {
        this._fromEmailAddress = value;
    }
    /**
     * @stability stable
     */
    resetFromEmailAddress() {
        this._fromEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fromEmailAddressInput() {
        return this._fromEmailAddress;
    }
    /**
     * @stability stable
     */
    get replyToEmailAddress() {
        return this.getStringAttribute('reply_to_email_address');
    }
    /**
     * @stability stable
     */
    set replyToEmailAddress(value) {
        this._replyToEmailAddress = value;
    }
    /**
     * @stability stable
     */
    resetReplyToEmailAddress() {
        this._replyToEmailAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get replyToEmailAddressInput() {
        return this._replyToEmailAddress;
    }
    /**
     * @stability stable
     */
    get sourceArn() {
        return this.getStringAttribute('source_arn');
    }
    /**
     * @stability stable
     */
    set sourceArn(value) {
        this._sourceArn = value;
    }
    /**
     * @stability stable
     */
    resetSourceArn() {
        this._sourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceArnInput() {
        return this._sourceArn;
    }
}
exports.CognitoUserPoolEmailConfigurationOutputReference = CognitoUserPoolEmailConfigurationOutputReference;
_e = JSII_RTTI_SYMBOL_1;
CognitoUserPoolEmailConfigurationOutputReference[_e] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolEmailConfigurationOutputReference", version: "3.0.1" };
function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
        lambda_version: cdktf.stringToTerraform(struct.lambdaVersion),
    };
}
exports.cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform = cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
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
        if (this._lambdaArn) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }
    /**
     * @stability stable
     */
    get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    /**
     * @stability stable
     */
    set lambdaArn(value) {
        this._lambdaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaArnInput() {
        return this._lambdaArn;
    }
    /**
     * @stability stable
     */
    get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    /**
     * @stability stable
     */
    set lambdaVersion(value) {
        this._lambdaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
exports.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference = CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference;
_f = JSII_RTTI_SYMBOL_1;
CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference[_f] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference", version: "3.0.1" };
function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lambda_arn: cdktf.stringToTerraform(struct.lambdaArn),
        lambda_version: cdktf.stringToTerraform(struct.lambdaVersion),
    };
}
exports.cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform = cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
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
        if (this._lambdaArn) {
            hasAnyValues = true;
            internalValueResult.lambdaArn = this._lambdaArn;
        }
        if (this._lambdaVersion) {
            hasAnyValues = true;
            internalValueResult.lambdaVersion = this._lambdaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lambdaArn = undefined;
            this._lambdaVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lambdaArn = value.lambdaArn;
            this._lambdaVersion = value.lambdaVersion;
        }
    }
    /**
     * @stability stable
     */
    get lambdaArn() {
        return this.getStringAttribute('lambda_arn');
    }
    /**
     * @stability stable
     */
    set lambdaArn(value) {
        this._lambdaArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaArnInput() {
        return this._lambdaArn;
    }
    /**
     * @stability stable
     */
    get lambdaVersion() {
        return this.getStringAttribute('lambda_version');
    }
    /**
     * @stability stable
     */
    set lambdaVersion(value) {
        this._lambdaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaVersionInput() {
        return this._lambdaVersion;
    }
}
exports.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference = CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference;
_g = JSII_RTTI_SYMBOL_1;
CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference[_g] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference", version: "3.0.1" };
function cognitoUserPoolLambdaConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create_auth_challenge: cdktf.stringToTerraform(struct.createAuthChallenge),
        custom_message: cdktf.stringToTerraform(struct.customMessage),
        define_auth_challenge: cdktf.stringToTerraform(struct.defineAuthChallenge),
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        post_authentication: cdktf.stringToTerraform(struct.postAuthentication),
        post_confirmation: cdktf.stringToTerraform(struct.postConfirmation),
        pre_authentication: cdktf.stringToTerraform(struct.preAuthentication),
        pre_sign_up: cdktf.stringToTerraform(struct.preSignUp),
        pre_token_generation: cdktf.stringToTerraform(struct.preTokenGeneration),
        user_migration: cdktf.stringToTerraform(struct.userMigration),
        verify_auth_challenge_response: cdktf.stringToTerraform(struct.verifyAuthChallengeResponse),
        custom_email_sender: cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct.customEmailSender),
        custom_sms_sender: cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct.customSmsSender),
    };
}
exports.cognitoUserPoolLambdaConfigToTerraform = cognitoUserPoolLambdaConfigToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // custom_email_sender - computed: false, optional: true, required: false
        this._customEmailSender = new CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(this, "custom_email_sender", true);
        // custom_sms_sender - computed: false, optional: true, required: false
        this._customSmsSender = new CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(this, "custom_sms_sender", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _t, _u, _v, _w;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._createAuthChallenge) {
            hasAnyValues = true;
            internalValueResult.createAuthChallenge = this._createAuthChallenge;
        }
        if (this._customMessage) {
            hasAnyValues = true;
            internalValueResult.customMessage = this._customMessage;
        }
        if (this._defineAuthChallenge) {
            hasAnyValues = true;
            internalValueResult.defineAuthChallenge = this._defineAuthChallenge;
        }
        if (this._kmsKeyId) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._postAuthentication) {
            hasAnyValues = true;
            internalValueResult.postAuthentication = this._postAuthentication;
        }
        if (this._postConfirmation) {
            hasAnyValues = true;
            internalValueResult.postConfirmation = this._postConfirmation;
        }
        if (this._preAuthentication) {
            hasAnyValues = true;
            internalValueResult.preAuthentication = this._preAuthentication;
        }
        if (this._preSignUp) {
            hasAnyValues = true;
            internalValueResult.preSignUp = this._preSignUp;
        }
        if (this._preTokenGeneration) {
            hasAnyValues = true;
            internalValueResult.preTokenGeneration = this._preTokenGeneration;
        }
        if (this._userMigration) {
            hasAnyValues = true;
            internalValueResult.userMigration = this._userMigration;
        }
        if (this._verifyAuthChallengeResponse) {
            hasAnyValues = true;
            internalValueResult.verifyAuthChallengeResponse = this._verifyAuthChallengeResponse;
        }
        if ((_t = this._customEmailSender) === null || _t === void 0 ? void 0 : _t.internalValue) {
            hasAnyValues = true;
            internalValueResult.customEmailSender = (_u = this._customEmailSender) === null || _u === void 0 ? void 0 : _u.internalValue;
        }
        if ((_v = this._customSmsSender) === null || _v === void 0 ? void 0 : _v.internalValue) {
            hasAnyValues = true;
            internalValueResult.customSmsSender = (_w = this._customSmsSender) === null || _w === void 0 ? void 0 : _w.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._createAuthChallenge = undefined;
            this._customMessage = undefined;
            this._defineAuthChallenge = undefined;
            this._kmsKeyId = undefined;
            this._postAuthentication = undefined;
            this._postConfirmation = undefined;
            this._preAuthentication = undefined;
            this._preSignUp = undefined;
            this._preTokenGeneration = undefined;
            this._userMigration = undefined;
            this._verifyAuthChallengeResponse = undefined;
            this._customEmailSender.internalValue = undefined;
            this._customSmsSender.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._createAuthChallenge = value.createAuthChallenge;
            this._customMessage = value.customMessage;
            this._defineAuthChallenge = value.defineAuthChallenge;
            this._kmsKeyId = value.kmsKeyId;
            this._postAuthentication = value.postAuthentication;
            this._postConfirmation = value.postConfirmation;
            this._preAuthentication = value.preAuthentication;
            this._preSignUp = value.preSignUp;
            this._preTokenGeneration = value.preTokenGeneration;
            this._userMigration = value.userMigration;
            this._verifyAuthChallengeResponse = value.verifyAuthChallengeResponse;
            this._customEmailSender.internalValue = value.customEmailSender;
            this._customSmsSender.internalValue = value.customSmsSender;
        }
    }
    /**
     * @stability stable
     */
    get createAuthChallenge() {
        return this.getStringAttribute('create_auth_challenge');
    }
    /**
     * @stability stable
     */
    set createAuthChallenge(value) {
        this._createAuthChallenge = value;
    }
    /**
     * @stability stable
     */
    resetCreateAuthChallenge() {
        this._createAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createAuthChallengeInput() {
        return this._createAuthChallenge;
    }
    /**
     * @stability stable
     */
    get customMessage() {
        return this.getStringAttribute('custom_message');
    }
    /**
     * @stability stable
     */
    set customMessage(value) {
        this._customMessage = value;
    }
    /**
     * @stability stable
     */
    resetCustomMessage() {
        this._customMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customMessageInput() {
        return this._customMessage;
    }
    /**
     * @stability stable
     */
    get defineAuthChallenge() {
        return this.getStringAttribute('define_auth_challenge');
    }
    /**
     * @stability stable
     */
    set defineAuthChallenge(value) {
        this._defineAuthChallenge = value;
    }
    /**
     * @stability stable
     */
    resetDefineAuthChallenge() {
        this._defineAuthChallenge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defineAuthChallengeInput() {
        return this._defineAuthChallenge;
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
    get postAuthentication() {
        return this.getStringAttribute('post_authentication');
    }
    /**
     * @stability stable
     */
    set postAuthentication(value) {
        this._postAuthentication = value;
    }
    /**
     * @stability stable
     */
    resetPostAuthentication() {
        this._postAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get postAuthenticationInput() {
        return this._postAuthentication;
    }
    /**
     * @stability stable
     */
    get postConfirmation() {
        return this.getStringAttribute('post_confirmation');
    }
    /**
     * @stability stable
     */
    set postConfirmation(value) {
        this._postConfirmation = value;
    }
    /**
     * @stability stable
     */
    resetPostConfirmation() {
        this._postConfirmation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get postConfirmationInput() {
        return this._postConfirmation;
    }
    /**
     * @stability stable
     */
    get preAuthentication() {
        return this.getStringAttribute('pre_authentication');
    }
    /**
     * @stability stable
     */
    set preAuthentication(value) {
        this._preAuthentication = value;
    }
    /**
     * @stability stable
     */
    resetPreAuthentication() {
        this._preAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preAuthenticationInput() {
        return this._preAuthentication;
    }
    /**
     * @stability stable
     */
    get preSignUp() {
        return this.getStringAttribute('pre_sign_up');
    }
    /**
     * @stability stable
     */
    set preSignUp(value) {
        this._preSignUp = value;
    }
    /**
     * @stability stable
     */
    resetPreSignUp() {
        this._preSignUp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preSignUpInput() {
        return this._preSignUp;
    }
    /**
     * @stability stable
     */
    get preTokenGeneration() {
        return this.getStringAttribute('pre_token_generation');
    }
    /**
     * @stability stable
     */
    set preTokenGeneration(value) {
        this._preTokenGeneration = value;
    }
    /**
     * @stability stable
     */
    resetPreTokenGeneration() {
        this._preTokenGeneration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preTokenGenerationInput() {
        return this._preTokenGeneration;
    }
    /**
     * @stability stable
     */
    get userMigration() {
        return this.getStringAttribute('user_migration');
    }
    /**
     * @stability stable
     */
    set userMigration(value) {
        this._userMigration = value;
    }
    /**
     * @stability stable
     */
    resetUserMigration() {
        this._userMigration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userMigrationInput() {
        return this._userMigration;
    }
    /**
     * @stability stable
     */
    get verifyAuthChallengeResponse() {
        return this.getStringAttribute('verify_auth_challenge_response');
    }
    /**
     * @stability stable
     */
    set verifyAuthChallengeResponse(value) {
        this._verifyAuthChallengeResponse = value;
    }
    /**
     * @stability stable
     */
    resetVerifyAuthChallengeResponse() {
        this._verifyAuthChallengeResponse = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get verifyAuthChallengeResponseInput() {
        return this._verifyAuthChallengeResponse;
    }
    /**
     * @stability stable
     */
    get customEmailSender() {
        return this._customEmailSender;
    }
    /**
     * @stability stable
     */
    putCustomEmailSender(value) {
        this._customEmailSender.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCustomEmailSender() {
        this._customEmailSender.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customEmailSenderInput() {
        return this._customEmailSender.internalValue;
    }
    /**
     * @stability stable
     */
    get customSmsSender() {
        return this._customSmsSender;
    }
    /**
     * @stability stable
     */
    putCustomSmsSender(value) {
        this._customSmsSender.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCustomSmsSender() {
        this._customSmsSender.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customSmsSenderInput() {
        return this._customSmsSender.internalValue;
    }
}
exports.CognitoUserPoolLambdaConfigOutputReference = CognitoUserPoolLambdaConfigOutputReference;
_h = JSII_RTTI_SYMBOL_1;
CognitoUserPoolLambdaConfigOutputReference[_h] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolLambdaConfigOutputReference", version: "3.0.1" };
function cognitoUserPoolPasswordPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        minimum_length: cdktf.numberToTerraform(struct.minimumLength),
        require_lowercase: cdktf.booleanToTerraform(struct.requireLowercase),
        require_numbers: cdktf.booleanToTerraform(struct.requireNumbers),
        require_symbols: cdktf.booleanToTerraform(struct.requireSymbols),
        require_uppercase: cdktf.booleanToTerraform(struct.requireUppercase),
        temporary_password_validity_days: cdktf.numberToTerraform(struct.temporaryPasswordValidityDays),
    };
}
exports.cognitoUserPoolPasswordPolicyToTerraform = cognitoUserPoolPasswordPolicyToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolPasswordPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._minimumLength) {
            hasAnyValues = true;
            internalValueResult.minimumLength = this._minimumLength;
        }
        if (this._requireLowercase) {
            hasAnyValues = true;
            internalValueResult.requireLowercase = this._requireLowercase;
        }
        if (this._requireNumbers) {
            hasAnyValues = true;
            internalValueResult.requireNumbers = this._requireNumbers;
        }
        if (this._requireSymbols) {
            hasAnyValues = true;
            internalValueResult.requireSymbols = this._requireSymbols;
        }
        if (this._requireUppercase) {
            hasAnyValues = true;
            internalValueResult.requireUppercase = this._requireUppercase;
        }
        if (this._temporaryPasswordValidityDays) {
            hasAnyValues = true;
            internalValueResult.temporaryPasswordValidityDays = this._temporaryPasswordValidityDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._minimumLength = undefined;
            this._requireLowercase = undefined;
            this._requireNumbers = undefined;
            this._requireSymbols = undefined;
            this._requireUppercase = undefined;
            this._temporaryPasswordValidityDays = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._minimumLength = value.minimumLength;
            this._requireLowercase = value.requireLowercase;
            this._requireNumbers = value.requireNumbers;
            this._requireSymbols = value.requireSymbols;
            this._requireUppercase = value.requireUppercase;
            this._temporaryPasswordValidityDays = value.temporaryPasswordValidityDays;
        }
    }
    /**
     * @stability stable
     */
    get minimumLength() {
        return this.getNumberAttribute('minimum_length');
    }
    /**
     * @stability stable
     */
    set minimumLength(value) {
        this._minimumLength = value;
    }
    /**
     * @stability stable
     */
    resetMinimumLength() {
        this._minimumLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minimumLengthInput() {
        return this._minimumLength;
    }
    /**
     * @stability stable
     */
    get requireLowercase() {
        return this.getBooleanAttribute('require_lowercase');
    }
    /**
     * @stability stable
     */
    set requireLowercase(value) {
        this._requireLowercase = value;
    }
    /**
     * @stability stable
     */
    resetRequireLowercase() {
        this._requireLowercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireLowercaseInput() {
        return this._requireLowercase;
    }
    /**
     * @stability stable
     */
    get requireNumbers() {
        return this.getBooleanAttribute('require_numbers');
    }
    /**
     * @stability stable
     */
    set requireNumbers(value) {
        this._requireNumbers = value;
    }
    /**
     * @stability stable
     */
    resetRequireNumbers() {
        this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireNumbersInput() {
        return this._requireNumbers;
    }
    /**
     * @stability stable
     */
    get requireSymbols() {
        return this.getBooleanAttribute('require_symbols');
    }
    /**
     * @stability stable
     */
    set requireSymbols(value) {
        this._requireSymbols = value;
    }
    /**
     * @stability stable
     */
    resetRequireSymbols() {
        this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireSymbolsInput() {
        return this._requireSymbols;
    }
    /**
     * @stability stable
     */
    get requireUppercase() {
        return this.getBooleanAttribute('require_uppercase');
    }
    /**
     * @stability stable
     */
    set requireUppercase(value) {
        this._requireUppercase = value;
    }
    /**
     * @stability stable
     */
    resetRequireUppercase() {
        this._requireUppercase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requireUppercaseInput() {
        return this._requireUppercase;
    }
    /**
     * @stability stable
     */
    get temporaryPasswordValidityDays() {
        return this.getNumberAttribute('temporary_password_validity_days');
    }
    /**
     * @stability stable
     */
    set temporaryPasswordValidityDays(value) {
        this._temporaryPasswordValidityDays = value;
    }
    /**
     * @stability stable
     */
    resetTemporaryPasswordValidityDays() {
        this._temporaryPasswordValidityDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get temporaryPasswordValidityDaysInput() {
        return this._temporaryPasswordValidityDays;
    }
}
exports.CognitoUserPoolPasswordPolicyOutputReference = CognitoUserPoolPasswordPolicyOutputReference;
_j = JSII_RTTI_SYMBOL_1;
CognitoUserPoolPasswordPolicyOutputReference[_j] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolPasswordPolicyOutputReference", version: "3.0.1" };
function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_value: cdktf.stringToTerraform(struct.maxValue),
        min_value: cdktf.stringToTerraform(struct.minValue),
    };
}
exports.cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform = cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
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
        if (this._maxValue) {
            hasAnyValues = true;
            internalValueResult.maxValue = this._maxValue;
        }
        if (this._minValue) {
            hasAnyValues = true;
            internalValueResult.minValue = this._minValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxValue = undefined;
            this._minValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxValue = value.maxValue;
            this._minValue = value.minValue;
        }
    }
    /**
     * @stability stable
     */
    get maxValue() {
        return this.getStringAttribute('max_value');
    }
    /**
     * @stability stable
     */
    set maxValue(value) {
        this._maxValue = value;
    }
    /**
     * @stability stable
     */
    resetMaxValue() {
        this._maxValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxValueInput() {
        return this._maxValue;
    }
    /**
     * @stability stable
     */
    get minValue() {
        return this.getStringAttribute('min_value');
    }
    /**
     * @stability stable
     */
    set minValue(value) {
        this._minValue = value;
    }
    /**
     * @stability stable
     */
    resetMinValue() {
        this._minValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minValueInput() {
        return this._minValue;
    }
}
exports.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference = CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference;
_k = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference[_k] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference", version: "3.0.1" };
function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_length: cdktf.stringToTerraform(struct.maxLength),
        min_length: cdktf.stringToTerraform(struct.minLength),
    };
}
exports.cognitoUserPoolSchemaStringAttributeConstraintsToTerraform = cognitoUserPoolSchemaStringAttributeConstraintsToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolSchemaStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
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
        if (this._maxLength) {
            hasAnyValues = true;
            internalValueResult.maxLength = this._maxLength;
        }
        if (this._minLength) {
            hasAnyValues = true;
            internalValueResult.minLength = this._minLength;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxLength = undefined;
            this._minLength = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxLength = value.maxLength;
            this._minLength = value.minLength;
        }
    }
    /**
     * @stability stable
     */
    get maxLength() {
        return this.getStringAttribute('max_length');
    }
    /**
     * @stability stable
     */
    set maxLength(value) {
        this._maxLength = value;
    }
    /**
     * @stability stable
     */
    resetMaxLength() {
        this._maxLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxLengthInput() {
        return this._maxLength;
    }
    /**
     * @stability stable
     */
    get minLength() {
        return this.getStringAttribute('min_length');
    }
    /**
     * @stability stable
     */
    set minLength(value) {
        this._minLength = value;
    }
    /**
     * @stability stable
     */
    resetMinLength() {
        this._minLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minLengthInput() {
        return this._minLength;
    }
}
exports.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference = CognitoUserPoolSchemaStringAttributeConstraintsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSchemaStringAttributeConstraintsOutputReference[_l] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference", version: "3.0.1" };
function cognitoUserPoolSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_data_type: cdktf.stringToTerraform(struct.attributeDataType),
        developer_only_attribute: cdktf.booleanToTerraform(struct.developerOnlyAttribute),
        mutable: cdktf.booleanToTerraform(struct.mutable),
        name: cdktf.stringToTerraform(struct.name),
        required: cdktf.booleanToTerraform(struct.required),
        number_attribute_constraints: cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct.numberAttributeConstraints),
        string_attribute_constraints: cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct.stringAttributeConstraints),
    };
}
exports.cognitoUserPoolSchemaToTerraform = cognitoUserPoolSchemaToTerraform;
function cognitoUserPoolSmsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        external_id: cdktf.stringToTerraform(struct.externalId),
        sns_caller_arn: cdktf.stringToTerraform(struct.snsCallerArn),
    };
}
exports.cognitoUserPoolSmsConfigurationToTerraform = cognitoUserPoolSmsConfigurationToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolSmsConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._externalId) {
            hasAnyValues = true;
            internalValueResult.externalId = this._externalId;
        }
        if (this._snsCallerArn) {
            hasAnyValues = true;
            internalValueResult.snsCallerArn = this._snsCallerArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._externalId = undefined;
            this._snsCallerArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._externalId = value.externalId;
            this._snsCallerArn = value.snsCallerArn;
        }
    }
    /**
     * @stability stable
     */
    get externalId() {
        return this.getStringAttribute('external_id');
    }
    /**
     * @stability stable
     */
    set externalId(value) {
        this._externalId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get externalIdInput() {
        return this._externalId;
    }
    /**
     * @stability stable
     */
    get snsCallerArn() {
        return this.getStringAttribute('sns_caller_arn');
    }
    /**
     * @stability stable
     */
    set snsCallerArn(value) {
        this._snsCallerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snsCallerArnInput() {
        return this._snsCallerArn;
    }
}
exports.CognitoUserPoolSmsConfigurationOutputReference = CognitoUserPoolSmsConfigurationOutputReference;
_m = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSmsConfigurationOutputReference[_m] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolSmsConfigurationOutputReference", version: "3.0.1" };
function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct) {
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
exports.cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform = cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference extends cdktf.ComplexObject {
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
}
exports.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference = CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference;
_o = JSII_RTTI_SYMBOL_1;
CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference[_o] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference", version: "3.0.1" };
function cognitoUserPoolUserPoolAddOnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        advanced_security_mode: cdktf.stringToTerraform(struct.advancedSecurityMode),
    };
}
exports.cognitoUserPoolUserPoolAddOnsToTerraform = cognitoUserPoolUserPoolAddOnsToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
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
        if (this._advancedSecurityMode) {
            hasAnyValues = true;
            internalValueResult.advancedSecurityMode = this._advancedSecurityMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._advancedSecurityMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._advancedSecurityMode = value.advancedSecurityMode;
        }
    }
    /**
     * @stability stable
     */
    get advancedSecurityMode() {
        return this.getStringAttribute('advanced_security_mode');
    }
    /**
     * @stability stable
     */
    set advancedSecurityMode(value) {
        this._advancedSecurityMode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get advancedSecurityModeInput() {
        return this._advancedSecurityMode;
    }
}
exports.CognitoUserPoolUserPoolAddOnsOutputReference = CognitoUserPoolUserPoolAddOnsOutputReference;
_p = JSII_RTTI_SYMBOL_1;
CognitoUserPoolUserPoolAddOnsOutputReference[_p] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolUserPoolAddOnsOutputReference", version: "3.0.1" };
function cognitoUserPoolUsernameConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        case_sensitive: cdktf.booleanToTerraform(struct.caseSensitive),
    };
}
exports.cognitoUserPoolUsernameConfigurationToTerraform = cognitoUserPoolUsernameConfigurationToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolUsernameConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._caseSensitive) {
            hasAnyValues = true;
            internalValueResult.caseSensitive = this._caseSensitive;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._caseSensitive = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._caseSensitive = value.caseSensitive;
        }
    }
    /**
     * @stability stable
     */
    get caseSensitive() {
        return this.getBooleanAttribute('case_sensitive');
    }
    /**
     * @stability stable
     */
    set caseSensitive(value) {
        this._caseSensitive = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get caseSensitiveInput() {
        return this._caseSensitive;
    }
}
exports.CognitoUserPoolUsernameConfigurationOutputReference = CognitoUserPoolUsernameConfigurationOutputReference;
_q = JSII_RTTI_SYMBOL_1;
CognitoUserPoolUsernameConfigurationOutputReference[_q] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolUsernameConfigurationOutputReference", version: "3.0.1" };
function cognitoUserPoolVerificationMessageTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_email_option: cdktf.stringToTerraform(struct.defaultEmailOption),
        email_message: cdktf.stringToTerraform(struct.emailMessage),
        email_message_by_link: cdktf.stringToTerraform(struct.emailMessageByLink),
        email_subject: cdktf.stringToTerraform(struct.emailSubject),
        email_subject_by_link: cdktf.stringToTerraform(struct.emailSubjectByLink),
        sms_message: cdktf.stringToTerraform(struct.smsMessage),
    };
}
exports.cognitoUserPoolVerificationMessageTemplateToTerraform = cognitoUserPoolVerificationMessageTemplateToTerraform;
/**
 * @stability stable
 */
class CognitoUserPoolVerificationMessageTemplateOutputReference extends cdktf.ComplexObject {
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
        if (this._defaultEmailOption) {
            hasAnyValues = true;
            internalValueResult.defaultEmailOption = this._defaultEmailOption;
        }
        if (this._emailMessage) {
            hasAnyValues = true;
            internalValueResult.emailMessage = this._emailMessage;
        }
        if (this._emailMessageByLink) {
            hasAnyValues = true;
            internalValueResult.emailMessageByLink = this._emailMessageByLink;
        }
        if (this._emailSubject) {
            hasAnyValues = true;
            internalValueResult.emailSubject = this._emailSubject;
        }
        if (this._emailSubjectByLink) {
            hasAnyValues = true;
            internalValueResult.emailSubjectByLink = this._emailSubjectByLink;
        }
        if (this._smsMessage) {
            hasAnyValues = true;
            internalValueResult.smsMessage = this._smsMessage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultEmailOption = undefined;
            this._emailMessage = undefined;
            this._emailMessageByLink = undefined;
            this._emailSubject = undefined;
            this._emailSubjectByLink = undefined;
            this._smsMessage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultEmailOption = value.defaultEmailOption;
            this._emailMessage = value.emailMessage;
            this._emailMessageByLink = value.emailMessageByLink;
            this._emailSubject = value.emailSubject;
            this._emailSubjectByLink = value.emailSubjectByLink;
            this._smsMessage = value.smsMessage;
        }
    }
    /**
     * @stability stable
     */
    get defaultEmailOption() {
        return this.getStringAttribute('default_email_option');
    }
    /**
     * @stability stable
     */
    set defaultEmailOption(value) {
        this._defaultEmailOption = value;
    }
    /**
     * @stability stable
     */
    resetDefaultEmailOption() {
        this._defaultEmailOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultEmailOptionInput() {
        return this._defaultEmailOption;
    }
    /**
     * @stability stable
     */
    get emailMessage() {
        return this.getStringAttribute('email_message');
    }
    /**
     * @stability stable
     */
    set emailMessage(value) {
        this._emailMessage = value;
    }
    /**
     * @stability stable
     */
    resetEmailMessage() {
        this._emailMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailMessageInput() {
        return this._emailMessage;
    }
    /**
     * @stability stable
     */
    get emailMessageByLink() {
        return this.getStringAttribute('email_message_by_link');
    }
    /**
     * @stability stable
     */
    set emailMessageByLink(value) {
        this._emailMessageByLink = value;
    }
    /**
     * @stability stable
     */
    resetEmailMessageByLink() {
        this._emailMessageByLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailMessageByLinkInput() {
        return this._emailMessageByLink;
    }
    /**
     * @stability stable
     */
    get emailSubject() {
        return this.getStringAttribute('email_subject');
    }
    /**
     * @stability stable
     */
    set emailSubject(value) {
        this._emailSubject = value;
    }
    /**
     * @stability stable
     */
    resetEmailSubject() {
        this._emailSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailSubjectInput() {
        return this._emailSubject;
    }
    /**
     * @stability stable
     */
    get emailSubjectByLink() {
        return this.getStringAttribute('email_subject_by_link');
    }
    /**
     * @stability stable
     */
    set emailSubjectByLink(value) {
        this._emailSubjectByLink = value;
    }
    /**
     * @stability stable
     */
    resetEmailSubjectByLink() {
        this._emailSubjectByLink = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailSubjectByLinkInput() {
        return this._emailSubjectByLink;
    }
    /**
     * @stability stable
     */
    get smsMessage() {
        return this.getStringAttribute('sms_message');
    }
    /**
     * @stability stable
     */
    set smsMessage(value) {
        this._smsMessage = value;
    }
    /**
     * @stability stable
     */
    resetSmsMessage() {
        this._smsMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smsMessageInput() {
        return this._smsMessage;
    }
}
exports.CognitoUserPoolVerificationMessageTemplateOutputReference = CognitoUserPoolVerificationMessageTemplateOutputReference;
_r = JSII_RTTI_SYMBOL_1;
CognitoUserPoolVerificationMessageTemplateOutputReference[_r] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPoolVerificationMessageTemplateOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}.
 *
 * @stability stable
 */
class CognitoUserPool extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_user_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // account_recovery_setting - computed: false, optional: true, required: false
        this._accountRecoverySetting = new CognitoUserPoolAccountRecoverySettingOutputReference(this, "account_recovery_setting", true);
        // admin_create_user_config - computed: false, optional: true, required: false
        this._adminCreateUserConfig = new CognitoUserPoolAdminCreateUserConfigOutputReference(this, "admin_create_user_config", true);
        // device_configuration - computed: false, optional: true, required: false
        this._deviceConfiguration = new CognitoUserPoolDeviceConfigurationOutputReference(this, "device_configuration", true);
        // email_configuration - computed: false, optional: true, required: false
        this._emailConfiguration = new CognitoUserPoolEmailConfigurationOutputReference(this, "email_configuration", true);
        // lambda_config - computed: false, optional: true, required: false
        this._lambdaConfig = new CognitoUserPoolLambdaConfigOutputReference(this, "lambda_config", true);
        // password_policy - computed: false, optional: true, required: false
        this._passwordPolicy = new CognitoUserPoolPasswordPolicyOutputReference(this, "password_policy", true);
        // sms_configuration - computed: false, optional: true, required: false
        this._smsConfiguration = new CognitoUserPoolSmsConfigurationOutputReference(this, "sms_configuration", true);
        // software_token_mfa_configuration - computed: false, optional: true, required: false
        this._softwareTokenMfaConfiguration = new CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(this, "software_token_mfa_configuration", true);
        // user_pool_add_ons - computed: false, optional: true, required: false
        this._userPoolAddOns = new CognitoUserPoolUserPoolAddOnsOutputReference(this, "user_pool_add_ons", true);
        // username_configuration - computed: false, optional: true, required: false
        this._usernameConfiguration = new CognitoUserPoolUsernameConfigurationOutputReference(this, "username_configuration", true);
        // verification_message_template - computed: false, optional: true, required: false
        this._verificationMessageTemplate = new CognitoUserPoolVerificationMessageTemplateOutputReference(this, "verification_message_template", true);
        this._aliasAttributes = config.aliasAttributes;
        this._autoVerifiedAttributes = config.autoVerifiedAttributes;
        this._emailVerificationMessage = config.emailVerificationMessage;
        this._emailVerificationSubject = config.emailVerificationSubject;
        this._mfaConfiguration = config.mfaConfiguration;
        this._name = config.name;
        this._smsAuthenticationMessage = config.smsAuthenticationMessage;
        this._smsVerificationMessage = config.smsVerificationMessage;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._usernameAttributes = config.usernameAttributes;
        this._accountRecoverySetting.internalValue = config.accountRecoverySetting;
        this._adminCreateUserConfig.internalValue = config.adminCreateUserConfig;
        this._deviceConfiguration.internalValue = config.deviceConfiguration;
        this._emailConfiguration.internalValue = config.emailConfiguration;
        this._lambdaConfig.internalValue = config.lambdaConfig;
        this._passwordPolicy.internalValue = config.passwordPolicy;
        this._schema = config.schema;
        this._smsConfiguration.internalValue = config.smsConfiguration;
        this._softwareTokenMfaConfiguration.internalValue = config.softwareTokenMfaConfiguration;
        this._userPoolAddOns.internalValue = config.userPoolAddOns;
        this._usernameConfiguration.internalValue = config.usernameConfiguration;
        this._verificationMessageTemplate.internalValue = config.verificationMessageTemplate;
    }
    /**
     * @stability stable
     */
    get aliasAttributes() {
        return this.getListAttribute('alias_attributes');
    }
    /**
     * @stability stable
     */
    set aliasAttributes(value) {
        this._aliasAttributes = value;
    }
    /**
     * @stability stable
     */
    resetAliasAttributes() {
        this._aliasAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get aliasAttributesInput() {
        return this._aliasAttributes;
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
    get autoVerifiedAttributes() {
        return this.getListAttribute('auto_verified_attributes');
    }
    /**
     * @stability stable
     */
    set autoVerifiedAttributes(value) {
        this._autoVerifiedAttributes = value;
    }
    /**
     * @stability stable
     */
    resetAutoVerifiedAttributes() {
        this._autoVerifiedAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoVerifiedAttributesInput() {
        return this._autoVerifiedAttributes;
    }
    // creation_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get creationDate() {
        return this.getStringAttribute('creation_date');
    }
    // custom_domain - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get customDomain() {
        return this.getStringAttribute('custom_domain');
    }
    // domain - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get domain() {
        return this.getStringAttribute('domain');
    }
    /**
     * @stability stable
     */
    get emailVerificationMessage() {
        return this.getStringAttribute('email_verification_message');
    }
    /**
     * @stability stable
     */
    set emailVerificationMessage(value) {
        this._emailVerificationMessage = value;
    }
    /**
     * @stability stable
     */
    resetEmailVerificationMessage() {
        this._emailVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailVerificationMessageInput() {
        return this._emailVerificationMessage;
    }
    /**
     * @stability stable
     */
    get emailVerificationSubject() {
        return this.getStringAttribute('email_verification_subject');
    }
    /**
     * @stability stable
     */
    set emailVerificationSubject(value) {
        this._emailVerificationSubject = value;
    }
    /**
     * @stability stable
     */
    resetEmailVerificationSubject() {
        this._emailVerificationSubject = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailVerificationSubjectInput() {
        return this._emailVerificationSubject;
    }
    // endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // estimated_number_of_users - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get estimatedNumberOfUsers() {
        return this.getNumberAttribute('estimated_number_of_users');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_modified_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastModifiedDate() {
        return this.getStringAttribute('last_modified_date');
    }
    /**
     * @stability stable
     */
    get mfaConfiguration() {
        return this.getStringAttribute('mfa_configuration');
    }
    /**
     * @stability stable
     */
    set mfaConfiguration(value) {
        this._mfaConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetMfaConfiguration() {
        this._mfaConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mfaConfigurationInput() {
        return this._mfaConfiguration;
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
    get smsAuthenticationMessage() {
        return this.getStringAttribute('sms_authentication_message');
    }
    /**
     * @stability stable
     */
    set smsAuthenticationMessage(value) {
        this._smsAuthenticationMessage = value;
    }
    /**
     * @stability stable
     */
    resetSmsAuthenticationMessage() {
        this._smsAuthenticationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smsAuthenticationMessageInput() {
        return this._smsAuthenticationMessage;
    }
    /**
     * @stability stable
     */
    get smsVerificationMessage() {
        return this.getStringAttribute('sms_verification_message');
    }
    /**
     * @stability stable
     */
    set smsVerificationMessage(value) {
        this._smsVerificationMessage = value;
    }
    /**
     * @stability stable
     */
    resetSmsVerificationMessage() {
        this._smsVerificationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smsVerificationMessageInput() {
        return this._smsVerificationMessage;
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
    get usernameAttributes() {
        return this.getListAttribute('username_attributes');
    }
    /**
     * @stability stable
     */
    set usernameAttributes(value) {
        this._usernameAttributes = value;
    }
    /**
     * @stability stable
     */
    resetUsernameAttributes() {
        this._usernameAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usernameAttributesInput() {
        return this._usernameAttributes;
    }
    /**
     * @stability stable
     */
    get accountRecoverySetting() {
        return this._accountRecoverySetting;
    }
    /**
     * @stability stable
     */
    putAccountRecoverySetting(value) {
        this._accountRecoverySetting.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAccountRecoverySetting() {
        this._accountRecoverySetting.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accountRecoverySettingInput() {
        return this._accountRecoverySetting.internalValue;
    }
    /**
     * @stability stable
     */
    get adminCreateUserConfig() {
        return this._adminCreateUserConfig;
    }
    /**
     * @stability stable
     */
    putAdminCreateUserConfig(value) {
        this._adminCreateUserConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetAdminCreateUserConfig() {
        this._adminCreateUserConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get adminCreateUserConfigInput() {
        return this._adminCreateUserConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get deviceConfiguration() {
        return this._deviceConfiguration;
    }
    /**
     * @stability stable
     */
    putDeviceConfiguration(value) {
        this._deviceConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDeviceConfiguration() {
        this._deviceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deviceConfigurationInput() {
        return this._deviceConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get emailConfiguration() {
        return this._emailConfiguration;
    }
    /**
     * @stability stable
     */
    putEmailConfiguration(value) {
        this._emailConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEmailConfiguration() {
        this._emailConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get emailConfigurationInput() {
        return this._emailConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get lambdaConfig() {
        return this._lambdaConfig;
    }
    /**
     * @stability stable
     */
    putLambdaConfig(value) {
        this._lambdaConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetLambdaConfig() {
        this._lambdaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaConfigInput() {
        return this._lambdaConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get passwordPolicy() {
        return this._passwordPolicy;
    }
    /**
     * @stability stable
     */
    putPasswordPolicy(value) {
        this._passwordPolicy.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetPasswordPolicy() {
        this._passwordPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passwordPolicyInput() {
        return this._passwordPolicy.internalValue;
    }
    /**
     * @stability stable
     */
    get schema() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('schema');
    }
    /**
     * @stability stable
     */
    set schema(value) {
        this._schema = value;
    }
    /**
     * @stability stable
     */
    resetSchema() {
        this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaInput() {
        return this._schema;
    }
    /**
     * @stability stable
     */
    get smsConfiguration() {
        return this._smsConfiguration;
    }
    /**
     * @stability stable
     */
    putSmsConfiguration(value) {
        this._smsConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSmsConfiguration() {
        this._smsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get smsConfigurationInput() {
        return this._smsConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get softwareTokenMfaConfiguration() {
        return this._softwareTokenMfaConfiguration;
    }
    /**
     * @stability stable
     */
    putSoftwareTokenMfaConfiguration(value) {
        this._softwareTokenMfaConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSoftwareTokenMfaConfiguration() {
        this._softwareTokenMfaConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get softwareTokenMfaConfigurationInput() {
        return this._softwareTokenMfaConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get userPoolAddOns() {
        return this._userPoolAddOns;
    }
    /**
     * @stability stable
     */
    putUserPoolAddOns(value) {
        this._userPoolAddOns.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetUserPoolAddOns() {
        this._userPoolAddOns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get userPoolAddOnsInput() {
        return this._userPoolAddOns.internalValue;
    }
    /**
     * @stability stable
     */
    get usernameConfiguration() {
        return this._usernameConfiguration;
    }
    /**
     * @stability stable
     */
    putUsernameConfiguration(value) {
        this._usernameConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetUsernameConfiguration() {
        this._usernameConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usernameConfigurationInput() {
        return this._usernameConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get verificationMessageTemplate() {
        return this._verificationMessageTemplate;
    }
    /**
     * @stability stable
     */
    putVerificationMessageTemplate(value) {
        this._verificationMessageTemplate.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVerificationMessageTemplate() {
        this._verificationMessageTemplate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get verificationMessageTemplateInput() {
        return this._verificationMessageTemplate.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            alias_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._aliasAttributes),
            auto_verified_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._autoVerifiedAttributes),
            email_verification_message: cdktf.stringToTerraform(this._emailVerificationMessage),
            email_verification_subject: cdktf.stringToTerraform(this._emailVerificationSubject),
            mfa_configuration: cdktf.stringToTerraform(this._mfaConfiguration),
            name: cdktf.stringToTerraform(this._name),
            sms_authentication_message: cdktf.stringToTerraform(this._smsAuthenticationMessage),
            sms_verification_message: cdktf.stringToTerraform(this._smsVerificationMessage),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
            account_recovery_setting: cognitoUserPoolAccountRecoverySettingToTerraform(this._accountRecoverySetting.internalValue),
            admin_create_user_config: cognitoUserPoolAdminCreateUserConfigToTerraform(this._adminCreateUserConfig.internalValue),
            device_configuration: cognitoUserPoolDeviceConfigurationToTerraform(this._deviceConfiguration.internalValue),
            email_configuration: cognitoUserPoolEmailConfigurationToTerraform(this._emailConfiguration.internalValue),
            lambda_config: cognitoUserPoolLambdaConfigToTerraform(this._lambdaConfig.internalValue),
            password_policy: cognitoUserPoolPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
            schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform)(this._schema),
            sms_configuration: cognitoUserPoolSmsConfigurationToTerraform(this._smsConfiguration.internalValue),
            software_token_mfa_configuration: cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(this._softwareTokenMfaConfiguration.internalValue),
            user_pool_add_ons: cognitoUserPoolUserPoolAddOnsToTerraform(this._userPoolAddOns.internalValue),
            username_configuration: cognitoUserPoolUsernameConfigurationToTerraform(this._usernameConfiguration.internalValue),
            verification_message_template: cognitoUserPoolVerificationMessageTemplateToTerraform(this._verificationMessageTemplate.internalValue),
        };
    }
}
exports.CognitoUserPool = CognitoUserPool;
_s = JSII_RTTI_SYMBOL_1;
CognitoUserPool[_s] = { fqn: "@cdktf/provider-aws.cognito.CognitoUserPool", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CognitoUserPool.tfResourceType = "aws_cognito_user_pool";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by11c2VyLXBvb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29nbml0by9jb2duaXRvLXVzZXItcG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBEL0IsU0FBZ0IsaUVBQWlFLENBQUMsTUFBK0Q7SUFDL0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3BELENBQUE7QUFDSCxDQUFDO0FBVEQsOElBU0M7QUFPRCxTQUFnQixnREFBZ0QsQ0FBQyxNQUFxRztJQUNwSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDbkksQ0FBQTtBQUNILENBQUM7QUFSRCw0R0FRQzs7OztBQUVELE1BQWEsb0RBQXFELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0YsWUFBbUIsaUJBQTJDLEVB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QUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDO1lBQ3RILHdCQUF3QixFQUFFLCtDQUErQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7WUFDcEgsb0JBQW9CLEVBQUUsNkNBQTZDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztZQUM1RyxtQkFBbUIsRUFBRSw0Q0FBNEMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1lBQ3pHLGFBQWEsRUFBRSxzQ0FBc0MsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUN2RixlQUFlLEVBQUUsd0NBQXdDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7WUFDN0YsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hFLGlCQUFpQixFQUFFLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDbkcsZ0NBQWdDLEVBQUUsdURBQXVELENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGFBQWEsQ0FBQztZQUM1SSxpQkFBaUIsRUFBRSx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztZQUMvRixzQkFBc0IsRUFBRSwrQ0FBK0MsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1lBQ2xILDZCQUE2QixFQUFFLHFEQUFxRCxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7U0FDdEksQ0FBQztJQUNKLENBQUM7O0FBMWVILDBDQTJlQzs7O0FBemVDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csOEJBQWMsR0FBVyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhbGlhc0F0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGF1dG9WZXJpZmllZEF0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxWZXJpZmljYXRpb25TdWJqZWN0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1mYUNvbmZpZ3VyYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbXNWZXJpZmljYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJuYW1lQXR0cmlidXRlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY291bnRSZWNvdmVyeVNldHRpbmc/OiBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkbWluQ3JlYXRlVXNlckNvbmZpZz86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXZpY2VDb25maWd1cmF0aW9uPzogQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbWFpbENvbmZpZ3VyYXRpb24/OiBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhQ29uZmlnPzogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhc3N3b3JkUG9saWN5PzogQ29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NoZW1hPzogQ29nbml0b1VzZXJQb29sU2NoZW1hW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21zQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24/OiBDb2duaXRvVXNlclBvb2xTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1c2VyUG9vbEFkZE9ucz86IENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJuYW1lQ29uZmlndXJhdGlvbj86IENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2ZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGU/OiBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdSZWNvdmVyeU1lY2hhbmlzbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmlvcml0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBwcmlvcml0eTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wcmlvcml0eSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvdmVyeU1lY2hhbmlzbTogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvdmVyeV9tZWNoYW5pc206IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZ1JlY292ZXJ5TWVjaGFuaXNtVG9UZXJyYWZvcm0pKHN0cnVjdCEucmVjb3ZlcnlNZWNoYW5pc20pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xBY2NvdW50UmVjb3ZlcnlTZXR0aW5nT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY292ZXJ5TWVjaGFuaXNtKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvdmVyeU1lY2hhbmlzbSA9IHRoaXMuX3JlY292ZXJ5TWVjaGFuaXNtO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sQWNjb3VudFJlY292ZXJ5U2V0dGluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY292ZXJ5TWVjaGFuaXNtID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvdmVyeU1lY2hhbmlzbSA9IHZhbHVlLnJlY292ZXJ5TWVjaGFuaXNtO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY292ZXJ5X21lY2hhbmlzbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvdmVyeU1lY2hhbmlzbT86IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdSZWNvdmVyeU1lY2hhbmlzbVtdOyBcbiAgcHVibGljIGdldCByZWNvdmVyeU1lY2hhbmlzbSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVjb3ZlcnlfbWVjaGFuaXNtJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3ZlcnlNZWNoYW5pc20odmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdSZWNvdmVyeU1lY2hhbmlzbVtdKSB7XG4gICAgdGhpcy5fcmVjb3ZlcnlNZWNoYW5pc20gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3ZlcnlNZWNoYW5pc21JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3ZlcnlNZWNoYW5pc207XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnSW52aXRlTWVzc2FnZVRlbXBsYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxNZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbWFpbFN1YmplY3Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21zTWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVtYWlsX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxNZXNzYWdlKSxcbiAgICBlbWFpbF9zdWJqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVtYWlsU3ViamVjdCksXG4gICAgc21zX21lc3NhZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc21zTWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdJbnZpdGVNZXNzYWdlVGVtcGxhdGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VtYWlsTWVzc2FnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW1haWxNZXNzYWdlID0gdGhpcy5fZW1haWxNZXNzYWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW1haWxTdWJqZWN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbWFpbFN1YmplY3QgPSB0aGlzLl9lbWFpbFN1YmplY3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zbXNNZXNzYWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbXNNZXNzYWdlID0gdGhpcy5fc21zTWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VtYWlsTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VtYWlsU3ViamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VtYWlsTWVzc2FnZSA9IHZhbHVlLmVtYWlsTWVzc2FnZTtcbiAgICAgIHRoaXMuX2VtYWlsU3ViamVjdCA9IHZhbHVlLmVtYWlsU3ViamVjdDtcbiAgICAgIHRoaXMuX3Ntc01lc3NhZ2UgPSB2YWx1ZS5zbXNNZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVtYWlsX21lc3NhZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxNZXNzYWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbWFpbE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbF9tZXNzYWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbE1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsTWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsTWVzc2FnZSgpIHtcbiAgICB0aGlzLl9lbWFpbE1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsTWVzc2FnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbE1lc3NhZ2U7XG4gIH1cblxuICAvLyBlbWFpbF9zdWJqZWN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VtYWlsU3ViamVjdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW1haWxTdWJqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWxfc3ViamVjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1haWxTdWJqZWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbWFpbFN1YmplY3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbFN1YmplY3QoKSB7XG4gICAgdGhpcy5fZW1haWxTdWJqZWN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbWFpbFN1YmplY3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxTdWJqZWN0O1xuICB9XG5cbiAgLy8gc21zX21lc3NhZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc21zTWVzc2FnZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc21zTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Ntc19tZXNzYWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzbXNNZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbXNNZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U21zTWVzc2FnZSgpIHtcbiAgICB0aGlzLl9zbXNNZXNzYWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbXNNZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Ntc01lc3NhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludml0ZU1lc3NhZ2VUZW1wbGF0ZT86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFsbG93X2FkbWluX2NyZWF0ZV91c2VyX29ubHk6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG93QWRtaW5DcmVhdGVVc2VyT25seSksXG4gICAgaW52aXRlX21lc3NhZ2VfdGVtcGxhdGU6IGNvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdCEuaW52aXRlTWVzc2FnZVRlbXBsYXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkgPSB0aGlzLl9hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnZpdGVNZXNzYWdlVGVtcGxhdGU/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmludml0ZU1lc3NhZ2VUZW1wbGF0ZSA9IHRoaXMuX2ludml0ZU1lc3NhZ2VUZW1wbGF0ZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FsbG93QWRtaW5DcmVhdGVVc2VyT25seSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ludml0ZU1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkgPSB2YWx1ZS5hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHk7XG4gICAgICB0aGlzLl9pbnZpdGVNZXNzYWdlVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmludml0ZU1lc3NhZ2VUZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvd19hZG1pbl9jcmVhdGVfdXNlcl9vbmx5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93QWRtaW5DcmVhdGVVc2VyT25seT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dBZG1pbkNyZWF0ZVVzZXJPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FsbG93X2FkbWluX2NyZWF0ZV91c2VyX29ubHknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93QWRtaW5DcmVhdGVVc2VyT25seSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsbG93QWRtaW5DcmVhdGVVc2VyT25seSgpIHtcbiAgICB0aGlzLl9hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93QWRtaW5DcmVhdGVVc2VyT25seUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0FkbWluQ3JlYXRlVXNlck9ubHk7XG4gIH1cblxuICAvLyBpbnZpdGVfbWVzc2FnZV90ZW1wbGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnZpdGVNZXNzYWdlVGVtcGxhdGUgPSBuZXcgQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnSW52aXRlTWVzc2FnZVRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImludml0ZV9tZXNzYWdlX3RlbXBsYXRlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGludml0ZU1lc3NhZ2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW52aXRlTWVzc2FnZVRlbXBsYXRlO1xuICB9XG4gIHB1YmxpYyBwdXRJbnZpdGVNZXNzYWdlVGVtcGxhdGUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ0ludml0ZU1lc3NhZ2VUZW1wbGF0ZSkge1xuICAgIHRoaXMuX2ludml0ZU1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW52aXRlTWVzc2FnZVRlbXBsYXRlKCkge1xuICAgIHRoaXMuX2ludml0ZU1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnZpdGVNZXNzYWdlVGVtcGxhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW52aXRlTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbERldmljZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjaGFsbGVuZ2VfcmVxdWlyZWRfb25fbmV3X2RldmljZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSksXG4gICAgZGV2aWNlX29ubHlfcmVtZW1iZXJlZF9vbl91c2VyX3Byb21wdDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbERldmljZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UgPSB0aGlzLl9jaGFsbGVuZ2VSZXF1aXJlZE9uTmV3RGV2aWNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ID0gdGhpcy5fZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jaGFsbGVuZ2VSZXF1aXJlZE9uTmV3RGV2aWNlID0gdmFsdWUuY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZTtcbiAgICAgIHRoaXMuX2RldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0ID0gdmFsdWUuZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY2hhbGxlbmdlX3JlcXVpcmVkX29uX25ld19kZXZpY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjaGFsbGVuZ2VfcmVxdWlyZWRfb25fbmV3X2RldmljZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGFsbGVuZ2VSZXF1aXJlZE9uTmV3RGV2aWNlKCkge1xuICAgIHRoaXMuX2NoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNoYWxsZW5nZVJlcXVpcmVkT25OZXdEZXZpY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbGxlbmdlUmVxdWlyZWRPbk5ld0RldmljZTtcbiAgfVxuXG4gIC8vIGRldmljZV9vbmx5X3JlbWVtYmVyZWRfb25fdXNlcl9wcm9tcHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGRldmljZU9ubHlSZW1lbWJlcmVkT25Vc2VyUHJvbXB0KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2RldmljZV9vbmx5X3JlbWVtYmVyZWRfb25fdXNlcl9wcm9tcHQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBkZXZpY2VPbmx5UmVtZW1iZXJlZE9uVXNlclByb21wdCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXZpY2VPbmx5UmVtZW1iZXJlZE9uVXNlclByb21wdCgpIHtcbiAgICB0aGlzLl9kZXZpY2VPbmx5UmVtZW1iZXJlZE9uVXNlclByb21wdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlT25seVJlbWVtYmVyZWRPblVzZXJQcm9tcHQ7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmF0aW9uU2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxTZW5kaW5nQWNjb3VudD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZyb21FbWFpbEFkZHJlc3M/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcGx5VG9FbWFpbEFkZHJlc3M/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYXRpb25fc2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25TZXQpLFxuICAgIGVtYWlsX3NlbmRpbmdfYWNjb3VudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbFNlbmRpbmdBY2NvdW50KSxcbiAgICBmcm9tX2VtYWlsX2FkZHJlc3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZnJvbUVtYWlsQWRkcmVzcyksXG4gICAgcmVwbHlfdG9fZW1haWxfYWRkcmVzczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXBseVRvRW1haWxBZGRyZXNzKSxcbiAgICBzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvdXJjZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbEVtYWlsQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbmZpZ3VyYXRpb25TZXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbmZpZ3VyYXRpb25TZXQgPSB0aGlzLl9jb25maWd1cmF0aW9uU2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW1haWxTZW5kaW5nQWNjb3VudCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW1haWxTZW5kaW5nQWNjb3VudCA9IHRoaXMuX2VtYWlsU2VuZGluZ0FjY291bnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9mcm9tRW1haWxBZGRyZXNzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mcm9tRW1haWxBZGRyZXNzID0gdGhpcy5fZnJvbUVtYWlsQWRkcmVzcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcGx5VG9FbWFpbEFkZHJlc3MpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcGx5VG9FbWFpbEFkZHJlc3MgPSB0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2VBcm4gPSB0aGlzLl9zb3VyY2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uU2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1haWxTZW5kaW5nQWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Zyb21FbWFpbEFkZHJlc3MgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uU2V0ID0gdmFsdWUuY29uZmlndXJhdGlvblNldDtcbiAgICAgIHRoaXMuX2VtYWlsU2VuZGluZ0FjY291bnQgPSB2YWx1ZS5lbWFpbFNlbmRpbmdBY2NvdW50O1xuICAgICAgdGhpcy5fZnJvbUVtYWlsQWRkcmVzcyA9IHZhbHVlLmZyb21FbWFpbEFkZHJlc3M7XG4gICAgICB0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzID0gdmFsdWUucmVwbHlUb0VtYWlsQWRkcmVzcztcbiAgICAgIHRoaXMuX3NvdXJjZUFybiA9IHZhbHVlLnNvdXJjZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBjb25maWd1cmF0aW9uX3NldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb25maWd1cmF0aW9uU2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uU2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uZmlndXJhdGlvbl9zZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbmZpZ3VyYXRpb25TZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25maWd1cmF0aW9uU2V0KCkge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25TZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25TZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblNldDtcbiAgfVxuXG4gIC8vIGVtYWlsX3NlbmRpbmdfYWNjb3VudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbFNlbmRpbmdBY2NvdW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbWFpbFNlbmRpbmdBY2NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWxfc2VuZGluZ19hY2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbFNlbmRpbmdBY2NvdW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbWFpbFNlbmRpbmdBY2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1haWxTZW5kaW5nQWNjb3VudCgpIHtcbiAgICB0aGlzLl9lbWFpbFNlbmRpbmdBY2NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbWFpbFNlbmRpbmdBY2NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsU2VuZGluZ0FjY291bnQ7XG4gIH1cblxuICAvLyBmcm9tX2VtYWlsX2FkZHJlc3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZnJvbUVtYWlsQWRkcmVzcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZnJvbUVtYWlsQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zyb21fZW1haWxfYWRkcmVzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZnJvbUVtYWlsQWRkcmVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZnJvbUVtYWlsQWRkcmVzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZyb21FbWFpbEFkZHJlc3MoKSB7XG4gICAgdGhpcy5fZnJvbUVtYWlsQWRkcmVzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnJvbUVtYWlsQWRkcmVzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mcm9tRW1haWxBZGRyZXNzO1xuICB9XG5cbiAgLy8gcmVwbHlfdG9fZW1haWxfYWRkcmVzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXBseVRvRW1haWxBZGRyZXNzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXBseVRvRW1haWxBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVwbHlfdG9fZW1haWxfYWRkcmVzcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwbHlUb0VtYWlsQWRkcmVzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwbHlUb0VtYWlsQWRkcmVzcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcGx5VG9FbWFpbEFkZHJlc3MoKSB7XG4gICAgdGhpcy5fcmVwbHlUb0VtYWlsQWRkcmVzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwbHlUb0VtYWlsQWRkcmVzc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBseVRvRW1haWxBZGRyZXNzO1xuICB9XG5cbiAgLy8gc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlQXJuKCkge1xuICAgIHRoaXMuX3NvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21FbWFpbFNlbmRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYVZlcnNpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21FbWFpbFNlbmRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxhbWJkYV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhQXJuKSxcbiAgICBsYW1iZGFfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sYW1iZGFWZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhbWJkYUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhQXJuID0gdGhpcy5fbGFtYmRhQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFtYmRhVmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhVmVyc2lvbiA9IHRoaXMuX2xhbWJkYVZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21FbWFpbFNlbmRlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xhbWJkYUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xhbWJkYVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2xhbWJkYUFybiA9IHZhbHVlLmxhbWJkYUFybjtcbiAgICAgIHRoaXMuX2xhbWJkYVZlcnNpb24gPSB2YWx1ZS5sYW1iZGFWZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxhbWJkYV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGFtYmRhQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsYW1iZGFBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYW1iZGFfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xhbWJkYUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhQXJuO1xuICB9XG5cbiAgLy8gbGFtYmRhX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbGFtYmRhVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGFtYmRhVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhbWJkYV92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW1iZGFWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxhbWJkYVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhVmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGFBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGFWZXJzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXJPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsYW1iZGFfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYUFybiksXG4gICAgbGFtYmRhX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhVmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhbWJkYUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhQXJuID0gdGhpcy5fbGFtYmRhQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFtYmRhVmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhVmVyc2lvbiA9IHRoaXMuX2xhbWJkYVZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9sYW1iZGFBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sYW1iZGFWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sYW1iZGFBcm4gPSB2YWx1ZS5sYW1iZGFBcm47XG4gICAgICB0aGlzLl9sYW1iZGFWZXJzaW9uID0gdmFsdWUubGFtYmRhVmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBsYW1iZGFfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xhbWJkYUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbGFtYmRhQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFtYmRhX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFtYmRhQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW1iZGFBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbGFtYmRhQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYUFybjtcbiAgfVxuXG4gIC8vIGxhbWJkYV92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xhbWJkYVZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxhbWJkYVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYW1iZGFfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbGFtYmRhVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGFtYmRhVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhbWJkYVZlcnNpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZUF1dGhDaGFsbGVuZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tTWVzc2FnZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmluZUF1dGhDaGFsbGVuZ2U/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3N0QXV0aGVudGljYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9zdENvbmZpcm1hdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZUF1dGhlbnRpY2F0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZVNpZ25VcD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVUb2tlbkdlbmVyYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlck1pZ3JhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjdXN0b21FbWFpbFNlbmRlcj86IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGN1c3RvbVNtc1NlbmRlcj86IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZV9hdXRoX2NoYWxsZW5nZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGVBdXRoQ2hhbGxlbmdlKSxcbiAgICBjdXN0b21fbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21NZXNzYWdlKSxcbiAgICBkZWZpbmVfYXV0aF9jaGFsbGVuZ2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVmaW5lQXV0aENoYWxsZW5nZSksXG4gICAga21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlJZCksXG4gICAgcG9zdF9hdXRoZW50aWNhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wb3N0QXV0aGVudGljYXRpb24pLFxuICAgIHBvc3RfY29uZmlybWF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvc3RDb25maXJtYXRpb24pLFxuICAgIHByZV9hdXRoZW50aWNhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVBdXRoZW50aWNhdGlvbiksXG4gICAgcHJlX3NpZ25fdXA6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlU2lnblVwKSxcbiAgICBwcmVfdG9rZW5fZ2VuZXJhdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVUb2tlbkdlbmVyYXRpb24pLFxuICAgIHVzZXJfbWlncmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVzZXJNaWdyYXRpb24pLFxuICAgIHZlcmlmeV9hdXRoX2NoYWxsZW5nZV9yZXNwb25zZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2UpLFxuICAgIGN1c3RvbV9lbWFpbF9zZW5kZXI6IGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21FbWFpbFNlbmRlciksXG4gICAgY3VzdG9tX3Ntc19zZW5kZXI6IGNvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbVNtc1NlbmRlclRvVGVycmFmb3JtKHN0cnVjdCEuY3VzdG9tU21zU2VuZGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlQXV0aENoYWxsZW5nZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlQXV0aENoYWxsZW5nZSA9IHRoaXMuX2NyZWF0ZUF1dGhDaGFsbGVuZ2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jdXN0b21NZXNzYWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21NZXNzYWdlID0gdGhpcy5fY3VzdG9tTWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RlZmluZUF1dGhDaGFsbGVuZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlZmluZUF1dGhDaGFsbGVuZ2UgPSB0aGlzLl9kZWZpbmVBdXRoQ2hhbGxlbmdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUlkID0gdGhpcy5fa21zS2V5SWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wb3N0QXV0aGVudGljYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvc3RBdXRoZW50aWNhdGlvbiA9IHRoaXMuX3Bvc3RBdXRoZW50aWNhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Bvc3RDb25maXJtYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBvc3RDb25maXJtYXRpb24gPSB0aGlzLl9wb3N0Q29uZmlybWF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlQXV0aGVudGljYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZUF1dGhlbnRpY2F0aW9uID0gdGhpcy5fcHJlQXV0aGVudGljYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVTaWduVXApIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZVNpZ25VcCA9IHRoaXMuX3ByZVNpZ25VcDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZVRva2VuR2VuZXJhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlVG9rZW5HZW5lcmF0aW9uID0gdGhpcy5fcHJlVG9rZW5HZW5lcmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXNlck1pZ3JhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlck1pZ3JhdGlvbiA9IHRoaXMuX3VzZXJNaWdyYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSA9IHRoaXMuX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21FbWFpbFNlbmRlciA9IHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VzdG9tU21zU2VuZGVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21TbXNTZW5kZXIgPSB0aGlzLl9jdXN0b21TbXNTZW5kZXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGVBdXRoQ2hhbGxlbmdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3VzdG9tTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RlZmluZUF1dGhDaGFsbGVuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Bvc3RBdXRoZW50aWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Bvc3RDb25maXJtYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVBdXRoZW50aWNhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZVNpZ25VcCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZVRva2VuR2VuZXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJNaWdyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl92ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jdXN0b21FbWFpbFNlbmRlci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3VzdG9tU21zU2VuZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZUF1dGhDaGFsbGVuZ2UgPSB2YWx1ZS5jcmVhdGVBdXRoQ2hhbGxlbmdlO1xuICAgICAgdGhpcy5fY3VzdG9tTWVzc2FnZSA9IHZhbHVlLmN1c3RvbU1lc3NhZ2U7XG4gICAgICB0aGlzLl9kZWZpbmVBdXRoQ2hhbGxlbmdlID0gdmFsdWUuZGVmaW5lQXV0aENoYWxsZW5nZTtcbiAgICAgIHRoaXMuX2ttc0tleUlkID0gdmFsdWUua21zS2V5SWQ7XG4gICAgICB0aGlzLl9wb3N0QXV0aGVudGljYXRpb24gPSB2YWx1ZS5wb3N0QXV0aGVudGljYXRpb247XG4gICAgICB0aGlzLl9wb3N0Q29uZmlybWF0aW9uID0gdmFsdWUucG9zdENvbmZpcm1hdGlvbjtcbiAgICAgIHRoaXMuX3ByZUF1dGhlbnRpY2F0aW9uID0gdmFsdWUucHJlQXV0aGVudGljYXRpb247XG4gICAgICB0aGlzLl9wcmVTaWduVXAgPSB2YWx1ZS5wcmVTaWduVXA7XG4gICAgICB0aGlzLl9wcmVUb2tlbkdlbmVyYXRpb24gPSB2YWx1ZS5wcmVUb2tlbkdlbmVyYXRpb247XG4gICAgICB0aGlzLl91c2VyTWlncmF0aW9uID0gdmFsdWUudXNlck1pZ3JhdGlvbjtcbiAgICAgIHRoaXMuX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSA9IHZhbHVlLnZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZTtcbiAgICAgIHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jdXN0b21FbWFpbFNlbmRlcjtcbiAgICAgIHRoaXMuX2N1c3RvbVNtc1NlbmRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY3VzdG9tU21zU2VuZGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNyZWF0ZV9hdXRoX2NoYWxsZW5nZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jcmVhdGVBdXRoQ2hhbGxlbmdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGVBdXRoQ2hhbGxlbmdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlX2F1dGhfY2hhbGxlbmdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGVBdXRoQ2hhbGxlbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jcmVhdGVBdXRoQ2hhbGxlbmdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlQXV0aENoYWxsZW5nZSgpIHtcbiAgICB0aGlzLl9jcmVhdGVBdXRoQ2hhbGxlbmdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVBdXRoQ2hhbGxlbmdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUF1dGhDaGFsbGVuZ2U7XG4gIH1cblxuICAvLyBjdXN0b21fbWVzc2FnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21NZXNzYWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjdXN0b21NZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbU1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2N1c3RvbU1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21NZXNzYWdlKCkge1xuICAgIHRoaXMuX2N1c3RvbU1lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbU1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tTWVzc2FnZTtcbiAgfVxuXG4gIC8vIGRlZmluZV9hdXRoX2NoYWxsZW5nZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWZpbmVBdXRoQ2hhbGxlbmdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZpbmVBdXRoQ2hhbGxlbmdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmaW5lX2F1dGhfY2hhbGxlbmdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWZpbmVBdXRoQ2hhbGxlbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZpbmVBdXRoQ2hhbGxlbmdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmaW5lQXV0aENoYWxsZW5nZSgpIHtcbiAgICB0aGlzLl9kZWZpbmVBdXRoQ2hhbGxlbmdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZpbmVBdXRoQ2hhbGxlbmdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmluZUF1dGhDaGFsbGVuZ2U7XG4gIH1cblxuICAvLyBrbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUlkKCkge1xuICAgIHRoaXMuX2ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHBvc3RfYXV0aGVudGljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9zdEF1dGhlbnRpY2F0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb3N0QXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwb3N0X2F1dGhlbnRpY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBwb3N0QXV0aGVudGljYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bvc3RBdXRoZW50aWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBvc3RBdXRoZW50aWNhdGlvbigpIHtcbiAgICB0aGlzLl9wb3N0QXV0aGVudGljYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvc3RBdXRoZW50aWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wb3N0QXV0aGVudGljYXRpb247XG4gIH1cblxuICAvLyBwb3N0X2NvbmZpcm1hdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wb3N0Q29uZmlybWF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwb3N0Q29uZmlybWF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncG9zdF9jb25maXJtYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvc3RDb25maXJtYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bvc3RDb25maXJtYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3N0Q29uZmlybWF0aW9uKCkge1xuICAgIHRoaXMuX3Bvc3RDb25maXJtYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvc3RDb25maXJtYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zdENvbmZpcm1hdGlvbjtcbiAgfVxuXG4gIC8vIHByZV9hdXRoZW50aWNhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVBdXRoZW50aWNhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlQXV0aGVudGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVfYXV0aGVudGljYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZUF1dGhlbnRpY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVBdXRoZW50aWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZUF1dGhlbnRpY2F0aW9uKCkge1xuICAgIHRoaXMuX3ByZUF1dGhlbnRpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVBdXRoZW50aWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVBdXRoZW50aWNhdGlvbjtcbiAgfVxuXG4gIC8vIHByZV9zaWduX3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZVNpZ25VcD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlU2lnblVwKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlX3NpZ25fdXAnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZVNpZ25VcCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlU2lnblVwID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlU2lnblVwKCkge1xuICAgIHRoaXMuX3ByZVNpZ25VcCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlU2lnblVwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZVNpZ25VcDtcbiAgfVxuXG4gIC8vIHByZV90b2tlbl9nZW5lcmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZVRva2VuR2VuZXJhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlVG9rZW5HZW5lcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlX3Rva2VuX2dlbmVyYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZVRva2VuR2VuZXJhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlVG9rZW5HZW5lcmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlVG9rZW5HZW5lcmF0aW9uKCkge1xuICAgIHRoaXMuX3ByZVRva2VuR2VuZXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlVG9rZW5HZW5lcmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZVRva2VuR2VuZXJhdGlvbjtcbiAgfVxuXG4gIC8vIHVzZXJfbWlncmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJNaWdyYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVzZXJNaWdyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX21pZ3JhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlck1pZ3JhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlck1pZ3JhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVzZXJNaWdyYXRpb24oKSB7XG4gICAgdGhpcy5fdXNlck1pZ3JhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlck1pZ3JhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyTWlncmF0aW9uO1xuICB9XG5cbiAgLy8gdmVyaWZ5X2F1dGhfY2hhbGxlbmdlX3Jlc3BvbnNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdmVyaWZ5QXV0aENoYWxsZW5nZVJlc3BvbnNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyaWZ5X2F1dGhfY2hhbGxlbmdlX3Jlc3BvbnNlJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZSgpIHtcbiAgICB0aGlzLl92ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcmlmeUF1dGhDaGFsbGVuZ2VSZXNwb25zZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJpZnlBdXRoQ2hhbGxlbmdlUmVzcG9uc2U7XG4gIH1cblxuICAvLyBjdXN0b21fZW1haWxfc2VuZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbUVtYWlsU2VuZGVyID0gbmV3IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ0N1c3RvbUVtYWlsU2VuZGVyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImN1c3RvbV9lbWFpbF9zZW5kZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3VzdG9tRW1haWxTZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUVtYWlsU2VuZGVyO1xuICB9XG4gIHB1YmxpYyBwdXRDdXN0b21FbWFpbFNlbmRlcih2YWx1ZTogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tRW1haWxTZW5kZXIpIHtcbiAgICB0aGlzLl9jdXN0b21FbWFpbFNlbmRlci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3VzdG9tRW1haWxTZW5kZXIoKSB7XG4gICAgdGhpcy5fY3VzdG9tRW1haWxTZW5kZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3VzdG9tRW1haWxTZW5kZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRW1haWxTZW5kZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGN1c3RvbV9zbXNfc2VuZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2N1c3RvbVNtc1NlbmRlciA9IG5ldyBDb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdDdXN0b21TbXNTZW5kZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3VzdG9tX3Ntc19zZW5kZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3VzdG9tU21zU2VuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TbXNTZW5kZXI7XG4gIH1cbiAgcHVibGljIHB1dEN1c3RvbVNtc1NlbmRlcih2YWx1ZTogQ29nbml0b1VzZXJQb29sTGFtYmRhQ29uZmlnQ3VzdG9tU21zU2VuZGVyKSB7XG4gICAgdGhpcy5fY3VzdG9tU21zU2VuZGVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDdXN0b21TbXNTZW5kZXIoKSB7XG4gICAgdGhpcy5fY3VzdG9tU21zU2VuZGVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGN1c3RvbVNtc1NlbmRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TbXNTZW5kZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluaW11bUxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlTG93ZXJjYXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWlyZU51bWJlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlU3ltYm9scz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlVXBwZXJjYXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3lUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeU91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWluaW11bV9sZW5ndGg6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluaW11bUxlbmd0aCksXG4gICAgcmVxdWlyZV9sb3dlcmNhc2U6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVMb3dlcmNhc2UpLFxuICAgIHJlcXVpcmVfbnVtYmVyczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZU51bWJlcnMpLFxuICAgIHJlcXVpcmVfc3ltYm9sczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucmVxdWlyZVN5bWJvbHMpLFxuICAgIHJlcXVpcmVfdXBwZXJjYXNlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXF1aXJlVXBwZXJjYXNlKSxcbiAgICB0ZW1wb3JhcnlfcGFzc3dvcmRfdmFsaWRpdHlfZGF5czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9taW5pbXVtTGVuZ3RoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5taW5pbXVtTGVuZ3RoID0gdGhpcy5fbWluaW11bUxlbmd0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcXVpcmVMb3dlcmNhc2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcXVpcmVMb3dlcmNhc2UgPSB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVxdWlyZU51bWJlcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcXVpcmVOdW1iZXJzID0gdGhpcy5fcmVxdWlyZU51bWJlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXF1aXJlU3ltYm9scykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVxdWlyZVN5bWJvbHMgPSB0aGlzLl9yZXF1aXJlU3ltYm9scztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcXVpcmVVcHBlcmNhc2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlcXVpcmVVcHBlcmNhc2UgPSB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzID0gdGhpcy5fdGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xQYXNzd29yZFBvbGljeSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21pbmltdW1MZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVxdWlyZU51bWJlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcXVpcmVVcHBlcmNhc2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWluaW11bUxlbmd0aCA9IHZhbHVlLm1pbmltdW1MZW5ndGg7XG4gICAgICB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlID0gdmFsdWUucmVxdWlyZUxvd2VyY2FzZTtcbiAgICAgIHRoaXMuX3JlcXVpcmVOdW1iZXJzID0gdmFsdWUucmVxdWlyZU51bWJlcnM7XG4gICAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHZhbHVlLnJlcXVpcmVTeW1ib2xzO1xuICAgICAgdGhpcy5fcmVxdWlyZVVwcGVyY2FzZSA9IHZhbHVlLnJlcXVpcmVVcHBlcmNhc2U7XG4gICAgICB0aGlzLl90ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cyA9IHZhbHVlLnRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1pbmltdW1fbGVuZ3RoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pbmltdW1MZW5ndGg/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1pbmltdW1MZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtaW5pbXVtX2xlbmd0aCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluaW11bUxlbmd0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluaW11bUxlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbmltdW1MZW5ndGgoKSB7XG4gICAgdGhpcy5fbWluaW11bUxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluaW11bUxlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5pbXVtTGVuZ3RoO1xuICB9XG5cbiAgLy8gcmVxdWlyZV9sb3dlcmNhc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZUxvd2VyY2FzZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZUxvd2VyY2FzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX2xvd2VyY2FzZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlcXVpcmVMb3dlcmNhc2UodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcXVpcmVMb3dlcmNhc2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlTG93ZXJjYXNlKCkge1xuICAgIHRoaXMuX3JlcXVpcmVMb3dlcmNhc2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVMb3dlcmNhc2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZUxvd2VyY2FzZTtcbiAgfVxuXG4gIC8vIHJlcXVpcmVfbnVtYmVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlTnVtYmVycz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcmVxdWlyZU51bWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWlyZV9udW1iZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZU51bWJlcnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlcXVpcmVOdW1iZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWlyZU51bWJlcnMoKSB7XG4gICAgdGhpcy5fcmVxdWlyZU51bWJlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVOdW1iZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVOdW1iZXJzO1xuICB9XG5cbiAgLy8gcmVxdWlyZV9zeW1ib2xzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVTeW1ib2xzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlU3ltYm9scygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX3N5bWJvbHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlU3ltYm9scyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZVN5bWJvbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXF1aXJlU3ltYm9scygpIHtcbiAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVN5bWJvbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZVN5bWJvbHM7XG4gIH1cblxuICAvLyByZXF1aXJlX3VwcGVyY2FzZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlVXBwZXJjYXNlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZXF1aXJlVXBwZXJjYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVpcmVfdXBwZXJjYXNlJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZVVwcGVyY2FzZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcmVxdWlyZVVwcGVyY2FzZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVVcHBlcmNhc2UoKSB7XG4gICAgdGhpcy5fcmVxdWlyZVVwcGVyY2FzZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWlyZVVwcGVyY2FzZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlO1xuICB9XG5cbiAgLy8gdGVtcG9yYXJ5X3Bhc3N3b3JkX3ZhbGlkaXR5X2RheXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGVtcG9yYXJ5UGFzc3dvcmRWYWxpZGl0eURheXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndGVtcG9yYXJ5X3Bhc3N3b3JkX3ZhbGlkaXR5X2RheXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzKCkge1xuICAgIHRoaXMuX3RlbXBvcmFyeVBhc3N3b3JkVmFsaWRpdHlEYXlzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wb3JhcnlQYXNzd29yZFZhbGlkaXR5RGF5cztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhWYWx1ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pblZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sU2NoZW1hTnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50c091dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heFZhbHVlKSxcbiAgICBtaW5fdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWluVmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF4VmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1heFZhbHVlID0gdGhpcy5fbWF4VmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9taW5WYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluVmFsdWUgPSB0aGlzLl9taW5WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9taW5WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4VmFsdWUgPSB2YWx1ZS5tYXhWYWx1ZTtcbiAgICAgIHRoaXMuX21pblZhbHVlID0gdmFsdWUubWluVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4X3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21heFZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtYXhWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF92YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21heFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4VmFsdWUoKSB7XG4gICAgdGhpcy5fbWF4VmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFZhbHVlO1xuICB9XG5cbiAgLy8gbWluX3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pblZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtaW5WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21pbl92YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWluVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21pblZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWluVmFsdWUoKSB7XG4gICAgdGhpcy5fbWluVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pblZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pblZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4TGVuZ3RoPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtaW5MZW5ndGg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50c1RvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXhfbGVuZ3RoOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heExlbmd0aCksXG4gICAgbWluX2xlbmd0aDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5taW5MZW5ndGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50c091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xTY2hlbWFTdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWF4TGVuZ3RoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhMZW5ndGggPSB0aGlzLl9tYXhMZW5ndGg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9taW5MZW5ndGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1pbkxlbmd0aCA9IHRoaXMuX21pbkxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWF4TGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWluTGVuZ3RoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXhMZW5ndGggPSB2YWx1ZS5tYXhMZW5ndGg7XG4gICAgICB0aGlzLl9taW5MZW5ndGggPSB2YWx1ZS5taW5MZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgLy8gbWF4X2xlbmd0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhMZW5ndGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG1heExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heF9sZW5ndGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heExlbmd0aCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4TGVuZ3RoID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWF4TGVuZ3RoKCkge1xuICAgIHRoaXMuX21heExlbmd0aCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4TGVuZ3RoSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heExlbmd0aDtcbiAgfVxuXG4gIC8vIG1pbl9sZW5ndGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluTGVuZ3RoPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtaW5MZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtaW5fbGVuZ3RoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5MZW5ndGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21pbkxlbmd0aCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1pbkxlbmd0aCgpIHtcbiAgICB0aGlzLl9taW5MZW5ndGggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1pbkxlbmd0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9taW5MZW5ndGg7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU2NoZW1hIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXR0cmlidXRlRGF0YVR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRldmVsb3Blck9ubHlBdHRyaWJ1dGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG11dGFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBudW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50cz86IENvZ25pdG9Vc2VyUG9vbFNjaGVtYU51bWJlckF0dHJpYnV0ZUNvbnN0cmFpbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzPzogQ29nbml0b1VzZXJQb29sU2NoZW1hU3RyaW5nQXR0cmlidXRlQ29uc3RyYWludHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2duaXRvVXNlclBvb2xTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVfZGF0YV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF0dHJpYnV0ZURhdGFUeXBlKSxcbiAgICBkZXZlbG9wZXJfb25seV9hdHRyaWJ1dGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRldmVsb3Blck9ubHlBdHRyaWJ1dGUpLFxuICAgIG11dGFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm11dGFibGUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgcmVxdWlyZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVpcmVkKSxcbiAgICBudW1iZXJfYXR0cmlidXRlX2NvbnN0cmFpbnRzOiBjb2duaXRvVXNlclBvb2xTY2hlbWFOdW1iZXJBdHRyaWJ1dGVDb25zdHJhaW50c1RvVGVycmFmb3JtKHN0cnVjdCEubnVtYmVyQXR0cmlidXRlQ29uc3RyYWludHMpLFxuICAgIHN0cmluZ19hdHRyaWJ1dGVfY29uc3RyYWludHM6IGNvZ25pdG9Vc2VyUG9vbFNjaGVtYVN0cmluZ0F0dHJpYnV0ZUNvbnN0cmFpbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJpbmdBdHRyaWJ1dGVDb25zdHJhaW50cyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBleHRlcm5hbElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc25zQ2FsbGVyQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBleHRlcm5hbF9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHRlcm5hbElkKSxcbiAgICBzbnNfY2FsbGVyX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbnNDYWxsZXJBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2V4dGVybmFsSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmV4dGVybmFsSWQgPSB0aGlzLl9leHRlcm5hbElkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc25zQ2FsbGVyQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbnNDYWxsZXJBcm4gPSB0aGlzLl9zbnNDYWxsZXJBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xTbXNDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nuc0NhbGxlckFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZXh0ZXJuYWxJZCA9IHZhbHVlLmV4dGVybmFsSWQ7XG4gICAgICB0aGlzLl9zbnNDYWxsZXJBcm4gPSB2YWx1ZS5zbnNDYWxsZXJBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gZXh0ZXJuYWxfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZXh0ZXJuYWxJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXh0ZXJuYWxJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4dGVybmFsX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBleHRlcm5hbElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHRlcm5hbElkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dGVybmFsSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZXJuYWxJZDtcbiAgfVxuXG4gIC8vIHNuc19jYWxsZXJfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Nuc0NhbGxlckFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc25zQ2FsbGVyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc25zX2NhbGxlcl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuc0NhbGxlckFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25zQ2FsbGVyQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNuc0NhbGxlckFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbnNDYWxsZXJBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2duaXRvVXNlclBvb2xTb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWR2YW5jZWRTZWN1cml0eU1vZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFVzZXJQb29sQWRkT25zVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sVXNlclBvb2xBZGRPbnNPdXRwdXRSZWZlcmVuY2UgfCBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFkdmFuY2VkX3NlY3VyaXR5X21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYWR2YW5jZWRTZWN1cml0eU1vZGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYWR2YW5jZWRTZWN1cml0eU1vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFkdmFuY2VkU2VjdXJpdHlNb2RlID0gdGhpcy5fYWR2YW5jZWRTZWN1cml0eU1vZGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FkdmFuY2VkU2VjdXJpdHlNb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hZHZhbmNlZFNlY3VyaXR5TW9kZSA9IHZhbHVlLmFkdmFuY2VkU2VjdXJpdHlNb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkdmFuY2VkX3NlY3VyaXR5X21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYWR2YW5jZWRTZWN1cml0eU1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFkdmFuY2VkU2VjdXJpdHlNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWR2YW5jZWRfc2VjdXJpdHlfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWR2YW5jZWRTZWN1cml0eU1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FkdmFuY2VkU2VjdXJpdHlNb2RlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkdmFuY2VkU2VjdXJpdHlNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkdmFuY2VkU2VjdXJpdHlNb2RlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2FzZV9zZW5zaXRpdmU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNhc2VTZW5zaXRpdmUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb2duaXRvVXNlclBvb2xVc2VybmFtZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXNlU2Vuc2l0aXZlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jYXNlU2Vuc2l0aXZlID0gdGhpcy5fY2FzZVNlbnNpdGl2ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFVzZXJuYW1lQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nhc2VTZW5zaXRpdmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nhc2VTZW5zaXRpdmUgPSB2YWx1ZS5jYXNlU2Vuc2l0aXZlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhc2Vfc2Vuc2l0aXZlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Nhc2VTZW5zaXRpdmU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNhc2VTZW5zaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2FzZV9zZW5zaXRpdmUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjYXNlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jYXNlU2Vuc2l0aXZlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhc2VTZW5zaXRpdmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FzZVNlbnNpdGl2ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlZmF1bHRFbWFpbE9wdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxNZXNzYWdlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW1haWxNZXNzYWdlQnlMaW5rPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbWFpbFN1YmplY3Q/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbWFpbFN1YmplY3RCeUxpbms/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc21zTWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZVRvVGVycmFmb3JtKHN0cnVjdD86IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZU91dHB1dFJlZmVyZW5jZSB8IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRfZW1haWxfb3B0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlZmF1bHRFbWFpbE9wdGlvbiksXG4gICAgZW1haWxfbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbE1lc3NhZ2UpLFxuICAgIGVtYWlsX21lc3NhZ2VfYnlfbGluazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbWFpbE1lc3NhZ2VCeUxpbmspLFxuICAgIGVtYWlsX3N1YmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxTdWJqZWN0KSxcbiAgICBlbWFpbF9zdWJqZWN0X2J5X2xpbms6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW1haWxTdWJqZWN0QnlMaW5rKSxcbiAgICBzbXNfbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbXNNZXNzYWdlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVmYXVsdEVtYWlsT3B0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWZhdWx0RW1haWxPcHRpb24gPSB0aGlzLl9kZWZhdWx0RW1haWxPcHRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbWFpbE1lc3NhZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVtYWlsTWVzc2FnZSA9IHRoaXMuX2VtYWlsTWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VtYWlsTWVzc2FnZUJ5TGluaykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW1haWxNZXNzYWdlQnlMaW5rID0gdGhpcy5fZW1haWxNZXNzYWdlQnlMaW5rO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW1haWxTdWJqZWN0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbWFpbFN1YmplY3QgPSB0aGlzLl9lbWFpbFN1YmplY3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbWFpbFN1YmplY3RCeUxpbmspIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVtYWlsU3ViamVjdEJ5TGluayA9IHRoaXMuX2VtYWlsU3ViamVjdEJ5TGluaztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Ntc01lc3NhZ2UpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNtc01lc3NhZ2UgPSB0aGlzLl9zbXNNZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVmYXVsdEVtYWlsT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1haWxNZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1haWxNZXNzYWdlQnlMaW5rID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1haWxTdWJqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW1haWxTdWJqZWN0QnlMaW5rID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc21zTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZGVmYXVsdEVtYWlsT3B0aW9uID0gdmFsdWUuZGVmYXVsdEVtYWlsT3B0aW9uO1xuICAgICAgdGhpcy5fZW1haWxNZXNzYWdlID0gdmFsdWUuZW1haWxNZXNzYWdlO1xuICAgICAgdGhpcy5fZW1haWxNZXNzYWdlQnlMaW5rID0gdmFsdWUuZW1haWxNZXNzYWdlQnlMaW5rO1xuICAgICAgdGhpcy5fZW1haWxTdWJqZWN0ID0gdmFsdWUuZW1haWxTdWJqZWN0O1xuICAgICAgdGhpcy5fZW1haWxTdWJqZWN0QnlMaW5rID0gdmFsdWUuZW1haWxTdWJqZWN0QnlMaW5rO1xuICAgICAgdGhpcy5fc21zTWVzc2FnZSA9IHZhbHVlLnNtc01lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVmYXVsdF9lbWFpbF9vcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdEVtYWlsT3B0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWZhdWx0RW1haWxPcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWZhdWx0X2VtYWlsX29wdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdEVtYWlsT3B0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0RW1haWxPcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWZhdWx0RW1haWxPcHRpb24oKSB7XG4gICAgdGhpcy5fZGVmYXVsdEVtYWlsT3B0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWZhdWx0RW1haWxPcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEVtYWlsT3B0aW9uO1xuICB9XG5cbiAgLy8gZW1haWxfbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VtYWlsTWVzc2FnZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW1haWxNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWxfbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1haWxNZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbWFpbE1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbE1lc3NhZ2UoKSB7XG4gICAgdGhpcy5fZW1haWxNZXNzYWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbWFpbE1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxNZXNzYWdlO1xuICB9XG5cbiAgLy8gZW1haWxfbWVzc2FnZV9ieV9saW5rIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxNZXNzYWdlQnlMaW5rPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbWFpbE1lc3NhZ2VCeUxpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbF9tZXNzYWdlX2J5X2xpbmsnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtYWlsTWVzc2FnZUJ5TGluayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW1haWxNZXNzYWdlQnlMaW5rID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1haWxNZXNzYWdlQnlMaW5rKCkge1xuICAgIHRoaXMuX2VtYWlsTWVzc2FnZUJ5TGluayA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW1haWxNZXNzYWdlQnlMaW5rSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsTWVzc2FnZUJ5TGluaztcbiAgfVxuXG4gIC8vIGVtYWlsX3N1YmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbFN1YmplY3Q/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVtYWlsU3ViamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VtYWlsX3N1YmplY3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtYWlsU3ViamVjdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW1haWxTdWJqZWN0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1haWxTdWJqZWN0KCkge1xuICAgIHRoaXMuX2VtYWlsU3ViamVjdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW1haWxTdWJqZWN0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsU3ViamVjdDtcbiAgfVxuXG4gIC8vIGVtYWlsX3N1YmplY3RfYnlfbGluayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VtYWlsU3ViamVjdEJ5TGluaz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW1haWxTdWJqZWN0QnlMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWxfc3ViamVjdF9ieV9saW5rJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbWFpbFN1YmplY3RCeUxpbmsodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VtYWlsU3ViamVjdEJ5TGluayA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVtYWlsU3ViamVjdEJ5TGluaygpIHtcbiAgICB0aGlzLl9lbWFpbFN1YmplY3RCeUxpbmsgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsU3ViamVjdEJ5TGlua0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbFN1YmplY3RCeUxpbms7XG4gIH1cblxuICAvLyBzbXNfbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Ntc01lc3NhZ2U/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNtc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbXNfbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc21zTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc21zTWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtc01lc3NhZ2UoKSB7XG4gICAgdGhpcy5fc21zTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc21zTWVzc2FnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbXNNZXNzYWdlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIENvZ25pdG9Vc2VyUG9vbCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jb2duaXRvX3VzZXJfcG9vbFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDb2duaXRvVXNlclBvb2xDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jb2duaXRvX3VzZXJfcG9vbCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGlhc0F0dHJpYnV0ZXMgPSBjb25maWcuYWxpYXNBdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2F1dG9WZXJpZmllZEF0dHJpYnV0ZXMgPSBjb25maWcuYXV0b1ZlcmlmaWVkQXR0cmlidXRlcztcbiAgICB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvbk1lc3NhZ2UgPSBjb25maWcuZW1haWxWZXJpZmljYXRpb25NZXNzYWdlO1xuICAgIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uU3ViamVjdCA9IGNvbmZpZy5lbWFpbFZlcmlmaWNhdGlvblN1YmplY3Q7XG4gICAgdGhpcy5fbWZhQ29uZmlndXJhdGlvbiA9IGNvbmZpZy5tZmFDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9zbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2UgPSBjb25maWcuc21zQXV0aGVudGljYXRpb25NZXNzYWdlO1xuICAgIHRoaXMuX3Ntc1ZlcmlmaWNhdGlvbk1lc3NhZ2UgPSBjb25maWcuc21zVmVyaWZpY2F0aW9uTWVzc2FnZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX3VzZXJuYW1lQXR0cmlidXRlcyA9IGNvbmZpZy51c2VybmFtZUF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fYWNjb3VudFJlY292ZXJ5U2V0dGluZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmFjY291bnRSZWNvdmVyeVNldHRpbmc7XG4gICAgdGhpcy5fYWRtaW5DcmVhdGVVc2VyQ29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuYWRtaW5DcmVhdGVVc2VyQ29uZmlnO1xuICAgIHRoaXMuX2RldmljZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5kZXZpY2VDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX2VtYWlsQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVtYWlsQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9sYW1iZGFDb25maWcuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5sYW1iZGFDb25maWc7XG4gICAgdGhpcy5fcGFzc3dvcmRQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5wYXNzd29yZFBvbGljeTtcbiAgICB0aGlzLl9zY2hlbWEgPSBjb25maWcuc2NoZW1hO1xuICAgIHRoaXMuX3Ntc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zbXNDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fdXNlclBvb2xBZGRPbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy51c2VyUG9vbEFkZE9ucztcbiAgICB0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy51c2VybmFtZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWUgPSBjb25maWcudmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbGlhc19hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsaWFzQXR0cmlidXRlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhbGlhc0F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWxpYXNfYXR0cmlidXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxpYXNBdHRyaWJ1dGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FsaWFzQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFsaWFzQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLl9hbGlhc0F0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsaWFzQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlhc0F0dHJpYnV0ZXM7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dG9fdmVyaWZpZWRfYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRvVmVyaWZpZWRBdHRyaWJ1dGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGF1dG9WZXJpZmllZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXV0b192ZXJpZmllZF9hdHRyaWJ1dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRvVmVyaWZpZWRBdHRyaWJ1dGVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2F1dG9WZXJpZmllZEF0dHJpYnV0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvVmVyaWZpZWRBdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuX2F1dG9WZXJpZmllZEF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dG9WZXJpZmllZEF0dHJpYnV0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1ZlcmlmaWVkQXR0cmlidXRlcztcbiAgfVxuXG4gIC8vIGNyZWF0aW9uX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGlvbkRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGlvbl9kYXRlJyk7XG4gIH1cblxuICAvLyBjdXN0b21fZG9tYWluIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tRG9tYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tX2RvbWFpbicpO1xuICB9XG5cbiAgLy8gZG9tYWluIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZG9tYWluKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluJyk7XG4gIH1cblxuICAvLyBlbWFpbF92ZXJpZmljYXRpb25fbWVzc2FnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW1haWxWZXJpZmljYXRpb25NZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW1haWxfdmVyaWZpY2F0aW9uX21lc3NhZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW1haWxWZXJpZmljYXRpb25NZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW1haWxWZXJpZmljYXRpb25NZXNzYWdlKCkge1xuICAgIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW1haWxWZXJpZmljYXRpb25NZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VtYWlsVmVyaWZpY2F0aW9uTWVzc2FnZTtcbiAgfVxuXG4gIC8vIGVtYWlsX3ZlcmlmaWNhdGlvbl9zdWJqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW1haWxWZXJpZmljYXRpb25TdWJqZWN0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbWFpbFZlcmlmaWNhdGlvblN1YmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbWFpbF92ZXJpZmljYXRpb25fc3ViamVjdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZW1haWxWZXJpZmljYXRpb25TdWJqZWN0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbWFpbFZlcmlmaWNhdGlvblN1YmplY3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbFZlcmlmaWNhdGlvblN1YmplY3QoKSB7XG4gICAgdGhpcy5fZW1haWxWZXJpZmljYXRpb25TdWJqZWN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbWFpbFZlcmlmaWNhdGlvblN1YmplY3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW1haWxWZXJpZmljYXRpb25TdWJqZWN0O1xuICB9XG5cbiAgLy8gZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50Jyk7XG4gIH1cblxuICAvLyBlc3RpbWF0ZWRfbnVtYmVyX29mX3VzZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXN0aW1hdGVkTnVtYmVyT2ZVc2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2VzdGltYXRlZF9udW1iZXJfb2ZfdXNlcnMnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsYXN0X21vZGlmaWVkX2RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0TW9kaWZpZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF9tb2RpZmllZF9kYXRlJyk7XG4gIH1cblxuICAvLyBtZmFfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZmFDb25maWd1cmF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZmFDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWZhX2NvbmZpZ3VyYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1mYUNvbmZpZ3VyYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21mYUNvbmZpZ3VyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZmFDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX21mYUNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1mYUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWZhQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gc21zX2F1dGhlbnRpY2F0aW9uX21lc3NhZ2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc21zQXV0aGVudGljYXRpb25NZXNzYWdlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzbXNfYXV0aGVudGljYXRpb25fbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc21zQXV0aGVudGljYXRpb25NZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2UoKSB7XG4gICAgdGhpcy5fc21zQXV0aGVudGljYXRpb25NZXNzYWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbXNBdXRoZW50aWNhdGlvbk1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21zQXV0aGVudGljYXRpb25NZXNzYWdlO1xuICB9XG5cbiAgLy8gc21zX3ZlcmlmaWNhdGlvbl9tZXNzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc21zVmVyaWZpY2F0aW9uTWVzc2FnZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc21zVmVyaWZpY2F0aW9uTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Ntc192ZXJpZmljYXRpb25fbWVzc2FnZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc21zVmVyaWZpY2F0aW9uTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc21zVmVyaWZpY2F0aW9uTWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtc1ZlcmlmaWNhdGlvbk1lc3NhZ2UoKSB7XG4gICAgdGhpcy5fc21zVmVyaWZpY2F0aW9uTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc21zVmVyaWZpY2F0aW9uTWVzc2FnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbXNWZXJpZmljYXRpb25NZXNzYWdlO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHVzZXJuYW1lX2F0dHJpYnV0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNlcm5hbWVBdHRyaWJ1dGVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd1c2VybmFtZV9hdHRyaWJ1dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VybmFtZUF0dHJpYnV0ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdXNlcm5hbWVBdHRyaWJ1dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VXNlcm5hbWVBdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuX3VzZXJuYW1lQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWVBdHRyaWJ1dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lQXR0cmlidXRlcztcbiAgfVxuXG4gIC8vIGFjY291bnRfcmVjb3Zlcnlfc2V0dGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nID0gbmV3IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYWNjb3VudF9yZWNvdmVyeV9zZXR0aW5nXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGFjY291bnRSZWNvdmVyeVNldHRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRSZWNvdmVyeVNldHRpbmc7XG4gIH1cbiAgcHVibGljIHB1dEFjY291bnRSZWNvdmVyeVNldHRpbmcodmFsdWU6IENvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmcpIHtcbiAgICB0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBY2NvdW50UmVjb3ZlcnlTZXR0aW5nKCkge1xuICAgIHRoaXMuX2FjY291bnRSZWNvdmVyeVNldHRpbmcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjb3VudFJlY292ZXJ5U2V0dGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBhZG1pbl9jcmVhdGVfdXNlcl9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRtaW5DcmVhdGVVc2VyQ29uZmlnID0gbmV3IENvZ25pdG9Vc2VyUG9vbEFkbWluQ3JlYXRlVXNlckNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhZG1pbl9jcmVhdGVfdXNlcl9jb25maWdcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYWRtaW5DcmVhdGVVc2VyQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWc7XG4gIH1cbiAgcHVibGljIHB1dEFkbWluQ3JlYXRlVXNlckNvbmZpZyh2YWx1ZTogQ29nbml0b1VzZXJQb29sQWRtaW5DcmVhdGVVc2VyQ29uZmlnKSB7XG4gICAgdGhpcy5fYWRtaW5DcmVhdGVVc2VyQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZG1pbkNyZWF0ZVVzZXJDb25maWcoKSB7XG4gICAgdGhpcy5fYWRtaW5DcmVhdGVVc2VyQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkbWluQ3JlYXRlVXNlckNvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGRldmljZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RldmljZUNvbmZpZ3VyYXRpb24gPSBuZXcgQ29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkZXZpY2VfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkZXZpY2VDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXZpY2VDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXREZXZpY2VDb25maWd1cmF0aW9uKHZhbHVlOiBDb2duaXRvVXNlclBvb2xEZXZpY2VDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZGV2aWNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGV2aWNlQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9kZXZpY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRldmljZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZW1haWxfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbWFpbENvbmZpZ3VyYXRpb24gPSBuZXcgQ29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImVtYWlsX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZW1haWxDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEVtYWlsQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sRW1haWxDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZW1haWxDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbWFpbENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZW1haWxDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVtYWlsQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGxhbWJkYV9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbGFtYmRhQ29uZmlnID0gbmV3IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsYW1iZGFfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGxhbWJkYUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRMYW1iZGFDb25maWcodmFsdWU6IENvZ25pdG9Vc2VyUG9vbExhbWJkYUNvbmZpZykge1xuICAgIHRoaXMuX2xhbWJkYUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TGFtYmRhQ29uZmlnKCkge1xuICAgIHRoaXMuX2xhbWJkYUNvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFDb25maWdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhQ29uZmlnLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwYXNzd29yZF9wb2xpY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3dvcmRQb2xpY3kgPSBuZXcgQ29nbml0b1VzZXJQb29sUGFzc3dvcmRQb2xpY3lPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicGFzc3dvcmRfcG9saWN5XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHBhc3N3b3JkUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZFBvbGljeTtcbiAgfVxuICBwdWJsaWMgcHV0UGFzc3dvcmRQb2xpY3kodmFsdWU6IENvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5KSB7XG4gICAgdGhpcy5fcGFzc3dvcmRQb2xpY3kuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhc3N3b3JkUG9saWN5KCkge1xuICAgIHRoaXMuX3Bhc3N3b3JkUG9saWN5LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkUG9saWN5LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzY2hlbWEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZW1hPzogQ29nbml0b1VzZXJQb29sU2NoZW1hW107IFxuICBwdWJsaWMgZ2V0IHNjaGVtYSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2NoZW1hJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZW1hKHZhbHVlOiBDb2duaXRvVXNlclBvb2xTY2hlbWFbXSkge1xuICAgIHRoaXMuX3NjaGVtYSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVtYSgpIHtcbiAgICB0aGlzLl9zY2hlbWEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVtYUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWE7XG4gIH1cblxuICAvLyBzbXNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbXNDb25maWd1cmF0aW9uID0gbmV3IENvZ25pdG9Vc2VyUG9vbFNtc0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic21zX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc21zQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc21zQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0U21zQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3Ntc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNtc0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fc21zQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbXNDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Ntc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNvZnR3YXJlX3Rva2VuX21mYV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uID0gbmV3IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNvZnR3YXJlX3Rva2VuX21mYV9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0U29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24odmFsdWU6IENvZ25pdG9Vc2VyUG9vbFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fc29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvZnR3YXJlVG9rZW5NZmFDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB1c2VyX3Bvb2xfYWRkX29ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VyUG9vbEFkZE9ucyA9IG5ldyBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ1c2VyX3Bvb2xfYWRkX29uc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB1c2VyUG9vbEFkZE9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclBvb2xBZGRPbnM7XG4gIH1cbiAgcHVibGljIHB1dFVzZXJQb29sQWRkT25zKHZhbHVlOiBDb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9ucykge1xuICAgIHRoaXMuX3VzZXJQb29sQWRkT25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VyUG9vbEFkZE9ucygpIHtcbiAgICB0aGlzLl91c2VyUG9vbEFkZE9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1c2VyUG9vbEFkZE9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyUG9vbEFkZE9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdXNlcm5hbWVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91c2VybmFtZUNvbmZpZ3VyYXRpb24gPSBuZXcgQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInVzZXJuYW1lX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdXNlcm5hbWVDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFVzZXJuYW1lQ29uZmlndXJhdGlvbih2YWx1ZTogQ29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fdXNlcm5hbWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VybmFtZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fdXNlcm5hbWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZlcmlmaWNhdGlvbl9tZXNzYWdlX3RlbXBsYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSA9IG5ldyBDb2duaXRvVXNlclBvb2xWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidmVyaWZpY2F0aW9uX21lc3NhZ2VfdGVtcGxhdGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGU7XG4gIH1cbiAgcHVibGljIHB1dFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZSh2YWx1ZTogQ29nbml0b1VzZXJQb29sVmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5fdmVyaWZpY2F0aW9uTWVzc2FnZVRlbXBsYXRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJpZmljYXRpb25NZXNzYWdlVGVtcGxhdGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxpYXNfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYWxpYXNBdHRyaWJ1dGVzKSxcbiAgICAgIGF1dG9fdmVyaWZpZWRfYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYXV0b1ZlcmlmaWVkQXR0cmlidXRlcyksXG4gICAgICBlbWFpbF92ZXJpZmljYXRpb25fbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW1haWxWZXJpZmljYXRpb25NZXNzYWdlKSxcbiAgICAgIGVtYWlsX3ZlcmlmaWNhdGlvbl9zdWJqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbWFpbFZlcmlmaWNhdGlvblN1YmplY3QpLFxuICAgICAgbWZhX2NvbmZpZ3VyYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21mYUNvbmZpZ3VyYXRpb24pLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBzbXNfYXV0aGVudGljYXRpb25fbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc21zQXV0aGVudGljYXRpb25NZXNzYWdlKSxcbiAgICAgIHNtc192ZXJpZmljYXRpb25fbWVzc2FnZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc21zVmVyaWZpY2F0aW9uTWVzc2FnZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHVzZXJuYW1lX2F0dHJpYnV0ZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3VzZXJuYW1lQXR0cmlidXRlcyksXG4gICAgICBhY2NvdW50X3JlY292ZXJ5X3NldHRpbmc6IGNvZ25pdG9Vc2VyUG9vbEFjY291bnRSZWNvdmVyeVNldHRpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY2NvdW50UmVjb3ZlcnlTZXR0aW5nLmludGVybmFsVmFsdWUpLFxuICAgICAgYWRtaW5fY3JlYXRlX3VzZXJfY29uZmlnOiBjb2duaXRvVXNlclBvb2xBZG1pbkNyZWF0ZVVzZXJDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9hZG1pbkNyZWF0ZVVzZXJDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBkZXZpY2VfY29uZmlndXJhdGlvbjogY29nbml0b1VzZXJQb29sRGV2aWNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2RldmljZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBlbWFpbF9jb25maWd1cmF0aW9uOiBjb2duaXRvVXNlclBvb2xFbWFpbENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9lbWFpbENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBsYW1iZGFfY29uZmlnOiBjb2duaXRvVXNlclBvb2xMYW1iZGFDb25maWdUb1RlcnJhZm9ybSh0aGlzLl9sYW1iZGFDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBwYXNzd29yZF9wb2xpY3k6IGNvZ25pdG9Vc2VyUG9vbFBhc3N3b3JkUG9saWN5VG9UZXJyYWZvcm0odGhpcy5fcGFzc3dvcmRQb2xpY3kuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzY2hlbWE6IGNka3RmLmxpc3RNYXBwZXIoY29nbml0b1VzZXJQb29sU2NoZW1hVG9UZXJyYWZvcm0pKHRoaXMuX3NjaGVtYSksXG4gICAgICBzbXNfY29uZmlndXJhdGlvbjogY29nbml0b1VzZXJQb29sU21zQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX3Ntc0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzb2Z0d2FyZV90b2tlbl9tZmFfY29uZmlndXJhdGlvbjogY29nbml0b1VzZXJQb29sU29mdHdhcmVUb2tlbk1mYUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9zb2Z0d2FyZVRva2VuTWZhQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHVzZXJfcG9vbF9hZGRfb25zOiBjb2duaXRvVXNlclBvb2xVc2VyUG9vbEFkZE9uc1RvVGVycmFmb3JtKHRoaXMuX3VzZXJQb29sQWRkT25zLmludGVybmFsVmFsdWUpLFxuICAgICAgdXNlcm5hbWVfY29uZmlndXJhdGlvbjogY29nbml0b1VzZXJQb29sVXNlcm5hbWVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0odGhpcy5fdXNlcm5hbWVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgdmVyaWZpY2F0aW9uX21lc3NhZ2VfdGVtcGxhdGU6IGNvZ25pdG9Vc2VyUG9vbFZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZVRvVGVycmFmb3JtKHRoaXMuX3ZlcmlmaWNhdGlvbk1lc3NhZ2VUZW1wbGF0ZS5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=