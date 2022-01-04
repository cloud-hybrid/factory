"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagebuilderImage = exports.ImagebuilderImageTimeoutsOutputReference = exports.imagebuilderImageTimeoutsToTerraform = exports.ImagebuilderImageImageTestsConfigurationOutputReference = exports.imagebuilderImageImageTestsConfigurationToTerraform = exports.ImagebuilderImageOutputResources = exports.ImagebuilderImageOutputResourcesAmis = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class ImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {
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
exports.ImagebuilderImageOutputResourcesAmis = ImagebuilderImageOutputResourcesAmis;
_a = JSII_RTTI_SYMBOL_1;
ImagebuilderImageOutputResourcesAmis[_a] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImageOutputResourcesAmis", version: "3.0.1" };
/**
 * @stability stable
 */
class ImagebuilderImageOutputResources extends cdktf.ComplexComputedList {
    // amis - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get amis() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('amis');
    }
}
exports.ImagebuilderImageOutputResources = ImagebuilderImageOutputResources;
_b = JSII_RTTI_SYMBOL_1;
ImagebuilderImageOutputResources[_b] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImageOutputResources", version: "3.0.1" };
function imagebuilderImageImageTestsConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        image_tests_enabled: cdktf.booleanToTerraform(struct.imageTestsEnabled),
        timeout_minutes: cdktf.numberToTerraform(struct.timeoutMinutes),
    };
}
exports.imagebuilderImageImageTestsConfigurationToTerraform = imagebuilderImageImageTestsConfigurationToTerraform;
/**
 * @stability stable
 */
class ImagebuilderImageImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._imageTestsEnabled) {
            hasAnyValues = true;
            internalValueResult.imageTestsEnabled = this._imageTestsEnabled;
        }
        if (this._timeoutMinutes) {
            hasAnyValues = true;
            internalValueResult.timeoutMinutes = this._timeoutMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._imageTestsEnabled = undefined;
            this._timeoutMinutes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._imageTestsEnabled = value.imageTestsEnabled;
            this._timeoutMinutes = value.timeoutMinutes;
        }
    }
    /**
     * @stability stable
     */
    get imageTestsEnabled() {
        return this.getBooleanAttribute('image_tests_enabled');
    }
    /**
     * @stability stable
     */
    set imageTestsEnabled(value) {
        this._imageTestsEnabled = value;
    }
    /**
     * @stability stable
     */
    resetImageTestsEnabled() {
        this._imageTestsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageTestsEnabledInput() {
        return this._imageTestsEnabled;
    }
    /**
     * @stability stable
     */
    get timeoutMinutes() {
        return this.getNumberAttribute('timeout_minutes');
    }
    /**
     * @stability stable
     */
    set timeoutMinutes(value) {
        this._timeoutMinutes = value;
    }
    /**
     * @stability stable
     */
    resetTimeoutMinutes() {
        this._timeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeoutMinutesInput() {
        return this._timeoutMinutes;
    }
}
exports.ImagebuilderImageImageTestsConfigurationOutputReference = ImagebuilderImageImageTestsConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
ImagebuilderImageImageTestsConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImageImageTestsConfigurationOutputReference", version: "3.0.1" };
function imagebuilderImageTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
    };
}
exports.imagebuilderImageTimeoutsToTerraform = imagebuilderImageTimeoutsToTerraform;
/**
 * @stability stable
 */
class ImagebuilderImageTimeoutsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
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
}
exports.ImagebuilderImageTimeoutsOutputReference = ImagebuilderImageTimeoutsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
ImagebuilderImageTimeoutsOutputReference[_d] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImageTimeoutsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image}.
 *
 * @stability stable
 */
class ImagebuilderImage extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image.html aws_imagebuilder_image} Resource.
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
        // image_tests_configuration - computed: false, optional: true, required: false
        this._imageTestsConfiguration = new ImagebuilderImageImageTestsConfigurationOutputReference(this, "image_tests_configuration", true);
        // timeouts - computed: false, optional: true, required: false
        this._timeouts = new ImagebuilderImageTimeoutsOutputReference(this, "timeouts", true);
        this._distributionConfigurationArn = config.distributionConfigurationArn;
        this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
        this._imageRecipeArn = config.imageRecipeArn;
        this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._imageTestsConfiguration.internalValue = config.imageTestsConfiguration;
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
    // date_created - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dateCreated() {
        return this.getStringAttribute('date_created');
    }
    /**
     * @stability stable
     */
    get distributionConfigurationArn() {
        return this.getStringAttribute('distribution_configuration_arn');
    }
    /**
     * @stability stable
     */
    set distributionConfigurationArn(value) {
        this._distributionConfigurationArn = value;
    }
    /**
     * @stability stable
     */
    resetDistributionConfigurationArn() {
        this._distributionConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get distributionConfigurationArnInput() {
        return this._distributionConfigurationArn;
    }
    /**
     * @stability stable
     */
    get enhancedImageMetadataEnabled() {
        return this.getBooleanAttribute('enhanced_image_metadata_enabled');
    }
    /**
     * @stability stable
     */
    set enhancedImageMetadataEnabled(value) {
        this._enhancedImageMetadataEnabled = value;
    }
    /**
     * @stability stable
     */
    resetEnhancedImageMetadataEnabled() {
        this._enhancedImageMetadataEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enhancedImageMetadataEnabledInput() {
        return this._enhancedImageMetadataEnabled;
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
    get imageRecipeArn() {
        return this.getStringAttribute('image_recipe_arn');
    }
    /**
     * @stability stable
     */
    set imageRecipeArn(value) {
        this._imageRecipeArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageRecipeArnInput() {
        return this._imageRecipeArn;
    }
    /**
     * @stability stable
     */
    get infrastructureConfigurationArn() {
        return this.getStringAttribute('infrastructure_configuration_arn');
    }
    /**
     * @stability stable
     */
    set infrastructureConfigurationArn(value) {
        this._infrastructureConfigurationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get infrastructureConfigurationArnInput() {
        return this._infrastructureConfigurationArn;
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
        return new ImagebuilderImageOutputResources(this, 'output_resources', index);
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
    /**
     * @stability stable
     */
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    /**
     * @stability stable
     */
    set tagsAll(value) {
        this._tagsAll = value;
    }
    /**
     * @stability stable
     */
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsAllInput() {
        return this._tagsAll;
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
    get imageTestsConfiguration() {
        return this._imageTestsConfiguration;
    }
    /**
     * @stability stable
     */
    putImageTestsConfiguration(value) {
        this._imageTestsConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetImageTestsConfiguration() {
        this._imageTestsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get imageTestsConfigurationInput() {
        return this._imageTestsConfiguration.internalValue;
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
            distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
            enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
            image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
            infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            image_tests_configuration: imagebuilderImageImageTestsConfigurationToTerraform(this._imageTestsConfiguration.internalValue),
            timeouts: imagebuilderImageTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
exports.ImagebuilderImage = ImagebuilderImage;
_e = JSII_RTTI_SYMBOL_1;
ImagebuilderImage[_e] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImage", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ImagebuilderImage.tfResourceType = "aws_imagebuilder_image";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VidWlsZGVyLWltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ltYWdlYnVpbGRlci9pbWFnZWJ1aWxkZXItaW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFxQi9CLE1BQWEsb0NBQXFDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVqRixnRUFBZ0U7Ozs7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpRUFBaUU7Ozs7SUFDakUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwyREFBMkQ7Ozs7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDBEQUEwRDs7OztJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNERBQTREOzs7O0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O0FBekJILG9GQTBCQzs7Ozs7O0FBQ0QsTUFBYSxnQ0FBaUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdFLDBEQUEwRDs7OztJQUMxRCxJQUFXLElBQUk7UUFDYixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQzs7QUFOSCw0RUFPQzs7O0FBUUQsU0FBZ0IsbURBQW1ELENBQUMsTUFBMkc7SUFDN0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFD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WTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsOEJBQThCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztZQUMzRiwrQkFBK0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzdGLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUM7WUFDL0YsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QseUJBQXlCLEVBQUUsbURBQW1ELENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztZQUMzSCxRQUFRLEVBQUUsb0NBQW9DLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDN0UsQ0FBQztJQUNKLENBQUM7O0FBeE5ILDhDQXlOQzs7O0FBdk5DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csZ0NBQWMsR0FBVyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlYnVpbGRlckltYWdlQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkaXN0cmlidXRpb25Db25maWd1cmF0aW9uQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmhhbmNlZEltYWdlTWV0YWRhdGFFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZVJlY2lwZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluZnJhc3RydWN0dXJlQ29uZmlndXJhdGlvbkFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24/OiBJbWFnZWJ1aWxkZXJJbWFnZUltYWdlVGVzdHNDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRzPzogSW1hZ2VidWlsZGVySW1hZ2VUaW1lb3V0cztcbn1cbmV4cG9ydCBjbGFzcyBJbWFnZWJ1aWxkZXJJbWFnZU91dHB1dFJlc291cmNlc0FtaXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhY2NvdW50X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWNjb3VudElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjb3VudF9pZCcpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBpbWFnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2UnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZWJ1aWxkZXJJbWFnZU91dHB1dFJlc291cmNlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFtaXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbWlzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhbWlzJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlYnVpbGRlckltYWdlSW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZVRlc3RzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRpbWVvdXRNaW51dGVzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VidWlsZGVySW1hZ2VJbWFnZVRlc3RzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEltYWdlYnVpbGRlckltYWdlSW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBJbWFnZWJ1aWxkZXJJbWFnZUltYWdlVGVzdHNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW1hZ2VfdGVzdHNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW1hZ2VUZXN0c0VuYWJsZWQpLFxuICAgIHRpbWVvdXRfbWludXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lb3V0TWludXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlYnVpbGRlckltYWdlSW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogSW1hZ2VidWlsZGVySW1hZ2VJbWFnZVRlc3RzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faW1hZ2VUZXN0c0VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmltYWdlVGVzdHNFbmFibGVkID0gdGhpcy5faW1hZ2VUZXN0c0VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lb3V0TWludXRlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGltZW91dE1pbnV0ZXMgPSB0aGlzLl90aW1lb3V0TWludXRlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEltYWdlYnVpbGRlckltYWdlSW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbWFnZVRlc3RzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RpbWVvdXRNaW51dGVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbWFnZVRlc3RzRW5hYmxlZCA9IHZhbHVlLmltYWdlVGVzdHNFbmFibGVkO1xuICAgICAgdGhpcy5fdGltZW91dE1pbnV0ZXMgPSB2YWx1ZS50aW1lb3V0TWludXRlcztcbiAgICB9XG4gIH1cblxuICAvLyBpbWFnZV90ZXN0c19lbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltYWdlVGVzdHNFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbWFnZVRlc3RzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbWFnZV90ZXN0c19lbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2VUZXN0c0VuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2ltYWdlVGVzdHNFbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW1hZ2VUZXN0c0VuYWJsZWQoKSB7XG4gICAgdGhpcy5faW1hZ2VUZXN0c0VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlVGVzdHNFbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlVGVzdHNFbmFibGVkO1xuICB9XG5cbiAgLy8gdGltZW91dF9taW51dGVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RpbWVvdXRNaW51dGVzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCB0aW1lb3V0TWludXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3RpbWVvdXRfbWludXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZW91dE1pbnV0ZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RpbWVvdXRNaW51dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGltZW91dE1pbnV0ZXMoKSB7XG4gICAgdGhpcy5fdGltZW91dE1pbnV0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRNaW51dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRNaW51dGVzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlYnVpbGRlckltYWdlVGltZW91dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VidWlsZGVySW1hZ2VUaW1lb3V0c1RvVGVycmFmb3JtKHN0cnVjdD86IEltYWdlYnVpbGRlckltYWdlVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgfCBJbWFnZWJ1aWxkZXJJbWFnZVRpbWVvdXRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNyZWF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlYnVpbGRlckltYWdlVGltZW91dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogSW1hZ2VidWlsZGVySW1hZ2VUaW1lb3V0cyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3JlYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jcmVhdGUgPSB0aGlzLl9jcmVhdGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBJbWFnZWJ1aWxkZXJJbWFnZVRpbWVvdXRzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3JlYXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jcmVhdGUgPSB2YWx1ZS5jcmVhdGU7XG4gICAgfVxuICB9XG5cbiAgLy8gY3JlYXRlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NyZWF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZSgpIHtcbiAgICB0aGlzLl9jcmVhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNyZWF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBJbWFnZWJ1aWxkZXJJbWFnZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19pbWFnZWJ1aWxkZXJfaW1hZ2VcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEltYWdlYnVpbGRlckltYWdlQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfaW1hZ2VidWlsZGVyX2ltYWdlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2Rpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4gPSBjb25maWcuZGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkFybjtcbiAgICB0aGlzLl9lbmhhbmNlZEltYWdlTWV0YWRhdGFFbmFibGVkID0gY29uZmlnLmVuaGFuY2VkSW1hZ2VNZXRhZGF0YUVuYWJsZWQ7XG4gICAgdGhpcy5faW1hZ2VSZWNpcGVBcm4gPSBjb25maWcuaW1hZ2VSZWNpcGVBcm47XG4gICAgdGhpcy5faW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuID0gY29uZmlnLmluZnJhc3RydWN0dXJlQ29uZmlndXJhdGlvbkFybjtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gICAgdGhpcy5fdGFnc0FsbCA9IGNvbmZpZy50YWdzQWxsO1xuICAgIHRoaXMuX2ltYWdlVGVzdHNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuaW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50aW1lb3V0cztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBkYXRlX2NyZWF0ZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRlQ3JlYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfY3JlYXRlZCcpO1xuICB9XG5cbiAgLy8gZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXN0cmlidXRpb25fY29uZmlndXJhdGlvbl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXN0cmlidXRpb25Db25maWd1cmF0aW9uQXJuKCkge1xuICAgIHRoaXMuX2Rpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkFybjtcbiAgfVxuXG4gIC8vIGVuaGFuY2VkX2ltYWdlX21ldGFkYXRhX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmhhbmNlZF9pbWFnZV9tZXRhZGF0YV9lbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuaGFuY2VkSW1hZ2VNZXRhZGF0YUVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmhhbmNlZEltYWdlTWV0YWRhdGFFbmFibGVkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGltYWdlX3JlY2lwZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW1hZ2VSZWNpcGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlUmVjaXBlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfcmVjaXBlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2VSZWNpcGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlUmVjaXBlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlUmVjaXBlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlUmVjaXBlQXJuO1xuICB9XG5cbiAgLy8gaW5mcmFzdHJ1Y3R1cmVfY29uZmlndXJhdGlvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbmZyYXN0cnVjdHVyZUNvbmZpZ3VyYXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmZyYXN0cnVjdHVyZV9jb25maWd1cmF0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbmZyYXN0cnVjdHVyZUNvbmZpZ3VyYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZnJhc3RydWN0dXJlQ29uZmlndXJhdGlvbkFybjtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gb3NfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9zVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29zX3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIG91dHB1dF9yZXNvdXJjZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIG91dHB1dFJlc291cmNlcyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBJbWFnZWJ1aWxkZXJJbWFnZU91dHB1dFJlc291cmNlcyh0aGlzLCAnb3V0cHV0X3Jlc291cmNlcycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHBsYXRmb3JtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwbGF0Zm9ybScpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG5cbiAgLy8gaW1hZ2VfdGVzdHNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZVRlc3RzQ29uZmlndXJhdGlvbiA9IG5ldyBJbWFnZWJ1aWxkZXJJbWFnZUltYWdlVGVzdHNDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImltYWdlX3Rlc3RzX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlVGVzdHNDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRJbWFnZVRlc3RzQ29uZmlndXJhdGlvbih2YWx1ZTogSW1hZ2VidWlsZGVySW1hZ2VJbWFnZVRlc3RzQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2ltYWdlVGVzdHNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZVRlc3RzQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9pbWFnZVRlc3RzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZVRlc3RzQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVRlc3RzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGltZW91dHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGltZW91dHMgPSBuZXcgSW1hZ2VidWlsZGVySW1hZ2VUaW1lb3V0c091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aW1lb3V0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB0aW1lb3V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dHM7XG4gIH1cbiAgcHVibGljIHB1dFRpbWVvdXRzKHZhbHVlOiBJbWFnZWJ1aWxkZXJJbWFnZVRpbWVvdXRzKSB7XG4gICAgdGhpcy5fdGltZW91dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVvdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVvdXRzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3RyaWJ1dGlvbl9jb25maWd1cmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkFybiksXG4gICAgICBlbmhhbmNlZF9pbWFnZV9tZXRhZGF0YV9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCksXG4gICAgICBpbWFnZV9yZWNpcGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbWFnZVJlY2lwZUFybiksXG4gICAgICBpbmZyYXN0cnVjdHVyZV9jb25maWd1cmF0aW9uX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgaW1hZ2VfdGVzdHNfY29uZmlndXJhdGlvbjogaW1hZ2VidWlsZGVySW1hZ2VJbWFnZVRlc3RzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2ltYWdlVGVzdHNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgdGltZW91dHM6IGltYWdlYnVpbGRlckltYWdlVGltZW91dHNUb1RlcnJhZm9ybSh0aGlzLl90aW1lb3V0cy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=