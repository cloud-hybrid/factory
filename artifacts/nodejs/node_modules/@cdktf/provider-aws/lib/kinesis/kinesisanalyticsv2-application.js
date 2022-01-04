"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kinesisanalyticsv2Application = exports.Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference = exports.kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform = exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform = exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference = exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
        object_version: cdktf.stringToTerraform(struct.objectVersion),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference extends cdktf.ComplexObject {
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
        if (this._objectVersion) {
            hasAnyValues = true;
            internalValueResult.objectVersion = this._objectVersion;
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
            this._objectVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._fileKey = value.fileKey;
            this._objectVersion = value.objectVersion;
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
    get objectVersion() {
        return this.getStringAttribute('object_version');
    }
    /**
     * @stability stable
     */
    set objectVersion(value) {
        this._objectVersion = value;
    }
    /**
     * @stability stable
     */
    resetObjectVersion() {
        this._objectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get objectVersionInput() {
        return this._objectVersion;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference;
_a = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference[_a] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        text_content: cdktf.stringToTerraform(struct.textContent),
        s3_content_location: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct.s3ContentLocation),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // s3_content_location - computed: false, optional: true, required: false
        this._s3ContentLocation = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(this, "s3_content_location", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._textContent) {
            hasAnyValues = true;
            internalValueResult.textContent = this._textContent;
        }
        if ((_15 = this._s3ContentLocation) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3ContentLocation = (_16 = this._s3ContentLocation) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._textContent = undefined;
            this._s3ContentLocation.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._textContent = value.textContent;
            this._s3ContentLocation.internalValue = value.s3ContentLocation;
        }
    }
    /**
     * @stability stable
     */
    get textContent() {
        return this.getStringAttribute('text_content');
    }
    /**
     * @stability stable
     */
    set textContent(value) {
        this._textContent = value;
    }
    /**
     * @stability stable
     */
    resetTextContent() {
        this._textContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get textContentInput() {
        return this._textContent;
    }
    /**
     * @stability stable
     */
    get s3ContentLocation() {
        return this._s3ContentLocation;
    }
    /**
     * @stability stable
     */
    putS3ContentLocation(value) {
        this._s3ContentLocation.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetS3ContentLocation() {
        this._s3ContentLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3ContentLocationInput() {
        return this._s3ContentLocation.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference;
_b = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference[_b] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        code_content_type: cdktf.stringToTerraform(struct.codeContentType),
        code_content: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct.codeContent),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // code_content - computed: false, optional: true, required: false
        this._codeContent = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(this, "code_content", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._codeContentType) {
            hasAnyValues = true;
            internalValueResult.codeContentType = this._codeContentType;
        }
        if ((_15 = this._codeContent) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.codeContent = (_16 = this._codeContent) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._codeContentType = undefined;
            this._codeContent.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._codeContentType = value.codeContentType;
            this._codeContent.internalValue = value.codeContent;
        }
    }
    /**
     * @stability stable
     */
    get codeContentType() {
        return this.getStringAttribute('code_content_type');
    }
    /**
     * @stability stable
     */
    set codeContentType(value) {
        this._codeContentType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codeContentTypeInput() {
        return this._codeContentType;
    }
    /**
     * @stability stable
     */
    get codeContent() {
        return this._codeContent;
    }
    /**
     * @stability stable
     */
    putCodeContent(value) {
        this._codeContent.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCodeContent() {
        this._codeContent.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get codeContentInput() {
        return this._codeContent.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference;
_c = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference[_c] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        snapshots_enabled: cdktf.booleanToTerraform(struct.snapshotsEnabled),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._snapshotsEnabled) {
            hasAnyValues = true;
            internalValueResult.snapshotsEnabled = this._snapshotsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._snapshotsEnabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._snapshotsEnabled = value.snapshotsEnabled;
        }
    }
    /**
     * @stability stable
     */
    get snapshotsEnabled() {
        return this.getBooleanAttribute('snapshots_enabled');
    }
    /**
     * @stability stable
     */
    set snapshotsEnabled(value) {
        this._snapshotsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snapshotsEnabledInput() {
        return this._snapshotsEnabled;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference;
_d = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference[_d] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        property_group_id: cdktf.stringToTerraform(struct.propertyGroupId),
        property_map: cdktf.hashMapper(cdktf.anyToTerraform)(struct.propertyMap),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        property_group: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform)(struct.propertyGroup),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._propertyGroup) {
            hasAnyValues = true;
            internalValueResult.propertyGroup = this._propertyGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._propertyGroup = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._propertyGroup = value.propertyGroup;
        }
    }
    /**
     * @stability stable
     */
    get propertyGroup() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('property_group');
    }
    /**
     * @stability stable
     */
    set propertyGroup(value) {
        this._propertyGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get propertyGroupInput() {
        return this._propertyGroup;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference;
_e = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference[_e] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        checkpoint_interval: cdktf.numberToTerraform(struct.checkpointInterval),
        checkpointing_enabled: cdktf.booleanToTerraform(struct.checkpointingEnabled),
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        min_pause_between_checkpoints: cdktf.numberToTerraform(struct.minPauseBetweenCheckpoints),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._checkpointInterval) {
            hasAnyValues = true;
            internalValueResult.checkpointInterval = this._checkpointInterval;
        }
        if (this._checkpointingEnabled) {
            hasAnyValues = true;
            internalValueResult.checkpointingEnabled = this._checkpointingEnabled;
        }
        if (this._configurationType) {
            hasAnyValues = true;
            internalValueResult.configurationType = this._configurationType;
        }
        if (this._minPauseBetweenCheckpoints) {
            hasAnyValues = true;
            internalValueResult.minPauseBetweenCheckpoints = this._minPauseBetweenCheckpoints;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checkpointInterval = undefined;
            this._checkpointingEnabled = undefined;
            this._configurationType = undefined;
            this._minPauseBetweenCheckpoints = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checkpointInterval = value.checkpointInterval;
            this._checkpointingEnabled = value.checkpointingEnabled;
            this._configurationType = value.configurationType;
            this._minPauseBetweenCheckpoints = value.minPauseBetweenCheckpoints;
        }
    }
    /**
     * @stability stable
     */
    get checkpointInterval() {
        return this.getNumberAttribute('checkpoint_interval');
    }
    /**
     * @stability stable
     */
    set checkpointInterval(value) {
        this._checkpointInterval = value;
    }
    /**
     * @stability stable
     */
    resetCheckpointInterval() {
        this._checkpointInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get checkpointIntervalInput() {
        return this._checkpointInterval;
    }
    /**
     * @stability stable
     */
    get checkpointingEnabled() {
        return this.getBooleanAttribute('checkpointing_enabled');
    }
    /**
     * @stability stable
     */
    set checkpointingEnabled(value) {
        this._checkpointingEnabled = value;
    }
    /**
     * @stability stable
     */
    resetCheckpointingEnabled() {
        this._checkpointingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get checkpointingEnabledInput() {
        return this._checkpointingEnabled;
    }
    /**
     * @stability stable
     */
    get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    /**
     * @stability stable
     */
    set configurationType(value) {
        this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationTypeInput() {
        return this._configurationType;
    }
    /**
     * @stability stable
     */
    get minPauseBetweenCheckpoints() {
        return this.getNumberAttribute('min_pause_between_checkpoints');
    }
    /**
     * @stability stable
     */
    set minPauseBetweenCheckpoints(value) {
        this._minPauseBetweenCheckpoints = value;
    }
    /**
     * @stability stable
     */
    resetMinPauseBetweenCheckpoints() {
        this._minPauseBetweenCheckpoints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get minPauseBetweenCheckpointsInput() {
        return this._minPauseBetweenCheckpoints;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference;
_f = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference[_f] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        log_level: cdktf.stringToTerraform(struct.logLevel),
        metrics_level: cdktf.stringToTerraform(struct.metricsLevel),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._configurationType) {
            hasAnyValues = true;
            internalValueResult.configurationType = this._configurationType;
        }
        if (this._logLevel) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        if (this._metricsLevel) {
            hasAnyValues = true;
            internalValueResult.metricsLevel = this._metricsLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._configurationType = undefined;
            this._logLevel = undefined;
            this._metricsLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._configurationType = value.configurationType;
            this._logLevel = value.logLevel;
            this._metricsLevel = value.metricsLevel;
        }
    }
    /**
     * @stability stable
     */
    get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    /**
     * @stability stable
     */
    set configurationType(value) {
        this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationTypeInput() {
        return this._configurationType;
    }
    /**
     * @stability stable
     */
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    /**
     * @stability stable
     */
    set logLevel(value) {
        this._logLevel = value;
    }
    /**
     * @stability stable
     */
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get logLevelInput() {
        return this._logLevel;
    }
    /**
     * @stability stable
     */
    get metricsLevel() {
        return this.getStringAttribute('metrics_level');
    }
    /**
     * @stability stable
     */
    set metricsLevel(value) {
        this._metricsLevel = value;
    }
    /**
     * @stability stable
     */
    resetMetricsLevel() {
        this._metricsLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get metricsLevelInput() {
        return this._metricsLevel;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference;
_g = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference[_g] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        auto_scaling_enabled: cdktf.booleanToTerraform(struct.autoScalingEnabled),
        configuration_type: cdktf.stringToTerraform(struct.configurationType),
        parallelism: cdktf.numberToTerraform(struct.parallelism),
        parallelism_per_kpu: cdktf.numberToTerraform(struct.parallelismPerKpu),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._autoScalingEnabled) {
            hasAnyValues = true;
            internalValueResult.autoScalingEnabled = this._autoScalingEnabled;
        }
        if (this._configurationType) {
            hasAnyValues = true;
            internalValueResult.configurationType = this._configurationType;
        }
        if (this._parallelism) {
            hasAnyValues = true;
            internalValueResult.parallelism = this._parallelism;
        }
        if (this._parallelismPerKpu) {
            hasAnyValues = true;
            internalValueResult.parallelismPerKpu = this._parallelismPerKpu;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._autoScalingEnabled = undefined;
            this._configurationType = undefined;
            this._parallelism = undefined;
            this._parallelismPerKpu = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._autoScalingEnabled = value.autoScalingEnabled;
            this._configurationType = value.configurationType;
            this._parallelism = value.parallelism;
            this._parallelismPerKpu = value.parallelismPerKpu;
        }
    }
    /**
     * @stability stable
     */
    get autoScalingEnabled() {
        return this.getBooleanAttribute('auto_scaling_enabled');
    }
    /**
     * @stability stable
     */
    set autoScalingEnabled(value) {
        this._autoScalingEnabled = value;
    }
    /**
     * @stability stable
     */
    resetAutoScalingEnabled() {
        this._autoScalingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get autoScalingEnabledInput() {
        return this._autoScalingEnabled;
    }
    /**
     * @stability stable
     */
    get configurationType() {
        return this.getStringAttribute('configuration_type');
    }
    /**
     * @stability stable
     */
    set configurationType(value) {
        this._configurationType = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get configurationTypeInput() {
        return this._configurationType;
    }
    /**
     * @stability stable
     */
    get parallelism() {
        return this.getNumberAttribute('parallelism');
    }
    /**
     * @stability stable
     */
    set parallelism(value) {
        this._parallelism = value;
    }
    /**
     * @stability stable
     */
    resetParallelism() {
        this._parallelism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parallelismInput() {
        return this._parallelism;
    }
    /**
     * @stability stable
     */
    get parallelismPerKpu() {
        return this.getNumberAttribute('parallelism_per_kpu');
    }
    /**
     * @stability stable
     */
    set parallelismPerKpu(value) {
        this._parallelismPerKpu = value;
    }
    /**
     * @stability stable
     */
    resetParallelismPerKpu() {
        this._parallelismPerKpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parallelismPerKpuInput() {
        return this._parallelismPerKpu;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference;
_h = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference[_h] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        checkpoint_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct.checkpointConfiguration),
        monitoring_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct.monitoringConfiguration),
        parallelism_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct.parallelismConfiguration),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // checkpoint_configuration - computed: false, optional: true, required: false
        this._checkpointConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(this, "checkpoint_configuration", true);
        // monitoring_configuration - computed: false, optional: true, required: false
        this._monitoringConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(this, "monitoring_configuration", true);
        // parallelism_configuration - computed: false, optional: true, required: false
        this._parallelismConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(this, "parallelism_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18, _19, _20;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_15 = this._checkpointConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.checkpointConfiguration = (_16 = this._checkpointConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._monitoringConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.monitoringConfiguration = (_18 = this._monitoringConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        if ((_19 = this._parallelismConfiguration) === null || _19 === void 0 ? void 0 : _19.internalValue) {
            hasAnyValues = true;
            internalValueResult.parallelismConfiguration = (_20 = this._parallelismConfiguration) === null || _20 === void 0 ? void 0 : _20.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._checkpointConfiguration.internalValue = undefined;
            this._monitoringConfiguration.internalValue = undefined;
            this._parallelismConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._checkpointConfiguration.internalValue = value.checkpointConfiguration;
            this._monitoringConfiguration.internalValue = value.monitoringConfiguration;
            this._parallelismConfiguration.internalValue = value.parallelismConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get checkpointConfiguration() {
        return this._checkpointConfiguration;
    }
    /**
     * @stability stable
     */
    putCheckpointConfiguration(value) {
        this._checkpointConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCheckpointConfiguration() {
        this._checkpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get checkpointConfigurationInput() {
        return this._checkpointConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get monitoringConfiguration() {
        return this._monitoringConfiguration;
    }
    /**
     * @stability stable
     */
    putMonitoringConfiguration(value) {
        this._monitoringConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetMonitoringConfiguration() {
        this._monitoringConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get monitoringConfigurationInput() {
        return this._monitoringConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get parallelismConfiguration() {
        return this._parallelismConfiguration;
    }
    /**
     * @stability stable
     */
    putParallelismConfiguration(value) {
        this._parallelismConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetParallelismConfiguration() {
        this._parallelismConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parallelismConfigurationInput() {
        return this._parallelismConfiguration.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference;
_j = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference[_j] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_restore_type: cdktf.stringToTerraform(struct.applicationRestoreType),
        snapshot_name: cdktf.stringToTerraform(struct.snapshotName),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._applicationRestoreType) {
            hasAnyValues = true;
            internalValueResult.applicationRestoreType = this._applicationRestoreType;
        }
        if (this._snapshotName) {
            hasAnyValues = true;
            internalValueResult.snapshotName = this._snapshotName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationRestoreType = undefined;
            this._snapshotName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationRestoreType = value.applicationRestoreType;
            this._snapshotName = value.snapshotName;
        }
    }
    /**
     * @stability stable
     */
    get applicationRestoreType() {
        return this.getStringAttribute('application_restore_type');
    }
    /**
     * @stability stable
     */
    set applicationRestoreType(value) {
        this._applicationRestoreType = value;
    }
    /**
     * @stability stable
     */
    resetApplicationRestoreType() {
        this._applicationRestoreType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationRestoreTypeInput() {
        return this._applicationRestoreType;
    }
    /**
     * @stability stable
     */
    get snapshotName() {
        return this.getStringAttribute('snapshot_name');
    }
    /**
     * @stability stable
     */
    set snapshotName(value) {
        this._snapshotName = value;
    }
    /**
     * @stability stable
     */
    resetSnapshotName() {
        this._snapshotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get snapshotNameInput() {
        return this._snapshotName;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference;
_k = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference[_k] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_non_restored_state: cdktf.booleanToTerraform(struct.allowNonRestoredState),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._allowNonRestoredState) {
            hasAnyValues = true;
            internalValueResult.allowNonRestoredState = this._allowNonRestoredState;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowNonRestoredState = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowNonRestoredState = value.allowNonRestoredState;
        }
    }
    /**
     * @stability stable
     */
    get allowNonRestoredState() {
        return this.getBooleanAttribute('allow_non_restored_state');
    }
    /**
     * @stability stable
     */
    set allowNonRestoredState(value) {
        this._allowNonRestoredState = value;
    }
    /**
     * @stability stable
     */
    resetAllowNonRestoredState() {
        this._allowNonRestoredState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowNonRestoredStateInput() {
        return this._allowNonRestoredState;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference;
_l = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference[_l] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_restore_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct.applicationRestoreConfiguration),
        flink_run_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct.flinkRunConfiguration),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // application_restore_configuration - computed: false, optional: true, required: false
        this._applicationRestoreConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationOutputReference(this, "application_restore_configuration", true);
        // flink_run_configuration - computed: false, optional: true, required: false
        this._flinkRunConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationOutputReference(this, "flink_run_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_15 = this._applicationRestoreConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.applicationRestoreConfiguration = (_16 = this._applicationRestoreConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._flinkRunConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.flinkRunConfiguration = (_18 = this._flinkRunConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationRestoreConfiguration.internalValue = undefined;
            this._flinkRunConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationRestoreConfiguration.internalValue = value.applicationRestoreConfiguration;
            this._flinkRunConfiguration.internalValue = value.flinkRunConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get applicationRestoreConfiguration() {
        return this._applicationRestoreConfiguration;
    }
    /**
     * @stability stable
     */
    putApplicationRestoreConfiguration(value) {
        this._applicationRestoreConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetApplicationRestoreConfiguration() {
        this._applicationRestoreConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationRestoreConfigurationInput() {
        return this._applicationRestoreConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get flinkRunConfiguration() {
        return this._flinkRunConfiguration;
    }
    /**
     * @stability stable
     */
    putFlinkRunConfiguration(value) {
        this._flinkRunConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFlinkRunConfiguration() {
        this._flinkRunConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get flinkRunConfigurationInput() {
        return this._flinkRunConfiguration.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference;
_m = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference[_m] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference extends cdktf.ComplexObject {
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference;
_o = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference[_o] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
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
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference;
_p = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference[_p] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input_lambda_processor: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct.inputLambdaProcessor),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // input_lambda_processor - computed: false, optional: false, required: true
        this._inputLambdaProcessor = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorOutputReference(this, "input_lambda_processor", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_15 = this._inputLambdaProcessor) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.inputLambdaProcessor = (_16 = this._inputLambdaProcessor) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._inputLambdaProcessor.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._inputLambdaProcessor.internalValue = value.inputLambdaProcessor;
        }
    }
    /**
     * @stability stable
     */
    get inputLambdaProcessor() {
        return this._inputLambdaProcessor;
    }
    /**
     * @stability stable
     */
    putInputLambdaProcessor(value) {
        this._inputLambdaProcessor.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputLambdaProcessorInput() {
        return this._inputLambdaProcessor.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference;
_q = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference[_q] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference;
_r = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference[_r] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference;
_s = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference[_s] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct.csvMappingParameters),
        json_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct.jsonMappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // csv_mapping_parameters - computed: false, optional: true, required: false
        this._csvMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this, "csv_mapping_parameters", true);
        // json_mapping_parameters - computed: false, optional: true, required: false
        this._jsonMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this, "json_mapping_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_15 = this._csvMappingParameters) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.csvMappingParameters = (_16 = this._csvMappingParameters) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._jsonMappingParameters) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.jsonMappingParameters = (_18 = this._jsonMappingParameters) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csvMappingParameters.internalValue = undefined;
            this._jsonMappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csvMappingParameters.internalValue = value.csvMappingParameters;
            this._jsonMappingParameters.internalValue = value.jsonMappingParameters;
        }
    }
    /**
     * @stability stable
     */
    get csvMappingParameters() {
        return this._csvMappingParameters;
    }
    /**
     * @stability stable
     */
    putCsvMappingParameters(value) {
        this._csvMappingParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCsvMappingParameters() {
        this._csvMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvMappingParametersInput() {
        return this._csvMappingParameters.internalValue;
    }
    /**
     * @stability stable
     */
    get jsonMappingParameters() {
        return this._jsonMappingParameters;
    }
    /**
     * @stability stable
     */
    putJsonMappingParameters(value) {
        this._jsonMappingParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJsonMappingParameters() {
        this._jsonMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jsonMappingParametersInput() {
        return this._jsonMappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference;
_t = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference[_t] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
        mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct.mappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // mapping_parameters - computed: false, optional: false, required: true
        this._mappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordFormatType) {
            hasAnyValues = true;
            internalValueResult.recordFormatType = this._recordFormatType;
        }
        if ((_15 = this._mappingParameters) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.mappingParameters = (_16 = this._mappingParameters) === null || _16 === void 0 ? void 0 : _16.internalValue;
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
            this._mappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordFormatType = value.recordFormatType;
            this._mappingParameters.internalValue = value.mappingParameters;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mappingParametersInput() {
        return this._mappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference;
_u = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference[_u] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform)(struct.recordColumn),
        record_format: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct.recordFormat),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference extends cdktf.ComplexObject {
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
        this._recordFormat = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatOutputReference(this, "record_format", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordEncoding) {
            hasAnyValues = true;
            internalValueResult.recordEncoding = this._recordEncoding;
        }
        if (this._recordColumn) {
            hasAnyValues = true;
            internalValueResult.recordColumn = this._recordColumn;
        }
        if ((_15 = this._recordFormat) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.recordFormat = (_16 = this._recordFormat) === null || _16 === void 0 ? void 0 : _16.internalValue;
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
            this._recordColumn = undefined;
            this._recordFormat.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordEncoding = value.recordEncoding;
            this._recordColumn = value.recordColumn;
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
    get recordColumn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('record_column');
    }
    /**
     * @stability stable
     */
    set recordColumn(value) {
        this._recordColumn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordColumnInput() {
        return this._recordColumn;
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference;
_v = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference[_v] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input_starting_position: cdktf.stringToTerraform(struct.inputStartingPosition),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
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
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference;
_w = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference[_w] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
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
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference;
_x = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference[_x] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name_prefix: cdktf.stringToTerraform(struct.namePrefix),
        input_parallelism: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct.inputParallelism),
        input_processing_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct.inputProcessingConfiguration),
        input_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct.inputSchema),
        input_starting_position_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform)(struct.inputStartingPositionConfiguration),
        kinesis_firehose_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct.kinesisFirehoseInput),
        kinesis_streams_input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct.kinesisStreamsInput),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // input_parallelism - computed: false, optional: true, required: false
        this._inputParallelism = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismOutputReference(this, "input_parallelism", true);
        // input_processing_configuration - computed: false, optional: true, required: false
        this._inputProcessingConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationOutputReference(this, "input_processing_configuration", true);
        // input_schema - computed: false, optional: false, required: true
        this._inputSchema = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaOutputReference(this, "input_schema", true);
        // kinesis_firehose_input - computed: false, optional: true, required: false
        this._kinesisFirehoseInput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputOutputReference(this, "kinesis_firehose_input", true);
        // kinesis_streams_input - computed: false, optional: true, required: false
        this._kinesisStreamsInput = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputOutputReference(this, "kinesis_streams_input", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18, _19, _20, _21, _22, _23, _24;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._namePrefix) {
            hasAnyValues = true;
            internalValueResult.namePrefix = this._namePrefix;
        }
        if ((_15 = this._inputParallelism) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.inputParallelism = (_16 = this._inputParallelism) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._inputProcessingConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.inputProcessingConfiguration = (_18 = this._inputProcessingConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        if ((_19 = this._inputSchema) === null || _19 === void 0 ? void 0 : _19.internalValue) {
            hasAnyValues = true;
            internalValueResult.inputSchema = (_20 = this._inputSchema) === null || _20 === void 0 ? void 0 : _20.internalValue;
        }
        if (this._inputStartingPositionConfiguration) {
            hasAnyValues = true;
            internalValueResult.inputStartingPositionConfiguration = this._inputStartingPositionConfiguration;
        }
        if ((_21 = this._kinesisFirehoseInput) === null || _21 === void 0 ? void 0 : _21.internalValue) {
            hasAnyValues = true;
            internalValueResult.kinesisFirehoseInput = (_22 = this._kinesisFirehoseInput) === null || _22 === void 0 ? void 0 : _22.internalValue;
        }
        if ((_23 = this._kinesisStreamsInput) === null || _23 === void 0 ? void 0 : _23.internalValue) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamsInput = (_24 = this._kinesisStreamsInput) === null || _24 === void 0 ? void 0 : _24.internalValue;
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
            this._inputParallelism.internalValue = undefined;
            this._inputProcessingConfiguration.internalValue = undefined;
            this._inputSchema.internalValue = undefined;
            this._inputStartingPositionConfiguration = undefined;
            this._kinesisFirehoseInput.internalValue = undefined;
            this._kinesisStreamsInput.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._namePrefix = value.namePrefix;
            this._inputParallelism.internalValue = value.inputParallelism;
            this._inputProcessingConfiguration.internalValue = value.inputProcessingConfiguration;
            this._inputSchema.internalValue = value.inputSchema;
            this._inputStartingPositionConfiguration = value.inputStartingPositionConfiguration;
            this._kinesisFirehoseInput.internalValue = value.kinesisFirehoseInput;
            this._kinesisStreamsInput.internalValue = value.kinesisStreamsInput;
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
    get inputParallelism() {
        return this._inputParallelism;
    }
    /**
     * @stability stable
     */
    putInputParallelism(value) {
        this._inputParallelism.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInputParallelism() {
        this._inputParallelism.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputParallelismInput() {
        return this._inputParallelism.internalValue;
    }
    /**
     * @stability stable
     */
    get inputProcessingConfiguration() {
        return this._inputProcessingConfiguration;
    }
    /**
     * @stability stable
     */
    putInputProcessingConfiguration(value) {
        this._inputProcessingConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInputProcessingConfiguration() {
        this._inputProcessingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputProcessingConfigurationInput() {
        return this._inputProcessingConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get inputSchema() {
        return this._inputSchema;
    }
    /**
     * @stability stable
     */
    putInputSchema(value) {
        this._inputSchema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputSchemaInput() {
        return this._inputSchema.internalValue;
    }
    /**
     * @stability stable
     */
    get inputStartingPositionConfiguration() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('input_starting_position_configuration');
    }
    /**
     * @stability stable
     */
    set inputStartingPositionConfiguration(value) {
        this._inputStartingPositionConfiguration = value;
    }
    /**
     * @stability stable
     */
    resetInputStartingPositionConfiguration() {
        this._inputStartingPositionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputStartingPositionConfigurationInput() {
        return this._inputStartingPositionConfiguration;
    }
    /**
     * @stability stable
     */
    get kinesisFirehoseInput() {
        return this._kinesisFirehoseInput;
    }
    /**
     * @stability stable
     */
    putKinesisFirehoseInput(value) {
        this._kinesisFirehoseInput.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisFirehoseInput() {
        this._kinesisFirehoseInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisFirehoseInputInput() {
        return this._kinesisFirehoseInput.internalValue;
    }
    /**
     * @stability stable
     */
    get kinesisStreamsInput() {
        return this._kinesisStreamsInput;
    }
    /**
     * @stability stable
     */
    putKinesisStreamsInput(value) {
        this._kinesisStreamsInput.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetKinesisStreamsInput() {
        this._kinesisStreamsInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get kinesisStreamsInputInput() {
        return this._kinesisStreamsInput.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference;
_y = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference[_y] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference extends cdktf.ComplexObject {
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference;
_z = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference[_z] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
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
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference;
_0 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference[_0] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
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
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference;
_1 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference[_1] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resourceArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resourceArn = value.resourceArn;
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
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference;
_2 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference[_2] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        destination_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct.destinationSchema),
        kinesis_firehose_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct.kinesisFirehoseOutput),
        kinesis_streams_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct.kinesisStreamsOutput),
        lambda_output: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct.lambdaOutput),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform;
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference extends cdktf.ComplexObject {
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference;
_3 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference[_3] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct) {
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
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference extends cdktf.ComplexObject {
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference;
_4 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference[_4] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        csv_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct.csvMappingParameters),
        json_mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct.jsonMappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // csv_mapping_parameters - computed: false, optional: true, required: false
        this._csvMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(this, "csv_mapping_parameters", true);
        // json_mapping_parameters - computed: false, optional: true, required: false
        this._jsonMappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(this, "json_mapping_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_15 = this._csvMappingParameters) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.csvMappingParameters = (_16 = this._csvMappingParameters) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._jsonMappingParameters) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.jsonMappingParameters = (_18 = this._jsonMappingParameters) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._csvMappingParameters.internalValue = undefined;
            this._jsonMappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._csvMappingParameters.internalValue = value.csvMappingParameters;
            this._jsonMappingParameters.internalValue = value.jsonMappingParameters;
        }
    }
    /**
     * @stability stable
     */
    get csvMappingParameters() {
        return this._csvMappingParameters;
    }
    /**
     * @stability stable
     */
    putCsvMappingParameters(value) {
        this._csvMappingParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCsvMappingParameters() {
        this._csvMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvMappingParametersInput() {
        return this._csvMappingParameters.internalValue;
    }
    /**
     * @stability stable
     */
    get jsonMappingParameters() {
        return this._jsonMappingParameters;
    }
    /**
     * @stability stable
     */
    putJsonMappingParameters(value) {
        this._jsonMappingParameters.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJsonMappingParameters() {
        this._jsonMappingParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jsonMappingParametersInput() {
        return this._jsonMappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference;
_5 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference[_5] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_format_type: cdktf.stringToTerraform(struct.recordFormatType),
        mapping_parameters: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct.mappingParameters),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // mapping_parameters - computed: false, optional: false, required: true
        this._mappingParameters = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordFormatType) {
            hasAnyValues = true;
            internalValueResult.recordFormatType = this._recordFormatType;
        }
        if ((_15 = this._mappingParameters) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.mappingParameters = (_16 = this._mappingParameters) === null || _16 === void 0 ? void 0 : _16.internalValue;
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
            this._mappingParameters.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordFormatType = value.recordFormatType;
            this._mappingParameters.internalValue = value.mappingParameters;
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
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get mappingParametersInput() {
        return this._mappingParameters.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference;
_6 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference[_6] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        record_encoding: cdktf.stringToTerraform(struct.recordEncoding),
        record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform)(struct.recordColumn),
        record_format: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct.recordFormat),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference extends cdktf.ComplexObject {
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
        this._recordFormat = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatOutputReference(this, "record_format", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._recordEncoding) {
            hasAnyValues = true;
            internalValueResult.recordEncoding = this._recordEncoding;
        }
        if (this._recordColumn) {
            hasAnyValues = true;
            internalValueResult.recordColumn = this._recordColumn;
        }
        if ((_15 = this._recordFormat) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.recordFormat = (_16 = this._recordFormat) === null || _16 === void 0 ? void 0 : _16.internalValue;
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
            this._recordColumn = undefined;
            this._recordFormat.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._recordEncoding = value.recordEncoding;
            this._recordColumn = value.recordColumn;
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
    get recordColumn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('record_column');
    }
    /**
     * @stability stable
     */
    set recordColumn(value) {
        this._recordColumn = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get recordColumnInput() {
        return this._recordColumn;
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference;
_7 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference[_7] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        file_key: cdktf.stringToTerraform(struct.fileKey),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference extends cdktf.ComplexObject {
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
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._fileKey = value.fileKey;
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
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference;
_8 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference[_8] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        table_name: cdktf.stringToTerraform(struct.tableName),
        reference_schema: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct.referenceSchema),
        s3_reference_data_source: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct.s3ReferenceDataSource),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // reference_schema - computed: false, optional: false, required: true
        this._referenceSchema = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaOutputReference(this, "reference_schema", true);
        // s3_reference_data_source - computed: false, optional: false, required: true
        this._s3ReferenceDataSource = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceOutputReference(this, "s3_reference_data_source", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._tableName) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if ((_15 = this._referenceSchema) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.referenceSchema = (_16 = this._referenceSchema) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._s3ReferenceDataSource) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3ReferenceDataSource = (_18 = this._s3ReferenceDataSource) === null || _18 === void 0 ? void 0 : _18.internalValue;
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
            this._referenceSchema.internalValue = undefined;
            this._s3ReferenceDataSource.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._tableName = value.tableName;
            this._referenceSchema.internalValue = value.referenceSchema;
            this._s3ReferenceDataSource.internalValue = value.s3ReferenceDataSource;
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
    get referenceSchema() {
        return this._referenceSchema;
    }
    /**
     * @stability stable
     */
    putReferenceSchema(value) {
        this._referenceSchema.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get referenceSchemaInput() {
        return this._referenceSchema.internalValue;
    }
    /**
     * @stability stable
     */
    get s3ReferenceDataSource() {
        return this._s3ReferenceDataSource;
    }
    /**
     * @stability stable
     */
    putS3ReferenceDataSource(value) {
        this._s3ReferenceDataSource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get s3ReferenceDataSourceInput() {
        return this._s3ReferenceDataSource.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference;
_9 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference[_9] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        input: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct.input),
        output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform)(struct.output),
        reference_data_source: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct.referenceDataSource),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // input - computed: false, optional: true, required: false
        this._input = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputOutputReference(this, "input", true);
        // reference_data_source - computed: false, optional: true, required: false
        this._referenceDataSource = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceOutputReference(this, "reference_data_source", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_15 = this._input) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.input = (_16 = this._input) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if (this._output) {
            hasAnyValues = true;
            internalValueResult.output = this._output;
        }
        if ((_17 = this._referenceDataSource) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.referenceDataSource = (_18 = this._referenceDataSource) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._input.internalValue = undefined;
            this._output = undefined;
            this._referenceDataSource.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._input.internalValue = value.input;
            this._output = value.output;
            this._referenceDataSource.internalValue = value.referenceDataSource;
        }
    }
    /**
     * @stability stable
     */
    get input() {
        return this._input;
    }
    /**
     * @stability stable
     */
    putInput(value) {
        this._input.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetInput() {
        this._input.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputInput() {
        return this._input.internalValue;
    }
    /**
     * @stability stable
     */
    get output() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('output');
    }
    /**
     * @stability stable
     */
    set output(value) {
        this._output = value;
    }
    /**
     * @stability stable
     */
    resetOutput() {
        this._output = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputInput() {
        return this._output;
    }
    /**
     * @stability stable
     */
    get referenceDataSource() {
        return this._referenceDataSource;
    }
    /**
     * @stability stable
     */
    putReferenceDataSource(value) {
        this._referenceDataSource.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetReferenceDataSource() {
        this._referenceDataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get referenceDataSourceInput() {
        return this._referenceDataSource.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference;
_10 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference[_10] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference extends cdktf.ComplexObject {
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
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
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
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference;
_11 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference[_11] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        application_code_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct.applicationCodeConfiguration),
        application_snapshot_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct.applicationSnapshotConfiguration),
        environment_properties: kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct.environmentProperties),
        flink_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct.flinkApplicationConfiguration),
        run_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct.runConfiguration),
        sql_application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct.sqlApplicationConfiguration),
        vpc_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform = kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // application_code_configuration - computed: false, optional: false, required: true
        this._applicationCodeConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(this, "application_code_configuration", true);
        // application_snapshot_configuration - computed: false, optional: true, required: false
        this._applicationSnapshotConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(this, "application_snapshot_configuration", true);
        // environment_properties - computed: false, optional: true, required: false
        this._environmentProperties = new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(this, "environment_properties", true);
        // flink_application_configuration - computed: false, optional: true, required: false
        this._flinkApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(this, "flink_application_configuration", true);
        // run_configuration - computed: false, optional: true, required: false
        this._runConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationOutputReference(this, "run_configuration", true);
        // sql_application_configuration - computed: false, optional: true, required: false
        this._sqlApplicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference(this, "sql_application_configuration", true);
        // vpc_configuration - computed: false, optional: true, required: false
        this._vpcConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationOutputReference(this, "vpc_configuration", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if ((_15 = this._applicationCodeConfiguration) === null || _15 === void 0 ? void 0 : _15.internalValue) {
            hasAnyValues = true;
            internalValueResult.applicationCodeConfiguration = (_16 = this._applicationCodeConfiguration) === null || _16 === void 0 ? void 0 : _16.internalValue;
        }
        if ((_17 = this._applicationSnapshotConfiguration) === null || _17 === void 0 ? void 0 : _17.internalValue) {
            hasAnyValues = true;
            internalValueResult.applicationSnapshotConfiguration = (_18 = this._applicationSnapshotConfiguration) === null || _18 === void 0 ? void 0 : _18.internalValue;
        }
        if ((_19 = this._environmentProperties) === null || _19 === void 0 ? void 0 : _19.internalValue) {
            hasAnyValues = true;
            internalValueResult.environmentProperties = (_20 = this._environmentProperties) === null || _20 === void 0 ? void 0 : _20.internalValue;
        }
        if ((_21 = this._flinkApplicationConfiguration) === null || _21 === void 0 ? void 0 : _21.internalValue) {
            hasAnyValues = true;
            internalValueResult.flinkApplicationConfiguration = (_22 = this._flinkApplicationConfiguration) === null || _22 === void 0 ? void 0 : _22.internalValue;
        }
        if ((_23 = this._runConfiguration) === null || _23 === void 0 ? void 0 : _23.internalValue) {
            hasAnyValues = true;
            internalValueResult.runConfiguration = (_24 = this._runConfiguration) === null || _24 === void 0 ? void 0 : _24.internalValue;
        }
        if ((_25 = this._sqlApplicationConfiguration) === null || _25 === void 0 ? void 0 : _25.internalValue) {
            hasAnyValues = true;
            internalValueResult.sqlApplicationConfiguration = (_26 = this._sqlApplicationConfiguration) === null || _26 === void 0 ? void 0 : _26.internalValue;
        }
        if ((_27 = this._vpcConfiguration) === null || _27 === void 0 ? void 0 : _27.internalValue) {
            hasAnyValues = true;
            internalValueResult.vpcConfiguration = (_28 = this._vpcConfiguration) === null || _28 === void 0 ? void 0 : _28.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._applicationCodeConfiguration.internalValue = undefined;
            this._applicationSnapshotConfiguration.internalValue = undefined;
            this._environmentProperties.internalValue = undefined;
            this._flinkApplicationConfiguration.internalValue = undefined;
            this._runConfiguration.internalValue = undefined;
            this._sqlApplicationConfiguration.internalValue = undefined;
            this._vpcConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._applicationCodeConfiguration.internalValue = value.applicationCodeConfiguration;
            this._applicationSnapshotConfiguration.internalValue = value.applicationSnapshotConfiguration;
            this._environmentProperties.internalValue = value.environmentProperties;
            this._flinkApplicationConfiguration.internalValue = value.flinkApplicationConfiguration;
            this._runConfiguration.internalValue = value.runConfiguration;
            this._sqlApplicationConfiguration.internalValue = value.sqlApplicationConfiguration;
            this._vpcConfiguration.internalValue = value.vpcConfiguration;
        }
    }
    /**
     * @stability stable
     */
    get applicationCodeConfiguration() {
        return this._applicationCodeConfiguration;
    }
    /**
     * @stability stable
     */
    putApplicationCodeConfiguration(value) {
        this._applicationCodeConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationCodeConfigurationInput() {
        return this._applicationCodeConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get applicationSnapshotConfiguration() {
        return this._applicationSnapshotConfiguration;
    }
    /**
     * @stability stable
     */
    putApplicationSnapshotConfiguration(value) {
        this._applicationSnapshotConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetApplicationSnapshotConfiguration() {
        this._applicationSnapshotConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationSnapshotConfigurationInput() {
        return this._applicationSnapshotConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get environmentProperties() {
        return this._environmentProperties;
    }
    /**
     * @stability stable
     */
    putEnvironmentProperties(value) {
        this._environmentProperties.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetEnvironmentProperties() {
        this._environmentProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get environmentPropertiesInput() {
        return this._environmentProperties.internalValue;
    }
    /**
     * @stability stable
     */
    get flinkApplicationConfiguration() {
        return this._flinkApplicationConfiguration;
    }
    /**
     * @stability stable
     */
    putFlinkApplicationConfiguration(value) {
        this._flinkApplicationConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetFlinkApplicationConfiguration() {
        this._flinkApplicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get flinkApplicationConfigurationInput() {
        return this._flinkApplicationConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get runConfiguration() {
        return this._runConfiguration;
    }
    /**
     * @stability stable
     */
    putRunConfiguration(value) {
        this._runConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetRunConfiguration() {
        this._runConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get runConfigurationInput() {
        return this._runConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get sqlApplicationConfiguration() {
        return this._sqlApplicationConfiguration;
    }
    /**
     * @stability stable
     */
    putSqlApplicationConfiguration(value) {
        this._sqlApplicationConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSqlApplicationConfiguration() {
        this._sqlApplicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sqlApplicationConfigurationInput() {
        return this._sqlApplicationConfiguration.internalValue;
    }
    /**
     * @stability stable
     */
    get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    /**
     * @stability stable
     */
    putVpcConfiguration(value) {
        this._vpcConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }
}
exports.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference = Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference;
_12 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference[_12] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference", version: "3.0.1" };
function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        log_stream_arn: cdktf.stringToTerraform(struct.logStreamArn),
    };
}
exports.kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform = kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform;
/**
 * @stability stable
 */
class Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._logStreamArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._logStreamArn = value.logStreamArn;
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
}
exports.Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference = Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference;
_13 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference[_13] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application}.
 *
 * @stability stable
 */
class Kinesisanalyticsv2Application extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_kinesisanalyticsv2_application',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // application_configuration - computed: false, optional: true, required: false
        this._applicationConfiguration = new Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(this, "application_configuration", true);
        // cloudwatch_logging_options - computed: false, optional: true, required: false
        this._cloudwatchLoggingOptions = new Kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
        this._description = config.description;
        this._forceStop = config.forceStop;
        this._name = config.name;
        this._runtimeEnvironment = config.runtimeEnvironment;
        this._serviceExecutionRole = config.serviceExecutionRole;
        this._startApplication = config.startApplication;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._applicationConfiguration.internalValue = config.applicationConfiguration;
        this._cloudwatchLoggingOptions.internalValue = config.cloudwatchLoggingOptions;
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
    /**
     * @stability stable
     */
    get forceStop() {
        return this.getBooleanAttribute('force_stop');
    }
    /**
     * @stability stable
     */
    set forceStop(value) {
        this._forceStop = value;
    }
    /**
     * @stability stable
     */
    resetForceStop() {
        this._forceStop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get forceStopInput() {
        return this._forceStop;
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
    get runtimeEnvironment() {
        return this.getStringAttribute('runtime_environment');
    }
    /**
     * @stability stable
     */
    set runtimeEnvironment(value) {
        this._runtimeEnvironment = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get runtimeEnvironmentInput() {
        return this._runtimeEnvironment;
    }
    /**
     * @stability stable
     */
    get serviceExecutionRole() {
        return this.getStringAttribute('service_execution_role');
    }
    /**
     * @stability stable
     */
    set serviceExecutionRole(value) {
        this._serviceExecutionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serviceExecutionRoleInput() {
        return this._serviceExecutionRole;
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
    // version_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get versionId() {
        return this.getNumberAttribute('version_id');
    }
    /**
     * @stability stable
     */
    get applicationConfiguration() {
        return this._applicationConfiguration;
    }
    /**
     * @stability stable
     */
    putApplicationConfiguration(value) {
        this._applicationConfiguration.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetApplicationConfiguration() {
        this._applicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get applicationConfigurationInput() {
        return this._applicationConfiguration.internalValue;
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
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            force_stop: cdktf.booleanToTerraform(this._forceStop),
            name: cdktf.stringToTerraform(this._name),
            runtime_environment: cdktf.stringToTerraform(this._runtimeEnvironment),
            service_execution_role: cdktf.stringToTerraform(this._serviceExecutionRole),
            start_application: cdktf.booleanToTerraform(this._startApplication),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            application_configuration: kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(this._applicationConfiguration.internalValue),
            cloudwatch_logging_options: kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(this._cloudwatchLoggingOptions.internalValue),
        };
    }
}
exports.Kinesisanalyticsv2Application = Kinesisanalyticsv2Application;
_14 = JSII_RTTI_SYMBOL_1;
Kinesisanalyticsv2Application[_14] = { fqn: "@cdktf/provider-aws.kinesis.Kinesisanalyticsv2Application", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
Kinesisanalyticsv2Application.tfResourceType = "aws_kinesisanalyticsv2_application";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2luZXNpc2FuYWx5dGljc3YyLWFwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2tpbmVzaXMva2luZXNpc2FuYWx5dGljc3YyLWFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBa0MvQixTQUFnQix3SEFBd0gsQ0FBQyxNQUFxUDtJQUM1WCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEQsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO0tBQy9ELENBQUE7QUFDSCxDQUFDO0FBVkQsNFBBVUM7Ozs7QUFFRCxNQUFhLDRIQUE2SCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSW5LLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWdJO1FBQ3ZKLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBSUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztBQWpGSCxvUUFrRkM7OztBQVFELFNBQWdCLHVHQUF1RyxDQUFDLE1BQW1OO0lBQ3pVLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELG1CQUFtQixFQUFFLHdIQUF3SCxDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUN6SyxDQUFBO0FBQ0gsQ0FBQztBQVRELDBOQVNDOzs7O0FBRUQsTUFBYSwyR0FBNEcsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlsSixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFrRDlCLHlFQUF5RTtRQUNqRSx1QkFBa0IsR0FBRyxJQUFJLDRIQUE0SCxDQUFDLElBQVcsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTlDeE0sQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELFdBQUksSUFBSSxDQUFDLGtCQUFrQiw0Q0FBRSxhQUFhLEVBQUU7WUFDMUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsVUFBRyxJQUFJLENBQUMsa0JBQWtCLDRDQUFFLGFBQWEsQ0FBQztTQUNoRjtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUErRztRQUN0SSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDbkQ7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLG9CQUFvQixDQUFDLEtBQW9IO1FBQzlJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQzs7QUFqRUgsa09Ba0VDOzs7QUFRRCxTQUFnQiw0RkFBNEYsQ0FBQyxNQUE2TDtJQUN4UyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZUFBZSxDQUFDO1FBQ25FLFlBQVksRUFBRSx1R0FBdUcsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNJLENBQUE7QUFDSCxDQUFDO0FBVEQsb01BU0M7Ozs7QUFFRCxNQUFhLGdHQUFpRyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXZJLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQStDOUIsa0VBQWtFO1FBQzFELGlCQUFZLEdBQUcsSUFBSSwyR0FBMkcsQ0FBQyxJQUFXLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBM0MxSyxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM3RDtRQUNELFdBQUksSUFBSSxDQUFDLFlBQVksNENBQUUsYUFBYSxFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxVQUFHLElBQUksQ0FBQyxZQUFZLDRDQUFFLGFBQWEsQ0FBQztTQUNwRTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFvRztRQUMzSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDN0M7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDTSxjQUFjLENBQUMsS0FBbUc7UUFDdkgsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDTSxnQkFBZ0I7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDOztBQTlESCw0TUErREM7OztBQU1ELFNBQWdCLGdHQUFnRyxDQUFDLE1BQXFNO0lBQ3BULElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztLQUN0RSxDQUFBO0FBQ0gsQ0FBQztBQVJELDRNQVFDOzs7O0FBRUQsTUFBYSxvR0FBcUcsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkzSSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXdHO1FBQy9ILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1NBQ3BDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1NBQ2pEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFRLENBQUM7SUFDOUQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBa0M7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7O0FBeENILG9OQXlDQzs7O0FBUUQsU0FBZ0Isa0dBQWtHLENBQUMsTUFBZ0c7SUFDak4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGVBQWUsQ0FBQztRQUNuRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMxRSxDQUFBO0FBQ0gsQ0FBQztBQVRELGdOQVNDO0FBT0QsU0FBZ0IscUZBQXFGLENBQUMsTUFBK0s7SUFDblIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxrR0FBa0csQ0FBQyxDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDNUosQ0FBQTtBQUNILENBQUM7QUFSRCxzTEFRQzs7OztBQUVELE1BQWEseUZBQTBGLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJaEksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE2RjtRQUNwSCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGdCQUFnQixDQUFRLENBQUM7SUFDakUsQ0FBQzs7OztJQUNELElBQVcsYUFBYSxDQUFDLEtBQWdHO1FBQ3ZILElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O0FBekNILDhMQTBDQzs7O0FBWUQsU0FBZ0Isb0hBQW9ILENBQUMsTUFBNk87SUFDaFgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3hFLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0RSw2QkFBNkIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLDBCQUEwQixDQUFDO0tBQzNGLENBQUE7QUFDSCxDQUFDO0FBWEQsb1BBV0M7Ozs7QUFFRCxNQUFhLHdIQUF5SCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9KLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDbkU7UUFDRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUN2RTtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDcEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUM7U0FDbkY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBNEg7UUFDbkosSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7WUFDckMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztZQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7U0FDOUM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7WUFDcEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN4RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNNLHVCQUF1QjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLHVCQUF1QixDQUFRLENBQUM7SUFDbEUsQ0FBQzs7OztJQUNELElBQVcsb0JBQW9CLENBQUMsS0FBa0M7UUFDaEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ00seUJBQXlCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBSUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBQ0QsSUFBVywwQkFBMEIsQ0FBQyxLQUFhO1FBQ2pELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNNLCtCQUErQjtRQUNwQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDMUMsQ0FBQzs7QUExR0gsNFBBMkdDOzs7QUFVRCxTQUFnQixvSEFBb0gsQ0FBQyxNQUE2TztJQUNoWCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEUsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3BELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM3RCxDQUFBO0FBQ0gsQ0FBQztBQVZELG9QQVVDOzs7O0FBRUQsTUFBYSx3SEFBeUgsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkvSixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE0SDtRQUNuSixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUNoQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBQ0QsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBQ00sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7O0lBQ00saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7O0FBcEZILDRQQXFGQzs7O0FBWUQsU0FBZ0IscUhBQXFILENBQUMsTUFBK087SUFDblgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQzFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEUsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3pELG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDeEUsQ0FBQTtBQUNILENBQUM7QUFYRCxzUEFXQzs7OztBQUVELE1BQWEseUhBQTBILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJaEssWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUNuRTtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNqRTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE2SDtRQUNwSixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztZQUNyQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7U0FDckM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7WUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBUSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWtDO1FBQzlELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNNLHVCQUF1QjtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsaUJBQWlCLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBQ00sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxJQUFXLGlCQUFpQixDQUFDLEtBQWE7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBQ00sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOztBQTFHSCw4UEEyR0M7OztBQVVELFNBQWdCLDZGQUE2RixDQUFDLE1BQStMO0lBQzNTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsd0JBQXdCLEVBQUUsb0hBQW9ILENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO1FBQy9LLHdCQUF3QixFQUFFLG9IQUFvSCxDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUMvSyx5QkFBeUIsRUFBRSxxSEFBcUgsQ0FBQyxNQUFPLENBQUMsd0JBQXdCLENBQUM7S0FDbkwsQ0FBQTtBQUNILENBQUM7QUFWRCxzTUFVQzs7OztBQUVELE1BQWEsaUdBQWtHLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJeEksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBd0M5Qiw4RUFBOEU7UUFDdEUsNkJBQXdCLEdBQUcsSUFBSSx3SEFBd0gsQ0FBQyxJQUFXLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlL00sOEVBQThFO1FBQ3RFLDZCQUF3QixHQUFHLElBQUksd0hBQXdILENBQUMsSUFBVyxFQUFFLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZS9NLCtFQUErRTtRQUN2RSw4QkFBeUIsR0FBRyxJQUFJLHlIQUF5SCxDQUFDLElBQVcsRUFBRSwyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQXBFbE4sQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxXQUFJLElBQUksQ0FBQyx3QkFBd0IsNENBQUUsYUFBYSxFQUFFO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLFVBQUcsSUFBSSxDQUFDLHdCQUF3Qiw0Q0FBRSxhQUFhLENBQUM7U0FDNUY7UUFDRCxXQUFJLElBQUksQ0FBQyx3QkFBd0IsNENBQUUsYUFBYSxFQUFFO1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsdUJBQXVCLFVBQUcsSUFBSSxDQUFDLHdCQUF3Qiw0Q0FBRSxhQUFhLENBQUM7U0FDNUY7UUFDRCxXQUFJLElBQUksQ0FBQyx5QkFBeUIsNENBQUUsYUFBYSxFQUFFO1lBQ2pELFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsd0JBQXdCLFVBQUcsSUFBSSxDQUFDLHlCQUF5Qiw0Q0FBRSxhQUFhLENBQUM7U0FDOUY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUc7UUFDNUgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3hELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3hELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQzFEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUM1RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztZQUM1RSxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztTQUMvRTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN2QyxDQUFDOzs7O0lBQ00sMEJBQTBCLENBQUMsS0FBZ0g7UUFDaEosSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQzs7OztJQUNNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMxRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztJQUNyRCxDQUFDOzs7O0lBSUQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNNLDBCQUEwQixDQUFDLEtBQWdIO1FBQ2hKLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFDTSw0QkFBNEI7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDMUQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDRCQUE0QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7SUFDckQsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSwyQkFBMkIsQ0FBQyxLQUFpSDtRQUNsSixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7O0FBdkZILDhNQXdGQzs7O0FBUUQsU0FBZ0IsK0dBQStHLENBQUMsTUFBbU87SUFDalcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pGLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM3RCxDQUFBO0FBQ0gsQ0FBQztBQVRELDBPQVNDOzs7O0FBRUQsTUFBYSxtSEFBb0gsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkxSixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1NBQzNFO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBdUg7UUFDOUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDaEM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsc0JBQXNCLENBQUM7WUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUNELElBQVcsc0JBQXNCLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7OztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOztBQWpFSCxrUEFrRUM7OztBQU1ELFNBQWdCLHFHQUFxRyxDQUFDLE1BQStNO0lBQ25VLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUNsRixDQUFBO0FBQ0gsQ0FBQztBQVJELHNOQVFDOzs7O0FBRUQsTUFBYSx5R0FBMEcsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUloSixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3pFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTZHO1FBQ3BJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO1NBQ3pDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDBCQUEwQixDQUFRLENBQUM7SUFDckUsQ0FBQzs7OztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBa0M7UUFDakUsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOztBQTNDSCw4TkE0Q0M7OztBQVFELFNBQWdCLGdGQUFnRixDQUFDLE1BQXFLO0lBQ3BRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsaUNBQWlDLEVBQUUsK0dBQStHLENBQUMsTUFBTyxDQUFDLCtCQUErQixDQUFDO1FBQzNMLHVCQUF1QixFQUFFLHFHQUFxRyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUM5SixDQUFBO0FBQ0gsQ0FBQztBQVRELDRLQVNDOzs7O0FBRUQsTUFBYSxvRkFBcUYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkzSCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFrQzlCLHVGQUF1RjtRQUMvRSxxQ0FBZ0MsR0FBRyxJQUFJLG1IQUFtSCxDQUFDLElBQVcsRUFBRSxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWUzTiw2RUFBNkU7UUFDckUsMkJBQXNCLEdBQUcsSUFBSSx5R0FBeUcsQ0FBQyxJQUFXLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUE5QzdMLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsV0FBSSxJQUFJLENBQUMsZ0NBQWdDLDRDQUFFLGFBQWEsRUFBRTtZQUN4RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLCtCQUErQixVQUFHLElBQUksQ0FBQyxnQ0FBZ0MsNENBQUUsYUFBYSxDQUFDO1NBQzVHO1FBQ0QsV0FBSSxJQUFJLENBQUMsc0JBQXNCLDRDQUFFLGFBQWEsRUFBRTtZQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHFCQUFxQixVQUFHLElBQUksQ0FBQyxzQkFBc0IsNENBQUUsYUFBYSxDQUFDO1NBQ3hGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXdGO1FBQy9HLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZ0NBQWdDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNoRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUN2RDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsK0JBQStCLENBQUM7WUFDNUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7U0FDekU7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVywrQkFBK0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNNLGtDQUFrQyxDQUFDLEtBQTJHO1FBQ25KLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzlELENBQUM7Ozs7SUFDTSxvQ0FBb0M7UUFDekMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDbEUsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9DQUFvQztRQUM3QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUM7SUFDN0QsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx3QkFBd0IsQ0FBQyxLQUFpRztRQUMvSCxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7O0FBakVILG9MQWtFQzs7O0FBTUQsU0FBZ0IsZ0hBQWdILENBQUMsTUFBcU87SUFDcFcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFSRCw0T0FRQzs7OztBQUVELE1BQWEsb0hBQXFILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0osWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXdIO1FBQy9JLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUN6QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O0FBM0NILG9QQTRDQzs7O0FBTUQsU0FBZ0IsZ0pBQWdKLENBQUMsTUFBcVM7SUFDcGMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFSRCw0U0FRQzs7OztBQUVELE1BQWEsb0pBQXFKLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0wsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF3SjtRQUMvSyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7QUF4Q0gsb1RBeUNDOzs7QUFNRCxTQUFnQiw0SEFBNEgsQ0FBQyxNQUE2UDtJQUN4WSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHNCQUFzQixFQUFFLGdKQUFnSixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztLQUN2TSxDQUFBO0FBQ0gsQ0FBQztBQVJELG9RQVFDOzs7O0FBRUQsTUFBYSxnSUFBaUksU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2SyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUE0QjlCLDRFQUE0RTtRQUNwRSwwQkFBcUIsR0FBRyxJQUFJLG9KQUFvSixDQUFDLElBQVcsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQXhCdE8sQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxXQUFJLElBQUksQ0FBQyxxQkFBcUIsNENBQUUsYUFBYSxFQUFFO1lBQzdDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLFVBQUcsSUFBSSxDQUFDLHFCQUFxQiw0Q0FBRSxhQUFhLENBQUM7U0FDdEY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBb0k7UUFDM0osSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3REO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztTQUN2RTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sdUJBQXVCLENBQUMsS0FBNEk7UUFDekssSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQzs7QUF4Q0gsNFFBeUNDOzs7QUFVRCxTQUFnQix1SEFBdUgsQ0FBQyxNQUFxSDtJQUMzUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ25ELENBQUE7QUFDSCxDQUFDO0FBVkQsMFBBVUM7QUFTRCxTQUFnQiw0SkFBNEosQ0FBQyxNQUE2VDtJQUN4ZSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7UUFDL0Usb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztLQUMxRSxDQUFBO0FBQ0gsQ0FBQztBQVRELG9VQVNDOzs7O0FBRUQsTUFBYSxnS0FBaUssU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl2TSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDbkU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBb0s7UUFDM0wsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7WUFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztTQUN0QzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBYTtRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzs7OztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7QUEzREgsNFVBNERDOzs7QUFNRCxTQUFnQiw2SkFBNkosQ0FBQyxNQUErVDtJQUMzZSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztLQUNoRSxDQUFBO0FBQ0gsQ0FBQztBQVJELHNVQVFDOzs7O0FBRUQsTUFBYSxpS0FBa0ssU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl4TSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXFLO1FBQzVMLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7O0FBeENILDhVQXlDQzs7O0FBUUQsU0FBZ0Isd0lBQXdJLENBQUMsTUFBcVI7SUFDNWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxzQkFBc0IsRUFBRSw0SkFBNEosQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDbE4sdUJBQXVCLEVBQUUsNkpBQTZKLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO0tBQ3ROLENBQUE7QUFDSCxDQUFDO0FBVEQsNFJBU0M7Ozs7QUFFRCxNQUFhLDRJQUE2SSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSW5MLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWtDOUIsNEVBQTRFO1FBQ3BFLDBCQUFxQixHQUFHLElBQUksZ0tBQWdLLENBQUMsSUFBVyxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZWxQLDZFQUE2RTtRQUNyRSwyQkFBc0IsR0FBRyxJQUFJLGlLQUFpSyxDQUFDLElBQVcsRUFBRSx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTlDclAsQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxXQUFJLElBQUksQ0FBQyxxQkFBcUIsNENBQUUsYUFBYSxFQUFFO1lBQzdDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsb0JBQW9CLFVBQUcsSUFBSSxDQUFDLHFCQUFxQiw0Q0FBRSxhQUFhLENBQUM7U0FDdEY7UUFDRCxXQUFJLElBQUksQ0FBQyxzQkFBc0IsNENBQUUsYUFBYSxFQUFFO1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLFVBQUcsSUFBSSxDQUFDLHNCQUFzQiw0Q0FBRSxhQUFhLENBQUM7U0FDeEY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBZ0o7UUFDdkssSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ3JELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3ZEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN0RSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztTQUN6RTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sdUJBQXVCLENBQUMsS0FBd0o7UUFDckwsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDOzs7O0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzs7OztJQUNNLHdCQUF3QixDQUFDLEtBQXlKO1FBQ3ZMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDTSwwQkFBMEI7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQzs7QUFqRUgsb1NBa0VDOzs7QUFRRCxTQUFnQix1SEFBdUgsQ0FBQyxNQUFtUDtJQUN6WCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsa0JBQWtCLEVBQUUsd0lBQXdJLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO0tBQ3hMLENBQUE7QUFDSCxDQUFDO0FBVEQsMFBBU0M7Ozs7QUFFRCxNQUFhLDJIQUE0SCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWxLLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQStDOUIsd0VBQXdFO1FBQ2hFLHVCQUFrQixHQUFHLElBQUksNElBQTRJLENBQUMsSUFBVyxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBM0N2TixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhOztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsV0FBSSxJQUFJLENBQUMsa0JBQWtCLDRDQUFFLGFBQWEsRUFBRTtZQUMxQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGlCQUFpQixVQUFHLElBQUksQ0FBQyxrQkFBa0IsNENBQUUsYUFBYSxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQStIO1FBQ3RKLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ25EO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ2hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1NBQ2pFO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxvQkFBb0IsQ0FBQyxLQUFvSTtRQUM5SixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztJQUMvQyxDQUFDOztBQTNESCxrUUE0REM7OztBQVVELFNBQWdCLDJHQUEyRyxDQUFDLE1BQTJOO0lBQ3JWLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLGFBQWEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLHVIQUF1SCxDQUFDLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM5SyxhQUFhLEVBQUUsdUhBQXVILENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztLQUM3SixDQUFBO0FBQ0gsQ0FBQztBQVZELGtPQVVDOzs7O0FBRUQsTUFBYSwrR0FBZ0gsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl0SixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFzRTlCLG1FQUFtRTtRQUMzRCxrQkFBYSxHQUFHLElBQUksMkhBQTJILENBQUMsSUFBVyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQWxFNUwsQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUMzRDtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO1FBQ0QsV0FBSSxJQUFJLENBQUMsYUFBYSw0Q0FBRSxhQUFhLEVBQUU7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLFVBQUcsSUFBSSxDQUFDLGFBQWEsNENBQUUsYUFBYSxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQW1IO1FBQzFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDOUM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxjQUFjLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBUSxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFxSDtRQUMzSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ00sZUFBZSxDQUFDLEtBQW1IO1FBQ3hJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQzs7QUFsRkgsME9BbUZDOzs7QUFNRCxTQUFnQixrSUFBa0ksQ0FBQyxNQUFnSTtJQUNqUixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7S0FDaEYsQ0FBQTtBQUNILENBQUM7QUFSRCxnUkFRQztBQU9ELFNBQWdCLG9IQUFvSCxDQUFDLE1BQTZPO0lBQ2hYLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNELENBQUE7QUFDSCxDQUFDO0FBUkQsb1BBUUM7Ozs7QUFFRCxNQUFhLHdIQUF5SCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSS9KLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBNEg7UUFDbkosSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9CO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7O0FBeENILDRQQXlDQzs7O0FBTUQsU0FBZ0IsbUhBQW1ILENBQUMsTUFBMk87SUFDN1csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFSRCxrUEFRQzs7OztBQUVELE1BQWEsdUhBQXdILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJOUosWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEySDtRQUNsSixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7QUF4Q0gsMFBBeUNDOzs7QUFrQkQsU0FBZ0IsZ0dBQWdHLENBQUMsTUFBcU07SUFDcFQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDeEQsaUJBQWlCLEVBQUUsZ0hBQWdILENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQzdKLDhCQUE4QixFQUFFLDRIQUE0SCxDQUFDLE1BQU8sQ0FBQyw0QkFBNEIsQ0FBQztRQUNsTSxZQUFZLEVBQUUsMkdBQTJHLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztRQUM5SSxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLGtJQUFrSSxDQUFDLENBQUMsTUFBTyxDQUFDLGtDQUFrQyxDQUFDO1FBQ3ZPLHNCQUFzQixFQUFFLG9IQUFvSCxDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUMxSyxxQkFBcUIsRUFBRSxtSEFBbUgsQ0FBQyxNQUFPLENBQUMsbUJBQW1CLENBQUM7S0FDeEssQ0FBQTtBQUNILENBQUM7QUFkRCw0TUFjQzs7OztBQUVELE1BQWEsb0dBQXFHLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0ksWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBNkU5Qix1RUFBdUU7UUFDL0Qsc0JBQWlCLEdBQUcsSUFBSSxvSEFBb0gsQ0FBQyxJQUFXLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlN0wsb0ZBQW9GO1FBQzVFLGtDQUE2QixHQUFHLElBQUksZ0lBQWdJLENBQUMsSUFBVyxFQUFFLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZWxPLGtFQUFrRTtRQUMxRCxpQkFBWSxHQUFHLElBQUksK0dBQStHLENBQUMsSUFBVyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQTZCOUssNEVBQTRFO1FBQ3BFLDBCQUFxQixHQUFHLElBQUksd0hBQXdILENBQUMsSUFBVyxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZTFNLDJFQUEyRTtRQUNuRSx5QkFBb0IsR0FBRyxJQUFJLHVIQUF1SCxDQUFDLElBQVcsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQXZKdk0sQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNuRDtRQUNELFdBQUksSUFBSSxDQUFDLGlCQUFpQiw0Q0FBRSxhQUFhLEVBQUU7WUFDekMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsVUFBRyxJQUFJLENBQUMsaUJBQWlCLDRDQUFFLGFBQWEsQ0FBQztTQUM5RTtRQUNELFdBQUksSUFBSSxDQUFDLDZCQUE2Qiw0Q0FBRSxhQUFhLEVBQUU7WUFDckQsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyw0QkFBNEIsVUFBRyxJQUFJLENBQUMsNkJBQTZCLDRDQUFFLGFBQWEsQ0FBQztTQUN0RztRQUNELFdBQUksSUFBSSxDQUFDLFlBQVksNENBQUUsYUFBYSxFQUFFO1lBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxVQUFHLElBQUksQ0FBQyxZQUFZLDRDQUFFLGFBQWEsQ0FBQztTQUNwRTtRQUNELElBQUksSUFBSSxDQUFDLG1DQUFtQyxFQUFFO1lBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO1NBQ25HO1FBQ0QsV0FBSSxJQUFJLENBQUMscUJBQXFCLDRDQUFFLGFBQWEsRUFBRTtZQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixVQUFHLElBQUksQ0FBQyxxQkFBcUIsNENBQUUsYUFBYSxDQUFDO1NBQ3RGO1FBQ0QsV0FBSSxJQUFJLENBQUMsb0JBQW9CLDRDQUFFLGFBQWEsRUFBRTtZQUM1QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixVQUFHLElBQUksQ0FBQyxvQkFBb0IsNENBQUUsYUFBYSxDQUFDO1NBQ3BGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXdHO1FBQy9ILElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsNkJBQTZCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDNUMsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLFNBQVMsQ0FBQztZQUNyRCxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNyRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUNyRDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQzlELElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLDRCQUE0QixDQUFDO1lBQ3RGLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDcEQsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQztZQUNwRixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztZQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sbUJBQW1CLENBQUMsS0FBNEc7UUFDckksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDOzs7O0lBSUQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNNLCtCQUErQixDQUFDLEtBQXdIO1FBQzdKLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzNELENBQUM7Ozs7SUFDTSxpQ0FBaUM7UUFDdEMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDL0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlDQUFpQztRQUMxQyxPQUFPLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUM7SUFDMUQsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNNLGNBQWMsQ0FBQyxLQUF1RztRQUMzSCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFJRCxJQUFXLGtDQUFrQztRQUMzQyxvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUNBQXVDLENBQVEsQ0FBQztJQUN4RixDQUFDOzs7O0lBQ0QsSUFBVyxrQ0FBa0MsQ0FBQyxLQUFnSTtRQUM1SyxJQUFJLENBQUMsbUNBQW1DLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDTSx1Q0FBdUM7UUFDNUMsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsdUNBQXVDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLG1DQUFtQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFJRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ00sdUJBQXVCLENBQUMsS0FBZ0g7UUFDN0ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNNLHlCQUF5QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztJQUNsRCxDQUFDOzs7O0lBSUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQzs7OztJQUNNLHNCQUFzQixDQUFDLEtBQStHO1FBQzNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFDTSx3QkFBd0I7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDdEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHdCQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQzs7QUExS0gsb05BMktDOzs7QUFNRCxTQUFnQixrSEFBa0gsQ0FBQyxNQUF5TztJQUMxVyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDdEUsQ0FBQTtBQUNILENBQUM7QUFSRCxnUEFRQzs7OztBQUVELE1BQWEsc0hBQXVILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJN0osWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEwSDtRQUNqSixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztTQUNwQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7O0FBeENILHdQQXlDQzs7O0FBTUQsU0FBZ0Isc0hBQXNILENBQUMsTUFBaVA7SUFDdFgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7S0FDM0QsQ0FBQTtBQUNILENBQUM7QUFSRCx3UEFRQzs7OztBQUVELE1BQWEsMEhBQTJILFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJakssWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNyRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUE4SDtRQUNySixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7QUF4Q0gsZ1FBeUNDOzs7QUFNRCxTQUFnQixxSEFBcUgsQ0FBQyxNQUErTztJQUNuWCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQVJELHNQQVFDOzs7O0FBRUQsTUFBYSx5SEFBMEgsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUloSyxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQTZIO1FBQ3BKLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUMvQjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOztBQXhDSCw4UEF5Q0M7OztBQU1ELFNBQWdCLDZHQUE2RyxDQUFDLE1BQStOO0lBQzNWLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNELENBQUE7QUFDSCxDQUFDO0FBUkQsc09BUUM7Ozs7QUFFRCxNQUFhLGlIQUFrSCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXhKLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDckQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBcUg7UUFDNUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1NBQy9CO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7O0FBeENILDhPQXlDQzs7O0FBY0QsU0FBZ0IsaUdBQWlHLENBQUMsTUFBK0Y7SUFDL00sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0Msa0JBQWtCLEVBQUUsa0hBQWtILENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ2pLLHVCQUF1QixFQUFFLHNIQUFzSCxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUM5SyxzQkFBc0IsRUFBRSxxSEFBcUgsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDM0ssYUFBYSxFQUFFLDZHQUE2RyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7S0FDbkosQ0FBQTtBQUNILENBQUM7QUFaRCw4TUFZQztBQVdELFNBQWdCLHlJQUF5SSxDQUFDLE1BQXVJO0lBQy9SLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFWRCw4UkFVQztBQVNELFNBQWdCLDhLQUE4SyxDQUFDLE1BQWlXO0lBQzloQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7UUFDL0Usb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxrQkFBa0IsQ0FBQztLQUMxRSxDQUFBO0FBQ0gsQ0FBQztBQVRELHdXQVNDOzs7O0FBRUQsTUFBYSxrTEFBbUwsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl6TixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDbkU7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBc0w7UUFDN00sSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7WUFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztTQUN0QzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUNELElBQVcscUJBQXFCLENBQUMsS0FBYTtRQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzs7OztJQUlELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7QUEzREgsZ1hBNERDOzs7QUFNRCxTQUFnQiwrS0FBK0ssQ0FBQyxNQUFtVztJQUNqaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDaEUsQ0FBQTtBQUNILENBQUM7QUFSRCwwV0FRQzs7OztBQUVELE1BQWEsbUxBQW9MLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJMU4sWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN6RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF1TDtRQUM5TSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7U0FDakM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOztBQXhDSCxrWEF5Q0M7OztBQVFELFNBQWdCLDBKQUEwSixDQUFDLE1BQXlUO0lBQ2xlLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsOEtBQThLLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQ3BPLHVCQUF1QixFQUFFLCtLQUErSyxDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztLQUN4TyxDQUFBO0FBQ0gsQ0FBQztBQVRELGdVQVNDOzs7O0FBRUQsTUFBYSw4SkFBK0osU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlyTSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFrQzlCLDRFQUE0RTtRQUNwRSwwQkFBcUIsR0FBRyxJQUFJLGtMQUFrTCxDQUFDLElBQVcsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWVwUSw2RUFBNkU7UUFDckUsMkJBQXNCLEdBQUcsSUFBSSxtTEFBbUwsQ0FBQyxJQUFXLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUE5Q3ZRLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsV0FBSSxJQUFJLENBQUMscUJBQXFCLDRDQUFFLGFBQWEsRUFBRTtZQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixVQUFHLElBQUksQ0FBQyxxQkFBcUIsNENBQUUsYUFBYSxDQUFDO1NBQ3RGO1FBQ0QsV0FBSSxJQUFJLENBQUMsc0JBQXNCLDRDQUFFLGFBQWEsRUFBRTtZQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHFCQUFxQixVQUFHLElBQUksQ0FBQyxzQkFBc0IsNENBQUUsYUFBYSxDQUFDO1NBQ3hGO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQWtLO1FBQ3pMLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNyRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUN2RDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7WUFDdEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7U0FDekU7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNNLHVCQUF1QixDQUFDLEtBQTBLO1FBQ3ZNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDdkQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7SUFDbEQsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx3QkFBd0IsQ0FBQyxLQUEySztRQUN6TSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNwRCxDQUFDOzs7O0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7O0FBakVILHdVQWtFQzs7O0FBUUQsU0FBZ0IseUlBQXlJLENBQUMsTUFBdVI7SUFDL2EsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLGtCQUFrQixFQUFFLDBKQUEwSixDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztLQUMxTSxDQUFBO0FBQ0gsQ0FBQztBQVRELDhSQVNDOzs7O0FBRUQsTUFBYSw2SUFBOEksU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUlwTCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUErQzlCLHdFQUF3RTtRQUNoRSx1QkFBa0IsR0FBRyxJQUFJLDhKQUE4SixDQUFDLElBQVcsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTNDek8sQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvRDtRQUNELFdBQUksSUFBSSxDQUFDLGtCQUFrQiw0Q0FBRSxhQUFhLEVBQUU7WUFDMUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxpQkFBaUIsVUFBRyxJQUFJLENBQUMsa0JBQWtCLDRDQUFFLGFBQWEsQ0FBQztTQUNoRjtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFpSjtRQUN4SyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUNuRDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFJRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7O0lBQ00sb0JBQW9CLENBQUMsS0FBc0o7UUFDaEwsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQzs7QUEzREgsc1NBNERDOzs7QUFVRCxTQUFnQiw2SEFBNkgsQ0FBQyxNQUErUDtJQUMzWSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyx5SUFBeUksQ0FBQyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDaE0sYUFBYSxFQUFFLHlJQUF5SSxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7S0FDL0ssQ0FBQTtBQUNILENBQUM7QUFWRCxzUUFVQzs7OztBQUVELE1BQWEsaUlBQWtJLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJeEssWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBc0U5QixtRUFBbUU7UUFDM0Qsa0JBQWEsR0FBRyxJQUFJLDZJQUE2SSxDQUFDLElBQVcsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFsRTlNLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDM0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELFdBQUksSUFBSSxDQUFDLGFBQWEsNENBQUUsYUFBYSxFQUFFO1lBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxVQUFHLElBQUksQ0FBQyxhQUFhLDRDQUFFLGFBQWEsQ0FBQztTQUN0RTtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFxSTtRQUM1SixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQzlDO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBSUQsSUFBVyxZQUFZO1FBQ3JCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQVEsQ0FBQztJQUNoRSxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBdUk7UUFDN0osSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGVBQWUsQ0FBQyxLQUFxSTtRQUMxSixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQzFDLENBQUM7O0FBbEZILDhRQW1GQzs7O0FBUUQsU0FBZ0IsbUlBQW1JLENBQUMsTUFBMlE7SUFDN1osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0tBQ25ELENBQUE7QUFDSCxDQUFDO0FBVEQsa1JBU0M7Ozs7QUFFRCxNQUFhLHVJQUF3SSxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTlLLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM3QztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUEySTtRQUNsSyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDM0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O0lBSUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOztBQTNESCwwUkE0REM7OztBQVVELFNBQWdCLDhHQUE4RyxDQUFDLE1BQWlPO0lBQzlWLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELGdCQUFnQixFQUFFLDZIQUE2SCxDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7UUFDeEssd0JBQXdCLEVBQUUsbUlBQW1JLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO0tBQzdMLENBQUE7QUFDSCxDQUFDO0FBVkQsd09BVUM7Ozs7QUFFRCxNQUFhLGtIQUFtSCxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSXpKLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQXFEOUIsc0VBQXNFO1FBQzlELHFCQUFnQixHQUFHLElBQUksaUlBQWlJLENBQUMsSUFBVyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBWXhNLDhFQUE4RTtRQUN0RSwyQkFBc0IsR0FBRyxJQUFJLHVJQUF1SSxDQUFDLElBQVcsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQTlENU4sQ0FBQzs7OztJQUVELElBQVcsYUFBYTs7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELFdBQUksSUFBSSxDQUFDLGdCQUFnQiw0Q0FBRSxhQUFhLEVBQUU7WUFDeEMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxlQUFlLFVBQUcsSUFBSSxDQUFDLGdCQUFnQiw0Q0FBRSxhQUFhLENBQUM7U0FDNUU7UUFDRCxXQUFJLElBQUksQ0FBQyxzQkFBc0IsNENBQUUsYUFBYSxFQUFFO1lBQzlDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMscUJBQXFCLFVBQUcsSUFBSSxDQUFDLHNCQUFzQiw0Q0FBRSxhQUFhLENBQUM7U0FDeEY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBc0g7UUFDN0ksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQ2hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1NBQ3ZEO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQzVELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBQ00sa0JBQWtCLENBQUMsS0FBeUg7UUFDakosSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQzs7OztJQUlELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDLENBQUM7Ozs7SUFDTSx3QkFBd0IsQ0FBQyxLQUErSDtRQUM3SixJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDOztBQTlFSCxnUEErRUM7OztBQVVELFNBQWdCLDJGQUEyRixDQUFDLE1BQTJMO0lBQ3JTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLGdHQUFnRyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDdEgsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsaUdBQWlHLENBQUMsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQzNJLHFCQUFxQixFQUFFLDhHQUE4RyxDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztLQUNuSyxDQUFBO0FBQ0gsQ0FBQztBQVZELGtNQVVDOzs7O0FBRUQsTUFBYSwrRkFBZ0csU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUl0SSxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUF3QzlCLDJEQUEyRDtRQUNuRCxXQUFNLEdBQUcsSUFBSSxvR0FBb0csQ0FBQyxJQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZ0N0SiwyRUFBMkU7UUFDbkUseUJBQW9CLEdBQUcsSUFBSSxrSEFBa0gsQ0FBQyxJQUFXLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFyRWxNLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsV0FBSSxJQUFJLENBQUMsTUFBTSw0Q0FBRSxhQUFhLEVBQUU7WUFDOUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxLQUFLLFVBQUcsSUFBSSxDQUFDLE1BQU0sNENBQUUsYUFBYSxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxXQUFJLElBQUksQ0FBQyxvQkFBb0IsNENBQUUsYUFBYSxFQUFFO1lBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLFVBQUcsSUFBSSxDQUFDLG9CQUFvQiw0Q0FBRSxhQUFhLENBQUM7U0FDcEY7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBbUc7UUFDMUgsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUNyRDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsbUJBQW1CLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDTSxRQUFRLENBQUMsS0FBNEY7UUFDMUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQzs7OztJQUlELElBQVcsTUFBTTtRQUNmLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQVEsQ0FBQztJQUN6RCxDQUFDOzs7O0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBK0Y7UUFDL0csSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFJRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ00sc0JBQXNCLENBQUMsS0FBMEc7UUFDdEksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNNLHdCQUF3QjtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztJQUNqRCxDQUFDOztBQXhGSCwwTUF5RkM7OztBQVFELFNBQWdCLGdGQUFnRixDQUFDLE1BQXFLO0lBQ3BRLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDdkYsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN6RSxDQUFBO0FBQ0gsQ0FBQztBQVRELDRLQVNDOzs7O0FBRUQsTUFBYSxvRkFBcUYsU0FBUSxLQUFLLENBQUMsYUFBYTs7Ozs7OztJQUkzSCxZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKckQsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFLOUIsQ0FBQzs7OztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDakQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBd0Y7UUFDL0csSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7U0FDN0I7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBZTtRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUlELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsS0FBZTtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7QUEzREgsb0xBNERDOzs7QUFrQkQsU0FBZ0IsZ0VBQWdFLENBQUMsTUFBcUk7SUFDcE4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCw4QkFBOEIsRUFBRSw0RkFBNEYsQ0FBQyxNQUFPLENBQUMsNEJBQTRCLENBQUM7UUFDbEssa0NBQWtDLEVBQUUsZ0dBQWdHLENBQUMsTUFBTyxDQUFDLGdDQUFnQyxDQUFDO1FBQzlLLHNCQUFzQixFQUFFLHFGQUFxRixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUM1SSwrQkFBK0IsRUFBRSw2RkFBNkYsQ0FBQyxNQUFPLENBQUMsNkJBQTZCLENBQUM7UUFDckssaUJBQWlCLEVBQUUsZ0ZBQWdGLENBQUMsTUFBTyxDQUFDLGdCQUFnQixDQUFDO1FBQzdILDZCQUE2QixFQUFFLDJGQUEyRixDQUFDLE1BQU8sQ0FBQywyQkFBMkIsQ0FBQztRQUMvSixpQkFBaUIsRUFBRSxnRkFBZ0YsQ0FBQyxNQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDOUgsQ0FBQTtBQUNILENBQUM7QUFkRCw0SUFjQzs7OztBQUVELE1BQWEsb0VBQXFFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0csWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBZ0U5QixvRkFBb0Y7UUFDNUUsa0NBQTZCLEdBQUcsSUFBSSxnR0FBZ0csQ0FBQyxJQUFXLEVBQUUsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFZbE0sd0ZBQXdGO1FBQ2hGLHNDQUFpQyxHQUFHLElBQUksb0dBQW9HLENBQUMsSUFBVyxFQUFFLG9DQUFvQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBZTlNLDRFQUE0RTtRQUNwRSwyQkFBc0IsR0FBRyxJQUFJLHlGQUF5RixDQUFDLElBQVcsRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWU1SyxxRkFBcUY7UUFDN0UsbUNBQThCLEdBQUcsSUFBSSxpR0FBaUcsQ0FBQyxJQUFXLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFlck0sdUVBQXVFO1FBQy9ELHNCQUFpQixHQUFHLElBQUksb0ZBQW9GLENBQUMsSUFBVyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBZTdKLG1GQUFtRjtRQUMzRSxpQ0FBNEIsR0FBRyxJQUFJLCtGQUErRixDQUFDLElBQVcsRUFBRSwrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWUvTCx1RUFBdUU7UUFDL0Qsc0JBQWlCLEdBQUcsSUFBSSxvRkFBb0YsQ0FBQyxJQUFXLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUF6SjdKLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7O1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsV0FBSSxJQUFJLENBQUMsNkJBQTZCLDRDQUFFLGFBQWEsRUFBRTtZQUNyRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDRCQUE0QixVQUFHLElBQUksQ0FBQyw2QkFBNkIsNENBQUUsYUFBYSxDQUFDO1NBQ3RHO1FBQ0QsV0FBSSxJQUFJLENBQUMsaUNBQWlDLDRDQUFFLGFBQWEsRUFBRTtZQUN6RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdDQUFnQyxVQUFHLElBQUksQ0FBQyxpQ0FBaUMsNENBQUUsYUFBYSxDQUFDO1NBQzlHO1FBQ0QsV0FBSSxJQUFJLENBQUMsc0JBQXNCLDRDQUFFLGFBQWEsRUFBRTtZQUM5QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLHFCQUFxQixVQUFHLElBQUksQ0FBQyxzQkFBc0IsNENBQUUsYUFBYSxDQUFDO1NBQ3hGO1FBQ0QsV0FBSSxJQUFJLENBQUMsOEJBQThCLDRDQUFFLGFBQWEsRUFBRTtZQUN0RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDZCQUE2QixVQUFHLElBQUksQ0FBQyw4QkFBOEIsNENBQUUsYUFBYSxDQUFDO1NBQ3hHO1FBQ0QsV0FBSSxJQUFJLENBQUMsaUJBQWlCLDRDQUFFLGFBQWEsRUFBRTtZQUN6QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixVQUFHLElBQUksQ0FBQyxpQkFBaUIsNENBQUUsYUFBYSxDQUFDO1NBQzlFO1FBQ0QsV0FBSSxJQUFJLENBQUMsNEJBQTRCLDRDQUFFLGFBQWEsRUFBRTtZQUNwRCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLDJCQUEyQixVQUFHLElBQUksQ0FBQyw0QkFBNEIsNENBQUUsYUFBYSxDQUFDO1NBQ3BHO1FBQ0QsV0FBSSxJQUFJLENBQUMsaUJBQWlCLDRDQUFFLGFBQWEsRUFBRTtZQUN6QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGdCQUFnQixVQUFHLElBQUksQ0FBQyxpQkFBaUIsNENBQUUsYUFBYSxDQUFDO1NBQzlFO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXdFO1FBQy9GLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsNkJBQTZCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUM3RCxJQUFJLENBQUMsaUNBQWlDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNqRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUN0RCxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUM5RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUNqRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUNsRDthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsNEJBQTRCLENBQUM7WUFDdEYsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7WUFDOUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMscUJBQXFCLENBQUM7WUFDeEUsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsNkJBQTZCLENBQUM7WUFDeEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDOUQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsMkJBQTJCLENBQUM7WUFDcEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7U0FDL0Q7SUFDSCxDQUFDOzs7O0lBSUQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDNUMsQ0FBQzs7OztJQUNNLCtCQUErQixDQUFDLEtBQXdGO1FBQzdILElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxpQ0FBaUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUMsYUFBYSxDQUFDO0lBQzFELENBQUM7Ozs7SUFJRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBQ00sbUNBQW1DLENBQUMsS0FBNEY7UUFDckksSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0QsQ0FBQzs7OztJQUNNLHFDQUFxQztRQUMxQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUNBQXFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLGFBQWEsQ0FBQztJQUM5RCxDQUFDOzs7O0lBSUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQzs7OztJQUNNLHdCQUF3QixDQUFDLEtBQWlGO1FBQy9HLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFDTSwwQkFBMEI7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQzs7OztJQUlELElBQVcsNkJBQTZCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQzdDLENBQUM7Ozs7SUFDTSxnQ0FBZ0MsQ0FBQyxLQUF5RjtRQUMvSCxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1RCxDQUFDOzs7O0lBQ00sa0NBQWtDO1FBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxrQ0FBa0M7UUFDM0MsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsYUFBYSxDQUFDO0lBQzNELENBQUM7Ozs7SUFJRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ00sbUJBQW1CLENBQUMsS0FBNEU7UUFDckcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDOzs7O0lBSUQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNNLDhCQUE4QixDQUFDLEtBQXVGO1FBQzNILElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzFELENBQUM7Ozs7SUFDTSxnQ0FBZ0M7UUFDckMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDOUQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUM7SUFDekQsQ0FBQzs7OztJQUlELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDTSxtQkFBbUIsQ0FBQyxLQUE0RTtRQUNyRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ00scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBQzlDLENBQUM7O0FBNUtILG9KQTZLQzs7O0FBTUQsU0FBZ0IsZ0VBQWdFLENBQUMsTUFBcUk7SUFDcE4sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7S0FDOUQsQ0FBQTtBQUNILENBQUM7QUFSRCw0SUFRQzs7OztBQUVELE1BQWEsb0VBQXFFLFNBQVEsS0FBSyxDQUFDLGFBQWE7Ozs7Ozs7SUFJM0csWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBSnJELGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBSzlCLENBQUM7Ozs7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUF3RTtRQUMvRixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7U0FDaEM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7SUFJRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOztBQXhDSCxvSkF5Q0M7Ozs7Ozs7O0FBR0QsTUFBYSw2QkFBOEIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBT3hFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYzs7Ozs7Ozs7SUFHZCxZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUEyQztRQUMxRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG9DQUFvQztZQUMzRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBd0tMLCtFQUErRTtRQUN2RSw4QkFBeUIsR0FBRyxJQUFJLG9FQUFvRSxDQUFDLElBQVcsRUFBRSwyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQWU3SixnRkFBZ0Y7UUFDeEUsOEJBQXlCLEdBQUcsSUFBSSxvRUFBb0UsQ0FBQyxJQUFXLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUF4TDVKLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDL0UsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7SUFDakYsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDs7OztJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0VBQXNFOzs7O0lBQ3RFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFJRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBSUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFrQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBQ00sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELHVEQUF1RDs7OztJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkVBQTJFOzs7O0lBQzNFLElBQVcsbUJBQW1CO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBSUQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBQ0QsSUFBVyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHVCQUF1QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs7O0lBSUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBSUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQVEsQ0FBQztJQUM5RCxDQUFDOzs7O0lBQ0QsSUFBVyxnQkFBZ0IsQ0FBQyxLQUFrQztRQUM1RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRCw0REFBNEQ7Ozs7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EOzs7O0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELElBQVcsT0FBTztRQUNoQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFRLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELElBQVcsT0FBTyxDQUFDLEtBQW9EO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0VBQWdFOzs7O0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBSUQsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUNNLDJCQUEyQixDQUFDLEtBQTREO1FBQzdGLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDTSw2QkFBNkI7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDM0QsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLDZCQUE2QjtRQUN0QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7SUFDdEQsQ0FBQzs7OztJQUlELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ3hDLENBQUM7Ozs7SUFDTSwyQkFBMkIsQ0FBQyxLQUE0RDtRQUM3RixJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDOzs7O0lBQ00sNkJBQTZCO1FBQ2xDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzNELENBQUM7SUFDRCxvREFBb0Q7Ozs7SUFDcEQsSUFBVyw2QkFBNkI7UUFDdEMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7Ozs7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN2RCxVQUFVLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDckQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdEUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25FLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELHlCQUF5QixFQUFFLGdFQUFnRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUM7WUFDekksMEJBQTBCLEVBQUUsZ0VBQWdFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztTQUMzSSxDQUFDO0lBQ0osQ0FBQzs7QUEvT0gsc0VBZ1BDOzs7QUE5T0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw0Q0FBYyxHQUFXLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZm9yY2VTdG9wPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJ1bnRpbWVFbnZpcm9ubWVudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJ2aWNlRXhlY3V0aW9uUm9sZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0YXJ0QXBwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldEFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGVLZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvYmplY3RWZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRTM0NvbnRlbnRMb2NhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRBcm4pLFxuICAgIGZpbGVfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGVLZXkpLFxuICAgIG9iamVjdF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdFZlcnNpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2J1Y2tldEFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0QXJuID0gdGhpcy5fYnVja2V0QXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmlsZUtleSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmlsZUtleSA9IHRoaXMuX2ZpbGVLZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vYmplY3RWZXJzaW9uKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vYmplY3RWZXJzaW9uID0gdGhpcy5fb2JqZWN0VmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXRBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maWxlS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb2JqZWN0VmVyc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYnVja2V0QXJuID0gdmFsdWUuYnVja2V0QXJuO1xuICAgICAgdGhpcy5fZmlsZUtleSA9IHZhbHVlLmZpbGVLZXk7XG4gICAgICB0aGlzLl9vYmplY3RWZXJzaW9uID0gdmFsdWUub2JqZWN0VmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXRfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2J1Y2tldEFybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYnVja2V0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0QXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9idWNrZXRBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0QXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldEFybjtcbiAgfVxuXG4gIC8vIGZpbGVfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2ZpbGVLZXk/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGZpbGVLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZmlsZUtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsZUtleSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmaWxlS2V5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVLZXk7XG4gIH1cblxuICAvLyBvYmplY3RfdmVyc2lvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vYmplY3RWZXJzaW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBvYmplY3RWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0X3ZlcnNpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IG9iamVjdFZlcnNpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX29iamVjdFZlcnNpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPYmplY3RWZXJzaW9uKCkge1xuICAgIHRoaXMuX29iamVjdFZlcnNpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG9iamVjdFZlcnNpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0VmVyc2lvbjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0ZXh0Q29udGVudD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM0NvbnRlbnRMb2NhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0ZXh0X2NvbnRlbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGV4dENvbnRlbnQpLFxuICAgIHMzX2NvbnRlbnRfbG9jYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnMzQ29udGVudExvY2F0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3RleHRDb250ZW50KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC50ZXh0Q29udGVudCA9IHRoaXMuX3RleHRDb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fczNDb250ZW50TG9jYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzQ29udGVudExvY2F0aW9uID0gdGhpcy5fczNDb250ZW50TG9jYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RleHRDb250ZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNDb250ZW50TG9jYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fdGV4dENvbnRlbnQgPSB2YWx1ZS50ZXh0Q29udGVudDtcbiAgICAgIHRoaXMuX3MzQ29udGVudExvY2F0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zM0NvbnRlbnRMb2NhdGlvbjtcbiAgICB9XG4gIH1cblxuICAvLyB0ZXh0X2NvbnRlbnQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGV4dENvbnRlbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRleHRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGV4dF9jb250ZW50Jyk7XG4gIH1cbiAgcHVibGljIHNldCB0ZXh0Q29udGVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUZXh0Q29udGVudCgpIHtcbiAgICB0aGlzLl90ZXh0Q29udGVudCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGV4dENvbnRlbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dENvbnRlbnQ7XG4gIH1cblxuICAvLyBzM19jb250ZW50X2xvY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3MzQ29udGVudExvY2F0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50UzNDb250ZW50TG9jYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiczNfY29udGVudF9sb2NhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzM0NvbnRlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fczNDb250ZW50TG9jYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFMzQ29udGVudExvY2F0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudFMzQ29udGVudExvY2F0aW9uKSB7XG4gICAgdGhpcy5fczNDb250ZW50TG9jYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFMzQ29udGVudExvY2F0aW9uKCkge1xuICAgIHRoaXMuX3MzQ29udGVudExvY2F0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHMzQ29udGVudExvY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzQ29udGVudExvY2F0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2RlQ29udGVudFR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2RlQ29udGVudD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29kZV9jb250ZW50X3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29kZUNvbnRlbnRUeXBlKSxcbiAgICBjb2RlX2NvbnRlbnQ6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbkNvZGVDb250ZW50VG9UZXJyYWZvcm0oc3RydWN0IS5jb2RlQ29udGVudCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NvZGVDb250ZW50VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29kZUNvbnRlbnRUeXBlID0gdGhpcy5fY29kZUNvbnRlbnRUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29kZUNvbnRlbnQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvZGVDb250ZW50ID0gdGhpcy5fY29kZUNvbnRlbnQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudFR5cGUgPSB2YWx1ZS5jb2RlQ29udGVudFR5cGU7XG4gICAgICB0aGlzLl9jb2RlQ29udGVudC5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY29kZUNvbnRlbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY29kZV9jb250ZW50X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29kZUNvbnRlbnRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb2RlQ29udGVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb2RlX2NvbnRlbnRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29kZUNvbnRlbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2RlQ29udGVudFR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29kZUNvbnRlbnRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVDb250ZW50VHlwZTtcbiAgfVxuXG4gIC8vIGNvZGVfY29udGVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2RlQ29udGVudCA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25Db2RlQ29udGVudE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJjb2RlX2NvbnRlbnRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY29kZUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZGVDb250ZW50O1xuICB9XG4gIHB1YmxpYyBwdXRDb2RlQ29udGVudCh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uQ29kZUNvbnRlbnQpIHtcbiAgICB0aGlzLl9jb2RlQ29udGVudC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29kZUNvbnRlbnQoKSB7XG4gICAgdGhpcy5fY29kZUNvbnRlbnQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29kZUNvbnRlbnRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29kZUNvbnRlbnQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbmFwc2hvdHNFbmFibGVkOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzbmFwc2hvdHNfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc25hcHNob3RzRW5hYmxlZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc25hcHNob3RzRW5hYmxlZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc25hcHNob3RzRW5hYmxlZCA9IHRoaXMuX3NuYXBzaG90c0VuYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc25hcHNob3RzRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc25hcHNob3RzRW5hYmxlZCA9IHZhbHVlLnNuYXBzaG90c0VuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gc25hcHNob3RzX2VuYWJsZWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc25hcHNob3RzRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc25hcHNob3RzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzbmFwc2hvdHNfZW5hYmxlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuYXBzaG90c0VuYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NuYXBzaG90c0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25hcHNob3RzRW5hYmxlZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdHNFbmFibGVkO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJvcGVydHlHcm91cElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwcm9wZXJ0eU1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcGVydHlfZ3JvdXBfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJvcGVydHlHcm91cElkKSxcbiAgICBwcm9wZXJ0eV9tYXA6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvcGVydHlNYXApLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByb3BlcnR5R3JvdXA6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcGVydHlfZ3JvdXA6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNQcm9wZXJ0eUdyb3VwVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvcGVydHlHcm91cCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9wcm9wZXJ0eUdyb3VwKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wcm9wZXJ0eUdyb3VwID0gdGhpcy5fcHJvcGVydHlHcm91cDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcHJvcGVydHlHcm91cCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcHJvcGVydHlHcm91cCA9IHZhbHVlLnByb3BlcnR5R3JvdXA7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvcGVydHlfZ3JvdXAgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcHJvcGVydHlHcm91cD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cFtdOyBcbiAgcHVibGljIGdldCBwcm9wZXJ0eUdyb3VwKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9wZXJ0eV9ncm91cCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHByb3BlcnR5R3JvdXAodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzUHJvcGVydHlHcm91cFtdKSB7XG4gICAgdGhpcy5fcHJvcGVydHlHcm91cCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwcm9wZXJ0eUdyb3VwSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BlcnR5R3JvdXA7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2hlY2twb2ludEludGVydmFsPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2hlY2twb2ludGluZ0VuYWJsZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb25maWd1cmF0aW9uVHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG1pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2hlY2twb2ludF9pbnRlcnZhbDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jaGVja3BvaW50SW50ZXJ2YWwpLFxuICAgIGNoZWNrcG9pbnRpbmdfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2hlY2twb2ludGluZ0VuYWJsZWQpLFxuICAgIGNvbmZpZ3VyYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25maWd1cmF0aW9uVHlwZSksXG4gICAgbWluX3BhdXNlX2JldHdlZW5fY2hlY2twb2ludHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkNoZWNrcG9pbnRDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jaGVja3BvaW50SW50ZXJ2YWwpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNoZWNrcG9pbnRJbnRlcnZhbCA9IHRoaXMuX2NoZWNrcG9pbnRJbnRlcnZhbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NoZWNrcG9pbnRpbmdFbmFibGVkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jaGVja3BvaW50aW5nRW5hYmxlZCA9IHRoaXMuX2NoZWNrcG9pbnRpbmdFbmFibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29uZmlndXJhdGlvblR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbmZpZ3VyYXRpb25UeXBlID0gdGhpcy5fY29uZmlndXJhdGlvblR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9taW5QYXVzZUJldHdlZW5DaGVja3BvaW50cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHMgPSB0aGlzLl9taW5QYXVzZUJldHdlZW5DaGVja3BvaW50cztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25DaGVja3BvaW50Q29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRpbmdFbmFibGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29uZmlndXJhdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9taW5QYXVzZUJldHdlZW5DaGVja3BvaW50cyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY2hlY2twb2ludEludGVydmFsID0gdmFsdWUuY2hlY2twb2ludEludGVydmFsO1xuICAgICAgdGhpcy5fY2hlY2twb2ludGluZ0VuYWJsZWQgPSB2YWx1ZS5jaGVja3BvaW50aW5nRW5hYmxlZDtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdmFsdWUuY29uZmlndXJhdGlvblR5cGU7XG4gICAgICB0aGlzLl9taW5QYXVzZUJldHdlZW5DaGVja3BvaW50cyA9IHZhbHVlLm1pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNoZWNrcG9pbnRfaW50ZXJ2YWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jaGVja3BvaW50SW50ZXJ2YWw/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IGNoZWNrcG9pbnRJbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NoZWNrcG9pbnRfaW50ZXJ2YWwnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNoZWNrcG9pbnRJbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludEludGVydmFsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2hlY2twb2ludEludGVydmFsKCkge1xuICAgIHRoaXMuX2NoZWNrcG9pbnRJbnRlcnZhbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludEludGVydmFsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrcG9pbnRJbnRlcnZhbDtcbiAgfVxuXG4gIC8vIGNoZWNrcG9pbnRpbmdfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NoZWNrcG9pbnRpbmdFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjaGVja3BvaW50aW5nRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjaGVja3BvaW50aW5nX2VuYWJsZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjaGVja3BvaW50aW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fY2hlY2twb2ludGluZ0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGVja3BvaW50aW5nRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9jaGVja3BvaW50aW5nRW5hYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2hlY2twb2ludGluZ0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2twb2ludGluZ0VuYWJsZWQ7XG4gIH1cblxuICAvLyBjb25maWd1cmF0aW9uX3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY29uZmlndXJhdGlvblR5cGU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29uZmlndXJhdGlvbl90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCBjb25maWd1cmF0aW9uVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29uZmlndXJhdGlvblR5cGUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29uZmlndXJhdGlvblR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvblR5cGU7XG4gIH1cblxuICAvLyBtaW5fcGF1c2VfYmV0d2Vlbl9jaGVja3BvaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21pblBhdXNlQmV0d2VlbkNoZWNrcG9pbnRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBtaW5QYXVzZUJldHdlZW5DaGVja3BvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbl9wYXVzZV9iZXR3ZWVuX2NoZWNrcG9pbnRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5QYXVzZUJldHdlZW5DaGVja3BvaW50cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5QYXVzZUJldHdlZW5DaGVja3BvaW50cygpIHtcbiAgICB0aGlzLl9taW5QYXVzZUJldHdlZW5DaGVja3BvaW50cyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluUGF1c2VCZXR3ZWVuQ2hlY2twb2ludHM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25UeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dMZXZlbD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWV0cmljc0xldmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29uZmlndXJhdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbmZpZ3VyYXRpb25UeXBlKSxcbiAgICBsb2dfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nTGV2ZWwpLFxuICAgIG1ldHJpY3NfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljc0xldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Nb25pdG9yaW5nQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29uZmlndXJhdGlvblR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbmZpZ3VyYXRpb25UeXBlID0gdGhpcy5fY29uZmlndXJhdGlvblR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2dMZXZlbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9nTGV2ZWwgPSB0aGlzLl9sb2dMZXZlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX21ldHJpY3NMZXZlbCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWV0cmljc0xldmVsID0gdGhpcy5fbWV0cmljc0xldmVsO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY29uZmlndXJhdGlvblR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9sb2dMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX21ldHJpY3NMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fY29uZmlndXJhdGlvblR5cGUgPSB2YWx1ZS5jb25maWd1cmF0aW9uVHlwZTtcbiAgICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsdWUubG9nTGV2ZWw7XG4gICAgICB0aGlzLl9tZXRyaWNzTGV2ZWwgPSB2YWx1ZS5tZXRyaWNzTGV2ZWw7XG4gICAgfVxuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmlndXJhdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlO1xuICB9XG5cbiAgLy8gbG9nX2xldmVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbG9nTGV2ZWw/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGxvZ0xldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2xldmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2dMZXZlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2dMZXZlbCgpIHtcbiAgICB0aGlzLl9sb2dMZXZlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nTGV2ZWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XG4gIH1cblxuICAvLyBtZXRyaWNzX2xldmVsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWV0cmljc0xldmVsPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBtZXRyaWNzTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNzX2xldmVsJyk7XG4gIH1cbiAgcHVibGljIHNldCBtZXRyaWNzTGV2ZWwodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX21ldHJpY3NMZXZlbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1ldHJpY3NMZXZlbCgpIHtcbiAgICB0aGlzLl9tZXRyaWNzTGV2ZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1ldHJpY3NMZXZlbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tZXRyaWNzTGV2ZWw7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXV0b1NjYWxpbmdFbmFibGVkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29uZmlndXJhdGlvblR5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbGxlbGlzbT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYWxsZWxpc21QZXJLcHU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhdXRvX3NjYWxpbmdfZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuYXV0b1NjYWxpbmdFbmFibGVkKSxcbiAgICBjb25maWd1cmF0aW9uX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZmlndXJhdGlvblR5cGUpLFxuICAgIHBhcmFsbGVsaXNtOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFsbGVsaXNtKSxcbiAgICBwYXJhbGxlbGlzbV9wZXJfa3B1OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFsbGVsaXNtUGVyS3B1KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hdXRvU2NhbGluZ0VuYWJsZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmF1dG9TY2FsaW5nRW5hYmxlZCA9IHRoaXMuX2F1dG9TY2FsaW5nRW5hYmxlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb25maWd1cmF0aW9uVHlwZSA9IHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFyYWxsZWxpc20pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnBhcmFsbGVsaXNtID0gdGhpcy5fcGFyYWxsZWxpc207XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJhbGxlbGlzbVBlcktwdSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYWxsZWxpc21QZXJLcHUgPSB0aGlzLl9wYXJhbGxlbGlzbVBlcktwdTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hdXRvU2NhbGluZ0VuYWJsZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcmFsbGVsaXNtID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFyYWxsZWxpc21QZXJLcHUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2F1dG9TY2FsaW5nRW5hYmxlZCA9IHZhbHVlLmF1dG9TY2FsaW5nRW5hYmxlZDtcbiAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdmFsdWUuY29uZmlndXJhdGlvblR5cGU7XG4gICAgICB0aGlzLl9wYXJhbGxlbGlzbSA9IHZhbHVlLnBhcmFsbGVsaXNtO1xuICAgICAgdGhpcy5fcGFyYWxsZWxpc21QZXJLcHUgPSB2YWx1ZS5wYXJhbGxlbGlzbVBlcktwdTtcbiAgICB9XG4gIH1cblxuICAvLyBhdXRvX3NjYWxpbmdfZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2F1dG9TY2FsaW5nRW5hYmxlZD86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYXV0b1NjYWxpbmdFbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2F1dG9fc2NhbGluZ19lbmFibGVkJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYXV0b1NjYWxpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9hdXRvU2NhbGluZ0VuYWJsZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBdXRvU2NhbGluZ0VuYWJsZWQoKSB7XG4gICAgdGhpcy5fYXV0b1NjYWxpbmdFbmFibGVkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhdXRvU2NhbGluZ0VuYWJsZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1NjYWxpbmdFbmFibGVkO1xuICB9XG5cbiAgLy8gY29uZmlndXJhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NvbmZpZ3VyYXRpb25UeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb25maWd1cmF0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbmZpZ3VyYXRpb25fdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29uZmlndXJhdGlvblR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbmZpZ3VyYXRpb25UeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25UeXBlO1xuICB9XG5cbiAgLy8gcGFyYWxsZWxpc20gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbGxlbGlzbT86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcGFyYWxsZWxpc20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwYXJhbGxlbGlzbScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYWxsZWxpc20odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyYWxsZWxpc20oKSB7XG4gICAgdGhpcy5fcGFyYWxsZWxpc20gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFsbGVsaXNtSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFsbGVsaXNtO1xuICB9XG5cbiAgLy8gcGFyYWxsZWxpc21fcGVyX2twdSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFsbGVsaXNtUGVyS3B1PzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBwYXJhbGxlbGlzbVBlcktwdSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BhcmFsbGVsaXNtX3Blcl9rcHUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFsbGVsaXNtUGVyS3B1KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYXJhbGxlbGlzbVBlcktwdSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFsbGVsaXNtUGVyS3B1KCkge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtUGVyS3B1ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbGxlbGlzbVBlcktwdUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbGxlbGlzbVBlcktwdTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjaGVja3BvaW50Q29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25DaGVja3BvaW50Q29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtb25pdG9yaW5nQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Nb25pdG9yaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2hlY2twb2ludF9jb25maWd1cmF0aW9uOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNoZWNrcG9pbnRDb25maWd1cmF0aW9uKSxcbiAgICBtb25pdG9yaW5nX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Nb25pdG9yaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEubW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24pLFxuICAgIHBhcmFsbGVsaXNtX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25QYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2hlY2twb2ludENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNoZWNrcG9pbnRDb25maWd1cmF0aW9uID0gdGhpcy5fY2hlY2twb2ludENvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb25pdG9yaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24gPSB0aGlzLl9tb25pdG9yaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYWxsZWxpc21Db25maWd1cmF0aW9uID0gdGhpcy5fcGFyYWxsZWxpc21Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tb25pdG9yaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGFyYWxsZWxpc21Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5jaGVja3BvaW50Q29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX21vbml0b3JpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tb25pdG9yaW5nQ29uZmlndXJhdGlvbjtcbiAgICAgIHRoaXMuX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUucGFyYWxsZWxpc21Db25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNoZWNrcG9pbnRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jaGVja3BvaW50Q29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uQ2hlY2twb2ludENvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2hlY2twb2ludF9jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGNoZWNrcG9pbnRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja3BvaW50Q29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0Q2hlY2twb2ludENvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25DaGVja3BvaW50Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2NoZWNrcG9pbnRDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDaGVja3BvaW50Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9jaGVja3BvaW50Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjaGVja3BvaW50Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja3BvaW50Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gbW9uaXRvcmluZ19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX21vbml0b3JpbmdDb25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Nb25pdG9yaW5nQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJtb25pdG9yaW5nX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgbW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbml0b3JpbmdDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRNb25pdG9yaW5nQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk1vbml0b3JpbmdDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fbW9uaXRvcmluZ0NvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1vbml0b3JpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX21vbml0b3JpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG1vbml0b3JpbmdDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vbml0b3JpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBwYXJhbGxlbGlzbV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uUGFyYWxsZWxpc21Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInBhcmFsbGVsaXNtX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcGFyYWxsZWxpc21Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvblBhcmFsbGVsaXNtQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFyYWxsZWxpc21Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3BhcmFsbGVsaXNtQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBwYXJhbGxlbGlzbUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYWxsZWxpc21Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBsaWNhdGlvblJlc3RvcmVUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzbmFwc2hvdE5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcHBsaWNhdGlvbl9yZXN0b3JlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25SZXN0b3JlVHlwZSksXG4gICAgc25hcHNob3RfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbmFwc2hvdE5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZVR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFwcGxpY2F0aW9uUmVzdG9yZVR5cGUgPSB0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVUeXBlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc25hcHNob3ROYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zbmFwc2hvdE5hbWUgPSB0aGlzLl9zbmFwc2hvdE5hbWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NuYXBzaG90TmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlVHlwZSA9IHZhbHVlLmFwcGxpY2F0aW9uUmVzdG9yZVR5cGU7XG4gICAgICB0aGlzLl9zbmFwc2hvdE5hbWUgPSB2YWx1ZS5zbmFwc2hvdE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fcmVzdG9yZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZXN0b3JlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25SZXN0b3JlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FwcGxpY2F0aW9uX3Jlc3RvcmVfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgYXBwbGljYXRpb25SZXN0b3JlVHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlVHlwZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGxpY2F0aW9uUmVzdG9yZVR5cGUoKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlVHlwZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25SZXN0b3JlVHlwZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVUeXBlO1xuICB9XG5cbiAgLy8gc25hcHNob3RfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zbmFwc2hvdE5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNuYXBzaG90TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NuYXBzaG90X25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNuYXBzaG90TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25hcHNob3ROYW1lID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U25hcHNob3ROYW1lKCkge1xuICAgIHRoaXMuX3NuYXBzaG90TmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc25hcHNob3ROYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NuYXBzaG90TmFtZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25GbGlua1J1bkNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYWxsb3dOb25SZXN0b3JlZFN0YXRlPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWxsb3dfbm9uX3Jlc3RvcmVkX3N0YXRlOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5hbGxvd05vblJlc3RvcmVkU3RhdGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25GbGlua1J1bkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvd05vblJlc3RvcmVkU3RhdGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmFsbG93Tm9uUmVzdG9yZWRTdGF0ZSA9IHRoaXMuX2FsbG93Tm9uUmVzdG9yZWRTdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FsbG93Tm9uUmVzdG9yZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWxsb3dOb25SZXN0b3JlZFN0YXRlID0gdmFsdWUuYWxsb3dOb25SZXN0b3JlZFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFsbG93X25vbl9yZXN0b3JlZF9zdGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93Tm9uUmVzdG9yZWRTdGF0ZT86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgYWxsb3dOb25SZXN0b3JlZFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2FsbG93X25vbl9yZXN0b3JlZF9zdGF0ZScpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93Tm9uUmVzdG9yZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fYWxsb3dOb25SZXN0b3JlZFN0YXRlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dOb25SZXN0b3JlZFN0YXRlKCkge1xuICAgIHRoaXMuX2FsbG93Tm9uUmVzdG9yZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYWxsb3dOb25SZXN0b3JlZFN0YXRlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93Tm9uUmVzdG9yZWRTdGF0ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZsaW5rUnVuQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFwcGxpY2F0aW9uX3Jlc3RvcmVfY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbiksXG4gICAgZmxpbmtfcnVuX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbkZsaW5rUnVuQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZmxpbmtSdW5Db25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbiA9IHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9mbGlua1J1bkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmZsaW5rUnVuQ29uZmlndXJhdGlvbiA9IHRoaXMuX2ZsaW5rUnVuQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZsaW5rUnVuQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fZmxpbmtSdW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5mbGlua1J1bkNvbmZpZ3VyYXRpb247XG4gICAgfVxuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fcmVzdG9yZV9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhcHBsaWNhdGlvbl9yZXN0b3JlX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uQXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEFwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25SZXN0b3JlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvblJlc3RvcmVDb25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uUmVzdG9yZUNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGZsaW5rX3J1bl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZsaW5rUnVuQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb25GbGlua1J1bkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmxpbmtfcnVuX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgZmxpbmtSdW5Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mbGlua1J1bkNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEZsaW5rUnVuQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uRmxpbmtSdW5Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZmxpbmtSdW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGbGlua1J1bkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgdGhpcy5fZmxpbmtSdW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZsaW5rUnVuQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9mbGlua1J1bkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQYXJhbGxlbGlzbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY291bnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQYXJhbGxlbGlzbVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc20pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb3VudDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jb3VudCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jb3VudCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY291bnQgPSB0aGlzLl9jb3VudDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY291bnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvdW50ID0gdmFsdWUuY291bnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY291bnQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb3VudD86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdjb3VudCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgY291bnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q291bnQoKSB7XG4gICAgdGhpcy5fY291bnQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvdW50SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3JUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3Nvcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3JPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3NvciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXJuID0gdGhpcy5fcmVzb3VyY2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dExhbWJkYVByb2Nlc3NvcjogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3Nvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlucHV0X2xhbWJkYV9wcm9jZXNzb3I6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uSW5wdXRMYW1iZGFQcm9jZXNzb3JUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0TGFtYmRhUHJvY2Vzc29yKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnB1dExhbWJkYVByb2Nlc3NvciA9IHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pbnB1dExhbWJkYVByb2Nlc3Nvci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9pbnB1dExhbWJkYVByb2Nlc3Nvci5pbnRlcm5hbFZhbHVlID0gdmFsdWUuaW5wdXRMYW1iZGFQcm9jZXNzb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5wdXRfbGFtYmRhX3Byb2Nlc3NvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pbnB1dExhbWJkYVByb2Nlc3NvciA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbklucHV0TGFtYmRhUHJvY2Vzc29yT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlucHV0X2xhbWJkYV9wcm9jZXNzb3JcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaW5wdXRMYW1iZGFQcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yO1xuICB9XG4gIHB1YmxpYyBwdXRJbnB1dExhbWJkYVByb2Nlc3Nvcih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dExhbWJkYVByb2Nlc3Nvcikge1xuICAgIHRoaXMuX2lucHV0TGFtYmRhUHJvY2Vzc29yLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRMYW1iZGFQcm9jZXNzb3JJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMYW1iZGFQcm9jZXNzb3IuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXBwaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FsVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkQ29sdW1uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkQ29sdW1uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWFwcGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXBwaW5nKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHNxbF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkQ29sdW1uRGVsaW1pdGVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkUm93RGVsaW1pdGVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfY29sdW1uX2RlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIpLFxuICAgIHJlY29yZF9yb3dfZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZFJvd0RlbGltaXRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZFJvd0RlbGltaXRlciA9IHRoaXMuX3JlY29yZFJvd0RlbGltaXRlcjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHZhbHVlLnJlY29yZENvbHVtbkRlbGltaXRlcjtcbiAgICAgIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciA9IHZhbHVlLnJlY29yZFJvd0RlbGltaXRlcjtcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfY29sdW1uX2RlbGltaXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZENvbHVtbkRlbGltaXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9jb2x1bW5fZGVsaW1pdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRDb2x1bW5EZWxpbWl0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5EZWxpbWl0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyO1xuICB9XG5cbiAgLy8gcmVjb3JkX3Jvd19kZWxpbWl0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkUm93RGVsaW1pdGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRSb3dEZWxpbWl0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcm93X2RlbGltaXRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkUm93RGVsaW1pdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93RGVsaW1pdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRSb3dQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfcm93X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dQYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRSb3dQYXRoID0gdGhpcy5fcmVjb3JkUm93UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHZhbHVlLnJlY29yZFJvd1BhdGg7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX3Jvd19wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZFJvd1BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcm93X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZFJvd1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZFJvd1BhdGggPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93UGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRSb3dQYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjc3ZNYXBwaW5nUGFyYW1ldGVycz86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganNvbk1hcHBpbmdQYXJhbWV0ZXJzPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5jc3ZNYXBwaW5nUGFyYW1ldGVycyksXG4gICAganNvbl9tYXBwaW5nX3BhcmFtZXRlcnM6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5qc29uTWFwcGluZ1BhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNzdk1hcHBpbmdQYXJhbWV0ZXJzID0gdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmpzb25NYXBwaW5nUGFyYW1ldGVycyA9IHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jc3ZNYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmpzb25NYXBwaW5nUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyBjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3N2X21hcHBpbmdfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjc3ZNYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dENzdk1hcHBpbmdQYXJhbWV0ZXJzKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENzdk1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzdk1hcHBpbmdQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBqc29uX21hcHBpbmdfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qc29uTWFwcGluZ1BhcmFtZXRlcnMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwianNvbl9tYXBwaW5nX3BhcmFtZXRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQganNvbk1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dEpzb25NYXBwaW5nUGFyYW1ldGVycyh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEpzb25NYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQganNvbk1hcHBpbmdQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRGb3JtYXRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFwcGluZ1BhcmFtZXRlcnM6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2Zvcm1hdF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdFR5cGUpLFxuICAgIG1hcHBpbmdfcGFyYW1ldGVyczoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkRm9ybWF0VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkRm9ybWF0VHlwZSA9IHRoaXMuX3JlY29yZEZvcm1hdFR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFwcGluZ1BhcmFtZXRlcnMgPSB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlID0gdmFsdWUucmVjb3JkRm9ybWF0VHlwZTtcbiAgICAgIHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tYXBwaW5nUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfZm9ybWF0X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkRm9ybWF0VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9mb3JtYXRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkRm9ybWF0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkRm9ybWF0VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdFR5cGU7XG4gIH1cblxuICAvLyBtYXBwaW5nX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWFwcGluZ1BhcmFtZXRlcnMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWFwcGluZ19wYXJhbWV0ZXJzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0TWFwcGluZ1BhcmFtZXRlcnModmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXBwaW5nUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRFbmNvZGluZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRDb2x1bW46IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZEZvcm1hdDogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2VuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEVuY29kaW5nKSxcbiAgICByZWNvcmRfY29sdW1uOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVJlY29yZENvbHVtblRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlY29yZENvbHVtbiksXG4gICAgcmVjb3JkX2Zvcm1hdDoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0VG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRGb3JtYXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRFbmNvZGluZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkRW5jb2RpbmcgPSB0aGlzLl9yZWNvcmRFbmNvZGluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlY29yZENvbHVtbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkQ29sdW1uID0gdGhpcy5fcmVjb3JkQ29sdW1uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkRm9ybWF0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRGb3JtYXQgPSB0aGlzLl9yZWNvcmRGb3JtYXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHZhbHVlLnJlY29yZEVuY29kaW5nO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1uID0gdmFsdWUucmVjb3JkQ29sdW1uO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZWNvcmRGb3JtYXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX2VuY29kaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlY29yZEVuY29kaW5nPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRFbmNvZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9lbmNvZGluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkRW5jb2RpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVjb3JkRW5jb2RpbmcoKSB7XG4gICAgdGhpcy5fcmVjb3JkRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZEVuY29kaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEVuY29kaW5nO1xuICB9XG5cbiAgLy8gcmVjb3JkX2NvbHVtbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRDb2x1bW4/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW5bXTsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWNvcmRfY29sdW1uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkQ29sdW1uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWFSZWNvcmRDb2x1bW5bXSkge1xuICAgIHRoaXMuX3JlY29yZENvbHVtbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkQ29sdW1uO1xuICB9XG5cbiAgLy8gcmVjb3JkX2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRGb3JtYXQgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlY29yZF9mb3JtYXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRGb3JtYXQ7XG4gIH1cbiAgcHVibGljIHB1dFJlY29yZEZvcm1hdCh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hUmVjb3JkRm9ybWF0KSB7XG4gICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dFN0YXJ0aW5nUG9zaXRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5wdXRfc3RhcnRpbmdfcG9zaXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5wdXRTdGFydGluZ1Bvc2l0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNGaXJlaG9zZUlucHV0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVzb3VyY2VBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlc291cmNlQXJuID0gdGhpcy5fcmVzb3VyY2VBcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc0ZpcmVob3NlSW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyByZXNvdXJjZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXRPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc1N0cmVhbXNJbnB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWVQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dFBhcmFsbGVsaXNtPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UGFyYWxsZWxpc207XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlucHV0U2NoZW1hOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0SW5wdXRTY2hlbWE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc0ZpcmVob3NlSW5wdXQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc0ZpcmVob3NlSW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkga2luZXNpc1N0cmVhbXNJbnB1dD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZV9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZVByZWZpeCksXG4gICAgaW5wdXRfcGFyYWxsZWxpc206IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dFBhcmFsbGVsaXNtKSxcbiAgICBpbnB1dF9wcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSxcbiAgICBpbnB1dF9zY2hlbWE6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYVRvVGVycmFmb3JtKHN0cnVjdCEuaW5wdXRTY2hlbWEpLFxuICAgIGlucHV0X3N0YXJ0aW5nX3Bvc2l0aW9uX2NvbmZpZ3VyYXRpb246IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybSkoc3RydWN0IS5pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uKSxcbiAgICBraW5lc2lzX2ZpcmVob3NlX2lucHV0OiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0S2luZXNpc0ZpcmVob3NlSW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNGaXJlaG9zZUlucHV0KSxcbiAgICBraW5lc2lzX3N0cmVhbXNfaW5wdXQ6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0VG9UZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzU3RyZWFtc0lucHV0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9uYW1lUHJlZml4KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lUHJlZml4ID0gdGhpcy5fbmFtZVByZWZpeDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lucHV0UGFyYWxsZWxpc20/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0UGFyYWxsZWxpc20gPSB0aGlzLl9pbnB1dFBhcmFsbGVsaXNtPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbiA9IHRoaXMuX2lucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnB1dFNjaGVtYT8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaW5wdXRTY2hlbWEgPSB0aGlzLl9pbnB1dFNjaGVtYT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fa2luZXNpc0ZpcmVob3NlSW5wdXQ/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmtpbmVzaXNGaXJlaG9zZUlucHV0ID0gdGhpcy5fa2luZXNpc0ZpcmVob3NlSW5wdXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9raW5lc2lzU3RyZWFtc0lucHV0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5raW5lc2lzU3RyZWFtc0lucHV0ID0gdGhpcy5fa2luZXNpc1N0cmVhbXNJbnB1dD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9uYW1lUHJlZml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5wdXRQYXJhbGxlbGlzbS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faW5wdXRTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fa2luZXNpc1N0cmVhbXNJbnB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9uYW1lUHJlZml4ID0gdmFsdWUubmFtZVByZWZpeDtcbiAgICAgIHRoaXMuX2lucHV0UGFyYWxsZWxpc20uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlucHV0UGFyYWxsZWxpc207XG4gICAgICB0aGlzLl9pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5faW5wdXRTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlucHV0U2NoZW1hO1xuICAgICAgdGhpcy5faW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbiA9IHZhbHVlLmlucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dC5pbnRlcm5hbFZhbHVlID0gdmFsdWUua2luZXNpc0ZpcmVob3NlSW5wdXQ7XG4gICAgICB0aGlzLl9raW5lc2lzU3RyZWFtc0lucHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5raW5lc2lzU3RyZWFtc0lucHV0O1xuICAgIH1cbiAgfVxuXG4gIC8vIG5hbWVfcHJlZml4IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWVQcmVmaXg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lX3ByZWZpeCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZVByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZVByZWZpeCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lUHJlZml4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVQcmVmaXg7XG4gIH1cblxuICAvLyBpbnB1dF9wYXJhbGxlbGlzbSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dFBhcmFsbGVsaXNtID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlucHV0X3BhcmFsbGVsaXNtXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlucHV0UGFyYWxsZWxpc20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UGFyYWxsZWxpc207XG4gIH1cbiAgcHVibGljIHB1dElucHV0UGFyYWxsZWxpc20odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFBhcmFsbGVsaXNtKSB7XG4gICAgdGhpcy5faW5wdXRQYXJhbGxlbGlzbS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRQYXJhbGxlbGlzbSgpIHtcbiAgICB0aGlzLl9pbnB1dFBhcmFsbGVsaXNtLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlucHV0UGFyYWxsZWxpc21JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRQYXJhbGxlbGlzbS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW5wdXRfcHJvY2Vzc2luZ19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2lucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiaW5wdXRfcHJvY2Vzc2luZ19jb25maWd1cmF0aW9uXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dElucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5faW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9pbnB1dFByb2Nlc3NpbmdDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlucHV0UHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRQcm9jZXNzaW5nQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW5wdXRfc2NoZW1hIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lucHV0U2NoZW1hID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFNjaGVtYU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJpbnB1dF9zY2hlbWFcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgaW5wdXRTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0U2NoZW1hO1xuICB9XG4gIHB1YmxpYyBwdXRJbnB1dFNjaGVtYSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U2NoZW1hKSB7XG4gICAgdGhpcy5faW5wdXRTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dFNjaGVtYUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFNjaGVtYS5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gaW5wdXRfc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dElucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb25bXTsgXG4gIHB1YmxpYyBnZXQgaW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5wdXRfc3RhcnRpbmdfcG9zaXRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGlucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb24odmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRJbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uW10pIHtcbiAgICB0aGlzLl9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXRTdGFydGluZ1Bvc2l0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9pbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dFN0YXJ0aW5nUG9zaXRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0U3RhcnRpbmdQb3NpdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cblxuICAvLyBraW5lc2lzX2ZpcmVob3NlX2lucHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tpbmVzaXNGaXJlaG9zZUlucHV0ID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dE91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJraW5lc2lzX2ZpcmVob3NlX2lucHV0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNGaXJlaG9zZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dDtcbiAgfVxuICBwdWJsaWMgcHV0S2luZXNpc0ZpcmVob3NlSW5wdXQodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzRmlyZWhvc2VJbnB1dCkge1xuICAgIHRoaXMuX2tpbmVzaXNGaXJlaG9zZUlucHV0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRLaW5lc2lzRmlyZWhvc2VJbnB1dCgpIHtcbiAgICB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBraW5lc2lzRmlyZWhvc2VJbnB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9raW5lc2lzRmlyZWhvc2VJbnB1dC5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8ga2luZXNpc19zdHJlYW1zX2lucHV0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2tpbmVzaXNTdHJlYW1zSW5wdXQgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dEtpbmVzaXNTdHJlYW1zSW5wdXRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwia2luZXNpc19zdHJlYW1zX2lucHV0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGtpbmVzaXNTdHJlYW1zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tpbmVzaXNTdHJlYW1zSW5wdXQ7XG4gIH1cbiAgcHVibGljIHB1dEtpbmVzaXNTdHJlYW1zSW5wdXQodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRLaW5lc2lzU3RyZWFtc0lucHV0KSB7XG4gICAgdGhpcy5fa2luZXNpc1N0cmVhbXNJbnB1dC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0S2luZXNpc1N0cmVhbXNJbnB1dCgpIHtcbiAgICB0aGlzLl9raW5lc2lzU3RyZWFtc0lucHV0LmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGtpbmVzaXNTdHJlYW1zSW5wdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fa2luZXNpc1N0cmVhbXNJbnB1dC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkRm9ybWF0VHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWFPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2Zvcm1hdF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0RGVzdGluYXRpb25TY2hlbWEgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3JlY29yZEZvcm1hdFR5cGUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZEZvcm1hdFR5cGUgPSB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB2YWx1ZS5yZWNvcmRGb3JtYXRUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlY29yZF9mb3JtYXRfdHlwZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRGb3JtYXRUeXBlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVjb3JkX2Zvcm1hdF90eXBlJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRGb3JtYXRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZEZvcm1hdFR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkRm9ybWF0VHlwZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dE91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc0ZpcmVob3NlT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXRPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXQgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3Jlc291cmNlQXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZXNvdXJjZUFybiA9IHRoaXMuX3Jlc291cmNlQXJuO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzRmlyZWhvc2VPdXRwdXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyByZXNvdXJjZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXNvdXJjZUFybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dFRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc1N0cmVhbXNPdXRwdXRPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzb3VyY2VfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlc291cmNlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc1N0cmVhbXNPdXRwdXQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZXNvdXJjZUFybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZS5yZXNvdXJjZUFybjtcbiAgICB9XG4gIH1cblxuICAvLyByZXNvdXJjZV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVzb3VyY2VBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVzb3VyY2VfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXNvdXJjZUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb3VyY2VBcm47XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMYW1iZGFPdXRwdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVzb3VyY2VBcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMYW1iZGFPdXRwdXRPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExhbWJkYU91dHB1dCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc291cmNlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZXNvdXJjZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0IHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZXNvdXJjZUFybikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVzb3VyY2VBcm4gPSB0aGlzLl9yZXNvdXJjZUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0TGFtYmRhT3V0cHV0IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzb3VyY2VBcm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWUucmVzb3VyY2VBcm47XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzb3VyY2VfYXJuIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jlc291cmNlQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZXNvdXJjZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3Jlc291cmNlX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVzb3VyY2VBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc291cmNlQXJuID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlc291cmNlQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlQXJuO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc3RpbmF0aW9uU2NoZW1hOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dERlc3RpbmF0aW9uU2NoZW1hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtpbmVzaXNGaXJlaG9zZU91dHB1dD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0S2luZXNpc0ZpcmVob3NlT3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGtpbmVzaXNTdHJlYW1zT3V0cHV0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRLaW5lc2lzU3RyZWFtc091dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsYW1iZGFPdXRwdXQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dExhbWJkYU91dHB1dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIGRlc3RpbmF0aW9uX3NjaGVtYToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXREZXN0aW5hdGlvblNjaGVtYVRvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25TY2hlbWEpLFxuICAgIGtpbmVzaXNfZmlyZWhvc2Vfb3V0cHV0OiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNGaXJlaG9zZU91dHB1dFRvVGVycmFmb3JtKHN0cnVjdCEua2luZXNpc0ZpcmVob3NlT3V0cHV0KSxcbiAgICBraW5lc2lzX3N0cmVhbXNfb3V0cHV0OiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dEtpbmVzaXNTdHJlYW1zT3V0cHV0VG9UZXJyYWZvcm0oc3RydWN0IS5raW5lc2lzU3RyZWFtc091dHB1dCksXG4gICAgbGFtYmRhX291dHB1dDoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRMYW1iZGFPdXRwdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmxhbWJkYU91dHB1dCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXBwaW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3FsVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkQ29sdW1uVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkQ29sdW1uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbWFwcGluZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tYXBwaW5nKSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHNxbF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNxbFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkQ29sdW1uRGVsaW1pdGVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVjb3JkUm93RGVsaW1pdGVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfY29sdW1uX2RlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIpLFxuICAgIHJlY29yZF9yb3dfZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZFJvd0RlbGltaXRlciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNDc3ZNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJlY29yZFJvd0RlbGltaXRlciA9IHRoaXMuX3JlY29yZFJvd0RlbGltaXRlcjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnMgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRDb2x1bW5EZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHZhbHVlLnJlY29yZENvbHVtbkRlbGltaXRlcjtcbiAgICAgIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlciA9IHZhbHVlLnJlY29yZFJvd0RlbGltaXRlcjtcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfY29sdW1uX2RlbGltaXRlciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRDb2x1bW5EZWxpbWl0ZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZENvbHVtbkRlbGltaXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9jb2x1bW5fZGVsaW1pdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCByZWNvcmRDb2x1bW5EZWxpbWl0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZENvbHVtbkRlbGltaXRlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5EZWxpbWl0ZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkQ29sdW1uRGVsaW1pdGVyO1xuICB9XG5cbiAgLy8gcmVjb3JkX3Jvd19kZWxpbWl0ZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkUm93RGVsaW1pdGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRSb3dEZWxpbWl0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcm93X2RlbGltaXRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkUm93RGVsaW1pdGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWNvcmRSb3dEZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93RGVsaW1pdGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZFJvd0RlbGltaXRlcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRSb3dQYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0pzb25NYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRfcm93X3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVjb3JkUm93UGF0aCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRSb3dQYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRSb3dQYXRoID0gdGhpcy5fcmVjb3JkUm93UGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fcmVjb3JkUm93UGF0aCA9IHZhbHVlLnJlY29yZFJvd1BhdGg7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX3Jvd19wYXRoIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlY29yZFJvd1BhdGg/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJlY29yZFJvd1BhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWNvcmRfcm93X3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJlY29yZFJvd1BhdGgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZFJvd1BhdGggPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkUm93UGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRSb3dQYXRoO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjc3ZNYXBwaW5nUGFyYW1ldGVycz86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganNvbk1hcHBpbmdQYXJhbWV0ZXJzPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5jc3ZNYXBwaW5nUGFyYW1ldGVycyksXG4gICAganNvbl9tYXBwaW5nX3BhcmFtZXRlcnM6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzSnNvbk1hcHBpbmdQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0IS5qc29uTWFwcGluZ1BhcmFtZXRlcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVycyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNzdk1hcHBpbmdQYXJhbWV0ZXJzID0gdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnM/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmpzb25NYXBwaW5nUGFyYW1ldGVycyA9IHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jc3ZNYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdmFsdWUuY3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gICAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmpzb25NYXBwaW5nUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyBjc3ZfbWFwcGluZ19wYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzQ3N2TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3N2X21hcHBpbmdfcGFyYW1ldGVyc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBjc3ZNYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dENzdk1hcHBpbmdQYXJhbWV0ZXJzKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRGb3JtYXRNYXBwaW5nUGFyYW1ldGVyc0Nzdk1hcHBpbmdQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fY3N2TWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENzdk1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzdk1hcHBpbmdQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nzdk1hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBqc29uX21hcHBpbmdfcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qc29uTWFwcGluZ1BhcmFtZXRlcnMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwianNvbl9tYXBwaW5nX3BhcmFtZXRlcnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQganNvbk1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnM7XG4gIH1cbiAgcHVibGljIHB1dEpzb25NYXBwaW5nUGFyYW1ldGVycyh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNKc29uTWFwcGluZ1BhcmFtZXRlcnMpIHtcbiAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEpzb25NYXBwaW5nUGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9qc29uTWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQganNvbk1hcHBpbmdQYXJhbWV0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25NYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRGb3JtYXRUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWFwcGluZ1BhcmFtZXRlcnM6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0VG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2Zvcm1hdF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEZvcm1hdFR5cGUpLFxuICAgIG1hcHBpbmdfcGFyYW1ldGVyczoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcHBpbmdQYXJhbWV0ZXJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVjb3JkRm9ybWF0VHlwZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkRm9ybWF0VHlwZSA9IHRoaXMuX3JlY29yZEZvcm1hdFR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubWFwcGluZ1BhcmFtZXRlcnMgPSB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRGb3JtYXRUeXBlID0gdmFsdWUucmVjb3JkRm9ybWF0VHlwZTtcbiAgICAgIHRoaXMuX21hcHBpbmdQYXJhbWV0ZXJzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5tYXBwaW5nUGFyYW1ldGVycztcbiAgICB9XG4gIH1cblxuICAvLyByZWNvcmRfZm9ybWF0X3R5cGUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfcmVjb3JkRm9ybWF0VHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9mb3JtYXRfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkRm9ybWF0VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVjb3JkRm9ybWF0VHlwZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRGb3JtYXRUeXBlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdFR5cGU7XG4gIH1cblxuICAvLyBtYXBwaW5nX3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbWFwcGluZ1BhcmFtZXRlcnMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0TWFwcGluZ1BhcmFtZXRlcnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwibWFwcGluZ19wYXJhbWV0ZXJzXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IG1hcHBpbmdQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycztcbiAgfVxuICBwdWJsaWMgcHV0TWFwcGluZ1BhcmFtZXRlcnModmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZEZvcm1hdE1hcHBpbmdQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5fbWFwcGluZ1BhcmFtZXRlcnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXBwaW5nUGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXBwaW5nUGFyYW1ldGVycy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRFbmNvZGluZz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWNvcmRDb2x1bW46IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZENvbHVtbltdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlY29yZEZvcm1hdDogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVjb3JkX2VuY29kaW5nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlY29yZEVuY29kaW5nKSxcbiAgICByZWNvcmRfY29sdW1uOiBjZGt0Zi5saXN0TWFwcGVyKGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYVJlY29yZENvbHVtblRvVGVycmFmb3JtKShzdHJ1Y3QhLnJlY29yZENvbHVtbiksXG4gICAgcmVjb3JkX2Zvcm1hdDoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0VG9UZXJyYWZvcm0oc3RydWN0IS5yZWNvcmRGb3JtYXQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9yZWNvcmRFbmNvZGluZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkRW5jb2RpbmcgPSB0aGlzLl9yZWNvcmRFbmNvZGluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlY29yZENvbHVtbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucmVjb3JkQ29sdW1uID0gdGhpcy5fcmVjb3JkQ29sdW1uO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVjb3JkRm9ybWF0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWNvcmRGb3JtYXQgPSB0aGlzLl9yZWNvcmRGb3JtYXQ/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWEgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZENvbHVtbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWNvcmRFbmNvZGluZyA9IHZhbHVlLnJlY29yZEVuY29kaW5nO1xuICAgICAgdGhpcy5fcmVjb3JkQ29sdW1uID0gdmFsdWUucmVjb3JkQ29sdW1uO1xuICAgICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB2YWx1ZS5yZWNvcmRGb3JtYXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVjb3JkX2VuY29kaW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlY29yZEVuY29kaW5nPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCByZWNvcmRFbmNvZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JlY29yZF9lbmNvZGluZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkRW5jb2RpbmcodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3JlY29yZEVuY29kaW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVjb3JkRW5jb2RpbmcoKSB7XG4gICAgdGhpcy5fcmVjb3JkRW5jb2RpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlY29yZEVuY29kaW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEVuY29kaW5nO1xuICB9XG5cbiAgLy8gcmVjb3JkX2NvbHVtbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRDb2x1bW4/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5bXTsgXG4gIHB1YmxpYyBnZXQgcmVjb3JkQ29sdW1uKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWNvcmRfY29sdW1uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcmVjb3JkQ29sdW1uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFSZWNvcmRDb2x1bW5bXSkge1xuICAgIHRoaXMuX3JlY29yZENvbHVtbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWNvcmRDb2x1bW5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjb3JkQ29sdW1uO1xuICB9XG5cbiAgLy8gcmVjb3JkX2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9yZWNvcmRGb3JtYXQgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInJlY29yZF9mb3JtYXRcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNvcmRGb3JtYXQ7XG4gIH1cbiAgcHVibGljIHB1dFJlY29yZEZvcm1hdCh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUmVmZXJlbmNlU2NoZW1hUmVjb3JkRm9ybWF0KSB7XG4gICAgdGhpcy5fcmVjb3JkRm9ybWF0LmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcmVjb3JkRm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY29yZEZvcm1hdC5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGJ1Y2tldEFybjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZpbGVLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QXJuKSxcbiAgICBmaWxlX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlS2V5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0QXJuKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRBcm4gPSB0aGlzLl9idWNrZXRBcm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9maWxlS2V5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5maWxlS2V5ID0gdGhpcy5fZmlsZUtleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2J1Y2tldEFybiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbGVLZXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlLmJ1Y2tldEFybjtcbiAgICAgIHRoaXMuX2ZpbGVLZXkgPSB2YWx1ZS5maWxlS2V5O1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfYnVja2V0QXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBidWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfYXJuJyk7XG4gIH1cbiAgcHVibGljIHNldCBidWNrZXRBcm4odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2J1Y2tldEFybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRBcm5JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVja2V0QXJuO1xuICB9XG5cbiAgLy8gZmlsZV9rZXkgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfZmlsZUtleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZmlsZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfa2V5Jyk7XG4gIH1cbiAgcHVibGljIHNldCBmaWxlS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9maWxlS2V5ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZpbGVLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZUtleTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YWJsZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWZlcmVuY2VTY2hlbWE6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVJlZmVyZW5jZVNjaGVtYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzM1JlZmVyZW5jZURhdGFTb3VyY2U6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZU91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgICByZWZlcmVuY2Vfc2NoZW1hOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZmVyZW5jZVNjaGVtYSksXG4gICAgczNfcmVmZXJlbmNlX2RhdGFfc291cmNlOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VTM1JlZmVyZW5jZURhdGFTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzUmVmZXJlbmNlRGF0YVNvdXJjZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3RhYmxlTmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFibGVOYW1lID0gdGhpcy5fdGFibGVOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVmZXJlbmNlU2NoZW1hPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWZlcmVuY2VTY2hlbWEgPSB0aGlzLl9yZWZlcmVuY2VTY2hlbWE/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zM1JlZmVyZW5jZURhdGFTb3VyY2U/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnMzUmVmZXJlbmNlRGF0YVNvdXJjZSA9IHRoaXMuX3MzUmVmZXJlbmNlRGF0YVNvdXJjZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RhYmxlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZmVyZW5jZVNjaGVtYS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fczNSZWZlcmVuY2VEYXRhU291cmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3RhYmxlTmFtZSA9IHZhbHVlLnRhYmxlTmFtZTtcbiAgICAgIHRoaXMuX3JlZmVyZW5jZVNjaGVtYS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVmZXJlbmNlU2NoZW1hO1xuICAgICAgdGhpcy5fczNSZWZlcmVuY2VEYXRhU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zM1JlZmVyZW5jZURhdGFTb3VyY2U7XG4gICAgfVxuICB9XG5cbiAgLy8gdGFibGVfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF90YWJsZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHRhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhYmxlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhYmxlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGFibGVOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhYmxlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWJsZU5hbWU7XG4gIH1cblxuICAvLyByZWZlcmVuY2Vfc2NoZW1hIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3JlZmVyZW5jZVNjaGVtYSA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWFPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmVmZXJlbmNlX3NjaGVtYVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCByZWZlcmVuY2VTY2hlbWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVyZW5jZVNjaGVtYTtcbiAgfVxuICBwdWJsaWMgcHV0UmVmZXJlbmNlU2NoZW1hKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VSZWZlcmVuY2VTY2hlbWEpIHtcbiAgICB0aGlzLl9yZWZlcmVuY2VTY2hlbWEuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWZlcmVuY2VTY2hlbWFJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJlbmNlU2NoZW1hLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzM19yZWZlcmVuY2VfZGF0YV9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfczNSZWZlcmVuY2VEYXRhU291cmNlID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZVMzUmVmZXJlbmNlRGF0YVNvdXJjZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzM19yZWZlcmVuY2VfZGF0YV9zb3VyY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgczNSZWZlcmVuY2VEYXRhU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9zM1JlZmVyZW5jZURhdGFTb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dFMzUmVmZXJlbmNlRGF0YVNvdXJjZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlUzNSZWZlcmVuY2VEYXRhU291cmNlKSB7XG4gICAgdGhpcy5fczNSZWZlcmVuY2VEYXRhU291cmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgczNSZWZlcmVuY2VEYXRhU291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3MzUmVmZXJlbmNlRGF0YVNvdXJjZS5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbnB1dD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3V0cHV0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZWZlcmVuY2VEYXRhU291cmNlPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSB8IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5wdXQ6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXRUb1RlcnJhZm9ybShzdHJ1Y3QhLmlucHV0KSxcbiAgICBvdXRwdXQ6IGNka3RmLmxpc3RNYXBwZXIoa2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRUb1RlcnJhZm9ybSkoc3RydWN0IS5vdXRwdXQpLFxuICAgIHJlZmVyZW5jZV9kYXRhX3NvdXJjZToga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SZWZlcmVuY2VEYXRhU291cmNlVG9UZXJyYWZvcm0oc3RydWN0IS5yZWZlcmVuY2VEYXRhU291cmNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2lucHV0Py5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnB1dCA9IHRoaXMuX2lucHV0Py5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3V0cHV0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdXRwdXQgPSB0aGlzLl9vdXRwdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZWZlcmVuY2VEYXRhU291cmNlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWZlcmVuY2VEYXRhU291cmNlID0gdGhpcy5fcmVmZXJlbmNlRGF0YVNvdXJjZT8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5faW5wdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX291dHB1dCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5faW5wdXQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmlucHV0O1xuICAgICAgdGhpcy5fb3V0cHV0ID0gdmFsdWUub3V0cHV0O1xuICAgICAgdGhpcy5fcmVmZXJlbmNlRGF0YVNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUucmVmZXJlbmNlRGF0YVNvdXJjZTtcbiAgICB9XG4gIH1cblxuICAvLyBpbnB1dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dCA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbklucHV0T3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImlucHV0XCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dDtcbiAgfVxuICBwdWJsaWMgcHV0SW5wdXQodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQpIHtcbiAgICB0aGlzLl9pbnB1dC5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SW5wdXQoKSB7XG4gICAgdGhpcy5faW5wdXQuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIG91dHB1dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXQ/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbk91dHB1dFtdOyBcbiAgcHVibGljIGdldCBvdXRwdXQoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ291dHB1dCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dHB1dCh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRbXSkge1xuICAgIHRoaXMuX291dHB1dCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE91dHB1dCgpIHtcbiAgICB0aGlzLl9vdXRwdXQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG91dHB1dElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXQ7XG4gIH1cblxuICAvLyByZWZlcmVuY2VfZGF0YV9zb3VyY2UgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVmZXJlbmNlRGF0YVNvdXJjZSA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJlZmVyZW5jZURhdGFTb3VyY2VPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwicmVmZXJlbmNlX2RhdGFfc291cmNlXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHJlZmVyZW5jZURhdGFTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dFJlZmVyZW5jZURhdGFTb3VyY2UodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uUmVmZXJlbmNlRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2UuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlZmVyZW5jZURhdGFTb3VyY2UoKSB7XG4gICAgdGhpcy5fcmVmZXJlbmNlRGF0YVNvdXJjZS5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWZlcmVuY2VEYXRhU291cmNlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVyZW5jZURhdGFTb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkczogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN1Ym5ldElkczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuc2VjdXJpdHlHcm91cElkcyksXG4gICAgc3VibmV0X2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zdWJuZXRJZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9zZWN1cml0eUdyb3VwSWRzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZWN1cml0eUdyb3VwSWRzID0gdGhpcy5fc2VjdXJpdHlHcm91cElkcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1Ym5ldElkcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc3VibmV0SWRzID0gdGhpcy5fc3VibmV0SWRzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1Ym5ldElkcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHZhbHVlLnNlY3VyaXR5R3JvdXBJZHM7XG4gICAgICB0aGlzLl9zdWJuZXRJZHMgPSB2YWx1ZS5zdWJuZXRJZHM7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VjdXJpdHlfZ3JvdXBfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlY3VyaXR5R3JvdXBJZHM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZHMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlY3VyaXR5R3JvdXBJZHModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2VjdXJpdHlHcm91cElkcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5R3JvdXBJZHM7XG4gIH1cblxuICAvLyBzdWJuZXRfaWRzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3N1Ym5ldElkcz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBzdWJuZXRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc3VibmV0X2lkcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc3VibmV0SWRzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3N1Ym5ldElkcyA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdWJuZXRJZHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VibmV0SWRzO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGVudmlyb25tZW50UHJvcGVydGllcz86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25GbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBydW5Db25maWd1cmF0aW9uPzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbj86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uU3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHZwY0NvbmZpZ3VyYXRpb24/OiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIHwgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhcHBsaWNhdGlvbl9jb2RlX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbiksXG4gICAgYXBwbGljYXRpb25fc25hcHNob3RfY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24pLFxuICAgIGVudmlyb25tZW50X3Byb3BlcnRpZXM6IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRW52aXJvbm1lbnRQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0IS5lbnZpcm9ubWVudFByb3BlcnRpZXMpLFxuICAgIGZsaW5rX2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKSxcbiAgICBydW5fY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25SdW5Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5ydW5Db25maWd1cmF0aW9uKSxcbiAgICBzcWxfYXBwbGljYXRpb25fY29uZmlndXJhdGlvbjoga2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgdnBjX2NvbmZpZ3VyYXRpb246IGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudnBjQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uID0gdGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5hcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbiA9IHRoaXMuX2FwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW52aXJvbm1lbnRQcm9wZXJ0aWVzPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5lbnZpcm9ubWVudFByb3BlcnRpZXMgPSB0aGlzLl9lbnZpcm9ubWVudFByb3BlcnRpZXM/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3J1bkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJ1bkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9ydW5Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSB0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl92cGNDb25maWd1cmF0aW9uPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC52cGNDb25maWd1cmF0aW9uID0gdGhpcy5fdnBjQ29uZmlndXJhdGlvbj8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3J1bkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdnBjQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLmFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fZW52aXJvbm1lbnRQcm9wZXJ0aWVzLmludGVybmFsVmFsdWUgPSB2YWx1ZS5lbnZpcm9ubWVudFByb3BlcnRpZXM7XG4gICAgICB0aGlzLl9mbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWUuZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl9ydW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5ydW5Db25maWd1cmF0aW9uO1xuICAgICAgdGhpcy5fc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgICB0aGlzLl92cGNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZS52cGNDb25maWd1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFwcGxpY2F0aW9uX2NvZGVfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uQXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJhcHBsaWNhdGlvbl9jb2RlX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvbkNvZGVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFwcGxpY2F0aW9uQ29kZUNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25Db2RlQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fc25hcHNob3RfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkFwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImFwcGxpY2F0aW9uX3NuYXBzaG90X2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgYXBwbGljYXRpb25TbmFwc2hvdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRBcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25BcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uU25hcHNob3RDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9hcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBsaWNhdGlvblNuYXBzaG90Q29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZW52aXJvbm1lbnRfcHJvcGVydGllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9lbnZpcm9ubWVudFByb3BlcnRpZXMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25FbnZpcm9ubWVudFByb3BlcnRpZXNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZW52aXJvbm1lbnRfcHJvcGVydGllc1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBlbnZpcm9ubWVudFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcztcbiAgfVxuICBwdWJsaWMgcHV0RW52aXJvbm1lbnRQcm9wZXJ0aWVzKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkVudmlyb25tZW50UHJvcGVydGllcykge1xuICAgIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RW52aXJvbm1lbnRQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMuX2Vudmlyb25tZW50UHJvcGVydGllcy5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBlbnZpcm9ubWVudFByb3BlcnRpZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnRQcm9wZXJ0aWVzLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBmbGlua19hcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2ZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uRmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZmxpbmtfYXBwbGljYXRpb25fY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBmbGlua0FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dEZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbkZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fZmxpbmtBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2ZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZsaW5rQXBwbGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBydW5fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9ydW5Db25maWd1cmF0aW9uID0gbmV3IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQXBwbGljYXRpb25Db25maWd1cmF0aW9uUnVuQ29uZmlndXJhdGlvbk91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJydW5fY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBydW5Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9ydW5Db25maWd1cmF0aW9uO1xuICB9XG4gIHB1YmxpYyBwdXRSdW5Db25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblJ1bkNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9ydW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSdW5Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX3J1bkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcnVuQ29uZmlndXJhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydW5Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBzcWxfYXBwbGljYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3FsX2FwcGxpY2F0aW9uX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gIH1cbiAgcHVibGljIHB1dFNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl9zcWxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3FsQXBwbGljYXRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NxbEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdnBjQ29uZmlndXJhdGlvbiA9IG5ldyBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwidnBjX2NvbmZpZ3VyYXRpb25cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdnBjQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0VnBjQ29uZmlndXJhdGlvbih2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5fdnBjQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VnBjQ29uZmlndXJhdGlvbigpIHtcbiAgICB0aGlzLl92cGNDb25maWd1cmF0aW9uLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdnBjQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2dTdHJlYW1Bcm46IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UgfCBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxvZ19zdHJlYW1fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9sb2dTdHJlYW1Bcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvZ1N0cmVhbUFybiA9IHRoaXMuX2xvZ1N0cmVhbUFybjtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbG9nU3RyZWFtQXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9sb2dTdHJlYW1Bcm4gPSB2YWx1ZS5sb2dTdHJlYW1Bcm47XG4gICAgfVxuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9hcm4gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbG9nU3RyZWFtQXJuPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2dTdHJlYW1Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfc3RyZWFtX2FybicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9nU3RyZWFtQXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dTdHJlYW1Bcm4gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvZ1N0cmVhbUFybjtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEtpbmVzaXNhbmFseXRpY3N2MkFwcGxpY2F0aW9uIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2tpbmVzaXNhbmFseXRpY3N2Ml9hcHBsaWNhdGlvblwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19raW5lc2lzYW5hbHl0aWNzdjJfYXBwbGljYXRpb24nLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBjb25maWcuZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZm9yY2VTdG9wID0gY29uZmlnLmZvcmNlU3RvcDtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50ID0gY29uZmlnLnJ1bnRpbWVFbnZpcm9ubWVudDtcbiAgICB0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZSA9IGNvbmZpZy5zZXJ2aWNlRXhlY3V0aW9uUm9sZTtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gY29uZmlnLnN0YXJ0QXBwbGljYXRpb247XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9hcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5hcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5fY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zLmludGVybmFsVmFsdWUgPSBjb25maWcuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZV90aW1lc3RhbXAgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjcmVhdGVUaW1lc3RhbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjcmVhdGVfdGltZXN0YW1wJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gZm9yY2Vfc3RvcCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9mb3JjZVN0b3A/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGZvcmNlU3RvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmb3JjZV9zdG9wJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZm9yY2VTdG9wKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9mb3JjZVN0b3AgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRGb3JjZVN0b3AoKSB7XG4gICAgdGhpcy5fZm9yY2VTdG9wID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBmb3JjZVN0b3BJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yY2VTdG9wO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGxhc3RfdXBkYXRlX3RpbWVzdGFtcCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxhc3RVcGRhdGVUaW1lc3RhbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsYXN0X3VwZGF0ZV90aW1lc3RhbXAnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcnVudGltZV9lbnZpcm9ubWVudCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ydW50aW1lRW52aXJvbm1lbnQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3J1bnRpbWVfZW52aXJvbm1lbnQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHJ1bnRpbWVFbnZpcm9ubWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcnVudGltZUVudmlyb25tZW50ID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJ1bnRpbWVFbnZpcm9ubWVudElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ydW50aW1lRW52aXJvbm1lbnQ7XG4gIH1cblxuICAvLyBzZXJ2aWNlX2V4ZWN1dGlvbl9yb2xlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NlcnZpY2VFeGVjdXRpb25Sb2xlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJ2aWNlRXhlY3V0aW9uUm9sZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcnZpY2VfZXhlY3V0aW9uX3JvbGUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcnZpY2VFeGVjdXRpb25Sb2xlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJ2aWNlRXhlY3V0aW9uUm9sZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZTtcbiAgfVxuXG4gIC8vIHN0YXJ0X2FwcGxpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0YXJ0QXBwbGljYXRpb24/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHN0YXJ0QXBwbGljYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnc3RhcnRfYXBwbGljYXRpb24nKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdGFydEFwcGxpY2F0aW9uKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RhcnRBcHBsaWNhdGlvbigpIHtcbiAgICB0aGlzLl9zdGFydEFwcGxpY2F0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdGFydEFwcGxpY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXBwbGljYXRpb247XG4gIH1cblxuICAvLyBzdGF0dXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzdGF0dXMnKTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFncygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3ModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzKCkge1xuICAgIHRoaXMuX3RhZ3MgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFncztcbiAgfVxuXG4gIC8vIHRhZ3NfYWxsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfdGFnc0FsbD86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgdGFnc0FsbCgpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFnc19hbGwnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCB0YWdzQWxsKHZhbHVlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnc0FsbCgpIHtcbiAgICB0aGlzLl90YWdzQWxsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdzQWxsSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ3NBbGw7XG4gIH1cblxuICAvLyB2ZXJzaW9uX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVyc2lvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgndmVyc2lvbl9pZCcpO1xuICB9XG5cbiAgLy8gYXBwbGljYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9hcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25BcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiYXBwbGljYXRpb25fY29uZmlndXJhdGlvblwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbjtcbiAgfVxuICBwdWJsaWMgcHV0QXBwbGljYXRpb25Db25maWd1cmF0aW9uKHZhbHVlOiBLaW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QXBwbGljYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHRoaXMuX2FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwbGljYXRpb25Db25maWd1cmF0aW9uLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgPSBuZXcgS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnNcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnM7XG4gIH1cbiAgcHVibGljIHB1dENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyh2YWx1ZTogS2luZXNpc2FuYWx5dGljc3YyQXBwbGljYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICB0aGlzLl9jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fZGVzY3JpcHRpb24pLFxuICAgICAgZm9yY2Vfc3RvcDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2ZvcmNlU3RvcCksXG4gICAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9uYW1lKSxcbiAgICAgIHJ1bnRpbWVfZW52aXJvbm1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3J1bnRpbWVFbnZpcm9ubWVudCksXG4gICAgICBzZXJ2aWNlX2V4ZWN1dGlvbl9yb2xlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9zZXJ2aWNlRXhlY3V0aW9uUm9sZSksXG4gICAgICBzdGFydF9hcHBsaWNhdGlvbjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX3N0YXJ0QXBwbGljYXRpb24pLFxuICAgICAgdGFnczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFncyksXG4gICAgICB0YWdzX2FsbDogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fdGFnc0FsbCksXG4gICAgICBhcHBsaWNhdGlvbl9jb25maWd1cmF0aW9uOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkFwcGxpY2F0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHRoaXMuX2FwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBraW5lc2lzYW5hbHl0aWNzdjJBcHBsaWNhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHRoaXMuX2Nsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucy5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=