"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayRequestValidator = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator}.
 *
 * @stability stable
 */
class ApiGatewayRequestValidator extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_request_validator',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._restApiId = config.restApiId;
        this._validateRequestBody = config.validateRequestBody;
        this._validateRequestParameters = config.validateRequestParameters;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    /**
     * @stability stable
     */
    set restApiId(value) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get restApiIdInput() {
        return this._restApiId;
    }
    /**
     * @stability stable
     */
    get validateRequestBody() {
        return this.getBooleanAttribute('validate_request_body');
    }
    /**
     * @stability stable
     */
    set validateRequestBody(value) {
        this._validateRequestBody = value;
    }
    /**
     * @stability stable
     */
    resetValidateRequestBody() {
        this._validateRequestBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validateRequestBodyInput() {
        return this._validateRequestBody;
    }
    /**
     * @stability stable
     */
    get validateRequestParameters() {
        return this.getBooleanAttribute('validate_request_parameters');
    }
    /**
     * @stability stable
     */
    set validateRequestParameters(value) {
        this._validateRequestParameters = value;
    }
    /**
     * @stability stable
     */
    resetValidateRequestParameters() {
        this._validateRequestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get validateRequestParametersInput() {
        return this._validateRequestParameters;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            validate_request_body: cdktf.booleanToTerraform(this._validateRequestBody),
            validate_request_parameters: cdktf.booleanToTerraform(this._validateRequestParameters),
        };
    }
}
exports.ApiGatewayRequestValidator = ApiGatewayRequestValidator;
_a = JSII_RTTI_SYMBOL_1;
ApiGatewayRequestValidator[_a] = { fqn: "@cdktf/provider-aws.apigateway.ApiGatewayRequestValidator", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ApiGatewayRequestValidator.tfResourceType = "aws_api_gateway_request_validator";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktcmVxdWVzdC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpZ2F0ZXdheS9hcGktZ2F0ZXdheS1yZXF1ZXN0LXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBZS9CLE1BQWEsMEJBQTJCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU9yRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBd0M7UUFDdkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxtQ0FBbUM7WUFDMUQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO0lBQ3JFLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLENBQVEsQ0FBQztJQUNsRSxDQUFDOzs7O0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFrQztRQUMvRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Ozs7SUFJRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBUSxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFDRCxJQUFXLHlCQUF5QixDQUFDLEtBQWtDO1FBQ3JFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLDhCQUE4QjtRQUNuQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNyRCxxQkFBcUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQzFFLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7U0FDdkYsQ0FBQztJQUNKLENBQUM7O0FBM0dILGdFQTRHQzs7O0FBMUdDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0cseUNBQWMsR0FBVyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEFwaUdhdGV3YXlSZXF1ZXN0VmFsaWRhdG9yQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzdEFwaUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbGlkYXRlUmVxdWVzdEJvZHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZhbGlkYXRlUmVxdWVzdFBhcmFtZXRlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEFwaUdhdGV3YXlSZXF1ZXN0VmFsaWRhdG9yIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2FwaV9nYXRld2F5X3JlcXVlc3RfdmFsaWRhdG9yXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQXBpR2F0ZXdheVJlcXVlc3RWYWxpZGF0b3JDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19hcGlfZ2F0ZXdheV9yZXF1ZXN0X3ZhbGlkYXRvcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcmVzdEFwaUlkID0gY29uZmlnLnJlc3RBcGlJZDtcbiAgICB0aGlzLl92YWxpZGF0ZVJlcXVlc3RCb2R5ID0gY29uZmlnLnZhbGlkYXRlUmVxdWVzdEJvZHk7XG4gICAgdGhpcy5fdmFsaWRhdGVSZXF1ZXN0UGFyYW1ldGVycyA9IGNvbmZpZy52YWxpZGF0ZVJlcXVlc3RQYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyByZXN0X2FwaV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXN0QXBpSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc3RBcGlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc3RfYXBpX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXN0QXBpSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc3RBcGlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXN0QXBpSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdEFwaUlkO1xuICB9XG5cbiAgLy8gdmFsaWRhdGVfcmVxdWVzdF9ib2R5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZhbGlkYXRlUmVxdWVzdEJvZHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHZhbGlkYXRlUmVxdWVzdEJvZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndmFsaWRhdGVfcmVxdWVzdF9ib2R5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsaWRhdGVSZXF1ZXN0Qm9keSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVSZXF1ZXN0Qm9keSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkYXRlUmVxdWVzdEJvZHkoKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVSZXF1ZXN0Qm9keSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRhdGVSZXF1ZXN0Qm9keUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVJlcXVlc3RCb2R5O1xuICB9XG5cbiAgLy8gdmFsaWRhdGVfcmVxdWVzdF9wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZhbGlkYXRlUmVxdWVzdFBhcmFtZXRlcnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHZhbGlkYXRlUmVxdWVzdFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndmFsaWRhdGVfcmVxdWVzdF9wYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdmFsaWRhdGVSZXF1ZXN0UGFyYW1ldGVycyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVSZXF1ZXN0UGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFZhbGlkYXRlUmVxdWVzdFBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVSZXF1ZXN0UGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmFsaWRhdGVSZXF1ZXN0UGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVJlcXVlc3RQYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHJlc3RfYXBpX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXN0QXBpSWQpLFxuICAgICAgdmFsaWRhdGVfcmVxdWVzdF9ib2R5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fdmFsaWRhdGVSZXF1ZXN0Qm9keSksXG4gICAgICB2YWxpZGF0ZV9yZXF1ZXN0X3BhcmFtZXRlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl92YWxpZGF0ZVJlcXVlc3RQYXJhbWV0ZXJzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=