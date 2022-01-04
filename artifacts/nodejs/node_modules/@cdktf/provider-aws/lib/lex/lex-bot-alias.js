"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexBotAlias = exports.LexBotAliasTimeoutsOutputReference = exports.lexBotAliasTimeoutsToTerraform = exports.LexBotAliasConversationLogsOutputReference = exports.lexBotAliasConversationLogsToTerraform = exports.lexBotAliasConversationLogsLogSettingsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function lexBotAliasConversationLogsLogSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination: cdktf.stringToTerraform(struct.destination),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        log_type: cdktf.stringToTerraform(struct.logType),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.lexBotAliasConversationLogsLogSettingsToTerraform = lexBotAliasConversationLogsLogSettingsToTerraform;
function lexBotAliasConversationLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        iam_role_arn: cdktf.stringToTerraform(struct.iamRoleArn),
        log_settings: cdktf.listMapper(lexBotAliasConversationLogsLogSettingsToTerraform)(struct.logSettings),
    };
}
exports.lexBotAliasConversationLogsToTerraform = lexBotAliasConversationLogsToTerraform;
/**
 * @stability stable
 */
class LexBotAliasConversationLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._iamRoleArn) {
            hasAnyValues = true;
            internalValueResult.iamRoleArn = this._iamRoleArn;
        }
        if (this._logSettings) {
            hasAnyValues = true;
            internalValueResult.logSettings = this._logSettings;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._iamRoleArn = undefined;
            this._logSettings = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._iamRoleArn = value.iamRoleArn;
            this._logSettings = value.logSettings;
        }
    }
    /**
     * @stability stable
     */
    get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    /**
     * @stability stable
     */
    set iamRoleArn(value) {
        this._iamRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get iamRoleArnInput() {
        return this._iamRoleArn;
    }
    /**
     * @stability stable
     */
    get logSettings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('log_settings');
    }
    /**
     * @stability stable
     */
    set logSettings(value) {
        this._logSettings = value;
    }
    /**
     * @stability stable
     */
    resetLogSettings() {
        this._logSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logSettingsInput() {
        return this._logSettings;
    }
}
exports.LexBotAliasConversationLogsOutputReference = LexBotAliasConversationLogsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
LexBotAliasConversationLogsOutputReference[_a] = { fqn: "@cdktf/provider-aws.lex.LexBotAliasConversationLogsOutputReference", version: "3.0.1" };
function lexBotAliasTimeoutsToTerraform(struct) {
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
exports.lexBotAliasTimeoutsToTerraform = lexBotAliasTimeoutsToTerraform;
/**
 * @stability stable
 */
class LexBotAliasTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.LexBotAliasTimeoutsOutputReference = LexBotAliasTimeoutsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
LexBotAliasTimeoutsOutputReference[_b] = { fqn: "@cdktf/provider-aws.lex.LexBotAliasTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias}.
 *
 * @stability stable
 */
class LexBotAlias extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lex_bot_alias',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // conversation_logs - computed: false, optional: true, required: false
        this._conversationLogs = new LexBotAliasConversationLogsOutputReference(this, "conversation_logs", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new LexBotAliasTimeoutsOutputReference(this, "timeouts", true);
        this._botName = config.botName;
        this._botVersion = config.botVersion;
        this._description = config.description;
        this._name = config.name;
        this._conversationLogs.internalValue = config.conversationLogs;
        this._timeouts.internalValue = config.timeouts;
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
    get botName() {
        return this.getStringAttribute('bot_name');
    }
    /**
     * @stability stable
     */
    set botName(value) {
        this._botName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get botNameInput() {
        return this._botName;
    }
    /**
     * @stability stable
     */
    get botVersion() {
        return this.getStringAttribute('bot_version');
    }
    /**
     * @stability stable
     */
    set botVersion(value) {
        this._botVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get botVersionInput() {
        return this._botVersion;
    }
    // checksum - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get checksum() {
        return this.getStringAttribute('checksum');
    }
    // created_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get createdDate() {
        return this.getStringAttribute('created_date');
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
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_updated_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastUpdatedDate() {
        return this.getStringAttribute('last_updated_date');
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
    get conversationLogs() {
        return this._conversationLogs;
    }
    /**
     * @stability stable
     */
    putConversationLogs(value) {
        this._conversationLogs.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetConversationLogs() {
        this._conversationLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get conversationLogsInput() {
        return this._conversationLogs.internalValue;
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
            bot_name: cdktf.stringToTerraform(this._botName),
            bot_version: cdktf.stringToTerraform(this._botVersion),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            conversation_logs: lexBotAliasConversationLogsToTerraform(this._conversationLogs.internalValue),
            timeouts: lexBotAliasTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.LexBotAlias = LexBotAlias;
_c = JSII_RTTI_SYMBOL_1;
LexBotAlias[_c] = { fqn: "@cdktf/provider-aws.lex.LexBotAlias", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
LexBotAlias.tfResourceType = "aws_lex_bot_alias";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV4LWJvdC1hbGlhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXgvbGV4LWJvdC1hbGlhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTRCL0IsU0FBZ0IsaURBQWlELENBQUMsTUFBK0M7SUFDL0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDekQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFYRCw4R0FXQztBQVNELFNBQWdCLHNDQUFzQyxDQUFDLE1BQWlGO0lBQ3RJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3pELFlBQVksRUFB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QixDQUFDLGFBQWEsQ0FBQztZQUMvRixRQUFRLEVBQUUsOEJBQThCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDdkUsQ0FBQztJQUNKLENBQUM7O0FBaEtILGtDQWlLQzs7O0FBL0pDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMEJBQWMsR0FBVyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgTGV4Qm90QWxpYXNDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYm90TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBib3RWZXJzaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb252ZXJzYXRpb25Mb2dzPzogTGV4Qm90QWxpYXNDb252ZXJzYXRpb25Mb2dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0cz86IExleEJvdEFsaWFzVGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIExleEJvdEFsaWFzQ29udmVyc2F0aW9uTG9nc0xvZ1NldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzdGluYXRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEJvdEFsaWFzQ29udmVyc2F0aW9uTG9nc0xvZ1NldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogTGV4Qm90QWxpYXNDb252ZXJzYXRpb25Mb2dzTG9nU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZXN0aW5hdGlvbiksXG4gICAga21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5QXJuKSxcbiAgICBsb2dfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dUeXBlKSxcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4Qm90QWxpYXNDb252ZXJzYXRpb25Mb2dzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpYW1Sb2xlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ1NldHRpbmdzPzogTGV4Qm90QWxpYXNDb252ZXJzYXRpb25Mb2dzTG9nU2V0dGluZ3NbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEJvdEFsaWFzQ29udmVyc2F0aW9uTG9nc1RvVGVycmFmb3JtKHN0cnVjdD86IExleEJvdEFsaWFzQ29udmVyc2F0aW9uTG9nc091dHB1dFJlZmVyZW5jZSB8IExleEJvdEFsaWFzQ29udmVyc2F0aW9uTG9ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlhbV9yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pYW1Sb2xlQXJuKSxcbiAgICBsb2dfc2V0dGluZ3M6IGNka3RmLmxpc3RNYXBwZXIobGV4Qm90QWxpYXNDb252ZXJzYXRpb25Mb2dzTG9nU2V0dGluZ3NUb1RlcnJhZm9ybSkoc3RydWN0IS5sb2dTZXR0aW5ncyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExleEJvdEFsaWFzQ29udmVyc2F0aW9uTG9nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMZXhCb3RBbGlhc0NvbnZlcnNhdGlvbkxvZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lhbVJvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlhbVJvbGVBcm4gPSB0aGlzLl9pYW1Sb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nU2V0dGluZ3MpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ1NldHRpbmdzID0gdGhpcy5fbG9nU2V0dGluZ3M7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMZXhCb3RBbGlhc0NvbnZlcnNhdGlvbkxvZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pYW1Sb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nU2V0dGluZ3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2lhbVJvbGVBcm4gPSB2YWx1ZS5pYW1Sb2xlQXJuO1xuICAgICAgdGhpcy5fbG9nU2V0dGluZ3MgPSB2YWx1ZS5sb2dTZXR0aW5ncztcbiAgICB9XG4gIH1cblxuICAvLyBpYW1fcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaWFtUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaWFtUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lhbV9yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWFtUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWFtUm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpYW1Sb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lhbVJvbGVBcm47XG4gIH1cblxuICAvLyBsb2dfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nU2V0dGluZ3M/OiBMZXhCb3RBbGlhc0NvbnZlcnNhdGlvbkxvZ3NMb2dTZXR0aW5nc1tdOyBcbiAgcHVibGljIGdldCBsb2dTZXR0aW5ncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbG9nX3NldHRpbmdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nU2V0dGluZ3ModmFsdWU6IExleEJvdEFsaWFzQ29udmVyc2F0aW9uTG9nc0xvZ1NldHRpbmdzW10pIHtcbiAgICB0aGlzLl9sb2dTZXR0aW5ncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ1NldHRpbmdzKCkge1xuICAgIHRoaXMuX2xvZ1NldHRpbmdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dTZXR0aW5ncztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMZXhCb3RBbGlhc1RpbWVvdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjcmVhdGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVwZGF0ZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEJvdEFsaWFzVGltZW91dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhCb3RBbGlhc1RpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIHwgTGV4Qm90QWxpYXNUaW1lb3V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jcmVhdGUpLFxuICAgIGRlbGV0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxldGUpLFxuICAgIHVwZGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cGRhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZXhCb3RBbGlhc1RpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExleEJvdEFsaWFzVGltZW91dHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlID0gdGhpcy5fY3JlYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVsZXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExleEJvdEFsaWFzVGltZW91dHMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZWxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlLmNyZWF0ZTtcbiAgICAgIHRoaXMuX2RlbGV0ZSA9IHZhbHVlLmRlbGV0ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlLnVwZGF0ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3JlYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3JlYXRlKCkge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZTtcbiAgfVxuXG4gIC8vIGRlbGV0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxldGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGV0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVsZXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZWxldGUoKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxldGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlO1xuICB9XG5cbiAgLy8gdXBkYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VwZGF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXBkYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cGRhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VwZGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFVwZGF0ZSgpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVwZGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIExleEJvdEFsaWFzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2xleF9ib3RfYWxpYXNcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTGV4Qm90QWxpYXNDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19sZXhfYm90X2FsaWFzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2JvdE5hbWUgPSBjb25maWcuYm90TmFtZTtcbiAgICB0aGlzLl9ib3RWZXJzaW9uID0gY29uZmlnLmJvdFZlcnNpb247XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2NvbnZlcnNhdGlvbkxvZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb252ZXJzYXRpb25Mb2dzO1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSBjb25maWcudGltZW91dHM7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYm90X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYm90TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYm90TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2JvdF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBib3ROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ib3ROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJvdE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm90TmFtZTtcbiAgfVxuXG4gIC8vIGJvdF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2JvdFZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJvdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdib3RfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYm90VmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYm90VmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBib3RWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JvdFZlcnNpb247XG4gIH1cblxuICAvLyBjaGVja3N1bSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNoZWNrc3VtKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2hlY2tzdW0nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFVwZGF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF91cGRhdGVkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gY29udmVyc2F0aW9uX2xvZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udmVyc2F0aW9uTG9ncyA9IG5ldyBMZXhCb3RBbGlhc0NvbnZlcnNhdGlvbkxvZ3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29udmVyc2F0aW9uX2xvZ3NcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29udmVyc2F0aW9uTG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udmVyc2F0aW9uTG9ncztcbiAgfVxuICBwdWJsaWMgcHV0Q29udmVyc2F0aW9uTG9ncyh2YWx1ZTogTGV4Qm90QWxpYXNDb252ZXJzYXRpb25Mb2dzKSB7XG4gICAgdGhpcy5fY29udmVyc2F0aW9uTG9ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udmVyc2F0aW9uTG9ncygpIHtcbiAgICB0aGlzLl9jb252ZXJzYXRpb25Mb2dzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnZlcnNhdGlvbkxvZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udmVyc2F0aW9uTG9ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgTGV4Qm90QWxpYXNUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBMZXhCb3RBbGlhc1RpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvdF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ib3ROYW1lKSxcbiAgICAgIGJvdF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ib3RWZXJzaW9uKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXNjcmlwdGlvbiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIGNvbnZlcnNhdGlvbl9sb2dzOiBsZXhCb3RBbGlhc0NvbnZlcnNhdGlvbkxvZ3NUb1RlcnJhZm9ybSh0aGlzLl9jb252ZXJzYXRpb25Mb2dzLmludGVybmFsVmFsdWUpLFxuICAgICAgdGltZW91dHM6IGxleEJvdEFsaWFzVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=