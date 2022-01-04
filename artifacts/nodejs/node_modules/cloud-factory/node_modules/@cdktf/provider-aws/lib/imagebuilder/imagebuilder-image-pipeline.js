"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagebuilderImagePipeline = exports.ImagebuilderImagePipelineScheduleOutputReference = exports.imagebuilderImagePipelineScheduleToTerraform = exports.ImagebuilderImagePipelineImageTestsConfigurationOutputReference = exports.imagebuilderImagePipelineImageTestsConfigurationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct) {
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
exports.imagebuilderImagePipelineImageTestsConfigurationToTerraform = imagebuilderImagePipelineImageTestsConfigurationToTerraform;
/**
 * @stability stable
 */
class ImagebuilderImagePipelineImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
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
exports.ImagebuilderImagePipelineImageTestsConfigurationOutputReference = ImagebuilderImagePipelineImageTestsConfigurationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ImagebuilderImagePipelineImageTestsConfigurationOutputReference[_a] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImagePipelineImageTestsConfigurationOutputReference", version: "3.0.1" };
function imagebuilderImagePipelineScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        pipeline_execution_start_condition: cdktf.stringToTerraform(struct.pipelineExecutionStartCondition),
        schedule_expression: cdktf.stringToTerraform(struct.scheduleExpression),
    };
}
exports.imagebuilderImagePipelineScheduleToTerraform = imagebuilderImagePipelineScheduleToTerraform;
/**
 * @stability stable
 */
class ImagebuilderImagePipelineScheduleOutputReference extends cdktf.ComplexObject {
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
        if (this._pipelineExecutionStartCondition) {
            hasAnyValues = true;
            internalValueResult.pipelineExecutionStartCondition = this._pipelineExecutionStartCondition;
        }
        if (this._scheduleExpression) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._pipelineExecutionStartCondition = undefined;
            this._scheduleExpression = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._pipelineExecutionStartCondition = value.pipelineExecutionStartCondition;
            this._scheduleExpression = value.scheduleExpression;
        }
    }
    /**
     * @stability stable
     */
    get pipelineExecutionStartCondition() {
        return this.getStringAttribute('pipeline_execution_start_condition');
    }
    /**
     * @stability stable
     */
    set pipelineExecutionStartCondition(value) {
        this._pipelineExecutionStartCondition = value;
    }
    /**
     * @stability stable
     */
    resetPipelineExecutionStartCondition() {
        this._pipelineExecutionStartCondition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pipelineExecutionStartConditionInput() {
        return this._pipelineExecutionStartCondition;
    }
    /**
     * @stability stable
     */
    get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    /**
     * @stability stable
     */
    set scheduleExpression(value) {
        this._scheduleExpression = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scheduleExpressionInput() {
        return this._scheduleExpression;
    }
}
exports.ImagebuilderImagePipelineScheduleOutputReference = ImagebuilderImagePipelineScheduleOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ImagebuilderImagePipelineScheduleOutputReference[_b] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImagePipelineScheduleOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline}.
 *
 * @stability stable
 */
class ImagebuilderImagePipeline extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_pipeline.html aws_imagebuilder_image_pipeline} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_imagebuilder_image_pipeline',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // image_tests_configuration - computed: false, optional: true, required: false
        this._imageTestsConfiguration = new ImagebuilderImagePipelineImageTestsConfigurationOutputReference(this, "image_tests_configuration", true);
        // schedule - computed: false, optional: true, required: false
        this._schedule = new ImagebuilderImagePipelineScheduleOutputReference(this, "schedule", true);
        this._description = config.description;
        this._distributionConfigurationArn = config.distributionConfigurationArn;
        this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
        this._imageRecipeArn = config.imageRecipeArn;
        this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
        this._name = config.name;
        this._status = config.status;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._imageTestsConfiguration.internalValue = config.imageTestsConfiguration;
        this._schedule.internalValue = config.schedule;
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
    // date_last_run - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dateLastRun() {
        return this.getStringAttribute('date_last_run');
    }
    // date_next_run - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dateNextRun() {
        return this.getStringAttribute('date_next_run');
    }
    // date_updated - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dateUpdated() {
        return this.getStringAttribute('date_updated');
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
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
    get status() {
        return this.getStringAttribute('status');
    }
    /**
     * @stability stable
     */
    set status(value) {
        this._status = value;
    }
    /**
     * @stability stable
     */
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get statusInput() {
        return this._status;
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
    get schedule() {
        return this._schedule;
    }
    /**
     * @stability stable
     */
    putSchedule(value) {
        this._schedule.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scheduleInput() {
        return this._schedule.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
            enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
            image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
            infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
            name: cdktf.stringToTerraform(this._name),
            status: cdktf.stringToTerraform(this._status),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            image_tests_configuration: imagebuilderImagePipelineImageTestsConfigurationToTerraform(this._imageTestsConfiguration.internalValue),
            schedule: imagebuilderImagePipelineScheduleToTerraform(this._schedule.internalValue),
        };
    }
}
exports.ImagebuilderImagePipeline = ImagebuilderImagePipeline;
_c = JSII_RTTI_SYMBOL_1;
ImagebuilderImagePipeline[_c] = { fqn: "@cdktf/provider-aws.imagebuilder.ImagebuilderImagePipeline", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ImagebuilderImagePipeline.tfResourceType = "aws_imagebuilder_image_pipeline";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VidWlsZGVyLWltYWdlLXBpcGVsaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ltYWdlYnVpbGRlci9pbWFnZWJ1aWxkZXItaW1hZ2UtcGlwZWxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFrQy9CLFNBQWdCLDJEQUEyRCxDQUFDLE1BQTJIO0lBQ3JNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RSxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDakUsQ0FBQTtBQUNILENBQUM7QUFURCxrSUFTQzs7OztBQUVELE1BQWEsK0RBQWdFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJdEcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixH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SUFBSSxDQUFDLDZCQUE2QixDQUFDO1lBQzdGLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUM7WUFDL0YsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCx5QkFBeUIsRUFBRSwyREFBMkQsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1lBQ25JLFFBQVEsRUFBRSw0Q0FBNEMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUNyRixDQUFDO0lBQ0osQ0FBQzs7QUF0UUgsOERBdVFDOzs7QUFyUUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyx3Q0FBYyxHQUFXLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZVJlY2lwZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbWFnZVRlc3RzQ29uZmlndXJhdGlvbj86IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVJbWFnZVRlc3RzQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVkdWxlPzogSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZVNjaGVkdWxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZWJ1aWxkZXJJbWFnZVBpcGVsaW5lSW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGltYWdlVGVzdHNFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lb3V0TWludXRlcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVJbWFnZVRlc3RzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVJbWFnZVRlc3RzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVJbWFnZVRlc3RzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGltYWdlX3Rlc3RzX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmltYWdlVGVzdHNFbmFibGVkKSxcbiAgICB0aW1lb3V0X21pbnV0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEudGltZW91dE1pbnV0ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZWJ1aWxkZXJJbWFnZVBpcGVsaW5lSW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZUltYWdlVGVzdHNDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbWFnZVRlc3RzRW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW1hZ2VUZXN0c0VuYWJsZWQgPSB0aGlzLl9pbWFnZVRlc3RzRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRNaW51dGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50aW1lb3V0TWludXRlcyA9IHRoaXMuX3RpbWVvdXRNaW51dGVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZUltYWdlVGVzdHNDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW1hZ2VUZXN0c0VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90aW1lb3V0TWludXRlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW1hZ2VUZXN0c0VuYWJsZWQgPSB2YWx1ZS5pbWFnZVRlc3RzRW5hYmxlZDtcbiAgICAgIHRoaXMuX3RpbWVvdXRNaW51dGVzID0gdmFsdWUudGltZW91dE1pbnV0ZXM7XG4gICAgfVxuICB9XG5cbiAgLy8gaW1hZ2VfdGVzdHNfZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbWFnZVRlc3RzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW1hZ2VUZXN0c0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW1hZ2VfdGVzdHNfZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGltYWdlVGVzdHNFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbWFnZVRlc3RzRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEltYWdlVGVzdHNFbmFibGVkKCkge1xuICAgIHRoaXMuX2ltYWdlVGVzdHNFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZVRlc3RzRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVRlc3RzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIHRpbWVvdXRfbWludXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lb3V0TWludXRlcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgdGltZW91dE1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd0aW1lb3V0X21pbnV0ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVvdXRNaW51dGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90aW1lb3V0TWludXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVvdXRNaW51dGVzKCkge1xuICAgIHRoaXMuX3RpbWVvdXRNaW51dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0aW1lb3V0TWludXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lb3V0TWludXRlcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZWJ1aWxkZXJJbWFnZVBpcGVsaW5lU2NoZWR1bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2NoZWR1bGVFeHByZXNzaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZWJ1aWxkZXJJbWFnZVBpcGVsaW5lU2NoZWR1bGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBJbWFnZWJ1aWxkZXJJbWFnZVBpcGVsaW5lU2NoZWR1bGVPdXRwdXRSZWZlcmVuY2UgfCBJbWFnZWJ1aWxkZXJJbWFnZVBpcGVsaW5lU2NoZWR1bGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwaXBlbGluZV9leGVjdXRpb25fc3RhcnRfY29uZGl0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb24pLFxuICAgIHNjaGVkdWxlX2V4cHJlc3Npb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2NoZWR1bGVFeHByZXNzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZVNjaGVkdWxlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVTY2hlZHVsZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcGlwZWxpbmVFeGVjdXRpb25TdGFydENvbmRpdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGlwZWxpbmVFeGVjdXRpb25TdGFydENvbmRpdGlvbiA9IHRoaXMuX3BpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlZHVsZUV4cHJlc3Npb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjaGVkdWxlRXhwcmVzc2lvbiA9IHRoaXMuX3NjaGVkdWxlRXhwcmVzc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVTY2hlZHVsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3BpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2hlZHVsZUV4cHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3BpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb24gPSB2YWx1ZS5waXBlbGluZUV4ZWN1dGlvblN0YXJ0Q29uZGl0aW9uO1xuICAgICAgdGhpcy5fc2NoZWR1bGVFeHByZXNzaW9uID0gdmFsdWUuc2NoZWR1bGVFeHByZXNzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBpcGVsaW5lX2V4ZWN1dGlvbl9zdGFydF9jb25kaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGlwZWxpbmVFeGVjdXRpb25TdGFydENvbmRpdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGlwZWxpbmVFeGVjdXRpb25TdGFydENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BpcGVsaW5lX2V4ZWN1dGlvbl9zdGFydF9jb25kaXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQaXBlbGluZUV4ZWN1dGlvblN0YXJ0Q29uZGl0aW9uKCkge1xuICAgIHRoaXMuX3BpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBpcGVsaW5lRXhlY3V0aW9uU3RhcnRDb25kaXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVFeGVjdXRpb25TdGFydENvbmRpdGlvbjtcbiAgfVxuXG4gIC8vIHNjaGVkdWxlX2V4cHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NoZWR1bGVFeHByZXNzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzY2hlZHVsZUV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlZHVsZV9leHByZXNzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2hlZHVsZUV4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjaGVkdWxlRXhwcmVzc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlZHVsZUV4cHJlc3Npb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZWR1bGVFeHByZXNzaW9uO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19pbWFnZWJ1aWxkZXJfaW1hZ2VfcGlwZWxpbmVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2ltYWdlYnVpbGRlcl9pbWFnZV9waXBlbGluZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9kaXN0cmlidXRpb25Db25maWd1cmF0aW9uQXJuID0gY29uZmlnLmRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm47XG4gICAgdGhpcy5fZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCA9IGNvbmZpZy5lbmhhbmNlZEltYWdlTWV0YWRhdGFFbmFibGVkO1xuICAgIHRoaXMuX2ltYWdlUmVjaXBlQXJuID0gY29uZmlnLmltYWdlUmVjaXBlQXJuO1xuICAgIHRoaXMuX2luZnJhc3RydWN0dXJlQ29uZmlndXJhdGlvbkFybiA9IGNvbmZpZy5pbmZyYXN0cnVjdHVyZUNvbmZpZ3VyYXRpb25Bcm47XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX3N0YXR1cyA9IGNvbmZpZy5zdGF0dXM7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9pbWFnZVRlc3RzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmltYWdlVGVzdHNDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3NjaGVkdWxlLmludGVybmFsVmFsdWUgPSBjb25maWcuc2NoZWR1bGU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gZGF0ZV9jcmVhdGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0ZUNyZWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRlX2NyZWF0ZWQnKTtcbiAgfVxuXG4gIC8vIGRhdGVfbGFzdF9ydW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRlTGFzdFJ1bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfbGFzdF9ydW4nKTtcbiAgfVxuXG4gIC8vIGRhdGVfbmV4dF9ydW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRlTmV4dFJ1bigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGVfbmV4dF9ydW4nKTtcbiAgfVxuXG4gIC8vIGRhdGVfdXBkYXRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGVVcGRhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0ZV91cGRhdGVkJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb25fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkaXN0cmlidXRpb25fY29uZmlndXJhdGlvbl9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaXN0cmlidXRpb25Db25maWd1cmF0aW9uQXJuKCkge1xuICAgIHRoaXMuX2Rpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc3RyaWJ1dGlvbkNvbmZpZ3VyYXRpb25Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzdHJpYnV0aW9uQ29uZmlndXJhdGlvbkFybjtcbiAgfVxuXG4gIC8vIGVuaGFuY2VkX2ltYWdlX21ldGFkYXRhX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmhhbmNlZF9pbWFnZV9tZXRhZGF0YV9lbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuaGFuY2VkSW1hZ2VNZXRhZGF0YUVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5oYW5jZWRJbWFnZU1ldGFkYXRhRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmhhbmNlZEltYWdlTWV0YWRhdGFFbmFibGVkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGltYWdlX3JlY2lwZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW1hZ2VSZWNpcGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGltYWdlUmVjaXBlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW1hZ2VfcmVjaXBlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW1hZ2VSZWNpcGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlUmVjaXBlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGltYWdlUmVjaXBlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlUmVjaXBlQXJuO1xuICB9XG5cbiAgLy8gaW5mcmFzdHJ1Y3R1cmVfY29uZmlndXJhdGlvbl9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbmZyYXN0cnVjdHVyZUNvbmZpZ3VyYXRpb25Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmZyYXN0cnVjdHVyZV9jb25maWd1cmF0aW9uX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbmZyYXN0cnVjdHVyZUNvbmZpZ3VyYXRpb25Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5mcmFzdHJ1Y3R1cmVDb25maWd1cmF0aW9uQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZnJhc3RydWN0dXJlQ29uZmlndXJhdGlvbkFybjtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcGxhdGZvcm0gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BsYXRmb3JtJyk7XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RhdHVzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0YXR1cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhdHVzKCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RhdHVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyBpbWFnZV90ZXN0c19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ltYWdlVGVzdHNDb25maWd1cmF0aW9uID0gbmV3IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVJbWFnZVRlc3RzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbWFnZV90ZXN0c19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGltYWdlVGVzdHNDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVRlc3RzQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SW1hZ2VUZXN0c0NvbmZpZ3VyYXRpb24odmFsdWU6IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVJbWFnZVRlc3RzQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2ltYWdlVGVzdHNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbWFnZVRlc3RzQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9pbWFnZVRlc3RzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbWFnZVRlc3RzQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbWFnZVRlc3RzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2NoZWR1bGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZWR1bGUgPSBuZXcgSW1hZ2VidWlsZGVySW1hZ2VQaXBlbGluZVNjaGVkdWxlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNjaGVkdWxlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNjaGVkdWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZTtcbiAgfVxuICBwdWJsaWMgcHV0U2NoZWR1bGUodmFsdWU6IEltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVTY2hlZHVsZSkge1xuICAgIHRoaXMuX3NjaGVkdWxlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlZHVsZSgpIHtcbiAgICB0aGlzLl9zY2hlZHVsZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlZHVsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZGlzdHJpYnV0aW9uX2NvbmZpZ3VyYXRpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kaXN0cmlidXRpb25Db25maWd1cmF0aW9uQXJuKSxcbiAgICAgIGVuaGFuY2VkX2ltYWdlX21ldGFkYXRhX2VuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9lbmhhbmNlZEltYWdlTWV0YWRhdGFFbmFibGVkKSxcbiAgICAgIGltYWdlX3JlY2lwZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ltYWdlUmVjaXBlQXJuKSxcbiAgICAgIGluZnJhc3RydWN0dXJlX2NvbmZpZ3VyYXRpb25fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pbmZyYXN0cnVjdHVyZUNvbmZpZ3VyYXRpb25Bcm4pLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICBzdGF0dXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3N0YXR1cyksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIGltYWdlX3Rlc3RzX2NvbmZpZ3VyYXRpb246IGltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVJbWFnZVRlc3RzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2ltYWdlVGVzdHNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgc2NoZWR1bGU6IGltYWdlYnVpbGRlckltYWdlUGlwZWxpbmVTY2hlZHVsZVRvVGVycmFmb3JtKHRoaXMuX3NjaGVkdWxlLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==