"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KinesisAnalyticsApplication = exports.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference = exports.kinesisAnalyticsApplicationReferenceDataSourcesToTerraform = exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference = exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform = exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference = exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform = exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference = exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform = exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference = exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform = exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference = exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform = exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform = exports.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference = exports.kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform = exports.kinesisAnalyticsApplicationOutputsToTerraform = exports.KinesisAnalyticsApplicationOutputsSchemaOutputReference = exports.kinesisAnalyticsApplicationOutputsSchemaToTerraform = exports.KinesisAnalyticsApplicationOutputsLambdaOutputReference = exports.kinesisAnalyticsApplicationOutputsLambdaToTerraform = exports.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference = exports.kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform = exports.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference = exports.kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform = exports.KinesisAnalyticsApplicationInputsOutputReference = exports.kinesisAnalyticsApplicationInputsToTerraform = exports.kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform = exports.KinesisAnalyticsApplicationInputsSchemaOutputReference = exports.kinesisAnalyticsApplicationInputsSchemaToTerraform = exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference = exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform = exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference = exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform = exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference = exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform = exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference = exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform = exports.kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform = exports.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference = exports.kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform = exports.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference = exports.kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform = exports.KinesisAnalyticsApplicationInputsParallelismOutputReference = exports.kinesisAnalyticsApplicationInputsParallelismToTerraform = exports.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference = exports.kinesisAnalyticsApplicationInputsKinesisStreamToTerraform = exports.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference = exports.kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform = exports.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference = exports.kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_stream_arn: cdktf.stringToTerraform(struct.logStreamArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform = kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logStreamArn) {
            hasAnyValues = true;
            internalValueResult.logStreamArn = this._logStreamArn;
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
            this._logStreamArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._logStreamArn = value.logStreamArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get logStreamArn() {
        return this.getStringAttribute('log_stream_arn');
    }
    /**
     * @stability stable
     */
    set logStreamArn(value) {
        this._logStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logStreamArnInput() {
        return this._logStreamArn;
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
exports.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference = KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference;
_a = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference[_a] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform = kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
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
            this._resourceArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    /**
     * @stability stable
     */
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceArnInput() {
        return this._resourceArn;
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
exports.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference = KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference;
_b = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference[_b] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationInputsKinesisStreamToTerraform = kinesisAnalyticsApplicationInputsKinesisStreamToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsKinesisStreamOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
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
            this._resourceArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    /**
     * @stability stable
     */
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceArnInput() {
        return this._resourceArn;
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
exports.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference = KinesisAnalyticsApplicationInputsKinesisStreamOutputReference;
_c = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsKinesisStreamOutputReference[_c] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        count: cdktf.numberToTerraform(struct.count),
    };
}
exports.kinesisAnalyticsApplicationInputsParallelismToTerraform = kinesisAnalyticsApplicationInputsParallelismToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsParallelismOutputReference extends cdktf.ComplexObject {
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
        if (this._count) {
            hasAnyValues = true;
            internalValueResult.count = this._count;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._count = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._count = value.count;
        }
    }
    /**
     * @stability stable
     */
    get count() {
        return this.getNumberAttribute('count');
    }
    /**
     * @stability stable
     */
    set count(value) {
        this._count = value;
    }
    /**
     * @stability stable
     */
    resetCount() {
        this._count = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get countInput() {
        return this._count;
    }
}
exports.KinesisAnalyticsApplicationInputsParallelismOutputReference = KinesisAnalyticsApplicationInputsParallelismOutputReference;
_d = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsParallelismOutputReference[_d] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsParallelismOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform = kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
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
            this._resourceArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    /**
     * @stability stable
     */
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceArnInput() {
        return this._resourceArn;
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
exports.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference = KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference;
_e = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference[_e] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lambda: kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct.lambda),
    };
}
exports.kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform = kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // lambda - computed: false, optional: false, required: true
        this._lambda = new KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference(this, "lambda", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_0 = this._lambda) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.lambda = (_1 = this._lambda) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lambda.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lambda.internalValue = value.lambda;
        }
    }
    /**
     * @stability stable
     */
    get lambda() {
        return this._lambda;
    }
    /**
     * @stability stable
     */
    putLambda(value) {
        this._lambda.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get lambdaInput() {
        return this._lambda.internalValue;
    }
}
exports.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference = KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference[_f] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType),
    };
}
exports.kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform = kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform;
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter),
    };
}
exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform = kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
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
        if (this._recordColumnDelimiter) {
            hasAnyValues = true;
            internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
        }
        if (this._recordRowDelimiter) {
            hasAnyValues = true;
            internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordColumnDelimiter = undefined;
            this._recordRowDelimiter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordColumnDelimiter = value.recordColumnDelimiter;
            this._recordRowDelimiter = value.recordRowDelimiter;
        }
    }
    /**
     * @stability stable
     */
    get recordColumnDelimiter() {
        return this.getStringAttribute('record_column_delimiter');
    }
    /**
     * @stability stable
     */
    set recordColumnDelimiter(value) {
        this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordColumnDelimiterInput() {
        return this._recordColumnDelimiter;
    }
    /**
     * @stability stable
     */
    get recordRowDelimiter() {
        return this.getStringAttribute('record_row_delimiter');
    }
    /**
     * @stability stable
     */
    set recordRowDelimiter(value) {
        this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordRowDelimiterInput() {
        return this._recordRowDelimiter;
    }
}
exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference = KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference;
_g = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference[_g] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath),
    };
}
exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform = kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
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
        if (this._recordRowPath) {
            hasAnyValues = true;
            internalValueResult.recordRowPath = this._recordRowPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordRowPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordRowPath = value.recordRowPath;
        }
    }
    /**
     * @stability stable
     */
    get recordRowPath() {
        return this.getStringAttribute('record_row_path');
    }
    /**
     * @stability stable
     */
    set recordRowPath(value) {
        this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordRowPathInput() {
        return this._recordRowPath;
    }
}
exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference = KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference;
_h = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference[_h] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct.csv),
        json: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct.json),
    };
}
exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform = kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // csv - computed: false, optional: true, required: false
        this._csv = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference(this, "csv", true);
        // json - computed: false, optional: true, required: false
        this._json = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference(this, "json", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1, _2, _3;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_0 = this._csv) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.csv = (_1 = this._csv) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        if ((_2 = this._json) === null || _2 === void 0 ? void 0 : _2.internalValue) {
            hasAnyValues = true;
            internalValueResult.json = (_3 = this._json) === null || _3 === void 0 ? void 0 : _3.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csv.internalValue = undefined;
            this._json.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csv.internalValue = value.csv;
            this._json.internalValue = value.json;
        }
    }
    /**
     * @stability stable
     */
    get csv() {
        return this._csv;
    }
    /**
     * @stability stable
     */
    putCsv(value) {
        this._csv.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCsv() {
        this._csv.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvInput() {
        return this._csv.internalValue;
    }
    /**
     * @stability stable
     */
    get json() {
        return this._json;
    }
    /**
     * @stability stable
     */
    putJson(value) {
        this._json.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJson() {
        this._json.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jsonInput() {
        return this._json.internalValue;
    }
}
exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference = KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference;
_j = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference[_j] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mapping_parameters: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct.mappingParameters),
    };
}
exports.kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform = kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // mapping_parameters - computed: false, optional: true, required: false
        this._mappingParameters = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_0 = this._mappingParameters) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.mappingParameters = (_1 = this._mappingParameters) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._mappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mappingParameters.internalValue = value.mappingParameters;
        }
    }
    /**
     * @stability stable
     */
    get mappingParameters() {
        return this._mappingParameters;
    }
    /**
     * @stability stable
     */
    putMappingParameters(value) {
        this._mappingParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMappingParameters() {
        this._mappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mappingParametersInput() {
        return this._mappingParameters.internalValue;
    }
}
exports.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference = KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference;
_k = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference[_k] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform)(struct.recordColumns),
        record_format: kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct.recordFormat),
    };
}
exports.kinesisAnalyticsApplicationInputsSchemaToTerraform = kinesisAnalyticsApplicationInputsSchemaToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsSchemaOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // record_format - computed: false, optional: false, required: true
        this._recordFormat = new KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference(this, "record_format", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordEncoding) {
            hasAnyValues = true;
            internalValueResult.recordEncoding = this._recordEncoding;
        }
        if (this._recordColumns) {
            hasAnyValues = true;
            internalValueResult.recordColumns = this._recordColumns;
        }
        if ((_0 = this._recordFormat) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.recordFormat = (_1 = this._recordFormat) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordEncoding = undefined;
            this._recordColumns = undefined;
            this._recordFormat.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordEncoding = value.recordEncoding;
            this._recordColumns = value.recordColumns;
            this._recordFormat.internalValue = value.recordFormat;
        }
    }
    /**
     * @stability stable
     */
    get recordEncoding() {
        return this.getStringAttribute('record_encoding');
    }
    /**
     * @stability stable
     */
    set recordEncoding(value) {
        this._recordEncoding = value;
    }
    /**
     * @stability stable
     */
    resetRecordEncoding() {
        this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordEncodingInput() {
        return this._recordEncoding;
    }
    /**
     * @stability stable
     */
    get recordColumns() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('record_columns');
    }
    /**
     * @stability stable
     */
    set recordColumns(value) {
        this._recordColumns = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordColumnsInput() {
        return this._recordColumns;
    }
    /**
     * @stability stable
     */
    get recordFormat() {
        return this._recordFormat;
    }
    /**
     * @stability stable
     */
    putRecordFormat(value) {
        this._recordFormat.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordFormatInput() {
        return this._recordFormat.internalValue;
    }
}
exports.KinesisAnalyticsApplicationInputsSchemaOutputReference = KinesisAnalyticsApplicationInputsSchemaOutputReference;
_l = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsSchemaOutputReference[_l] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsSchemaOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        starting_position: cdktf.stringToTerraform(struct.startingPosition),
    };
}
exports.kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform = kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform;
function kinesisAnalyticsApplicationInputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name_prefix: cdktf.stringToTerraform(struct.namePrefix),
        kinesis_firehose: kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct.kinesisFirehose),
        kinesis_stream: kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct.kinesisStream),
        parallelism: kinesisAnalyticsApplicationInputsParallelismToTerraform(struct.parallelism),
        processing_configuration: kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct.processingConfiguration),
        schema: kinesisAnalyticsApplicationInputsSchemaToTerraform(struct.schema),
        starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform)(struct.startingPositionConfiguration),
    };
}
exports.kinesisAnalyticsApplicationInputsToTerraform = kinesisAnalyticsApplicationInputsToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationInputsOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // kinesis_firehose - computed: false, optional: true, required: false
        this._kinesisFirehose = new KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference(this, "kinesis_firehose", true);
        // kinesis_stream - computed: false, optional: true, required: false
        this._kinesisStream = new KinesisAnalyticsApplicationInputsKinesisStreamOutputReference(this, "kinesis_stream", true);
        // parallelism - computed: false, optional: true, required: false
        this._parallelism = new KinesisAnalyticsApplicationInputsParallelismOutputReference(this, "parallelism", true);
        // processing_configuration - computed: false, optional: true, required: false
        this._processingConfiguration = new KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference(this, "processing_configuration", true);
        // schema - computed: false, optional: false, required: true
        this._schema = new KinesisAnalyticsApplicationInputsSchemaOutputReference(this, "schema", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._namePrefix) {
            hasAnyValues = true;
            internalValueResult.namePrefix = this._namePrefix;
        }
        if ((_0 = this._kinesisFirehose) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.kinesisFirehose = (_1 = this._kinesisFirehose) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        if ((_2 = this._kinesisStream) === null || _2 === void 0 ? void 0 : _2.internalValue) {
            hasAnyValues = true;
            internalValueResult.kinesisStream = (_3 = this._kinesisStream) === null || _3 === void 0 ? void 0 : _3.internalValue;
        }
        if ((_4 = this._parallelism) === null || _4 === void 0 ? void 0 : _4.internalValue) {
            hasAnyValues = true;
            internalValueResult.parallelism = (_5 = this._parallelism) === null || _5 === void 0 ? void 0 : _5.internalValue;
        }
        if ((_6 = this._processingConfiguration) === null || _6 === void 0 ? void 0 : _6.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = (_7 = this._processingConfiguration) === null || _7 === void 0 ? void 0 : _7.internalValue;
        }
        if ((_8 = this._schema) === null || _8 === void 0 ? void 0 : _8.internalValue) {
            hasAnyValues = true;
            internalValueResult.schema = (_9 = this._schema) === null || _9 === void 0 ? void 0 : _9.internalValue;
        }
        if (this._startingPositionConfiguration) {
            hasAnyValues = true;
            internalValueResult.startingPositionConfiguration = this._startingPositionConfiguration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._namePrefix = undefined;
            this._kinesisFirehose.internalValue = undefined;
            this._kinesisStream.internalValue = undefined;
            this._parallelism.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._schema.internalValue = undefined;
            this._startingPositionConfiguration = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._namePrefix = value.namePrefix;
            this._kinesisFirehose.internalValue = value.kinesisFirehose;
            this._kinesisStream.internalValue = value.kinesisStream;
            this._parallelism.internalValue = value.parallelism;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._schema.internalValue = value.schema;
            this._startingPositionConfiguration = value.startingPositionConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    /**
     * @stability stable
     */
    set namePrefix(value) {
        this._namePrefix = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get namePrefixInput() {
        return this._namePrefix;
    }
    /**
     * @stability stable
     */
    get kinesisFirehose() {
        return this._kinesisFirehose;
    }
    /**
     * @stability stable
     */
    putKinesisFirehose(value) {
        this._kinesisFirehose.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisFirehose() {
        this._kinesisFirehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisFirehoseInput() {
        return this._kinesisFirehose.internalValue;
    }
    /**
     * @stability stable
     */
    get kinesisStream() {
        return this._kinesisStream;
    }
    /**
     * @stability stable
     */
    putKinesisStream(value) {
        this._kinesisStream.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisStream() {
        this._kinesisStream.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisStreamInput() {
        return this._kinesisStream.internalValue;
    }
    /**
     * @stability stable
     */
    get parallelism() {
        return this._parallelism;
    }
    /**
     * @stability stable
     */
    putParallelism(value) {
        this._parallelism.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetParallelism() {
        this._parallelism.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parallelismInput() {
        return this._parallelism.internalValue;
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
    get schema() {
        return this._schema;
    }
    /**
     * @stability stable
     */
    putSchema(value) {
        this._schema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaInput() {
        return this._schema.internalValue;
    }
    /**
     * @stability stable
     */
    get startingPositionConfiguration() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('starting_position_configuration');
    }
    /**
     * @stability stable
     */
    set startingPositionConfiguration(value) {
        this._startingPositionConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetStartingPositionConfiguration() {
        this._startingPositionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startingPositionConfigurationInput() {
        return this._startingPositionConfiguration;
    }
}
exports.KinesisAnalyticsApplicationInputsOutputReference = KinesisAnalyticsApplicationInputsOutputReference;
_m = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationInputsOutputReference[_m] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationInputsOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform = kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
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
            this._resourceArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    /**
     * @stability stable
     */
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceArnInput() {
        return this._resourceArn;
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
exports.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference = KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference;
_o = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference[_o] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform = kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
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
            this._resourceArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    /**
     * @stability stable
     */
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceArnInput() {
        return this._resourceArn;
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
exports.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference = KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference;
_p = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference[_p] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationOutputsLambdaToTerraform = kinesisAnalyticsApplicationOutputsLambdaToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationOutputsLambdaOutputReference extends cdktf.ComplexObject {
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
        if (this._resourceArn) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
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
            this._resourceArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
            this._roleArn = value.roleArn;
        }
    }
    /**
     * @stability stable
     */
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    /**
     * @stability stable
     */
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get resourceArnInput() {
        return this._resourceArn;
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
exports.KinesisAnalyticsApplicationOutputsLambdaOutputReference = KinesisAnalyticsApplicationOutputsLambdaOutputReference;
_q = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationOutputsLambdaOutputReference[_q] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationOutputsLambdaOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
    };
}
exports.kinesisAnalyticsApplicationOutputsSchemaToTerraform = kinesisAnalyticsApplicationOutputsSchemaToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationOutputsSchemaOutputReference extends cdktf.ComplexObject {
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
        if (this._recordFormatType) {
            hasAnyValues = true;
            internalValueResult.recordFormatType = this._recordFormatType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordFormatType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordFormatType = value.recordFormatType;
        }
    }
    /**
     * @stability stable
     */
    get recordFormatType() {
        return this.getStringAttribute('record_format_type');
    }
    /**
     * @stability stable
     */
    set recordFormatType(value) {
        this._recordFormatType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordFormatTypeInput() {
        return this._recordFormatType;
    }
}
exports.KinesisAnalyticsApplicationOutputsSchemaOutputReference = KinesisAnalyticsApplicationOutputsSchemaOutputReference;
_r = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationOutputsSchemaOutputReference[_r] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationOutputsSchemaOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationOutputsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        kinesis_firehose: kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct.kinesisFirehose),
        kinesis_stream: kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct.kinesisStream),
        lambda: kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct.lambda),
        schema: kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct.schema),
    };
}
exports.kinesisAnalyticsApplicationOutputsToTerraform = kinesisAnalyticsApplicationOutputsToTerraform;
function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference extends cdktf.ComplexObject {
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
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._fileKey) {
            hasAnyValues = true;
            internalValueResult.fileKey = this._fileKey;
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
            this._bucketArn = undefined;
            this._fileKey = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._fileKey = value.fileKey;
            this._roleArn = value.roleArn;
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
    get fileKey() {
        return this.getStringAttribute('file_key');
    }
    /**
     * @stability stable
     */
    set fileKey(value) {
        this._fileKey = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get fileKeyInput() {
        return this._fileKey;
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
exports.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference = KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference;
_s = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference[_s] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mapping: cdktf.stringToTerraform(struct.mapping),
        name: cdktf.stringToTerraform(struct.name),
        sql_type: cdktf.stringToTerraform(struct.sqlType),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform;
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_column_delimiter: cdktf.stringToTerraform(struct.recordColumnDelimiter),
        record_row_delimiter: cdktf.stringToTerraform(struct.recordRowDelimiter),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
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
        if (this._recordColumnDelimiter) {
            hasAnyValues = true;
            internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
        }
        if (this._recordRowDelimiter) {
            hasAnyValues = true;
            internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordColumnDelimiter = undefined;
            this._recordRowDelimiter = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordColumnDelimiter = value.recordColumnDelimiter;
            this._recordRowDelimiter = value.recordRowDelimiter;
        }
    }
    /**
     * @stability stable
     */
    get recordColumnDelimiter() {
        return this.getStringAttribute('record_column_delimiter');
    }
    /**
     * @stability stable
     */
    set recordColumnDelimiter(value) {
        this._recordColumnDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordColumnDelimiterInput() {
        return this._recordColumnDelimiter;
    }
    /**
     * @stability stable
     */
    get recordRowDelimiter() {
        return this.getStringAttribute('record_row_delimiter');
    }
    /**
     * @stability stable
     */
    set recordRowDelimiter(value) {
        this._recordRowDelimiter = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordRowDelimiterInput() {
        return this._recordRowDelimiter;
    }
}
exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference = KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference;
_t = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference[_t] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_row_path: cdktf.stringToTerraform(struct.recordRowPath),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
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
        if (this._recordRowPath) {
            hasAnyValues = true;
            internalValueResult.recordRowPath = this._recordRowPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordRowPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordRowPath = value.recordRowPath;
        }
    }
    /**
     * @stability stable
     */
    get recordRowPath() {
        return this.getStringAttribute('record_row_path');
    }
    /**
     * @stability stable
     */
    set recordRowPath(value) {
        this._recordRowPath = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordRowPathInput() {
        return this._recordRowPath;
    }
}
exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference = KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference;
_u = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference[_u] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct.csv),
        json: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct.json),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // csv - computed: false, optional: true, required: false
        this._csv = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference(this, "csv", true);
        // json - computed: false, optional: true, required: false
        this._json = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference(this, "json", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1, _2, _3;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_0 = this._csv) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.csv = (_1 = this._csv) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        if ((_2 = this._json) === null || _2 === void 0 ? void 0 : _2.internalValue) {
            hasAnyValues = true;
            internalValueResult.json = (_3 = this._json) === null || _3 === void 0 ? void 0 : _3.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csv.internalValue = undefined;
            this._json.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csv.internalValue = value.csv;
            this._json.internalValue = value.json;
        }
    }
    /**
     * @stability stable
     */
    get csv() {
        return this._csv;
    }
    /**
     * @stability stable
     */
    putCsv(value) {
        this._csv.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCsv() {
        this._csv.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvInput() {
        return this._csv.internalValue;
    }
    /**
     * @stability stable
     */
    get json() {
        return this._json;
    }
    /**
     * @stability stable
     */
    putJson(value) {
        this._json.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJson() {
        this._json.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jsonInput() {
        return this._json.internalValue;
    }
}
exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference = KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference;
_v = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference[_v] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mapping_parameters: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct.mappingParameters),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // mapping_parameters - computed: false, optional: true, required: false
        this._mappingParameters = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_0 = this._mappingParameters) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.mappingParameters = (_1 = this._mappingParameters) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._mappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._mappingParameters.internalValue = value.mappingParameters;
        }
    }
    /**
     * @stability stable
     */
    get mappingParameters() {
        return this._mappingParameters;
    }
    /**
     * @stability stable
     */
    putMappingParameters(value) {
        this._mappingParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMappingParameters() {
        this._mappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mappingParametersInput() {
        return this._mappingParameters.internalValue;
    }
}
exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference = KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference;
_w = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference[_w] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform)(struct.recordColumns),
        record_format: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct.recordFormat),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // record_format - computed: false, optional: false, required: true
        this._recordFormat = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference(this, "record_format", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordEncoding) {
            hasAnyValues = true;
            internalValueResult.recordEncoding = this._recordEncoding;
        }
        if (this._recordColumns) {
            hasAnyValues = true;
            internalValueResult.recordColumns = this._recordColumns;
        }
        if ((_0 = this._recordFormat) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.recordFormat = (_1 = this._recordFormat) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._recordEncoding = undefined;
            this._recordColumns = undefined;
            this._recordFormat.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordEncoding = value.recordEncoding;
            this._recordColumns = value.recordColumns;
            this._recordFormat.internalValue = value.recordFormat;
        }
    }
    /**
     * @stability stable
     */
    get recordEncoding() {
        return this.getStringAttribute('record_encoding');
    }
    /**
     * @stability stable
     */
    set recordEncoding(value) {
        this._recordEncoding = value;
    }
    /**
     * @stability stable
     */
    resetRecordEncoding() {
        this._recordEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordEncodingInput() {
        return this._recordEncoding;
    }
    /**
     * @stability stable
     */
    get recordColumns() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('record_columns');
    }
    /**
     * @stability stable
     */
    set recordColumns(value) {
        this._recordColumns = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordColumnsInput() {
        return this._recordColumns;
    }
    /**
     * @stability stable
     */
    get recordFormat() {
        return this._recordFormat;
    }
    /**
     * @stability stable
     */
    putRecordFormat(value) {
        this._recordFormat.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordFormatInput() {
        return this._recordFormat.internalValue;
    }
}
exports.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference = KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference;
_x = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference[_x] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference", version: "3.0.1" };
function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        s3: kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct.s3),
        schema: kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct.schema),
    };
}
exports.kinesisAnalyticsApplicationReferenceDataSourcesToTerraform = kinesisAnalyticsApplicationReferenceDataSourcesToTerraform;
/**
 * @stability stable
 */
class KinesisAnalyticsApplicationReferenceDataSourcesOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // s3 - computed: false, optional: false, required: true
        this._s3 = new KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference(this, "s3", true);
        // schema - computed: false, optional: false, required: true
        this._schema = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference(this, "schema", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _0, _1, _2, _3;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._tableName) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if ((_0 = this._s3) === null || _0 === void 0 ? void 0 : _0.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3 = (_1 = this._s3) === null || _1 === void 0 ? void 0 : _1.internalValue;
        }
        if ((_2 = this._schema) === null || _2 === void 0 ? void 0 : _2.internalValue) {
            hasAnyValues = true;
            internalValueResult.schema = (_3 = this._schema) === null || _3 === void 0 ? void 0 : _3.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._tableName = undefined;
            this._s3.internalValue = undefined;
            this._schema.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._tableName = value.tableName;
            this._s3.internalValue = value.s3;
            this._schema.internalValue = value.schema;
        }
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
    get s3() {
        return this._s3;
    }
    /**
     * @stability stable
     */
    putS3(value) {
        this._s3.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3Input() {
        return this._s3.internalValue;
    }
    /**
     * @stability stable
     */
    get schema() {
        return this._schema;
    }
    /**
     * @stability stable
     */
    putSchema(value) {
        this._schema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaInput() {
        return this._schema.internalValue;
    }
}
exports.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference = KinesisAnalyticsApplicationReferenceDataSourcesOutputReference;
_y = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplicationReferenceDataSourcesOutputReference[_y] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application}.
 *
 * @stability stable
 */
class KinesisAnalyticsApplication extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_kinesis_analytics_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
        // inputs - computed: false, optional: true, required: false
        this._inputs = new KinesisAnalyticsApplicationInputsOutputReference(this, "inputs", true);
        // reference_data_sources - computed: false, optional: true, required: false
        this._referenceDataSources = new KinesisAnalyticsApplicationReferenceDataSourcesOutputReference(this, "reference_data_sources", true);
        this._code = config.code;
        this._description = config.description;
        this._name = config.name;
        this._startApplication = config.startApplication;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._cloudwatchLoggingOptions.internalValue = config.cloudwatchLoggingOptions;
        this._inputs.internalValue = config.inputs;
        this._outputs = config.outputs;
        this._referenceDataSources.internalValue = config.referenceDataSources;
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
    /**
     * @stability stable
     */
    get code() {
        return this.getStringAttribute('code');
    }
    /**
     * @stability stable
     */
    set code(value) {
        this._code = value;
    }
    /**
     * @stability stable
     */
    resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codeInput() {
        return this._code;
    }
    // create_timestamp - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get createTimestamp() {
        return this.getStringAttribute('create_timestamp');
    }
    /**
     * @stability stable
     */
    get description() {
        return this.getStringAttribute('description');
    }
    /**
     * @stability stable
     */
    set description(value) {
        this._description = value;
    }
    /**
     * @stability stable
     */
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_update_timestamp - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastUpdateTimestamp() {
        return this.getStringAttribute('last_update_timestamp');
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
    get startApplication() {
        return this.getBooleanAttribute('start_application');
    }
    /**
     * @stability stable
     */
    set startApplication(value) {
        this._startApplication = value;
    }
    /**
     * @stability stable
     */
    resetStartApplication() {
        this._startApplication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get startApplicationInput() {
        return this._startApplication;
    }
    // status - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get status() {
        return this.getStringAttribute('status');
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
    // version - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get version() {
        return this.getNumberAttribute('version');
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
    get inputs() {
        return this._inputs;
    }
    /**
     * @stability stable
     */
    putInputs(value) {
        this._inputs.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInputs() {
        this._inputs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputsInput() {
        return this._inputs.internalValue;
    }
    /**
     * @stability stable
     */
    get outputs() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('outputs');
    }
    /**
     * @stability stable
     */
    set outputs(value) {
        this._outputs = value;
    }
    /**
     * @stability stable
     */
    resetOutputs() {
        this._outputs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputsInput() {
        return this._outputs;
    }
    /**
     * @stability stable
     */
    get referenceDataSources() {
        return this._referenceDataSources;
    }
    /**
     * @stability stable
     */
    putReferenceDataSources(value) {
        this._referenceDataSources.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetReferenceDataSources() {
        this._referenceDataSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get referenceDataSourcesInput() {
        return this._referenceDataSources.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            code: cdktf.stringToTerraform(this._code),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            start_application: cdktf.booleanToTerraform(this._startApplication),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            cloudwatch_logging_options: kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(this._cloudwatchLoggingOptions.internalValue),
            inputs: kinesisAnalyticsApplicationInputsToTerraform(this._inputs.internalValue),
            outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
            reference_data_sources: kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(this._referenceDataSources.internalValue),
        };
    }
}
exports.KinesisAnalyticsApplication = KinesisAnalyticsApplication;
_z = JSII_RTTI_SYMBOL_1;
KinesisAnalyticsApplication[_z] = { fqn: "@cdktf/provider-aws.kinesis.KinesisAnalyticsApplication", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
KinesisAnalyticsApplication.tfResourceType = "aws_kinesis_analytics_application";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2luZXNpcy1hbmFseXRpY3MtYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMva2luZXNpcy9raW5lc2lzLWFuYWx5dGljcy1hcHBsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQWdDL0IsU0FBZ0IsOERBQThELENBQUMsTUFBaUk7SUFDOU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDN0QsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ25ELENBQUE7QUFDSCxDQUFDO0FBVEQsd0lBU0M7Ozs7QUFFRCxNQUFhLGtFQUFtRSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXpHLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUks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QyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkUsSUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0QsMEJBQTBCLEVBQUUsOERBQThELENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztZQUN4SSxNQUFNLEVBQUUsNENBQTRDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDaEYsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZGLHNCQUFzQixFQUFFLDBEQUEwRCxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7U0FDN0gsQ0FBQztJQUNKLENBQUM7O0FBdFBILGtFQXVQQzs7O0FBclBDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csMENBQWMsR0FBVyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2RlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RhcnRBcHBsaWNhdGlvbj86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dHM/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3V0cHV0cz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWZlcmVuY2VEYXRhU291cmNlcz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzO1xufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGxvZ1N0cmVhbUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxvZ19zdHJlYW1fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbUFybiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xvZ1N0cmVhbUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nU3RyZWFtQXJuID0gdGhpcy5fbG9nU3RyZWFtQXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9sZUFybiA9IHRoaXMuX3JvbGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1Bcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1Bcm4gPSB2YWx1ZS5sb2dTdHJlYW1Bcm47XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWUucm9sZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyBsb2dfc3RyZWFtX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9sb2dTdHJlYW1Bcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ1N0cmVhbUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dTdHJlYW1Bcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvZ1N0cmVhbUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsb2dTdHJlYW1Bcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nU3RyZWFtQXJuO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzRmlyZWhvc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzRmlyZWhvc2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzRmlyZWhvc2VPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzRmlyZWhvc2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzRmlyZWhvc2VPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc0ZpcmVob3NlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc0ZpcmVob3NlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlLnJlc291cmNlQXJuO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlLnJvbGVBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc1N0cmVhbVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c0tpbmVzaXNTdHJlYW1PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc1N0cmVhbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc1N0cmVhbSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUFybjtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUGFyYWxsZWxpc20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvdW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUGFyYWxsZWxpc21Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQYXJhbGxlbGlzbU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1BhcmFsbGVsaXNtKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY291bnQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuY291bnQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQYXJhbGxlbGlzbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQYXJhbGxlbGlzbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY291bnQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvdW50ID0gdGhpcy5fY291bnQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQYXJhbGxlbGlzbSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NvdW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb3VudCA9IHZhbHVlLmNvdW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY291bnQ/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY291bnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvdW50KCkge1xuICAgIHRoaXMuX2NvdW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb3VudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbkxhbWJkYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uTGFtYmRhVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25MYW1iZGFPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbkxhbWJkYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uTGFtYmRhT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uTGFtYmRhIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25MYW1iZGEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWUucm9sZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyByZXNvdXJjZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm47XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yb2xlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJvbGVBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm9sZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yb2xlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGE6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uTGFtYmRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGFtYmRhOiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbkxhbWJkYVRvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2xhbWJkYT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubGFtYmRhID0gdGhpcy5fbGFtYmRhPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9sYW1iZGEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbGFtYmRhLmludGVybmFsVmFsdWUgPSB2YWx1ZS5sYW1iZGE7XG4gICAgfVxuICB9XG5cbiAgLy8gbGFtYmRhIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2xhbWJkYSA9IG5ldyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbkxhbWJkYU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJsYW1iZGFcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbGFtYmRhKCkge1xuICAgIHJldHVybiB0aGlzLl9sYW1iZGE7XG4gIH1cbiAgcHVibGljIHB1dExhbWJkYSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25MYW1iZGEpIHtcbiAgICB0aGlzLl9sYW1iZGEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBsYW1iZGFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFtYmRhLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkQ29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1hcHBpbmc/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzcWxUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkQ29sdW1ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hcHBpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWFwcGluZyksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBzcWxfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zcWxUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRDb2x1bW5EZWxpbWl0ZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRSb3dEZWxpbWl0ZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlY29yZF9jb2x1bW5fZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZENvbHVtbkRlbGltaXRlciksXG4gICAgcmVjb3JkX3Jvd19kZWxpbWl0ZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93RGVsaW1pdGVyKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3YgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkQ29sdW1uRGVsaW1pdGVyID0gdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRSb3dEZWxpbWl0ZXIgPSB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXI7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0NzdiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyID0gdmFsdWUucmVjb3JkQ29sdW1uRGVsaW1pdGVyO1xuICAgICAgdGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyID0gdmFsdWUucmVjb3JkUm93RGVsaW1pdGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY29yZF9jb2x1bW5fZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZENvbHVtbkRlbGltaXRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uRGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX2NvbHVtbl9kZWxpbWl0ZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZENvbHVtbkRlbGltaXRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZENvbHVtbkRlbGltaXRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI7XG4gIH1cblxuICAvLyByZWNvcmRfcm93X2RlbGltaXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRSb3dEZWxpbWl0ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd0RlbGltaXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9yb3dfZGVsaW1pdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRSb3dEZWxpbWl0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRSb3dEZWxpbWl0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkUm93RGVsaW1pdGVyO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRSb3dQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfcm93X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZFJvd1BhdGgpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZFJvd1BhdGggPSB0aGlzLl9yZWNvcmRSb3dQYXRoO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHZhbHVlLnJlY29yZFJvd1BhdGg7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX3Jvd19wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZFJvd1BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcm93X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZFJvd1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZFJvd1BhdGggPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93UGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRSb3dQYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjc3Y/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0NzdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBqc29uPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3N2OiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0NzdlRvVGVycmFmb3JtKHN0cnVjdCEuY3N2KSxcbiAgICBqc29uOiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmpzb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3N2Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jc3YgPSB0aGlzLl9jc3Y/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9qc29uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qc29uID0gdGhpcy5fanNvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3N2LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9qc29uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2Nzdi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY3N2O1xuICAgICAgdGhpcy5fanNvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuanNvbjtcbiAgICB9XG4gIH1cblxuICAvLyBjc3YgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3N2ID0gbmV3IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNzdlwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjc3YoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NzdjtcbiAgfVxuICBwdWJsaWMgcHV0Q3N2KHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdikge1xuICAgIHRoaXMuX2Nzdi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3N2KCkge1xuICAgIHRoaXMuX2Nzdi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjc3ZJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2LmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBqc29uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2pzb24gPSBuZXcgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImpzb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvbjtcbiAgfVxuICBwdWJsaWMgcHV0SnNvbih2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uKSB7XG4gICAgdGhpcy5fanNvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnNvbigpIHtcbiAgICB0aGlzLl9qc29uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpzb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFwcGluZ1BhcmFtZXRlcnM/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hcHBpbmdfcGFyYW1ldGVyczoga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm1hcHBpbmdQYXJhbWV0ZXJzID0gdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFwcGluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hcHBpbmdQYXJhbWV0ZXJzID0gbmV3IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcIm1hcHBpbmdfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBtYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dE1hcHBpbmdQYXJhbWV0ZXJzKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycykge1xuICAgIHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXBwaW5nUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRFbmNvZGluZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRDb2x1bW5zOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRDb2x1bW5zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkRm9ybWF0OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRW5jb2RpbmcpLFxuICAgIHJlY29yZF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZENvbHVtbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWNvcmRDb2x1bW5zKSxcbiAgICByZWNvcmRfZm9ybWF0OiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWFSZWNvcmRGb3JtYXRUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTY2hlbWEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZEVuY29kaW5nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRFbmNvZGluZyA9IHRoaXMuX3JlY29yZEVuY29kaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkQ29sdW1ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkQ29sdW1ucyA9IHRoaXMuX3JlY29yZENvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWNvcmRGb3JtYXQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZEZvcm1hdCA9IHRoaXMuX3JlY29yZEZvcm1hdD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1ucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHZhbHVlLnJlY29yZEVuY29kaW5nO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1ucyA9IHZhbHVlLnJlY29yZENvbHVtbnM7XG4gICAgICB0aGlzLl9yZWNvcmRGb3JtYXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnJlY29yZEZvcm1hdDtcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfZW5jb2RpbmcgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVjb3JkRW5jb2Rpbmc/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZEVuY29kaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX2VuY29kaW5nJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRFbmNvZGluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkRW5jb2RpbmcgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWNvcmRFbmNvZGluZygpIHtcbiAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkRW5jb2RpbmdJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkRW5jb2Rpbmc7XG4gIH1cblxuICAvLyByZWNvcmRfY29sdW1ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRDb2x1bW5zPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkQ29sdW1uc1tdOyBcbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWNvcmRfY29sdW1ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZENvbHVtbnModmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVJlY29yZENvbHVtbnNbXSkge1xuICAgIHRoaXMuX3JlY29yZENvbHVtbnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRDb2x1bW5zO1xuICB9XG5cbiAgLy8gcmVjb3JkX2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRGb3JtYXQgPSBuZXcgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlY29yZF9mb3JtYXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRGb3JtYXQ7XG4gIH1cbiAgcHVibGljIHB1dFJlY29yZEZvcm1hdCh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hUmVjb3JkRm9ybWF0KSB7XG4gICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1N0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydGluZ1Bvc2l0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0YXJ0aW5nX3Bvc2l0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0YXJ0aW5nUG9zaXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lUHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc0ZpcmVob3NlPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc0ZpcmVob3NlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtpbmVzaXNTdHJlYW0/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzU3RyZWFtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFsbGVsaXNtPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUGFyYWxsZWxpc207XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQcm9jZXNzaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWE6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbj86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1N0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lX3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lUHJlZml4KSxcbiAgICBraW5lc2lzX2ZpcmVob3NlOiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNLaW5lc2lzRmlyZWhvc2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNGaXJlaG9zZSksXG4gICAga2luZXNpc19zdHJlYW06IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c0tpbmVzaXNTdHJlYW1Ub1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNTdHJlYW0pLFxuICAgIHBhcmFsbGVsaXNtOiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNQYXJhbGxlbGlzbVRvVGVycmFmb3JtKHN0cnVjdCEucGFyYWxsZWxpc20pLFxuICAgIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbjoga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSxcbiAgICBzY2hlbWE6IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYVRvVGVycmFmb3JtKHN0cnVjdCEuc2NoZW1hKSxcbiAgICBzdGFydGluZ19wb3NpdGlvbl9jb25maWd1cmF0aW9uOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1N0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0pKHN0cnVjdCEuc3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9uYW1lUHJlZml4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lUHJlZml4ID0gdGhpcy5fbmFtZVByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2tpbmVzaXNGaXJlaG9zZT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2luZXNpc0ZpcmVob3NlID0gdGhpcy5fa2luZXNpc0ZpcmVob3NlPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2luZXNpc1N0cmVhbT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQua2luZXNpc1N0cmVhbSA9IHRoaXMuX2tpbmVzaXNTdHJlYW0/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJhbGxlbGlzbT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYWxsZWxpc20gPSB0aGlzLl9wYXJhbGxlbGlzbT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9jZXNzaW5nQ29uZmlndXJhdGlvbiA9IHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NoZW1hPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY2hlbWEgPSB0aGlzLl9zY2hlbWE/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9zdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0cyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25hbWVQcmVmaXggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2tpbmVzaXNTdHJlYW0uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcmFsbGVsaXNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NoZW1hLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlLm5hbWVQcmVmaXg7XG4gICAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmtpbmVzaXNGaXJlaG9zZTtcbiAgICAgIHRoaXMuX2tpbmVzaXNTdHJlYW0uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmtpbmVzaXNTdHJlYW07XG4gICAgICB0aGlzLl9wYXJhbGxlbGlzbS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGFyYWxsZWxpc207XG4gICAgICB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9zY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNjaGVtYTtcbiAgICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uID0gdmFsdWUuc3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZV9wcmVmaXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZVByZWZpeD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVfcHJlZml4Jyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lUHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZVByZWZpeDtcbiAgfVxuXG4gIC8vIGtpbmVzaXNfZmlyZWhvc2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfa2luZXNpc0ZpcmVob3NlID0gbmV3IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c0tpbmVzaXNGaXJlaG9zZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJraW5lc2lzX2ZpcmVob3NlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNGaXJlaG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc0ZpcmVob3NlO1xuICB9XG4gIHB1YmxpYyBwdXRLaW5lc2lzRmlyZWhvc2UodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c0tpbmVzaXNGaXJlaG9zZSkge1xuICAgIHRoaXMuX2tpbmVzaXNGaXJlaG9zZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2luZXNpc0ZpcmVob3NlKCkge1xuICAgIHRoaXMuX2tpbmVzaXNGaXJlaG9zZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBraW5lc2lzRmlyZWhvc2VJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc0ZpcmVob3NlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBraW5lc2lzX3N0cmVhbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9raW5lc2lzU3RyZWFtID0gbmV3IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c0tpbmVzaXNTdHJlYW1PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwia2luZXNpc19zdHJlYW1cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQga2luZXNpc1N0cmVhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc1N0cmVhbTtcbiAgfVxuICBwdWJsaWMgcHV0S2luZXNpc1N0cmVhbSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzS2luZXNpc1N0cmVhbSkge1xuICAgIHRoaXMuX2tpbmVzaXNTdHJlYW0uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEtpbmVzaXNTdHJlYW0oKSB7XG4gICAgdGhpcy5fa2luZXNpc1N0cmVhbS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBraW5lc2lzU3RyZWFtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmVzaXNTdHJlYW0uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHBhcmFsbGVsaXNtIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFsbGVsaXNtID0gbmV3IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1BhcmFsbGVsaXNtT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBhcmFsbGVsaXNtXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHBhcmFsbGVsaXNtKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbGxlbGlzbTtcbiAgfVxuICBwdWJsaWMgcHV0UGFyYWxsZWxpc20odmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1BhcmFsbGVsaXNtKSB7XG4gICAgdGhpcy5fcGFyYWxsZWxpc20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFsbGVsaXNtKCkge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFsbGVsaXNtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFsbGVsaXNtLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicHJvY2Vzc2luZ19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHByb2Nlc3NpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9jZXNzaW5nQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1Byb2Nlc3NpbmdDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzY2hlbWEgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NoZW1hID0gbmV3IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1NjaGVtYU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzY2hlbWFcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2NoZW1hKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWE7XG4gIH1cbiAgcHVibGljIHB1dFNjaGVtYSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzU2NoZW1hKSB7XG4gICAgdGhpcy5fc2NoZW1hLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZW1hSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtYS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbj86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1N0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uW107IFxuICBwdWJsaWMgZ2V0IHN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzdGFydGluZ19wb3NpdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbklucHV0c1N0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uW10pIHtcbiAgICB0aGlzLl9zdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3N0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc0ZpcmVob3NlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNGaXJlaG9zZVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNLaW5lc2lzRmlyZWhvc2VPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc0ZpcmVob3NlKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNGaXJlaG9zZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc0ZpcmVob3NlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNGaXJlaG9zZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUFybjtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNTdHJlYW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByb2xlQXJuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc1N0cmVhbVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNLaW5lc2lzU3RyZWFtT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNTdHJlYW0pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXNvdXJjZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVzb3VyY2VBcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc1N0cmVhbU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzS2luZXNpc1N0cmVhbSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXJuID0gdGhpcy5fcmVzb3VyY2VBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb2xlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yb2xlQXJuID0gdGhpcy5fcm9sZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNLaW5lc2lzU3RyZWFtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yb2xlQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlLnJlc291cmNlQXJuO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlLnJvbGVBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzTGFtYmRhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlc291cmNlQXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcm9sZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0xhbWJkYVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNMYW1iZGFPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzTGFtYmRhKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0xhbWJkYU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzTGFtYmRhIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JvbGVBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvbGVBcm4gPSB0aGlzLl9yb2xlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0xhbWJkYSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB2YWx1ZS5yb2xlQXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlc291cmNlX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZXNvdXJjZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZXNvdXJjZV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlc291cmNlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXNvdXJjZUFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZUFybjtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JvbGVBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm9sZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByb2xlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGVBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1NjaGVtYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRGb3JtYXRUeXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzU2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1NjaGVtYU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNTY2hlbWEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfZm9ybWF0X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRm9ybWF0VHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNTY2hlbWFPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1NjaGVtYSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkRm9ybWF0VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkRm9ybWF0VHlwZSA9IHRoaXMuX3JlY29yZEZvcm1hdFR5cGU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzU2NoZW1hIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0VHlwZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0VHlwZSA9IHZhbHVlLnJlY29yZEZvcm1hdFR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX2Zvcm1hdF90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZEZvcm1hdFR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZEZvcm1hdFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfZm9ybWF0X3R5cGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZEZvcm1hdFR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0VHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc0ZpcmVob3NlPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNGaXJlaG9zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBraW5lc2lzU3RyZWFtPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNTdHJlYW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbGFtYmRhPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0xhbWJkYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWE6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNTY2hlbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAga2luZXNpc19maXJlaG9zZToga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNGaXJlaG9zZVRvVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc0ZpcmVob3NlKSxcbiAgICBraW5lc2lzX3N0cmVhbToga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0tpbmVzaXNTdHJlYW1Ub1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNTdHJlYW0pLFxuICAgIGxhbWJkYToga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c0xhbWJkYVRvVGVycmFmb3JtKHN0cnVjdCEubGFtYmRhKSxcbiAgICBzY2hlbWE6IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbk91dHB1dHNTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVtYSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1MzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0QXJuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZmlsZUtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvbGVBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzUzNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1MzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTMyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QXJuKSxcbiAgICBmaWxlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlS2V5KSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTM091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1MzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXRBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmJ1Y2tldEFybiA9IHRoaXMuX2J1Y2tldEFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbGVLZXkpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZpbGVLZXkgPSB0aGlzLl9maWxlS2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcm9sZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucm9sZUFybiA9IHRoaXMuX3JvbGVBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1MzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYnVja2V0QXJuID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmlsZUtleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvbGVBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlLmJ1Y2tldEFybjtcbiAgICAgIHRoaXMuX2ZpbGVLZXkgPSB2YWx1ZS5maWxlS2V5O1xuICAgICAgdGhpcy5fcm9sZUFybiA9IHZhbHVlLnJvbGVBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gYnVja2V0X2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9idWNrZXRBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldEFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYnVja2V0QXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRBcm47XG4gIH1cblxuICAvLyBmaWxlX2tleSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9maWxlS2V5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBmaWxlS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZV9rZXknKTtcbiAgfVxuICBwdWJsaWMgc2V0IGZpbGVLZXkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbGVLZXkgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZmlsZUtleUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlS2V5O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcm9sZUFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByb2xlQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb2xlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJvbGVBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9sZUFybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZENvbHVtbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXBwaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FsVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRDb2x1bW5zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWFwcGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXBwaW5nKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHNxbF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0NzdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkQ29sdW1uRGVsaW1pdGVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkUm93RGVsaW1pdGVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3YpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfY29sdW1uX2RlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIpLFxuICAgIHJlY29yZF9yb3dfZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZFJvd0RlbGltaXRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0NzdiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZFJvd0RlbGltaXRlciA9IHRoaXMuX3JlY29yZFJvd0RlbGltaXRlcjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3YgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHZhbHVlLnJlY29yZENvbHVtbkRlbGltaXRlcjtcbiAgICAgIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciA9IHZhbHVlLnJlY29yZFJvd0RlbGltaXRlcjtcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfY29sdW1uX2RlbGltaXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZENvbHVtbkRlbGltaXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9jb2x1bW5fZGVsaW1pdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRDb2x1bW5EZWxpbWl0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5EZWxpbWl0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyO1xuICB9XG5cbiAgLy8gcmVjb3JkX3Jvd19kZWxpbWl0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkUm93RGVsaW1pdGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRSb3dEZWxpbWl0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcm93X2RlbGltaXRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkUm93RGVsaW1pdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93RGVsaW1pdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRSb3dQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfcm93X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dQYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRSb3dQYXRoID0gdGhpcy5fcmVjb3JkUm93UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHZhbHVlLnJlY29yZFJvd1BhdGg7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX3Jvd19wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZFJvd1BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcm93X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZFJvd1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZFJvd1BhdGggPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93UGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRSb3dQYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNzdj86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3Y7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganNvbj86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY3N2OiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2VG9UZXJyYWZvcm0oc3RydWN0IS5jc3YpLFxuICAgIGpzb246IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uVG9UZXJyYWZvcm0oc3RydWN0IS5qc29uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jc3Y/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNzdiA9IHRoaXMuX2Nzdj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2pzb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmpzb24gPSB0aGlzLl9qc29uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2Nzdi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fanNvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jc3YuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmNzdjtcbiAgICAgIHRoaXMuX2pzb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmpzb247XG4gICAgfVxuICB9XG5cbiAgLy8gY3N2IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NzdiA9IG5ldyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImNzdlwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjc3YoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NzdjtcbiAgfVxuICBwdWJsaWMgcHV0Q3N2KHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2KSB7XG4gICAgdGhpcy5fY3N2LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDc3YoKSB7XG4gICAgdGhpcy5fY3N2LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzdklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jc3YuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGpzb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfanNvbiA9IG5ldyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJqc29uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb247XG4gIH1cbiAgcHVibGljIHB1dEpzb24odmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uKSB7XG4gICAgdGhpcy5fanNvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SnNvbigpIHtcbiAgICB0aGlzLl9qc29uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpzb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXBwaW5nUGFyYW1ldGVycz86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXBwaW5nX3BhcmFtZXRlcnM6IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5tYXBwaW5nUGFyYW1ldGVycyA9IHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUubWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFwcGluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21hcHBpbmdQYXJhbWV0ZXJzID0gbmV3IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWFwcGluZ19wYXJhbWV0ZXJzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0TWFwcGluZ1BhcmFtZXRlcnModmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TWFwcGluZ1BhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWFwcGluZ1BhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRFbmNvZGluZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRDb2x1bW5zOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZENvbHVtbnNbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRGb3JtYXQ6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hUmVjb3JkRm9ybWF0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2VuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEVuY29kaW5nKSxcbiAgICByZWNvcmRfY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZENvbHVtbnNUb1RlcnJhZm9ybSkoc3RydWN0IS5yZWNvcmRDb2x1bW5zKSxcbiAgICByZWNvcmRfZm9ybWF0OiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdFRvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkRm9ybWF0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZEVuY29kaW5nKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRFbmNvZGluZyA9IHRoaXMuX3JlY29yZEVuY29kaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkQ29sdW1ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkQ29sdW1ucyA9IHRoaXMuX3JlY29yZENvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWNvcmRGb3JtYXQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZEZvcm1hdCA9IHRoaXMuX3JlY29yZEZvcm1hdD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVjb3JkRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWNvcmRDb2x1bW5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdmFsdWUucmVjb3JkRW5jb2Rpbmc7XG4gICAgICB0aGlzLl9yZWNvcmRDb2x1bW5zID0gdmFsdWUucmVjb3JkQ29sdW1ucztcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVjb3JkRm9ybWF0O1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY29yZF9lbmNvZGluZyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWNvcmRFbmNvZGluZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkRW5jb2RpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfZW5jb2RpbmcnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZEVuY29kaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlY29yZEVuY29kaW5nKCkge1xuICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRFbmNvZGluZ0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRFbmNvZGluZztcbiAgfVxuXG4gIC8vIHJlY29yZF9jb2x1bW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZENvbHVtbnM/OiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZENvbHVtbnNbXTsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1ucygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVjb3JkX2NvbHVtbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRDb2x1bW5zKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZENvbHVtbnNbXSkge1xuICAgIHRoaXMuX3JlY29yZENvbHVtbnMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRDb2x1bW5zO1xuICB9XG5cbiAgLy8gcmVjb3JkX2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRGb3JtYXQgPSBuZXcgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWFSZWNvcmRGb3JtYXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmVjb3JkX2Zvcm1hdFwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdDtcbiAgfVxuICBwdWJsaWMgcHV0UmVjb3JkRm9ybWF0KHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYVJlY29yZEZvcm1hdCkge1xuICAgIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZEZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRGb3JtYXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhYmxlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHMzOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1MzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtYTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhYmxlTmFtZSksXG4gICAgczM6IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzUzNUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzKSxcbiAgICBzY2hlbWE6IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzU2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWEpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlcyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fdGFibGVOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50YWJsZU5hbWUgPSB0aGlzLl90YWJsZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zMz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuczMgPSB0aGlzLl9zMz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NjaGVtYT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NoZW1hID0gdGhpcy5fc2NoZW1hPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90YWJsZU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zMy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2NoZW1hLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3RhYmxlTmFtZSA9IHZhbHVlLnRhYmxlTmFtZTtcbiAgICAgIHRoaXMuX3MzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zMztcbiAgICAgIHRoaXMuX3NjaGVtYS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2NoZW1hO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRhYmxlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFibGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWJsZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhYmxlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWJsZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVOYW1lO1xuICB9XG5cbiAgLy8gczMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfczMgPSBuZXcgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTM091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzM1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzMygpIHtcbiAgICByZXR1cm4gdGhpcy5fczM7XG4gIH1cbiAgcHVibGljIHB1dFMzKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1MzKSB7XG4gICAgdGhpcy5fczMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzM0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zMy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc2NoZW1hIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NjaGVtYSA9IG5ldyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc1NjaGVtYU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzY2hlbWFcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2NoZW1hKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWE7XG4gIH1cbiAgcHVibGljIHB1dFNjaGVtYSh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNTY2hlbWEpIHtcbiAgICB0aGlzLl9zY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlbWFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2tpbmVzaXNfYW5hbHl0aWNzX2FwcGxpY2F0aW9uXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2tpbmVzaXNfYW5hbHl0aWNzX2FwcGxpY2F0aW9uJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3cydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2NvZGUgPSBjb25maWcuY29kZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fc3RhcnRBcHBsaWNhdGlvbiA9IGNvbmZpZy5zdGFydEFwcGxpY2F0aW9uO1xuICAgIHRoaXMuX3RhZ3MgPSBjb25maWcudGFncztcbiAgICB0aGlzLl90YWdzQWxsID0gY29uZmlnLnRhZ3NBbGw7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICAgIHRoaXMuX2lucHV0cy5pbnRlcm5hbFZhbHVlID0gY29uZmlnLmlucHV0cztcbiAgICB0aGlzLl9vdXRwdXRzID0gY29uZmlnLm91dHB1dHM7XG4gICAgdGhpcy5fcmVmZXJlbmNlRGF0YVNvdXJjZXMuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5yZWZlcmVuY2VEYXRhU291cmNlcztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjb2RlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvZGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2RlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29kZSgpIHtcbiAgICB0aGlzLl9jb2RlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2RlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGU7XG4gIH1cblxuICAvLyBjcmVhdGVfdGltZXN0YW1wIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRlVGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRlX3RpbWVzdGFtcCcpO1xuICB9XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVzY3JpcHRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyBsYXN0X3VwZGF0ZV90aW1lc3RhbXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsYXN0VXBkYXRlVGltZXN0YW1wKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbGFzdF91cGRhdGVfdGltZXN0YW1wJyk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHN0YXJ0X2FwcGxpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0QXBwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0QXBwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3RhcnRfYXBwbGljYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFydEFwcGxpY2F0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhcnRBcHBsaWNhdGlvbigpIHtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydEFwcGxpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXBwbGljYXRpb247XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB2ZXJzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyA9IG5ldyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGlucHV0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dHMgPSBuZXcgS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlucHV0c1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBpbnB1dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cztcbiAgfVxuICBwdWJsaWMgcHV0SW5wdXRzKHZhbHVlOiBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25JbnB1dHMpIHtcbiAgICB0aGlzLl9pbnB1dHMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElucHV0cygpIHtcbiAgICB0aGlzLl9pbnB1dHMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gb3V0cHV0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRzPzogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1tdOyBcbiAgcHVibGljIGdldCBvdXRwdXRzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdvdXRwdXRzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0cHV0cyh2YWx1ZTogS2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uT3V0cHV0c1tdKSB7XG4gICAgdGhpcy5fb3V0cHV0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE91dHB1dHMoKSB7XG4gICAgdGhpcy5fb3V0cHV0cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRzO1xuICB9XG5cbiAgLy8gcmVmZXJlbmNlX2RhdGFfc291cmNlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZWZlcmVuY2VEYXRhU291cmNlcyA9IG5ldyBLaW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25SZWZlcmVuY2VEYXRhU291cmNlc091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJyZWZlcmVuY2VfZGF0YV9zb3VyY2VzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJlZmVyZW5jZURhdGFTb3VyY2VzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlcztcbiAgfVxuICBwdWJsaWMgcHV0UmVmZXJlbmNlRGF0YVNvdXJjZXModmFsdWU6IEtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VzKSB7XG4gICAgdGhpcy5fcmVmZXJlbmNlRGF0YVNvdXJjZXMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZmVyZW5jZURhdGFTb3VyY2VzKCkge1xuICAgIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2VzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlZmVyZW5jZURhdGFTb3VyY2VzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2VzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NvZGUpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgc3RhcnRfYXBwbGljYXRpb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9zdGFydEFwcGxpY2F0aW9uKSxcbiAgICAgIHRhZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3MpLFxuICAgICAgdGFnc19hbGw6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3RhZ3NBbGwpLFxuICAgICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGtpbmVzaXNBbmFseXRpY3NBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGlucHV0czoga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uSW5wdXRzVG9UZXJyYWZvcm0odGhpcy5faW5wdXRzLmludGVybmFsVmFsdWUpLFxuICAgICAgb3V0cHV0czogY2RrdGYubGlzdE1hcHBlcihraW5lc2lzQW5hbHl0aWNzQXBwbGljYXRpb25PdXRwdXRzVG9UZXJyYWZvcm0pKHRoaXMuX291dHB1dHMpLFxuICAgICAgcmVmZXJlbmNlX2RhdGFfc291cmNlczoga2luZXNpc0FuYWx5dGljc0FwcGxpY2F0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZXNUb1RlcnJhZm9ybSh0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlcy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=