"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexIntent = exports.LexIntentTimeoutsOutputReference = exports.lexIntentTimeoutsToTerraform = exports.lexIntentSlotToTerraform = exports.LexIntentSlotValueElicitationPromptOutputReference = exports.lexIntentSlotValueElicitationPromptToTerraform = exports.lexIntentSlotValueElicitationPromptMessageToTerraform = exports.LexIntentRejectionStatementOutputReference = exports.lexIntentRejectionStatementToTerraform = exports.lexIntentRejectionStatementMessageToTerraform = exports.LexIntentFulfillmentActivityOutputReference = exports.lexIntentFulfillmentActivityToTerraform = exports.LexIntentFulfillmentActivityCodeHookOutputReference = exports.lexIntentFulfillmentActivityCodeHookToTerraform = exports.LexIntentFollowUpPromptOutputReference = exports.lexIntentFollowUpPromptToTerraform = exports.LexIntentFollowUpPromptRejectionStatementOutputReference = exports.lexIntentFollowUpPromptRejectionStatementToTerraform = exports.lexIntentFollowUpPromptRejectionStatementMessageToTerraform = exports.LexIntentFollowUpPromptPromptOutputReference = exports.lexIntentFollowUpPromptPromptToTerraform = exports.lexIntentFollowUpPromptPromptMessageToTerraform = exports.LexIntentDialogCodeHookOutputReference = exports.lexIntentDialogCodeHookToTerraform = exports.LexIntentConfirmationPromptOutputReference = exports.lexIntentConfirmationPromptToTerraform = exports.lexIntentConfirmationPromptMessageToTerraform = exports.LexIntentConclusionStatementOutputReference = exports.lexIntentConclusionStatementToTerraform = exports.lexIntentConclusionStatementMessageToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function lexIntentConclusionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
exports.lexIntentConclusionStatementMessageToTerraform = lexIntentConclusionStatementMessageToTerraform;
function lexIntentConclusionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentConclusionStatementMessageToTerraform)(struct.message),
    };
}
exports.lexIntentConclusionStatementToTerraform = lexIntentConclusionStatementToTerraform;
/**
 * @stability stable
 */
class LexIntentConclusionStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._responseCard) {
            hasAnyValues = true;
            internalValueResult.responseCard = this._responseCard;
        }
        if (this._message) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._responseCard = undefined;
            this._message = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._responseCard = value.responseCard;
            this._message = value.message;
        }
    }
    /**
     * @stability stable
     */
    get responseCard() {
        return this.getStringAttribute('response_card');
    }
    /**
     * @stability stable
     */
    set responseCard(value) {
        this._responseCard = value;
    }
    /**
     * @stability stable
     */
    resetResponseCard() {
        this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseCardInput() {
        return this._responseCard;
    }
    /**
     * @stability stable
     */
    get message() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('message');
    }
    /**
     * @stability stable
     */
    set message(value) {
        this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageInput() {
        return this._message;
    }
}
exports.LexIntentConclusionStatementOutputReference = LexIntentConclusionStatementOutputReference;
_a = JSII_RTTI_SYMBOL_1;
LexIntentConclusionStatementOutputReference[_a] = { fqn: "@cdktf/provider-aws.lex.LexIntentConclusionStatementOutputReference", version: "3.0.1" };
function lexIntentConfirmationPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
exports.lexIntentConfirmationPromptMessageToTerraform = lexIntentConfirmationPromptMessageToTerraform;
function lexIntentConfirmationPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentConfirmationPromptMessageToTerraform)(struct.message),
    };
}
exports.lexIntentConfirmationPromptToTerraform = lexIntentConfirmationPromptToTerraform;
/**
 * @stability stable
 */
class LexIntentConfirmationPromptOutputReference extends cdktf.ComplexObject {
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
        if (this._maxAttempts) {
            hasAnyValues = true;
            internalValueResult.maxAttempts = this._maxAttempts;
        }
        if (this._responseCard) {
            hasAnyValues = true;
            internalValueResult.responseCard = this._responseCard;
        }
        if (this._message) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxAttempts = undefined;
            this._responseCard = undefined;
            this._message = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxAttempts = value.maxAttempts;
            this._responseCard = value.responseCard;
            this._message = value.message;
        }
    }
    /**
     * @stability stable
     */
    get maxAttempts() {
        return this.getNumberAttribute('max_attempts');
    }
    /**
     * @stability stable
     */
    set maxAttempts(value) {
        this._maxAttempts = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxAttemptsInput() {
        return this._maxAttempts;
    }
    /**
     * @stability stable
     */
    get responseCard() {
        return this.getStringAttribute('response_card');
    }
    /**
     * @stability stable
     */
    set responseCard(value) {
        this._responseCard = value;
    }
    /**
     * @stability stable
     */
    resetResponseCard() {
        this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseCardInput() {
        return this._responseCard;
    }
    /**
     * @stability stable
     */
    get message() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('message');
    }
    /**
     * @stability stable
     */
    set message(value) {
        this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageInput() {
        return this._message;
    }
}
exports.LexIntentConfirmationPromptOutputReference = LexIntentConfirmationPromptOutputReference;
_b = JSII_RTTI_SYMBOL_1;
LexIntentConfirmationPromptOutputReference[_b] = { fqn: "@cdktf/provider-aws.lex.LexIntentConfirmationPromptOutputReference", version: "3.0.1" };
function lexIntentDialogCodeHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        message_version: cdktf.stringToTerraform(struct.messageVersion),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
exports.lexIntentDialogCodeHookToTerraform = lexIntentDialogCodeHookToTerraform;
/**
 * @stability stable
 */
class LexIntentDialogCodeHookOutputReference extends cdktf.ComplexObject {
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
        if (this._messageVersion) {
            hasAnyValues = true;
            internalValueResult.messageVersion = this._messageVersion;
        }
        if (this._uri) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._messageVersion = undefined;
            this._uri = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._messageVersion = value.messageVersion;
            this._uri = value.uri;
        }
    }
    /**
     * @stability stable
     */
    get messageVersion() {
        return this.getStringAttribute('message_version');
    }
    /**
     * @stability stable
     */
    set messageVersion(value) {
        this._messageVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageVersionInput() {
        return this._messageVersion;
    }
    /**
     * @stability stable
     */
    get uri() {
        return this.getStringAttribute('uri');
    }
    /**
     * @stability stable
     */
    set uri(value) {
        this._uri = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get uriInput() {
        return this._uri;
    }
}
exports.LexIntentDialogCodeHookOutputReference = LexIntentDialogCodeHookOutputReference;
_c = JSII_RTTI_SYMBOL_1;
LexIntentDialogCodeHookOutputReference[_c] = { fqn: "@cdktf/provider-aws.lex.LexIntentDialogCodeHookOutputReference", version: "3.0.1" };
function lexIntentFollowUpPromptPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
exports.lexIntentFollowUpPromptPromptMessageToTerraform = lexIntentFollowUpPromptPromptMessageToTerraform;
function lexIntentFollowUpPromptPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentFollowUpPromptPromptMessageToTerraform)(struct.message),
    };
}
exports.lexIntentFollowUpPromptPromptToTerraform = lexIntentFollowUpPromptPromptToTerraform;
/**
 * @stability stable
 */
class LexIntentFollowUpPromptPromptOutputReference extends cdktf.ComplexObject {
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
        if (this._maxAttempts) {
            hasAnyValues = true;
            internalValueResult.maxAttempts = this._maxAttempts;
        }
        if (this._responseCard) {
            hasAnyValues = true;
            internalValueResult.responseCard = this._responseCard;
        }
        if (this._message) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxAttempts = undefined;
            this._responseCard = undefined;
            this._message = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxAttempts = value.maxAttempts;
            this._responseCard = value.responseCard;
            this._message = value.message;
        }
    }
    /**
     * @stability stable
     */
    get maxAttempts() {
        return this.getNumberAttribute('max_attempts');
    }
    /**
     * @stability stable
     */
    set maxAttempts(value) {
        this._maxAttempts = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxAttemptsInput() {
        return this._maxAttempts;
    }
    /**
     * @stability stable
     */
    get responseCard() {
        return this.getStringAttribute('response_card');
    }
    /**
     * @stability stable
     */
    set responseCard(value) {
        this._responseCard = value;
    }
    /**
     * @stability stable
     */
    resetResponseCard() {
        this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseCardInput() {
        return this._responseCard;
    }
    /**
     * @stability stable
     */
    get message() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('message');
    }
    /**
     * @stability stable
     */
    set message(value) {
        this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageInput() {
        return this._message;
    }
}
exports.LexIntentFollowUpPromptPromptOutputReference = LexIntentFollowUpPromptPromptOutputReference;
_d = JSII_RTTI_SYMBOL_1;
LexIntentFollowUpPromptPromptOutputReference[_d] = { fqn: "@cdktf/provider-aws.lex.LexIntentFollowUpPromptPromptOutputReference", version: "3.0.1" };
function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
exports.lexIntentFollowUpPromptRejectionStatementMessageToTerraform = lexIntentFollowUpPromptRejectionStatementMessageToTerraform;
function lexIntentFollowUpPromptRejectionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentFollowUpPromptRejectionStatementMessageToTerraform)(struct.message),
    };
}
exports.lexIntentFollowUpPromptRejectionStatementToTerraform = lexIntentFollowUpPromptRejectionStatementToTerraform;
/**
 * @stability stable
 */
class LexIntentFollowUpPromptRejectionStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._responseCard) {
            hasAnyValues = true;
            internalValueResult.responseCard = this._responseCard;
        }
        if (this._message) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._responseCard = undefined;
            this._message = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._responseCard = value.responseCard;
            this._message = value.message;
        }
    }
    /**
     * @stability stable
     */
    get responseCard() {
        return this.getStringAttribute('response_card');
    }
    /**
     * @stability stable
     */
    set responseCard(value) {
        this._responseCard = value;
    }
    /**
     * @stability stable
     */
    resetResponseCard() {
        this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseCardInput() {
        return this._responseCard;
    }
    /**
     * @stability stable
     */
    get message() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('message');
    }
    /**
     * @stability stable
     */
    set message(value) {
        this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageInput() {
        return this._message;
    }
}
exports.LexIntentFollowUpPromptRejectionStatementOutputReference = LexIntentFollowUpPromptRejectionStatementOutputReference;
_e = JSII_RTTI_SYMBOL_1;
LexIntentFollowUpPromptRejectionStatementOutputReference[_e] = { fqn: "@cdktf/provider-aws.lex.LexIntentFollowUpPromptRejectionStatementOutputReference", version: "3.0.1" };
function lexIntentFollowUpPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        prompt: lexIntentFollowUpPromptPromptToTerraform(struct.prompt),
        rejection_statement: lexIntentFollowUpPromptRejectionStatementToTerraform(struct.rejectionStatement),
    };
}
exports.lexIntentFollowUpPromptToTerraform = lexIntentFollowUpPromptToTerraform;
/**
 * @stability stable
 */
class LexIntentFollowUpPromptOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // prompt - computed: false, optional: false, required: true
        this._prompt = new LexIntentFollowUpPromptPromptOutputReference(this, "prompt", true);
        // rejection_statement - computed: false, optional: false, required: true
        this._rejectionStatement = new LexIntentFollowUpPromptRejectionStatementOutputReference(this, "rejection_statement", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _o, _p, _q, _r;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_o = this._prompt) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.prompt = (_p = this._prompt) === null || _p === void 0 ? void 0 : _p.internalValue;
        }
        if ((_q = this._rejectionStatement) === null || _q === void 0 ? void 0 : _q.internalValue) {
            hasAnyValues = true;
            internalValueResult.rejectionStatement = (_r = this._rejectionStatement) === null || _r === void 0 ? void 0 : _r.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._prompt.internalValue = undefined;
            this._rejectionStatement.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._prompt.internalValue = value.prompt;
            this._rejectionStatement.internalValue = value.rejectionStatement;
        }
    }
    /**
     * @stability stable
     */
    get prompt() {
        return this._prompt;
    }
    /**
     * @stability stable
     */
    putPrompt(value) {
        this._prompt.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get promptInput() {
        return this._prompt.internalValue;
    }
    /**
     * @stability stable
     */
    get rejectionStatement() {
        return this._rejectionStatement;
    }
    /**
     * @stability stable
     */
    putRejectionStatement(value) {
        this._rejectionStatement.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rejectionStatementInput() {
        return this._rejectionStatement.internalValue;
    }
}
exports.LexIntentFollowUpPromptOutputReference = LexIntentFollowUpPromptOutputReference;
_f = JSII_RTTI_SYMBOL_1;
LexIntentFollowUpPromptOutputReference[_f] = { fqn: "@cdktf/provider-aws.lex.LexIntentFollowUpPromptOutputReference", version: "3.0.1" };
function lexIntentFulfillmentActivityCodeHookToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        message_version: cdktf.stringToTerraform(struct.messageVersion),
        uri: cdktf.stringToTerraform(struct.uri),
    };
}
exports.lexIntentFulfillmentActivityCodeHookToTerraform = lexIntentFulfillmentActivityCodeHookToTerraform;
/**
 * @stability stable
 */
class LexIntentFulfillmentActivityCodeHookOutputReference extends cdktf.ComplexObject {
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
        if (this._messageVersion) {
            hasAnyValues = true;
            internalValueResult.messageVersion = this._messageVersion;
        }
        if (this._uri) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._messageVersion = undefined;
            this._uri = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._messageVersion = value.messageVersion;
            this._uri = value.uri;
        }
    }
    /**
     * @stability stable
     */
    get messageVersion() {
        return this.getStringAttribute('message_version');
    }
    /**
     * @stability stable
     */
    set messageVersion(value) {
        this._messageVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageVersionInput() {
        return this._messageVersion;
    }
    /**
     * @stability stable
     */
    get uri() {
        return this.getStringAttribute('uri');
    }
    /**
     * @stability stable
     */
    set uri(value) {
        this._uri = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get uriInput() {
        return this._uri;
    }
}
exports.LexIntentFulfillmentActivityCodeHookOutputReference = LexIntentFulfillmentActivityCodeHookOutputReference;
_g = JSII_RTTI_SYMBOL_1;
LexIntentFulfillmentActivityCodeHookOutputReference[_g] = { fqn: "@cdktf/provider-aws.lex.LexIntentFulfillmentActivityCodeHookOutputReference", version: "3.0.1" };
function lexIntentFulfillmentActivityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        code_hook: lexIntentFulfillmentActivityCodeHookToTerraform(struct.codeHook),
    };
}
exports.lexIntentFulfillmentActivityToTerraform = lexIntentFulfillmentActivityToTerraform;
/**
 * @stability stable
 */
class LexIntentFulfillmentActivityOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // code_hook - computed: false, optional: true, required: false
        this._codeHook = new LexIntentFulfillmentActivityCodeHookOutputReference(this, "code_hook", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _o, _p;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if ((_o = this._codeHook) === null || _o === void 0 ? void 0 : _o.internalValue) {
            hasAnyValues = true;
            internalValueResult.codeHook = (_p = this._codeHook) === null || _p === void 0 ? void 0 : _p.internalValue;
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
            this._codeHook.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
            this._codeHook.internalValue = value.codeHook;
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
    get codeHook() {
        return this._codeHook;
    }
    /**
     * @stability stable
     */
    putCodeHook(value) {
        this._codeHook.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCodeHook() {
        this._codeHook.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codeHookInput() {
        return this._codeHook.internalValue;
    }
}
exports.LexIntentFulfillmentActivityOutputReference = LexIntentFulfillmentActivityOutputReference;
_h = JSII_RTTI_SYMBOL_1;
LexIntentFulfillmentActivityOutputReference[_h] = { fqn: "@cdktf/provider-aws.lex.LexIntentFulfillmentActivityOutputReference", version: "3.0.1" };
function lexIntentRejectionStatementMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
exports.lexIntentRejectionStatementMessageToTerraform = lexIntentRejectionStatementMessageToTerraform;
function lexIntentRejectionStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentRejectionStatementMessageToTerraform)(struct.message),
    };
}
exports.lexIntentRejectionStatementToTerraform = lexIntentRejectionStatementToTerraform;
/**
 * @stability stable
 */
class LexIntentRejectionStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._responseCard) {
            hasAnyValues = true;
            internalValueResult.responseCard = this._responseCard;
        }
        if (this._message) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._responseCard = undefined;
            this._message = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._responseCard = value.responseCard;
            this._message = value.message;
        }
    }
    /**
     * @stability stable
     */
    get responseCard() {
        return this.getStringAttribute('response_card');
    }
    /**
     * @stability stable
     */
    set responseCard(value) {
        this._responseCard = value;
    }
    /**
     * @stability stable
     */
    resetResponseCard() {
        this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseCardInput() {
        return this._responseCard;
    }
    /**
     * @stability stable
     */
    get message() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('message');
    }
    /**
     * @stability stable
     */
    set message(value) {
        this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageInput() {
        return this._message;
    }
}
exports.LexIntentRejectionStatementOutputReference = LexIntentRejectionStatementOutputReference;
_j = JSII_RTTI_SYMBOL_1;
LexIntentRejectionStatementOutputReference[_j] = { fqn: "@cdktf/provider-aws.lex.LexIntentRejectionStatementOutputReference", version: "3.0.1" };
function lexIntentSlotValueElicitationPromptMessageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        group_number: cdktf.numberToTerraform(struct.groupNumber),
    };
}
exports.lexIntentSlotValueElicitationPromptMessageToTerraform = lexIntentSlotValueElicitationPromptMessageToTerraform;
function lexIntentSlotValueElicitationPromptToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_attempts: cdktf.numberToTerraform(struct.maxAttempts),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        message: cdktf.listMapper(lexIntentSlotValueElicitationPromptMessageToTerraform)(struct.message),
    };
}
exports.lexIntentSlotValueElicitationPromptToTerraform = lexIntentSlotValueElicitationPromptToTerraform;
/**
 * @stability stable
 */
class LexIntentSlotValueElicitationPromptOutputReference extends cdktf.ComplexObject {
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
        if (this._maxAttempts) {
            hasAnyValues = true;
            internalValueResult.maxAttempts = this._maxAttempts;
        }
        if (this._responseCard) {
            hasAnyValues = true;
            internalValueResult.responseCard = this._responseCard;
        }
        if (this._message) {
            hasAnyValues = true;
            internalValueResult.message = this._message;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._maxAttempts = undefined;
            this._responseCard = undefined;
            this._message = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._maxAttempts = value.maxAttempts;
            this._responseCard = value.responseCard;
            this._message = value.message;
        }
    }
    /**
     * @stability stable
     */
    get maxAttempts() {
        return this.getNumberAttribute('max_attempts');
    }
    /**
     * @stability stable
     */
    set maxAttempts(value) {
        this._maxAttempts = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxAttemptsInput() {
        return this._maxAttempts;
    }
    /**
     * @stability stable
     */
    get responseCard() {
        return this.getStringAttribute('response_card');
    }
    /**
     * @stability stable
     */
    set responseCard(value) {
        this._responseCard = value;
    }
    /**
     * @stability stable
     */
    resetResponseCard() {
        this._responseCard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get responseCardInput() {
        return this._responseCard;
    }
    /**
     * @stability stable
     */
    get message() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('message');
    }
    /**
     * @stability stable
     */
    set message(value) {
        this._message = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageInput() {
        return this._message;
    }
}
exports.LexIntentSlotValueElicitationPromptOutputReference = LexIntentSlotValueElicitationPromptOutputReference;
_k = JSII_RTTI_SYMBOL_1;
LexIntentSlotValueElicitationPromptOutputReference[_k] = { fqn: "@cdktf/provider-aws.lex.LexIntentSlotValueElicitationPromptOutputReference", version: "3.0.1" };
function lexIntentSlotToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
        response_card: cdktf.stringToTerraform(struct.responseCard),
        sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(struct.sampleUtterances),
        slot_constraint: cdktf.stringToTerraform(struct.slotConstraint),
        slot_type: cdktf.stringToTerraform(struct.slotType),
        slot_type_version: cdktf.stringToTerraform(struct.slotTypeVersion),
        value_elicitation_prompt: lexIntentSlotValueElicitationPromptToTerraform(struct.valueElicitationPrompt),
    };
}
exports.lexIntentSlotToTerraform = lexIntentSlotToTerraform;
function lexIntentTimeoutsToTerraform(struct) {
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
exports.lexIntentTimeoutsToTerraform = lexIntentTimeoutsToTerraform;
/**
 * @stability stable
 */
class LexIntentTimeoutsOutputReference extends cdktf.ComplexObject {
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
exports.LexIntentTimeoutsOutputReference = LexIntentTimeoutsOutputReference;
_l = JSII_RTTI_SYMBOL_1;
LexIntentTimeoutsOutputReference[_l] = { fqn: "@cdktf/provider-aws.lex.LexIntentTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent}.
 *
 * @stability stable
 */
class LexIntent extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lex_intent',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // conclusion_statement - computed: false, optional: true, required: false
        this._conclusionStatement = new LexIntentConclusionStatementOutputReference(this, "conclusion_statement", true);
        // confirmation_prompt - computed: false, optional: true, required: false
        this._confirmationPrompt = new LexIntentConfirmationPromptOutputReference(this, "confirmation_prompt", true);
        // dialog_code_hook - computed: false, optional: true, required: false
        this._dialogCodeHook = new LexIntentDialogCodeHookOutputReference(this, "dialog_code_hook", true);
        // follow_up_prompt - computed: false, optional: true, required: false
        this._followUpPrompt = new LexIntentFollowUpPromptOutputReference(this, "follow_up_prompt", true);
        // fulfillment_activity - computed: false, optional: false, required: true
        this._fulfillmentActivity = new LexIntentFulfillmentActivityOutputReference(this, "fulfillment_activity", true);
        // rejection_statement - computed: false, optional: true, required: false
        this._rejectionStatement = new LexIntentRejectionStatementOutputReference(this, "rejection_statement", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new LexIntentTimeoutsOutputReference(this, "timeouts", true);
        this._createVersion = config.createVersion;
        this._description = config.description;
        this._name = config.name;
        this._parentIntentSignature = config.parentIntentSignature;
        this._sampleUtterances = config.sampleUtterances;
        this._conclusionStatement.internalValue = config.conclusionStatement;
        this._confirmationPrompt.internalValue = config.confirmationPrompt;
        this._dialogCodeHook.internalValue = config.dialogCodeHook;
        this._followUpPrompt.internalValue = config.followUpPrompt;
        this._fulfillmentActivity.internalValue = config.fulfillmentActivity;
        this._rejectionStatement.internalValue = config.rejectionStatement;
        this._slot = config.slot;
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
    // checksum - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get checksum() {
        return this.getStringAttribute('checksum');
    }
    /**
     * @stability stable
     */
    get createVersion() {
        return this.getBooleanAttribute('create_version');
    }
    /**
     * @stability stable
     */
    set createVersion(value) {
        this._createVersion = value;
    }
    /**
     * @stability stable
     */
    resetCreateVersion() {
        this._createVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createVersionInput() {
        return this._createVersion;
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
    get parentIntentSignature() {
        return this.getStringAttribute('parent_intent_signature');
    }
    /**
     * @stability stable
     */
    set parentIntentSignature(value) {
        this._parentIntentSignature = value;
    }
    /**
     * @stability stable
     */
    resetParentIntentSignature() {
        this._parentIntentSignature = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parentIntentSignatureInput() {
        return this._parentIntentSignature;
    }
    /**
     * @stability stable
     */
    get sampleUtterances() {
        return this.getListAttribute('sample_utterances');
    }
    /**
     * @stability stable
     */
    set sampleUtterances(value) {
        this._sampleUtterances = value;
    }
    /**
     * @stability stable
     */
    resetSampleUtterances() {
        this._sampleUtterances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sampleUtterancesInput() {
        return this._sampleUtterances;
    }
    // version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    /**
     * @stability stable
     */
    get conclusionStatement() {
        return this._conclusionStatement;
    }
    /**
     * @stability stable
     */
    putConclusionStatement(value) {
        this._conclusionStatement.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetConclusionStatement() {
        this._conclusionStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get conclusionStatementInput() {
        return this._conclusionStatement.internalValue;
    }
    /**
     * @stability stable
     */
    get confirmationPrompt() {
        return this._confirmationPrompt;
    }
    /**
     * @stability stable
     */
    putConfirmationPrompt(value) {
        this._confirmationPrompt.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetConfirmationPrompt() {
        this._confirmationPrompt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get confirmationPromptInput() {
        return this._confirmationPrompt.internalValue;
    }
    /**
     * @stability stable
     */
    get dialogCodeHook() {
        return this._dialogCodeHook;
    }
    /**
     * @stability stable
     */
    putDialogCodeHook(value) {
        this._dialogCodeHook.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDialogCodeHook() {
        this._dialogCodeHook.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dialogCodeHookInput() {
        return this._dialogCodeHook.internalValue;
    }
    /**
     * @stability stable
     */
    get followUpPrompt() {
        return this._followUpPrompt;
    }
    /**
     * @stability stable
     */
    putFollowUpPrompt(value) {
        this._followUpPrompt.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFollowUpPrompt() {
        this._followUpPrompt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get followUpPromptInput() {
        return this._followUpPrompt.internalValue;
    }
    /**
     * @stability stable
     */
    get fulfillmentActivity() {
        return this._fulfillmentActivity;
    }
    /**
     * @stability stable
     */
    putFulfillmentActivity(value) {
        this._fulfillmentActivity.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fulfillmentActivityInput() {
        return this._fulfillmentActivity.internalValue;
    }
    /**
     * @stability stable
     */
    get rejectionStatement() {
        return this._rejectionStatement;
    }
    /**
     * @stability stable
     */
    putRejectionStatement(value) {
        this._rejectionStatement.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRejectionStatement() {
        this._rejectionStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rejectionStatementInput() {
        return this._rejectionStatement.internalValue;
    }
    /**
     * @stability stable
     */
    get slot() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('slot');
    }
    /**
     * @stability stable
     */
    set slot(value) {
        this._slot = value;
    }
    /**
     * @stability stable
     */
    resetSlot() {
        this._slot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get slotInput() {
        return this._slot;
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
            create_version: cdktf.booleanToTerraform(this._createVersion),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            parent_intent_signature: cdktf.stringToTerraform(this._parentIntentSignature),
            sample_utterances: cdktf.listMapper(cdktf.stringToTerraform)(this._sampleUtterances),
            conclusion_statement: lexIntentConclusionStatementToTerraform(this._conclusionStatement.internalValue),
            confirmation_prompt: lexIntentConfirmationPromptToTerraform(this._confirmationPrompt.internalValue),
            dialog_code_hook: lexIntentDialogCodeHookToTerraform(this._dialogCodeHook.internalValue),
            follow_up_prompt: lexIntentFollowUpPromptToTerraform(this._followUpPrompt.internalValue),
            fulfillment_activity: lexIntentFulfillmentActivityToTerraform(this._fulfillmentActivity.internalValue),
            rejection_statement: lexIntentRejectionStatementToTerraform(this._rejectionStatement.internalValue),
            slot: cdktf.listMapper(lexIntentSlotToTerraform)(this._slot),
            timeouts: lexIntentTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.LexIntent = LexIntent;
_m = JSII_RTTI_SYMBOL_1;
LexIntent[_m] = { fqn: "@cdktf/provider-aws.lex.LexIntent", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
LexIntent.tfResourceType = "aws_lex_intent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV4LWludGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXgvbGV4LWludGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXdDL0IsU0FBZ0IsOENBQThDLENBQUMsTUFBNEM7SUFDekcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDakQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQVZELHdHQVVDO0FBU0QsU0FBZ0IsdUNBQXVDLENBQUMsTUFBbUY7SUFDekksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOENBQThDLENBQUMsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQzNG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QUFlLENBQUMsYUFBYSxDQUFDO1lBQ3hGLGdCQUFnQixFQUFFLGtDQUFrQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1lBQ3hGLG9CQUFvQixFQUFFLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7WUFDdEcsbUJBQW1CLEVBQUUsc0NBQXNDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztZQUNuRyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUQsUUFBUSxFQUFFLDRCQUE0QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQ3JFLENBQUM7SUFDSixDQUFDOztBQXZTSCw4QkF3U0M7OztBQXRTQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHdCQUFjLEdBQVcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlVmVyc2lvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmVudEludGVudFNpZ25hdHVyZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNhbXBsZVV0dGVyYW5jZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmNsdXNpb25TdGF0ZW1lbnQ/OiBMZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlybWF0aW9uUHJvbXB0PzogTGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGlhbG9nQ29kZUhvb2s/OiBMZXhJbnRlbnREaWFsb2dDb2RlSG9vaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZvbGxvd1VwUHJvbXB0PzogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmdWxmaWxsbWVudEFjdGl2aXR5OiBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVqZWN0aW9uU3RhdGVtZW50PzogTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2xvdD86IExleEludGVudFNsb3RbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogTGV4SW50ZW50VGltZW91dHM7XG59XG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnRNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3VwTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudE1lc3NhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50TWVzc2FnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudCksXG4gICAgY29udGVudF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnRUeXBlKSxcbiAgICBncm91cF9udW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZ3JvdXBOdW1iZXIpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VDYXJkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZTogTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudE1lc3NhZ2VbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50T3V0cHV0UmVmZXJlbmNlIHwgTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc3BvbnNlX2NhcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VDYXJkKSxcbiAgICBtZXNzYWdlOiBjZGt0Zi5saXN0TWFwcGVyKGxleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnRNZXNzYWdlVG9UZXJyYWZvcm0pKHN0cnVjdCEubWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzcG9uc2VDYXJkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNwb25zZUNhcmQgPSB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXNzYWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXNzYWdlID0gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB2YWx1ZS5yZXNwb25zZUNhcmQ7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWUubWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICAvLyByZXNwb25zZV9jYXJkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc3BvbnNlQ2FyZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzcG9uc2VDYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzcG9uc2VfY2FyZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzcG9uc2VDYXJkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNwb25zZUNhcmQoKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VDYXJkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNwb25zZUNhcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VDYXJkO1xuICB9XG5cbiAgLy8gbWVzc2FnZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tZXNzYWdlPzogTGV4SW50ZW50Q29uY2x1c2lvblN0YXRlbWVudE1lc3NhZ2VbXTsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWVzc2FnZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2UodmFsdWU6IExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnRNZXNzYWdlW10pIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3VwTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0TWVzc2FnZVRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudENvbmZpcm1hdGlvblByb21wdE1lc3NhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnQpLFxuICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgZ3JvdXBfbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwTnVtYmVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudENvbmZpcm1hdGlvblByb21wdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1heEF0dGVtcHRzOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VDYXJkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZTogTGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0TWVzc2FnZVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0VG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0T3V0cHV0UmVmZXJlbmNlIHwgTGV4SW50ZW50Q29uZmlybWF0aW9uUHJvbXB0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWF4X2F0dGVtcHRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heEF0dGVtcHRzKSxcbiAgICByZXNwb25zZV9jYXJkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3BvbnNlQ2FyZCksXG4gICAgbWVzc2FnZTogY2RrdGYubGlzdE1hcHBlcihsZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRNZXNzYWdlVG9UZXJyYWZvcm0pKHN0cnVjdCEubWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExleEludGVudENvbmZpcm1hdGlvblByb21wdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21heEF0dGVtcHRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhBdHRlbXB0cyA9IHRoaXMuX21heEF0dGVtcHRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzcG9uc2VDYXJkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNwb25zZUNhcmQgPSB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXNzYWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXNzYWdlID0gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExleEludGVudENvbmZpcm1hdGlvblByb21wdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heEF0dGVtcHRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzcG9uc2VDYXJkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4QXR0ZW1wdHMgPSB2YWx1ZS5tYXhBdHRlbXB0cztcbiAgICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlLnJlc3BvbnNlQ2FyZDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9hdHRlbXB0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhBdHRlbXB0cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4QXR0ZW1wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfYXR0ZW1wdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEF0dGVtcHRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhBdHRlbXB0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhBdHRlbXB0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhBdHRlbXB0cztcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX2NhcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzcG9uc2VDYXJkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNwb25zZUNhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNwb25zZV9jYXJkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNwb25zZUNhcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlQ2FyZCgpIHtcbiAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlQ2FyZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gIH1cblxuICAvLyBtZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc3NhZ2U/OiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRNZXNzYWdlW107IFxuICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21lc3NhZ2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNzYWdlKHZhbHVlOiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRNZXNzYWdlW10pIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnREaWFsb2dDb2RlSG9vayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2VWZXJzaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVyaTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4SW50ZW50RGlhbG9nQ29kZUhvb2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnREaWFsb2dDb2RlSG9va091dHB1dFJlZmVyZW5jZSB8IExleEludGVudERpYWxvZ0NvZGVIb29rKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2VWZXJzaW9uKSxcbiAgICB1cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXJpKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGV4SW50ZW50RGlhbG9nQ29kZUhvb2tPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGV4SW50ZW50RGlhbG9nQ29kZUhvb2sgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VWZXJzaW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXNzYWdlVmVyc2lvbiA9IHRoaXMuX21lc3NhZ2VWZXJzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdXJpKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC51cmkgPSB0aGlzLl91cmk7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMZXhJbnRlbnREaWFsb2dDb2RlSG9vayB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21lc3NhZ2VWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXJpID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tZXNzYWdlVmVyc2lvbiA9IHZhbHVlLm1lc3NhZ2VWZXJzaW9uO1xuICAgICAgdGhpcy5fdXJpID0gdmFsdWUudXJpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1lc3NhZ2VfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tZXNzYWdlVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXNzYWdlX3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2VWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlVmVyc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlVmVyc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlVmVyc2lvbjtcbiAgfVxuXG4gIC8vIHVyaSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91cmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVyaSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VyaScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXJpKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cmkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXJpSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VyaTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdE1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JvdXBOdW1iZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdE1lc3NhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdE1lc3NhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnQpLFxuICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgZ3JvdXBfbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwTnVtYmVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4QXR0ZW1wdHM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZUNhcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNzYWdlOiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdE1lc3NhZ2VbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0VG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHRPdXRwdXRSZWZlcmVuY2UgfCBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9hdHRlbXB0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhBdHRlbXB0cyksXG4gICAgcmVzcG9uc2VfY2FyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZUNhcmQpLFxuICAgIG1lc3NhZ2U6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50Rm9sbG93VXBQcm9tcHRQcm9tcHRNZXNzYWdlVG9UZXJyYWZvcm0pKHN0cnVjdCEubWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhBdHRlbXB0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4QXR0ZW1wdHMgPSB0aGlzLl9tYXhBdHRlbXB0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc3BvbnNlQ2FyZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzcG9uc2VDYXJkID0gdGhpcy5fcmVzcG9uc2VDYXJkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVzc2FnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVzc2FnZSA9IHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heEF0dGVtcHRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzcG9uc2VDYXJkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4QXR0ZW1wdHMgPSB2YWx1ZS5tYXhBdHRlbXB0cztcbiAgICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlLnJlc3BvbnNlQ2FyZDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9hdHRlbXB0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhBdHRlbXB0cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4QXR0ZW1wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfYXR0ZW1wdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEF0dGVtcHRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhBdHRlbXB0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhBdHRlbXB0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhBdHRlbXB0cztcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX2NhcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzcG9uc2VDYXJkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNwb25zZUNhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNwb25zZV9jYXJkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNwb25zZUNhcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlQ2FyZCgpIHtcbiAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlQ2FyZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gIH1cblxuICAvLyBtZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc3NhZ2U/OiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdE1lc3NhZ2VbXTsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWVzc2FnZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2UodmFsdWU6IExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0TWVzc2FnZVtdKSB7XG4gICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRNZXNzYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyb3VwTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRNZXNzYWdlVG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRNZXNzYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50KSxcbiAgICBjb250ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFR5cGUpLFxuICAgIGdyb3VwX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ncm91cE51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzcG9uc2VDYXJkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZTogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRNZXNzYWdlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudFRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudEZvbGxvd1VwUHJvbXB0UmVqZWN0aW9uU3RhdGVtZW50T3V0cHV0UmVmZXJlbmNlIHwgTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXNwb25zZV9jYXJkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3BvbnNlQ2FyZCksXG4gICAgbWVzc2FnZTogY2RrdGYubGlzdE1hcHBlcihsZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXNzYWdlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Jlc3BvbnNlQ2FyZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzcG9uc2VDYXJkID0gdGhpcy5fcmVzcG9uc2VDYXJkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVzc2FnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVzc2FnZSA9IHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlLnJlc3BvbnNlQ2FyZDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc3BvbnNlX2NhcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzcG9uc2VDYXJkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNwb25zZUNhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNwb25zZV9jYXJkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNwb25zZUNhcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlQ2FyZCgpIHtcbiAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlQ2FyZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gIH1cblxuICAvLyBtZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc3NhZ2U/OiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VbXTsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWVzc2FnZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2UodmFsdWU6IExleEludGVudEZvbGxvd1VwUHJvbXB0UmVqZWN0aW9uU3RhdGVtZW50TWVzc2FnZVtdKSB7XG4gICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50Rm9sbG93VXBQcm9tcHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvbXB0OiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlamVjdGlvblN0YXRlbWVudDogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhJbnRlbnRGb2xsb3dVcFByb21wdFRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudEZvbGxvd1VwUHJvbXB0T3V0cHV0UmVmZXJlbmNlIHwgTGV4SW50ZW50Rm9sbG93VXBQcm9tcHQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9tcHQ6IGxleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0VG9UZXJyYWZvcm0oc3RydWN0IS5wcm9tcHQpLFxuICAgIHJlamVjdGlvbl9zdGF0ZW1lbnQ6IGxleEludGVudEZvbGxvd1VwUHJvbXB0UmVqZWN0aW9uU3RhdGVtZW50VG9UZXJyYWZvcm0oc3RydWN0IS5yZWplY3Rpb25TdGF0ZW1lbnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZXhJbnRlbnRGb2xsb3dVcFByb21wdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJvbXB0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9tcHQgPSB0aGlzLl9wcm9tcHQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWplY3Rpb25TdGF0ZW1lbnQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlamVjdGlvblN0YXRlbWVudCA9IHRoaXMuX3JlamVjdGlvblN0YXRlbWVudD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExleEludGVudEZvbGxvd1VwUHJvbXB0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJvbXB0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWplY3Rpb25TdGF0ZW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJvbXB0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcm9tcHQ7XG4gICAgICB0aGlzLl9yZWplY3Rpb25TdGF0ZW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlamVjdGlvblN0YXRlbWVudDtcbiAgICB9XG4gIH1cblxuICAvLyBwcm9tcHQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJvbXB0ID0gbmV3IExleEludGVudEZvbGxvd1VwUHJvbXB0UHJvbXB0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByb21wdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcm9tcHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21wdDtcbiAgfVxuICBwdWJsaWMgcHV0UHJvbXB0KHZhbHVlOiBMZXhJbnRlbnRGb2xsb3dVcFByb21wdFByb21wdCkge1xuICAgIHRoaXMuX3Byb21wdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb21wdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9tcHQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlamVjdGlvbl9zdGF0ZW1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVqZWN0aW9uU3RhdGVtZW50ID0gbmV3IExleEludGVudEZvbGxvd1VwUHJvbXB0UmVqZWN0aW9uU3RhdGVtZW50T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlamVjdGlvbl9zdGF0ZW1lbnRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVqZWN0aW9uU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25TdGF0ZW1lbnQ7XG4gIH1cbiAgcHVibGljIHB1dFJlamVjdGlvblN0YXRlbWVudCh2YWx1ZTogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHRSZWplY3Rpb25TdGF0ZW1lbnQpIHtcbiAgICB0aGlzLl9yZWplY3Rpb25TdGF0ZW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWplY3Rpb25TdGF0ZW1lbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVqZWN0aW9uU3RhdGVtZW50LmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eUNvZGVIb29rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZVZlcnNpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXJpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5Q29kZUhvb2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5Q29kZUhvb2tPdXRwdXRSZWZlcmVuY2UgfCBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5Q29kZUhvb2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZVZlcnNpb24pLFxuICAgIHVyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51cmkpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5Q29kZUhvb2tPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eUNvZGVIb29rIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tZXNzYWdlVmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVzc2FnZVZlcnNpb24gPSB0aGlzLl9tZXNzYWdlVmVyc2lvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VyaSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXJpID0gdGhpcy5fdXJpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eUNvZGVIb29rIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbWVzc2FnZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl91cmkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX21lc3NhZ2VWZXJzaW9uID0gdmFsdWUubWVzc2FnZVZlcnNpb247XG4gICAgICB0aGlzLl91cmkgPSB2YWx1ZS51cmk7XG4gICAgfVxuICB9XG5cbiAgLy8gbWVzc2FnZV92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc3NhZ2VWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXNzYWdlVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2VfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWVzc2FnZVZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2VWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VWZXJzaW9uO1xuICB9XG5cbiAgLy8gdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3VyaT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXJpKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJpJyk7XG4gIH1cbiAgcHVibGljIHNldCB1cmkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VyaSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1cmlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXJpO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvZGVIb29rPzogTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eUNvZGVIb29rO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eVRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHlPdXRwdXRSZWZlcmVuY2UgfCBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICBjb2RlX2hvb2s6IGxleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHlDb2RlSG9va1RvVGVycmFmb3JtKHN0cnVjdCEuY29kZUhvb2spLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHkgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3R5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnR5cGUgPSB0aGlzLl90eXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29kZUhvb2s/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVIb29rID0gdGhpcy5fY29kZUhvb2s/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvZGVIb29rLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZS50eXBlO1xuICAgICAgdGhpcy5fY29kZUhvb2suaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvZGVIb29rO1xuICAgIH1cbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgLy8gY29kZV9ob29rIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZGVIb29rID0gbmV3IExleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHlDb2RlSG9va091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb2RlX2hvb2tcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29kZUhvb2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVIb29rO1xuICB9XG4gIHB1YmxpYyBwdXRDb2RlSG9vayh2YWx1ZTogTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eUNvZGVIb29rKSB7XG4gICAgdGhpcy5fY29kZUhvb2suaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvZGVIb29rKCkge1xuICAgIHRoaXMuX2NvZGVIb29rLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvZGVIb29rSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVIb29rLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50TWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb250ZW50VHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncm91cE51bWJlcj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEludGVudFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRSZWplY3Rpb25TdGF0ZW1lbnRNZXNzYWdlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29udGVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50KSxcbiAgICBjb250ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudFR5cGUpLFxuICAgIGdyb3VwX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ncm91cE51bWJlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRSZWplY3Rpb25TdGF0ZW1lbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc3BvbnNlQ2FyZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2U6IExleEludGVudFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEludGVudFJlamVjdGlvblN0YXRlbWVudFRvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudFJlamVjdGlvblN0YXRlbWVudE91dHB1dFJlZmVyZW5jZSB8IExleEludGVudFJlamVjdGlvblN0YXRlbWVudCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc3BvbnNlX2NhcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzcG9uc2VDYXJkKSxcbiAgICBtZXNzYWdlOiBjZGt0Zi5saXN0TWFwcGVyKGxleEludGVudFJlamVjdGlvblN0YXRlbWVudE1lc3NhZ2VUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXNzYWdlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExleEludGVudFJlamVjdGlvblN0YXRlbWVudCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzcG9uc2VDYXJkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNwb25zZUNhcmQgPSB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXNzYWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXNzYWdlID0gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExleEludGVudFJlamVjdGlvblN0YXRlbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlLnJlc3BvbnNlQ2FyZDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc3BvbnNlX2NhcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzcG9uc2VDYXJkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNwb25zZUNhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNwb25zZV9jYXJkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNwb25zZUNhcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlQ2FyZCgpIHtcbiAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlQ2FyZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gIH1cblxuICAvLyBtZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc3NhZ2U/OiBMZXhJbnRlbnRSZWplY3Rpb25TdGF0ZW1lbnRNZXNzYWdlW107IFxuICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21lc3NhZ2UnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNzYWdlKHZhbHVlOiBMZXhJbnRlbnRSZWplY3Rpb25TdGF0ZW1lbnRNZXNzYWdlW10pIHtcbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdE1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JvdXBOdW1iZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdE1lc3NhZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdE1lc3NhZ2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnRlbnQpLFxuICAgIGNvbnRlbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb250ZW50VHlwZSksXG4gICAgZ3JvdXBfbnVtYmVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb3VwTnVtYmVyKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4QXR0ZW1wdHM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZUNhcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNzYWdlOiBMZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdE1lc3NhZ2VbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0VG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50U2xvdFZhbHVlRWxpY2l0YXRpb25Qcm9tcHRPdXRwdXRSZWZlcmVuY2UgfCBMZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1heF9hdHRlbXB0czogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhBdHRlbXB0cyksXG4gICAgcmVzcG9uc2VfY2FyZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNwb25zZUNhcmQpLFxuICAgIG1lc3NhZ2U6IGNka3RmLmxpc3RNYXBwZXIobGV4SW50ZW50U2xvdFZhbHVlRWxpY2l0YXRpb25Qcm9tcHRNZXNzYWdlVG9UZXJyYWZvcm0pKHN0cnVjdCEubWVzc2FnZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IExleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9tYXhBdHRlbXB0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWF4QXR0ZW1wdHMgPSB0aGlzLl9tYXhBdHRlbXB0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jlc3BvbnNlQ2FyZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzcG9uc2VDYXJkID0gdGhpcy5fcmVzcG9uc2VDYXJkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVzc2FnZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVzc2FnZSA9IHRoaXMuX21lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBMZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21heEF0dGVtcHRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzcG9uc2VDYXJkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbWF4QXR0ZW1wdHMgPSB2YWx1ZS5tYXhBdHRlbXB0cztcbiAgICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlLnJlc3BvbnNlQ2FyZDtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1heF9hdHRlbXB0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9tYXhBdHRlbXB0cz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgbWF4QXR0ZW1wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfYXR0ZW1wdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heEF0dGVtcHRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhBdHRlbXB0cyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhBdHRlbXB0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhBdHRlbXB0cztcbiAgfVxuXG4gIC8vIHJlc3BvbnNlX2NhcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVzcG9uc2VDYXJkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNwb25zZUNhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNwb25zZV9jYXJkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNwb25zZUNhcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3BvbnNlQ2FyZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlc3BvbnNlQ2FyZCgpIHtcbiAgICB0aGlzLl9yZXNwb25zZUNhcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc3BvbnNlQ2FyZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNwb25zZUNhcmQ7XG4gIH1cblxuICAvLyBtZXNzYWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX21lc3NhZ2U/OiBMZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdE1lc3NhZ2VbXTsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZSgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnbWVzc2FnZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2UodmFsdWU6IExleEludGVudFNsb3RWYWx1ZUVsaWNpdGF0aW9uUHJvbXB0TWVzc2FnZVtdKSB7XG4gICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTGV4SW50ZW50U2xvdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmlvcml0eT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNwb25zZUNhcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzYW1wbGVVdHRlcmFuY2VzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNsb3RDb25zdHJhaW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNsb3RUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbG90VHlwZVZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2YWx1ZUVsaWNpdGF0aW9uUHJvbXB0PzogTGV4SW50ZW50U2xvdFZhbHVlRWxpY2l0YXRpb25Qcm9tcHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhJbnRlbnRTbG90VG9UZXJyYWZvcm0oc3RydWN0PzogTGV4SW50ZW50U2xvdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2NyaXB0aW9uKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHByaW9yaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW9yaXR5KSxcbiAgICByZXNwb25zZV9jYXJkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc3BvbnNlQ2FyZCksXG4gICAgc2FtcGxlX3V0dGVyYW5jZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2FtcGxlVXR0ZXJhbmNlcyksXG4gICAgc2xvdF9jb25zdHJhaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNsb3RDb25zdHJhaW50KSxcbiAgICBzbG90X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2xvdFR5cGUpLFxuICAgIHNsb3RfdHlwZV92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNsb3RUeXBlVmVyc2lvbiksXG4gICAgdmFsdWVfZWxpY2l0YXRpb25fcHJvbXB0OiBsZXhJbnRlbnRTbG90VmFsdWVFbGljaXRhdGlvblByb21wdFRvVGVycmFmb3JtKHN0cnVjdCEudmFsdWVFbGljaXRhdGlvblByb21wdCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZXhJbnRlbnRUaW1lb3V0cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsZXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB1cGRhdGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhJbnRlbnRUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IExleEludGVudFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlIHwgTGV4SW50ZW50VGltZW91dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3JlYXRlKSxcbiAgICBkZWxldGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsZXRlKSxcbiAgICB1cGRhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXBkYXRlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGV4SW50ZW50VGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogTGV4SW50ZW50VGltZW91dHMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NyZWF0ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY3JlYXRlID0gdGhpcy5fY3JlYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVsZXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxldGUgPSB0aGlzLl9kZWxldGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IExleEludGVudFRpbWVvdXRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZS5jcmVhdGU7XG4gICAgICB0aGlzLl9kZWxldGUgPSB2YWx1ZS5kZWxldGU7XG4gICAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZS51cGRhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGU7XG4gIH1cblxuICAvLyBkZWxldGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsZXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxldGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGV0ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsZXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsZXRlKCkge1xuICAgIHRoaXMuX2RlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsZXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF91cGRhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VwZGF0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXBkYXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cGRhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVcGRhdGUoKSB7XG4gICAgdGhpcy5fdXBkYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB1cGRhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBMZXhJbnRlbnQgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfbGV4X2ludGVudFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogTGV4SW50ZW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbGV4X2ludGVudCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jcmVhdGVWZXJzaW9uID0gY29uZmlnLmNyZWF0ZVZlcnNpb247XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BhcmVudEludGVudFNpZ25hdHVyZSA9IGNvbmZpZy5wYXJlbnRJbnRlbnRTaWduYXR1cmU7XG4gICAgdGhpcy5fc2FtcGxlVXR0ZXJhbmNlcyA9IGNvbmZpZy5zYW1wbGVVdHRlcmFuY2VzO1xuICAgIHRoaXMuX2NvbmNsdXNpb25TdGF0ZW1lbnQuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jb25jbHVzaW9uU3RhdGVtZW50O1xuICAgIHRoaXMuX2NvbmZpcm1hdGlvblByb21wdC5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmNvbmZpcm1hdGlvblByb21wdDtcbiAgICB0aGlzLl9kaWFsb2dDb2RlSG9vay5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmRpYWxvZ0NvZGVIb29rO1xuICAgIHRoaXMuX2ZvbGxvd1VwUHJvbXB0LmludGVybmFsVmFsdWUgPSBjb25maWcuZm9sbG93VXBQcm9tcHQ7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRBY3Rpdml0eS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmZ1bGZpbGxtZW50QWN0aXZpdHk7XG4gICAgdGhpcy5fcmVqZWN0aW9uU3RhdGVtZW50LmludGVybmFsVmFsdWUgPSBjb25maWcucmVqZWN0aW9uU3RhdGVtZW50O1xuICAgIHRoaXMuX3Nsb3QgPSBjb25maWcuc2xvdDtcbiAgICB0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRpbWVvdXRzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNoZWNrc3VtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2hlY2tzdW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjaGVja3N1bScpO1xuICB9XG5cbiAgLy8gY3JlYXRlX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlVmVyc2lvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjcmVhdGVfdmVyc2lvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZVZlcnNpb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NyZWF0ZVZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGVWZXJzaW9uKCkge1xuICAgIHRoaXMuX2NyZWF0ZVZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZVZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlVmVyc2lvbjtcbiAgfVxuXG4gIC8vIGNyZWF0ZWRfZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyZWF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlZF9kYXRlJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlZF9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdFVwZGF0ZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF91cGRhdGVkX2RhdGUnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcGFyZW50X2ludGVudF9zaWduYXR1cmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFyZW50SW50ZW50U2lnbmF0dXJlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXJlbnRJbnRlbnRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJlbnRfaW50ZW50X3NpZ25hdHVyZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyZW50SW50ZW50U2lnbmF0dXJlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJlbnRJbnRlbnRTaWduYXR1cmUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJlbnRJbnRlbnRTaWduYXR1cmUoKSB7XG4gICAgdGhpcy5fcGFyZW50SW50ZW50U2lnbmF0dXJlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJlbnRJbnRlbnRTaWduYXR1cmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SW50ZW50U2lnbmF0dXJlO1xuICB9XG5cbiAgLy8gc2FtcGxlX3V0dGVyYW5jZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FtcGxlVXR0ZXJhbmNlcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzYW1wbGVVdHRlcmFuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NhbXBsZV91dHRlcmFuY2VzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYW1wbGVVdHRlcmFuY2VzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NhbXBsZVV0dGVyYW5jZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYW1wbGVVdHRlcmFuY2VzKCkge1xuICAgIHRoaXMuX3NhbXBsZVV0dGVyYW5jZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhbXBsZVV0dGVyYW5jZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FtcGxlVXR0ZXJhbmNlcztcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG5cbiAgLy8gY29uY2x1c2lvbl9zdGF0ZW1lbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29uY2x1c2lvblN0YXRlbWVudCA9IG5ldyBMZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNvbmNsdXNpb25fc3RhdGVtZW50XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNvbmNsdXNpb25TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmNsdXNpb25TdGF0ZW1lbnQ7XG4gIH1cbiAgcHVibGljIHB1dENvbmNsdXNpb25TdGF0ZW1lbnQodmFsdWU6IExleEludGVudENvbmNsdXNpb25TdGF0ZW1lbnQpIHtcbiAgICB0aGlzLl9jb25jbHVzaW9uU3RhdGVtZW50LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb25jbHVzaW9uU3RhdGVtZW50KCkge1xuICAgIHRoaXMuX2NvbmNsdXNpb25TdGF0ZW1lbnQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uY2x1c2lvblN0YXRlbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb25jbHVzaW9uU3RhdGVtZW50LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjb25maXJtYXRpb25fcHJvbXB0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbmZpcm1hdGlvblByb21wdCA9IG5ldyBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY29uZmlybWF0aW9uX3Byb21wdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb25maXJtYXRpb25Qcm9tcHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpcm1hdGlvblByb21wdDtcbiAgfVxuICBwdWJsaWMgcHV0Q29uZmlybWF0aW9uUHJvbXB0KHZhbHVlOiBMZXhJbnRlbnRDb25maXJtYXRpb25Qcm9tcHQpIHtcbiAgICB0aGlzLl9jb25maXJtYXRpb25Qcm9tcHQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbmZpcm1hdGlvblByb21wdCgpIHtcbiAgICB0aGlzLl9jb25maXJtYXRpb25Qcm9tcHQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlybWF0aW9uUHJvbXB0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpcm1hdGlvblByb21wdC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZGlhbG9nX2NvZGVfaG9vayAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kaWFsb2dDb2RlSG9vayA9IG5ldyBMZXhJbnRlbnREaWFsb2dDb2RlSG9va091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkaWFsb2dfY29kZV9ob29rXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRpYWxvZ0NvZGVIb29rKCkge1xuICAgIHJldHVybiB0aGlzLl9kaWFsb2dDb2RlSG9vaztcbiAgfVxuICBwdWJsaWMgcHV0RGlhbG9nQ29kZUhvb2sodmFsdWU6IExleEludGVudERpYWxvZ0NvZGVIb29rKSB7XG4gICAgdGhpcy5fZGlhbG9nQ29kZUhvb2suaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERpYWxvZ0NvZGVIb29rKCkge1xuICAgIHRoaXMuX2RpYWxvZ0NvZGVIb29rLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpYWxvZ0NvZGVIb29rSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpYWxvZ0NvZGVIb29rLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBmb2xsb3dfdXBfcHJvbXB0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZvbGxvd1VwUHJvbXB0ID0gbmV3IExleEludGVudEZvbGxvd1VwUHJvbXB0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImZvbGxvd191cF9wcm9tcHRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZm9sbG93VXBQcm9tcHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbGxvd1VwUHJvbXB0O1xuICB9XG4gIHB1YmxpYyBwdXRGb2xsb3dVcFByb21wdCh2YWx1ZTogTGV4SW50ZW50Rm9sbG93VXBQcm9tcHQpIHtcbiAgICB0aGlzLl9mb2xsb3dVcFByb21wdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Rm9sbG93VXBQcm9tcHQoKSB7XG4gICAgdGhpcy5fZm9sbG93VXBQcm9tcHQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9sbG93VXBQcm9tcHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9sbG93VXBQcm9tcHQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZ1bGZpbGxtZW50X2FjdGl2aXR5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Z1bGZpbGxtZW50QWN0aXZpdHkgPSBuZXcgTGV4SW50ZW50RnVsZmlsbG1lbnRBY3Rpdml0eU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJmdWxmaWxsbWVudF9hY3Rpdml0eVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmdWxmaWxsbWVudEFjdGl2aXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudEFjdGl2aXR5O1xuICB9XG4gIHB1YmxpYyBwdXRGdWxmaWxsbWVudEFjdGl2aXR5KHZhbHVlOiBMZXhJbnRlbnRGdWxmaWxsbWVudEFjdGl2aXR5KSB7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRBY3Rpdml0eS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZ1bGZpbGxtZW50QWN0aXZpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsZmlsbG1lbnRBY3Rpdml0eS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcmVqZWN0aW9uX3N0YXRlbWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWplY3Rpb25TdGF0ZW1lbnQgPSBuZXcgTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlamVjdGlvbl9zdGF0ZW1lbnRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVqZWN0aW9uU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25TdGF0ZW1lbnQ7XG4gIH1cbiAgcHVibGljIHB1dFJlamVjdGlvblN0YXRlbWVudCh2YWx1ZTogTGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50KSB7XG4gICAgdGhpcy5fcmVqZWN0aW9uU3RhdGVtZW50LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWplY3Rpb25TdGF0ZW1lbnQoKSB7XG4gICAgdGhpcy5fcmVqZWN0aW9uU3RhdGVtZW50LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlamVjdGlvblN0YXRlbWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25TdGF0ZW1lbnQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNsb3QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2xvdD86IExleEludGVudFNsb3RbXTsgXG4gIHB1YmxpYyBnZXQgc2xvdCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2xvdCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNsb3QodmFsdWU6IExleEludGVudFNsb3RbXSkge1xuICAgIHRoaXMuX3Nsb3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbG90KCkge1xuICAgIHRoaXMuX3Nsb3QgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNsb3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2xvdDtcbiAgfVxuXG4gIC8vIHRpbWVvdXRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRzID0gbmV3IExleEludGVudFRpbWVvdXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInRpbWVvdXRzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRpbWVvdXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0cztcbiAgfVxuICBwdWJsaWMgcHV0VGltZW91dHModmFsdWU6IExleEludGVudFRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZV92ZXJzaW9uOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fY3JlYXRlVmVyc2lvbiksXG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBwYXJlbnRfaW50ZW50X3NpZ25hdHVyZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGFyZW50SW50ZW50U2lnbmF0dXJlKSxcbiAgICAgIHNhbXBsZV91dHRlcmFuY2VzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9zYW1wbGVVdHRlcmFuY2VzKSxcbiAgICAgIGNvbmNsdXNpb25fc3RhdGVtZW50OiBsZXhJbnRlbnRDb25jbHVzaW9uU3RhdGVtZW50VG9UZXJyYWZvcm0odGhpcy5fY29uY2x1c2lvblN0YXRlbWVudC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNvbmZpcm1hdGlvbl9wcm9tcHQ6IGxleEludGVudENvbmZpcm1hdGlvblByb21wdFRvVGVycmFmb3JtKHRoaXMuX2NvbmZpcm1hdGlvblByb21wdC5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGRpYWxvZ19jb2RlX2hvb2s6IGxleEludGVudERpYWxvZ0NvZGVIb29rVG9UZXJyYWZvcm0odGhpcy5fZGlhbG9nQ29kZUhvb2suaW50ZXJuYWxWYWx1ZSksXG4gICAgICBmb2xsb3dfdXBfcHJvbXB0OiBsZXhJbnRlbnRGb2xsb3dVcFByb21wdFRvVGVycmFmb3JtKHRoaXMuX2ZvbGxvd1VwUHJvbXB0LmludGVybmFsVmFsdWUpLFxuICAgICAgZnVsZmlsbG1lbnRfYWN0aXZpdHk6IGxleEludGVudEZ1bGZpbGxtZW50QWN0aXZpdHlUb1RlcnJhZm9ybSh0aGlzLl9mdWxmaWxsbWVudEFjdGl2aXR5LmludGVybmFsVmFsdWUpLFxuICAgICAgcmVqZWN0aW9uX3N0YXRlbWVudDogbGV4SW50ZW50UmVqZWN0aW9uU3RhdGVtZW50VG9UZXJyYWZvcm0odGhpcy5fcmVqZWN0aW9uU3RhdGVtZW50LmludGVybmFsVmFsdWUpLFxuICAgICAgc2xvdDogY2RrdGYubGlzdE1hcHBlcihsZXhJbnRlbnRTbG90VG9UZXJyYWZvcm0pKHRoaXMuX3Nsb3QpLFxuICAgICAgdGltZW91dHM6IGxleEludGVudFRpbWVvdXRzVG9UZXJyYWZvcm0odGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19