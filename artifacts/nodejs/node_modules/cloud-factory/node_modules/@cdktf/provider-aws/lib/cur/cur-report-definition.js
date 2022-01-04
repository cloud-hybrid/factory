"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurReportDefinition = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition}.
 *
 * @stability stable
 */
class CurReportDefinition extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html aws_cur_report_definition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cur_report_definition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._additionalArtifacts = config.additionalArtifacts;
        this._additionalSchemaElements = config.additionalSchemaElements;
        this._compression = config.compression;
        this._format = config.format;
        this._refreshClosedReports = config.refreshClosedReports;
        this._reportName = config.reportName;
        this._reportVersioning = config.reportVersioning;
        this._s3Bucket = config.s3Bucket;
        this._s3Prefix = config.s3Prefix;
        this._s3Region = config.s3Region;
        this._timeUnit = config.timeUnit;
    }
    /**
     * @stability stable
     */
    get additionalArtifacts() {
        return this.getListAttribute('additional_artifacts');
    }
    /**
     * @stability stable
     */
    set additionalArtifacts(value) {
        this._additionalArtifacts = value;
    }
    /**
     * @stability stable
     */
    resetAdditionalArtifacts() {
        this._additionalArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get additionalArtifactsInput() {
        return this._additionalArtifacts;
    }
    /**
     * @stability stable
     */
    get additionalSchemaElements() {
        return this.getListAttribute('additional_schema_elements');
    }
    /**
     * @stability stable
     */
    set additionalSchemaElements(value) {
        this._additionalSchemaElements = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get additionalSchemaElementsInput() {
        return this._additionalSchemaElements;
    }
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
    get compression() {
        return this.getStringAttribute('compression');
    }
    /**
     * @stability stable
     */
    set compression(value) {
        this._compression = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionInput() {
        return this._compression;
    }
    /**
     * @stability stable
     */
    get format() {
        return this.getStringAttribute('format');
    }
    /**
     * @stability stable
     */
    set format(value) {
        this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get formatInput() {
        return this._format;
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
    get refreshClosedReports() {
        return this.getBooleanAttribute('refresh_closed_reports');
    }
    /**
     * @stability stable
     */
    set refreshClosedReports(value) {
        this._refreshClosedReports = value;
    }
    /**
     * @stability stable
     */
    resetRefreshClosedReports() {
        this._refreshClosedReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get refreshClosedReportsInput() {
        return this._refreshClosedReports;
    }
    /**
     * @stability stable
     */
    get reportName() {
        return this.getStringAttribute('report_name');
    }
    /**
     * @stability stable
     */
    set reportName(value) {
        this._reportName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportNameInput() {
        return this._reportName;
    }
    /**
     * @stability stable
     */
    get reportVersioning() {
        return this.getStringAttribute('report_versioning');
    }
    /**
     * @stability stable
     */
    set reportVersioning(value) {
        this._reportVersioning = value;
    }
    /**
     * @stability stable
     */
    resetReportVersioning() {
        this._reportVersioning = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get reportVersioningInput() {
        return this._reportVersioning;
    }
    /**
     * @stability stable
     */
    get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    /**
     * @stability stable
     */
    set s3Bucket(value) {
        this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BucketInput() {
        return this._s3Bucket;
    }
    /**
     * @stability stable
     */
    get s3Prefix() {
        return this.getStringAttribute('s3_prefix');
    }
    /**
     * @stability stable
     */
    set s3Prefix(value) {
        this._s3Prefix = value;
    }
    /**
     * @stability stable
     */
    resetS3Prefix() {
        this._s3Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3PrefixInput() {
        return this._s3Prefix;
    }
    /**
     * @stability stable
     */
    get s3Region() {
        return this.getStringAttribute('s3_region');
    }
    /**
     * @stability stable
     */
    set s3Region(value) {
        this._s3Region = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3RegionInput() {
        return this._s3Region;
    }
    /**
     * @stability stable
     */
    get timeUnit() {
        return this.getStringAttribute('time_unit');
    }
    /**
     * @stability stable
     */
    set timeUnit(value) {
        this._timeUnit = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timeUnitInput() {
        return this._timeUnit;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            additional_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalArtifacts),
            additional_schema_elements: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalSchemaElements),
            compression: cdktf.stringToTerraform(this._compression),
            format: cdktf.stringToTerraform(this._format),
            refresh_closed_reports: cdktf.booleanToTerraform(this._refreshClosedReports),
            report_name: cdktf.stringToTerraform(this._reportName),
            report_versioning: cdktf.stringToTerraform(this._reportVersioning),
            s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
            s3_prefix: cdktf.stringToTerraform(this._s3Prefix),
            s3_region: cdktf.stringToTerraform(this._s3Region),
            time_unit: cdktf.stringToTerraform(this._timeUnit),
        };
    }
}
exports.CurReportDefinition = CurReportDefinition;
_a = JSII_RTTI_SYMBOL_1;
CurReportDefinition[_a] = { fqn: "@cdktf/provider-aws.cur.CurReportDefinition", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CurReportDefinition.tfResourceType = "aws_cur_report_definition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VyLXJlcG9ydC1kZWZpbml0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2N1ci9jdXItcmVwb3J0LWRlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQTZCL0IsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBTzlELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFpQztRQUNoRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDJCQUEyQjtZQUNsRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFR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QUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ2xFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQzs7QUEvTkgsa0RBZ09DOzs7QUE5TkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxrQ0FBYyxHQUFXLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBDdXJSZXBvcnREZWZpbml0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZGRpdGlvbmFsQXJ0aWZhY3RzPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZGRpdGlvbmFsU2NoZW1hRWxlbWVudHM6IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcHJlc3Npb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9ybWF0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVmcmVzaENsb3NlZFJlcG9ydHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXBvcnRWZXJzaW9uaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0J1Y2tldDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM1ByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNSZWdpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGltZVVuaXQ6IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBDdXJSZXBvcnREZWZpbml0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2N1cl9yZXBvcnRfZGVmaW5pdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBDdXJSZXBvcnREZWZpbml0aW9uQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY3VyX3JlcG9ydF9kZWZpbml0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2FkZGl0aW9uYWxBcnRpZmFjdHMgPSBjb25maWcuYWRkaXRpb25hbEFydGlmYWN0cztcbiAgICB0aGlzLl9hZGRpdGlvbmFsU2NoZW1hRWxlbWVudHMgPSBjb25maWcuYWRkaXRpb25hbFNjaGVtYUVsZW1lbnRzO1xuICAgIHRoaXMuX2NvbXByZXNzaW9uID0gY29uZmlnLmNvbXByZXNzaW9uO1xuICAgIHRoaXMuX2Zvcm1hdCA9IGNvbmZpZy5mb3JtYXQ7XG4gICAgdGhpcy5fcmVmcmVzaENsb3NlZFJlcG9ydHMgPSBjb25maWcucmVmcmVzaENsb3NlZFJlcG9ydHM7XG4gICAgdGhpcy5fcmVwb3J0TmFtZSA9IGNvbmZpZy5yZXBvcnROYW1lO1xuICAgIHRoaXMuX3JlcG9ydFZlcnNpb25pbmcgPSBjb25maWcucmVwb3J0VmVyc2lvbmluZztcbiAgICB0aGlzLl9zM0J1Y2tldCA9IGNvbmZpZy5zM0J1Y2tldDtcbiAgICB0aGlzLl9zM1ByZWZpeCA9IGNvbmZpZy5zM1ByZWZpeDtcbiAgICB0aGlzLl9zM1JlZ2lvbiA9IGNvbmZpZy5zM1JlZ2lvbjtcbiAgICB0aGlzLl90aW1lVW5pdCA9IGNvbmZpZy50aW1lVW5pdDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWRkaXRpb25hbF9hcnRpZmFjdHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRkaXRpb25hbEFydGlmYWN0cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhZGRpdGlvbmFsQXJ0aWZhY3RzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2FkZGl0aW9uYWxfYXJ0aWZhY3RzJyk7XG4gIH1cbiAgcHVibGljIHNldCBhZGRpdGlvbmFsQXJ0aWZhY3RzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxBcnRpZmFjdHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZGRpdGlvbmFsQXJ0aWZhY3RzKCkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxBcnRpZmFjdHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFkZGl0aW9uYWxBcnRpZmFjdHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbEFydGlmYWN0cztcbiAgfVxuXG4gIC8vIGFkZGl0aW9uYWxfc2NoZW1hX2VsZW1lbnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2FkZGl0aW9uYWxTY2hlbWFFbGVtZW50cz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBhZGRpdGlvbmFsU2NoZW1hRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYWRkaXRpb25hbF9zY2hlbWFfZWxlbWVudHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkZGl0aW9uYWxTY2hlbWFFbGVtZW50cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hZGRpdGlvbmFsU2NoZW1hRWxlbWVudHMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWRkaXRpb25hbFNjaGVtYUVsZW1lbnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZGl0aW9uYWxTY2hlbWFFbGVtZW50cztcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gY29tcHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29tcHJlc3Npb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHJlc3Npb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXByZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wcmVzc2lvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wcmVzc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wcmVzc2lvbjtcbiAgfVxuXG4gIC8vIGZvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9mb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyByZWZyZXNoX2Nsb3NlZF9yZXBvcnRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZnJlc2hDbG9zZWRSZXBvcnRzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCByZWZyZXNoQ2xvc2VkUmVwb3J0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZWZyZXNoX2Nsb3NlZF9yZXBvcnRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVmcmVzaENsb3NlZFJlcG9ydHModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3JlZnJlc2hDbG9zZWRSZXBvcnRzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVmcmVzaENsb3NlZFJlcG9ydHMoKSB7XG4gICAgdGhpcy5fcmVmcmVzaENsb3NlZFJlcG9ydHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZnJlc2hDbG9zZWRSZXBvcnRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZnJlc2hDbG9zZWRSZXBvcnRzO1xuICB9XG5cbiAgLy8gcmVwb3J0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVwb3J0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVwb3J0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlcG9ydF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXBvcnROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBvcnROYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcG9ydE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVwb3J0TmFtZTtcbiAgfVxuXG4gIC8vIHJlcG9ydF92ZXJzaW9uaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcG9ydFZlcnNpb25pbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlcG9ydFZlcnNpb25pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBvcnRfdmVyc2lvbmluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwb3J0VmVyc2lvbmluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVwb3J0VmVyc2lvbmluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcG9ydFZlcnNpb25pbmcoKSB7XG4gICAgdGhpcy5fcmVwb3J0VmVyc2lvbmluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwb3J0VmVyc2lvbmluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXBvcnRWZXJzaW9uaW5nO1xuICB9XG5cbiAgLy8gczNfYnVja2V0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzQnVja2V0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM0J1Y2tldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2J1Y2tldCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgczNCdWNrZXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzQnVja2V0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQnVja2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQnVja2V0O1xuICB9XG5cbiAgLy8gczNfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzUHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM1ByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgczNQcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNQcmVmaXgoKSB7XG4gICAgdGhpcy5fczNQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzUHJlZml4O1xuICB9XG5cbiAgLy8gczNfcmVnaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3MzUmVnaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM1JlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX3JlZ2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgczNSZWdpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzUmVnaW9uID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzUmVnaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzUmVnaW9uO1xuICB9XG5cbiAgLy8gdGltZV91bml0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3RpbWVVbml0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0aW1lVW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfdW5pdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGltZVVuaXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpbWVVbml0ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRpbWVVbml0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVVbml0O1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRpdGlvbmFsX2FydGlmYWN0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYWRkaXRpb25hbEFydGlmYWN0cyksXG4gICAgICBhZGRpdGlvbmFsX3NjaGVtYV9lbGVtZW50czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYWRkaXRpb25hbFNjaGVtYUVsZW1lbnRzKSxcbiAgICAgIGNvbXByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jb21wcmVzc2lvbiksXG4gICAgICBmb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Zvcm1hdCksXG4gICAgICByZWZyZXNoX2Nsb3NlZF9yZXBvcnRzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcmVmcmVzaENsb3NlZFJlcG9ydHMpLFxuICAgICAgcmVwb3J0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcG9ydE5hbWUpLFxuICAgICAgcmVwb3J0X3ZlcnNpb25pbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3JlcG9ydFZlcnNpb25pbmcpLFxuICAgICAgczNfYnVja2V0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zM0J1Y2tldCksXG4gICAgICBzM19wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3MzUHJlZml4KSxcbiAgICAgIHMzX3JlZ2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fczNSZWdpb24pLFxuICAgICAgdGltZV91bml0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl90aW1lVW5pdCksXG4gICAgfTtcbiAgfVxufVxuIl19