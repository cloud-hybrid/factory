"use strict";
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueClassifier = exports.GlueClassifierXmlClassifierOutputReference = exports.glueClassifierXmlClassifierToTerraform = exports.GlueClassifierJsonClassifierOutputReference = exports.glueClassifierJsonClassifierToTerraform = exports.GlueClassifierGrokClassifierOutputReference = exports.glueClassifierGrokClassifierToTerraform = exports.GlueClassifierCsvClassifierOutputReference = exports.glueClassifierCsvClassifierToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function glueClassifierCsvClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow_single_column: cdktf.booleanToTerraform(struct.allowSingleColumn),
        contains_header: cdktf.stringToTerraform(struct.containsHeader),
        delimiter: cdktf.stringToTerraform(struct.delimiter),
        disable_value_trimming: cdktf.booleanToTerraform(struct.disableValueTrimming),
        header: cdktf.listMapper(cdktf.stringToTerraform)(struct.header),
        quote_symbol: cdktf.stringToTerraform(struct.quoteSymbol),
    };
}
exports.glueClassifierCsvClassifierToTerraform = glueClassifierCsvClassifierToTerraform;
/**
 * @stability stable
 */
class GlueClassifierCsvClassifierOutputReference extends cdktf.ComplexObject {
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
        if (this._allowSingleColumn) {
            hasAnyValues = true;
            internalValueResult.allowSingleColumn = this._allowSingleColumn;
        }
        if (this._containsHeader) {
            hasAnyValues = true;
            internalValueResult.containsHeader = this._containsHeader;
        }
        if (this._delimiter) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        if (this._disableValueTrimming) {
            hasAnyValues = true;
            internalValueResult.disableValueTrimming = this._disableValueTrimming;
        }
        if (this._header) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._quoteSymbol) {
            hasAnyValues = true;
            internalValueResult.quoteSymbol = this._quoteSymbol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allowSingleColumn = undefined;
            this._containsHeader = undefined;
            this._delimiter = undefined;
            this._disableValueTrimming = undefined;
            this._header = undefined;
            this._quoteSymbol = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allowSingleColumn = value.allowSingleColumn;
            this._containsHeader = value.containsHeader;
            this._delimiter = value.delimiter;
            this._disableValueTrimming = value.disableValueTrimming;
            this._header = value.header;
            this._quoteSymbol = value.quoteSymbol;
        }
    }
    /**
     * @stability stable
     */
    get allowSingleColumn() {
        return this.getBooleanAttribute('allow_single_column');
    }
    /**
     * @stability stable
     */
    set allowSingleColumn(value) {
        this._allowSingleColumn = value;
    }
    /**
     * @stability stable
     */
    resetAllowSingleColumn() {
        this._allowSingleColumn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get allowSingleColumnInput() {
        return this._allowSingleColumn;
    }
    /**
     * @stability stable
     */
    get containsHeader() {
        return this.getStringAttribute('contains_header');
    }
    /**
     * @stability stable
     */
    set containsHeader(value) {
        this._containsHeader = value;
    }
    /**
     * @stability stable
     */
    resetContainsHeader() {
        this._containsHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get containsHeaderInput() {
        return this._containsHeader;
    }
    /**
     * @stability stable
     */
    get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    /**
     * @stability stable
     */
    set delimiter(value) {
        this._delimiter = value;
    }
    /**
     * @stability stable
     */
    resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get delimiterInput() {
        return this._delimiter;
    }
    /**
     * @stability stable
     */
    get disableValueTrimming() {
        return this.getBooleanAttribute('disable_value_trimming');
    }
    /**
     * @stability stable
     */
    set disableValueTrimming(value) {
        this._disableValueTrimming = value;
    }
    /**
     * @stability stable
     */
    resetDisableValueTrimming() {
        this._disableValueTrimming = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get disableValueTrimmingInput() {
        return this._disableValueTrimming;
    }
    /**
     * @stability stable
     */
    get header() {
        return this.getListAttribute('header');
    }
    /**
     * @stability stable
     */
    set header(value) {
        this._header = value;
    }
    /**
     * @stability stable
     */
    resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get headerInput() {
        return this._header;
    }
    /**
     * @stability stable
     */
    get quoteSymbol() {
        return this.getStringAttribute('quote_symbol');
    }
    /**
     * @stability stable
     */
    set quoteSymbol(value) {
        this._quoteSymbol = value;
    }
    /**
     * @stability stable
     */
    resetQuoteSymbol() {
        this._quoteSymbol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get quoteSymbolInput() {
        return this._quoteSymbol;
    }
}
exports.GlueClassifierCsvClassifierOutputReference = GlueClassifierCsvClassifierOutputReference;
_a = JSII_RTTI_SYMBOL_1;
GlueClassifierCsvClassifierOutputReference[_a] = { fqn: "@cdktf/provider-aws.glue.GlueClassifierCsvClassifierOutputReference", version: "3.0.1" };
function glueClassifierGrokClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        custom_patterns: cdktf.stringToTerraform(struct.customPatterns),
        grok_pattern: cdktf.stringToTerraform(struct.grokPattern),
    };
}
exports.glueClassifierGrokClassifierToTerraform = glueClassifierGrokClassifierToTerraform;
/**
 * @stability stable
 */
class GlueClassifierGrokClassifierOutputReference extends cdktf.ComplexObject {
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
        if (this._classification) {
            hasAnyValues = true;
            internalValueResult.classification = this._classification;
        }
        if (this._customPatterns) {
            hasAnyValues = true;
            internalValueResult.customPatterns = this._customPatterns;
        }
        if (this._grokPattern) {
            hasAnyValues = true;
            internalValueResult.grokPattern = this._grokPattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._classification = undefined;
            this._customPatterns = undefined;
            this._grokPattern = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._classification = value.classification;
            this._customPatterns = value.customPatterns;
            this._grokPattern = value.grokPattern;
        }
    }
    /**
     * @stability stable
     */
    get classification() {
        return this.getStringAttribute('classification');
    }
    /**
     * @stability stable
     */
    set classification(value) {
        this._classification = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get classificationInput() {
        return this._classification;
    }
    /**
     * @stability stable
     */
    get customPatterns() {
        return this.getStringAttribute('custom_patterns');
    }
    /**
     * @stability stable
     */
    set customPatterns(value) {
        this._customPatterns = value;
    }
    /**
     * @stability stable
     */
    resetCustomPatterns() {
        this._customPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get customPatternsInput() {
        return this._customPatterns;
    }
    /**
     * @stability stable
     */
    get grokPattern() {
        return this.getStringAttribute('grok_pattern');
    }
    /**
     * @stability stable
     */
    set grokPattern(value) {
        this._grokPattern = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grokPatternInput() {
        return this._grokPattern;
    }
}
exports.GlueClassifierGrokClassifierOutputReference = GlueClassifierGrokClassifierOutputReference;
_b = JSII_RTTI_SYMBOL_1;
GlueClassifierGrokClassifierOutputReference[_b] = { fqn: "@cdktf/provider-aws.glue.GlueClassifierGrokClassifierOutputReference", version: "3.0.1" };
function glueClassifierJsonClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        json_path: cdktf.stringToTerraform(struct.jsonPath),
    };
}
exports.glueClassifierJsonClassifierToTerraform = glueClassifierJsonClassifierToTerraform;
/**
 * @stability stable
 */
class GlueClassifierJsonClassifierOutputReference extends cdktf.ComplexObject {
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
        if (this._jsonPath) {
            hasAnyValues = true;
            internalValueResult.jsonPath = this._jsonPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._jsonPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._jsonPath = value.jsonPath;
        }
    }
    /**
     * @stability stable
     */
    get jsonPath() {
        return this.getStringAttribute('json_path');
    }
    /**
     * @stability stable
     */
    set jsonPath(value) {
        this._jsonPath = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jsonPathInput() {
        return this._jsonPath;
    }
}
exports.GlueClassifierJsonClassifierOutputReference = GlueClassifierJsonClassifierOutputReference;
_c = JSII_RTTI_SYMBOL_1;
GlueClassifierJsonClassifierOutputReference[_c] = { fqn: "@cdktf/provider-aws.glue.GlueClassifierJsonClassifierOutputReference", version: "3.0.1" };
function glueClassifierXmlClassifierToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        classification: cdktf.stringToTerraform(struct.classification),
        row_tag: cdktf.stringToTerraform(struct.rowTag),
    };
}
exports.glueClassifierXmlClassifierToTerraform = glueClassifierXmlClassifierToTerraform;
/**
 * @stability stable
 */
class GlueClassifierXmlClassifierOutputReference extends cdktf.ComplexObject {
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
        if (this._classification) {
            hasAnyValues = true;
            internalValueResult.classification = this._classification;
        }
        if (this._rowTag) {
            hasAnyValues = true;
            internalValueResult.rowTag = this._rowTag;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._classification = undefined;
            this._rowTag = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._classification = value.classification;
            this._rowTag = value.rowTag;
        }
    }
    /**
     * @stability stable
     */
    get classification() {
        return this.getStringAttribute('classification');
    }
    /**
     * @stability stable
     */
    set classification(value) {
        this._classification = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get classificationInput() {
        return this._classification;
    }
    /**
     * @stability stable
     */
    get rowTag() {
        return this.getStringAttribute('row_tag');
    }
    /**
     * @stability stable
     */
    set rowTag(value) {
        this._rowTag = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get rowTagInput() {
        return this._rowTag;
    }
}
exports.GlueClassifierXmlClassifierOutputReference = GlueClassifierXmlClassifierOutputReference;
_d = JSII_RTTI_SYMBOL_1;
GlueClassifierXmlClassifierOutputReference[_d] = { fqn: "@cdktf/provider-aws.glue.GlueClassifierXmlClassifierOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}.
 *
 * @stability stable
 */
class GlueClassifier extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_glue_classifier',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // csv_classifier - computed: false, optional: true, required: false
        this._csvClassifier = new GlueClassifierCsvClassifierOutputReference(this, "csv_classifier", true);
        // grok_classifier - computed: false, optional: true, required: false
        this._grokClassifier = new GlueClassifierGrokClassifierOutputReference(this, "grok_classifier", true);
        // json_classifier - computed: false, optional: true, required: false
        this._jsonClassifier = new GlueClassifierJsonClassifierOutputReference(this, "json_classifier", true);
        // xml_classifier - computed: false, optional: true, required: false
        this._xmlClassifier = new GlueClassifierXmlClassifierOutputReference(this, "xml_classifier", true);
        this._name = config.name;
        this._csvClassifier.internalValue = config.csvClassifier;
        this._grokClassifier.internalValue = config.grokClassifier;
        this._jsonClassifier.internalValue = config.jsonClassifier;
        this._xmlClassifier.internalValue = config.xmlClassifier;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    get csvClassifier() {
        return this._csvClassifier;
    }
    /**
     * @stability stable
     */
    putCsvClassifier(value) {
        this._csvClassifier.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetCsvClassifier() {
        this._csvClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get csvClassifierInput() {
        return this._csvClassifier.internalValue;
    }
    /**
     * @stability stable
     */
    get grokClassifier() {
        return this._grokClassifier;
    }
    /**
     * @stability stable
     */
    putGrokClassifier(value) {
        this._grokClassifier.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetGrokClassifier() {
        this._grokClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get grokClassifierInput() {
        return this._grokClassifier.internalValue;
    }
    /**
     * @stability stable
     */
    get jsonClassifier() {
        return this._jsonClassifier;
    }
    /**
     * @stability stable
     */
    putJsonClassifier(value) {
        this._jsonClassifier.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetJsonClassifier() {
        this._jsonClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get jsonClassifierInput() {
        return this._jsonClassifier.internalValue;
    }
    /**
     * @stability stable
     */
    get xmlClassifier() {
        return this._xmlClassifier;
    }
    /**
     * @stability stable
     */
    putXmlClassifier(value) {
        this._xmlClassifier.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetXmlClassifier() {
        this._xmlClassifier.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get xmlClassifierInput() {
        return this._xmlClassifier.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            csv_classifier: glueClassifierCsvClassifierToTerraform(this._csvClassifier.internalValue),
            grok_classifier: glueClassifierGrokClassifierToTerraform(this._grokClassifier.internalValue),
            json_classifier: glueClassifierJsonClassifierToTerraform(this._jsonClassifier.internalValue),
            xml_classifier: glueClassifierXmlClassifierToTerraform(this._xmlClassifier.internalValue),
        };
    }
}
exports.GlueClassifier = GlueClassifier;
_e = JSII_RTTI_SYMBOL_1;
GlueClassifier[_e] = { fqn: "@cdktf/provider-aws.glue.GlueClassifier", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
GlueClassifier.tfResourceType = "aws_glue_classifier";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2x1ZS1jbGFzc2lmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dsdWUvZ2x1ZS1jbGFzc2lmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsK0JBQStCO0FBOEIvQixTQUFnQixzQ0FBc0MsQ0FBQyxNQUFpRjtJQUN0SSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDeEUsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztRQUNyRCxzQkFBc0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLG9CQUFvQixDQUFDO1FBQzlFLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDakUsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO0tBQzNELENBQUE7QUFDSCxDQUFDO0FBYkQsd0ZBYUM7Ozs7QUFFRCxNQUFhLDBDQUEyQyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSWpGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZ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Y2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2xhc3NpZmllckNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3N2Q2xhc3NpZmllcj86IEdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncm9rQ2xhc3NpZmllcj86IEdsdWVDbGFzc2lmaWVyR3Jva0NsYXNzaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkganNvbkNsYXNzaWZpZXI/OiBHbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHhtbENsYXNzaWZpZXI/OiBHbHVlQ2xhc3NpZmllclhtbENsYXNzaWZpZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93U2luZ2xlQ29sdW1uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY29udGFpbnNIZWFkZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBkZWxpbWl0ZXI/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRpc2FibGVWYWx1ZVRyaW1taW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGVhZGVyPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBxdW90ZVN5bWJvbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllclRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllck91dHB1dFJlZmVyZW5jZSB8IEdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFsbG93X3NpbmdsZV9jb2x1bW46IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmFsbG93U2luZ2xlQ29sdW1uKSxcbiAgICBjb250YWluc19oZWFkZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGFpbnNIZWFkZXIpLFxuICAgIGRlbGltaXRlcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kZWxpbWl0ZXIpLFxuICAgIGRpc2FibGVfdmFsdWVfdHJpbW1pbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmRpc2FibGVWYWx1ZVRyaW1taW5nKSxcbiAgICBoZWFkZXI6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaGVhZGVyKSxcbiAgICBxdW90ZV9zeW1ib2w6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucXVvdGVTeW1ib2wpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbHVlQ2xhc3NpZmllckNzdkNsYXNzaWZpZXJPdXRwdXRSZWZlcmVuY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4T2JqZWN0IHtcbiAgcHJpdmF0ZSBpc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3IodGVycmFmb3JtUmVzb3VyY2U6IGNka3RmLklUZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlOiBzdHJpbmcsIGlzU2luZ2xlSXRlbTogYm9vbGVhbikge1xuICAgIHN1cGVyKHRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGUsIGlzU2luZ2xlSXRlbSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVybmFsVmFsdWUoKTogR2x1ZUNsYXNzaWZpZXJDc3ZDbGFzc2lmaWVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9hbGxvd1NpbmdsZUNvbHVtbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuYWxsb3dTaW5nbGVDb2x1bW4gPSB0aGlzLl9hbGxvd1NpbmdsZUNvbHVtbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5zSGVhZGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jb250YWluc0hlYWRlciA9IHRoaXMuX2NvbnRhaW5zSGVhZGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZGVsaW1pdGVyKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5kZWxpbWl0ZXIgPSB0aGlzLl9kZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaXNhYmxlVmFsdWVUcmltbWluZykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuZGlzYWJsZVZhbHVlVHJpbW1pbmcgPSB0aGlzLl9kaXNhYmxlVmFsdWVUcmltbWluZztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hlYWRlcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuaGVhZGVyID0gdGhpcy5faGVhZGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcXVvdGVTeW1ib2wpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnF1b3RlU3ltYm9sID0gdGhpcy5fcXVvdGVTeW1ib2w7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlQ2xhc3NpZmllckNzdkNsYXNzaWZpZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9hbGxvd1NpbmdsZUNvbHVtbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbnRhaW5zSGVhZGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGVsaW1pdGVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGlzYWJsZVZhbHVlVHJpbW1pbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9oZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9xdW90ZVN5bWJvbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgdGhpcy5fYWxsb3dTaW5nbGVDb2x1bW4gPSB2YWx1ZS5hbGxvd1NpbmdsZUNvbHVtbjtcbiAgICAgIHRoaXMuX2NvbnRhaW5zSGVhZGVyID0gdmFsdWUuY29udGFpbnNIZWFkZXI7XG4gICAgICB0aGlzLl9kZWxpbWl0ZXIgPSB2YWx1ZS5kZWxpbWl0ZXI7XG4gICAgICB0aGlzLl9kaXNhYmxlVmFsdWVUcmltbWluZyA9IHZhbHVlLmRpc2FibGVWYWx1ZVRyaW1taW5nO1xuICAgICAgdGhpcy5faGVhZGVyID0gdmFsdWUuaGVhZGVyO1xuICAgICAgdGhpcy5fcXVvdGVTeW1ib2wgPSB2YWx1ZS5xdW90ZVN5bWJvbDtcbiAgICB9XG4gIH1cblxuICAvLyBhbGxvd19zaW5nbGVfY29sdW1uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93U2luZ2xlQ29sdW1uPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBhbGxvd1NpbmdsZUNvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd19zaW5nbGVfY29sdW1uJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsb3dTaW5nbGVDb2x1bW4odmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2FsbG93U2luZ2xlQ29sdW1uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dTaW5nbGVDb2x1bW4oKSB7XG4gICAgdGhpcy5fYWxsb3dTaW5nbGVDb2x1bW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93U2luZ2xlQ29sdW1uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93U2luZ2xlQ29sdW1uO1xuICB9XG5cbiAgLy8gY29udGFpbnNfaGVhZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbnRhaW5zSGVhZGVyPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb250YWluc0hlYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbnRhaW5zX2hlYWRlcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29udGFpbnNIZWFkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRhaW5zSGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q29udGFpbnNIZWFkZXIoKSB7XG4gICAgdGhpcy5fY29udGFpbnNIZWFkZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNvbnRhaW5zSGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5zSGVhZGVyO1xuICB9XG5cbiAgLy8gZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2RlbGltaXRlcj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaW1pdGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBkZWxpbWl0ZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlbGltaXRlciA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldERlbGltaXRlcigpIHtcbiAgICB0aGlzLl9kZWxpbWl0ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlbGltaXRlcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWxpbWl0ZXI7XG4gIH1cblxuICAvLyBkaXNhYmxlX3ZhbHVlX3RyaW1taW5nIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2Rpc2FibGVWYWx1ZVRyaW1taW5nPzogYm9vbGVhbiB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCBkaXNhYmxlVmFsdWVUcmltbWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdkaXNhYmxlX3ZhbHVlX3RyaW1taW5nJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgZGlzYWJsZVZhbHVlVHJpbW1pbmcodmFsdWU6IGJvb2xlYW4gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX2Rpc2FibGVWYWx1ZVRyaW1taW5nID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGlzYWJsZVZhbHVlVHJpbW1pbmcoKSB7XG4gICAgdGhpcy5fZGlzYWJsZVZhbHVlVHJpbW1pbmcgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRpc2FibGVWYWx1ZVRyaW1taW5nSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVWYWx1ZVRyaW1taW5nO1xuICB9XG5cbiAgLy8gaGVhZGVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2hlYWRlcj86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaGVhZGVyJyk7XG4gIH1cbiAgcHVibGljIHNldCBoZWFkZXIodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5faGVhZGVyID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0SGVhZGVyKCkge1xuICAgIHRoaXMuX2hlYWRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgaGVhZGVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcjtcbiAgfVxuXG4gIC8vIHF1b3RlX3N5bWJvbCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9xdW90ZVN5bWJvbD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcXVvdGVTeW1ib2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdxdW90ZV9zeW1ib2wnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHF1b3RlU3ltYm9sKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdW90ZVN5bWJvbCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFF1b3RlU3ltYm9sKCkge1xuICAgIHRoaXMuX3F1b3RlU3ltYm9sID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBxdW90ZVN5bWJvbElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9xdW90ZVN5bWJvbDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2xhc3NpZmllckdyb2tDbGFzc2lmaWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjbGFzc2lmaWNhdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3VzdG9tUGF0dGVybnM/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBncm9rUGF0dGVybjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZUNsYXNzaWZpZXJHcm9rQ2xhc3NpZmllclRvVGVycmFmb3JtKHN0cnVjdD86IEdsdWVDbGFzc2lmaWVyR3Jva0NsYXNzaWZpZXJPdXRwdXRSZWZlcmVuY2UgfCBHbHVlQ2xhc3NpZmllckdyb2tDbGFzc2lmaWVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xhc3NpZmljYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xhc3NpZmljYXRpb24pLFxuICAgIGN1c3RvbV9wYXR0ZXJuczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jdXN0b21QYXR0ZXJucyksXG4gICAgZ3Jva19wYXR0ZXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmdyb2tQYXR0ZXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZUNsYXNzaWZpZXJHcm9rQ2xhc3NpZmllck91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBHbHVlQ2xhc3NpZmllckdyb2tDbGFzc2lmaWVyIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9jbGFzc2lmaWNhdGlvbikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY2xhc3NpZmljYXRpb24gPSB0aGlzLl9jbGFzc2lmaWNhdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2N1c3RvbVBhdHRlcm5zKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5jdXN0b21QYXR0ZXJucyA9IHRoaXMuX2N1c3RvbVBhdHRlcm5zO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZ3Jva1BhdHRlcm4pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0Lmdyb2tQYXR0ZXJuID0gdGhpcy5fZ3Jva1BhdHRlcm47XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBHbHVlQ2xhc3NpZmllckdyb2tDbGFzc2lmaWVyIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2xhc3NpZmljYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jdXN0b21QYXR0ZXJucyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2dyb2tQYXR0ZXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbGFzc2lmaWNhdGlvbiA9IHZhbHVlLmNsYXNzaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fY3VzdG9tUGF0dGVybnMgPSB2YWx1ZS5jdXN0b21QYXR0ZXJucztcbiAgICAgIHRoaXMuX2dyb2tQYXR0ZXJuID0gdmFsdWUuZ3Jva1BhdHRlcm47XG4gICAgfVxuICB9XG5cbiAgLy8gY2xhc3NpZmljYXRpb24gLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfY2xhc3NpZmljYXRpb24/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNsYXNzaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2xhc3NpZmljYXRpb24nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNsYXNzaWZpY2F0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGFzc2lmaWNhdGlvbiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjbGFzc2lmaWNhdGlvbklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGFzc2lmaWNhdGlvbjtcbiAgfVxuXG4gIC8vIGN1c3RvbV9wYXR0ZXJucyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jdXN0b21QYXR0ZXJucz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgY3VzdG9tUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjdXN0b21fcGF0dGVybnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1c3RvbVBhdHRlcm5zKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXN0b21QYXR0ZXJucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEN1c3RvbVBhdHRlcm5zKCkge1xuICAgIHRoaXMuX2N1c3RvbVBhdHRlcm5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjdXN0b21QYXR0ZXJuc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21QYXR0ZXJucztcbiAgfVxuXG4gIC8vIGdyb2tfcGF0dGVybiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9ncm9rUGF0dGVybj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZ3Jva1BhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdncm9rX3BhdHRlcm4nKTtcbiAgfVxuICBwdWJsaWMgc2V0IGdyb2tQYXR0ZXJuKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ncm9rUGF0dGVybiA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBncm9rUGF0dGVybklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9ncm9rUGF0dGVybjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGpzb25QYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZUNsYXNzaWZpZXJKc29uQ2xhc3NpZmllck91dHB1dFJlZmVyZW5jZSB8IEdsdWVDbGFzc2lmaWVySnNvbkNsYXNzaWZpZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBqc29uX3BhdGg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuanNvblBhdGgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVDbGFzc2lmaWVySnNvbkNsYXNzaWZpZXIgfCB1bmRlZmluZWQge1xuICAgIGxldCBoYXNBbnlWYWx1ZXMgPSB0aGlzLmlzRW1wdHlPYmplY3Q7XG4gICAgY29uc3QgaW50ZXJuYWxWYWx1ZVJlc3VsdDogYW55ID0ge307XG4gICAgaWYgKHRoaXMuX2pzb25QYXRoKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5qc29uUGF0aCA9IHRoaXMuX2pzb25QYXRoO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQW55VmFsdWVzID8gaW50ZXJuYWxWYWx1ZVJlc3VsdCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZXJuYWxWYWx1ZSh2YWx1ZTogR2x1ZUNsYXNzaWZpZXJKc29uQ2xhc3NpZmllciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2pzb25QYXRoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9qc29uUGF0aCA9IHZhbHVlLmpzb25QYXRoO1xuICAgIH1cbiAgfVxuXG4gIC8vIGpzb25fcGF0aCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9qc29uUGF0aD86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQganNvblBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdqc29uX3BhdGgnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGpzb25QYXRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9qc29uUGF0aCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBqc29uUGF0aElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9qc29uUGF0aDtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBHbHVlQ2xhc3NpZmllclhtbENsYXNzaWZpZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNsYXNzaWZpY2F0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJvd1RhZzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2x1ZUNsYXNzaWZpZXJYbWxDbGFzc2lmaWVyVG9UZXJyYWZvcm0oc3RydWN0PzogR2x1ZUNsYXNzaWZpZXJYbWxDbGFzc2lmaWVyT3V0cHV0UmVmZXJlbmNlIHwgR2x1ZUNsYXNzaWZpZXJYbWxDbGFzc2lmaWVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xhc3NpZmljYXRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2xhc3NpZmljYXRpb24pLFxuICAgIHJvd190YWc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm93VGFnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2x1ZUNsYXNzaWZpZXJYbWxDbGFzc2lmaWVyT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IEdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY2xhc3NpZmljYXRpb24pIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNsYXNzaWZpY2F0aW9uID0gdGhpcy5fY2xhc3NpZmljYXRpb247XG4gICAgfVxuICAgIGlmICh0aGlzLl9yb3dUYWcpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnJvd1RhZyA9IHRoaXMuX3Jvd1RhZztcbiAgICB9XG4gICAgcmV0dXJuIGhhc0FueVZhbHVlcyA/IGludGVybmFsVmFsdWVSZXN1bHQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVybmFsVmFsdWUodmFsdWU6IEdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllciB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzRW1wdHlPYmplY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsYXNzaWZpY2F0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm93VGFnID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9jbGFzc2lmaWNhdGlvbiA9IHZhbHVlLmNsYXNzaWZpY2F0aW9uO1xuICAgICAgdGhpcy5fcm93VGFnID0gdmFsdWUucm93VGFnO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNsYXNzaWZpY2F0aW9uIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2NsYXNzaWZpY2F0aW9uPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjbGFzc2lmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsYXNzaWZpY2F0aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBjbGFzc2lmaWNhdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3NpZmljYXRpb24gPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2xhc3NpZmljYXRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NpZmljYXRpb247XG4gIH1cblxuICAvLyByb3dfdGFnIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3Jvd1RhZz86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgcm93VGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm93X3RhZycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcm93VGFnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9yb3dUYWcgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcm93VGFnSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd1RhZztcbiAgfVxufVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGNsYXNzIEdsdWVDbGFzc2lmaWVyIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtUmVzb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzX2dsdWVfY2xhc3NpZmllclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogR2x1ZUNsYXNzaWZpZXJDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19nbHVlX2NsYXNzaWZpZXInLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2NzdkNsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5jc3ZDbGFzc2lmaWVyO1xuICAgIHRoaXMuX2dyb2tDbGFzc2lmaWVyLmludGVybmFsVmFsdWUgPSBjb25maWcuZ3Jva0NsYXNzaWZpZXI7XG4gICAgdGhpcy5fanNvbkNsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZSA9IGNvbmZpZy5qc29uQ2xhc3NpZmllcjtcbiAgICB0aGlzLl94bWxDbGFzc2lmaWVyLmludGVybmFsVmFsdWUgPSBjb25maWcueG1sQ2xhc3NpZmllcjtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfbmFtZT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbmFtZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgLy8gY3N2X2NsYXNzaWZpZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3N2Q2xhc3NpZmllciA9IG5ldyBHbHVlQ2xhc3NpZmllckNzdkNsYXNzaWZpZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiY3N2X2NsYXNzaWZpZXJcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgY3N2Q2xhc3NpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2Q2xhc3NpZmllcjtcbiAgfVxuICBwdWJsaWMgcHV0Q3N2Q2xhc3NpZmllcih2YWx1ZTogR2x1ZUNsYXNzaWZpZXJDc3ZDbGFzc2lmaWVyKSB7XG4gICAgdGhpcy5fY3N2Q2xhc3NpZmllci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q3N2Q2xhc3NpZmllcigpIHtcbiAgICB0aGlzLl9jc3ZDbGFzc2lmaWVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGNzdkNsYXNzaWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3N2Q2xhc3NpZmllci5pbnRlcm5hbFZhbHVlO1xuICB9XG5cbiAgLy8gZ3Jva19jbGFzc2lmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2dyb2tDbGFzc2lmaWVyID0gbmV3IEdsdWVDbGFzc2lmaWVyR3Jva0NsYXNzaWZpZXJPdXRwdXRSZWZlcmVuY2UodGhpcyBhcyBhbnksIFwiZ3Jva19jbGFzc2lmaWVyXCIsIHRydWUpO1xuICBwdWJsaWMgZ2V0IGdyb2tDbGFzc2lmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLl9ncm9rQ2xhc3NpZmllcjtcbiAgfVxuICBwdWJsaWMgcHV0R3Jva0NsYXNzaWZpZXIodmFsdWU6IEdsdWVDbGFzc2lmaWVyR3Jva0NsYXNzaWZpZXIpIHtcbiAgICB0aGlzLl9ncm9rQ2xhc3NpZmllci5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0R3Jva0NsYXNzaWZpZXIoKSB7XG4gICAgdGhpcy5fZ3Jva0NsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgZ3Jva0NsYXNzaWZpZXJJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3Jva0NsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIGpzb25fY2xhc3NpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9qc29uQ2xhc3NpZmllciA9IG5ldyBHbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyT3V0cHV0UmVmZXJlbmNlKHRoaXMgYXMgYW55LCBcImpzb25fY2xhc3NpZmllclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBqc29uQ2xhc3NpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvbkNsYXNzaWZpZXI7XG4gIH1cbiAgcHVibGljIHB1dEpzb25DbGFzc2lmaWVyKHZhbHVlOiBHbHVlQ2xhc3NpZmllckpzb25DbGFzc2lmaWVyKSB7XG4gICAgdGhpcy5fanNvbkNsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldEpzb25DbGFzc2lmaWVyKCkge1xuICAgIHRoaXMuX2pzb25DbGFzc2lmaWVyLmludGVybmFsVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGpzb25DbGFzc2lmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25DbGFzc2lmaWVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyB4bWxfY2xhc3NpZmllciAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF94bWxDbGFzc2lmaWVyID0gbmV3IEdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllck91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJ4bWxfY2xhc3NpZmllclwiLCB0cnVlKTtcbiAgcHVibGljIGdldCB4bWxDbGFzc2lmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLl94bWxDbGFzc2lmaWVyO1xuICB9XG4gIHB1YmxpYyBwdXRYbWxDbGFzc2lmaWVyKHZhbHVlOiBHbHVlQ2xhc3NpZmllclhtbENsYXNzaWZpZXIpIHtcbiAgICB0aGlzLl94bWxDbGFzc2lmaWVyLmludGVybmFsVmFsdWUgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRYbWxDbGFzc2lmaWVyKCkge1xuICAgIHRoaXMuX3htbENsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgeG1sQ2xhc3NpZmllcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl94bWxDbGFzc2lmaWVyLmludGVybmFsVmFsdWU7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX25hbWUpLFxuICAgICAgY3N2X2NsYXNzaWZpZXI6IGdsdWVDbGFzc2lmaWVyQ3N2Q2xhc3NpZmllclRvVGVycmFmb3JtKHRoaXMuX2NzdkNsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgICBncm9rX2NsYXNzaWZpZXI6IGdsdWVDbGFzc2lmaWVyR3Jva0NsYXNzaWZpZXJUb1RlcnJhZm9ybSh0aGlzLl9ncm9rQ2xhc3NpZmllci5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIGpzb25fY2xhc3NpZmllcjogZ2x1ZUNsYXNzaWZpZXJKc29uQ2xhc3NpZmllclRvVGVycmFmb3JtKHRoaXMuX2pzb25DbGFzc2lmaWVyLmludGVybmFsVmFsdWUpLFxuICAgICAgeG1sX2NsYXNzaWZpZXI6IGdsdWVDbGFzc2lmaWVyWG1sQ2xhc3NpZmllclRvVGVycmFmb3JtKHRoaXMuX3htbENsYXNzaWZpZXIuaW50ZXJuYWxWYWx1ZSksXG4gICAgfTtcbiAgfVxufVxuIl19