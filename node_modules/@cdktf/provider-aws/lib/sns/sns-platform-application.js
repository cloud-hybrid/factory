"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsPlatformApplication = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application}.
 *
 * @stability stable
 */
class SnsPlatformApplication extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_platform_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._eventDeliveryFailureTopicArn = config.eventDeliveryFailureTopicArn;
        this._eventEndpointCreatedTopicArn = config.eventEndpointCreatedTopicArn;
        this._eventEndpointDeletedTopicArn = config.eventEndpointDeletedTopicArn;
        this._eventEndpointUpdatedTopicArn = config.eventEndpointUpdatedTopicArn;
        this._failureFeedbackRoleArn = config.failureFeedbackRoleArn;
        this._name = config.name;
        this._platform = config.platform;
        this._platformCredential = config.platformCredential;
        this._platformPrincipal = config.platformPrincipal;
        this._successFeedbackRoleArn = config.successFeedbackRoleArn;
        this._successFeedbackSampleRate = config.successFeedbackSampleRate;
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
    get eventDeliveryFailureTopicArn() {
        return this.getStringAttribute('event_delivery_failure_topic_arn');
    }
    /**
     * @stability stable
     */
    set eventDeliveryFailureTopicArn(value) {
        this._eventDeliveryFailureTopicArn = value;
    }
    /**
     * @stability stable
     */
    resetEventDeliveryFailureTopicArn() {
        this._eventDeliveryFailureTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventDeliveryFailureTopicArnInput() {
        return this._eventDeliveryFailureTopicArn;
    }
    /**
     * @stability stable
     */
    get eventEndpointCreatedTopicArn() {
        return this.getStringAttribute('event_endpoint_created_topic_arn');
    }
    /**
     * @stability stable
     */
    set eventEndpointCreatedTopicArn(value) {
        this._eventEndpointCreatedTopicArn = value;
    }
    /**
     * @stability stable
     */
    resetEventEndpointCreatedTopicArn() {
        this._eventEndpointCreatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventEndpointCreatedTopicArnInput() {
        return this._eventEndpointCreatedTopicArn;
    }
    /**
     * @stability stable
     */
    get eventEndpointDeletedTopicArn() {
        return this.getStringAttribute('event_endpoint_deleted_topic_arn');
    }
    /**
     * @stability stable
     */
    set eventEndpointDeletedTopicArn(value) {
        this._eventEndpointDeletedTopicArn = value;
    }
    /**
     * @stability stable
     */
    resetEventEndpointDeletedTopicArn() {
        this._eventEndpointDeletedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventEndpointDeletedTopicArnInput() {
        return this._eventEndpointDeletedTopicArn;
    }
    /**
     * @stability stable
     */
    get eventEndpointUpdatedTopicArn() {
        return this.getStringAttribute('event_endpoint_updated_topic_arn');
    }
    /**
     * @stability stable
     */
    set eventEndpointUpdatedTopicArn(value) {
        this._eventEndpointUpdatedTopicArn = value;
    }
    /**
     * @stability stable
     */
    resetEventEndpointUpdatedTopicArn() {
        this._eventEndpointUpdatedTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get eventEndpointUpdatedTopicArnInput() {
        return this._eventEndpointUpdatedTopicArn;
    }
    /**
     * @stability stable
     */
    get failureFeedbackRoleArn() {
        return this.getStringAttribute('failure_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set failureFeedbackRoleArn(value) {
        this._failureFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetFailureFeedbackRoleArn() {
        this._failureFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get failureFeedbackRoleArnInput() {
        return this._failureFeedbackRoleArn;
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
    get platform() {
        return this.getStringAttribute('platform');
    }
    /**
     * @stability stable
     */
    set platform(value) {
        this._platform = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get platformInput() {
        return this._platform;
    }
    /**
     * @stability stable
     */
    get platformCredential() {
        return this.getStringAttribute('platform_credential');
    }
    /**
     * @stability stable
     */
    set platformCredential(value) {
        this._platformCredential = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get platformCredentialInput() {
        return this._platformCredential;
    }
    /**
     * @stability stable
     */
    get platformPrincipal() {
        return this.getStringAttribute('platform_principal');
    }
    /**
     * @stability stable
     */
    set platformPrincipal(value) {
        this._platformPrincipal = value;
    }
    /**
     * @stability stable
     */
    resetPlatformPrincipal() {
        this._platformPrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get platformPrincipalInput() {
        return this._platformPrincipal;
    }
    /**
     * @stability stable
     */
    get successFeedbackRoleArn() {
        return this.getStringAttribute('success_feedback_role_arn');
    }
    /**
     * @stability stable
     */
    set successFeedbackRoleArn(value) {
        this._successFeedbackRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetSuccessFeedbackRoleArn() {
        this._successFeedbackRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get successFeedbackRoleArnInput() {
        return this._successFeedbackRoleArn;
    }
    /**
     * @stability stable
     */
    get successFeedbackSampleRate() {
        return this.getStringAttribute('success_feedback_sample_rate');
    }
    /**
     * @stability stable
     */
    set successFeedbackSampleRate(value) {
        this._successFeedbackSampleRate = value;
    }
    /**
     * @stability stable
     */
    resetSuccessFeedbackSampleRate() {
        this._successFeedbackSampleRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get successFeedbackSampleRateInput() {
        return this._successFeedbackSampleRate;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            event_delivery_failure_topic_arn: cdktf.stringToTerraform(this._eventDeliveryFailureTopicArn),
            event_endpoint_created_topic_arn: cdktf.stringToTerraform(this._eventEndpointCreatedTopicArn),
            event_endpoint_deleted_topic_arn: cdktf.stringToTerraform(this._eventEndpointDeletedTopicArn),
            event_endpoint_updated_topic_arn: cdktf.stringToTerraform(this._eventEndpointUpdatedTopicArn),
            failure_feedback_role_arn: cdktf.stringToTerraform(this._failureFeedbackRoleArn),
            name: cdktf.stringToTerraform(this._name),
            platform: cdktf.stringToTerraform(this._platform),
            platform_credential: cdktf.stringToTerraform(this._platformCredential),
            platform_principal: cdktf.stringToTerraform(this._platformPrincipal),
            success_feedback_role_arn: cdktf.stringToTerraform(this._successFeedbackRoleArn),
            success_feedback_sample_rate: cdktf.stringToTerraform(this._successFeedbackSampleRate),
        };
    }
}
exports.SnsPlatformApplication = SnsPlatformApplication;
_a = JSII_RTTI_SYMBOL_1;
SnsPlatformApplication[_a] = { fqn: "@cdktf/provider-aws.sns.SnsPlatformApplication", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SnsPlatformApplication.tfResourceType = "aws_sns_platform_application";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXBsYXRmb3JtLWFwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Nucy9zbnMtcGxhdGZvcm0tYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQTZCL0IsTUFBYSxzQkFBdUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT2pFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFvQztRQUNuRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDhCQUE4QjtZQUNyRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1FBQ3pFLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDekUsSUFBSSxDQUFDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1B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WUFDN0YsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztZQUM3RixnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzdGLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUM7WUFDN0YseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUNoRixJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdEUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRSx5QkFBeUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQ2hGLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7U0FDdkYsQ0FBQztJQUNKLENBQUM7O0FBM09ILHdEQTRPQzs7O0FBMU9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0cscUNBQWMsR0FBVyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgU25zUGxhdGZvcm1BcHBsaWNhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXZlbnREZWxpdmVyeUZhaWx1cmVUb3BpY0Fybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBldmVudEVuZHBvaW50RGVsZXRlZFRvcGljQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXZlbnRFbmRwb2ludFVwZGF0ZWRUb3BpY0Fybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmYWlsdXJlRmVlZGJhY2tSb2xlQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYXRmb3JtOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGxhdGZvcm1DcmVkZW50aWFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBsYXRmb3JtUHJpbmNpcGFsPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3Nuc19wbGF0Zm9ybV9hcHBsaWNhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTbnNQbGF0Zm9ybUFwcGxpY2F0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc25zX3BsYXRmb3JtX2FwcGxpY2F0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2V2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm4gPSBjb25maWcuZXZlbnREZWxpdmVyeUZhaWx1cmVUb3BpY0FybjtcbiAgICB0aGlzLl9ldmVudEVuZHBvaW50Q3JlYXRlZFRvcGljQXJuID0gY29uZmlnLmV2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm47XG4gICAgdGhpcy5fZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybiA9IGNvbmZpZy5ldmVudEVuZHBvaW50RGVsZXRlZFRvcGljQXJuO1xuICAgIHRoaXMuX2V2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm4gPSBjb25maWcuZXZlbnRFbmRwb2ludFVwZGF0ZWRUb3BpY0FybjtcbiAgICB0aGlzLl9mYWlsdXJlRmVlZGJhY2tSb2xlQXJuID0gY29uZmlnLmZhaWx1cmVGZWVkYmFja1JvbGVBcm47XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3BsYXRmb3JtID0gY29uZmlnLnBsYXRmb3JtO1xuICAgIHRoaXMuX3BsYXRmb3JtQ3JlZGVudGlhbCA9IGNvbmZpZy5wbGF0Zm9ybUNyZWRlbnRpYWw7XG4gICAgdGhpcy5fcGxhdGZvcm1QcmluY2lwYWwgPSBjb25maWcucGxhdGZvcm1QcmluY2lwYWw7XG4gICAgdGhpcy5fc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybiA9IGNvbmZpZy5zdWNjZXNzRmVlZGJhY2tSb2xlQXJuO1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSBjb25maWcuc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBldmVudF9kZWxpdmVyeV9mYWlsdXJlX3RvcGljX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBldmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXZlbnRfZGVsaXZlcnlfZmFpbHVyZV90b3BpY19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFdmVudERlbGl2ZXJ5RmFpbHVyZVRvcGljQXJuKCkge1xuICAgIHRoaXMuX2V2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnREZWxpdmVyeUZhaWx1cmVUb3BpY0FybjtcbiAgfVxuXG4gIC8vIGV2ZW50X2VuZHBvaW50X2NyZWF0ZWRfdG9waWNfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdldmVudF9lbmRwb2ludF9jcmVhdGVkX3RvcGljX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXZlbnRFbmRwb2ludENyZWF0ZWRUb3BpY0Fybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXZlbnRFbmRwb2ludENyZWF0ZWRUb3BpY0FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4oKSB7XG4gICAgdGhpcy5fZXZlbnRFbmRwb2ludENyZWF0ZWRUb3BpY0FybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXZlbnRFbmRwb2ludENyZWF0ZWRUb3BpY0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ldmVudEVuZHBvaW50Q3JlYXRlZFRvcGljQXJuO1xuICB9XG5cbiAgLy8gZXZlbnRfZW5kcG9pbnRfZGVsZXRlZF90b3BpY19hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V2ZW50X2VuZHBvaW50X2RlbGV0ZWRfdG9waWNfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBldmVudEVuZHBvaW50RGVsZXRlZFRvcGljQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ldmVudEVuZHBvaW50RGVsZXRlZFRvcGljQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXZlbnRFbmRwb2ludERlbGV0ZWRUb3BpY0FybigpIHtcbiAgICB0aGlzLl9ldmVudEVuZHBvaW50RGVsZXRlZFRvcGljQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBldmVudEVuZHBvaW50RGVsZXRlZFRvcGljQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm47XG4gIH1cblxuICAvLyBldmVudF9lbmRwb2ludF91cGRhdGVkX3RvcGljX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBldmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXZlbnRfZW5kcG9pbnRfdXBkYXRlZF90b3BpY19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGV2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFdmVudEVuZHBvaW50VXBkYXRlZFRvcGljQXJuKCkge1xuICAgIHRoaXMuX2V2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRFbmRwb2ludFVwZGF0ZWRUb3BpY0FybjtcbiAgfVxuXG4gIC8vIGZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZmFpbHVyZUZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmFpbHVyZUZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZhaWx1cmVfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZhaWx1cmVGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGYWlsdXJlRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX2ZhaWx1cmVGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZhaWx1cmVGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmFpbHVyZUZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHBsYXRmb3JtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BsYXRmb3JtPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYXRmb3JtJyk7XG4gIH1cbiAgcHVibGljIHNldCBwbGF0Zm9ybSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhdGZvcm0gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhdGZvcm07XG4gIH1cblxuICAvLyBwbGF0Zm9ybV9jcmVkZW50aWFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3BsYXRmb3JtQ3JlZGVudGlhbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1DcmVkZW50aWFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGxhdGZvcm1fY3JlZGVudGlhbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGxhdGZvcm1DcmVkZW50aWFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybUNyZWRlbnRpYWwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1DcmVkZW50aWFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXRmb3JtQ3JlZGVudGlhbDtcbiAgfVxuXG4gIC8vIHBsYXRmb3JtX3ByaW5jaXBhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wbGF0Zm9ybVByaW5jaXBhbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm1QcmluY2lwYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGF0Zm9ybV9wcmluY2lwYWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBsYXRmb3JtUHJpbmNpcGFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGF0Zm9ybVByaW5jaXBhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBsYXRmb3JtUHJpbmNpcGFsKCkge1xuICAgIHRoaXMuX3BsYXRmb3JtUHJpbmNpcGFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwbGF0Zm9ybVByaW5jaXBhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF0Zm9ybVByaW5jaXBhbDtcbiAgfVxuXG4gIC8vIHN1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Y2Nlc3NfZmVlZGJhY2tfcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Y2Nlc3NGZWVkYmFja1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWNjZXNzRmVlZGJhY2tSb2xlQXJuKCkge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Y2Nlc3NGZWVkYmFja1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VjY2Vzc0ZlZWRiYWNrUm9sZUFybjtcbiAgfVxuXG4gIC8vIHN1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdWNjZXNzRmVlZGJhY2tTYW1wbGVSYXRlKCkge1xuICAgIHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VjY2Vzc0ZlZWRiYWNrU2FtcGxlUmF0ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnRfZGVsaXZlcnlfZmFpbHVyZV90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RGVsaXZlcnlGYWlsdXJlVG9waWNBcm4pLFxuICAgICAgZXZlbnRfZW5kcG9pbnRfY3JlYXRlZF90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RW5kcG9pbnRDcmVhdGVkVG9waWNBcm4pLFxuICAgICAgZXZlbnRfZW5kcG9pbnRfZGVsZXRlZF90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RW5kcG9pbnREZWxldGVkVG9waWNBcm4pLFxuICAgICAgZXZlbnRfZW5kcG9pbnRfdXBkYXRlZF90b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V2ZW50RW5kcG9pbnRVcGRhdGVkVG9waWNBcm4pLFxuICAgICAgZmFpbHVyZV9mZWVkYmFja19yb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmFpbHVyZUZlZWRiYWNrUm9sZUFybiksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHBsYXRmb3JtOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wbGF0Zm9ybSksXG4gICAgICBwbGF0Zm9ybV9jcmVkZW50aWFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wbGF0Zm9ybUNyZWRlbnRpYWwpLFxuICAgICAgcGxhdGZvcm1fcHJpbmNpcGFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wbGF0Zm9ybVByaW5jaXBhbCksXG4gICAgICBzdWNjZXNzX2ZlZWRiYWNrX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zdWNjZXNzRmVlZGJhY2tSb2xlQXJuKSxcbiAgICAgIHN1Y2Nlc3NfZmVlZGJhY2tfc2FtcGxlX3JhdGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N1Y2Nlc3NGZWVkYmFja1NhbXBsZVJhdGUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==