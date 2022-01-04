"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KinesisFirehoseDeliveryStream = exports.KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform = exports.kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform = exports.kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform = exports.KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference = exports.kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform = exports.KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform = exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform = exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform = exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform = exports.KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform = exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform = exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform = exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform = exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform = exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform = exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform = exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference = exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform = exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference = exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform = exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform = exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference = exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference[_a] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform = kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform;
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform = kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform;
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform = kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    /**
     * @stability stable
     */
    set processors(value) {
        this._processors = value;
    }
    /**
     * @stability stable
     */
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processorsInput() {
        return this._processors;
    }
}
exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference = KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference;
_b = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference[_b] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform = kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._securityGroupIds) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._roleArn = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._roleArn = value.roleArn;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    /**
     * @stability stable
     */
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    /**
     * @stability stable
     */
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    /**
     * @stability stable
     */
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get subnetIdsInput() {
        return this._subnetIds;
    }
}
exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference = KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference;
_c = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference[_c] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        buffering_interval: cdktf.numberToTerraform(struct.bufferingInterval),
        buffering_size: cdktf.numberToTerraform(struct.bufferingSize),
        cluster_endpoint: cdktf.stringToTerraform(struct.clusterEndpoint),
        domain_arn: cdktf.stringToTerraform(struct.domainArn),
        index_name: cdktf.stringToTerraform(struct.indexName),
        index_rotation_period: cdktf.stringToTerraform(struct.indexRotationPeriod),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        type_name: cdktf.stringToTerraform(struct.typeName),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        vpc_config: kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct.vpcConfig),
    };
}
exports.kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform = kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
        // processing_configuration - computed: false, optional: true, required: false
        this._processingConfiguration = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
        // vpc_config - computed: false, optional: true, required: false
        this._vpcConfig = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference(this, "vpc_config", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bufferingInterval) {
            hasAnyValues = true;
            internalValueResult.bufferingInterval = this._bufferingInterval;
        }
        if (this._bufferingSize) {
            hasAnyValues = true;
            internalValueResult.bufferingSize = this._bufferingSize;
        }
        if (this._clusterEndpoint) {
            hasAnyValues = true;
            internalValueResult.clusterEndpoint = this._clusterEndpoint;
        }
        if (this._domainArn) {
            hasAnyValues = true;
            internalValueResult.domainArn = this._domainArn;
        }
        if (this._indexName) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        if (this._indexRotationPeriod) {
            hasAnyValues = true;
            internalValueResult.indexRotationPeriod = this._indexRotationPeriod;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._typeName) {
            hasAnyValues = true;
            internalValueResult.typeName = this._typeName;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._processingConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = (_16 = this._processingConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._vpcConfig) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.vpcConfig = (_18 = this._vpcConfig) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bufferingInterval = undefined;
            this._bufferingSize = undefined;
            this._clusterEndpoint = undefined;
            this._domainArn = undefined;
            this._indexName = undefined;
            this._indexRotationPeriod = undefined;
            this._retryDuration = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._typeName = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._vpcConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bufferingInterval = value.bufferingInterval;
            this._bufferingSize = value.bufferingSize;
            this._clusterEndpoint = value.clusterEndpoint;
            this._domainArn = value.domainArn;
            this._indexName = value.indexName;
            this._indexRotationPeriod = value.indexRotationPeriod;
            this._retryDuration = value.retryDuration;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._typeName = value.typeName;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._vpcConfig.internalValue = value.vpcConfig;
        }
    }
    /**
     * @stability stable
     */
    get bufferingInterval() {
        return this.getNumberAttribute('buffering_interval');
    }
    /**
     * @stability stable
     */
    set bufferingInterval(value) {
        this._bufferingInterval = value;
    }
    /**
     * @stability stable
     */
    resetBufferingInterval() {
        this._bufferingInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferingIntervalInput() {
        return this._bufferingInterval;
    }
    /**
     * @stability stable
     */
    get bufferingSize() {
        return this.getNumberAttribute('buffering_size');
    }
    /**
     * @stability stable
     */
    set bufferingSize(value) {
        this._bufferingSize = value;
    }
    /**
     * @stability stable
     */
    resetBufferingSize() {
        this._bufferingSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferingSizeInput() {
        return this._bufferingSize;
    }
    /**
     * @stability stable
     */
    get clusterEndpoint() {
        return this.getStringAttribute('cluster_endpoint');
    }
    /**
     * @stability stable
     */
    set clusterEndpoint(value) {
        this._clusterEndpoint = value;
    }
    /**
     * @stability stable
     */
    resetClusterEndpoint() {
        this._clusterEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterEndpointInput() {
        return this._clusterEndpoint;
    }
    /**
     * @stability stable
     */
    get domainArn() {
        return this.getStringAttribute('domain_arn');
    }
    /**
     * @stability stable
     */
    set domainArn(value) {
        this._domainArn = value;
    }
    /**
     * @stability stable
     */
    resetDomainArn() {
        this._domainArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get domainArnInput() {
        return this._domainArn;
    }
    /**
     * @stability stable
     */
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    /**
     * @stability stable
     */
    set indexName(value) {
        this._indexName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get indexNameInput() {
        return this._indexName;
    }
    /**
     * @stability stable
     */
    get indexRotationPeriod() {
        return this.getStringAttribute('index_rotation_period');
    }
    /**
     * @stability stable
     */
    set indexRotationPeriod(value) {
        this._indexRotationPeriod = value;
    }
    /**
     * @stability stable
     */
    resetIndexRotationPeriod() {
        this._indexRotationPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get indexRotationPeriodInput() {
        return this._indexRotationPeriod;
    }
    /**
     * @stability stable
     */
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    /**
     * @stability stable
     */
    set retryDuration(value) {
        this._retryDuration = value;
    }
    /**
     * @stability stable
     */
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryDurationInput() {
        return this._retryDuration;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    /**
     * @stability stable
     */
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    /**
     * @stability stable
     */
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    /**
     * @stability stable
     */
    get typeName() {
        return this.getStringAttribute('type_name');
    }
    /**
     * @stability stable
     */
    set typeName(value) {
        this._typeName = value;
    }
    /**
     * @stability stable
     */
    resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get typeNameInput() {
        return this._typeName;
    }
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    /**
     * @stability stable
     */
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get vpcConfig() {
        return this._vpcConfig;
    }
    /**
     * @stability stable
     */
    putVpcConfig(value) {
        this._vpcConfig.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference = KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference;
_e = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference[_e] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct.timestampFormats),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._timestampFormats) {
            hasAnyValues = true;
            internalValueResult.timestampFormats = this._timestampFormats;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._timestampFormats = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._timestampFormats = value.timestampFormats;
        }
    }
    /**
     * @stability stable
     */
    get timestampFormats() {
        return this.getListAttribute('timestamp_formats');
    }
    /**
     * @stability stable
     */
    set timestampFormats(value) {
        this._timestampFormats = value;
    }
    /**
     * @stability stable
     */
    resetTimestampFormats() {
        this._timestampFormats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get timestampFormatsInput() {
        return this._timestampFormats;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference;
_f = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference[_f] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        case_insensitive: cdktf.booleanToTerraform(struct.caseInsensitive),
        column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct.columnToJsonKeyMappings),
        convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct.convertDotsInJsonKeysToUnderscores),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._caseInsensitive) {
            hasAnyValues = true;
            internalValueResult.caseInsensitive = this._caseInsensitive;
        }
        if (this._columnToJsonKeyMappings) {
            hasAnyValues = true;
            internalValueResult.columnToJsonKeyMappings = this._columnToJsonKeyMappings;
        }
        if (this._convertDotsInJsonKeysToUnderscores) {
            hasAnyValues = true;
            internalValueResult.convertDotsInJsonKeysToUnderscores = this._convertDotsInJsonKeysToUnderscores;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._caseInsensitive = undefined;
            this._columnToJsonKeyMappings = undefined;
            this._convertDotsInJsonKeysToUnderscores = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._caseInsensitive = value.caseInsensitive;
            this._columnToJsonKeyMappings = value.columnToJsonKeyMappings;
            this._convertDotsInJsonKeysToUnderscores = value.convertDotsInJsonKeysToUnderscores;
        }
    }
    /**
     * @stability stable
     */
    get caseInsensitive() {
        return this.getBooleanAttribute('case_insensitive');
    }
    /**
     * @stability stable
     */
    set caseInsensitive(value) {
        this._caseInsensitive = value;
    }
    /**
     * @stability stable
     */
    resetCaseInsensitive() {
        this._caseInsensitive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get caseInsensitiveInput() {
        return this._caseInsensitive;
    }
    /**
     * @stability stable
     */
    get columnToJsonKeyMappings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('column_to_json_key_mappings');
    }
    /**
     * @stability stable
     */
    set columnToJsonKeyMappings(value) {
        this._columnToJsonKeyMappings = value;
    }
    /**
     * @stability stable
     */
    resetColumnToJsonKeyMappings() {
        this._columnToJsonKeyMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get columnToJsonKeyMappingsInput() {
        return this._columnToJsonKeyMappings;
    }
    /**
     * @stability stable
     */
    get convertDotsInJsonKeysToUnderscores() {
        return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores');
    }
    /**
     * @stability stable
     */
    set convertDotsInJsonKeysToUnderscores(value) {
        this._convertDotsInJsonKeysToUnderscores = value;
    }
    /**
     * @stability stable
     */
    resetConvertDotsInJsonKeysToUnderscores() {
        this._convertDotsInJsonKeysToUnderscores = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get convertDotsInJsonKeysToUnderscoresInput() {
        return this._convertDotsInJsonKeysToUnderscores;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference;
_g = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference[_g] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hive_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct.hiveJsonSerDe),
        open_x_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct.openXJsonSerDe),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // hive_json_ser_de - computed: false, optional: true, required: false
        this._hiveJsonSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference(this, "hive_json_ser_de", true);
        // open_x_json_ser_de - computed: false, optional: true, required: false
        this._openXJsonSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference(this, "open_x_json_ser_de", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_13 = this._hiveJsonSerDe) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.hiveJsonSerDe = (_14 = this._hiveJsonSerDe) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._openXJsonSerDe) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.openXJsonSerDe = (_16 = this._openXJsonSerDe) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._hiveJsonSerDe.internalValue = undefined;
            this._openXJsonSerDe.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._hiveJsonSerDe.internalValue = value.hiveJsonSerDe;
            this._openXJsonSerDe.internalValue = value.openXJsonSerDe;
        }
    }
    /**
     * @stability stable
     */
    get hiveJsonSerDe() {
        return this._hiveJsonSerDe;
    }
    /**
     * @stability stable
     */
    putHiveJsonSerDe(value) {
        this._hiveJsonSerDe.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHiveJsonSerDe() {
        this._hiveJsonSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hiveJsonSerDeInput() {
        return this._hiveJsonSerDe.internalValue;
    }
    /**
     * @stability stable
     */
    get openXJsonSerDe() {
        return this._openXJsonSerDe;
    }
    /**
     * @stability stable
     */
    putOpenXJsonSerDe(value) {
        this._openXJsonSerDe.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOpenXJsonSerDe() {
        this._openXJsonSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get openXJsonSerDeInput() {
        return this._openXJsonSerDe.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference;
_h = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference[_h] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deserializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct.deserializer),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // deserializer - computed: false, optional: false, required: true
        this._deserializer = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference(this, "deserializer", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_13 = this._deserializer) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.deserializer = (_14 = this._deserializer) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deserializer.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deserializer.internalValue = value.deserializer;
        }
    }
    /**
     * @stability stable
     */
    get deserializer() {
        return this._deserializer;
    }
    /**
     * @stability stable
     */
    putDeserializer(value) {
        this._deserializer.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get deserializerInput() {
        return this._deserializer.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference[_j] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.bloomFilterColumns),
        bloom_filter_false_positive_probability: cdktf.numberToTerraform(struct.bloomFilterFalsePositiveProbability),
        compression: cdktf.stringToTerraform(struct.compression),
        dictionary_key_threshold: cdktf.numberToTerraform(struct.dictionaryKeyThreshold),
        enable_padding: cdktf.booleanToTerraform(struct.enablePadding),
        format_version: cdktf.stringToTerraform(struct.formatVersion),
        padding_tolerance: cdktf.numberToTerraform(struct.paddingTolerance),
        row_index_stride: cdktf.numberToTerraform(struct.rowIndexStride),
        stripe_size_bytes: cdktf.numberToTerraform(struct.stripeSizeBytes),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._blockSizeBytes) {
            hasAnyValues = true;
            internalValueResult.blockSizeBytes = this._blockSizeBytes;
        }
        if (this._bloomFilterColumns) {
            hasAnyValues = true;
            internalValueResult.bloomFilterColumns = this._bloomFilterColumns;
        }
        if (this._bloomFilterFalsePositiveProbability) {
            hasAnyValues = true;
            internalValueResult.bloomFilterFalsePositiveProbability = this._bloomFilterFalsePositiveProbability;
        }
        if (this._compression) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._dictionaryKeyThreshold) {
            hasAnyValues = true;
            internalValueResult.dictionaryKeyThreshold = this._dictionaryKeyThreshold;
        }
        if (this._enablePadding) {
            hasAnyValues = true;
            internalValueResult.enablePadding = this._enablePadding;
        }
        if (this._formatVersion) {
            hasAnyValues = true;
            internalValueResult.formatVersion = this._formatVersion;
        }
        if (this._paddingTolerance) {
            hasAnyValues = true;
            internalValueResult.paddingTolerance = this._paddingTolerance;
        }
        if (this._rowIndexStride) {
            hasAnyValues = true;
            internalValueResult.rowIndexStride = this._rowIndexStride;
        }
        if (this._stripeSizeBytes) {
            hasAnyValues = true;
            internalValueResult.stripeSizeBytes = this._stripeSizeBytes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._blockSizeBytes = undefined;
            this._bloomFilterColumns = undefined;
            this._bloomFilterFalsePositiveProbability = undefined;
            this._compression = undefined;
            this._dictionaryKeyThreshold = undefined;
            this._enablePadding = undefined;
            this._formatVersion = undefined;
            this._paddingTolerance = undefined;
            this._rowIndexStride = undefined;
            this._stripeSizeBytes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._blockSizeBytes = value.blockSizeBytes;
            this._bloomFilterColumns = value.bloomFilterColumns;
            this._bloomFilterFalsePositiveProbability = value.bloomFilterFalsePositiveProbability;
            this._compression = value.compression;
            this._dictionaryKeyThreshold = value.dictionaryKeyThreshold;
            this._enablePadding = value.enablePadding;
            this._formatVersion = value.formatVersion;
            this._paddingTolerance = value.paddingTolerance;
            this._rowIndexStride = value.rowIndexStride;
            this._stripeSizeBytes = value.stripeSizeBytes;
        }
    }
    /**
     * @stability stable
     */
    get blockSizeBytes() {
        return this.getNumberAttribute('block_size_bytes');
    }
    /**
     * @stability stable
     */
    set blockSizeBytes(value) {
        this._blockSizeBytes = value;
    }
    /**
     * @stability stable
     */
    resetBlockSizeBytes() {
        this._blockSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockSizeBytesInput() {
        return this._blockSizeBytes;
    }
    /**
     * @stability stable
     */
    get bloomFilterColumns() {
        return this.getListAttribute('bloom_filter_columns');
    }
    /**
     * @stability stable
     */
    set bloomFilterColumns(value) {
        this._bloomFilterColumns = value;
    }
    /**
     * @stability stable
     */
    resetBloomFilterColumns() {
        this._bloomFilterColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bloomFilterColumnsInput() {
        return this._bloomFilterColumns;
    }
    /**
     * @stability stable
     */
    get bloomFilterFalsePositiveProbability() {
        return this.getNumberAttribute('bloom_filter_false_positive_probability');
    }
    /**
     * @stability stable
     */
    set bloomFilterFalsePositiveProbability(value) {
        this._bloomFilterFalsePositiveProbability = value;
    }
    /**
     * @stability stable
     */
    resetBloomFilterFalsePositiveProbability() {
        this._bloomFilterFalsePositiveProbability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bloomFilterFalsePositiveProbabilityInput() {
        return this._bloomFilterFalsePositiveProbability;
    }
    /**
     * @stability stable
     */
    get compression() {
        return this.getStringAttribute('compression');
    }
    /**
     * @stability stable
     */
    set compression(value) {
        this._compression = value;
    }
    /**
     * @stability stable
     */
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionInput() {
        return this._compression;
    }
    /**
     * @stability stable
     */
    get dictionaryKeyThreshold() {
        return this.getNumberAttribute('dictionary_key_threshold');
    }
    /**
     * @stability stable
     */
    set dictionaryKeyThreshold(value) {
        this._dictionaryKeyThreshold = value;
    }
    /**
     * @stability stable
     */
    resetDictionaryKeyThreshold() {
        this._dictionaryKeyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dictionaryKeyThresholdInput() {
        return this._dictionaryKeyThreshold;
    }
    /**
     * @stability stable
     */
    get enablePadding() {
        return this.getBooleanAttribute('enable_padding');
    }
    /**
     * @stability stable
     */
    set enablePadding(value) {
        this._enablePadding = value;
    }
    /**
     * @stability stable
     */
    resetEnablePadding() {
        this._enablePadding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enablePaddingInput() {
        return this._enablePadding;
    }
    /**
     * @stability stable
     */
    get formatVersion() {
        return this.getStringAttribute('format_version');
    }
    /**
     * @stability stable
     */
    set formatVersion(value) {
        this._formatVersion = value;
    }
    /**
     * @stability stable
     */
    resetFormatVersion() {
        this._formatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get formatVersionInput() {
        return this._formatVersion;
    }
    /**
     * @stability stable
     */
    get paddingTolerance() {
        return this.getNumberAttribute('padding_tolerance');
    }
    /**
     * @stability stable
     */
    set paddingTolerance(value) {
        this._paddingTolerance = value;
    }
    /**
     * @stability stable
     */
    resetPaddingTolerance() {
        this._paddingTolerance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get paddingToleranceInput() {
        return this._paddingTolerance;
    }
    /**
     * @stability stable
     */
    get rowIndexStride() {
        return this.getNumberAttribute('row_index_stride');
    }
    /**
     * @stability stable
     */
    set rowIndexStride(value) {
        this._rowIndexStride = value;
    }
    /**
     * @stability stable
     */
    resetRowIndexStride() {
        this._rowIndexStride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rowIndexStrideInput() {
        return this._rowIndexStride;
    }
    /**
     * @stability stable
     */
    get stripeSizeBytes() {
        return this.getNumberAttribute('stripe_size_bytes');
    }
    /**
     * @stability stable
     */
    set stripeSizeBytes(value) {
        this._stripeSizeBytes = value;
    }
    /**
     * @stability stable
     */
    resetStripeSizeBytes() {
        this._stripeSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get stripeSizeBytesInput() {
        return this._stripeSizeBytes;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference;
_k = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference[_k] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        compression: cdktf.stringToTerraform(struct.compression),
        enable_dictionary_compression: cdktf.booleanToTerraform(struct.enableDictionaryCompression),
        max_padding_bytes: cdktf.numberToTerraform(struct.maxPaddingBytes),
        page_size_bytes: cdktf.numberToTerraform(struct.pageSizeBytes),
        writer_version: cdktf.stringToTerraform(struct.writerVersion),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._blockSizeBytes) {
            hasAnyValues = true;
            internalValueResult.blockSizeBytes = this._blockSizeBytes;
        }
        if (this._compression) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._enableDictionaryCompression) {
            hasAnyValues = true;
            internalValueResult.enableDictionaryCompression = this._enableDictionaryCompression;
        }
        if (this._maxPaddingBytes) {
            hasAnyValues = true;
            internalValueResult.maxPaddingBytes = this._maxPaddingBytes;
        }
        if (this._pageSizeBytes) {
            hasAnyValues = true;
            internalValueResult.pageSizeBytes = this._pageSizeBytes;
        }
        if (this._writerVersion) {
            hasAnyValues = true;
            internalValueResult.writerVersion = this._writerVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._blockSizeBytes = undefined;
            this._compression = undefined;
            this._enableDictionaryCompression = undefined;
            this._maxPaddingBytes = undefined;
            this._pageSizeBytes = undefined;
            this._writerVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._blockSizeBytes = value.blockSizeBytes;
            this._compression = value.compression;
            this._enableDictionaryCompression = value.enableDictionaryCompression;
            this._maxPaddingBytes = value.maxPaddingBytes;
            this._pageSizeBytes = value.pageSizeBytes;
            this._writerVersion = value.writerVersion;
        }
    }
    /**
     * @stability stable
     */
    get blockSizeBytes() {
        return this.getNumberAttribute('block_size_bytes');
    }
    /**
     * @stability stable
     */
    set blockSizeBytes(value) {
        this._blockSizeBytes = value;
    }
    /**
     * @stability stable
     */
    resetBlockSizeBytes() {
        this._blockSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get blockSizeBytesInput() {
        return this._blockSizeBytes;
    }
    /**
     * @stability stable
     */
    get compression() {
        return this.getStringAttribute('compression');
    }
    /**
     * @stability stable
     */
    set compression(value) {
        this._compression = value;
    }
    /**
     * @stability stable
     */
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionInput() {
        return this._compression;
    }
    /**
     * @stability stable
     */
    get enableDictionaryCompression() {
        return this.getBooleanAttribute('enable_dictionary_compression');
    }
    /**
     * @stability stable
     */
    set enableDictionaryCompression(value) {
        this._enableDictionaryCompression = value;
    }
    /**
     * @stability stable
     */
    resetEnableDictionaryCompression() {
        this._enableDictionaryCompression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enableDictionaryCompressionInput() {
        return this._enableDictionaryCompression;
    }
    /**
     * @stability stable
     */
    get maxPaddingBytes() {
        return this.getNumberAttribute('max_padding_bytes');
    }
    /**
     * @stability stable
     */
    set maxPaddingBytes(value) {
        this._maxPaddingBytes = value;
    }
    /**
     * @stability stable
     */
    resetMaxPaddingBytes() {
        this._maxPaddingBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maxPaddingBytesInput() {
        return this._maxPaddingBytes;
    }
    /**
     * @stability stable
     */
    get pageSizeBytes() {
        return this.getNumberAttribute('page_size_bytes');
    }
    /**
     * @stability stable
     */
    set pageSizeBytes(value) {
        this._pageSizeBytes = value;
    }
    /**
     * @stability stable
     */
    resetPageSizeBytes() {
        this._pageSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get pageSizeBytesInput() {
        return this._pageSizeBytes;
    }
    /**
     * @stability stable
     */
    get writerVersion() {
        return this.getStringAttribute('writer_version');
    }
    /**
     * @stability stable
     */
    set writerVersion(value) {
        this._writerVersion = value;
    }
    /**
     * @stability stable
     */
    resetWriterVersion() {
        this._writerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get writerVersionInput() {
        return this._writerVersion;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference;
_l = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference[_l] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        orc_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct.orcSerDe),
        parquet_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct.parquetSerDe),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // orc_ser_de - computed: false, optional: true, required: false
        this._orcSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference(this, "orc_ser_de", true);
        // parquet_ser_de - computed: false, optional: true, required: false
        this._parquetSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference(this, "parquet_ser_de", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_13 = this._orcSerDe) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.orcSerDe = (_14 = this._orcSerDe) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._parquetSerDe) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.parquetSerDe = (_16 = this._parquetSerDe) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._orcSerDe.internalValue = undefined;
            this._parquetSerDe.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._orcSerDe.internalValue = value.orcSerDe;
            this._parquetSerDe.internalValue = value.parquetSerDe;
        }
    }
    /**
     * @stability stable
     */
    get orcSerDe() {
        return this._orcSerDe;
    }
    /**
     * @stability stable
     */
    putOrcSerDe(value) {
        this._orcSerDe.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetOrcSerDe() {
        this._orcSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get orcSerDeInput() {
        return this._orcSerDe.internalValue;
    }
    /**
     * @stability stable
     */
    get parquetSerDe() {
        return this._parquetSerDe;
    }
    /**
     * @stability stable
     */
    putParquetSerDe(value) {
        this._parquetSerDe.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetParquetSerDe() {
        this._parquetSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parquetSerDeInput() {
        return this._parquetSerDe.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference;
_m = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference[_m] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        serializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct.serializer),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // serializer - computed: false, optional: false, required: true
        this._serializer = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference(this, "serializer", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_13 = this._serializer) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.serializer = (_14 = this._serializer) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._serializer.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._serializer.internalValue = value.serializer;
        }
    }
    /**
     * @stability stable
     */
    get serializer() {
        return this._serializer;
    }
    /**
     * @stability stable
     */
    putSerializer(value) {
        this._serializer.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serializerInput() {
        return this._serializer.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference;
_o = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference[_o] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        region: cdktf.stringToTerraform(struct.region),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        version_id: cdktf.stringToTerraform(struct.versionId),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._catalogId) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._databaseName) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._region) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._tableName) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._versionId) {
            hasAnyValues = true;
            internalValueResult.versionId = this._versionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._tableName = undefined;
            this._versionId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._catalogId = value.catalogId;
            this._databaseName = value.databaseName;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._tableName = value.tableName;
            this._versionId = value.versionId;
        }
    }
    /**
     * @stability stable
     */
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    /**
     * @stability stable
     */
    set catalogId(value) {
        this._catalogId = value;
    }
    /**
     * @stability stable
     */
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get catalogIdInput() {
        return this._catalogId;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get databaseNameInput() {
        return this._databaseName;
    }
    /**
     * @stability stable
     */
    get region() {
        return this.getStringAttribute('region');
    }
    /**
     * @stability stable
     */
    set region(value) {
        this._region = value;
    }
    /**
     * @stability stable
     */
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get regionInput() {
        return this._region;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    /**
     * @stability stable
     */
    set tableName(value) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tableNameInput() {
        return this._tableName;
    }
    /**
     * @stability stable
     */
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    /**
     * @stability stable
     */
    set versionId(value) {
        this._versionId = value;
    }
    /**
     * @stability stable
     */
    resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionIdInput() {
        return this._versionId;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference;
_p = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference[_p] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        input_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct.inputFormatConfiguration),
        output_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct.outputFormatConfiguration),
        schema_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct.schemaConfiguration),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // input_format_configuration - computed: false, optional: false, required: true
        this._inputFormatConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference(this, "input_format_configuration", true);
        // output_format_configuration - computed: false, optional: false, required: true
        this._outputFormatConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference(this, "output_format_configuration", true);
        // schema_configuration - computed: false, optional: false, required: true
        this._schemaConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference(this, "schema_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if ((_13 = this._inputFormatConfiguration) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.inputFormatConfiguration = (_14 = this._inputFormatConfiguration) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._outputFormatConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.outputFormatConfiguration = (_16 = this._outputFormatConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._schemaConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.schemaConfiguration = (_18 = this._schemaConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._inputFormatConfiguration.internalValue = undefined;
            this._outputFormatConfiguration.internalValue = undefined;
            this._schemaConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._inputFormatConfiguration.internalValue = value.inputFormatConfiguration;
            this._outputFormatConfiguration.internalValue = value.outputFormatConfiguration;
            this._schemaConfiguration.internalValue = value.schemaConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get inputFormatConfiguration() {
        return this._inputFormatConfiguration;
    }
    /**
     * @stability stable
     */
    putInputFormatConfiguration(value) {
        this._inputFormatConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputFormatConfigurationInput() {
        return this._inputFormatConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get outputFormatConfiguration() {
        return this._outputFormatConfiguration;
    }
    /**
     * @stability stable
     */
    putOutputFormatConfiguration(value) {
        this._outputFormatConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputFormatConfigurationInput() {
        return this._outputFormatConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get schemaConfiguration() {
        return this._schemaConfiguration;
    }
    /**
     * @stability stable
     */
    putSchemaConfiguration(value) {
        this._schemaConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaConfigurationInput() {
        return this._schemaConfiguration.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference;
_q = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference[_q] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._retryDuration = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._retryDuration = value.retryDuration;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    /**
     * @stability stable
     */
    set retryDuration(value) {
        this._retryDuration = value;
    }
    /**
     * @stability stable
     */
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryDurationInput() {
        return this._retryDuration;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference;
_r = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference[_r] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform;
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform;
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    /**
     * @stability stable
     */
    set processors(value) {
        this._processors = value;
    }
    /**
     * @stability stable
     */
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processorsInput() {
        return this._processors;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference;
_s = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference[_s] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference;
_t = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference[_t] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
        }
    }
    /**
     * @stability stable
     */
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    /**
     * @stability stable
     */
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketArnInput() {
        return this._bucketArn;
    }
    /**
     * @stability stable
     */
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    /**
     * @stability stable
     */
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    /**
     * @stability stable
     */
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    /**
     * @stability stable
     */
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    /**
     * @stability stable
     */
    set bufferSize(value) {
        this._bufferSize = value;
    }
    /**
     * @stability stable
     */
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferSizeInput() {
        return this._bufferSize;
    }
    /**
     * @stability stable
     */
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    /**
     * @stability stable
     */
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    /**
     * @stability stable
     */
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionFormatInput() {
        return this._compressionFormat;
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
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    /**
     * @stability stable
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * @stability stable
     */
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prefixInput() {
        return this._prefix;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference;
_u = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference[_u] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        data_format_conversion_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct.dataFormatConversionConfiguration),
        dynamic_partitioning_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct.dynamicPartitioningConfiguration),
        processing_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        s3_backup_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct.s3BackupConfiguration),
    };
}
exports.kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform = kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
        // data_format_conversion_configuration - computed: false, optional: true, required: false
        this._dataFormatConversionConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference(this, "data_format_conversion_configuration", true);
        // dynamic_partitioning_configuration - computed: false, optional: true, required: false
        this._dynamicPartitioningConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference(this, "dynamic_partitioning_configuration", true);
        // processing_configuration - computed: false, optional: true, required: false
        this._processingConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
        // s3_backup_configuration - computed: false, optional: true, required: false
        this._s3BackupConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16, _17, _18, _19, _20, _21, _22;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._errorOutputPrefix) {
            hasAnyValues = true;
            internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._dataFormatConversionConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.dataFormatConversionConfiguration = (_16 = this._dataFormatConversionConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._dynamicPartitioningConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.dynamicPartitioningConfiguration = (_18 = this._dynamicPartitioningConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        if ((_19 = this._processingConfiguration) === null || _19 === void 0 ? void 0 : _19.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = (_20 = this._processingConfiguration) === null || _20 === void 0 ? void 0 : _20.internalValue;
        }
        if ((_21 = this._s3BackupConfiguration) === null || _21 === void 0 ? void 0 : _21.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3BackupConfiguration = (_22 = this._s3BackupConfiguration) === null || _22 === void 0 ? void 0 : _22.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._errorOutputPrefix = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._dataFormatConversionConfiguration.internalValue = undefined;
            this._dynamicPartitioningConfiguration.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._s3BackupConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._errorOutputPrefix = value.errorOutputPrefix;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._dataFormatConversionConfiguration.internalValue = value.dataFormatConversionConfiguration;
            this._dynamicPartitioningConfiguration.internalValue = value.dynamicPartitioningConfiguration;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    /**
     * @stability stable
     */
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketArnInput() {
        return this._bucketArn;
    }
    /**
     * @stability stable
     */
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    /**
     * @stability stable
     */
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    /**
     * @stability stable
     */
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    /**
     * @stability stable
     */
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    /**
     * @stability stable
     */
    set bufferSize(value) {
        this._bufferSize = value;
    }
    /**
     * @stability stable
     */
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferSizeInput() {
        return this._bufferSize;
    }
    /**
     * @stability stable
     */
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    /**
     * @stability stable
     */
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    /**
     * @stability stable
     */
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionFormatInput() {
        return this._compressionFormat;
    }
    /**
     * @stability stable
     */
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    /**
     * @stability stable
     */
    set errorOutputPrefix(value) {
        this._errorOutputPrefix = value;
    }
    /**
     * @stability stable
     */
    resetErrorOutputPrefix() {
        this._errorOutputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get errorOutputPrefixInput() {
        return this._errorOutputPrefix;
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
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    /**
     * @stability stable
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * @stability stable
     */
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prefixInput() {
        return this._prefix;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    /**
     * @stability stable
     */
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    /**
     * @stability stable
     */
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get dataFormatConversionConfiguration() {
        return this._dataFormatConversionConfiguration;
    }
    /**
     * @stability stable
     */
    putDataFormatConversionConfiguration(value) {
        this._dataFormatConversionConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDataFormatConversionConfiguration() {
        this._dataFormatConversionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataFormatConversionConfigurationInput() {
        return this._dataFormatConversionConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get dynamicPartitioningConfiguration() {
        return this._dynamicPartitioningConfiguration;
    }
    /**
     * @stability stable
     */
    putDynamicPartitioningConfiguration(value) {
        this._dynamicPartitioningConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetDynamicPartitioningConfiguration() {
        this._dynamicPartitioningConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dynamicPartitioningConfigurationInput() {
        return this._dynamicPartitioningConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    /**
     * @stability stable
     */
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get s3BackupConfiguration() {
        return this._s3BackupConfiguration;
    }
    /**
     * @stability stable
     */
    putS3BackupConfiguration(value) {
        this._s3BackupConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3BackupConfiguration() {
        this._s3BackupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BackupConfigurationInput() {
        return this._s3BackupConfiguration.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference = KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference;
_v = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference[_v] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference;
_w = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference[_w] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform = kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform;
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform = kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform;
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform = kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    /**
     * @stability stable
     */
    set processors(value) {
        this._processors = value;
    }
    /**
     * @stability stable
     */
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processorsInput() {
        return this._processors;
    }
}
exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference = KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference;
_x = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference[_x] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform = kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform;
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_encoding: cdktf.stringToTerraform(struct.contentEncoding),
        common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform)(struct.commonAttributes),
    };
}
exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform = kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._contentEncoding) {
            hasAnyValues = true;
            internalValueResult.contentEncoding = this._contentEncoding;
        }
        if (this._commonAttributes) {
            hasAnyValues = true;
            internalValueResult.commonAttributes = this._commonAttributes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentEncoding = undefined;
            this._commonAttributes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentEncoding = value.contentEncoding;
            this._commonAttributes = value.commonAttributes;
        }
    }
    /**
     * @stability stable
     */
    get contentEncoding() {
        return this.getStringAttribute('content_encoding');
    }
    /**
     * @stability stable
     */
    set contentEncoding(value) {
        this._contentEncoding = value;
    }
    /**
     * @stability stable
     */
    resetContentEncoding() {
        this._contentEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get contentEncodingInput() {
        return this._contentEncoding;
    }
    /**
     * @stability stable
     */
    get commonAttributes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('common_attributes');
    }
    /**
     * @stability stable
     */
    set commonAttributes(value) {
        this._commonAttributes = value;
    }
    /**
     * @stability stable
     */
    resetCommonAttributes() {
        this._commonAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get commonAttributesInput() {
        return this._commonAttributes;
    }
}
exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference = KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference;
_y = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference[_y] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key: cdktf.stringToTerraform(struct.accessKey),
        buffering_interval: cdktf.numberToTerraform(struct.bufferingInterval),
        buffering_size: cdktf.numberToTerraform(struct.bufferingSize),
        name: cdktf.stringToTerraform(struct.name),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        url: cdktf.stringToTerraform(struct.url),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        request_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct.requestConfiguration),
    };
}
exports.kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform = kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
        // processing_configuration - computed: false, optional: true, required: false
        this._processingConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
        // request_configuration - computed: false, optional: true, required: false
        this._requestConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference(this, "request_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessKey) {
            hasAnyValues = true;
            internalValueResult.accessKey = this._accessKey;
        }
        if (this._bufferingInterval) {
            hasAnyValues = true;
            internalValueResult.bufferingInterval = this._bufferingInterval;
        }
        if (this._bufferingSize) {
            hasAnyValues = true;
            internalValueResult.bufferingSize = this._bufferingSize;
        }
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._url) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._processingConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = (_16 = this._processingConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._requestConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.requestConfiguration = (_18 = this._requestConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessKey = undefined;
            this._bufferingInterval = undefined;
            this._bufferingSize = undefined;
            this._name = undefined;
            this._retryDuration = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._url = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._requestConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessKey = value.accessKey;
            this._bufferingInterval = value.bufferingInterval;
            this._bufferingSize = value.bufferingSize;
            this._name = value.name;
            this._retryDuration = value.retryDuration;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._url = value.url;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._requestConfiguration.internalValue = value.requestConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get accessKey() {
        return this.getStringAttribute('access_key');
    }
    /**
     * @stability stable
     */
    set accessKey(value) {
        this._accessKey = value;
    }
    /**
     * @stability stable
     */
    resetAccessKey() {
        this._accessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get accessKeyInput() {
        return this._accessKey;
    }
    /**
     * @stability stable
     */
    get bufferingInterval() {
        return this.getNumberAttribute('buffering_interval');
    }
    /**
     * @stability stable
     */
    set bufferingInterval(value) {
        this._bufferingInterval = value;
    }
    /**
     * @stability stable
     */
    resetBufferingInterval() {
        this._bufferingInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferingIntervalInput() {
        return this._bufferingInterval;
    }
    /**
     * @stability stable
     */
    get bufferingSize() {
        return this.getNumberAttribute('buffering_size');
    }
    /**
     * @stability stable
     */
    set bufferingSize(value) {
        this._bufferingSize = value;
    }
    /**
     * @stability stable
     */
    resetBufferingSize() {
        this._bufferingSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferingSizeInput() {
        return this._bufferingSize;
    }
    /**
     * @stability stable
     */
    get name() {
        return this.getStringAttribute('name');
    }
    /**
     * @stability stable
     */
    set name(value) {
        this._name = value;
    }
    /**
     * @stability stable
     */
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
    }
    /**
     * @stability stable
     */
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    /**
     * @stability stable
     */
    set retryDuration(value) {
        this._retryDuration = value;
    }
    /**
     * @stability stable
     */
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryDurationInput() {
        return this._retryDuration;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    /**
     * @stability stable
     */
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    /**
     * @stability stable
     */
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    /**
     * @stability stable
     */
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    /**
     * @stability stable
     */
    get url() {
        return this.getStringAttribute('url');
    }
    /**
     * @stability stable
     */
    set url(value) {
        this._url = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get urlInput() {
        return this._url;
    }
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    /**
     * @stability stable
     */
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get requestConfiguration() {
        return this._requestConfiguration;
    }
    /**
     * @stability stable
     */
    putRequestConfiguration(value) {
        this._requestConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRequestConfiguration() {
        this._requestConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get requestConfigurationInput() {
        return this._requestConfiguration.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference = KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference;
_z = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference[_z] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kinesis_stream_arn: cdktf.stringToTerraform(struct.kinesisStreamArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform = kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._kinesisStreamArn) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamArn = this._kinesisStreamArn;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kinesisStreamArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kinesisStreamArn = value.kinesisStreamArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get kinesisStreamArn() {
        return this.getStringAttribute('kinesis_stream_arn');
    }
    /**
     * @stability stable
     */
    set kinesisStreamArn(value) {
        this._kinesisStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisStreamArnInput() {
        return this._kinesisStreamArn;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
}
exports.KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference = KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference[_0] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference[_1] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform = kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform;
function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform = kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform;
function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform = kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    /**
     * @stability stable
     */
    set processors(value) {
        this._processors = value;
    }
    /**
     * @stability stable
     */
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processorsInput() {
        return this._processors;
    }
}
exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference = KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference[_2] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference[_3] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
    };
}
exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform = kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
        }
    }
    /**
     * @stability stable
     */
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    /**
     * @stability stable
     */
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketArnInput() {
        return this._bucketArn;
    }
    /**
     * @stability stable
     */
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    /**
     * @stability stable
     */
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    /**
     * @stability stable
     */
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    /**
     * @stability stable
     */
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    /**
     * @stability stable
     */
    set bufferSize(value) {
        this._bufferSize = value;
    }
    /**
     * @stability stable
     */
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferSizeInput() {
        return this._bufferSize;
    }
    /**
     * @stability stable
     */
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    /**
     * @stability stable
     */
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    /**
     * @stability stable
     */
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionFormatInput() {
        return this._compressionFormat;
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
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    /**
     * @stability stable
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * @stability stable
     */
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prefixInput() {
        return this._prefix;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference = KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference;
_4 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference[_4] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cluster_jdbcurl: cdktf.stringToTerraform(struct.clusterJdbcurl),
        copy_options: cdktf.stringToTerraform(struct.copyOptions),
        data_table_columns: cdktf.stringToTerraform(struct.dataTableColumns),
        data_table_name: cdktf.stringToTerraform(struct.dataTableName),
        password: cdktf.stringToTerraform(struct.password),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        username: cdktf.stringToTerraform(struct.username),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        s3_backup_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct.s3BackupConfiguration),
    };
}
exports.kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform = kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
        // processing_configuration - computed: false, optional: true, required: false
        this._processingConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
        // s3_backup_configuration - computed: false, optional: true, required: false
        this._s3BackupConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._clusterJdbcurl) {
            hasAnyValues = true;
            internalValueResult.clusterJdbcurl = this._clusterJdbcurl;
        }
        if (this._copyOptions) {
            hasAnyValues = true;
            internalValueResult.copyOptions = this._copyOptions;
        }
        if (this._dataTableColumns) {
            hasAnyValues = true;
            internalValueResult.dataTableColumns = this._dataTableColumns;
        }
        if (this._dataTableName) {
            hasAnyValues = true;
            internalValueResult.dataTableName = this._dataTableName;
        }
        if (this._password) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._username) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._processingConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = (_16 = this._processingConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._s3BackupConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3BackupConfiguration = (_18 = this._s3BackupConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clusterJdbcurl = undefined;
            this._copyOptions = undefined;
            this._dataTableColumns = undefined;
            this._dataTableName = undefined;
            this._password = undefined;
            this._retryDuration = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._username = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._s3BackupConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clusterJdbcurl = value.clusterJdbcurl;
            this._copyOptions = value.copyOptions;
            this._dataTableColumns = value.dataTableColumns;
            this._dataTableName = value.dataTableName;
            this._password = value.password;
            this._retryDuration = value.retryDuration;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._username = value.username;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get clusterJdbcurl() {
        return this.getStringAttribute('cluster_jdbcurl');
    }
    /**
     * @stability stable
     */
    set clusterJdbcurl(value) {
        this._clusterJdbcurl = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get clusterJdbcurlInput() {
        return this._clusterJdbcurl;
    }
    /**
     * @stability stable
     */
    get copyOptions() {
        return this.getStringAttribute('copy_options');
    }
    /**
     * @stability stable
     */
    set copyOptions(value) {
        this._copyOptions = value;
    }
    /**
     * @stability stable
     */
    resetCopyOptions() {
        this._copyOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get copyOptionsInput() {
        return this._copyOptions;
    }
    /**
     * @stability stable
     */
    get dataTableColumns() {
        return this.getStringAttribute('data_table_columns');
    }
    /**
     * @stability stable
     */
    set dataTableColumns(value) {
        this._dataTableColumns = value;
    }
    /**
     * @stability stable
     */
    resetDataTableColumns() {
        this._dataTableColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataTableColumnsInput() {
        return this._dataTableColumns;
    }
    /**
     * @stability stable
     */
    get dataTableName() {
        return this.getStringAttribute('data_table_name');
    }
    /**
     * @stability stable
     */
    set dataTableName(value) {
        this._dataTableName = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get dataTableNameInput() {
        return this._dataTableName;
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
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    /**
     * @stability stable
     */
    set retryDuration(value) {
        this._retryDuration = value;
    }
    /**
     * @stability stable
     */
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryDurationInput() {
        return this._retryDuration;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    /**
     * @stability stable
     */
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    /**
     * @stability stable
     */
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BackupModeInput() {
        return this._s3BackupMode;
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
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    /**
     * @stability stable
     */
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get s3BackupConfiguration() {
        return this._s3BackupConfiguration;
    }
    /**
     * @stability stable
     */
    putS3BackupConfiguration(value) {
        this._s3BackupConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3BackupConfiguration() {
        this._s3BackupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BackupConfigurationInput() {
        return this._s3BackupConfiguration.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference = KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference[_5] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference[_6] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
    };
}
exports.kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform = kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
        }
    }
    /**
     * @stability stable
     */
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    /**
     * @stability stable
     */
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketArnInput() {
        return this._bucketArn;
    }
    /**
     * @stability stable
     */
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    /**
     * @stability stable
     */
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    /**
     * @stability stable
     */
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    /**
     * @stability stable
     */
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    /**
     * @stability stable
     */
    set bufferSize(value) {
        this._bufferSize = value;
    }
    /**
     * @stability stable
     */
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bufferSizeInput() {
        return this._bufferSize;
    }
    /**
     * @stability stable
     */
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    /**
     * @stability stable
     */
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    /**
     * @stability stable
     */
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressionFormatInput() {
        return this._compressionFormat;
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
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    /**
     * @stability stable
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * @stability stable
     */
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get prefixInput() {
        return this._prefix;
    }
    /**
     * @stability stable
     */
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    /**
     * @stability stable
     */
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get roleArnInput() {
        return this._roleArn;
    }
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference = KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference[_7] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        key_arn: cdktf.stringToTerraform(struct.keyArn),
        key_type: cdktf.stringToTerraform(struct.keyType),
    };
}
exports.kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform = kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._keyArn) {
            hasAnyValues = true;
            internalValueResult.keyArn = this._keyArn;
        }
        if (this._keyType) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._keyArn = undefined;
            this._keyType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._keyArn = value.keyArn;
            this._keyType = value.keyType;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    /**
     * @stability stable
     */
    set keyArn(value) {
        this._keyArn = value;
    }
    /**
     * @stability stable
     */
    resetKeyArn() {
        this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyArnInput() {
        return this._keyArn;
    }
    /**
     * @stability stable
     */
    get keyType() {
        return this.getStringAttribute('key_type');
    }
    /**
     * @stability stable
     */
    set keyType(value) {
        this._keyType = value;
    }
    /**
     * @stability stable
     */
    resetKeyType() {
        this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get keyTypeInput() {
        return this._keyType;
    }
}
exports.KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference = KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference;
_8 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference[_8] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform = kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    /**
     * @stability stable
     */
    set logGroupName(value) {
        this._logGroupName = value;
    }
    /**
     * @stability stable
     */
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logGroupNameInput() {
        return this._logGroupName;
    }
    /**
     * @stability stable
     */
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    /**
     * @stability stable
     */
    set logStreamName(value) {
        this._logStreamName = value;
    }
    /**
     * @stability stable
     */
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
exports.KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference = KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference[_9] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform = kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform;
function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
exports.kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform = kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform;
function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform = kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    /**
     * @stability stable
     */
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    /**
     * @stability stable
     */
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * @stability stable
     */
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get enabledInput() {
        return this._enabled;
    }
    /**
     * @stability stable
     */
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    /**
     * @stability stable
     */
    set processors(value) {
        this._processors = value;
    }
    /**
     * @stability stable
     */
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processorsInput() {
        return this._processors;
    }
}
exports.KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference = KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference;
_10 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference[_10] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference", version: "3.0.1" };
function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hec_acknowledgment_timeout: cdktf.numberToTerraform(struct.hecAcknowledgmentTimeout),
        hec_endpoint: cdktf.stringToTerraform(struct.hecEndpoint),
        hec_endpoint_type: cdktf.stringToTerraform(struct.hecEndpointType),
        hec_token: cdktf.stringToTerraform(struct.hecToken),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
    };
}
exports.kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform = kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
        // processing_configuration - computed: false, optional: true, required: false
        this._processingConfiguration = new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _13, _14, _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._hecAcknowledgmentTimeout) {
            hasAnyValues = true;
            internalValueResult.hecAcknowledgmentTimeout = this._hecAcknowledgmentTimeout;
        }
        if (this._hecEndpoint) {
            hasAnyValues = true;
            internalValueResult.hecEndpoint = this._hecEndpoint;
        }
        if (this._hecEndpointType) {
            hasAnyValues = true;
            internalValueResult.hecEndpointType = this._hecEndpointType;
        }
        if (this._hecToken) {
            hasAnyValues = true;
            internalValueResult.hecToken = this._hecToken;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if ((_13 = this._cloudwatchLoggingOptions) === null || _13 === void 0 ? void 0 : _13.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = (_14 = this._cloudwatchLoggingOptions) === null || _14 === void 0 ? void 0 : _14.internalValue;
        }
        if ((_15 = this._processingConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = (_16 = this._processingConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._hecAcknowledgmentTimeout = undefined;
            this._hecEndpoint = undefined;
            this._hecEndpointType = undefined;
            this._hecToken = undefined;
            this._retryDuration = undefined;
            this._s3BackupMode = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._hecAcknowledgmentTimeout = value.hecAcknowledgmentTimeout;
            this._hecEndpoint = value.hecEndpoint;
            this._hecEndpointType = value.hecEndpointType;
            this._hecToken = value.hecToken;
            this._retryDuration = value.retryDuration;
            this._s3BackupMode = value.s3BackupMode;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get hecAcknowledgmentTimeout() {
        return this.getNumberAttribute('hec_acknowledgment_timeout');
    }
    /**
     * @stability stable
     */
    set hecAcknowledgmentTimeout(value) {
        this._hecAcknowledgmentTimeout = value;
    }
    /**
     * @stability stable
     */
    resetHecAcknowledgmentTimeout() {
        this._hecAcknowledgmentTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hecAcknowledgmentTimeoutInput() {
        return this._hecAcknowledgmentTimeout;
    }
    /**
     * @stability stable
     */
    get hecEndpoint() {
        return this.getStringAttribute('hec_endpoint');
    }
    /**
     * @stability stable
     */
    set hecEndpoint(value) {
        this._hecEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hecEndpointInput() {
        return this._hecEndpoint;
    }
    /**
     * @stability stable
     */
    get hecEndpointType() {
        return this.getStringAttribute('hec_endpoint_type');
    }
    /**
     * @stability stable
     */
    set hecEndpointType(value) {
        this._hecEndpointType = value;
    }
    /**
     * @stability stable
     */
    resetHecEndpointType() {
        this._hecEndpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hecEndpointTypeInput() {
        return this._hecEndpointType;
    }
    /**
     * @stability stable
     */
    get hecToken() {
        return this.getStringAttribute('hec_token');
    }
    /**
     * @stability stable
     */
    set hecToken(value) {
        this._hecToken = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get hecTokenInput() {
        return this._hecToken;
    }
    /**
     * @stability stable
     */
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    /**
     * @stability stable
     */
    set retryDuration(value) {
        this._retryDuration = value;
    }
    /**
     * @stability stable
     */
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retryDurationInput() {
        return this._retryDuration;
    }
    /**
     * @stability stable
     */
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    /**
     * @stability stable
     */
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    /**
     * @stability stable
     */
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    /**
     * @stability stable
     */
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    /**
     * @stability stable
     */
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    /**
     * @stability stable
     */
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
}
exports.KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference = KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference;
_11 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference[_11] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}.
 *
 * @stability stable
 */
class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // elasticsearch_configuration - computed: false, optional: true, required: false
        this._elasticsearchConfiguration = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference(this, "elasticsearch_configuration", true);
        // extended_s3_configuration - computed: false, optional: true, required: false
        this._extendedS3Configuration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference(this, "extended_s3_configuration", true);
        // http_endpoint_configuration - computed: false, optional: true, required: false
        this._httpEndpointConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference(this, "http_endpoint_configuration", true);
        // kinesis_source_configuration - computed: false, optional: true, required: false
        this._kinesisSourceConfiguration = new KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference(this, "kinesis_source_configuration", true);
        // redshift_configuration - computed: false, optional: true, required: false
        this._redshiftConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference(this, "redshift_configuration", true);
        // s3_configuration - computed: false, optional: true, required: false
        this._s3Configuration = new KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference(this, "s3_configuration", true);
        // server_side_encryption - computed: false, optional: true, required: false
        this._serverSideEncryption = new KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference(this, "server_side_encryption", true);
        // splunk_configuration - computed: false, optional: true, required: false
        this._splunkConfiguration = new KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference(this, "splunk_configuration", true);
        this._destination = config.destination;
        this._destinationId = config.destinationId;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._versionId = config.versionId;
        this._elasticsearchConfiguration.internalValue = config.elasticsearchConfiguration;
        this._extendedS3Configuration.internalValue = config.extendedS3Configuration;
        this._httpEndpointConfiguration.internalValue = config.httpEndpointConfiguration;
        this._kinesisSourceConfiguration.internalValue = config.kinesisSourceConfiguration;
        this._redshiftConfiguration.internalValue = config.redshiftConfiguration;
        this._s3Configuration.internalValue = config.s3Configuration;
        this._serverSideEncryption.internalValue = config.serverSideEncryption;
        this._splunkConfiguration.internalValue = config.splunkConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get arn() {
        return this.getStringAttribute('arn');
    }
    /**
     * @stability stable
     */
    get destination() {
        return this.getStringAttribute('destination');
    }
    /**
     * @stability stable
     */
    set destination(value) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationInput() {
        return this._destination;
    }
    /**
     * @stability stable
     */
    get destinationId() {
        return this.getStringAttribute('destination_id');
    }
    /**
     * @stability stable
     */
    set destinationId(value) {
        this._destinationId = value;
    }
    /**
     * @stability stable
     */
    resetDestinationId() {
        this._destinationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get destinationIdInput() {
        return this._destinationId;
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
    get name() {
        return this.getStringAttribute('name');
    }
    /**
     * @stability stable
     */
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get nameInput() {
        return this._name;
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
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    /**
     * @stability stable
     */
    set versionId(value) {
        this._versionId = value;
    }
    /**
     * @stability stable
     */
    resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get versionIdInput() {
        return this._versionId;
    }
    /**
     * @stability stable
     */
    get elasticsearchConfiguration() {
        return this._elasticsearchConfiguration;
    }
    /**
     * @stability stable
     */
    putElasticsearchConfiguration(value) {
        this._elasticsearchConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetElasticsearchConfiguration() {
        this._elasticsearchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get elasticsearchConfigurationInput() {
        return this._elasticsearchConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get extendedS3Configuration() {
        return this._extendedS3Configuration;
    }
    /**
     * @stability stable
     */
    putExtendedS3Configuration(value) {
        this._extendedS3Configuration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetExtendedS3Configuration() {
        this._extendedS3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get extendedS3ConfigurationInput() {
        return this._extendedS3Configuration.internalValue;
    }
    /**
     * @stability stable
     */
    get httpEndpointConfiguration() {
        return this._httpEndpointConfiguration;
    }
    /**
     * @stability stable
     */
    putHttpEndpointConfiguration(value) {
        this._httpEndpointConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetHttpEndpointConfiguration() {
        this._httpEndpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get httpEndpointConfigurationInput() {
        return this._httpEndpointConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get kinesisSourceConfiguration() {
        return this._kinesisSourceConfiguration;
    }
    /**
     * @stability stable
     */
    putKinesisSourceConfiguration(value) {
        this._kinesisSourceConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisSourceConfiguration() {
        this._kinesisSourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisSourceConfigurationInput() {
        return this._kinesisSourceConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get redshiftConfiguration() {
        return this._redshiftConfiguration;
    }
    /**
     * @stability stable
     */
    putRedshiftConfiguration(value) {
        this._redshiftConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRedshiftConfiguration() {
        this._redshiftConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get redshiftConfigurationInput() {
        return this._redshiftConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get s3Configuration() {
        return this._s3Configuration;
    }
    /**
     * @stability stable
     */
    putS3Configuration(value) {
        this._s3Configuration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }
    /**
     * @stability stable
     */
    get serverSideEncryption() {
        return this._serverSideEncryption;
    }
    /**
     * @stability stable
     */
    putServerSideEncryption(value) {
        this._serverSideEncryption.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetServerSideEncryption() {
        this._serverSideEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serverSideEncryptionInput() {
        return this._serverSideEncryption.internalValue;
    }
    /**
     * @stability stable
     */
    get splunkConfiguration() {
        return this._splunkConfiguration;
    }
    /**
     * @stability stable
     */
    putSplunkConfiguration(value) {
        this._splunkConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSplunkConfiguration() {
        this._splunkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get splunkConfigurationInput() {
        return this._splunkConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            destination: cdktf.stringToTerraform(this._destination),
            destination_id: cdktf.stringToTerraform(this._destinationId),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version_id: cdktf.stringToTerraform(this._versionId),
            elasticsearch_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(this._elasticsearchConfiguration.internalValue),
            extended_s3_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(this._extendedS3Configuration.internalValue),
            http_endpoint_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(this._httpEndpointConfiguration.internalValue),
            kinesis_source_configuration: kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(this._kinesisSourceConfiguration.internalValue),
            redshift_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(this._redshiftConfiguration.internalValue),
            s3_configuration: kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(this._s3Configuration.internalValue),
            server_side_encryption: kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
            splunk_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(this._splunkConfiguration.internalValue),
        };
    }
}
exports.KinesisFirehoseDeliveryStream = KinesisFirehoseDeliveryStream;
_12 = JSII_RTTI_SYMBOL_1;
KinesisFirehoseDeliveryStream[_12] = { fqn: "@cdktf/provider-aws.kinesis.KinesisFirehoseDeliveryStream", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
KinesisFirehoseDeliveryStream.tfResourceType = "aws_kinesis_firehose_delivery_stream";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2luZXNpcy1maXJlaG9zZS1kZWxpdmVyeS1zdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMva2luZXNpcy9raW5lc2lzLWZpcmVob3NlLWRlbGl2ZXJ5LXN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBDL0IsU0FBZ0IsMEZBQTBGLENBQUMsTUFBeUw7SUFDbFMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQVZELGdNQVVDOzs7O0FBRUQsTUFBYSw4RkFBK0YsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlySSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFrRztRQUN6SCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O0FBdkZILHdNQXdGQzs7O0FBUUQsU0FBZ0IsNkdBQTZHLENBQUMsTUFBMkc7SUFDdk8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQ2pFLENBQUE7QUFDSCxDQUFDO0FBVEQsc09BU0M7QUFTRCxTQUFnQixtR0FBbUcsQ0FBQyxNQUFpRztJQUNuTixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyw2R0FBNkcsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDaEssQ0FBQTtBQUNILENBQUM7QUFURCxrTkFTQztBQVNELFNBQWdCLHlGQUF5RixDQUFDLE1BQXVMO0lBQy9SLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLG1HQUFtRyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN0SixDQUFBO0FBQ0gsQ0FBQztBQVRELDhMQVNDOzs7O0FBRUQsTUFBYSw2RkFBOEYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlwSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbkQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBaUc7UUFDeEgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBUSxDQUFDO0lBQzdELENBQUM7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFpRztRQUNySCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7QUFsRUgsc01BbUVDOzs7QUFVRCxTQUFnQiwyRUFBMkUsQ0FBQyxNQUEySjtJQUNyUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBVkQsa0tBVUM7Ozs7QUFFRCxNQUFhLCtFQUFnRixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXRILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW1GO1FBQzFHLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzdCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFlO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFlO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztBQTlFSCwwS0ErRUM7OztBQThCRCxTQUFnQixrRUFBa0UsQ0FBQyxNQUF5STtJQUMxTixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEUsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ2xFLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUMzRSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDcEQsMEJBQTBCLEVBQUUsMEZBQTBGLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ3hKLHdCQUF3QixFQUFFLHlGQUF5RixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNwSixVQUFVLEVBQUUsMkVBQTJFLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUMzRyxDQUFBO0FBQ0gsQ0FBQztBQXBCRCxnSkFvQkM7Ozs7QUFFRCxNQUFhLHNFQUF1RSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTdHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQThQOUIsZ0ZBQWdGO1FBQ3hFLDhCQUF5QixHQUFHLElBQUksOEZBQThGLENBQUMsSUFBVyxFQUFFLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZXhMLDhFQUE4RTtRQUN0RSw2QkFBd0IsR0FBRyxJQUFJLDZGQUE2RixDQUFDLElBQVcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVwTCxnRUFBZ0U7UUFDeEQsZUFBVSxHQUFHLElBQUksK0VBQStFLENBQUMsSUFBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQTFSMUksQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzdEO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDL0M7UUFDRCxXQUFJLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxFQUFFO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLFVBQUcsSUFBSSxDQUFDLHlCQUF5Qiw0Q0FBRSxhQUFhLENBQUM7U0FDOUY7UUFDRCxXQUFJLElBQUksQ0FBQyx3QkFBd0IsNENBQUUsYUFBYSxFQUFFO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLFVBQUcsSUFBSSxDQUFDLHdCQUF3Qiw0Q0FBRSxhQUFhLENBQUM7U0FDNUY7UUFDRCxXQUFJLElBQUksQ0FBQyxVQUFVLDRDQUFFLGFBQWEsRUFBRTtZQUNsQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsVUFBRyxJQUFJLENBQUMsVUFBVSw0Q0FBRSxhQUFhLENBQUM7U0FDaEU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMEU7UUFDakcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3pELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUMzQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ3RELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztZQUM5RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFDRCxJQUFXLG1CQUFtQixDQUFDLEtBQWE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sd0JBQXdCO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDJCQUEyQixDQUFDLEtBQXNGO1FBQ3ZILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDM0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQzs7OztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwwQkFBMEIsQ0FBQyxLQUFxRjtRQUNySCxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFDTSxZQUFZLENBQUMsS0FBdUU7UUFDekYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7O0FBN1NILHdKQThTQzs7O0FBVUQsU0FBZ0IsdUZBQXVGLENBQUMsTUFBbUw7SUFDelIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQVZELDBMQVVDOzs7O0FBRUQsTUFBYSwyRkFBNEYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlsSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUErRjtRQUN0SCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O0FBdkZILGtNQXdGQzs7O0FBTUQsU0FBZ0IsaUpBQWlKLENBQUMsTUFBdVM7SUFDdmMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztLQUN2RixDQUFBO0FBQ0gsQ0FBQztBQVJELDhTQVFDOzs7O0FBRUQsTUFBYSxxSkFBc0osU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk1TCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXlKO1FBQ2hMLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1NBQ3BDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBZTtRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7O0FBM0NILHNUQTRDQzs7O0FBVUQsU0FBZ0Isa0pBQWtKLENBQUMsTUFBeVM7SUFDMWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztRQUNuRSwyQkFBMkIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDcEcsd0NBQXdDLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxrQ0FBa0MsQ0FBQztLQUMvRyxDQUFBO0FBQ0gsQ0FBQztBQVZELGdUQVVDOzs7O0FBRUQsTUFBYSxzSkFBdUosU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk3TCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2pDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1NBQzdFO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUNBQW1DLEVBQUU7WUFDNUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsbUNBQW1DLENBQUM7U0FDbkc7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMEo7UUFDakwsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztZQUMxQyxJQUFJLENBQUMsbUNBQW1DLEdBQUcsU0FBUyxDQUFDO1NBQ3REO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUM5QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1lBQzlELElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxLQUFLLENBQUMsa0NBQWtDLENBQUM7U0FDckY7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFRLENBQUM7SUFDN0QsQ0FBQzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWtDO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7OztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyw2QkFBNkIsQ0FBUSxDQUFDO0lBQzlFLENBQUM7Ozs7SUFDRCxJQUFXLHVCQUF1QixDQUFDLEtBQW9EO1FBQ3JGLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQzVDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQzs7OztJQUlELElBQVcsa0NBQWtDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDBDQUEwQyxDQUFRLENBQUM7SUFDckYsQ0FBQzs7OztJQUNELElBQVcsa0NBQWtDLENBQUMsS0FBa0M7UUFDOUUsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ00sdUNBQXVDO1FBQzVDLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxTQUFTLENBQUM7SUFDdkQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHVDQUF1QztRQUNoRCxPQUFPLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztJQUNsRCxDQUFDOztBQXhGSCx3VEF5RkM7OztBQVFELFNBQWdCLG9JQUFvSSxDQUFDLE1BQTZRO0lBQ2hhLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsaUpBQWlKLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUMxTCxrQkFBa0IsRUFBRSxrSkFBa0osQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO0tBQy9MLENBQUE7QUFDSCxDQUFDO0FBVEQsb1JBU0M7Ozs7QUFFRCxNQUFhLHdJQUF5SSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9LLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWtDOUIsc0VBQXNFO1FBQzlELG1CQUFjLEdBQUcsSUFBSSxxSkFBcUosQ0FBQyxJQUFXLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlMU4sd0VBQXdFO1FBQ2hFLG9CQUFlLEdBQUcsSUFBSSxzSkFBc0osQ0FBQyxJQUFXLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUE5QzlOLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsV0FBSSxJQUFJLENBQUMsY0FBYyw0Q0FBRSxhQUFhLEVBQUU7WUFDdEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLFVBQUcsSUFBSSxDQUFDLGNBQWMsNENBQUUsYUFBYSxDQUFDO1NBQ3hFO1FBQ0QsV0FBSSxJQUFJLENBQUMsZUFBZSw0Q0FBRSxhQUFhLEVBQUU7WUFDdkMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLFVBQUcsSUFBSSxDQUFDLGVBQWUsNENBQUUsYUFBYSxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTRJO1FBQ25LLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ2hEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00sZ0JBQWdCLENBQUMsS0FBNkk7UUFDbkssSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2hELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00saUJBQWlCLENBQUMsS0FBOEk7UUFDckssSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDOztBQWpFSCw0UkFrRUM7OztBQU1ELFNBQWdCLHdIQUF3SCxDQUFDLE1BQXFQO0lBQzVYLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLG9JQUFvSSxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7S0FDekssQ0FBQTtBQUNILENBQUM7QUFSRCw0UEFRQzs7OztBQUVELE1BQWEsNEhBQTZILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJbkssWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBNEI5QixrRUFBa0U7UUFDMUQsa0JBQWEsR0FBRyxJQUFJLHdJQUF3SSxDQUFDLElBQVcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUF4QnhNLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsV0FBSSxJQUFJLENBQUMsYUFBYSw0Q0FBRSxhQUFhLEVBQUU7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLFVBQUcsSUFBSSxDQUFDLGFBQWEsNENBQUUsYUFBYSxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWdJO1FBQ3ZKLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDOUM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ00sZUFBZSxDQUFDLEtBQWdJO1FBQ3JKLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQzs7QUF4Q0gsb1FBeUNDOzs7QUF3QkQsU0FBZ0IsMklBQTJJLENBQUMsTUFBMlI7SUFDcmIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNqRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztRQUMzRix1Q0FBdUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLG1DQUFtQyxDQUFDO1FBQzdHLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUN6RCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pGLGNBQWMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUMvRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNqRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztLQUNwRSxDQUFBO0FBQ0gsQ0FBQztBQWpCRCxrU0FpQkM7Ozs7QUFFRCxNQUFhLCtJQUFnSixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXRMLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDM0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUNuRTtRQUNELElBQUksSUFBSSxDQUFDLG9DQUFvQyxFQUFFO1lBQzdDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUNBQW1DLEdBQUcsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO1NBQ3JHO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztTQUMzRTtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzdEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW1KO1FBQzFLLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxTQUFTLENBQUM7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7U0FDbkM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ3BELElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxLQUFLLENBQUMsbUNBQW1DLENBQUM7WUFDdEYsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsc0JBQXNCLENBQUM7WUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQzFDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFJRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWU7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs7O0lBSUQsSUFBVyxtQ0FBbUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7O0lBQ0QsSUFBVyxtQ0FBbUMsQ0FBQyxLQUFhO1FBQzFELElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxLQUFLLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNNLHdDQUF3QztRQUM3QyxJQUFJLENBQUMsb0NBQW9DLEdBQUcsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx3Q0FBd0M7UUFDakQsT0FBTyxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFDbkQsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFJRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFDRCxJQUFXLHNCQUFzQixDQUFDLEtBQWE7UUFDN0MsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDOzs7O0lBQ00sMkJBQTJCO1FBQ2hDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDJCQUEyQjtRQUNwQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWtDO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7O0FBalBILDBTQWtQQzs7O0FBZ0JELFNBQWdCLCtJQUErSSxDQUFDLE1BQW1TO0lBQ2pjLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDakUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3pELDZCQUE2QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsMkJBQTJCLENBQUM7UUFDNUYsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbkUsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQy9ELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUMvRCxDQUFBO0FBQ0gsQ0FBQztBQWJELDBTQWFDOzs7O0FBRUQsTUFBYSxtSkFBb0osU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkxTCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtZQUNyQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztTQUNyRjtRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBdUo7UUFDOUssSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUM7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDLDJCQUEyQixDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLCtCQUErQixDQUFRLENBQUM7SUFDMUUsQ0FBQzs7OztJQUNELElBQVcsMkJBQTJCLENBQUMsS0FBa0M7UUFDdkUsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ00sZ0NBQWdDO1FBQ3JDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUMzQyxDQUFDOzs7O0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztBQXpKSCxrVEEwSkM7OztBQVFELFNBQWdCLG1JQUFtSSxDQUFDLE1BQTJRO0lBQzdaLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLDJJQUEySSxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDekssY0FBYyxFQUFFLCtJQUErSSxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7S0FDdEwsQ0FBQTtBQUNILENBQUM7QUFURCxrUkFTQzs7OztBQUVELE1BQWEsdUlBQXdJLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJOUssWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBa0M5QixnRUFBZ0U7UUFDeEQsY0FBUyxHQUFHLElBQUksK0lBQStJLENBQUMsSUFBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQWV6TSxvRUFBb0U7UUFDNUQsa0JBQWEsR0FBRyxJQUFJLG1KQUFtSixDQUFDLElBQVcsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTlDck4sQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxXQUFJLElBQUksQ0FBQyxTQUFTLDRDQUFFLGFBQWEsRUFBRTtZQUNqQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFFBQVEsVUFBRyxJQUFJLENBQUMsU0FBUyw0Q0FBRSxhQUFhLENBQUM7U0FDOUQ7UUFDRCxXQUFJLElBQUksQ0FBQyxhQUFhLDRDQUFFLGFBQWEsRUFBRTtZQUNyQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksVUFBRyxJQUFJLENBQUMsYUFBYSw0Q0FBRSxhQUFhLENBQUM7U0FDdEU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMkk7UUFDbEssSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDOUM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxXQUFXLENBQUMsS0FBdUk7UUFDeEosSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxlQUFlLENBQUMsS0FBMkk7UUFDaEssSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztJQUMxQyxDQUFDOztBQWpFSCwwUkFrRUM7OztBQU1ELFNBQWdCLHlIQUF5SCxDQUFDLE1BQXVQO0lBQy9YLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLG1JQUFtSSxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDcEssQ0FBQTtBQUNILENBQUM7QUFSRCw4UEFRQzs7OztBQUVELE1BQWEsNkhBQThILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJcEssWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBNEI5QixnRUFBZ0U7UUFDeEQsZ0JBQVcsR0FBRyxJQUFJLHVJQUF1SSxDQUFDLElBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUF4Qm5NLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsV0FBSSxJQUFJLENBQUMsV0FBVyw0Q0FBRSxhQUFhLEVBQUU7WUFDbkMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLFVBQUcsSUFBSSxDQUFDLFdBQVcsNENBQUUsYUFBYSxDQUFDO1NBQ2xFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWlJO1FBQ3hKLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDNUM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sYUFBYSxDQUFDLEtBQStIO1FBQ2xKLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQ3hDLENBQUM7O0FBeENILHNRQXlDQzs7O0FBZ0JELFNBQWdCLG1IQUFtSCxDQUFDLE1BQTJPO0lBQzdXLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7S0FDdkQsQ0FBQTtBQUNILENBQUM7QUFiRCxrUEFhQzs7OztBQUVELE1BQWEsdUhBQXdILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJOUosWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMkg7UUFDbEosSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzdCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUNuQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOztBQWhKSCwwUEFpSkM7OztBQVlELFNBQWdCLGdHQUFnRyxDQUFDLE1BQXFNO0lBQ3BULElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELDBCQUEwQixFQUFFLHdIQUF3SCxDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUN0TCwyQkFBMkIsRUFBRSx5SEFBeUgsQ0FBQyxNQUFPLENBQUMseUJBQXlCLENBQUM7UUFDekwsb0JBQW9CLEVBQUUsbUhBQW1ILENBQUMsTUFBTyxDQUFDLG1CQUFtQixDQUFDO0tBQ3ZLLENBQUE7QUFDSCxDQUFDO0FBWEQsNE1BV0M7Ozs7QUFFRCxNQUFhLG9HQUFxRyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTNJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQThEOUIsZ0ZBQWdGO1FBQ3hFLDhCQUF5QixHQUFHLElBQUksNEhBQTRILENBQUMsSUFBVyxFQUFFLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBWXROLGlGQUFpRjtRQUN6RSwrQkFBMEIsR0FBRyxJQUFJLDZIQUE2SCxDQUFDLElBQVcsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQVl6TiwwRUFBMEU7UUFDbEUseUJBQW9CLEdBQUcsSUFBSSx1SEFBdUgsQ0FBQyxJQUFXLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFwRnRNLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxXQUFJLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxFQUFFO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLFVBQUcsSUFBSSxDQUFDLHlCQUF5Qiw0Q0FBRSxhQUFhLENBQUM7U0FDOUY7UUFDRCxXQUFJLElBQUksQ0FBQywwQkFBMEIsNENBQUUsYUFBYSxFQUFFO1lBQ2xELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMseUJBQXlCLFVBQUcsSUFBSSxDQUFDLDBCQUEwQiw0Q0FBRSxhQUFhLENBQUM7U0FDaEc7UUFDRCxXQUFJLElBQUksQ0FBQyxvQkFBb0IsNENBQUUsYUFBYSxFQUFFO1lBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLFVBQUcsSUFBSSxDQUFDLG9CQUFvQiw0Q0FBRSxhQUFhLENBQUM7U0FDcEY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBd0c7UUFDL0gsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3pELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3JEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDOUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMseUJBQXlCLENBQUM7WUFDaEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSwyQkFBMkIsQ0FBQyxLQUFvSDtRQUNySixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztJQUN0RCxDQUFDOzs7O0lBSUQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDekMsQ0FBQzs7OztJQUNNLDRCQUE0QixDQUFDLEtBQXFIO1FBQ3ZKLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw4QkFBOEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsYUFBYSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sc0JBQXNCLENBQUMsS0FBK0c7UUFDM0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQzs7QUFwR0gsb05BcUdDOzs7QUFRRCxTQUFnQiwrRkFBK0YsQ0FBQyxNQUFtTTtJQUNqVCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDL0QsQ0FBQTtBQUNILENBQUM7QUFURCwwTUFTQzs7OztBQUVELE1BQWEsbUdBQW9HLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJMUksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXVHO1FBQzlILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWtDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztBQWpFSCxrTkFrRUM7OztBQVFELFNBQWdCLDBHQUEwRyxDQUFDLE1BQXdHO0lBQ2pPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNqRSxDQUFBO0FBQ0gsQ0FBQztBQVRELGdPQVNDO0FBU0QsU0FBZ0IsZ0dBQWdHLENBQUMsTUFBOEY7SUFDN00sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsMEdBQTBHLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQzdKLENBQUE7QUFDSCxDQUFDO0FBVEQsNE1BU0M7QUFTRCxTQUFnQixzRkFBc0YsQ0FBQyxNQUFpTDtJQUN0UixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxnR0FBZ0csQ0FBQyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDbkosQ0FBQTtBQUNILENBQUM7QUFURCx3TEFTQzs7OztBQUVELE1BQWEsMEZBQTJGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJakksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQThGO1FBQ3JILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUM5QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWtDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQVEsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBOEY7UUFDbEgsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O0FBbEVILGdNQW1FQzs7O0FBVUQsU0FBZ0IsNEdBQTRHLENBQUMsTUFBNk47SUFDeFYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQVZELG9PQVVDOzs7O0FBRUQsTUFBYSxnSEFBaUgsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2SixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFvSDtRQUMzSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O0FBdkZILDRPQXdGQzs7O0FBb0JELFNBQWdCLG9GQUFvRixDQUFDLE1BQTZLO0lBQ2hSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0RSxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdkQsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCwwQkFBMEIsRUFBRSw0R0FBNEcsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7S0FDM0ssQ0FBQTtBQUNILENBQUM7QUFmRCxvTEFlQzs7OztBQUVELE1BQWEsd0ZBQXlGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJL0gsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBZ0w5QixnRkFBZ0Y7UUFDeEUsOEJBQXlCLEdBQUcsSUFBSSxnSEFBZ0gsQ0FBQyxJQUFXLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUE1SzFNLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxXQUFJLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxFQUFFO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLFVBQUcsSUFBSSxDQUFDLHlCQUF5Qiw0Q0FBRSxhQUFhLENBQUM7U0FDOUY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBNEY7UUFDbkgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDMUQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7U0FDL0U7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDJCQUEyQixDQUFDLEtBQXdHO1FBQ3pJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDM0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQzs7QUEvTEgsNExBZ01DOzs7QUFnQ0QsU0FBZ0IsK0RBQStELENBQUMsTUFBbUk7SUFDak4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELDBCQUEwQixFQUFFLHVGQUF1RixDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUNySixvQ0FBb0MsRUFBRSxnR0FBZ0csQ0FBQyxNQUFPLENBQUMsaUNBQWlDLENBQUM7UUFDakwsa0NBQWtDLEVBQUUsK0ZBQStGLENBQUMsTUFBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQzdLLHdCQUF3QixFQUFFLHNGQUFzRixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNqSix1QkFBdUIsRUFBRSxvRkFBb0YsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7S0FDN0ksQ0FBQTtBQUNILENBQUM7QUFyQkQsMElBcUJDOzs7O0FBRUQsTUFBYSxtRUFBb0UsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkxRyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFvUDlCLGdGQUFnRjtRQUN4RSw4QkFBeUIsR0FBRyxJQUFJLDJGQUEyRixDQUFDLElBQVcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVyTCwwRkFBMEY7UUFDbEYsdUNBQWtDLEdBQUcsSUFBSSxvR0FBb0csQ0FBQyxJQUFXLEVBQUUsc0NBQXNDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlak4sd0ZBQXdGO1FBQ2hGLHNDQUFpQyxHQUFHLElBQUksbUdBQW1HLENBQUMsSUFBVyxFQUFFLG9DQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZTdNLDhFQUE4RTtRQUN0RSw2QkFBd0IsR0FBRyxJQUFJLDBGQUEwRixDQUFDLElBQVcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVqTCw2RUFBNkU7UUFDckUsMkJBQXNCLEdBQUcsSUFBSSx3RkFBd0YsQ0FBQyxJQUFXLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFoVDVLLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDakU7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsV0FBSSxJQUFJLENBQUMseUJBQXlCLDRDQUFFLGFBQWEsRUFBRTtZQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixVQUFHLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxDQUFDO1NBQzlGO1FBQ0QsV0FBSSxJQUFJLENBQUMsa0NBQWtDLDRDQUFFLGFBQWEsRUFBRTtZQUMxRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlDQUFpQyxVQUFHLElBQUksQ0FBQyxrQ0FBa0MsNENBQUUsYUFBYSxDQUFDO1NBQ2hIO1FBQ0QsV0FBSSxJQUFJLENBQUMsaUNBQWlDLDRDQUFFLGFBQWEsRUFBRTtZQUN6RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdDQUFnQyxVQUFHLElBQUksQ0FBQyxpQ0FBaUMsNENBQUUsYUFBYSxDQUFDO1NBQzlHO1FBQ0QsV0FBSSxJQUFJLENBQUMsd0JBQXdCLDRDQUFFLGFBQWEsRUFBRTtZQUNoRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHVCQUF1QixVQUFHLElBQUksQ0FBQyx3QkFBd0IsNENBQUUsYUFBYSxDQUFDO1NBQzVGO1FBQ0QsV0FBSSxJQUFJLENBQUMsc0JBQXNCLDRDQUFFLGFBQWEsRUFBRTtZQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHFCQUFxQixVQUFHLElBQUksQ0FBQyxzQkFBc0IsNENBQUUsYUFBYSxDQUFDO1NBQ3hGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXVFO1FBQzlGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDekQsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDbEUsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDakUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDeEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDdkQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDOUUsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUNBQWlDLENBQUM7WUFDaEcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7WUFDOUYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7WUFDNUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7U0FDekU7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSwyQkFBMkIsQ0FBQyxLQUFtRjtRQUNwSCxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFJRCxJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ00sb0NBQW9DLENBQUMsS0FBNEY7UUFDdEksSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDaEUsQ0FBQzs7OztJQUNNLHNDQUFzQztRQUMzQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNwRSxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0NBQXNDO1FBQy9DLE9BQU8sSUFBSSxDQUFDLGtDQUFrQyxDQUFDLGFBQWEsQ0FBQztJQUMvRCxDQUFDOzs7O0lBSUQsSUFBVyxnQ0FBZ0M7UUFDekMsT0FBTyxJQUFJLENBQUMsaUNBQWlDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNNLG1DQUFtQyxDQUFDLEtBQTJGO1FBQ3BJLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFDTSxxQ0FBcUM7UUFDMUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHFDQUFxQztRQUM5QyxPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxhQUFhLENBQUM7SUFDOUQsQ0FBQzs7OztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwwQkFBMEIsQ0FBQyxLQUFrRjtRQUNsSCxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ00sd0JBQXdCLENBQUMsS0FBZ0Y7UUFDOUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDOztBQW5VSCxrSkFvVUM7OztBQVVELFNBQWdCLHlGQUF5RixDQUFDLE1BQXVMO0lBQy9SLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDaEUsQ0FBQTtBQUNILENBQUM7QUFWRCw4TEFVQzs7OztBQUVELE1BQWEsNkZBQThGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJcEksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBaUc7UUFDeEgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1NBQ2pDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWtDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztBQXZGSCxzTUF3RkM7OztBQVFELFNBQWdCLDRHQUE0RyxDQUFDLE1BQTBHO0lBQ3JPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztLQUNqRSxDQUFBO0FBQ0gsQ0FBQztBQVRELG9PQVNDO0FBU0QsU0FBZ0Isa0dBQWtHLENBQUMsTUFBZ0c7SUFDak4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNEdBQTRHLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQy9KLENBQUE7QUFDSCxDQUFDO0FBVEQsZ05BU0M7QUFTRCxTQUFnQix3RkFBd0YsQ0FBQyxNQUFxTDtJQUM1UixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrR0FBa0csQ0FBQyxDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7S0FDckosQ0FBQTtBQUNILENBQUM7QUFURCw0TEFTQzs7OztBQUVELE1BQWEsNEZBQTZGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJbkksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWdHO1FBQ3ZILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUM5QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWtDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxVQUFVO1FBQ25CLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQVEsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBZ0c7UUFDcEgsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O0FBbEVILG9NQW1FQzs7O0FBUUQsU0FBZ0IscUdBQXFHLENBQUMsTUFBbUc7SUFDdk4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBVEQsc05BU0M7QUFTRCxTQUFnQixxRkFBcUYsQ0FBQyxNQUErSztJQUNuUixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ2xFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMscUdBQXFHLENBQUMsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDckssQ0FBQTtBQUNILENBQUM7QUFURCxzTEFTQzs7OztBQUVELE1BQWEseUZBQTBGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJaEksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDN0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE2RjtRQUNwSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1NBQ3BDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQztZQUM5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFDRCxJQUFXLGVBQWUsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7OztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBUSxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQW1HO1FBQzdILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7QUFsRUgsOExBbUVDOzs7QUEwQkQsU0FBZ0IsaUVBQWlFLENBQUMsTUFBdUk7SUFDdk4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0RSxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QywwQkFBMEIsRUFBRSx5RkFBeUYsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDdkosd0JBQXdCLEVBQUUsd0ZBQXdGLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO1FBQ25KLHFCQUFxQixFQUFFLHFGQUFxRixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztLQUMzSSxDQUFBO0FBQ0gsQ0FBQztBQWxCRCw4SUFrQkM7Ozs7QUFFRCxNQUFhLHFFQUFzRSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTVHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQXFOOUIsZ0ZBQWdGO1FBQ3hFLDhCQUF5QixHQUFHLElBQUksNkZBQTZGLENBQUMsSUFBVyxFQUFFLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZXZMLDhFQUE4RTtRQUN0RSw2QkFBd0IsR0FBRyxJQUFJLDRGQUE0RixDQUFDLElBQVcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVuTCwyRUFBMkU7UUFDbkUsMEJBQXFCLEdBQUcsSUFBSSx5RkFBeUYsQ0FBQyxJQUFXLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFqUDFLLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDckM7UUFDRCxXQUFJLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxFQUFFO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLFVBQUcsSUFBSSxDQUFDLHlCQUF5Qiw0Q0FBRSxhQUFhLENBQUM7U0FDOUY7UUFDRCxXQUFJLElBQUksQ0FBQyx3QkFBd0IsNENBQUUsYUFBYSxFQUFFO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLFVBQUcsSUFBSSxDQUFDLHdCQUF3Qiw0Q0FBRSxhQUFhLENBQUM7U0FDNUY7UUFDRCxXQUFJLElBQUksQ0FBQyxxQkFBcUIsNENBQUUsYUFBYSxFQUFFO1lBQzdDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLFVBQUcsSUFBSSxDQUFDLHFCQUFxQiw0Q0FBRSxhQUFhLENBQUM7U0FDdEY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBeUU7UUFDaEcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDdEIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDekQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDeEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDdEQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1lBQzlFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1lBQzVFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNELElBQVcsR0FBRyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFJRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDOzs7O0lBQ00sMkJBQTJCLENBQUMsS0FBcUY7UUFDdEgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNNLDZCQUE2QjtRQUNsQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMzRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztJQUN0RCxDQUFDOzs7O0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLDBCQUEwQixDQUFDLEtBQW9GO1FBQ3BILElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFDTSw0QkFBNEI7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDMUQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7SUFDckQsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx1QkFBdUIsQ0FBQyxLQUFpRjtRQUM5RyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7O0FBcFFILHNKQXFRQzs7O0FBUUQsU0FBZ0Isa0VBQWtFLENBQUMsTUFBeUk7SUFDMU4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNuRCxDQUFBO0FBQ0gsQ0FBQztBQVRELGdKQVNDOzs7O0FBRUQsTUFBYSxzRUFBdUUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUk3RyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMEU7UUFDakcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDM0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7QUEzREgsd0pBNERDOzs7QUFVRCxTQUFnQixxRkFBcUYsQ0FBQyxNQUErSztJQUNuUixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDN0QsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQ2hFLENBQUE7QUFDSCxDQUFDO0FBVkQsc0xBVUM7Ozs7QUFFRCxNQUFhLHlGQUEwRixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWhJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTZGO1FBQ3BILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7QUF2RkgsOExBd0ZDOzs7QUFRRCxTQUFnQix3R0FBd0csQ0FBQyxNQUFzRztJQUM3TixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDakUsQ0FBQTtBQUNILENBQUM7QUFURCw0TkFTQztBQVNELFNBQWdCLDhGQUE4RixDQUFDLE1BQTRGO0lBQ3pNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHdHQUF3RyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUMzSixDQUFBO0FBQ0gsQ0FBQztBQVRELHdNQVNDO0FBU0QsU0FBZ0Isb0ZBQW9GLENBQUMsTUFBNks7SUFDaFIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsOEZBQThGLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQ2pKLENBQUE7QUFDSCxDQUFDO0FBVEQsb0xBU0M7Ozs7QUFFRCxNQUFhLHdGQUF5RixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9ILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE0RjtRQUNuSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDOUI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsVUFBVTtRQUNuQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQTRGO1FBQ2hILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztBQWxFSCw0TEFtRUM7OztBQVVELFNBQWdCLDBHQUEwRyxDQUFDLE1BQXlOO0lBQ2xWLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDaEUsQ0FBQTtBQUNILENBQUM7QUFWRCxnT0FVQzs7OztBQUVELE1BQWEsOEdBQStHLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJckosWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBa0g7UUFDekksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1NBQ2pDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWtDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztBQXZGSCx3T0F3RkM7OztBQW9CRCxTQUFnQixrRkFBa0YsQ0FBQyxNQUF5SztJQUMxUSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsMEJBQTBCLEVBQUUsMEdBQTBHLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO0tBQ3pLLENBQUE7QUFDSCxDQUFDO0FBZkQsZ0xBZUM7Ozs7QUFFRCxNQUFhLHNGQUF1RixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTdILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWdMOUIsZ0ZBQWdGO1FBQ3hFLDhCQUF5QixHQUFHLElBQUksOEdBQThHLENBQUMsSUFBVyxFQUFFLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBNUt4TSxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDM0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsV0FBSSxJQUFJLENBQUMseUJBQXlCLDRDQUFFLGFBQWEsRUFBRTtZQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixVQUFHLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxDQUFDO1NBQzlGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTBGO1FBQ2pILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQzFEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1NBQy9FO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7OztJQUlELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSwyQkFBMkIsQ0FBQyxLQUFzRztRQUN2SSxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7O0FBL0xILHdMQWdNQzs7O0FBNEJELFNBQWdCLDZEQUE2RCxDQUFDLE1BQStIO0lBQzNNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUMvRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDN0QsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25ELDBCQUEwQixFQUFFLHFGQUFxRixDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUNuSix3QkFBd0IsRUFBRSxvRkFBb0YsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7UUFDL0ksdUJBQXVCLEVBQUUsa0ZBQWtGLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO0tBQzNJLENBQUE7QUFDSCxDQUFDO0FBbkJELHNJQW1CQzs7OztBQUVELE1BQWEsaUVBQWtFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJeEcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBK045QixnRkFBZ0Y7UUFDeEUsOEJBQXlCLEdBQUcsSUFBSSx5RkFBeUYsQ0FBQyxJQUFXLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlbkwsOEVBQThFO1FBQ3RFLDZCQUF3QixHQUFHLElBQUksd0ZBQXdGLENBQUMsSUFBVyxFQUFFLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZS9LLDZFQUE2RTtRQUNyRSwyQkFBc0IsR0FBRyxJQUFJLHNGQUFzRixDQUFDLElBQVcsRUFBRSx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTNQMUssQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDL0M7UUFDRCxXQUFJLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxFQUFFO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLFVBQUcsSUFBSSxDQUFDLHlCQUF5Qiw0Q0FBRSxhQUFhLENBQUM7U0FDOUY7UUFDRCxXQUFJLElBQUksQ0FBQyx3QkFBd0IsNENBQUUsYUFBYSxFQUFFO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLFVBQUcsSUFBSSxDQUFDLHdCQUF3Qiw0Q0FBRSxhQUFhLENBQUM7U0FDNUY7UUFDRCxXQUFJLElBQUksQ0FBQyxzQkFBc0IsNENBQUUsYUFBYSxFQUFFO1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLFVBQUcsSUFBSSxDQUFDLHNCQUFzQiw0Q0FBRSxhQUFhLENBQUM7U0FDeEY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUU7UUFDNUYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDekQsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDeEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDdkQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztZQUM5RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUM1RSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztTQUN6RTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDJCQUEyQixDQUFDLEtBQWlGO1FBQ2xILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDM0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQzs7OztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwwQkFBMEIsQ0FBQyxLQUFnRjtRQUNoSCxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFJRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ00sd0JBQXdCLENBQUMsS0FBOEU7UUFDNUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDOztBQTlRSCw4SUErUUM7OztBQVVELFNBQWdCLCtFQUErRSxDQUFDLE1BQW1LO0lBQ2pRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDaEUsQ0FBQTtBQUNILENBQUM7QUFWRCwwS0FVQzs7OztBQUVELE1BQWEsbUZBQW9GLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJMUgsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDekQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBdUY7UUFDOUcsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1NBQ2pDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWtDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztBQXZGSCxrTEF3RkM7OztBQW9CRCxTQUFnQix1REFBdUQsQ0FBQyxNQUFtSDtJQUN6TCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3hELGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsMEJBQTBCLEVBQUUsK0VBQStFLENBQUMsTUFBTyxDQUFDLHdCQUF3QixDQUFDO0tBQzlJLENBQUE7QUFDSCxDQUFDO0FBZkQsMEhBZUM7Ozs7QUFFRCxNQUFhLDJEQUE0RCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWxHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWdMOUIsZ0ZBQWdGO1FBQ3hFLDhCQUF5QixHQUFHLElBQUksbUZBQW1GLENBQUMsSUFBVyxFQUFFLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBNUs3SyxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDM0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsV0FBSSxJQUFJLENBQUMseUJBQXlCLDRDQUFFLGFBQWEsRUFBRTtZQUNqRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHdCQUF3QixVQUFHLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxDQUFDO1NBQzlGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQStEO1FBQ3RGLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQzFEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO1NBQy9FO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7OztJQUlELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7O0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSwyQkFBMkIsQ0FBQyxLQUEyRTtRQUM1RyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7O0FBL0xILGtJQWdNQzs7O0FBVUQsU0FBZ0IsNERBQTRELENBQUMsTUFBNkg7SUFDeE0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2hELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztLQUNuRCxDQUFBO0FBQ0gsQ0FBQztBQVZELG9JQVVDOzs7O0FBRUQsTUFBYSxnRUFBaUUsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2RyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFvRTtRQUMzRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDM0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQVEsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFJRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7QUF2RkgsNElBd0ZDOzs7QUFVRCxTQUFnQixtRkFBbUYsQ0FBQyxNQUEySztJQUM3USxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDN0QsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQ2hFLENBQUE7QUFDSCxDQUFDO0FBVkQsa0xBVUM7Ozs7QUFFRCxNQUFhLHVGQUF3RixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTlILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTJGO1FBQ2xILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFDTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDakMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDTSxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7QUF2RkgsMExBd0ZDOzs7QUFRRCxTQUFnQixzR0FBc0csQ0FBQyxNQUFvRztJQUN6TixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUM5RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7S0FDakUsQ0FBQTtBQUNILENBQUM7QUFURCx3TkFTQztBQVNELFNBQWdCLDRGQUE0RixDQUFDLE1BQTBGO0lBQ3JNLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHNHQUFzRyxDQUFDLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztLQUN6SixDQUFBO0FBQ0gsQ0FBQztBQVRELG9NQVNDO0FBU0QsU0FBZ0Isa0ZBQWtGLENBQUMsTUFBeUs7SUFDMVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNEZBQTRGLENBQUMsQ0FBQyxNQUFPLENBQUMsVUFBVSxDQUFDO0tBQy9JLENBQUE7QUFDSCxDQUFDO0FBVEQsZ0xBU0M7Ozs7QUFFRCxNQUFhLHNGQUF1RixTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTdILFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0M7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEwRjtRQUNqSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDOUI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUlELElBQVcsVUFBVTtRQUNuQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFRLENBQUM7SUFDN0QsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQTBGO1FBQzlHLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztBQWxFSCx3TEFtRUM7OztBQW9CRCxTQUFnQiwyREFBMkQsQ0FBQyxNQUEySDtJQUNyTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDckYsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25FLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDOUQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDO1FBQzdELDBCQUEwQixFQUFFLG1GQUFtRixDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztRQUNqSix3QkFBd0IsRUFBRSxrRkFBa0YsQ0FBQyxNQUFPLENBQUMsdUJBQXVCLENBQUM7S0FDOUksQ0FBQTtBQUNILENBQUM7QUFmRCxrSUFlQzs7OztBQUVELE1BQWEsK0RBQWdFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJdEcsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBZ0s5QixnRkFBZ0Y7UUFDeEUsOEJBQXlCLEdBQUcsSUFBSSx1RkFBdUYsQ0FBQyxJQUFXLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlakwsOEVBQThFO1FBQ3RFLDZCQUF3QixHQUFHLElBQUksc0ZBQXNGLENBQUMsSUFBVyxFQUFFLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBNUs3SyxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1NBQy9FO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDN0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxXQUFJLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxFQUFFO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLFVBQUcsSUFBSSxDQUFDLHlCQUF5Qiw0Q0FBRSxhQUFhLENBQUM7U0FDOUY7UUFDRCxXQUFJLElBQUksQ0FBQyx3QkFBd0IsNENBQUUsYUFBYSxFQUFFO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLFVBQUcsSUFBSSxDQUFDLHdCQUF3Qiw0Q0FBRSxhQUFhLENBQUM7U0FDNUY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBbUU7UUFDMUYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUN6RCxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUN6RDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztZQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsd0JBQXdCLENBQUM7WUFDOUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBQ0QsSUFBVyx3QkFBd0IsQ0FBQyxLQUFhO1FBQy9DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztJQUNNLDZCQUE2QjtRQUNsQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sb0JBQW9CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxJQUFXLFFBQVEsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDJCQUEyQixDQUFDLEtBQStFO1FBQ2hILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDM0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQzs7OztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwwQkFBMEIsQ0FBQyxLQUE4RTtRQUM5RyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7O0FBL0xILDBJQWdNQzs7Ozs7Ozs7QUFHRCxNQUFhLDZCQUE4QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFPeEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7OztJQUdkLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTJDO1FBQzFGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsc0NBQXNDO1lBQzdELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUEySEwsaUZBQWlGO1FBQ3pFLGdDQUEyQixHQUFHLElBQUksc0VBQXNFLENBQUMsSUFBVyxFQUFFLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZW5LLCtFQUErRTtRQUN2RSw2QkFBd0IsR0FBRyxJQUFJLG1FQUFtRSxDQUFDLElBQVcsRUFBRSwyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWUzSixpRkFBaUY7UUFDekUsK0JBQTBCLEdBQUcsSUFBSSxxRUFBcUUsQ0FBQyxJQUFXLEVBQUUsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlakssa0ZBQWtGO1FBQzFFLGdDQUEyQixHQUFHLElBQUksc0VBQXNFLENBQUMsSUFBVyxFQUFFLDhCQUE4QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZXBLLDRFQUE0RTtRQUNwRSwyQkFBc0IsR0FBRyxJQUFJLGlFQUFpRSxDQUFDLElBQVcsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVwSixzRUFBc0U7UUFDOUQscUJBQWdCLEdBQUcsSUFBSSwyREFBMkQsQ0FBQyxJQUFXLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlbEksNEVBQTRFO1FBQ3BFLDBCQUFxQixHQUFHLElBQUksZ0VBQWdFLENBQUMsSUFBVyxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZWxKLDBFQUEwRTtRQUNsRSx5QkFBb0IsR0FBRyxJQUFJLCtEQUErRCxDQUFDLElBQVcsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQTNPNUksSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDbkYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7UUFDN0UsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7UUFDakYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDbkYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzdELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZFLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix3REFBd0Q7Ozs7SUFDeEQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsdURBQXVEOzs7O0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFJRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFRLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQW9EO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLDZCQUE2QixDQUFDLEtBQThEO1FBQ2pHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFDTSwrQkFBK0I7UUFDcEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUM7SUFDeEQsQ0FBQzs7OztJQUlELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwwQkFBMEIsQ0FBQyxLQUEyRDtRQUMzRixJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDOzs7O0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7Ozs7SUFJRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ00sNEJBQTRCLENBQUMsS0FBNkQ7UUFDL0YsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNNLDhCQUE4QjtRQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUM1RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsOEJBQThCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLGFBQWEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7OztJQUNNLDZCQUE2QixDQUFDLEtBQThEO1FBQ2pHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFDTSwrQkFBK0I7UUFDcEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUM7SUFDeEQsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx3QkFBd0IsQ0FBQyxLQUF5RDtRQUN2RixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7Ozs7SUFJRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLGtCQUFrQixDQUFDLEtBQW1EO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDbEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSx1QkFBdUIsQ0FBQyxLQUF3RDtRQUNyRixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sc0JBQXNCLENBQUMsS0FBdUQ7UUFDbkYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOzs7O0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDdkQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzVELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsMkJBQTJCLEVBQUUsa0VBQWtFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQztZQUMvSSx5QkFBeUIsRUFBRSwrREFBK0QsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1lBQ3ZJLDJCQUEyQixFQUFFLGlFQUFpRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLENBQUM7WUFDN0ksNEJBQTRCLEVBQUUsa0VBQWtFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQztZQUNoSixzQkFBc0IsRUFBRSw2REFBNkQsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO1lBQ2hJLGdCQUFnQixFQUFFLHVEQUF1RCxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7WUFDOUcsc0JBQXNCLEVBQUUsNERBQTRELENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztZQUM5SCxvQkFBb0IsRUFBRSwyREFBMkQsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDO1NBQzNILENBQUM7SUFDSixDQUFDOztBQXRTSCxzRUF1U0M7OztBQXJTQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLDRDQUFjLEdBQVcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGVzdGluYXRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb25JZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGV4dGVuZGVkUzNDb25maWd1cmF0aW9uPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBraW5lc2lzU291cmNlQ29uZmlndXJhdGlvbj86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtS2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWRzaGlmdENvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzQ29uZmlndXJhdGlvbj86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VydmVyU2lkZUVuY3J5cHRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNlcnZlclNpZGVFbmNyeXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3BsdW5rQ29uZmlndXJhdGlvbj86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0dyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nU3RyZWFtTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nR3JvdXBOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dHcm91cE5hbWUgPSB0aGlzLl9sb2dHcm91cE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dTdHJlYW1OYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dTdHJlYW1OYW1lID0gdGhpcy5fbG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZS5sb2dHcm91cE5hbWU7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWUubG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGxvZ19zdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dTdHJlYW1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3N0cmVhbV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdHJlYW1OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nU3RyZWFtTmFtZSgpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJWYWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtZXRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFtZXRlck5hbWUpLFxuICAgIHBhcmFtZXRlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJzPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9jZXNzb3JzPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgcHJvY2Vzc29yczogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvY2Vzc29ycyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvY2Vzc29ycykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvY2Vzc29ycyA9IHRoaXMuX3Byb2Nlc3NvcnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc29ycyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzb3JzID0gdmFsdWUucHJvY2Vzc29ycztcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIHByb2Nlc3NvcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvY2Vzc29ycz86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNbXTsgXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc29ycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc29ycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2Nlc3NvcnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNbXSkge1xuICAgIHRoaXMuX3Byb2Nlc3NvcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcm9jZXNzb3JzKCkge1xuICAgIHRoaXMuX3Byb2Nlc3NvcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2Nlc3NvcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc29ycztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uVnBjQ29uZmlnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3VibmV0SWRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25WcGNDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uVnBjQ29uZmlnT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblZwY0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwSWRzKSxcbiAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25WcGNDb25maWdPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblZwY0NvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9sZUFybiA9IHRoaXMuX3JvbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWN1cml0eUdyb3VwSWRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwSWRzID0gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1Ym5ldElkcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3VibmV0SWRzID0gdGhpcy5fc3VibmV0SWRzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblZwY0NvbmZpZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3VibmV0SWRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWUucm9sZUFybjtcbiAgICAgIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHMgPSB2YWx1ZS5zZWN1cml0eUdyb3VwSWRzO1xuICAgICAgdGhpcy5fc3VibmV0SWRzID0gdmFsdWUuc3VibmV0SWRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VjdXJpdHlHcm91cElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VjdXJpdHlHcm91cElkcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9zZWN1cml0eUdyb3VwSWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5R3JvdXBJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc3VibmV0SWRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdWJuZXRJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3VibmV0SWRzID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdWJuZXRJZHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1ZmZlcmluZ0ludGVydmFsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVmZmVyaW5nU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbHVzdGVyRW5kcG9pbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZG9tYWluQXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGluZGV4TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmRleFJvdGF0aW9uUGVyaW9kPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmV0cnlEdXJhdGlvbj86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzQmFja3VwTW9kZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2cGNDb25maWc/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uVnBjQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVmZmVyaW5nX2ludGVydmFsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZmZlcmluZ0ludGVydmFsKSxcbiAgICBidWZmZXJpbmdfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJpbmdTaXplKSxcbiAgICBjbHVzdGVyX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJFbmRwb2ludCksXG4gICAgZG9tYWluX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb21haW5Bcm4pLFxuICAgIGluZGV4X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhOYW1lKSxcbiAgICBpbmRleF9yb3RhdGlvbl9wZXJpb2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhSb3RhdGlvblBlcmlvZCksXG4gICAgcmV0cnlfZHVyYXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlEdXJhdGlvbiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgczNfYmFja3VwX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNCYWNrdXBNb2RlKSxcbiAgICB0eXBlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZU5hbWUpLFxuICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICAgIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9jZXNzaW5nQ29uZmlndXJhdGlvbiksXG4gICAgdnBjX2NvbmZpZzoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblZwY0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEudnBjQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWZmZXJpbmdJbnRlcnZhbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVmZmVyaW5nSW50ZXJ2YWwgPSB0aGlzLl9idWZmZXJpbmdJbnRlcnZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmluZ1NpemUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1ZmZlcmluZ1NpemUgPSB0aGlzLl9idWZmZXJpbmdTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2x1c3RlckVuZHBvaW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbHVzdGVyRW5kcG9pbnQgPSB0aGlzLl9jbHVzdGVyRW5kcG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kb21haW5Bcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRvbWFpbkFybiA9IHRoaXMuX2RvbWFpbkFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luZGV4TmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5kZXhOYW1lID0gdGhpcy5faW5kZXhOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5kZXhSb3RhdGlvblBlcmlvZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5kZXhSb3RhdGlvblBlcmlvZCA9IHRoaXMuX2luZGV4Um90YXRpb25QZXJpb2Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXRyeUR1cmF0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXRyeUR1cmF0aW9uID0gdGhpcy5fcmV0cnlEdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNCYWNrdXBNb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM0JhY2t1cE1vZGUgPSB0aGlzLl9zM0JhY2t1cE1vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl90eXBlTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudHlwZU5hbWUgPSB0aGlzLl90eXBlTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zID0gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2Nlc3NpbmdDb25maWd1cmF0aW9uID0gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92cGNDb25maWc/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZwY0NvbmZpZyA9IHRoaXMuX3ZwY0NvbmZpZz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWZmZXJpbmdJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1ZmZlcmluZ1NpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbHVzdGVyRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kb21haW5Bcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmRleE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pbmRleFJvdGF0aW9uUGVyaW9kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmV0cnlEdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zM0JhY2t1cE1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl90eXBlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZwY0NvbmZpZy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWZmZXJpbmdJbnRlcnZhbCA9IHZhbHVlLmJ1ZmZlcmluZ0ludGVydmFsO1xuICAgICAgdGhpcy5fYnVmZmVyaW5nU2l6ZSA9IHZhbHVlLmJ1ZmZlcmluZ1NpemU7XG4gICAgICB0aGlzLl9jbHVzdGVyRW5kcG9pbnQgPSB2YWx1ZS5jbHVzdGVyRW5kcG9pbnQ7XG4gICAgICB0aGlzLl9kb21haW5Bcm4gPSB2YWx1ZS5kb21haW5Bcm47XG4gICAgICB0aGlzLl9pbmRleE5hbWUgPSB2YWx1ZS5pbmRleE5hbWU7XG4gICAgICB0aGlzLl9pbmRleFJvdGF0aW9uUGVyaW9kID0gdmFsdWUuaW5kZXhSb3RhdGlvblBlcmlvZDtcbiAgICAgIHRoaXMuX3JldHJ5RHVyYXRpb24gPSB2YWx1ZS5yZXRyeUR1cmF0aW9uO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlLnJvbGVBcm47XG4gICAgICB0aGlzLl9zM0JhY2t1cE1vZGUgPSB2YWx1ZS5zM0JhY2t1cE1vZGU7XG4gICAgICB0aGlzLl90eXBlTmFtZSA9IHZhbHVlLnR5cGVOYW1lO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl92cGNDb25maWcuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnZwY0NvbmZpZztcbiAgICB9XG4gIH1cblxuICAvLyBidWZmZXJpbmdfaW50ZXJ2YWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVmZmVyaW5nSW50ZXJ2YWw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ0ludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYnVmZmVyaW5nX2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWZmZXJpbmdJbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYnVmZmVyaW5nSW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWZmZXJpbmdJbnRlcnZhbCgpIHtcbiAgICB0aGlzLl9idWZmZXJpbmdJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVmZmVyaW5nSW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyaW5nSW50ZXJ2YWw7XG4gIH1cblxuICAvLyBidWZmZXJpbmdfc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWZmZXJpbmdTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBidWZmZXJpbmdTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYnVmZmVyaW5nX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1ZmZlcmluZ1NpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2J1ZmZlcmluZ1NpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWZmZXJpbmdTaXplKCkge1xuICAgIHRoaXMuX2J1ZmZlcmluZ1NpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ1NpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyaW5nU2l6ZTtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfZW5kcG9pbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2x1c3RlckVuZHBvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVyRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX2VuZHBvaW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjbHVzdGVyRW5kcG9pbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJFbmRwb2ludCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsdXN0ZXJFbmRwb2ludCgpIHtcbiAgICB0aGlzLl9jbHVzdGVyRW5kcG9pbnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJFbmRwb2ludElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbHVzdGVyRW5kcG9pbnQ7XG4gIH1cblxuICAvLyBkb21haW5fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RvbWFpbkFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZG9tYWluQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZG9tYWluX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZG9tYWluQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb21haW5Bcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREb21haW5Bcm4oKSB7XG4gICAgdGhpcy5fZG9tYWluQXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkb21haW5Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZG9tYWluQXJuO1xuICB9XG5cbiAgLy8gaW5kZXhfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbmRleE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGluZGV4TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGluZGV4TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5kZXhOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGluZGV4TmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmRleE5hbWU7XG4gIH1cblxuICAvLyBpbmRleF9yb3RhdGlvbl9wZXJpb2QgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5kZXhSb3RhdGlvblBlcmlvZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5kZXhSb3RhdGlvblBlcmlvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X3JvdGF0aW9uX3BlcmlvZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaW5kZXhSb3RhdGlvblBlcmlvZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5kZXhSb3RhdGlvblBlcmlvZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEluZGV4Um90YXRpb25QZXJpb2QoKSB7XG4gICAgdGhpcy5faW5kZXhSb3RhdGlvblBlcmlvZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5kZXhSb3RhdGlvblBlcmlvZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbmRleFJvdGF0aW9uUGVyaW9kO1xuICB9XG5cbiAgLy8gcmV0cnlfZHVyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0cnlEdXJhdGlvbj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcmV0cnlEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JldHJ5X2R1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXRyeUR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV0cnlEdXJhdGlvbigpIHtcbiAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXRyeUR1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5RHVyYXRpb247XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlQXJuO1xuICB9XG5cbiAgLy8gczNfYmFja3VwX21vZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfczNCYWNrdXBNb2RlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzM0JhY2t1cE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19iYWNrdXBfbW9kZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgczNCYWNrdXBNb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zM0JhY2t1cE1vZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTM0JhY2t1cE1vZGUoKSB7XG4gICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0JhY2t1cE1vZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNCYWNrdXBNb2RlO1xuICB9XG5cbiAgLy8gdHlwZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3R5cGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0eXBlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3R5cGVfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdHlwZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VHlwZU5hbWUoKSB7XG4gICAgdGhpcy5fdHlwZU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHR5cGVOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVOYW1lO1xuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucykge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByb2Nlc3NpbmdfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcm9jZXNzaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHZwY19jb25maWcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjQ29uZmlnID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb25WcGNDb25maWdPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidnBjX2NvbmZpZ1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCB2cGNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZwY0NvbmZpZztcbiAgfVxuICBwdWJsaWMgcHV0VnBjQ29uZmlnKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uVnBjQ29uZmlnKSB7XG4gICAgdGhpcy5fdnBjQ29uZmlnLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWcGNDb25maWcoKSB7XG4gICAgdGhpcy5fdnBjQ29uZmlnLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl92cGNDb25maWcuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nR3JvdXBOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dTdHJlYW1OYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dHcm91cE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ0dyb3VwTmFtZSA9IHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ1N0cmVhbU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ1N0cmVhbU5hbWUgPSB0aGlzLl9sb2dTdHJlYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHZhbHVlLmxvZ0dyb3VwTmFtZTtcbiAgICAgIHRoaXMuX2xvZ1N0cmVhbU5hbWUgPSB2YWx1ZS5sb2dTdHJlYW1OYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nR3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dHcm91cE5hbWUoKSB7XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nR3JvdXBOYW1lO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ1N0cmVhbU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ1N0cmVhbU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfc3RyZWFtX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ1N0cmVhbU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ1N0cmVhbU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dTdHJlYW1OYW1lKCkge1xuICAgIHRoaXMuX2xvZ1N0cmVhbU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ1N0cmVhbU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nU3RyZWFtTmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVySGl2ZUpzb25TZXJEZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0aW1lc3RhbXBGb3JtYXRzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVySGl2ZUpzb25TZXJEZVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJIaXZlSnNvblNlckRlT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplckhpdmVKc29uU2VyRGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0aW1lc3RhbXBfZm9ybWF0czogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS50aW1lc3RhbXBGb3JtYXRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplckhpdmVKc29uU2VyRGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplckhpdmVKc29uU2VyRGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3RpbWVzdGFtcEZvcm1hdHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRpbWVzdGFtcEZvcm1hdHMgPSB0aGlzLl90aW1lc3RhbXBGb3JtYXRzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplckhpdmVKc29uU2VyRGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90aW1lc3RhbXBGb3JtYXRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl90aW1lc3RhbXBGb3JtYXRzID0gdmFsdWUudGltZXN0YW1wRm9ybWF0cztcbiAgICB9XG4gIH1cblxuICAvLyB0aW1lc3RhbXBfZm9ybWF0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90aW1lc3RhbXBGb3JtYXRzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHRpbWVzdGFtcEZvcm1hdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndGltZXN0YW1wX2Zvcm1hdHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRpbWVzdGFtcEZvcm1hdHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdGltZXN0YW1wRm9ybWF0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRpbWVzdGFtcEZvcm1hdHMoKSB7XG4gICAgdGhpcy5fdGltZXN0YW1wRm9ybWF0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGltZXN0YW1wRm9ybWF0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lc3RhbXBGb3JtYXRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJPcGVuWEpzb25TZXJEZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2FzZUluc2Vuc2l0aXZlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2x1bW5Ub0pzb25LZXlNYXBwaW5ncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb252ZXJ0RG90c0luSnNvbktleXNUb1VuZGVyc2NvcmVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2FzZUluc2Vuc2l0aXZlKSxcbiAgICBjb2x1bW5fdG9fanNvbl9rZXlfbWFwcGluZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1uVG9Kc29uS2V5TWFwcGluZ3MpLFxuICAgIGNvbnZlcnRfZG90c19pbl9qc29uX2tleXNfdG9fdW5kZXJzY29yZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVyT3BlblhKc29uU2VyRGVPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jYXNlSW5zZW5zaXRpdmUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNhc2VJbnNlbnNpdGl2ZSA9IHRoaXMuX2Nhc2VJbnNlbnNpdGl2ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbHVtblRvSnNvbktleU1hcHBpbmdzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb2x1bW5Ub0pzb25LZXlNYXBwaW5ncyA9IHRoaXMuX2NvbHVtblRvSnNvbktleU1hcHBpbmdzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udmVydERvdHNJbkpzb25LZXlzVG9VbmRlcnNjb3Jlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29udmVydERvdHNJbkpzb25LZXlzVG9VbmRlcnNjb3JlcyA9IHRoaXMuX2NvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVyT3BlblhKc29uU2VyRGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jYXNlSW5zZW5zaXRpdmUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2x1bW5Ub0pzb25LZXlNYXBwaW5ncyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nhc2VJbnNlbnNpdGl2ZSA9IHZhbHVlLmNhc2VJbnNlbnNpdGl2ZTtcbiAgICAgIHRoaXMuX2NvbHVtblRvSnNvbktleU1hcHBpbmdzID0gdmFsdWUuY29sdW1uVG9Kc29uS2V5TWFwcGluZ3M7XG4gICAgICB0aGlzLl9jb252ZXJ0RG90c0luSnNvbktleXNUb1VuZGVyc2NvcmVzID0gdmFsdWUuY29udmVydERvdHNJbkpzb25LZXlzVG9VbmRlcnNjb3JlcztcbiAgICB9XG4gIH1cblxuICAvLyBjYXNlX2luc2Vuc2l0aXZlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nhc2VJbnNlbnNpdGl2ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgY2FzZUluc2Vuc2l0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2Nhc2VfaW5zZW5zaXRpdmUnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjYXNlSW5zZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Nhc2VJbnNlbnNpdGl2ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhc2VJbnNlbnNpdGl2ZSgpIHtcbiAgICB0aGlzLl9jYXNlSW5zZW5zaXRpdmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhc2VJbnNlbnNpdGl2ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXNlSW5zZW5zaXRpdmU7XG4gIH1cblxuICAvLyBjb2x1bW5fdG9fanNvbl9rZXlfbWFwcGluZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29sdW1uVG9Kc29uS2V5TWFwcGluZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNvbHVtblRvSnNvbktleU1hcHBpbmdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5fdG9fanNvbl9rZXlfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb2x1bW5Ub0pzb25LZXlNYXBwaW5ncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY29sdW1uVG9Kc29uS2V5TWFwcGluZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb2x1bW5Ub0pzb25LZXlNYXBwaW5ncygpIHtcbiAgICB0aGlzLl9jb2x1bW5Ub0pzb25LZXlNYXBwaW5ncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29sdW1uVG9Kc29uS2V5TWFwcGluZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uVG9Kc29uS2V5TWFwcGluZ3M7XG4gIH1cblxuICAvLyBjb252ZXJ0X2RvdHNfaW5fanNvbl9rZXlzX3RvX3VuZGVyc2NvcmVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY29udmVydF9kb3RzX2luX2pzb25fa2V5c190b191bmRlcnNjb3JlcycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXModmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb252ZXJ0RG90c0luSnNvbktleXNUb1VuZGVyc2NvcmVzKCkge1xuICAgIHRoaXMuX2NvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udmVydERvdHNJbkpzb25LZXlzVG9VbmRlcnNjb3JlcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhpdmVKc29uU2VyRGU/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVySGl2ZUpzb25TZXJEZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9wZW5YSnNvblNlckRlPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplclRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGl2ZV9qc29uX3Nlcl9kZToga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplckhpdmVKc29uU2VyRGVUb1RlcnJhZm9ybShzdHJ1Y3QhLmhpdmVKc29uU2VyRGUpLFxuICAgIG9wZW5feF9qc29uX3Nlcl9kZToga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlVG9UZXJyYWZvcm0oc3RydWN0IS5vcGVuWEpzb25TZXJEZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faGl2ZUpzb25TZXJEZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGl2ZUpzb25TZXJEZSA9IHRoaXMuX2hpdmVKc29uU2VyRGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vcGVuWEpzb25TZXJEZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3BlblhKc29uU2VyRGUgPSB0aGlzLl9vcGVuWEpzb25TZXJEZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9oaXZlSnNvblNlckRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcGVuWEpzb25TZXJEZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oaXZlSnNvblNlckRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5oaXZlSnNvblNlckRlO1xuICAgICAgdGhpcy5fb3BlblhKc29uU2VyRGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLm9wZW5YSnNvblNlckRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhpdmVfanNvbl9zZXJfZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGl2ZUpzb25TZXJEZSA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVySGl2ZUpzb25TZXJEZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJoaXZlX2pzb25fc2VyX2RlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGhpdmVKc29uU2VyRGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpdmVKc29uU2VyRGU7XG4gIH1cbiAgcHVibGljIHB1dEhpdmVKc29uU2VyRGUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJIaXZlSnNvblNlckRlKSB7XG4gICAgdGhpcy5faGl2ZUpzb25TZXJEZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGl2ZUpzb25TZXJEZSgpIHtcbiAgICB0aGlzLl9oaXZlSnNvblNlckRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhpdmVKc29uU2VyRGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGl2ZUpzb25TZXJEZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3Blbl94X2pzb25fc2VyX2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX29wZW5YSnNvblNlckRlID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJPcGVuWEpzb25TZXJEZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJvcGVuX3hfanNvbl9zZXJfZGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgb3BlblhKc29uU2VyRGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5YSnNvblNlckRlO1xuICB9XG4gIHB1YmxpYyBwdXRPcGVuWEpzb25TZXJEZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlKSB7XG4gICAgdGhpcy5fb3BlblhKc29uU2VyRGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE9wZW5YSnNvblNlckRlKCkge1xuICAgIHRoaXMuX29wZW5YSnNvblNlckRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9wZW5YSnNvblNlckRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5YSnNvblNlckRlLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNlcmlhbGl6ZXI6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkZXNlcmlhbGl6ZXI6IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2VyaWFsaXplciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZGVzZXJpYWxpemVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZXNlcmlhbGl6ZXIgPSB0aGlzLl9kZXNlcmlhbGl6ZXI/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZGVzZXJpYWxpemVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Rlc2VyaWFsaXplci5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZGVzZXJpYWxpemVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlc2VyaWFsaXplciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kZXNlcmlhbGl6ZXIgPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJkZXNlcmlhbGl6ZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZGVzZXJpYWxpemVyKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNlcmlhbGl6ZXI7XG4gIH1cbiAgcHVibGljIHB1dERlc2VyaWFsaXplcih2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplcikge1xuICAgIHRoaXMuX2Rlc2VyaWFsaXplci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2VyaWFsaXplcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNlcmlhbGl6ZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvY2tTaXplQnl0ZXM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9vbUZpbHRlckNvbHVtbnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHk/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wcmVzc2lvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGljdGlvbmFyeUtleVRocmVzaG9sZD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZVBhZGRpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBmb3JtYXRWZXJzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFkZGluZ1RvbGVyYW5jZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb3dJbmRleFN0cmlkZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0cmlwZVNpemVCeXRlcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplck9yY1NlckRlVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyT3JjU2VyRGVPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJsb2NrX3NpemVfYnl0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tTaXplQnl0ZXMpLFxuICAgIGJsb29tX2ZpbHRlcl9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmJsb29tRmlsdGVyQ29sdW1ucyksXG4gICAgYmxvb21fZmlsdGVyX2ZhbHNlX3Bvc2l0aXZlX3Byb2JhYmlsaXR5OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJsb29tRmlsdGVyRmFsc2VQb3NpdGl2ZVByb2JhYmlsaXR5KSxcbiAgICBjb21wcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzc2lvbiksXG4gICAgZGljdGlvbmFyeV9rZXlfdGhyZXNob2xkOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpY3Rpb25hcnlLZXlUaHJlc2hvbGQpLFxuICAgIGVuYWJsZV9wYWRkaW5nOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVQYWRkaW5nKSxcbiAgICBmb3JtYXRfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5mb3JtYXRWZXJzaW9uKSxcbiAgICBwYWRkaW5nX3RvbGVyYW5jZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wYWRkaW5nVG9sZXJhbmNlKSxcbiAgICByb3dfaW5kZXhfc3RyaWRlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvd0luZGV4U3RyaWRlKSxcbiAgICBzdHJpcGVfc2l6ZV9ieXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zdHJpcGVTaXplQnl0ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYmxvY2tTaXplQnl0ZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJsb2NrU2l6ZUJ5dGVzID0gdGhpcy5fYmxvY2tTaXplQnl0ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ibG9vbUZpbHRlckNvbHVtbnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJsb29tRmlsdGVyQ29sdW1ucyA9IHRoaXMuX2Jsb29tRmlsdGVyQ29sdW1ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Jsb29tRmlsdGVyRmFsc2VQb3NpdGl2ZVByb2JhYmlsaXR5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5ibG9vbUZpbHRlckZhbHNlUG9zaXRpdmVQcm9iYWJpbGl0eSA9IHRoaXMuX2Jsb29tRmlsdGVyRmFsc2VQb3NpdGl2ZVByb2JhYmlsaXR5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHJlc3Npb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXByZXNzaW9uID0gdGhpcy5fY29tcHJlc3Npb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaWN0aW9uYXJ5S2V5VGhyZXNob2xkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kaWN0aW9uYXJ5S2V5VGhyZXNob2xkID0gdGhpcy5fZGljdGlvbmFyeUtleVRocmVzaG9sZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZVBhZGRpbmcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZVBhZGRpbmcgPSB0aGlzLl9lbmFibGVQYWRkaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZm9ybWF0VmVyc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZm9ybWF0VmVyc2lvbiA9IHRoaXMuX2Zvcm1hdFZlcnNpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYWRkaW5nVG9sZXJhbmNlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYWRkaW5nVG9sZXJhbmNlID0gdGhpcy5fcGFkZGluZ1RvbGVyYW5jZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Jvd0luZGV4U3RyaWRlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb3dJbmRleFN0cmlkZSA9IHRoaXMuX3Jvd0luZGV4U3RyaWRlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3RyaXBlU2l6ZUJ5dGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdHJpcGVTaXplQnl0ZXMgPSB0aGlzLl9zdHJpcGVTaXplQnl0ZXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Jsb2NrU2l6ZUJ5dGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYmxvb21GaWx0ZXJDb2x1bW5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RpY3Rpb25hcnlLZXlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9lbmFibGVQYWRkaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZm9ybWF0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhZGRpbmdUb2xlcmFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb3dJbmRleFN0cmlkZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N0cmlwZVNpemVCeXRlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYmxvY2tTaXplQnl0ZXMgPSB2YWx1ZS5ibG9ja1NpemVCeXRlcztcbiAgICAgIHRoaXMuX2Jsb29tRmlsdGVyQ29sdW1ucyA9IHZhbHVlLmJsb29tRmlsdGVyQ29sdW1ucztcbiAgICAgIHRoaXMuX2Jsb29tRmlsdGVyRmFsc2VQb3NpdGl2ZVByb2JhYmlsaXR5ID0gdmFsdWUuYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHk7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvbiA9IHZhbHVlLmNvbXByZXNzaW9uO1xuICAgICAgdGhpcy5fZGljdGlvbmFyeUtleVRocmVzaG9sZCA9IHZhbHVlLmRpY3Rpb25hcnlLZXlUaHJlc2hvbGQ7XG4gICAgICB0aGlzLl9lbmFibGVQYWRkaW5nID0gdmFsdWUuZW5hYmxlUGFkZGluZztcbiAgICAgIHRoaXMuX2Zvcm1hdFZlcnNpb24gPSB2YWx1ZS5mb3JtYXRWZXJzaW9uO1xuICAgICAgdGhpcy5fcGFkZGluZ1RvbGVyYW5jZSA9IHZhbHVlLnBhZGRpbmdUb2xlcmFuY2U7XG4gICAgICB0aGlzLl9yb3dJbmRleFN0cmlkZSA9IHZhbHVlLnJvd0luZGV4U3RyaWRlO1xuICAgICAgdGhpcy5fc3RyaXBlU2l6ZUJ5dGVzID0gdmFsdWUuc3RyaXBlU2l6ZUJ5dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJsb2NrX3NpemVfYnl0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvY2tTaXplQnl0ZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJsb2NrU2l6ZUJ5dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmxvY2tfc2l6ZV9ieXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvY2tTaXplQnl0ZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2Jsb2NrU2l6ZUJ5dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QmxvY2tTaXplQnl0ZXMoKSB7XG4gICAgdGhpcy5fYmxvY2tTaXplQnl0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJsb2NrU2l6ZUJ5dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jsb2NrU2l6ZUJ5dGVzO1xuICB9XG5cbiAgLy8gYmxvb21fZmlsdGVyX2NvbHVtbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvb21GaWx0ZXJDb2x1bW5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGJsb29tRmlsdGVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdibG9vbV9maWx0ZXJfY29sdW1ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYmxvb21GaWx0ZXJDb2x1bW5zKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2Jsb29tRmlsdGVyQ29sdW1ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJsb29tRmlsdGVyQ29sdW1ucygpIHtcbiAgICB0aGlzLl9ibG9vbUZpbHRlckNvbHVtbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJsb29tRmlsdGVyQ29sdW1uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ibG9vbUZpbHRlckNvbHVtbnM7XG4gIH1cblxuICAvLyBibG9vbV9maWx0ZXJfZmFsc2VfcG9zaXRpdmVfcHJvYmFiaWxpdHkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHk/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJsb29tRmlsdGVyRmFsc2VQb3NpdGl2ZVByb2JhYmlsaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmxvb21fZmlsdGVyX2ZhbHNlX3Bvc2l0aXZlX3Byb2JhYmlsaXR5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBibG9vbUZpbHRlckZhbHNlUG9zaXRpdmVQcm9iYWJpbGl0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9vbUZpbHRlckZhbHNlUG9zaXRpdmVQcm9iYWJpbGl0eSgpIHtcbiAgICB0aGlzLl9ibG9vbUZpbHRlckZhbHNlUG9zaXRpdmVQcm9iYWJpbGl0eSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHk7XG4gIH1cblxuICAvLyBjb21wcmVzc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wcmVzc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXByZXNzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcHJlc3Npb24oKSB7XG4gICAgdGhpcy5fY29tcHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXByZXNzaW9uO1xuICB9XG5cbiAgLy8gZGljdGlvbmFyeV9rZXlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RpY3Rpb25hcnlLZXlUaHJlc2hvbGQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGRpY3Rpb25hcnlLZXlUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkaWN0aW9uYXJ5X2tleV90aHJlc2hvbGQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRpY3Rpb25hcnlLZXlUaHJlc2hvbGQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2RpY3Rpb25hcnlLZXlUaHJlc2hvbGQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREaWN0aW9uYXJ5S2V5VGhyZXNob2xkKCkge1xuICAgIHRoaXMuX2RpY3Rpb25hcnlLZXlUaHJlc2hvbGQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpY3Rpb25hcnlLZXlUaHJlc2hvbGRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGljdGlvbmFyeUtleVRocmVzaG9sZDtcbiAgfVxuXG4gIC8vIGVuYWJsZV9wYWRkaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZVBhZGRpbmc/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZVBhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX3BhZGRpbmcnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVQYWRkaW5nKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVQYWRkaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlUGFkZGluZygpIHtcbiAgICB0aGlzLl9lbmFibGVQYWRkaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVQYWRkaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVBhZGRpbmc7XG4gIH1cblxuICAvLyBmb3JtYXRfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JtYXRWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmb3JtYXRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZm9ybWF0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZvcm1hdFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Zvcm1hdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JtYXRWZXJzaW9uKCkge1xuICAgIHRoaXMuX2Zvcm1hdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZvcm1hdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0VmVyc2lvbjtcbiAgfVxuXG4gIC8vIHBhZGRpbmdfdG9sZXJhbmNlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhZGRpbmdUb2xlcmFuY2U/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHBhZGRpbmdUb2xlcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwYWRkaW5nX3RvbGVyYW5jZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFkZGluZ1RvbGVyYW5jZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFkZGluZ1RvbGVyYW5jZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhZGRpbmdUb2xlcmFuY2UoKSB7XG4gICAgdGhpcy5fcGFkZGluZ1RvbGVyYW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFkZGluZ1RvbGVyYW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYWRkaW5nVG9sZXJhbmNlO1xuICB9XG5cbiAgLy8gcm93X2luZGV4X3N0cmlkZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb3dJbmRleFN0cmlkZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcm93SW5kZXhTdHJpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyb3dfaW5kZXhfc3RyaWRlJyk7XG4gIH1cbiAgcHVibGljIHNldCByb3dJbmRleFN0cmlkZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93SW5kZXhTdHJpZGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb3dJbmRleFN0cmlkZSgpIHtcbiAgICB0aGlzLl9yb3dJbmRleFN0cmlkZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm93SW5kZXhTdHJpZGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm93SW5kZXhTdHJpZGU7XG4gIH1cblxuICAvLyBzdHJpcGVfc2l6ZV9ieXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdHJpcGVTaXplQnl0ZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHN0cmlwZVNpemVCeXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3N0cmlwZV9zaXplX2J5dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBzdHJpcGVTaXplQnl0ZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0cmlwZVNpemVCeXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0cmlwZVNpemVCeXRlcygpIHtcbiAgICB0aGlzLl9zdHJpcGVTaXplQnl0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0cmlwZVNpemVCeXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJpcGVTaXplQnl0ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyUGFycXVldFNlckRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBibG9ja1NpemVCeXRlcz86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXByZXNzaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlRGljdGlvbmFyeUNvbXByZXNzaW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4UGFkZGluZ0J5dGVzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYWdlU2l6ZUJ5dGVzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgd3JpdGVyVmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplclBhcnF1ZXRTZXJEZVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplclBhcnF1ZXRTZXJEZU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplclBhcnF1ZXRTZXJEZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJsb2NrX3NpemVfYnl0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmxvY2tTaXplQnl0ZXMpLFxuICAgIGNvbXByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uKSxcbiAgICBlbmFibGVfZGljdGlvbmFyeV9jb21wcmVzc2lvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlRGljdGlvbmFyeUNvbXByZXNzaW9uKSxcbiAgICBtYXhfcGFkZGluZ19ieXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5tYXhQYWRkaW5nQnl0ZXMpLFxuICAgIHBhZ2Vfc2l6ZV9ieXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5wYWdlU2l6ZUJ5dGVzKSxcbiAgICB3cml0ZXJfdmVyc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53cml0ZXJWZXJzaW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyUGFycXVldFNlckRlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplclBhcnF1ZXRTZXJEZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYmxvY2tTaXplQnl0ZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJsb2NrU2l6ZUJ5dGVzID0gdGhpcy5fYmxvY2tTaXplQnl0ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wcmVzc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcHJlc3Npb24gPSB0aGlzLl9jb21wcmVzc2lvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2VuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlRGljdGlvbmFyeUNvbXByZXNzaW9uID0gdGhpcy5fZW5hYmxlRGljdGlvbmFyeUNvbXByZXNzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbWF4UGFkZGluZ0J5dGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXhQYWRkaW5nQnl0ZXMgPSB0aGlzLl9tYXhQYWRkaW5nQnl0ZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYWdlU2l6ZUJ5dGVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYWdlU2l6ZUJ5dGVzID0gdGhpcy5fcGFnZVNpemVCeXRlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3dyaXRlclZlcnNpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LndyaXRlclZlcnNpb24gPSB0aGlzLl93cml0ZXJWZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyUGFycXVldFNlckRlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYmxvY2tTaXplQnl0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2VuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21heFBhZGRpbmdCeXRlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhZ2VTaXplQnl0ZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl93cml0ZXJWZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9ibG9ja1NpemVCeXRlcyA9IHZhbHVlLmJsb2NrU2l6ZUJ5dGVzO1xuICAgICAgdGhpcy5fY29tcHJlc3Npb24gPSB2YWx1ZS5jb21wcmVzc2lvbjtcbiAgICAgIHRoaXMuX2VuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbiA9IHZhbHVlLmVuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbjtcbiAgICAgIHRoaXMuX21heFBhZGRpbmdCeXRlcyA9IHZhbHVlLm1heFBhZGRpbmdCeXRlcztcbiAgICAgIHRoaXMuX3BhZ2VTaXplQnl0ZXMgPSB2YWx1ZS5wYWdlU2l6ZUJ5dGVzO1xuICAgICAgdGhpcy5fd3JpdGVyVmVyc2lvbiA9IHZhbHVlLndyaXRlclZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYmxvY2tfc2l6ZV9ieXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ibG9ja1NpemVCeXRlcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYmxvY2tTaXplQnl0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdibG9ja19zaXplX2J5dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBibG9ja1NpemVCeXRlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYmxvY2tTaXplQnl0ZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCbG9ja1NpemVCeXRlcygpIHtcbiAgICB0aGlzLl9ibG9ja1NpemVCeXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYmxvY2tTaXplQnl0ZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2tTaXplQnl0ZXM7XG4gIH1cblxuICAvLyBjb21wcmVzc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wcmVzc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcHJlc3Npb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXByZXNzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcHJlc3Npb24oKSB7XG4gICAgdGhpcy5fY29tcHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXByZXNzaW9uO1xuICB9XG5cbiAgLy8gZW5hYmxlX2RpY3Rpb25hcnlfY29tcHJlc3Npb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlRGljdGlvbmFyeUNvbXByZXNzaW9uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVEaWN0aW9uYXJ5Q29tcHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlX2RpY3Rpb25hcnlfY29tcHJlc3Npb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVEaWN0aW9uYXJ5Q29tcHJlc3Npb24odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbigpIHtcbiAgICB0aGlzLl9lbmFibGVEaWN0aW9uYXJ5Q29tcHJlc3Npb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVEaWN0aW9uYXJ5Q29tcHJlc3Npb247XG4gIH1cblxuICAvLyBtYXhfcGFkZGluZ19ieXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhQYWRkaW5nQnl0ZXM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG1heFBhZGRpbmdCeXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9wYWRkaW5nX2J5dGVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtYXhQYWRkaW5nQnl0ZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21heFBhZGRpbmdCeXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFBhZGRpbmdCeXRlcygpIHtcbiAgICB0aGlzLl9tYXhQYWRkaW5nQnl0ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1heFBhZGRpbmdCeXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhQYWRkaW5nQnl0ZXM7XG4gIH1cblxuICAvLyBwYWdlX3NpemVfYnl0ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFnZVNpemVCeXRlcz86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcGFnZVNpemVCeXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BhZ2Vfc2l6ZV9ieXRlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFnZVNpemVCeXRlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemVCeXRlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhZ2VTaXplQnl0ZXMoKSB7XG4gICAgdGhpcy5fcGFnZVNpemVCeXRlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFnZVNpemVCeXRlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZUJ5dGVzO1xuICB9XG5cbiAgLy8gd3JpdGVyX3ZlcnNpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfd3JpdGVyVmVyc2lvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgd3JpdGVyVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3dyaXRlcl92ZXJzaW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCB3cml0ZXJWZXJzaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93cml0ZXJWZXJzaW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0V3JpdGVyVmVyc2lvbigpIHtcbiAgICB0aGlzLl93cml0ZXJWZXJzaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB3cml0ZXJWZXJzaW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRlclZlcnNpb247XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG9yY1NlckRlPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyT3JjU2VyRGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJxdWV0U2VyRGU/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJQYXJxdWV0U2VyRGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvcmNfc2VyX2RlOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZVRvVGVycmFmb3JtKHN0cnVjdCEub3JjU2VyRGUpLFxuICAgIHBhcnF1ZXRfc2VyX2RlOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJQYXJxdWV0U2VyRGVUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcnF1ZXRTZXJEZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX29yY1NlckRlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vcmNTZXJEZSA9IHRoaXMuX29yY1NlckRlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFycXVldFNlckRlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXJxdWV0U2VyRGUgPSB0aGlzLl9wYXJxdWV0U2VyRGU/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9vcmNTZXJEZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFycXVldFNlckRlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX29yY1NlckRlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5vcmNTZXJEZTtcbiAgICAgIHRoaXMuX3BhcnF1ZXRTZXJEZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGFycXVldFNlckRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9yY19zZXJfZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfb3JjU2VyRGUgPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyT3JjU2VyRGVPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwib3JjX3Nlcl9kZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBvcmNTZXJEZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JjU2VyRGU7XG4gIH1cbiAgcHVibGljIHB1dE9yY1NlckRlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZSkge1xuICAgIHRoaXMuX29yY1NlckRlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPcmNTZXJEZSgpIHtcbiAgICB0aGlzLl9vcmNTZXJEZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvcmNTZXJEZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vcmNTZXJEZS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gcGFycXVldF9zZXJfZGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFycXVldFNlckRlID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplclBhcnF1ZXRTZXJEZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwYXJxdWV0X3Nlcl9kZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwYXJxdWV0U2VyRGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnF1ZXRTZXJEZTtcbiAgfVxuICBwdWJsaWMgcHV0UGFycXVldFNlckRlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJQYXJxdWV0U2VyRGUpIHtcbiAgICB0aGlzLl9wYXJxdWV0U2VyRGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcnF1ZXRTZXJEZSgpIHtcbiAgICB0aGlzLl9wYXJxdWV0U2VyRGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFycXVldFNlckRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnF1ZXRTZXJEZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcmlhbGl6ZXI6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNlcmlhbGl6ZXI6IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplclRvVGVycmFmb3JtKHN0cnVjdCEuc2VyaWFsaXplciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZXJpYWxpemVyPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJpYWxpemVyID0gdGhpcy5fc2VyaWFsaXplcj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VyaWFsaXplci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zZXJpYWxpemVyLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZXJpYWxpemVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNlcmlhbGl6ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2VyaWFsaXplciA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2VyaWFsaXplclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZXJpYWxpemVyKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJpYWxpemVyO1xuICB9XG4gIHB1YmxpYyBwdXRTZXJpYWxpemVyKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXIpIHtcbiAgICB0aGlzLl9zZXJpYWxpemVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2VyaWFsaXplcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJpYWxpemVyLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvblNjaGVtYUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNhdGFsb2dJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVnaW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhYmxlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZlcnNpb25JZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25TY2hlbWFDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvblNjaGVtYUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uU2NoZW1hQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNhdGFsb2dfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2F0YWxvZ0lkKSxcbiAgICBkYXRhYmFzZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlTmFtZSksXG4gICAgcmVnaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZ2lvbiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50YWJsZU5hbWUpLFxuICAgIHZlcnNpb25faWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmVyc2lvbklkKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvblNjaGVtYUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvblNjaGVtYUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NhdGFsb2dJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2F0YWxvZ0lkID0gdGhpcy5fY2F0YWxvZ0lkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGF0YWJhc2VOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhYmFzZU5hbWUgPSB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWdpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlZ2lvbiA9IHRoaXMuX3JlZ2lvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFibGVOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWJsZU5hbWUgPSB0aGlzLl90YWJsZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92ZXJzaW9uSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnZlcnNpb25JZCA9IHRoaXMuX3ZlcnNpb25JZDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25TY2hlbWFDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2F0YWxvZ0lkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVnaW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3RhYmxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ZlcnNpb25JZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2F0YWxvZ0lkID0gdmFsdWUuY2F0YWxvZ0lkO1xuICAgICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdmFsdWUuZGF0YWJhc2VOYW1lO1xuICAgICAgdGhpcy5fcmVnaW9uID0gdmFsdWUucmVnaW9uO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlLnJvbGVBcm47XG4gICAgICB0aGlzLl90YWJsZU5hbWUgPSB2YWx1ZS50YWJsZU5hbWU7XG4gICAgICB0aGlzLl92ZXJzaW9uSWQgPSB2YWx1ZS52ZXJzaW9uSWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY2F0YWxvZ19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NhdGFsb2dJZD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2F0YWxvZ19pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2F0YWxvZ0lkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDYXRhbG9nSWQoKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXRhbG9nSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0YWxvZ0lkO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhYmFzZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gIH1cblxuICAvLyByZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWdpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlZ2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlZ2lvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnaW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWdpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWdpb24oKSB7XG4gICAgdGhpcy5fcmVnaW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWdpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaW9uO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxuXG4gIC8vIHRhYmxlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFibGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWJsZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhYmxlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWJsZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVOYW1lO1xuICB9XG5cbiAgLy8gdmVyc2lvbl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJzaW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZlcnNpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbklkKCkge1xuICAgIHRoaXMuX3ZlcnNpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb25JZDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5wdXRGb3JtYXRDb25maWd1cmF0aW9uOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvbjogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWFDb25maWd1cmF0aW9uOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uU2NoZW1hQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGlucHV0X2Zvcm1hdF9jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dEZvcm1hdENvbmZpZ3VyYXRpb24pLFxuICAgIG91dHB1dF9mb3JtYXRfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24pLFxuICAgIHNjaGVtYV9jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uU2NoZW1hQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuc2NoZW1hQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnB1dEZvcm1hdENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0Rm9ybWF0Q29uZmlndXJhdGlvbiA9IHRoaXMuX2lucHV0Rm9ybWF0Q29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX291dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24gPSB0aGlzLl9vdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NoZW1hQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NoZW1hQ29uZmlndXJhdGlvbiA9IHRoaXMuX3NjaGVtYUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0Rm9ybWF0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NoZW1hQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX2lucHV0Rm9ybWF0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaW5wdXRGb3JtYXRDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fb3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUub3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX3NjaGVtYUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNjaGVtYUNvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBpbnB1dF9mb3JtYXRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbnB1dEZvcm1hdENvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbnB1dF9mb3JtYXRfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbnB1dEZvcm1hdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0Rm9ybWF0Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0SW5wdXRGb3JtYXRDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5faW5wdXRGb3JtYXRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRGb3JtYXRDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0Rm9ybWF0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3V0cHV0X2Zvcm1hdF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX291dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwib3V0cHV0X2Zvcm1hdF9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dEZvcm1hdENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dE91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fb3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2NoZW1hX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NoZW1hQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uU2NoZW1hQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzY2hlbWFfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzY2hlbWFDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWFDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTY2hlbWFDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uU2NoZW1hQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3NjaGVtYUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlbWFDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtYUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRHluYW1pY1BhcnRpdGlvbmluZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRyeUR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgcmV0cnlfZHVyYXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlEdXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EeW5hbWljUGFydGl0aW9uaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRHluYW1pY1BhcnRpdGlvbmluZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV0cnlEdXJhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmV0cnlEdXJhdGlvbiA9IHRoaXMuX3JldHJ5RHVyYXRpb247XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRHluYW1pY1BhcnRpdGlvbmluZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmV0cnlEdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdmFsdWUucmV0cnlEdXJhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIHJldHJ5X2R1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldHJ5RHVyYXRpb24/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IHJldHJ5RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdyZXRyeV9kdXJhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmV0cnlEdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmV0cnlEdXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldHJ5RHVyYXRpb24oKSB7XG4gICAgdGhpcy5fcmV0cnlEdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmV0cnlEdXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeUR1cmF0aW9uO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlck5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyVmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJOYW1lKSxcbiAgICBwYXJhbWV0ZXJfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFyYW1ldGVyVmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29ycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVycz86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc29ycz86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIHByb2Nlc3NvcnM6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2Nlc3NvcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NvcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2Nlc3NvcnMgPSB0aGlzLl9wcm9jZXNzb3JzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvcnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc29ycyA9IHZhbHVlLnByb2Nlc3NvcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBwcm9jZXNzb3JzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2Nlc3NvcnM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzW107IFxuICBwdWJsaWMgZ2V0IHByb2Nlc3NvcnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2Nlc3NvcnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBwcm9jZXNzb3JzKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzW10pIHtcbiAgICB0aGlzLl9wcm9jZXNzb3JzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvY2Vzc29ycygpIHtcbiAgICB0aGlzLl9wcm9jZXNzb3JzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9jZXNzb3JzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NvcnM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0dyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nU3RyZWFtTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nR3JvdXBOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dHcm91cE5hbWUgPSB0aGlzLl9sb2dHcm91cE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dTdHJlYW1OYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dTdHJlYW1OYW1lID0gdGhpcy5fbG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZS5sb2dHcm91cE5hbWU7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWUubG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGxvZ19zdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dTdHJlYW1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3N0cmVhbV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdHJlYW1OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nU3RyZWFtTmFtZSgpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0QXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1ZmZlckludGVydmFsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVmZmVyU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcHJlc3Npb25Gb3JtYXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyX2ludGVydmFsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZmZlckludGVydmFsKSxcbiAgICBidWZmZXJfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJTaXplKSxcbiAgICBjb21wcmVzc2lvbl9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3Npb25Gb3JtYXQpLFxuICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0QXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRBcm4gPSB0aGlzLl9idWNrZXRBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWZmZXJJbnRlcnZhbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVmZmVySW50ZXJ2YWwgPSB0aGlzLl9idWZmZXJJbnRlcnZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1ZmZlclNpemUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1ZmZlclNpemUgPSB0aGlzLl9idWZmZXJTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHJlc3Npb25Gb3JtYXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXByZXNzaW9uRm9ybWF0ID0gdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUFybiA9IHRoaXMuX2ttc0tleUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWZpeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9sZUFybiA9IHRoaXMuX3JvbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXRBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWZmZXJJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1ZmZlclNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVja2V0QXJuID0gdmFsdWUuYnVja2V0QXJuO1xuICAgICAgdGhpcy5fYnVmZmVySW50ZXJ2YWwgPSB2YWx1ZS5idWZmZXJJbnRlcnZhbDtcbiAgICAgIHRoaXMuX2J1ZmZlclNpemUgPSB2YWx1ZS5idWZmZXJTaXplO1xuICAgICAgdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQgPSB2YWx1ZS5jb21wcmVzc2lvbkZvcm1hdDtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlLmttc0tleUFybjtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlLnByZWZpeDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLy8gYnVja2V0X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWNrZXRBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldEFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0QXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRBcm47XG4gIH1cblxuICAvLyBidWZmZXJfaW50ZXJ2YWwgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVmZmVySW50ZXJ2YWw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJ1ZmZlckludGVydmFsKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYnVmZmVyX2ludGVydmFsJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWZmZXJJbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYnVmZmVySW50ZXJ2YWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWZmZXJJbnRlcnZhbCgpIHtcbiAgICB0aGlzLl9idWZmZXJJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVmZmVySW50ZXJ2YWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVySW50ZXJ2YWw7XG4gIH1cblxuICAvLyBidWZmZXJfc2l6ZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWZmZXJTaXplPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBidWZmZXJTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYnVmZmVyX3NpemUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1ZmZlclNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2J1ZmZlclNpemUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRCdWZmZXJTaXplKCkge1xuICAgIHRoaXMuX2J1ZmZlclNpemUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1ZmZlclNpemVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyU2l6ZTtcbiAgfVxuXG4gIC8vIGNvbXByZXNzaW9uX2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wcmVzc2lvbkZvcm1hdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25Gb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbl9mb3JtYXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXByZXNzaW9uRm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXByZXNzaW9uRm9ybWF0KCkge1xuICAgIHRoaXMuX2NvbXByZXNzaW9uRm9ybWF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wcmVzc2lvbkZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdDtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUFybjtcbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmaXgoKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldEFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWZmZXJJbnRlcnZhbD86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1ZmZlclNpemU/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXByZXNzaW9uRm9ybWF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVycm9yT3V0cHV0UHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga21zS2V5QXJuPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0JhY2t1cE1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0JhY2t1cENvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRBcm4pLFxuICAgIGJ1ZmZlcl9pbnRlcnZhbDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJJbnRlcnZhbCksXG4gICAgYnVmZmVyX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYnVmZmVyU2l6ZSksXG4gICAgY29tcHJlc3Npb25fZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uRm9ybWF0KSxcbiAgICBlcnJvcl9vdXRwdXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVycm9yT3V0cHV0UHJlZml4KSxcbiAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHMzX2JhY2t1cF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzQmFja3VwTW9kZSksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyksXG4gICAgZGF0YV9mb3JtYXRfY29udmVyc2lvbl9jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24pLFxuICAgIGR5bmFtaWNfcGFydGl0aW9uaW5nX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25EeW5hbWljUGFydGl0aW9uaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZHluYW1pY1BhcnRpdGlvbmluZ0NvbmZpZ3VyYXRpb24pLFxuICAgIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9jZXNzaW5nQ29uZmlndXJhdGlvbiksXG4gICAgczNfYmFja3VwX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnMzQmFja3VwQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0QXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRBcm4gPSB0aGlzLl9idWNrZXRBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWZmZXJJbnRlcnZhbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVmZmVySW50ZXJ2YWwgPSB0aGlzLl9idWZmZXJJbnRlcnZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1ZmZlclNpemUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1ZmZlclNpemUgPSB0aGlzLl9idWZmZXJTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHJlc3Npb25Gb3JtYXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXByZXNzaW9uRm9ybWF0ID0gdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9lcnJvck91dHB1dFByZWZpeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZXJyb3JPdXRwdXRQcmVmaXggPSB0aGlzLl9lcnJvck91dHB1dFByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ttc0tleUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua21zS2V5QXJuID0gdGhpcy5fa21zS2V5QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcmVmaXggPSB0aGlzLl9wcmVmaXg7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb2xlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb2xlQXJuID0gdGhpcy5fcm9sZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3MzQmFja3VwTW9kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNCYWNrdXBNb2RlID0gdGhpcy5fczNCYWNrdXBNb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbiA9IHRoaXMuX2RhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2R5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5keW5hbWljUGFydGl0aW9uaW5nQ29uZmlndXJhdGlvbiA9IHRoaXMuX2R5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2Nlc3NpbmdDb25maWd1cmF0aW9uID0gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0JhY2t1cENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzQmFja3VwQ29uZmlndXJhdGlvbiA9IHRoaXMuX3MzQmFja3VwQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXRBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWZmZXJJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1ZmZlclNpemUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vycm9yT3V0cHV0UHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzQmFja3VwTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9keW5hbWljUGFydGl0aW9uaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzQmFja3VwQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXRBcm4gPSB2YWx1ZS5idWNrZXRBcm47XG4gICAgICB0aGlzLl9idWZmZXJJbnRlcnZhbCA9IHZhbHVlLmJ1ZmZlckludGVydmFsO1xuICAgICAgdGhpcy5fYnVmZmVyU2l6ZSA9IHZhbHVlLmJ1ZmZlclNpemU7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdCA9IHZhbHVlLmNvbXByZXNzaW9uRm9ybWF0O1xuICAgICAgdGhpcy5fZXJyb3JPdXRwdXRQcmVmaXggPSB2YWx1ZS5lcnJvck91dHB1dFByZWZpeDtcbiAgICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlLmttc0tleUFybjtcbiAgICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlLnByZWZpeDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdmFsdWUuczNCYWNrdXBNb2RlO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gICAgICB0aGlzLl9kYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX2R5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5keW5hbWljUGFydGl0aW9uaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5wcm9jZXNzaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX3MzQmFja3VwQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuczNCYWNrdXBDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0QXJuO1xuICB9XG5cbiAgLy8gYnVmZmVyX2ludGVydmFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1ZmZlckludGVydmFsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBidWZmZXJJbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2J1ZmZlcl9pbnRlcnZhbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVmZmVySW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2J1ZmZlckludGVydmFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVmZmVySW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5fYnVmZmVySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1ZmZlckludGVydmFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlckludGVydmFsO1xuICB9XG5cbiAgLy8gYnVmZmVyX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVmZmVyU2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYnVmZmVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2J1ZmZlcl9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWZmZXJTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9idWZmZXJTaXplID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVmZmVyU2l6ZSgpIHtcbiAgICB0aGlzLl9idWZmZXJTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWZmZXJTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlclNpemU7XG4gIH1cblxuICAvLyBjb21wcmVzc2lvbl9mb3JtYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcHJlc3Npb25Gb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHJlc3Npb25fZm9ybWF0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wcmVzc2lvbkZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wcmVzc2lvbkZvcm1hdCgpIHtcbiAgICB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25Gb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQ7XG4gIH1cblxuICAvLyBlcnJvcl9vdXRwdXRfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Vycm9yT3V0cHV0UHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBlcnJvck91dHB1dFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX291dHB1dF9wcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGVycm9yT3V0cHV0UHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9lcnJvck91dHB1dFByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVycm9yT3V0cHV0UHJlZml4KCkge1xuICAgIHRoaXMuX2Vycm9yT3V0cHV0UHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlcnJvck91dHB1dFByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck91dHB1dFByZWZpeDtcbiAgfVxuXG4gIC8vIGttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ttc0tleUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna21zX2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGttc0tleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S21zS2V5QXJuKCkge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga21zS2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ttc0tleUFybjtcbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQcmVmaXgoKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxuXG4gIC8vIHMzX2JhY2t1cF9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQmFja3VwTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfYmFja3VwX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzQmFja3VwTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNCYWNrdXBNb2RlKCkge1xuICAgIHRoaXMuX3MzQmFja3VwTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQmFja3VwTW9kZTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZGF0YV9mb3JtYXRfY29udmVyc2lvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImRhdGFfZm9ybWF0X2NvbnZlcnNpb25fY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBkYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0RGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGR5bmFtaWNfcGFydGl0aW9uaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZHluYW1pY1BhcnRpdGlvbmluZ0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImR5bmFtaWNfcGFydGl0aW9uaW5nX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZHluYW1pY1BhcnRpdGlvbmluZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXREeW5hbWljUGFydGl0aW9uaW5nQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvbkR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZHluYW1pY1BhcnRpdGlvbmluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldER5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2R5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGR5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R5bmFtaWNQYXJ0aXRpb25pbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByb2Nlc3NpbmdfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcm9jZXNzaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHMzX2JhY2t1cF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQmFja3VwQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInMzX2JhY2t1cF9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHMzQmFja3VwQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fczNCYWNrdXBDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTM0JhY2t1cENvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zM0JhY2t1cENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzQmFja3VwQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9zM0JhY2t1cENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQmFja3VwQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0dyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nU3RyZWFtTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ0dyb3VwTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nR3JvdXBOYW1lID0gdGhpcy5fbG9nR3JvdXBOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nU3RyZWFtTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nU3RyZWFtTmFtZSA9IHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZS5sb2dHcm91cE5hbWU7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWUubG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGxvZ19zdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dTdHJlYW1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3N0cmVhbV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdHJlYW1OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nU3RyZWFtTmFtZSgpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlclZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtZXRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFtZXRlck5hbWUpLFxuICAgIHBhcmFtZXRlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHBhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9jZXNzb3JzPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBwcm9jZXNzb3JzOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2Nlc3NvcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9jZXNzb3JzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9jZXNzb3JzID0gdGhpcy5fcHJvY2Vzc29ycztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvcnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc29ycyA9IHZhbHVlLnByb2Nlc3NvcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBwcm9jZXNzb3JzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2Nlc3NvcnM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNbXTsgXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc29ycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc29ycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2Nlc3NvcnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1tdKSB7XG4gICAgdGhpcy5fcHJvY2Vzc29ycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NvcnMoKSB7XG4gICAgdGhpcy5fcHJvY2Vzc29ycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc29yc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzb3JzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uQ29tbW9uQXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uQ29tbW9uQXR0cmlidXRlc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uQ29tbW9uQXR0cmlidXRlcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbnRlbnRFbmNvZGluZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbW1vbkF0dHJpYnV0ZXM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25SZXF1ZXN0Q29uZmlndXJhdGlvbkNvbW1vbkF0dHJpYnV0ZXNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25SZXF1ZXN0Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbnRlbnRfZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudEVuY29kaW5nKSxcbiAgICBjb21tb25fYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25SZXF1ZXN0Q29uZmlndXJhdGlvbkNvbW1vbkF0dHJpYnV0ZXNUb1RlcnJhZm9ybSkoc3RydWN0IS5jb21tb25BdHRyaWJ1dGVzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvbnRlbnRFbmNvZGluZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29udGVudEVuY29kaW5nID0gdGhpcy5fY29udGVudEVuY29kaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tbW9uQXR0cmlidXRlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tbW9uQXR0cmlidXRlcyA9IHRoaXMuX2NvbW1vbkF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25SZXF1ZXN0Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvbnRlbnRFbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbW1vbkF0dHJpYnV0ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbnRlbnRFbmNvZGluZyA9IHZhbHVlLmNvbnRlbnRFbmNvZGluZztcbiAgICAgIHRoaXMuX2NvbW1vbkF0dHJpYnV0ZXMgPSB2YWx1ZS5jb21tb25BdHRyaWJ1dGVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvbnRlbnRfZW5jb2RpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29udGVudEVuY29kaW5nPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250ZW50RW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb250ZW50X2VuY29kaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb250ZW50RW5jb2RpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRlbnRFbmNvZGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbnRlbnRFbmNvZGluZygpIHtcbiAgICB0aGlzLl9jb250ZW50RW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRlbnRFbmNvZGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50RW5jb2Rpbmc7XG4gIH1cblxuICAvLyBjb21tb25fYXR0cmlidXRlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21tb25BdHRyaWJ1dGVzPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb25Db21tb25BdHRyaWJ1dGVzW107IFxuICBwdWJsaWMgZ2V0IGNvbW1vbkF0dHJpYnV0ZXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbW1vbl9hdHRyaWJ1dGVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29tbW9uQXR0cmlidXRlcyh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb25Db21tb25BdHRyaWJ1dGVzW10pIHtcbiAgICB0aGlzLl9jb21tb25BdHRyaWJ1dGVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tbW9uQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLl9jb21tb25BdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21tb25BdHRyaWJ1dGVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1vbkF0dHJpYnV0ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhY2Nlc3NLZXk/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1ZmZlcmluZ0ludGVydmFsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVmZmVyaW5nU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmV0cnlEdXJhdGlvbj86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0JhY2t1cE1vZGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHVybDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVlc3RDb25maWd1cmF0aW9uPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY2Nlc3Nfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFjY2Vzc0tleSksXG4gICAgYnVmZmVyaW5nX2ludGVydmFsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZmZlcmluZ0ludGVydmFsKSxcbiAgICBidWZmZXJpbmdfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJpbmdTaXplKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHJldHJ5X2R1cmF0aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnJldHJ5RHVyYXRpb24pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHMzX2JhY2t1cF9tb2RlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzQmFja3VwTW9kZSksXG4gICAgdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVybCksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgICBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9jZXNzaW5nQ29uZmlndXJhdGlvbiksXG4gICAgcmVxdWVzdF9jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25SZXF1ZXN0Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucmVxdWVzdENvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hY2Nlc3NLZXkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFjY2Vzc0tleSA9IHRoaXMuX2FjY2Vzc0tleTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1ZmZlcmluZ0ludGVydmFsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWZmZXJpbmdJbnRlcnZhbCA9IHRoaXMuX2J1ZmZlcmluZ0ludGVydmFsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYnVmZmVyaW5nU2l6ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVmZmVyaW5nU2l6ZSA9IHRoaXMuX2J1ZmZlcmluZ1NpemU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JldHJ5RHVyYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJldHJ5RHVyYXRpb24gPSB0aGlzLl9yZXRyeUR1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9sZUFybiA9IHRoaXMuX3JvbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0JhY2t1cE1vZGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzQmFja3VwTW9kZSA9IHRoaXMuX3MzQmFja3VwTW9kZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VybCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXJsID0gdGhpcy5fdXJsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcXVlc3RDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXF1ZXN0Q29uZmlndXJhdGlvbiA9IHRoaXMuX3JlcXVlc3RDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYWNjZXNzS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYnVmZmVyaW5nSW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWZmZXJpbmdTaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JldHJ5RHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdXJsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVxdWVzdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWNjZXNzS2V5ID0gdmFsdWUuYWNjZXNzS2V5O1xuICAgICAgdGhpcy5fYnVmZmVyaW5nSW50ZXJ2YWwgPSB2YWx1ZS5idWZmZXJpbmdJbnRlcnZhbDtcbiAgICAgIHRoaXMuX2J1ZmZlcmluZ1NpemUgPSB2YWx1ZS5idWZmZXJpbmdTaXplO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdmFsdWUucmV0cnlEdXJhdGlvbjtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdmFsdWUuczNCYWNrdXBNb2RlO1xuICAgICAgdGhpcy5fdXJsID0gdmFsdWUudXJsO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9yZXF1ZXN0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVxdWVzdENvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYWNjZXNzX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hY2Nlc3NLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGFjY2Vzc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2Vzc19rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFjY2Vzc0tleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYWNjZXNzS2V5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWNjZXNzS2V5KCkge1xuICAgIHRoaXMuX2FjY2Vzc0tleSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWNjZXNzS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0tleTtcbiAgfVxuXG4gIC8vIGJ1ZmZlcmluZ19pbnRlcnZhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWZmZXJpbmdJbnRlcnZhbD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYnVmZmVyaW5nSW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdidWZmZXJpbmdfaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1ZmZlcmluZ0ludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9idWZmZXJpbmdJbnRlcnZhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1ZmZlcmluZ0ludGVydmFsKCkge1xuICAgIHRoaXMuX2J1ZmZlcmluZ0ludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWZmZXJpbmdJbnRlcnZhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWZmZXJpbmdJbnRlcnZhbDtcbiAgfVxuXG4gIC8vIGJ1ZmZlcmluZ19zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1ZmZlcmluZ1NpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ1NpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdidWZmZXJpbmdfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVmZmVyaW5nU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYnVmZmVyaW5nU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1ZmZlcmluZ1NpemUoKSB7XG4gICAgdGhpcy5fYnVmZmVyaW5nU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVmZmVyaW5nU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWZmZXJpbmdTaXplO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcmV0cnlfZHVyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0cnlEdXJhdGlvbj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcmV0cnlEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JldHJ5X2R1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXRyeUR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV0cnlEdXJhdGlvbigpIHtcbiAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXRyeUR1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5RHVyYXRpb247XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSb2xlQXJuKCkge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxuXG4gIC8vIHMzX2JhY2t1cF9tb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQmFja3VwTW9kZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfYmFja3VwX21vZGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHMzQmFja3VwTW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNCYWNrdXBNb2RlKCkge1xuICAgIHRoaXMuX3MzQmFja3VwTW9kZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBNb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQmFja3VwTW9kZTtcbiAgfVxuXG4gIC8vIHVybCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91cmw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXJsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cmwgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdXJsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlcXVlc3RfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1ZXN0Q29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25SZXF1ZXN0Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyZXF1ZXN0X2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVxdWVzdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRSZXF1ZXN0Q29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnRDb25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9yZXF1ZXN0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWVzdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fcmVxdWVzdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVxdWVzdENvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUtpbmVzaXNTb3VyY2VDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc1N0cmVhbUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1LaW5lc2lzU291cmNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtS2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUtpbmVzaXNTb3VyY2VDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAga2luZXNpc19zdHJlYW1fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNTdHJlYW1Bcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUtpbmVzaXNTb3VyY2VDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtS2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2tpbmVzaXNTdHJlYW1Bcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtpbmVzaXNTdHJlYW1Bcm4gPSB0aGlzLl9raW5lc2lzU3RyZWFtQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9sZUFybiA9IHRoaXMuX3JvbGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUtpbmVzaXNTb3VyY2VDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fa2luZXNpc1N0cmVhbUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2tpbmVzaXNTdHJlYW1Bcm4gPSB2YWx1ZS5raW5lc2lzU3RyZWFtQXJuO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlLnJvbGVBcm47XG4gICAgfVxuICB9XG5cbiAgLy8ga2luZXNpc19zdHJlYW1fYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2tpbmVzaXNTdHJlYW1Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtpbmVzaXNTdHJlYW1Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdraW5lc2lzX3N0cmVhbV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtpbmVzaXNTdHJlYW1Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2tpbmVzaXNTdHJlYW1Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2luZXNpc1N0cmVhbUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzU3RyZWFtQXJuO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0dyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nU3RyZWFtTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dHcm91cE5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ0dyb3VwTmFtZSA9IHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ1N0cmVhbU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ1N0cmVhbU5hbWUgPSB0aGlzLl9sb2dTdHJlYW1OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZS5sb2dHcm91cE5hbWU7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWUubG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGxvZ19zdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dTdHJlYW1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3N0cmVhbV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdHJlYW1OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nU3RyZWFtTmFtZSgpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlck5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVyVmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtZXRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFtZXRlck5hbWUpLFxuICAgIHBhcmFtZXRlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29ycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVycz86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVyc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gICAgcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5wYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9jZXNzb3JzPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIHByb2Nlc3NvcnM6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9jZXNzb3JzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NvcnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2Nlc3NvcnMgPSB0aGlzLl9wcm9jZXNzb3JzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzb3JzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvcnMgPSB2YWx1ZS5wcm9jZXNzb3JzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29ycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9jZXNzb3JzPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNbXTsgXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc29ycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc29ycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2Nlc3NvcnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzW10pIHtcbiAgICB0aGlzLl9wcm9jZXNzb3JzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJvY2Vzc29ycygpIHtcbiAgICB0aGlzLl9wcm9jZXNzb3JzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9jZXNzb3JzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NvcnM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dHcm91cE5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ1N0cmVhbU5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19zdHJlYW1fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dTdHJlYW1OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmVuYWJsZWQgPSB0aGlzLl9lbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nR3JvdXBOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dHcm91cE5hbWUgPSB0aGlzLl9sb2dHcm91cE5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dTdHJlYW1OYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5sb2dTdHJlYW1OYW1lID0gdGhpcy5fbG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2xvZ1N0cmVhbU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdmFsdWUubG9nR3JvdXBOYW1lO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHZhbHVlLmxvZ1N0cmVhbU5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBsb2dfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dHcm91cE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ0dyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19ncm91cF9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dHcm91cE5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ0dyb3VwTmFtZSgpIHtcbiAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ0dyb3VwTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dHcm91cE5hbWU7XG4gIH1cblxuICAvLyBsb2dfc3RyZWFtX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nU3RyZWFtTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nU3RyZWFtTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldExvZ1N0cmVhbU5hbWUoKSB7XG4gICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9sb2dTdHJlYW1OYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXRBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVmZmVySW50ZXJ2YWw/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWZmZXJTaXplPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wcmVzc2lvbkZvcm1hdD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGttc0tleUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJlZml4Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyX2ludGVydmFsOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZmZlckludGVydmFsKSxcbiAgICBidWZmZXJfc2l6ZTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJTaXplKSxcbiAgICBjb21wcmVzc2lvbl9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3Npb25Gb3JtYXQpLFxuICAgIGttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0tleUFybiksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0QXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRBcm4gPSB0aGlzLl9idWNrZXRBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWZmZXJJbnRlcnZhbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVmZmVySW50ZXJ2YWwgPSB0aGlzLl9idWZmZXJJbnRlcnZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2J1ZmZlclNpemUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1ZmZlclNpemUgPSB0aGlzLl9idWZmZXJTaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHJlc3Npb25Gb3JtYXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXByZXNzaW9uRm9ybWF0ID0gdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rbXNLZXlBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmttc0tleUFybiA9IHRoaXMuX2ttc0tleUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZWZpeCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJlZml4ID0gdGhpcy5fcHJlZml4O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9sZUFybiA9IHRoaXMuX3JvbGVBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnVja2V0QXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYnVmZmVySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9idWZmZXJTaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rbXNLZXlBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlLmJ1Y2tldEFybjtcbiAgICAgIHRoaXMuX2J1ZmZlckludGVydmFsID0gdmFsdWUuYnVmZmVySW50ZXJ2YWw7XG4gICAgICB0aGlzLl9idWZmZXJTaXplID0gdmFsdWUuYnVmZmVyU2l6ZTtcbiAgICAgIHRoaXMuX2NvbXByZXNzaW9uRm9ybWF0ID0gdmFsdWUuY29tcHJlc3Npb25Gb3JtYXQ7XG4gICAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZS5rbXNLZXlBcm47XG4gICAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZS5wcmVmaXg7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWUucm9sZUFybjtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0QXJuO1xuICB9XG5cbiAgLy8gYnVmZmVyX2ludGVydmFsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1ZmZlckludGVydmFsPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBidWZmZXJJbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2J1ZmZlcl9pbnRlcnZhbCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVmZmVySW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2J1ZmZlckludGVydmFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVmZmVySW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5fYnVmZmVySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1ZmZlckludGVydmFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlckludGVydmFsO1xuICB9XG5cbiAgLy8gYnVmZmVyX3NpemUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYnVmZmVyU2l6ZT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYnVmZmVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2J1ZmZlcl9zaXplJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWZmZXJTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9idWZmZXJTaXplID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVmZmVyU2l6ZSgpIHtcbiAgICB0aGlzLl9idWZmZXJTaXplID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWZmZXJTaXplSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlclNpemU7XG4gIH1cblxuICAvLyBjb21wcmVzc2lvbl9mb3JtYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcHJlc3Npb25Gb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHJlc3Npb25fZm9ybWF0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wcmVzc2lvbkZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wcmVzc2lvbkZvcm1hdCgpIHtcbiAgICB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25Gb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQ7XG4gIH1cblxuICAvLyBrbXNfa2V5X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rbXNLZXlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBrbXNLZXlBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ttc0tleUFybiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEttc0tleUFybigpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGttc0tleUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rbXNLZXlBcm47XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJlZml4Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UHJlZml4KCkge1xuICAgIHRoaXMuX3ByZWZpeCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZpeDtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2x1c3RlckpkYmN1cmw6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29weU9wdGlvbnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGFUYWJsZUNvbHVtbnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRhdGFUYWJsZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRyeUR1cmF0aW9uPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNCYWNrdXBNb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdXNlcm5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNCYWNrdXBDb25maWd1cmF0aW9uPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjbHVzdGVyX2pkYmN1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2x1c3RlckpkYmN1cmwpLFxuICAgIGNvcHlfb3B0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb3B5T3B0aW9ucyksXG4gICAgZGF0YV90YWJsZV9jb2x1bW5zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFUYWJsZUNvbHVtbnMpLFxuICAgIGRhdGFfdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhVGFibGVOYW1lKSxcbiAgICBwYXNzd29yZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXNzd29yZCksXG4gICAgcmV0cnlfZHVyYXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlEdXJhdGlvbiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgczNfYmFja3VwX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNCYWNrdXBNb2RlKSxcbiAgICB1c2VybmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS51c2VybmFtZSksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICAgIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pLFxuICAgIHMzX2JhY2t1cF9jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuczNCYWNrdXBDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NsdXN0ZXJKZGJjdXJsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbHVzdGVySmRiY3VybCA9IHRoaXMuX2NsdXN0ZXJKZGJjdXJsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29weU9wdGlvbnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvcHlPcHRpb25zID0gdGhpcy5fY29weU9wdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kYXRhVGFibGVDb2x1bW5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhVGFibGVDb2x1bW5zID0gdGhpcy5fZGF0YVRhYmxlQ29sdW1ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RhdGFUYWJsZU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmRhdGFUYWJsZU5hbWUgPSB0aGlzLl9kYXRhVGFibGVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFzc3dvcmQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhc3N3b3JkID0gdGhpcy5fcGFzc3dvcmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXRyeUR1cmF0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXRyeUR1cmF0aW9uID0gdGhpcy5fcmV0cnlEdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNCYWNrdXBNb2RlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zM0JhY2t1cE1vZGUgPSB0aGlzLl9zM0JhY2t1cE1vZGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl91c2VybmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudXNlcm5hbWUgPSB0aGlzLl91c2VybmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zID0gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByb2Nlc3NpbmdDb25maWd1cmF0aW9uID0gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM0JhY2t1cENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzQmFja3VwQ29uZmlndXJhdGlvbiA9IHRoaXMuX3MzQmFja3VwQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2x1c3RlckpkYmN1cmwgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb3B5T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RhdGFUYWJsZUNvbHVtbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kYXRhVGFibGVOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3MzQmFja3VwTW9kZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3VzZXJuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNCYWNrdXBDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NsdXN0ZXJKZGJjdXJsID0gdmFsdWUuY2x1c3RlckpkYmN1cmw7XG4gICAgICB0aGlzLl9jb3B5T3B0aW9ucyA9IHZhbHVlLmNvcHlPcHRpb25zO1xuICAgICAgdGhpcy5fZGF0YVRhYmxlQ29sdW1ucyA9IHZhbHVlLmRhdGFUYWJsZUNvbHVtbnM7XG4gICAgICB0aGlzLl9kYXRhVGFibGVOYW1lID0gdmFsdWUuZGF0YVRhYmxlTmFtZTtcbiAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdmFsdWUucGFzc3dvcmQ7XG4gICAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdmFsdWUucmV0cnlEdXJhdGlvbjtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdmFsdWUuczNCYWNrdXBNb2RlO1xuICAgICAgdGhpcy5fdXNlcm5hbWUgPSB2YWx1ZS51c2VybmFtZTtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnByb2Nlc3NpbmdDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fczNCYWNrdXBDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zM0JhY2t1cENvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gY2x1c3Rlcl9qZGJjdXJsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NsdXN0ZXJKZGJjdXJsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbHVzdGVySmRiY3VybCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfamRiY3VybCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY2x1c3RlckpkYmN1cmwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NsdXN0ZXJKZGJjdXJsID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJKZGJjdXJsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsdXN0ZXJKZGJjdXJsO1xuICB9XG5cbiAgLy8gY29weV9vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvcHlPcHRpb25zPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb3B5T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvcHlfb3B0aW9ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29weU9wdGlvbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvcHlPcHRpb25zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29weU9wdGlvbnMoKSB7XG4gICAgdGhpcy5fY29weU9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvcHlPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcHlPcHRpb25zO1xuICB9XG5cbiAgLy8gZGF0YV90YWJsZV9jb2x1bW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RhdGFUYWJsZUNvbHVtbnM/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFUYWJsZUNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3RhYmxlX2NvbHVtbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFUYWJsZUNvbHVtbnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RhdGFUYWJsZUNvbHVtbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREYXRhVGFibGVDb2x1bW5zKCkge1xuICAgIHRoaXMuX2RhdGFUYWJsZUNvbHVtbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFUYWJsZUNvbHVtbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVRhYmxlQ29sdW1ucztcbiAgfVxuXG4gIC8vIGRhdGFfdGFibGVfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhVGFibGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkYXRhVGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YV90YWJsZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBkYXRhVGFibGVOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhVGFibGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFUYWJsZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVRhYmxlTmFtZTtcbiAgfVxuXG4gIC8vIHBhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Bhc3N3b3JkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFzc3dvcmQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cblxuICAvLyByZXRyeV9kdXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXRyeUR1cmF0aW9uPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCByZXRyeUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncmV0cnlfZHVyYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJldHJ5RHVyYXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JldHJ5RHVyYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZXRyeUR1cmF0aW9uKCkge1xuICAgIHRoaXMuX3JldHJ5RHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldHJ5RHVyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0cnlEdXJhdGlvbjtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cblxuICAvLyBzM19iYWNrdXBfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0JhY2t1cE1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHMzQmFja3VwTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2JhY2t1cF9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM0JhY2t1cE1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzQmFja3VwTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzQmFja3VwTW9kZSgpIHtcbiAgICB0aGlzLl9zM0JhY2t1cE1vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQmFja3VwTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0JhY2t1cE1vZGU7XG4gIH1cblxuICAvLyB1c2VybmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF91c2VybmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJuYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHVzZXJuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInByb2Nlc3NpbmdfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBwcm9jZXNzaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0Q29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzM19iYWNrdXBfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0JhY2t1cENvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiczNfYmFja3VwX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgczNCYWNrdXBDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zM0JhY2t1cENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFMzQmFja3VwQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zM0JhY2t1cENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzQmFja3VwQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9zM0JhY2t1cENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQmFja3VwQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nR3JvdXBOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dTdHJlYW1OYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ0dyb3VwTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nR3JvdXBOYW1lID0gdGhpcy5fbG9nR3JvdXBOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nU3RyZWFtTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nU3RyZWFtTmFtZSA9IHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHZhbHVlLmxvZ0dyb3VwTmFtZTtcbiAgICAgIHRoaXMuX2xvZ1N0cmVhbU5hbWUgPSB2YWx1ZS5sb2dTdHJlYW1OYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nR3JvdXBOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nR3JvdXBOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dHcm91cE5hbWUoKSB7XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nR3JvdXBOYW1lO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ1N0cmVhbU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ1N0cmVhbU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfc3RyZWFtX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ1N0cmVhbU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ1N0cmVhbU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dTdHJlYW1OYW1lKCkge1xuICAgIHRoaXMuX2xvZ1N0cmVhbU5hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvZ1N0cmVhbU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nU3RyZWFtTmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0QXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1ZmZlckludGVydmFsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVmZmVyU2l6ZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29tcHJlc3Npb25Gb3JtYXQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrbXNLZXlBcm4/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByZWZpeD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRBcm4pLFxuICAgIGJ1ZmZlcl9pbnRlcnZhbDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJJbnRlcnZhbCksXG4gICAgYnVmZmVyX3NpemU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYnVmZmVyU2l6ZSksXG4gICAgY29tcHJlc3Npb25fZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uRm9ybWF0KSxcbiAgICBrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNLZXlBcm4pLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2J1Y2tldEFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0QXJuID0gdGhpcy5fYnVja2V0QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fYnVmZmVySW50ZXJ2YWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1ZmZlckludGVydmFsID0gdGhpcy5fYnVmZmVySW50ZXJ2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9idWZmZXJTaXplKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWZmZXJTaXplID0gdGhpcy5fYnVmZmVyU2l6ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXByZXNzaW9uRm9ybWF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb21wcmVzc2lvbkZvcm1hdCA9IHRoaXMuX2NvbXByZXNzaW9uRm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fa21zS2V5QXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5rbXNLZXlBcm4gPSB0aGlzLl9rbXNLZXlBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnByZWZpeCA9IHRoaXMuX3ByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2J1ZmZlckludGVydmFsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYnVmZmVyU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbXByZXNzaW9uRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXRBcm4gPSB2YWx1ZS5idWNrZXRBcm47XG4gICAgICB0aGlzLl9idWZmZXJJbnRlcnZhbCA9IHZhbHVlLmJ1ZmZlckludGVydmFsO1xuICAgICAgdGhpcy5fYnVmZmVyU2l6ZSA9IHZhbHVlLmJ1ZmZlclNpemU7XG4gICAgICB0aGlzLl9jb21wcmVzc2lvbkZvcm1hdCA9IHZhbHVlLmNvbXByZXNzaW9uRm9ybWF0O1xuICAgICAgdGhpcy5fa21zS2V5QXJuID0gdmFsdWUua21zS2V5QXJuO1xuICAgICAgdGhpcy5fcHJlZml4ID0gdmFsdWUucHJlZml4O1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlLnJvbGVBcm47XG4gICAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucztcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXRfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2J1Y2tldEFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVja2V0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXRBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldEFybjtcbiAgfVxuXG4gIC8vIGJ1ZmZlcl9pbnRlcnZhbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWZmZXJJbnRlcnZhbD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgYnVmZmVySW50ZXJ2YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdidWZmZXJfaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1ZmZlckludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9idWZmZXJJbnRlcnZhbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1ZmZlckludGVydmFsKCkge1xuICAgIHRoaXMuX2J1ZmZlckludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWZmZXJJbnRlcnZhbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWZmZXJJbnRlcnZhbDtcbiAgfVxuXG4gIC8vIGJ1ZmZlcl9zaXplIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1ZmZlclNpemU/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGJ1ZmZlclNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdidWZmZXJfc2l6ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVmZmVyU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYnVmZmVyU2l6ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1ZmZlclNpemUoKSB7XG4gICAgdGhpcy5fYnVmZmVyU2l6ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVmZmVyU2l6ZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWZmZXJTaXplO1xuICB9XG5cbiAgLy8gY29tcHJlc3Npb25fZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXByZXNzaW9uRm9ybWF0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wcmVzc2lvbkZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXByZXNzaW9uX2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcHJlc3Npb25Gb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbXByZXNzaW9uRm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcHJlc3Npb25Gb3JtYXQoKSB7XG4gICAgdGhpcy5fY29tcHJlc3Npb25Gb3JtYXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uRm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXByZXNzaW9uRm9ybWF0O1xuICB9XG5cbiAgLy8ga21zX2tleV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa21zS2V5QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrbXNfa2V5X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQga21zS2V5QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rbXNLZXlBcm4gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLbXNLZXlBcm4oKSB7XG4gICAgdGhpcy5fa21zS2V5QXJuID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBrbXNLZXlBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa21zS2V5QXJuO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByZWZpeCgpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByZWZpeElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXg7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlQXJuO1xuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNlcnZlclNpZGVFbmNyeXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBlbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtleVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNlcnZlclNpZGVFbmNyeXB0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TZXJ2ZXJTaWRlRW5jcnlwdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU2VydmVyU2lkZUVuY3J5cHRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBrZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleUFybiksXG4gICAga2V5X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5VHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU2VydmVyU2lkZUVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TZXJ2ZXJTaWRlRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9rZXlBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleUFybiA9IHRoaXMuX2tleUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tleVR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtleVR5cGUgPSB0aGlzLl9rZXlUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TZXJ2ZXJTaWRlRW5jcnlwdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXlBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9rZXlUeXBlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUuZW5hYmxlZDtcbiAgICAgIHRoaXMuX2tleUFybiA9IHZhbHVlLmtleUFybjtcbiAgICAgIHRoaXMuX2tleVR5cGUgPSB2YWx1ZS5rZXlUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVuYWJsZWQoKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG5cbiAgLy8ga2V5X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9rZXlBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGtleUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5QXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2V5QXJuKCkge1xuICAgIHRoaXMuX2tleUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleUFybjtcbiAgfVxuXG4gIC8vIGtleV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tleVR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGtleVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQga2V5VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5VHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtleVR5cGUoKSB7XG4gICAgdGhpcy5fa2V5VHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2V5VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlUeXBlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ0dyb3VwTmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9nU3RyZWFtTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbmFibGVkID0gdGhpcy5fZW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xvZ0dyb3VwTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nR3JvdXBOYW1lID0gdGhpcy5fbG9nR3JvdXBOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9nU3RyZWFtTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nU3RyZWFtTmFtZSA9IHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlLmVuYWJsZWQ7XG4gICAgICB0aGlzLl9sb2dHcm91cE5hbWUgPSB2YWx1ZS5sb2dHcm91cE5hbWU7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWUubG9nU3RyZWFtTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGVuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRFbmFibGVkKCkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvZ0dyb3VwTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGxvZ0dyb3VwTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nR3JvdXBOYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nR3JvdXBOYW1lKCkge1xuICAgIHRoaXMuX2xvZ0dyb3VwTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ0dyb3VwTmFtZTtcbiAgfVxuXG4gIC8vIGxvZ19zdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2dTdHJlYW1OYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3N0cmVhbV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdHJlYW1OYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9nU3RyZWFtTmFtZSgpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1OYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1N0cmVhbU5hbWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlclZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtZXRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFtZXRlck5hbWUpLFxuICAgIHBhcmFtZXRlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICAgIHBhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVyc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9jZXNzb3JzPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBwcm9jZXNzb3JzOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2Nlc3NvcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZW5hYmxlZCA9IHRoaXMuX2VuYWJsZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9jZXNzb3JzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9jZXNzb3JzID0gdGhpcy5fcHJvY2Vzc29ycztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fZW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvcnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZS5lbmFibGVkO1xuICAgICAgdGhpcy5fcHJvY2Vzc29ycyA9IHZhbHVlLnByb2Nlc3NvcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW5hYmxlZCgpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbmFibGVkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICAvLyBwcm9jZXNzb3JzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Byb2Nlc3NvcnM/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNbXTsgXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc29ycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc29ycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb2Nlc3NvcnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1tdKSB7XG4gICAgdGhpcy5fcHJvY2Vzc29ycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NvcnMoKSB7XG4gICAgdGhpcy5fcHJvY2Vzc29ycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc29yc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzb3JzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWNBY2tub3dsZWRnbWVudFRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlY0VuZHBvaW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBoZWNFbmRwb2ludFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGhlY1Rva2VuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRyeUR1cmF0aW9uPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgczNCYWNrdXBNb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPzogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlY19hY2tub3dsZWRnbWVudF90aW1lb3V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlY0Fja25vd2xlZGdtZW50VGltZW91dCksXG4gICAgaGVjX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlY0VuZHBvaW50KSxcbiAgICBoZWNfZW5kcG9pbnRfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oZWNFbmRwb2ludFR5cGUpLFxuICAgIGhlY190b2tlbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5oZWNUb2tlbiksXG4gICAgcmV0cnlfZHVyYXRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlEdXJhdGlvbiksXG4gICAgczNfYmFja3VwX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNCYWNrdXBNb2RlKSxcbiAgICBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9uczoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICAgIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5faGVjQWNrbm93bGVkZ21lbnRUaW1lb3V0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5oZWNBY2tub3dsZWRnbWVudFRpbWVvdXQgPSB0aGlzLl9oZWNBY2tub3dsZWRnbWVudFRpbWVvdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9oZWNFbmRwb2ludCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVjRW5kcG9pbnQgPSB0aGlzLl9oZWNFbmRwb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlY0VuZHBvaW50VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVjRW5kcG9pbnRUeXBlID0gdGhpcy5faGVjRW5kcG9pbnRUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGVjVG9rZW4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmhlY1Rva2VuID0gdGhpcy5faGVjVG9rZW47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXRyeUR1cmF0aW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXRyeUR1cmF0aW9uID0gdGhpcy5fcmV0cnlEdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3MzQmFja3VwTW9kZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczNCYWNrdXBNb2RlID0gdGhpcy5fczNCYWNrdXBNb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hlY0Fja25vd2xlZGdtZW50VGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2hlY0VuZHBvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVjRW5kcG9pbnRUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faGVjVG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9oZWNBY2tub3dsZWRnbWVudFRpbWVvdXQgPSB2YWx1ZS5oZWNBY2tub3dsZWRnbWVudFRpbWVvdXQ7XG4gICAgICB0aGlzLl9oZWNFbmRwb2ludCA9IHZhbHVlLmhlY0VuZHBvaW50O1xuICAgICAgdGhpcy5faGVjRW5kcG9pbnRUeXBlID0gdmFsdWUuaGVjRW5kcG9pbnRUeXBlO1xuICAgICAgdGhpcy5faGVjVG9rZW4gPSB2YWx1ZS5oZWNUb2tlbjtcbiAgICAgIHRoaXMuX3JldHJ5RHVyYXRpb24gPSB2YWx1ZS5yZXRyeUR1cmF0aW9uO1xuICAgICAgdGhpcy5fczNCYWNrdXBNb2RlID0gdmFsdWUuczNCYWNrdXBNb2RlO1xuICAgICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gaGVjX2Fja25vd2xlZGdtZW50X3RpbWVvdXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVjQWNrbm93bGVkZ21lbnRUaW1lb3V0PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBoZWNBY2tub3dsZWRnbWVudFRpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdoZWNfYWNrbm93bGVkZ21lbnRfdGltZW91dCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVjQWNrbm93bGVkZ21lbnRUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9oZWNBY2tub3dsZWRnbWVudFRpbWVvdXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWNBY2tub3dsZWRnbWVudFRpbWVvdXQoKSB7XG4gICAgdGhpcy5faGVjQWNrbm93bGVkZ21lbnRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWNBY2tub3dsZWRnbWVudFRpbWVvdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVjQWNrbm93bGVkZ21lbnRUaW1lb3V0O1xuICB9XG5cbiAgLy8gaGVjX2VuZHBvaW50IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hlY0VuZHBvaW50Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBoZWNFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hlY19lbmRwb2ludCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVjRW5kcG9pbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hlY0VuZHBvaW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlY0VuZHBvaW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlY0VuZHBvaW50O1xuICB9XG5cbiAgLy8gaGVjX2VuZHBvaW50X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGVjRW5kcG9pbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBoZWNFbmRwb2ludFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWNfZW5kcG9pbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVjRW5kcG9pbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oZWNFbmRwb2ludFR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIZWNFbmRwb2ludFR5cGUoKSB7XG4gICAgdGhpcy5faGVjRW5kcG9pbnRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBoZWNFbmRwb2ludFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVjRW5kcG9pbnRUeXBlO1xuICB9XG5cbiAgLy8gaGVjX3Rva2VuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2hlY1Rva2VuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBoZWNUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2hlY190b2tlbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGVjVG9rZW4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2hlY1Rva2VuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhlY1Rva2VuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlY1Rva2VuO1xuICB9XG5cbiAgLy8gcmV0cnlfZHVyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmV0cnlEdXJhdGlvbj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcmV0cnlEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3JldHJ5X2R1cmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXRyeUR1cmF0aW9uKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmV0cnlEdXJhdGlvbigpIHtcbiAgICB0aGlzLl9yZXRyeUR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXRyeUR1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5RHVyYXRpb247XG4gIH1cblxuICAvLyBzM19iYWNrdXBfbW9kZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0JhY2t1cE1vZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHMzQmFja3VwTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2JhY2t1cF9tb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBzM0JhY2t1cE1vZGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3MzQmFja3VwTW9kZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzQmFja3VwTW9kZSgpIHtcbiAgICB0aGlzLl9zM0JhY2t1cE1vZGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQmFja3VwTW9kZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zM0JhY2t1cE1vZGU7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICB9XG4gIHB1YmxpYyBwdXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnModmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucykge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtDb25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicHJvY2Vzc2luZ19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHByb2Nlc3NpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW0gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3Nfa2luZXNpc19maXJlaG9zZV9kZWxpdmVyeV9zdHJlYW1cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2tpbmVzaXNfZmlyZWhvc2VfZGVsaXZlcnlfc3RyZWFtJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uID0gY29uZmlnLmRlc3RpbmF0aW9uO1xuICAgIHRoaXMuX2Rlc3RpbmF0aW9uSWQgPSBjb25maWcuZGVzdGluYXRpb25JZDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl92ZXJzaW9uSWQgPSBjb25maWcudmVyc2lvbklkO1xuICAgIHRoaXMuX2VsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuZWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fZXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5leHRlbmRlZFMzQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9odHRwRW5kcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuaHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9raW5lc2lzU291cmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmtpbmVzaXNTb3VyY2VDb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX3JlZHNoaWZ0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnJlZHNoaWZ0Q29uZmlndXJhdGlvbjtcbiAgICB0aGlzLl9zM0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zM0NvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5zZXJ2ZXJTaWRlRW5jcnlwdGlvbjtcbiAgICB0aGlzLl9zcGx1bmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSBjb25maWcuc3BsdW5rQ29uZmlndXJhdGlvbjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXN0aW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXN0aW5hdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdGluYXRpb247XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc3RpbmF0aW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9pZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzdGluYXRpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc3RpbmF0aW9uSWQoKSB7XG4gICAgdGhpcy5fZGVzdGluYXRpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0aW5hdGlvbklkO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHZlcnNpb25faWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92ZXJzaW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZlcnNpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb25faWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZlcnNpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmVyc2lvbklkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VmVyc2lvbklkKCkge1xuICAgIHRoaXMuX3ZlcnNpb25JZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb25JZDtcbiAgfVxuXG4gIC8vIGVsYXN0aWNzZWFyY2hfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImVsYXN0aWNzZWFyY2hfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZWxhc3RpY3NlYXJjaENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2VsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBleHRlbmRlZF9zM19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2V4dGVuZGVkUzNDb25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZXh0ZW5kZWRfczNfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBleHRlbmRlZFMzQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEV4dGVuZGVkUzNDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZXh0ZW5kZWRTM0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEV4dGVuZGVkUzNDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2V4dGVuZGVkUzNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGV4dGVuZGVkUzNDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVuZGVkUzNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBodHRwX2VuZHBvaW50X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaHR0cF9lbmRwb2ludF9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBFbmRwb2ludENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2h0dHBFbmRwb2ludENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5faHR0cEVuZHBvaW50Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBodHRwRW5kcG9pbnRDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHBFbmRwb2ludENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGtpbmVzaXNfc291cmNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1LaW5lc2lzU291cmNlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJraW5lc2lzX3NvdXJjZV9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNTb3VyY2VDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzU291cmNlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0S2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtS2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9raW5lc2lzU291cmNlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fa2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQga2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc1NvdXJjZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHJlZHNoaWZ0X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVkc2hpZnRDb25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlZHNoaWZ0X2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVkc2hpZnRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWRzaGlmdENvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFJlZHNoaWZ0Q29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9yZWRzaGlmdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZHNoaWZ0Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9yZWRzaGlmdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVkc2hpZnRDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZHNoaWZ0Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gczNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zM0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiczNfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzM0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UzNDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3MzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UzNDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3MzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fczNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzZXJ2ZXJfc2lkZV9lbmNyeXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcnZlclNpZGVFbmNyeXB0aW9uID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU2VydmVyU2lkZUVuY3J5cHRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2VydmVyX3NpZGVfZW5jcnlwdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzZXJ2ZXJTaWRlRW5jcnlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb247XG4gIH1cbiAgcHVibGljIHB1dFNlcnZlclNpZGVFbmNyeXB0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNlcnZlclNpZGVFbmNyeXB0aW9uKSB7XG4gICAgdGhpcy5fc2VydmVyU2lkZUVuY3J5cHRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcnZlclNpZGVFbmNyeXB0aW9uKCkge1xuICAgIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcnZlclNpZGVFbmNyeXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlclNpZGVFbmNyeXB0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzcGx1bmtfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcGx1bmtDb25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzcGx1bmtfY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzcGx1bmtDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGx1bmtDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRTcGx1bmtDb25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zcGx1bmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTcGx1bmtDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3NwbHVua0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3BsdW5rQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zcGx1bmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3RpbmF0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kZXN0aW5hdGlvbiksXG4gICAgICBkZXN0aW5hdGlvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzdGluYXRpb25JZCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgdmVyc2lvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmVyc2lvbklkKSxcbiAgICAgIGVsYXN0aWNzZWFyY2hfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2VsYXN0aWNzZWFyY2hDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgZXh0ZW5kZWRfczNfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2V4dGVuZGVkUzNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgaHR0cF9lbmRwb2ludF9jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9odHRwRW5kcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAga2luZXNpc19zb3VyY2VfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1LaW5lc2lzU291cmNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2tpbmVzaXNTb3VyY2VDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgICAgcmVkc2hpZnRfY29uZmlndXJhdGlvbjoga2luZXNpc0ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9yZWRzaGlmdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSksXG4gICAgICBzM19jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX3MzQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNlcnZlcl9zaWRlX2VuY3J5cHRpb246IGtpbmVzaXNGaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU2VydmVyU2lkZUVuY3J5cHRpb25Ub1RlcnJhZm9ybSh0aGlzLl9zZXJ2ZXJTaWRlRW5jcnlwdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNwbHVua19jb25maWd1cmF0aW9uOiBraW5lc2lzRmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSh0aGlzLl9zcGx1bmtDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==