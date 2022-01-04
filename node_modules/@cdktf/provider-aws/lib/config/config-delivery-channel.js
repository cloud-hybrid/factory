"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigDeliveryChannel = exports.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference = exports.configDeliveryChannelSnapshotDeliveryPropertiesToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        delivery_frequency: cdktf.stringToTerraform(struct.deliveryFrequency),
    };
}
exports.configDeliveryChannelSnapshotDeliveryPropertiesToTerraform = configDeliveryChannelSnapshotDeliveryPropertiesToTerraform;
/**
 * @stability stable
 */
class ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._deliveryFrequency) {
            hasAnyValues = true;
            internalValueResult.deliveryFrequency = this._deliveryFrequency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deliveryFrequency = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deliveryFrequency = value.deliveryFrequency;
        }
    }
    /**
     * @stability stable
     */
    get deliveryFrequency() {
        return this.getStringAttribute('delivery_frequency');
    }
    /**
     * @stability stable
     */
    set deliveryFrequency(value) {
        this._deliveryFrequency = value;
    }
    /**
     * @stability stable
     */
    resetDeliveryFrequency() {
        this._deliveryFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deliveryFrequencyInput() {
        return this._deliveryFrequency;
    }
}
exports.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference = ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference[_a] = { fqn: "@cdktf/provider-aws.config.ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel}.
 *
 * @stability stable
 */
class ConfigDeliveryChannel extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_config_delivery_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // snapshot_delivery_properties - computed: false, optional: true, required: false
        this._snapshotDeliveryProperties = new ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference(this, "snapshot_delivery_properties", true);
        this._name = config.name;
        this._s3BucketName = config.s3BucketName;
        this._s3KeyPrefix = config.s3KeyPrefix;
        this._s3KmsKeyArn = config.s3KmsKeyArn;
        this._snsTopicArn = config.snsTopicArn;
        this._snapshotDeliveryProperties.internalValue = config.snapshotDeliveryProperties;
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
    /**
     * @stability stable
     */
    resetName() {
        this._name = undefined;
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
    get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    /**
     * @stability stable
     */
    set s3BucketName(value) {
        this._s3BucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BucketNameInput() {
        return this._s3BucketName;
    }
    /**
     * @stability stable
     */
    get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    /**
     * @stability stable
     */
    set s3KeyPrefix(value) {
        this._s3KeyPrefix = value;
    }
    /**
     * @stability stable
     */
    resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
    /**
     * @stability stable
     */
    get s3KmsKeyArn() {
        return this.getStringAttribute('s3_kms_key_arn');
    }
    /**
     * @stability stable
     */
    set s3KmsKeyArn(value) {
        this._s3KmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetS3KmsKeyArn() {
        this._s3KmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3KmsKeyArnInput() {
        return this._s3KmsKeyArn;
    }
    /**
     * @stability stable
     */
    get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    /**
     * @stability stable
     */
    set snsTopicArn(value) {
        this._snsTopicArn = value;
    }
    /**
     * @stability stable
     */
    resetSnsTopicArn() {
        this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snsTopicArnInput() {
        return this._snsTopicArn;
    }
    /**
     * @stability stable
     */
    get snapshotDeliveryProperties() {
        return this._snapshotDeliveryProperties;
    }
    /**
     * @stability stable
     */
    putSnapshotDeliveryProperties(value) {
        this._snapshotDeliveryProperties.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSnapshotDeliveryProperties() {
        this._snapshotDeliveryProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snapshotDeliveryPropertiesInput() {
        return this._snapshotDeliveryProperties.internalValue;
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
            s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
            s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
            s3_kms_key_arn: cdktf.stringToTerraform(this._s3KmsKeyArn),
            sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
            snapshot_delivery_properties: configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(this._snapshotDeliveryProperties.internalValue),
        };
    }
}
exports.ConfigDeliveryChannel = ConfigDeliveryChannel;
_b = JSII_RTTI_SYMBOL_1;
ConfigDeliveryChannel[_b] = { fqn: "@cdktf/provider-aws.config.ConfigDeliveryChannel", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ConfigDeliveryChannel.tfResourceType = "aws_config_delivery_channel";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWRlbGl2ZXJ5LWNoYW5uZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy1kZWxpdmVyeS1jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBc0IvQixTQUFnQiwwREFBMEQsQ0FBQyxNQUF5SDtJQUNsTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDdkUsQ0FBQTtBQUNILENBQUM7QUFSRCxnSUFRQzs7OztBQUVELE1BQWEsOERBQStELFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJckcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FB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YUFBYSxDQUFDO1NBQ3pJLENBQUM7SUFDSixDQUFDOztBQWxKSCxzREFtSkM7OztBQWpKQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLG9DQUFjLEdBQVcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RlbGl2ZXJ5Q2hhbm5lbENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzQnVja2V0TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0tleVByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0ttc0tleUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc25zVG9waWNBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc25hcHNob3REZWxpdmVyeVByb3BlcnRpZXM/OiBDb25maWdEZWxpdmVyeUNoYW5uZWxTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGVsaXZlcnlDaGFubmVsU25hcHNob3REZWxpdmVyeVByb3BlcnRpZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVsaXZlcnlGcmVxdWVuY3k/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdEZWxpdmVyeUNoYW5uZWxTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IENvbmZpZ0RlbGl2ZXJ5Q2hhbm5lbFNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIHwgQ29uZmlnRGVsaXZlcnlDaGFubmVsU25hcHNob3REZWxpdmVyeVByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZWxpdmVyeV9mcmVxdWVuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVsaXZlcnlGcmVxdWVuY3kpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25maWdEZWxpdmVyeUNoYW5uZWxTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb25maWdEZWxpdmVyeUNoYW5uZWxTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVsaXZlcnlGcmVxdWVuY3kpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRlbGl2ZXJ5RnJlcXVlbmN5ID0gdGhpcy5fZGVsaXZlcnlGcmVxdWVuY3k7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb25maWdEZWxpdmVyeUNoYW5uZWxTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2RlbGl2ZXJ5RnJlcXVlbmN5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9kZWxpdmVyeUZyZXF1ZW5jeSA9IHZhbHVlLmRlbGl2ZXJ5RnJlcXVlbmN5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X2ZyZXF1ZW5jeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxpdmVyeUZyZXF1ZW5jeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlGcmVxdWVuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxpdmVyeV9mcmVxdWVuY3knKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlbGl2ZXJ5RnJlcXVlbmN5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxpdmVyeUZyZXF1ZW5jeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGl2ZXJ5RnJlcXVlbmN5KCkge1xuICAgIHRoaXMuX2RlbGl2ZXJ5RnJlcXVlbmN5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxpdmVyeUZyZXF1ZW5jeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxpdmVyeUZyZXF1ZW5jeTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBDb25maWdEZWxpdmVyeUNoYW5uZWwgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY29uZmlnX2RlbGl2ZXJ5X2NoYW5uZWxcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29uZmlnRGVsaXZlcnlDaGFubmVsQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY29uZmlnX2RlbGl2ZXJ5X2NoYW5uZWwnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3MzQnVja2V0TmFtZSA9IGNvbmZpZy5zM0J1Y2tldE5hbWU7XG4gICAgdGhpcy5fczNLZXlQcmVmaXggPSBjb25maWcuczNLZXlQcmVmaXg7XG4gICAgdGhpcy5fczNLbXNLZXlBcm4gPSBjb25maWcuczNLbXNLZXlBcm47XG4gICAgdGhpcy5fc25zVG9waWNBcm4gPSBjb25maWcuc25zVG9waWNBcm47XG4gICAgdGhpcy5fc25hcHNob3REZWxpdmVyeVByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHMzX2J1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzQnVja2V0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNCdWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfYnVja2V0X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzQnVja2V0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNCdWNrZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQnVja2V0TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0J1Y2tldE5hbWU7XG4gIH1cblxuICAvLyBzM19rZXlfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzS2V5UHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM0tleVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2tleV9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzS2V5UHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zM0tleVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzS2V5UHJlZml4KCkge1xuICAgIHRoaXMuX3MzS2V5UHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0tleVByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0tleVByZWZpeDtcbiAgfVxuXG4gIC8vIHMzX2ttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzS21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM0ttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2ttc19rZXlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM0ttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNLbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0ttc0tleUFybigpIHtcbiAgICB0aGlzLl9zM0ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNLbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNLbXNLZXlBcm47XG4gIH1cblxuICAvLyBzbnNfdG9waWNfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nuc1RvcGljQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzbnNUb3BpY0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Nuc190b3BpY19hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuc1RvcGljQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zbnNUb3BpY0FybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNuc1RvcGljQXJuKCkge1xuICAgIHRoaXMuX3Nuc1RvcGljQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbnNUb3BpY0FybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbnNUb3BpY0FybjtcbiAgfVxuXG4gIC8vIHNuYXBzaG90X2RlbGl2ZXJ5X3Byb3BlcnRpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc25hcHNob3REZWxpdmVyeVByb3BlcnRpZXMgPSBuZXcgQ29uZmlnRGVsaXZlcnlDaGFubmVsU25hcHNob3REZWxpdmVyeVByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic25hcHNob3RfZGVsaXZlcnlfcHJvcGVydGllc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc25hcHNob3REZWxpdmVyeVByb3BlcnRpZXM7XG4gIH1cbiAgcHVibGljIHB1dFNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0aWVzKHZhbHVlOiBDb25maWdEZWxpdmVyeUNoYW5uZWxTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcykge1xuICAgIHRoaXMuX3NuYXBzaG90RGVsaXZlcnlQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcygpIHtcbiAgICB0aGlzLl9zbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdERlbGl2ZXJ5UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHMzX2J1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zM0J1Y2tldE5hbWUpLFxuICAgICAgczNfa2V5X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fczNLZXlQcmVmaXgpLFxuICAgICAgczNfa21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3MzS21zS2V5QXJuKSxcbiAgICAgIHNuc190b3BpY19hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Nuc1RvcGljQXJuKSxcbiAgICAgIHNuYXBzaG90X2RlbGl2ZXJ5X3Byb3BlcnRpZXM6IGNvbmZpZ0RlbGl2ZXJ5Q2hhbm5lbFNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0aWVzVG9UZXJyYWZvcm0odGhpcy5fc25hcHNob3REZWxpdmVyeVByb3BlcnRpZXMuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19