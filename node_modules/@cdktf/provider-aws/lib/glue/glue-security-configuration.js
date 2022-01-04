"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueSecurityConfiguration = exports.GlueSecurityConfigurationEncryptionConfigurationOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationToTerraform = exports.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform = exports.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform = exports.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference = exports.glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_encryption_mode: cdktf.stringToTerraform(struct.cloudwatchEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform = glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform;
/**
 * @stability stable
 */
class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchEncryptionMode) {
            hasAnyValues = true;
            internalValueResult.cloudwatchEncryptionMode = this._cloudwatchEncryptionMode;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchEncryptionMode = undefined;
            this._kmsKeyArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchEncryptionMode = value.cloudwatchEncryptionMode;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }
    /**
     * @stability stable
     */
    get cloudwatchEncryptionMode() {
        return this.getStringAttribute('cloudwatch_encryption_mode');
    }
    /**
     * @stability stable
     */
    set cloudwatchEncryptionMode(value) {
        this._cloudwatchEncryptionMode = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchEncryptionMode() {
        this._cloudwatchEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchEncryptionModeInput() {
        return this._cloudwatchEncryptionMode;
    }
    /**
     * @stability stable
     */
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    /**
     * @stability stable
     */
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
exports.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference = GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference[_a] = { fqn: "@cdktf/provider-aws.glue.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference", version: "3.0.1" };
function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct.jobBookmarksEncryptionMode),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform = glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform;
/**
 * @stability stable
 */
class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._jobBookmarksEncryptionMode) {
            hasAnyValues = true;
            internalValueResult.jobBookmarksEncryptionMode = this._jobBookmarksEncryptionMode;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._jobBookmarksEncryptionMode = undefined;
            this._kmsKeyArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._jobBookmarksEncryptionMode = value.jobBookmarksEncryptionMode;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }
    /**
     * @stability stable
     */
    get jobBookmarksEncryptionMode() {
        return this.getStringAttribute('job_bookmarks_encryption_mode');
    }
    /**
     * @stability stable
     */
    set jobBookmarksEncryptionMode(value) {
        this._jobBookmarksEncryptionMode = value;
    }
    /**
     * @stability stable
     */
    resetJobBookmarksEncryptionMode() {
        this._jobBookmarksEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jobBookmarksEncryptionModeInput() {
        return this._jobBookmarksEncryptionMode;
    }
    /**
     * @stability stable
     */
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    /**
     * @stability stable
     */
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
exports.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference = GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference[_b] = { fqn: "@cdktf/provider-aws.glue.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference", version: "3.0.1" };
function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        s3_encryption_mode: cdktf.stringToTerraform(struct.s3EncryptionMode),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform = glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform;
/**
 * @stability stable
 */
class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._s3EncryptionMode) {
            hasAnyValues = true;
            internalValueResult.s3EncryptionMode = this._s3EncryptionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kmsKeyArn = undefined;
            this._s3EncryptionMode = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kmsKeyArn = value.kmsKeyArn;
            this._s3EncryptionMode = value.s3EncryptionMode;
        }
    }
    /**
     * @stability stable
     */
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    /**
     * @stability stable
     */
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    /**
     * @stability stable
     */
    get s3EncryptionMode() {
        return this.getStringAttribute('s3_encryption_mode');
    }
    /**
     * @stability stable
     */
    set s3EncryptionMode(value) {
        this._s3EncryptionMode = value;
    }
    /**
     * @stability stable
     */
    resetS3EncryptionMode() {
        this._s3EncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3EncryptionModeInput() {
        return this._s3EncryptionMode;
    }
}
exports.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference = GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference[_c] = { fqn: "@cdktf/provider-aws.glue.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference", version: "3.0.1" };
function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_encryption: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct.cloudwatchEncryption),
        job_bookmarks_encryption: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct.jobBookmarksEncryption),
        s3_encryption: glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct.s3Encryption),
    };
}
exports.glueSecurityConfigurationEncryptionConfigurationToTerraform = glueSecurityConfigurationEncryptionConfigurationToTerraform;
/**
 * @stability stable
 */
class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_encryption - computed: false, optional: false, required: true
        this._cloudwatchEncryption = new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(this, "cloudwatch_encryption", true);
        // job_bookmarks_encryption - computed: false, optional: false, required: true
        this._jobBookmarksEncryption = new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(this, "job_bookmarks_encryption", true);
        // s3_encryption - computed: false, optional: false, required: true
        this._s3Encryption = new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference(this, "s3_encryption", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _f, _g, _h, _j, _k, _l;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_f = this._cloudwatchEncryption) === null || _f === void 0 ? void 0 : _f.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchEncryption = (_g = this._cloudwatchEncryption) === null || _g === void 0 ? void 0 : _g.internalValue;
        }
        if ((_h = this._jobBookmarksEncryption) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.jobBookmarksEncryption = (_j = this._jobBookmarksEncryption) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        if ((_k = this._s3Encryption) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3Encryption = (_l = this._s3Encryption) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchEncryption.internalValue = undefined;
            this._jobBookmarksEncryption.internalValue = undefined;
            this._s3Encryption.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchEncryption.internalValue = value.cloudwatchEncryption;
            this._jobBookmarksEncryption.internalValue = value.jobBookmarksEncryption;
            this._s3Encryption.internalValue = value.s3Encryption;
        }
    }
    /**
     * @stability stable
     */
    get cloudwatchEncryption() {
        return this._cloudwatchEncryption;
    }
    /**
     * @stability stable
     */
    putCloudwatchEncryption(value) {
        this._cloudwatchEncryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchEncryptionInput() {
        return this._cloudwatchEncryption.internalValue;
    }
    /**
     * @stability stable
     */
    get jobBookmarksEncryption() {
        return this._jobBookmarksEncryption;
    }
    /**
     * @stability stable
     */
    putJobBookmarksEncryption(value) {
        this._jobBookmarksEncryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jobBookmarksEncryptionInput() {
        return this._jobBookmarksEncryption.internalValue;
    }
    /**
     * @stability stable
     */
    get s3Encryption() {
        return this._s3Encryption;
    }
    /**
     * @stability stable
     */
    putS3Encryption(value) {
        this._s3Encryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3EncryptionInput() {
        return this._s3Encryption.internalValue;
    }
}
exports.GlueSecurityConfigurationEncryptionConfigurationOutputReference = GlueSecurityConfigurationEncryptionConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
GlueSecurityConfigurationEncryptionConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.glue.GlueSecurityConfigurationEncryptionConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration}.
 *
 * @stability stable
 */
class GlueSecurityConfiguration extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_security_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // encryption_configuration - computed: false, optional: false, required: true
        this._encryptionConfiguration = new GlueSecurityConfigurationEncryptionConfigurationOutputReference(this, "encryption_configuration", true);
        this._name = config.name;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
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
    get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    /**
     * @stability stable
     */
    putEncryptionConfiguration(value) {
        this._encryptionConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
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
            encryption_configuration: glueSecurityConfigurationEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
        };
    }
}
exports.GlueSecurityConfiguration = GlueSecurityConfiguration;
_e = JSII_RTTI_SYMBOL_1;
GlueSecurityConfiguration[_e] = { fqn: "@cdktf/provider-aws.glue.GlueSecurityConfiguration", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GlueSecurityConfiguration.tfResourceType = "aws_glue_security_configuration";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1zZWN1cml0eS1jb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dsdWUvZ2x1ZS1zZWN1cml0eS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBZ0IvQixTQUFnQiwrRUFBK0UsQ0FBQyxNQUFtSztJQUNqUSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDckYsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3hELENBQUE7QUFDSCxDQUFDO0FBVEQsMEtBU0M7Ozs7QUFFRCxNQUFhLG1GQUFvRixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTFILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJ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Ozs7QUF0RUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyx3Q0FBYyxHQUFXLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRpb25Db25maWd1cmF0aW9uOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb247XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUFybj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgfCBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfZW5jcnlwdGlvbl9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZSksXG4gICAga21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zS2V5QXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlID0gdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5QXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlBcm4gPSB0aGlzLl9rbXNLZXlBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlID0gdmFsdWUuY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlO1xuICAgICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWUua21zS2V5QXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfZW5jcnlwdGlvbl9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xvdWR3YXRjaF9lbmNyeXB0aW9uX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlKCkge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaEVuY3J5cHRpb25Nb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uTW9kZTtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgfCBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Kb2JCb29rbWFya3NFbmNyeXB0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUpLFxuICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uSm9iQm9va21hcmtzRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmpvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlID0gdGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUFybiA9IHRoaXMuX2ttc0tleUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUgPSB2YWx1ZS5qb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZTtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlLmttc0tleUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBqb2JfYm9va21hcmtzX2VuY3J5cHRpb25fbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qb2JCb29rbWFya3NFbmNyeXB0aW9uTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqb2JfYm9va21hcmtzX2VuY3J5cHRpb25fbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Sm9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUoKSB7XG4gICAgdGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbk1vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb25Nb2RlO1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzRW5jcnlwdGlvbk1vZGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgfCBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgIHMzX2VuY3J5cHRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0VuY3J5cHRpb25Nb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uUzNFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fa21zS2V5QXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlBcm4gPSB0aGlzLl9rbXNLZXlBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0VuY3J5cHRpb25Nb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM0VuY3J5cHRpb25Nb2RlID0gdGhpcy5fczNFbmNyeXB0aW9uTW9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzRW5jcnlwdGlvbk1vZGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlLmttc0tleUFybjtcbiAgICAgIHRoaXMuX3MzRW5jcnlwdGlvbk1vZGUgPSB2YWx1ZS5zM0VuY3J5cHRpb25Nb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUFybjtcbiAgfVxuXG4gIC8vIHMzX2VuY3J5cHRpb25fbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0VuY3J5cHRpb25Nb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb25Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfZW5jcnlwdGlvbl9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM0VuY3J5cHRpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zM0VuY3J5cHRpb25Nb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNFbmNyeXB0aW9uTW9kZSgpIHtcbiAgICB0aGlzLl9zM0VuY3J5cHRpb25Nb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb25Nb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzRW5jcnlwdGlvbk1vZGU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hFbmNyeXB0aW9uOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpvYkJvb2ttYXJrc0VuY3J5cHRpb246IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0VuY3J5cHRpb246IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsb3Vkd2F0Y2hfZW5jcnlwdGlvbjogZ2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaEVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hFbmNyeXB0aW9uKSxcbiAgICBqb2JfYm9va21hcmtzX2VuY3J5cHRpb246IGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmpvYkJvb2ttYXJrc0VuY3J5cHRpb24pLFxuICAgIHMzX2VuY3J5cHRpb246IGdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblMzRW5jcnlwdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuczNFbmNyeXB0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsb3Vkd2F0Y2hFbmNyeXB0aW9uID0gdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qb2JCb29rbWFya3NFbmNyeXB0aW9uID0gdGhpcy5fam9iQm9va21hcmtzRW5jcnlwdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3MzRW5jcnlwdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNFbmNyeXB0aW9uID0gdGhpcy5fczNFbmNyeXB0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2xvdWR3YXRjaEVuY3J5cHRpb247XG4gICAgICB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5qb2JCb29rbWFya3NFbmNyeXB0aW9uO1xuICAgICAgdGhpcy5fczNFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zM0VuY3J5cHRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uID0gbmV3IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hFbmNyeXB0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsb3Vkd2F0Y2hfZW5jcnlwdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoRW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb247XG4gIH1cbiAgcHVibGljIHB1dENsb3Vkd2F0Y2hFbmNyeXB0aW9uKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoRW5jcnlwdGlvbikge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaEVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaEVuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGpvYl9ib29rbWFya3NfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9qb2JCb29rbWFya3NFbmNyeXB0aW9uID0gbmV3IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiam9iX2Jvb2ttYXJrc19lbmNyeXB0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGpvYkJvb2ttYXJrc0VuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pvYkJvb2ttYXJrc0VuY3J5cHRpb247XG4gIH1cbiAgcHVibGljIHB1dEpvYkJvb2ttYXJrc0VuY3J5cHRpb24odmFsdWU6IEdsdWVTZWN1cml0eUNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkpvYkJvb2ttYXJrc0VuY3J5cHRpb24pIHtcbiAgICB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgam9iQm9va21hcmtzRW5jcnlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qb2JCb29rbWFya3NFbmNyeXB0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzM19lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzRW5jcnlwdGlvbiA9IG5ldyBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiczNfZW5jcnlwdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzRW5jcnlwdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UzNFbmNyeXB0aW9uKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25TM0VuY3J5cHRpb24pIHtcbiAgICB0aGlzLl9zM0VuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0VuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNFbmNyeXB0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2dsdWVfc2VjdXJpdHlfY29uZmlndXJhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZ2x1ZV9zZWN1cml0eV9jb25maWd1cmF0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmVuY3J5cHRpb25Db25maWd1cmF0aW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgR2x1ZVNlY3VyaXR5Q29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImVuY3J5cHRpb25fY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEVuY3J5cHRpb25Db25maWd1cmF0aW9uKHZhbHVlOiBHbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uOiBnbHVlU2VjdXJpdHlDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9lbmNyeXB0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=