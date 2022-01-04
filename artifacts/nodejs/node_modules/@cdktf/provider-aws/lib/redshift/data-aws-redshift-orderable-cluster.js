"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsRedshiftOrderableCluster = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster}.
 *
 * @stability stable
 */
class DataAwsRedshiftOrderableCluster extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_redshift_orderable_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clusterType = config.clusterType;
        this._clusterVersion = config.clusterVersion;
        this._nodeType = config.nodeType;
        this._preferredNodeTypes = config.preferredNodeTypes;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // availability_zones - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    /**
     * @stability stable
     */
    get clusterType() {
        return this.getStringAttribute('cluster_type');
    }
    /**
     * @stability stable
     */
    set clusterType(value) {
        this._clusterType = value;
    }
    /**
     * @stability stable
     */
    resetClusterType() {
        this._clusterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterTypeInput() {
        return this._clusterType;
    }
    /**
     * @stability stable
     */
    get clusterVersion() {
        return this.getStringAttribute('cluster_version');
    }
    /**
     * @stability stable
     */
    set clusterVersion(value) {
        this._clusterVersion = value;
    }
    /**
     * @stability stable
     */
    resetClusterVersion() {
        this._clusterVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterVersionInput() {
        return this._clusterVersion;
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
    get nodeType() {
        return this.getStringAttribute('node_type');
    }
    /**
     * @stability stable
     */
    set nodeType(value) {
        this._nodeType = value;
    }
    /**
     * @stability stable
     */
    resetNodeType() {
        this._nodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nodeTypeInput() {
        return this._nodeType;
    }
    /**
     * @stability stable
     */
    get preferredNodeTypes() {
        return this.getListAttribute('preferred_node_types');
    }
    /**
     * @stability stable
     */
    set preferredNodeTypes(value) {
        this._preferredNodeTypes = value;
    }
    /**
     * @stability stable
     */
    resetPreferredNodeTypes() {
        this._preferredNodeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get preferredNodeTypesInput() {
        return this._preferredNodeTypes;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            cluster_type: cdktf.stringToTerraform(this._clusterType),
            cluster_version: cdktf.stringToTerraform(this._clusterVersion),
            node_type: cdktf.stringToTerraform(this._nodeType),
            preferred_node_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredNodeTypes),
        };
    }
}
exports.DataAwsRedshiftOrderableCluster = DataAwsRedshiftOrderableCluster;
_a = JSII_RTTI_SYMBOL_1;
DataAwsRedshiftOrderableCluster[_a] = { fqn: "@cdktf/provider-aws.redshift.DataAwsRedshiftOrderableCluster", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsRedshiftOrderableCluster.tfResourceType = "aws_redshift_orderable_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmVkc2hpZnQtb3JkZXJhYmxlLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVkc2hpZnQvZGF0YS1hd3MtcmVkc2hpZnQtb3JkZXJhYmxlLWNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQWUvQixNQUFhLCtCQUFnQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFPNUUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQWdELEVBQUU7UUFDakcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxnQ0FBZ0M7WUFDdkQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDdkQsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHdFQUF3RTs7OztJQUN4RSxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNELElBQVcsUUFBUSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUNNLGFBQWE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFJRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWU7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUMxRixDQUFDO0lBQ0osQ0FBQzs7QUF0SEgsMEVBdUhDOzs7QUFySEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw4Q0FBYyxHQUFXLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NSZWRzaGlmdE9yZGVyYWJsZUNsdXN0ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyVmVyc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBub2RlVHlwZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZmVycmVkTm9kZVR5cGVzPzogc3RyaW5nW107XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NSZWRzaGlmdE9yZGVyYWJsZUNsdXN0ZXIgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19yZWRzaGlmdF9vcmRlcmFibGVfY2x1c3RlclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzUmVkc2hpZnRPcmRlcmFibGVDbHVzdGVyQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19yZWRzaGlmdF9vcmRlcmFibGVfY2x1c3RlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jbHVzdGVyVHlwZSA9IGNvbmZpZy5jbHVzdGVyVHlwZTtcbiAgICB0aGlzLl9jbHVzdGVyVmVyc2lvbiA9IGNvbmZpZy5jbHVzdGVyVmVyc2lvbjtcbiAgICB0aGlzLl9ub2RlVHlwZSA9IGNvbmZpZy5ub2RlVHlwZTtcbiAgICB0aGlzLl9wcmVmZXJyZWROb2RlVHlwZXMgPSBjb25maWcucHJlZmVycmVkTm9kZVR5cGVzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhdmFpbGFiaWxpdHlfem9uZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZXMnKTtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NsdXN0ZXJUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlclR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJUeXBlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2x1c3RlclR5cGUoKSB7XG4gICAgdGhpcy5fY2x1c3RlclR5cGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJUeXBlO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl92ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlclZlcnNpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyVmVyc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlclZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbHVzdGVyVmVyc2lvbigpIHtcbiAgICB0aGlzLl9jbHVzdGVyVmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3RlclZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3RlclZlcnNpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbm9kZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbm9kZVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5vZGVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm9kZV90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBub2RlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbm9kZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROb2RlVHlwZSgpIHtcbiAgICB0aGlzLl9ub2RlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbm9kZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZVR5cGU7XG4gIH1cblxuICAvLyBwcmVmZXJyZWRfbm9kZV90eXBlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmZXJyZWROb2RlVHlwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkTm9kZVR5cGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3ByZWZlcnJlZF9ub2RlX3R5cGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmZXJyZWROb2RlVHlwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fcHJlZmVycmVkTm9kZVR5cGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZmVycmVkTm9kZVR5cGVzKCkge1xuICAgIHRoaXMuX3ByZWZlcnJlZE5vZGVUeXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZmVycmVkTm9kZVR5cGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZlcnJlZE5vZGVUeXBlcztcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2x1c3Rlcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVyVHlwZSksXG4gICAgICBjbHVzdGVyX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NsdXN0ZXJWZXJzaW9uKSxcbiAgICAgIG5vZGVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbm9kZVR5cGUpLFxuICAgICAgcHJlZmVycmVkX25vZGVfdHlwZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHRoaXMuX3ByZWZlcnJlZE5vZGVUeXBlcyksXG4gICAgfTtcbiAgfVxufVxuIl19