"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigConfigRule = exports.ConfigConfigRuleSourceOutputReference = exports.configConfigRuleSourceToTerraform = exports.configConfigRuleSourceSourceDetailToTerraform = exports.ConfigConfigRuleScopeOutputReference = exports.configConfigRuleScopeToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function configConfigRuleScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        compliance_resource_id: cdktf.stringToTerraform(struct.complianceResourceId),
        compliance_resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct.complianceResourceTypes),
        tag_key: cdktf.stringToTerraform(struct.tagKey),
        tag_value: cdktf.stringToTerraform(struct.tagValue),
    };
}
exports.configConfigRuleScopeToTerraform = configConfigRuleScopeToTerraform;
/**
 * @stability stable
 */
class ConfigConfigRuleScopeOutputReference extends cdktf.ComplexObject {
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
        if (this._complianceResourceId) {
            hasAnyValues = true;
            internalValueResult.complianceResourceId = this._complianceResourceId;
        }
        if (this._complianceResourceTypes) {
            hasAnyValues = true;
            internalValueResult.complianceResourceTypes = this._complianceResourceTypes;
        }
        if (this._tagKey) {
            hasAnyValues = true;
            internalValueResult.tagKey = this._tagKey;
        }
        if (this._tagValue) {
            hasAnyValues = true;
            internalValueResult.tagValue = this._tagValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._complianceResourceId = undefined;
            this._complianceResourceTypes = undefined;
            this._tagKey = undefined;
            this._tagValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._complianceResourceId = value.complianceResourceId;
            this._complianceResourceTypes = value.complianceResourceTypes;
            this._tagKey = value.tagKey;
            this._tagValue = value.tagValue;
        }
    }
    /**
     * @stability stable
     */
    get complianceResourceId() {
        return this.getStringAttribute('compliance_resource_id');
    }
    /**
     * @stability stable
     */
    set complianceResourceId(value) {
        this._complianceResourceId = value;
    }
    /**
     * @stability stable
     */
    resetComplianceResourceId() {
        this._complianceResourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get complianceResourceIdInput() {
        return this._complianceResourceId;
    }
    /**
     * @stability stable
     */
    get complianceResourceTypes() {
        return this.getListAttribute('compliance_resource_types');
    }
    /**
     * @stability stable
     */
    set complianceResourceTypes(value) {
        this._complianceResourceTypes = value;
    }
    /**
     * @stability stable
     */
    resetComplianceResourceTypes() {
        this._complianceResourceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get complianceResourceTypesInput() {
        return this._complianceResourceTypes;
    }
    /**
     * @stability stable
     */
    get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    /**
     * @stability stable
     */
    set tagKey(value) {
        this._tagKey = value;
    }
    /**
     * @stability stable
     */
    resetTagKey() {
        this._tagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagKeyInput() {
        return this._tagKey;
    }
    /**
     * @stability stable
     */
    get tagValue() {
        return this.getStringAttribute('tag_value');
    }
    /**
     * @stability stable
     */
    set tagValue(value) {
        this._tagValue = value;
    }
    /**
     * @stability stable
     */
    resetTagValue() {
        this._tagValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get tagValueInput() {
        return this._tagValue;
    }
}
exports.ConfigConfigRuleScopeOutputReference = ConfigConfigRuleScopeOutputReference;
_a = JSII_RTTI_SYMBOL_1;
ConfigConfigRuleScopeOutputReference[_a] = { fqn: "@cdktf/provider-aws.config.ConfigConfigRuleScopeOutputReference", version: "3.0.1" };
function configConfigRuleSourceSourceDetailToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        event_source: cdktf.stringToTerraform(struct.eventSource),
        maximum_execution_frequency: cdktf.stringToTerraform(struct.maximumExecutionFrequency),
        message_type: cdktf.stringToTerraform(struct.messageType),
    };
}
exports.configConfigRuleSourceSourceDetailToTerraform = configConfigRuleSourceSourceDetailToTerraform;
function configConfigRuleSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        owner: cdktf.stringToTerraform(struct.owner),
        source_identifier: cdktf.stringToTerraform(struct.sourceIdentifier),
        source_detail: cdktf.listMapper(configConfigRuleSourceSourceDetailToTerraform)(struct.sourceDetail),
    };
}
exports.configConfigRuleSourceToTerraform = configConfigRuleSourceToTerraform;
/**
 * @stability stable
 */
class ConfigConfigRuleSourceOutputReference extends cdktf.ComplexObject {
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
        if (this._owner) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        if (this._sourceIdentifier) {
            hasAnyValues = true;
            internalValueResult.sourceIdentifier = this._sourceIdentifier;
        }
        if (this._sourceDetail) {
            hasAnyValues = true;
            internalValueResult.sourceDetail = this._sourceDetail;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    /**
     * @stability stable
     */
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._owner = undefined;
            this._sourceIdentifier = undefined;
            this._sourceDetail = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._owner = value.owner;
            this._sourceIdentifier = value.sourceIdentifier;
            this._sourceDetail = value.sourceDetail;
        }
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
    get sourceIdentifier() {
        return this.getStringAttribute('source_identifier');
    }
    /**
     * @stability stable
     */
    set sourceIdentifier(value) {
        this._sourceIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceIdentifierInput() {
        return this._sourceIdentifier;
    }
    /**
     * @stability stable
     */
    get sourceDetail() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('source_detail');
    }
    /**
     * @stability stable
     */
    set sourceDetail(value) {
        this._sourceDetail = value;
    }
    /**
     * @stability stable
     */
    resetSourceDetail() {
        this._sourceDetail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceDetailInput() {
        return this._sourceDetail;
    }
}
exports.ConfigConfigRuleSourceOutputReference = ConfigConfigRuleSourceOutputReference;
_b = JSII_RTTI_SYMBOL_1;
ConfigConfigRuleSourceOutputReference[_b] = { fqn: "@cdktf/provider-aws.config.ConfigConfigRuleSourceOutputReference", version: "3.0.1" };
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule}.
 *
 * @stability stable
 */
class ConfigConfigRule extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_config_config_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        // scope - computed: false, optional: true, required: false
        this._scope = new ConfigConfigRuleScopeOutputReference(this, "scope", true);
        // source - computed: false, optional: false, required: true
        this._source = new ConfigConfigRuleSourceOutputReference(this, "source", true);
        this._description = config.description;
        this._inputParameters = config.inputParameters;
        this._maximumExecutionFrequency = config.maximumExecutionFrequency;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._scope.internalValue = config.scope;
        this._source.internalValue = config.source;
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
    get inputParameters() {
        return this.getStringAttribute('input_parameters');
    }
    /**
     * @stability stable
     */
    set inputParameters(value) {
        this._inputParameters = value;
    }
    /**
     * @stability stable
     */
    resetInputParameters() {
        this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get inputParametersInput() {
        return this._inputParameters;
    }
    /**
     * @stability stable
     */
    get maximumExecutionFrequency() {
        return this.getStringAttribute('maximum_execution_frequency');
    }
    /**
     * @stability stable
     */
    set maximumExecutionFrequency(value) {
        this._maximumExecutionFrequency = value;
    }
    /**
     * @stability stable
     */
    resetMaximumExecutionFrequency() {
        this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get maximumExecutionFrequencyInput() {
        return this._maximumExecutionFrequency;
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
    // rule_id - computed: true, optional: false, required: false
    /**
     * @stability stable
     */
    get ruleId() {
        return this.getStringAttribute('rule_id');
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
    get scope() {
        return this._scope;
    }
    /**
     * @stability stable
     */
    putScope(value) {
        this._scope.internalValue = value;
    }
    /**
     * @stability stable
     */
    resetScope() {
        this._scope.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get scopeInput() {
        return this._scope.internalValue;
    }
    /**
     * @stability stable
     */
    get source() {
        return this._source;
    }
    /**
     * @stability stable
     */
    putSource(value) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get sourceInput() {
        return this._source.internalValue;
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
            input_parameters: cdktf.stringToTerraform(this._inputParameters),
            maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            scope: configConfigRuleScopeToTerraform(this._scope.internalValue),
            source: configConfigRuleSourceToTerraform(this._source.internalValue),
        };
    }
}
exports.ConfigConfigRule = ConfigConfigRule;
_c = JSII_RTTI_SYMBOL_1;
ConfigConfigRule[_c] = { fqn: "@cdktf/provider-aws.config.ConfigConfigRule", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
ConfigConfigRule.tfResourceType = "aws_config_config_rule";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWNvbmZpZy1ydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9jb25maWctY29uZmlnLXJ1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSwrQkFBK0I7QUFnQy9CLFNBQWdCLGdDQUFnQyxDQUFDLE1BQXFFO0lBQ3BILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSx5QkFBeUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNyRyxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDaEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3JELENBQUE7QUFDSCxDQUFDO0FBWEQsNEVBV0M7Ozs7QUFFRCxNQUFhLG9DQUFxQyxTQUFRLEtBQUssQ0FBQyxhQUFhOzs7Ozs7O0lBSTNFLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUpyRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7O0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENB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QUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDbEUsTUFBTSxFQUFFLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQ3RFLENBQUM7SUFDSixDQUFDOztBQS9MSCw0Q0FnTUM7OztBQTlMQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7OztBQUNHLCtCQUFjLEdBQVcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZnJvbSB0ZXJyYWZvcm0gcmVzb3VyY2Ugc2NoZW1hXG5cbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrdGYgZnJvbSAnY2RrdGYnO1xuXG4gICAgICAgICAgICAgICAgICAgXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NvbmZpZ1J1bGVDb25maWcgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1NZXRhQXJndW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGlucHV0UGFyYW1ldGVycz86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFncz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ3NBbGw/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgY2RrdGYuSVJlc29sdmFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzY29wZT86IENvbmZpZ0NvbmZpZ1J1bGVTY29wZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHNvdXJjZTogQ29uZmlnQ29uZmlnUnVsZVNvdXJjZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnQ29uZmlnUnVsZVNjb3BlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wbGlhbmNlUmVzb3VyY2VJZD86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjb21wbGlhbmNlUmVzb3VyY2VUeXBlcz86IHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHRhZ0tleT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgdGFnVmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdDb25maWdSdWxlU2NvcGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBDb25maWdDb25maWdSdWxlU2NvcGVPdXRwdXRSZWZlcmVuY2UgfCBDb25maWdDb25maWdSdWxlU2NvcGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb21wbGlhbmNlX3Jlc291cmNlX2lkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBsaWFuY2VSZXNvdXJjZUlkKSxcbiAgICBjb21wbGlhbmNlX3Jlc291cmNlX3R5cGVzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbXBsaWFuY2VSZXNvdXJjZVR5cGVzKSxcbiAgICB0YWdfa2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhZ0tleSksXG4gICAgdGFnX3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhZ1ZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29uZmlnUnVsZVNjb3BlT3V0cHV0UmVmZXJlbmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleE9iamVjdCB7XG4gIHByaXZhdGUgaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHRlcnJhZm9ybVJlc291cmNlOiBjZGt0Zi5JVGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZTogc3RyaW5nLCBpc1NpbmdsZUl0ZW06IGJvb2xlYW4pIHtcbiAgICBzdXBlcih0ZXJyYWZvcm1SZXNvdXJjZSwgdGVycmFmb3JtQXR0cmlidXRlLCBpc1NpbmdsZUl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlcm5hbFZhbHVlKCk6IENvbmZpZ0NvbmZpZ1J1bGVTY29wZSB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IGhhc0FueVZhbHVlcyA9IHRoaXMuaXNFbXB0eU9iamVjdDtcbiAgICBjb25zdCBpbnRlcm5hbFZhbHVlUmVzdWx0OiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5fY29tcGxpYW5jZVJlc291cmNlSWQpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LmNvbXBsaWFuY2VSZXNvdXJjZUlkID0gdGhpcy5fY29tcGxpYW5jZVJlc291cmNlSWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wbGlhbmNlUmVzb3VyY2VUeXBlcykge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQuY29tcGxpYW5jZVJlc291cmNlVHlwZXMgPSB0aGlzLl9jb21wbGlhbmNlUmVzb3VyY2VUeXBlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhZ0tleSkge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQudGFnS2V5ID0gdGhpcy5fdGFnS2V5O1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFnVmFsdWUpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnRhZ1ZhbHVlID0gdGhpcy5fdGFnVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb25maWdDb25maWdSdWxlU2NvcGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb21wbGlhbmNlUmVzb3VyY2VJZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2NvbXBsaWFuY2VSZXNvdXJjZVR5cGVzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFnS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fdGFnVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pc0VtcHR5T2JqZWN0ID0gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHRoaXMuX2NvbXBsaWFuY2VSZXNvdXJjZUlkID0gdmFsdWUuY29tcGxpYW5jZVJlc291cmNlSWQ7XG4gICAgICB0aGlzLl9jb21wbGlhbmNlUmVzb3VyY2VUeXBlcyA9IHZhbHVlLmNvbXBsaWFuY2VSZXNvdXJjZVR5cGVzO1xuICAgICAgdGhpcy5fdGFnS2V5ID0gdmFsdWUudGFnS2V5O1xuICAgICAgdGhpcy5fdGFnVmFsdWUgPSB2YWx1ZS50YWdWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBjb21wbGlhbmNlX3Jlc291cmNlX2lkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NvbXBsaWFuY2VSZXNvdXJjZUlkPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBjb21wbGlhbmNlUmVzb3VyY2VJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXBsaWFuY2VfcmVzb3VyY2VfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNvbXBsaWFuY2VSZXNvdXJjZUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb21wbGlhbmNlUmVzb3VyY2VJZCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENvbXBsaWFuY2VSZXNvdXJjZUlkKCkge1xuICAgIHRoaXMuX2NvbXBsaWFuY2VSZXNvdXJjZUlkID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjb21wbGlhbmNlUmVzb3VyY2VJZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGlhbmNlUmVzb3VyY2VJZDtcbiAgfVxuXG4gIC8vIGNvbXBsaWFuY2VfcmVzb3VyY2VfdHlwZXMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY29tcGxpYW5jZVJlc291cmNlVHlwZXM/OiBzdHJpbmdbXTsgXG4gIHB1YmxpYyBnZXQgY29tcGxpYW5jZVJlc291cmNlVHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY29tcGxpYW5jZV9yZXNvdXJjZV90eXBlcycpO1xuICB9XG4gIHB1YmxpYyBzZXQgY29tcGxpYW5jZVJlc291cmNlVHlwZXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fY29tcGxpYW5jZVJlc291cmNlVHlwZXMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDb21wbGlhbmNlUmVzb3VyY2VUeXBlcygpIHtcbiAgICB0aGlzLl9jb21wbGlhbmNlUmVzb3VyY2VUeXBlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY29tcGxpYW5jZVJlc291cmNlVHlwZXNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxpYW5jZVJlc291cmNlVHlwZXM7XG4gIH1cblxuICAvLyB0YWdfa2V5IC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ0tleT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgdGFnS2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFnX2tleScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnS2V5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90YWdLZXkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdLZXkoKSB7XG4gICAgdGhpcy5fdGFnS2V5ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0YWdLZXlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnS2V5O1xuICB9XG5cbiAgLy8gdGFnX3ZhbHVlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RhZ1ZhbHVlPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCB0YWdWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RhZ192YWx1ZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgdGFnVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RhZ1ZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0VGFnVmFsdWUoKSB7XG4gICAgdGhpcy5fdGFnVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ1ZhbHVlSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ1ZhbHVlO1xuICB9XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0NvbmZpZ1J1bGVTb3VyY2VTb3VyY2VEZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBldmVudFNvdXJjZT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeT86IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWVzc2FnZVR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdDb25maWdSdWxlU291cmNlU291cmNlRGV0YWlsVG9UZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnQ29uZmlnUnVsZVNvdXJjZVNvdXJjZURldGFpbCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgaWYgKGNka3RmLmlzQ29tcGxleEVsZW1lbnQoc3RydWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkEgY29tcGxleCBlbGVtZW50IHdhcyB1c2VkIGFzIGNvbmZpZ3VyYXRpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZDogaHR0cHM6Ly9jZGsudGYvY29tcGxleC1vYmplY3QtYXMtY29uZmlndXJhdGlvblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50X3NvdXJjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ldmVudFNvdXJjZSksXG4gICAgbWF4aW11bV9leGVjdXRpb25fZnJlcXVlbmN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1heGltdW1FeGVjdXRpb25GcmVxdWVuY3kpLFxuICAgIG1lc3NhZ2VfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXNzYWdlVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdDb25maWdSdWxlU291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IG93bmVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBzb3VyY2VEZXRhaWw/OiBDb25maWdDb25maWdSdWxlU291cmNlU291cmNlRGV0YWlsW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdDb25maWdSdWxlU291cmNlVG9UZXJyYWZvcm0oc3RydWN0PzogQ29uZmlnQ29uZmlnUnVsZVNvdXJjZU91dHB1dFJlZmVyZW5jZSB8IENvbmZpZ0NvbmZpZ1J1bGVTb3VyY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBvd25lcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vd25lciksXG4gICAgc291cmNlX2lkZW50aWZpZXI6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlSWRlbnRpZmllciksXG4gICAgc291cmNlX2RldGFpbDogY2RrdGYubGlzdE1hcHBlcihjb25maWdDb25maWdSdWxlU291cmNlU291cmNlRGV0YWlsVG9UZXJyYWZvcm0pKHN0cnVjdCEuc291cmNlRGV0YWlsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29uZmlnUnVsZVNvdXJjZU91dHB1dFJlZmVyZW5jZSBleHRlbmRzIGNka3RmLkNvbXBsZXhPYmplY3Qge1xuICBwcml2YXRlIGlzRW1wdHlPYmplY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXJyYWZvcm1SZXNvdXJjZTogY2RrdGYuSVRlcnJhZm9ybVJlc291cmNlLCB0ZXJyYWZvcm1BdHRyaWJ1dGU6IHN0cmluZywgaXNTaW5nbGVJdGVtOiBib29sZWFuKSB7XG4gICAgc3VwZXIodGVycmFmb3JtUmVzb3VyY2UsIHRlcnJhZm9ybUF0dHJpYnV0ZSwgaXNTaW5nbGVJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZXJuYWxWYWx1ZSgpOiBDb25maWdDb25maWdSdWxlU291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgaGFzQW55VmFsdWVzID0gdGhpcy5pc0VtcHR5T2JqZWN0O1xuICAgIGNvbnN0IGludGVybmFsVmFsdWVSZXN1bHQ6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLl9vd25lcikge1xuICAgICAgaGFzQW55VmFsdWVzID0gdHJ1ZTtcbiAgICAgIGludGVybmFsVmFsdWVSZXN1bHQub3duZXIgPSB0aGlzLl9vd25lcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZUlkZW50aWZpZXIpIHtcbiAgICAgIGhhc0FueVZhbHVlcyA9IHRydWU7XG4gICAgICBpbnRlcm5hbFZhbHVlUmVzdWx0LnNvdXJjZUlkZW50aWZpZXIgPSB0aGlzLl9zb3VyY2VJZGVudGlmaWVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlRGV0YWlsKSB7XG4gICAgICBoYXNBbnlWYWx1ZXMgPSB0cnVlO1xuICAgICAgaW50ZXJuYWxWYWx1ZVJlc3VsdC5zb3VyY2VEZXRhaWwgPSB0aGlzLl9zb3VyY2VEZXRhaWw7XG4gICAgfVxuICAgIHJldHVybiBoYXNBbnlWYWx1ZXMgPyBpbnRlcm5hbFZhbHVlUmVzdWx0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlcm5hbFZhbHVlKHZhbHVlOiBDb25maWdDb25maWdSdWxlU291cmNlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy5fb3duZXIgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zb3VyY2VJZGVudGlmaWVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc291cmNlRGV0YWlsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbXB0eU9iamVjdCA9IE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICB0aGlzLl9vd25lciA9IHZhbHVlLm93bmVyO1xuICAgICAgdGhpcy5fc291cmNlSWRlbnRpZmllciA9IHZhbHVlLnNvdXJjZUlkZW50aWZpZXI7XG4gICAgICB0aGlzLl9zb3VyY2VEZXRhaWwgPSB2YWx1ZS5zb3VyY2VEZXRhaWw7XG4gICAgfVxuICB9XG5cbiAgLy8gb3duZXIgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IHRydWVcbiAgcHJpdmF0ZSBfb3duZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IG93bmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3duZXInKTtcbiAgfVxuICBwdWJsaWMgc2V0IG93bmVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vd25lciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBvd25lcklucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9vd25lcjtcbiAgfVxuXG4gIC8vIHNvdXJjZV9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX3NvdXJjZUlkZW50aWZpZXI/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IHNvdXJjZUlkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzb3VyY2VfaWRlbnRpZmllcicpO1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlSWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc291cmNlSWRlbnRpZmllciA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VJZGVudGlmaWVySW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUlkZW50aWZpZXI7XG4gIH1cblxuICAvLyBzb3VyY2VfZGV0YWlsIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3NvdXJjZURldGFpbD86IENvbmZpZ0NvbmZpZ1J1bGVTb3VyY2VTb3VyY2VEZXRhaWxbXTsgXG4gIHB1YmxpYyBnZXQgc291cmNlRGV0YWlsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfZGV0YWlsJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgc291cmNlRGV0YWlsKHZhbHVlOiBDb25maWdDb25maWdSdWxlU291cmNlU291cmNlRGV0YWlsW10pIHtcbiAgICB0aGlzLl9zb3VyY2VEZXRhaWwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRTb3VyY2VEZXRhaWwoKSB7XG4gICAgdGhpcy5fc291cmNlRGV0YWlsID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBzb3VyY2VEZXRhaWxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlRGV0YWlsO1xuICB9XG59XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgQ29uZmlnQ29uZmlnUnVsZSBleHRlbmRzIGNka3RmLlRlcnJhZm9ybVJlc291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c19jb25maWdfY29uZmlnX3J1bGVcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogQ29uZmlnQ29uZmlnUnVsZUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2NvbmZpZ19jb25maWdfcnVsZScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGNvbmZpZy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLl9pbnB1dFBhcmFtZXRlcnMgPSBjb25maWcuaW5wdXRQYXJhbWV0ZXJzO1xuICAgIHRoaXMuX21heGltdW1FeGVjdXRpb25GcmVxdWVuY3kgPSBjb25maWcubWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeTtcbiAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgdGhpcy5fdGFncyA9IGNvbmZpZy50YWdzO1xuICAgIHRoaXMuX3RhZ3NBbGwgPSBjb25maWcudGFnc0FsbDtcbiAgICB0aGlzLl9zY29wZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNjb3BlO1xuICAgIHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlID0gY29uZmlnLnNvdXJjZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXJuJyk7XG4gIH1cblxuICAvLyBkZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9kZXNjcmlwdGlvbj86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkZXNjcmlwdGlvbicpO1xuICB9XG4gIHB1YmxpYyBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0RGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIGlucHV0X3BhcmFtZXRlcnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaW5wdXRQYXJhbWV0ZXJzPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBpbnB1dFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnB1dF9wYXJhbWV0ZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCBpbnB1dFBhcmFtZXRlcnModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0UGFyYW1ldGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldElucHV0UGFyYW1ldGVycygpIHtcbiAgICB0aGlzLl9pbnB1dFBhcmFtZXRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlucHV0UGFyYW1ldGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFBhcmFtZXRlcnM7XG4gIH1cblxuICAvLyBtYXhpbXVtX2V4ZWN1dGlvbl9mcmVxdWVuY3kgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeT86IHN0cmluZzsgXG4gIHB1YmxpYyBnZXQgbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21heGltdW1fZXhlY3V0aW9uX2ZyZXF1ZW5jeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heGltdW1FeGVjdXRpb25GcmVxdWVuY3koKSB7XG4gICAgdGhpcy5fbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgbWF4aW11bUV4ZWN1dGlvbkZyZXF1ZW5jeUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhpbXVtRXhlY3V0aW9uRnJlcXVlbmN5O1xuICB9XG5cbiAgLy8gbmFtZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9uYW1lPzogc3RyaW5nOyBcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG4gIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBuYW1lSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICAvLyBydWxlX2lkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcnVsZUlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncnVsZV9pZCcpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzJykgYXMgYW55O1xuICB9XG4gIHB1YmxpYyBzZXQgdGFncyh2YWx1ZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFRhZ3MoKSB7XG4gICAgdGhpcy5fdGFncyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgdGFnc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl90YWdzO1xuICB9XG5cbiAgLy8gdGFnc19hbGwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF90YWdzQWxsPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IGNka3RmLklSZXNvbHZhYmxlOyBcbiAgcHVibGljIGdldCB0YWdzQWxsKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd0YWdzX2FsbCcpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IHRhZ3NBbGwodmFsdWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBjZGt0Zi5JUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUYWdzQWxsKCkge1xuICAgIHRoaXMuX3RhZ3NBbGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHRhZ3NBbGxJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnc0FsbDtcbiAgfVxuXG4gIC8vIHNjb3BlIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3Njb3BlID0gbmV3IENvbmZpZ0NvbmZpZ1J1bGVTY29wZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzY29wZVwiLCB0cnVlKTtcbiAgcHVibGljIGdldCBzY29wZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gIH1cbiAgcHVibGljIHB1dFNjb3BlKHZhbHVlOiBDb25maWdDb25maWdSdWxlU2NvcGUpIHtcbiAgICB0aGlzLl9zY29wZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0U2NvcGUoKSB7XG4gICAgdGhpcy5fc2NvcGUuaW50ZXJuYWxWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgc2NvcGVJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcGUuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vIHNvdXJjZSAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9zb3VyY2UgPSBuZXcgQ29uZmlnQ29uZmlnUnVsZVNvdXJjZU91dHB1dFJlZmVyZW5jZSh0aGlzIGFzIGFueSwgXCJzb3VyY2VcIiwgdHJ1ZSk7XG4gIHB1YmxpYyBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2U7XG4gIH1cbiAgcHVibGljIHB1dFNvdXJjZSh2YWx1ZTogQ29uZmlnQ29uZmlnUnVsZVNvdXJjZSkge1xuICAgIHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHNvdXJjZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2UuaW50ZXJuYWxWYWx1ZTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2Rlc2NyaXB0aW9uKSxcbiAgICAgIGlucHV0X3BhcmFtZXRlcnM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lucHV0UGFyYW1ldGVycyksXG4gICAgICBtYXhpbXVtX2V4ZWN1dGlvbl9mcmVxdWVuY3k6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX21heGltdW1FeGVjdXRpb25GcmVxdWVuY3kpLFxuICAgICAgbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5fbmFtZSksXG4gICAgICB0YWdzOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzKSxcbiAgICAgIHRhZ3NfYWxsOiBjZGt0Zi5oYXNoTWFwcGVyKGNka3RmLmFueVRvVGVycmFmb3JtKSh0aGlzLl90YWdzQWxsKSxcbiAgICAgIHNjb3BlOiBjb25maWdDb25maWdSdWxlU2NvcGVUb1RlcnJhZm9ybSh0aGlzLl9zY29wZS5pbnRlcm5hbFZhbHVlKSxcbiAgICAgIHNvdXJjZTogY29uZmlnQ29uZmlnUnVsZVNvdXJjZVRvVGVycmFmb3JtKHRoaXMuX3NvdXJjZS5pbnRlcm5hbFZhbHVlKSxcbiAgICB9O1xuICB9XG59XG4iXX0=