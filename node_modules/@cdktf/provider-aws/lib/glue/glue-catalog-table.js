"use strict";
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueCatalogTable = exports.GlueCatalogTableTargetTableOutputReference = exports.glueCatalogTableTargetTableToTerraform = exports.GlueCatalogTableStorageDescriptorOutputReference = exports.glueCatalogTableStorageDescriptorToTerraform = exports.glueCatalogTableStorageDescriptorSortColumnsToTerraform = exports.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference = exports.glueCatalogTableStorageDescriptorSkewedInfoToTerraform = exports.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference = exports.glueCatalogTableStorageDescriptorSerDeInfoToTerraform = exports.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference = exports.glueCatalogTableStorageDescriptorSchemaReferenceToTerraform = exports.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference = exports.glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform = exports.glueCatalogTableStorageDescriptorColumnsToTerraform = exports.glueCatalogTablePartitionKeysToTerraform = exports.glueCatalogTablePartitionIndexToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueCatalogTablePartitionIndexToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        index_name: cdktf.stringToTerraform(struct.indexName),
        keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.keys),
    };
}
exports.glueCatalogTablePartitionIndexToTerraform = glueCatalogTablePartitionIndexToTerraform;
function glueCatalogTablePartitionKeysToTerraform(struct) {
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
exports.glueCatalogTablePartitionKeysToTerraform = glueCatalogTablePartitionKeysToTerraform;
function glueCatalogTableStorageDescriptorColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: cdktf.stringToTerraform(struct.comment),
        name: cdktf.stringToTerraform(struct.name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct.parameters),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.glueCatalogTableStorageDescriptorColumnsToTerraform = glueCatalogTableStorageDescriptorColumnsToTerraform;
function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        registry_name: cdktf.stringToTerraform(struct.registryName),
        schema_arn: cdktf.stringToTerraform(struct.schemaArn),
        schema_name: cdktf.stringToTerraform(struct.schemaName),
    };
}
exports.glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform = glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform;
/**
 * @stability stable
 */
class GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktf.ComplexObject {
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
        if (this._registryName) {
            hasAnyValues = true;
            internalValueResult.registryName = this._registryName;
        }
        if (this._schemaArn) {
            hasAnyValues = true;
            internalValueResult.schemaArn = this._schemaArn;
        }
        if (this._schemaName) {
            hasAnyValues = true;
            internalValueResult.schemaName = this._schemaName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._registryName = undefined;
            this._schemaArn = undefined;
            this._schemaName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._registryName = value.registryName;
            this._schemaArn = value.schemaArn;
            this._schemaName = value.schemaName;
        }
    }
    /**
     * @stability stable
     */
    get registryName() {
        return this.getStringAttribute('registry_name');
    }
    /**
     * @stability stable
     */
    set registryName(value) {
        this._registryName = value;
    }
    /**
     * @stability stable
     */
    resetRegistryName() {
        this._registryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get registryNameInput() {
        return this._registryName;
    }
    /**
     * @stability stable
     */
    get schemaArn() {
        return this.getStringAttribute('schema_arn');
    }
    /**
     * @stability stable
     */
    set schemaArn(value) {
        this._schemaArn = value;
    }
    /**
     * @stability stable
     */
    resetSchemaArn() {
        this._schemaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaArnInput() {
        return this._schemaArn;
    }
    /**
     * @stability stable
     */
    get schemaName() {
        return this.getStringAttribute('schema_name');
    }
    /**
     * @stability stable
     */
    set schemaName(value) {
        this._schemaName = value;
    }
    /**
     * @stability stable
     */
    resetSchemaName() {
        this._schemaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaNameInput() {
        return this._schemaName;
    }
}
exports.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference = GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference[_a] = { fqn: "@cdktf/provider-aws.glue.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference", version: "3.0.1" };
function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        schema_version_id: cdktf.stringToTerraform(struct.schemaVersionId),
        schema_version_number: cdktf.numberToTerraform(struct.schemaVersionNumber),
        schema_id: glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct.schemaId),
    };
}
exports.glueCatalogTableStorageDescriptorSchemaReferenceToTerraform = glueCatalogTableStorageDescriptorSchemaReferenceToTerraform;
/**
 * @stability stable
 */
class GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // schema_id - computed: false, optional: true, required: false
        this._schemaId = new GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(this, "schema_id", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _h, _j;
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._schemaVersionId) {
            hasAnyValues = true;
            internalValueResult.schemaVersionId = this._schemaVersionId;
        }
        if (this._schemaVersionNumber) {
            hasAnyValues = true;
            internalValueResult.schemaVersionNumber = this._schemaVersionNumber;
        }
        if ((_h = this._schemaId) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.schemaId = (_j = this._schemaId) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._schemaVersionId = undefined;
            this._schemaVersionNumber = undefined;
            this._schemaId.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._schemaVersionId = value.schemaVersionId;
            this._schemaVersionNumber = value.schemaVersionNumber;
            this._schemaId.internalValue = value.schemaId;
        }
    }
    /**
     * @stability stable
     */
    get schemaVersionId() {
        return this.getStringAttribute('schema_version_id');
    }
    /**
     * @stability stable
     */
    set schemaVersionId(value) {
        this._schemaVersionId = value;
    }
    /**
     * @stability stable
     */
    resetSchemaVersionId() {
        this._schemaVersionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaVersionIdInput() {
        return this._schemaVersionId;
    }
    /**
     * @stability stable
     */
    get schemaVersionNumber() {
        return this.getNumberAttribute('schema_version_number');
    }
    /**
     * @stability stable
     */
    set schemaVersionNumber(value) {
        this._schemaVersionNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaVersionNumberInput() {
        return this._schemaVersionNumber;
    }
    /**
     * @stability stable
     */
    get schemaId() {
        return this._schemaId;
    }
    /**
     * @stability stable
     */
    putSchemaId(value) {
        this._schemaId.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSchemaId() {
        this._schemaId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaIdInput() {
        return this._schemaId.internalValue;
    }
}
exports.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference = GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference[_b] = { fqn: "@cdktf/provider-aws.glue.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference", version: "3.0.1" };
function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct) {
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
exports.glueCatalogTableStorageDescriptorSerDeInfoToTerraform = glueCatalogTableStorageDescriptorSerDeInfoToTerraform;
/**
 * @stability stable
 */
class GlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
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
exports.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference = GlueCatalogTableStorageDescriptorSerDeInfoOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GlueCatalogTableStorageDescriptorSerDeInfoOutputReference[_c] = { fqn: "@cdktf/provider-aws.glue.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference", version: "3.0.1" };
function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct) {
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
exports.glueCatalogTableStorageDescriptorSkewedInfoToTerraform = glueCatalogTableStorageDescriptorSkewedInfoToTerraform;
/**
 * @stability stable
 */
class GlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
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
exports.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference = GlueCatalogTableStorageDescriptorSkewedInfoOutputReference;
_d = JSII_RTTI_SYMBOL_1;
GlueCatalogTableStorageDescriptorSkewedInfoOutputReference[_d] = { fqn: "@cdktf/provider-aws.glue.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference", version: "3.0.1" };
function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct) {
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
exports.glueCatalogTableStorageDescriptorSortColumnsToTerraform = glueCatalogTableStorageDescriptorSortColumnsToTerraform;
function glueCatalogTableStorageDescriptorToTerraform(struct) {
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
        columns: cdktf.listMapper(glueCatalogTableStorageDescriptorColumnsToTerraform)(struct.columns),
        schema_reference: glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct.schemaReference),
        ser_de_info: glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct.serDeInfo),
        skewed_info: glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct.skewedInfo),
        sort_columns: cdktf.listMapper(glueCatalogTableStorageDescriptorSortColumnsToTerraform)(struct.sortColumns),
    };
}
exports.glueCatalogTableStorageDescriptorToTerraform = glueCatalogTableStorageDescriptorToTerraform;
/**
 * @stability stable
 */
class GlueCatalogTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
    /**
     * @param terraformResource The parent resource.
     * @param terraformAttribute The attribute on the parent resource this class is referencing.
     * @param isSingleItem True if this is a block, false if it's a list.
     * @stability stable
     */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
        this.isEmptyObject = false;
        // schema_reference - computed: false, optional: true, required: false
        this._schemaReference = new GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(this, "schema_reference", true);
        // ser_de_info - computed: false, optional: true, required: false
        this._serDeInfo = new GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(this, "ser_de_info", true);
        // skewed_info - computed: false, optional: true, required: false
        this._skewedInfo = new GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(this, "skewed_info", true);
    }
    /**
     * @stability stable
     */
    get internalValue() {
        var _h, _j, _k, _l, _m, _o;
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
        if ((_h = this._schemaReference) === null || _h === void 0 ? void 0 : _h.internalValue) {
            hasAnyValues = true;
            internalValueResult.schemaReference = (_j = this._schemaReference) === null || _j === void 0 ? void 0 : _j.internalValue;
        }
        if ((_k = this._serDeInfo) === null || _k === void 0 ? void 0 : _k.internalValue) {
            hasAnyValues = true;
            internalValueResult.serDeInfo = (_l = this._serDeInfo) === null || _l === void 0 ? void 0 : _l.internalValue;
        }
        if ((_m = this._skewedInfo) === null || _m === void 0 ? void 0 : _m.internalValue) {
            hasAnyValues = true;
            internalValueResult.skewedInfo = (_o = this._skewedInfo) === null || _o === void 0 ? void 0 : _o.internalValue;
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
            this._schemaReference.internalValue = undefined;
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
            this._schemaReference.internalValue = value.schemaReference;
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
    get schemaReference() {
        return this._schemaReference;
    }
    /**
     * @stability stable
     */
    putSchemaReference(value) {
        this._schemaReference.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetSchemaReference() {
        this._schemaReference.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get schemaReferenceInput() {
        return this._schemaReference.internalValue;
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
exports.GlueCatalogTableStorageDescriptorOutputReference = GlueCatalogTableStorageDescriptorOutputReference;
_e = JSII_RTTI_SYMBOL_1;
GlueCatalogTableStorageDescriptorOutputReference[_e] = { fqn: "@cdktf/provider-aws.glue.GlueCatalogTableStorageDescriptorOutputReference", version: "3.0.1" };
function glueCatalogTableTargetTableToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        name: cdktf.stringToTerraform(struct.name),
    };
}
exports.glueCatalogTableTargetTableToTerraform = glueCatalogTableTargetTableToTerraform;
/**
 * @stability stable
 */
class GlueCatalogTableTargetTableOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
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
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._catalogId = value.catalogId;
            this._databaseName = value.databaseName;
            this._name = value.name;
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
}
exports.GlueCatalogTableTargetTableOutputReference = GlueCatalogTableTargetTableOutputReference;
_f = JSII_RTTI_SYMBOL_1;
GlueCatalogTableTargetTableOutputReference[_f] = { fqn: "@cdktf/provider-aws.glue.GlueCatalogTableTargetTableOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table}.
 *
 * @stability stable
 */
class GlueCatalogTable extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_catalog_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // storage_descriptor - computed: false, optional: true, required: false
        this._storageDescriptor = new GlueCatalogTableStorageDescriptorOutputReference(this, "storage_descriptor", true);
        // target_table - computed: false, optional: true, required: false
        this._targetTable = new GlueCatalogTableTargetTableOutputReference(this, "target_table", true);
        this._catalogId = config.catalogId;
        this._databaseName = config.databaseName;
        this._description = config.description;
        this._name = config.name;
        this._owner = config.owner;
        this._parameters = config.parameters;
        this._retention = config.retention;
        this._tableType = config.tableType;
        this._viewExpandedText = config.viewExpandedText;
        this._viewOriginalText = config.viewOriginalText;
        this._partitionIndex = config.partitionIndex;
        this._partitionKeys = config.partitionKeys;
        this._storageDescriptor.internalValue = config.storageDescriptor;
        this._targetTable.internalValue = config.targetTable;
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
    get owner() {
        return this.getStringAttribute('owner');
    }
    /**
     * @stability stable
     */
    set owner(value) {
        this._owner = value;
    }
    /**
     * @stability stable
     */
    resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get ownerInput() {
        return this._owner;
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
    get retention() {
        return this.getNumberAttribute('retention');
    }
    /**
     * @stability stable
     */
    set retention(value) {
        this._retention = value;
    }
    /**
     * @stability stable
     */
    resetRetention() {
        this._retention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get retentionInput() {
        return this._retention;
    }
    /**
     * @stability stable
     */
    get tableType() {
        return this.getStringAttribute('table_type');
    }
    /**
     * @stability stable
     */
    set tableType(value) {
        this._tableType = value;
    }
    /**
     * @stability stable
     */
    resetTableType() {
        this._tableType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tableTypeInput() {
        return this._tableType;
    }
    /**
     * @stability stable
     */
    get viewExpandedText() {
        return this.getStringAttribute('view_expanded_text');
    }
    /**
     * @stability stable
     */
    set viewExpandedText(value) {
        this._viewExpandedText = value;
    }
    /**
     * @stability stable
     */
    resetViewExpandedText() {
        this._viewExpandedText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get viewExpandedTextInput() {
        return this._viewExpandedText;
    }
    /**
     * @stability stable
     */
    get viewOriginalText() {
        return this.getStringAttribute('view_original_text');
    }
    /**
     * @stability stable
     */
    set viewOriginalText(value) {
        this._viewOriginalText = value;
    }
    /**
     * @stability stable
     */
    resetViewOriginalText() {
        this._viewOriginalText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get viewOriginalTextInput() {
        return this._viewOriginalText;
    }
    /**
     * @stability stable
     */
    get partitionIndex() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('partition_index');
    }
    /**
     * @stability stable
     */
    set partitionIndex(value) {
        this._partitionIndex = value;
    }
    /**
     * @stability stable
     */
    resetPartitionIndex() {
        this._partitionIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionIndexInput() {
        return this._partitionIndex;
    }
    /**
     * @stability stable
     */
    get partitionKeys() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('partition_keys');
    }
    /**
     * @stability stable
     */
    set partitionKeys(value) {
        this._partitionKeys = value;
    }
    /**
     * @stability stable
     */
    resetPartitionKeys() {
        this._partitionKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get partitionKeysInput() {
        return this._partitionKeys;
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
    /**
     * @stability stable
     */
    get targetTable() {
        return this._targetTable;
    }
    /**
     * @stability stable
     */
    putTargetTable(value) {
        this._targetTable.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetTargetTable() {
        this._targetTable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get targetTableInput() {
        return this._targetTable.internalValue;
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
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            owner: cdktf.stringToTerraform(this._owner),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            retention: cdktf.numberToTerraform(this._retention),
            table_type: cdktf.stringToTerraform(this._tableType),
            view_expanded_text: cdktf.stringToTerraform(this._viewExpandedText),
            view_original_text: cdktf.stringToTerraform(this._viewOriginalText),
            partition_index: cdktf.listMapper(glueCatalogTablePartitionIndexToTerraform)(this._partitionIndex),
            partition_keys: cdktf.listMapper(glueCatalogTablePartitionKeysToTerraform)(this._partitionKeys),
            storage_descriptor: glueCatalogTableStorageDescriptorToTerraform(this._storageDescriptor.internalValue),
            target_table: glueCatalogTableTargetTableToTerraform(this._targetTable.internalValue),
        };
    }
}
exports.GlueCatalogTable = GlueCatalogTable;
_g = JSII_RTTI_SYMBOL_1;
GlueCatalogTable[_g] = { fqn: "@cdktf/provider-aws.glue.GlueCatalogTable", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GlueCatalogTable.tfResourceType = "aws_glue_catalog_table";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1jYXRhbG9nLXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dsdWUvZ2x1ZS1jYXRhbG9nLXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBd0MvQixTQUFnQix5Q0FBeUMsQ0FBQyxNQUF1QztJQUMvRixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUN0RCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO0tBQzlELENBQUE7QUFDSCxDQUFDO0FBVEQsOEZBU0M7QUFXRCxTQUFnQix3Q0FBd0MsQ0FBQyxNQUFzQztJQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FB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LENBQUM7O0FBdlNILDRDQXdTQzs7O0FBdFNDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csK0JBQWMsR0FBVyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIEdsdWVDYXRhbG9nVGFibGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgZGF0YWJhc2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBvd25lcj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXRlbnRpb24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFibGVUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aWV3RXhwYW5kZWRUZXh0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB2aWV3T3JpZ2luYWxUZXh0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFydGl0aW9uSW5kZXg/OiBHbHVlQ2F0YWxvZ1RhYmxlUGFydGl0aW9uSW5kZXhbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcnRpdGlvbktleXM/OiBHbHVlQ2F0YWxvZ1RhYmxlUGFydGl0aW9uS2V5c1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmFnZURlc2NyaXB0b3I/OiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0YXJnZXRUYWJsZT86IEdsdWVDYXRhbG9nVGFibGVUYXJnZXRUYWJsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZUNhdGFsb2dUYWJsZVBhcnRpdGlvbkluZGV4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBpbmRleE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBrZXlzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVDYXRhbG9nVGFibGVQYXJ0aXRpb25JbmRleFRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDYXRhbG9nVGFibGVQYXJ0aXRpb25JbmRleCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluZGV4X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhOYW1lKSxcbiAgICBrZXlzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmtleXMpLFxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZUNhdGFsb2dUYWJsZVBhcnRpdGlvbktleXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlQ2F0YWxvZ1RhYmxlUGFydGl0aW9uS2V5c1RvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDYXRhbG9nVGFibGVQYXJ0aXRpb25LZXlzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY29tbWVudDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21tZW50KSxcbiAgICBuYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5hbWUpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21tZW50Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBwYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yQ29sdW1ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbW1lbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tbWVudCksXG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICAgIHR5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2VTY2hlbWFJZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVnaXN0cnlOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtYUFybj86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtYU5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2VTY2hlbWFJZFRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNjaGVtYVJlZmVyZW5jZVNjaGVtYUlkT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2NoZW1hUmVmZXJlbmNlU2NoZW1hSWQpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZWdpc3RyeV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJlZ2lzdHJ5TmFtZSksXG4gICAgc2NoZW1hX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWFBcm4pLFxuICAgIHNjaGVtYV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVtYU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2VTY2hlbWFJZE91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2VTY2hlbWFJZCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fcmVnaXN0cnlOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5yZWdpc3RyeU5hbWUgPSB0aGlzLl9yZWdpc3RyeU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlbWFBcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjaGVtYUFybiA9IHRoaXMuX3NjaGVtYUFybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NjaGVtYU5hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNjaGVtYU5hbWUgPSB0aGlzLl9zY2hlbWFOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2NoZW1hUmVmZXJlbmNlU2NoZW1hSWQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWdpc3RyeU5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2hlbWFBcm4gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2hlbWFOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9yZWdpc3RyeU5hbWUgPSB2YWx1ZS5yZWdpc3RyeU5hbWU7XG4gICAgICB0aGlzLl9zY2hlbWFBcm4gPSB2YWx1ZS5zY2hlbWFBcm47XG4gICAgICB0aGlzLl9zY2hlbWFOYW1lID0gdmFsdWUuc2NoZW1hTmFtZTtcbiAgICB9XG4gIH1cblxuICAvLyByZWdpc3RyeV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlZ2lzdHJ5TmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcmVnaXN0cnlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncmVnaXN0cnlfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVnaXN0cnlOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZWdpc3RyeU5hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRSZWdpc3RyeU5hbWUoKSB7XG4gICAgdGhpcy5fcmVnaXN0cnlOYW1lID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZWdpc3RyeU5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnlOYW1lO1xuICB9XG5cbiAgLy8gc2NoZW1hX2FybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2hlbWFBcm4/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjaGVtYUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjaGVtYV9hcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNjaGVtYUFybih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NoZW1hQXJuID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NoZW1hQXJuKCkge1xuICAgIHRoaXMuX3NjaGVtYUFybiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZW1hQXJuSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtYUFybjtcbiAgfVxuXG4gIC8vIHNjaGVtYV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NjaGVtYU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjaGVtYU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzY2hlbWFfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZW1hTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2NoZW1hTmFtZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVtYU5hbWUoKSB7XG4gICAgdGhpcy5fc2NoZW1hTmFtZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NoZW1hTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWFOYW1lO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNjaGVtYVJlZmVyZW5jZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWFWZXJzaW9uSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtYVZlcnNpb25OdW1iZXI6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNjaGVtYUlkPzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2NoZW1hUmVmZXJlbmNlU2NoZW1hSWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2VPdXRwdXRSZWZlcmVuY2UgfCBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY2hlbWFfdmVyc2lvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWFWZXJzaW9uSWQpLFxuICAgIHNjaGVtYV92ZXJzaW9uX251bWJlcjogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWFWZXJzaW9uTnVtYmVyKSxcbiAgICBzY2hlbWFfaWQ6IGdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNjaGVtYVJlZmVyZW5jZVNjaGVtYUlkVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWFJZCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNjaGVtYVJlZmVyZW5jZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2UgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NjaGVtYVZlcnNpb25JZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NoZW1hVmVyc2lvbklkID0gdGhpcy5fc2NoZW1hVmVyc2lvbklkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NoZW1hVmVyc2lvbk51bWJlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NoZW1hVmVyc2lvbk51bWJlciA9IHRoaXMuX3NjaGVtYVZlcnNpb25OdW1iZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zY2hlbWFJZD8uaW50ZXJuYWxWYWx1ZSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2NoZW1hSWQgPSB0aGlzLl9zY2hlbWFJZD8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNjaGVtYVJlZmVyZW5jZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NjaGVtYVZlcnNpb25JZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NjaGVtYVZlcnNpb25OdW1iZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2hlbWFJZC5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9zY2hlbWFWZXJzaW9uSWQgPSB2YWx1ZS5zY2hlbWFWZXJzaW9uSWQ7XG4gICAgICB0aGlzLl9zY2hlbWFWZXJzaW9uTnVtYmVyID0gdmFsdWUuc2NoZW1hVmVyc2lvbk51bWJlcjtcbiAgICAgIHRoaXMuX3NjaGVtYUlkLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zY2hlbWFJZDtcbiAgICB9XG4gIH1cblxuICAvLyBzY2hlbWFfdmVyc2lvbl9pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2hlbWFWZXJzaW9uSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNjaGVtYVZlcnNpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NjaGVtYV92ZXJzaW9uX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBzY2hlbWFWZXJzaW9uSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NjaGVtYVZlcnNpb25JZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVtYVZlcnNpb25JZCgpIHtcbiAgICB0aGlzLl9zY2hlbWFWZXJzaW9uSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVtYVZlcnNpb25JZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWFWZXJzaW9uSWQ7XG4gIH1cblxuICAvLyBzY2hlbWFfdmVyc2lvbl9udW1iZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfc2NoZW1hVmVyc2lvbk51bWJlcj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgc2NoZW1hVmVyc2lvbk51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NjaGVtYV92ZXJzaW9uX251bWJlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2NoZW1hVmVyc2lvbk51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2NoZW1hVmVyc2lvbk51bWJlciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzY2hlbWFWZXJzaW9uTnVtYmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtYVZlcnNpb25OdW1iZXI7XG4gIH1cblxuICAvLyBzY2hlbWFfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2NoZW1hSWQgPSBuZXcgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2NoZW1hUmVmZXJlbmNlU2NoZW1hSWRPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2NoZW1hX2lkXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHNjaGVtYUlkKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWFJZDtcbiAgfVxuICBwdWJsaWMgcHV0U2NoZW1hSWQodmFsdWU6IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNjaGVtYVJlZmVyZW5jZVNjaGVtYUlkKSB7XG4gICAgdGhpcy5fc2NoZW1hSWQuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNjaGVtYUlkKCkge1xuICAgIHRoaXMuX3NjaGVtYUlkLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVtYUlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtYUlkLmludGVybmFsVmFsdWU7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNlcmlhbGl6YXRpb25MaWJyYXJ5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5uYW1lKSxcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnBhcmFtZXRlcnMpLFxuICAgIHNlcmlhbGl6YXRpb25fbGlicmFyeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zZXJpYWxpemF0aW9uTGlicmFyeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNlckRlSW5mb091dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm8gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX25hbWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFyYW1ldGVycykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYW1ldGVycyA9IHRoaXMuX3BhcmFtZXRlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJpYWxpemF0aW9uTGlicmFyeSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuc2VyaWFsaXphdGlvbkxpYnJhcnkgPSB0aGlzLl9zZXJpYWxpemF0aW9uTGlicmFyeTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNlckRlSW5mbyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VyaWFsaXphdGlvbkxpYnJhcnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgICAgdGhpcy5fcGFyYW1ldGVycyA9IHZhbHVlLnBhcmFtZXRlcnM7XG4gICAgICB0aGlzLl9zZXJpYWxpemF0aW9uTGlicmFyeSA9IHZhbHVlLnNlcmlhbGl6YXRpb25MaWJyYXJ5O1xuICAgIH1cbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROYW1lKCkge1xuICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFtZXRlcnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVycztcbiAgfVxuXG4gIC8vIHNlcmlhbGl6YXRpb25fbGlicmFyeSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zZXJpYWxpemF0aW9uTGlicmFyeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgc2VyaWFsaXphdGlvbkxpYnJhcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZXJpYWxpemF0aW9uX2xpYnJhcnknKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNlcmlhbGl6YXRpb25MaWJyYXJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXJpYWxpemF0aW9uTGlicmFyeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNlcmlhbGl6YXRpb25MaWJyYXJ5KCkge1xuICAgIHRoaXMuX3NlcmlhbGl6YXRpb25MaWJyYXJ5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzZXJpYWxpemF0aW9uTGlicmFyeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJpYWxpemF0aW9uTGlicmFyeTtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTa2V3ZWRJbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBza2V3ZWRDb2x1bW5OYW1lcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBza2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNrZXdlZENvbHVtblZhbHVlcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mb1RvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm9PdXRwdXRSZWZlcmVuY2UgfCBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTa2V3ZWRJbmZvKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2tld2VkX2NvbHVtbl9uYW1lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5za2V3ZWRDb2x1bW5OYW1lcyksXG4gICAgc2tld2VkX2NvbHVtbl92YWx1ZV9sb2NhdGlvbl9tYXBzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKShzdHJ1Y3QhLnNrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzKSxcbiAgICBza2V3ZWRfY29sdW1uX3ZhbHVlczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5za2V3ZWRDb2x1bW5WYWx1ZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTa2V3ZWRJbmZvT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm8gfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX3NrZXdlZENvbHVtbk5hbWVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5za2V3ZWRDb2x1bW5OYW1lcyA9IHRoaXMuX3NrZXdlZENvbHVtbk5hbWVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzID0gdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZXMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNrZXdlZENvbHVtblZhbHVlcyA9IHRoaXMuX3NrZXdlZENvbHVtblZhbHVlcztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm8gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9za2V3ZWRDb2x1bW5OYW1lcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9za2V3ZWRDb2x1bW5OYW1lcyA9IHZhbHVlLnNrZXdlZENvbHVtbk5hbWVzO1xuICAgICAgdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMgPSB2YWx1ZS5za2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcztcbiAgICAgIHRoaXMuX3NrZXdlZENvbHVtblZhbHVlcyA9IHZhbHVlLnNrZXdlZENvbHVtblZhbHVlcztcbiAgICB9XG4gIH1cblxuICAvLyBza2V3ZWRfY29sdW1uX25hbWVzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NrZXdlZENvbHVtbk5hbWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNrZXdlZENvbHVtbk5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NrZXdlZF9jb2x1bW5fbmFtZXMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHNrZXdlZENvbHVtbk5hbWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NrZXdlZENvbHVtbk5hbWVzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tld2VkQ29sdW1uTmFtZXMoKSB7XG4gICAgdGhpcy5fc2tld2VkQ29sdW1uTmFtZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNrZXdlZENvbHVtbk5hbWVzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NrZXdlZENvbHVtbk5hbWVzO1xuICB9XG5cbiAgLy8gc2tld2VkX2NvbHVtbl92YWx1ZV9sb2NhdGlvbl9tYXBzIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBza2V3ZWRDb2x1bW5WYWx1ZUxvY2F0aW9uTWFwcygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2tld2VkX2NvbHVtbl92YWx1ZV9sb2NhdGlvbl9tYXBzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3NrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMoKSB7XG4gICAgdGhpcy5fc2tld2VkQ29sdW1uVmFsdWVMb2NhdGlvbk1hcHMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NrZXdlZENvbHVtblZhbHVlTG9jYXRpb25NYXBzO1xuICB9XG5cbiAgLy8gc2tld2VkX2NvbHVtbl92YWx1ZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc2tld2VkQ29sdW1uVmFsdWVzPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IHNrZXdlZENvbHVtblZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdza2V3ZWRfY29sdW1uX3ZhbHVlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgc2tld2VkQ29sdW1uVmFsdWVzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3NrZXdlZENvbHVtblZhbHVlcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFNrZXdlZENvbHVtblZhbHVlcygpIHtcbiAgICB0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNrZXdlZENvbHVtblZhbHVlc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9za2V3ZWRDb2x1bW5WYWx1ZXM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU29ydENvbHVtbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb2x1bW46IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3J0T3JkZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNvcnRDb2x1bW5zVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU29ydENvbHVtbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uKSxcbiAgICBzb3J0X29yZGVyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNvcnRPcmRlciksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgYnVja2V0Q29sdW1ucz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbXByZXNzZWQ/OiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlucHV0Rm9ybWF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbG9jYXRpb24/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBudW1iZXJPZkJ1Y2tldHM/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgb3V0cHV0Rm9ybWF0Pzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgc3RvcmVkQXNTdWJEaXJlY3Rvcmllcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNvbHVtbnM/OiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY2hlbWFSZWZlcmVuY2U/OiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTY2hlbWFSZWZlcmVuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzZXJEZUluZm8/OiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBza2V3ZWRJbmZvPzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvcnRDb2x1bW5zPzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU29ydENvbHVtbnNbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvck91dHB1dFJlZmVyZW5jZSB8IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9jb2x1bW5zOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmJ1Y2tldENvbHVtbnMpLFxuICAgIGNvbXByZXNzZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzZWQpLFxuICAgIGlucHV0X2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbnB1dEZvcm1hdCksXG4gICAgbG9jYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9jYXRpb24pLFxuICAgIG51bWJlcl9vZl9idWNrZXRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm51bWJlck9mQnVja2V0cyksXG4gICAgb3V0cHV0X2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vdXRwdXRGb3JtYXQpLFxuICAgIHBhcmFtZXRlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gICAgc3RvcmVkX2FzX3N1Yl9kaXJlY3RvcmllczogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuc3RvcmVkQXNTdWJEaXJlY3RvcmllcyksXG4gICAgY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihnbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JDb2x1bW5zVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1ucyksXG4gICAgc2NoZW1hX3JlZmVyZW5jZTogZ2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2NoZW1hUmVmZXJlbmNlVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWFSZWZlcmVuY2UpLFxuICAgIHNlcl9kZV9pbmZvOiBnbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm9Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNlckRlSW5mbyksXG4gICAgc2tld2VkX2luZm86IGdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvclNrZXdlZEluZm9Ub1RlcnJhZm9ybShzdHJ1Y3QhLnNrZXdlZEluZm8pLFxuICAgIHNvcnRfY29sdW1uczogY2RrdGYubGlzdE1hcHBlcihnbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTb3J0Q29sdW1uc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNvcnRDb2x1bW5zKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fYnVja2V0Q29sdW1ucykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYnVja2V0Q29sdW1ucyA9IHRoaXMuX2J1Y2tldENvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wcmVzc2VkKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb21wcmVzc2VkID0gdGhpcy5fY29tcHJlc3NlZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lucHV0Rm9ybWF0KSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5pbnB1dEZvcm1hdCA9IHRoaXMuX2lucHV0Rm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fbG9jYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmxvY2F0aW9uID0gdGhpcy5fbG9jYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9udW1iZXJPZkJ1Y2tldHMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lm51bWJlck9mQnVja2V0cyA9IHRoaXMuX251bWJlck9mQnVja2V0cztcbiAgICB9XG4gICAgaWYgKHRoaXMuX291dHB1dEZvcm1hdCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3V0cHV0Rm9ybWF0ID0gdGhpcy5fb3V0cHV0Rm9ybWF0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGFyYW1ldGVycykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQucGFyYW1ldGVycyA9IHRoaXMuX3BhcmFtZXRlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdG9yZWRBc1N1YkRpcmVjdG9yaWVzKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zdG9yZWRBc1N1YkRpcmVjdG9yaWVzID0gdGhpcy5fc3RvcmVkQXNTdWJEaXJlY3RvcmllcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbHVtbnMgPSB0aGlzLl9jb2x1bW5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2NoZW1hUmVmZXJlbmNlPy5pbnRlcm5hbFZhbHVlKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zY2hlbWFSZWZlcmVuY2UgPSB0aGlzLl9zY2hlbWFSZWZlcmVuY2U/LmludGVybmFsVmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZXJEZUluZm8/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNlckRlSW5mbyA9IHRoaXMuX3NlckRlSW5mbz8uaW50ZXJuYWxWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NrZXdlZEluZm8/LmludGVybmFsVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNrZXdlZEluZm8gPSB0aGlzLl9za2V3ZWRJbmZvPy5pbnRlcm5hbFZhbHVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc29ydENvbHVtbnMpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvcnRDb2x1bW5zID0gdGhpcy5fc29ydENvbHVtbnM7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3IgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9idWNrZXRDb2x1bW5zID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY29tcHJlc3NlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2lucHV0Rm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9udW1iZXJPZkJ1Y2tldHMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vdXRwdXRGb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9wYXJhbWV0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3RvcmVkQXNTdWJEaXJlY3RvcmllcyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2hlbWFSZWZlcmVuY2UuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3NlckRlSW5mby5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2tld2VkSW5mby5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc29ydENvbHVtbnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2J1Y2tldENvbHVtbnMgPSB2YWx1ZS5idWNrZXRDb2x1bW5zO1xuICAgICAgdGhpcy5fY29tcHJlc3NlZCA9IHZhbHVlLmNvbXByZXNzZWQ7XG4gICAgICB0aGlzLl9pbnB1dEZvcm1hdCA9IHZhbHVlLmlucHV0Rm9ybWF0O1xuICAgICAgdGhpcy5fbG9jYXRpb24gPSB2YWx1ZS5sb2NhdGlvbjtcbiAgICAgIHRoaXMuX251bWJlck9mQnVja2V0cyA9IHZhbHVlLm51bWJlck9mQnVja2V0cztcbiAgICAgIHRoaXMuX291dHB1dEZvcm1hdCA9IHZhbHVlLm91dHB1dEZvcm1hdDtcbiAgICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB2YWx1ZS5wYXJhbWV0ZXJzO1xuICAgICAgdGhpcy5fc3RvcmVkQXNTdWJEaXJlY3RvcmllcyA9IHZhbHVlLnN0b3JlZEFzU3ViRGlyZWN0b3JpZXM7XG4gICAgICB0aGlzLl9jb2x1bW5zID0gdmFsdWUuY29sdW1ucztcbiAgICAgIHRoaXMuX3NjaGVtYVJlZmVyZW5jZS5pbnRlcm5hbFZhbHVlID0gdmFsdWUuc2NoZW1hUmVmZXJlbmNlO1xuICAgICAgdGhpcy5fc2VyRGVJbmZvLmludGVybmFsVmFsdWUgPSB2YWx1ZS5zZXJEZUluZm87XG4gICAgICB0aGlzLl9za2V3ZWRJbmZvLmludGVybmFsVmFsdWUgPSB2YWx1ZS5za2V3ZWRJbmZvO1xuICAgICAgdGhpcy5fc29ydENvbHVtbnMgPSB2YWx1ZS5zb3J0Q29sdW1ucztcbiAgICB9XG4gIH1cblxuICAvLyBidWNrZXRfY29sdW1ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9idWNrZXRDb2x1bW5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGJ1Y2tldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnYnVja2V0X2NvbHVtbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGJ1Y2tldENvbHVtbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYnVja2V0Q29sdW1ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEJ1Y2tldENvbHVtbnMoKSB7XG4gICAgdGhpcy5fYnVja2V0Q29sdW1ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgYnVja2V0Q29sdW1uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9idWNrZXRDb2x1bW5zO1xuICB9XG5cbiAgLy8gY29tcHJlc3NlZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb21wcmVzc2VkPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBjb21wcmVzc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvbXByZXNzZWQnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjb21wcmVzc2VkKHZhbHVlOiBib29sZWFuIHwgY2RrdGYuSVJlc29sdmFibGUpIHtcbiAgICB0aGlzLl9jb21wcmVzc2VkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29tcHJlc3NlZCgpIHtcbiAgICB0aGlzLl9jb21wcmVzc2VkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wcmVzc2VkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXByZXNzZWQ7XG4gIH1cblxuICAvLyBpbnB1dF9mb3JtYXQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5wdXRGb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGlucHV0Rm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5wdXRfZm9ybWF0Jyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dEZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXRGb3JtYXQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRJbnB1dEZvcm1hdCgpIHtcbiAgICB0aGlzLl9pbnB1dEZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaW5wdXRGb3JtYXRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRGb3JtYXQ7XG4gIH1cblxuICAvLyBsb2NhdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9sb2NhdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2NhdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgbG9jYXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0TG9jYXRpb24oKSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGxvY2F0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2F0aW9uO1xuICB9XG5cbiAgLy8gbnVtYmVyX29mX2J1Y2tldHMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbnVtYmVyT2ZCdWNrZXRzPzogbnVtYmVyOyBcbiAgcHVibGljIGdldCBudW1iZXJPZkJ1Y2tldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdudW1iZXJfb2ZfYnVja2V0cycpO1xuICB9XG4gIHB1YmxpYyBzZXQgbnVtYmVyT2ZCdWNrZXRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9udW1iZXJPZkJ1Y2tldHMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXROdW1iZXJPZkJ1Y2tldHMoKSB7XG4gICAgdGhpcy5fbnVtYmVyT2ZCdWNrZXRzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBudW1iZXJPZkJ1Y2tldHNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZCdWNrZXRzO1xuICB9XG5cbiAgLy8gb3V0cHV0X2Zvcm1hdCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vdXRwdXRGb3JtYXQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG91dHB1dEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ291dHB1dF9mb3JtYXQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG91dHB1dEZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3V0cHV0Rm9ybWF0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3V0cHV0Rm9ybWF0KCkge1xuICAgIHRoaXMuX291dHB1dEZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgb3V0cHV0Rm9ybWF0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX291dHB1dEZvcm1hdDtcbiAgfVxuXG4gIC8vIHBhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcmFtZXRlcnModmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJhbWV0ZXJzKCkge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVycztcbiAgfVxuXG4gIC8vIHN0b3JlZF9hc19zdWJfZGlyZWN0b3JpZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfc3RvcmVkQXNTdWJEaXJlY3Rvcmllcz86IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZTsgXG4gIHB1YmxpYyBnZXQgc3RvcmVkQXNTdWJEaXJlY3RvcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdzdG9yZWRfYXNfc3ViX2RpcmVjdG9yaWVzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc3RvcmVkQXNTdWJEaXJlY3Rvcmllcyh2YWx1ZTogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fc3RvcmVkQXNTdWJEaXJlY3RvcmllcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFN0b3JlZEFzU3ViRGlyZWN0b3JpZXMoKSB7XG4gICAgdGhpcy5fc3RvcmVkQXNTdWJEaXJlY3RvcmllcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc3RvcmVkQXNTdWJEaXJlY3Rvcmllc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZWRBc1N1YkRpcmVjdG9yaWVzO1xuICB9XG5cbiAgLy8gY29sdW1ucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jb2x1bW5zPzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yQ29sdW1uc1tdOyBcbiAgcHVibGljIGdldCBjb2x1bW5zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5zJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgY29sdW1ucyh2YWx1ZTogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yQ29sdW1uc1tdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbHVtbnMoKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29sdW1uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICB9XG5cbiAgLy8gc2NoZW1hX3JlZmVyZW5jZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zY2hlbWFSZWZlcmVuY2UgPSBuZXcgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2NoZW1hUmVmZXJlbmNlT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcInNjaGVtYV9yZWZlcmVuY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2NoZW1hUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWFSZWZlcmVuY2U7XG4gIH1cbiAgcHVibGljIHB1dFNjaGVtYVJlZmVyZW5jZSh2YWx1ZTogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2NoZW1hUmVmZXJlbmNlKSB7XG4gICAgdGhpcy5fc2NoZW1hUmVmZXJlbmNlLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTY2hlbWFSZWZlcmVuY2UoKSB7XG4gICAgdGhpcy5fc2NoZW1hUmVmZXJlbmNlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNjaGVtYVJlZmVyZW5jZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY2hlbWFSZWZlcmVuY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNlcl9kZV9pbmZvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NlckRlSW5mbyA9IG5ldyBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTZXJEZUluZm9PdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic2VyX2RlX2luZm9cIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc2VyRGVJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJEZUluZm87XG4gIH1cbiAgcHVibGljIHB1dFNlckRlSW5mbyh2YWx1ZTogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2VyRGVJbmZvKSB7XG4gICAgdGhpcy5fc2VyRGVJbmZvLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTZXJEZUluZm8oKSB7XG4gICAgdGhpcy5fc2VyRGVJbmZvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNlckRlSW5mb0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZXJEZUluZm8uaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNrZXdlZF9pbmZvIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NrZXdlZEluZm8gPSBuZXcgR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU2tld2VkSW5mb091dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJza2V3ZWRfaW5mb1wiLCB0cnVlKTtcbiAgcHVibGljIGdldCBza2V3ZWRJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLl9za2V3ZWRJbmZvO1xuICB9XG4gIHB1YmxpYyBwdXRTa2V3ZWRJbmZvKHZhbHVlOiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTa2V3ZWRJbmZvKSB7XG4gICAgdGhpcy5fc2tld2VkSW5mby5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2tld2VkSW5mbygpIHtcbiAgICB0aGlzLl9za2V3ZWRJbmZvLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNrZXdlZEluZm9JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2tld2VkSW5mby5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gc29ydF9jb2x1bW5zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvcnRDb2x1bW5zPzogR2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yU29ydENvbHVtbnNbXTsgXG4gIHB1YmxpYyBnZXQgc29ydENvbHVtbnMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NvcnRfY29sdW1ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHNvcnRDb2x1bW5zKHZhbHVlOiBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JTb3J0Q29sdW1uc1tdKSB7XG4gICAgdGhpcy5fc29ydENvbHVtbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3J0Q29sdW1ucygpIHtcbiAgICB0aGlzLl9zb3J0Q29sdW1ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc29ydENvbHVtbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydENvbHVtbnM7XG4gIH1cbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2x1ZUNhdGFsb2dUYWJsZVRhcmdldFRhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXRhbG9nSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkYXRhYmFzZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlQ2F0YWxvZ1RhYmxlVGFyZ2V0VGFibGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBHbHVlQ2F0YWxvZ1RhYmxlVGFyZ2V0VGFibGVPdXRwdXRSZWZlcmVuY2UgfCBHbHVlQ2F0YWxvZ1RhYmxlVGFyZ2V0VGFibGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjYXRhbG9nX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNhdGFsb2dJZCksXG4gICAgZGF0YWJhc2VfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZU5hbWUpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdsdWVDYXRhbG9nVGFibGVUYXJnZXRUYWJsZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlQ2F0YWxvZ1RhYmxlVGFyZ2V0VGFibGUgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2NhdGFsb2dJZCkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2F0YWxvZ0lkID0gdGhpcy5fY2F0YWxvZ0lkO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGF0YWJhc2VOYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kYXRhYmFzZU5hbWUgPSB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9uYW1lKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5uYW1lID0gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVDYXRhbG9nVGFibGVUYXJnZXRUYWJsZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NhdGFsb2dJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX25hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NhdGFsb2dJZCA9IHZhbHVlLmNhdGFsb2dJZDtcbiAgICAgIHRoaXMuX2RhdGFiYXNlTmFtZSA9IHZhbHVlLmRhdGFiYXNlTmFtZTtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZS5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhdGFsb2dfaWQgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2F0YWxvZ0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYXRhbG9nSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXRhbG9nX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXRhbG9nSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjYXRhbG9nSWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2F0YWxvZ0lkO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9kYXRhYmFzZU5hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFiYXNlX25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGRhdGFiYXNlTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGF0YWJhc2VOYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlTmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhYmFzZU5hbWU7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX25hbWU/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCduYW1lJyk7XG4gIH1cbiAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG5hbWVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEdsdWVDYXRhbG9nVGFibGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfZ2x1ZV9jYXRhbG9nX3RhYmxlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IEdsdWVDYXRhbG9nVGFibGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19nbHVlX2NhdGFsb2dfdGFibGUnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gY29uZmlnLmNhdGFsb2dJZDtcbiAgICB0aGlzLl9kYXRhYmFzZU5hbWUgPSBjb25maWcuZGF0YWJhc2VOYW1lO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gY29uZmlnLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX25hbWUgPSBjb25maWcubmFtZTtcbiAgICB0aGlzLl9vd25lciA9IGNvbmZpZy5vd25lcjtcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gY29uZmlnLnBhcmFtZXRlcnM7XG4gICAgdGhpcy5fcmV0ZW50aW9uID0gY29uZmlnLnJldGVudGlvbjtcbiAgICB0aGlzLl90YWJsZVR5cGUgPSBjb25maWcudGFibGVUeXBlO1xuICAgIHRoaXMuX3ZpZXdFeHBhbmRlZFRleHQgPSBjb25maWcudmlld0V4cGFuZGVkVGV4dDtcbiAgICB0aGlzLl92aWV3T3JpZ2luYWxUZXh0ID0gY29uZmlnLnZpZXdPcmlnaW5hbFRleHQ7XG4gICAgdGhpcy5fcGFydGl0aW9uSW5kZXggPSBjb25maWcucGFydGl0aW9uSW5kZXg7XG4gICAgdGhpcy5fcGFydGl0aW9uS2V5cyA9IGNvbmZpZy5wYXJ0aXRpb25LZXlzO1xuICAgIHRoaXMuX3N0b3JhZ2VEZXNjcmlwdG9yLmludGVybmFsVmFsdWUgPSBjb25maWcuc3RvcmFnZURlc2NyaXB0b3I7XG4gICAgdGhpcy5fdGFyZ2V0VGFibGUuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy50YXJnZXRUYWJsZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBjYXRhbG9nX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY2F0YWxvZ0lkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjYXRhbG9nSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjYXRhbG9nX2lkJyk7XG4gIH1cbiAgcHVibGljIHNldCBjYXRhbG9nSWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENhdGFsb2dJZCgpIHtcbiAgICB0aGlzLl9jYXRhbG9nSWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jYXRhbG9nSWQ7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9uYW1lIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2RhdGFiYXNlTmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGF0YWJhc2VOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kYXRhYmFzZU5hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFiYXNlTmFtZTtcbiAgfVxuXG4gIC8vIGRlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXREZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBvd25lciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9vd25lcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgb3duZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvd25lcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgb3duZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX293bmVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0T3duZXIoKSB7XG4gICAgdGhpcy5fb3duZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IG93bmVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX293bmVyO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9wYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFyYW1ldGVycyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFBhcmFtZXRlcnMoKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzO1xuICB9XG5cbiAgLy8gcmV0ZW50aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JldGVudGlvbj86IG51bWJlcjsgXG4gIHB1YmxpYyBnZXQgcmV0ZW50aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncmV0ZW50aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXRlbnRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JldGVudGlvbiA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJldGVudGlvbigpIHtcbiAgICB0aGlzLl9yZXRlbnRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJldGVudGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXRlbnRpb247XG4gIH1cblxuICAvLyB0YWJsZV90eXBlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhYmxlVHlwZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFibGVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfdHlwZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFibGVUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YWJsZVR5cGUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWJsZVR5cGUoKSB7XG4gICAgdGhpcy5fdGFibGVUeXBlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWJsZVR5cGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVUeXBlO1xuICB9XG5cbiAgLy8gdmlld19leHBhbmRlZF90ZXh0IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3ZpZXdFeHBhbmRlZFRleHQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHZpZXdFeHBhbmRlZFRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2aWV3X2V4cGFuZGVkX3RleHQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHZpZXdFeHBhbmRlZFRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZpZXdFeHBhbmRlZFRleHQgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRWaWV3RXhwYW5kZWRUZXh0KCkge1xuICAgIHRoaXMuX3ZpZXdFeHBhbmRlZFRleHQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHZpZXdFeHBhbmRlZFRleHRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld0V4cGFuZGVkVGV4dDtcbiAgfVxuXG4gIC8vIHZpZXdfb3JpZ2luYWxfdGV4dCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF92aWV3T3JpZ2luYWxUZXh0Pzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB2aWV3T3JpZ2luYWxUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmlld19vcmlnaW5hbF90ZXh0Jyk7XG4gIH1cbiAgcHVibGljIHNldCB2aWV3T3JpZ2luYWxUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3T3JpZ2luYWxUZXh0ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Vmlld09yaWdpbmFsVGV4dCgpIHtcbiAgICB0aGlzLl92aWV3T3JpZ2luYWxUZXh0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB2aWV3T3JpZ2luYWxUZXh0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdPcmlnaW5hbFRleHQ7XG4gIH1cblxuICAvLyBwYXJ0aXRpb25faW5kZXggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFydGl0aW9uSW5kZXg/OiBHbHVlQ2F0YWxvZ1RhYmxlUGFydGl0aW9uSW5kZXhbXTsgXG4gIHB1YmxpYyBnZXQgcGFydGl0aW9uSW5kZXgoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhcnRpdGlvbl9pbmRleCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHBhcnRpdGlvbkluZGV4KHZhbHVlOiBHbHVlQ2F0YWxvZ1RhYmxlUGFydGl0aW9uSW5kZXhbXSkge1xuICAgIHRoaXMuX3BhcnRpdGlvbkluZGV4ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UGFydGl0aW9uSW5kZXgoKSB7XG4gICAgdGhpcy5fcGFydGl0aW9uSW5kZXggPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbkluZGV4SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnRpdGlvbkluZGV4O1xuICB9XG5cbiAgLy8gcGFydGl0aW9uX2tleXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFydGl0aW9uS2V5cz86IEdsdWVDYXRhbG9nVGFibGVQYXJ0aXRpb25LZXlzW107IFxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbktleXMoKSB7XG4gICAgLy8gR2V0dGluZyB0aGUgY29tcHV0ZWQgdmFsdWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZFxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3BhcnRpdGlvbl9rZXlzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgcGFydGl0aW9uS2V5cyh2YWx1ZTogR2x1ZUNhdGFsb2dUYWJsZVBhcnRpdGlvbktleXNbXSkge1xuICAgIHRoaXMuX3BhcnRpdGlvbktleXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXJ0aXRpb25LZXlzKCkge1xuICAgIHRoaXMuX3BhcnRpdGlvbktleXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHBhcnRpdGlvbktleXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFydGl0aW9uS2V5cztcbiAgfVxuXG4gIC8vIHN0b3JhZ2VfZGVzY3JpcHRvciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9zdG9yYWdlRGVzY3JpcHRvciA9IG5ldyBHbHVlQ2F0YWxvZ1RhYmxlU3RvcmFnZURlc2NyaXB0b3JPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwic3RvcmFnZV9kZXNjcmlwdG9yXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IHN0b3JhZ2VEZXNjcmlwdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlRGVzY3JpcHRvcjtcbiAgfVxuICBwdWJsaWMgcHV0U3RvcmFnZURlc2NyaXB0b3IodmFsdWU6IEdsdWVDYXRhbG9nVGFibGVTdG9yYWdlRGVzY3JpcHRvcikge1xuICAgIHRoaXMuX3N0b3JhZ2VEZXNjcmlwdG9yLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTdG9yYWdlRGVzY3JpcHRvcigpIHtcbiAgICB0aGlzLl9zdG9yYWdlRGVzY3JpcHRvci5pbnRlcm5hbFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzdG9yYWdlRGVzY3JpcHRvcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlRGVzY3JpcHRvci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gdGFyZ2V0X3RhYmxlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhcmdldFRhYmxlID0gbmV3IEdsdWVDYXRhbG9nVGFibGVUYXJnZXRUYWJsZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ0YXJnZXRfdGFibGVcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgdGFyZ2V0VGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFRhYmxlO1xuICB9XG4gIHB1YmxpYyBwdXRUYXJnZXRUYWJsZSh2YWx1ZTogR2x1ZUNhdGFsb2dUYWJsZVRhcmdldFRhYmxlKSB7XG4gICAgdGhpcy5fdGFyZ2V0VGFibGUuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhcmdldFRhYmxlKCkge1xuICAgIHRoaXMuX3RhcmdldFRhYmxlLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhcmdldFRhYmxlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldFRhYmxlLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhdGFsb2dfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NhdGFsb2dJZCksXG4gICAgICBkYXRhYmFzZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9kYXRhYmFzZU5hbWUpLFxuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgb3duZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX293bmVyKSxcbiAgICAgIHBhcmFtZXRlcnM6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuYW55VG9UZXJyYWZvcm0pKHRoaXMuX3BhcmFtZXRlcnMpLFxuICAgICAgcmV0ZW50aW9uOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9yZXRlbnRpb24pLFxuICAgICAgdGFibGVfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdGFibGVUeXBlKSxcbiAgICAgIHZpZXdfZXhwYW5kZWRfdGV4dDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fdmlld0V4cGFuZGVkVGV4dCksXG4gICAgICB2aWV3X29yaWdpbmFsX3RleHQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX3ZpZXdPcmlnaW5hbFRleHQpLFxuICAgICAgcGFydGl0aW9uX2luZGV4OiBjZGt0Zi5saXN0TWFwcGVyKGdsdWVDYXRhbG9nVGFibGVQYXJ0aXRpb25JbmRleFRvVGVycmFmb3JtKSh0aGlzLl9wYXJ0aXRpb25JbmRleCksXG4gICAgICBwYXJ0aXRpb25fa2V5czogY2RrdGYubGlzdE1hcHBlcihnbHVlQ2F0YWxvZ1RhYmxlUGFydGl0aW9uS2V5c1RvVGVycmFmb3JtKSh0aGlzLl9wYXJ0aXRpb25LZXlzKSxcbiAgICAgIHN0b3JhZ2VfZGVzY3JpcHRvcjogZ2x1ZUNhdGFsb2dUYWJsZVN0b3JhZ2VEZXNjcmlwdG9yVG9UZXJyYWZvcm0odGhpcy5fc3RvcmFnZURlc2NyaXB0b3IuaW50ZXJuYWxWYWx1ZSksXG4gICAgICB0YXJnZXRfdGFibGU6IGdsdWVDYXRhbG9nVGFibGVUYXJnZXRUYWJsZVRvVGVycmFmb3JtKHRoaXMuX3RhcmdldFRhYmxlLmludGVybmFsVmFsdWUpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==