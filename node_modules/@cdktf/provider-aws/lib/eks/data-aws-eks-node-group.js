"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsEksNodeGroup = exports.DataAwsEksNodeGroupScalingConfig = exports.DataAwsEksNodeGroupResources = exports.DataAwsEksNodeGroupResourcesAutoscalingGroups = exports.DataAwsEksNodeGroupRemoteAccess = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsEksNodeGroupRemoteAccess extends cdktf.ComplexComputedList {
    // ec2_ssh_key - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ec2SshKey() {
        return this.getStringAttribute('ec2_ssh_key');
    }
    // source_security_group_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get sourceSecurityGroupIds() {
        return this.getListAttribute('source_security_group_ids');
    }
}
exports.DataAwsEksNodeGroupRemoteAccess = DataAwsEksNodeGroupRemoteAccess;
_a = JSII_RTTI_SYMBOL_1;
DataAwsEksNodeGroupRemoteAccess[_a] = { fqn: "@cdktf/provider-aws.eks.DataAwsEksNodeGroupRemoteAccess", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsEksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
}
exports.DataAwsEksNodeGroupResourcesAutoscalingGroups = DataAwsEksNodeGroupResourcesAutoscalingGroups;
_b = JSII_RTTI_SYMBOL_1;
DataAwsEksNodeGroupResourcesAutoscalingGroups[_b] = { fqn: "@cdktf/provider-aws.eks.DataAwsEksNodeGroupResourcesAutoscalingGroups", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsEksNodeGroupResources extends cdktf.ComplexComputedList {
    // autoscaling_groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get autoscalingGroups() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('autoscaling_groups');
    }
    // remote_access_security_group_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get remoteAccessSecurityGroupId() {
        return this.getStringAttribute('remote_access_security_group_id');
    }
}
exports.DataAwsEksNodeGroupResources = DataAwsEksNodeGroupResources;
_c = JSII_RTTI_SYMBOL_1;
DataAwsEksNodeGroupResources[_c] = { fqn: "@cdktf/provider-aws.eks.DataAwsEksNodeGroupResources", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsEksNodeGroupScalingConfig extends cdktf.ComplexComputedList {
    // desired_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get desiredSize() {
        return this.getNumberAttribute('desired_size');
    }
    // max_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    // min_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
}
exports.DataAwsEksNodeGroupScalingConfig = DataAwsEksNodeGroupScalingConfig;
_d = JSII_RTTI_SYMBOL_1;
DataAwsEksNodeGroupScalingConfig[_d] = { fqn: "@cdktf/provider-aws.eks.DataAwsEksNodeGroupScalingConfig", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group}.
 *
 * @stability stable
 */
class DataAwsEksNodeGroup extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_eks_node_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clusterName = config.clusterName;
        this._nodeGroupName = config.nodeGroupName;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // ami_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get amiType() {
        return this.getStringAttribute('ami_type');
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
    get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    /**
     * @stability stable
     */
    set clusterName(value) {
        this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterNameInput() {
        return this._clusterName;
    }
    // disk_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get diskSize() {
        return this.getNumberAttribute('disk_size');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_types - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceTypes() {
        return this.getListAttribute('instance_types');
    }
    // labels - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    labels(key) {
        return new cdktf.StringMap(this, 'labels').lookup(key);
    }
    /**
     * @stability stable
     */
    get nodeGroupName() {
        return this.getStringAttribute('node_group_name');
    }
    /**
     * @stability stable
     */
    set nodeGroupName(value) {
        this._nodeGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nodeGroupNameInput() {
        return this._nodeGroupName;
    }
    // node_role_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get nodeRoleArn() {
        return this.getStringAttribute('node_role_arn');
    }
    // release_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get releaseVersion() {
        return this.getStringAttribute('release_version');
    }
    // remote_access - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    remoteAccess(index) {
        return new DataAwsEksNodeGroupRemoteAccess(this, 'remote_access', index);
    }
    // resources - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    resources(index) {
        return new DataAwsEksNodeGroupResources(this, 'resources', index);
    }
    // scaling_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    scalingConfig(index) {
        return new DataAwsEksNodeGroupScalingConfig(this, 'scaling_config', index);
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
    }
    // subnet_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    /**
     * @stability stable
     */
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    /**
     * @stability stable
     */
    set tags(value) {
        this._tags = value;
    }
    /**
     * @stability stable
     */
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsInput() {
        return this._tags;
    }
    // version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get version() {
        return this.getStringAttribute('version');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsEksNodeGroup = DataAwsEksNodeGroup;
_e = JSII_RTTI_SYMBOL_1;
DataAwsEksNodeGroup[_e] = { fqn: "@cdktf/provider-aws.eks.DataAwsEksNodeGroup", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsEksNodeGroup.tfResourceType = "aws_eks_node_group";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWtzLW5vZGUtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWtzL2RhdGEtYXdzLWVrcy1ub2RlLWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCOzs7O0FBVy9CLE1BQWEsK0JBQWdDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU1RSxpRUFBaUU7Ozs7SUFDakUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwrRUFBK0U7Ozs7SUFDL0UsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM1RCxDQUFDOztBQVZILDBFQVdDOzs7Ozs7QUFDRCxNQUFhLDZDQUE4QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFMUYsMERBQTBEOzs7O0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O0FBTEgsc0dBTUM7Ozs7OztBQUNELE1BQWEsNEJBQTZCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV6RSx3RUFBd0U7Ozs7SUFDeEUsSUFBVyxpQkFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFRLENBQUM7SUFDckUsQ0FBQztJQUVELHFGQUFxRjs7OztJQUNyRixJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O0FBWEgsb0VBWUM7Ozs7OztBQUNELE1BQWEsZ0NBQWlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3RSxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFD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QyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsNkRBQTZEOzs7O0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzdELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDOztBQTNKSCxrREE0SkM7OztBQTFKQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLGtDQUFjLEdBQVcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUF3c0Vrc05vZGVHcm91cENvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsdXN0ZXJOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm9kZUdyb3VwTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWtzTm9kZUdyb3VwUmVtb3RlQWNjZXNzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZWMyX3NzaF9rZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlYzJTc2hLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlYzJfc3NoX2tleScpO1xuICB9XG5cbiAgLy8gc291cmNlX3NlY3VyaXR5X2dyb3VwX2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZVNlY3VyaXR5R3JvdXBJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc291cmNlX3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0Vrc05vZGVHcm91cFJlc291cmNlc0F1dG9zY2FsaW5nR3JvdXBzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWtzTm9kZUdyb3VwUmVzb3VyY2VzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXV0b3NjYWxpbmdfZ3JvdXBzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0b3NjYWxpbmdHcm91cHMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2F1dG9zY2FsaW5nX2dyb3VwcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlbW90ZV9hY2Nlc3Nfc2VjdXJpdHlfZ3JvdXBfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZW1vdGVBY2Nlc3NTZWN1cml0eUdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZW1vdGVfYWNjZXNzX3NlY3VyaXR5X2dyb3VwX2lkJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWtzTm9kZUdyb3VwU2NhbGluZ0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRlc2lyZWRfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc2lyZWRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVzaXJlZF9zaXplJyk7XG4gIH1cblxuICAvLyBtYXhfc2l6ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1heFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfc2l6ZScpO1xuICB9XG5cbiAgLy8gbWluX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtaW5TaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbWluX3NpemUnKTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWtzTm9kZUdyb3VwIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWtzX25vZGVfZ3JvdXBcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NFa3NOb2RlR3JvdXBDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19la3Nfbm9kZV9ncm91cCcsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jbHVzdGVyTmFtZSA9IGNvbmZpZy5jbHVzdGVyTmFtZTtcbiAgICB0aGlzLl9ub2RlR3JvdXBOYW1lID0gY29uZmlnLm5vZGVHcm91cE5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhbWlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFtaVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbWlfdHlwZScpO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjbHVzdGVyX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2x1c3Rlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2x1c3Rlck5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2x1c3Rlck5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2x1c3Rlck5hbWU7XG4gIH1cblxuICAvLyBkaXNrX3NpemUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaXNrU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Rpc2tfc2l6ZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlX3R5cGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5zdGFuY2VUeXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdpbnN0YW5jZV90eXBlcycpO1xuICB9XG5cbiAgLy8gbGFiZWxzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBsYWJlbHMoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgY2RrdGYuU3RyaW5nTWFwKHRoaXMsICdsYWJlbHMnKS5sb29rdXAoa2V5KTtcbiAgfVxuXG4gIC8vIG5vZGVfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ub2RlR3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBub2RlR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm9kZV9ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBub2RlR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ub2RlR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vZGVHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZUdyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIG5vZGVfcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBub2RlUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vZGVfcm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHJlbGVhc2VfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJlbGVhc2VWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVsZWFzZV92ZXJzaW9uJyk7XG4gIH1cblxuICAvLyByZW1vdGVfYWNjZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyByZW1vdGVBY2Nlc3MoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0Vrc05vZGVHcm91cFJlbW90ZUFjY2Vzcyh0aGlzLCAncmVtb3RlX2FjY2VzcycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHJlc291cmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgcmVzb3VyY2VzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NFa3NOb2RlR3JvdXBSZXNvdXJjZXModGhpcywgJ3Jlc291cmNlcycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHNjYWxpbmdfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBzY2FsaW5nQ29uZmlnKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NFa3NOb2RlR3JvdXBTY2FsaW5nQ29uZmlnKHRoaXMsICdzY2FsaW5nX2NvbmZpZycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHN0YXR1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXR1cycpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmVyc2lvbicpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBjbHVzdGVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NsdXN0ZXJOYW1lKSxcbiAgICAgIG5vZGVfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbm9kZUdyb3VwTmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICB9O1xuICB9XG59XG4iXX0=