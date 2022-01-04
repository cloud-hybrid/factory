"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SesReceiptRule = exports.sesReceiptRuleWorkmailActionToTerraform = exports.sesReceiptRuleStopActionToTerraform = exports.sesReceiptRuleSnsActionToTerraform = exports.sesReceiptRuleS3ActionToTerraform = exports.sesReceiptRuleLambdaActionToTerraform = exports.sesReceiptRuleBounceActionToTerraform = exports.sesReceiptRuleAddHeaderActionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function sesReceiptRuleAddHeaderActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header_name: cdktf.stringToTerraform(struct.headerName),
        header_value: cdktf.stringToTerraform(struct.headerValue),
        position: cdktf.numberToTerraform(struct.position),
    };
}
exports.sesReceiptRuleAddHeaderActionToTerraform = sesReceiptRuleAddHeaderActionToTerraform;
function sesReceiptRuleBounceActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        position: cdktf.numberToTerraform(struct.position),
        sender: cdktf.stringToTerraform(struct.sender),
        smtp_reply_code: cdktf.stringToTerraform(struct.smtpReplyCode),
        status_code: cdktf.stringToTerraform(struct.statusCode),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
exports.sesReceiptRuleBounceActionToTerraform = sesReceiptRuleBounceActionToTerraform;
function sesReceiptRuleLambdaActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
        invocation_type: cdktf.stringToTerraform(struct.invocationType),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
exports.sesReceiptRuleLambdaActionToTerraform = sesReceiptRuleLambdaActionToTerraform;
function sesReceiptRuleS3ActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        object_key_prefix: cdktf.stringToTerraform(struct.objectKeyPrefix),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
exports.sesReceiptRuleS3ActionToTerraform = sesReceiptRuleS3ActionToTerraform;
function sesReceiptRuleSnsActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        encoding: cdktf.stringToTerraform(struct.encoding),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
exports.sesReceiptRuleSnsActionToTerraform = sesReceiptRuleSnsActionToTerraform;
function sesReceiptRuleStopActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        position: cdktf.numberToTerraform(struct.position),
        scope: cdktf.stringToTerraform(struct.scope),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
exports.sesReceiptRuleStopActionToTerraform = sesReceiptRuleStopActionToTerraform;
function sesReceiptRuleWorkmailActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        organization_arn: cdktf.stringToTerraform(struct.organizationArn),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
exports.sesReceiptRuleWorkmailActionToTerraform = sesReceiptRuleWorkmailActionToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule}.
 *
 * @stability stable
 */
class SesReceiptRule extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ses_receipt_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._after = config.after;
        this._enabled = config.enabled;
        this._name = config.name;
        this._recipients = config.recipients;
        this._ruleSetName = config.ruleSetName;
        this._scanEnabled = config.scanEnabled;
        this._tlsPolicy = config.tlsPolicy;
        this._addHeaderAction = config.addHeaderAction;
        this._bounceAction = config.bounceAction;
        this._lambdaAction = config.lambdaAction;
        this._s3Action = config.s3Action;
        this._snsAction = config.snsAction;
        this._stopAction = config.stopAction;
        this._workmailAction = config.workmailAction;
    }
    /**
     * @stability stable
     */
    get after() {
        return this.getStringAttribute('after');
    }
    /**
     * @stability stable
     */
    set after(value) {
        this._after = value;
    }
    /**
     * @stability stable
     */
    resetAfter() {
        this._after = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get afterInput() {
        return this._after;
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
    get recipients() {
        return this.getListAttribute('recipients');
    }
    /**
     * @stability stable
     */
    set recipients(value) {
        this._recipients = value;
    }
    /**
     * @stability stable
     */
    resetRecipients() {
        this._recipients = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recipientsInput() {
        return this._recipients;
    }
    /**
     * @stability stable
     */
    get ruleSetName() {
        return this.getStringAttribute('rule_set_name');
    }
    /**
     * @stability stable
     */
    set ruleSetName(value) {
        this._ruleSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ruleSetNameInput() {
        return this._ruleSetName;
    }
    /**
     * @stability stable
     */
    get scanEnabled() {
        return this.getBooleanAttribute('scan_enabled');
    }
    /**
     * @stability stable
     */
    set scanEnabled(value) {
        this._scanEnabled = value;
    }
    /**
     * @stability stable
     */
    resetScanEnabled() {
        this._scanEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scanEnabledInput() {
        return this._scanEnabled;
    }
    /**
     * @stability stable
     */
    get tlsPolicy() {
        return this.getStringAttribute('tls_policy');
    }
    /**
     * @stability stable
     */
    set tlsPolicy(value) {
        this._tlsPolicy = value;
    }
    /**
     * @stability stable
     */
    resetTlsPolicy() {
        this._tlsPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tlsPolicyInput() {
        return this._tlsPolicy;
    }
    /**
     * @stability stable
     */
    get addHeaderAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('add_header_action');
    }
    /**
     * @stability stable
     */
    set addHeaderAction(value) {
        this._addHeaderAction = value;
    }
    /**
     * @stability stable
     */
    resetAddHeaderAction() {
        this._addHeaderAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get addHeaderActionInput() {
        return this._addHeaderAction;
    }
    /**
     * @stability stable
     */
    get bounceAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('bounce_action');
    }
    /**
     * @stability stable
     */
    set bounceAction(value) {
        this._bounceAction = value;
    }
    /**
     * @stability stable
     */
    resetBounceAction() {
        this._bounceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bounceActionInput() {
        return this._bounceAction;
    }
    /**
     * @stability stable
     */
    get lambdaAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('lambda_action');
    }
    /**
     * @stability stable
     */
    set lambdaAction(value) {
        this._lambdaAction = value;
    }
    /**
     * @stability stable
     */
    resetLambdaAction() {
        this._lambdaAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaActionInput() {
        return this._lambdaAction;
    }
    /**
     * @stability stable
     */
    get s3Action() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('s3_action');
    }
    /**
     * @stability stable
     */
    set s3Action(value) {
        this._s3Action = value;
    }
    /**
     * @stability stable
     */
    resetS3Action() {
        this._s3Action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3ActionInput() {
        return this._s3Action;
    }
    /**
     * @stability stable
     */
    get snsAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('sns_action');
    }
    /**
     * @stability stable
     */
    set snsAction(value) {
        this._snsAction = value;
    }
    /**
     * @stability stable
     */
    resetSnsAction() {
        this._snsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snsActionInput() {
        return this._snsAction;
    }
    /**
     * @stability stable
     */
    get stopAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stop_action');
    }
    /**
     * @stability stable
     */
    set stopAction(value) {
        this._stopAction = value;
    }
    /**
     * @stability stable
     */
    resetStopAction() {
        this._stopAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stopActionInput() {
        return this._stopAction;
    }
    /**
     * @stability stable
     */
    get workmailAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('workmail_action');
    }
    /**
     * @stability stable
     */
    set workmailAction(value) {
        this._workmailAction = value;
    }
    /**
     * @stability stable
     */
    resetWorkmailAction() {
        this._workmailAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get workmailActionInput() {
        return this._workmailAction;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            after: cdktf.stringToTerraform(this._after),
            enabled: cdktf.booleanToTerraform(this._enabled),
            name: cdktf.stringToTerraform(this._name),
            recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._recipients),
            rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
            scan_enabled: cdktf.booleanToTerraform(this._scanEnabled),
            tls_policy: cdktf.stringToTerraform(this._tlsPolicy),
            add_header_action: cdktf.listMapper(sesReceiptRuleAddHeaderActionToTerraform)(this._addHeaderAction),
            bounce_action: cdktf.listMapper(sesReceiptRuleBounceActionToTerraform)(this._bounceAction),
            lambda_action: cdktf.listMapper(sesReceiptRuleLambdaActionToTerraform)(this._lambdaAction),
            s3_action: cdktf.listMapper(sesReceiptRuleS3ActionToTerraform)(this._s3Action),
            sns_action: cdktf.listMapper(sesReceiptRuleSnsActionToTerraform)(this._snsAction),
            stop_action: cdktf.listMapper(sesReceiptRuleStopActionToTerraform)(this._stopAction),
            workmail_action: cdktf.listMapper(sesReceiptRuleWorkmailActionToTerraform)(this._workmailAction),
        };
    }
}
exports.SesReceiptRule = SesReceiptRule;
_a = JSII_RTTI_SYMBOL_1;
SesReceiptRule[_a] = { fqn: "@cdktf/provider-aws.ses.SesReceiptRule", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SesReceiptRule.tfResourceType = "aws_ses_receipt_rule";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VzLXJlY2VpcHQtcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXMvc2VzLXJlY2VpcHQtcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBDL0IsU0FBZ0Isd0NBQXdDLENBQUMsTUFBc0M7SUFDN0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUNwRCxDQUFBO0FBQ0gsQ0FBQztBQVZELDRGQVVDO0FBaUJELFNBQWdCLHFDQUFxQyxDQUFDLE1BQW1DO0lBQ3ZGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxN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RSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwRyxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUYsYUFBYSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscUNBQXFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFGLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM5RSxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDakYsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BGLGVBQWUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVDQUF1QyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNqRyxDQUFDO0lBQ0osQ0FBQzs7QUEzU0gsd0NBNFNDOzs7QUExU0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw2QkFBYyxHQUFXLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIFNlc1JlY2VpcHRSdWxlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFmdGVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY2lwaWVudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bGVTZXROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NhbkVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0bHNQb2xpY3k/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFkZEhlYWRlckFjdGlvbj86IFNlc1JlY2VpcHRSdWxlQWRkSGVhZGVyQWN0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJvdW5jZUFjdGlvbj86IFNlc1JlY2VpcHRSdWxlQm91bmNlQWN0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxhbWJkYUFjdGlvbj86IFNlc1JlY2VpcHRSdWxlTGFtYmRhQWN0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzQWN0aW9uPzogU2VzUmVjZWlwdFJ1bGVTM0FjdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbnNBY3Rpb24/OiBTZXNSZWNlaXB0UnVsZVNuc0FjdGlvbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdG9wQWN0aW9uPzogU2VzUmVjZWlwdFJ1bGVTdG9wQWN0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdvcmttYWlsQWN0aW9uPzogU2VzUmVjZWlwdFJ1bGVXb3JrbWFpbEFjdGlvbltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZXNSZWNlaXB0UnVsZUFkZEhlYWRlckFjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlYWRlck5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWFkZXJWYWx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VzUmVjZWlwdFJ1bGVBZGRIZWFkZXJBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZXNSZWNlaXB0UnVsZUFkZEhlYWRlckFjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlYWRlck5hbWUpLFxuICAgIGhlYWRlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oZWFkZXJWYWx1ZSksXG4gICAgcG9zaXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9zaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VzUmVjZWlwdFJ1bGVCb3VuY2VBY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlbmRlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNtdHBSZXBseUNvZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdHVzQ29kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3BpY0Fybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlc1JlY2VpcHRSdWxlQm91bmNlQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU2VzUmVjZWlwdFJ1bGVCb3VuY2VBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1lc3NhZ2UpLFxuICAgIHBvc2l0aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvc2l0aW9uKSxcbiAgICBzZW5kZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VuZGVyKSxcbiAgICBzbXRwX3JlcGx5X2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc210cFJlcGx5Q29kZSksXG4gICAgc3RhdHVzX2NvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdHVzQ29kZSksXG4gICAgdG9waWNfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvcGljQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlc1JlY2VpcHRSdWxlTGFtYmRhQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmdW5jdGlvbkFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGludm9jYXRpb25UeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRvcGljQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VzUmVjZWlwdFJ1bGVMYW1iZGFBY3Rpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBTZXNSZWNlaXB0UnVsZUxhbWJkYUFjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZ1bmN0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mdW5jdGlvbkFybiksXG4gICAgaW52b2NhdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmludm9jYXRpb25UeXBlKSxcbiAgICBwb3NpdGlvbjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3NpdGlvbiksXG4gICAgdG9waWNfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvcGljQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlc1JlY2VpcHRSdWxlUzNBY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb2JqZWN0S2V5UHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRvcGljQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VzUmVjZWlwdFJ1bGVTM0FjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNlc1JlY2VpcHRSdWxlUzNBY3Rpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgIG9iamVjdF9rZXlfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdEtleVByZWZpeCksXG4gICAgcG9zaXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucG9zaXRpb24pLFxuICAgIHRvcGljX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50b3BpY0FybiksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXNSZWNlaXB0UnVsZVNuc0FjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY29kaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwb3NpdGlvbjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRvcGljQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXNSZWNlaXB0UnVsZVNuc0FjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNlc1JlY2VpcHRSdWxlU25zQWN0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZW5jb2RpbmcpLFxuICAgIHBvc2l0aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvc2l0aW9uKSxcbiAgICB0b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudG9waWNBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VzUmVjZWlwdFJ1bGVTdG9wQWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NvcGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0b3BpY0Fybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlc1JlY2VpcHRSdWxlU3RvcEFjdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IFNlc1JlY2VpcHRSdWxlU3RvcEFjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBvc2l0aW9uKSxcbiAgICBzY29wZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY29wZSksXG4gICAgdG9waWNfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvcGljQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlc1JlY2VpcHRSdWxlV29ya21haWxBY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3JnYW5pemF0aW9uQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvc2l0aW9uOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdG9waWNBcm4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXNSZWNlaXB0UnVsZVdvcmttYWlsQWN0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogU2VzUmVjZWlwdFJ1bGVXb3JrbWFpbEFjdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9yZ2FuaXphdGlvbl9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3JnYW5pemF0aW9uQXJuKSxcbiAgICBwb3NpdGlvbjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wb3NpdGlvbiksXG4gICAgdG9waWNfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRvcGljQXJuKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTZXNSZWNlaXB0UnVsZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19zZXNfcmVjZWlwdF9ydWxlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IFNlc1JlY2VpcHRSdWxlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc2VzX3JlY2VpcHRfcnVsZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hZnRlciA9IGNvbmZpZy5hZnRlcjtcbiAgICB0aGlzLl9lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3JlY2lwaWVudHMgPSBjb25maWcucmVjaXBpZW50cztcbiAgICB0aGlzLl9ydWxlU2V0TmFtZSA9IGNvbmZpZy5ydWxlU2V0TmFtZTtcbiAgICB0aGlzLl9zY2FuRW5hYmxlZCA9IGNvbmZpZy5zY2FuRW5hYmxlZDtcbiAgICB0aGlzLl90bHNQb2xpY3kgPSBjb25maWcudGxzUG9saWN5O1xuICAgIHRoaXMuX2FkZEhlYWRlckFjdGlvbiA9IGNvbmZpZy5hZGRIZWFkZXJBY3Rpb247XG4gICAgdGhpcy5fYm91bmNlQWN0aW9uID0gY29uZmlnLmJvdW5jZUFjdGlvbjtcbiAgICB0aGlzLl9sYW1iZGFBY3Rpb24gPSBjb25maWcubGFtYmRhQWN0aW9uO1xuICAgIHRoaXMuX3MzQWN0aW9uID0gY29uZmlnLnMzQWN0aW9uO1xuICAgIHRoaXMuX3Nuc0FjdGlvbiA9IGNvbmZpZy5zbnNBY3Rpb247XG4gICAgdGhpcy5fc3RvcEFjdGlvbiA9IGNvbmZpZy5zdG9wQWN0aW9uO1xuICAgIHRoaXMuX3dvcmttYWlsQWN0aW9uID0gY29uZmlnLndvcmttYWlsQWN0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhZnRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hZnRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWZ0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZnRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYWZ0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FmdGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWZ0ZXIoKSB7XG4gICAgdGhpcy5fYWZ0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFmdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHJlY2lwaWVudHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVjaXBpZW50cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCByZWNpcGllbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3JlY2lwaWVudHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY2lwaWVudHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcmVjaXBpZW50cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlY2lwaWVudHMoKSB7XG4gICAgdGhpcy5fcmVjaXBpZW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjaXBpZW50c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNpcGllbnRzO1xuICB9XG5cbiAgLy8gcnVsZV9zZXRfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ydWxlU2V0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcnVsZVNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdydWxlX3NldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBydWxlU2V0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcnVsZVNldE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVsZVNldE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVsZVNldE5hbWU7XG4gIH1cblxuICAvLyBzY2FuX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NhbkVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNjYW5FbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3NjYW5fZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjYW5FbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zY2FuRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjYW5FbmFibGVkKCkge1xuICAgIHRoaXMuX3NjYW5FbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2FuRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2FuRW5hYmxlZDtcbiAgfVxuXG4gIC8vIHRsc19wb2xpY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90bHNQb2xpY3k/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRsc1BvbGljeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Rsc19wb2xpY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRsc1BvbGljeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGxzUG9saWN5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGxzUG9saWN5KCkge1xuICAgIHRoaXMuX3Rsc1BvbGljeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGxzUG9saWN5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rsc1BvbGljeTtcbiAgfVxuXG4gIC8vIGFkZF9oZWFkZXJfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FkZEhlYWRlckFjdGlvbj86IFNlc1JlY2VpcHRSdWxlQWRkSGVhZGVyQWN0aW9uW107IFxuICBwdWJsaWMgZ2V0IGFkZEhlYWRlckFjdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWRkX2hlYWRlcl9hY3Rpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBhZGRIZWFkZXJBY3Rpb24odmFsdWU6IFNlc1JlY2VpcHRSdWxlQWRkSGVhZGVyQWN0aW9uW10pIHtcbiAgICB0aGlzLl9hZGRIZWFkZXJBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZGRIZWFkZXJBY3Rpb24oKSB7XG4gICAgdGhpcy5fYWRkSGVhZGVyQWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZGRIZWFkZXJBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkSGVhZGVyQWN0aW9uO1xuICB9XG5cbiAgLy8gYm91bmNlX2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ib3VuY2VBY3Rpb24/OiBTZXNSZWNlaXB0UnVsZUJvdW5jZUFjdGlvbltdOyBcbiAgcHVibGljIGdldCBib3VuY2VBY3Rpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2JvdW5jZV9hY3Rpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBib3VuY2VBY3Rpb24odmFsdWU6IFNlc1JlY2VpcHRSdWxlQm91bmNlQWN0aW9uW10pIHtcbiAgICB0aGlzLl9ib3VuY2VBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCb3VuY2VBY3Rpb24oKSB7XG4gICAgdGhpcy5fYm91bmNlQWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBib3VuY2VBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm91bmNlQWN0aW9uO1xuICB9XG5cbiAgLy8gbGFtYmRhX2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sYW1iZGFBY3Rpb24/OiBTZXNSZWNlaXB0UnVsZUxhbWJkYUFjdGlvbltdOyBcbiAgcHVibGljIGdldCBsYW1iZGFBY3Rpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xhbWJkYV9hY3Rpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBsYW1iZGFBY3Rpb24odmFsdWU6IFNlc1JlY2VpcHRSdWxlTGFtYmRhQWN0aW9uW10pIHtcbiAgICB0aGlzLl9sYW1iZGFBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMYW1iZGFBY3Rpb24oKSB7XG4gICAgdGhpcy5fbGFtYmRhQWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhQWN0aW9uO1xuICB9XG5cbiAgLy8gczNfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQWN0aW9uPzogU2VzUmVjZWlwdFJ1bGVTM0FjdGlvbltdOyBcbiAgcHVibGljIGdldCBzM0FjdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfYWN0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgczNBY3Rpb24odmFsdWU6IFNlc1JlY2VpcHRSdWxlUzNBY3Rpb25bXSkge1xuICAgIHRoaXMuX3MzQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNBY3Rpb24oKSB7XG4gICAgdGhpcy5fczNBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQWN0aW9uO1xuICB9XG5cbiAgLy8gc25zX2FjdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbnNBY3Rpb24/OiBTZXNSZWNlaXB0UnVsZVNuc0FjdGlvbltdOyBcbiAgcHVibGljIGdldCBzbnNBY3Rpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Nuc19hY3Rpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzbnNBY3Rpb24odmFsdWU6IFNlc1JlY2VpcHRSdWxlU25zQWN0aW9uW10pIHtcbiAgICB0aGlzLl9zbnNBY3Rpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbnNBY3Rpb24oKSB7XG4gICAgdGhpcy5fc25zQWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbnNBY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc25zQWN0aW9uO1xuICB9XG5cbiAgLy8gc3RvcF9hY3Rpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RvcEFjdGlvbj86IFNlc1JlY2VpcHRSdWxlU3RvcEFjdGlvbltdOyBcbiAgcHVibGljIGdldCBzdG9wQWN0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdG9wX2FjdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3BBY3Rpb24odmFsdWU6IFNlc1JlY2VpcHRSdWxlU3RvcEFjdGlvbltdKSB7XG4gICAgdGhpcy5fc3RvcEFjdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0b3BBY3Rpb24oKSB7XG4gICAgdGhpcy5fc3RvcEFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcEFjdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9wQWN0aW9uO1xuICB9XG5cbiAgLy8gd29ya21haWxfYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3dvcmttYWlsQWN0aW9uPzogU2VzUmVjZWlwdFJ1bGVXb3JrbWFpbEFjdGlvbltdOyBcbiAgcHVibGljIGdldCB3b3JrbWFpbEFjdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnd29ya21haWxfYWN0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgd29ya21haWxBY3Rpb24odmFsdWU6IFNlc1JlY2VpcHRSdWxlV29ya21haWxBY3Rpb25bXSkge1xuICAgIHRoaXMuX3dvcmttYWlsQWN0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V29ya21haWxBY3Rpb24oKSB7XG4gICAgdGhpcy5fd29ya21haWxBY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdvcmttYWlsQWN0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dvcmttYWlsQWN0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhZnRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYWZ0ZXIpLFxuICAgICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2VuYWJsZWQpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICByZWNpcGllbnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9yZWNpcGllbnRzKSxcbiAgICAgIHJ1bGVfc2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3J1bGVTZXROYW1lKSxcbiAgICAgIHNjYW5fZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3NjYW5FbmFibGVkKSxcbiAgICAgIHRsc19wb2xpY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Rsc1BvbGljeSksXG4gICAgICBhZGRfaGVhZGVyX2FjdGlvbjogY2RrdGYubGlzdE1hcHBlcihzZXNSZWNlaXB0UnVsZUFkZEhlYWRlckFjdGlvblRvVGVycmFmb3JtKSh0aGlzLl9hZGRIZWFkZXJBY3Rpb24pLFxuICAgICAgYm91bmNlX2FjdGlvbjogY2RrdGYubGlzdE1hcHBlcihzZXNSZWNlaXB0UnVsZUJvdW5jZUFjdGlvblRvVGVycmFmb3JtKSh0aGlzLl9ib3VuY2VBY3Rpb24pLFxuICAgICAgbGFtYmRhX2FjdGlvbjogY2RrdGYubGlzdE1hcHBlcihzZXNSZWNlaXB0UnVsZUxhbWJkYUFjdGlvblRvVGVycmFmb3JtKSh0aGlzLl9sYW1iZGFBY3Rpb24pLFxuICAgICAgczNfYWN0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHNlc1JlY2VpcHRSdWxlUzNBY3Rpb25Ub1RlcnJhZm9ybSkodGhpcy5fczNBY3Rpb24pLFxuICAgICAgc25zX2FjdGlvbjogY2RrdGYubGlzdE1hcHBlcihzZXNSZWNlaXB0UnVsZVNuc0FjdGlvblRvVGVycmFmb3JtKSh0aGlzLl9zbnNBY3Rpb24pLFxuICAgICAgc3RvcF9hY3Rpb246IGNka3RmLmxpc3RNYXBwZXIoc2VzUmVjZWlwdFJ1bGVTdG9wQWN0aW9uVG9UZXJyYWZvcm0pKHRoaXMuX3N0b3BBY3Rpb24pLFxuICAgICAgd29ya21haWxfYWN0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKHNlc1JlY2VpcHRSdWxlV29ya21haWxBY3Rpb25Ub1RlcnJhZm9ybSkodGhpcy5fd29ya21haWxBY3Rpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==