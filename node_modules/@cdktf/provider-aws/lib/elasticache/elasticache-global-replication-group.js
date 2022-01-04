"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticacheGlobalReplicationGroup = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group}.
 *
 * @stability stable
 */
class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticache_global_replication_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._globalReplicationGroupDescription = config.globalReplicationGroupDescription;
        this._globalReplicationGroupIdSuffix = config.globalReplicationGroupIdSuffix;
        this._primaryReplicationGroupId = config.primaryReplicationGroupId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // actual_engine_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get actualEngineVersion() {
        return this.getStringAttribute('actual_engine_version');
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // at_rest_encryption_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get atRestEncryptionEnabled() {
        return this.getBooleanAttribute('at_rest_encryption_enabled');
    }
    // auth_token_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authTokenEnabled() {
        return this.getBooleanAttribute('auth_token_enabled');
    }
    // cache_node_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cacheNodeType() {
        return this.getStringAttribute('cache_node_type');
    }
    // cluster_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get clusterEnabled() {
        return this.getBooleanAttribute('cluster_enabled');
    }
    // engine - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get engine() {
        return this.getStringAttribute('engine');
    }
    // engine_version_actual - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get engineVersionActual() {
        return this.getStringAttribute('engine_version_actual');
    }
    /**
     * @stability stable
     */
    get globalReplicationGroupDescription() {
        return this.getStringAttribute('global_replication_group_description');
    }
    /**
     * @stability stable
     */
    set globalReplicationGroupDescription(value) {
        this._globalReplicationGroupDescription = value;
    }
    /**
     * @stability stable
     */
    resetGlobalReplicationGroupDescription() {
        this._globalReplicationGroupDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get globalReplicationGroupDescriptionInput() {
        return this._globalReplicationGroupDescription;
    }
    // global_replication_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get globalReplicationGroupId() {
        return this.getStringAttribute('global_replication_group_id');
    }
    /**
     * @stability stable
     */
    get globalReplicationGroupIdSuffix() {
        return this.getStringAttribute('global_replication_group_id_suffix');
    }
    /**
     * @stability stable
     */
    set globalReplicationGroupIdSuffix(value) {
        this._globalReplicationGroupIdSuffix = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get globalReplicationGroupIdSuffixInput() {
        return this._globalReplicationGroupIdSuffix;
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
    get primaryReplicationGroupId() {
        return this.getStringAttribute('primary_replication_group_id');
    }
    /**
     * @stability stable
     */
    set primaryReplicationGroupId(value) {
        this._primaryReplicationGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get primaryReplicationGroupIdInput() {
        return this._primaryReplicationGroupId;
    }
    // transit_encryption_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get transitEncryptionEnabled() {
        return this.getBooleanAttribute('transit_encryption_enabled');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            global_replication_group_description: cdktf.stringToTerraform(this._globalReplicationGroupDescription),
            global_replication_group_id_suffix: cdktf.stringToTerraform(this._globalReplicationGroupIdSuffix),
            primary_replication_group_id: cdktf.stringToTerraform(this._primaryReplicationGroupId),
        };
    }
}
exports.ElasticacheGlobalReplicationGroup = ElasticacheGlobalReplicationGroup;
_a = JSII_RTTI_SYMBOL_1;
ElasticacheGlobalReplicationGroup[_a] = { fqn: "@cdktf/provider-aws.elasticache.ElasticacheGlobalReplicationGroup", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ElasticacheGlobalReplicationGroup.tfResourceType = "aws_elasticache_global_replication_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpY2FjaGUtZ2xvYmFsLXJlcGxpY2F0aW9uLWdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VsYXN0aWNhY2hlL2VsYXN0aWNhY2hlLWdsb2JhbC1yZXBsaWNhdGlvbi1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7Ozs7O0FBYS9CLE1BQWEsaUNBQWtDLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQU81RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7Ozs7Ozs7O0lBR2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBK0M7UUFDOUYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwwQ0FBMEM7WUFDakUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFDbkYsSUFBSSxDQUFDLCtCQUErQixHQUFHLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztRQUM3RSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO0lBQ3JFLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiwyRUFBMkU7Ozs7SUFDM0UsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFr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SSxDQUFDLCtCQUErQixDQUFDO1lBQ2pHLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7U0FDdkYsQ0FBQztJQUNKLENBQUM7O0FBM0lILDhFQTRJQzs7O0FBMUlDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csZ0RBQWMsR0FBVywwQ0FBMEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBFbGFzdGljYWNoZUdsb2JhbFJlcGxpY2F0aW9uR3JvdXBDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnbG9iYWxSZXBsaWNhdGlvbkdyb3VwRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBnbG9iYWxSZXBsaWNhdGlvbkdyb3VwSWRTdWZmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW1hcnlSZXBsaWNhdGlvbkdyb3VwSWQ6IHN0cmluZztcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBFbGFzdGljYWNoZUdsb2JhbFJlcGxpY2F0aW9uR3JvdXAgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWxhc3RpY2FjaGVfZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRWxhc3RpY2FjaGVHbG9iYWxSZXBsaWNhdGlvbkdyb3VwQ29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZWxhc3RpY2FjaGVfZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2dsb2JhbFJlcGxpY2F0aW9uR3JvdXBEZXNjcmlwdGlvbiA9IGNvbmZpZy5nbG9iYWxSZXBsaWNhdGlvbkdyb3VwRGVzY3JpcHRpb247XG4gICAgdGhpcy5fZ2xvYmFsUmVwbGljYXRpb25Hcm91cElkU3VmZml4ID0gY29uZmlnLmdsb2JhbFJlcGxpY2F0aW9uR3JvdXBJZFN1ZmZpeDtcbiAgICB0aGlzLl9wcmltYXJ5UmVwbGljYXRpb25Hcm91cElkID0gY29uZmlnLnByaW1hcnlSZXBsaWNhdGlvbkdyb3VwSWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjdHVhbF9lbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjdHVhbEVuZ2luZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhY3R1YWxfZW5naW5lX3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gYXRfcmVzdF9lbmNyeXB0aW9uX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdFJlc3RFbmNyeXB0aW9uRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhdF9yZXN0X2VuY3J5cHRpb25fZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGF1dGhfdG9rZW5fZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dGhUb2tlbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnYXV0aF90b2tlbl9lbmFibGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY2FjaGVfbm9kZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2FjaGVOb2RlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhY2hlX25vZGVfdHlwZScpO1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9lbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2x1c3RlckVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY2x1c3Rlcl9lbmFibGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZW5naW5lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lJyk7XG4gIH1cblxuICAvLyBlbmdpbmVfdmVyc2lvbl9hY3R1YWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmdpbmVWZXJzaW9uQWN0dWFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lX3ZlcnNpb25fYWN0dWFsJyk7XG4gIH1cblxuICAvLyBnbG9iYWxfcmVwbGljYXRpb25fZ3JvdXBfZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZ2xvYmFsUmVwbGljYXRpb25Hcm91cERlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBnbG9iYWxSZXBsaWNhdGlvbkdyb3VwRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnbG9iYWxfcmVwbGljYXRpb25fZ3JvdXBfZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdsb2JhbFJlcGxpY2F0aW9uR3JvdXBEZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2xvYmFsUmVwbGljYXRpb25Hcm91cERlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R2xvYmFsUmVwbGljYXRpb25Hcm91cERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2dsb2JhbFJlcGxpY2F0aW9uR3JvdXBEZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ2xvYmFsUmVwbGljYXRpb25Hcm91cERlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dsb2JhbFJlcGxpY2F0aW9uR3JvdXBEZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGdsb2JhbF9yZXBsaWNhdGlvbl9ncm91cF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdsb2JhbFJlcGxpY2F0aW9uR3JvdXBJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dsb2JhbF9yZXBsaWNhdGlvbl9ncm91cF9pZCcpO1xuICB9XG5cbiAgLy8gZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwX2lkX3N1ZmZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9nbG9iYWxSZXBsaWNhdGlvbkdyb3VwSWRTdWZmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGdsb2JhbFJlcGxpY2F0aW9uR3JvdXBJZFN1ZmZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2dsb2JhbF9yZXBsaWNhdGlvbl9ncm91cF9pZF9zdWZmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdsb2JhbFJlcGxpY2F0aW9uR3JvdXBJZFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2xvYmFsUmVwbGljYXRpb25Hcm91cElkU3VmZml4ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdsb2JhbFJlcGxpY2F0aW9uR3JvdXBJZFN1ZmZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9nbG9iYWxSZXBsaWNhdGlvbkdyb3VwSWRTdWZmaXg7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcHJpbWFyeV9yZXBsaWNhdGlvbl9ncm91cF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wcmltYXJ5UmVwbGljYXRpb25Hcm91cElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmltYXJ5UmVwbGljYXRpb25Hcm91cElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJpbWFyeV9yZXBsaWNhdGlvbl9ncm91cF9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJpbWFyeVJlcGxpY2F0aW9uR3JvdXBJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJpbWFyeVJlcGxpY2F0aW9uR3JvdXBJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmltYXJ5UmVwbGljYXRpb25Hcm91cElkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlSZXBsaWNhdGlvbkdyb3VwSWQ7XG4gIH1cblxuICAvLyB0cmFuc2l0X2VuY3J5cHRpb25fZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyYW5zaXRFbmNyeXB0aW9uRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd0cmFuc2l0X2VuY3J5cHRpb25fZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwX2Rlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9nbG9iYWxSZXBsaWNhdGlvbkdyb3VwRGVzY3JpcHRpb24pLFxuICAgICAgZ2xvYmFsX3JlcGxpY2F0aW9uX2dyb3VwX2lkX3N1ZmZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZ2xvYmFsUmVwbGljYXRpb25Hcm91cElkU3VmZml4KSxcbiAgICAgIHByaW1hcnlfcmVwbGljYXRpb25fZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ByaW1hcnlSZXBsaWNhdGlvbkdyb3VwSWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==