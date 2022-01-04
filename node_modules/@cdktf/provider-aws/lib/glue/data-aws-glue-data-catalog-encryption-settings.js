"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsGlueDataCatalogEncryptionSettings = exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings = exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest = exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption extends cdktf.ComplexComputedList {
    // aws_kms_key_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get awsKmsKeyId() {
        return this.getStringAttribute('aws_kms_key_id');
    }
    // return_connection_password_encrypted - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get returnConnectionPasswordEncrypted() {
        return this.getBooleanAttribute('return_connection_password_encrypted');
    }
}
exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption = DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
_a = JSII_RTTI_SYMBOL_1;
DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption[_a] = { fqn: "@cdktf/provider-aws.glue.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest extends cdktf.ComplexComputedList {
    // catalog_encryption_mode - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get catalogEncryptionMode() {
        return this.getStringAttribute('catalog_encryption_mode');
    }
    // sse_aws_kms_key_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sseAwsKmsKeyId() {
        return this.getStringAttribute('sse_aws_kms_key_id');
    }
}
exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest = DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
_b = JSII_RTTI_SYMBOL_1;
DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest[_b] = { fqn: "@cdktf/provider-aws.glue.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings extends cdktf.ComplexComputedList {
    // connection_password_encryption - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get connectionPasswordEncryption() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('connection_password_encryption');
    }
    // encryption_at_rest - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get encryptionAtRest() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('encryption_at_rest');
    }
}
exports.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings = DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
_c = JSII_RTTI_SYMBOL_1;
DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings[_c] = { fqn: "@cdktf/provider-aws.glue.DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings}.
 *
 * @stability stable
 */
class DataAwsGlueDataCatalogEncryptionSettings extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_data_catalog_encryption_settings.html aws_glue_data_catalog_encryption_settings} Data Source.
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
        this._catalogId = config.catalogId;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get catalogIdInput() {
        return this._catalogId;
    }
    // data_catalog_encryption_settings - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    dataCatalogEncryptionSettings(index) {
        return new DataAwsGlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(this, 'data_catalog_encryption_settings', index);
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
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
        };
    }
}
exports.DataAwsGlueDataCatalogEncryptionSettings = DataAwsGlueDataCatalogEncryptionSettings;
_d = JSII_RTTI_SYMBOL_1;
DataAwsGlueDataCatalogEncryptionSettings[_d] = { fqn: "@cdktf/provider-aws.glue.DataAwsGlueDataCatalogEncryptionSettings", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsGlueDataCatalogEncryptionSettings.tfResourceType = "aws_glue_data_catalog_encryption_settings";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZ2x1ZS1kYXRhLWNhdGFsb2ctZW5jcnlwdGlvbi1zZXR0aW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbHVlL2RhdGEtYXdzLWdsdWUtZGF0YS1jYXRhbG9nLWVuY3J5cHRpb24tc2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7QUFPL0IsTUFBYSxpR0FBa0csU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlJLG9FQUFvRTs7OztJQUNwRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsMEZBQTBGOzs7O0lBQzFGLElBQVcsaUNBQWlDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNDQUFzQyxDQUFRLENBQUM7SUFDakYsQ0FBQzs7QUFWSCw4TUFXQzs7Ozs7O0FBQ0QsTUFBYSxxRkFBc0YsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxJLDZFQUE2RTs7OztJQUM3RSxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx3RUFBd0U7Ozs7SUFDeEUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7QUFWSCxzTEFXQzs7Ozs7O0FBQ0QsTUFBYSxxRUFBc0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxILG9GQUFvRjs7OztJQUNwRixJQUFXLDRCQUE0QjtRQUNyQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0NBQWdDLENBQVEsQ0FBQztJQUNqRixDQUFDO0lBRUQsd0VBQXdFOzs7O0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7O0FBWkgsc0pBYUM7Ozs7Ozs7O0FBR0QsTUFBYSx3Q0FBeUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBT3JGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFzRDtRQUNyRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDJDQUEyQztZQUNsRSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFRRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzRkFBc0Y7Ozs7SUFDL0UsNkJBQTZCLENBQUMsS0FBYTtRQUNoRCxPQUFPLElBQUkscUVBQXFFLENBQUMsSUFBSSxFQUFFLGtDQUFrQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3JELENBQUM7SUFDSixDQUFDOztBQTdESCw0RkE4REM7OztBQTVEQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHVEQUFjLEdBQVcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhdGFsb2dJZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5nc0Nvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhd3Nfa21zX2tleV9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF3c0ttc0tleUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdzX2ttc19rZXlfaWQnKTtcbiAgfVxuXG4gIC8vIHJldHVybl9jb25uZWN0aW9uX3Bhc3N3b3JkX2VuY3J5cHRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJldHVybkNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXR1cm5fY29ubmVjdGlvbl9wYXNzd29yZF9lbmNyeXB0ZWQnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NFbmNyeXB0aW9uQXRSZXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2F0YWxvZ19lbmNyeXB0aW9uX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjYXRhbG9nRW5jcnlwdGlvbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXRhbG9nX2VuY3J5cHRpb25fbW9kZScpO1xuICB9XG5cbiAgLy8gc3NlX2F3c19rbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3NlQXdzS21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2VfYXdzX2ttc19rZXlfaWQnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NHbHVlRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3NEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rpb25QYXNzd29yZEVuY3J5cHRpb24oKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nvbm5lY3Rpb25fcGFzc3dvcmRfZW5jcnlwdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fYXRfcmVzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25BdFJlc3QoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fYXRfcmVzdCcpIGFzIGFueTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0dsdWVEYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2dsdWVfZGF0YV9jYXRhbG9nX2VuY3J5cHRpb25fc2V0dGluZ3NcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZ2x1ZV9kYXRhX2NhdGFsb2dfZW5jcnlwdGlvbl9zZXR0aW5ncycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSBjb25maWcuY2F0YWxvZ0lkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjYXRhbG9nX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NhdGFsb2dJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZ19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2F0YWxvZ0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGFsb2dJZDtcbiAgfVxuXG4gIC8vIGRhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBkYXRhQ2F0YWxvZ0VuY3J5cHRpb25TZXR0aW5ncyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzR2x1ZURhdGFDYXRhbG9nRW5jcnlwdGlvblNldHRpbmdzRGF0YUNhdGFsb2dFbmNyeXB0aW9uU2V0dGluZ3ModGhpcywgJ2RhdGFfY2F0YWxvZ19lbmNyeXB0aW9uX3NldHRpbmdzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2F0YWxvZ19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2F0YWxvZ0lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=