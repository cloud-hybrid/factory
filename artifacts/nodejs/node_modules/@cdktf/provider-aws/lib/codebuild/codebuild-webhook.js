"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodebuildWebhook = exports.codebuildWebhookFilterGroupToTerraform = exports.codebuildWebhookFilterGroupFilterToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function codebuildWebhookFilterGroupFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude_matched_pattern: cdktf.booleanToTerraform(struct.excludeMatchedPattern),
        pattern: cdktf.stringToTerraform(struct.pattern),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.codebuildWebhookFilterGroupFilterToTerraform = codebuildWebhookFilterGroupFilterToTerraform;
function codebuildWebhookFilterGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        filter: cdktf.listMapper(codebuildWebhookFilterGroupFilterToTerraform)(struct.filter),
    };
}
exports.codebuildWebhookFilterGroupToTerraform = codebuildWebhookFilterGroupToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}.
 *
 * @stability stable
 */
class CodebuildWebhook extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codebuild_webhook',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._branchFilter = config.branchFilter;
        this._buildType = config.buildType;
        this._projectName = config.projectName;
        this._filterGroup = config.filterGroup;
    }
    /**
     * @stability stable
     */
    get branchFilter() {
        return this.getStringAttribute('branch_filter');
    }
    /**
     * @stability stable
     */
    set branchFilter(value) {
        this._branchFilter = value;
    }
    /**
     * @stability stable
     */
    resetBranchFilter() {
        this._branchFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get branchFilterInput() {
        return this._branchFilter;
    }
    /**
     * @stability stable
     */
    get buildType() {
        return this.getStringAttribute('build_type');
    }
    /**
     * @stability stable
     */
    set buildType(value) {
        this._buildType = value;
    }
    /**
     * @stability stable
     */
    resetBuildType() {
        this._buildType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get buildTypeInput() {
        return this._buildType;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // payload_url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get payloadUrl() {
        return this.getStringAttribute('payload_url');
    }
    /**
     * @stability stable
     */
    get projectName() {
        return this.getStringAttribute('project_name');
    }
    /**
     * @stability stable
     */
    set projectName(value) {
        this._projectName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get projectNameInput() {
        return this._projectName;
    }
    // secret - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get secret() {
        return this.getStringAttribute('secret');
    }
    // url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get url() {
        return this.getStringAttribute('url');
    }
    /**
     * @stability stable
     */
    get filterGroup() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filter_group');
    }
    /**
     * @stability stable
     */
    set filterGroup(value) {
        this._filterGroup = value;
    }
    /**
     * @stability stable
     */
    resetFilterGroup() {
        this._filterGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get filterGroupInput() {
        return this._filterGroup;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            branch_filter: cdktf.stringToTerraform(this._branchFilter),
            build_type: cdktf.stringToTerraform(this._buildType),
            project_name: cdktf.stringToTerraform(this._projectName),
            filter_group: cdktf.listMapper(codebuildWebhookFilterGroupToTerraform)(this._filterGroup),
        };
    }
}
exports.CodebuildWebhook = CodebuildWebhook;
_a = JSII_RTTI_SYMBOL_1;
CodebuildWebhook[_a] = { fqn: "@cdktf/provider-aws.codebuild.CodebuildWebhook", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
CodebuildWebhook.tfResourceType = "aws_codebuild_webhook";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWJ1aWxkLXdlYmhvb2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWJ1aWxkL2NvZGVidWlsZC13ZWJob29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBc0IvQixTQUFnQiw0Q0FBNEMsQ0FBQyxNQUEwQztJQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7UUFDaEYsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVZELG9HQVVDO0FBT0QsU0FBZ0Isc0NBQXNDLENBQUMsTUFBb0M7SUFDekYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDdkYsQ0FBQTtBQUNILENBQUM7QUFSRCx3RkFRQzs7Ozs7O0FB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Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFvQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxRixDQUFDO0lBQ0osQ0FBQzs7QUE5SEgsNENBK0hDOzs7QUE3SEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywrQkFBYyxHQUFXLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBDb2RlYnVpbGRXZWJob29rQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBicmFuY2hGaWx0ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWlsZFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvamVjdE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsdGVyR3JvdXA/OiBDb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXBbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXhjbHVkZU1hdGNoZWRQYXR0ZXJuPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGF0dGVybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwRmlsdGVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXhjbHVkZV9tYXRjaGVkX3BhdHRlcm46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmV4Y2x1ZGVNYXRjaGVkUGF0dGVybiksXG4gICAgcGF0dGVybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXR0ZXJuKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsdGVyPzogQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwRmlsdGVyW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXBUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXApOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXI6IGNka3RmLmxpc3RNYXBwZXIoY29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwRmlsdGVyVG9UZXJyYWZvcm0pKHN0cnVjdCEuZmlsdGVyKSxcbiAgfVxufVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIENvZGVidWlsZFdlYmhvb2sgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY29kZWJ1aWxkX3dlYmhvb2tcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvZGVidWlsZFdlYmhvb2tDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19jb2RlYnVpbGRfd2ViaG9vaycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9icmFuY2hGaWx0ZXIgPSBjb25maWcuYnJhbmNoRmlsdGVyO1xuICAgIHRoaXMuX2J1aWxkVHlwZSA9IGNvbmZpZy5idWlsZFR5cGU7XG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSBjb25maWcucHJvamVjdE5hbWU7XG4gICAgdGhpcy5fZmlsdGVyR3JvdXAgPSBjb25maWcuZmlsdGVyR3JvdXA7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGJyYW5jaF9maWx0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnJhbmNoRmlsdGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBicmFuY2hGaWx0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdicmFuY2hfZmlsdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBicmFuY2hGaWx0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2JyYW5jaEZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJyYW5jaEZpbHRlcigpIHtcbiAgICB0aGlzLl9icmFuY2hGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJyYW5jaEZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9icmFuY2hGaWx0ZXI7XG4gIH1cblxuICAvLyBidWlsZF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1aWxkVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVpbGRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVpbGRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVpbGRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWlsZFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWlsZFR5cGUoKSB7XG4gICAgdGhpcy5fYnVpbGRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWlsZFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRUeXBlO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIHBheWxvYWRfdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGF5bG9hZFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BheWxvYWRfdXJsJyk7XG4gIH1cblxuICAvLyBwcm9qZWN0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJvamVjdE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJvamVjdF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9qZWN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvamVjdE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWU7XG4gIH1cblxuICAvLyBzZWNyZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNyZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWNyZXQnKTtcbiAgfVxuXG4gIC8vIHVybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgLy8gZmlsdGVyX2dyb3VwIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZpbHRlckdyb3VwPzogQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwW107IFxuICBwdWJsaWMgZ2V0IGZpbHRlckdyb3VwKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdmaWx0ZXJfZ3JvdXAnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBmaWx0ZXJHcm91cCh2YWx1ZTogQ29kZWJ1aWxkV2ViaG9va0ZpbHRlckdyb3VwW10pIHtcbiAgICB0aGlzLl9maWx0ZXJHcm91cCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZpbHRlckdyb3VwKCkge1xuICAgIHRoaXMuX2ZpbHRlckdyb3VwID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWx0ZXJHcm91cElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJHcm91cDtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgYnJhbmNoX2ZpbHRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnJhbmNoRmlsdGVyKSxcbiAgICAgIGJ1aWxkX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2J1aWxkVHlwZSksXG4gICAgICBwcm9qZWN0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3Byb2plY3ROYW1lKSxcbiAgICAgIGZpbHRlcl9ncm91cDogY2RrdGYubGlzdE1hcHBlcihjb2RlYnVpbGRXZWJob29rRmlsdGVyR3JvdXBUb1RlcnJhZm9ybSkodGhpcy5fZmlsdGVyR3JvdXApLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==