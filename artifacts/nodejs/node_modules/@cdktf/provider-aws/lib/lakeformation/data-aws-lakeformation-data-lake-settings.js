"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsLakeformationDataLakeSettings = exports.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions = exports.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions extends cdktf.ComplexComputedList {
    // permissions - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // principal - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions = DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions;
_a = JSII_RTTI_SYMBOL_1;
DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[_a] = { fqn: "@cdktf/provider-aws.lakeformation.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions extends cdktf.ComplexComputedList {
    // permissions - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // principal - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get principal() {
        return this.getStringAttribute('principal');
    }
}
exports.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions = DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions;
_b = JSII_RTTI_SYMBOL_1;
DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions[_b] = { fqn: "@cdktf/provider-aws.lakeformation.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}.
 *
 * @stability stable
 */
class DataAwsLakeformationDataLakeSettings extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_lakeformation_data_lake_settings',
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
    // ==========
    // ATTRIBUTES
    // ==========
    // admins - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get admins() {
        return this.getListAttribute('admins');
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
    // create_database_default_permissions - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    createDatabaseDefaultPermissions(index) {
        return new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions(this, 'create_database_default_permissions', index);
    }
    // create_table_default_permissions - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    createTableDefaultPermissions(index) {
        return new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions(this, 'create_table_default_permissions', index);
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // trusted_resource_owners - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get trustedResourceOwners() {
        return this.getListAttribute('trusted_resource_owners');
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
exports.DataAwsLakeformationDataLakeSettings = DataAwsLakeformationDataLakeSettings;
_c = JSII_RTTI_SYMBOL_1;
DataAwsLakeformationDataLakeSettings[_c] = { fqn: "@cdktf/provider-aws.lakeformation.DataAwsLakeformationDataLakeSettings", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsLakeformationDataLakeSettings.tfResourceType = "aws_lakeformation_data_lake_settings";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGFrZWZvcm1hdGlvbi1kYXRhLWxha2Utc2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGFrZWZvcm1hdGlvbi9kYXRhLWF3cy1sYWtlZm9ybWF0aW9uLWRhdGEtbGFrZS1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQU8vQixNQUFhLG9FQUFxRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFakgsaUVBQWlFOzs7O0lBQ2pFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0RBQStEOzs7O0lBQy9ELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOztBQVZILG9KQVdDOzs7Ozs7QUFDRCxNQUFhLGlFQUFrRSxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUcsaUVBQWlFOzs7O0lBQ2pFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0RBQStEOzs7O0lBQy9ELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOztBQVZILDhJQVdDOzs7Ozs7OztBQUdELE1BQWEsb0NBQXFDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQU9qRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBcUQsRUFBRTtRQUN0RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHNDQUFzQztZQUM3RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELHlGQUF5Rjs7OztJQUNsRixnQ0FBZ0MsQ0FBQyxLQUFhO1FBQ25ELE9BQU8sSUFBSSxvRUFBb0UsQ0FBQyxJQUFJLEVBQUUscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUVELHNGQUFzRjs7OztJQUMvRSw2QkFBNkIsQ0FBQyxLQUFhO1FBQ2hELE9BQU8sSUFBSSxpRUFBaUUsQ0FBQyxJQUFJLEVBQUUsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNkVBQTZFOzs7O0lBQzdFLElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3JELENBQUM7SUFDSixDQUFDOztBQS9FSCxvRkFnRkM7OztBQTlFQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLG1EQUFjLEdBQVcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0xha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhdGFsb2dJZD86IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3NDcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHBlcm1pc3Npb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncGVybWlzc2lvbnMnKTtcbiAgfVxuXG4gIC8vIHByaW5jaXBhbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW5jaXBhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaW5jaXBhbCcpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0xha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3Blcm1pc3Npb25zJyk7XG4gIH1cblxuICAvLyBwcmluY2lwYWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmluY2lwYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmluY2lwYWwnKTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzTGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3MgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19sYWtlZm9ybWF0aW9uX2RhdGFfbGFrZV9zZXR0aW5nc1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NMYWtlZm9ybWF0aW9uRGF0YUxha2VTZXR0aW5nc0NvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfbGFrZWZvcm1hdGlvbl9kYXRhX2xha2Vfc2V0dGluZ3MnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gY29uZmlnLmNhdGFsb2dJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWRtaW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWRtaW5zKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FkbWlucycpO1xuICB9XG5cbiAgLy8gY2F0YWxvZ19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXRhbG9nSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhdGFsb2dfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhdGFsb2dJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2F0YWxvZ0lkKCkge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGFsb2dJZDtcbiAgfVxuXG4gIC8vIGNyZWF0ZV9kYXRhYmFzZV9kZWZhdWx0X3Blcm1pc3Npb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBjcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9ucyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3NDcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9ucyh0aGlzLCAnY3JlYXRlX2RhdGFiYXNlX2RlZmF1bHRfcGVybWlzc2lvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBjcmVhdGVfdGFibGVfZGVmYXVsdF9wZXJtaXNzaW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgY3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0xha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnModGhpcywgJ2NyZWF0ZV90YWJsZV9kZWZhdWx0X3Blcm1pc3Npb25zJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHRydXN0ZWRfcmVzb3VyY2Vfb3duZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHJ1c3RlZFJlc291cmNlT3duZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RydXN0ZWRfcmVzb3VyY2Vfb3duZXJzJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhdGFsb2dfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NhdGFsb2dJZCksXG4gICAgfTtcbiAgfVxufVxuIl19