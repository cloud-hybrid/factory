"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsElasticacheReplicationGroup = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group}.
 *
 * @stability stable
 */
class DataAwsElasticacheReplicationGroup extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group.html aws_elasticache_replication_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticache_replication_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._replicationGroupId = config.replicationGroupId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // auth_token_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authTokenEnabled() {
        return this.getBooleanAttribute('auth_token_enabled');
    }
    // automatic_failover_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get automaticFailoverEnabled() {
        return this.getBooleanAttribute('automatic_failover_enabled');
    }
    // configuration_endpoint_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get configurationEndpointAddress() {
        return this.getStringAttribute('configuration_endpoint_address');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // member_clusters - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get memberClusters() {
        return this.getListAttribute('member_clusters');
    }
    // multi_az_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get multiAzEnabled() {
        return this.getBooleanAttribute('multi_az_enabled');
    }
    // node_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get nodeType() {
        return this.getStringAttribute('node_type');
    }
    // number_cache_clusters - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get numberCacheClusters() {
        return this.getNumberAttribute('number_cache_clusters');
    }
    // port - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get port() {
        return this.getNumberAttribute('port');
    }
    // primary_endpoint_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get primaryEndpointAddress() {
        return this.getStringAttribute('primary_endpoint_address');
    }
    // reader_endpoint_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get readerEndpointAddress() {
        return this.getStringAttribute('reader_endpoint_address');
    }
    // replication_group_description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get replicationGroupDescription() {
        return this.getStringAttribute('replication_group_description');
    }
    /**
     * @stability stable
     */
    get replicationGroupId() {
        return this.getStringAttribute('replication_group_id');
    }
    /**
     * @stability stable
     */
    set replicationGroupId(value) {
        this._replicationGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get replicationGroupIdInput() {
        return this._replicationGroupId;
    }
    // snapshot_retention_limit - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get snapshotRetentionLimit() {
        return this.getNumberAttribute('snapshot_retention_limit');
    }
    // snapshot_window - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get snapshotWindow() {
        return this.getStringAttribute('snapshot_window');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
        };
    }
}
exports.DataAwsElasticacheReplicationGroup = DataAwsElasticacheReplicationGroup;
_a = JSII_RTTI_SYMBOL_1;
DataAwsElasticacheReplicationGroup[_a] = { fqn: "@cdktf/provider-aws.elasticache.DataAwsElasticacheReplicationGroup", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsElasticacheReplicationGroup.tfResourceType = "aws_elasticache_replication_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWxhc3RpY2FjaGUtcmVwbGljYXRpb24tZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWxhc3RpY2FjaGUvZGF0YS1hd3MtZWxhc3RpY2FjaGUtcmVwbGljYXRpb24tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7Ozs7OztBQVMvQixNQUFhLGtDQUFtQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFPL0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQWdEO1FBQy9GLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsbUNBQW1DO1lBQzFELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix5REFBeUQ7Ozs7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHdFQUF3RTs7OztJQUN4RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQy9ELENBQUM7SUFFRCxnRkFBZ0Y7Ozs7SUFDaEYsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsNEJBQTRCLENBQVEsQ0FBQztJQUN2RSxDQUFDO0lBRUQsb0ZBQW9GOzs7O0lBQ3BGLElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQscUVBQXFFOzs7O0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzRUFBc0U7Ozs7SUFDdEUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFRLENBQUM7SUFDN0QsQ0FBQztJQUVELCtEQUErRDs7OztJQUMvRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDJFQUEyRTs7OztJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwwREFBMEQ7Ozs7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDhFQUE4RTs7OztJQUM5RSxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCw2RUFBNkU7Ozs7SUFDN0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsbUZBQW1GOzs7O0lBQ25GLElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUVELDhFQUE4RTs7OztJQUM5RSxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxxRUFBcUU7Ozs7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUN4RSxDQUFDO0lBQ0osQ0FBQzs7QUE5SEgsZ0ZBK0hDOzs7QUE3SEMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyxpREFBYyxHQUFXLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NFbGFzdGljYWNoZVJlcGxpY2F0aW9uR3JvdXBDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVwbGljYXRpb25Hcm91cElkOiBzdHJpbmc7XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NFbGFzdGljYWNoZVJlcGxpY2F0aW9uR3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19lbGFzdGljYWNoZV9yZXBsaWNhdGlvbl9ncm91cFwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c0VsYXN0aWNhY2hlUmVwbGljYXRpb25Hcm91cENvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2VsYXN0aWNhY2hlX3JlcGxpY2F0aW9uX2dyb3VwJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX3JlcGxpY2F0aW9uR3JvdXBJZCA9IGNvbmZpZy5yZXBsaWNhdGlvbkdyb3VwSWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXV0aF90b2tlbl9lbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0aFRva2VuRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRoX3Rva2VuX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhdXRvbWF0aWNfZmFpbG92ZXJfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dG9tYXRpY0ZhaWxvdmVyRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdXRvbWF0aWNfZmFpbG92ZXJfZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbmZpZ3VyYXRpb25fZW5kcG9pbnRfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25FbmRwb2ludEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWd1cmF0aW9uX2VuZHBvaW50X2FkZHJlc3MnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBtZW1iZXJfY2x1c3RlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZW1iZXJDbHVzdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdtZW1iZXJfY2x1c3RlcnMnKTtcbiAgfVxuXG4gIC8vIG11bHRpX2F6X2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtdWx0aUF6RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdtdWx0aV9hel9lbmFibGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbm9kZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9kZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdub2RlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIG51bWJlcl9jYWNoZV9jbHVzdGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG51bWJlckNhY2hlQ2x1c3RlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdudW1iZXJfY2FjaGVfY2x1c3RlcnMnKTtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncG9ydCcpO1xuICB9XG5cbiAgLy8gcHJpbWFyeV9lbmRwb2ludF9hZGRyZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJpbWFyeUVuZHBvaW50QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByaW1hcnlfZW5kcG9pbnRfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gcmVhZGVyX2VuZHBvaW50X2FkZHJlc3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWFkZXJFbmRwb2ludEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWFkZXJfZW5kcG9pbnRfYWRkcmVzcycpO1xuICB9XG5cbiAgLy8gcmVwbGljYXRpb25fZ3JvdXBfZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXBsaWNhdGlvbkdyb3VwRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBsaWNhdGlvbl9ncm91cF9kZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gcmVwbGljYXRpb25fZ3JvdXBfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVwbGljYXRpb25Hcm91cElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXBsaWNhdGlvbkdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXBsaWNhdGlvbl9ncm91cF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVwbGljYXRpb25Hcm91cElkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXBsaWNhdGlvbkdyb3VwSWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVwbGljYXRpb25Hcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcGxpY2F0aW9uR3JvdXBJZDtcbiAgfVxuXG4gIC8vIHNuYXBzaG90X3JldGVudGlvbl9saW1pdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNuYXBzaG90UmV0ZW50aW9uTGltaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzbmFwc2hvdF9yZXRlbnRpb25fbGltaXQnKTtcbiAgfVxuXG4gIC8vIHNuYXBzaG90X3dpbmRvdyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNuYXBzaG90V2luZG93KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc25hcHNob3Rfd2luZG93Jyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcGxpY2F0aW9uX2dyb3VwX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9yZXBsaWNhdGlvbkdyb3VwSWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==