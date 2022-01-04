"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsResourcegroupstaggingapiResources = exports.dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform = exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList = exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails extends cdktf.ComplexComputedList {
    // compliance_status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get complianceStatus() {
        return this.getBooleanAttribute('compliance_status');
    }
    // keys_with_noncompliant_values - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keysWithNoncompliantValues() {
        return this.getListAttribute('keys_with_noncompliant_values');
    }
    // non_compliant_keys - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get nonCompliantKeys() {
        return this.getListAttribute('non_compliant_keys');
    }
}
exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails = DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails;
_a = JSII_RTTI_SYMBOL_1;
DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails[_a] = { fqn: "@cdktf/provider-aws.resourcegroups.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList extends cdktf.ComplexComputedList {
    // compliance_details - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get complianceDetails() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('compliance_details');
    }
    // resource_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    // tags - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
}
exports.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList = DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList;
_b = JSII_RTTI_SYMBOL_1;
DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList[_b] = { fqn: "@cdktf/provider-aws.resourcegroups.DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList", version: "3.0.1" };
function dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
exports.dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform = dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources}.
 *
 * @stability stable
 */
class DataAwsResourcegroupstaggingapiResources extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_resourcegroupstaggingapi_resources',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._excludeCompliantResources = config.excludeCompliantResources;
        this._includeComplianceDetails = config.includeComplianceDetails;
        this._resourceArnList = config.resourceArnList;
        this._resourceTypeFilters = config.resourceTypeFilters;
        this._tagFilter = config.tagFilter;
    }
    /**
     * @stability stable
     */
    get excludeCompliantResources() {
        return this.getBooleanAttribute('exclude_compliant_resources');
    }
    /**
     * @stability stable
     */
    set excludeCompliantResources(value) {
        this._excludeCompliantResources = value;
    }
    /**
     * @stability stable
     */
    resetExcludeCompliantResources() {
        this._excludeCompliantResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get excludeCompliantResourcesInput() {
        return this._excludeCompliantResources;
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
    get includeComplianceDetails() {
        return this.getBooleanAttribute('include_compliance_details');
    }
    /**
     * @stability stable
     */
    set includeComplianceDetails(value) {
        this._includeComplianceDetails = value;
    }
    /**
     * @stability stable
     */
    resetIncludeComplianceDetails() {
        this._includeComplianceDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeComplianceDetailsInput() {
        return this._includeComplianceDetails;
    }
    /**
     * @stability stable
     */
    get resourceArnList() {
        return this.getListAttribute('resource_arn_list');
    }
    /**
     * @stability stable
     */
    set resourceArnList(value) {
        this._resourceArnList = value;
    }
    /**
     * @stability stable
     */
    resetResourceArnList() {
        this._resourceArnList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceArnListInput() {
        return this._resourceArnList;
    }
    // resource_tag_mapping_list - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    resourceTagMappingList(index) {
        return new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList(this, 'resource_tag_mapping_list', index);
    }
    /**
     * @stability stable
     */
    get resourceTypeFilters() {
        return this.getListAttribute('resource_type_filters');
    }
    /**
     * @stability stable
     */
    set resourceTypeFilters(value) {
        this._resourceTypeFilters = value;
    }
    /**
     * @stability stable
     */
    resetResourceTypeFilters() {
        this._resourceTypeFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceTypeFiltersInput() {
        return this._resourceTypeFilters;
    }
    /**
     * @stability stable
     */
    get tagFilter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tag_filter');
    }
    /**
     * @stability stable
     */
    set tagFilter(value) {
        this._tagFilter = value;
    }
    /**
     * @stability stable
     */
    resetTagFilter() {
        this._tagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagFilterInput() {
        return this._tagFilter;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            exclude_compliant_resources: cdktf.booleanToTerraform(this._excludeCompliantResources),
            include_compliance_details: cdktf.booleanToTerraform(this._includeComplianceDetails),
            resource_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceArnList),
            resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeFilters),
            tag_filter: cdktf.listMapper(dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform)(this._tagFilter),
        };
    }
}
exports.DataAwsResourcegroupstaggingapiResources = DataAwsResourcegroupstaggingapiResources;
_c = JSII_RTTI_SYMBOL_1;
DataAwsResourcegroupstaggingapiResources[_c] = { fqn: "@cdktf/provider-aws.resourcegroups.DataAwsResourcegroupstaggingapiResources", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsResourcegroupstaggingapiResources.tfResourceType = "aws_resourcegroupstaggingapi_resources";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpLXJlc291cmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvdXJjZWdyb3Vwcy9kYXRhLWF3cy1yZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGktcmVzb3VyY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7O0FBZS9CLE1BQWEsK0VBQWdGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU1SCx1RUFBdUU7Ozs7SUFDdkUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQVEsQ0FBQztJQUM5RCxDQUFDO0lBRUQsbUZBQW1GOzs7O0lBQ25GLElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHdFQUF3RTs7OztJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBZkgsMEtBZ0JDOzs7Ozs7QUFDRCxNQUFhLDhEQUErRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0csd0VBQXdFOzs7O0lBQ3hFLElBQVcsaUJBQWlCO1FBQzFCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwwREFBMEQ7Ozs7SUFDMUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7O0FBakJI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LFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCwyQkFBMkIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1lBQ3RGLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUM7WUFDcEYsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDbkYscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDM0YsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNERBQTRELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzVHLENBQUM7SUFDSixDQUFDOztBQXpJSCw0RkEwSUM7OztBQXhJQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHVEQUFjLEdBQVcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuTGlzdD86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VUeXBlRmlsdGVycz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ0ZpbHRlcj86IERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNUYWdGaWx0ZXJbXTtcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzUmVzb3VyY2VUYWdNYXBwaW5nTGlzdENvbXBsaWFuY2VEZXRhaWxzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tcGxpYW5jZV9zdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wbGlhbmNlU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvbXBsaWFuY2Vfc3RhdHVzJykgYXMgYW55O1xuICB9XG5cbiAgLy8ga2V5c193aXRoX25vbmNvbXBsaWFudF92YWx1ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlzV2l0aE5vbmNvbXBsaWFudFZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdrZXlzX3dpdGhfbm9uY29tcGxpYW50X3ZhbHVlcycpO1xuICB9XG5cbiAgLy8gbm9uX2NvbXBsaWFudF9rZXlzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9uQ29tcGxpYW50S2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdub25fY29tcGxpYW50X2tleXMnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNSZXNvdXJjZVRhZ01hcHBpbmdMaXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29tcGxpYW5jZV9kZXRhaWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcGxpYW5jZURldGFpbHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbXBsaWFuY2VfZGV0YWlscycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzVGFnRmlsdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzVGFnRmlsdGVyVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c1Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaVJlc291cmNlc1RhZ0ZpbHRlcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS52YWx1ZXMpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXMgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19yZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlfcmVzb3VyY2VzXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19yZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlfcmVzb3VyY2VzJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2V4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXMgPSBjb25maWcuZXhjbHVkZUNvbXBsaWFudFJlc291cmNlcztcbiAgICB0aGlzLl9pbmNsdWRlQ29tcGxpYW5jZURldGFpbHMgPSBjb25maWcuaW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzO1xuICAgIHRoaXMuX3Jlc291cmNlQXJuTGlzdCA9IGNvbmZpZy5yZXNvdXJjZUFybkxpc3Q7XG4gICAgdGhpcy5fcmVzb3VyY2VUeXBlRmlsdGVycyA9IGNvbmZpZy5yZXNvdXJjZVR5cGVGaWx0ZXJzO1xuICAgIHRoaXMuX3RhZ0ZpbHRlciA9IGNvbmZpZy50YWdGaWx0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGV4Y2x1ZGVfY29tcGxpYW50X3Jlc291cmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9leGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBleGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2V4Y2x1ZGVfY29tcGxpYW50X3Jlc291cmNlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGV4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2V4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeGNsdWRlQ29tcGxpYW50UmVzb3VyY2VzKCkge1xuICAgIHRoaXMuX2V4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXhjbHVkZUNvbXBsaWFudFJlc291cmNlcztcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBpbmNsdWRlX2NvbXBsaWFuY2VfZGV0YWlscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlQ29tcGxpYW5jZURldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVDb21wbGlhbmNlRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2NvbXBsaWFuY2VfZGV0YWlscycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVDb21wbGlhbmNlRGV0YWlscyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzKCkge1xuICAgIHRoaXMuX2luY2x1ZGVDb21wbGlhbmNlRGV0YWlscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUNvbXBsaWFuY2VEZXRhaWxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVDb21wbGlhbmNlRGV0YWlscztcbiAgfVxuXG4gIC8vIHJlc291cmNlX2Fybl9saXN0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuTGlzdD86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybkxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncmVzb3VyY2VfYXJuX2xpc3QnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuTGlzdCh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybkxpc3QgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZUFybkxpc3QoKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm5MaXN0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybkxpc3RJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm5MaXN0O1xuICB9XG5cbiAgLy8gcmVzb3VyY2VfdGFnX21hcHBpbmdfbGlzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgcmVzb3VyY2VUYWdNYXBwaW5nTGlzdChpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzUmVzb3VyY2VUYWdNYXBwaW5nTGlzdCh0aGlzLCAncmVzb3VyY2VfdGFnX21hcHBpbmdfbGlzdCcsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHJlc291cmNlX3R5cGVfZmlsdGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXNvdXJjZVR5cGVGaWx0ZXJzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZUZpbHRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgncmVzb3VyY2VfdHlwZV9maWx0ZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZVR5cGVGaWx0ZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZUZpbHRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXNvdXJjZVR5cGVGaWx0ZXJzKCkge1xuICAgIHRoaXMuX3Jlc291cmNlVHlwZUZpbHRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZUZpbHRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VUeXBlRmlsdGVycztcbiAgfVxuXG4gIC8vIHRhZ19maWx0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnRmlsdGVyPzogRGF0YUF3c1Jlc291cmNlZ3JvdXBzdGFnZ2luZ2FwaVJlc291cmNlc1RhZ0ZpbHRlcltdOyBcbiAgcHVibGljIGdldCB0YWdGaWx0ZXIoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ19maWx0ZXInKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdGaWx0ZXIodmFsdWU6IERhdGFBd3NSZXNvdXJjZWdyb3Vwc3RhZ2dpbmdhcGlSZXNvdXJjZXNUYWdGaWx0ZXJbXSkge1xuICAgIHRoaXMuX3RhZ0ZpbHRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ0ZpbHRlcigpIHtcbiAgICB0aGlzLl90YWdGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ0ZpbHRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdGaWx0ZXI7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4Y2x1ZGVfY29tcGxpYW50X3Jlc291cmNlczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2V4Y2x1ZGVDb21wbGlhbnRSZXNvdXJjZXMpLFxuICAgICAgaW5jbHVkZV9jb21wbGlhbmNlX2RldGFpbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9pbmNsdWRlQ29tcGxpYW5jZURldGFpbHMpLFxuICAgICAgcmVzb3VyY2VfYXJuX2xpc3Q6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3Jlc291cmNlQXJuTGlzdCksXG4gICAgICByZXNvdXJjZV90eXBlX2ZpbHRlcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3Jlc291cmNlVHlwZUZpbHRlcnMpLFxuICAgICAgdGFnX2ZpbHRlcjogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzUmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpUmVzb3VyY2VzVGFnRmlsdGVyVG9UZXJyYWZvcm0pKHRoaXMuX3RhZ0ZpbHRlciksXG4gICAgfTtcbiAgfVxufVxuIl19