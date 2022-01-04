"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsMqBroker = exports.DataAwsMqBrokerUser = exports.DataAwsMqBrokerMaintenanceWindowStartTime = exports.DataAwsMqBrokerLogs = exports.DataAwsMqBrokerLdapServerMetadata = exports.DataAwsMqBrokerInstances = exports.DataAwsMqBrokerEncryptionOptions = exports.DataAwsMqBrokerConfiguration = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * @stability stable
 */
class DataAwsMqBrokerConfiguration extends cdktf.ComplexComputedList {
    // id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // revision - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get revision() {
        return this.getNumberAttribute('revision');
    }
}
exports.DataAwsMqBrokerConfiguration = DataAwsMqBrokerConfiguration;
_a = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerConfiguration[_a] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBrokerConfiguration", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsMqBrokerEncryptionOptions extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // use_aws_owned_key - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get useAwsOwnedKey() {
        return this.getBooleanAttribute('use_aws_owned_key');
    }
}
exports.DataAwsMqBrokerEncryptionOptions = DataAwsMqBrokerEncryptionOptions;
_b = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerEncryptionOptions[_b] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBrokerEncryptionOptions", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsMqBrokerInstances extends cdktf.ComplexComputedList {
    // console_url - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get consoleUrl() {
        return this.getStringAttribute('console_url');
    }
    // endpoints - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get endpoints() {
        return this.getListAttribute('endpoints');
    }
    // ip_address - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
}
exports.DataAwsMqBrokerInstances = DataAwsMqBrokerInstances;
_c = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerInstances[_c] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBrokerInstances", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsMqBrokerLdapServerMetadata extends cdktf.ComplexComputedList {
    // hosts - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hosts() {
        return this.getListAttribute('hosts');
    }
    // role_base - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get roleBase() {
        return this.getStringAttribute('role_base');
    }
    // role_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get roleName() {
        return this.getStringAttribute('role_name');
    }
    // role_search_matching - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get roleSearchMatching() {
        return this.getStringAttribute('role_search_matching');
    }
    // role_search_subtree - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get roleSearchSubtree() {
        return this.getBooleanAttribute('role_search_subtree');
    }
    // service_account_password - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get serviceAccountPassword() {
        return this.getStringAttribute('service_account_password');
    }
    // service_account_username - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get serviceAccountUsername() {
        return this.getStringAttribute('service_account_username');
    }
    // user_base - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userBase() {
        return this.getStringAttribute('user_base');
    }
    // user_role_name - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userRoleName() {
        return this.getStringAttribute('user_role_name');
    }
    // user_search_matching - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userSearchMatching() {
        return this.getStringAttribute('user_search_matching');
    }
    // user_search_subtree - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get userSearchSubtree() {
        return this.getBooleanAttribute('user_search_subtree');
    }
}
exports.DataAwsMqBrokerLdapServerMetadata = DataAwsMqBrokerLdapServerMetadata;
_d = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerLdapServerMetadata[_d] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBrokerLdapServerMetadata", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsMqBrokerLogs extends cdktf.ComplexComputedList {
    // audit - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get audit() {
        return this.getStringAttribute('audit');
    }
    // general - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get general() {
        return this.getBooleanAttribute('general');
    }
}
exports.DataAwsMqBrokerLogs = DataAwsMqBrokerLogs;
_e = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerLogs[_e] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBrokerLogs", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsMqBrokerMaintenanceWindowStartTime extends cdktf.ComplexComputedList {
    // day_of_week - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get dayOfWeek() {
        return this.getStringAttribute('day_of_week');
    }
    // time_of_day - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get timeOfDay() {
        return this.getStringAttribute('time_of_day');
    }
    // time_zone - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
}
exports.DataAwsMqBrokerMaintenanceWindowStartTime = DataAwsMqBrokerMaintenanceWindowStartTime;
_f = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerMaintenanceWindowStartTime[_f] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBrokerMaintenanceWindowStartTime", version: "3.0.1" };
/**
 * @stability stable
 */
class DataAwsMqBrokerUser extends cdktf.ComplexComputedList {
    // console_access - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get consoleAccess() {
        return this.getBooleanAttribute('console_access');
    }
    // groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get groups() {
        return this.getListAttribute('groups');
    }
    // username - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsMqBrokerUser = DataAwsMqBrokerUser;
_g = JSII_RTTI_SYMBOL_1;
DataAwsMqBrokerUser[_g] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBrokerUser", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker}.
 *
 * @stability stable
 */
class DataAwsMqBroker extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_mq_broker',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._brokerId = config.brokerId;
        this._brokerName = config.brokerName;
        this._tags = config.tags;
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
    // authentication_strategy - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get authenticationStrategy() {
        return this.getStringAttribute('authentication_strategy');
    }
    // auto_minor_version_upgrade - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }
    /**
     * @stability stable
     */
    get brokerId() {
        return this.getStringAttribute('broker_id');
    }
    /**
     * @stability stable
     */
    set brokerId(value) {
        this._brokerId = value;
    }
    /**
     * @stability stable
     */
    resetBrokerId() {
        this._brokerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get brokerIdInput() {
        return this._brokerId;
    }
    /**
     * @stability stable
     */
    get brokerName() {
        return this.getStringAttribute('broker_name');
    }
    /**
     * @stability stable
     */
    set brokerName(value) {
        this._brokerName = value;
    }
    /**
     * @stability stable
     */
    resetBrokerName() {
        this._brokerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get brokerNameInput() {
        return this._brokerName;
    }
    // configuration - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    configuration(index) {
        return new DataAwsMqBrokerConfiguration(this, 'configuration', index);
    }
    // deployment_mode - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get deploymentMode() {
        return this.getStringAttribute('deployment_mode');
    }
    // encryption_options - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    encryptionOptions(index) {
        return new DataAwsMqBrokerEncryptionOptions(this, 'encryption_options', index);
    }
    // engine_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get engineType() {
        return this.getStringAttribute('engine_type');
    }
    // engine_version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    // host_instance_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get hostInstanceType() {
        return this.getStringAttribute('host_instance_type');
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // instances - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    instances(index) {
        return new DataAwsMqBrokerInstances(this, 'instances', index);
    }
    // ldap_server_metadata - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    ldapServerMetadata(index) {
        return new DataAwsMqBrokerLdapServerMetadata(this, 'ldap_server_metadata', index);
    }
    // logs - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    logs(index) {
        return new DataAwsMqBrokerLogs(this, 'logs', index);
    }
    // maintenance_window_start_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    maintenanceWindowStartTime(index) {
        return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index);
    }
    // publicly_accessible - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    // security_groups - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // storage_type - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get storageType() {
        return this.getStringAttribute('storage_type');
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
    // user - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    user(index) {
        return new DataAwsMqBrokerUser(this, 'user', index);
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            broker_id: cdktf.stringToTerraform(this._brokerId),
            broker_name: cdktf.stringToTerraform(this._brokerName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
exports.DataAwsMqBroker = DataAwsMqBroker;
_h = JSII_RTTI_SYMBOL_1;
DataAwsMqBroker[_h] = { fqn: "@cdktf/provider-aws.mq.DataAwsMqBroker", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DataAwsMqBroker.tfResourceType = "aws_mq_broker";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbXEtYnJva2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21xL2RhdGEtYXdzLW1xLWJyb2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjs7OztBQVcvQixNQUFhLDRCQUE2QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFekUsd0RBQXdEOzs7O0lBQ3hELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4REFBOEQ7Ozs7SUFDOUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0FBVkgsb0VBV0M7Ozs7OztBQUNELE1BQWEsZ0NBQWlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3RSxnRUFBZ0U7Ozs7SUFDaEUsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx1RUFBdUU7Ozs7SUFDdkUsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFRLENBQUM7SUFDOUQsQ0FBQzs7QUFWSCw0RUFXQzs7Ozs7O0FBQ0QsTUFBYSx3QkFBeUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXJFLGlFQUFpRTs7OztJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELCtEQUErRDs7OztJQUMvRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdFQUFnRTs7OztJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMs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QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDOztBQTFMSCwwQ0EyTEM7OztBQXpMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDhCQUFjLEdBQVcsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzTXFCcm9rZXJDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBicm9rZXJJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnJva2VyTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c01xQnJva2VyQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gcmV2aXNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXZpc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JldmlzaW9uJyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTXFCcm9rZXJFbmNyeXB0aW9uT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGttc19rZXlfaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNLZXlJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfaWQnKTtcbiAgfVxuXG4gIC8vIHVzZV9hd3Nfb3duZWRfa2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlQXdzT3duZWRLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgndXNlX2F3c19vd25lZF9rZXknKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTXFCcm9rZXJJbnN0YW5jZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb25zb2xlX3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnNvbGVVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25zb2xlX3VybCcpO1xuICB9XG5cbiAgLy8gZW5kcG9pbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2VuZHBvaW50cycpO1xuICB9XG5cbiAgLy8gaXBfYWRkcmVzcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlwQWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lwX2FkZHJlc3MnKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NNcUJyb2tlckxkYXBTZXJ2ZXJNZXRhZGF0YSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGhvc3RzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaG9zdHMnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYmFzZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVCYXNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9iYXNlJyk7XG4gIH1cblxuICAvLyByb2xlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfbmFtZScpO1xuICB9XG5cbiAgLy8gcm9sZV9zZWFyY2hfbWF0Y2hpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlU2VhcmNoTWF0Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX3NlYXJjaF9tYXRjaGluZycpO1xuICB9XG5cbiAgLy8gcm9sZV9zZWFyY2hfc3VidHJlZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVTZWFyY2hTdWJ0cmVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JvbGVfc2VhcmNoX3N1YnRyZWUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2FjY291bnRfcGFzc3dvcmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjb3VudFBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9hY2NvdW50X3Bhc3N3b3JkJyk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2FjY291bnRfdXNlcm5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjb3VudFVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9hY2NvdW50X3VzZXJuYW1lJyk7XG4gIH1cblxuICAvLyB1c2VyX2Jhc2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyQmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJfYmFzZScpO1xuICB9XG5cbiAgLy8gdXNlcl9yb2xlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyUm9sZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX3JvbGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdXNlcl9zZWFyY2hfbWF0Y2hpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB1c2VyU2VhcmNoTWF0Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VyX3NlYXJjaF9tYXRjaGluZycpO1xuICB9XG5cbiAgLy8gdXNlcl9zZWFyY2hfc3VidHJlZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVzZXJTZWFyY2hTdWJ0cmVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3VzZXJfc2VhcmNoX3N1YnRyZWUnKSBhcyBhbnk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzTXFCcm9rZXJMb2dzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXVkaXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1ZGl0Jyk7XG4gIH1cblxuICAvLyBnZW5lcmFsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ2VuZXJhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdnZW5lcmFsJykgYXMgYW55O1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c01xQnJva2VyTWFpbnRlbmFuY2VXaW5kb3dTdGFydFRpbWUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXlfb2Zfd2VlayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRheU9mV2VlaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RheV9vZl93ZWVrJyk7XG4gIH1cblxuICAvLyB0aW1lX29mX2RheSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWVPZkRheSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfb2ZfZGF5Jyk7XG4gIH1cblxuICAvLyB0aW1lX3pvbmUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0aW1lWm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RpbWVfem9uZScpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c01xQnJva2VyVXNlciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbnNvbGVfYWNjZXNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uc29sZUFjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb25zb2xlX2FjY2VzcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGdyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGdyb3VwcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdncm91cHMnKTtcbiAgfVxuXG4gIC8vIHVzZXJuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgRGF0YUF3c01xQnJva2VyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfbXFfYnJva2VyXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzTXFCcm9rZXJDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX21xX2Jyb2tlcicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9icm9rZXJJZCA9IGNvbmZpZy5icm9rZXJJZDtcbiAgICB0aGlzLl9icm9rZXJOYW1lID0gY29uZmlnLmJyb2tlck5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGF1dGhlbnRpY2F0aW9uX3N0cmF0ZWd5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXV0aGVudGljYXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhlbnRpY2F0aW9uX3N0cmF0ZWd5Jyk7XG4gIH1cblxuICAvLyBhdXRvX21pbm9yX3ZlcnNpb25fdXBncmFkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF1dG9NaW5vclZlcnNpb25VcGdyYWRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fbWlub3JfdmVyc2lvbl91cGdyYWRlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gYnJva2VyX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnJva2VySWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJyb2tlcklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnJva2VyX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBicm9rZXJJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnJva2VySWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCcm9rZXJJZCgpIHtcbiAgICB0aGlzLl9icm9rZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnJva2VySWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnJva2VySWQ7XG4gIH1cblxuICAvLyBicm9rZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Jyb2tlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJyb2tlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdicm9rZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnJva2VyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnJva2VyTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJyb2tlck5hbWUoKSB7XG4gICAgdGhpcy5fYnJva2VyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnJva2VyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9icm9rZXJOYW1lO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgY29uZmlndXJhdGlvbihpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTXFCcm9rZXJDb25maWd1cmF0aW9uKHRoaXMsICdjb25maWd1cmF0aW9uJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gZGVwbG95bWVudF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVwbG95bWVudE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXBsb3ltZW50X21vZGUnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZW5jcnlwdGlvbk9wdGlvbnMoaW5kZXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGF0YUF3c01xQnJva2VyRW5jcnlwdGlvbk9wdGlvbnModGhpcywgJ2VuY3J5cHRpb25fb3B0aW9ucycsIGluZGV4KTtcbiAgfVxuXG4gIC8vIGVuZ2luZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5naW5lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZ2luZV90eXBlJyk7XG4gIH1cblxuICAvLyBlbmdpbmVfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZ2luZVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmdpbmVfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gaG9zdF9pbnN0YW5jZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaG9zdEluc3RhbmNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hvc3RfaW5zdGFuY2VfdHlwZScpO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGluc3RhbmNlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgaW5zdGFuY2VzKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NNcUJyb2tlckluc3RhbmNlcyh0aGlzLCAnaW5zdGFuY2VzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gbGRhcF9zZXJ2ZXJfbWV0YWRhdGEgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGxkYXBTZXJ2ZXJNZXRhZGF0YShpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTXFCcm9rZXJMZGFwU2VydmVyTWV0YWRhdGEodGhpcywgJ2xkYXBfc2VydmVyX21ldGFkYXRhJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gbG9ncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgbG9ncyhpbmRleDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRhQXdzTXFCcm9rZXJMb2dzKHRoaXMsICdsb2dzJywgaW5kZXgpO1xuICB9XG5cbiAgLy8gbWFpbnRlbmFuY2Vfd2luZG93X3N0YXJ0X3RpbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIG1haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NNcUJyb2tlck1haW50ZW5hbmNlV2luZG93U3RhcnRUaW1lKHRoaXMsICdtYWludGVuYW5jZV93aW5kb3dfc3RhcnRfdGltZScsIGluZGV4KTtcbiAgfVxuXG4gIC8vIHB1YmxpY2x5X2FjY2Vzc2libGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwdWJsaWNseUFjY2Vzc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncHVibGljbHlfYWNjZXNzaWJsZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNlY3VyaXR5X2dyb3VwcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwcycpO1xuICB9XG5cbiAgLy8gc3RvcmFnZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RvcmFnZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdG9yYWdlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFncygpIHtcbiAgICB0aGlzLl90YWdzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3M7XG4gIH1cblxuICAvLyB1c2VyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyB1c2VyKGluZGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERhdGFBd3NNcUJyb2tlclVzZXIodGhpcywgJ3VzZXInLCBpbmRleCk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyb2tlcl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fYnJva2VySWQpLFxuICAgICAgYnJva2VyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Jyb2tlck5hbWUpLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgfTtcbiAgfVxufVxuIl19