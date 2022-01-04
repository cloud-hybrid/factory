"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsImagebuilderImage = exports.DataAwsImagebuilderImageOutputResources = exports.DataAwsImagebuilderImageOutputResourcesAmis = exports.DataAwsImagebuilderImageImageTestsConfiguration = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsImagebuilderImageImageTestsConfiguration extends cdktf.ComplexComputedList {
    // image_tests_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get imageTestsEnabled() {
        return this.getBooleanAttribute('image_tests_enabled');
    }
    // timeout_minutes - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get timeoutMinutes() {
        return this.getNumberAttribute('timeout_minutes');
    }
}
exports.DataAwsImagebuilderImageImageTestsConfiguration = DataAwsImagebuilderImageImageTestsConfiguration;
_a = JSII_RTTI_SYMBOL_1;
DataAwsImagebuilderImageImageTestsConfiguration[_a] = { fqn: "@cdktf/provider-aws.imagebuilder.DataAwsImagebuilderImageImageTestsConfiguration", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {
    // account_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    // image - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get image() {
        return this.getStringAttribute('image');
    }
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    // region - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get region() {
        return this.getStringAttribute('region');
    }
}
exports.DataAwsImagebuilderImageOutputResourcesAmis = DataAwsImagebuilderImageOutputResourcesAmis;
_b = JSII_RTTI_SYMBOL_1;
DataAwsImagebuilderImageOutputResourcesAmis[_b] = { fqn: "@cdktf/provider-aws.imagebuilder.DataAwsImagebuilderImageOutputResourcesAmis", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsImagebuilderImageOutputResources extends cdktf.ComplexComputedList {
    // amis - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get amis() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('amis');
    }
}
exports.DataAwsImagebuilderImageOutputResources = DataAwsImagebuilderImageOutputResources;
_c = JSII_RTTI_SYMBOL_1;
DataAwsImagebuilderImageOutputResources[_c] = { fqn: "@cdktf/provider-aws.imagebuilder.DataAwsImagebuilderImageOutputResources", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image}.
 *
 * @stability stable
 */
class DataAwsImagebuilderImage extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_imagebuilder_image',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._arn = config.arn;
        this._tags = config.tags;
    }
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get arnInput() {
        return this._arn;
    }
    // build_version_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get buildVersionArn() {
        return this.getStringAttribute('build_version_arn');
    }
    // date_created - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dateCreated() {
        return this.getStringAttribute('date_created');
    }
    // distribution_configuration_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get distributionConfigurationArn() {
        return this.getStringAttribute('distribution_configuration_arn');
    }
    // enhanced_image_metadata_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enhancedImageMetadataEnabled() {
        return this.getBooleanAttribute('enhanced_image_metadata_enabled');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // image_recipe_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get imageRecipeArn() {
        return this.getStringAttribute('image_recipe_arn');
    }
    // image_tests_configuration - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    imageTestsConfiguration(index) {
        return new DataAwsImagebuilderImageImageTestsConfiguration(this, 'image_tests_configuration', index);
    }
    // infrastructure_configuration_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get infrastructureConfigurationArn() {
        return this.getStringAttribute('infrastructure_configuration_arn');
    }
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    // os_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get osVersion() {
        return this.getStringAttribute('os_version');
    }
    // output_resources - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    outputResources(index) {
        return new DataAwsImagebuilderImageOutputResources(this, 'output_resources', index);
    }
    // platform - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get platform() {
        return this.getStringAttribute('platform');
    }
    /**
     * @stability stable
     */
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    /**
     * @stability stable
     */
    set tags(value) {
        this._tags = value;
    }
    /**
     * @stability stable
     */
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsInput() {
        return this._tags;
    }
    // version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsImagebuilderImage = DataAwsImagebuilderImage;
_d = JSII_RTTI_SYMBOL_1;
DataAwsImagebuilderImage[_d] = { fqn: "@cdktf/provider-aws.imagebuilder.DataAwsImagebuilderImage", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsImagebuilderImage.tfResourceType = "aws_imagebuilder_image";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtaW1hZ2VidWlsZGVyLWltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ltYWdlYnVpbGRlci9kYXRhLWF3cy1pbWFnZWJ1aWxkZXItaW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFTL0IsTUFBYSwrQ0FBZ0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVGLHlFQUF5RTs7OztJQUN6RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7SUFFRCxxRUFBcUU7Ozs7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7QUFWSCwwR0FXQzs7Ozs7O0FBQ0QsTUFBYSwyQ0FBNEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXhGLGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlFQUFpRTs7OztJQUNqRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDJEQUEyRDs7OztJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMERBQTBEOzs7O0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7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Q0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NJbWFnZWJ1aWxkZXJJbWFnZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzSW1hZ2VidWlsZGVySW1hZ2VJbWFnZVRlc3RzQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGltYWdlX3Rlc3RzX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbWFnZVRlc3RzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbWFnZV90ZXN0c19lbmFibGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGltZW91dF9taW51dGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZW91dE1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aW1lb3V0X21pbnV0ZXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NJbWFnZWJ1aWxkZXJJbWFnZU91dHB1dFJlc291cmNlc0FtaXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBpbWFnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2UnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzSW1hZ2VidWlsZGVySW1hZ2VPdXRwdXRSZXNvdXJjZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbWlzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYW1pcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYW1pcycpIGFzIGFueTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NJbWFnZWJ1aWxkZXJJbWFnZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2ltYWdlYnVpbGRlcl9pbWFnZVwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NJbWFnZWJ1aWxkZXJJbWFnZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2ltYWdlYnVpbGRlcl9pbWFnZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hcm4gPSBjb25maWcuYXJuO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Fybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBhcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2FybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJuO1xuICB9XG5cbiAgLy8gYnVpbGRfdmVyc2lvbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWlsZFZlcnNpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWlsZF92ZXJzaW9uX2FybicpO1xuICB9XG5cbiAgLy8gZGF0ZV9jcmVhdGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUNyZWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRlX2NyZWF0ZWQnKTtcbiAgfVxuXG4gIC8vIGRpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXN0cmlidXRpb25fY29uZmlndXJhdGlvbl9hcm4nKTtcbiAgfVxuXG4gIC8vIGVuaGFuY2VkX2ltYWdlX21ldGFkYXRhX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmhhbmNlZEltYWdlTWV0YWRhdGFFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuaGFuY2VkX2ltYWdlX21ldGFkYXRhX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gaW1hZ2VfcmVjaXBlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlUmVjaXBlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfcmVjaXBlX2FybicpO1xuICB9XG5cbiAgLy8gaW1hZ2VfdGVzdHNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgaW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24oaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0ltYWdlYnVpbGRlckltYWdlSW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24odGhpcywgJ2ltYWdlX3Rlc3RzX2NvbmZpZ3VyYXRpb24nLCBpbmRleCk7XG4gIH1cblxuICAvLyBpbmZyYXN0cnVjdHVyZV9jb25maWd1cmF0aW9uX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZnJhc3RydWN0dXJlQ29uZmlndXJhdGlvbkFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZnJhc3RydWN0dXJlX2NvbmZpZ3VyYXRpb25fYXJuJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIG9zX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvc1ZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvc192ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBvdXRwdXRfcmVzb3VyY2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBvdXRwdXRSZXNvdXJjZXMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0ltYWdlYnVpbGRlckltYWdlT3V0cHV0UmVzb3VyY2VzKHRoaXMsICdvdXRwdXRfcmVzb3VyY2VzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYXRmb3JtJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2FybiksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=