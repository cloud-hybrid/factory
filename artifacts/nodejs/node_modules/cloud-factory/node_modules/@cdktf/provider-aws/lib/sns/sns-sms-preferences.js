"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsSmsPreferences = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences}.
 *
 * @stability stable
 */
class SnsSmsPreferences extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_sns_sms_preferences',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._defaultSenderId = config.defaultSenderId;
        this._defaultSmsType = config.defaultSmsType;
        this._deliveryStatusIamRoleArn = config.deliveryStatusIamRoleArn;
        this._deliveryStatusSuccessSamplingRate = config.deliveryStatusSuccessSamplingRate;
        this._monthlySpendLimit = config.monthlySpendLimit;
        this._usageReportS3Bucket = config.usageReportS3Bucket;
    }
    /**
     * @stability stable
     */
    get defaultSenderId() {
        return this.getStringAttribute('default_sender_id');
    }
    /**
     * @stability stable
     */
    set defaultSenderId(value) {
        this._defaultSenderId = value;
    }
    /**
     * @stability stable
     */
    resetDefaultSenderId() {
        this._defaultSenderId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultSenderIdInput() {
        return this._defaultSenderId;
    }
    /**
     * @stability stable
     */
    get defaultSmsType() {
        return this.getStringAttribute('default_sms_type');
    }
    /**
     * @stability stable
     */
    set defaultSmsType(value) {
        this._defaultSmsType = value;
    }
    /**
     * @stability stable
     */
    resetDefaultSmsType() {
        this._defaultSmsType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get defaultSmsTypeInput() {
        return this._defaultSmsType;
    }
    /**
     * @stability stable
     */
    get deliveryStatusIamRoleArn() {
        return this.getStringAttribute('delivery_status_iam_role_arn');
    }
    /**
     * @stability stable
     */
    set deliveryStatusIamRoleArn(value) {
        this._deliveryStatusIamRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetDeliveryStatusIamRoleArn() {
        this._deliveryStatusIamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deliveryStatusIamRoleArnInput() {
        return this._deliveryStatusIamRoleArn;
    }
    /**
     * @stability stable
     */
    get deliveryStatusSuccessSamplingRate() {
        return this.getStringAttribute('delivery_status_success_sampling_rate');
    }
    /**
     * @stability stable
     */
    set deliveryStatusSuccessSamplingRate(value) {
        this._deliveryStatusSuccessSamplingRate = value;
    }
    /**
     * @stability stable
     */
    resetDeliveryStatusSuccessSamplingRate() {
        this._deliveryStatusSuccessSamplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deliveryStatusSuccessSamplingRateInput() {
        return this._deliveryStatusSuccessSamplingRate;
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
    get monthlySpendLimit() {
        return this.getNumberAttribute('monthly_spend_limit');
    }
    /**
     * @stability stable
     */
    set monthlySpendLimit(value) {
        this._monthlySpendLimit = value;
    }
    /**
     * @stability stable
     */
    resetMonthlySpendLimit() {
        this._monthlySpendLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get monthlySpendLimitInput() {
        return this._monthlySpendLimit;
    }
    /**
     * @stability stable
     */
    get usageReportS3Bucket() {
        return this.getStringAttribute('usage_report_s3_bucket');
    }
    /**
     * @stability stable
     */
    set usageReportS3Bucket(value) {
        this._usageReportS3Bucket = value;
    }
    /**
     * @stability stable
     */
    resetUsageReportS3Bucket() {
        this._usageReportS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usageReportS3BucketInput() {
        return this._usageReportS3Bucket;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            default_sender_id: cdktf.stringToTerraform(this._defaultSenderId),
            default_sms_type: cdktf.stringToTerraform(this._defaultSmsType),
            delivery_status_iam_role_arn: cdktf.stringToTerraform(this._deliveryStatusIamRoleArn),
            delivery_status_success_sampling_rate: cdktf.stringToTerraform(this._deliveryStatusSuccessSamplingRate),
            monthly_spend_limit: cdktf.numberToTerraform(this._monthlySpendLimit),
            usage_report_s3_bucket: cdktf.stringToTerraform(this._usageReportS3Bucket),
        };
    }
}
exports.SnsSmsPreferences = SnsSmsPreferences;
_a = JSII_RTTI_SYMBOL_1;
SnsSmsPreferences[_a] = { fqn: "@cdktf/provider-aws.sns.SnsSmsPreferences", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
SnsSmsPreferences.tfResourceType = "aws_sns_sms_preferences";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25zLXNtcy1wcmVmZXJlbmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbnMvc25zLXNtcy1wcmVmZXJlbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBbUIvQixNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPNUQsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQWtDLEVBQUU7UUFDbkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx5QkFBeUI7WUFDaEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3pELENBQUM7Ozs7SUFRRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0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Q25DLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDakUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0QsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUNyRixxQ0FBcUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO1lBQ3ZHLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDckUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztTQUMzRSxDQUFDO0lBQ0osQ0FBQzs7QUFySkgsOENBc0pDOzs7QUFwSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxnQ0FBYyxHQUFXLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBTbnNTbXNQcmVmZXJlbmNlc0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0U2VuZGVySWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWZhdWx0U21zVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1vbnRobHlTcGVuZExpbWl0PzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNhZ2VSZXBvcnRTM0J1Y2tldD86IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIFNuc1Ntc1ByZWZlcmVuY2VzIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX3Nuc19zbXNfcHJlZmVyZW5jZXNcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBTbnNTbXNQcmVmZXJlbmNlc0NvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfc25zX3Ntc19wcmVmZXJlbmNlcycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZWZhdWx0U2VuZGVySWQgPSBjb25maWcuZGVmYXVsdFNlbmRlcklkO1xuICAgIHRoaXMuX2RlZmF1bHRTbXNUeXBlID0gY29uZmlnLmRlZmF1bHRTbXNUeXBlO1xuICAgIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybiA9IGNvbmZpZy5kZWxpdmVyeVN0YXR1c0lhbVJvbGVBcm47XG4gICAgdGhpcy5fZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlID0gY29uZmlnLmRlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZTtcbiAgICB0aGlzLl9tb250aGx5U3BlbmRMaW1pdCA9IGNvbmZpZy5tb250aGx5U3BlbmRMaW1pdDtcbiAgICB0aGlzLl91c2FnZVJlcG9ydFMzQnVja2V0ID0gY29uZmlnLnVzYWdlUmVwb3J0UzNCdWNrZXQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGRlZmF1bHRfc2VuZGVyX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlZmF1bHRTZW5kZXJJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFNlbmRlcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9zZW5kZXJfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlZmF1bHRTZW5kZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdFNlbmRlcklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdFNlbmRlcklkKCkge1xuICAgIHRoaXMuX2RlZmF1bHRTZW5kZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVmYXVsdFNlbmRlcklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTZW5kZXJJZDtcbiAgfVxuXG4gIC8vIGRlZmF1bHRfc21zX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVmYXVsdFNtc1R5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlZmF1bHRTbXNUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVmYXVsdF9zbXNfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVmYXVsdFNtc1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRTbXNUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVmYXVsdFNtc1R5cGUoKSB7XG4gICAgdGhpcy5fZGVmYXVsdFNtc1R5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlZmF1bHRTbXNUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTbXNUeXBlO1xuICB9XG5cbiAgLy8gZGVsaXZlcnlfc3RhdHVzX2lhbV9yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxpdmVyeVN0YXR1c0lhbVJvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlbGl2ZXJ5X3N0YXR1c19pYW1fcm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuKCkge1xuICAgIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdGF0dXNJYW1Sb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzSWFtUm9sZUFybjtcbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X3N0YXR1c19zdWNjZXNzX3NhbXBsaW5nX3JhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxpdmVyeVN0YXR1c1N1Y2Nlc3NTYW1wbGluZ1JhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxpdmVyeV9zdGF0dXNfc3VjY2Vzc19zYW1wbGluZ19yYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxpdmVyeVN0YXR1c1N1Y2Nlc3NTYW1wbGluZ1JhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZSgpIHtcbiAgICB0aGlzLl9kZWxpdmVyeVN0YXR1c1N1Y2Nlc3NTYW1wbGluZ1JhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGl2ZXJ5U3RhdHVzU3VjY2Vzc1NhbXBsaW5nUmF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxpdmVyeVN0YXR1c1N1Y2Nlc3NTYW1wbGluZ1JhdGU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbW9udGhseV9zcGVuZF9saW1pdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21vbnRobHlTcGVuZExpbWl0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtb250aGx5U3BlbmRMaW1pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21vbnRobHlfc3BlbmRfbGltaXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1vbnRobHlTcGVuZExpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tb250aGx5U3BlbmRMaW1pdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1vbnRobHlTcGVuZExpbWl0KCkge1xuICAgIHRoaXMuX21vbnRobHlTcGVuZExpbWl0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb250aGx5U3BlbmRMaW1pdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tb250aGx5U3BlbmRMaW1pdDtcbiAgfVxuXG4gIC8vIHVzYWdlX3JlcG9ydF9zM19idWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdXNhZ2VSZXBvcnRTM0J1Y2tldD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNhZ2VSZXBvcnRTM0J1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzYWdlX3JlcG9ydF9zM19idWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHVzYWdlUmVwb3J0UzNCdWNrZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzYWdlUmVwb3J0UzNCdWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2FnZVJlcG9ydFMzQnVja2V0KCkge1xuICAgIHRoaXMuX3VzYWdlUmVwb3J0UzNCdWNrZXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzYWdlUmVwb3J0UzNCdWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNhZ2VSZXBvcnRTM0J1Y2tldDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdF9zZW5kZXJfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlZmF1bHRTZW5kZXJJZCksXG4gICAgICBkZWZhdWx0X3Ntc190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWZhdWx0U21zVHlwZSksXG4gICAgICBkZWxpdmVyeV9zdGF0dXNfaWFtX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZWxpdmVyeVN0YXR1c0lhbVJvbGVBcm4pLFxuICAgICAgZGVsaXZlcnlfc3RhdHVzX3N1Y2Nlc3Nfc2FtcGxpbmdfcmF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVsaXZlcnlTdGF0dXNTdWNjZXNzU2FtcGxpbmdSYXRlKSxcbiAgICAgIG1vbnRobHlfc3BlbmRfbGltaXQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX21vbnRobHlTcGVuZExpbWl0KSxcbiAgICAgIHVzYWdlX3JlcG9ydF9zM19idWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3VzYWdlUmVwb3J0UzNCdWNrZXQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==