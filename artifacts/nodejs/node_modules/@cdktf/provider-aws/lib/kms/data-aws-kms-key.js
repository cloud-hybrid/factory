"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsKmsKey = exports.DataAwsKmsKeyMultiRegionConfiguration = exports.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys = exports.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsKmsKeyMultiRegionConfigurationPrimaryKey extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // region - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get region() {
        return this.getStringAttribute('region');
    }
}
exports.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey = DataAwsKmsKeyMultiRegionConfigurationPrimaryKey;
_a = JSII_RTTI_SYMBOL_1;
DataAwsKmsKeyMultiRegionConfigurationPrimaryKey[_a] = { fqn: "@cdktf/provider-aws.kms.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsKmsKeyMultiRegionConfigurationReplicaKeys extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    // region - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get region() {
        return this.getStringAttribute('region');
    }
}
exports.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys = DataAwsKmsKeyMultiRegionConfigurationReplicaKeys;
_b = JSII_RTTI_SYMBOL_1;
DataAwsKmsKeyMultiRegionConfigurationReplicaKeys[_b] = { fqn: "@cdktf/provider-aws.kms.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsKmsKeyMultiRegionConfiguration extends cdktf.ComplexComputedList {
    // multi_region_key_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get multiRegionKeyType() {
        return this.getStringAttribute('multi_region_key_type');
    }
    // primary_key - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get primaryKey() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('primary_key');
    }
    // replica_keys - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get replicaKeys() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('replica_keys');
    }
}
exports.DataAwsKmsKeyMultiRegionConfiguration = DataAwsKmsKeyMultiRegionConfiguration;
_c = JSII_RTTI_SYMBOL_1;
DataAwsKmsKeyMultiRegionConfiguration[_c] = { fqn: "@cdktf/provider-aws.kms.DataAwsKmsKeyMultiRegionConfiguration", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key}.
 *
 * @stability stable
 */
class DataAwsKmsKey extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_kms_key',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._grantTokens = config.grantTokens;
        this._keyId = config.keyId;
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
    // aws_account_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    // creation_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get creationDate() {
        return this.getStringAttribute('creation_date');
    }
    // customer_master_key_spec - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get customerMasterKeySpec() {
        return this.getStringAttribute('customer_master_key_spec');
    }
    // deletion_date - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deletionDate() {
        return this.getStringAttribute('deletion_date');
    }
    // description - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    // enabled - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // expiration_model - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get expirationModel() {
        return this.getStringAttribute('expiration_model');
    }
    /**
     * @stability stable
     */
    get grantTokens() {
        return this.getListAttribute('grant_tokens');
    }
    /**
     * @stability stable
     */
    set grantTokens(value) {
        this._grantTokens = value;
    }
    /**
     * @stability stable
     */
    resetGrantTokens() {
        this._grantTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grantTokensInput() {
        return this._grantTokens;
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
    get keyId() {
        return this.getStringAttribute('key_id');
    }
    /**
     * @stability stable
     */
    set keyId(value) {
        this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyIdInput() {
        return this._keyId;
    }
    // key_manager - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyManager() {
        return this.getStringAttribute('key_manager');
    }
    // key_state - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyState() {
        return this.getStringAttribute('key_state');
    }
    // key_usage - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get keyUsage() {
        return this.getStringAttribute('key_usage');
    }
    // multi_region - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get multiRegion() {
        return this.getBooleanAttribute('multi_region');
    }
    // multi_region_configuration - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    multiRegionConfiguration(index) {
        return new DataAwsKmsKeyMultiRegionConfiguration(this, 'multi_region_configuration', index);
    }
    // origin - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get origin() {
        return this.getStringAttribute('origin');
    }
    // valid_to - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get validTo() {
        return this.getStringAttribute('valid_to');
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            grant_tokens: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTokens),
            key_id: cdktf.stringToTerraform(this._keyId),
        };
    }
}
exports.DataAwsKmsKey = DataAwsKmsKey;
_d = JSII_RTTI_SYMBOL_1;
DataAwsKmsKey[_d] = { fqn: "@cdktf/provider-aws.kms.DataAwsKmsKey", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsKmsKey.tfResourceType = "aws_kms_key";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mta21zLWtleS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9rbXMvZGF0YS1hd3Mta21zLWtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVMvQixNQUFhLCtDQUFnRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFNUYseURBQXlEOzs7O0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7QUFWSCwwR0FXQzs7Ozs7O0FBQ0QsTUFBYSxnREFBaUQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdGLHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNERBQTREOzs7O0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O0FBVkgsNEdBV0M7Ozs7OztBQUNELE1BQWEscUNBQXNDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRiwyRUFBMkU7Ozs7SUFDM0UsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsaUVBQWlFOzs7O0lBQ2pFLElBQVcsVUFBVTtRQUNuQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDOUQsQ0FBQztJQUVELGtFQUFrRTs7OztJQUNsRSxJQUFXLFdBQVc7UUFDcEIsb0RBQW9E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RUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QyxDQUFDO0lBQ0osQ0FBQzs7QUFySkgsc0NBc0pDOzs7QUFwSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw0QkFBYyxHQUFXLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NLbXNLZXlDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGdyYW50VG9rZW5zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXlJZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NLbXNLZXlNdWx0aVJlZ2lvbkNvbmZpZ3VyYXRpb25QcmltYXJ5S2V5IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyByZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpb24nKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NLbXNLZXlNdWx0aVJlZ2lvbkNvbmZpZ3VyYXRpb25SZXBsaWNhS2V5cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FybicpO1xuICB9XG5cbiAgLy8gcmVnaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaW9uJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzS21zS2V5TXVsdGlSZWdpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbXVsdGlfcmVnaW9uX2tleV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbXVsdGlSZWdpb25LZXlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbXVsdGlfcmVnaW9uX2tleV90eXBlJyk7XG4gIH1cblxuICAvLyBwcmltYXJ5X2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByaW1hcnlLZXkoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ByaW1hcnlfa2V5JykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmVwbGljYV9rZXlzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVwbGljYUtleXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JlcGxpY2Ffa2V5cycpIGFzIGFueTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c0ttc0tleSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2ttc19rZXlcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzS21zS2V5Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3Nfa21zX2tleScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9ncmFudFRva2VucyA9IGNvbmZpZy5ncmFudFRva2VucztcbiAgICB0aGlzLl9rZXlJZCA9IGNvbmZpZy5rZXlJZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBhd3NfYWNjb3VudF9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF3c0FjY291bnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F3c19hY2NvdW50X2lkJyk7XG4gIH1cblxuICAvLyBjcmVhdGlvbl9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRpb25EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRpb25fZGF0ZScpO1xuICB9XG5cbiAgLy8gY3VzdG9tZXJfbWFzdGVyX2tleV9zcGVjIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3VzdG9tZXJNYXN0ZXJLZXlTcGVjKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3VzdG9tZXJfbWFzdGVyX2tleV9zcGVjJyk7XG4gIH1cblxuICAvLyBkZWxldGlvbl9kYXRlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsZXRpb25EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsZXRpb25fZGF0ZScpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXhwaXJhdGlvbl9tb2RlbCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4cGlyYXRpb25Nb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4cGlyYXRpb25fbW9kZWwnKTtcbiAgfVxuXG4gIC8vIGdyYW50X3Rva2VucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ncmFudFRva2Vucz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBncmFudFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdncmFudF90b2tlbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdyYW50VG9rZW5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2dyYW50VG9rZW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3JhbnRUb2tlbnMoKSB7XG4gICAgdGhpcy5fZ3JhbnRUb2tlbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGdyYW50VG9rZW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYW50VG9rZW5zO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGtleV9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9rZXlJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXlJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrZXlJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlJZDtcbiAgfVxuXG4gIC8vIGtleV9tYW5hZ2VyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5TWFuYWdlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV9tYW5hZ2VyJyk7XG4gIH1cblxuICAvLyBrZXlfc3RhdGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV9zdGF0ZScpO1xuICB9XG5cbiAgLy8ga2V5X3VzYWdlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5VXNhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfdXNhZ2UnKTtcbiAgfVxuXG4gIC8vIG11bHRpX3JlZ2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG11bHRpUmVnaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ211bHRpX3JlZ2lvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG11bHRpX3JlZ2lvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBtdWx0aVJlZ2lvbkNvbmZpZ3VyYXRpb24oaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c0ttc0tleU11bHRpUmVnaW9uQ29uZmlndXJhdGlvbih0aGlzLCAnbXVsdGlfcmVnaW9uX2NvbmZpZ3VyYXRpb24nLCBpbmRleCk7XG4gIH1cblxuICAvLyBvcmlnaW4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcmlnaW4nKTtcbiAgfVxuXG4gIC8vIHZhbGlkX3RvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsaWRUbygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbGlkX3RvJyk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyYW50X3Rva2VuczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fZ3JhbnRUb2tlbnMpLFxuICAgICAga2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9rZXlJZCksXG4gICAgfTtcbiAgfVxufVxuIl19