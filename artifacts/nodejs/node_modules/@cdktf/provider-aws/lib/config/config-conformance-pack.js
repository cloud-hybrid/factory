"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigConformancePack = exports.configConformancePackInputParameterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function configConformancePackInputParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.configConformancePackInputParameterToTerraform = configConformancePackInputParameterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack}.
 *
 * @stability stable
 */
class ConfigConformancePack extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_config_conformance_pack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._deliveryS3Bucket = config.deliveryS3Bucket;
        this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
        this._name = config.name;
        this._templateBody = config.templateBody;
        this._templateS3Uri = config.templateS3Uri;
        this._inputParameter = config.inputParameter;
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
    get deliveryS3Bucket() {
        return this.getStringAttribute('delivery_s3_bucket');
    }
    /**
     * @stability stable
     */
    set deliveryS3Bucket(value) {
        this._deliveryS3Bucket = value;
    }
    /**
     * @stability stable
     */
    resetDeliveryS3Bucket() {
        this._deliveryS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deliveryS3BucketInput() {
        return this._deliveryS3Bucket;
    }
    /**
     * @stability stable
     */
    get deliveryS3KeyPrefix() {
        return this.getStringAttribute('delivery_s3_key_prefix');
    }
    /**
     * @stability stable
     */
    set deliveryS3KeyPrefix(value) {
        this._deliveryS3KeyPrefix = value;
    }
    /**
     * @stability stable
     */
    resetDeliveryS3KeyPrefix() {
        this._deliveryS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deliveryS3KeyPrefixInput() {
        return this._deliveryS3KeyPrefix;
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
    get templateBody() {
        return this.getStringAttribute('template_body');
    }
    /**
     * @stability stable
     */
    set templateBody(value) {
        this._templateBody = value;
    }
    /**
     * @stability stable
     */
    resetTemplateBody() {
        this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get templateBodyInput() {
        return this._templateBody;
    }
    /**
     * @stability stable
     */
    get templateS3Uri() {
        return this.getStringAttribute('template_s3_uri');
    }
    /**
     * @stability stable
     */
    set templateS3Uri(value) {
        this._templateS3Uri = value;
    }
    /**
     * @stability stable
     */
    resetTemplateS3Uri() {
        this._templateS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get templateS3UriInput() {
        return this._templateS3Uri;
    }
    /**
     * @stability stable
     */
    get inputParameter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('input_parameter');
    }
    /**
     * @stability stable
     */
    set inputParameter(value) {
        this._inputParameter = value;
    }
    /**
     * @stability stable
     */
    resetInputParameter() {
        this._inputParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputParameterInput() {
        return this._inputParameter;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
            delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
            name: cdktf.stringToTerraform(this._name),
            template_body: cdktf.stringToTerraform(this._templateBody),
            template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
            input_parameter: cdktf.listMapper(configConformancePackInputParameterToTerraform)(this._inputParameter),
        };
    }
}
exports.ConfigConformancePack = ConfigConformancePack;
_a = JSII_RTTI_SYMBOL_1;
ConfigConformancePack[_a] = { fqn: "@cdktf/provider-aws.config.ConfigConformancePack", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ConfigConformancePack.tfResourceType = "aws_config_conformance_pack";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWNvbmZvcm1hbmNlLXBhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy1jb25mb3JtYW5jZS1wYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBd0IvQixTQUFnQiw4Q0FBOEMsQ0FBQyxNQUE0QztJQUN6RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDakUsQ0FBQTtBQUNILENBQUM7QUFURCx3R0FTQzs7Ozs7O0FBSUQsTUFBYSxxQkFBc0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT2hFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFtQztRQUNsRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDZCQUE2QjtZQUNwRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ00scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0QsSUFBVyxtQkFBbUIsQ0FBQyxLQUFhO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBSUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBUSxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUE0QztRQUNwRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUMxRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekMsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDeEcsQ0FBQztJQUNKLENBQUM7O0FBeEpILHNEQXlKQzs7O0FBdkpDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csb0NBQWMsR0FBVyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnQ29uZm9ybWFuY2VQYWNrQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxpdmVyeVMzQnVja2V0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxpdmVyeVMzS2V5UHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlbXBsYXRlQm9keT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRlbXBsYXRlUzNVcmk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5wdXRQYXJhbWV0ZXI/OiBDb25maWdDb25mb3JtYW5jZVBhY2tJbnB1dFBhcmFtZXRlcltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25maWdDb25mb3JtYW5jZVBhY2tJbnB1dFBhcmFtZXRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyVmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0NvbmZvcm1hbmNlUGFja0lucHV0UGFyYW1ldGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnQ29uZm9ybWFuY2VQYWNrSW5wdXRQYXJhbWV0ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJOYW1lKSxcbiAgICBwYXJhbWV0ZXJfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFyYW1ldGVyVmFsdWUpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29uZm9ybWFuY2VQYWNrIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2NvbmZpZ19jb25mb3JtYW5jZV9wYWNrXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvbmZpZ0NvbmZvcm1hbmNlUGFja0NvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvbmZpZ19jb25mb3JtYW5jZV9wYWNrJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RlbGl2ZXJ5UzNCdWNrZXQgPSBjb25maWcuZGVsaXZlcnlTM0J1Y2tldDtcbiAgICB0aGlzLl9kZWxpdmVyeVMzS2V5UHJlZml4ID0gY29uZmlnLmRlbGl2ZXJ5UzNLZXlQcmVmaXg7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3RlbXBsYXRlQm9keSA9IGNvbmZpZy50ZW1wbGF0ZUJvZHk7XG4gICAgdGhpcy5fdGVtcGxhdGVTM1VyaSA9IGNvbmZpZy50ZW1wbGF0ZVMzVXJpO1xuICAgIHRoaXMuX2lucHV0UGFyYW1ldGVyID0gY29uZmlnLmlucHV0UGFyYW1ldGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X3MzX2J1Y2tldCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZWxpdmVyeVMzQnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZWxpdmVyeVMzQnVja2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfczNfYnVja2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxpdmVyeVMzQnVja2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxpdmVyeVMzQnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsaXZlcnlTM0J1Y2tldCgpIHtcbiAgICB0aGlzLl9kZWxpdmVyeVMzQnVja2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxpdmVyeVMzQnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGl2ZXJ5UzNCdWNrZXQ7XG4gIH1cblxuICAvLyBkZWxpdmVyeV9zM19rZXlfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGl2ZXJ5UzNLZXlQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlbGl2ZXJ5UzNLZXlQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZWxpdmVyeV9zM19rZXlfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxpdmVyeVMzS2V5UHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWxpdmVyeVMzS2V5UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVsaXZlcnlTM0tleVByZWZpeCgpIHtcbiAgICB0aGlzLl9kZWxpdmVyeVMzS2V5UHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZWxpdmVyeVMzS2V5UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGl2ZXJ5UzNLZXlQcmVmaXg7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyB0ZW1wbGF0ZV9ib2R5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RlbXBsYXRlQm9keT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGVtcGxhdGVCb2R5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGVtcGxhdGVfYm9keScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGVtcGxhdGVCb2R5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZUJvZHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW1wbGF0ZUJvZHkoKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVCb2R5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0ZW1wbGF0ZUJvZHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVCb2R5O1xuICB9XG5cbiAgLy8gdGVtcGxhdGVfczNfdXJpIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RlbXBsYXRlUzNVcmk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRlbXBsYXRlUzNVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0ZW1wbGF0ZV9zM191cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRlbXBsYXRlUzNVcmkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RlbXBsYXRlUzNVcmkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZW1wbGF0ZVMzVXJpKCkge1xuICAgIHRoaXMuX3RlbXBsYXRlUzNVcmkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRlbXBsYXRlUzNVcmlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVTM1VyaTtcbiAgfVxuXG4gIC8vIGlucHV0X3BhcmFtZXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dFBhcmFtZXRlcj86IENvbmZpZ0NvbmZvcm1hbmNlUGFja0lucHV0UGFyYW1ldGVyW107IFxuICBwdWJsaWMgZ2V0IGlucHV0UGFyYW1ldGVyKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnB1dF9wYXJhbWV0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dFBhcmFtZXRlcih2YWx1ZTogQ29uZmlnQ29uZm9ybWFuY2VQYWNrSW5wdXRQYXJhbWV0ZXJbXSkge1xuICAgIHRoaXMuX2lucHV0UGFyYW1ldGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRQYXJhbWV0ZXIoKSB7XG4gICAgdGhpcy5faW5wdXRQYXJhbWV0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlucHV0UGFyYW1ldGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UGFyYW1ldGVyO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxpdmVyeV9zM19idWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2RlbGl2ZXJ5UzNCdWNrZXQpLFxuICAgICAgZGVsaXZlcnlfczNfa2V5X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVsaXZlcnlTM0tleVByZWZpeCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRlbXBsYXRlX2JvZHk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RlbXBsYXRlQm9keSksXG4gICAgICB0ZW1wbGF0ZV9zM191cmk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3RlbXBsYXRlUzNVcmkpLFxuICAgICAgaW5wdXRfcGFyYW1ldGVyOiBjZGt0Zi5saXN0TWFwcGVyKGNvbmZpZ0NvbmZvcm1hbmNlUGFja0lucHV0UGFyYW1ldGVyVG9UZXJyYWZvcm0pKHRoaXMuX2lucHV0UGFyYW1ldGVyKSxcbiAgICB9O1xuICB9XG59XG4iXX0=