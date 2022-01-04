"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmsEndpoint = exports.DmsEndpointS3SettingsOutputReference = exports.dmsEndpointS3SettingsToTerraform = exports.DmsEndpointMongodbSettingsOutputReference = exports.dmsEndpointMongodbSettingsToTerraform = exports.DmsEndpointKinesisSettingsOutputReference = exports.dmsEndpointKinesisSettingsToTerraform = exports.DmsEndpointKafkaSettingsOutputReference = exports.dmsEndpointKafkaSettingsToTerraform = exports.DmsEndpointElasticsearchSettingsOutputReference = exports.dmsEndpointElasticsearchSettingsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function dmsEndpointElasticsearchSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        endpoint_uri: cdktf.stringToTerraform(struct.endpointUri),
        error_retry_duration: cdktf.numberToTerraform(struct.errorRetryDuration),
        full_load_error_percentage: cdktf.numberToTerraform(struct.fullLoadErrorPercentage),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn),
    };
}
exports.dmsEndpointElasticsearchSettingsToTerraform = dmsEndpointElasticsearchSettingsToTerraform;
/**
 * @stability stable
 */
class DmsEndpointElasticsearchSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._endpointUri) {
            hasAnyValues = true;
            internalValueResult.endpointUri = this._endpointUri;
        }
        if (this._errorRetryDuration) {
            hasAnyValues = true;
            internalValueResult.errorRetryDuration = this._errorRetryDuration;
        }
        if (this._fullLoadErrorPercentage) {
            hasAnyValues = true;
            internalValueResult.fullLoadErrorPercentage = this._fullLoadErrorPercentage;
        }
        if (this._serviceAccessRoleArn) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._endpointUri = undefined;
            this._errorRetryDuration = undefined;
            this._fullLoadErrorPercentage = undefined;
            this._serviceAccessRoleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._endpointUri = value.endpointUri;
            this._errorRetryDuration = value.errorRetryDuration;
            this._fullLoadErrorPercentage = value.fullLoadErrorPercentage;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
        }
    }
    /**
     * @stability stable
     */
    get endpointUri() {
        return this.getStringAttribute('endpoint_uri');
    }
    /**
     * @stability stable
     */
    set endpointUri(value) {
        this._endpointUri = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endpointUriInput() {
        return this._endpointUri;
    }
    /**
     * @stability stable
     */
    get errorRetryDuration() {
        return this.getNumberAttribute('error_retry_duration');
    }
    /**
     * @stability stable
     */
    set errorRetryDuration(value) {
        this._errorRetryDuration = value;
    }
    /**
     * @stability stable
     */
    resetErrorRetryDuration() {
        this._errorRetryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get errorRetryDurationInput() {
        return this._errorRetryDuration;
    }
    /**
     * @stability stable
     */
    get fullLoadErrorPercentage() {
        return this.getNumberAttribute('full_load_error_percentage');
    }
    /**
     * @stability stable
     */
    set fullLoadErrorPercentage(value) {
        this._fullLoadErrorPercentage = value;
    }
    /**
     * @stability stable
     */
    resetFullLoadErrorPercentage() {
        this._fullLoadErrorPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fullLoadErrorPercentageInput() {
        return this._fullLoadErrorPercentage;
    }
    /**
     * @stability stable
     */
    get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceAccessRoleArn(value) {
        this._serviceAccessRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
}
exports.DmsEndpointElasticsearchSettingsOutputReference = DmsEndpointElasticsearchSettingsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
DmsEndpointElasticsearchSettingsOutputReference[_a] = { fqn: "@cdktf/provider-aws.dms.DmsEndpointElasticsearchSettingsOutputReference", version: "3.0.1" };
function dmsEndpointKafkaSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        broker: cdktf.stringToTerraform(struct.broker),
        include_control_details: cdktf.booleanToTerraform(struct.includeControlDetails),
        include_null_and_empty: cdktf.booleanToTerraform(struct.includeNullAndEmpty),
        include_partition_value: cdktf.booleanToTerraform(struct.includePartitionValue),
        include_table_alter_operations: cdktf.booleanToTerraform(struct.includeTableAlterOperations),
        include_transaction_details: cdktf.booleanToTerraform(struct.includeTransactionDetails),
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        message_max_bytes: cdktf.numberToTerraform(struct.messageMaxBytes),
        no_hex_prefix: cdktf.booleanToTerraform(struct.noHexPrefix),
        partition_include_schema_table: cdktf.booleanToTerraform(struct.partitionIncludeSchemaTable),
        sasl_password: cdktf.stringToTerraform(struct.saslPassword),
        sasl_username: cdktf.stringToTerraform(struct.saslUsername),
        security_protocol: cdktf.stringToTerraform(struct.securityProtocol),
        ssl_ca_certificate_arn: cdktf.stringToTerraform(struct.sslCaCertificateArn),
        ssl_client_certificate_arn: cdktf.stringToTerraform(struct.sslClientCertificateArn),
        ssl_client_key_arn: cdktf.stringToTerraform(struct.sslClientKeyArn),
        ssl_client_key_password: cdktf.stringToTerraform(struct.sslClientKeyPassword),
        topic: cdktf.stringToTerraform(struct.topic),
    };
}
exports.dmsEndpointKafkaSettingsToTerraform = dmsEndpointKafkaSettingsToTerraform;
/**
 * @stability stable
 */
class DmsEndpointKafkaSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._broker) {
            hasAnyValues = true;
            internalValueResult.broker = this._broker;
        }
        if (this._includeControlDetails) {
            hasAnyValues = true;
            internalValueResult.includeControlDetails = this._includeControlDetails;
        }
        if (this._includeNullAndEmpty) {
            hasAnyValues = true;
            internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
        }
        if (this._includePartitionValue) {
            hasAnyValues = true;
            internalValueResult.includePartitionValue = this._includePartitionValue;
        }
        if (this._includeTableAlterOperations) {
            hasAnyValues = true;
            internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
        }
        if (this._includeTransactionDetails) {
            hasAnyValues = true;
            internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
        }
        if (this._messageFormat) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._messageMaxBytes) {
            hasAnyValues = true;
            internalValueResult.messageMaxBytes = this._messageMaxBytes;
        }
        if (this._noHexPrefix) {
            hasAnyValues = true;
            internalValueResult.noHexPrefix = this._noHexPrefix;
        }
        if (this._partitionIncludeSchemaTable) {
            hasAnyValues = true;
            internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
        }
        if (this._saslPassword) {
            hasAnyValues = true;
            internalValueResult.saslPassword = this._saslPassword;
        }
        if (this._saslUsername) {
            hasAnyValues = true;
            internalValueResult.saslUsername = this._saslUsername;
        }
        if (this._securityProtocol) {
            hasAnyValues = true;
            internalValueResult.securityProtocol = this._securityProtocol;
        }
        if (this._sslCaCertificateArn) {
            hasAnyValues = true;
            internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
        }
        if (this._sslClientCertificateArn) {
            hasAnyValues = true;
            internalValueResult.sslClientCertificateArn = this._sslClientCertificateArn;
        }
        if (this._sslClientKeyArn) {
            hasAnyValues = true;
            internalValueResult.sslClientKeyArn = this._sslClientKeyArn;
        }
        if (this._sslClientKeyPassword) {
            hasAnyValues = true;
            internalValueResult.sslClientKeyPassword = this._sslClientKeyPassword;
        }
        if (this._topic) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._broker = undefined;
            this._includeControlDetails = undefined;
            this._includeNullAndEmpty = undefined;
            this._includePartitionValue = undefined;
            this._includeTableAlterOperations = undefined;
            this._includeTransactionDetails = undefined;
            this._messageFormat = undefined;
            this._messageMaxBytes = undefined;
            this._noHexPrefix = undefined;
            this._partitionIncludeSchemaTable = undefined;
            this._saslPassword = undefined;
            this._saslUsername = undefined;
            this._securityProtocol = undefined;
            this._sslCaCertificateArn = undefined;
            this._sslClientCertificateArn = undefined;
            this._sslClientKeyArn = undefined;
            this._sslClientKeyPassword = undefined;
            this._topic = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._broker = value.broker;
            this._includeControlDetails = value.includeControlDetails;
            this._includeNullAndEmpty = value.includeNullAndEmpty;
            this._includePartitionValue = value.includePartitionValue;
            this._includeTableAlterOperations = value.includeTableAlterOperations;
            this._includeTransactionDetails = value.includeTransactionDetails;
            this._messageFormat = value.messageFormat;
            this._messageMaxBytes = value.messageMaxBytes;
            this._noHexPrefix = value.noHexPrefix;
            this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
            this._saslPassword = value.saslPassword;
            this._saslUsername = value.saslUsername;
            this._securityProtocol = value.securityProtocol;
            this._sslCaCertificateArn = value.sslCaCertificateArn;
            this._sslClientCertificateArn = value.sslClientCertificateArn;
            this._sslClientKeyArn = value.sslClientKeyArn;
            this._sslClientKeyPassword = value.sslClientKeyPassword;
            this._topic = value.topic;
        }
    }
    /**
     * @stability stable
     */
    get broker() {
        return this.getStringAttribute('broker');
    }
    /**
     * @stability stable
     */
    set broker(value) {
        this._broker = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get brokerInput() {
        return this._broker;
    }
    /**
     * @stability stable
     */
    get includeControlDetails() {
        return this.getBooleanAttribute('include_control_details');
    }
    /**
     * @stability stable
     */
    set includeControlDetails(value) {
        this._includeControlDetails = value;
    }
    /**
     * @stability stable
     */
    resetIncludeControlDetails() {
        this._includeControlDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeControlDetailsInput() {
        return this._includeControlDetails;
    }
    /**
     * @stability stable
     */
    get includeNullAndEmpty() {
        return this.getBooleanAttribute('include_null_and_empty');
    }
    /**
     * @stability stable
     */
    set includeNullAndEmpty(value) {
        this._includeNullAndEmpty = value;
    }
    /**
     * @stability stable
     */
    resetIncludeNullAndEmpty() {
        this._includeNullAndEmpty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeNullAndEmptyInput() {
        return this._includeNullAndEmpty;
    }
    /**
     * @stability stable
     */
    get includePartitionValue() {
        return this.getBooleanAttribute('include_partition_value');
    }
    /**
     * @stability stable
     */
    set includePartitionValue(value) {
        this._includePartitionValue = value;
    }
    /**
     * @stability stable
     */
    resetIncludePartitionValue() {
        this._includePartitionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includePartitionValueInput() {
        return this._includePartitionValue;
    }
    /**
     * @stability stable
     */
    get includeTableAlterOperations() {
        return this.getBooleanAttribute('include_table_alter_operations');
    }
    /**
     * @stability stable
     */
    set includeTableAlterOperations(value) {
        this._includeTableAlterOperations = value;
    }
    /**
     * @stability stable
     */
    resetIncludeTableAlterOperations() {
        this._includeTableAlterOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeTableAlterOperationsInput() {
        return this._includeTableAlterOperations;
    }
    /**
     * @stability stable
     */
    get includeTransactionDetails() {
        return this.getBooleanAttribute('include_transaction_details');
    }
    /**
     * @stability stable
     */
    set includeTransactionDetails(value) {
        this._includeTransactionDetails = value;
    }
    /**
     * @stability stable
     */
    resetIncludeTransactionDetails() {
        this._includeTransactionDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeTransactionDetailsInput() {
        return this._includeTransactionDetails;
    }
    /**
     * @stability stable
     */
    get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    /**
     * @stability stable
     */
    set messageFormat(value) {
        this._messageFormat = value;
    }
    /**
     * @stability stable
     */
    resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageFormatInput() {
        return this._messageFormat;
    }
    /**
     * @stability stable
     */
    get messageMaxBytes() {
        return this.getNumberAttribute('message_max_bytes');
    }
    /**
     * @stability stable
     */
    set messageMaxBytes(value) {
        this._messageMaxBytes = value;
    }
    /**
     * @stability stable
     */
    resetMessageMaxBytes() {
        this._messageMaxBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageMaxBytesInput() {
        return this._messageMaxBytes;
    }
    /**
     * @stability stable
     */
    get noHexPrefix() {
        return this.getBooleanAttribute('no_hex_prefix');
    }
    /**
     * @stability stable
     */
    set noHexPrefix(value) {
        this._noHexPrefix = value;
    }
    /**
     * @stability stable
     */
    resetNoHexPrefix() {
        this._noHexPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get noHexPrefixInput() {
        return this._noHexPrefix;
    }
    /**
     * @stability stable
     */
    get partitionIncludeSchemaTable() {
        return this.getBooleanAttribute('partition_include_schema_table');
    }
    /**
     * @stability stable
     */
    set partitionIncludeSchemaTable(value) {
        this._partitionIncludeSchemaTable = value;
    }
    /**
     * @stability stable
     */
    resetPartitionIncludeSchemaTable() {
        this._partitionIncludeSchemaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionIncludeSchemaTableInput() {
        return this._partitionIncludeSchemaTable;
    }
    /**
     * @stability stable
     */
    get saslPassword() {
        return this.getStringAttribute('sasl_password');
    }
    /**
     * @stability stable
     */
    set saslPassword(value) {
        this._saslPassword = value;
    }
    /**
     * @stability stable
     */
    resetSaslPassword() {
        this._saslPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get saslPasswordInput() {
        return this._saslPassword;
    }
    /**
     * @stability stable
     */
    get saslUsername() {
        return this.getStringAttribute('sasl_username');
    }
    /**
     * @stability stable
     */
    set saslUsername(value) {
        this._saslUsername = value;
    }
    /**
     * @stability stable
     */
    resetSaslUsername() {
        this._saslUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get saslUsernameInput() {
        return this._saslUsername;
    }
    /**
     * @stability stable
     */
    get securityProtocol() {
        return this.getStringAttribute('security_protocol');
    }
    /**
     * @stability stable
     */
    set securityProtocol(value) {
        this._securityProtocol = value;
    }
    /**
     * @stability stable
     */
    resetSecurityProtocol() {
        this._securityProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityProtocolInput() {
        return this._securityProtocol;
    }
    /**
     * @stability stable
     */
    get sslCaCertificateArn() {
        return this.getStringAttribute('ssl_ca_certificate_arn');
    }
    /**
     * @stability stable
     */
    set sslCaCertificateArn(value) {
        this._sslCaCertificateArn = value;
    }
    /**
     * @stability stable
     */
    resetSslCaCertificateArn() {
        this._sslCaCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslCaCertificateArnInput() {
        return this._sslCaCertificateArn;
    }
    /**
     * @stability stable
     */
    get sslClientCertificateArn() {
        return this.getStringAttribute('ssl_client_certificate_arn');
    }
    /**
     * @stability stable
     */
    set sslClientCertificateArn(value) {
        this._sslClientCertificateArn = value;
    }
    /**
     * @stability stable
     */
    resetSslClientCertificateArn() {
        this._sslClientCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslClientCertificateArnInput() {
        return this._sslClientCertificateArn;
    }
    /**
     * @stability stable
     */
    get sslClientKeyArn() {
        return this.getStringAttribute('ssl_client_key_arn');
    }
    /**
     * @stability stable
     */
    set sslClientKeyArn(value) {
        this._sslClientKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetSslClientKeyArn() {
        this._sslClientKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslClientKeyArnInput() {
        return this._sslClientKeyArn;
    }
    /**
     * @stability stable
     */
    get sslClientKeyPassword() {
        return this.getStringAttribute('ssl_client_key_password');
    }
    /**
     * @stability stable
     */
    set sslClientKeyPassword(value) {
        this._sslClientKeyPassword = value;
    }
    /**
     * @stability stable
     */
    resetSslClientKeyPassword() {
        this._sslClientKeyPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslClientKeyPasswordInput() {
        return this._sslClientKeyPassword;
    }
    /**
     * @stability stable
     */
    get topic() {
        return this.getStringAttribute('topic');
    }
    /**
     * @stability stable
     */
    set topic(value) {
        this._topic = value;
    }
    /**
     * @stability stable
     */
    resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get topicInput() {
        return this._topic;
    }
}
exports.DmsEndpointKafkaSettingsOutputReference = DmsEndpointKafkaSettingsOutputReference;
_b = JSII_RTTI_SYMBOL_1;
DmsEndpointKafkaSettingsOutputReference[_b] = { fqn: "@cdktf/provider-aws.dms.DmsEndpointKafkaSettingsOutputReference", version: "3.0.1" };
function dmsEndpointKinesisSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_control_details: cdktf.booleanToTerraform(struct.includeControlDetails),
        include_null_and_empty: cdktf.booleanToTerraform(struct.includeNullAndEmpty),
        include_partition_value: cdktf.booleanToTerraform(struct.includePartitionValue),
        include_table_alter_operations: cdktf.booleanToTerraform(struct.includeTableAlterOperations),
        include_transaction_details: cdktf.booleanToTerraform(struct.includeTransactionDetails),
        message_format: cdktf.stringToTerraform(struct.messageFormat),
        partition_include_schema_table: cdktf.booleanToTerraform(struct.partitionIncludeSchemaTable),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn),
        stream_arn: cdktf.stringToTerraform(struct.streamArn),
    };
}
exports.dmsEndpointKinesisSettingsToTerraform = dmsEndpointKinesisSettingsToTerraform;
/**
 * @stability stable
 */
class DmsEndpointKinesisSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._includeControlDetails) {
            hasAnyValues = true;
            internalValueResult.includeControlDetails = this._includeControlDetails;
        }
        if (this._includeNullAndEmpty) {
            hasAnyValues = true;
            internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
        }
        if (this._includePartitionValue) {
            hasAnyValues = true;
            internalValueResult.includePartitionValue = this._includePartitionValue;
        }
        if (this._includeTableAlterOperations) {
            hasAnyValues = true;
            internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
        }
        if (this._includeTransactionDetails) {
            hasAnyValues = true;
            internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
        }
        if (this._messageFormat) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._partitionIncludeSchemaTable) {
            hasAnyValues = true;
            internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
        }
        if (this._serviceAccessRoleArn) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        if (this._streamArn) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._includeControlDetails = undefined;
            this._includeNullAndEmpty = undefined;
            this._includePartitionValue = undefined;
            this._includeTableAlterOperations = undefined;
            this._includeTransactionDetails = undefined;
            this._messageFormat = undefined;
            this._partitionIncludeSchemaTable = undefined;
            this._serviceAccessRoleArn = undefined;
            this._streamArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._includeControlDetails = value.includeControlDetails;
            this._includeNullAndEmpty = value.includeNullAndEmpty;
            this._includePartitionValue = value.includePartitionValue;
            this._includeTableAlterOperations = value.includeTableAlterOperations;
            this._includeTransactionDetails = value.includeTransactionDetails;
            this._messageFormat = value.messageFormat;
            this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
            this._streamArn = value.streamArn;
        }
    }
    /**
     * @stability stable
     */
    get includeControlDetails() {
        return this.getBooleanAttribute('include_control_details');
    }
    /**
     * @stability stable
     */
    set includeControlDetails(value) {
        this._includeControlDetails = value;
    }
    /**
     * @stability stable
     */
    resetIncludeControlDetails() {
        this._includeControlDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeControlDetailsInput() {
        return this._includeControlDetails;
    }
    /**
     * @stability stable
     */
    get includeNullAndEmpty() {
        return this.getBooleanAttribute('include_null_and_empty');
    }
    /**
     * @stability stable
     */
    set includeNullAndEmpty(value) {
        this._includeNullAndEmpty = value;
    }
    /**
     * @stability stable
     */
    resetIncludeNullAndEmpty() {
        this._includeNullAndEmpty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeNullAndEmptyInput() {
        return this._includeNullAndEmpty;
    }
    /**
     * @stability stable
     */
    get includePartitionValue() {
        return this.getBooleanAttribute('include_partition_value');
    }
    /**
     * @stability stable
     */
    set includePartitionValue(value) {
        this._includePartitionValue = value;
    }
    /**
     * @stability stable
     */
    resetIncludePartitionValue() {
        this._includePartitionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includePartitionValueInput() {
        return this._includePartitionValue;
    }
    /**
     * @stability stable
     */
    get includeTableAlterOperations() {
        return this.getBooleanAttribute('include_table_alter_operations');
    }
    /**
     * @stability stable
     */
    set includeTableAlterOperations(value) {
        this._includeTableAlterOperations = value;
    }
    /**
     * @stability stable
     */
    resetIncludeTableAlterOperations() {
        this._includeTableAlterOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeTableAlterOperationsInput() {
        return this._includeTableAlterOperations;
    }
    /**
     * @stability stable
     */
    get includeTransactionDetails() {
        return this.getBooleanAttribute('include_transaction_details');
    }
    /**
     * @stability stable
     */
    set includeTransactionDetails(value) {
        this._includeTransactionDetails = value;
    }
    /**
     * @stability stable
     */
    resetIncludeTransactionDetails() {
        this._includeTransactionDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get includeTransactionDetailsInput() {
        return this._includeTransactionDetails;
    }
    /**
     * @stability stable
     */
    get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    /**
     * @stability stable
     */
    set messageFormat(value) {
        this._messageFormat = value;
    }
    /**
     * @stability stable
     */
    resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get messageFormatInput() {
        return this._messageFormat;
    }
    /**
     * @stability stable
     */
    get partitionIncludeSchemaTable() {
        return this.getBooleanAttribute('partition_include_schema_table');
    }
    /**
     * @stability stable
     */
    set partitionIncludeSchemaTable(value) {
        this._partitionIncludeSchemaTable = value;
    }
    /**
     * @stability stable
     */
    resetPartitionIncludeSchemaTable() {
        this._partitionIncludeSchemaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionIncludeSchemaTableInput() {
        return this._partitionIncludeSchemaTable;
    }
    /**
     * @stability stable
     */
    get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceAccessRoleArn(value) {
        this._serviceAccessRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
    /**
     * @stability stable
     */
    get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    /**
     * @stability stable
     */
    set streamArn(value) {
        this._streamArn = value;
    }
    /**
     * @stability stable
     */
    resetStreamArn() {
        this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get streamArnInput() {
        return this._streamArn;
    }
}
exports.DmsEndpointKinesisSettingsOutputReference = DmsEndpointKinesisSettingsOutputReference;
_c = JSII_RTTI_SYMBOL_1;
DmsEndpointKinesisSettingsOutputReference[_c] = { fqn: "@cdktf/provider-aws.dms.DmsEndpointKinesisSettingsOutputReference", version: "3.0.1" };
function dmsEndpointMongodbSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auth_mechanism: cdktf.stringToTerraform(struct.authMechanism),
        auth_source: cdktf.stringToTerraform(struct.authSource),
        auth_type: cdktf.stringToTerraform(struct.authType),
        docs_to_investigate: cdktf.stringToTerraform(struct.docsToInvestigate),
        extract_doc_id: cdktf.stringToTerraform(struct.extractDocId),
        nesting_level: cdktf.stringToTerraform(struct.nestingLevel),
    };
}
exports.dmsEndpointMongodbSettingsToTerraform = dmsEndpointMongodbSettingsToTerraform;
/**
 * @stability stable
 */
class DmsEndpointMongodbSettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._authMechanism) {
            hasAnyValues = true;
            internalValueResult.authMechanism = this._authMechanism;
        }
        if (this._authSource) {
            hasAnyValues = true;
            internalValueResult.authSource = this._authSource;
        }
        if (this._authType) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._docsToInvestigate) {
            hasAnyValues = true;
            internalValueResult.docsToInvestigate = this._docsToInvestigate;
        }
        if (this._extractDocId) {
            hasAnyValues = true;
            internalValueResult.extractDocId = this._extractDocId;
        }
        if (this._nestingLevel) {
            hasAnyValues = true;
            internalValueResult.nestingLevel = this._nestingLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._authMechanism = undefined;
            this._authSource = undefined;
            this._authType = undefined;
            this._docsToInvestigate = undefined;
            this._extractDocId = undefined;
            this._nestingLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._authMechanism = value.authMechanism;
            this._authSource = value.authSource;
            this._authType = value.authType;
            this._docsToInvestigate = value.docsToInvestigate;
            this._extractDocId = value.extractDocId;
            this._nestingLevel = value.nestingLevel;
        }
    }
    /**
     * @stability stable
     */
    get authMechanism() {
        return this.getStringAttribute('auth_mechanism');
    }
    /**
     * @stability stable
     */
    set authMechanism(value) {
        this._authMechanism = value;
    }
    /**
     * @stability stable
     */
    resetAuthMechanism() {
        this._authMechanism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authMechanismInput() {
        return this._authMechanism;
    }
    /**
     * @stability stable
     */
    get authSource() {
        return this.getStringAttribute('auth_source');
    }
    /**
     * @stability stable
     */
    set authSource(value) {
        this._authSource = value;
    }
    /**
     * @stability stable
     */
    resetAuthSource() {
        this._authSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authSourceInput() {
        return this._authSource;
    }
    /**
     * @stability stable
     */
    get authType() {
        return this.getStringAttribute('auth_type');
    }
    /**
     * @stability stable
     */
    set authType(value) {
        this._authType = value;
    }
    /**
     * @stability stable
     */
    resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get authTypeInput() {
        return this._authType;
    }
    /**
     * @stability stable
     */
    get docsToInvestigate() {
        return this.getStringAttribute('docs_to_investigate');
    }
    /**
     * @stability stable
     */
    set docsToInvestigate(value) {
        this._docsToInvestigate = value;
    }
    /**
     * @stability stable
     */
    resetDocsToInvestigate() {
        this._docsToInvestigate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get docsToInvestigateInput() {
        return this._docsToInvestigate;
    }
    /**
     * @stability stable
     */
    get extractDocId() {
        return this.getStringAttribute('extract_doc_id');
    }
    /**
     * @stability stable
     */
    set extractDocId(value) {
        this._extractDocId = value;
    }
    /**
     * @stability stable
     */
    resetExtractDocId() {
        this._extractDocId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get extractDocIdInput() {
        return this._extractDocId;
    }
    /**
     * @stability stable
     */
    get nestingLevel() {
        return this.getStringAttribute('nesting_level');
    }
    /**
     * @stability stable
     */
    set nestingLevel(value) {
        this._nestingLevel = value;
    }
    /**
     * @stability stable
     */
    resetNestingLevel() {
        this._nestingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nestingLevelInput() {
        return this._nestingLevel;
    }
}
exports.DmsEndpointMongodbSettingsOutputReference = DmsEndpointMongodbSettingsOutputReference;
_d = JSII_RTTI_SYMBOL_1;
DmsEndpointMongodbSettingsOutputReference[_d] = { fqn: "@cdktf/provider-aws.dms.DmsEndpointMongodbSettingsOutputReference", version: "3.0.1" };
function dmsEndpointS3SettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_folder: cdktf.stringToTerraform(struct.bucketFolder),
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        compression_type: cdktf.stringToTerraform(struct.compressionType),
        csv_delimiter: cdktf.stringToTerraform(struct.csvDelimiter),
        csv_row_delimiter: cdktf.stringToTerraform(struct.csvRowDelimiter),
        data_format: cdktf.stringToTerraform(struct.dataFormat),
        date_partition_enabled: cdktf.booleanToTerraform(struct.datePartitionEnabled),
        encryption_mode: cdktf.stringToTerraform(struct.encryptionMode),
        external_table_definition: cdktf.stringToTerraform(struct.externalTableDefinition),
        parquet_timestamp_in_millisecond: cdktf.booleanToTerraform(struct.parquetTimestampInMillisecond),
        parquet_version: cdktf.stringToTerraform(struct.parquetVersion),
        server_side_encryption_kms_key_id: cdktf.stringToTerraform(struct.serverSideEncryptionKmsKeyId),
        service_access_role_arn: cdktf.stringToTerraform(struct.serviceAccessRoleArn),
    };
}
exports.dmsEndpointS3SettingsToTerraform = dmsEndpointS3SettingsToTerraform;
/**
 * @stability stable
 */
class DmsEndpointS3SettingsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
    }
    /**
     * @stability stable
     */
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketFolder) {
            hasAnyValues = true;
            internalValueResult.bucketFolder = this._bucketFolder;
        }
        if (this._bucketName) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._compressionType) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._csvDelimiter) {
            hasAnyValues = true;
            internalValueResult.csvDelimiter = this._csvDelimiter;
        }
        if (this._csvRowDelimiter) {
            hasAnyValues = true;
            internalValueResult.csvRowDelimiter = this._csvRowDelimiter;
        }
        if (this._dataFormat) {
            hasAnyValues = true;
            internalValueResult.dataFormat = this._dataFormat;
        }
        if (this._datePartitionEnabled) {
            hasAnyValues = true;
            internalValueResult.datePartitionEnabled = this._datePartitionEnabled;
        }
        if (this._encryptionMode) {
            hasAnyValues = true;
            internalValueResult.encryptionMode = this._encryptionMode;
        }
        if (this._externalTableDefinition) {
            hasAnyValues = true;
            internalValueResult.externalTableDefinition = this._externalTableDefinition;
        }
        if (this._parquetTimestampInMillisecond) {
            hasAnyValues = true;
            internalValueResult.parquetTimestampInMillisecond = this._parquetTimestampInMillisecond;
        }
        if (this._parquetVersion) {
            hasAnyValues = true;
            internalValueResult.parquetVersion = this._parquetVersion;
        }
        if (this._serverSideEncryptionKmsKeyId) {
            hasAnyValues = true;
            internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
        }
        if (this._serviceAccessRoleArn) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketFolder = undefined;
            this._bucketName = undefined;
            this._compressionType = undefined;
            this._csvDelimiter = undefined;
            this._csvRowDelimiter = undefined;
            this._dataFormat = undefined;
            this._datePartitionEnabled = undefined;
            this._encryptionMode = undefined;
            this._externalTableDefinition = undefined;
            this._parquetTimestampInMillisecond = undefined;
            this._parquetVersion = undefined;
            this._serverSideEncryptionKmsKeyId = undefined;
            this._serviceAccessRoleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketFolder = value.bucketFolder;
            this._bucketName = value.bucketName;
            this._compressionType = value.compressionType;
            this._csvDelimiter = value.csvDelimiter;
            this._csvRowDelimiter = value.csvRowDelimiter;
            this._dataFormat = value.dataFormat;
            this._datePartitionEnabled = value.datePartitionEnabled;
            this._encryptionMode = value.encryptionMode;
            this._externalTableDefinition = value.externalTableDefinition;
            this._parquetTimestampInMillisecond = value.parquetTimestampInMillisecond;
            this._parquetVersion = value.parquetVersion;
            this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
        }
    }
    /**
     * @stability stable
     */
    get bucketFolder() {
        return this.getStringAttribute('bucket_folder');
    }
    /**
     * @stability stable
     */
    set bucketFolder(value) {
        this._bucketFolder = value;
    }
    /**
     * @stability stable
     */
    resetBucketFolder() {
        this._bucketFolder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketFolderInput() {
        return this._bucketFolder;
    }
    /**
     * @stability stable
     */
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    /**
     * @stability stable
     */
    set bucketName(value) {
        this._bucketName = value;
    }
    /**
     * @stability stable
     */
    resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketNameInput() {
        return this._bucketName;
    }
    /**
     * @stability stable
     */
    get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    /**
     * @stability stable
     */
    set compressionType(value) {
        this._compressionType = value;
    }
    /**
     * @stability stable
     */
    resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionTypeInput() {
        return this._compressionType;
    }
    /**
     * @stability stable
     */
    get csvDelimiter() {
        return this.getStringAttribute('csv_delimiter');
    }
    /**
     * @stability stable
     */
    set csvDelimiter(value) {
        this._csvDelimiter = value;
    }
    /**
     * @stability stable
     */
    resetCsvDelimiter() {
        this._csvDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvDelimiterInput() {
        return this._csvDelimiter;
    }
    /**
     * @stability stable
     */
    get csvRowDelimiter() {
        return this.getStringAttribute('csv_row_delimiter');
    }
    /**
     * @stability stable
     */
    set csvRowDelimiter(value) {
        this._csvRowDelimiter = value;
    }
    /**
     * @stability stable
     */
    resetCsvRowDelimiter() {
        this._csvRowDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvRowDelimiterInput() {
        return this._csvRowDelimiter;
    }
    /**
     * @stability stable
     */
    get dataFormat() {
        return this.getStringAttribute('data_format');
    }
    /**
     * @stability stable
     */
    set dataFormat(value) {
        this._dataFormat = value;
    }
    /**
     * @stability stable
     */
    resetDataFormat() {
        this._dataFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataFormatInput() {
        return this._dataFormat;
    }
    /**
     * @stability stable
     */
    get datePartitionEnabled() {
        return this.getBooleanAttribute('date_partition_enabled');
    }
    /**
     * @stability stable
     */
    set datePartitionEnabled(value) {
        this._datePartitionEnabled = value;
    }
    /**
     * @stability stable
     */
    resetDatePartitionEnabled() {
        this._datePartitionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get datePartitionEnabledInput() {
        return this._datePartitionEnabled;
    }
    /**
     * @stability stable
     */
    get encryptionMode() {
        return this.getStringAttribute('encryption_mode');
    }
    /**
     * @stability stable
     */
    set encryptionMode(value) {
        this._encryptionMode = value;
    }
    /**
     * @stability stable
     */
    resetEncryptionMode() {
        this._encryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get encryptionModeInput() {
        return this._encryptionMode;
    }
    /**
     * @stability stable
     */
    get externalTableDefinition() {
        return this.getStringAttribute('external_table_definition');
    }
    /**
     * @stability stable
     */
    set externalTableDefinition(value) {
        this._externalTableDefinition = value;
    }
    /**
     * @stability stable
     */
    resetExternalTableDefinition() {
        this._externalTableDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get externalTableDefinitionInput() {
        return this._externalTableDefinition;
    }
    /**
     * @stability stable
     */
    get parquetTimestampInMillisecond() {
        return this.getBooleanAttribute('parquet_timestamp_in_millisecond');
    }
    /**
     * @stability stable
     */
    set parquetTimestampInMillisecond(value) {
        this._parquetTimestampInMillisecond = value;
    }
    /**
     * @stability stable
     */
    resetParquetTimestampInMillisecond() {
        this._parquetTimestampInMillisecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parquetTimestampInMillisecondInput() {
        return this._parquetTimestampInMillisecond;
    }
    /**
     * @stability stable
     */
    get parquetVersion() {
        return this.getStringAttribute('parquet_version');
    }
    /**
     * @stability stable
     */
    set parquetVersion(value) {
        this._parquetVersion = value;
    }
    /**
     * @stability stable
     */
    resetParquetVersion() {
        this._parquetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parquetVersionInput() {
        return this._parquetVersion;
    }
    /**
     * @stability stable
     */
    get serverSideEncryptionKmsKeyId() {
        return this.getStringAttribute('server_side_encryption_kms_key_id');
    }
    /**
     * @stability stable
     */
    set serverSideEncryptionKmsKeyId(value) {
        this._serverSideEncryptionKmsKeyId = value;
    }
    /**
     * @stability stable
     */
    resetServerSideEncryptionKmsKeyId() {
        this._serverSideEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serverSideEncryptionKmsKeyIdInput() {
        return this._serverSideEncryptionKmsKeyId;
    }
    /**
     * @stability stable
     */
    get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    /**
     * @stability stable
     */
    set serviceAccessRoleArn(value) {
        this._serviceAccessRoleArn = value;
    }
    /**
     * @stability stable
     */
    resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
}
exports.DmsEndpointS3SettingsOutputReference = DmsEndpointS3SettingsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
DmsEndpointS3SettingsOutputReference[_e] = { fqn: "@cdktf/provider-aws.dms.DmsEndpointS3SettingsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint}.
 *
 * @stability stable
 */
class DmsEndpoint extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html aws_dms_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_dms_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // elasticsearch_settings - computed: false, optional: true, required: false
        this._elasticsearchSettings = new DmsEndpointElasticsearchSettingsOutputReference(this, "elasticsearch_settings", true);
        // kafka_settings - computed: false, optional: true, required: false
        this._kafkaSettings = new DmsEndpointKafkaSettingsOutputReference(this, "kafka_settings", true);
        // kinesis_settings - computed: false, optional: true, required: false
        this._kinesisSettings = new DmsEndpointKinesisSettingsOutputReference(this, "kinesis_settings", true);
        // mongodb_settings - computed: false, optional: true, required: false
        this._mongodbSettings = new DmsEndpointMongodbSettingsOutputReference(this, "mongodb_settings", true);
        // s3_settings - computed: false, optional: true, required: false
        this._s3Settings = new DmsEndpointS3SettingsOutputReference(this, "s3_settings", true);
        this._certificateArn = config.certificateArn;
        this._databaseName = config.databaseName;
        this._endpointId = config.endpointId;
        this._endpointType = config.endpointType;
        this._engineName = config.engineName;
        this._extraConnectionAttributes = config.extraConnectionAttributes;
        this._kmsKeyArn = config.kmsKeyArn;
        this._password = config.password;
        this._port = config.port;
        this._serverName = config.serverName;
        this._serviceAccessRole = config.serviceAccessRole;
        this._sslMode = config.sslMode;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._username = config.username;
        this._elasticsearchSettings.internalValue = config.elasticsearchSettings;
        this._kafkaSettings.internalValue = config.kafkaSettings;
        this._kinesisSettings.internalValue = config.kinesisSettings;
        this._mongodbSettings.internalValue = config.mongodbSettings;
        this._s3Settings.internalValue = config.s3Settings;
    }
    /**
     * @stability stable
     */
    get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    /**
     * @stability stable
     */
    set certificateArn(value) {
        this._certificateArn = value;
    }
    /**
     * @stability stable
     */
    resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get certificateArnInput() {
        return this._certificateArn;
    }
    /**
     * @stability stable
     */
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    /**
     * @stability stable
     */
    set databaseName(value) {
        this._databaseName = value;
    }
    /**
     * @stability stable
     */
    resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseNameInput() {
        return this._databaseName;
    }
    // endpoint_arn - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get endpointArn() {
        return this.getStringAttribute('endpoint_arn');
    }
    /**
     * @stability stable
     */
    get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }
    /**
     * @stability stable
     */
    set endpointId(value) {
        this._endpointId = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endpointIdInput() {
        return this._endpointId;
    }
    /**
     * @stability stable
     */
    get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    /**
     * @stability stable
     */
    set endpointType(value) {
        this._endpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get endpointTypeInput() {
        return this._endpointType;
    }
    /**
     * @stability stable
     */
    get engineName() {
        return this.getStringAttribute('engine_name');
    }
    /**
     * @stability stable
     */
    set engineName(value) {
        this._engineName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get engineNameInput() {
        return this._engineName;
    }
    /**
     * @stability stable
     */
    get extraConnectionAttributes() {
        return this.getStringAttribute('extra_connection_attributes');
    }
    /**
     * @stability stable
     */
    set extraConnectionAttributes(value) {
        this._extraConnectionAttributes = value;
    }
    /**
     * @stability stable
     */
    resetExtraConnectionAttributes() {
        this._extraConnectionAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get extraConnectionAttributesInput() {
        return this._extraConnectionAttributes;
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
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    /**
     * @stability stable
     */
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    /**
     * @stability stable
     */
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    /**
     * @stability stable
     */
    get password() {
        return this.getStringAttribute('password');
    }
    /**
     * @stability stable
     */
    set password(value) {
        this._password = value;
    }
    /**
     * @stability stable
     */
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get passwordInput() {
        return this._password;
    }
    /**
     * @stability stable
     */
    get port() {
        return this.getNumberAttribute('port');
    }
    /**
     * @stability stable
     */
    set port(value) {
        this._port = value;
    }
    /**
     * @stability stable
     */
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get portInput() {
        return this._port;
    }
    /**
     * @stability stable
     */
    get serverName() {
        return this.getStringAttribute('server_name');
    }
    /**
     * @stability stable
     */
    set serverName(value) {
        this._serverName = value;
    }
    /**
     * @stability stable
     */
    resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serverNameInput() {
        return this._serverName;
    }
    /**
     * @stability stable
     */
    get serviceAccessRole() {
        return this.getStringAttribute('service_access_role');
    }
    /**
     * @stability stable
     */
    set serviceAccessRole(value) {
        this._serviceAccessRole = value;
    }
    /**
     * @stability stable
     */
    resetServiceAccessRole() {
        this._serviceAccessRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceAccessRoleInput() {
        return this._serviceAccessRole;
    }
    /**
     * @stability stable
     */
    get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    /**
     * @stability stable
     */
    set sslMode(value) {
        this._sslMode = value;
    }
    /**
     * @stability stable
     */
    resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sslModeInput() {
        return this._sslMode;
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
    /**
     * @stability stable
     */
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    /**
     * @stability stable
     */
    set tagsAll(value) {
        this._tagsAll = value;
    }
    /**
     * @stability stable
     */
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagsAllInput() {
        return this._tagsAll;
    }
    /**
     * @stability stable
     */
    get username() {
        return this.getStringAttribute('username');
    }
    /**
     * @stability stable
     */
    set username(value) {
        this._username = value;
    }
    /**
     * @stability stable
     */
    resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get usernameInput() {
        return this._username;
    }
    /**
     * @stability stable
     */
    get elasticsearchSettings() {
        return this._elasticsearchSettings;
    }
    /**
     * @stability stable
     */
    putElasticsearchSettings(value) {
        this._elasticsearchSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetElasticsearchSettings() {
        this._elasticsearchSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get elasticsearchSettingsInput() {
        return this._elasticsearchSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get kafkaSettings() {
        return this._kafkaSettings;
    }
    /**
     * @stability stable
     */
    putKafkaSettings(value) {
        this._kafkaSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKafkaSettings() {
        this._kafkaSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kafkaSettingsInput() {
        return this._kafkaSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get kinesisSettings() {
        return this._kinesisSettings;
    }
    /**
     * @stability stable
     */
    putKinesisSettings(value) {
        this._kinesisSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisSettings() {
        this._kinesisSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisSettingsInput() {
        return this._kinesisSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get mongodbSettings() {
        return this._mongodbSettings;
    }
    /**
     * @stability stable
     */
    putMongodbSettings(value) {
        this._mongodbSettings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMongodbSettings() {
        this._mongodbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mongodbSettingsInput() {
        return this._mongodbSettings.internalValue;
    }
    /**
     * @stability stable
     */
    get s3Settings() {
        return this._s3Settings;
    }
    /**
     * @stability stable
     */
    putS3Settings(value) {
        this._s3Settings.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3Settings() {
        this._s3Settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3SettingsInput() {
        return this._s3Settings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            certificate_arn: cdktf.stringToTerraform(this._certificateArn),
            database_name: cdktf.stringToTerraform(this._databaseName),
            endpoint_id: cdktf.stringToTerraform(this._endpointId),
            endpoint_type: cdktf.stringToTerraform(this._endpointType),
            engine_name: cdktf.stringToTerraform(this._engineName),
            extra_connection_attributes: cdktf.stringToTerraform(this._extraConnectionAttributes),
            kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
            password: cdktf.stringToTerraform(this._password),
            port: cdktf.numberToTerraform(this._port),
            server_name: cdktf.stringToTerraform(this._serverName),
            service_access_role: cdktf.stringToTerraform(this._serviceAccessRole),
            ssl_mode: cdktf.stringToTerraform(this._sslMode),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            username: cdktf.stringToTerraform(this._username),
            elasticsearch_settings: dmsEndpointElasticsearchSettingsToTerraform(this._elasticsearchSettings.internalValue),
            kafka_settings: dmsEndpointKafkaSettingsToTerraform(this._kafkaSettings.internalValue),
            kinesis_settings: dmsEndpointKinesisSettingsToTerraform(this._kinesisSettings.internalValue),
            mongodb_settings: dmsEndpointMongodbSettingsToTerraform(this._mongodbSettings.internalValue),
            s3_settings: dmsEndpointS3SettingsToTerraform(this._s3Settings.internalValue),
        };
    }
}
exports.DmsEndpoint = DmsEndpoint;
_f = JSII_RTTI_SYMBOL_1;
DmsEndpoint[_f] = { fqn: "@cdktf/provider-aws.dms.DmsEndpoint", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
DmsEndpoint.tfResourceType = "aws_dms_endpoint";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG1zLWVuZHBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Rtcy9kbXMtZW5kcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUF3RC9CLFNBQWdCLDJDQUEyQyxDQUFDLE1BQTJGO0lBQ3JKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDekUsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNwRix1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO0tBQy9FLENBQUE7QUFDSCxDQUFDO0FBWEQsa0dBV0M7Ozs7QUFFRCxNQUFhLCtDQUFnRCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXRGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7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dEYsZ0JBQWdCLEVBQUUscUNBQXFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztZQUM1RixnQkFBZ0IsRUFBRSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBQzVGLFdBQVcsRUFBRSxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztTQUM5RSxDQUFDO0lBQ0osQ0FBQzs7QUEvWUgsa0NBZ1pDOzs7QUE5WUMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRywwQkFBYyxHQUFXLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIERtc0VuZHBvaW50Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjZXJ0aWZpY2F0ZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YWJhc2VOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuZHBvaW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5naW5lTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBvcnQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmVyTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZUFjY2Vzc1JvbGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NsTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVzZXJuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVsYXN0aWNzZWFyY2hTZXR0aW5ncz86IERtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGthZmthU2V0dGluZ3M/OiBEbXNFbmRwb2ludEthZmthU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc1NldHRpbmdzPzogRG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbW9uZ29kYlNldHRpbmdzPzogRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNTZXR0aW5ncz86IERtc0VuZHBvaW50UzNTZXR0aW5ncztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5kcG9pbnRVcmk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlcnJvclJldHJ5RHVyYXRpb24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZnVsbExvYWRFcnJvclBlcmNlbnRhZ2U/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmljZUFjY2Vzc1JvbGVBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRG1zRW5kcG9pbnRFbGFzdGljc2VhcmNoU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5ncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuZHBvaW50X3VyaTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lbmRwb2ludFVyaSksXG4gICAgZXJyb3JfcmV0cnlfZHVyYXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JSZXRyeUR1cmF0aW9uKSxcbiAgICBmdWxsX2xvYWRfZXJyb3JfcGVyY2VudGFnZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5mdWxsTG9hZEVycm9yUGVyY2VudGFnZSksXG4gICAgc2VydmljZV9hY2Nlc3Nfcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZUFjY2Vzc1JvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5nc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5kcG9pbnRVcmkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuZHBvaW50VXJpID0gdGhpcy5fZW5kcG9pbnRVcmk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lcnJvclJldHJ5RHVyYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVycm9yUmV0cnlEdXJhdGlvbiA9IHRoaXMuX2Vycm9yUmV0cnlEdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5mdWxsTG9hZEVycm9yUGVyY2VudGFnZSA9IHRoaXMuX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VBY2Nlc3NSb2xlQXJuID0gdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuZHBvaW50VXJpID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXJyb3JSZXRyeUR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZnVsbExvYWRFcnJvclBlcmNlbnRhZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5kcG9pbnRVcmkgPSB2YWx1ZS5lbmRwb2ludFVyaTtcbiAgICAgIHRoaXMuX2Vycm9yUmV0cnlEdXJhdGlvbiA9IHZhbHVlLmVycm9yUmV0cnlEdXJhdGlvbjtcbiAgICAgIHRoaXMuX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlID0gdmFsdWUuZnVsbExvYWRFcnJvclBlcmNlbnRhZ2U7XG4gICAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHZhbHVlLnNlcnZpY2VBY2Nlc3NSb2xlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuZHBvaW50X3VyaSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmRwb2ludFVyaT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRVcmkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmRwb2ludF91cmknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZHBvaW50VXJpKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmRwb2ludFVyaSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmRwb2ludFVyaUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludFVyaTtcbiAgfVxuXG4gIC8vIGVycm9yX3JldHJ5X2R1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vycm9yUmV0cnlEdXJhdGlvbj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgZXJyb3JSZXRyeUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZXJyb3JfcmV0cnlfZHVyYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVycm9yUmV0cnlEdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZXJyb3JSZXRyeUR1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXJyb3JSZXRyeUR1cmF0aW9uKCkge1xuICAgIHRoaXMuX2Vycm9yUmV0cnlEdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXJyb3JSZXRyeUR1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yUmV0cnlEdXJhdGlvbjtcbiAgfVxuXG4gIC8vIGZ1bGxfbG9hZF9lcnJvcl9wZXJjZW50YWdlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Z1bGxMb2FkRXJyb3JQZXJjZW50YWdlPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBmdWxsTG9hZEVycm9yUGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2Z1bGxfbG9hZF9lcnJvcl9wZXJjZW50YWdlJyk7XG4gIH1cbiAgcHVibGljIHNldCBmdWxsTG9hZEVycm9yUGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZnVsbExvYWRFcnJvclBlcmNlbnRhZ2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGdWxsTG9hZEVycm9yUGVyY2VudGFnZSgpIHtcbiAgICB0aGlzLl9mdWxsTG9hZEVycm9yUGVyY2VudGFnZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZnVsbExvYWRFcnJvclBlcmNlbnRhZ2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsbExvYWRFcnJvclBlcmNlbnRhZ2U7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2FjY2Vzc19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zZXJ2aWNlQWNjZXNzUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2FjY2Vzc19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmljZUFjY2Vzc1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBY2Nlc3NSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIERtc0VuZHBvaW50S2Fma2FTZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBicm9rZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlQ29udHJvbERldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVOdWxsQW5kRW1wdHk/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZVBhcnRpdGlvblZhbHVlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtZXNzYWdlRm9ybWF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1lc3NhZ2VNYXhCeXRlcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbm9IZXhQcmVmaXg/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNhc2xQYXNzd29yZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2FzbFVzZXJuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlY3VyaXR5UHJvdG9jb2w/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNzbENhQ2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzc2xDbGllbnRLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3NsQ2xpZW50S2V5UGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdG9waWM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkbXNFbmRwb2ludEthZmthU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEbXNFbmRwb2ludEthZmthU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgfCBEbXNFbmRwb2ludEthZmthU2V0dGluZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBicm9rZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnJva2VyKSxcbiAgICBpbmNsdWRlX2NvbnRyb2xfZGV0YWlsczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZUNvbnRyb2xEZXRhaWxzKSxcbiAgICBpbmNsdWRlX251bGxfYW5kX2VtcHR5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlTnVsbEFuZEVtcHR5KSxcbiAgICBpbmNsdWRlX3BhcnRpdGlvbl92YWx1ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVBhcnRpdGlvblZhbHVlKSxcbiAgICBpbmNsdWRlX3RhYmxlX2FsdGVyX29wZXJhdGlvbnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyksXG4gICAgaW5jbHVkZV90cmFuc2FjdGlvbl9kZXRhaWxzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzKSxcbiAgICBtZXNzYWdlX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlRm9ybWF0KSxcbiAgICBtZXNzYWdlX21heF9ieXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlTWF4Qnl0ZXMpLFxuICAgIG5vX2hleF9wcmVmaXg6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLm5vSGV4UHJlZml4KSxcbiAgICBwYXJ0aXRpb25faW5jbHVkZV9zY2hlbWFfdGFibGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLnBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSksXG4gICAgc2FzbF9wYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zYXNsUGFzc3dvcmQpLFxuICAgIHNhc2xfdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc2FzbFVzZXJuYW1lKSxcbiAgICBzZWN1cml0eV9wcm90b2NvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZWN1cml0eVByb3RvY29sKSxcbiAgICBzc2xfY2FfY2VydGlmaWNhdGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNzbENhQ2VydGlmaWNhdGVBcm4pLFxuICAgIHNzbF9jbGllbnRfY2VydGlmaWNhdGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNzbENsaWVudENlcnRpZmljYXRlQXJuKSxcbiAgICBzc2xfY2xpZW50X2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3NsQ2xpZW50S2V5QXJuKSxcbiAgICBzc2xfY2xpZW50X2tleV9wYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zc2xDbGllbnRLZXlQYXNzd29yZCksXG4gICAgdG9waWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudG9waWMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEbXNFbmRwb2ludEthZmthU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9icm9rZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJyb2tlciA9IHRoaXMuX2Jyb2tlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVDb250cm9sRGV0YWlscykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZUNvbnRyb2xEZXRhaWxzID0gdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZU51bGxBbmRFbXB0eSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZU51bGxBbmRFbXB0eSA9IHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zID0gdGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tZXNzYWdlRm9ybWF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tZXNzYWdlRm9ybWF0ID0gdGhpcy5fbWVzc2FnZUZvcm1hdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VNYXhCeXRlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVzc2FnZU1heEJ5dGVzID0gdGhpcy5fbWVzc2FnZU1heEJ5dGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbm9IZXhQcmVmaXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5vSGV4UHJlZml4ID0gdGhpcy5fbm9IZXhQcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nhc2xQYXNzd29yZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2FzbFBhc3N3b3JkID0gdGhpcy5fc2FzbFBhc3N3b3JkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2FzbFVzZXJuYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zYXNsVXNlcm5hbWUgPSB0aGlzLl9zYXNsVXNlcm5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWN1cml0eVByb3RvY29sKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eVByb3RvY29sID0gdGhpcy5fc2VjdXJpdHlQcm90b2NvbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NzbENhQ2VydGlmaWNhdGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzbENhQ2VydGlmaWNhdGVBcm4gPSB0aGlzLl9zc2xDYUNlcnRpZmljYXRlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzbENsaWVudENlcnRpZmljYXRlQXJuID0gdGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zc2xDbGllbnRLZXlBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNzbENsaWVudEtleUFybiA9IHRoaXMuX3NzbENsaWVudEtleUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NzbENsaWVudEtleVBhc3N3b3JkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zc2xDbGllbnRLZXlQYXNzd29yZCA9IHRoaXMuX3NzbENsaWVudEtleVBhc3N3b3JkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdG9waWMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRvcGljID0gdGhpcy5fdG9waWM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEbXNFbmRwb2ludEthZmthU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9icm9rZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVBhcnRpdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21lc3NhZ2VGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tZXNzYWdlTWF4Qnl0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9ub0hleFByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nhc2xQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Nhc2xVc2VybmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlY3VyaXR5UHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc2xDYUNlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlQYXNzd29yZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RvcGljID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9icm9rZXIgPSB2YWx1ZS5icm9rZXI7XG4gICAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB2YWx1ZS5pbmNsdWRlQ29udHJvbERldGFpbHM7XG4gICAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdmFsdWUuaW5jbHVkZU51bGxBbmRFbXB0eTtcbiAgICAgIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHZhbHVlLmluY2x1ZGVQYXJ0aXRpb25WYWx1ZTtcbiAgICAgIHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHZhbHVlLmluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucztcbiAgICAgIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB2YWx1ZS5pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzO1xuICAgICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHZhbHVlLm1lc3NhZ2VGb3JtYXQ7XG4gICAgICB0aGlzLl9tZXNzYWdlTWF4Qnl0ZXMgPSB2YWx1ZS5tZXNzYWdlTWF4Qnl0ZXM7XG4gICAgICB0aGlzLl9ub0hleFByZWZpeCA9IHZhbHVlLm5vSGV4UHJlZml4O1xuICAgICAgdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlID0gdmFsdWUucGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlO1xuICAgICAgdGhpcy5fc2FzbFBhc3N3b3JkID0gdmFsdWUuc2FzbFBhc3N3b3JkO1xuICAgICAgdGhpcy5fc2FzbFVzZXJuYW1lID0gdmFsdWUuc2FzbFVzZXJuYW1lO1xuICAgICAgdGhpcy5fc2VjdXJpdHlQcm90b2NvbCA9IHZhbHVlLnNlY3VyaXR5UHJvdG9jb2w7XG4gICAgICB0aGlzLl9zc2xDYUNlcnRpZmljYXRlQXJuID0gdmFsdWUuc3NsQ2FDZXJ0aWZpY2F0ZUFybjtcbiAgICAgIHRoaXMuX3NzbENsaWVudENlcnRpZmljYXRlQXJuID0gdmFsdWUuc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm47XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlBcm4gPSB2YWx1ZS5zc2xDbGllbnRLZXlBcm47XG4gICAgICB0aGlzLl9zc2xDbGllbnRLZXlQYXNzd29yZCA9IHZhbHVlLnNzbENsaWVudEtleVBhc3N3b3JkO1xuICAgICAgdGhpcy5fdG9waWMgPSB2YWx1ZS50b3BpYztcbiAgICB9XG4gIH1cblxuICAvLyBicm9rZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnJva2VyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBicm9rZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdicm9rZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJyb2tlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnJva2VyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJyb2tlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9icm9rZXI7XG4gIH1cblxuICAvLyBpbmNsdWRlX2NvbnRyb2xfZGV0YWlscyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlQ29udHJvbERldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVDb250cm9sRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX2NvbnRyb2xfZGV0YWlscycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVDb250cm9sRGV0YWlscyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZUNvbnRyb2xEZXRhaWxzKCkge1xuICAgIHRoaXMuX2luY2x1ZGVDb250cm9sRGV0YWlscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUNvbnRyb2xEZXRhaWxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVDb250cm9sRGV0YWlscztcbiAgfVxuXG4gIC8vIGluY2x1ZGVfbnVsbF9hbmRfZW1wdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZU51bGxBbmRFbXB0eT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZU51bGxBbmRFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX251bGxfYW5kX2VtcHR5JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZU51bGxBbmRFbXB0eSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZU51bGxBbmRFbXB0eSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVOdWxsQW5kRW1wdHkoKSB7XG4gICAgdGhpcy5faW5jbHVkZU51bGxBbmRFbXB0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZU51bGxBbmRFbXB0eUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5O1xuICB9XG5cbiAgLy8gaW5jbHVkZV9wYXJ0aXRpb25fdmFsdWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVBhcnRpdGlvblZhbHVlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlUGFydGl0aW9uVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV9wYXJ0aXRpb25fdmFsdWUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlUGFydGl0aW9uVmFsdWUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVQYXJ0aXRpb25WYWx1ZSgpIHtcbiAgICB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVQYXJ0aXRpb25WYWx1ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWU7XG4gIH1cblxuICAvLyBpbmNsdWRlX3RhYmxlX2FsdGVyX29wZXJhdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV90YWJsZV9hbHRlcl9vcGVyYXRpb25zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMoKSB7XG4gICAgdGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZVRhYmxlQWx0ZXJPcGVyYXRpb25zO1xuICB9XG5cbiAgLy8gaW5jbHVkZV90cmFuc2FjdGlvbl9kZXRhaWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnaW5jbHVkZV90cmFuc2FjdGlvbl9kZXRhaWxzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMoKSB7XG4gICAgdGhpcy5faW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlsc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzO1xuICB9XG5cbiAgLy8gbWVzc2FnZV9mb3JtYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWVzc2FnZUZvcm1hdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWVzc2FnZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21lc3NhZ2VfZm9ybWF0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNzYWdlRm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tZXNzYWdlRm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWVzc2FnZUZvcm1hdCgpIHtcbiAgICB0aGlzLl9tZXNzYWdlRm9ybWF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtZXNzYWdlRm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VGb3JtYXQ7XG4gIH1cblxuICAvLyBtZXNzYWdlX21heF9ieXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXNzYWdlTWF4Qnl0ZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VNYXhCeXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21lc3NhZ2VfbWF4X2J5dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXNzYWdlTWF4Qnl0ZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21lc3NhZ2VNYXhCeXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1lc3NhZ2VNYXhCeXRlcygpIHtcbiAgICB0aGlzLl9tZXNzYWdlTWF4Qnl0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VNYXhCeXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlTWF4Qnl0ZXM7XG4gIH1cblxuICAvLyBub19oZXhfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX25vSGV4UHJlZml4PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBub0hleFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdub19oZXhfcHJlZml4JykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgbm9IZXhQcmVmaXgodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX25vSGV4UHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Tm9IZXhQcmVmaXgoKSB7XG4gICAgdGhpcy5fbm9IZXhQcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5vSGV4UHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vSGV4UHJlZml4O1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX2luY2x1ZGVfc2NoZW1hX3RhYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3BhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlKCkge1xuICAgIHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uSW5jbHVkZVNjaGVtYVRhYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZTtcbiAgfVxuXG4gIC8vIHNhc2xfcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2FzbFBhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzYXNsUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzYXNsX3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzYXNsUGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Nhc2xQYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNhc2xQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9zYXNsUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNhc2xQYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zYXNsUGFzc3dvcmQ7XG4gIH1cblxuICAvLyBzYXNsX3VzZXJuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Nhc2xVc2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2FzbFVzZXJuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2FzbF91c2VybmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2FzbFVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zYXNsVXNlcm5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTYXNsVXNlcm5hbWUoKSB7XG4gICAgdGhpcy5fc2FzbFVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzYXNsVXNlcm5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2FzbFVzZXJuYW1lO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfcHJvdG9jb2wgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2VjdXJpdHlQcm90b2NvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlQcm90b2NvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3VyaXR5X3Byb3RvY29sJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZWN1cml0eVByb3RvY29sKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWN1cml0eVByb3RvY29sID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VjdXJpdHlQcm90b2NvbCgpIHtcbiAgICB0aGlzLl9zZWN1cml0eVByb3RvY29sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eVByb3RvY29sSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5UHJvdG9jb2w7XG4gIH1cblxuICAvLyBzc2xfY2FfY2VydGlmaWNhdGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzbENhQ2VydGlmaWNhdGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNzbENhQ2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfY2FfY2VydGlmaWNhdGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2xDYUNlcnRpZmljYXRlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zc2xDYUNlcnRpZmljYXRlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NsQ2FDZXJ0aWZpY2F0ZUFybigpIHtcbiAgICB0aGlzLl9zc2xDYUNlcnRpZmljYXRlQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzc2xDYUNlcnRpZmljYXRlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzbENhQ2VydGlmaWNhdGVBcm47XG4gIH1cblxuICAvLyBzc2xfY2xpZW50X2NlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zc2xDbGllbnRDZXJ0aWZpY2F0ZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfY2xpZW50X2NlcnRpZmljYXRlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzbENsaWVudENlcnRpZmljYXRlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4oKSB7XG4gICAgdGhpcy5fc3NsQ2xpZW50Q2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzbENsaWVudENlcnRpZmljYXRlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzbENsaWVudENlcnRpZmljYXRlQXJuO1xuICB9XG5cbiAgLy8gc3NsX2NsaWVudF9rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzbENsaWVudEtleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3NsQ2xpZW50S2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc3NsX2NsaWVudF9rZXlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzc2xDbGllbnRLZXlBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzbENsaWVudEtleUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzbENsaWVudEtleUFybigpIHtcbiAgICB0aGlzLl9zc2xDbGllbnRLZXlBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzbENsaWVudEtleUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2xDbGllbnRLZXlBcm47XG4gIH1cblxuICAvLyBzc2xfY2xpZW50X2tleV9wYXNzd29yZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zc2xDbGllbnRLZXlQYXNzd29yZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc3NsQ2xpZW50S2V5UGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfY2xpZW50X2tleV9wYXNzd29yZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3NsQ2xpZW50S2V5UGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NzbENsaWVudEtleVBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3NsQ2xpZW50S2V5UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5fc3NsQ2xpZW50S2V5UGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNzbENsaWVudEtleVBhc3N3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NzbENsaWVudEtleVBhc3N3b3JkO1xuICB9XG5cbiAgLy8gdG9waWMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdG9waWM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRvcGljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndG9waWMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRvcGljKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90b3BpYyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRvcGljKCkge1xuICAgIHRoaXMuX3RvcGljID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0b3BpY0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90b3BpYztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEbXNFbmRwb2ludEtpbmVzaXNTZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5jbHVkZUNvbnRyb2xEZXRhaWxzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmNsdWRlTnVsbEFuZEVtcHR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVQYXJ0aXRpb25WYWx1ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZUZvcm1hdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlQWNjZXNzUm9sZUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RyZWFtQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEbXNFbmRwb2ludEtpbmVzaXNTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5jbHVkZV9jb250cm9sX2RldGFpbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVDb250cm9sRGV0YWlscyksXG4gICAgaW5jbHVkZV9udWxsX2FuZF9lbXB0eTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZU51bGxBbmRFbXB0eSksXG4gICAgaW5jbHVkZV9wYXJ0aXRpb25fdmFsdWU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVQYXJ0aXRpb25WYWx1ZSksXG4gICAgaW5jbHVkZV90YWJsZV9hbHRlcl9vcGVyYXRpb25zOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMpLFxuICAgIGluY2x1ZGVfdHJhbnNhY3Rpb25fZGV0YWlsczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscyksXG4gICAgbWVzc2FnZV9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWVzc2FnZUZvcm1hdCksXG4gICAgcGFydGl0aW9uX2luY2x1ZGVfc2NoZW1hX3RhYmxlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUpLFxuICAgIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VBY2Nlc3NSb2xlQXJuKSxcbiAgICBzdHJlYW1fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmVhbUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVDb250cm9sRGV0YWlscyA9IHRoaXMuX2luY2x1ZGVDb250cm9sRGV0YWlscztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVOdWxsQW5kRW1wdHkgPSB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5jbHVkZVBhcnRpdGlvblZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbmNsdWRlUGFydGl0aW9uVmFsdWUgPSB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmluY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB0aGlzLl9pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWVzc2FnZUZvcm1hdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWVzc2FnZUZvcm1hdCA9IHRoaXMuX21lc3NhZ2VGb3JtYXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RyZWFtQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdHJlYW1Bcm4gPSB0aGlzLl9zdHJlYW1Bcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEbXNFbmRwb2ludEtpbmVzaXNTZXR0aW5ncyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2luY2x1ZGVDb250cm9sRGV0YWlscyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlUGFydGl0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RyZWFtQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB2YWx1ZS5pbmNsdWRlQ29udHJvbERldGFpbHM7XG4gICAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdmFsdWUuaW5jbHVkZU51bGxBbmRFbXB0eTtcbiAgICAgIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHZhbHVlLmluY2x1ZGVQYXJ0aXRpb25WYWx1ZTtcbiAgICAgIHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHZhbHVlLmluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucztcbiAgICAgIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHMgPSB2YWx1ZS5pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzO1xuICAgICAgdGhpcy5fbWVzc2FnZUZvcm1hdCA9IHZhbHVlLm1lc3NhZ2VGb3JtYXQ7XG4gICAgICB0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUgPSB2YWx1ZS5wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGU7XG4gICAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHZhbHVlLnNlcnZpY2VBY2Nlc3NSb2xlQXJuO1xuICAgICAgdGhpcy5fc3RyZWFtQXJuID0gdmFsdWUuc3RyZWFtQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluY2x1ZGVfY29udHJvbF9kZXRhaWxzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2luY2x1ZGVDb250cm9sRGV0YWlscz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZUNvbnRyb2xEZXRhaWxzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfY29udHJvbF9kZXRhaWxzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgaW5jbHVkZUNvbnRyb2xEZXRhaWxzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlQ29udHJvbERldGFpbHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbmNsdWRlQ29udHJvbERldGFpbHMoKSB7XG4gICAgdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlQ29udHJvbERldGFpbHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZUNvbnRyb2xEZXRhaWxzO1xuICB9XG5cbiAgLy8gaW5jbHVkZV9udWxsX2FuZF9lbXB0eSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlTnVsbEFuZEVtcHR5PzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbEFuZEVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfbnVsbF9hbmRfZW1wdHknKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlTnVsbEFuZEVtcHR5KHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZU51bGxBbmRFbXB0eSgpIHtcbiAgICB0aGlzLl9pbmNsdWRlTnVsbEFuZEVtcHR5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlTnVsbEFuZEVtcHR5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVOdWxsQW5kRW1wdHk7XG4gIH1cblxuICAvLyBpbmNsdWRlX3BhcnRpdGlvbl92YWx1ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlUGFydGl0aW9uVmFsdWU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVQYXJ0aXRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3BhcnRpdGlvbl92YWx1ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGluY2x1ZGVQYXJ0aXRpb25WYWx1ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5faW5jbHVkZVBhcnRpdGlvblZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZVBhcnRpdGlvblZhbHVlKCkge1xuICAgIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVBhcnRpdGlvblZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVQYXJ0aXRpb25WYWx1ZTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfdGFibGVfYWx0ZXJfb3BlcmF0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3RhYmxlX2FsdGVyX29wZXJhdGlvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2luY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9ucygpIHtcbiAgICB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluY2x1ZGVUYWJsZUFsdGVyT3BlcmF0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlVGFibGVBbHRlck9wZXJhdGlvbnM7XG4gIH1cblxuICAvLyBpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgaW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdpbmNsdWRlX3RyYW5zYWN0aW9uX2RldGFpbHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBpbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5jbHVkZVRyYW5zYWN0aW9uRGV0YWlscygpIHtcbiAgICB0aGlzLl9pbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbmNsdWRlVHJhbnNhY3Rpb25EZXRhaWxzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVUcmFuc2FjdGlvbkRldGFpbHM7XG4gIH1cblxuICAvLyBtZXNzYWdlX2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tZXNzYWdlRm9ybWF0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXNzYWdlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWVzc2FnZV9mb3JtYXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1lc3NhZ2VGb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21lc3NhZ2VGb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNZXNzYWdlRm9ybWF0KCkge1xuICAgIHRoaXMuX21lc3NhZ2VGb3JtYXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1lc3NhZ2VGb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUZvcm1hdDtcbiAgfVxuXG4gIC8vIHBhcnRpdGlvbl9pbmNsdWRlX3NjaGVtYV90YWJsZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGU/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdwYXJ0aXRpb25faW5jbHVkZV9zY2hlbWFfdGFibGUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3BhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZSgpIHtcbiAgICB0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbkluY2x1ZGVTY2hlbWFUYWJsZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJ0aXRpb25JbmNsdWRlU2NoZW1hVGFibGU7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2FjY2Vzc19yb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlQWNjZXNzUm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2FjY2Vzc19yb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmljZUFjY2Vzc1JvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VydmljZUFjY2Vzc1JvbGVBcm4oKSB7XG4gICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZpY2VBY2Nlc3NSb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VBY2Nlc3NSb2xlQXJuO1xuICB9XG5cbiAgLy8gc3RyZWFtX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdHJlYW1Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHN0cmVhbUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0cmVhbV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHN0cmVhbUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RyZWFtQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RyZWFtQXJuKCkge1xuICAgIHRoaXMuX3N0cmVhbUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RyZWFtQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmVhbUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aE1lY2hhbmlzbT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhdXRoU291cmNlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0aFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRvY3NUb0ludmVzdGlnYXRlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4dHJhY3REb2NJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmVzdGluZ0xldmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5nc091dHB1dFJlZmVyZW5jZSB8IERtc0VuZHBvaW50TW9uZ29kYlNldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYXV0aF9tZWNoYW5pc206IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aE1lY2hhbmlzbSksXG4gICAgYXV0aF9zb3VyY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXV0aFNvdXJjZSksXG4gICAgYXV0aF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF1dGhUeXBlKSxcbiAgICBkb2NzX3RvX2ludmVzdGlnYXRlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRvY3NUb0ludmVzdGlnYXRlKSxcbiAgICBleHRyYWN0X2RvY19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5leHRyYWN0RG9jSWQpLFxuICAgIG5lc3RpbmdfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmVzdGluZ0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3MgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2F1dGhNZWNoYW5pc20pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dGhNZWNoYW5pc20gPSB0aGlzLl9hdXRoTWVjaGFuaXNtO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXV0aFNvdXJjZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aFNvdXJjZSA9IHRoaXMuX2F1dGhTb3VyY2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdXRoVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXV0aFR5cGUgPSB0aGlzLl9hdXRoVHlwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvY3NUb0ludmVzdGlnYXRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kb2NzVG9JbnZlc3RpZ2F0ZSA9IHRoaXMuX2RvY3NUb0ludmVzdGlnYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0cmFjdERvY0lkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leHRyYWN0RG9jSWQgPSB0aGlzLl9leHRyYWN0RG9jSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uZXN0aW5nTGV2ZWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5lc3RpbmdMZXZlbCA9IHRoaXMuX25lc3RpbmdMZXZlbDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IERtc0VuZHBvaW50TW9uZ29kYlNldHRpbmdzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXV0aE1lY2hhbmlzbSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2F1dGhTb3VyY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hdXRoVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RvY3NUb0ludmVzdGlnYXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZXh0cmFjdERvY0lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmVzdGluZ0xldmVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hdXRoTWVjaGFuaXNtID0gdmFsdWUuYXV0aE1lY2hhbmlzbTtcbiAgICAgIHRoaXMuX2F1dGhTb3VyY2UgPSB2YWx1ZS5hdXRoU291cmNlO1xuICAgICAgdGhpcy5fYXV0aFR5cGUgPSB2YWx1ZS5hdXRoVHlwZTtcbiAgICAgIHRoaXMuX2RvY3NUb0ludmVzdGlnYXRlID0gdmFsdWUuZG9jc1RvSW52ZXN0aWdhdGU7XG4gICAgICB0aGlzLl9leHRyYWN0RG9jSWQgPSB2YWx1ZS5leHRyYWN0RG9jSWQ7XG4gICAgICB0aGlzLl9uZXN0aW5nTGV2ZWwgPSB2YWx1ZS5uZXN0aW5nTGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0aF9tZWNoYW5pc20gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXV0aE1lY2hhbmlzbT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aE1lY2hhbmlzbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F1dGhfbWVjaGFuaXNtJyk7XG4gIH1cbiAgcHVibGljIHNldCBhdXRoTWVjaGFuaXNtKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRoTWVjaGFuaXNtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXV0aE1lY2hhbmlzbSgpIHtcbiAgICB0aGlzLl9hdXRoTWVjaGFuaXNtID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRoTWVjaGFuaXNtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dGhNZWNoYW5pc207XG4gIH1cblxuICAvLyBhdXRoX3NvdXJjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRoU291cmNlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBhdXRoU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXV0aF9zb3VyY2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhTb3VyY2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2F1dGhTb3VyY2UgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRoU291cmNlKCkge1xuICAgIHRoaXMuX2F1dGhTb3VyY2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGF1dGhTb3VyY2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aFNvdXJjZTtcbiAgfVxuXG4gIC8vIGF1dGhfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hdXRoVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXV0aFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhdXRoX3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGF1dGhUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9hdXRoVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEF1dGhUeXBlKCkge1xuICAgIHRoaXMuX2F1dGhUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRoVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoVHlwZTtcbiAgfVxuXG4gIC8vIGRvY3NfdG9faW52ZXN0aWdhdGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZG9jc1RvSW52ZXN0aWdhdGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRvY3NUb0ludmVzdGlnYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9jc190b19pbnZlc3RpZ2F0ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9jc1RvSW52ZXN0aWdhdGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RvY3NUb0ludmVzdGlnYXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RG9jc1RvSW52ZXN0aWdhdGUoKSB7XG4gICAgdGhpcy5fZG9jc1RvSW52ZXN0aWdhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRvY3NUb0ludmVzdGlnYXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3NUb0ludmVzdGlnYXRlO1xuICB9XG5cbiAgLy8gZXh0cmFjdF9kb2NfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXh0cmFjdERvY0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBleHRyYWN0RG9jSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdleHRyYWN0X2RvY19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0cmFjdERvY0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9leHRyYWN0RG9jSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFeHRyYWN0RG9jSWQoKSB7XG4gICAgdGhpcy5fZXh0cmFjdERvY0lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBleHRyYWN0RG9jSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmFjdERvY0lkO1xuICB9XG5cbiAgLy8gbmVzdGluZ19sZXZlbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uZXN0aW5nTGV2ZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5lc3RpbmdMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25lc3RpbmdfbGV2ZWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5lc3RpbmdMZXZlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmVzdGluZ0xldmVsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TmVzdGluZ0xldmVsKCkge1xuICAgIHRoaXMuX25lc3RpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmVzdGluZ0xldmVsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25lc3RpbmdMZXZlbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBEbXNFbmRwb2ludFMzU2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXRGb2xkZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcHJlc3Npb25UeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjc3ZEZWxpbWl0ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3N2Um93RGVsaW1pdGVyPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGFGb3JtYXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGVQYXJ0aXRpb25FbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5jcnlwdGlvbk1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4dGVybmFsVGFibGVEZWZpbml0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFycXVldFZlcnNpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcnZpY2VBY2Nlc3NSb2xlQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG1zRW5kcG9pbnRTM1NldHRpbmdzVG9UZXJyYWZvcm0oc3RydWN0PzogRG1zRW5kcG9pbnRTM1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIHwgRG1zRW5kcG9pbnRTM1NldHRpbmdzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2ZvbGRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRGb2xkZXIpLFxuICAgIGJ1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgIGNvbXByZXNzaW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3Npb25UeXBlKSxcbiAgICBjc3ZfZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNzdkRlbGltaXRlciksXG4gICAgY3N2X3Jvd19kZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY3N2Um93RGVsaW1pdGVyKSxcbiAgICBkYXRhX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhRm9ybWF0KSxcbiAgICBkYXRlX3BhcnRpdGlvbl9lbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRlUGFydGl0aW9uRW5hYmxlZCksXG4gICAgZW5jcnlwdGlvbl9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRpb25Nb2RlKSxcbiAgICBleHRlcm5hbF90YWJsZV9kZWZpbml0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmV4dGVybmFsVGFibGVEZWZpbml0aW9uKSxcbiAgICBwYXJxdWV0X3RpbWVzdGFtcF9pbl9taWxsaXNlY29uZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEucGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQpLFxuICAgIHBhcnF1ZXRfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJxdWV0VmVyc2lvbiksXG4gICAgc2VydmVyX3NpZGVfZW5jcnlwdGlvbl9rbXNfa2V5X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQpLFxuICAgIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VBY2Nlc3NSb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG1zRW5kcG9pbnRTM1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IERtc0VuZHBvaW50UzNTZXR0aW5ncyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0Rm9sZGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRGb2xkZXIgPSB0aGlzLl9idWNrZXRGb2xkZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWNrZXROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXROYW1lID0gdGhpcy5fYnVja2V0TmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXByZXNzaW9uVHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcHJlc3Npb25UeXBlID0gdGhpcy5fY29tcHJlc3Npb25UeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3N2RGVsaW1pdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jc3ZEZWxpbWl0ZXIgPSB0aGlzLl9jc3ZEZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jc3ZSb3dEZWxpbWl0ZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNzdlJvd0RlbGltaXRlciA9IHRoaXMuX2NzdlJvd0RlbGltaXRlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RhdGFGb3JtYXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFGb3JtYXQgPSB0aGlzLl9kYXRhRm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGF0ZVBhcnRpdGlvbkVuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGVQYXJ0aXRpb25FbmFibGVkID0gdGhpcy5fZGF0ZVBhcnRpdGlvbkVuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lbmNyeXB0aW9uTW9kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5jcnlwdGlvbk1vZGUgPSB0aGlzLl9lbmNyeXB0aW9uTW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5leHRlcm5hbFRhYmxlRGVmaW5pdGlvbiA9IHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kID0gdGhpcy5fcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJxdWV0VmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFycXVldFZlcnNpb24gPSB0aGlzLl9wYXJxdWV0VmVyc2lvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlcnZpY2VBY2Nlc3NSb2xlQXJuID0gdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBEbXNFbmRwb2ludFMzU2V0dGluZ3MgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXRGb2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWNrZXROYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29tcHJlc3Npb25UeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3N2RGVsaW1pdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3N2Um93RGVsaW1pdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGF0YUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RhdGVQYXJ0aXRpb25FbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGlvbk1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9leHRlcm5hbFRhYmxlRGVmaW5pdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFycXVldFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldEZvbGRlciA9IHZhbHVlLmJ1Y2tldEZvbGRlcjtcbiAgICAgIHRoaXMuX2J1Y2tldE5hbWUgPSB2YWx1ZS5idWNrZXROYW1lO1xuICAgICAgdGhpcy5fY29tcHJlc3Npb25UeXBlID0gdmFsdWUuY29tcHJlc3Npb25UeXBlO1xuICAgICAgdGhpcy5fY3N2RGVsaW1pdGVyID0gdmFsdWUuY3N2RGVsaW1pdGVyO1xuICAgICAgdGhpcy5fY3N2Um93RGVsaW1pdGVyID0gdmFsdWUuY3N2Um93RGVsaW1pdGVyO1xuICAgICAgdGhpcy5fZGF0YUZvcm1hdCA9IHZhbHVlLmRhdGFGb3JtYXQ7XG4gICAgICB0aGlzLl9kYXRlUGFydGl0aW9uRW5hYmxlZCA9IHZhbHVlLmRhdGVQYXJ0aXRpb25FbmFibGVkO1xuICAgICAgdGhpcy5fZW5jcnlwdGlvbk1vZGUgPSB2YWx1ZS5lbmNyeXB0aW9uTW9kZTtcbiAgICAgIHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uID0gdmFsdWUuZXh0ZXJuYWxUYWJsZURlZmluaXRpb247XG4gICAgICB0aGlzLl9wYXJxdWV0VGltZXN0YW1wSW5NaWxsaXNlY29uZCA9IHZhbHVlLnBhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kO1xuICAgICAgdGhpcy5fcGFycXVldFZlcnNpb24gPSB2YWx1ZS5wYXJxdWV0VmVyc2lvbjtcbiAgICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB2YWx1ZS5zZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkO1xuICAgICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB2YWx1ZS5zZXJ2aWNlQWNjZXNzUm9sZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXRfZm9sZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1Y2tldEZvbGRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVja2V0Rm9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X2ZvbGRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0Rm9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXRGb2xkZXIgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWNrZXRGb2xkZXIoKSB7XG4gICAgdGhpcy5fYnVja2V0Rm9sZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRGb2xkZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0Rm9sZGVyO1xuICB9XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVja2V0TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXROYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVja2V0TmFtZSgpIHtcbiAgICB0aGlzLl9idWNrZXROYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldE5hbWU7XG4gIH1cblxuICAvLyBjb21wcmVzc2lvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXByZXNzaW9uVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHJlc3Npb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcHJlc3Npb25UeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wcmVzc2lvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wcmVzc2lvblR5cGUoKSB7XG4gICAgdGhpcy5fY29tcHJlc3Npb25UeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wcmVzc2lvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHJlc3Npb25UeXBlO1xuICB9XG5cbiAgLy8gY3N2X2RlbGltaXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jc3ZEZWxpbWl0ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNzdkRlbGltaXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nzdl9kZWxpbWl0ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNzdkRlbGltaXRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3N2RGVsaW1pdGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3N2RGVsaW1pdGVyKCkge1xuICAgIHRoaXMuX2NzdkRlbGltaXRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3N2RGVsaW1pdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NzdkRlbGltaXRlcjtcbiAgfVxuXG4gIC8vIGNzdl9yb3dfZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NzdlJvd0RlbGltaXRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3N2Um93RGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3N2X3Jvd19kZWxpbWl0ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNzdlJvd0RlbGltaXRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY3N2Um93RGVsaW1pdGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3N2Um93RGVsaW1pdGVyKCkge1xuICAgIHRoaXMuX2NzdlJvd0RlbGltaXRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3N2Um93RGVsaW1pdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NzdlJvd0RlbGltaXRlcjtcbiAgfVxuXG4gIC8vIGRhdGFfZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFGb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YUZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YUZvcm1hdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhdGFGb3JtYXQoKSB7XG4gICAgdGhpcy5fZGF0YUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YUZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhRm9ybWF0O1xuICB9XG5cbiAgLy8gZGF0ZV9wYXJ0aXRpb25fZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYXRlUGFydGl0aW9uRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZGF0ZVBhcnRpdGlvbkVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZGF0ZV9wYXJ0aXRpb25fZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGVQYXJ0aXRpb25FbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9kYXRlUGFydGl0aW9uRW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERhdGVQYXJ0aXRpb25FbmFibGVkKCkge1xuICAgIHRoaXMuX2RhdGVQYXJ0aXRpb25FbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkYXRlUGFydGl0aW9uRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlUGFydGl0aW9uRW5hYmxlZDtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmNyeXB0aW9uTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlbmNyeXB0aW9uX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuY3J5cHRpb25Nb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmNyeXB0aW9uTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuY3J5cHRpb25Nb2RlKCkge1xuICAgIHRoaXMuX2VuY3J5cHRpb25Nb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmNyeXB0aW9uTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uTW9kZTtcbiAgfVxuXG4gIC8vIGV4dGVybmFsX3RhYmxlX2RlZmluaXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXh0ZXJuYWxUYWJsZURlZmluaXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGV4dGVybmFsVGFibGVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXh0ZXJuYWxfdGFibGVfZGVmaW5pdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0ZXJuYWxUYWJsZURlZmluaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RXh0ZXJuYWxUYWJsZURlZmluaXRpb24oKSB7XG4gICAgdGhpcy5fZXh0ZXJuYWxUYWJsZURlZmluaXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dGVybmFsVGFibGVEZWZpbml0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVybmFsVGFibGVEZWZpbml0aW9uO1xuICB9XG5cbiAgLy8gcGFycXVldF90aW1lc3RhbXBfaW5fbWlsbGlzZWNvbmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHBhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3BhcnF1ZXRfdGltZXN0YW1wX2luX21pbGxpc2Vjb25kJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3BhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQoKSB7XG4gICAgdGhpcy5fcGFycXVldFRpbWVzdGFtcEluTWlsbGlzZWNvbmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnF1ZXRUaW1lc3RhbXBJbk1pbGxpc2Vjb25kO1xuICB9XG5cbiAgLy8gcGFycXVldF92ZXJzaW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcnF1ZXRWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXJxdWV0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcnF1ZXRfdmVyc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFycXVldFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcnF1ZXRWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFycXVldFZlcnNpb24oKSB7XG4gICAgdGhpcy5fcGFycXVldFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnF1ZXRWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnF1ZXRWZXJzaW9uO1xuICB9XG5cbiAgLy8gc2VydmVyX3NpZGVfZW5jcnlwdGlvbl9rbXNfa2V5X2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uX2ttc19rZXlfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2ZXJTaWRlRW5jcnlwdGlvbkttc0tleUlkKCkge1xuICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uS21zS2V5SWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb25LbXNLZXlJZDtcbiAgfVxuXG4gIC8vIHNlcnZpY2VfYWNjZXNzX3JvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZpY2VBY2Nlc3NSb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlQWNjZXNzUm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfYWNjZXNzX3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlQWNjZXNzUm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlQWNjZXNzUm9sZUFybigpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUFjY2Vzc1JvbGVBcm47XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBEbXNFbmRwb2ludCBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19kbXNfZW5kcG9pbnRcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERtc0VuZHBvaW50Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NfZG1zX2VuZHBvaW50JyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gY29uZmlnLmNlcnRpZmljYXRlQXJuO1xuICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IGNvbmZpZy5kYXRhYmFzZU5hbWU7XG4gICAgdGhpcy5fZW5kcG9pbnRJZCA9IGNvbmZpZy5lbmRwb2ludElkO1xuICAgIHRoaXMuX2VuZHBvaW50VHlwZSA9IGNvbmZpZy5lbmRwb2ludFR5cGU7XG4gICAgdGhpcy5fZW5naW5lTmFtZSA9IGNvbmZpZy5lbmdpbmVOYW1lO1xuICAgIHRoaXMuX2V4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXMgPSBjb25maWcuZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcztcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSBjb25maWcua21zS2V5QXJuO1xuICAgIHRoaXMuX3Bhc3N3b3JkID0gY29uZmlnLnBhc3N3b3JkO1xuICAgIHRoaXMuX3BvcnQgPSBjb25maWcucG9ydDtcbiAgICB0aGlzLl9zZXJ2ZXJOYW1lID0gY29uZmlnLnNlcnZlck5hbWU7XG4gICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGUgPSBjb25maWcuc2VydmljZUFjY2Vzc1JvbGU7XG4gICAgdGhpcy5fc3NsTW9kZSA9IGNvbmZpZy5zc2xNb2RlO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fdXNlcm5hbWUgPSBjb25maWcudXNlcm5hbWU7XG4gICAgdGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzLmludGVybmFsVmFsdWUgPSBjb25maWcuZWxhc3RpY3NlYXJjaFNldHRpbmdzO1xuICAgIHRoaXMuX2thZmthU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5rYWZrYVNldHRpbmdzO1xuICAgIHRoaXMuX2tpbmVzaXNTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmtpbmVzaXNTZXR0aW5ncztcbiAgICB0aGlzLl9tb25nb2RiU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5tb25nb2RiU2V0dGluZ3M7XG4gICAgdGhpcy5fczNTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnMzU2V0dGluZ3M7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGNlcnRpZmljYXRlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NlcnRpZmljYXRlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjZXJ0aWZpY2F0ZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NlcnRpZmljYXRlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2VydGlmaWNhdGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NlcnRpZmljYXRlQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2VydGlmaWNhdGVBcm4oKSB7XG4gICAgdGhpcy5fY2VydGlmaWNhdGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNlcnRpZmljYXRlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NlcnRpZmljYXRlQXJuO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kYXRhYmFzZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGF0YWJhc2VOYW1lKCkge1xuICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFiYXNlTmFtZTtcbiAgfVxuXG4gIC8vIGVuZHBvaW50X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuZHBvaW50QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnRfYXJuJyk7XG4gIH1cblxuICAvLyBlbmRwb2ludF9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmRwb2ludElkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmRwb2ludElkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5kcG9pbnRfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZHBvaW50SWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZHBvaW50SWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludElkO1xuICB9XG5cbiAgLy8gZW5kcG9pbnRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmRwb2ludFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGVuZHBvaW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2VuZHBvaW50X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZHBvaW50VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5kcG9pbnRUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuZHBvaW50VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRwb2ludFR5cGU7XG4gIH1cblxuICAvLyBlbmdpbmVfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9lbmdpbmVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlbmdpbmVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZW5naW5lX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuZ2luZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZ2luZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5naW5lTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmVOYW1lO1xuICB9XG5cbiAgLy8gZXh0cmFfY29ubmVjdGlvbl9hdHRyaWJ1dGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2V4dHJhX2Nvbm5lY3Rpb25fYXR0cmlidXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5fZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZXh0cmFDb25uZWN0aW9uQXR0cmlidXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9leHRyYUNvbm5lY3Rpb25BdHRyaWJ1dGVzO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuO1xuICB9XG5cbiAgLy8gcGFzc3dvcmQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMuX3Bhc3N3b3JkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXNzd29yZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXNzd29yZDtcbiAgfVxuXG4gIC8vIHBvcnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcG9ydD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BvcnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvcnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQb3J0KCkge1xuICAgIHRoaXMuX3BvcnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBvcnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydDtcbiAgfVxuXG4gIC8vIHNlcnZlcl9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZlck5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNlcnZlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2ZXJfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VydmVyTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmVyTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZlck5hbWUoKSB7XG4gICAgdGhpcy5fc2VydmVyTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmVyTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJOYW1lO1xuICB9XG5cbiAgLy8gc2VydmljZV9hY2Nlc3Nfcm9sZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJ2aWNlQWNjZXNzUm9sZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJ2aWNlX2FjY2Vzc19yb2xlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzZXJ2aWNlQWNjZXNzUm9sZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VydmljZUFjY2Vzc1JvbGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJ2aWNlQWNjZXNzUm9sZSgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VydmljZUFjY2Vzc1JvbGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmljZUFjY2Vzc1JvbGU7XG4gIH1cblxuICAvLyBzc2xfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NzbE1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNzbE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzc2xfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3NsTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3NsTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNzbE1vZGUoKSB7XG4gICAgdGhpcy5fc3NsTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3NsTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zc2xNb2RlO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHVzZXJuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3VzZXJuYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB1c2VybmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VzZXJuYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB1c2VybmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcm5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRVc2VybmFtZSgpIHtcbiAgICB0aGlzLl91c2VybmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gIH1cblxuICAvLyBlbGFzdGljc2VhcmNoX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VsYXN0aWNzZWFyY2hTZXR0aW5ncyA9IG5ldyBEbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJlbGFzdGljc2VhcmNoX3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2hTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRFbGFzdGljc2VhcmNoU2V0dGluZ3ModmFsdWU6IERtc0VuZHBvaW50RWxhc3RpY3NlYXJjaFNldHRpbmdzKSB7XG4gICAgdGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbGFzdGljc2VhcmNoU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fZWxhc3RpY3NlYXJjaFNldHRpbmdzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2hTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGFzdGljc2VhcmNoU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGthZmthX3NldHRpbmdzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2thZmthU2V0dGluZ3MgPSBuZXcgRG1zRW5kcG9pbnRLYWZrYVNldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImthZmthX3NldHRpbmdzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGthZmthU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2thZmthU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dEthZmthU2V0dGluZ3ModmFsdWU6IERtc0VuZHBvaW50S2Fma2FTZXR0aW5ncykge1xuICAgIHRoaXMuX2thZmthU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEthZmthU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5fa2Fma2FTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrYWZrYVNldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2thZmthU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGtpbmVzaXNfc2V0dGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2luZXNpc1NldHRpbmdzID0gbmV3IERtc0VuZHBvaW50S2luZXNpc1NldHRpbmdzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImtpbmVzaXNfc2V0dGluZ3NcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQga2luZXNpc1NldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzU2V0dGluZ3M7XG4gIH1cbiAgcHVibGljIHB1dEtpbmVzaXNTZXR0aW5ncyh2YWx1ZTogRG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3MpIHtcbiAgICB0aGlzLl9raW5lc2lzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtpbmVzaXNTZXR0aW5ncygpIHtcbiAgICB0aGlzLl9raW5lc2lzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2luZXNpc1NldHRpbmdzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmVzaXNTZXR0aW5ncy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbW9uZ29kYl9zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tb25nb2RiU2V0dGluZ3MgPSBuZXcgRG1zRW5kcG9pbnRNb25nb2RiU2V0dGluZ3NPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibW9uZ29kYl9zZXR0aW5nc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtb25nb2RiU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbmdvZGJTZXR0aW5ncztcbiAgfVxuICBwdWJsaWMgcHV0TW9uZ29kYlNldHRpbmdzKHZhbHVlOiBEbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5ncykge1xuICAgIHRoaXMuX21vbmdvZGJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TW9uZ29kYlNldHRpbmdzKCkge1xuICAgIHRoaXMuX21vbmdvZGJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtb25nb2RiU2V0dGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9uZ29kYlNldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzM19zZXR0aW5ncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM1NldHRpbmdzID0gbmV3IERtc0VuZHBvaW50UzNTZXR0aW5nc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzM19zZXR0aW5nc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzM1NldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLl9zM1NldHRpbmdzO1xuICB9XG4gIHB1YmxpYyBwdXRTM1NldHRpbmdzKHZhbHVlOiBEbXNFbmRwb2ludFMzU2V0dGluZ3MpIHtcbiAgICB0aGlzLl9zM1NldHRpbmdzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM1NldHRpbmdzKCkge1xuICAgIHRoaXMuX3MzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNTZXR0aW5nc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM1NldHRpbmdzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlcnRpZmljYXRlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fY2VydGlmaWNhdGVBcm4pLFxuICAgICAgZGF0YWJhc2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGF0YWJhc2VOYW1lKSxcbiAgICAgIGVuZHBvaW50X2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9lbmRwb2ludElkKSxcbiAgICAgIGVuZHBvaW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2VuZHBvaW50VHlwZSksXG4gICAgICBlbmdpbmVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZW5naW5lTmFtZSksXG4gICAgICBleHRyYV9jb25uZWN0aW9uX2F0dHJpYnV0ZXM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2V4dHJhQ29ubmVjdGlvbkF0dHJpYnV0ZXMpLFxuICAgICAga21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2ttc0tleUFybiksXG4gICAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fcGFzc3dvcmQpLFxuICAgICAgcG9ydDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fcG9ydCksXG4gICAgICBzZXJ2ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc2VydmVyTmFtZSksXG4gICAgICBzZXJ2aWNlX2FjY2Vzc19yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlQWNjZXNzUm9sZSksXG4gICAgICBzc2xfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fc3NsTW9kZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHVzZXJuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl91c2VybmFtZSksXG4gICAgICBlbGFzdGljc2VhcmNoX3NldHRpbmdzOiBkbXNFbmRwb2ludEVsYXN0aWNzZWFyY2hTZXR0aW5nc1RvVGVycmFmb3JtKHRoaXMuX2VsYXN0aWNzZWFyY2hTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGthZmthX3NldHRpbmdzOiBkbXNFbmRwb2ludEthZmthU2V0dGluZ3NUb1RlcnJhZm9ybSh0aGlzLl9rYWZrYVNldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgICAga2luZXNpc19zZXR0aW5nczogZG1zRW5kcG9pbnRLaW5lc2lzU2V0dGluZ3NUb1RlcnJhZm9ybSh0aGlzLl9raW5lc2lzU2V0dGluZ3MuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBtb25nb2RiX3NldHRpbmdzOiBkbXNFbmRwb2ludE1vbmdvZGJTZXR0aW5nc1RvVGVycmFmb3JtKHRoaXMuX21vbmdvZGJTZXR0aW5ncy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHMzX3NldHRpbmdzOiBkbXNFbmRwb2ludFMzU2V0dGluZ3NUb1RlcnJhZm9ybSh0aGlzLl9zM1NldHRpbmdzLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==