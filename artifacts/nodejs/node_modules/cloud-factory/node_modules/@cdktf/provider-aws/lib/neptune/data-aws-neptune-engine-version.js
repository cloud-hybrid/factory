"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsNeptuneEngineVersion = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version}.
 *
 * @stability stable
 */
class DataAwsNeptuneEngineVersion extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version.html aws_neptune_engine_version} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_neptune_engine_version',
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
    /**
     * @stability stable
     */
    resetEngine() {
        this._engine = undefined;
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
    // supported_timezones - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportedTimezones() {
        return this.getListAttribute('supported_timezones');
    }
    // supports_log_exports_to_cloudwatch - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get supportsLogExportsToCloudwatch() {
        return this.getBooleanAttribute('supports_log_exports_to_cloudwatch');
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
exports.DataAwsNeptuneEngineVersion = DataAwsNeptuneEngineVersion;
_a = JSII_RTTI_SYMBOL_1;
DataAwsNeptuneEngineVersion[_a] = { fqn: "@cdktf/provider-aws.neptune.DataAwsNeptuneEngineVersion", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsNeptuneEngineVersion.tfResourceType = "aws_neptune_engine_version";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbmVwdHVuZS1lbmdpbmUtdmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXB0dW5lL2RhdGEtYXdzLW5lcHR1bmUtZW5naW5lLXZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWUvQixNQUFhLDJCQUE0QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFPeEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQTRDLEVBQUU7UUFDN0YsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw0QkFBNEI7WUFDbkQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFRRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixD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Ozs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0Msc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN0RixPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEQsQ0FBQztJQUNKLENBQUM7O0FBcEpILGtFQXFKQzs7O0FBbkpDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMENBQWMsR0FBVyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NOZXB0dW5lRW5naW5lVmVyc2lvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmdpbmU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyR3JvdXBGYW1pbHk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZlcnJlZFZlcnNpb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmVyc2lvbj86IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NOZXB0dW5lRW5naW5lVmVyc2lvbiBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX25lcHR1bmVfZW5naW5lX3ZlcnNpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c05lcHR1bmVFbmdpbmVWZXJzaW9uQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19uZXB0dW5lX2VuZ2luZV92ZXJzaW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2VuZ2luZSA9IGNvbmZpZy5lbmdpbmU7XG4gICAgdGhpcy5fcGFyYW1ldGVyR3JvdXBGYW1pbHkgPSBjb25maWcucGFyYW1ldGVyR3JvdXBGYW1pbHk7XG4gICAgdGhpcy5fcHJlZmVycmVkVmVyc2lvbnMgPSBjb25maWcucHJlZmVycmVkVmVyc2lvbnM7XG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBlbmdpbmUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5naW5lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5naW5lKCkge1xuICAgIHRoaXMuX2VuZ2luZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuZ2luZTtcbiAgfVxuXG4gIC8vIGVuZ2luZV9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZ2luZURlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lX2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBleHBvcnRhYmxlX2xvZ190eXBlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cG9ydGFibGVMb2dUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdleHBvcnRhYmxlX2xvZ190eXBlcycpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlcl9ncm91cF9mYW1pbHkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbWV0ZXJHcm91cEZhbWlseT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyR3JvdXBGYW1pbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJhbWV0ZXJfZ3JvdXBfZmFtaWx5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXJhbWV0ZXJHcm91cEZhbWlseSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVyR3JvdXBGYW1pbHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJhbWV0ZXJHcm91cEZhbWlseSgpIHtcbiAgICB0aGlzLl9wYXJhbWV0ZXJHcm91cEZhbWlseSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyR3JvdXBGYW1pbHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyR3JvdXBGYW1pbHk7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfdmVyc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZmVycmVkVmVyc2lvbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkVmVyc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncHJlZmVycmVkX3ZlcnNpb25zJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmZXJyZWRWZXJzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wcmVmZXJyZWRWZXJzaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZlcnJlZFZlcnNpb25zKCkge1xuICAgIHRoaXMuX3ByZWZlcnJlZFZlcnNpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmZXJyZWRWZXJzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmZXJyZWRWZXJzaW9ucztcbiAgfVxuXG4gIC8vIHN1cHBvcnRlZF90aW1lem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdXBwb3J0ZWRUaW1lem9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VwcG9ydGVkX3RpbWV6b25lcycpO1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfbG9nX2V4cG9ydHNfdG9fY2xvdWR3YXRjaCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHBvcnRzTG9nRXhwb3J0c1RvQ2xvdWR3YXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19sb2dfZXhwb3J0c190b19jbG91ZHdhdGNoJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3VwcG9ydHNfcmVhZF9yZXBsaWNhIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VwcG9ydHNSZWFkUmVwbGljYSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdXBwb3J0c19yZWFkX3JlcGxpY2EnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2YWxpZF91cGdyYWRlX3RhcmdldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWxpZFVwZ3JhZGVUYXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ZhbGlkX3VwZ3JhZGVfdGFyZ2V0cycpO1xuICB9XG5cbiAgLy8gdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB2ZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbigpIHtcbiAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2ZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cblxuICAvLyB2ZXJzaW9uX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbkRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbl9kZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBlbmdpbmU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZ2luZSksXG4gICAgICBwYXJhbWV0ZXJfZ3JvdXBfZmFtaWx5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9wYXJhbWV0ZXJHcm91cEZhbWlseSksXG4gICAgICBwcmVmZXJyZWRfdmVyc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3ByZWZlcnJlZFZlcnNpb25zKSxcbiAgICAgIHZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZlcnNpb24pLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==