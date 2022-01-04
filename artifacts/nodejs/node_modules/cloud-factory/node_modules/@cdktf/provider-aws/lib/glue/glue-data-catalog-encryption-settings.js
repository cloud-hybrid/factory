"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueDataCatalogEncryptionSettings = exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform = exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform = exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference = exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_kms_key_id: cdktf.stringToTerraform(struct.awsKmsKeyId),
        return_connection_password_encrypted: cdktf.booleanToTerraform(struct.returnConnectionPasswordEncrypted),
    };
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform;
/**
 * @stability stable
 */
class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._awsKmsKeyId) {
            hasAnyValues = true;
            internalValueResult.awsKmsKeyId = this._awsKmsKeyId;
        }
        if (this._returnConnectionPasswordEncrypted) {
            hasAnyValues = true;
            internalValueResult.returnConnectionPasswordEncrypted = this._returnConnectionPasswordEncrypted;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsKmsKeyId = undefined;
            this._returnConnectionPasswordEncrypted = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsKmsKeyId = value.awsKmsKeyId;
            this._returnConnectionPasswordEncrypted = value.returnConnectionPasswordEncrypted;
        }
    }
    /**
     * @stability stable
     */
    get awsKmsKeyId() {
        return this.getStringAttribute('aws_kms_key_id');
    }
    /**
     * @stability stable
     */
    set awsKmsKeyId(value) {
        this._awsKmsKeyId = value;
    }
    /**
     * @stability stable
     */
    resetAwsKmsKeyId() {
        this._awsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get awsKmsKeyIdInput() {
        return this._awsKmsKeyId;
    }
    /**
     * @stability stable
     */
    get returnConnectionPasswordEncrypted() {
        return this.getBooleanAttribute('return_connection_password_encrypted');
    }
    /**
     * @stability stable
     */
    set returnConnectionPasswordEncrypted(value) {
        this._returnConnectionPasswordEncrypted = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get returnConnectionPasswordEncryptedInput() {
        return this._returnConnectionPasswordEncrypted;
    }
}
exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference = GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference[_a] = { fqn: "@cdktf/provider-aws.glue.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference", version: "3.0.1" };
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        catalog_encryption_mode: cdktf.stringToTerraform(struct.catalogEncryptionMode),
        sse_aws_kms_key_id: cdktf.stringToTerraform(struct.sseAwsKmsKeyId),
    };
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform;
/**
 * @stability stable
 */
class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
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
        if (this._catalogEncryptionMode) {
            hasAnyValues = true;
            internalValueResult.catalogEncryptionMode = this._catalogEncryptionMode;
        }
        if (this._sseAwsKmsKeyId) {
            hasAnyValues = true;
            internalValueResult.sseAwsKmsKeyId = this._sseAwsKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._catalogEncryptionMode = undefined;
            this._sseAwsKmsKeyId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._catalogEncryptionMode = value.catalogEncryptionMode;
            this._sseAwsKmsKeyId = value.sseAwsKmsKeyId;
        }
    }
    /**
     * @stability stable
     */
    get catalogEncryptionMode() {
        return this.getStringAttribute('catalog_encryption_mode');
    }
    /**
     * @stability stable
     */
    set catalogEncryptionMode(value) {
        this._catalogEncryptionMode = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get catalogEncryptionModeInput() {
        return this._catalogEncryptionMode;
    }
    /**
     * @stability stable
     */
    get sseAwsKmsKeyId() {
        return this.getStringAttribute('sse_aws_kms_key_id');
    }
    /**
     * @stability stable
     */
    set sseAwsKmsKeyId(value) {
        this._sseAwsKmsKeyId = value;
    }
    /**
     * @stability stable
     */
    resetSseAwsKmsKeyId() {
        this._sseAwsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sseAwsKmsKeyIdInput() {
        return this._sseAwsKmsKeyId;
    }
}
exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference = GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference[_b] = { fqn: "@cdktf/provider-aws.glue.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference", version: "3.0.1" };
function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_password_encryption: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct.connectionPasswordEncryption),
        encryption_at_rest: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct.encryptionAtRest),
    };
}
exports.glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform = glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform;
/**
 * @stability stable
 */
class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // connection_password_encryption - computed: false, optional: false, required: true
        this._connectionPasswordEncryption = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(this, "connection_password_encryption", true);
        // encryption_at_rest - computed: false, optional: false, required: true
        this._encryptionAtRest = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(this, "encryption_at_rest", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f, _g, _h;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_e = this._connectionPasswordEncryption) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.connectionPasswordEncryption = (_f = this._connectionPasswordEncryption) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        if ((_g = this._encryptionAtRest) === null || _g === void 0 ? void 0 : _g.internalValue) {
            hasAnyValues = true;
            internalValueResult.encryptionAtRest = (_h = this._encryptionAtRest) === null || _h === void 0 ? void 0 : _h.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._connectionPasswordEncryption.internalValue = undefined;
            this._encryptionAtRest.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._connectionPasswordEncryption.internalValue = value.connectionPasswordEncryption;
            this._encryptionAtRest.internalValue = value.encryptionAtRest;
        }
    }
    /**
     * @stability stable
     */
    get connectionPasswordEncryption() {
        return this._connectionPasswordEncryption;
    }
    /**
     * @stability stable
     */
    putConnectionPasswordEncryption(value) {
        this._connectionPasswordEncryption.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get connectionPasswordEncryptionInput() {
        return this._connectionPasswordEncryption.internalValue;
    }
    /**
     * @stability stable
     */
    get encryptionAtRest() {
        return this._encryptionAtRest;
    }
    /**
     * @stability stable
     */
    putEncryptionAtRest(value) {
        this._encryptionAtRest.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionAtRestInput() {
        return this._encryptionAtRest.internalValue;
    }
}
exports.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference = GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference[_c] = { fqn: "@cdktf/provider-aws.glue.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}.
 *
 * @stability stable
 */
class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_data_catalog_encryption_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // data_catalog_encryption_settings - computed: false, optional: false, required: true
        this._dataCatalogEncryptionSettings = new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(this, "data_catalog_encryption_settings", true);
        this._catalogId = config.catalogId;
        this._dataCatalogEncryptionSettings.internalValue = config.dataCatalogEncryptionSettings;
    }
    /**
     * @stability stable
     */
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    /**
     * @stability stable
     */
    set catalogId(value) {
        this._catalogId = value;
    }
    /**
     * @stability stable
     */
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get catalogIdInput() {
        return this._catalogId;
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
    get dataCatalogEncryptionSettings() {
        return this._dataCatalogEncryptionSettings;
    }
    /**
     * @stability stable
     */
    putDataCatalogEncryptionSettings(value) {
        this._dataCatalogEncryptionSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataCatalogEncryptionSettingsInput() {
        return this._dataCatalogEncryptionSettings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            data_catalog_encryption_settings: glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(this._dataCatalogEncryptionSettings.internalValue),
        };
    }
}
exports.GlueDataCatalogEncryptionSettings = GlueDataCatalogEncryptionSettings;
_d = JSII_RTTI_SYMBOL_1;
GlueDataCatalogEncryptionSettings[_d] = { fqn: "@cdktf/provider-aws.glue.GlueDataCatalogEncryptionSettings", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GlueDataCatalogEncryptionSettings.tfResourceType = "aws_glue_data_catalog_encryption_settings";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1kYXRhLWNhdGFsb2ctZW5jcnlwdGlvbi1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbHVlL2dsdWUtZGF0YS1jYXRhbG9nLWVuY3J5cHRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnQi9CLFNBQWdCLHFHQUFxRyxDQUFDLE1BQStNO0lBQ25VLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzVELG9DQUFvQyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsaUNBQWlDLENBQUM7S0FDMUcsQ0FBQTtBQUNILENBQUM7QUFURCxzTkFTQzs7OztBQUVELE1BQWEseUdBQTBHLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJaEosWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FB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QUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxnQ0FBZ0MsRUFBRSx5RUFBeUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDO1NBQy9KLENBQUM7SUFDSixDQUFDOztBQTFFSCw4RUEyRUM7OztBQXpFQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGdEQUFjLEdBQVcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nczogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3M7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhd3NLbXNLZXlJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgfCBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhd3Nfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hd3NLbXNLZXlJZCksXG4gICAgcmV0dXJuX2Nvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hd3NLbXNLZXlJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXdzS21zS2V5SWQgPSB0aGlzLl9hd3NLbXNLZXlJZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkID0gdGhpcy5fcmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXdzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F3c0ttc0tleUlkID0gdmFsdWUuYXdzS21zS2V5SWQ7XG4gICAgICB0aGlzLl9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQgPSB2YWx1ZS5yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gYXdzX2ttc19rZXlfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXdzS21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGF3c0ttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdzX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF3c0ttc0tleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hd3NLbXNLZXlJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF3c0ttc0tleUlkKCkge1xuICAgIHRoaXMuX2F3c0ttc0tleUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhd3NLbXNLZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hd3NLbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHJldHVybl9jb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXR1cm5fY29ubmVjdGlvbl9wYXNzd29yZF9lbmNyeXB0ZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXR1cm5Db25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0ZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0dXJuQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXRhbG9nRW5jcnlwdGlvbk1vZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NlQXdzS21zS2V5SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0VuY3J5cHRpb25BdFJlc3RUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0VuY3J5cHRpb25BdFJlc3RPdXRwdXRSZWZlcmVuY2UgfCBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0VuY3J5cHRpb25BdFJlc3QpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXRhbG9nX2VuY3J5cHRpb25fbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXRhbG9nRW5jcnlwdGlvbk1vZGUpLFxuICAgIHNzZV9hd3Nfa21zX2tleV9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc2VBd3NLbXNLZXlJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0VuY3J5cHRpb25BdFJlc3QgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NhdGFsb2dFbmNyeXB0aW9uTW9kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2F0YWxvZ0VuY3J5cHRpb25Nb2RlID0gdGhpcy5fY2F0YWxvZ0VuY3J5cHRpb25Nb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3NlQXdzS21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzZUF3c0ttc0tleUlkID0gdGhpcy5fc3NlQXdzS21zS2V5SWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0VuY3J5cHRpb25BdFJlc3QgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jYXRhbG9nRW5jcnlwdGlvbk1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc2VBd3NLbXNLZXlJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2F0YWxvZ0VuY3J5cHRpb25Nb2RlID0gdmFsdWUuY2F0YWxvZ0VuY3J5cHRpb25Nb2RlO1xuICAgICAgdGhpcy5fc3NlQXdzS21zS2V5SWQgPSB2YWx1ZS5zc2VBd3NLbXNLZXlJZDtcbiAgICB9XG4gIH1cblxuICAvLyBjYXRhbG9nX2VuY3J5cHRpb25fbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jYXRhbG9nRW5jcnlwdGlvbk1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhdGFsb2dFbmNyeXB0aW9uTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhdGFsb2dfZW5jcnlwdGlvbl9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXRhbG9nRW5jcnlwdGlvbk1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhdGFsb2dFbmNyeXB0aW9uTW9kZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXRhbG9nRW5jcnlwdGlvbk1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0YWxvZ0VuY3J5cHRpb25Nb2RlO1xuICB9XG5cbiAgLy8gc3NlX2F3c19rbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzZUF3c0ttc0tleUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzc2VBd3NLbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NzZV9hd3Nfa21zX2tleV9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3NlQXdzS21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzZUF3c0ttc0tleUlkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NlQXdzS21zS2V5SWQoKSB7XG4gICAgdGhpcy5fc3NlQXdzS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzZUF3c0ttc0tleUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzZUF3c0ttc0tleUlkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb246IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuY3J5cHRpb25BdFJlc3Q6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGlvbjogZ2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uKSxcbiAgICBlbmNyeXB0aW9uX2F0X3Jlc3Q6IGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRW5jcnlwdGlvbkF0UmVzdFRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbkF0UmVzdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uID0gdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuY3J5cHRpb25BdFJlc3Q/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuY3J5cHRpb25BdFJlc3QgPSB0aGlzLl9lbmNyeXB0aW9uQXRSZXN0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uQXRSZXN0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb247XG4gICAgICB0aGlzLl9lbmNyeXB0aW9uQXRSZXN0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5lbmNyeXB0aW9uQXRSZXN0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uID0gbmV3IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbih2YWx1ZTogR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25uZWN0aW9uUGFzc3dvcmRFbmNyeXB0aW9uKSB7XG4gICAgdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblBhc3N3b3JkRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9hdF9yZXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuY3J5cHRpb25BdFJlc3QgPSBuZXcgR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImVuY3J5cHRpb25fYXRfcmVzdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQXRSZXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uQXRSZXN0O1xuICB9XG4gIHB1YmxpYyBwdXRFbmNyeXB0aW9uQXRSZXN0KHZhbHVlOiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0VuY3J5cHRpb25BdFJlc3QpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uQXRSZXN0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkF0UmVzdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uQXRSZXN0LmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19nbHVlX2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IGNvbmZpZy5jYXRhbG9nSWQ7XG4gICAgdGhpcy5fZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5kYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gY2F0YWxvZ19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhdGFsb2dJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZ19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2F0YWxvZ0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXRhbG9nSWQoKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXRhbG9nSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0YWxvZ0lkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGRhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzID0gbmV3IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImRhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGRhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0RGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3ModmFsdWU6IEdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzKSB7XG4gICAgdGhpcy5fZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjYXRhbG9nX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jYXRhbG9nSWQpLFxuICAgICAgZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3M6IGdsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0RhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzVG9UZXJyYWZvcm0odGhpcy5fZGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19