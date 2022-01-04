"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudwatchLogSubscriptionFilter = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter}.
 *
 * @stability stable
 */
class CloudwatchLogSubscriptionFilter extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html aws_cloudwatch_log_subscription_filter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudwatch_log_subscription_filter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._destinationArn = config.destinationArn;
        this._distribution = config.distribution;
        this._filterPattern = config.filterPattern;
        this._logGroupName = config.logGroupName;
        this._name = config.name;
        this._roleArn = config.roleArn;
    }
    /**
     * @stability stable
     */
    get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    /**
     * @stability stable
     */
    set destinationArn(value) {
        this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationArnInput() {
        return this._destinationArn;
    }
    /**
     * @stability stable
     */
    get distribution() {
        return this.getStringAttribute('distribution');
    }
    /**
     * @stability stable
     */
    set distribution(value) {
        this._distribution = value;
    }
    /**
     * @stability stable
     */
    resetDistribution() {
        this._distribution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get distributionInput() {
        return this._distribution;
    }
    /**
     * @stability stable
     */
    get filterPattern() {
        return this.getStringAttribute('filter_pattern');
    }
    /**
     * @stability stable
     */
    set filterPattern(value) {
        this._filterPattern = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get filterPatternInput() {
        return this._filterPattern;
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
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
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
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    /**
     * @stability stable
     */
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            destination_arn: cdktf.stringToTerraform(this._destinationArn),
            distribution: cdktf.stringToTerraform(this._distribution),
            filter_pattern: cdktf.stringToTerraform(this._filterPattern),
            log_group_name: cdktf.stringToTerraform(this._logGroupName),
            name: cdktf.stringToTerraform(this._name),
            role_arn: cdktf.stringToTerraform(this._roleArn),
        };
    }
}
exports.CloudwatchLogSubscriptionFilter = CloudwatchLogSubscriptionFilter;
_a = JSII_RTTI_SYMBOL_1;
CloudwatchLogSubscriptionFilter[_a] = { fqn: "@cdktf/provider-aws.cloudwatch.CloudwatchLogSubscriptionFilter", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CloudwatchLogSubscriptionFilter.tfResourceType = "aws_cloudwatch_log_subscription_filter";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWR3YXRjaC1sb2ctc3Vic2NyaXB0aW9uLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZHdhdGNoL2Nsb3Vkd2F0Y2gtbG9nLXN1YnNjcmlwdGlvbi1maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQW1CL0IsTUFBYSwrQkFBZ0MsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzFFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE2QztRQUM1RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHdDQUF3QztZQUMvRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQzs7OztJQVFELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIs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QUM7WUFDM0QsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNqRCxDQUFDO0lBQ0osQ0FBQzs7QUF6SUgsMEVBMElDOzs7QUF4SUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw4Q0FBYyxHQUFXLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWR3YXRjaExvZ1N1YnNjcmlwdGlvbkZpbHRlckNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzdGluYXRpb25Bcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc3RyaWJ1dGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmaWx0ZXJQYXR0ZXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nR3JvdXBOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuPzogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ2xvdWR3YXRjaExvZ1N1YnNjcmlwdGlvbkZpbHRlciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jbG91ZHdhdGNoX2xvZ19zdWJzY3JpcHRpb25fZmlsdGVyXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ2xvdWR3YXRjaExvZ1N1YnNjcmlwdGlvbkZpbHRlckNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2Nsb3Vkd2F0Y2hfbG9nX3N1YnNjcmlwdGlvbl9maWx0ZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Bcm4gPSBjb25maWcuZGVzdGluYXRpb25Bcm47XG4gICAgdGhpcy5fZGlzdHJpYnV0aW9uID0gY29uZmlnLmRpc3RyaWJ1dGlvbjtcbiAgICB0aGlzLl9maWx0ZXJQYXR0ZXJuID0gY29uZmlnLmZpbHRlclBhdHRlcm47XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gY29uZmlnLmxvZ0dyb3VwTmFtZTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcm9sZUFybiA9IGNvbmZpZy5yb2xlQXJuO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBkZXN0aW5hdGlvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZGVzdGluYXRpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzdGluYXRpb25fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvbkFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb25Bcm47XG4gIH1cblxuICAvLyBkaXN0cmlidXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGlzdHJpYnV0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkaXN0cmlidXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXN0cmlidXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3RyaWJ1dGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzdHJpYnV0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGlzdHJpYnV0aW9uKCkge1xuICAgIHRoaXMuX2Rpc3RyaWJ1dGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGlzdHJpYnV0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvbjtcbiAgfVxuXG4gIC8vIGZpbHRlcl9wYXR0ZXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpbHRlclBhdHRlcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbHRlclBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWx0ZXJfcGF0dGVybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsdGVyUGF0dGVybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsdGVyUGF0dGVybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWx0ZXJQYXR0ZXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclBhdHRlcm47XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbG9nR3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb2xlQXJuKCkge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzdGluYXRpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXN0aW5hdGlvbkFybiksXG4gICAgICBkaXN0cmlidXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rpc3RyaWJ1dGlvbiksXG4gICAgICBmaWx0ZXJfcGF0dGVybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZmlsdGVyUGF0dGVybiksXG4gICAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbG9nR3JvdXBOYW1lKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvbGVBcm4pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==