"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsRdsEngineVersion = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version}.
 *
 * @stability stable
 */
class DataAwsRdsEngineVersion extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_engine_version',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._engine = config.engine;
        this._parameterGroupFamily = config.parameterGroupFamily;
        this._preferredVersions = config.preferredVersions;
        this._version = config.version;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // default_character_set - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get defaultCharacterSet() {
        return this.getStringAttribute('default_character_set');
    }
    /**
     * @stability stable
     */
    get engine() {
        return this.getStringAttribute('engine');
    }
    /**
     * @stability stable
     */
    set engine(value) {
        this._engine = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineInput() {
        return this._engine;
    }
    // engine_description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get engineDescription() {
        return this.getStringAttribute('engine_description');
    }
    // exportable_log_types - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get exportableLogTypes() {
        return this.getListAttribute('exportable_log_types');
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
    get parameterGroupFamily() {
        return this.getStringAttribute('parameter_group_family');
    }
    /**
     * @stability stable
     */
    set parameterGroupFamily(value) {
        this._parameterGroupFamily = value;
    }
    /**
     * @stability stable
     */
    resetParameterGroupFamily() {
        this._parameterGroupFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parameterGroupFamilyInput() {
        return this._parameterGroupFamily;
    }
    /**
     * @stability stable
     */
    get preferredVersions() {
        return this.getListAttribute('preferred_versions');
    }
    /**
     * @stability stable
     */
    set preferredVersions(value) {
        this._preferredVersions = value;
    }
    /**
     * @stability stable
     */
    resetPreferredVersions() {
        this._preferredVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredVersionsInput() {
        return this._preferredVersions;
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    // supported_character_sets - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedCharacterSets() {
        return this.getListAttribute('supported_character_sets');
    }
    // supported_feature_names - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedFeatureNames() {
        return this.getListAttribute('supported_feature_names');
    }
    // supported_modes - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedModes() {
        return this.getListAttribute('supported_modes');
    }
    // supported_timezones - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedTimezones() {
        return this.getListAttribute('supported_timezones');
    }
    // supports_global_databases - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportsGlobalDatabases() {
        return this.getBooleanAttribute('supports_global_databases');
    }
    // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportsLogExportsToCloudwatch() {
        return this.getBooleanAttribute('supports_log_exports_to_cloudwatch');
    }
    // supports_parallel_query - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportsParallelQuery() {
        return this.getBooleanAttribute('supports_parallel_query');
    }
    // supports_read_replica - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportsReadReplica() {
        return this.getBooleanAttribute('supports_read_replica');
    }
    // valid_upgrade_targets - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get validUpgradeTargets() {
        return this.getListAttribute('valid_upgrade_targets');
    }
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    /**
     * @stability stable
     */
    set version(value) {
        this._version = value;
    }
    /**
     * @stability stable
     */
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionInput() {
        return this._version;
    }
    // version_description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get versionDescription() {
        return this.getStringAttribute('version_description');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            engine: cdktf.stringToTerraform(this._engine),
            parameter_group_family: cdktf.stringToTerraform(this._parameterGroupFamily),
            preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
            version: cdktf.stringToTerraform(this._version),
        };
    }
}
exports.DataAwsRdsEngineVersion = DataAwsRdsEngineVersion;
_a = JSII_RTTI_SYMBOL_1;
DataAwsRdsEngineVersion[_a] = { fqn: "@cdktf/provider-aws.rds.DataAwsRdsEngineVersion", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsRdsEngineVersion.tfResourceType = "aws_rds_engine_version";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmRzLWVuZ2luZS12ZXJzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Jkcy9kYXRhLWF3cy1yZHMtZW5naW5lLXZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWUvQixNQUFhLHVCQUF3QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFPcEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXFDO1FBQ3BGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsd0JBQXdCO1lBQy9DLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsMkVBQTJFOzs7O0lBQzNFLElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtC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LENBQUM7SUFDSixDQUFDOztBQXBMSCwwREFxTEM7OztBQW5MQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHNDQUFjLEdBQVcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NSZHNFbmdpbmVWZXJzaW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmdpbmU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyR3JvdXBGYW1pbHk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmZXJyZWRWZXJzaW9ucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NSZHNFbmdpbmVWZXJzaW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfcmRzX2VuZ2luZV92ZXJzaW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzUmRzRW5naW5lVmVyc2lvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX3Jkc19lbmdpbmVfdmVyc2lvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9lbmdpbmUgPSBjb25maWcuZW5naW5lO1xuICAgIHRoaXMuX3BhcmFtZXRlckdyb3VwRmFtaWx5ID0gY29uZmlnLnBhcmFtZXRlckdyb3VwRmFtaWx5O1xuICAgIHRoaXMuX3ByZWZlcnJlZFZlcnNpb25zID0gY29uZmlnLnByZWZlcnJlZFZlcnNpb25zO1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGVmYXVsdF9jaGFyYWN0ZXJfc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVmYXVsdENoYXJhY3RlclNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RlZmF1bHRfY2hhcmFjdGVyX3NldCcpO1xuICB9XG5cbiAgLy8gZW5naW5lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2VuZ2luZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lJyk7XG4gIH1cbiAgcHVibGljIHNldCBlbmdpbmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZ2luZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmdpbmVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lO1xuICB9XG5cbiAgLy8gZW5naW5lX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5naW5lRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfZGVzY3JpcHRpb24nKTtcbiAgfVxuXG4gIC8vIGV4cG9ydGFibGVfbG9nX3R5cGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhwb3J0YWJsZUxvZ1R5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2V4cG9ydGFibGVfbG9nX3R5cGVzJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVyX2dyb3VwX2ZhbWlseSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFtZXRlckdyb3VwRmFtaWx5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJHcm91cEZhbWlseSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcmFtZXRlcl9ncm91cF9mYW1pbHknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFtZXRlckdyb3VwRmFtaWx5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJHcm91cEZhbWlseSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFtZXRlckdyb3VwRmFtaWx5KCkge1xuICAgIHRoaXMuX3BhcmFtZXRlckdyb3VwRmFtaWx5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbWV0ZXJHcm91cEZhbWlseUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJHcm91cEZhbWlseTtcbiAgfVxuXG4gIC8vIHByZWZlcnJlZF92ZXJzaW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWRWZXJzaW9ucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBwcmVmZXJyZWRWZXJzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdwcmVmZXJyZWRfdmVyc2lvbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZlcnJlZFZlcnNpb25zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3ByZWZlcnJlZFZlcnNpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZmVycmVkVmVyc2lvbnMoKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkVmVyc2lvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZlcnJlZFZlcnNpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcnJlZFZlcnNpb25zO1xuICB9XG5cbiAgLy8gc3RhdHVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3RhdHVzJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0ZWRfY2hhcmFjdGVyX3NldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRDaGFyYWN0ZXJTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1cHBvcnRlZF9jaGFyYWN0ZXJfc2V0cycpO1xuICB9XG5cbiAgLy8gc3VwcG9ydGVkX2ZlYXR1cmVfbmFtZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRGZWF0dXJlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX2ZlYXR1cmVfbmFtZXMnKTtcbiAgfVxuXG4gIC8vIHN1cHBvcnRlZF9tb2RlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZE1vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1cHBvcnRlZF9tb2RlcycpO1xuICB9XG5cbiAgLy8gc3VwcG9ydGVkX3RpbWV6b25lcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRlZFRpbWV6b25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdXBwb3J0ZWRfdGltZXpvbmVzJyk7XG4gIH1cblxuICAvLyBzdXBwb3J0c19nbG9iYWxfZGF0YWJhc2VzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNHbG9iYWxEYXRhYmFzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfZ2xvYmFsX2RhdGFiYXNlcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX2xvZ19leHBvcnRzX3RvX2Nsb3Vkd2F0Y2ggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0c0xvZ0V4cG9ydHNUb0Nsb3Vkd2F0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3VwcG9ydHNfbG9nX2V4cG9ydHNfdG9fY2xvdWR3YXRjaCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN1cHBvcnRzX3BhcmFsbGVsX3F1ZXJ5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNQYXJhbGxlbFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHBvcnRzX3BhcmFsbGVsX3F1ZXJ5JykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfcmVhZF9yZXBsaWNhIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNSZWFkUmVwbGljYSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19yZWFkX3JlcGxpY2EnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2YWxpZF91cGdyYWRlX3RhcmdldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWxpZFVwZ3JhZGVUYXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZhbGlkX3VwZ3JhZGVfdGFyZ2V0cycpO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbigpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cblxuICAvLyB2ZXJzaW9uX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbkRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbl9kZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBlbmdpbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZ2luZSksXG4gICAgICBwYXJhbWV0ZXJfZ3JvdXBfZmFtaWx5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wYXJhbWV0ZXJHcm91cEZhbWlseSksXG4gICAgICBwcmVmZXJyZWRfdmVyc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3ByZWZlcnJlZFZlcnNpb25zKSxcbiAgICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZlcnNpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==