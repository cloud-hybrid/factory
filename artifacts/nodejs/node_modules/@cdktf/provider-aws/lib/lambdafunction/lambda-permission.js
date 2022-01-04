"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaPermission = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission}.
 *
 * @stability stable
 */
class LambdaPermission extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lambda_permission',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._action = config.action;
        this._eventSourceToken = config.eventSourceToken;
        this._functionName = config.functionName;
        this._principal = config.principal;
        this._qualifier = config.qualifier;
        this._sourceAccount = config.sourceAccount;
        this._sourceArn = config.sourceArn;
        this._statementId = config.statementId;
        this._statementIdPrefix = config.statementIdPrefix;
    }
    /**
     * @stability stable
     */
    get action() {
        return this.getStringAttribute('action');
    }
    /**
     * @stability stable
     */
    set action(value) {
        this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get actionInput() {
        return this._action;
    }
    /**
     * @stability stable
     */
    get eventSourceToken() {
        return this.getStringAttribute('event_source_token');
    }
    /**
     * @stability stable
     */
    set eventSourceToken(value) {
        this._eventSourceToken = value;
    }
    /**
     * @stability stable
     */
    resetEventSourceToken() {
        this._eventSourceToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventSourceTokenInput() {
        return this._eventSourceToken;
    }
    /**
     * @stability stable
     */
    get functionName() {
        return this.getStringAttribute('function_name');
    }
    /**
     * @stability stable
     */
    set functionName(value) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get functionNameInput() {
        return this._functionName;
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
    get principal() {
        return this.getStringAttribute('principal');
    }
    /**
     * @stability stable
     */
    set principal(value) {
        this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get principalInput() {
        return this._principal;
    }
    /**
     * @stability stable
     */
    get qualifier() {
        return this.getStringAttribute('qualifier');
    }
    /**
     * @stability stable
     */
    set qualifier(value) {
        this._qualifier = value;
    }
    /**
     * @stability stable
     */
    resetQualifier() {
        this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get qualifierInput() {
        return this._qualifier;
    }
    /**
     * @stability stable
     */
    get sourceAccount() {
        return this.getStringAttribute('source_account');
    }
    /**
     * @stability stable
     */
    set sourceAccount(value) {
        this._sourceAccount = value;
    }
    /**
     * @stability stable
     */
    resetSourceAccount() {
        this._sourceAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceAccountInput() {
        return this._sourceAccount;
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
    /**
     * @stability stable
     */
    get statementId() {
        return this.getStringAttribute('statement_id');
    }
    /**
     * @stability stable
     */
    set statementId(value) {
        this._statementId = value;
    }
    /**
     * @stability stable
     */
    resetStatementId() {
        this._statementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statementIdInput() {
        return this._statementId;
    }
    /**
     * @stability stable
     */
    get statementIdPrefix() {
        return this.getStringAttribute('statement_id_prefix');
    }
    /**
     * @stability stable
     */
    set statementIdPrefix(value) {
        this._statementIdPrefix = value;
    }
    /**
     * @stability stable
     */
    resetStatementIdPrefix() {
        this._statementIdPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statementIdPrefixInput() {
        return this._statementIdPrefix;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            action: cdktf.stringToTerraform(this._action),
            event_source_token: cdktf.stringToTerraform(this._eventSourceToken),
            function_name: cdktf.stringToTerraform(this._functionName),
            principal: cdktf.stringToTerraform(this._principal),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            source_account: cdktf.stringToTerraform(this._sourceAccount),
            source_arn: cdktf.stringToTerraform(this._sourceArn),
            statement_id: cdktf.stringToTerraform(this._statementId),
            statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix),
        };
    }
}
exports.LambdaPermission = LambdaPermission;
_a = JSII_RTTI_SYMBOL_1;
LambdaPermission[_a] = { fqn: "@cdktf/provider-aws.lambdafunction.LambdaPermission", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
LambdaPermission.tfResourceType = "aws_lambda_permission";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLXBlcm1pc3Npb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGFtYmRhZnVuY3Rpb24vbGFtYmRhLXBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQXlCL0IsTUFBYSxnQkFBaUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzNELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE4QjtRQUM3RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHVCQUF1QjtZQUM5QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFD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LEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuRSxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25ELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDNUQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ3RFLENBQUM7SUFDSixDQUFDOztBQWxNSCw0Q0FtTUM7OztBQWpNQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLCtCQUFjLEdBQVcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIExhbWJkYVBlcm1pc3Npb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY3Rpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBldmVudFNvdXJjZVRva2VuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpbmNpcGFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcXVhbGlmaWVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VBY2NvdW50Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc291cmNlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXRlbWVudElkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhdGVtZW50SWRQcmVmaXg/OiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIExhbWJkYVBlcm1pc3Npb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfbGFtYmRhX3Blcm1pc3Npb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IExhbWJkYVBlcm1pc3Npb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19sYW1iZGFfcGVybWlzc2lvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hY3Rpb24gPSBjb25maWcuYWN0aW9uO1xuICAgIHRoaXMuX2V2ZW50U291cmNlVG9rZW4gPSBjb25maWcuZXZlbnRTb3VyY2VUb2tlbjtcbiAgICB0aGlzLl9mdW5jdGlvbk5hbWUgPSBjb25maWcuZnVuY3Rpb25OYW1lO1xuICAgIHRoaXMuX3ByaW5jaXBhbCA9IGNvbmZpZy5wcmluY2lwYWw7XG4gICAgdGhpcy5fcXVhbGlmaWVyID0gY29uZmlnLnF1YWxpZmllcjtcbiAgICB0aGlzLl9zb3VyY2VBY2NvdW50ID0gY29uZmlnLnNvdXJjZUFjY291bnQ7XG4gICAgdGhpcy5fc291cmNlQXJuID0gY29uZmlnLnNvdXJjZUFybjtcbiAgICB0aGlzLl9zdGF0ZW1lbnRJZCA9IGNvbmZpZy5zdGF0ZW1lbnRJZDtcbiAgICB0aGlzLl9zdGF0ZW1lbnRJZFByZWZpeCA9IGNvbmZpZy5zdGF0ZW1lbnRJZFByZWZpeDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWN0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FjdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWN0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBhY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FjdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhY3Rpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9uO1xuICB9XG5cbiAgLy8gZXZlbnRfc291cmNlX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V2ZW50U291cmNlVG9rZW4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV2ZW50U291cmNlVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmVudF9zb3VyY2VfdG9rZW4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV2ZW50U291cmNlVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V2ZW50U291cmNlVG9rZW4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFdmVudFNvdXJjZVRva2VuKCkge1xuICAgIHRoaXMuX2V2ZW50U291cmNlVG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2ZW50U291cmNlVG9rZW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRTb3VyY2VUb2tlbjtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZnVuY3Rpb25OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmdW5jdGlvbl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBmdW5jdGlvbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmdW5jdGlvbk5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25OYW1lO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHByaW5jaXBhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcmluY2lwYWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByaW5jaXBhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaW5jaXBhbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpbmNpcGFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmluY2lwYWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJpbmNpcGFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW5jaXBhbDtcbiAgfVxuXG4gIC8vIHF1YWxpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdWFsaWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHF1YWxpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3F1YWxpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcXVhbGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWFsaWZpZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRRdWFsaWZpZXIoKSB7XG4gICAgdGhpcy5fcXVhbGlmaWVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdWFsaWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVhbGlmaWVyO1xuICB9XG5cbiAgLy8gc291cmNlX2FjY291bnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc291cmNlQWNjb3VudD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlQWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NvdXJjZV9hY2NvdW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBzb3VyY2VBY2NvdW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VBY2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U291cmNlQWNjb3VudCgpIHtcbiAgICB0aGlzLl9zb3VyY2VBY2NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VBY2NvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUFjY291bnQ7XG4gIH1cblxuICAvLyBzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VBcm4oKSB7XG4gICAgdGhpcy5fc291cmNlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlQXJuO1xuICB9XG5cbiAgLy8gc3RhdGVtZW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdGVtZW50SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0YXRlbWVudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdGVtZW50X2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdGF0ZW1lbnRJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGVtZW50SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdGF0ZW1lbnRJZCgpIHtcbiAgICB0aGlzLl9zdGF0ZW1lbnRJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdGVtZW50SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVtZW50SWQ7XG4gIH1cblxuICAvLyBzdGF0ZW1lbnRfaWRfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXRlbWVudElkUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0ZW1lbnRJZFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRlbWVudF9pZF9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXRlbWVudElkUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0ZW1lbnRJZFByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXRlbWVudElkUHJlZml4KCkge1xuICAgIHRoaXMuX3N0YXRlbWVudElkUHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGF0ZW1lbnRJZFByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZW1lbnRJZFByZWZpeDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9hY3Rpb24pLFxuICAgICAgZXZlbnRfc291cmNlX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9ldmVudFNvdXJjZVRva2VuKSxcbiAgICAgIGZ1bmN0aW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Z1bmN0aW9uTmFtZSksXG4gICAgICBwcmluY2lwYWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByaW5jaXBhbCksXG4gICAgICBxdWFsaWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3F1YWxpZmllciksXG4gICAgICBzb3VyY2VfYWNjb3VudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc291cmNlQWNjb3VudCksXG4gICAgICBzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zb3VyY2VBcm4pLFxuICAgICAgc3RhdGVtZW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGF0ZW1lbnRJZCksXG4gICAgICBzdGF0ZW1lbnRfaWRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdGF0ZW1lbnRJZFByZWZpeCksXG4gICAgfTtcbiAgfVxufVxuIl19