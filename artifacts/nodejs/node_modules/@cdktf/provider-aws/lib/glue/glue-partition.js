"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GluePartition = exports.GluePartitionStorageDescriptorOutputReference = exports.gluePartitionStorageDescriptorToTerraform = exports.gluePartitionStorageDescriptorSortColumnsToTerraform = exports.GluePartitionStorageDescriptorSkewedInfoOutputReference = exports.gluePartitionStorageDescriptorSkewedInfoToTerraform = exports.GluePartitionStorageDescriptorSerDeInfoOutputReference = exports.gluePartitionStorageDescriptorSerDeInfoToTerraform = exports.gluePartitionStorageDescriptorColumnsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function gluePartitionStorageDescriptorColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        name: cdktf.stringToTerraform(struct.name),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.gluePartitionStorageDescriptorColumnsToTerraform = gluePartitionStorageDescriptorColumnsToTerraform;
function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        serialization_library: cdktf.stringToTerraform(struct.serializationLibrary),
    };
}
exports.gluePartitionStorageDescriptorSerDeInfoToTerraform = gluePartitionStorageDescriptorSerDeInfoToTerraform;
/**
 * @stability stable
 */
class GluePartitionStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._parameters) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._serializationLibrary) {
            hasAnyValues = true;
            internalValueResult.serializationLibrary = this._serializationLibrary;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
            this._parameters = undefined;
            this._serializationLibrary = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
            this._parameters = value.parameters;
            this._serializationLibrary = value.serializationLibrary;
        }
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
    get parameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('parameters');
    }
    /**
     * @stability stable
     */
    set parameters(value) {
        this._parameters = value;
    }
    /**
     * @stability stable
     */
    resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parametersInput() {
        return this._parameters;
    }
    /**
     * @stability stable
     */
    get serializationLibrary() {
        return this.getStringAttribute('serialization_library');
    }
    /**
     * @stability stable
     */
    set serializationLibrary(value) {
        this._serializationLibrary = value;
    }
    /**
     * @stability stable
     */
    resetSerializationLibrary() {
        this._serializationLibrary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serializationLibraryInput() {
        return this._serializationLibrary;
    }
}
exports.GluePartitionStorageDescriptorSerDeInfoOutputReference = GluePartitionStorageDescriptorSerDeInfoOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GluePartitionStorageDescriptorSerDeInfoOutputReference[_a] = { fqn: "@cdktf/provider-aws.glue.GluePartitionStorageDescriptorSerDeInfoOutputReference", version: "3.0.1" };
function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.skewedColumnNames),
        skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct.skewedColumnValueLocationMaps),
        skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct.skewedColumnValues),
    };
}
exports.gluePartitionStorageDescriptorSkewedInfoToTerraform = gluePartitionStorageDescriptorSkewedInfoToTerraform;
/**
 * @stability stable
 */
class GluePartitionStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
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
        if (this._skewedColumnNames) {
            hasAnyValues = true;
            internalValueResult.skewedColumnNames = this._skewedColumnNames;
        }
        if (this._skewedColumnValueLocationMaps) {
            hasAnyValues = true;
            internalValueResult.skewedColumnValueLocationMaps = this._skewedColumnValueLocationMaps;
        }
        if (this._skewedColumnValues) {
            hasAnyValues = true;
            internalValueResult.skewedColumnValues = this._skewedColumnValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._skewedColumnNames = undefined;
            this._skewedColumnValueLocationMaps = undefined;
            this._skewedColumnValues = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._skewedColumnNames = value.skewedColumnNames;
            this._skewedColumnValueLocationMaps = value.skewedColumnValueLocationMaps;
            this._skewedColumnValues = value.skewedColumnValues;
        }
    }
    /**
     * @stability stable
     */
    get skewedColumnNames() {
        return this.getListAttribute('skewed_column_names');
    }
    /**
     * @stability stable
     */
    set skewedColumnNames(value) {
        this._skewedColumnNames = value;
    }
    /**
     * @stability stable
     */
    resetSkewedColumnNames() {
        this._skewedColumnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get skewedColumnNamesInput() {
        return this._skewedColumnNames;
    }
    /**
     * @stability stable
     */
    get skewedColumnValueLocationMaps() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('skewed_column_value_location_maps');
    }
    /**
     * @stability stable
     */
    set skewedColumnValueLocationMaps(value) {
        this._skewedColumnValueLocationMaps = value;
    }
    /**
     * @stability stable
     */
    resetSkewedColumnValueLocationMaps() {
        this._skewedColumnValueLocationMaps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get skewedColumnValueLocationMapsInput() {
        return this._skewedColumnValueLocationMaps;
    }
    /**
     * @stability stable
     */
    get skewedColumnValues() {
        return this.getListAttribute('skewed_column_values');
    }
    /**
     * @stability stable
     */
    set skewedColumnValues(value) {
        this._skewedColumnValues = value;
    }
    /**
     * @stability stable
     */
    resetSkewedColumnValues() {
        this._skewedColumnValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get skewedColumnValuesInput() {
        return this._skewedColumnValues;
    }
}
exports.GluePartitionStorageDescriptorSkewedInfoOutputReference = GluePartitionStorageDescriptorSkewedInfoOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GluePartitionStorageDescriptorSkewedInfoOutputReference[_b] = { fqn: "@cdktf/provider-aws.glue.GluePartitionStorageDescriptorSkewedInfoOutputReference", version: "3.0.1" };
function gluePartitionStorageDescriptorSortColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        column: cdktf.stringToTerraform(struct.column),
        sort_order: cdktf.numberToTerraform(struct.sortOrder),
    };
}
exports.gluePartitionStorageDescriptorSortColumnsToTerraform = gluePartitionStorageDescriptorSortColumnsToTerraform;
function gluePartitionStorageDescriptorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.bucketColumns),
        compressed: cdktf.booleanToTerraform(struct.compressed),
        input_format: cdktf.stringToTerraform(struct.inputFormat),
        location: cdktf.stringToTerraform(struct.location),
        number_of_buckets: cdktf.numberToTerraform(struct.numberOfBuckets),
        output_format: cdktf.stringToTerraform(struct.outputFormat),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        stored_as_sub_directories: cdktf.booleanToTerraform(struct.storedAsSubDirectories),
        columns: cdktf.listMapper(gluePartitionStorageDescriptorColumnsToTerraform)(struct.columns),
        ser_de_info: gluePartitionStorageDescriptorSerDeInfoToTerraform(struct.serDeInfo),
        skewed_info: gluePartitionStorageDescriptorSkewedInfoToTerraform(struct.skewedInfo),
        sort_columns: cdktf.listMapper(gluePartitionStorageDescriptorSortColumnsToTerraform)(struct.sortColumns),
    };
}
exports.gluePartitionStorageDescriptorToTerraform = gluePartitionStorageDescriptorToTerraform;
/**
 * @stability stable
 */
class GluePartitionStorageDescriptorOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // ser_de_info - computed: false, optional: true, required: false
        this._serDeInfo = new GluePartitionStorageDescriptorSerDeInfoOutputReference(this, "ser_de_info", true);
        // skewed_info - computed: false, optional: true, required: false
        this._skewedInfo = new GluePartitionStorageDescriptorSkewedInfoOutputReference(this, "skewed_info", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _e, _f, _g, _h;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketColumns) {
            hasAnyValues = true;
            internalValueResult.bucketColumns = this._bucketColumns;
        }
        if (this._compressed) {
            hasAnyValues = true;
            internalValueResult.compressed = this._compressed;
        }
        if (this._inputFormat) {
            hasAnyValues = true;
            internalValueResult.inputFormat = this._inputFormat;
        }
        if (this._location) {
            hasAnyValues = true;
            internalValueResult.location = this._location;
        }
        if (this._numberOfBuckets) {
            hasAnyValues = true;
            internalValueResult.numberOfBuckets = this._numberOfBuckets;
        }
        if (this._outputFormat) {
            hasAnyValues = true;
            internalValueResult.outputFormat = this._outputFormat;
        }
        if (this._parameters) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._storedAsSubDirectories) {
            hasAnyValues = true;
            internalValueResult.storedAsSubDirectories = this._storedAsSubDirectories;
        }
        if (this._columns) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns;
        }
        if ((_e = this._serDeInfo) === null || _e === void 0 ? void 0 : _e.internalValue) {
            hasAnyValues = true;
            internalValueResult.serDeInfo = (_f = this._serDeInfo) === null || _f === void 0 ? void 0 : _f.internalValue;
        }
        if ((_g = this._skewedInfo) === null || _g === void 0 ? void 0 : _g.internalValue) {
            hasAnyValues = true;
            internalValueResult.skewedInfo = (_h = this._skewedInfo) === null || _h === void 0 ? void 0 : _h.internalValue;
        }
        if (this._sortColumns) {
            hasAnyValues = true;
            internalValueResult.sortColumns = this._sortColumns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketColumns = undefined;
            this._compressed = undefined;
            this._inputFormat = undefined;
            this._location = undefined;
            this._numberOfBuckets = undefined;
            this._outputFormat = undefined;
            this._parameters = undefined;
            this._storedAsSubDirectories = undefined;
            this._columns = undefined;
            this._serDeInfo.internalValue = undefined;
            this._skewedInfo.internalValue = undefined;
            this._sortColumns = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketColumns = value.bucketColumns;
            this._compressed = value.compressed;
            this._inputFormat = value.inputFormat;
            this._location = value.location;
            this._numberOfBuckets = value.numberOfBuckets;
            this._outputFormat = value.outputFormat;
            this._parameters = value.parameters;
            this._storedAsSubDirectories = value.storedAsSubDirectories;
            this._columns = value.columns;
            this._serDeInfo.internalValue = value.serDeInfo;
            this._skewedInfo.internalValue = value.skewedInfo;
            this._sortColumns = value.sortColumns;
        }
    }
    /**
     * @stability stable
     */
    get bucketColumns() {
        return this.getListAttribute('bucket_columns');
    }
    /**
     * @stability stable
     */
    set bucketColumns(value) {
        this._bucketColumns = value;
    }
    /**
     * @stability stable
     */
    resetBucketColumns() {
        this._bucketColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get bucketColumnsInput() {
        return this._bucketColumns;
    }
    /**
     * @stability stable
     */
    get compressed() {
        return this.getBooleanAttribute('compressed');
    }
    /**
     * @stability stable
     */
    set compressed(value) {
        this._compressed = value;
    }
    /**
     * @stability stable
     */
    resetCompressed() {
        this._compressed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get compressedInput() {
        return this._compressed;
    }
    /**
     * @stability stable
     */
    get inputFormat() {
        return this.getStringAttribute('input_format');
    }
    /**
     * @stability stable
     */
    set inputFormat(value) {
        this._inputFormat = value;
    }
    /**
     * @stability stable
     */
    resetInputFormat() {
        this._inputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputFormatInput() {
        return this._inputFormat;
    }
    /**
     * @stability stable
     */
    get location() {
        return this.getStringAttribute('location');
    }
    /**
     * @stability stable
     */
    set location(value) {
        this._location = value;
    }
    /**
     * @stability stable
     */
    resetLocation() {
        this._location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get locationInput() {
        return this._location;
    }
    /**
     * @stability stable
     */
    get numberOfBuckets() {
        return this.getNumberAttribute('number_of_buckets');
    }
    /**
     * @stability stable
     */
    set numberOfBuckets(value) {
        this._numberOfBuckets = value;
    }
    /**
     * @stability stable
     */
    resetNumberOfBuckets() {
        this._numberOfBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get numberOfBucketsInput() {
        return this._numberOfBuckets;
    }
    /**
     * @stability stable
     */
    get outputFormat() {
        return this.getStringAttribute('output_format');
    }
    /**
     * @stability stable
     */
    set outputFormat(value) {
        this._outputFormat = value;
    }
    /**
     * @stability stable
     */
    resetOutputFormat() {
        this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get outputFormatInput() {
        return this._outputFormat;
    }
    /**
     * @stability stable
     */
    get parameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('parameters');
    }
    /**
     * @stability stable
     */
    set parameters(value) {
        this._parameters = value;
    }
    /**
     * @stability stable
     */
    resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parametersInput() {
        return this._parameters;
    }
    /**
     * @stability stable
     */
    get storedAsSubDirectories() {
        return this.getBooleanAttribute('stored_as_sub_directories');
    }
    /**
     * @stability stable
     */
    set storedAsSubDirectories(value) {
        this._storedAsSubDirectories = value;
    }
    /**
     * @stability stable
     */
    resetStoredAsSubDirectories() {
        this._storedAsSubDirectories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storedAsSubDirectoriesInput() {
        return this._storedAsSubDirectories;
    }
    /**
     * @stability stable
     */
    get columns() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('columns');
    }
    /**
     * @stability stable
     */
    set columns(value) {
        this._columns = value;
    }
    /**
     * @stability stable
     */
    resetColumns() {
        this._columns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get columnsInput() {
        return this._columns;
    }
    /**
     * @stability stable
     */
    get serDeInfo() {
        return this._serDeInfo;
    }
    /**
     * @stability stable
     */
    putSerDeInfo(value) {
        this._serDeInfo.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSerDeInfo() {
        this._serDeInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get serDeInfoInput() {
        return this._serDeInfo.internalValue;
    }
    /**
     * @stability stable
     */
    get skewedInfo() {
        return this._skewedInfo;
    }
    /**
     * @stability stable
     */
    putSkewedInfo(value) {
        this._skewedInfo.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSkewedInfo() {
        this._skewedInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get skewedInfoInput() {
        return this._skewedInfo.internalValue;
    }
    /**
     * @stability stable
     */
    get sortColumns() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('sort_columns');
    }
    /**
     * @stability stable
     */
    set sortColumns(value) {
        this._sortColumns = value;
    }
    /**
     * @stability stable
     */
    resetSortColumns() {
        this._sortColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sortColumnsInput() {
        return this._sortColumns;
    }
}
exports.GluePartitionStorageDescriptorOutputReference = GluePartitionStorageDescriptorOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GluePartitionStorageDescriptorOutputReference[_c] = { fqn: "@cdktf/provider-aws.glue.GluePartitionStorageDescriptorOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition}.
 *
 * @stability stable
 */
class GluePartition extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_partition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // storage_descriptor - computed: false, optional: true, required: false
        this._storageDescriptor = new GluePartitionStorageDescriptorOutputReference(this, "storage_descriptor", true);
        this._catalogId = config.catalogId;
        this._databaseName = config.databaseName;
        this._parameters = config.parameters;
        this._partitionValues = config.partitionValues;
        this._tableName = config.tableName;
        this._storageDescriptor.internalValue = config.storageDescriptor;
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
    // creation_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get creationTime() {
        return this.getStringAttribute('creation_time');
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
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    // last_accessed_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastAccessedTime() {
        return this.getStringAttribute('last_accessed_time');
    }
    // last_analyzed_time - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get lastAnalyzedTime() {
        return this.getStringAttribute('last_analyzed_time');
    }
    /**
     * @stability stable
     */
    get parameters() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('parameters');
    }
    /**
     * @stability stable
     */
    set parameters(value) {
        this._parameters = value;
    }
    /**
     * @stability stable
     */
    resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get parametersInput() {
        return this._parameters;
    }
    /**
     * @stability stable
     */
    get partitionValues() {
        return this.getListAttribute('partition_values');
    }
    /**
     * @stability stable
     */
    set partitionValues(value) {
        this._partitionValues = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionValuesInput() {
        return this._partitionValues;
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
    get storageDescriptor() {
        return this._storageDescriptor;
    }
    /**
     * @stability stable
     */
    putStorageDescriptor(value) {
        this._storageDescriptor.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetStorageDescriptor() {
        this._storageDescriptor.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get storageDescriptorInput() {
        return this._storageDescriptor.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            database_name: cdktf.stringToTerraform(this._databaseName),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            partition_values: cdktf.listMapper(cdktf.stringToTerraform)(this._partitionValues),
            table_name: cdktf.stringToTerraform(this._tableName),
            storage_descriptor: gluePartitionStorageDescriptorToTerraform(this._storageDescriptor.internalValue),
        };
    }
}
exports.GluePartition = GluePartition;
_d = JSII_RTTI_SYMBOL_1;
GluePartition[_d] = { fqn: "@cdktf/provider-aws.glue.GluePartition", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GluePartition.tfResourceType = "aws_glue_partition";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1wYXJ0aXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2x1ZS9nbHVlLXBhcnRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQTBCL0IsU0FBZ0IsZ0RBQWdELENBQUMsTUFBOEM7SUFDN0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDakQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQVZELDRHQVVDO0FBV0QsU0FBZ0Isa0RBQWtELENBQUMsTUFBeUc7SUFDMUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU8sQ0FB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Q2hELENBQUM7Ozs7SUFDTSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQUNELG9EQUFvRDs7OztJQUNwRCxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7OztJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BELGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMxRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNsRixVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQsa0JBQWtCLEVBQUUseUNBQXlDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztTQUNyRyxDQUFDO0lBQ0osQ0FBQzs7QUE1Skgsc0NBNkpDOzs7QUEzSkMsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7Ozs7QUFDRyw0QkFBYyxHQUFXLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuICAgICAgICAgICAgICAgICBcbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZVBhcnRpdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YWJhc2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFydGl0aW9uVmFsdWVzOiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhYmxlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzdG9yYWdlRGVzY3JpcHRvcj86IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yQ29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21tZW50Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvckNvbHVtbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21tZW50KSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2VyaWFsaXphdGlvbkxpYnJhcnk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm9Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm9PdXRwdXRSZWZlcmVuY2UgfCBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHBhcmFtZXRlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gICAgc2VyaWFsaXphdGlvbl9saWJyYXJ5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcmlhbGl6YXRpb25MaWJyYXJ5KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNlckRlSW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fbmFtZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubmFtZSA9IHRoaXMuX25hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJhbWV0ZXJzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXJhbWV0ZXJzID0gdGhpcy5fcGFyYW1ldGVycztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlcmlhbGl6YXRpb25MaWJyYXJ5KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zZXJpYWxpemF0aW9uTGlicmFyeSA9IHRoaXMuX3NlcmlhbGl6YXRpb25MaWJyYXJ5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJpYWxpemF0aW9uTGlicmFyeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlLm5hbWU7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdmFsdWUucGFyYW1ldGVycztcbiAgICAgIHRoaXMuX3NlcmlhbGl6YXRpb25MaWJyYXJ5ID0gdmFsdWUuc2VyaWFsaXphdGlvbkxpYnJhcnk7XG4gICAgfVxuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE5hbWUoKSB7XG4gICAgdGhpcy5fbmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYW1ldGVycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8gc2VyaWFsaXphdGlvbl9saWJyYXJ5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlcmlhbGl6YXRpb25MaWJyYXJ5Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBzZXJpYWxpemF0aW9uTGlicmFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlcmlhbGl6YXRpb25fbGlicmFyeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2VyaWFsaXphdGlvbkxpYnJhcnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcmlhbGl6YXRpb25MaWJyYXJ5ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VyaWFsaXphdGlvbkxpYnJhcnkoKSB7XG4gICAgdGhpcy5fc2VyaWFsaXphdGlvbkxpYnJhcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlcmlhbGl6YXRpb25MaWJyYXJ5SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcmlhbGl6YXRpb25MaWJyYXJ5O1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2tld2VkQ29sdW1uTmFtZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBza2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2tld2VkQ29sdW1uVmFsdWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JTa2V3ZWRJbmZvVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mb091dHB1dFJlZmVyZW5jZSB8IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBza2V3ZWRfY29sdW1uX25hbWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNrZXdlZENvbHVtbk5hbWVzKSxcbiAgICBza2V3ZWRfY29sdW1uX3ZhbHVlX2xvY2F0aW9uX21hcHM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEuc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMpLFxuICAgIHNrZXdlZF9jb2x1bW5fdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNrZXdlZENvbHVtblZhbHVlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm9PdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mbyB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fc2tld2VkQ29sdW1uTmFtZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNrZXdlZENvbHVtbk5hbWVzID0gdGhpcy5fc2tld2VkQ29sdW1uTmFtZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMgPSB0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NrZXdlZENvbHVtblZhbHVlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2tld2VkQ29sdW1uVmFsdWVzID0gdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mbyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NrZXdlZENvbHVtbk5hbWVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX3NrZXdlZENvbHVtbk5hbWVzID0gdmFsdWUuc2tld2VkQ29sdW1uTmFtZXM7XG4gICAgICB0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcyA9IHZhbHVlLnNrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzO1xuICAgICAgdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVzID0gdmFsdWUuc2tld2VkQ29sdW1uVmFsdWVzO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNrZXdlZF9jb2x1bW5fbmFtZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tld2VkQ29sdW1uTmFtZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2tld2VkQ29sdW1uTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnc2tld2VkX2NvbHVtbl9uYW1lcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2tld2VkQ29sdW1uTmFtZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2tld2VkQ29sdW1uTmFtZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTa2V3ZWRDb2x1bW5OYW1lcygpIHtcbiAgICB0aGlzLl9za2V3ZWRDb2x1bW5OYW1lcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tld2VkQ29sdW1uTmFtZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tld2VkQ29sdW1uTmFtZXM7XG4gIH1cblxuICAvLyBza2V3ZWRfY29sdW1uX3ZhbHVlX2xvY2F0aW9uX21hcHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IHNrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdza2V3ZWRfY29sdW1uX3ZhbHVlX2xvY2F0aW9uX21hcHMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBza2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTa2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcygpIHtcbiAgICB0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHM7XG4gIH1cblxuICAvLyBza2V3ZWRfY29sdW1uX3ZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9za2V3ZWRDb2x1bW5WYWx1ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgc2tld2VkQ29sdW1uVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NrZXdlZF9jb2x1bW5fdmFsdWVzJyk7XG4gIH1cbiAgcHVibGljIHNldCBza2V3ZWRDb2x1bW5WYWx1ZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tld2VkQ29sdW1uVmFsdWVzKCkge1xuICAgIHRoaXMuX3NrZXdlZENvbHVtblZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2tld2VkQ29sdW1uVmFsdWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NrZXdlZENvbHVtblZhbHVlcztcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JTb3J0Q29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29sdW1uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3J0T3JkZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNvcnRDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU29ydENvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uKSxcbiAgICBzb3J0X29yZGVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvcnRPcmRlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBidWNrZXRDb2x1bW5zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wcmVzc2VkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlucHV0Rm9ybWF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBsb2NhdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbnVtYmVyT2ZCdWNrZXRzPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3V0cHV0Rm9ybWF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHN0b3JlZEFzU3ViRGlyZWN0b3JpZXM/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbHVtbnM/OiBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlckRlSW5mbz86IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNlckRlSW5mbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc2tld2VkSW5mbz86IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvcnRDb2x1bW5zPzogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU29ydENvbHVtbnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvck91dHB1dFJlZmVyZW5jZSB8IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmJ1Y2tldENvbHVtbnMpLFxuICAgIGNvbXByZXNzZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzZWQpLFxuICAgIGlucHV0X2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dEZvcm1hdCksXG4gICAgbG9jYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb24pLFxuICAgIG51bWJlcl9vZl9idWNrZXRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm51bWJlck9mQnVja2V0cyksXG4gICAgb3V0cHV0X2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vdXRwdXRGb3JtYXQpLFxuICAgIHBhcmFtZXRlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gICAgc3RvcmVkX2FzX3N1Yl9kaXJlY3RvcmllczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc3RvcmVkQXNTdWJEaXJlY3RvcmllcyksXG4gICAgY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihnbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1ucyksXG4gICAgc2VyX2RlX2luZm86IGdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNlckRlSW5mb1RvVGVycmFmb3JtKHN0cnVjdCEuc2VyRGVJbmZvKSxcbiAgICBza2V3ZWRfaW5mbzogZ2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mb1RvVGVycmFmb3JtKHN0cnVjdCEuc2tld2VkSW5mbyksXG4gICAgc29ydF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNvcnRDb2x1bW5zVG9UZXJyYWZvcm0pKHN0cnVjdCEuc29ydENvbHVtbnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9idWNrZXRDb2x1bW5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5idWNrZXRDb2x1bW5zID0gdGhpcy5fYnVja2V0Q29sdW1ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXByZXNzZWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXByZXNzZWQgPSB0aGlzLl9jb21wcmVzc2VkO1xuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXRGb3JtYXQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmlucHV0Rm9ybWF0ID0gdGhpcy5faW5wdXRGb3JtYXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sb2NhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubG9jYXRpb24gPSB0aGlzLl9sb2NhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX251bWJlck9mQnVja2V0cykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQubnVtYmVyT2ZCdWNrZXRzID0gdGhpcy5fbnVtYmVyT2ZCdWNrZXRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3V0cHV0Rm9ybWF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5vdXRwdXRGb3JtYXQgPSB0aGlzLl9vdXRwdXRGb3JtYXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYXJhbWV0ZXJzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5wYXJhbWV0ZXJzID0gdGhpcy5fcGFyYW1ldGVycztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N0b3JlZEFzU3ViRGlyZWN0b3JpZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnN0b3JlZEFzU3ViRGlyZWN0b3JpZXMgPSB0aGlzLl9zdG9yZWRBc1N1YkRpcmVjdG9yaWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29sdW1ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29sdW1ucyA9IHRoaXMuX2NvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJEZUluZm8/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlckRlSW5mbyA9IHRoaXMuX3NlckRlSW5mbz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NrZXdlZEluZm8/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNrZXdlZEluZm8gPSB0aGlzLl9za2V3ZWRJbmZvPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc29ydENvbHVtbnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvcnRDb2x1bW5zID0gdGhpcy5fc29ydENvbHVtbnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3IgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXRDb2x1bW5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29tcHJlc3NlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0Rm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9udW1iZXJPZkJ1Y2tldHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdXRwdXRGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RvcmVkQXNTdWJEaXJlY3RvcmllcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zZXJEZUluZm8uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NrZXdlZEluZm8uaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NvcnRDb2x1bW5zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9idWNrZXRDb2x1bW5zID0gdmFsdWUuYnVja2V0Q29sdW1ucztcbiAgICAgIHRoaXMuX2NvbXByZXNzZWQgPSB2YWx1ZS5jb21wcmVzc2VkO1xuICAgICAgdGhpcy5faW5wdXRGb3JtYXQgPSB2YWx1ZS5pbnB1dEZvcm1hdDtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsdWUubG9jYXRpb247XG4gICAgICB0aGlzLl9udW1iZXJPZkJ1Y2tldHMgPSB2YWx1ZS5udW1iZXJPZkJ1Y2tldHM7XG4gICAgICB0aGlzLl9vdXRwdXRGb3JtYXQgPSB2YWx1ZS5vdXRwdXRGb3JtYXQ7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdmFsdWUucGFyYW1ldGVycztcbiAgICAgIHRoaXMuX3N0b3JlZEFzU3ViRGlyZWN0b3JpZXMgPSB2YWx1ZS5zdG9yZWRBc1N1YkRpcmVjdG9yaWVzO1xuICAgICAgdGhpcy5fY29sdW1ucyA9IHZhbHVlLmNvbHVtbnM7XG4gICAgICB0aGlzLl9zZXJEZUluZm8uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNlckRlSW5mbztcbiAgICAgIHRoaXMuX3NrZXdlZEluZm8uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlLnNrZXdlZEluZm87XG4gICAgICB0aGlzLl9zb3J0Q29sdW1ucyA9IHZhbHVlLnNvcnRDb2x1bW5zO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJ1Y2tldF9jb2x1bW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2J1Y2tldENvbHVtbnM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgYnVja2V0Q29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdidWNrZXRfY29sdW1ucycpO1xuICB9XG4gIHB1YmxpYyBzZXQgYnVja2V0Q29sdW1ucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9idWNrZXRDb2x1bW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QnVja2V0Q29sdW1ucygpIHtcbiAgICB0aGlzLl9idWNrZXRDb2x1bW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBidWNrZXRDb2x1bW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1Y2tldENvbHVtbnM7XG4gIH1cblxuICAvLyBjb21wcmVzc2VkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXByZXNzZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7IFxuICBwdWJsaWMgZ2V0IGNvbXByZXNzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnY29tcHJlc3NlZCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXByZXNzZWQodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2NvbXByZXNzZWQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wcmVzc2VkKCkge1xuICAgIHRoaXMuX2NvbXByZXNzZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbXByZXNzZWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcHJlc3NlZDtcbiAgfVxuXG4gIC8vIGlucHV0X2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9pbnB1dEZvcm1hdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgaW5wdXRGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnB1dF9mb3JtYXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlucHV0Rm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnB1dEZvcm1hdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElucHV0Rm9ybWF0KCkge1xuICAgIHRoaXMuX2lucHV0Rm9ybWF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpbnB1dEZvcm1hdElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dEZvcm1hdDtcbiAgfVxuXG4gIC8vIGxvY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2xvY2F0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBsb2NhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRMb2NhdGlvbigpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbG9jYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cblxuICAvLyBudW1iZXJfb2ZfYnVja2V0cyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9udW1iZXJPZkJ1Y2tldHM/OiBudW1iZXI7IFxuICBwdWJsaWMgZ2V0IG51bWJlck9mQnVja2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ251bWJlcl9vZl9idWNrZXRzJyk7XG4gIH1cbiAgcHVibGljIHNldCBudW1iZXJPZkJ1Y2tldHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX251bWJlck9mQnVja2V0cyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE51bWJlck9mQnVja2V0cygpIHtcbiAgICB0aGlzLl9udW1iZXJPZkJ1Y2tldHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG51bWJlck9mQnVja2V0c0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9udW1iZXJPZkJ1Y2tldHM7XG4gIH1cblxuICAvLyBvdXRwdXRfZm9ybWF0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX291dHB1dEZvcm1hdD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3V0cHV0Rm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3V0cHV0X2Zvcm1hdCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3V0cHV0Rm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vdXRwdXRGb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRPdXRwdXRGb3JtYXQoKSB7XG4gICAgdGhpcy5fb3V0cHV0Rm9ybWF0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvdXRwdXRGb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0Rm9ybWF0O1xuICB9XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYW1ldGVycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8gc3RvcmVkX2FzX3N1Yl9kaXJlY3RvcmllcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yZWRBc1N1YkRpcmVjdG9yaWVzPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBzdG9yZWRBc1N1YkRpcmVjdG9yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N0b3JlZF9hc19zdWJfZGlyZWN0b3JpZXMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzdG9yZWRBc1N1YkRpcmVjdG9yaWVzKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9zdG9yZWRBc1N1YkRpcmVjdG9yaWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U3RvcmVkQXNTdWJEaXJlY3RvcmllcygpIHtcbiAgICB0aGlzLl9zdG9yZWRBc1N1YkRpcmVjdG9yaWVzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yZWRBc1N1YkRpcmVjdG9yaWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JlZEFzU3ViRGlyZWN0b3JpZXM7XG4gIH1cblxuICAvLyBjb2x1bW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbHVtbnM/OiBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zW107IFxuICBwdWJsaWMgZ2V0IGNvbHVtbnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NvbHVtbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb2x1bW5zKHZhbHVlOiBHbHVlUGFydGl0aW9uU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29sdW1ucygpIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb2x1bW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICAvLyBzZXJfZGVfaW5mbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJEZUluZm8gPSBuZXcgR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNlcl9kZV9pbmZvXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNlckRlSW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VyRGVJbmZvO1xuICB9XG4gIHB1YmxpYyBwdXRTZXJEZUluZm8odmFsdWU6IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNlckRlSW5mbykge1xuICAgIHRoaXMuX3NlckRlSW5mby5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2VyRGVJbmZvKCkge1xuICAgIHRoaXMuX3NlckRlSW5mby5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJEZUluZm9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VyRGVJbmZvLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyBza2V3ZWRfaW5mbyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9za2V3ZWRJbmZvID0gbmV3IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm9PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2tld2VkX2luZm9cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2tld2VkSW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tld2VkSW5mbztcbiAgfVxuICBwdWJsaWMgcHV0U2tld2VkSW5mbyh2YWx1ZTogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mbykge1xuICAgIHRoaXMuX3NrZXdlZEluZm8uaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNrZXdlZEluZm8oKSB7XG4gICAgdGhpcy5fc2tld2VkSW5mby5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBza2V3ZWRJbmZvSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NrZXdlZEluZm8uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNvcnRfY29sdW1ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zb3J0Q29sdW1ucz86IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvclNvcnRDb2x1bW5zW107IFxuICBwdWJsaWMgZ2V0IHNvcnRDb2x1bW5zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3J0X2NvbHVtbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBzb3J0Q29sdW1ucyh2YWx1ZTogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yU29ydENvbHVtbnNbXSkge1xuICAgIHRoaXMuX3NvcnRDb2x1bW5zID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U29ydENvbHVtbnMoKSB7XG4gICAgdGhpcy5fc29ydENvbHVtbnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvcnRDb2x1bW5zSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRDb2x1bW5zO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEdsdWVQYXJ0aXRpb24gZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZ2x1ZV9wYXJ0aXRpb25cIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsdWVQYXJ0aXRpb25Db25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19nbHVlX3BhcnRpdGlvbicsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSBjb25maWcuY2F0YWxvZ0lkO1xuICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IGNvbmZpZy5kYXRhYmFzZU5hbWU7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IGNvbmZpZy5wYXJhbWV0ZXJzO1xuICAgIHRoaXMuX3BhcnRpdGlvblZhbHVlcyA9IGNvbmZpZy5wYXJ0aXRpb25WYWx1ZXM7XG4gICAgdGhpcy5fdGFibGVOYW1lID0gY29uZmlnLnRhYmxlTmFtZTtcbiAgICB0aGlzLl9zdG9yYWdlRGVzY3JpcHRvci5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnN0b3JhZ2VEZXNjcmlwdG9yO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBjYXRhbG9nX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2F0YWxvZ0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYXRhbG9nSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXRhbG9nX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXRhbG9nSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhdGFsb2dJZCgpIHtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRhbG9nSWQ7XG4gIH1cblxuICAvLyBjcmVhdGlvbl90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3JlYXRpb25UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY3JlYXRpb25fdGltZScpO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhYmFzZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbGFzdF9hY2Nlc3NlZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdEFjY2Vzc2VkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfYWNjZXNzZWRfdGltZScpO1xuICB9XG5cbiAgLy8gbGFzdF9hbmFseXplZF90aW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbGFzdEFuYWx5emVkVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xhc3RfYW5hbHl6ZWRfdGltZScpO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYW1ldGVycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX3ZhbHVlcyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9wYXJ0aXRpb25WYWx1ZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uVmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3BhcnRpdGlvbl92YWx1ZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcnRpdGlvblZhbHVlcyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9wYXJ0aXRpb25WYWx1ZXMgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uVmFsdWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnRpdGlvblZhbHVlcztcbiAgfVxuXG4gIC8vIHRhYmxlX25hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfdGFibGVOYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0YWJsZV9uYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCB0YWJsZU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhYmxlTmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWJsZU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVOYW1lO1xuICB9XG5cbiAgLy8gc3RvcmFnZV9kZXNjcmlwdG9yIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3N0b3JhZ2VEZXNjcmlwdG9yID0gbmV3IEdsdWVQYXJ0aXRpb25TdG9yYWdlRGVzY3JpcHRvck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzdG9yYWdlX2Rlc2NyaXB0b3JcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc3RvcmFnZURlc2NyaXB0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VEZXNjcmlwdG9yO1xuICB9XG4gIHB1YmxpYyBwdXRTdG9yYWdlRGVzY3JpcHRvcih2YWx1ZTogR2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yKSB7XG4gICAgdGhpcy5fc3RvcmFnZURlc2NyaXB0b3IuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0b3JhZ2VEZXNjcmlwdG9yKCkge1xuICAgIHRoaXMuX3N0b3JhZ2VEZXNjcmlwdG9yLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHN0b3JhZ2VEZXNjcmlwdG9ySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VEZXNjcmlwdG9yLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhdGFsb2dfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NhdGFsb2dJZCksXG4gICAgICBkYXRhYmFzZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhYmFzZU5hbWUpLFxuICAgICAgcGFyYW1ldGVyczogY2RrdGYuaGFzaE1hcHBlcihjZGt0Zi5hbnlUb1RlcnJhZm9ybSkodGhpcy5fcGFyYW1ldGVycyksXG4gICAgICBwYXJ0aXRpb25fdmFsdWVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKSh0aGlzLl9wYXJ0aXRpb25WYWx1ZXMpLFxuICAgICAgdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFibGVOYW1lKSxcbiAgICAgIHN0b3JhZ2VfZGVzY3JpcHRvcjogZ2x1ZVBhcnRpdGlvblN0b3JhZ2VEZXNjcmlwdG9yVG9UZXJyYWZvcm0odGhpcy5fc3RvcmFnZURlc2NyaXB0b3IuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19