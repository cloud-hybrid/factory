"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElastictranscoderPipeline = exports.elastictranscoderPipelineThumbnailConfigPermissionsToTerraform = exports.ElastictranscoderPipelineThumbnailConfigOutputReference = exports.elastictranscoderPipelineThumbnailConfigToTerraform = exports.ElastictranscoderPipelineNotificationsOutputReference = exports.elastictranscoderPipelineNotificationsToTerraform = exports.elastictranscoderPipelineContentConfigPermissionsToTerraform = exports.ElastictranscoderPipelineContentConfigOutputReference = exports.elastictranscoderPipelineContentConfigToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function elastictranscoderPipelineContentConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
exports.elastictranscoderPipelineContentConfigToTerraform = elastictranscoderPipelineContentConfigToTerraform;
/**
 * @stability stable
 */
class ElastictranscoderPipelineContentConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._bucket) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._storageClass) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucket = undefined;
            this._storageClass = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucket = value.bucket;
            this._storageClass = value.storageClass;
        }
    }
    /**
     * @stability stable
     */
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    /**
     * @stability stable
     */
    set bucket(value) {
        this._bucket = value;
    }
    /**
     * @stability stable
     */
    resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketInput() {
        return this._bucket;
    }
    /**
     * @stability stable
     */
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    /**
     * @stability stable
     */
    set storageClass(value) {
        this._storageClass = value;
    }
    /**
     * @stability stable
     */
    resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageClassInput() {
        return this._storageClass;
    }
}
exports.ElastictranscoderPipelineContentConfigOutputReference = ElastictranscoderPipelineContentConfigOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineContentConfigOutputReference[_a] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPipelineContentConfigOutputReference", version: "3.0.1" };
function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: cdktf.listMapper(cdktf.stringToTerraform)(struct.access),
        grantee: cdktf.stringToTerraform(struct.grantee),
        grantee_type: cdktf.stringToTerraform(struct.granteeType),
    };
}
exports.elastictranscoderPipelineContentConfigPermissionsToTerraform = elastictranscoderPipelineContentConfigPermissionsToTerraform;
function elastictranscoderPipelineNotificationsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        completed: cdktf.stringToTerraform(struct.completed),
        error: cdktf.stringToTerraform(struct.error),
        progressing: cdktf.stringToTerraform(struct.progressing),
        warning: cdktf.stringToTerraform(struct.warning),
    };
}
exports.elastictranscoderPipelineNotificationsToTerraform = elastictranscoderPipelineNotificationsToTerraform;
/**
 * @stability stable
 */
class ElastictranscoderPipelineNotificationsOutputReference extends cdktf.ComplexObject {
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
        if (this._completed) {
            hasAnyValues = true;
            internalValueResult.completed = this._completed;
        }
        if (this._error) {
            hasAnyValues = true;
            internalValueResult.error = this._error;
        }
        if (this._progressing) {
            hasAnyValues = true;
            internalValueResult.progressing = this._progressing;
        }
        if (this._warning) {
            hasAnyValues = true;
            internalValueResult.warning = this._warning;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._completed = undefined;
            this._error = undefined;
            this._progressing = undefined;
            this._warning = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._completed = value.completed;
            this._error = value.error;
            this._progressing = value.progressing;
            this._warning = value.warning;
        }
    }
    /**
     * @stability stable
     */
    get completed() {
        return this.getStringAttribute('completed');
    }
    /**
     * @stability stable
     */
    set completed(value) {
        this._completed = value;
    }
    /**
     * @stability stable
     */
    resetCompleted() {
        this._completed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get completedInput() {
        return this._completed;
    }
    /**
     * @stability stable
     */
    get error() {
        return this.getStringAttribute('error');
    }
    /**
     * @stability stable
     */
    set error(value) {
        this._error = value;
    }
    /**
     * @stability stable
     */
    resetError() {
        this._error = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get errorInput() {
        return this._error;
    }
    /**
     * @stability stable
     */
    get progressing() {
        return this.getStringAttribute('progressing');
    }
    /**
     * @stability stable
     */
    set progressing(value) {
        this._progressing = value;
    }
    /**
     * @stability stable
     */
    resetProgressing() {
        this._progressing = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get progressingInput() {
        return this._progressing;
    }
    /**
     * @stability stable
     */
    get warning() {
        return this.getStringAttribute('warning');
    }
    /**
     * @stability stable
     */
    set warning(value) {
        this._warning = value;
    }
    /**
     * @stability stable
     */
    resetWarning() {
        this._warning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get warningInput() {
        return this._warning;
    }
}
exports.ElastictranscoderPipelineNotificationsOutputReference = ElastictranscoderPipelineNotificationsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineNotificationsOutputReference[_b] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPipelineNotificationsOutputReference", version: "3.0.1" };
function elastictranscoderPipelineThumbnailConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket: cdktf.stringToTerraform(struct.bucket),
        storage_class: cdktf.stringToTerraform(struct.storageClass),
    };
}
exports.elastictranscoderPipelineThumbnailConfigToTerraform = elastictranscoderPipelineThumbnailConfigToTerraform;
/**
 * @stability stable
 */
class ElastictranscoderPipelineThumbnailConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._bucket) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._storageClass) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucket = undefined;
            this._storageClass = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucket = value.bucket;
            this._storageClass = value.storageClass;
        }
    }
    /**
     * @stability stable
     */
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    /**
     * @stability stable
     */
    set bucket(value) {
        this._bucket = value;
    }
    /**
     * @stability stable
     */
    resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketInput() {
        return this._bucket;
    }
    /**
     * @stability stable
     */
    get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    /**
     * @stability stable
     */
    set storageClass(value) {
        this._storageClass = value;
    }
    /**
     * @stability stable
     */
    resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageClassInput() {
        return this._storageClass;
    }
}
exports.ElastictranscoderPipelineThumbnailConfigOutputReference = ElastictranscoderPipelineThumbnailConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipelineThumbnailConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPipelineThumbnailConfigOutputReference", version: "3.0.1" };
function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access: cdktf.listMapper(cdktf.stringToTerraform)(struct.access),
        grantee: cdktf.stringToTerraform(struct.grantee),
        grantee_type: cdktf.stringToTerraform(struct.granteeType),
    };
}
exports.elastictranscoderPipelineThumbnailConfigPermissionsToTerraform = elastictranscoderPipelineThumbnailConfigPermissionsToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline}.
 *
 * @stability stable
 */
class ElastictranscoderPipeline extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elastictranscoder_pipeline',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // content_config - computed: false, optional: true, required: false
        this._contentConfig = new ElastictranscoderPipelineContentConfigOutputReference(this, "content_config", true);
        // notifications - computed: false, optional: true, required: false
        this._notifications = new ElastictranscoderPipelineNotificationsOutputReference(this, "notifications", true);
        // thumbnail_config - computed: false, optional: true, required: false
        this._thumbnailConfig = new ElastictranscoderPipelineThumbnailConfigOutputReference(this, "thumbnail_config", true);
        this._awsKmsKeyArn = config.awsKmsKeyArn;
        this._inputBucket = config.inputBucket;
        this._name = config.name;
        this._outputBucket = config.outputBucket;
        this._role = config.role;
        this._contentConfig.internalValue = config.contentConfig;
        this._contentConfigPermissions = config.contentConfigPermissions;
        this._notifications.internalValue = config.notifications;
        this._thumbnailConfig.internalValue = config.thumbnailConfig;
        this._thumbnailConfigPermissions = config.thumbnailConfigPermissions;
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
    get awsKmsKeyArn() {
        return this.getStringAttribute('aws_kms_key_arn');
    }
    /**
     * @stability stable
     */
    set awsKmsKeyArn(value) {
        this._awsKmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetAwsKmsKeyArn() {
        this._awsKmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsKmsKeyArnInput() {
        return this._awsKmsKeyArn;
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
    get inputBucket() {
        return this.getStringAttribute('input_bucket');
    }
    /**
     * @stability stable
     */
    set inputBucket(value) {
        this._inputBucket = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputBucketInput() {
        return this._inputBucket;
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
    get outputBucket() {
        return this.getStringAttribute('output_bucket');
    }
    /**
     * @stability stable
     */
    set outputBucket(value) {
        this._outputBucket = value;
    }
    /**
     * @stability stable
     */
    resetOutputBucket() {
        this._outputBucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputBucketInput() {
        return this._outputBucket;
    }
    /**
     * @stability stable
     */
    get role() {
        return this.getStringAttribute('role');
    }
    /**
     * @stability stable
     */
    set role(value) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleInput() {
        return this._role;
    }
    /**
     * @stability stable
     */
    get contentConfig() {
        return this._contentConfig;
    }
    /**
     * @stability stable
     */
    putContentConfig(value) {
        this._contentConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetContentConfig() {
        this._contentConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentConfigInput() {
        return this._contentConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get contentConfigPermissions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('content_config_permissions');
    }
    /**
     * @stability stable
     */
    set contentConfigPermissions(value) {
        this._contentConfigPermissions = value;
    }
    /**
     * @stability stable
     */
    resetContentConfigPermissions() {
        this._contentConfigPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentConfigPermissionsInput() {
        return this._contentConfigPermissions;
    }
    /**
     * @stability stable
     */
    get notifications() {
        return this._notifications;
    }
    /**
     * @stability stable
     */
    putNotifications(value) {
        this._notifications.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetNotifications() {
        this._notifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get notificationsInput() {
        return this._notifications.internalValue;
    }
    /**
     * @stability stable
     */
    get thumbnailConfig() {
        return this._thumbnailConfig;
    }
    /**
     * @stability stable
     */
    putThumbnailConfig(value) {
        this._thumbnailConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetThumbnailConfig() {
        this._thumbnailConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get thumbnailConfigInput() {
        return this._thumbnailConfig.internalValue;
    }
    /**
     * @stability stable
     */
    get thumbnailConfigPermissions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('thumbnail_config_permissions');
    }
    /**
     * @stability stable
     */
    set thumbnailConfigPermissions(value) {
        this._thumbnailConfigPermissions = value;
    }
    /**
     * @stability stable
     */
    resetThumbnailConfigPermissions() {
        this._thumbnailConfigPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get thumbnailConfigPermissionsInput() {
        return this._thumbnailConfigPermissions;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            aws_kms_key_arn: cdktf.stringToTerraform(this._awsKmsKeyArn),
            input_bucket: cdktf.stringToTerraform(this._inputBucket),
            name: cdktf.stringToTerraform(this._name),
            output_bucket: cdktf.stringToTerraform(this._outputBucket),
            role: cdktf.stringToTerraform(this._role),
            content_config: elastictranscoderPipelineContentConfigToTerraform(this._contentConfig.internalValue),
            content_config_permissions: cdktf.listMapper(elastictranscoderPipelineContentConfigPermissionsToTerraform)(this._contentConfigPermissions),
            notifications: elastictranscoderPipelineNotificationsToTerraform(this._notifications.internalValue),
            thumbnail_config: elastictranscoderPipelineThumbnailConfigToTerraform(this._thumbnailConfig.internalValue),
            thumbnail_config_permissions: cdktf.listMapper(elastictranscoderPipelineThumbnailConfigPermissionsToTerraform)(this._thumbnailConfigPermissions),
        };
    }
}
exports.ElastictranscoderPipeline = ElastictranscoderPipeline;
_d = JSII_RTTI_SYMBOL_1;
ElastictranscoderPipeline[_d] = { fqn: "@cdktf/provider-aws.elastictranscoder.ElastictranscoderPipeline", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ElastictranscoderPipeline.tfResourceType = "aws_elastictranscoder_pipeline";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpY3RyYW5zY29kZXItcGlwZWxpbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWxhc3RpY3RyYW5zY29kZXIvZWxhc3RpY3RyYW5zY29kZXItcGlwZWxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnQy9CLFNBQWdCLGlEQUFpRCxDQUFDLE1BQXVHO0lBQ3ZLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM3RCxDQUFBO0FBQ0gsQ0FBQztBQVRELDhHQVNDOzs7O0FBRUQsTUFBYSxxREFBc0QsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk1RixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJ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VSxDQUFDLDhEQUE4RCxDQUFDLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1NBQ2pKLENBQUM7SUFDSixDQUFDOztBQTlOSCw4REErTkM7OztBQTdOQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHdDQUFjLEdBQVcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhd3NLbXNLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5wdXRCdWNrZXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvdXRwdXRCdWNrZXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRDb25maWc/OiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGVudENvbmZpZ1Blcm1pc3Npb25zPzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBub3RpZmljYXRpb25zPzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZU5vdGlmaWNhdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRodW1ibmFpbENvbmZpZz86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zPzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zW107XG59XG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdG9yYWdlQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBzdG9yYWdlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VDbGFzcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1Y2tldCA9IHRoaXMuX2J1Y2tldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0b3JhZ2VDbGFzcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RvcmFnZUNsYXNzID0gdGhpcy5fc3RvcmFnZUNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldCA9IHZhbHVlLmJ1Y2tldDtcbiAgICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHZhbHVlLnN0b3JhZ2VDbGFzcztcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXQoKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0O1xuICB9XG5cbiAgLy8gc3RvcmFnZV9jbGFzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUNsYXNzKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1Blcm1pc3Npb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3M/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyYW50ZWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JhbnRlZVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ1Blcm1pc3Npb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2VzczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY2Nlc3MpLFxuICAgIGdyYW50ZWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JhbnRlZSksXG4gICAgZ3JhbnRlZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyYW50ZWVUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wbGV0ZWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVycm9yPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9ncmVzc2luZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHdhcm5pbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lTm90aWZpY2F0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIHwgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZU5vdGlmaWNhdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wbGV0ZWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcGxldGVkKSxcbiAgICBlcnJvcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvciksXG4gICAgcHJvZ3Jlc3Npbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvZ3Jlc3NpbmcpLFxuICAgIHdhcm5pbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud2FybmluZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb21wbGV0ZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXBsZXRlZCA9IHRoaXMuX2NvbXBsZXRlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lcnJvciA9IHRoaXMuX2Vycm9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvZ3Jlc3NpbmcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2dyZXNzaW5nID0gdGhpcy5fcHJvZ3Jlc3Npbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLl93YXJuaW5nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC53YXJuaW5nID0gdGhpcy5fd2FybmluZztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29tcGxldGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9ncmVzc2luZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3dhcm5pbmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IHZhbHVlLmNvbXBsZXRlZDtcbiAgICAgIHRoaXMuX2Vycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICB0aGlzLl9wcm9ncmVzc2luZyA9IHZhbHVlLnByb2dyZXNzaW5nO1xuICAgICAgdGhpcy5fd2FybmluZyA9IHZhbHVlLndhcm5pbmc7XG4gICAgfVxuICB9XG5cbiAgLy8gY29tcGxldGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXBsZXRlZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcGxldGVkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wbGV0ZWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXBsZXRlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXBsZXRlZCgpIHtcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXBsZXRlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gIH1cblxuICAvLyBlcnJvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lcnJvcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlcnJvcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXJyb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Vycm9yID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXJyb3IoKSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVycm9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yO1xuICB9XG5cbiAgLy8gcHJvZ3Jlc3NpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3Npbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByb2dyZXNzaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvZ3Jlc3NpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2dyZXNzaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcm9ncmVzc2luZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2dyZXNzaW5nKCkge1xuICAgIHRoaXMuX3Byb2dyZXNzaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9ncmVzc2luZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc2luZztcbiAgfVxuXG4gIC8vIHdhcm5pbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd2FybmluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd2FybmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dhcm5pbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHdhcm5pbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3dhcm5pbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRXYXJuaW5nKCkge1xuICAgIHRoaXMuX3dhcm5pbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHdhcm5pbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2FybmluZztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdG9yYWdlQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ091dHB1dFJlZmVyZW5jZSB8IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0KSxcbiAgICBzdG9yYWdlX2NsYXNzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0b3JhZ2VDbGFzcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXQgPSB0aGlzLl9idWNrZXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdG9yYWdlQ2xhc3MpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0b3JhZ2VDbGFzcyA9IHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWcgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdG9yYWdlQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldCA9IHZhbHVlLmJ1Y2tldDtcbiAgICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHZhbHVlLnN0b3JhZ2VDbGFzcztcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXQoKSB7XG4gICAgdGhpcy5fYnVja2V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0O1xuICB9XG5cbiAgLy8gc3RvcmFnZV9jbGFzcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlQ2xhc3M/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0b3JhZ2VfY2xhc3MnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0b3JhZ2VDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZUNsYXNzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmFnZUNsYXNzKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VDbGFzcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmFnZUNsYXNzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VDbGFzcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFjY2Vzcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZ3JhbnRlZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncmFudGVlVHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjY2VzczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5hY2Nlc3MpLFxuICAgIGdyYW50ZWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ3JhbnRlZSksXG4gICAgZ3JhbnRlZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyYW50ZWVUeXBlKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWxhc3RpY3RyYW5zY29kZXJfcGlwZWxpbmVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19lbGFzdGljdHJhbnNjb2Rlcl9waXBlbGluZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hd3NLbXNLZXlBcm4gPSBjb25maWcuYXdzS21zS2V5QXJuO1xuICAgIHRoaXMuX2lucHV0QnVja2V0ID0gY29uZmlnLmlucHV0QnVja2V0O1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9vdXRwdXRCdWNrZXQgPSBjb25maWcub3V0cHV0QnVja2V0O1xuICAgIHRoaXMuX3JvbGUgPSBjb25maWcucm9sZTtcbiAgICB0aGlzLl9jb250ZW50Q29uZmlnLmludGVybmFsVmFsdWUgPSBjb25maWcuY29udGVudENvbmZpZztcbiAgICB0aGlzLl9jb250ZW50Q29uZmlnUGVybWlzc2lvbnMgPSBjb25maWcuY29udGVudENvbmZpZ1Blcm1pc3Npb25zO1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5ub3RpZmljYXRpb25zO1xuICAgIHRoaXMuX3RodW1ibmFpbENvbmZpZy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnRodW1ibmFpbENvbmZpZztcbiAgICB0aGlzLl90aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucyA9IGNvbmZpZy50aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhd3Nfa21zX2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXdzS21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhd3NLbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3Nfa21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF3c0ttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXdzS21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXdzS21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2F3c0ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXdzS21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F3c0ttc0tleUFybjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbnB1dF9idWNrZXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfaW5wdXRCdWNrZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlucHV0QnVja2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfYnVja2V0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dEJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXRCdWNrZXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRCdWNrZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRCdWNrZXQ7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIG91dHB1dF9idWNrZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRCdWNrZXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG91dHB1dEJ1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ291dHB1dF9idWNrZXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dHB1dEJ1Y2tldCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3V0cHV0QnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3V0cHV0QnVja2V0KCkge1xuICAgIHRoaXMuX291dHB1dEJ1Y2tldCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0QnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dEJ1Y2tldDtcbiAgfVxuXG4gIC8vIHJvbGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlO1xuICB9XG5cbiAgLy8gY29udGVudF9jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudENvbmZpZyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb250ZW50X2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjb250ZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50Q29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRDb250ZW50Q29uZmlnKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lQ29udGVudENvbmZpZykge1xuICAgIHRoaXMuX2NvbnRlbnRDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRDb25maWcoKSB7XG4gICAgdGhpcy5fY29udGVudENvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb250ZW50Q29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGNvbnRlbnRfY29uZmlnX3Blcm1pc3Npb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRlbnRDb25maWdQZXJtaXNzaW9ucz86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnNbXTsgXG4gIHB1YmxpYyBnZXQgY29udGVudENvbmZpZ1Blcm1pc3Npb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb250ZW50X2NvbmZpZ19wZXJtaXNzaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnRlbnRDb25maWdQZXJtaXNzaW9ucyh2YWx1ZTogRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZUNvbnRlbnRDb25maWdQZXJtaXNzaW9uc1tdKSB7XG4gICAgdGhpcy5fY29udGVudENvbmZpZ1Blcm1pc3Npb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGVudENvbmZpZ1Blcm1pc3Npb25zKCkge1xuICAgIHRoaXMuX2NvbnRlbnRDb25maWdQZXJtaXNzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29udGVudENvbmZpZ1Blcm1pc3Npb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRDb25maWdQZXJtaXNzaW9ucztcbiAgfVxuXG4gIC8vIG5vdGlmaWNhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9ucyA9IG5ldyBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lTm90aWZpY2F0aW9uc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJub3RpZmljYXRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dE5vdGlmaWNhdGlvbnModmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm90aWZpY2F0aW9ucygpIHtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vdGlmaWNhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGh1bWJuYWlsX2NvbmZpZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHVtYm5haWxDb25maWcgPSBuZXcgRWxhc3RpY3RyYW5zY29kZXJQaXBlbGluZVRodW1ibmFpbENvbmZpZ091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0aHVtYm5haWxfY29uZmlnXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHRodW1ibmFpbENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGh1bWJuYWlsQ29uZmlnO1xuICB9XG4gIHB1YmxpYyBwdXRUaHVtYm5haWxDb25maWcodmFsdWU6IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWcpIHtcbiAgICB0aGlzLl90aHVtYm5haWxDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRodW1ibmFpbENvbmZpZygpIHtcbiAgICB0aGlzLl90aHVtYm5haWxDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGh1bWJuYWlsQ29uZmlnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbENvbmZpZy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGh1bWJuYWlsX2NvbmZpZ19wZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucz86IEVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc1tdOyBcbiAgcHVibGljIGdldCB0aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGh1bWJuYWlsX2NvbmZpZ19wZXJtaXNzaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zKHZhbHVlOiBFbGFzdGljdHJhbnNjb2RlclBpcGVsaW5lVGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnNbXSkge1xuICAgIHRoaXMuX3RodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMoKSB7XG4gICAgdGhpcy5fdGh1bWJuYWlsQ29uZmlnUGVybWlzc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbENvbmZpZ1Blcm1pc3Npb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhd3Nfa21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2F3c0ttc0tleUFybiksXG4gICAgICBpbnB1dF9idWNrZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lucHV0QnVja2V0KSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgb3V0cHV0X2J1Y2tldDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fb3V0cHV0QnVja2V0KSxcbiAgICAgIHJvbGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JvbGUpLFxuICAgICAgY29udGVudF9jb25maWc6IGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnVG9UZXJyYWZvcm0odGhpcy5fY29udGVudENvbmZpZy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNvbnRlbnRfY29uZmlnX3Blcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVDb250ZW50Q29uZmlnUGVybWlzc2lvbnNUb1RlcnJhZm9ybSkodGhpcy5fY29udGVudENvbmZpZ1Blcm1pc3Npb25zKSxcbiAgICAgIG5vdGlmaWNhdGlvbnM6IGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVOb3RpZmljYXRpb25zVG9UZXJyYWZvcm0odGhpcy5fbm90aWZpY2F0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHRodW1ibmFpbF9jb25maWc6IGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdUb1RlcnJhZm9ybSh0aGlzLl90aHVtYm5haWxDb25maWcuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0aHVtYm5haWxfY29uZmlnX3Blcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKGVsYXN0aWN0cmFuc2NvZGVyUGlwZWxpbmVUaHVtYm5haWxDb25maWdQZXJtaXNzaW9uc1RvVGVycmFmb3JtKSh0aGlzLl90aHVtYm5haWxDb25maWdQZXJtaXNzaW9ucyksXG4gICAgfTtcbiAgfVxufVxuIl19