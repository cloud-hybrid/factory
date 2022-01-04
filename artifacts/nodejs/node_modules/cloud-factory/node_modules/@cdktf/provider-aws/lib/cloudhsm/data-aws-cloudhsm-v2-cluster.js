"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsCloudhsmV2Cluster = exports.DataAwsCloudhsmV2ClusterClusterCertificates = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsCloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {
    // aws_hardware_certificate - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get awsHardwareCertificate() {
        return this.getStringAttribute('aws_hardware_certificate');
    }
    // cluster_certificate - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clusterCertificate() {
        return this.getStringAttribute('cluster_certificate');
    }
    // cluster_csr - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clusterCsr() {
        return this.getStringAttribute('cluster_csr');
    }
    // hsm_certificate - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hsmCertificate() {
        return this.getStringAttribute('hsm_certificate');
    }
    // manufacturer_hardware_certificate - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get manufacturerHardwareCertificate() {
        return this.getStringAttribute('manufacturer_hardware_certificate');
    }
}
exports.DataAwsCloudhsmV2ClusterClusterCertificates = DataAwsCloudhsmV2ClusterClusterCertificates;
_a = JSII_RTTI_SYMBOL_1;
DataAwsCloudhsmV2ClusterClusterCertificates[_a] = { fqn: "@cdktf/provider-aws.cloudhsm.DataAwsCloudhsmV2ClusterClusterCertificates", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}.
 *
 * @stability stable
 */
class DataAwsCloudhsmV2Cluster extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudhsm_v2_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clusterId = config.clusterId;
        this._clusterState = config.clusterState;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cluster_certificates - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    clusterCertificates(index) {
        return new DataAwsCloudhsmV2ClusterClusterCertificates(this, 'cluster_certificates', index);
    }
    /**
     * @stability stable
     */
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    /**
     * @stability stable
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterIdInput() {
        return this._clusterId;
    }
    /**
     * @stability stable
     */
    get clusterState() {
        return this.getStringAttribute('cluster_state');
    }
    /**
     * @stability stable
     */
    set clusterState(value) {
        this._clusterState = value;
    }
    /**
     * @stability stable
     */
    resetClusterState() {
        this._clusterState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterStateInput() {
        return this._clusterState;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // security_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
    // subnet_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    // vpc_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            cluster_state: cdktf.stringToTerraform(this._clusterState),
        };
    }
}
exports.DataAwsCloudhsmV2Cluster = DataAwsCloudhsmV2Cluster;
_b = JSII_RTTI_SYMBOL_1;
DataAwsCloudhsmV2Cluster[_b] = { fqn: "@cdktf/provider-aws.cloudhsm.DataAwsCloudhsmV2Cluster", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsCloudhsmV2Cluster.tfResourceType = "aws_cloudhsm_v2_cluster";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWRoc20tdjItY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZGhzbS9kYXRhLWF3cy1jbG91ZGhzbS12Mi1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7O0FBUy9CLE1BQWEsMkNBQTRDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV4Riw4RUFBOEU7Ozs7SUFDOUUsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQseUVBQXlFOzs7O0lBQ3pFLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHFFQUFxRTs7OztJQUNyRSxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsdUZBQXVGOzs7O0lBQ3ZGLElBQVcsK0JBQStCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7QUF6Qkgsa0dBMEJDOzs7Ozs7OztBQUdELE1BQWEsd0JBQXlCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQU9yRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBc0M7UUFDckYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx5QkFBeUI7WUFDaEQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLDBFQUEwRTs7OztJQUNuRSxtQkFBbUIsQ0FBQyxLQUFhO1FBQ3RDLE9BQU8sSUFBSSwyQ0FBMkMsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1REFBdUQ7Ozs7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVFQUF1RTs7OztJQUN2RSxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsZ0VBQWdFOzs7O0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsNERBQTREOzs7O0lBQzVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0QsQ0FBQztJQUNKLENBQUM7O0FBOUZILDREQStGQzs7O0FBN0ZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csdUNBQWMsR0FBVyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzQ2xvdWRoc21WMkNsdXN0ZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyU3RhdGU/OiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkaHNtVjJDbHVzdGVyQ2x1c3RlckNlcnRpZmljYXRlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF3c19oYXJkd2FyZV9jZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF3c0hhcmR3YXJlQ2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NfaGFyZHdhcmVfY2VydGlmaWNhdGUnKTtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfY2VydGlmaWNhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbHVzdGVyQ2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX2NlcnRpZmljYXRlJyk7XG4gIH1cblxuICAvLyBjbHVzdGVyX2NzciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJDc3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX2NzcicpO1xuICB9XG5cbiAgLy8gaHNtX2NlcnRpZmljYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaHNtQ2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoc21fY2VydGlmaWNhdGUnKTtcbiAgfVxuXG4gIC8vIG1hbnVmYWN0dXJlcl9oYXJkd2FyZV9jZXJ0aWZpY2F0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hbnVmYWN0dXJlckhhcmR3YXJlQ2VydGlmaWNhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYW51ZmFjdHVyZXJfaGFyZHdhcmVfY2VydGlmaWNhdGUnKTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0Nsb3VkaHNtVjJDbHVzdGVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfY2xvdWRoc21fdjJfY2x1c3RlclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c0Nsb3VkaHNtVjJDbHVzdGVyQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfY2xvdWRoc21fdjJfY2x1c3RlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jbHVzdGVySWQgPSBjb25maWcuY2x1c3RlcklkO1xuICAgIHRoaXMuX2NsdXN0ZXJTdGF0ZSA9IGNvbmZpZy5jbHVzdGVyU3RhdGU7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNsdXN0ZXJfY2VydGlmaWNhdGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBjbHVzdGVyQ2VydGlmaWNhdGVzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NDbG91ZGhzbVYyQ2x1c3RlckNsdXN0ZXJDZXJ0aWZpY2F0ZXModGhpcywgJ2NsdXN0ZXJfY2VydGlmaWNhdGVzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9jbHVzdGVySWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsdXN0ZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3RlcklkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVySWQ7XG4gIH1cblxuICAvLyBjbHVzdGVyX3N0YXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlclN0YXRlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX3N0YXRlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyU3RhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJTdGF0ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsdXN0ZXJTdGF0ZSgpIHtcbiAgICB0aGlzLl9jbHVzdGVyU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJTdGF0ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyU3RhdGU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZCcpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cblxuICAvLyB2cGNfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19pZCcpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjbHVzdGVyX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9jbHVzdGVySWQpLFxuICAgICAgY2x1c3Rlcl9zdGF0ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2x1c3RlclN0YXRlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=