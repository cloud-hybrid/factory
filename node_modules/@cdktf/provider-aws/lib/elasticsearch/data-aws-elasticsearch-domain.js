"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsElasticsearchDomain = exports.DataAwsElasticsearchDomainVpcOptions = exports.DataAwsElasticsearchDomainSnapshotOptions = exports.DataAwsElasticsearchDomainNodeToNodeEncryption = exports.DataAwsElasticsearchDomainLogPublishingOptions = exports.DataAwsElasticsearchDomainEncryptionAtRest = exports.DataAwsElasticsearchDomainEbsOptions = exports.DataAwsElasticsearchDomainCognitoOptions = exports.DataAwsElasticsearchDomainClusterConfig = exports.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig = exports.DataAwsElasticsearchDomainAdvancedSecurityOptions = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainAdvancedSecurityOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // internal_user_database_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get internalUserDatabaseEnabled() {
        return this.getBooleanAttribute('internal_user_database_enabled');
    }
}
exports.DataAwsElasticsearchDomainAdvancedSecurityOptions = DataAwsElasticsearchDomainAdvancedSecurityOptions;
_a = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainAdvancedSecurityOptions[_a] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainAdvancedSecurityOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig extends cdktf.ComplexComputedList {
    // availability_zone_count - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get availabilityZoneCount() {
        return this.getNumberAttribute('availability_zone_count');
    }
}
exports.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig = DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig;
_b = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig[_b] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainClusterConfig extends cdktf.ComplexComputedList {
    // dedicated_master_count - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dedicatedMasterCount() {
        return this.getNumberAttribute('dedicated_master_count');
    }
    // dedicated_master_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dedicatedMasterEnabled() {
        return this.getBooleanAttribute('dedicated_master_enabled');
    }
    // dedicated_master_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dedicatedMasterType() {
        return this.getStringAttribute('dedicated_master_type');
    }
    // instance_count - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    // instance_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // warm_count - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get warmCount() {
        return this.getNumberAttribute('warm_count');
    }
    // warm_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get warmEnabled() {
        return this.getBooleanAttribute('warm_enabled');
    }
    // warm_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get warmType() {
        return this.getStringAttribute('warm_type');
    }
    // zone_awareness_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get zoneAwarenessConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('zone_awareness_config');
    }
    // zone_awareness_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get zoneAwarenessEnabled() {
        return this.getBooleanAttribute('zone_awareness_enabled');
    }
}
exports.DataAwsElasticsearchDomainClusterConfig = DataAwsElasticsearchDomainClusterConfig;
_c = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainClusterConfig[_c] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainClusterConfig", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainCognitoOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // identity_pool_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get identityPoolId() {
        return this.getStringAttribute('identity_pool_id');
    }
    // role_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // user_pool_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
}
exports.DataAwsElasticsearchDomainCognitoOptions = DataAwsElasticsearchDomainCognitoOptions;
_d = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainCognitoOptions[_d] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainCognitoOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainEbsOptions extends cdktf.ComplexComputedList {
    // ebs_enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ebsEnabled() {
        return this.getBooleanAttribute('ebs_enabled');
    }
    // iops - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // volume_size - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
exports.DataAwsElasticsearchDomainEbsOptions = DataAwsElasticsearchDomainEbsOptions;
_e = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainEbsOptions[_e] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainEbsOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainEncryptionAtRest extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // kms_key_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
}
exports.DataAwsElasticsearchDomainEncryptionAtRest = DataAwsElasticsearchDomainEncryptionAtRest;
_f = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainEncryptionAtRest[_f] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainEncryptionAtRest", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainLogPublishingOptions extends cdktf.ComplexComputedList {
    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get logType() {
        return this.getStringAttribute('log_type');
    }
}
exports.DataAwsElasticsearchDomainLogPublishingOptions = DataAwsElasticsearchDomainLogPublishingOptions;
_g = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainLogPublishingOptions[_g] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainLogPublishingOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainNodeToNodeEncryption extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
exports.DataAwsElasticsearchDomainNodeToNodeEncryption = DataAwsElasticsearchDomainNodeToNodeEncryption;
_h = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainNodeToNodeEncryption[_h] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainNodeToNodeEncryption", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainSnapshotOptions extends cdktf.ComplexComputedList {
    // automated_snapshot_start_hour - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get automatedSnapshotStartHour() {
        return this.getNumberAttribute('automated_snapshot_start_hour');
    }
}
exports.DataAwsElasticsearchDomainSnapshotOptions = DataAwsElasticsearchDomainSnapshotOptions;
_j = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainSnapshotOptions[_j] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainSnapshotOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsElasticsearchDomainVpcOptions extends cdktf.ComplexComputedList {
    // availability_zones - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // security_group_ids - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
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
}
exports.DataAwsElasticsearchDomainVpcOptions = DataAwsElasticsearchDomainVpcOptions;
_k = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomainVpcOptions[_k] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomainVpcOptions", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain}.
 *
 * @stability stable
 */
class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticsearch_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._domainName = config.domainName;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_policies - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get accessPolicies() {
        return this.getStringAttribute('access_policies');
    }
    // advanced_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    advancedOptions(key) {
        return new cdktf.StringMap(this, 'advanced_options').lookup(key);
    }
    // advanced_security_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    advancedSecurityOptions(index) {
        return new DataAwsElasticsearchDomainAdvancedSecurityOptions(this, 'advanced_security_options', index);
    }
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // cluster_config - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    clusterConfig(index) {
        return new DataAwsElasticsearchDomainClusterConfig(this, 'cluster_config', index);
    }
    // cognito_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    cognitoOptions(index) {
        return new DataAwsElasticsearchDomainCognitoOptions(this, 'cognito_options', index);
    }
    // created - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get created() {
        return this.getBooleanAttribute('created');
    }
    // deleted - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deleted() {
        return this.getBooleanAttribute('deleted');
    }
    // domain_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get domainId() {
        return this.getStringAttribute('domain_id');
    }
    /**
     * @stability stable
     */
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    /**
     * @stability stable
     */
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainNameInput() {
        return this._domainName;
    }
    // ebs_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    ebsOptions(index) {
        return new DataAwsElasticsearchDomainEbsOptions(this, 'ebs_options', index);
    }
    // elasticsearch_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get elasticsearchVersion() {
        return this.getStringAttribute('elasticsearch_version');
    }
    // encryption_at_rest - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    encryptionAtRest(index) {
        return new DataAwsElasticsearchDomainEncryptionAtRest(this, 'encryption_at_rest', index);
    }
    // endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // kibana_endpoint - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get kibanaEndpoint() {
        return this.getStringAttribute('kibana_endpoint');
    }
    // log_publishing_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    logPublishingOptions(index) {
        return new DataAwsElasticsearchDomainLogPublishingOptions(this, 'log_publishing_options', index);
    }
    // node_to_node_encryption - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    nodeToNodeEncryption(index) {
        return new DataAwsElasticsearchDomainNodeToNodeEncryption(this, 'node_to_node_encryption', index);
    }
    // processing - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get processing() {
        return this.getBooleanAttribute('processing');
    }
    // snapshot_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    snapshotOptions(index) {
        return new DataAwsElasticsearchDomainSnapshotOptions(this, 'snapshot_options', index);
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
    // vpc_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    vpcOptions(index) {
        return new DataAwsElasticsearchDomainVpcOptions(this, 'vpc_options', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsElasticsearchDomain = DataAwsElasticsearchDomain;
_l = JSII_RTTI_SYMBOL_1;
DataAwsElasticsearchDomain[_l] = { fqn: "@cdktf/provider-aws.elasticsearch.DataAwsElasticsearchDomain", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsElasticsearchDomain.tfResourceType = "aws_elasticsearch_domain";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWxhc3RpY3NlYXJjaC1kb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZWxhc3RpY3NlYXJjaC9kYXRhLWF3cy1lbGFzdGljc2VhcmNoLWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVMvQixNQUFhLGlEQUFrRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUYsNkRBQTZEOzs7O0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsb0ZBQW9GOzs7O0lBQ3BGLElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdDQUFnQyxDQUFRLENBQUM7SUFDM0UsQ0FBQzs7QUFWSCw4R0FXQzs7Ozs7O0FBQ0QsTUFBYSwwREFBMkQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXZHLDZFQUE2RTs7OztJQUM3RSxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7O0FBTEgsZ0lBTUM7Ozs7OztBQUNELE1BQWEsdUNBQXdDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwRiw0RUFBNEU7Ozs7SUFDNUUsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsOEVBQThFOzs7O0lBQzlFLElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDBCQUEwQixDQUFRLENBQUM7SUFDckUsQ0FBQztJQUVELDJFQUEyRTs7OztJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxvRUFBb0U7Ozs7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1FQUFtRTs7OztJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGtFQUFrRTs7OztJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFRLENBQUM7SUFDekQsQ0FBQztJQUVELCtEQUErRDs7OztJQUMvRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDJFQUEyRTs7OztJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQVEsQ0FBQztJQUN4RSxDQUFDO0lBRUQsNEVBQTRFOzs7O0lBQzVFLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHdCQUF3QixDQUFRLENBQUM7SUFDbkUsQ0FBQzs7QUFuREgsMEZBb0RDOzs7Ozs7QUFDRCxNQUFhLHdDQUF5QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckYsNkRBQTZEOzs7O0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0VBQXNFOzs7O0lBQ3RFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrRUFBa0U7Ozs7SUFDbEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O0FBcEJILDRGQXFCQzs7Ozs7O0FBQ0QsTUFBYSxvQ0FBcUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWpGLGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDeEQsQ0FBQztJQUVELDBEQUEwRDs7OztJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUVBQWlFOzs7O0lBQ2pFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsaUVBQWlFOzs7O0lBQ2pFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOztBQXBCSCxvRkFxQkM7Ozs7OztBQUNELE1BQWEsMENBQTJDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV2Riw2REFBNkQ7Ozs7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7SUFFRCxnRUFBZ0U7Ozs7SUFDaEUsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O0FBVkgsZ0dBV0M7Ozs7OztBQUNELE1BQWEsOENBQStDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUzRiw4RUFBOEU7Ozs7SUFDOUUsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsNkRBQTZEOzs7O0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsOERBQThEOzs7O0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOztBQWZILHdHQWdCQzs7Ozs7O0FBQ0QsTUFBYSw4Q0FBK0MsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTNGLDZEQUE2RDs7OztJQUM3RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQzs7QUFMSCx3R0FNQzs7Ozs7O0FBQ0QsTUFBYSx5Q0FBMEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRGLG1GQUFtRjs7OztJQUNuRixJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O0FBTEgsOEZBTUM7Ozs7OztBQUNELE1BQWEsb0NBQXFDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVqRix3RUFBd0U7Ozs7SUFDeEUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsd0VBQXdFOzs7O0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDREQUE0RDs7OztJQUM1RCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOztBQXBCSCxvRkFxQkM7Ozs7Ozs7O0FBR0QsTUFBYSwwQkFBMkIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBT3ZFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF3QztRQUN2RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIscUVBQXFFOzs7O0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzRUFBc0U7Ozs7SUFDL0QsZUFBZSxDQUFDLEdBQVc7UUFDaEMsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwrRUFBK0U7Ozs7SUFDeEUsdUJBQXVCLENBQUMsS0FBYTtRQUMxQyxPQUFPLElBQUksaURBQWlELENBQUMsSUFBSSxFQUFFLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCx5REFBeUQ7Ozs7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELG9FQUFvRTs7OztJQUM3RCxhQUFhLENBQUMsS0FBYTtRQUNoQyxPQUFPLElBQUksdUNBQXVDLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxxRUFBcUU7Ozs7SUFDOUQsY0FBYyxDQUFDLEtBQWE7UUFDakMsT0FBTyxJQUFJLHdDQUF3QyxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsNkRBQTZEOzs7O0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNkRBQTZEOzs7O0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDO0lBRUQsK0RBQStEOzs7O0lBQy9ELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUVBQWlFOzs7O0lBQzFELFVBQVUsQ0FBQyxLQUFhO1FBQzdCLE9BQU8sSUFBSSxvQ0FBb0MsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCwyRUFBMkU7Ozs7SUFDM0UsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsd0VBQXdFOzs7O0lBQ2pFLGdCQUFnQixDQUFDLEtBQWE7UUFDbkMsT0FBTyxJQUFJLDBDQUEwQyxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsOERBQThEOzs7O0lBQzlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxRUFBcUU7Ozs7SUFDckUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDRFQUE0RTs7OztJQUNyRSxvQkFBb0IsQ0FBQyxLQUFhO1FBQ3ZDLE9BQU8sSUFBSSw4Q0FBOEMsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELDZFQUE2RTs7OztJQUN0RSxvQkFBb0IsQ0FBQyxLQUFhO1FBQ3ZDLE9BQU8sSUFBSSw4Q0FBOEMsQ0FBQyxJQUFJLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUVELHNFQUFzRTs7OztJQUMvRCxlQUFlLENBQUMsS0FBYTtRQUNsQyxPQUFPLElBQUkseUNBQXlDLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsSUFBSSxDQUFDLEtBQW9EO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpRUFBaUU7Ozs7SUFDMUQsVUFBVSxDQUFDLEtBQWE7UUFDN0IsT0FBTyxJQUFJLG9DQUFvQyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDOztBQTFLSCxnRUEyS0M7OztBQXpLQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLHlDQUFjLEdBQVcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NFbGFzdGljc2VhcmNoRG9tYWluQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkFkdmFuY2VkU2VjdXJpdHlPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGludGVybmFsX3VzZXJfZGF0YWJhc2VfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGludGVybmFsVXNlckRhdGFiYXNlRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbnRlcm5hbF91c2VyX2RhdGFiYXNlX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkNsdXN0ZXJDb25maWdab25lQXdhcmVuZXNzQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVfY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdmFpbGFiaWxpdHlab25lQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhdmFpbGFiaWxpdHlfem9uZV9jb3VudCcpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5DbHVzdGVyQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGVkaWNhdGVkX21hc3Rlcl9jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlZGljYXRlZE1hc3RlckNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZGVkaWNhdGVkX21hc3Rlcl9jb3VudCcpO1xuICB9XG5cbiAgLy8gZGVkaWNhdGVkX21hc3Rlcl9lbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVkaWNhdGVkTWFzdGVyRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkZWRpY2F0ZWRfbWFzdGVyX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBkZWRpY2F0ZWRfbWFzdGVyX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWRpY2F0ZWRNYXN0ZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVkaWNhdGVkX21hc3Rlcl90eXBlJyk7XG4gIH1cblxuICAvLyBpbnN0YW5jZV9jb3VudCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnN0YW5jZV9jb3VudCcpO1xuICB9XG5cbiAgLy8gaW5zdGFuY2VfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luc3RhbmNlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHdhcm1fY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3YXJtQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCd3YXJtX2NvdW50Jyk7XG4gIH1cblxuICAvLyB3YXJtX2VuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3YXJtRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCd3YXJtX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB3YXJtX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3YXJtVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dhcm1fdHlwZScpO1xuICB9XG5cbiAgLy8gem9uZV9hd2FyZW5lc3NfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgem9uZUF3YXJlbmVzc0NvbmZpZygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnem9uZV9hd2FyZW5lc3NfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gem9uZV9hd2FyZW5lc3NfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHpvbmVBd2FyZW5lc3NFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3pvbmVfYXdhcmVuZXNzX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkNvZ25pdG9PcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkZW50aXR5X3Bvb2xfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZGVudGl0eVBvb2xJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkZW50aXR5X3Bvb2xfaWQnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB1c2VyX3Bvb2xfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyUG9vbElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXNlcl9wb29sX2lkJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkVic09wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlYnNfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVic0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZWJzX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpb3BzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW9wcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2lvcHMnKTtcbiAgfVxuXG4gIC8vIHZvbHVtZV9zaXplIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdm9sdW1lU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZvbHVtZV9zaXplJyk7XG4gIH1cblxuICAvLyB2b2x1bWVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZvbHVtZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2b2x1bWVfdHlwZScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5FbmNyeXB0aW9uQXRSZXN0IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NFbGFzdGljc2VhcmNoRG9tYWluTG9nUHVibGlzaGluZ09wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nR3JvdXBBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ19ncm91cF9hcm4nKTtcbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBsb2dfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfdHlwZScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5Ob2RlVG9Ob2RlRW5jcnlwdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpblNuYXBzaG90T3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF1dG9tYXRlZF9zbmFwc2hvdF9zdGFydF9ob3VyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0b21hdGVkU25hcHNob3RTdGFydEhvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdhdXRvbWF0ZWRfc25hcHNob3Rfc3RhcnRfaG91cicpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5WcGNPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXZhaWxhYmlsaXR5X3pvbmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmlsaXR5Wm9uZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYXZhaWxhYmlsaXR5X3pvbmVzJyk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cblxuICAvLyB2cGNfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZwY19pZCcpO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIERhdGFBd3NFbGFzdGljc2VhcmNoRG9tYWluIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZWxhc3RpY3NlYXJjaF9kb21haW5cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2VsYXN0aWNzZWFyY2hfZG9tYWluJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSBjb25maWcuZG9tYWluTmFtZTtcbiAgICB0aGlzLl90YWdzID0gY29uZmlnLnRhZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFjY2Vzc19wb2xpY2llcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc1BvbGljaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWNjZXNzX3BvbGljaWVzJyk7XG4gIH1cblxuICAvLyBhZHZhbmNlZF9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBhZHZhbmNlZE9wdGlvbnMoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgY2RrdGYuU3RyaW5nTWFwKHRoaXMsICdhZHZhbmNlZF9vcHRpb25zJykubG9va3VwKGtleSk7XG4gIH1cblxuICAvLyBhZHZhbmNlZF9zZWN1cml0eV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBhZHZhbmNlZFNlY3VyaXR5T3B0aW9ucyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkFkdmFuY2VkU2VjdXJpdHlPcHRpb25zKHRoaXMsICdhZHZhbmNlZF9zZWN1cml0eV9vcHRpb25zJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjbHVzdGVyX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgY2x1c3RlckNvbmZpZyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkNsdXN0ZXJDb25maWcodGhpcywgJ2NsdXN0ZXJfY29uZmlnJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gY29nbml0b19vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBjb2duaXRvT3B0aW9ucyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbkNvZ25pdG9PcHRpb25zKHRoaXMsICdjb2duaXRvX29wdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyBjcmVhdGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjcmVhdGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGVsZXRlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGVsZXRlZCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRvbWFpbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRvbWFpbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX2lkJyk7XG4gIH1cblxuICAvLyBkb21haW5fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kb21haW5OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkb21haW5OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRvbWFpbk5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvbWFpbk5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZG9tYWluTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kb21haW5OYW1lO1xuICB9XG5cbiAgLy8gZWJzX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGVic09wdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5FYnNPcHRpb25zKHRoaXMsICdlYnNfb3B0aW9ucycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGVsYXN0aWNzZWFyY2hfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2hWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZWxhc3RpY3NlYXJjaF92ZXJzaW9uJyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2F0X3Jlc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGVuY3J5cHRpb25BdFJlc3QoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5FbmNyeXB0aW9uQXRSZXN0KHRoaXMsICdlbmNyeXB0aW9uX2F0X3Jlc3QnLCBpbmRleCk7XG4gIH1cblxuICAvLyBlbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBraWJhbmFfZW5kcG9pbnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBraWJhbmFFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tpYmFuYV9lbmRwb2ludCcpO1xuICB9XG5cbiAgLy8gbG9nX3B1Ymxpc2hpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgbG9nUHVibGlzaGluZ09wdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5Mb2dQdWJsaXNoaW5nT3B0aW9ucyh0aGlzLCAnbG9nX3B1Ymxpc2hpbmdfb3B0aW9ucycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIG5vZGVfdG9fbm9kZV9lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBub2RlVG9Ob2RlRW5jcnlwdGlvbihpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzRWxhc3RpY3NlYXJjaERvbWFpbk5vZGVUb05vZGVFbmNyeXB0aW9uKHRoaXMsICdub2RlX3RvX25vZGVfZW5jcnlwdGlvbicsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHByb2Nlc3NpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9jZXNzaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3Byb2Nlc3NpbmcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzbmFwc2hvdF9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBzbmFwc2hvdE9wdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0VsYXN0aWNzZWFyY2hEb21haW5TbmFwc2hvdE9wdGlvbnModGhpcywgJ3NuYXBzaG90X29wdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyB0YWdzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHZwY19vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyB2cGNPcHRpb25zKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NFbGFzdGljc2VhcmNoRG9tYWluVnBjT3B0aW9ucyh0aGlzLCAndnBjX29wdGlvbnMnLCBpbmRleCk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kb21haW5OYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==